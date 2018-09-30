// Compiled by ClojureScript 1.10.339
goog.provide("cljs.spec");
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if(((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null))))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__8672__auto__ = (((spec == null))?null:spec);
var m__8673__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__8672__auto__)]);
if(!((m__8673__auto__ == null))){
return m__8673__auto__.call(null,spec,x);
} else {
var m__8673__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__8673__auto____$1 == null))){
return m__8673__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if(((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null))))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__8672__auto__ = (((spec == null))?null:spec);
var m__8673__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__8672__auto__)]);
if(!((m__8673__auto__ == null))){
return m__8673__auto__.call(null,spec,y);
} else {
var m__8673__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__8673__auto____$1 == null))){
return m__8673__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if(((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null))))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__8672__auto__ = (((spec == null))?null:spec);
var m__8673__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__8672__auto__)]);
if(!((m__8673__auto__ == null))){
return m__8673__auto__.call(null,spec,path,via,in$,x);
} else {
var m__8673__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__8673__auto____$1 == null))){
return m__8673__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if(((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null))))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__8672__auto__ = (((spec == null))?null:spec);
var m__8673__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__8672__auto__)]);
if(!((m__8673__auto__ == null))){
return m__8673__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__8673__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__8673__auto____$1 == null))){
return m__8673__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if(((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null))))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__8672__auto__ = (((spec == null))?null:spec);
var m__8673__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__8672__auto__)]);
if(!((m__8673__auto__ == null))){
return m__8673__auto__.call(null,spec,gfn);
} else {
var m__8673__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__8673__auto____$1 == null))){
return m__8673__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if(((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null))))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__8672__auto__ = (((spec == null))?null:spec);
var m__8673__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__8672__auto__)]);
if(!((m__8673__auto__ == null))){
return m__8673__auto__.call(null,spec);
} else {
var m__8673__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__8673__auto____$1 == null))){
return m__8673__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.registry_ref !== 'undefined')){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.deep_resolve = (function cljs$spec$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
var G__434 = cljs.core.get.call(null,reg,spec);
spec = G__434;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if(!(cljs.core.ident_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.spec.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__8070__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
if(((!((x == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$Spec$))))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__8052__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__8052__auto__)){
return x;
} else {
return and__8052__auto__;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",(-1902005006)),name);
} else {
if(((!((spec == null)))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",(-1902005006)),name));
} else {
return null;
}
}
}
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",(-1902005006)).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",(-1902005006)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__8070__auto__ = (function (){var and__8052__auto__ = cljs.core.ident_QMARK_.call(null,spec_or_k);
if(and__8052__auto__){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__8052__auto__;
}
})();
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
var or__8070__auto____$1 = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__8070__auto____$1)){
return or__8070__auto____$1;
} else {
var or__8070__auto____$2 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__8070__auto____$2)){
return or__8070__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__8070__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.Specize = function(){};

cljs.spec.specize_STAR_ = (function cljs$spec$specize_STAR_(var_args){
var G__439 = arguments.length;
switch (G__439) {
case (1):
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if(((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$1 == null))))){
return _.cljs$spec$Specize$specize_STAR_$arity$1(_);
} else {
var x__8672__auto__ = (((_ == null))?null:_);
var m__8673__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__8672__auto__)]);
if(!((m__8673__auto__ == null))){
return m__8673__auto__.call(null,_);
} else {
var m__8673__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__8673__auto____$1 == null))){
return m__8673__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if(((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$2 == null))))){
return _.cljs$spec$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__8672__auto__ = (((_ == null))?null:_);
var m__8673__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__8672__auto__)]);
if(!((m__8673__auto__ == null))){
return m__8673__auto__.call(null,_,form);
} else {
var m__8673__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__8673__auto____$1 == null))){
return m__8673__auto____$1.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$lang$maxFixedArity = (2);


cljs.core.Keyword.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,s__$1));
});

goog.object.set(cljs.spec.Specize,"_",true);

goog.object.set(cljs.spec.specize_STAR_,"_",(function() {
var G__441 = null;
var G__441__1 = (function (o){
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",(-1620309582)),o,null,null);
});
var G__441__2 = (function (o,form){
return cljs.spec.spec_impl.call(null,form,o,null,null);
});
G__441 = function(o,form){
switch(arguments.length){
case 1:
return G__441__1.call(this,o);
case 2:
return G__441__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__441.cljs$core$IFn$_invoke$arity$1 = G__441__1;
G__441.cljs$core$IFn$_invoke$arity$2 = G__441__2;
return G__441;
})()
);
cljs.spec.specize = (function cljs$spec$specize(var_args){
var G__443 = arguments.length;
switch (G__443) {
case (1):
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__8070__auto__ = cljs.spec.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return cljs.spec.specize_STAR_.call(null,s);
}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__8070__auto__ = cljs.spec.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return cljs.spec.specize_STAR_.call(null,s,form);
}
});

cljs.spec.specize.cljs$lang$maxFixedArity = (2);

/**
 * tests the validity of a conform return value
 */
cljs.spec.invalid_QMARK_ = (function cljs$spec$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537)),ret);
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__8052__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__8052__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__8052__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if(((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",(465265323),null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",(-950237169),null)], null),cljs.core.second.call(null,form__$1))))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = (form instanceof cljs.core.Symbol);
if(and__8052__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__8052__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",(-432034727)),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__7879__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__7879__auto__)){
var probs = temp__7879__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",(608491678)),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__7824__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__7824__auto__)){
var name = temp__7824__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.explain_printer = (function cljs$spec$explain_printer(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__9027__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_445_485 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_446_486 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_445_485,_STAR_print_fn_STAR_446_486,sb__9027__auto__){
return (function (x__9028__auto__){
return sb__9027__auto__.append(x__9028__auto__);
});})(_STAR_print_newline_STAR_445_485,_STAR_print_fn_STAR_446_486,sb__9027__auto__))
;

try{var seq__447_487 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",(608491678)).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__448_488 = null;
var count__449_489 = (0);
var i__450_490 = (0);
while(true){
if((i__450_490 < count__449_489)){
var map__451_491 = cljs.core._nth.call(null,chunk__448_488,i__450_490);
var map__451_492__$1 = ((((!((map__451_491 == null)))?(((((map__451_491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__451_491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451_491):map__451_491);
var prob_493 = map__451_492__$1;
var path_494 = cljs.core.get.call(null,map__451_492__$1,new cljs.core.Keyword(null,"path","path",(-188191168)));
var pred_495 = cljs.core.get.call(null,map__451_492__$1,new cljs.core.Keyword(null,"pred","pred",(1927423397)));
var val_496 = cljs.core.get.call(null,map__451_492__$1,new cljs.core.Keyword(null,"val","val",(128701612)));
var reason_497 = cljs.core.get.call(null,map__451_492__$1,new cljs.core.Keyword(null,"reason","reason",(-2070751759)));
var via_498 = cljs.core.get.call(null,map__451_492__$1,new cljs.core.Keyword(null,"via","via",(-1904457336)));
var in_499 = cljs.core.get.call(null,map__451_492__$1,new cljs.core.Keyword(null,"in","in",(-1531184865)));
if(cljs.core.empty_QMARK_.call(null,in_499)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_499),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_496);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_498)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_498)));
}

if(cljs.core.empty_QMARK_.call(null,path_494)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_494));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_495));

if(cljs.core.truth_(reason_497)){
cljs.core.print.call(null,", ",reason_497);
} else {
}

var seq__453_500 = cljs.core.seq.call(null,prob_493);
var chunk__454_501 = null;
var count__455_502 = (0);
var i__456_503 = (0);
while(true){
if((i__456_503 < count__455_502)){
var vec__457_504 = cljs.core._nth.call(null,chunk__454_501,i__456_503);
var k_505 = cljs.core.nth.call(null,vec__457_504,(0),null);
var v_506 = cljs.core.nth.call(null,vec__457_504,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",(-188191168)),null,new cljs.core.Keyword(null,"pred","pred",(1927423397)),null,new cljs.core.Keyword(null,"val","val",(128701612)),null,new cljs.core.Keyword(null,"reason","reason",(-2070751759)),null,new cljs.core.Keyword(null,"via","via",(-1904457336)),null,new cljs.core.Keyword(null,"in","in",(-1531184865)),null], null), null).call(null,k_505))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_505)," ");

cljs.core.pr.call(null,v_506);
}


var G__507 = seq__453_500;
var G__508 = chunk__454_501;
var G__509 = count__455_502;
var G__510 = (i__456_503 + (1));
seq__453_500 = G__507;
chunk__454_501 = G__508;
count__455_502 = G__509;
i__456_503 = G__510;
continue;
} else {
var temp__7879__auto___511 = cljs.core.seq.call(null,seq__453_500);
if(temp__7879__auto___511){
var seq__453_512__$1 = temp__7879__auto___511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__453_512__$1)){
var c__8838__auto___513 = cljs.core.chunk_first.call(null,seq__453_512__$1);
var G__514 = cljs.core.chunk_rest.call(null,seq__453_512__$1);
var G__515 = c__8838__auto___513;
var G__516 = cljs.core.count.call(null,c__8838__auto___513);
var G__517 = (0);
seq__453_500 = G__514;
chunk__454_501 = G__515;
count__455_502 = G__516;
i__456_503 = G__517;
continue;
} else {
var vec__460_518 = cljs.core.first.call(null,seq__453_512__$1);
var k_519 = cljs.core.nth.call(null,vec__460_518,(0),null);
var v_520 = cljs.core.nth.call(null,vec__460_518,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",(-188191168)),null,new cljs.core.Keyword(null,"pred","pred",(1927423397)),null,new cljs.core.Keyword(null,"val","val",(128701612)),null,new cljs.core.Keyword(null,"reason","reason",(-2070751759)),null,new cljs.core.Keyword(null,"via","via",(-1904457336)),null,new cljs.core.Keyword(null,"in","in",(-1531184865)),null], null), null).call(null,k_519))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_519)," ");

cljs.core.pr.call(null,v_520);
}


var G__521 = cljs.core.next.call(null,seq__453_512__$1);
var G__522 = null;
var G__523 = (0);
var G__524 = (0);
seq__453_500 = G__521;
chunk__454_501 = G__522;
count__455_502 = G__523;
i__456_503 = G__524;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__525 = seq__447_487;
var G__526 = chunk__448_488;
var G__527 = count__449_489;
var G__528 = (i__450_490 + (1));
seq__447_487 = G__525;
chunk__448_488 = G__526;
count__449_489 = G__527;
i__450_490 = G__528;
continue;
} else {
var temp__7879__auto___529 = cljs.core.seq.call(null,seq__447_487);
if(temp__7879__auto___529){
var seq__447_530__$1 = temp__7879__auto___529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__447_530__$1)){
var c__8838__auto___531 = cljs.core.chunk_first.call(null,seq__447_530__$1);
var G__532 = cljs.core.chunk_rest.call(null,seq__447_530__$1);
var G__533 = c__8838__auto___531;
var G__534 = cljs.core.count.call(null,c__8838__auto___531);
var G__535 = (0);
seq__447_487 = G__532;
chunk__448_488 = G__533;
count__449_489 = G__534;
i__450_490 = G__535;
continue;
} else {
var map__463_536 = cljs.core.first.call(null,seq__447_530__$1);
var map__463_537__$1 = ((((!((map__463_536 == null)))?(((((map__463_536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__463_536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__463_536):map__463_536);
var prob_538 = map__463_537__$1;
var path_539 = cljs.core.get.call(null,map__463_537__$1,new cljs.core.Keyword(null,"path","path",(-188191168)));
var pred_540 = cljs.core.get.call(null,map__463_537__$1,new cljs.core.Keyword(null,"pred","pred",(1927423397)));
var val_541 = cljs.core.get.call(null,map__463_537__$1,new cljs.core.Keyword(null,"val","val",(128701612)));
var reason_542 = cljs.core.get.call(null,map__463_537__$1,new cljs.core.Keyword(null,"reason","reason",(-2070751759)));
var via_543 = cljs.core.get.call(null,map__463_537__$1,new cljs.core.Keyword(null,"via","via",(-1904457336)));
var in_544 = cljs.core.get.call(null,map__463_537__$1,new cljs.core.Keyword(null,"in","in",(-1531184865)));
if(cljs.core.empty_QMARK_.call(null,in_544)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_544),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_541);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_543)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_543)));
}

if(cljs.core.empty_QMARK_.call(null,path_539)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_539));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_540));

if(cljs.core.truth_(reason_542)){
cljs.core.print.call(null,", ",reason_542);
} else {
}

var seq__465_545 = cljs.core.seq.call(null,prob_538);
var chunk__466_546 = null;
var count__467_547 = (0);
var i__468_548 = (0);
while(true){
if((i__468_548 < count__467_547)){
var vec__469_549 = cljs.core._nth.call(null,chunk__466_546,i__468_548);
var k_550 = cljs.core.nth.call(null,vec__469_549,(0),null);
var v_551 = cljs.core.nth.call(null,vec__469_549,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",(-188191168)),null,new cljs.core.Keyword(null,"pred","pred",(1927423397)),null,new cljs.core.Keyword(null,"val","val",(128701612)),null,new cljs.core.Keyword(null,"reason","reason",(-2070751759)),null,new cljs.core.Keyword(null,"via","via",(-1904457336)),null,new cljs.core.Keyword(null,"in","in",(-1531184865)),null], null), null).call(null,k_550))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_550)," ");

cljs.core.pr.call(null,v_551);
}


var G__552 = seq__465_545;
var G__553 = chunk__466_546;
var G__554 = count__467_547;
var G__555 = (i__468_548 + (1));
seq__465_545 = G__552;
chunk__466_546 = G__553;
count__467_547 = G__554;
i__468_548 = G__555;
continue;
} else {
var temp__7879__auto___556__$1 = cljs.core.seq.call(null,seq__465_545);
if(temp__7879__auto___556__$1){
var seq__465_557__$1 = temp__7879__auto___556__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__465_557__$1)){
var c__8838__auto___558 = cljs.core.chunk_first.call(null,seq__465_557__$1);
var G__559 = cljs.core.chunk_rest.call(null,seq__465_557__$1);
var G__560 = c__8838__auto___558;
var G__561 = cljs.core.count.call(null,c__8838__auto___558);
var G__562 = (0);
seq__465_545 = G__559;
chunk__466_546 = G__560;
count__467_547 = G__561;
i__468_548 = G__562;
continue;
} else {
var vec__472_563 = cljs.core.first.call(null,seq__465_557__$1);
var k_564 = cljs.core.nth.call(null,vec__472_563,(0),null);
var v_565 = cljs.core.nth.call(null,vec__472_563,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",(-188191168)),null,new cljs.core.Keyword(null,"pred","pred",(1927423397)),null,new cljs.core.Keyword(null,"val","val",(128701612)),null,new cljs.core.Keyword(null,"reason","reason",(-2070751759)),null,new cljs.core.Keyword(null,"via","via",(-1904457336)),null,new cljs.core.Keyword(null,"in","in",(-1531184865)),null], null), null).call(null,k_564))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_564)," ");

cljs.core.pr.call(null,v_565);
}


var G__566 = cljs.core.next.call(null,seq__465_557__$1);
var G__567 = null;
var G__568 = (0);
var G__569 = (0);
seq__465_545 = G__566;
chunk__466_546 = G__567;
count__467_547 = G__568;
i__468_548 = G__569;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__570 = cljs.core.next.call(null,seq__447_530__$1);
var G__571 = null;
var G__572 = (0);
var G__573 = (0);
seq__447_487 = G__570;
chunk__448_488 = G__571;
count__449_489 = G__572;
i__450_490 = G__573;
continue;
}
} else {
}
}
break;
}

var seq__475_574 = cljs.core.seq.call(null,ed);
var chunk__476_575 = null;
var count__477_576 = (0);
var i__478_577 = (0);
while(true){
if((i__478_577 < count__477_576)){
var vec__479_578 = cljs.core._nth.call(null,chunk__476_575,i__478_577);
var k_579 = cljs.core.nth.call(null,vec__479_578,(0),null);
var v_580 = cljs.core.nth.call(null,vec__479_578,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",(608491678)),null], null), null).call(null,k_579))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_579)," ");

cljs.core.pr.call(null,v_580);

cljs.core.newline.call(null);
}


var G__581 = seq__475_574;
var G__582 = chunk__476_575;
var G__583 = count__477_576;
var G__584 = (i__478_577 + (1));
seq__475_574 = G__581;
chunk__476_575 = G__582;
count__477_576 = G__583;
i__478_577 = G__584;
continue;
} else {
var temp__7879__auto___585 = cljs.core.seq.call(null,seq__475_574);
if(temp__7879__auto___585){
var seq__475_586__$1 = temp__7879__auto___585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__475_586__$1)){
var c__8838__auto___587 = cljs.core.chunk_first.call(null,seq__475_586__$1);
var G__588 = cljs.core.chunk_rest.call(null,seq__475_586__$1);
var G__589 = c__8838__auto___587;
var G__590 = cljs.core.count.call(null,c__8838__auto___587);
var G__591 = (0);
seq__475_574 = G__588;
chunk__476_575 = G__589;
count__477_576 = G__590;
i__478_577 = G__591;
continue;
} else {
var vec__482_592 = cljs.core.first.call(null,seq__475_586__$1);
var k_593 = cljs.core.nth.call(null,vec__482_592,(0),null);
var v_594 = cljs.core.nth.call(null,vec__482_592,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",(608491678)),null], null), null).call(null,k_593))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_593)," ");

cljs.core.pr.call(null,v_594);

cljs.core.newline.call(null);
}


var G__595 = cljs.core.next.call(null,seq__475_586__$1);
var G__596 = null;
var G__597 = (0);
var G__598 = (0);
seq__475_574 = G__595;
chunk__476_575 = G__596;
count__477_576 = G__597;
i__478_577 = G__598;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_446_486;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_445_485;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9027__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec._STAR_explain_out_STAR_ = cljs.spec.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
return cljs.spec._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__9027__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_599_601 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_600_602 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_599_601,_STAR_print_fn_STAR_600_602,sb__9027__auto__){
return (function (x__9028__auto__){
return sb__9027__auto__.append(x__9028__auto__);
});})(_STAR_print_newline_STAR_599_601,_STAR_print_fn_STAR_600_602,sb__9027__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_600_602;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_599_601;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9027__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__7824__auto__ = (function (){var or__8070__auto__ = (function (){var temp__7879__auto__ = (function (){var or__8070__auto__ = cljs.core.get.call(null,overrides,(function (){var or__8070__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__7879__auto__)){
var gfn = temp__7879__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__7824__auto__)){
var g = temp__7824__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__7824__auto__,spec__$1){
return (function (p1__39_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__39_SHARP_);
});})(g,temp__7824__auto__,spec__$1))
,g,(100));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var G__604 = arguments.length;
switch (G__604) {
case (1):
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",(-630131086)),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = (2);

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.ident_QMARK_.call(null,k);
if(and__8052__auto__){
return cljs.core.namespace.call(null,k);
} else {
return and__8052__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__8070__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
var or__8070__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__8070__auto____$1)){
return or__8070__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,cljs.spec.with_name.call(null,spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__7879__auto__ = new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__7879__auto__)){
var arg_spec = temp__7879__auto__;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform.call(null,arg_spec,args)))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",(1315556576))], null),(function (){var temp__7824__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__7824__auto__)){
var name = temp__7824__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",(-367019609)),args);
throw (new Error(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.__GT_sym.call(null,v))," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9027__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_606_608 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_607_609 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_606_608,_STAR_print_fn_STAR_607_609,sb__9027__auto__,ed,arg_spec,temp__7879__auto__,specs){
return (function (x__9028__auto__){
return sb__9027__auto__.append(x__9028__auto__);
});})(_STAR_print_newline_STAR_606_608,_STAR_print_fn_STAR_607_609,sb__9027__auto__,ed,arg_spec,temp__7879__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_607_609;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_606_608;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9027__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return (((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",(-630131086)).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k)));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__8070__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var G__611 = arguments.length;
switch (G__611) {
case (3):
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__7824__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__7824__auto__)){
var spec = temp__7824__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,form))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = (4);

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var G__614 = arguments.length;
switch (G__614) {
case (2):
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.specize.call(null,spec);
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.specize.call(null,spec,form);
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = (3);

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.pvalid_QMARK_ = (function cljs$spec$pvalid_QMARK_(var_args){
var G__617 = arguments.length;
switch (G__617) {
case (2):
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,pred,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",(-1620309582)))));
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,pred,x,form)));
});

cljs.spec.pvalid_QMARK_.cljs$lang$maxFixedArity = (3);

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__7824__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__7824__auto__)){
var name = temp__7824__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",(128701612)),v,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__619){
var map__620 = p__619;
var map__620__$1 = ((((!((map__620 == null)))?(((((map__620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__620):map__620);
var argm = map__620__$1;
var opt = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"opt","opt",(-794706369)));
var req_un = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"req-un","req-un",(1074571008)));
var opt_un = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)));
var gfn = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"gfn","gfn",(791517474)));
var pred_exprs = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",(1792271395)));
var keys_pred = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",(858984739)));
var opt_keys = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",(1262688261)));
var req_specs = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"req-specs","req-specs",(553962313)));
var req = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"req","req",(-326448303)));
var req_keys = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"req-keys","req-keys",(514319221)));
var opt_specs = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",(-384905450)));
var pred_forms = cljs.core.get.call(null,map__620__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",(172611832)));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__40_SHARP_){
var or__8070__auto__ = k__GT_s.call(null,p1__40_SHARP_);
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return p1__40_SHARP_;
}
});})(k__GT_s,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec622 = (function (keys__GT_specnames,opt,req_un,opt_un,map__620,gfn,pred_exprs,keys_pred,argm,opt_keys,p__619,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta623){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.map__620 = map__620;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.p__619 = p__619;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta623 = meta623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_624,meta623__$1){
var self__ = this;
var _624__$1 = this;
return (new cljs.spec.t_cljs$spec622(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.map__620,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.p__619,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta623__$1));
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_624){
var self__ = this;
var _624__$1 = this;
return self__.meta623;
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec622.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec622.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec622.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec622.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec622.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__631 = m;
var vec__632 = G__631;
var seq__633 = cljs.core.seq.call(null,vec__632);
var first__634 = cljs.core.first.call(null,seq__633);
var seq__633__$1 = cljs.core.next.call(null,seq__633);
var vec__635 = first__634;
var k = cljs.core.nth.call(null,vec__635,(0),null);
var v = cljs.core.nth.call(null,vec__635,(1),null);
var ks = seq__633__$1;
var keys = vec__632;
var ret__$1 = ret;
var G__631__$1 = G__631;
while(true){
var ret__$2 = ret__$1;
var vec__638 = G__631__$1;
var seq__639 = cljs.core.seq.call(null,vec__638);
var first__640 = cljs.core.first.call(null,seq__639);
var seq__639__$1 = cljs.core.next.call(null,seq__639);
var vec__641 = first__640;
var k__$1 = cljs.core.nth.call(null,vec__641,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__641,(1),null);
var ks__$1 = seq__639__$1;
var keys__$1 = vec__638;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__7824__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__7824__auto__)){
var s = temp__7824__auto__;
var cv = cljs.spec.conform.call(null,s,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
var G__659 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__660 = ks__$1;
ret__$1 = G__659;
G__631__$1 = G__660;
continue;
}
} else {
var G__661 = ret__$2;
var G__662 = ks__$1;
ret__$1 = G__661;
G__631__$1 = G__662;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
}
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec622.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__647 = cljs.core.keys.call(null,m);
var vec__648 = G__647;
var seq__649 = cljs.core.seq.call(null,vec__648);
var first__650 = cljs.core.first.call(null,seq__649);
var seq__649__$1 = cljs.core.next.call(null,seq__649);
var k = first__650;
var ks = seq__649__$1;
var keys = vec__648;
var ret__$1 = ret;
var G__647__$1 = G__647;
while(true){
var ret__$2 = ret__$1;
var vec__651 = G__647__$1;
var seq__652 = cljs.core.seq.call(null,vec__651);
var first__653 = cljs.core.first.call(null,seq__652);
var seq__652__$1 = cljs.core.next.call(null,seq__652);
var k__$1 = first__653;
var ks__$1 = seq__652__$1;
var keys__$1 = vec__651;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__663 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__664 = ks__$1;
ret__$1 = G__663;
G__647__$1 = G__664;
continue;
} else {
var G__665 = ret__$2;
var G__666 = ks__$1;
ret__$1 = G__665;
G__647__$1 = G__666;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec622.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),new cljs.core.Symbol(null,"map?","map?",(-1780568534),null),new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__7879__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__7879__auto__){
var probs = temp__7879__auto__;
return cljs.core.map.call(null,((function (probs,temp__7879__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__41_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),p1__41_SHARP_,new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null));
});})(probs,temp__7879__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__654){
var vec__655 = p__654;
var k = cljs.core.nth.call(null,vec__655,(0),null);
var v = cljs.core.nth.call(null,vec__655,(1),null);
if(cljs.core.truth_((function (){var or__8070__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k)));
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.spec.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec622.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__42_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__42_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec622.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",(791517474)),gfn__$1));
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec622.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",(-927379584),null),(function (){var G__658 = cljs.core.PersistentVector.EMPTY;
var G__658__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__658,new cljs.core.Keyword(null,"req","req",(-326448303)),self__.req):G__658);
var G__658__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__658__$1,new cljs.core.Keyword(null,"opt","opt",(-794706369)),self__.opt):G__658__$1);
var G__658__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__658__$2,new cljs.core.Keyword(null,"req-un","req-un",(1074571008)),self__.req_un):G__658__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__658__$3,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)),self__.opt_un);
} else {
return G__658__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec622.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",(1791294693),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"map__620","map__620",(-749794295),null),new cljs.core.Symbol(null,"gfn","gfn",(-1862918295),null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",(-862164374),null),new cljs.core.Symbol(null,"keys-pred","keys-pred",(-1795451030),null),new cljs.core.Symbol(null,"argm","argm",(-181546357),null),new cljs.core.Symbol(null,"opt-keys","opt-keys",(-1391747508),null),new cljs.core.Symbol(null,"p__619","p__619",(-81192562),null),new cljs.core.Symbol(null,"req-specs","req-specs",(-2100473456),null),new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"req-keys","req-keys",(-2140116548),null),new cljs.core.Symbol(null,"opt-specs","opt-specs",(1255626077),null),new cljs.core.Symbol(null,"k->s","k->s",(-1685112801),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null),new cljs.core.Symbol(null,"meta623","meta623",(-1362595003),null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec622.cljs$lang$type = true;

cljs.spec.t_cljs$spec622.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec622";

cljs.spec.t_cljs$spec622.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec622");
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

/**
 * Positional factory function for cljs.spec/t_cljs$spec622.
 */
cljs.spec.__GT_t_cljs$spec622 = ((function (k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec622(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,map__620__$2,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,p__619__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta623){
return (new cljs.spec.t_cljs$spec622(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,map__620__$2,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,p__619__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta623));
});})(k__GT_s,keys__GT_specnames,id,map__620,map__620__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec622(keys__GT_specnames,opt,req_un,opt_un,map__620__$1,gfn,pred_exprs,keys_pred,argm,opt_keys,p__619,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var G__668 = arguments.length;
switch (G__668) {
case (4):
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__669 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__669,gfn);
} else {
return G__669;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__670 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__670,gfn);
} else {
return G__670;
}
} else {
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec671 = (function (form,pred,gfn,cpred_QMARK_,unc,meta672){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta672 = meta672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_673,meta672__$1){
var self__ = this;
var _673__$1 = this;
return (new cljs.spec.t_cljs$spec671(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta672__$1));
});

cljs.spec.t_cljs$spec671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_673){
var self__ = this;
var _673__$1 = this;
return self__.meta672;
});

cljs.spec.t_cljs$spec671.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec671.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec671.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec671.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec671.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
}
}
});

cljs.spec.t_cljs$spec671.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec671.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec671.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec671.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec671.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gfn","gfn",(-1862918295),null),new cljs.core.Symbol(null,"cpred?","cpred?",(35589515),null),new cljs.core.Symbol(null,"unc","unc",(-465250751),null),new cljs.core.Symbol(null,"meta672","meta672",(-490304354),null)], null);
});

cljs.spec.t_cljs$spec671.cljs$lang$type = true;

cljs.spec.t_cljs$spec671.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec671";

cljs.spec.t_cljs$spec671.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec671");
});

/**
 * Positional factory function for cljs.spec/t_cljs$spec671.
 */
cljs.spec.__GT_t_cljs$spec671 = (function cljs$spec$__GT_t_cljs$spec671(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta672){
return (new cljs.spec.t_cljs$spec671(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta672));
});

}

return (new cljs.spec.t_cljs$spec671(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = (5);

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var G__676 = arguments.length;
switch (G__676) {
case (3):
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__43_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__8052__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__43_SHARP_));
if(cljs.core.truth_(and__8052__auto__)){
return mm.call(null,p1__43_SHARP_);
} else {
return and__8052__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__44_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__44_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__45_SHARP_,p2__46_SHARP_){
return cljs.core.assoc.call(null,p1__45_SHARP_,retag,p2__46_SHARP_);
});})(id,predx,dval))
:retag);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec677 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta678){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta678 = meta678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_679,meta678__$1){
var self__ = this;
var _679__$1 = this;
return (new cljs.spec.t_cljs$spec677(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta678__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_679){
var self__ = this;
var _679__$1 = this;
return self__.meta678;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec677.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec677.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec677.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec677.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec677.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__7824__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__7824__auto__)){
var pred = temp__7824__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec677.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__7824__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__7824__auto__)){
var pred = temp__7824__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec677.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__7824__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__7824__auto__)){
var pred = temp__7824__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",(-188191168)),path__$1,new cljs.core.Keyword(null,"pred","pred",(1927423397)),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"reason","reason",(-2070751759)),"no method",new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec677.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__680){
var vec__681 = p__680;
var k = cljs.core.nth.call(null,vec__681,(0),null);
var f = cljs.core.nth.call(null,vec__681,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__681,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__681,k,f,___$1,id,predx,dval,tag){
return (function (p1__47_SHARP_){
return self__.tag.call(null,p1__47_SHARP_,k);
});})(rmap__$1,p,vec__681,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,(new cljs.core.List(null,new cljs.core.Symbol(null,"method","method",(1696235119),null),(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null))));
});})(rmap__$1,p,vec__681,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__684){
var vec__685 = p__684;
var k = cljs.core.nth.call(null,vec__685,(0),null);
return cljs.spec.invalid_QMARK_.call(null,k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec677.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec677.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",(-2053297814),null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),(new cljs.core.List(null,self__.retag,null,(1),null))));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec677.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"mmvar","mmvar",(-1714325675),null),new cljs.core.Symbol(null,"retag","retag",(528972725),null),new cljs.core.Symbol(null,"gfn","gfn",(-1862918295),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"predx","predx",(2063470948),null),new cljs.core.Symbol(null,"dval","dval",(835211877),null),new cljs.core.Symbol(null,"tag","tag",(350170304),null),new cljs.core.Symbol(null,"meta678","meta678",(1532355762),null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec677.cljs$lang$type = true;

cljs.spec.t_cljs$spec677.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec677";

cljs.spec.t_cljs$spec677.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec677");
});})(id,predx,dval,tag))
;

/**
 * Positional factory function for cljs.spec/t_cljs$spec677.
 */
cljs.spec.__GT_t_cljs$spec677 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec677(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta678){
return (new cljs.spec.t_cljs$spec677(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta678));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec677(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = (4);

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var G__690 = arguments.length;
switch (G__690) {
case (2):
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec691 = (function (forms,preds,gfn,specs,cnt,meta692){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta692 = meta692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_693,meta692__$1){
var self__ = this;
var _693__$1 = this;
return (new cljs.spec.t_cljs$spec691(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta692__$1));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_693){
var self__ = this;
var _693__$1 = this;
return self__.meta692;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec691.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec691.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec691.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec691.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec691.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if(!(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
var G__695 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__696 = (i + (1));
ret = G__695;
i = G__696;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec691.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__697 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__698 = (i + (1));
ret = G__697;
i = G__698;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec691.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),new cljs.core.Symbol(null,"vector?","vector?",(-61367869),null),new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",(-921270233),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",(-950237169),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,self__.preds),null,(1),null)))),new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec691.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec691.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec691.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",(500419708),null),null,(1),null)),self__.forms));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec691.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null),new cljs.core.Symbol(null,"gfn","gfn",(-1862918295),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null),new cljs.core.Symbol(null,"cnt","cnt",(1924510325),null),new cljs.core.Symbol(null,"meta692","meta692",(1805252339),null)], null);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec691.cljs$lang$type = true;

cljs.spec.t_cljs$spec691.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec691";

cljs.spec.t_cljs$spec691.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec691");
});})(specs,cnt))
;

/**
 * Positional factory function for cljs.spec/t_cljs$spec691.
 */
cljs.spec.__GT_t_cljs$spec691 = ((function (specs,cnt){
return (function cljs$spec$__GT_t_cljs$spec691(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta692){
return (new cljs.spec.t_cljs$spec691(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta692));
});})(specs,cnt))
;

}

return (new cljs.spec.t_cljs$spec691(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = (3);

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x699 = v;
x699.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x699.cljs$core$IMapEntry$_key$arity$1 = ((function (x699){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x699))
;

x699.cljs$core$IMapEntry$_val$arity$1 = ((function (x699){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x699))
;

return x699;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__700 = cljs.core.count.call(null,preds);
switch (G__700) {
case (2):
return ((function (G__700,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__700,id,kps,specs))

break;
case (3):
return ((function (G__700,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
var ret__$2 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$2))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(2)),ret__$2], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__700,id,kps,specs))

break;
default:
return ((function (G__700,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.conform_STAR_.call(null,spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var G__709 = (i + (1));
i = G__709;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
}
break;
}
});
;})(G__700,id,kps,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec701 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec701 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta702){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta702 = meta702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_703,meta702__$1){
var self__ = this;
var _703__$1 = this;
return (new cljs.spec.t_cljs$spec701(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta702__$1));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_703){
var self__ = this;
var _703__$1 = this;
return self__.meta702;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec701.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec701.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec701.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec701.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec701.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec701.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__704){
var self__ = this;
var vec__705 = p__704;
var k = cljs.core.nth.call(null,vec__705,(0),null);
var x = cljs.core.nth.call(null,vec__705,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec701.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec701.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec701.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec701.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",(1200597689),null),null,(1),null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms)));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec701.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",(-1586012071),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null),new cljs.core.Symbol(null,"gfn","gfn",(-1862918295),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"kps","kps",(-1157342767),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null),new cljs.core.Symbol(null,"cform","cform",(1319506748),null),new cljs.core.Symbol(null,"meta702","meta702",(424767170),null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec701.cljs$lang$type = true;

cljs.spec.t_cljs$spec701.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec701";

cljs.spec.t_cljs$spec701.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec701");
});})(id,kps,specs,cform))
;

/**
 * Positional factory function for cljs.spec/t_cljs$spec701.
 */
cljs.spec.__GT_t_cljs$spec701 = ((function (id,kps,specs,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec701(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta702){
return (new cljs.spec.t_cljs$spec701(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta702));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.t_cljs$spec701(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__716 = preds;
var vec__718 = G__716;
var seq__719 = cljs.core.seq.call(null,vec__718);
var first__720 = cljs.core.first.call(null,seq__719);
var seq__719__$1 = cljs.core.next.call(null,seq__719);
var pred = first__720;
var preds__$1 = seq__719__$1;
var G__717 = forms;
var vec__721 = G__717;
var seq__722 = cljs.core.seq.call(null,vec__721);
var first__723 = cljs.core.first.call(null,seq__722);
var seq__722__$1 = cljs.core.next.call(null,seq__722);
var form = first__723;
var forms__$1 = seq__722__$1;
var ret__$1 = ret;
var G__716__$1 = G__716;
var G__717__$1 = G__717;
while(true){
var ret__$2 = ret__$1;
var vec__724 = G__716__$1;
var seq__725 = cljs.core.seq.call(null,vec__724);
var first__726 = cljs.core.first.call(null,seq__725);
var seq__725__$1 = cljs.core.next.call(null,seq__725);
var pred__$1 = first__726;
var preds__$2 = seq__725__$1;
var vec__727 = G__717__$1;
var seq__728 = cljs.core.seq.call(null,vec__727);
var first__729 = cljs.core.first.call(null,seq__728);
var seq__728__$1 = cljs.core.next.call(null,seq__728);
var form__$1 = first__729;
var forms__$2 = seq__728__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,nret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
var G__730 = nret;
var G__731 = preds__$2;
var G__732 = forms__$2;
ret__$1 = G__730;
G__716__$1 = G__731;
G__717__$1 = G__732;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__739 = forms;
var vec__741 = G__739;
var seq__742 = cljs.core.seq.call(null,vec__741);
var first__743 = cljs.core.first.call(null,seq__742);
var seq__742__$1 = cljs.core.next.call(null,seq__742);
var form = first__743;
var forms__$1 = seq__742__$1;
var G__740 = preds;
var vec__744 = G__740;
var seq__745 = cljs.core.seq.call(null,vec__744);
var first__746 = cljs.core.first.call(null,seq__745);
var seq__745__$1 = cljs.core.next.call(null,seq__745);
var pred = first__746;
var preds__$1 = seq__745__$1;
var ret__$1 = ret;
var G__739__$1 = G__739;
var G__740__$1 = G__740;
while(true){
var ret__$2 = ret__$1;
var vec__747 = G__739__$1;
var seq__748 = cljs.core.seq.call(null,vec__747);
var first__749 = cljs.core.first.call(null,seq__748);
var seq__748__$1 = cljs.core.next.call(null,seq__748);
var form__$1 = first__749;
var forms__$2 = seq__748__$1;
var vec__750 = G__740__$1;
var seq__751 = cljs.core.seq.call(null,vec__750);
var first__752 = cljs.core.first.call(null,seq__751);
var seq__751__$1 = cljs.core.next.call(null,seq__751);
var pred__$1 = first__752;
var preds__$2 = seq__751__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,nret))){
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__753 = nret;
var G__754 = forms__$2;
var G__755 = preds__$2;
ret__$1 = G__753;
G__739__$1 = G__754;
G__740__$1 = G__755;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
}),null));
var cform = (function (){var G__756 = cljs.core.count.call(null,preds);
switch (G__756) {
case (2):
return ((function (G__756,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
return cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
;})(G__756,specs))

break;
case (3):
return ((function (G__756,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
return cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});
;})(G__756,specs))

break;
default:
return ((function (G__756,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
var G__761 = nret;
var G__762 = (i + (1));
ret = G__761;
i = G__762;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__756,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec757 = (function (forms,preds,gfn,specs,cform,meta758){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta758 = meta758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_759,meta758__$1){
var self__ = this;
var _759__$1 = this;
return (new cljs.spec.t_cljs$spec757(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta758__$1));
});})(specs,cform))
;

cljs.spec.t_cljs$spec757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_759){
var self__ = this;
var _759__$1 = this;
return self__.meta758;
});})(specs,cform))
;

cljs.spec.t_cljs$spec757.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec757.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec757.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec757.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec757.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

cljs.spec.t_cljs$spec757.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
return (function (p1__49_SHARP_,p2__48_SHARP_){
return cljs.spec.unform.call(null,p2__48_SHARP_,p1__49_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

cljs.spec.t_cljs$spec757.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.t_cljs$spec757.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});})(specs,cform))
;

cljs.spec.t_cljs$spec757.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

cljs.spec.t_cljs$spec757.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null),null,(1),null)),self__.forms));
});})(specs,cform))
;

cljs.spec.t_cljs$spec757.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null),new cljs.core.Symbol(null,"gfn","gfn",(-1862918295),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null),new cljs.core.Symbol(null,"cform","cform",(1319506748),null),new cljs.core.Symbol(null,"meta758","meta758",(1592725491),null)], null);
});})(specs,cform))
;

cljs.spec.t_cljs$spec757.cljs$lang$type = true;

cljs.spec.t_cljs$spec757.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec757";

cljs.spec.t_cljs$spec757.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec757");
});})(specs,cform))
;

/**
 * Positional factory function for cljs.spec/t_cljs$spec757.
 */
cljs.spec.__GT_t_cljs$spec757 = ((function (specs,cform){
return (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec757(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta758){
return (new cljs.spec.t_cljs$spec757(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta758));
});})(specs,cform))
;

}

return (new cljs.spec.t_cljs$spec757(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__8070__auto__ = kfn;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__8070__auto__ = kform;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",(1208130522),null);
}
})();
if(cljs.core.not.call(null,cljs.spec.pvalid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = count;
if(cljs.core.truth_(and__8052__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__8052__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",(-921270233),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",(-950237169),null),null,(1),null)))),null,(1),null)))),new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = (function (){var or__8070__auto__ = min_count;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__8052__auto__)){
return !(((((function (){var or__8070__auto__ = min_count;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__8070__auto__ = max_count;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return (9007199254740991);
}
})()))));
} else {
return and__8052__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null),null,(1),null)),(new cljs.core.List(null,(function (){var or__8070__auto__ = min_count;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return (0);
}
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",(-921270233),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",(-950237169),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,(function (){var or__8070__auto__ = max_count;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return (9007199254740991);
}
})(),null,(1),null)))),new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = distinct;
if(cljs.core.truth_(and__8052__auto__)){
return ((!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x))));
} else {
return and__8052__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),new cljs.core.Symbol(null,"distinct?","distinct?",(-1684357959),null),new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec763 = (function (forms,preds,gfn,meta764){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta764 = meta764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_765,meta764__$1){
var self__ = this;
var _765__$1 = this;
return (new cljs.spec.t_cljs$spec763(self__.forms,self__.preds,self__.gfn,meta764__$1));
});

cljs.spec.t_cljs$spec763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_765){
var self__ = this;
var _765__$1 = this;
return self__.meta764;
});

cljs.spec.t_cljs$spec763.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec763.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec763.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec763.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec763.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__50_SHARP_,p2__51_SHARP_){
return cljs.spec.dt.call(null,p1__50_SHARP_,x,p2__51_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec763.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__52_SHARP_){
return cljs.spec.unform.call(null,p1__52_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec763.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__53_SHARP_,p2__54_SHARP_){
return cljs.spec.explain_1.call(null,p1__53_SHARP_,p2__54_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec763.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__55_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__55_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__56_SHARP_,p2__57_SHARP_){
return cljs.spec.gensub.call(null,p1__56_SHARP_,overrides,path,rmap,p2__57_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec763.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec763.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",(-838422687),null),null,(1),null)),self__.forms));
});

cljs.spec.t_cljs$spec763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null),new cljs.core.Symbol(null,"gfn","gfn",(-1862918295),null),new cljs.core.Symbol(null,"meta764","meta764",(2045810545),null)], null);
});

cljs.spec.t_cljs$spec763.cljs$lang$type = true;

cljs.spec.t_cljs$spec763.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec763";

cljs.spec.t_cljs$spec763.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec763");
});

/**
 * Positional factory function for cljs.spec/t_cljs$spec763.
 */
cljs.spec.__GT_t_cljs$spec763 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec763(forms__$1,preds__$1,gfn__$1,meta764){
return (new cljs.spec.t_cljs$spec763(forms__$1,preds__$1,gfn__$1,meta764));
});

}

return (new cljs.spec.t_cljs$spec763(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var G__767 = arguments.length;
switch (G__767) {
case (3):
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__768,gfn){
var map__769 = p__768;
var map__769__$1 = ((((!((map__769 == null)))?(((((map__769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__769):map__769);
var opts = map__769__$1;
var max_count = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword(null,"max-count","max-count",(1539185305)));
var kfn = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",(293196937)));
var gen_max = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword(null,"gen-max","gen-max",(-793680445)),(20));
var conform_all = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",(-1945029907)));
var conform_keys = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",(-1800041814)));
var distinct = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)));
var kind_form = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",(997489303)));
var gen_into = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword(null,"into","into",(-150836029)),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword(null,"count","count",(2139924085)));
var min_count = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword(null,"min-count","min-count",(1594709013)));
var kind = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword(null,"kind","kind",(-717265803)));
var cpred = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword("cljs.spec","cpred","cljs.spec/cpred",(1439199454)));
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return cljs.spec.specize.call(null,pred);
});})(conform_into,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__58_SHARP_){
return cljs.spec.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__58_SHARP_);
});})(conform_into,spec,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var kfn__$1 = (function (){var or__8070__auto__ = kfn;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return ((function (or__8070__auto__,conform_into,spec,check_QMARK_,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
return i;
});
;})(or__8070__auto__,conform_into,spec,check_QMARK_,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var vec__771 = ((cljs.core.map_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null)], null):((cljs.core.vector_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",(-1550392028),null)], null):((cljs.core.list_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",(-684796618),null)], null):((cljs.core.set_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",(-1176684971),null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",(-745394886),null)], null)
))));
var kindfn = cljs.core.nth.call(null,vec__771,(0),null);
var kindform = cljs.core.nth.call(null,vec__771,(1),null);
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (x){
if(((cljs.core.vector_QMARK_.call(null,x)) && (((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__8052__auto__){
var or__8070__auto__ = (function (){var and__8052__auto____$1 = kind;
if(cljs.core.truth_(and__8052__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__8052__auto____$1;
}
})();
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__8052__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if((((v === cv)) && (cljs.core.not.call(null,conform_keys)))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if(((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || (((cljs.core.not.call(null,conform_into)) && (((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x)))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__59_SHARP_){
return cljs.core.empty.call(null,(function (){var or__8070__auto__ = conform_into;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return p1__59_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec774 = (function (form,max_count,check_QMARK_,p__768,map__769,gfn,gen_max,pred,cpred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,spec,kfn,vec__771,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta775){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.p__768 = p__768;
this.map__769 = map__769;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.distinct = distinct;
this.kindfn = kindfn;
this.spec = spec;
this.kfn = kfn;
this.vec__771 = vec__771;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta775 = meta775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_776,meta775__$1){
var self__ = this;
var _776__$1 = this;
return (new cljs.spec.t_cljs$spec774(self__.form,self__.max_count,self__.check_QMARK_,self__.p__768,self__.map__769,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.distinct,self__.kindfn,self__.spec,self__.kfn,self__.vec__771,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta775__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_776){
var self__ = this;
var _776__$1 = this;
return self__.meta775;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec774.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec774.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec774.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec774.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec774.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__777 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__777,(0),null);
var add = cljs.core.nth.call(null,vec__777,(1),null);
var complete = cljs.core.nth.call(null,vec__777,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__783 = cljs.core.seq.call(null,x);
var vec__784 = G__783;
var seq__785 = cljs.core.seq.call(null,vec__784);
var first__786 = cljs.core.first.call(null,seq__785);
var seq__785__$1 = cljs.core.next.call(null,seq__785);
var v = first__786;
var vs = seq__785__$1;
var vseq = vec__784;
var ret__$1 = ret;
var i__$1 = i;
var G__783__$1 = G__783;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__787 = G__783__$1;
var seq__788 = cljs.core.seq.call(null,vec__787);
var first__789 = cljs.core.first.call(null,seq__788);
var seq__788__$1 = cljs.core.next.call(null,seq__788);
var v__$1 = first__789;
var vs__$1 = seq__788__$1;
var vseq__$1 = vec__787;
if(vseq__$1){
var cv = cljs.spec.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
var G__801 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__802 = (i__$2 + (1));
var G__803 = vs__$1;
ret__$1 = G__801;
i__$1 = G__802;
G__783__$1 = G__803;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__8342__auto__ = (1);
var y__8343__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__8342__auto__ > y__8343__auto__) ? x__8342__auto__ : y__8343__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i)))){
var G__804 = (i + step);
i = G__804;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
}
}
break;
}
} else {
var limit = cljs.spec._STAR_coll_check_limit_STAR_;
var i = (0);
var G__793 = cljs.core.seq.call(null,x);
var vec__794 = G__793;
var seq__795 = cljs.core.seq.call(null,vec__794);
var first__796 = cljs.core.first.call(null,seq__795);
var seq__795__$1 = cljs.core.next.call(null,seq__795);
var v = first__796;
var vs = seq__795__$1;
var vseq = vec__794;
var i__$1 = i;
var G__793__$1 = G__793;
while(true){
var i__$2 = i__$1;
var vec__797 = G__793__$1;
var seq__798 = cljs.core.seq.call(null,vec__797);
var first__799 = cljs.core.first.call(null,seq__798);
var seq__798__$1 = cljs.core.next.call(null,seq__798);
var v__$1 = first__799;
var vs__$1 = seq__798__$1;
var vseq__$1 = vec__797;
if((((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit)))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec__$1,v__$1))){
var G__805 = (i__$2 + (1));
var G__806 = vs__$1;
i__$1 = G__805;
G__793__$1 = G__806;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec774.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec774.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__8070__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__8070__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__8070__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.range.call(null),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec774.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__60_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__60_SHARP_)){
return p1__60_SHARP_;
} else {
return cljs.core.empty.call(null,p1__60_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__61_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__61_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__61_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",(1960422107)),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",(-1824441792)),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",(949370780)),(function (){var or__8070__auto__ = self__.min_count;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",(433034073)),(function (){var or__8070__auto__ = self__.max_count;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
var x__8342__auto__ = self__.gen_max;
var y__8343__auto__ = ((2) * (function (){var or__8070__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__8070__auto____$1)){
return or__8070__auto____$1;
} else {
return (0);
}
})());
return ((x__8342__auto__ > y__8343__auto__) ? x__8342__auto__ : y__8343__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",(-1824441792)),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__8070__auto__ = self__.min_count;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__8070__auto__ = self__.min_count;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return (0);
}
})(),(function (){var or__8070__auto__ = self__.max_count;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
var x__8342__auto__ = self__.gen_max;
var y__8343__auto__ = ((2) * (function (){var or__8070__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__8070__auto____$1)){
return or__8070__auto____$1;
} else {
return (0);
}
})());
return ((x__8342__auto__ > y__8343__auto__) ? x__8342__auto__ : y__8343__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec774.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec774.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",(-1899705480),null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts)));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec774.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"check?","check?",(409539557),null),new cljs.core.Symbol(null,"p__768","p__768",(477826408),null),new cljs.core.Symbol(null,"map__769","map__769",(1771892425),null),new cljs.core.Symbol(null,"gfn","gfn",(-1862918295),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"cpred","cpred",(-540353554),null),new cljs.core.Symbol(null,"kindform","kindform",(839835536),null),new cljs.core.Symbol(null,"conform-keys","conform-keys",(-159510287),null),new cljs.core.Symbol(null,"kind-form","kind-form",(1155997457),null),new cljs.core.Symbol(null,"addcv","addcv",(-1552991247),null),new cljs.core.Symbol(null,"cfns","cfns",(1335482066),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"kindfn","kindfn",(1062796440),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"kfn","kfn",(729311001),null),new cljs.core.Symbol(null,"vec__771","vec__771",(-864283687),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"conform-all","conform-all",(-980179459),null),new cljs.core.Symbol(null,"conform-into","conform-into",(-1039113729),null),new cljs.core.Symbol(null,"meta775","meta775",(-1469157568),null)], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec774.cljs$lang$type = true;

cljs.spec.t_cljs$spec774.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec774";

cljs.spec.t_cljs$spec774.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec774");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

/**
 * Positional factory function for cljs.spec/t_cljs$spec774.
 */
cljs.spec.__GT_t_cljs$spec774 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function cljs$spec$__GT_t_cljs$spec774(form__$1,max_count__$1,check_QMARK___$1,p__768__$1,map__769__$2,gfn__$1,gen_max__$1,pred__$1,cpred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,spec__$1,kfn__$2,vec__771__$1,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta775){
return (new cljs.spec.t_cljs$spec774(form__$1,max_count__$1,check_QMARK___$1,p__768__$1,map__769__$2,gfn__$1,gen_max__$1,pred__$1,cpred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,spec__$1,kfn__$2,vec__771__$1,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta775));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__771,kindfn,kindform,cfns,map__769,map__769__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

}

return (new cljs.spec.t_cljs$spec774(form,max_count,check_QMARK_,p__768,map__769__$1,gfn,gen_max,pred,cpred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,spec,kfn__$1,vec__771,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = (4);

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",(-1753298186)),new cljs.core.Keyword(null,"ret","ret",(-468222814)),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__807){
var map__808 = p__807;
var map__808__$1 = ((((!((map__808 == null)))?(((((map__808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__808):map__808);
var op = cljs.core.get.call(null,map__808__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",(-1753298186)),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__810){
var map__811 = p__810;
var map__811__$1 = ((((!((map__811 == null)))?(((((map__811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__811):map__811);
var vec__812 = cljs.core.get.call(null,map__811__$1,new cljs.core.Keyword(null,"ps","ps",(292358046)));
var seq__813 = cljs.core.seq.call(null,vec__812);
var first__814 = cljs.core.first.call(null,seq__813);
var seq__813__$1 = cljs.core.next.call(null,seq__813);
var p1 = first__814;
var pr = seq__813__$1;
var ps = vec__812;
var vec__815 = cljs.core.get.call(null,map__811__$1,new cljs.core.Keyword(null,"ks","ks",(1900203942)));
var seq__816 = cljs.core.seq.call(null,vec__815);
var first__817 = cljs.core.first.call(null,seq__816);
var seq__816__$1 = cljs.core.next.call(null,seq__816);
var k1 = first__817;
var kr = seq__816__$1;
var ks = vec__815;
var vec__818 = cljs.core.get.call(null,map__811__$1,new cljs.core.Keyword(null,"forms","forms",(2045992350)));
var seq__819 = cljs.core.seq.call(null,vec__818);
var first__820 = cljs.core.first.call(null,seq__819);
var seq__819__$1 = cljs.core.next.call(null,seq__819);
var f1 = first__820;
var fr = seq__819__$1;
var forms = vec__818;
var ret = cljs.core.get.call(null,map__811__$1,new cljs.core.Keyword(null,"ret","ret",(-468222814)));
var rep_PLUS_ = cljs.core.get.call(null,map__811__$1,new cljs.core.Keyword(null,"rep+","rep+",(-281382396)));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",(292358046)),pr,new cljs.core.Keyword(null,"ks","ks",(1900203942)),kr,new cljs.core.Keyword(null,"forms","forms",(2045992350)),fr,new cljs.core.Keyword(null,"ret","ret",(-468222814)),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",(-1959753649)),new cljs.core.Keyword(null,"ps","ps",(292358046)),ps,new cljs.core.Keyword(null,"ret","ret",(-468222814)),ret,new cljs.core.Keyword(null,"ks","ks",(1900203942)),ks,new cljs.core.Keyword(null,"forms","forms",(2045992350)),forms,new cljs.core.Keyword(null,"rep+","rep+",(-281382396)),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__9144__auto__ = [];
var len__9141__auto___823 = arguments.length;
var i__9142__auto___824 = (0);
while(true){
if((i__9142__auto___824 < len__9141__auto___823)){
args__9144__auto__.push((arguments[i__9142__auto___824]));

var G__825 = (i__9142__auto___824 + (1));
i__9142__auto___824 = G__825;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((0) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__9145__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",(292358046)),ps,new cljs.core.Keyword(null,"ret","ret",(-468222814)),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.pcat.cljs$lang$applyTo = (function (seq822){
var self__9133__auto__ = this;
return self__9133__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq822));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",(1900203942)),ks,new cljs.core.Keyword(null,"ps","ps",(292358046)),ps,new cljs.core.Keyword(null,"forms","forms",(2045992350)),forms,new cljs.core.Keyword(null,"ret","ret",(-468222814)),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",(-556916491)),new cljs.core.Keyword(null,"p2","p2",(905500641)),p2,new cljs.core.Keyword(null,"splice","splice",(449588165)),splice,new cljs.core.Keyword(null,"forms","forms",(2045992350)),form,new cljs.core.Keyword(null,"id","id",(-1388402092)),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",(-936759954)),p2,new cljs.core.Keyword(null,"ret","ret",(-468222814)),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",(-936759954)),p1,new cljs.core.Keyword(null,"ret","ret",(-468222814)),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",(292358046)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",(2045992350)),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",(-858366320),null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))),null,(1),null))))),new cljs.core.Keyword(null,"ret","ret",(-468222814)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",(-281382396)),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",(-1217943932)),new cljs.core.Keyword(null,"p1","p1",(-936759954)),re,new cljs.core.Keyword(null,"ps","ps",(292358046)),preds,new cljs.core.Keyword(null,"forms","forms",(2045992350)),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__8070__auto__ = ks;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__62_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__62_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__8070__auto__ = cljs.core.seq.call(null,ks);
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__8070__auto__ = cljs.core.seq.call(null,forms);
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__63_SHARP_){
return cljs.core.nth.call(null,p1__63_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__826 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__829 = cljs.core.nth.call(null,vec__826,(0),null);
var seq__830 = cljs.core.seq.call(null,vec__829);
var first__831 = cljs.core.first.call(null,seq__830);
var seq__830__$1 = cljs.core.next.call(null,seq__830);
var p1 = first__831;
var pr = seq__830__$1;
var ps__$1 = vec__829;
var vec__832 = cljs.core.nth.call(null,vec__826,(1),null);
var k1 = cljs.core.nth.call(null,vec__832,(0),null);
var ks__$1 = vec__832;
var forms__$1 = cljs.core.nth.call(null,vec__826,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",(-1483418131)),new cljs.core.Keyword(null,"ps","ps",(292358046)),ps__$1,new cljs.core.Keyword(null,"ks","ks",(1900203942)),ks__$1,new cljs.core.Keyword(null,"forms","forms",(2045992350)),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__9144__auto__ = [];
var len__9141__auto___836 = arguments.length;
var i__9142__auto___837 = (0);
while(true){
if((i__9142__auto___837 < len__9141__auto___836)){
args__9144__auto__.push((arguments[i__9142__auto___837]));

var G__838 = (i__9142__auto___837 + (1));
i__9142__auto___837 = G__838;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((0) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__9145__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.alts.cljs$lang$applyTo = (function (seq835){
var self__9133__auto__ = this;
return self__9133__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq835));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__8052__auto__ = p1;
if(cljs.core.truth_(and__8052__auto__)){
return p2;
} else {
return and__8052__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__8070__auto__ = p1;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",(-1388402092)),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",(1576652718)))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",(1576652718))], null)),new cljs.core.Keyword(null,"maybe","maybe",(-314397560)),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__8070__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",(1576652718)));
if(or__8070__auto__){
return or__8070__auto__;
} else {
var or__8070__auto____$1 = (function (){var and__8052__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",(-556916491)),null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",(-1959753649)),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__8052__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__8052__auto__;
}
})();
if(cljs.core.truth_(or__8070__auto____$1)){
return or__8070__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__839 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__839__$1 = ((((!((map__839 == null)))?(((((map__839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__839):map__839);
var p__$1 = map__839__$1;
var op = cljs.core.get.call(null,map__839__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)));
var ps = cljs.core.get.call(null,map__839__$1,new cljs.core.Keyword(null,"ps","ps",(292358046)));
var p1 = cljs.core.get.call(null,map__839__$1,new cljs.core.Keyword(null,"p1","p1",(-936759954)));
var p2 = cljs.core.get.call(null,map__839__$1,new cljs.core.Keyword(null,"p2","p2",(905500641)));
var forms = cljs.core.get.call(null,map__839__$1,new cljs.core.Keyword(null,"forms","forms",(2045992350)));
var G__841 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",(-1753298186)),G__841)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__841)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",(-1217943932)),G__841)){
var and__8052__auto__ = cljs.spec.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__8052__auto__)){
var or__8070__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,ret));
}
} else {
return and__8052__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",(-556916491)),G__841)){
var or__8070__auto__ = (p1 === p2);
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.spec.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",(-1959753649)),G__841)){
return cljs.core.every_QMARK_.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",(-1483418131)),G__841)){
return cljs.core.some.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__841)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__842 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__842__$1 = ((((!((map__842 == null)))?(((((map__842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__842):map__842);
var p__$1 = map__842__$1;
var vec__843 = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword(null,"ps","ps",(292358046)));
var seq__844 = cljs.core.seq.call(null,vec__843);
var first__845 = cljs.core.first.call(null,seq__844);
var seq__844__$1 = cljs.core.next.call(null,seq__844);
var p0 = first__845;
var pr = seq__844__$1;
var ps = vec__843;
var vec__846 = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword(null,"ks","ks",(1900203942)));
var k = cljs.core.nth.call(null,vec__846,(0),null);
var ks = vec__846;
var op = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)));
var p1 = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword(null,"p1","p1",(-936759954)));
var ret = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword(null,"ret","ret",(-468222814)));
var forms = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword(null,"forms","forms",(2045992350)));
var G__850 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",(-1753298186)),G__850)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__850)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",(-1217943932)),G__850)){
var pret = cljs.spec.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",(1576652718));
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",(-556916491)),G__850)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",(-1959753649)),G__850)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",(-1483418131)),G__850)){
var vec__851 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__854 = cljs.core.nth.call(null,vec__851,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__854,(0),null);
var vec__857 = cljs.core.nth.call(null,vec__851,(1),null);
var k0 = cljs.core.nth.call(null,vec__857,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",(1576652718)):cljs.spec.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__850)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__860 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__860__$1 = ((((!((map__860 == null)))?(((((map__860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__860):map__860);
var p__$1 = map__860__$1;
var vec__861 = cljs.core.get.call(null,map__860__$1,new cljs.core.Keyword(null,"ps","ps",(292358046)));
var seq__862 = cljs.core.seq.call(null,vec__861);
var first__863 = cljs.core.first.call(null,seq__862);
var seq__862__$1 = cljs.core.next.call(null,seq__862);
var p0 = first__863;
var pr = seq__862__$1;
var ps = vec__861;
var vec__864 = cljs.core.get.call(null,map__860__$1,new cljs.core.Keyword(null,"ks","ks",(1900203942)));
var k = cljs.core.nth.call(null,vec__864,(0),null);
var ks = vec__864;
var op = cljs.core.get.call(null,map__860__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)));
var p1 = cljs.core.get.call(null,map__860__$1,new cljs.core.Keyword(null,"p1","p1",(-936759954)));
var ret = cljs.core.get.call(null,map__860__$1,new cljs.core.Keyword(null,"ret","ret",(-468222814)));
var forms = cljs.core.get.call(null,map__860__$1,new cljs.core.Keyword(null,"forms","forms",(2045992350)));
var rep_PLUS_ = cljs.core.get.call(null,map__860__$1,new cljs.core.Keyword(null,"rep+","rep+",(-281382396)));
var maybe = cljs.core.get.call(null,map__860__$1,new cljs.core.Keyword(null,"maybe","maybe",(-314397560)));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__868 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",(-1753298186)),G__868)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__868)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",(-1217943932)),G__868)){
var px = cljs.core.reduce.call(null,((function (G__868,map__860,map__860__$1,p__$1,vec__861,seq__862,first__863,seq__862__$1,p0,pr,ps,vec__864,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__65_SHARP_,p2__64_SHARP_){
return cljs.spec.unform.call(null,p2__64_SHARP_,p1__65_SHARP_);
});})(G__868,map__860,map__860__$1,p__$1,vec__861,seq__862,first__863,seq__862__$1,p0,pr,ps,vec__864,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",(-556916491)),G__868)){
return cljs.core.mapcat.call(null,((function (G__868,map__860,map__860__$1,p__$1,vec__861,seq__862,first__863,seq__862__$1,p0,pr,ps,vec__864,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__66_SHARP_){
return cljs.spec.op_unform.call(null,p1,p1__66_SHARP_);
});})(G__868,map__860,map__860__$1,p__$1,vec__861,seq__862,first__863,seq__862__$1,p0,pr,ps,vec__864,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",(-1959753649)),G__868)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__868,map__860,map__860__$1,p__$1,vec__861,seq__862,first__863,seq__862__$1,p0,pr,ps,vec__864,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__67_SHARP_){
return cljs.spec.op_unform.call(null,p0,p1__67_SHARP_);
});})(G__868,map__860,map__860__$1,p__$1,vec__861,seq__862,first__863,seq__862__$1,p0,pr,ps,vec__864,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__868,map__860,map__860__$1,p__$1,vec__861,seq__862,first__863,seq__862__$1,p0,pr,ps,vec__864,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__868,map__860,map__860__$1,p__$1,vec__861,seq__862,first__863,seq__862__$1,p0,pr,ps,vec__864,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",(-1483418131)),G__868)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__869 = x;
var k__$1 = cljs.core.nth.call(null,vec__869,(0),null);
var v = cljs.core.nth.call(null,vec__869,(1),null);
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__868)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__872 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__872__$1 = ((((!((map__872 == null)))?(((((map__872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__872):map__872);
var p__$1 = map__872__$1;
var op = cljs.core.get.call(null,map__872__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)));
var ps = cljs.core.get.call(null,map__872__$1,new cljs.core.Keyword(null,"ps","ps",(292358046)));
var splice = cljs.core.get.call(null,map__872__$1,new cljs.core.Keyword(null,"splice","splice",(449588165)));
var prop = ((function (map__872,map__872__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__872,map__872__$1,p__$1,op,ps,splice))
;
var G__874 = op;
if(cljs.core._EQ_.call(null,null,G__874)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",(-1483418131)),G__874)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",(1576652718)))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",(-1753298186)),G__874)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",(1576652718)))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",(-1217943932)),G__874)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",(1576652718)))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",(-556916491)),G__874)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",(-1959753649)),G__874)){
return prop.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__874)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__875 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__875__$1 = ((((!((map__875 == null)))?(((((map__875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875):map__875);
var p__$1 = map__875__$1;
var vec__876 = cljs.core.get.call(null,map__875__$1,new cljs.core.Keyword(null,"ps","ps",(292358046)));
var seq__877 = cljs.core.seq.call(null,vec__876);
var first__878 = cljs.core.first.call(null,seq__877);
var seq__877__$1 = cljs.core.next.call(null,seq__877);
var p0 = first__878;
var pr = seq__877__$1;
var ps = vec__876;
var vec__879 = cljs.core.get.call(null,map__875__$1,new cljs.core.Keyword(null,"ks","ks",(1900203942)));
var seq__880 = cljs.core.seq.call(null,vec__879);
var first__881 = cljs.core.first.call(null,seq__880);
var seq__880__$1 = cljs.core.next.call(null,seq__880);
var k0 = first__881;
var kr = seq__880__$1;
var ks = vec__879;
var op = cljs.core.get.call(null,map__875__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)));
var p1 = cljs.core.get.call(null,map__875__$1,new cljs.core.Keyword(null,"p1","p1",(-936759954)));
var p2 = cljs.core.get.call(null,map__875__$1,new cljs.core.Keyword(null,"p2","p2",(905500641)));
var ret = cljs.core.get.call(null,map__875__$1,new cljs.core.Keyword(null,"ret","ret",(-468222814)));
var splice = cljs.core.get.call(null,map__875__$1,new cljs.core.Keyword(null,"splice","splice",(449588165)));
var forms = cljs.core.get.call(null,map__875__$1,new cljs.core.Keyword(null,"forms","forms",(2045992350)));
if(cljs.core.truth_(p__$1)){
var G__883 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",(-1753298186)),G__883)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__883)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",(-1217943932)),G__883)){
var temp__7879__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__7879__auto__)){
var p1__$1 = temp__7879__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",(-1753298186)),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",(-1959753649)),G__883)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",(292358046)),cljs.core.cons.call(null,cljs.spec.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",(1900203942)),ks,new cljs.core.Keyword(null,"forms","forms",(2045992350)),forms,new cljs.core.Keyword(null,"ret","ret",(-468222814)),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs.spec.deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",(292358046)),pr,new cljs.core.Keyword(null,"ks","ks",(1900203942)),kr,new cljs.core.Keyword(null,"forms","forms",(2045992350)),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",(-468222814)),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",(-1483418131)),G__883)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__883,map__875,map__875__$1,p__$1,vec__876,seq__877,first__878,seq__877__$1,p0,pr,ps,vec__879,seq__880,first__881,seq__880__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__68_SHARP_){
return cljs.spec.deriv.call(null,p1__68_SHARP_,x);
});})(G__883,map__875,map__875__$1,p__$1,vec__876,seq__877,first__878,seq__877__$1,p0,pr,ps,vec__879,seq__880,first__881,seq__880__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",(-556916491)),G__883)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs.spec.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs.spec.deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__883)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__884 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__884__$1 = ((((!((map__884 == null)))?(((((map__884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884):map__884);
var p__$1 = map__884__$1;
var op = cljs.core.get.call(null,map__884__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)));
var ps = cljs.core.get.call(null,map__884__$1,new cljs.core.Keyword(null,"ps","ps",(292358046)));
var ks = cljs.core.get.call(null,map__884__$1,new cljs.core.Keyword(null,"ks","ks",(1900203942)));
var forms = cljs.core.get.call(null,map__884__$1,new cljs.core.Keyword(null,"forms","forms",(2045992350)));
var splice = cljs.core.get.call(null,map__884__$1,new cljs.core.Keyword(null,"splice","splice",(449588165)));
var p1 = cljs.core.get.call(null,map__884__$1,new cljs.core.Keyword(null,"p1","p1",(-936759954)));
var rep_PLUS_ = cljs.core.get.call(null,map__884__$1,new cljs.core.Keyword(null,"rep+","rep+",(-281382396)));
var maybe = cljs.core.get.call(null,map__884__$1,new cljs.core.Keyword(null,"maybe","maybe",(-314397560)));
if(cljs.core.truth_(p__$1)){
var G__886 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",(-1753298186)),G__886)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__886)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",(-1217943932)),G__886)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",(-770935491),null),cljs.spec.op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",(-1959753649)),G__886)){
if(cljs.core.truth_(rep_PLUS_)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",(-342318319),null),(new cljs.core.List(null,rep_PLUS_,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",(850003863),null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__8070__auto__ = cljs.core.seq.call(null,ks);
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",(1453416199)));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",(-1483418131)),G__886)){
if(cljs.core.truth_(maybe)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",(-1542560017),null),(new cljs.core.List(null,maybe,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",(157113396),null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",(-556916491)),G__886)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",(-342318319),null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",(-858366320),null)),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__886)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__887 = input;
var x = cljs.core.nth.call(null,vec__887,(0),null);
var input__$1 = vec__887;
var map__890 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__890__$1 = ((((!((map__890 == null)))?(((((map__890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__890):map__890);
var p__$1 = map__890__$1;
var op = cljs.core.get.call(null,map__890__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)));
var ps = cljs.core.get.call(null,map__890__$1,new cljs.core.Keyword(null,"ps","ps",(292358046)));
var ks = cljs.core.get.call(null,map__890__$1,new cljs.core.Keyword(null,"ks","ks",(1900203942)));
var forms = cljs.core.get.call(null,map__890__$1,new cljs.core.Keyword(null,"forms","forms",(2045992350)));
var splice = cljs.core.get.call(null,map__890__$1,new cljs.core.Keyword(null,"splice","splice",(449588165)));
var p1 = cljs.core.get.call(null,map__890__$1,new cljs.core.Keyword(null,"p1","p1",(-936759954)));
var p2 = cljs.core.get.call(null,map__890__$1,new cljs.core.Keyword(null,"p2","p2",(905500641)));
var via__$1 = (function (){var temp__7824__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__7824__auto__)){
var name = temp__7824__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__887,x,input__$1,map__890,map__890__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",(-188191168)),path__$1,new cljs.core.Keyword(null,"reason","reason",(-2070751759)),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",(1927423397)),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",(128701612)),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",(-1904457336)),via__$1,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
});})(vec__887,x,input__$1,map__890,map__890__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__892 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",(-1753298186)),G__892)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__892)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",(-1217943932)),G__892)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__7824__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__7824__auto__)){
var p1__$1 = temp__7824__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",(-1959753649)),G__892)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__8070__auto__ = cljs.core.seq.call(null,ks);
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__8070__auto__ = cljs.core.seq.call(null,forms);
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__893 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__892,vec__887,x,input__$1,map__890,map__890__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__896){
var vec__897 = p__896;
var p__$2 = cljs.core.nth.call(null,vec__897,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__892,vec__887,x,input__$1,map__890,map__890__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__893,(0),null);
var k = cljs.core.nth.call(null,vec__893,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__893,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__8070__auto__ = form__$1;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if(((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred)))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",(-1483418131)),G__892)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__892,vec__887,x,input__$1,map__890,map__890__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.op_explain.call(null,(function (){var or__8070__auto__ = form__$1;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__892,vec__887,x,input__$1,map__890,map__890__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__8070__auto__ = cljs.core.seq.call(null,ks);
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__8070__auto__ = cljs.core.seq.call(null,forms);
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",(-556916491)),G__892)){
return cljs.spec.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__892)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__900 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__900__$1 = ((((!((map__900 == null)))?(((((map__900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__900):map__900);
var p__$1 = map__900__$1;
var ps = cljs.core.get.call(null,map__900__$1,new cljs.core.Keyword(null,"ps","ps",(292358046)));
var forms = cljs.core.get.call(null,map__900__$1,new cljs.core.Keyword(null,"forms","forms",(2045992350)));
var p2 = cljs.core.get.call(null,map__900__$1,new cljs.core.Keyword(null,"p2","p2",(905500641)));
var ret = cljs.core.get.call(null,map__900__$1,new cljs.core.Keyword(null,"ret","ret",(-468222814)));
var splice = cljs.core.get.call(null,map__900__$1,new cljs.core.Keyword(null,"splice","splice",(449588165)));
var ks = cljs.core.get.call(null,map__900__$1,new cljs.core.Keyword(null,"ks","ks",(1900203942)));
var p1 = cljs.core.get.call(null,map__900__$1,new cljs.core.Keyword(null,"p1","p1",(-936759954)));
var gfn = cljs.core.get.call(null,map__900__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",(-432034727)));
var id = cljs.core.get.call(null,map__900__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var op = cljs.core.get.call(null,map__900__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__900,map__900__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__900,map__900__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__8052__auto__ = rmap__$1;
if(cljs.core.truth_(and__8052__auto__)){
var and__8052__auto____$1 = id;
if(cljs.core.truth_(and__8052__auto____$1)){
var and__8052__auto____$2 = k;
if(cljs.core.truth_(and__8052__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__8052__auto____$2;
}
} else {
return and__8052__auto____$1;
}
} else {
return and__8052__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__900,map__900__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__8070__auto__ = f__$1;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return p__$2;
}
})());
});})(map__900,map__900__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__8070__auto__ = f__$1;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__900,map__900__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__8070__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__8070__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__900,map__900__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__8070__auto__ = (function (){var temp__7879__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__7879__auto__)){
var g = temp__7879__auto__;
var G__903 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",(1874130431)),G__903)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__903)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
var or__8070__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__8070__auto____$1)){
return or__8070__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__904 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",(-1753298186)),G__904)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",(1576652718)))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__904)){
var temp__7879__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__7879__auto__)){
var g = temp__7879__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",(-1217943932)),G__904)){
return cljs.spec.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",(-1959753649)),G__904)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",(-1483418131)),G__904)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",(-556916491)),G__904)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__7879__auto__ = cljs.spec.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__7879__auto__)){
var g = temp__7879__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__7879__auto__,G__904,or__8070__auto____$1,or__8070__auto__,map__900,map__900__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__69_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__69_SHARP_);
});})(g,temp__7879__auto__,G__904,or__8070__auto____$1,or__8070__auto__,map__900,map__900__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__904)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__905){
while(true){
var vec__906 = p__905;
var seq__907 = cljs.core.seq.call(null,vec__906);
var first__908 = cljs.core.first.call(null,seq__907);
var seq__907__$1 = cljs.core.next.call(null,seq__907);
var x = first__908;
var xs = seq__907__$1;
var data = vec__906;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",(1576652718)))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
}
} else {
var temp__7824__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__7824__auto__)){
var dp = temp__7824__auto__;
var G__909 = dp;
var G__910 = xs;
p = G__909;
p__905 = G__910;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__914 = input;
var vec__915 = G__914;
var seq__916 = cljs.core.seq.call(null,vec__915);
var first__917 = cljs.core.first.call(null,seq__916);
var seq__916__$1 = cljs.core.next.call(null,seq__916);
var x = first__917;
var xs = seq__916__$1;
var data = vec__915;
var i = (0);
var p__$1 = p;
var G__914__$1 = G__914;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__918 = G__914__$1;
var seq__919 = cljs.core.seq.call(null,vec__918);
var first__920 = cljs.core.first.call(null,seq__919);
var seq__919__$1 = cljs.core.next.call(null,seq__919);
var x__$1 = first__920;
var xs__$1 = seq__919__$1;
var data__$1 = vec__918;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__7824__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__7824__auto__)){
var dp = temp__7824__auto__;
var G__921 = dp;
var G__922 = xs__$1;
var G__923 = (i__$2 + (1));
p__$1 = G__921;
G__914__$1 = G__922;
i__$1 = G__923;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",(939378204)).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",(-1959753649)))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"reason","reason",(-2070751759)),"Extra input",new cljs.core.Keyword(null,"pred","pred",(1927423397)),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",(128701612)),data__$1,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__8070__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"reason","reason",(-2070751759)),"Extra input",new cljs.core.Keyword(null,"pred","pred",(1927423397)),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",(128701612)),data__$1,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec924 = (function (re,gfn,meta925){
this.re = re;
this.gfn = gfn;
this.meta925 = meta925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_926,meta925__$1){
var self__ = this;
var _926__$1 = this;
return (new cljs.spec.t_cljs$spec924(self__.re,self__.gfn,meta925__$1));
});

cljs.spec.t_cljs$spec924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_926){
var self__ = this;
var _926__$1 = this;
return self__.meta925;
});

cljs.spec.t_cljs$spec924.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec924.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec924.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec924.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec924.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.coll_QMARK_.call(null,x)))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
}
});

cljs.spec.t_cljs$spec924.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec924.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.coll_QMARK_.call(null,x)))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
}
});

cljs.spec.t_cljs$spec924.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec924.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec924.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"gfn","gfn",(-1862918295),null),new cljs.core.Symbol(null,"meta925","meta925",(1236703003),null)], null);
});

cljs.spec.t_cljs$spec924.cljs$lang$type = true;

cljs.spec.t_cljs$spec924.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec924";

cljs.spec.t_cljs$spec924.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec924");
});

/**
 * Positional factory function for cljs.spec/t_cljs$spec924.
 */
cljs.spec.__GT_t_cljs$spec924 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec924(re__$1,gfn__$1,meta925){
return (new cljs.spec.t_cljs$spec924(re__$1,gfn__$1,meta925));
});

}

return (new cljs.spec.t_cljs$spec924(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cargs))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__8052__auto__ = cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cret));
if(and__8052__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",(-1175266204)).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.pvalid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",(-1175266204)).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",(1315556576)),cargs,new cljs.core.Keyword(null,"ret","ret",(-468222814)),cret], null));
} else {
return true;
}
} else {
return and__8052__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__70_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__70_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__7824__auto__ = new cljs.core.Keyword(null,"smallest","smallest",(-152623883)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",(-2041664412)).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__7824__auto__)){
var vec__927 = temp__7824__auto__;
var smallest = cljs.core.nth.call(null,vec__927,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",(1315556576)),argspec,new cljs.core.Keyword(null,"ret","ret",(-468222814)),retspec,new cljs.core.Keyword(null,"fn","fn",(-1175266204)),fnspec], null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec930 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta931){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta931 = meta931;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_932,meta931__$1){
var self__ = this;
var _932__$1 = this;
return (new cljs.spec.t_cljs$spec930(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta931__$1));
});})(specs))
;

cljs.spec.t_cljs$spec930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_932){
var self__ = this;
var _932__$1 = this;
return self__.meta931;
});})(specs))
;

cljs.spec.t_cljs$spec930.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec930.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec930.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec930.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec930.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec930.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec930.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
}
});})(specs))
;

cljs.spec.t_cljs$spec930.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec930.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e933){if((e933 instanceof Error)){
var t = e933;
return t;
} else {
throw e933;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",(-1334050276),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null)),new cljs.core.Keyword(null,"val","val",(128701612)),args,new cljs.core.Keyword(null,"reason","reason",(-2070751759)),ret.message,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cret))){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",(-468222814))),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",(-1175266204))),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",(1315556576)),cargs,new cljs.core.Keyword(null,"ret","ret",(-468222814)),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),path,new cljs.core.Keyword(null,"pred","pred",(1927423397)),new cljs.core.Symbol(null,"ifn?","ifn?",(-2106461064),null),new cljs.core.Keyword(null,"val","val",(128701612)),f,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec930.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__936__delegate = function (args){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9027__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_934_937 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_935_938 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_934_937,_STAR_print_fn_STAR_935_938,sb__9027__auto__,___$3,specs){
return (function (x__9028__auto__){
return sb__9027__auto__.append(x__9028__auto__);
});})(_STAR_print_newline_STAR_934_937,_STAR_print_fn_STAR_935_938,sb__9027__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_935_938;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_934_937;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9027__auto__)].join('');
})()),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__939__i = 0, G__939__a = new Array(arguments.length -  0);
while (G__939__i < G__939__a.length) {G__939__a[G__939__i] = arguments[G__939__i + 0]; ++G__939__i;}
  args = new cljs.core.IndexedSeq(G__939__a,0,null);
} 
return G__936__delegate.call(this,args);};
G__936.cljs$lang$maxFixedArity = 0;
G__936.cljs$lang$applyTo = (function (arglist__940){
var args = cljs.core.seq(arglist__940);
return G__936__delegate(args);
});
G__936.cljs$core$IFn$_invoke$arity$variadic = G__936__delegate;
return G__936;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec930.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec930.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",(982220571),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",(1315556576)),null,(1),null)),(new cljs.core.List(null,self__.aform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ret","ret",(-468222814)),null,(1),null)),(new cljs.core.List(null,self__.rform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fn","fn",(-1175266204)),null,(1),null)),(new cljs.core.List(null,self__.fform,null,(1),null))));
});})(specs))
;

cljs.spec.t_cljs$spec930.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",(-1207762746),null),new cljs.core.Symbol(null,"aform","aform",(531303525),null),new cljs.core.Symbol(null,"retspec","retspec",(-920025354),null),new cljs.core.Symbol(null,"rform","rform",(-1420499912),null),new cljs.core.Symbol(null,"fnspec","fnspec",(-1865712406),null),new cljs.core.Symbol(null,"fform","fform",(-176049972),null),new cljs.core.Symbol(null,"gfn","gfn",(-1862918295),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null),new cljs.core.Symbol(null,"meta931","meta931",(1669852554),null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec930.cljs$lang$type = true;

cljs.spec.t_cljs$spec930.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec930";

cljs.spec.t_cljs$spec930.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec930");
});})(specs))
;

/**
 * Positional factory function for cljs.spec/t_cljs$spec930.
 */
cljs.spec.__GT_t_cljs$spec930 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec930(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta931){
return (new cljs.spec.t_cljs$spec930(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta931));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec930(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",(-1189105441)),cljs.core.list(new cljs.core.Symbol("cljs.spec$macros","conformer","cljs.spec$macros/conformer",(-391061430),null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__71#","p1__71#",(960455911),null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",(-1902130674),null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",(-338988913),null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",(668466950)),new cljs.core.Symbol(null,"p1__71#","p1__71#",(960455911),null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",(-338988913),null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",(-1491964132)),new cljs.core.Symbol(null,"p1__71#","p1__71#",(960455911),null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__72#","p1__72#",(-104379050),null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",(-338988913),null),cljs.core.list(new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",(-187522821),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",(668466950)),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",(-1491964132)),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),new cljs.core.Symbol(null,"p1__72#","p1__72#",(-104379050),null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__71#","p1__71#",(960455911),null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",(-690049687),null),cljs.core.list(new cljs.core.Symbol(null,"map","map",(-1282745308),null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",(668466950)),new cljs.core.Symbol(null,"p1__71#","p1__71#",(960455911),null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",(-1282745308),null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",(-1491964132)),new cljs.core.Symbol(null,"p1__71#","p1__71#",(960455911),null)))),(function (p1__71_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",(668466950)),p1__71_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",(-1491964132)),p1__71_SHARP_));
}),null,true,(function (p1__72_SHARP_){
return cljs.core.map.call(null,(function (p__941){
var vec__942 = p__941;
var k = cljs.core.nth.call(null,vec__942,(0),null);
var v = cljs.core.nth.call(null,vec__942,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",(668466950)),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",(-1491964132)),v], null);
}),p1__72_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.nonconforming = (function cljs$spec$nonconforming(spec){
var spec__$1 = cljs.spec.specize.call(null,spec);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec945 = (function (spec,meta946){
this.spec = spec;
this.meta946 = meta946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_947,meta946__$1){
var self__ = this;
var _947__$1 = this;
return (new cljs.spec.t_cljs$spec945(self__.spec,meta946__$1));
});})(spec__$1))
;

cljs.spec.t_cljs$spec945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_947){
var self__ = this;
var _947__$1 = this;
return self__.meta946;
});})(spec__$1))
;

cljs.spec.t_cljs$spec945.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec945.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec945.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec945.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec945.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.conform_STAR_.call(null,self__.spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537));
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.t_cljs$spec945.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.unform_STAR_.call(null,self__.spec,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec945.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_STAR_.call(null,self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec945.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.gen_STAR_.call(null,self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.t_cljs$spec945.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.nonconforming.call(null,cljs.spec.with_gen_STAR_.call(null,self__.spec,gfn));
});})(spec__$1))
;

cljs.spec.t_cljs$spec945.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","nonconforming","cljs.spec/nonconforming",(1245350756),null),null,(1),null)),(new cljs.core.List(null,cljs.spec.describe_STAR_.call(null,self__.spec),null,(1),null))));
});})(spec__$1))
;

cljs.spec.t_cljs$spec945.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"meta946","meta946",(-1808650158),null)], null);
});})(spec__$1))
;

cljs.spec.t_cljs$spec945.cljs$lang$type = true;

cljs.spec.t_cljs$spec945.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec945";

cljs.spec.t_cljs$spec945.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec945");
});})(spec__$1))
;

/**
 * Positional factory function for cljs.spec/t_cljs$spec945.
 */
cljs.spec.__GT_t_cljs$spec945 = ((function (spec__$1){
return (function cljs$spec$nonconforming_$___GT_t_cljs$spec945(spec__$2,meta946){
return (new cljs.spec.t_cljs$spec945(spec__$2,meta946));
});})(spec__$1))
;

}

return (new cljs.spec.t_cljs$spec945(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.nilable_impl = (function cljs$spec$nilable_impl(form,pred,gfn){
var spec = cljs.spec.specize.call(null,pred,form);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.t_cljs$spec948 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Specize}
 * @implements {cljs.spec.Spec}
*/
cljs.spec.t_cljs$spec948 = (function (form,pred,gfn,spec,meta949){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta949 = meta949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.t_cljs$spec948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_950,meta949__$1){
var self__ = this;
var _950__$1 = this;
return (new cljs.spec.t_cljs$spec948(self__.form,self__.pred,self__.gfn,self__.spec,meta949__$1));
});})(spec))
;

cljs.spec.t_cljs$spec948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_950){
var self__ = this;
var _950__$1 = this;
return self__.meta949;
});})(spec))
;

cljs.spec.t_cljs$spec948.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec948.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec948.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec948.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec948.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.conform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec948.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.unform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec948.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__8070__auto__ = cljs.spec.pvalid_QMARK_.call(null,self__.spec,x);
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",(1523333614))),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",(-188191168)),cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",(1576652718))),new cljs.core.Keyword(null,"pred","pred",(1927423397)),new cljs.core.Symbol(null,"nil?","nil?",(1612038930),null),new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"via","via",(-1904457336)),via,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null));
}
});})(spec))
;

cljs.spec.t_cljs$spec948.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.impl.gen.return$.call(null,null);
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",(1523333614))),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null));
}
});})(spec))
;

cljs.spec.t_cljs$spec948.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

cljs.spec.t_cljs$spec948.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","nilable","cljs.spec/nilable",(-139722052),null),null,(1),null)),(new cljs.core.List(null,cljs.spec.describe_STAR_.call(null,self__.spec),null,(1),null))));
});})(spec))
;

cljs.spec.t_cljs$spec948.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gfn","gfn",(-1862918295),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"meta949","meta949",(2135600378),null)], null);
});})(spec))
;

cljs.spec.t_cljs$spec948.cljs$lang$type = true;

cljs.spec.t_cljs$spec948.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec948";

cljs.spec.t_cljs$spec948.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.spec/t_cljs$spec948");
});})(spec))
;

/**
 * Positional factory function for cljs.spec/t_cljs$spec948.
 */
cljs.spec.__GT_t_cljs$spec948 = ((function (spec){
return (function cljs$spec$nilable_impl_$___GT_t_cljs$spec948(form__$1,pred__$1,gfn__$1,spec__$1,meta949){
return (new cljs.spec.t_cljs$spec948(form__$1,pred__$1,gfn__$1,spec__$1,meta949));
});})(spec))
;

}

return (new cljs.spec.t_cljs$spec948(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var G__952 = arguments.length;
switch (G__952) {
case (1):
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__73_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__73_SHARP_,cljs.spec.conform.call(null,spec,p1__73_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = (3);

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__8052__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__8052__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return (((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end))));
} else {
return and__8052__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return (((start <= val)) && ((val < end)));
} else {
if((val instanceof goog.math.Long)){
var and__8052__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__8052__auto__)){
return val.lessThan(end);
} else {
return and__8052__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__8052__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__8052__auto__)){
return val.lessThan(end);
} else {
return and__8052__auto__;
}
} else {
return false;

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined')){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined')){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",(1931120592)),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",(-970534477))));
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9027__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_954_956 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_955_957 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_954_956,_STAR_print_fn_STAR_955_957,sb__9027__auto__,ed){
return (function (x__9028__auto__){
return sb__9027__auto__.append(x__9028__auto__);
});})(_STAR_print_newline_STAR_954_956,_STAR_print_fn_STAR_955_957,sb__9027__auto__,ed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_955_957;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_954_956;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9027__auto__)].join('');
})())].join('')));
}
});

//# sourceURL=cljs/spec.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9zcGVjLmpzIiwic291cmNlcyI6WyJzcGVjLmNsanMiXSwibGluZUNvdW50Ijo1NTA4LCJtYXBwaW5ncyI6IjtBQWtCQSxvQkFBQSxwQkFBYUE7QUFFYjs7Ozs7d0NBQUEseENBQWVDO0FBTWY7Ozt5Q0FBQSx6Q0FBZUM7QUFJZjs7O3lDQUFBLHpDQUFlQztBQUlmOzs7eUNBQUEsekNBQWVDO0FBSWYsQUFBQTtBQUFBOzs7aUJBQUEsakJBQWFXOztBQUFiLDBCQUFBLDFCQUNHQyw0REFBVUMsS0FBS0M7QUFEbEIsQUFBQSxHQUFBLEVBQUEsRUFBQSxTQUFBLFlBQUEsRUFBQSxDQUFBLDZDQUFBLHBFQUNhRCx1QkFBQUE7QUFEYixPQUNhQSwwQ0FBQUEsS0FBS0M7O0FBRGxCLElBQUFiLGtCQUFBLEVBQUEsU0FBQSxPQUFBLGZBQ2FZLG9CQUFBQTtJQURiWCxrQkFBQSxDQUFBQyx3QkFBQSxBQUFBQyxZQUFBSDtBQUFBLEFBQUEsR0FBQSxFQUFBLENBQUFDLG1CQUFBO0FBQUEsT0FBQUEsMEJBQ2FXLEtBQUtDOztBQURsQixJQUFBWixzQkFBQSxDQUFBQyx3QkFBQTtBQUFBLEFBQUEsR0FBQSxFQUFBLENBQUFELHVCQUFBO0FBQUEsT0FBQUEsOEJBQ2FXLEtBQUtDOztBQURsQixNQUFBLEFBQUFULHFDQUFBLGdCQUNhUTs7Ozs7O0FBRGIseUJBQUEsekJBRUdFLDBEQUFTRixLQUFLRztBQUZqQixBQUFBLEdBQUEsRUFBQSxFQUFBLFNBQUEsWUFBQSxFQUFBLENBQUEsNENBQUEsbkVBRVlILHVCQUFBQTtBQUZaLE9BRVlBLHlDQUFBQSxLQUFLRzs7QUFGakIsSUFBQWYsa0JBQUEsRUFBQSxTQUFBLE9BQUEsZkFFWVksb0JBQUFBO0lBRlpYLGtCQUFBLENBQUFJLHVCQUFBLEFBQUFGLFlBQUFIO0FBQUEsQUFBQSxHQUFBLEVBQUEsQ0FBQUMsbUJBQUE7QUFBQSxPQUFBQSwwQkFFWVcsS0FBS0c7O0FBRmpCLElBQUFkLHNCQUFBLENBQUFJLHVCQUFBO0FBQUEs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Q3RXLDBCQUFNLDRDQUFBLGlDQUFBLGlDQUFBLDlHQUFDMEMsdUNBQWM3RSx3R0FBY0M7QUFBdEQsQUFFRSxNQUFPLEtBQUEyQixNQUNDLENBQUEsc0VBQStCLGlCQUFBMEQsbUJBQUEsS0FBQUM7QUFBQSxBQUFBLElBQUFnbEIsbUNBQUE5a0I7SUFBQStrQiw4QkFBQTdrQjtBQUFBLEFBQUEsQUFBQUYsc0NBQUE7O0FBQUEsQUFBQUUsaUNBQUE7a0JBQUFDO0FBQUEsQUFBQSxPQUFBTix3QkFBQU07Ozs7QUFBQSxJQUFBLEFBQWMsQUFBQzhDLGdDQUFZdEQ7VUFBM0IsQUFBQSxBQUFBTyxpQ0FBQTZrQjs7QUFBQSxBQUFBL2tCLHNDQUFBOGtCOztBQUFBLG9EQUFBamxCIiwibmFtZXMiOlsiY2xqcy5zcGVjL01BWF9JTlQiLCJjbGpzLnNwZWMvKnJlY3Vyc2lvbi1saW1pdCoiLCJjbGpzLnNwZWMvKmZzcGVjLWl0ZXJhdGlvbnMqIiwiY2xqcy5zcGVjLypjb2xsLWNoZWNrLWxpbWl0KiIsImNsanMuc3BlYy8qY29sbC1lcnJvci1saW1pdCoiLCJ4X184NjcyX19hdXRvX18iLCJtX184NjczX19hdXRvX18iLCJjbGpzL3NwZWMuY29uZm9ybSoiLCJnb29nL3R5cGVPZiIsImNsanMuY29yZS9taXNzaW5nLXByb3RvY29sIiwiY2xqcy9zcGVjLnVuZm9ybSoiLCJjbGpzL3NwZWMuZXhwbGFpbioiLCJjbGpzL3NwZWMuZ2VuKiIsImNsanMvc3BlYy53aXRoLWdlbioiLCJjbGpzL3NwZWMuZGVzY3JpYmUqIiwiY2xqcy5zcGVjL1NwZWMiLCJjbGpzLnNwZWMvY29uZm9ybSoiLCJzcGVjIiwieCIsImNsanMuc3BlYy91bmZvcm0qIiwieSIsImNsanMuc3BlYy9leHBsYWluKiIsInBhdGgiLCJ2aWEiLCJpbiIsImNsanMuc3BlYy9nZW4qIiwib3ZlcnJpZGVzIiwicm1hcCIsImNsanMuc3BlYy93aXRoLWdlbioiLCJnZm4iLCJjbGpzLnNwZWMvZGVzY3JpYmUqIiwianMvY2xqcyIsImpzL2NsanMuc3BlYyIsImpzL2NsanMuc3BlYy5yZWdpc3RyeS1yZWYiLCJjbGpzLnNwZWMvcmVnaXN0cnktcmVmIiwiY2xqcy5jb3JlL2F0b20iLCJjbGpzLnNwZWMvZGVlcC1yZXNvbHZlIiwicmVnIiwiayIsImNsanMuY29yZS9pZGVudD8iLCJjbGpzLmNvcmUvZ2V0IiwiY2xqcy5zcGVjL3JlZy1yZXNvbHZlIiwiY2xqcy5jb3JlL2RlcmVmIiwiY2xqcy5zcGVjL3JlZy1yZXNvbHZlISIsIm9yX184MDcwX19hdXRvX18iLCJqcy9FcnJvciIsImNsanMuc3BlYy9zcGVjPyIsImNsanMuY29yZS9QUk9UT0NPTF9TRU5USU5FTCIsImNsanMuc3BlYy9yZWdleD8iLCJhbmRfXzgwNTJfX2F1dG9fXyIsImNsanMuc3BlYy93aXRoLW5hbWUiLCJuYW1lIiwiY2xqcy5jb3JlL2Fzc29jIiwiY2xqcy5jb3JlL3dpdGgtbWV0YSIsImNsanMuY29yZS9tZXRhIiwiY2xqcy5zcGVjL3NwZWMtbmFtZSIsImNsanMuc3BlYy9tYXliZS1zcGVjIiwic3BlYy1vci1rIiwicyIsImNsanMuc3BlYy9yZWdleC1zcGVjLWltcGwiLCJjbGpzLnNwZWMvdGhlLXNwZWMiLCJ2YXJfYXJncyIsIkdfXzQzOSIsImNsanMuc3BlYy9zcGVjaXplKiIsImNsanMvc3BlYy5zcGVjaXplKiIsImNsanMuc3BlYy9TcGVjaXplIiwiXyIsImZvcm0iLCJnb29nLm9iamVjdC9zZXQiLCJjbGpzLmNvcmUvS2V5d29yZCIsImNsanMuY29yZS9TeW1ib2wiLCJvIiwiY2xqcy5zcGVjL3NwZWMtaW1wbCIsIkdfXzQ0MyIsImNsanMuc3BlYy9zcGVjaXplIiwiY2xqcy5zcGVjL2ludmFsaWQ/IiwicmV0IiwiY2xqcy5jb3JlL2tleXdvcmQtaWRlbnRpY2FsPyIsImNsanMuc3BlYy9jb25mb3JtIiwiY2xqcy5zcGVjL3VuZm9ybSIsImNsanMuc3BlYy9mb3JtIiwiY2xqcy5zcGVjL2FiYnJldiIsImNsanMuY29yZS9zZXE/IiwiY2xvanVyZS53YWxrL3Bvc3R3YWxrIiwiY2xqcy5jb3JlL25hbWVzcGFjZSIsImNsanMuY29yZS9uYW1lIiwiY2xqcy5jb3JlL3N5bWJvbCIsImNsanMuY29yZS89IiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL3NlY29uZCIsImNsanMuY29yZS9sYXN0IiwiY2xqcy5zcGVjL2Rlc2NyaWJlIiwiY2xqcy5zcGVjL3dpdGgtZ2VuIiwiZ2VuLWZuIiwiY2xqcy5zcGVjL2V4cGxhaW4tZGF0YSoiLCJ0ZW1wX183ODc5X19hdXRvX18iLCJwcm9icyIsImNsanMuY29yZS9lbXB0eT8iLCJjbGpzLnNwZWMvZXhwbGFpbi1kYXRhIiwidGVtcF9fNzgyNF9fYXV0b19fIiwiY2xqcy5zcGVjL2V4cGxhaW4tcHJpbnRlciIsImVkIiwiY2xqcy5jb3JlL3ByaW50Iiwic2JfXzkwMjdfX2F1dG9fXyIsImdvb2cuc3RyaW5nL1N0cmluZ0J1ZmZlciIsIipwcmludC1uZXdsaW5lKjQ0NSIsImNsanMuY29yZS8qcHJpbnQtbmV3bGluZSoiLCIqcHJpbnQtZm4qNDQ2IiwiY2xqcy5jb3JlLypwcmludC1mbioiLCJ4X185MDI4X19hdXRvX18iLCJzZXFfXzQ0NyIsImNsanMuY29yZS9zZXEiLCJjaHVua19fNDQ4IiwiY291bnRfXzQ0OSIsImlfXzQ1MCIsIm1hcF9fNDUxIiwiY2xqcy5jb3JlLy1udGgiLCJjbGpzLmNvcmUvYXBwbHkiLCJjbGpzLmNvcmUvaGFzaC1tYXAiLCJjbGpzLmNvcmUvY2h1bmtlZC1zZXE/IiwiY19fODgzOF9fYXV0b19fIiwiY2xqcy5jb3JlL2NodW5rLWZpcnN0IiwiY2xqcy5jb3JlL2NodW5rLXJlc3QiLCJjbGpzLmNvcmUvY291bnQiLCJtYXBfXzQ2MyIsImNsanMuY29yZS9uZXh0IiwicHJlZCIsInZhbCIsInJlYXNvbiIsInByb2IiLCJjbGpzLmNvcmUvcHItc3RyIiwiY2xqcy5jb3JlL3ByIiwic2VxX180NTMiLCJjaHVua19fNDU0IiwiY291bnRfXzQ1NSIsImlfXzQ1NiIsInZlY19fNDU3IiwiY2xqcy5jb3JlL250aCIsInZlY19fNDYwIiwic2VxX180NjUiLCJjaHVua19fNDY2IiwiY291bnRfXzQ2NyIsImlfXzQ2OCIsInZlY19fNDY5IiwidmVjX180NzIiLCJ2IiwiY2xqcy5jb3JlL25ld2xpbmUiLCJzZXFfXzQ3NSIsImNodW5rX180NzYiLCJjb3VudF9fNDc3IiwiaV9fNDc4IiwidmVjX180NzkiLCJ2ZWNfXzQ4MiIsImNsanMuY29yZS9wcmludGxuIiwiY2xqcy5zcGVjLypleHBsYWluLW91dCoiLCJjbGpzLnNwZWMvZXhwbGFpbi1vdXQiLCJjbGpzLnNwZWMvZXhwbGFpbiIsImNsanMuc3BlYy9leHBsYWluLXN0ciIsIipwcmludC1uZXdsaW5lKjU5OSIsIipwcmludC1mbio2MDAiLCJjbGpzLnNwZWMvZ2Vuc3ViIiwiZyIsInAxX18zOSMiLCJjbGpzLnNwZWMuaW1wbC5nZW4vc3VjaC10aGF0IiwiY2xqcy5zcGVjL3ZhbGlkPyIsIkdfXzYwNCIsImNsanMuc3BlYy9nZW4iLCJjbGpzLnNwZWMvZGVmLWltcGwiLCJjbGpzLmNvcmUvc3dhcCEiLCJjbGpzLnNwZWMvcmVnaXN0cnkiLCJjbGpzLnNwZWMvLT5zeW0iLCJjbGpzLmNvcmUvdmFyPyIsImNsanMuc3BlYy9nZXQtc3BlYyIsImNsanMuc3BlYy9tYWNyb2V4cGFuZC1jaGVjayIsImFyZ3MiLCJzcGVjcyIsImFyZy1zcGVjIiwiKnByaW50LW5ld2xpbmUqNjA2IiwiKnByaW50LWZuKjYwNyIsImNsanMuc3BlYy9yZWN1ci1saW1pdD8iLCJpZCIsImNsanMuY29yZS9jb250YWlucz8iLCJjbGpzLmNvcmUvc2V0IiwiY2xqcy5zcGVjL2luY2siLCJtIiwiR19fNjExIiwiY2xqcy5zcGVjL2R0IiwiY3ByZWQ/IiwiY2xqcy5jb3JlL2lmbj8iLCJHX182MTQiLCJjbGpzLmNvcmUvbm90IiwiR19fNjE3IiwiY2xqcy5zcGVjL3B2YWxpZD8iLCJjbGpzLnNwZWMvZXhwbGFpbi0xIiwiY2xqcy5jb3JlL2NvbmoiLCJwX182MTkiLCJtYXBfXzYyMCIsImNsanMuc3BlYy9tYXAtc3BlYy1pbXBsIiwicmVxLXVuIiwib3B0LXVuIiwia2V5cy1wcmVkIiwicHJlZC1leHBycyIsIm9wdC1rZXlzIiwicmVxLXNwZWNzIiwicmVxIiwicmVxLWtleXMiLCJvcHQtc3BlY3MiLCJwcmVkLWZvcm1zIiwib3B0IiwiYXJnbSIsInAxX180MCMiLCJrLT5zIiwiY2xqcy5jb3JlL3ppcG1hcCIsImNsanMuY29yZS9jb25jYXQiLCJrZXlzLT5zcGVjbmFtZXMiLCJjbGpzLmNvcmUvcmFuZG9tLXV1aWQiLCJqcy9jbGpzLnNwZWMudF9jbGpzJHNwZWM2MjIiLCJjbGpzLnNwZWMvdF9jbGpzJHNwZWM2MjIiLCJfNjI0IiwibWV0YTYyMyIsInRoaXNfXzg2MTdfX2F1dG9fXyIsIndyaXRlcl9fODYxOF9fYXV0b19fIiwib3B0X184NjE5X19hdXRvX18iLCJjbGpzLmNvcmUvLXdyaXRlIiwiY2xqcy5zcGVjLy0+dF9jbGpzJHNwZWM2MjIiLCJHX182MzEiLCJ2ZWNfXzYzMiIsInNlcV9fNjMzIiwiZmlyc3RfXzYzNCIsInZlY19fNjM1IiwidmVjX182MzgiLCJzZXFfXzYzOSIsImZpcnN0X182NDAiLCJ2ZWNfXzY0MSIsImtzIiwia2V5cyIsInNuYW1lIiwiY3YiLCJHX182NDciLCJ2ZWNfXzY0OCIsInNlcV9fNjQ5IiwiZmlyc3RfXzY1MCIsInZlY19fNjUxIiwic2VxX182NTIiLCJmaXJzdF9fNjUzIiwiY2xqcy5jb3JlL2tleXMiLCJjbGpzLmNvcmUvbWFwPyIsImNsanMuY29yZS9tYXAiLCJjbGpzLmNvcmUva2VlcCIsImNsanMuY29yZS9pZGVudGl0eSIsInAxX180MSMiLCJwX182NTQiLCJ2ZWNfXzY1NSIsImdlbiIsIm9nZW4iLCJjbGpzLnNwZWMuaW1wbC5nZW4vZGVsYXktaW1wbCIsImNsanMuY29yZS9EZWxheSIsInJlcS1nZW5zIiwib3B0LWdlbnMiLCJjbGpzLmNvcmUvcmVtb3ZlIiwiY2xqcy5jb3JlL25pbD8iLCJjbGpzLmNvcmUvZXZlcnk/IiwicmVxcyIsIm9wdHMiLCJjbGpzLmNvcmUvaW50byIsInAxX180MiMiLCJjbGpzLnNwZWMuaW1wbC5nZW4vYmluZCIsImNsanMuc3BlYy5pbXBsLmdlbi9jaG9vc2UiLCJjbGpzLmNvcmUvc2h1ZmZsZSIsImNsanMuY29yZS90YWtlIiwiY2xqcy5zcGVjLmltcGwuZ2VuL2hhc2gtbWFwIiwiY2xqcy5jb3JlL2NvbnMiLCJHX182NTgiLCJHX182NjgiLCJ1bmMiLCJHX182NjkiLCJHX182NzAiLCJqcy9jbGpzLnNwZWMudF9jbGpzJHNwZWM2NzEiLCJjbGpzLnNwZWMvdF9jbGpzJHNwZWM2NzEiLCJfNjczIiwibWV0YTY3MiIsImNsanMuc3BlYy8tPnRfY2xqcyRzcGVjNjcxIiwiY2xqcy5zcGVjLmltcGwuZ2VuL2dlbi1mb3ItcHJlZCIsIkdfXzY3NiIsImNsanMuc3BlYy9tdWx0aS1zcGVjLWltcGwiLCJtbXZhciIsInJldGFnIiwicDFfXzQzIyIsInAxX180NCMiLCJwcmVkeCIsIm1tIiwiY2xqcy5jb3JlLy1nZXQtbWV0aG9kIiwiY2xqcy5jb3JlLy1kaXNwYXRjaC1mbiIsImR2YWwiLCJ0YWciLCJwMV9fNDUjIiwicDJfXzQ2IyIsImpzL2NsanMuc3BlYy50X2NsanMkc3BlYzY3NyIsImNsanMuc3BlYy90X2NsanMkc3BlYzY3NyIsIl82NzkiLCJtZXRhNjc4IiwiY2xqcy5jb3JlL3NlcXVlbmNlIiwiY2xqcy5jb3JlL0xpc3QiLCJjbGpzLnNwZWMvLT50X2NsanMkc3BlYzY3NyIsImR2IiwicF9fNjgwIiwidmVjX182ODEiLCJmIiwicCIsInAxX180NyMiLCJjbGpzLnNwZWMuaW1wbC5nZW4vZm1hcCIsImdzIiwiY2xqcy5jb3JlL21ldGhvZHMiLCJwX182ODQiLCJ2ZWNfXzY4NSIsImNsanMuc3BlYy5pbXBsLmdlbi9vbmUtb2YiLCJHX182OTAiLCJjbGpzLnNwZWMvdHVwbGUtaW1wbCIsImZvcm1zIiwicHJlZHMiLCJjbGpzLmNvcmUvbWFwdiIsImNudCIsImpzL2NsanMuc3BlYy50X2NsanMkc3BlYzY5MSIsImNsanMuc3BlYy90X2NsanMkc3BlYzY5MSIsIl82OTMiLCJtZXRhNjkyIiwiY2xqcy5zcGVjLy0+dF9jbGpzJHNwZWM2OTEiLCJjbGpzLmNvcmUvdmVjdG9yPyIsImkiLCJjbGpzLmNvcmUvbm90PSIsImNsanMuY29yZS9yYW5nZSIsImNsanMuc3BlYy5pbXBsLmdlbi90dXBsZSIsImNsanMuc3BlYy90YWdnZWQtcmV0IiwieDY5OSIsImNsanMuc3BlYy9vci1zcGVjLWltcGwiLCJrcHMiLCJjZm9ybSIsIkdfXzcwMCIsImpzL2NsanMuc3BlYy50X2NsanMkc3BlYzcwMSIsImNsanMuc3BlYy90X2NsanMkc3BlYzcwMSIsIl83MDMiLCJtZXRhNzAyIiwicF9fNzA0IiwidmVjX183MDUiLCJjbGpzLnNwZWMvLT50X2NsanMkc3BlYzcwMSIsInRoaXMiLCJjbGpzLmNvcmUvbWFwY2F0IiwiY2xqcy5jb3JlL3ZlY3RvciIsImNsanMuc3BlYy9hbmQtcHJlZHMiLCJHX183MTYiLCJ2ZWNfXzcxOCIsInNlcV9fNzE5IiwiZmlyc3RfXzcyMCIsIkdfXzcxNyIsInZlY19fNzIxIiwic2VxX183MjIiLCJmaXJzdF9fNzIzIiwidmVjX183MjQiLCJzZXFfXzcyNSIsImZpcnN0X183MjYiLCJ2ZWNfXzcyNyIsInNlcV9fNzI4IiwiZmlyc3RfXzcyOSIsIm5yZXQiLCJjbGpzLnNwZWMvZXhwbGFpbi1wcmVkLWxpc3QiLCJHX183MzkiLCJ2ZWNfXzc0MSIsInNlcV9fNzQyIiwiZmlyc3RfXzc0MyIsIkdfXzc0MCIsInZlY19fNzQ0Iiwic2VxX183NDUiLCJmaXJzdF9fNzQ2IiwidmVjX183NDciLCJzZXFfXzc0OCIsImZpcnN0X183NDkiLCJ2ZWNfXzc1MCIsInNlcV9fNzUxIiwiZmlyc3RfXzc1MiIsImNsanMuc3BlYy9hbmQtc3BlYy1pbXBsIiwiR19fNzU2IiwianMvY2xqcy5zcGVjLnRfY2xqcyRzcGVjNzU3IiwiY2xqcy5zcGVjL3RfY2xqcyRzcGVjNzU3IiwiXzc1OSIsIm1ldGE3NTgiLCJjbGpzLnNwZWMvLT50X2NsanMkc3BlYzc1NyIsInAxX180OSMiLCJwMl9fNDgjIiwiY2xqcy5jb3JlL3JlZHVjZSIsImNsanMuY29yZS9yZXZlcnNlIiwiY2xqcy5zcGVjL2NvbGwtcHJvYiIsImtmbiIsImtmb3JtIiwiZGlzdGluY3QiLCJjb3VudCIsIm1pbi1jb3VudCIsIm1heC1jb3VudCIsImNsanMuY29yZS9jb2xsPyIsImNsanMuY29yZS9ib3VuZGVkLWNvdW50IiwiY2xqcy5jb3JlL2Rpc3RpbmN0PyIsImNsanMuc3BlYy9tZXJnZS1zcGVjLWltcGwiLCJqcy9jbGpzLnNwZWMudF9jbGpzJHNwZWM3NjMiLCJjbGpzLnNwZWMvdF9jbGpzJHNwZWM3NjMiLCJfNzY1IiwibWV0YTc2NCIsImNsanMuc3BlYy8tPnRfY2xqcyRzcGVjNzYzIiwibXMiLCJwMV9fNTAjIiwicDJfXzUxIyIsImNsanMuY29yZS9zb21lIiwiY2xqcy5jb3JlL21lcmdlIiwicDFfXzUyIyIsInAxX181MyMiLCJwMl9fNTQjIiwicDFfXzU1IyIsInAxX181NiMiLCJwMl9fNTcjIiwiR19fNzY3IiwiY2xqcy5zcGVjL2V2ZXJ5LWltcGwiLCJwX183NjgiLCJtYXBfXzc2OSIsImNvbmZvcm0tYWxsIiwia2luZC1mb3JtIiwiY3ByZWQiLCJnZW4taW50byIsImtpbmQiLCJnZW4tbWF4IiwiY29uZm9ybS1rZXlzIiwicDFfXzU4IyIsInZlY19fNzcxIiwiY29uZm9ybS1pbnRvIiwiY2hlY2s/IiwiYWRkY3YiLCJraW5kZm4iLCJraW5kZm9ybSIsImNsanMuY29yZS9saXN0PyIsImNsanMuY29yZS9zZXQ/IiwiY2xqcy5jb3JlL3NlcWFibGU/IiwiY2ZucyIsInAxX181OSMiLCJjbGpzLmNvcmUvZW1wdHkiLCJqcy9jbGpzLnNwZWMudF9jbGpzJHNwZWM3NzQiLCJjbGpzLnNwZWMvdF9jbGpzJHNwZWM3NzQiLCJfNzc2IiwibWV0YTc3NSIsImNsanMuc3BlYy8tPnRfY2xqcyRzcGVjNzc0IiwidmVjX183NzciLCJpbml0IiwiYWRkIiwiY29tcGxldGUiLCJHX183ODMiLCJ2ZWNfXzc4NCIsInNlcV9fNzg1IiwiZmlyc3RfXzc4NiIsInZlY19fNzg3Iiwic2VxX183ODgiLCJmaXJzdF9fNzg5IiwidnMiLCJ2c2VxIiwiY2xqcy5jb3JlL2luZGV4ZWQ/Iiwic3RlcCIsInhfXzgzNDJfX2F1dG9fXyIsInlfXzgzNDNfX2F1dG9fXyIsImNsanMuY29yZS9sb25nIiwibGltaXQiLCJHX183OTMiLCJ2ZWNfXzc5NCIsInNlcV9fNzk1IiwiZmlyc3RfXzc5NiIsInZlY19fNzk3Iiwic2VxX183OTgiLCJmaXJzdF9fNzk5IiwiY2xqcy5jb3JlL3BhcnRpYWwiLCJwZ2VuIiwiY2xqcy5zcGVjLmltcGwuZ2VuL3JldHVybiIsInAxX182MCMiLCJwMV9fNjEjIiwiY2xqcy5zcGVjLmltcGwuZ2VuL3ZlY3Rvci1kaXN0aW5jdCIsImNsanMuc3BlYy5pbXBsLmdlbi92ZWN0b3IiLCJjbGpzLnNwZWMvYWNjZXB0IiwicF9fODA3IiwibWFwX184MDgiLCJvcCIsImNsanMuc3BlYy9hY2NlcHQ/IiwicF9fODEwIiwibWFwX184MTEiLCJ2ZWNfXzgxMiIsInNlcV9fODEzIiwiZmlyc3RfXzgxNCIsInZlY19fODE1Iiwic2VxX184MTYiLCJmaXJzdF9fODE3IiwidmVjX184MTgiLCJzZXFfXzgxOSIsImZpcnN0X184MjAiLCJjbGpzLnNwZWMvcGNhdCoiLCJwMSIsInByIiwicHMiLCJrMSIsImtyIiwiZjEiLCJmciIsInJlcCsiLCJycCIsImFyZ3NfXzkxNDRfX2F1dG9fXyIsImxlbl9fOTE0MV9fYXV0b19fIiwiaV9fOTE0Ml9fYXV0b19fIiwiYXJnc2VxX185MTQ1X19hdXRvX18iLCJjbGpzLnNwZWMvcGNhdCIsInNlcTgyMiIsInNlbGZfXzkxMzNfX2F1dG9fXyIsImNsanMuc3BlYy9jYXQtaW1wbCIsImNsanMuc3BlYy9yZXAqIiwicDIiLCJzcGxpY2UiLCJyIiwiY2xqcy5zcGVjL3JlcC1pbXBsIiwiY2xqcy5zcGVjL3JlcCtpbXBsIiwiY2xqcy5jb3JlL3ZlYyIsImNsanMuc3BlYy9hbXAtaW1wbCIsInJlIiwiY2xqcy5zcGVjL2ZpbHRlci1hbHQiLCJwa3MiLCJjbGpzLmNvcmUvcmVwZWF0IiwicDFfXzYyIyIsImNsanMuY29yZS9maWx0ZXIiLCJwMV9fNjMjIiwiY2xqcy5zcGVjL2FsdCoiLCJ2ZWNfXzgyNiIsInZlY19fODI5Iiwic2VxX184MzAiLCJmaXJzdF9fODMxIiwidmVjX184MzIiLCJjbGpzLnNwZWMvYWx0cyIsInNlcTgzNSIsImNsanMuc3BlYy9hbHQyIiwiY2xqcy5zcGVjL2FsdC1pbXBsIiwiY2xqcy5zcGVjL21heWJlLWltcGwiLCJjbGpzLnNwZWMvbm9yZXQ/IiwicHJldCIsImNsanMuc3BlYy9hY2NlcHQtbmlsPyIsIm1hcF9fODM5IiwiR19fODQxIiwiY2xqcy5zcGVjL3ByZXR1cm4iLCJtYXBfXzg0MiIsInZlY19fODQzIiwic2VxX184NDQiLCJmaXJzdF9fODQ1IiwidmVjX184NDYiLCJwMCIsIkdfXzg1MCIsImNsanMuc3BlYy9hZGQtcmV0IiwidmVjX184NTEiLCJ2ZWNfXzg1NCIsInZlY19fODU3IiwiazAiLCJjbGpzLnNwZWMvb3AtdW5mb3JtIiwibWFwX184NjAiLCJ2ZWNfXzg2MSIsInNlcV9fODYyIiwiZmlyc3RfXzg2MyIsInZlY19fODY0IiwibWF5YmUiLCJHX184NjgiLCJweCIsInAxX182NSMiLCJwMl9fNjQjIiwicDFfXzY2IyIsInAxX182NyMiLCJ2ZWNfXzg2OSIsIm1hcF9fODcyIiwicHJvcCIsIkdfXzg3NCIsImNsanMuc3BlYy9kZXJpdiIsIm1hcF9fODc1IiwidmVjX184NzYiLCJzZXFfXzg3NyIsImZpcnN0X184NzgiLCJ2ZWNfXzg3OSIsInNlcV9fODgwIiwiZmlyc3RfXzg4MSIsIkdfXzg4MyIsInAxX182OCMiLCJjbGpzLnNwZWMvb3AtZGVzY3JpYmUiLCJtYXBfXzg4NCIsIkdfXzg4NiIsImNsanMuY29yZS9saXN0KiIsImNsanMuc3BlYy9vcC1leHBsYWluIiwiaW5wdXQiLCJ2ZWNfXzg4NyIsIm1hcF9fODkwIiwiaW5zdWZmaWNpZW50IiwiR19fODkyIiwidmVjX184OTMiLCJwa2ZzIiwicF9fODk2IiwidmVjX184OTciLCJjbGpzLnNwZWMvcmUtZ2VuIiwibWFwX185MDAiLCJnZ2VucyIsIkdfXzkwMyIsIkdfXzkwNCIsImdlbnMiLCJjbGpzLnNwZWMuaW1wbC5nZW4vY2F0IiwicDFfXzY5IyIsInBfXzkwNSIsInZlY19fOTA2Iiwic2VxX185MDciLCJmaXJzdF9fOTA4IiwiY2xqcy5zcGVjL3JlLWNvbmZvcm0iLCJ4cyIsImRhdGEiLCJkcCIsImNsanMuc3BlYy9yZS1leHBsYWluIiwiR19fOTE0IiwidmVjX185MTUiLCJzZXFfXzkxNiIsImZpcnN0X185MTciLCJ2ZWNfXzkxOCIsInNlcV9fOTE5IiwiZmlyc3RfXzkyMCIsImpzL2NsanMuc3BlYy50X2NsanMkc3BlYzkyNCIsImNsanMuc3BlYy90X2NsanMkc3BlYzkyNCIsIl85MjYiLCJtZXRhOTI1IiwiY2xqcy5zcGVjLy0+dF9jbGpzJHNwZWM5MjQiLCJjbGpzLnNwZWMvY2FsbC12YWxpZD8iLCJjYXJncyIsImNyZXQiLCJjbGpzLnNwZWMvdmFsaWRhdGUtZm4iLCJpdGVycyIsInAxX183MCMiLCJjbGpzLnNwZWMuaW1wbC5nZW4vZm9yLWFsbCoiLCJjbGpzLnNwZWMuaW1wbC5nZW4vcXVpY2stY2hlY2siLCJ2ZWNfXzkyNyIsInNtYWxsZXN0IiwiY2xqcy5zcGVjL2ZzcGVjLWltcGwiLCJhcmdzcGVjIiwiYWZvcm0iLCJyZXRzcGVjIiwicmZvcm0iLCJmbnNwZWMiLCJmZm9ybSIsImpzL2NsanMuc3BlYy50X2NsanMkc3BlYzkzMCIsImNsanMuc3BlYy90X2NsanMkc3BlYzkzMCIsIl85MzIiLCJtZXRhOTMxIiwiY2xqcy5zcGVjLy0+dF9jbGpzJHNwZWM5MzAiLCJub3QtZm91bmQiLCJlOTMzIiwidCIsIipwcmludC1uZXdsaW5lKjkzNCIsIipwcmludC1mbio5MzUiLCJjbGpzLnNwZWMuaW1wbC5nZW4vZ2VuZXJhdGUiLCJwMV9fNzEjIiwicDFfXzcyIyIsInBfXzk0MSIsInZlY19fOTQyIiwiY2xqcy5zcGVjL25vbmNvbmZvcm1pbmciLCJqcy9jbGpzLnNwZWMudF9jbGpzJHNwZWM5NDUiLCJjbGpzLnNwZWMvdF9jbGpzJHNwZWM5NDUiLCJfOTQ3IiwibWV0YTk0NiIsImNsanMuc3BlYy8tPnRfY2xqcyRzcGVjOTQ1IiwiY2xqcy5zcGVjL25pbGFibGUtaW1wbCIsImpzL2NsanMuc3BlYy50X2NsanMkc3BlYzk0OCIsImNsanMuc3BlYy90X2NsanMkc3BlYzk0OCIsIl85NTAiLCJtZXRhOTQ5IiwiY2xqcy5zcGVjLy0+dF9jbGpzJHNwZWM5NDgiLCJjbGpzLnNwZWMuaW1wbC5nZW4vZnJlcXVlbmN5IiwiR19fOTUyIiwiY2xqcy5zcGVjL2V4ZXJjaXNlIiwibiIsInAxX183MyMiLCJjbGpzLmNvcmUvUGVyc2lzdGVudFZlY3RvciIsImNsanMuc3BlYy5pbXBsLmdlbi9zYW1wbGUiLCJjbGpzLnNwZWMvaW5zdC1pbi1yYW5nZT8iLCJzdGFydCIsImVuZCIsImluc3QiLCJjbGpzLmNvcmUvaW5zdD8iLCJjbGpzLmNvcmUvaW5zdC1tcyIsImNsanMuc3BlYy9pbnQtaW4tcmFuZ2U/IiwiY2xqcy5jb3JlL2ludGVnZXI/IiwiZ29vZy9tYXRoLkxvbmciLCJnb29nL21hdGguSW50ZWdlciIsImpzL2NsanMuc3BlYy4qY29tcGlsZS1hc3NlcnRzKiIsImNsanMuc3BlYy8qY29tcGlsZS1hc3NlcnRzKiIsImpzL2NsanMuc3BlYy4qcnVudGltZS1hc3NlcnRzKiIsImNsanMuc3BlYy8qcnVudGltZS1hc3NlcnRzKiIsImNsanMuc3BlYy9jaGVjay1hc3NlcnRzPyIsImNsanMuc3BlYy9jaGVjay1hc3NlcnRzIiwiZmxhZyIsImNsanMuc3BlYy9hc3NlcnQqIiwiKnByaW50LW5ld2xpbmUqOTU0IiwiKnByaW50LWZuKjk1NSIsImNsanMuY29yZS9JbmRleGVkU2VxIl0sInNvdXJjZXNDb250ZW50IjpbIjsgICBDb3B5cmlnaHQgKGMpIFJpY2ggSGlja2V5LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuOyAgIFRoZSB1c2UgYW5kIGRpc3RyaWJ1dGlvbiB0ZXJtcyBmb3IgdGhpcyBzb2Z0d2FyZSBhcmUgY292ZXJlZCBieSB0aGVcbjsgICBFY2xpcHNlIFB1YmxpYyBMaWNlbnNlIDEuMCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL2VjbGlwc2UtMS4wLnBocClcbjsgICB3aGljaCBjYW4gYmUgZm91bmQgaW4gdGhlIGZpbGUgZXBsLXYxMC5odG1sIGF0IHRoZSByb290IG9mIHRoaXMgZGlzdHJpYnV0aW9uLlxuOyAgIEJ5IHVzaW5nIHRoaXMgc29mdHdhcmUgaW4gYW55IGZhc2hpb24sIHlvdSBhcmUgYWdyZWVpbmcgdG8gYmUgYm91bmQgYnlcbjsgICB0aGUgdGVybXMgb2YgdGhpcyBsaWNlbnNlLlxuOyAgIFlvdSBtdXN0IG5vdCByZW1vdmUgdGhpcyBub3RpY2UsIG9yIGFueSBvdGhlciwgZnJvbSB0aGlzIHNvZnR3YXJlLlxuXG4obnMgY2xqcy5zcGVjXG4gICg6cmVmZXItY2xvanVyZSA6ZXhjbHVkZSBbKyAqIGFuZCBvciBjYXQgZGVmIGtleXMgbWVyZ2VdKVxuICAoOnJlcXVpcmUtbWFjcm9zIFtjbGpzLmNvcmUgOmFzIGNdXG4gICAgICAgICAgICAgICAgICAgW2NsanMuc3BlYyA6YXMgc10pXG4gICg6cmVxdWlyZSBbZ29vZy5vYmplY3QgOmFzIGdvYmpdXG4gICAgICAgICAgICBbY2xqcy5jb3JlIDphcyBjXVxuICAgICAgICAgICAgW2Nsb2p1cmUud2FsayA6YXMgd2Fsa11cbiAgICAgICAgICAgIFtjbGpzLnNwZWMuaW1wbC5nZW4gOmFzIGdlbl1cbiAgICAgICAgICAgIFtjbG9qdXJlLnN0cmluZyA6YXMgc3RyXSkpXG5cbihkZWYgXjpjb25zdCBNQVhfSU5UIDkwMDcxOTkyNTQ3NDA5OTEpXG5cbihkZWYgXjpkeW5hbWljICpyZWN1cnNpb24tbGltaXQqXG4gIFwiQSBzb2Z0IGxpbWl0IG9uIGhvdyBtYW55IHRpbWVzIGEgYnJhbmNoaW5nIHNwZWMgKG9yL2FsdC8qL29wdC1rZXlzL211bHRpLXNwZWMpXG4gIGNhbiBiZSByZWN1cnNlZCB0aHJvdWdoIGR1cmluZyBnZW5lcmF0aW9uLiBBZnRlciB0aGlzIGFcbiAgbm9uLXJlY3Vyc2l2ZSBicmFuY2ggd2lsbCBiZSBjaG9zZW4uXCJcbiAgNClcblxuKGRlZiBeOmR5bmFtaWMgKmZzcGVjLWl0ZXJhdGlvbnMqXG4gIFwiVGhlIG51bWJlciBvZiB0aW1lcyBhbiBhbm9ueW1vdXMgZm4gc3BlY2lmaWVkIGJ5IGZzcGVjIHdpbGwgYmUgKGdlbmVyYXRpdmVseSkgdGVzdGVkIGR1cmluZyBjb25mb3JtXCJcbiAgMjEpXG5cbihkZWYgXjpkeW5hbWljICpjb2xsLWNoZWNrLWxpbWl0KlxuICBcIlRoZSBudW1iZXIgb2YgaXRlbXMgdmFsaWRhdGVkIGluIGEgY29sbGVjdGlvbiBzcGVjJ2VkIHdpdGggJ2V2ZXJ5J1wiXG4gIDEwMSlcblxuKGRlZiBeOmR5bmFtaWMgKmNvbGwtZXJyb3ItbGltaXQqXG4gIFwiVGhlIG51bWJlciBvZiBlcnJvcnMgcmVwb3J0ZWQgYnkgZXhwbGFpbiBpbiBhIGNvbGxlY3Rpb24gc3BlYydlZCB3aXRoICdldmVyeSdcIlxuICAyMClcblxuKGRlZnByb3RvY29sIFNwZWNcbiAgKGNvbmZvcm0qIFtzcGVjIHhdKVxuICAodW5mb3JtKiBbc3BlYyB5XSlcbiAgKGV4cGxhaW4qIFtzcGVjIHBhdGggdmlhIGluIHhdKVxuICAoZ2VuKiBbc3BlYyBvdmVycmlkZXMgcGF0aCBybWFwXSlcbiAgKHdpdGgtZ2VuKiBbc3BlYyBnZm5dKVxuICAoZGVzY3JpYmUqIFtzcGVjXSkpXG5cbihkZWZvbmNlIF46cHJpdmF0ZSByZWdpc3RyeS1yZWYgKGF0b20ge30pKVxuXG4oZGVmbi0gZGVlcC1yZXNvbHZlIFtyZWcga11cbiAgKGxvb3AgW3NwZWMga11cbiAgICAoaWYgKGlkZW50PyBzcGVjKVxuICAgICAgKHJlY3VyIChnZXQgcmVnIHNwZWMpKVxuICAgICAgc3BlYykpKVxuXG4oZGVmbi0gcmVnLXJlc29sdmVcbiAgXCJyZXR1cm5zIHRoZSBzcGVjL3JlZ2V4IGF0IGVuZCBvZiBhbGlhcyBjaGFpbiBzdGFydGluZyB3aXRoIGssIG5pbCBpZiBub3QgZm91bmQsIGsgaWYgayBub3QgaWRlbnRcIlxuICBba11cbiAgKGlmIChpZGVudD8gaylcbiAgICAobGV0IFtyZWcgQHJlZ2lzdHJ5LXJlZlxuICAgICAgICAgIHNwZWMgKGdldCByZWcgayldXG4gICAgICAoaWYtbm90IChpZGVudD8gc3BlYylcbiAgICAgICAgc3BlY1xuICAgICAgICAoZGVlcC1yZXNvbHZlIHJlZyBzcGVjKSkpXG4gICAgaykpXG5cbihkZWZuLSByZWctcmVzb2x2ZSFcbiAgXCJyZXR1cm5zIHRoZSBzcGVjL3JlZ2V4IGF0IGVuZCBvZiBhbGlhcyBjaGFpbiBzdGFydGluZyB3aXRoIGssIHRocm93cyBpZiBub3QgZm91bmQsIGsgaWYgayBub3QgaWRlbnRcIlxuICBba11cbiAgKGlmIChpZGVudD8gaylcbiAgICAoYy9vciAocmVnLXJlc29sdmUgaylcbiAgICAgICAgICAodGhyb3cgKGpzL0Vycm9yLiAoc3RyIFwiVW5hYmxlIHRvIHJlc29sdmUgc3BlYzogXCIgaykpKSlcbiAgICBrKSlcblxuKGRlZm4gc3BlYz9cbiAgXCJyZXR1cm5zIHggaWYgeCBpcyBhIHNwZWMgb2JqZWN0LCBlbHNlIGxvZ2ljYWwgZmFsc2VcIlxuICBbeF1cbiAgKHdoZW4gKGltcGxlbWVudHM/IFNwZWMgeClcbiAgICB4KSlcblxuKGRlZm4gcmVnZXg/XG4gIFwicmV0dXJucyB4IGlmIHggaXMgYSAoY2xvanVyZS5zcGVjKSByZWdleCBvcCwgZWxzZSBsb2dpY2FsIGZhbHNlXCJcbiAgW3hdXG4gIChjL2FuZCAoOjpvcCB4KSB4KSlcblxuKGRlZm4tIHdpdGgtbmFtZSBbc3BlYyBuYW1lXVxuICAoY29uZFxuICAgKGlkZW50PyBzcGVjKSBzcGVjXG4gICAocmVnZXg/IHNwZWMpIChhc3NvYyBzcGVjIDo6bmFtZSBuYW1lKVxuXG4gICAoaW1wbGVtZW50cz8gSU1ldGEgc3BlYylcbiAgICh3aXRoLW1ldGEgc3BlYyAoYXNzb2MgKG1ldGEgc3BlYykgOjpuYW1lIG5hbWUpKSkpXG5cbihkZWZuLSBzcGVjLW5hbWUgW3NwZWNdXG4gIChjb25kXG4gICAoaWRlbnQ/IHNwZWMpIHNwZWNcblxuICAgKHJlZ2V4PyBzcGVjKSAoOjpuYW1lIHNwZWMpXG5cbiAgIChpbXBsZW1lbnRzPyBJTWV0YSBzcGVjKVxuICAgKC0+IChtZXRhIHNwZWMpIDo6bmFtZSkpKVxuXG4oZGVjbGFyZSBzcGVjLWltcGwpXG4oZGVjbGFyZSByZWdleC1zcGVjLWltcGwpXG5cbihkZWZuLSBtYXliZS1zcGVjXG4gIFwic3BlYy1vci1rIG11c3QgYmUgYSBzcGVjLCByZWdleCBvciByZXNvbHZhYmxlIGt3L3N5bSwgZWxzZSByZXR1cm5zIG5pbC5cIlxuICBbc3BlYy1vci1rXVxuICAobGV0IFtzIChjL29yIChjL2FuZCAoaWRlbnQ/IHNwZWMtb3ItaykgKHJlZy1yZXNvbHZlIHNwZWMtb3ItaykpXG4gICAgICAgICAgICAgICAgKHNwZWM/IHNwZWMtb3ItaylcbiAgICAgICAgICAgICAgICAocmVnZXg/IHNwZWMtb3ItaylcbiAgICAgICAgICAgICAgICBuaWwpXVxuICAgIChpZiAocmVnZXg/IHMpXG4gICAgICAod2l0aC1uYW1lIChyZWdleC1zcGVjLWltcGwgcyBuaWwpIChzcGVjLW5hbWUgcykpXG4gICAgICBzKSkpXG5cbihkZWZuLSB0aGUtc3BlY1xuICBcInNwZWMtb3ItayBtdXN0IGJlIGEgc3BlYywgcmVnZXggb3Iga3cvc3ltLCBlbHNlIHJldHVybnMgbmlsLiBUaHJvd3MgaWYgdW5yZXNvbHZhYmxlIGt3L3N5bVwiXG4gIFtzcGVjLW9yLWtdXG4gIChjL29yIChtYXliZS1zcGVjIHNwZWMtb3ItaylcbiAgICAgICAgKHdoZW4gKGlkZW50PyBzcGVjLW9yLWspXG4gICAgICAgICAgKHRocm93IChqcy9FcnJvci4gKHN0ciBcIlVuYWJsZSB0byByZXNvbHZlIHNwZWM6IFwiIHNwZWMtb3ItaykpKSkpKVxuXG4oZGVmcHJvdG9jb2wgU3BlY2l6ZVxuICAoc3BlY2l6ZSogW19dIFtfIGZvcm1dKSlcblxuKGV4dGVuZC1wcm90b2NvbCBTcGVjaXplXG4gIEtleXdvcmRcbiAgKHNwZWNpemUqIChba10gKHNwZWNpemUqIChyZWctcmVzb2x2ZSEgaykpKVxuICAgICAgICAgICAgKFtrIF9dIChzcGVjaXplKiAocmVnLXJlc29sdmUhIGspKSkpXG5cbiAgU3ltYm9sXG4gIChzcGVjaXplKiAoW3NdIChzcGVjaXplKiAocmVnLXJlc29sdmUhIHMpKSlcbiAgICAgICAgICAgIChbcyBfXSAoc3BlY2l6ZSogKHJlZy1yZXNvbHZlISBzKSkpKVxuXG4gIGRlZmF1bHRcbiAgKHNwZWNpemUqXG4gICAgKFtvXSAoc3BlYy1pbXBsIDo6dW5rbm93biBvIG5pbCBuaWwpKVxuICAgIChbbyBmb3JtXSAoc3BlYy1pbXBsIGZvcm0gbyBuaWwgbmlsKSkpKVxuXG4oZGVmbi0gc3BlY2l6ZVxuICAoW3NdIChjL29yIChzcGVjPyBzKSAoc3BlY2l6ZSogcykpKVxuICAoW3MgZm9ybV0gKGMvb3IgKHNwZWM/IHMpIChzcGVjaXplKiBzIGZvcm0pKSkpXG5cbihkZWZuIGludmFsaWQ/XG4gIFwidGVzdHMgdGhlIHZhbGlkaXR5IG9mIGEgY29uZm9ybSByZXR1cm4gdmFsdWVcIlxuICBbcmV0XVxuICAoa2V5d29yZC1pZGVudGljYWw/IDo6aW52YWxpZCByZXQpKVxuXG4oZGVmbiBjb25mb3JtXG4gIFwiR2l2ZW4gYSBzcGVjIGFuZCBhIHZhbHVlLCByZXR1cm5zIDpjbG9qdXJlLnNwZWMvaW52YWxpZCBpZiB2YWx1ZSBkb2VzIG5vdCBtYXRjaCBzcGVjLFxuICBlbHNlIHRoZSAocG9zc2libHkgZGVzdHJ1Y3R1cmVkKSB2YWx1ZS5cIlxuICBbc3BlYyB4XVxuICAoY29uZm9ybSogKHNwZWNpemUgc3BlYykgeCkpXG5cbihkZWZuIHVuZm9ybVxuICBcIkdpdmVuIGEgc3BlYyBhbmQgYSB2YWx1ZSBjcmVhdGVkIGJ5IG9yIGNvbXBsaWFudCB3aXRoIGEgY2FsbCB0b1xuICAnY29uZm9ybScgd2l0aCB0aGUgc2FtZSBzcGVjLCByZXR1cm5zIGEgdmFsdWUgd2l0aCBhbGwgY29uZm9ybVxuICAgZGVzdHJ1Y3R1cmluZyB1bmRvbmUuXCJcbiAgW3NwZWMgeF1cbiAgKHVuZm9ybSogKHNwZWNpemUgc3BlYykgeCkpXG5cbihkZWZuIGZvcm1cbiAgXCJyZXR1cm5zIHRoZSBzcGVjIGFzIGRhdGFcIlxuICBbc3BlY11cbiAgOztUT0RPIC0gaW5jb3Jwb3JhdGUgZ2Vuc1xuICAoZGVzY3JpYmUqIChzcGVjaXplIHNwZWMpKSlcblxuKGRlZm4gYWJicmV2IFtmb3JtXVxuICAoY29uZFxuICAgIChzZXE/IGZvcm0pXG4gICAgKHdhbGsvcG9zdHdhbGsgKGZuIFtmb3JtXVxuICAgICAgICAgICAgICAgICAgICAgKGNvbmRcbiAgICAgICAgICAgICAgICAgICAgICAgKGMvYW5kIChzeW1ib2w/IGZvcm0pIChuYW1lc3BhY2UgZm9ybSkpXG4gICAgICAgICAgICAgICAgICAgICAgICgtPiBmb3JtIG5hbWUgc3ltYm9sKVxuXG4gICAgICAgICAgICAgICAgICAgICAgIChjL2FuZCAoc2VxPyBmb3JtKSAoPSAnZm4gKGZpcnN0IGZvcm0pKSAoPSAnWyVdIChzZWNvbmQgZm9ybSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAobGFzdCBmb3JtKVxuXG4gICAgICAgICAgICAgICAgICAgICAgIDplbHNlIGZvcm0pKVxuICAgICAgICAgICAgICAgICAgIGZvcm0pXG5cbiAgICAoYy9hbmQgKHN5bWJvbD8gZm9ybSkgKG5hbWVzcGFjZSBmb3JtKSlcbiAgICAoLT4gZm9ybSBuYW1lIHN5bWJvbClcblxuICAgIDplbHNlIGZvcm0pKVxuXG4oZGVmbiBkZXNjcmliZVxuICBcInJldHVybnMgYW4gYWJicmV2aWF0ZWQgZGVzY3JpcHRpb24gb2YgdGhlIHNwZWMgYXMgZGF0YVwiXG4gIFtzcGVjXVxuICAoYWJicmV2IChmb3JtIHNwZWMpKSlcblxuKGRlZm4gd2l0aC1nZW5cbiAgXCJUYWtlcyBhIHNwZWMgYW5kIGEgbm8tYXJnLCBnZW5lcmF0b3ItcmV0dXJuaW5nIGZuIGFuZCByZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGF0IHNwZWMgdGhhdCB1c2VzIHRoYXQgZ2VuZXJhdG9yXCJcbiAgW3NwZWMgZ2VuLWZuXVxuICAobGV0IFtzcGVjIChyZWctcmVzb2x2ZSBzcGVjKV1cbiAgICAoaWYgKHJlZ2V4PyBzcGVjKVxuICAgICAgKGFzc29jIHNwZWMgOjpnZm4gZ2VuLWZuKVxuICAgICAgKHdpdGgtZ2VuKiAoc3BlY2l6ZSBzcGVjKSBnZW4tZm4pKSkpXG5cbihkZWZuIGV4cGxhaW4tZGF0YSogW3NwZWMgcGF0aCB2aWEgaW4geF1cbiAgKHdoZW4tbGV0IFtwcm9icyAoZXhwbGFpbiogKHNwZWNpemUgc3BlYykgcGF0aCB2aWEgaW4geCldXG4gICAgKHdoZW4tbm90IChlbXB0eT8gcHJvYnMpXG4gICAgICB7Ojpwcm9ibGVtcyBwcm9ic30pKSlcblxuKGRlZm4gZXhwbGFpbi1kYXRhXG4gIFwiR2l2ZW4gYSBzcGVjIGFuZCBhIHZhbHVlIHggd2hpY2ggb3VnaHQgdG8gY29uZm9ybSwgcmV0dXJucyBuaWwgaWYgeFxuICBjb25mb3JtcywgZWxzZSBhIG1hcCB3aXRoIGF0IGxlYXN0IHRoZSBrZXkgOjpwcm9ibGVtcyB3aG9zZSB2YWx1ZSBpc1xuICBhIGNvbGxlY3Rpb24gb2YgcHJvYmxlbS1tYXBzLCB3aGVyZSBwcm9ibGVtLW1hcCBoYXMgYXQgbGVhc3QgOnBhdGggOnByZWQgYW5kIDp2YWxcbiAga2V5cyBkZXNjcmliaW5nIHRoZSBwcmVkaWNhdGUgYW5kIHRoZSB2YWx1ZSB0aGF0IGZhaWxlZCBhdCB0aGF0XG4gIHBhdGguXCJcbiAgW3NwZWMgeF1cbiAgKGV4cGxhaW4tZGF0YSogc3BlYyBbXSAoaWYtbGV0IFtuYW1lIChzcGVjLW5hbWUgc3BlYyldIFtuYW1lXSBbXSkgW10geCkpXG5cbihkZWZuIGV4cGxhaW4tcHJpbnRlclxuICBcIkRlZmF1bHQgcHJpbnRlciBmb3IgZXhwbGFpbi1kYXRhLiBuaWwgaW5kaWNhdGVzIGEgc3VjY2Vzc2Z1bCB2YWxpZGF0aW9uLlwiXG4gIFtlZF1cbiAgKGlmIGVkXG4gICAgKHByaW50XG4gICAgICAod2l0aC1vdXQtc3RyXG4gICAgICAgIDs7KHBybiB7OmVkIGVkfSlcbiAgICAgICAgKGRvc2VxIFt7OmtleXMgW3BhdGggcHJlZCB2YWwgcmVhc29uIHZpYSBpbl0gOmFzIHByb2J9ICg6OnByb2JsZW1zIGVkKV1cbiAgICAgICAgICAod2hlbi1ub3QgKGVtcHR5PyBpbilcbiAgICAgICAgICAgIChwcmludCBcIkluOlwiIChwci1zdHIgaW4pIFwiXCIpKVxuICAgICAgICAgIChwcmludCBcInZhbDogXCIpXG4gICAgICAgICAgKHByIHZhbClcbiAgICAgICAgICAocHJpbnQgXCIgZmFpbHNcIilcbiAgICAgICAgICAod2hlbi1ub3QgKGVtcHR5PyB2aWEpXG4gICAgICAgICAgICAocHJpbnQgXCIgc3BlYzpcIiAocHItc3RyIChsYXN0IHZpYSkpKSlcbiAgICAgICAgICAod2hlbi1ub3QgKGVtcHR5PyBwYXRoKVxuICAgICAgICAgICAgKHByaW50IFwiIGF0OlwiIChwci1zdHIgcGF0aCkpKVxuICAgICAgICAgIChwcmludCBcIiBwcmVkaWNhdGU6IFwiKVxuICAgICAgICAgIChwciAoYWJicmV2IHByZWQpKVxuICAgICAgICAgICh3aGVuIHJlYXNvbiAocHJpbnQgXCIsIFwiIHJlYXNvbikpXG4gICAgICAgICAgKGRvc2VxIFtbayB2XSBwcm9iXVxuICAgICAgICAgICAgKHdoZW4tbm90ICgjezpwYXRoIDpwcmVkIDp2YWwgOnJlYXNvbiA6dmlhIDppbn0gaylcbiAgICAgICAgICAgICAgKHByaW50IFwiXFxuXFx0XCIgKHByLXN0ciBrKSBcIiBcIilcbiAgICAgICAgICAgICAgKHByIHYpKSlcbiAgICAgICAgICAobmV3bGluZSkpXG4gICAgICAgIChkb3NlcSBbW2sgdl0gZWRdXG4gICAgICAgICAgKHdoZW4tbm90ICgjezo6cHJvYmxlbXN9IGspXG4gICAgICAgICAgICAocHJpbnQgKHByLXN0ciBrKSBcIiBcIilcbiAgICAgICAgICAgIChwciB2KVxuICAgICAgICAgICAgKG5ld2xpbmUpKSkpKVxuICAgIChwcmludGxuIFwiU3VjY2VzcyFcIikpKVxuXG4oZGVmIF46ZHluYW1pYyAqZXhwbGFpbi1vdXQqIGV4cGxhaW4tcHJpbnRlcilcblxuKGRlZm4gZXhwbGFpbi1vdXRcbiAgXCJQcmludHMgZXhwbGFuYXRpb24gZGF0YSAocGVyICdleHBsYWluLWRhdGEnKSB0byAqb3V0KiB1c2luZyB0aGUgcHJpbnRlciBpbiAqZXhwbGFpbi1vdXQqLFxuICAgIGJ5IGRlZmF1bHQgZXhwbGFpbi1wcmludGVyLlwiXG4gIFtlZF1cbiAgKCpleHBsYWluLW91dCogZWQpKVxuXG4oZGVmbiBleHBsYWluXG4gIFwiR2l2ZW4gYSBzcGVjIGFuZCBhIHZhbHVlIHRoYXQgZmFpbHMgdG8gY29uZm9ybSwgcHJpbnRzIGFuIGV4cGxhbmF0aW9uIHRvICpvdXQqLlwiXG4gIFtzcGVjIHhdXG4gIChleHBsYWluLW91dCAoZXhwbGFpbi1kYXRhIHNwZWMgeCkpKVxuXG4oZGVmbiBleHBsYWluLXN0clxuICBcIkdpdmVuIGEgc3BlYyBhbmQgYSB2YWx1ZSB0aGF0IGZhaWxzIHRvIGNvbmZvcm0sIHJldHVybnMgYW4gZXhwbGFuYXRpb24gYXMgYSBzdHJpbmcuXCJcbiAgW3NwZWMgeF1cbiAgKHdpdGgtb3V0LXN0ciAoZXhwbGFpbiBzcGVjIHgpKSlcblxuKGRlY2xhcmUgdmFsaWQ/KVxuXG4oZGVmbi0gZ2Vuc3ViXG4gIFtzcGVjIG92ZXJyaWRlcyBwYXRoIHJtYXAgZm9ybV1cbiAgOzsocHJuIHs6c3BlYyBzcGVjIDpvdmVyIG92ZXJyaWRlcyA6cGF0aCBwYXRoIDpmb3JtIGZvcm19KVxuICAobGV0IFtzcGVjIChzcGVjaXplIHNwZWMpXVxuICAgIChpZi1sZXQgW2cgKGMvb3IgKHdoZW4tbGV0IFtnZm4gKGMvb3IgKGdldCBvdmVycmlkZXMgKGMvb3IgKHNwZWMtbmFtZSBzcGVjKSBzcGVjKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnZXQgb3ZlcnJpZGVzIHBhdGgpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgKGdmbikpXG4gICAgICAgICAgICAgICAgIChnZW4qIHNwZWMgb3ZlcnJpZGVzIHBhdGggcm1hcCkpXVxuICAgICAgKGdlbi9zdWNoLXRoYXQgIyh2YWxpZD8gc3BlYyAlKSBnIDEwMClcbiAgICAgICh0aHJvdyAoanMvRXJyb3IuIChzdHIgXCJVbmFibGUgdG8gY29uc3RydWN0IGdlbiBhdDogXCIgcGF0aCBcIiBmb3I6IFwiIChhYmJyZXYgZm9ybSkpKSkpKSlcblxuKGRlZm4gZ2VuXG4gIFwiR2l2ZW4gYSBzcGVjLCByZXR1cm5zIHRoZSBnZW5lcmF0b3IgZm9yIGl0LCBvciB0aHJvd3MgaWYgbm9uZSBjYW5cbiAgYmUgY29uc3RydWN0ZWQuIE9wdGlvbmFsbHkgYW4gb3ZlcnJpZGVzIG1hcCBjYW4gYmUgcHJvdmlkZWQgd2hpY2hcbiAgc2hvdWxkIG1hcCBzcGVjIG5hbWVzIG9yIHBhdGhzICh2ZWN0b3JzIG9mIGtleXdvcmRzKSB0byBuby1hcmdcbiAgZ2VuZXJhdG9yLWNyZWF0aW5nIGZucy4gVGhlc2Ugd2lsbCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGdlbmVyYXRvcnMgYXQgdGhvc2VcbiAgbmFtZXMvcGF0aHMuIE5vdGUgdGhhdCBwYXJlbnQgZ2VuZXJhdG9yIChpbiB0aGUgc3BlYyBvciBvdmVycmlkZXNcbiAgbWFwKSB3aWxsIHN1cGVyc2VkZSB0aG9zZSBvZiBhbnkgc3VidHJlZXMuIEEgZ2VuZXJhdG9yIGZvciBhIHJlZ2V4XG4gIG9wIG11c3QgYWx3YXlzIHJldHVybiBhIHNlcXVlbnRpYWwgY29sbGVjdGlvbiAoaS5lLiBhIGdlbmVyYXRvciBmb3JcbiAgcy8/IHNob3VsZCByZXR1cm4gZWl0aGVyIGFuIGVtcHR5IHNlcXVlbmNlL3ZlY3RvciBvciBhXG4gIHNlcXVlbmNlL3ZlY3RvciB3aXRoIG9uZSBpdGVtIGluIGl0KVwiXG4gIChbc3BlY10gKGdlbiBzcGVjIG5pbCkpXG4gIChbc3BlYyBvdmVycmlkZXNdIChnZW5zdWIgc3BlYyBvdmVycmlkZXMgW10gezo6cmVjdXJzaW9uLWxpbWl0ICpyZWN1cnNpb24tbGltaXQqfSBzcGVjKSkpXG5cbihkZWZuIF46c2tpcC13aWtpIGRlZi1pbXBsXG4gIFwiRG8gbm90IGNhbGwgdGhpcyBkaXJlY3RseSwgdXNlICdkZWYnXCJcbiAgW2sgZm9ybSBzcGVjXVxuICAoYXNzZXJ0IChjL2FuZCAoaWRlbnQ/IGspIChuYW1lc3BhY2UgaykpIFwiayBtdXN0IGJlIG5hbWVzcGFjZWQga2V5d29yZCBvciByZXNvbHZlYWJsZSBzeW1ib2xcIilcbiAgKGxldCBbc3BlYyAoaWYgKGMvb3IgKHNwZWM/IHNwZWMpIChyZWdleD8gc3BlYykgKGdldCBAcmVnaXN0cnktcmVmIHNwZWMpKVxuICAgICAgICAgICAgICAgc3BlY1xuICAgICAgICAgICAgICAgKHNwZWMtaW1wbCBmb3JtIHNwZWMgbmlsIG5pbCkpXVxuICAgIChzd2FwISByZWdpc3RyeS1yZWYgYXNzb2MgayAod2l0aC1uYW1lIHNwZWMgaykpXG4gICAgaykpXG5cbihkZWZuIHJlZ2lzdHJ5XG4gIFwicmV0dXJucyB0aGUgcmVnaXN0cnkgbWFwLCBwcmVmZXIgJ2dldC1zcGVjJyB0byBsb29rdXAgYSBzcGVjIGJ5IG5hbWVcIlxuICBbXVxuICBAcmVnaXN0cnktcmVmKVxuXG4oZGVmbi0gLT5zeW1cbiAgXCJSZXR1cm5zIGEgc3ltYm9sIGZyb20gYSBzeW1ib2wgb3IgdmFyXCJcbiAgW3hdXG4gIChpZiAodmFyPyB4KVxuICAgICguLXN5bSB4KVxuICAgIHgpKVxuXG4oZGVmbiBnZXQtc3BlY1xuICBcIlJldHVybnMgc3BlYyByZWdpc3RlcmVkIGZvciBrZXl3b3JkL3N5bWJvbC92YXIgaywgb3IgbmlsLlwiXG4gIFtrXVxuICAoZ2V0IChyZWdpc3RyeSkgKGlmIChrZXl3b3JkPyBrKSBrICgtPnN5bSBrKSkpKVxuXG4oZGVjbGFyZSBtYXAtc3BlYylcblxuKGRlZm4tIG1hY3JvZXhwYW5kLWNoZWNrXG4gIFt2IGFyZ3NdXG4gIChsZXQgW3NwZWNzIChnZXQtc3BlYyB2KV1cbiAgICAod2hlbi1sZXQgW2FyZy1zcGVjICg6YXJncyBzcGVjcyldXG4gICAgICAod2hlbiAoaW52YWxpZD8gKGNvbmZvcm0gYXJnLXNwZWMgYXJncykpXG4gICAgICAgIChsZXQgW2VkIChhc3NvYyAoZXhwbGFpbi1kYXRhKiBhcmctc3BlYyBbOmFyZ3NdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChpZi1sZXQgW25hbWUgKHNwZWMtbmFtZSBhcmctc3BlYyldIFtuYW1lXSBbXSkgW10gYXJncylcbiAgICAgICAgICAgICAgICAgICA6OmFyZ3MgYXJncyldXG4gICAgICAgICAgKHRocm93IChqcy9FcnJvci5cbiAgICAgICAgICAgICAgICAgICAoc3RyXG4gICAgICAgICAgICAgICAgICAgICBcIkNhbGwgdG8gXCIgKC0+c3ltIHYpIFwiIGRpZCBub3QgY29uZm9ybSB0byBzcGVjOlxcblwiXG4gICAgICAgICAgICAgICAgICAgICAod2l0aC1vdXQtc3RyIChleHBsYWluLW91dCBlZCkpKSkpKSkpKSlcblxuOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IGltcGwgOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7XG4oZGVmbi0gcmVjdXItbGltaXQ/IFtybWFwIGlkIHBhdGgga11cbiAgKGMvYW5kICg+IChnZXQgcm1hcCBpZCkgKDo6cmVjdXJzaW9uLWxpbWl0IHJtYXApKVxuICAgICAgICAgKGNvbnRhaW5zPyAoc2V0IHBhdGgpIGspKSlcblxuKGRlZm4tIGluY2sgW20ga11cbiAgKGFzc29jIG0gayAoaW5jIChjL29yIChnZXQgbSBrKSAwKSkpKVxuXG4oZGVmbi0gZHRcbiAgKFtwcmVkIHggZm9ybV0gKGR0IHByZWQgeCBmb3JtIG5pbCkpXG4gIChbcHJlZCB4IGZvcm0gY3ByZWQ/XVxuICAgKGlmIHByZWRcbiAgICAgKGlmLWxldCBbc3BlYyAodGhlLXNwZWMgcHJlZCldXG4gICAgICAgKGNvbmZvcm0gc3BlYyB4KVxuICAgICAgIChpZiAoaWZuPyBwcmVkKVxuICAgICAgICAgKGlmIGNwcmVkP1xuICAgICAgICAgICAocHJlZCB4KVxuICAgICAgICAgICAoaWYgKHByZWQgeCkgeCA6OmludmFsaWQpKVxuICAgICAgICAgKHRocm93IChqcy9FcnJvci4gKHN0ciAocHItc3RyIGZvcm0pIFwiIGlzIG5vdCBhIGZuLCBleHBlY3RlZCBwcmVkaWNhdGUgZm5cIikpKSkpXG4gICAgIHgpKSlcblxuKGRlZm4gdmFsaWQ/XG4gIFwiSGVscGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0cnVlIHdoZW4geCBpcyB2YWxpZCBmb3Igc3BlYy5cIlxuICAoW3NwZWMgeF1cbiAgIChsZXQgW3NwZWMgKHNwZWNpemUgc3BlYyldXG4gICAgIChub3QgKGludmFsaWQ/IChjb25mb3JtKiBzcGVjIHgpKSkpKVxuICAoW3NwZWMgeCBmb3JtXVxuICAgKGxldCBbc3BlYyAoc3BlY2l6ZSBzcGVjIGZvcm0pXVxuICAgICAobm90IChpbnZhbGlkPyAoY29uZm9ybSogc3BlYyB4KSkpKSkpXG5cbihkZWZuLSBwdmFsaWQ/XG4gIFwiaW50ZXJuYWwgaGVscGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0cnVlIHdoZW4geCBpcyB2YWxpZCBmb3Igc3BlYy5cIlxuICAoW3ByZWQgeF1cbiAgIChub3QgKGludmFsaWQ/IChkdCBwcmVkIHggOjp1bmtub3duKSkpKVxuICAoW3ByZWQgeCBmb3JtXVxuICAgKG5vdCAoaW52YWxpZD8gKGR0IHByZWQgeCBmb3JtKSkpKSlcblxuKGRlZm4tIGV4cGxhaW4tMSBbZm9ybSBwcmVkIHBhdGggdmlhIGluIHZdXG4gIDs7KHBybiB7OmZvcm0gZm9ybSA6cHJlZCBwcmVkIDpwYXRoIHBhdGggOmluIGluIDp2IHZ9KVxuICAobGV0IFtwcmVkIChtYXliZS1zcGVjIHByZWQpXVxuICAgIChpZiAoc3BlYz8gcHJlZClcbiAgICAgIChleHBsYWluKiBwcmVkIHBhdGggKGlmLWxldCBbbmFtZSAoc3BlYy1uYW1lIHByZWQpXSAoY29uaiB2aWEgbmFtZSkgdmlhKSBpbiB2KVxuICAgICAgW3s6cGF0aCBwYXRoIDpwcmVkIChhYmJyZXYgZm9ybSkgOnZhbCB2IDp2aWEgdmlhIDppbiBpbn1dKSkpXG5cbihkZWZuIF46c2tpcC13aWtpIG1hcC1zcGVjLWltcGxcbiAgXCJEbyBub3QgY2FsbCB0aGlzIGRpcmVjdGx5LCB1c2UgJ3NwZWMnIHdpdGggYSBtYXAgYXJndW1lbnRcIlxuICBbezprZXlzIFtyZXEtdW4gb3B0LXVuIGtleXMtcHJlZCBwcmVkLWV4cHJzIG9wdC1rZXlzIHJlcS1zcGVjcyByZXEgcmVxLWtleXMgb3B0LXNwZWNzIHByZWQtZm9ybXMgb3B0IGdmbl1cbiAgICA6YXMgYXJnbX1dXG4gIChsZXQgW2stPnMgKHppcG1hcCAoY29uY2F0IHJlcS1rZXlzIG9wdC1rZXlzKSAoY29uY2F0IHJlcS1zcGVjcyBvcHQtc3BlY3MpKVxuICAgICAgICBrZXlzLT5zcGVjbmFtZXMgIyhjL29yIChrLT5zICUpICUpXG4gICAgICAgIGlkIChyYW5kb20tdXVpZCldXG4gICAgKHJlaWZ5XG4gICAgICBTcGVjaXplXG4gICAgICAoc3BlY2l6ZSogW3NdIHMpXG4gICAgICAoc3BlY2l6ZSogW3MgX10gcylcblxuICAgICAgU3BlY1xuICAgICAgKGNvbmZvcm0qIFtfIG1dXG4gICAgICAgIChpZiAoa2V5cy1wcmVkIG0pXG4gICAgICAgICAgKGxldCBbcmVnIChyZWdpc3RyeSldXG4gICAgICAgICAgICAobG9vcCBbcmV0IG0sIFtbayB2XSAmIGtzIDphcyBrZXlzXSBtXVxuICAgICAgICAgICAgICAoaWYga2V5c1xuICAgICAgICAgICAgICAgIChsZXQgW3NuYW1lIChrZXlzLT5zcGVjbmFtZXMgayldXG4gICAgICAgICAgICAgICAgICAoaWYtbGV0IFtzIChnZXQgcmVnIHNuYW1lKV1cbiAgICAgICAgICAgICAgICAgICAgKGxldCBbY3YgKGNvbmZvcm0gcyB2KV1cbiAgICAgICAgICAgICAgICAgICAgICAoaWYgKGludmFsaWQ/IGN2KVxuICAgICAgICAgICAgICAgICAgICAgICAgOjppbnZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVjdXIgKGlmIChpZGVudGljYWw/IGN2IHYpIHJldCAoYXNzb2MgcmV0IGsgY3YpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrcykpKVxuICAgICAgICAgICAgICAgICAgICAocmVjdXIgcmV0IGtzKSkpXG4gICAgICAgICAgICAgICAgcmV0KSkpXG4gICAgICAgICAgOjppbnZhbGlkKSlcbiAgICAgICh1bmZvcm0qIFtfIG1dXG4gICAgICAgIChsZXQgW3JlZyAocmVnaXN0cnkpXVxuICAgICAgICAgIChsb29wIFtyZXQgbSwgW2sgJiBrcyA6YXMga2V5c10gKGMva2V5cyBtKV1cbiAgICAgICAgICAgIChpZiBrZXlzXG4gICAgICAgICAgICAgIChpZiAoY29udGFpbnM/IHJlZyAoa2V5cy0+c3BlY25hbWVzIGspKVxuICAgICAgICAgICAgICAgIChsZXQgW2N2IChnZXQgbSBrKVxuICAgICAgICAgICAgICAgICAgICAgIHYgKHVuZm9ybSAoa2V5cy0+c3BlY25hbWVzIGspIGN2KV1cbiAgICAgICAgICAgICAgICAgIChyZWN1ciAoaWYgKGlkZW50aWNhbD8gY3YgdikgcmV0IChhc3NvYyByZXQgayB2KSlcbiAgICAgICAgICAgICAgICAgICAga3MpKVxuICAgICAgICAgICAgICAgIChyZWN1ciByZXQga3MpKVxuICAgICAgICAgICAgICByZXQpKSkpXG4gICAgICAoZXhwbGFpbiogW18gcGF0aCB2aWEgaW4geF1cbiAgICAgICAgKGlmLW5vdCAobWFwPyB4KVxuICAgICAgICAgIFt7OnBhdGggcGF0aCA6cHJlZCAnbWFwPyA6dmFsIHggOnZpYSB2aWEgOmluIGlufV1cbiAgICAgICAgICAobGV0IFtyZWcgKHJlZ2lzdHJ5KV1cbiAgICAgICAgICAgIChhcHBseSBjb25jYXRcbiAgICAgICAgICAgICAgICAgICAod2hlbi1sZXQgW3Byb2JzICgtPj4gKG1hcCAoZm4gW3ByZWQgZm9ybV0gKHdoZW4tbm90IChwcmVkIHgpIChhYmJyZXYgZm9ybSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWQtZXhwcnMgcHJlZC1mb3JtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtlZXAgaWRlbnRpdHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcSldXG4gICAgICAgICAgICAgICAgICAgICAobWFwXG4gICAgICAgICAgICAgICAgICAgICAgICMoaWRlbnRpdHkgezpwYXRoIHBhdGggOnByZWQgJSA6dmFsIHggOnZpYSB2aWEgOmluIGlufSlcbiAgICAgICAgICAgICAgICAgICAgICAgcHJvYnMpKVxuICAgICAgICAgICAgICAgICAgIChtYXAgKGZuIFtbayB2XV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHdoZW4tbm90IChjL29yIChub3QgKGNvbnRhaW5zPyByZWcgKGtleXMtPnNwZWNuYW1lcyBrKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwdmFsaWQ/IChrZXlzLT5zcGVjbmFtZXMgaykgdiBrKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXhwbGFpbi0xIChrZXlzLT5zcGVjbmFtZXMgaykgKGtleXMtPnNwZWNuYW1lcyBrKSAoY29uaiBwYXRoIGspIHZpYSAoY29uaiBpbiBrKSB2KSkpXG4gICAgICAgICAgICAgICAgICAgICAoc2VxIHgpKSkpKSlcbiAgICAgIChnZW4qIFtfIG92ZXJyaWRlcyBwYXRoIHJtYXBdXG4gICAgICAgIChpZiBnZm5cbiAgICAgICAgICAoZ2ZuKVxuICAgICAgICAgIChsZXQgW3JtYXAgKGluY2sgcm1hcCBpZClcbiAgICAgICAgICAgICAgICBnZW4gKGZuIFtrIHNdIChnZW5zdWIgcyBvdmVycmlkZXMgKGNvbmogcGF0aCBrKSBybWFwIGspKVxuICAgICAgICAgICAgICAgIG9nZW4gKGZuIFtrIHNdXG4gICAgICAgICAgICAgICAgICAgICAgICh3aGVuLW5vdCAocmVjdXItbGltaXQ/IHJtYXAgaWQgcGF0aCBrKVxuICAgICAgICAgICAgICAgICAgICAgICAgIFtrIChnZW4vZGVsYXkgKGdlbnN1YiBzIG92ZXJyaWRlcyAoY29uaiBwYXRoIGspIHJtYXAgaykpXSkpXG4gICAgICAgICAgICAgICAgcmVxLWdlbnMgKG1hcCBnZW4gcmVxLWtleXMgcmVxLXNwZWNzKVxuICAgICAgICAgICAgICAgIG9wdC1nZW5zIChyZW1vdmUgbmlsPyAobWFwIG9nZW4gb3B0LWtleXMgb3B0LXNwZWNzKSldXG4gICAgICAgICAgICAod2hlbiAoZXZlcnk/IGlkZW50aXR5IChjb25jYXQgcmVxLWdlbnMgb3B0LWdlbnMpKVxuICAgICAgICAgICAgICAobGV0IFtyZXFzICh6aXBtYXAgcmVxLWtleXMgcmVxLWdlbnMpXG4gICAgICAgICAgICAgICAgICAgIG9wdHMgKGludG8ge30gb3B0LWdlbnMpXVxuICAgICAgICAgICAgICAgIChnZW4vYmluZCAoZ2VuL2Nob29zZSAwIChjb3VudCBvcHRzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIyhsZXQgW2FyZ3MgKGNvbmNhdCAoc2VxIHJlcXMpICh3aGVuIChzZXEgb3B0cykgKHNodWZmbGUgKHNlcSBvcHRzKSkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoLT4+IGFyZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YWtlIChjLysgJSAoY291bnQgcmVxcykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFwcGx5IGNvbmNhdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhcHBseSBnZW4vaGFzaC1tYXApKSkpKSkpKSlcbiAgICAgICh3aXRoLWdlbiogW18gZ2ZuXSAobWFwLXNwZWMtaW1wbCAoYXNzb2MgYXJnbSA6Z2ZuIGdmbikpKVxuICAgICAgKGRlc2NyaWJlKiBbX10gKGNvbnMgYGtleXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25kLT4gW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxIChjb25qIDpyZXEgcmVxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHQgKGNvbmogOm9wdCBvcHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS11biAoY29uaiA6cmVxLXVuIHJlcS11bilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0LXVuIChjb25qIDpvcHQtdW4gb3B0LXVuKSkpKSkpKVxuXG4oZGVmbiBeOnNraXAtd2lraSBzcGVjLWltcGxcbiAgXCJEbyBub3QgY2FsbCB0aGlzIGRpcmVjdGx5LCB1c2UgJ3NwZWMnXCJcbiAgKFtmb3JtIHByZWQgZ2ZuIGNwcmVkP10gKHNwZWMtaW1wbCBmb3JtIHByZWQgZ2ZuIGNwcmVkPyBuaWwpKVxuICAoW2Zvcm0gcHJlZCBnZm4gY3ByZWQ/IHVuY11cbiAgIChjb25kXG4gICAgIChzcGVjPyBwcmVkKSAoY29uZC0+IHByZWQgZ2ZuICh3aXRoLWdlbiBnZm4pKVxuICAgICAocmVnZXg/IHByZWQpIChyZWdleC1zcGVjLWltcGwgcHJlZCBnZm4pXG4gICAgIChpZGVudD8gcHJlZCkgKGNvbmQtPiAodGhlLXNwZWMgcHJlZCkgZ2ZuICh3aXRoLWdlbiBnZm4pKVxuICAgICA6ZWxzZVxuICAgICAocmVpZnlcbiAgICAgICBTcGVjaXplXG4gICAgICAgKHNwZWNpemUqIFtzXSBzKVxuICAgICAgIChzcGVjaXplKiBbcyBfXSBzKVxuXG4gICAgICAgU3BlY1xuICAgICAgIChjb25mb3JtKiBbXyB4XSAobGV0IFtyZXQgKHByZWQgeCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGlmIGNwcmVkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgcmV0IHggOjppbnZhbGlkKSkpKVxuICAgICAgICh1bmZvcm0qIFtfIHhdIChpZiBjcHJlZD9cbiAgICAgICAgICAgICAgICAgICAgICAgIChpZiB1bmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHVuYyB4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhyb3cgKGpzL0Vycm9yLiBcIm5vIHVuZm9ybSBmbiBmb3IgY29uZm9ybWVyXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHgpKVxuICAgICAgIChleHBsYWluKiBbXyBwYXRoIHZpYSBpbiB4XVxuICAgICAgICAgKHdoZW4gKGludmFsaWQ/IChkdCBwcmVkIHggZm9ybSBjcHJlZD8pKVxuICAgICAgICAgICBbezpwYXRoIHBhdGggOnByZWQgKGFiYnJldiBmb3JtKSA6dmFsIHggOnZpYSB2aWEgOmluIGlufV0pKVxuICAgICAgIChnZW4qIFtfIF8gXyBfXSAoaWYgZ2ZuXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGdmbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAoZ2VuL2dlbi1mb3ItcHJlZCBwcmVkKSkpXG4gICAgICAgKHdpdGgtZ2VuKiBbXyBnZm5dIChzcGVjLWltcGwgZm9ybSBwcmVkIGdmbiBjcHJlZD8gdW5jKSlcbiAgICAgICAoZGVzY3JpYmUqIFtfXSBmb3JtKSkpKSlcblxuKGRlZm4gXjpza2lwLXdpa2kgbXVsdGktc3BlYy1pbXBsXG4gIFwiRG8gbm90IGNhbGwgdGhpcyBkaXJlY3RseSwgdXNlICdtdWx0aS1zcGVjJ1wiXG4gIChbZm9ybSBtbXZhciByZXRhZ10gKG11bHRpLXNwZWMtaW1wbCBmb3JtIG1tdmFyIHJldGFnIG5pbCkpXG4gIChbZm9ybSBtbXZhciByZXRhZyBnZm5dXG4gICAobGV0IFtpZCAocmFuZG9tLXV1aWQpXG4gICAgICAgICBwcmVkeCAjKGxldCBbbW0gQG1tdmFyXVxuICAgICAgICAgICAgICAgICAoYy9hbmQgKC1nZXQtbWV0aG9kIG1tICgoLWRpc3BhdGNoLWZuIG1tKSAlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIChtbSAlKSkpXG4gICAgICAgICBkdmFsICMoKC1kaXNwYXRjaC1mbiBAbW12YXIpICUpXG4gICAgICAgICB0YWcgKGlmIChrZXl3b3JkPyByZXRhZylcbiAgICAgICAgICAgICAgICMoYXNzb2MgJTEgcmV0YWcgJTIpXG4gICAgICAgICAgICAgICByZXRhZyldXG4gICAgIChyZWlmeVxuICAgICAgIFNwZWNpemVcbiAgICAgICAoc3BlY2l6ZSogW3NdIHMpXG4gICAgICAgKHNwZWNpemUqIFtzIF9dIHMpXG5cbiAgICAgICBTcGVjXG4gICAgICAgKGNvbmZvcm0qIFtfIHhdIChpZi1sZXQgW3ByZWQgKHByZWR4IHgpXVxuICAgICAgICAgICAgICAgICAgICAgICAgIChkdCBwcmVkIHggZm9ybSlcbiAgICAgICAgICAgICAgICAgICAgICAgICA6OmludmFsaWQpKVxuICAgICAgICh1bmZvcm0qIFtfIHhdIChpZi1sZXQgW3ByZWQgKHByZWR4IHgpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKHVuZm9ybSBwcmVkIHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhyb3cgKGpzL0Vycm9yLiAoc3RyIFwiTm8gbWV0aG9kIG9mOiBcIiBmb3JtIFwiIGZvciBkaXNwYXRjaCB2YWx1ZTogXCIgKGR2YWwgeCkpKSkpKVxuICAgICAgIChleHBsYWluKiBbXyBwYXRoIHZpYSBpbiB4XVxuICAgICAgICAgKGxldCBbZHYgKGR2YWwgeClcbiAgICAgICAgICAgICAgIHBhdGggKGNvbmogcGF0aCBkdildXG4gICAgICAgICAgIChpZi1sZXQgW3ByZWQgKHByZWR4IHgpXVxuICAgICAgICAgICAgIChleHBsYWluLTEgZm9ybSBwcmVkIHBhdGggdmlhIGluIHgpXG4gICAgICAgICAgICAgW3s6cGF0aCBwYXRoIDpwcmVkIChhYmJyZXYgZm9ybSkgOnZhbCB4IDpyZWFzb24gXCJubyBtZXRob2RcIiA6dmlhIHZpYSA6aW4gaW59XSkpKVxuICAgICAgIChnZW4qIFtfIG92ZXJyaWRlcyBwYXRoIHJtYXBdXG4gICAgICAgICAoaWYgZ2ZuXG4gICAgICAgICAgIChnZm4pXG4gICAgICAgICAgIChsZXQgW2dlbiAoZm4gW1trIGZdXVxuICAgICAgICAgICAgICAgICAgICAgICAobGV0IFtwIChmIG5pbCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGxldCBbcm1hcCAoaW5jayBybWFwIGlkKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICh3aGVuLW5vdCAocmVjdXItbGltaXQ/IHJtYXAgaWQgcGF0aCBrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2VuL2RlbGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdlbi9mbWFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjKHRhZyAlIGspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2Vuc3ViIHAgb3ZlcnJpZGVzIChjb25qIHBhdGggaykgcm1hcCAobGlzdCAnbWV0aG9kIGZvcm0gaykpKSkpKSkpXG4gICAgICAgICAgICAgICAgIGdzICgtPj4gKG1ldGhvZHMgQG1tdmFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgIChyZW1vdmUgKGZuIFtba11dIChpbnZhbGlkPyBrKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKG1hcCBnZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgKHJlbW92ZSBuaWw/KSldXG4gICAgICAgICAgICAgKHdoZW4gKGV2ZXJ5PyBpZGVudGl0eSBncylcbiAgICAgICAgICAgICAgIChnZW4vb25lLW9mIGdzKSkpKSlcbiAgICAgICAod2l0aC1nZW4qIFtfIGdmbl0gKG11bHRpLXNwZWMtaW1wbCBmb3JtIG1tdmFyIHJldGFnIGdmbikpXG4gICAgICAgKGRlc2NyaWJlKiBbX10gYChtdWx0aS1zcGVjIH5mb3JtIH5yZXRhZykpKSkpKVxuXG4oZGVmbiBeOnNraXAtd2lraSB0dXBsZS1pbXBsXG4gIFwiRG8gbm90IGNhbGwgdGhpcyBkaXJlY3RseSwgdXNlICd0dXBsZSdcIlxuICAoW2Zvcm1zIHByZWRzXSAodHVwbGUtaW1wbCBmb3JtcyBwcmVkcyBuaWwpKVxuICAoW2Zvcm1zIHByZWRzIGdmbl1cbiAgIChsZXQgW3NwZWNzIChkZWxheSAobWFwdiBzcGVjaXplIHByZWRzIGZvcm1zKSlcbiAgICAgICAgIGNudCAoY291bnQgcHJlZHMpXVxuICAgICAocmVpZnlcbiAgICAgICBTcGVjaXplXG4gICAgICAgKHNwZWNpemUqIFtzXSBzKVxuICAgICAgIChzcGVjaXplKiBbcyBfXSBzKVxuXG4gICAgICAgU3BlY1xuICAgICAgIChjb25mb3JtKiBbXyB4XVxuICAgICAgICAgKGxldCBbc3BlY3MgQHNwZWNzXVxuICAgICAgICAgICAoaWYtbm90IChjL2FuZCAodmVjdG9yPyB4KVxuICAgICAgICAgICAgICAgICAgICAgKD0gKGNvdW50IHgpIGNudCkpXG4gICAgICAgICAgICAgOjppbnZhbGlkXG4gICAgICAgICAgICAgKGxvb3AgW3JldCB4LCBpIDBdXG4gICAgICAgICAgICAgICAoaWYgKD0gaSBjbnQpXG4gICAgICAgICAgICAgICAgIHJldFxuICAgICAgICAgICAgICAgICAobGV0IFt2ICh4IGkpXG4gICAgICAgICAgICAgICAgICAgICAgIGN2IChjb25mb3JtKiAoc3BlY3MgaSkgdildXG4gICAgICAgICAgICAgICAgICAgKGlmIChpbnZhbGlkPyBjdilcbiAgICAgICAgICAgICAgICAgICAgIDo6aW52YWxpZFxuICAgICAgICAgICAgICAgICAgICAgKHJlY3VyIChpZiAoaWRlbnRpY2FsPyBjdiB2KSByZXQgKGFzc29jIHJldCBpIGN2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW5jIGkpKSkpKSkpKSlcbiAgICAgICAodW5mb3JtKiBbXyB4XVxuICAgICAgICAgKGFzc2VydCAoYy9hbmQgKHZlY3Rvcj8geClcbiAgICAgICAgICAgICAgICAgICAoPSAoY291bnQgeCkgKGNvdW50IHByZWRzKSkpKVxuICAgICAgICAgKGxvb3AgW3JldCB4LCBpIDBdXG4gICAgICAgICAgIChpZiAoPSBpIChjb3VudCB4KSlcbiAgICAgICAgICAgICByZXRcbiAgICAgICAgICAgICAobGV0IFtjdiAoeCBpKVxuICAgICAgICAgICAgICAgICAgIHYgKHVuZm9ybSAocHJlZHMgaSkgY3YpXVxuICAgICAgICAgICAgICAgKHJlY3VyIChpZiAoaWRlbnRpY2FsPyBjdiB2KSByZXQgKGFzc29jIHJldCBpIHYpKVxuICAgICAgICAgICAgICAgICAoaW5jIGkpKSkpKSlcbiAgICAgICAoZXhwbGFpbiogW18gcGF0aCB2aWEgaW4geF1cbiAgICAgICAgIChjb25kXG4gICAgICAgICAgIChub3QgKHZlY3Rvcj8geCkpXG4gICAgICAgICAgIFt7OnBhdGggcGF0aCA6cHJlZCAndmVjdG9yPyA6dmFsIHggOnZpYSB2aWEgOmluIGlufV1cblxuICAgICAgICAgICAobm90PSAoY291bnQgeCkgKGNvdW50IHByZWRzKSlcbiAgICAgICAgICAgW3s6cGF0aCBwYXRoIDpwcmVkIGAoPSAoY291bnQgficlKSB+KGNvdW50IHByZWRzKSkgOnZhbCB4IDp2aWEgdmlhIDppbiBpbn1dXG5cbiAgICAgICAgICAgOmVsc2VcbiAgICAgICAgICAgKGFwcGx5IGNvbmNhdFxuICAgICAgICAgICAgIChtYXAgKGZuIFtpIGZvcm0gcHJlZF1cbiAgICAgICAgICAgICAgICAgICAgKGxldCBbdiAoeCBpKV1cbiAgICAgICAgICAgICAgICAgICAgICAod2hlbi1ub3QgKHB2YWxpZD8gcHJlZCB2KVxuICAgICAgICAgICAgICAgICAgICAgICAgKGV4cGxhaW4tMSBmb3JtIHByZWQgKGNvbmogcGF0aCBpKSB2aWEgKGNvbmogaW4gaSkgdikpKSlcbiAgICAgICAgICAgICAgIChyYW5nZSAoY291bnQgcHJlZHMpKSBmb3JtcyBwcmVkcykpKSlcbiAgICAgICAoZ2VuKiBbXyBvdmVycmlkZXMgcGF0aCBybWFwXVxuICAgICAgICAgKGlmIGdmblxuICAgICAgICAgICAoZ2ZuKVxuICAgICAgICAgICAobGV0IFtnZW4gKGZuIFtpIHAgZl1cbiAgICAgICAgICAgICAgICAgICAgICAgKGdlbnN1YiBwIG92ZXJyaWRlcyAoY29uaiBwYXRoIGkpIHJtYXAgZikpXG4gICAgICAgICAgICAgICAgIGdzIChtYXAgZ2VuIChyYW5nZSAoY291bnQgcHJlZHMpKSBwcmVkcyBmb3JtcyldXG4gICAgICAgICAgICAgKHdoZW4gKGV2ZXJ5PyBpZGVudGl0eSBncylcbiAgICAgICAgICAgICAgIChhcHBseSBnZW4vdHVwbGUgZ3MpKSkpKVxuICAgICAgICh3aXRoLWdlbiogW18gZ2ZuXSAodHVwbGUtaW1wbCBmb3JtcyBwcmVkcyBnZm4pKVxuICAgICAgIChkZXNjcmliZSogW19dIGAodHVwbGUgfkBmb3JtcykpKSkpKVxuXG4oZGVmbi0gdGFnZ2VkLXJldCBbdl1cbiAgKHNwZWNpZnkhIHZcbiAgICBJTWFwRW50cnlcbiAgICAoLWtleSBbX10gKC1udGggdiAwKSlcbiAgICAoLXZhbCBbX10gKC1udGggdiAxKSkpKVxuXG4oZGVmbiBeOnNraXAtd2lraSBvci1zcGVjLWltcGxcbiAgXCJEbyBub3QgY2FsbCB0aGlzIGRpcmVjdGx5LCB1c2UgJ29yJ1wiXG4gIFtrZXlzIGZvcm1zIHByZWRzIGdmbl1cbiAgKGxldCBbaWQgKHJhbmRvbS11dWlkKVxuICAgICAgICBrcHMgKHppcG1hcCBrZXlzIHByZWRzKVxuICAgICAgICBzcGVjcyAoZGVsYXkgKG1hcHYgc3BlY2l6ZSBwcmVkcyBmb3JtcykpXG4gICAgICAgIGNmb3JtIChjYXNlIChjb3VudCBwcmVkcylcbiAgICAgICAgICAgICAgICAyIChmbiBbeF1cbiAgICAgICAgICAgICAgICAgICAgKGxldCBbc3BlY3MgQHNwZWNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldCAoY29uZm9ybSogKHNwZWNzIDApIHgpXVxuICAgICAgICAgICAgICAgICAgICAgIChpZiAoaW52YWxpZD8gcmV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgKGxldCBbcmV0IChjb25mb3JtKiAoc3BlY3MgMSkgeCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChpZiAoaW52YWxpZD8gcmV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6aW52YWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YWdnZWQtcmV0IFsoa2V5cyAxKSByZXRdKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAodGFnZ2VkLXJldCBbKGtleXMgMCkgcmV0XSkpKSlcbiAgICAgICAgICAgICAgICAzIChmbiBbeF1cbiAgICAgICAgICAgICAgICAgICAgKGxldCBbc3BlY3MgQHNwZWNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldCAoY29uZm9ybSogKHNwZWNzIDApIHgpXVxuICAgICAgICAgICAgICAgICAgICAgIChpZiAoaW52YWxpZD8gcmV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgKGxldCBbcmV0IChjb25mb3JtKiAoc3BlY3MgMSkgeCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChpZiAoaW52YWxpZD8gcmV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsZXQgW3JldCAoY29uZm9ybSogKHNwZWNzIDIpIHgpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIChpbnZhbGlkPyByZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6aW52YWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGFnZ2VkLXJldCBbKGtleXMgMikgcmV0XSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YWdnZWQtcmV0IFsoa2V5cyAxKSByZXRdKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAodGFnZ2VkLXJldCBbKGtleXMgMCkgcmV0XSkpKSlcbiAgICAgICAgICAgICAgICAoZm4gW3hdXG4gICAgICAgICAgICAgICAgICAobGV0IFtzcGVjcyBAc3BlY3NdXG4gICAgICAgICAgICAgICAgICAgIChsb29wIFtpIDBdXG4gICAgICAgICAgICAgICAgICAgICAgKGlmICg8IGkgKGNvdW50IHNwZWNzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIChsZXQgW3NwZWMgKHNwZWNzIGkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAobGV0IFtyZXQgKGNvbmZvcm0qIHNwZWMgeCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIChpbnZhbGlkPyByZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVjdXIgKGluYyBpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YWdnZWQtcmV0IFsoa2V5cyBpKSByZXRdKSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOjppbnZhbGlkKSkpKSldXG4gICAgKHJlaWZ5XG4gICAgICBTcGVjaXplXG4gICAgICAoc3BlY2l6ZSogW3NdIHMpXG4gICAgICAoc3BlY2l6ZSogW3MgX10gcylcblxuICAgICAgU3BlY1xuICAgICAgKGNvbmZvcm0qIFtfIHhdIChjZm9ybSB4KSlcbiAgICAgICh1bmZvcm0qIFtfIFtrIHhdXSAodW5mb3JtIChrcHMgaykgeCkpXG4gICAgICAoZXhwbGFpbiogW3RoaXMgcGF0aCB2aWEgaW4geF1cbiAgICAgICAgKHdoZW4tbm90IChwdmFsaWQ/IHRoaXMgeClcbiAgICAgICAgICAoYXBwbHkgY29uY2F0XG4gICAgICAgICAgICAgICAgIChtYXAgKGZuIFtrIGZvcm0gcHJlZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICh3aGVuLW5vdCAocHZhbGlkPyBwcmVkIHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChleHBsYWluLTEgZm9ybSBwcmVkIChjb25qIHBhdGggaykgdmlhIGluIHgpKSlcbiAgICAgICAgICAgICAgICAgICAgICBrZXlzIGZvcm1zIHByZWRzKSkpKVxuICAgICAgKGdlbiogW18gb3ZlcnJpZGVzIHBhdGggcm1hcF1cbiAgICAgICAgKGlmIGdmblxuICAgICAgICAgIChnZm4pXG4gICAgICAgICAgKGxldCBbZ2VuIChmbiBbayBwIGZdXG4gICAgICAgICAgICAgICAgICAgICAgKGxldCBbcm1hcCAoaW5jayBybWFwIGlkKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICh3aGVuLW5vdCAocmVjdXItbGltaXQ/IHJtYXAgaWQgcGF0aCBrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2VuL2RlbGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdlbnN1YiBwIG92ZXJyaWRlcyAoY29uaiBwYXRoIGspIHJtYXAgZikpKSkpXG4gICAgICAgICAgICAgICAgZ3MgKHJlbW92ZSBuaWw/IChtYXAgZ2VuIGtleXMgcHJlZHMgZm9ybXMpKV1cbiAgICAgICAgICAgICh3aGVuLW5vdCAoZW1wdHk/IGdzKVxuICAgICAgICAgICAgICAoZ2VuL29uZS1vZiBncykpKSkpXG4gICAgICAod2l0aC1nZW4qIFtfIGdmbl0gKG9yLXNwZWMtaW1wbCBrZXlzIGZvcm1zIHByZWRzIGdmbikpXG4gICAgICAoZGVzY3JpYmUqIFtfXSBgKG9yIH5AKG1hcGNhdCB2ZWN0b3Iga2V5cyBmb3JtcykpKSkpKVxuXG4oZGVmbi0gYW5kLXByZWRzIFt4IHByZWRzIGZvcm1zXVxuICAobG9vcCBbcmV0IHhcbiAgICAgICAgIFtwcmVkICYgcHJlZHNdIHByZWRzXG4gICAgICAgICBbZm9ybSAmIGZvcm1zXSBmb3Jtc11cbiAgICAoaWYgcHJlZFxuICAgICAgKGxldCBbbnJldCAoZHQgcHJlZCByZXQgZm9ybSldXG4gICAgICAgIChpZiAoaW52YWxpZD8gbnJldClcbiAgICAgICAgICA6OmludmFsaWRcbiAgICAgICAgICA7O3Byb3BhZ2F0ZSBjb25mb3JtZWQgdmFsdWVzXG4gICAgICAgICAgKHJlY3VyIG5yZXQgcHJlZHMgZm9ybXMpKSlcbiAgICAgIHJldCkpKVxuXG4oZGVmbi0gZXhwbGFpbi1wcmVkLWxpc3RcbiAgW2Zvcm1zIHByZWRzIHBhdGggdmlhIGluIHhdXG4gIChsb29wIFtyZXQgeFxuICAgICAgICAgW2Zvcm0gJiBmb3Jtc10gZm9ybXNcbiAgICAgICAgIFtwcmVkICYgcHJlZHNdIHByZWRzXVxuICAgICh3aGVuIHByZWRcbiAgICAgIChsZXQgW25yZXQgKGR0IHByZWQgcmV0IGZvcm0pXVxuICAgICAgICAoaWYgKGludmFsaWQ/IG5yZXQpXG4gICAgICAgICAgKGV4cGxhaW4tMSBmb3JtIHByZWQgcGF0aCB2aWEgaW4gcmV0KVxuICAgICAgICAgIChyZWN1ciBucmV0IGZvcm1zIHByZWRzKSkpKSkpXG5cbihkZWZuIF46c2tpcC13aWtpIGFuZC1zcGVjLWltcGxcbiAgXCJEbyBub3QgY2FsbCB0aGlzIGRpcmVjdGx5LCB1c2UgJ2FuZCdcIlxuICBbZm9ybXMgcHJlZHMgZ2ZuXVxuICAobGV0IFtzcGVjcyAoZGVsYXkgKG1hcHYgc3BlY2l6ZSBwcmVkcyBmb3JtcykpXG4gICAgICAgIGNmb3JtXG4gICAgICAgIChjYXNlIChjb3VudCBwcmVkcylcbiAgICAgICAgICAyIChmbiBbeF1cbiAgICAgICAgICAgICAgKGxldCBbc3BlY3MgQHNwZWNzXG4gICAgICAgICAgICAgICAgICAgIHJldCAoY29uZm9ybSogKHNwZWNzIDApIHgpXVxuICAgICAgICAgICAgICAgIChpZiAoaW52YWxpZD8gcmV0KVxuICAgICAgICAgICAgICAgICAgOjppbnZhbGlkXG4gICAgICAgICAgICAgICAgICAoY29uZm9ybSogKHNwZWNzIDEpIHJldCkpKSlcbiAgICAgICAgICAzIChmbiBbeF1cbiAgICAgICAgICAgICAgKGxldCBbc3BlY3MgQHNwZWNzXG4gICAgICAgICAgICAgICAgICAgIHJldCAoY29uZm9ybSogKHNwZWNzIDApIHgpXVxuICAgICAgICAgICAgICAgIChpZiAoaW52YWxpZD8gcmV0KVxuICAgICAgICAgICAgICAgICAgOjppbnZhbGlkXG4gICAgICAgICAgICAgICAgICAobGV0IFtyZXQgKGNvbmZvcm0qIChzcGVjcyAxKSByZXQpXVxuICAgICAgICAgICAgICAgICAgICAoaWYgKGludmFsaWQ/IHJldClcbiAgICAgICAgICAgICAgICAgICAgICA6OmludmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAoY29uZm9ybSogKHNwZWNzIDIpIHJldCkpKSkpKVxuICAgICAgICAgIChmbiBbeF1cbiAgICAgICAgICAgIChsZXQgW3NwZWNzIEBzcGVjc11cbiAgICAgICAgICAgICAgKGxvb3AgW3JldCB4IGkgMF1cbiAgICAgICAgICAgICAgICAoaWYgKDwgaSAoY291bnQgc3BlY3MpKVxuICAgICAgICAgICAgICAgICAgKGxldCBbbnJldCAoY29uZm9ybSogKHNwZWNzIGkpIHJldCldXG4gICAgICAgICAgICAgICAgICAgIChpZiAoaW52YWxpZD8gcmV0KVxuICAgICAgICAgICAgICAgICAgICAgIDo6aW52YWxpZFxuICAgICAgICAgICAgICAgICAgICAgIDs7cHJvcGFnYXRlIGNvbmZvcm1lZCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAocmVjdXIgbnJldCAoaW5jIGkpKSkpXG4gICAgICAgICAgICAgICAgICByZXQpKSkpKV1cbiAgICAocmVpZnlcbiAgICAgIFNwZWNpemVcbiAgICAgIChzcGVjaXplKiBbc10gcylcbiAgICAgIChzcGVjaXplKiBbcyBfXSBzKVxuXG4gICAgICBTcGVjXG4gICAgICAoY29uZm9ybSogW18geF0gKGNmb3JtIHgpKVxuICAgICAgKHVuZm9ybSogW18geF0gKHJlZHVjZSAjKHVuZm9ybSAlMiAlMSkgeCAocmV2ZXJzZSBwcmVkcykpKVxuICAgICAgKGV4cGxhaW4qIFtfIHBhdGggdmlhIGluIHhdIChleHBsYWluLXByZWQtbGlzdCBmb3JtcyBwcmVkcyBwYXRoIHZpYSBpbiB4KSlcbiAgICAgIChnZW4qIFtfIG92ZXJyaWRlcyBwYXRoIHJtYXBdIChpZiBnZm4gKGdmbikgKGdlbnN1YiAoZmlyc3QgcHJlZHMpIG92ZXJyaWRlcyBwYXRoIHJtYXAgKGZpcnN0IGZvcm1zKSkpKVxuICAgICAgKHdpdGgtZ2VuKiBbXyBnZm5dIChhbmQtc3BlYy1pbXBsIGZvcm1zIHByZWRzIGdmbikpXG4gICAgICAoZGVzY3JpYmUqIFtfXSBgKGFuZCB+QGZvcm1zKSkpKSlcblxuKGRlZm4tIGNvbGwtcHJvYiBbeCBrZm4ga2Zvcm0gZGlzdGluY3QgY291bnQgbWluLWNvdW50IG1heC1jb3VudFxuICAgICAgICAgICAgICAgICAgcGF0aCB2aWEgaW5dXG4gIChsZXQgW3ByZWQgKGMvb3Iga2ZuIGNvbGw/KVxuICAgICAgICBrZm9ybSAoYy9vciBrZm9ybSBgY29sbD8pXVxuICAgIChjb25kXG4gICAgIChub3QgKHB2YWxpZD8gcHJlZCB4KSlcbiAgICAgKGV4cGxhaW4tMSBrZm9ybSBwcmVkIHBhdGggdmlhIGluIHgpXG5cbiAgICAgKGMvYW5kIGNvdW50IChub3Q9IGNvdW50IChib3VuZGVkLWNvdW50IGNvdW50IHgpKSlcbiAgICAgW3s6cGF0aCBwYXRoIDpwcmVkIGAoPSB+Y291bnQgKGMvY291bnQgficlKSkgOnZhbCB4IDp2aWEgdmlhIDppbiBpbn1dXG5cbiAgICAgKGMvYW5kIChjL29yIG1pbi1jb3VudCBtYXgtY291bnQpXG4gICAgICAgKG5vdCAoPD0gKGMvb3IgbWluLWNvdW50IDApXG4gICAgICAgICAgICAgIChib3VuZGVkLWNvdW50IChpZiBtYXgtY291bnQgKGluYyBtYXgtY291bnQpIG1pbi1jb3VudCkgeClcbiAgICAgICAgICAgICAgKGMvb3IgbWF4LWNvdW50IE1BWF9JTlQpKSkpXG4gICAgIFt7OnBhdGggcGF0aCA6cHJlZCBgKDw9IH4oYy9vciBtaW4tY291bnQgMCkgKGMvY291bnQgficlKSB+KGMvb3IgbWF4LWNvdW50IE1BWF9JTlQpKSA6dmFsIHggOnZpYSB2aWEgOmluIGlufV1cblxuICAgICAoYy9hbmQgZGlzdGluY3QgKG5vdCAoZW1wdHk/IHgpKSAobm90IChhcHBseSBkaXN0aW5jdD8geCkpKVxuICAgICBbezpwYXRoIHBhdGggOnByZWQgJ2Rpc3RpbmN0PyA6dmFsIHggOnZpYSB2aWEgOmluIGlufV0pKSlcblxuKGRlZm4gXjpza2lwLXdpa2kgbWVyZ2Utc3BlYy1pbXBsXG4gIFwiRG8gbm90IGNhbGwgdGhpcyBkaXJlY3RseSwgdXNlICdtZXJnZSdcIlxuICBbZm9ybXMgcHJlZHMgZ2ZuXVxuICAocmVpZnlcbiAgICBTcGVjaXplXG4gICAgKHNwZWNpemUqIFtzXSBzKVxuICAgIChzcGVjaXplKiBbcyBfXSBzKVxuXG4gICAgU3BlY1xuICAgIChjb25mb3JtKiBbXyB4XSAobGV0IFttcyAobWFwICMoZHQgJTEgeCAlMikgcHJlZHMgZm9ybXMpXVxuICAgICAgICAgICAgICAgICAgICAgIChpZiAoc29tZSBpbnZhbGlkPyBtcylcbiAgICAgICAgICAgICAgICAgICAgICAgIDo6aW52YWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgKGFwcGx5IGMvbWVyZ2UgbXMpKSkpXG4gICAgKHVuZm9ybSogW18geF0gKGFwcGx5IGMvbWVyZ2UgKG1hcCAjKHVuZm9ybSAlIHgpIChyZXZlcnNlIHByZWRzKSkpKVxuICAgIChleHBsYWluKiBbXyBwYXRoIHZpYSBpbiB4XVxuICAgICAgKGFwcGx5IGNvbmNhdFxuICAgICAgICAobWFwICMoZXhwbGFpbi0xICUxICUyIHBhdGggdmlhIGluIHgpXG4gICAgICAgICAgZm9ybXMgcHJlZHMpKSlcbiAgICAoZ2VuKiBbXyBvdmVycmlkZXMgcGF0aCBybWFwXVxuICAgICAgKGlmIGdmblxuICAgICAgICAoZ2ZuKVxuICAgICAgICAoZ2VuL2ZtYXBcbiAgICAgICAgICAjKGFwcGx5IGMvbWVyZ2UgJSlcbiAgICAgICAgICAoYXBwbHkgZ2VuL3R1cGxlIChtYXAgIyhnZW5zdWIgJTEgb3ZlcnJpZGVzIHBhdGggcm1hcCAlMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZHMgZm9ybXMpKSkpKVxuICAgICh3aXRoLWdlbiogW18gZ2ZuXSAobWVyZ2Utc3BlYy1pbXBsIGZvcm1zIHByZWRzIGdmbikpXG4gICAgKGRlc2NyaWJlKiBbX10gYChtZXJnZSB+QGZvcm1zKSkpKVxuXG4oZGVmbiBeOnNraXAtd2lraSBldmVyeS1pbXBsXG4gIFwiRG8gbm90IGNhbGwgdGhpcyBkaXJlY3RseSwgdXNlICdldmVyeScsICdldmVyeS1rdicsICdjb2xsLW9mJyBvciAnbWFwLW9mJ1wiXG4gIChbZm9ybSBwcmVkIG9wdHNdIChldmVyeS1pbXBsIGZvcm0gcHJlZCBvcHRzIG5pbCkpXG4gIChbZm9ybSBwcmVkIHtnZW4taW50byA6aW50b1xuICAgICAgICAgICAgICAgOmtleXMgW2tpbmQgOjpraW5kLWZvcm0gY291bnQgbWF4LWNvdW50IG1pbi1jb3VudCBkaXN0aW5jdCBnZW4tbWF4IDo6a2ZuIDo6Y3ByZWRcbiAgICAgICAgICAgICAgICAgICAgICBjb25mb3JtLWtleXMgOjpjb25mb3JtLWFsbF1cbiAgICAgICAgICAgICAgIDpvciB7Z2VuLW1heCAyMCwgZ2VuLWludG8gW119XG4gICAgICAgICAgICAgICA6YXMgb3B0c31cbiAgICBnZm5dXG4gICAobGV0IFtjb25mb3JtLWludG8gZ2VuLWludG9cbiAgICAgICAgIHNwZWMgKGRlbGF5IChzcGVjaXplIHByZWQpKVxuICAgICAgICAgY2hlY2s/ICModmFsaWQ/IEBzcGVjICUpXG4gICAgICAgICBrZm4gKGMvb3Iga2ZuIChmbiBbaSB2XSBpKSlcbiAgICAgICAgIGFkZGN2IChmbiBbcmV0IGkgdiBjdl0gKGNvbmogcmV0IGN2KSlcbiAgICAgICAgIFtraW5kZm4ga2luZGZvcm1dIChjb25kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXA/IGtpbmQpICBbbWFwPyBgbWFwP11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZlY3Rvcj8ga2luZCkgIFt2ZWN0b3I/IGB2ZWN0b3I/XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobGlzdD8ga2luZCkgIFtsaXN0PyBgbGlzdD9dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZXQ/IGtpbmQpIFtzZXQ/IGBzZXQ/XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZWxzZSBbc2VxYWJsZT8gYHNlcWFibGU/XSlcbiAgICAgICAgIGNmbnMgKGZuIFt4XVxuICAgICAgICAgICAgICAgIDs7cmV0dXJucyBhIHR1cGxlIG9mIFtpbml0IGFkZCBjb21wbGV0ZV0gZm5zXG4gICAgICAgICAgICAgICAgKGNvbmRcbiAgICAgICAgICAgICAgICAgIChjL2FuZCAodmVjdG9yPyB4KSAoYy9vciAobm90IGNvbmZvcm0taW50bykgKHZlY3Rvcj8gY29uZm9ybS1pbnRvKSkpXG4gICAgICAgICAgICAgICAgICBbaWRlbnRpdHlcbiAgICAgICAgICAgICAgICAgICAoZm4gW3JldCBpIHYgY3ZdXG4gICAgICAgICAgICAgICAgICAgICAoaWYgKGlkZW50aWNhbD8gdiBjdilcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0XG4gICAgICAgICAgICAgICAgICAgICAgIChhc3NvYyByZXQgaSBjdikpKVxuICAgICAgICAgICAgICAgICAgIGlkZW50aXR5XVxuXG4gICAgICAgICAgICAgICAgICAoYy9hbmQgKG1hcD8geCkgKGMvb3IgKGMvYW5kIGtpbmQgKG5vdCBjb25mb3JtLWludG8pKSAobWFwPyBjb25mb3JtLWludG8pKSlcbiAgICAgICAgICAgICAgICAgIFsoaWYgY29uZm9ybS1rZXlzIGVtcHR5IGlkZW50aXR5KVxuICAgICAgICAgICAgICAgICAgIChmbiBbcmV0IGkgdiBjdl1cbiAgICAgICAgICAgICAgICAgICAgIChpZiAoYy9hbmQgKGlkZW50aWNhbD8gdiBjdikgKG5vdCBjb25mb3JtLWtleXMpKVxuICAgICAgICAgICAgICAgICAgICAgICByZXRcbiAgICAgICAgICAgICAgICAgICAgICAgKGFzc29jIHJldCAobnRoIChpZiBjb25mb3JtLWtleXMgY3YgdikgMCkgKG50aCBjdiAxKSkpKVxuICAgICAgICAgICAgICAgICAgIGlkZW50aXR5XVxuXG4gICAgICAgICAgICAgICAgICAoYy9vciAobGlzdD8gY29uZm9ybS1pbnRvKSAoc2VxPyBjb25mb3JtLWludG8pIChjL2FuZCAobm90IGNvbmZvcm0taW50bykgKGMvb3IgKGxpc3Q/IHgpIChzZXE/IHgpKSkpXG4gICAgICAgICAgICAgICAgICBbZW1wdHkgYWRkY3YgcmV2ZXJzZV1cblxuICAgICAgICAgICAgICAgICAgOmVsc2UgWyMoZW1wdHkgKGMvb3IgY29uZm9ybS1pbnRvICUpKSBhZGRjdiBpZGVudGl0eV0pKV1cbiAgICAgKHJlaWZ5XG4gICAgICAgU3BlY2l6ZVxuICAgICAgIChzcGVjaXplKiBbc10gcylcbiAgICAgICAoc3BlY2l6ZSogW3MgX10gcylcblxuICAgICAgIFNwZWNcbiAgICAgICAoY29uZm9ybSogW18geF1cbiAgICAgICAgIChsZXQgW3NwZWMgQHNwZWNdXG4gICAgICAgICAgIChjb25kXG4gICAgICAgICAgICAgKG5vdCAoY3ByZWQgeCkpIDo6aW52YWxpZFxuXG4gICAgICAgICAgICAgY29uZm9ybS1hbGxcbiAgICAgICAgICAgICAobGV0IFtbaW5pdCBhZGQgY29tcGxldGVdIChjZm5zIHgpXVxuICAgICAgICAgICAgICAgKGxvb3AgW3JldCAoaW5pdCB4KSwgaSAwLCBbdiAmIHZzIDphcyB2c2VxXSAoc2VxIHgpXVxuICAgICAgICAgICAgICAgICAoaWYgdnNlcVxuICAgICAgICAgICAgICAgICAgIChsZXQgW2N2IChjb25mb3JtKiBzcGVjIHYpXVxuICAgICAgICAgICAgICAgICAgICAgKGlmIChpbnZhbGlkPyBjdilcbiAgICAgICAgICAgICAgICAgICAgICAgOjppbnZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgIChyZWN1ciAoYWRkIHJldCBpIHYgY3YpIChpbmMgaSkgdnMpKSlcbiAgICAgICAgICAgICAgICAgICAoY29tcGxldGUgcmV0KSkpKVxuXG4gICAgICAgICAgICAgOmVsc2VcbiAgICAgICAgICAgICAoaWYgKGluZGV4ZWQ/IHgpXG4gICAgICAgICAgICAgICAobGV0IFtzdGVwIChtYXggMSAobG9uZyAoLyAoYy9jb3VudCB4KSAqY29sbC1jaGVjay1saW1pdCopKSldXG4gICAgICAgICAgICAgICAgIChsb29wIFtpIDBdXG4gICAgICAgICAgICAgICAgICAgKGlmICg+PSBpIChjL2NvdW50IHgpKVxuICAgICAgICAgICAgICAgICAgICAgeFxuICAgICAgICAgICAgICAgICAgICAgKGlmICh2YWxpZD8gc3BlYyAobnRoIHggaSkpXG4gICAgICAgICAgICAgICAgICAgICAgIChyZWN1ciAoYy8rIGkgc3RlcCkpXG4gICAgICAgICAgICAgICAgICAgICAgIDo6aW52YWxpZCkpKSlcbiAgICAgICAgICAgICAgIChsZXQgW2xpbWl0ICpjb2xsLWNoZWNrLWxpbWl0Kl1cbiAgICAgICAgICAgICAgICAgKGxvb3AgW2kgMCBbdiAmIHZzIDphcyB2c2VxXSAoc2VxIHgpXVxuICAgICAgICAgICAgICAgICAgIChjb25kXG4gICAgICAgICAgICAgICAgICAgICAoYy9vciAobmlsPyB2c2VxKSAoPSBpIGxpbWl0KSkgeFxuICAgICAgICAgICAgICAgICAgICAgKHZhbGlkPyBzcGVjIHYpIChyZWN1ciAoaW5jIGkpIHZzKVxuICAgICAgICAgICAgICAgICAgICAgOmVsc2UgOjppbnZhbGlkKSkpKSkpKVxuICAgICAgICh1bmZvcm0qIFtfIHhdIHgpXG4gICAgICAgKGV4cGxhaW4qIFtfIHBhdGggdmlhIGluIHhdXG4gICAgICAgICAoYy9vciAoY29sbC1wcm9iIHgga2luZCBraW5kLWZvcm0gZGlzdGluY3QgY291bnQgbWluLWNvdW50IG1heC1jb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoIHZpYSBpbilcbiAgICAgICAgICAgKGFwcGx5IGNvbmNhdFxuICAgICAgICAgICAgICgoaWYgY29uZm9ybS1hbGwgaWRlbnRpdHkgKHBhcnRpYWwgdGFrZSAqY29sbC1lcnJvci1saW1pdCopKVxuICAgICAgICAgICAgICAgKGtlZXAgaWRlbnRpdHlcbiAgICAgICAgICAgICAgICAgKG1hcCAoZm4gW2kgdl1cbiAgICAgICAgICAgICAgICAgICAgICAgIChsZXQgW2sgKGtmbiBpIHYpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAod2hlbi1ub3QgKGNoZWNrPyB2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsZXQgW3Byb2IgKGV4cGxhaW4tMSBmb3JtIHByZWQgcGF0aCB2aWEgKGNvbmogaW4gaykgdildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9iKSkpKVxuICAgICAgICAgICAgICAgICAgIChyYW5nZSkgeCkpKSkpKVxuICAgICAgIChnZW4qIFtfIG92ZXJyaWRlcyBwYXRoIHJtYXBdXG4gICAgICAgICAoaWYgZ2ZuXG4gICAgICAgICAgIChnZm4pXG4gICAgICAgICAgIChsZXQgW3BnZW4gKGdlbnN1YiBwcmVkIG92ZXJyaWRlcyBwYXRoIHJtYXAgZm9ybSldXG4gICAgICAgICAgICAgKGdlbi9iaW5kXG4gICAgICAgICAgICAgICAoY29uZFxuICAgICAgICAgICAgICAgICBnZW4taW50byAoZ2VuL3JldHVybiAoZW1wdHkgZ2VuLWludG8pKVxuICAgICAgICAgICAgICAgICBraW5kIChnZW4vZm1hcCAjKGlmIChlbXB0eT8gJSkgJSAoZW1wdHkgJSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAoZ2Vuc3ViIGtpbmQgb3ZlcnJpZGVzIHBhdGggcm1hcCBmb3JtKSlcbiAgICAgICAgICAgICAgICAgOmVsc2UgKGdlbi9yZXR1cm4gW10pKVxuICAgICAgICAgICAgICAgKGZuIFtpbml0XVxuICAgICAgICAgICAgICAgICAoZ2VuL2ZtYXBcbiAgICAgICAgICAgICAgICAgICAjKGlmICh2ZWN0b3I/IGluaXQpICUgKGludG8gaW5pdCAlKSlcbiAgICAgICAgICAgICAgICAgICAoY29uZFxuICAgICAgICAgICAgICAgICAgICAgZGlzdGluY3RcbiAgICAgICAgICAgICAgICAgICAgIChpZiBjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAoZ2VuL3ZlY3Rvci1kaXN0aW5jdCBwZ2VuIHs6bnVtLWVsZW1lbnRzIGNvdW50IDptYXgtdHJpZXMgMTAwfSlcbiAgICAgICAgICAgICAgICAgICAgICAgKGdlbi92ZWN0b3ItZGlzdGluY3QgcGdlbiB7Om1pbi1lbGVtZW50cyAoYy9vciBtaW4tY291bnQgMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1heC1lbGVtZW50cyAoYy9vciBtYXgtY291bnQgKG1heCBnZW4tbWF4IChjLyogMiAoYy9vciBtaW4tY291bnQgMCkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1heC10cmllcyAxMDB9KSlcblxuICAgICAgICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgICAgICAgIChnZW4vdmVjdG9yIHBnZW4gY291bnQpXG5cbiAgICAgICAgICAgICAgICAgICAgIChjL29yIG1pbi1jb3VudCBtYXgtY291bnQpXG4gICAgICAgICAgICAgICAgICAgICAoZ2VuL3ZlY3RvciBwZ2VuIChjL29yIG1pbi1jb3VudCAwKSAoYy9vciBtYXgtY291bnQgKG1heCBnZW4tbWF4IChjLyogMiAoYy9vciBtaW4tY291bnQgMCkpKSkpXG5cbiAgICAgICAgICAgICAgICAgICAgIDplbHNlXG4gICAgICAgICAgICAgICAgICAgICAoZ2VuL3ZlY3RvciBwZ2VuIDAgZ2VuLW1heCkpKSkpKSkpXG5cbiAgICAgICAod2l0aC1nZW4qIFtfIGdmbl0gKGV2ZXJ5LWltcGwgZm9ybSBwcmVkIG9wdHMgZ2ZuKSlcbiAgICAgICAoZGVzY3JpYmUqIFtfXSBgKGV2ZXJ5IH5mb3JtIH5AKG1hcGNhdCBpZGVudGl0eSBvcHRzKSkpKSkpKVxuXG47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyByZWdleCA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7XG47O1NlZTpcbjs7IGh0dHA6Ly9tYXR0Lm1pZ2h0Lm5ldC9hcnRpY2xlcy9pbXBsZW1lbnRhdGlvbi1vZi1yZWd1bGFyLWV4cHJlc3Npb24tbWF0Y2hpbmctaW4tc2NoZW1lLXdpdGgtZGVyaXZhdGl2ZXMvXG47OyBodHRwOi8vd3d3LmNjcy5uZXUuZWR1L2hvbWUvdHVyb24vcmUtZGVyaXYucGRmXG5cbjs7Y3RvcnNcbihkZWZuLSBhY2NlcHQgW3hdIHs6Om9wIDo6YWNjZXB0IDpyZXQgeH0pXG5cbihkZWZuLSBhY2NlcHQ/IFt7OmtleXMgWzo6b3BdfV1cbiAgKD0gOjphY2NlcHQgb3ApKVxuXG4oZGVmbi0gcGNhdCogW3tbcDEgJiBwciA6YXMgcHNdIDpwcywgIFtrMSAmIGtyIDphcyBrc10gOmtzLCBbZjEgJiBmciA6YXMgZm9ybXNdIDpmb3JtcywgcmV0IDpyZXQsIHJlcCsgOnJlcCt9XVxuICAod2hlbiAoZXZlcnk/IGlkZW50aXR5IHBzKVxuICAgIChpZiAoYWNjZXB0PyBwMSlcbiAgICAgIChsZXQgW3JwICg6cmV0IHAxKVxuICAgICAgICAgICAgcmV0IChjb25qIHJldCAoaWYga3Mge2sxIHJwfSBycCkpXVxuICAgICAgICAoaWYgcHJcbiAgICAgICAgICAocGNhdCogezpwcyBwciA6a3Mga3IgOmZvcm1zIGZyIDpyZXQgcmV0fSlcbiAgICAgICAgICAoYWNjZXB0IHJldCkpKVxuICAgICAgezo6b3AgOjpwY2F0LCA6cHMgcHMsIDpyZXQgcmV0LCA6a3Mga3MsIDpmb3JtcyBmb3JtcyA6cmVwKyByZXArfSkpKVxuXG4oZGVmbi0gcGNhdCBbJiBwc10gKHBjYXQqIHs6cHMgcHMgOnJldCBbXX0pKVxuXG4oZGVmbiBeOnNraXAtd2lraSBjYXQtaW1wbFxuICBcIkRvIG5vdCBjYWxsIHRoaXMgZGlyZWN0bHksIHVzZSAnY2F0J1wiXG4gIFtrcyBwcyBmb3Jtc11cbiAgKHBjYXQqIHs6a3Mga3MsIDpwcyBwcywgOmZvcm1zIGZvcm1zLCA6cmV0IHt9fSkpXG5cbihkZWZuLSByZXAqIFtwMSBwMiByZXQgc3BsaWNlIGZvcm1dXG4gICh3aGVuIHAxXG4gICAgKGxldCBbciB7OjpvcCA6OnJlcCwgOnAyIHAyLCA6c3BsaWNlIHNwbGljZSwgOmZvcm1zIGZvcm0gOmlkIChyYW5kb20tdXVpZCl9XVxuICAgICAgKGlmIChhY2NlcHQ/IHAxKVxuICAgICAgICAoYXNzb2MgciA6cDEgcDIgOnJldCAoY29uaiByZXQgKDpyZXQgcDEpKSlcbiAgICAgICAgKGFzc29jIHIgOnAxIHAxLCA6cmV0IHJldCkpKSkpXG5cbihkZWZuIF46c2tpcC13aWtpIHJlcC1pbXBsXG4gIFwiRG8gbm90IGNhbGwgdGhpcyBkaXJlY3RseSwgdXNlICcqJ1wiXG4gIFtmb3JtIHBdIChyZXAqIHAgcCBbXSBmYWxzZSBmb3JtKSlcblxuKGRlZm4gXjpza2lwLXdpa2kgcmVwK2ltcGxcbiAgXCJEbyBub3QgY2FsbCB0aGlzIGRpcmVjdGx5LCB1c2UgJysnXCJcbiAgW2Zvcm0gcF1cbiAgKHBjYXQqIHs6cHMgW3AgKHJlcCogcCBwIFtdIHRydWUgZm9ybSldIDpmb3JtcyBgW35mb3JtICgqIH5mb3JtKV0gOnJldCBbXSA6cmVwKyBmb3JtfSkpXG5cbihkZWZuIF46c2tpcC13aWtpIGFtcC1pbXBsXG4gIFwiRG8gbm90IGNhbGwgdGhpcyBkaXJlY3RseSwgdXNlICcmJ1wiXG4gIFtyZSBwcmVkcyBwcmVkLWZvcm1zXVxuICB7OjpvcCA6OmFtcCA6cDEgcmUgOnBzIHByZWRzIDpmb3JtcyBwcmVkLWZvcm1zfSlcblxuKGRlZm4tIGZpbHRlci1hbHQgW3BzIGtzIGZvcm1zIGZdXG4gIChpZiAoYy9vciBrcyBmb3JtcylcbiAgICAobGV0IFtwa3MgKC0+PiAobWFwIHZlY3RvciBwc1xuICAgICAgICAgICAgICAgICAgICAgICAgKGMvb3IgKHNlcSBrcykgKHJlcGVhdCBuaWwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKGMvb3IgKHNlcSBmb3JtcykgKHJlcGVhdCBuaWwpKSlcbiAgICAgICAgICAgICAgICAgICAoZmlsdGVyICMoLT4gJSBmaXJzdCBmKSkpXVxuICAgICAgWyhzZXEgKG1hcCBmaXJzdCBwa3MpKSAod2hlbiBrcyAoc2VxIChtYXAgc2Vjb25kIHBrcykpKSAod2hlbiBmb3JtcyAoc2VxIChtYXAgIyhudGggJSAyKSBwa3MpKSldKVxuICAgIFsoc2VxIChmaWx0ZXIgZiBwcykpIGtzIGZvcm1zXSkpXG5cbihkZWZuLSBhbHQqIFtwcyBrcyBmb3Jtc11cbiAgKGxldCBbW1twMSAmIHByIDphcyBwc10gW2sxIDphcyBrc10gZm9ybXNdIChmaWx0ZXItYWx0IHBzIGtzIGZvcm1zIGlkZW50aXR5KV1cbiAgICAod2hlbiBwc1xuICAgICAgKGxldCBbcmV0IHs6Om9wIDo6YWx0LCA6cHMgcHMsIDprcyBrcyA6Zm9ybXMgZm9ybXN9XVxuICAgICAgICAoaWYgKG5pbD8gcHIpXG4gICAgICAgICAgKGlmIGsxXG4gICAgICAgICAgICAoaWYgKGFjY2VwdD8gcDEpXG4gICAgICAgICAgICAgIChhY2NlcHQgKHRhZ2dlZC1yZXQgW2sxICg6cmV0IHAxKV0pKVxuICAgICAgICAgICAgICByZXQpXG4gICAgICAgICAgICBwMSlcbiAgICAgICAgICByZXQpKSkpKVxuXG4oZGVmbi0gYWx0cyBbJiBwc10gKGFsdCogcHMgbmlsIG5pbCkpXG4oZGVmbi0gYWx0MiBbcDEgcDJdIChpZiAoYy9hbmQgcDEgcDIpIChhbHRzIHAxIHAyKSAoYy9vciBwMSBwMikpKVxuXG4oZGVmbiBeOnNraXAtd2lraSBhbHQtaW1wbFxuICBcIkRvIG5vdCBjYWxsIHRoaXMgZGlyZWN0bHksIHVzZSAnYWx0J1wiXG4gIFtrcyBwcyBmb3Jtc10gKGFzc29jIChhbHQqIHBzIGtzIGZvcm1zKSA6aWQgKHJhbmRvbS11dWlkKSkpXG5cbihkZWZuIF46c2tpcC13aWtpIG1heWJlLWltcGxcbiAgXCJEbyBub3QgY2FsbCB0aGlzIGRpcmVjdGx5LCB1c2UgJz8nXCJcbiAgW3AgZm9ybV0gKGFzc29jIChhbHQqIFtwIChhY2NlcHQgOjpuaWwpXSBuaWwgW2Zvcm0gOjpuaWxdKSA6bWF5YmUgZm9ybSkpXG5cbihkZWZuLSBub3JldD8gW3AxIHByZXRdXG4gIChjL29yICg9IHByZXQgOjpuaWwpXG4gICAgICAgIChjL2FuZCAoI3s6OnJlcCA6OnBjYXR9ICg6Om9wIChyZWctcmVzb2x2ZSEgcDEpKSkgOztocm0sIHNob3VsZG4ndCBrbm93IHRoZXNlXG4gICAgICAgICAgICAgICAoZW1wdHk/IHByZXQpKVxuICAgICAgICBuaWwpKVxuXG4oZGVjbGFyZSBwcmV0dXJuKVxuXG4oZGVmbi0gYWNjZXB0LW5pbD8gW3BdXG4gIChsZXQgW3s6a2V5cyBbOjpvcCBwcyBwMSBwMiBmb3Jtc10gOmFzIHB9IChyZWctcmVzb2x2ZSEgcCldXG4gICAgKGNhc2Ugb3BcbiAgICAgIDo6YWNjZXB0IHRydWVcbiAgICAgIG5pbCBuaWxcbiAgICAgIDo6YW1wIChjL2FuZCAoYWNjZXB0LW5pbD8gcDEpXG4gICAgICAgICAgICAgICAgICAgKGMvb3IgKG5vcmV0PyBwMSAocHJldHVybiBwMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGxldCBbcmV0ICgtPiAocHJldHVybiBwMSkgKGFuZC1wcmVkcyBwcyAobmV4dCBmb3JtcykpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChub3QgKGludmFsaWQ/IHJldCkpKSkpXG4gICAgICA6OnJlcCAoYy9vciAoaWRlbnRpY2FsPyBwMSBwMikgKGFjY2VwdC1uaWw/IHAxKSlcbiAgICAgIDo6cGNhdCAoZXZlcnk/IGFjY2VwdC1uaWw/IHBzKVxuICAgICAgOjphbHQgKGMvc29tZSBhY2NlcHQtbmlsPyBwcykpKSlcblxuKGRlY2xhcmUgYWRkLXJldClcblxuKGRlZm4tIHByZXR1cm4gW3BdXG4gIChsZXQgW3tbcDAgJiBwciA6YXMgcHNdIDpwcywgW2sgOmFzIGtzXSA6a3MsIDprZXlzIFs6Om9wIHAxIHJldCBmb3Jtc10gOmFzIHB9IChyZWctcmVzb2x2ZSEgcCldXG4gICAgKGNhc2Ugb3BcbiAgICAgIDo6YWNjZXB0IHJldFxuICAgICAgbmlsIG5pbFxuICAgICAgOjphbXAgKGxldCBbcHJldCAocHJldHVybiBwMSldXG4gICAgICAgICAgICAgIChpZiAobm9yZXQ/IHAxIHByZXQpXG4gICAgICAgICAgICAgICAgOjpuaWxcbiAgICAgICAgICAgICAgICAoYW5kLXByZWRzIHByZXQgcHMgZm9ybXMpKSlcbiAgICAgIDo6cmVwIChhZGQtcmV0IHAxIHJldCBrKVxuICAgICAgOjpwY2F0IChhZGQtcmV0IHAwIHJldCBrKVxuICAgICAgOjphbHQgKGxldCBbW1twMF0gW2swXV0gKGZpbHRlci1hbHQgcHMga3MgZm9ybXMgYWNjZXB0LW5pbD8pXG4gICAgICAgICAgICAgICAgICByIChpZiAobmlsPyBwMCkgOjpuaWwgKHByZXR1cm4gcDApKV1cbiAgICAgICAgICAgICAgKGlmIGswICh0YWdnZWQtcmV0IFtrMCByXSkgcikpKSkpXG5cbihkZWZuLSBvcC11bmZvcm0gW3AgeF1cbiAgOzsocHJuIHs6cCBwIDp4IHh9KVxuICAobGV0IFt7W3AwICYgcHIgOmFzIHBzXSA6cHMsIFtrIDphcyBrc10gOmtzLCA6a2V5cyBbOjpvcCBwMSByZXQgZm9ybXMgcmVwKyBtYXliZV0gOmFzIHB9IChyZWctcmVzb2x2ZSEgcClcbiAgICAgICAga3BzICh6aXBtYXAga3MgcHMpXVxuICAgIChjYXNlIG9wXG4gICAgICA6OmFjY2VwdCBbcmV0XVxuICAgICAgbmlsIFsodW5mb3JtIHAgeCldXG4gICAgICA6OmFtcCAobGV0IFtweCAocmVkdWNlICModW5mb3JtICUyICUxKSB4IChyZXZlcnNlIHBzKSldXG4gICAgICAgICAgICAgIChvcC11bmZvcm0gcDEgcHgpKVxuICAgICAgOjpyZXAgKG1hcGNhdCAjKG9wLXVuZm9ybSBwMSAlKSB4KVxuICAgICAgOjpwY2F0IChpZiByZXArXG4gICAgICAgICAgICAgICAobWFwY2F0ICMob3AtdW5mb3JtIHAwICUpIHgpXG4gICAgICAgICAgICAgICAobWFwY2F0IChmbiBba11cbiAgICAgICAgICAgICAgICAgICAgICAgICAod2hlbiAoY29udGFpbnM/IHggaylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcC11bmZvcm0gKGtwcyBrKSAoZ2V0IHggaykpKSlcbiAgICAgICAgICAgICAgICAga3MpKVxuICAgICAgOjphbHQgKGlmIG1heWJlXG4gICAgICAgICAgICAgIFsodW5mb3JtIHAwIHgpXVxuICAgICAgICAgICAgICAobGV0IFtbayB2XSB4XVxuICAgICAgICAgICAgICAgIChvcC11bmZvcm0gKGtwcyBrKSB2KSkpKSkpXG5cbihkZWZuLSBhZGQtcmV0IFtwIHIga11cbiAgKGxldCBbezprZXlzIFs6Om9wIHBzIHNwbGljZV0gOmFzIHB9IChyZWctcmVzb2x2ZSEgcClcbiAgICAgICAgcHJvcCAjKGxldCBbcmV0IChwcmV0dXJuIHApXVxuICAgICAgICAgICAgICAgKGlmIChlbXB0eT8gcmV0KSByICgoaWYgc3BsaWNlIGludG8gY29uaikgciAoaWYgayB7ayByZXR9IHJldCkpKSldXG4gICAgKGNhc2Ugb3BcbiAgICAgIG5pbCByXG4gICAgICAoOjphbHQgOjphY2NlcHQgOjphbXApXG4gICAgICAobGV0IFtyZXQgKHByZXR1cm4gcCldXG4gICAgICAgIDs7KHBybiB7OnJldCByZXR9KVxuICAgICAgICAoaWYgKD0gcmV0IDo6bmlsKSByIChjb25qIHIgKGlmIGsge2sgcmV0fSByZXQpKSkpXG5cbiAgICAgICg6OnJlcCA6OnBjYXQpIChwcm9wKSkpKVxuXG4oZGVmbi0gZGVyaXZcbiAgW3AgeF1cbiAgKGxldCBbe1twMCAmIHByIDphcyBwc10gOnBzLCBbazAgJiBrciA6YXMga3NdIDprcywgOmtleXMgWzo6b3AgcDEgcDIgcmV0IHNwbGljZSBmb3Jtc10gOmFzIHB9IChyZWctcmVzb2x2ZSEgcCldXG4gICAgKHdoZW4gcFxuICAgICAgKGNhc2Ugb3BcbiAgICAgICAgOjphY2NlcHQgbmlsXG4gICAgICAgIG5pbCAobGV0IFtyZXQgKGR0IHAgeCBwKV1cbiAgICAgICAgICAgICAgKHdoZW4tbm90IChpbnZhbGlkPyByZXQpIChhY2NlcHQgcmV0KSkpXG4gICAgICAgIDo6YW1wICh3aGVuLWxldCBbcDEgKGRlcml2IHAxIHgpXVxuICAgICAgICAgICAgICAgIChpZiAoPSA6OmFjY2VwdCAoOjpvcCBwMSkpXG4gICAgICAgICAgICAgICAgICAobGV0IFtyZXQgKC0+IChwcmV0dXJuIHAxKSAoYW5kLXByZWRzIHBzIChuZXh0IGZvcm1zKSkpXVxuICAgICAgICAgICAgICAgICAgICAod2hlbi1ub3QgKGludmFsaWQ/IHJldClcbiAgICAgICAgICAgICAgICAgICAgICAoYWNjZXB0IHJldCkpKVxuICAgICAgICAgICAgICAgICAgKGFtcC1pbXBsIHAxIHBzIGZvcm1zKSkpXG4gICAgICAgIDo6cGNhdCAoYWx0MiAocGNhdCogezpwcyAoY29ucyAoZGVyaXYgcDAgeCkgcHIpLCA6a3Mga3MsIDpmb3JtcyBmb3JtcywgOnJldCByZXR9KVxuICAgICAgICAgICAgICAgICAgICAgKHdoZW4gKGFjY2VwdC1uaWw/IHAwKSAoZGVyaXYgKHBjYXQqIHs6cHMgcHIsIDprcyBrciwgOmZvcm1zIChuZXh0IGZvcm1zKSwgOnJldCAoYWRkLXJldCBwMCByZXQgazApfSkgeCkpKVxuICAgICAgICA6OmFsdCAoYWx0KiAobWFwICMoZGVyaXYgJSB4KSBwcykga3MgZm9ybXMpXG4gICAgICAgIDo6cmVwIChhbHQyIChyZXAqIChkZXJpdiBwMSB4KSBwMiByZXQgc3BsaWNlIGZvcm1zKVxuICAgICAgICAgICAgICAgICAgICAod2hlbiAoYWNjZXB0LW5pbD8gcDEpIChkZXJpdiAocmVwKiBwMiBwMiAoYWRkLXJldCBwMSByZXQgbmlsKSBzcGxpY2UgZm9ybXMpIHgpKSkpKSkpXG5cbihkZWZuLSBvcC1kZXNjcmliZSBbcF1cbiAgKGxldCBbezprZXlzIFs6Om9wIHBzIGtzIGZvcm1zIHNwbGljZSBwMSByZXArIG1heWJlXSA6YXMgcH0gKHJlZy1yZXNvbHZlISBwKV1cbiAgICA7Oyhwcm4gezpvcCBvcCA6a3Mga3MgOmZvcm1zIGZvcm1zIDpwIHB9KVxuICAgICh3aGVuIHBcbiAgICAgIChjYXNlIG9wXG4gICAgICAgIDo6YWNjZXB0IG5pbFxuICAgICAgICBuaWwgcFxuICAgICAgICA6OmFtcCAobGlzdCogJ2Nsb2p1cmUuc3BlYy8mIChvcC1kZXNjcmliZSBwMSkgZm9ybXMpXG4gICAgICAgIDo6cGNhdCAoaWYgcmVwK1xuICAgICAgICAgICAgICAgICAobGlzdCBgKyByZXArKVxuICAgICAgICAgICAgICAgICAoY29ucyBgY2F0IChtYXBjYXQgdmVjdG9yIChjL29yIChzZXEga3MpIChyZXBlYXQgOl8pKSBmb3JtcykpKVxuICAgICAgICA6OmFsdCAoaWYgbWF5YmVcbiAgICAgICAgICAgICAgICAobGlzdCBgPyBtYXliZSlcbiAgICAgICAgICAgICAgICAoY29ucyBgYWx0IChtYXBjYXQgdmVjdG9yIGtzIGZvcm1zKSkpXG4gICAgICAgIDo6cmVwIChsaXN0IChpZiBzcGxpY2UgYCsgYCopIGZvcm1zKSkpKSlcblxuKGRlZm4tIG9wLWV4cGxhaW4gW2Zvcm0gcCBwYXRoIHZpYSBpbiBpbnB1dF1cbiAgOzsocHJuIHs6Zm9ybSBmb3JtIDpwIHAgOnBhdGggcGF0aCA6aW5wdXQgaW5wdXR9KVxuICAobGV0IFtbeCA6YXMgaW5wdXRdIGlucHV0XG4gICAgICAgIHs6a2V5cyBbOjpvcCBwcyBrcyBmb3JtcyBzcGxpY2UgcDEgcDJdIDphcyBwfSAocmVnLXJlc29sdmUhIHApXG4gICAgICAgIHZpYSAoaWYtbGV0IFtuYW1lIChzcGVjLW5hbWUgcCldIChjb25qIHZpYSBuYW1lKSB2aWEpXG4gICAgICAgIGluc3VmZmljaWVudCAoZm4gW3BhdGggZm9ybV1cbiAgICAgICAgICAgICAgICAgICAgICAgW3s6cGF0aCBwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgOnJlYXNvbiBcIkluc3VmZmljaWVudCBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgOnByZWQgKGFiYnJldiBmb3JtKVxuICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWwgKClcbiAgICAgICAgICAgICAgICAgICAgICAgICA6dmlhIHZpYVxuICAgICAgICAgICAgICAgICAgICAgICAgIDppbiBpbn1dKV1cbiAgICAod2hlbiBwXG4gICAgICAoY2FzZSBvcFxuICAgICAgICA6OmFjY2VwdCBuaWxcbiAgICAgICAgbmlsIChpZiAoZW1wdHk/IGlucHV0KVxuICAgICAgICAgICAgICAoaW5zdWZmaWNpZW50IHBhdGggZm9ybSlcbiAgICAgICAgICAgICAgKGV4cGxhaW4tMSBmb3JtIHAgcGF0aCB2aWEgaW4geCkpXG4gICAgICAgIDo6YW1wIChpZiAoZW1wdHk/IGlucHV0KVxuICAgICAgICAgICAgICAgIChpZiAoYWNjZXB0LW5pbD8gcDEpXG4gICAgICAgICAgICAgICAgICAoZXhwbGFpbi1wcmVkLWxpc3QgZm9ybXMgcHMgcGF0aCB2aWEgaW4gKHByZXR1cm4gcDEpKVxuICAgICAgICAgICAgICAgICAgKGluc3VmZmljaWVudCBwYXRoIChvcC1kZXNjcmliZSBwMSkpKVxuICAgICAgICAgICAgICAgIChpZi1sZXQgW3AxIChkZXJpdiBwMSB4KV1cbiAgICAgICAgICAgICAgICAgIChleHBsYWluLXByZWQtbGlzdCBmb3JtcyBwcyBwYXRoIHZpYSBpbiAocHJldHVybiBwMSkpXG4gICAgICAgICAgICAgICAgICAob3AtZXhwbGFpbiAob3AtZGVzY3JpYmUgcDEpIHAxIHBhdGggdmlhIGluIGlucHV0KSkpXG4gICAgICAgIDo6cGNhdCAobGV0IFtwa2ZzIChtYXAgdmVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYy9vciAoc2VxIGtzKSAocmVwZWF0IG5pbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMvb3IgKHNlcSBmb3JtcykgKHJlcGVhdCBuaWwpKSlcbiAgICAgICAgICAgICAgICAgICAgIFtwcmVkIGsgZm9ybV0gKGlmICg9IDEgKGNvdW50IHBrZnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaXJzdCBwa2ZzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaXJzdCAocmVtb3ZlIChmbiBbW3BdXSAoYWNjZXB0LW5pbD8gcCkpIHBrZnMpKSlcbiAgICAgICAgICAgICAgICAgICAgIHBhdGggKGlmIGsgKGNvbmogcGF0aCBrKSBwYXRoKVxuICAgICAgICAgICAgICAgICAgICAgZm9ybSAoYy9vciBmb3JtIChvcC1kZXNjcmliZSBwcmVkKSldXG4gICAgICAgICAgICAgICAgIChpZiAoYy9hbmQgKGVtcHR5PyBpbnB1dCkgKG5vdCBwcmVkKSlcbiAgICAgICAgICAgICAgICAgICAoaW5zdWZmaWNpZW50IHBhdGggZm9ybSlcbiAgICAgICAgICAgICAgICAgICAob3AtZXhwbGFpbiBmb3JtIHByZWQgcGF0aCB2aWEgaW4gaW5wdXQpKSlcbiAgICAgICAgOjphbHQgKGlmIChlbXB0eT8gaW5wdXQpXG4gICAgICAgICAgICAgICAgKGluc3VmZmljaWVudCBwYXRoIChvcC1kZXNjcmliZSBwKSlcbiAgICAgICAgICAgICAgICAoYXBwbHkgY29uY2F0XG4gICAgICAgICAgICAgICAgICAgICAgIChtYXAgKGZuIFtrIGZvcm0gcHJlZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcC1leHBsYWluIChjL29yIGZvcm0gKG9wLWRlc2NyaWJlIHByZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIGsgKGNvbmogcGF0aCBrKSBwYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjL29yIChzZXEga3MpIChyZXBlYXQgbmlsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYy9vciAoc2VxIGZvcm1zKSAocmVwZWF0IG5pbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHMpKSlcbiAgICAgICAgOjpyZXAgKG9wLWV4cGxhaW4gKGlmIChpZGVudGljYWw/IHAxIHAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wLWRlc2NyaWJlIHAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcDEgcGF0aCB2aWEgaW4gaW5wdXQpKSkpKVxuXG4oZGVmbi0gcmUtZ2VuIFtwIG92ZXJyaWRlcyBwYXRoIHJtYXAgZl1cbiAgOzsocHJuIHs6b3Agb3AgOmtzIGtzIDpmb3JtcyBmb3Jtc30pXG4gIChsZXQgW3s6a2V5cyBbOjpvcCBwcyBrcyBwMSBwMiBmb3JtcyBzcGxpY2UgcmV0IGlkIDo6Z2ZuXSA6YXMgcH0gKHJlZy1yZXNvbHZlISBwKVxuICAgICAgICBybWFwIChpZiBpZCAoaW5jayBybWFwIGlkKSBybWFwKVxuICAgICAgICBnZ2VucyAoZm4gW3BzIGtzIGZvcm1zXVxuICAgICAgICAgICAgICAgIChsZXQgW2dlbiAoZm4gW3AgayBmXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDs7KHBybiB7OmsgayA6cGF0aCBwYXRoIDpybWFwIHJtYXAgOm9wIG9wIDppZCBpZH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdoZW4tbm90IChjL2FuZCBybWFwIGlkIGsgKHJlY3VyLWxpbWl0PyBybWFwIGlkIHBhdGggaykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdlbi9kZWxheSAocmUtZ2VuIHAgb3ZlcnJpZGVzIChpZiBrIChjb25qIHBhdGggaykgcGF0aCkgcm1hcCAoYy9vciBmIHApKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlLWdlbiBwIG92ZXJyaWRlcyAoaWYgayAoY29uaiBwYXRoIGspIHBhdGgpIHJtYXAgKGMvb3IgZiBwKSkpKSldXG4gICAgICAgICAgICAgICAgICAobWFwIGdlbiBwcyAoYy9vciAoc2VxIGtzKSAocmVwZWF0IG5pbCkpIChjL29yIChzZXEgZm9ybXMpIChyZXBlYXQgbmlsKSkpKSldXG4gICAgKGMvb3IgKHdoZW4tbGV0IFtnIChnZXQgb3ZlcnJpZGVzIHBhdGgpXVxuICAgICAgICAgICAgKGNhc2Ugb3BcbiAgICAgICAgICAgICAgKDphY2NlcHQgbmlsKSAoZ2VuL2ZtYXAgdmVjdG9yIGcpXG4gICAgICAgICAgICAgIGcpKVxuICAgICAgICAgICh3aGVuIGdmblxuICAgICAgICAgICAgKGdmbikpXG4gICAgICAgICAgKHdoZW4gcFxuICAgICAgICAgICAgKGNhc2Ugb3BcbiAgICAgICAgICAgICAgOjphY2NlcHQgKGlmICg9IHJldCA6Om5pbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAoZ2VuL3JldHVybiBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAoZ2VuL3JldHVybiBbcmV0XSkpXG4gICAgICAgICAgICAgIG5pbCAod2hlbi1sZXQgW2cgKGdlbnN1YiBwIG92ZXJyaWRlcyBwYXRoIHJtYXAgZildXG4gICAgICAgICAgICAgICAgICAgIChnZW4vZm1hcCB2ZWN0b3IgZykpXG4gICAgICAgICAgICAgIDo6YW1wIChyZS1nZW4gcDEgb3ZlcnJpZGVzIHBhdGggcm1hcCAob3AtZGVzY3JpYmUgcDEpKVxuICAgICAgICAgICAgICA6OnBjYXQgKGxldCBbZ2VucyAoZ2dlbnMgcHMga3MgZm9ybXMpXVxuICAgICAgICAgICAgICAgICAgICAgICAod2hlbiAoZXZlcnk/IGlkZW50aXR5IGdlbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGFwcGx5IGdlbi9jYXQgZ2VucykpKVxuICAgICAgICAgICAgICA6OmFsdCAobGV0IFtnZW5zIChyZW1vdmUgbmlsPyAoZ2dlbnMgcHMga3MgZm9ybXMpKV1cbiAgICAgICAgICAgICAgICAgICAgICAod2hlbi1ub3QgKGVtcHR5PyBnZW5zKVxuICAgICAgICAgICAgICAgICAgICAgICAgKGdlbi9vbmUtb2YgZ2VucykpKVxuICAgICAgICAgICAgICA6OnJlcCAoaWYgKHJlY3VyLWxpbWl0PyBybWFwIGlkIFtpZF0gaWQpXG4gICAgICAgICAgICAgICAgICAgICAgKGdlbi9yZXR1cm4gW10pXG4gICAgICAgICAgICAgICAgICAgICAgKHdoZW4tbGV0IFtnIChyZS1nZW4gcDIgb3ZlcnJpZGVzIHBhdGggcm1hcCBmb3JtcyldXG4gICAgICAgICAgICAgICAgICAgICAgICAoZ2VuL2ZtYXAgIyhhcHBseSBjb25jYXQgJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2VuL3ZlY3RvciBnKSkpKSkpKSkpXG5cbihkZWZuLSByZS1jb25mb3JtIFtwIFt4ICYgeHMgOmFzIGRhdGFdXVxuICA7Oyhwcm4gezpwIHAgOnggeCA6eHMgeHN9KVxuICAoaWYgKGVtcHR5PyBkYXRhKVxuICAgIChpZiAoYWNjZXB0LW5pbD8gcClcbiAgICAgIChsZXQgW3JldCAocHJldHVybiBwKV1cbiAgICAgICAgKGlmICg9IHJldCA6Om5pbClcbiAgICAgICAgICBuaWxcbiAgICAgICAgICByZXQpKVxuICAgICAgOjppbnZhbGlkKVxuICAgIChpZi1sZXQgW2RwIChkZXJpdiBwIHgpXVxuICAgICAgKHJlY3VyIGRwIHhzKVxuICAgICAgOjppbnZhbGlkKSkpXG5cbihkZWZuLSByZS1leHBsYWluIFtwYXRoIHZpYSBpbiByZSBpbnB1dF1cbiAgKGxvb3AgW3AgcmUgW3ggJiB4cyA6YXMgZGF0YV0gaW5wdXQgaSAwXVxuICAgIDs7KHBybiB7OnAgcCA6eCB4IDp4cyB4cyA6cmUgcmV9KSAocHJuKVxuICAgIChpZiAoZW1wdHk/IGRhdGEpXG4gICAgICAoaWYgKGFjY2VwdC1uaWw/IHApXG4gICAgICAgIG5pbCA7O3N1Y2Nlc3NcbiAgICAgICAgKG9wLWV4cGxhaW4gKG9wLWRlc2NyaWJlIHApIHAgcGF0aCB2aWEgaW4gbmlsKSlcbiAgICAgIChpZi1sZXQgW2RwIChkZXJpdiBwIHgpXVxuICAgICAgICAocmVjdXIgZHAgeHMgKGluYyBpKSlcbiAgICAgICAgKGlmIChhY2NlcHQ/IHApXG4gICAgICAgICAgKGlmICg9ICg6Om9wIHApIDo6cGNhdClcbiAgICAgICAgICAgIChvcC1leHBsYWluIChvcC1kZXNjcmliZSBwKSBwIHBhdGggdmlhIChjb25qIGluIGkpIChzZXEgZGF0YSkpXG4gICAgICAgICAgICBbezpwYXRoIHBhdGhcbiAgICAgICAgICAgICAgOnJlYXNvbiBcIkV4dHJhIGlucHV0XCJcbiAgICAgICAgICAgICAgOnByZWQgKGFiYnJldiAob3AtZGVzY3JpYmUgcmUpKVxuICAgICAgICAgICAgICA6dmFsIGRhdGFcbiAgICAgICAgICAgICAgOnZpYSB2aWFcbiAgICAgICAgICAgICAgOmluIChjb25qIGluIGkpfV0pXG4gICAgICAgICAgKGMvb3IgKG9wLWV4cGxhaW4gKG9wLWRlc2NyaWJlIHApIHAgcGF0aCB2aWEgKGNvbmogaW4gaSkgKHNlcSBkYXRhKSlcbiAgICAgICAgICAgICAgICBbezpwYXRoIHBhdGhcbiAgICAgICAgICAgICAgICAgIDpyZWFzb24gXCJFeHRyYSBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICA6cHJlZCAoYWJicmV2IChvcC1kZXNjcmliZSBwKSlcbiAgICAgICAgICAgICAgICAgIDp2YWwgZGF0YVxuICAgICAgICAgICAgICAgICAgOnZpYSB2aWFcbiAgICAgICAgICAgICAgICAgIDppbiAoY29uaiBpbiBpKX1dKSkpKSkpXG5cbihkZWZuIF46c2tpcC13aWtpIHJlZ2V4LXNwZWMtaW1wbFxuICBcIkRvIG5vdCBjYWxsIHRoaXMgZGlyZWN0bHksIHVzZSAnc3BlYycgd2l0aCBhIHJlZ2V4IG9wIGFyZ3VtZW50XCJcbiAgW3JlIGdmbl1cbiAgKHJlaWZ5XG4gICAgU3BlY2l6ZVxuICAgIChzcGVjaXplKiBbc10gcylcbiAgICAoc3BlY2l6ZSogW3MgX10gcylcblxuICAgIFNwZWNcbiAgICAoY29uZm9ybSogW18geF1cbiAgICAgIChpZiAoYy9vciAobmlsPyB4KSAoY29sbD8geCkpXG4gICAgICAgIChyZS1jb25mb3JtIHJlIChzZXEgeCkpXG4gICAgICAgIDo6aW52YWxpZCkpXG4gICAgKHVuZm9ybSogW18geF0gKG9wLXVuZm9ybSByZSB4KSlcbiAgICAoZXhwbGFpbiogW18gcGF0aCB2aWEgaW4geF1cbiAgICAgIChpZiAoYy9vciAobmlsPyB4KSAoY29sbD8geCkpXG4gICAgICAgIChyZS1leHBsYWluIHBhdGggdmlhIGluIHJlIChzZXEgeCkpXG4gICAgICAgIFt7OnBhdGggcGF0aCA6cHJlZCAoYWJicmV2IChvcC1kZXNjcmliZSByZSkpIDp2YWwgeCA6dmlhIHZpYSA6aW4gaW59XSkpXG4gICAgKGdlbiogW18gb3ZlcnJpZGVzIHBhdGggcm1hcF1cbiAgICAgIChpZiBnZm5cbiAgICAgICAgKGdmbilcbiAgICAgICAgKHJlLWdlbiByZSBvdmVycmlkZXMgcGF0aCBybWFwIChvcC1kZXNjcmliZSByZSkpKSlcbiAgICAod2l0aC1nZW4qIFtfIGdmbl0gKHJlZ2V4LXNwZWMtaW1wbCByZSBnZm4pKVxuICAgIChkZXNjcmliZSogW19dIChvcC1kZXNjcmliZSByZSkpKSlcblxuOzs7Ozs7Ozs7Ozs7Ozs7OzsgSE9GcyA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztcblxuKGRlZm4tIGNhbGwtdmFsaWQ/XG4gIFtmIHNwZWNzIGFyZ3NdXG4gIChsZXQgW2NhcmdzIChjb25mb3JtICg6YXJncyBzcGVjcykgYXJncyldXG4gICAgKHdoZW4tbm90IChpbnZhbGlkPyBjYXJncylcbiAgICAgIChsZXQgW3JldCAoYXBwbHkgZiBhcmdzKVxuICAgICAgICAgICAgY3JldCAoY29uZm9ybSAoOnJldCBzcGVjcykgcmV0KV1cbiAgICAgICAgKGMvYW5kIChub3QgKGludmFsaWQ/IGNyZXQpKVxuICAgICAgICAgICAgICAgKGlmICg6Zm4gc3BlY3MpXG4gICAgICAgICAgICAgICAgIChwdmFsaWQ/ICg6Zm4gc3BlY3MpIHs6YXJncyBjYXJncyA6cmV0IGNyZXR9KVxuICAgICAgICAgICAgICAgICB0cnVlKSkpKSkpXG5cbihkZWZuLSB2YWxpZGF0ZS1mblxuICBcInJldHVybnMgZiBpZiB2YWxpZCwgZWxzZSBzbWFsbGVzdFwiXG4gIFtmIHNwZWNzIGl0ZXJzXVxuICAobGV0IFtnIChnZW4gKDphcmdzIHNwZWNzKSlcbiAgICAgICAgcHJvcCAoZ2VuL2Zvci1hbGwqIFtnXSAjKGNhbGwtdmFsaWQ/IGYgc3BlY3MgJSkpXVxuICAgIChsZXQgW3JldCAoZ2VuL3F1aWNrLWNoZWNrIGl0ZXJzIHByb3ApXVxuICAgICAgKGlmLWxldCBbW3NtYWxsZXN0XSAoLT4gcmV0IDpzaHJ1bmsgOnNtYWxsZXN0KV1cbiAgICAgICAgc21hbGxlc3RcbiAgICAgICAgZikpKSlcblxuKGRlZm4gXjpza2lwLXdpa2kgZnNwZWMtaW1wbFxuICBcIkRvIG5vdCBjYWxsIHRoaXMgZGlyZWN0bHksIHVzZSAnZnNwZWMnXCJcbiAgW2FyZ3NwZWMgYWZvcm0gcmV0c3BlYyByZm9ybSBmbnNwZWMgZmZvcm0gZ2ZuXVxuICAobGV0IFtzcGVjcyB7OmFyZ3MgYXJnc3BlYyA6cmV0IHJldHNwZWMgOmZuIGZuc3BlY31dXG4gICAgKHJlaWZ5XG4gICAgICBJTG9va3VwXG4gICAgICAoLWxvb2t1cCBbdGhpcyBrXSAoZ2V0IHNwZWNzIGspKVxuICAgICAgKC1sb29rdXAgW18gayBub3QtZm91bmRdIChnZXQgc3BlY3MgayBub3QtZm91bmQpKVxuXG4gICAgICBTcGVjaXplXG4gICAgICAoc3BlY2l6ZSogW3NdIHMpXG4gICAgICAoc3BlY2l6ZSogW3MgX10gcylcblxuICAgICAgU3BlY1xuICAgICAgKGNvbmZvcm0qIFtfIGZdIChpZiAoaWZuPyBmKVxuICAgICAgICAgICAgICAgICAgICAgICAgKGlmIChpZGVudGljYWw/IGYgKHZhbGlkYXRlLWZuIGYgc3BlY3MgKmZzcGVjLWl0ZXJhdGlvbnMqKSkgZiA6OmludmFsaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICA6OmludmFsaWQpKVxuICAgICAgKHVuZm9ybSogW18gZl0gZilcbiAgICAgIChleHBsYWluKiBbXyBwYXRoIHZpYSBpbiBmXVxuICAgICAgICAoaWYgKGlmbj8gZilcbiAgICAgICAgICAobGV0IFthcmdzICh2YWxpZGF0ZS1mbiBmIHNwZWNzIDEwMCldXG4gICAgICAgICAgICAoaWYgKGlkZW50aWNhbD8gZiBhcmdzKSA7O2hybSwgd2UgbWlnaHQgbm90IGJlIGFibGUgdG8gcmVwcm9kdWNlXG4gICAgICAgICAgICAgIG5pbFxuICAgICAgICAgICAgICAobGV0IFtyZXQgKHRyeSAoYXBwbHkgZiBhcmdzKSAoY2F0Y2gganMvRXJyb3IgdCB0KSldXG4gICAgICAgICAgICAgICAgKGlmIChpbnN0YW5jZT8ganMvRXJyb3IgcmV0KVxuICAgICAgICAgICAgICAgICAgOztUT0RPIGFkZCBleGNlcHRpb24gZGF0YVxuICAgICAgICAgICAgICAgICAgW3s6cGF0aCBwYXRoIDpwcmVkICcoYXBwbHkgZm4pIDp2YWwgYXJncyA6cmVhc29uICguLW1lc3NhZ2UgcmV0KSA6dmlhIHZpYSA6aW4gaW59XVxuXG4gICAgICAgICAgICAgICAgICAobGV0IFtjcmV0IChkdCByZXRzcGVjIHJldCByZm9ybSldXG4gICAgICAgICAgICAgICAgICAgIChpZiAoaW52YWxpZD8gY3JldClcbiAgICAgICAgICAgICAgICAgICAgICAoZXhwbGFpbi0xIHJmb3JtIHJldHNwZWMgKGNvbmogcGF0aCA6cmV0KSB2aWEgaW4gcmV0KVxuICAgICAgICAgICAgICAgICAgICAgICh3aGVuIGZuc3BlY1xuICAgICAgICAgICAgICAgICAgICAgICAgKGxldCBbY2FyZ3MgKGNvbmZvcm0gYXJnc3BlYyBhcmdzKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGV4cGxhaW4tMSBmZm9ybSBmbnNwZWMgKGNvbmogcGF0aCA6Zm4pIHZpYSBpbiB7OmFyZ3MgY2FyZ3MgOnJldCBjcmV0fSkpKSkpKSkpKVxuICAgICAgICAgIFt7OnBhdGggcGF0aCA6cHJlZCAnaWZuPyA6dmFsIGYgOnZpYSB2aWEgOmluIGlufV0pKVxuICAgICAgKGdlbiogW18gb3ZlcnJpZGVzIF8gX10gKGlmIGdmblxuICAgICAgICAgICAgICAgICAgICAgICAgKGdmbilcbiAgICAgICAgICAgICAgICAgICAgICAgIChnZW4vcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChmbiBbJiBhcmdzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhc3NlcnQgKHB2YWxpZD8gYXJnc3BlYyBhcmdzKSAod2l0aC1vdXQtc3RyIChleHBsYWluIGFyZ3NwZWMgYXJncykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnZW4vZ2VuZXJhdGUgKGdlbiByZXRzcGVjIG92ZXJyaWRlcykpKSkpKVxuICAgICAgKHdpdGgtZ2VuKiBbXyBnZm5dIChmc3BlYy1pbXBsIGFyZ3NwZWMgYWZvcm0gcmV0c3BlYyByZm9ybSBmbnNwZWMgZmZvcm0gZ2ZuKSlcbiAgICAgIChkZXNjcmliZSogW19dIGAoZnNwZWMgOmFyZ3MgfmFmb3JtIDpyZXQgfnJmb3JtIDpmbiB+ZmZvcm0pKSkpKVxuXG47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IG5vbi1wcmltaXRpdmVzIDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1xuKGNsanMuc3BlYy9kZWYgOjprdnMtPm1hcCAoY2xqcy5zcGVjL2NvbmZvcm1lciAjKHppcG1hcCAobWFwIDo6ayAlKSAobWFwIDo6diAlKSkgIyhtYXAgKGZuIFtbayB2XV0gezo6ayBrIDo6diB2fSkgJSkpKVxuXG4oZGVmbiBub25jb25mb3JtaW5nXG4gIFwidGFrZXMgYSBzcGVjIGFuZCByZXR1cm5zIGEgc3BlYyB0aGF0IGhhcyB0aGUgc2FtZSBwcm9wZXJ0aWVzIGV4Y2VwdFxuICAnY29uZm9ybScgcmV0dXJucyB0aGUgb3JpZ2luYWwgKG5vdCB0aGUgY29uZm9ybWVkKSB2YWx1ZS4gTm90ZSwgd2lsbCBzcGVjaXplIHJlZ2V4IG9wcy5cIlxuICBbc3BlY11cbiAgKGxldCBbc3BlYyAoc3BlY2l6ZSBzcGVjKV1cbiAgICAocmVpZnlcbiAgICAgU3BlY2l6ZVxuICAgICAoc3BlY2l6ZSogW3NdIHMpXG4gICAgIChzcGVjaXplKiBbcyBfXSBzKVxuXG4gICAgIFNwZWNcbiAgICAgKGNvbmZvcm0qIFtfIHhdIChsZXQgW3JldCAoY29uZm9ybSogc3BlYyB4KV1cbiAgICAgICAgICAgICAgICAgICAgICAgKGlmIChpbnZhbGlkPyByZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgOjppbnZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgeCkpKVxuICAgICAodW5mb3JtKiBbXyB4XSAodW5mb3JtKiBzcGVjIHgpKVxuICAgICAoZXhwbGFpbiogW18gcGF0aCB2aWEgaW4geF0gKGV4cGxhaW4qIHNwZWMgcGF0aCB2aWEgaW4geCkpXG4gICAgIChnZW4qIFtfIG92ZXJyaWRlcyBwYXRoIHJtYXBdIChnZW4qIHNwZWMgb3ZlcnJpZGVzIHBhdGggcm1hcCkpXG4gICAgICh3aXRoLWdlbiogW18gZ2ZuXSAobm9uY29uZm9ybWluZyAod2l0aC1nZW4qIHNwZWMgZ2ZuKSkpXG4gICAgIChkZXNjcmliZSogW19dIGAobm9uY29uZm9ybWluZyB+KGRlc2NyaWJlKiBzcGVjKSkpKSkpXG5cbihkZWZuIF46c2tpcC13aWtpIG5pbGFibGUtaW1wbFxuICBcIkRvIG5vdCBjYWxsIHRoaXMgZGlyZWN0bHksIHVzZSAnbmlsYWJsZSdcIlxuICBbZm9ybSBwcmVkIGdmbl1cbiAgKGxldCBbc3BlYyAoc3BlY2l6ZSBwcmVkIGZvcm0pXVxuICAgIChyZWlmeVxuICAgICAgU3BlY2l6ZVxuICAgICAgKHNwZWNpemUqIFtzXSBzKVxuICAgICAgKHNwZWNpemUqIFtzIF9dIHMpXG5cbiAgICAgIFNwZWNcbiAgICAgIChjb25mb3JtKiBbXyB4XSAoaWYgKG5pbD8geCkgbmlsIChjb25mb3JtKiBzcGVjIHgpKSlcbiAgICAgICh1bmZvcm0qIFtfIHhdIChpZiAobmlsPyB4KSBuaWwgKHVuZm9ybSogc3BlYyB4KSkpXG4gICAgICAoZXhwbGFpbiogW18gcGF0aCB2aWEgaW4geF1cbiAgICAgICAgKHdoZW4tbm90IChjL29yIChwdmFsaWQ/IHNwZWMgeCkgKG5pbD8geCkpXG4gICAgICAgICAgKGNvbmpcbiAgICAgICAgICAgIChleHBsYWluLTEgZm9ybSBwcmVkIChjb25qIHBhdGggOjpwcmVkKSB2aWEgaW4geClcbiAgICAgICAgICAgIHs6cGF0aCAoY29uaiBwYXRoIDo6bmlsKSA6cHJlZCAnbmlsPyA6dmFsIHggOnZpYSB2aWEgOmluIGlufSkpKVxuICAgICAgKGdlbiogW18gb3ZlcnJpZGVzIHBhdGggcm1hcF1cbiAgICAgICAgKGlmIGdmblxuICAgICAgICAgIChnZm4pXG4gICAgICAgICAgKGdlbi9mcmVxdWVuY3lcbiAgICAgICAgICAgIFtbMSAoZ2VuL2RlbGF5IChnZW4vcmV0dXJuIG5pbCkpXVxuICAgICAgICAgICAgIFs5IChnZW4vZGVsYXkgKGdlbnN1YiBwcmVkIG92ZXJyaWRlcyAoY29uaiBwYXRoIDo6cHJlZCkgcm1hcCBmb3JtKSldXSkpKVxuICAgICAgKHdpdGgtZ2VuKiBbXyBnZm5dIChuaWxhYmxlLWltcGwgZm9ybSBwcmVkIGdmbikpXG4gICAgICAoZGVzY3JpYmUqIFtfXSBgKG5pbGFibGUgfihkZXNjcmliZSogc3BlYykpKSkpKVxuXG4oZGVmbiBleGVyY2lzZVxuICBcImdlbmVyYXRlcyBhIG51bWJlciAoZGVmYXVsdCAxMCkgb2YgdmFsdWVzIGNvbXBhdGlibGUgd2l0aCBzcGVjIGFuZCBtYXBzIGNvbmZvcm0gb3ZlciB0aGVtLFxuICByZXR1cm5pbmcgYSBzZXF1ZW5jZSBvZiBbdmFsIGNvbmZvcm1lZC12YWxdIHR1cGxlcy4gT3B0aW9uYWxseSB0YWtlc1xuICBhIGdlbmVyYXRvciBvdmVycmlkZXMgbWFwIGFzIHBlciBnZW5cIlxuICAoW3NwZWNdIChleGVyY2lzZSBzcGVjIDEwKSlcbiAgKFtzcGVjIG5dIChleGVyY2lzZSBzcGVjIG4gbmlsKSlcbiAgKFtzcGVjIG4gb3ZlcnJpZGVzXVxuICAgKG1hcCAjKHZlY3RvciAlIChjb25mb3JtIHNwZWMgJSkpIChnZW4vc2FtcGxlIChnZW4gc3BlYyBvdmVycmlkZXMpIG4pKSkpXG5cbihkZWZuIGluc3QtaW4tcmFuZ2U/XG4gIFwiUmV0dXJuIHRydWUgaWYgaW5zdCBhdCBvciBhZnRlciBzdGFydCBhbmQgYmVmb3JlIGVuZFwiXG4gIFtzdGFydCBlbmQgaW5zdF1cbiAgKGMvYW5kIChpbnN0PyBpbnN0KVxuICAgICAgICAgKGxldCBbdCAoaW5zdC1tcyBpbnN0KV1cbiAgICAgICAgICAgKGMvYW5kICg8PSAoaW5zdC1tcyBzdGFydCkgdCkgKDwgdCAoaW5zdC1tcyBlbmQpKSkpKSlcblxuKGRlZm4gaW50LWluLXJhbmdlP1xuICBcIlJldHVybiB0cnVlIGlmIHN0YXJ0IDw9IHZhbCBhbmQgdmFsIDwgZW5kXCJcbiAgW3N0YXJ0IGVuZCB2YWxdXG4gIChjb25kXG4gICAgKGludGVnZXI/IHZhbCkgKGMvYW5kICg8PSBzdGFydCB2YWwpICg8IHZhbCBlbmQpKVxuXG4gICAgKGluc3RhbmNlPyBnb29nLm1hdGguTG9uZyB2YWwpXG4gICAgKGMvYW5kICgubGVzc1RoYW5PckVxdWFsIHN0YXJ0IHZhbClcbiAgICAgICAgICAgKC5sZXNzVGhhbiB2YWwgZW5kKSlcblxuICAgIChpbnN0YW5jZT8gZ29vZy5tYXRoLkludGVnZXIgdmFsKVxuICAgIChjL2FuZCAoLmxlc3NUaGFuT3JFcXVhbCBzdGFydCB2YWwpXG4gICAgICAgICAgICgubGVzc1RoYW4gdmFsIGVuZCkpXG5cbiAgICA6ZWxzZSBmYWxzZSkpXG5cbjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyBhc3NlcnQgOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1xuKGRlZm9uY2VcbiAgXns6ZHluYW1pYyB0cnVlXG4gICAgOmRvYyBcIklmIHRydWUsIGNvbXBpbGVyIHdpbGwgZW5hYmxlIHNwZWMgYXNzZXJ0cywgd2hpY2ggYXJlIHRoZW5cbnN1YmplY3QgdG8gcnVudGltZSBjb250cm9sIHZpYSBjaGVjay1hc3NlcnRzPyBJZiBmYWxzZSwgY29tcGlsZXJcbndpbGwgZWxpbWluYXRlIGFsbCBzcGVjIGFzc2VydCBvdmVyaGVhZC4gU2VlICdhc3NlcnQnLlxuSW5pdGlhbGx5IHNldCB0byB0aGUgbmVnYXRpb24gb2YgdGhlICc6ZWxpZGUtYXNzZXJ0cycgY29tcGlsZXIgb3B0aW9uLlxuRGVmYXVsdHMgdG8gdHJ1ZS5cIn1cbiAgKmNvbXBpbGUtYXNzZXJ0cypcbiAgKHMvaW5pdC1jb21waWxlLWFzc2VydHMpKVxuXG4oZGVmb25jZSBeezpwcml2YXRlIHRydWVcbiAgICAgICAgICAgOmR5bmFtaWMgdHJ1ZX1cbiAgKnJ1bnRpbWUtYXNzZXJ0cypcbiAgZmFsc2UpXG5cbihkZWZuIF5ib29sZWFuIGNoZWNrLWFzc2VydHM/XG4gIFwiUmV0dXJucyB0aGUgdmFsdWUgc2V0IGJ5IGNoZWNrLWFzc2VydHMuXCJcbiAgW11cbiAgKnJ1bnRpbWUtYXNzZXJ0cyopXG5cbihkZWZuIGNoZWNrLWFzc2VydHNcbiAgXCJFbmFibGUgb3IgZGlzYWJsZSBzcGVjIGFzc2VydHMgdGhhdCBoYXZlIGJlZW4gY29tcGlsZWRcbndpdGggJypjb21waWxlLWFzc2VydHMqJyB0cnVlLiAgU2VlICdhc3NlcnQnLlxuSW5pdGlhbGx5IHNldCB0byBib29sZWFuIHZhbHVlIG9mIGNsanMuc3BlYy8qcnVudGltZS1hc3NlcnRzKi5cbkRlZmF1bHRzIHRvIGZhbHNlLlwiXG4gIFteYm9vbGVhbiBmbGFnXVxuICAoc2V0ISAqcnVudGltZS1hc3NlcnRzKiBmbGFnKSlcblxuKGRlZm4gYXNzZXJ0KlxuICBcIkRvIG5vdCBjYWxsIHRoaXMgZGlyZWN0bHksIHVzZSAnYXNzZXJ0Jy5cIlxuICBbc3BlYyB4XVxuICAoaWYgKHZhbGlkPyBzcGVjIHgpXG4gICAgeFxuICAgIChsZXQgW2VkIChjL21lcmdlIChhc3NvYyAoZXhwbGFpbi1kYXRhKiBzcGVjIFtdIFtdIFtdIHgpXG4gICAgICAgICAgICAgICAgICAgICAgICA6OmZhaWx1cmUgOmFzc2VydGlvbi1mYWlsZWQpKV1cbiAgICAgICh0aHJvdyAoanMvRXJyb3IuXG4gICAgICAgICAgICAgIChzdHIgXCJTcGVjIGFzc2VydGlvbiBmYWlsZWRcXG5cIiAod2l0aC1vdXQtc3RyIChleHBsYWluLW91dCBlZCkpKSkpKSkpXG4iXX0=