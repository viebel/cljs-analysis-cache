// Compiled by ClojureScript 1.10.339
goog.provide("expound.problems");
expound.problems.blank_form = (function expound$problems$blank_form(form){
if(cljs.core.map_QMARK_.call(null,form)){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,form),cljs.core.repeat.call(null,new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",(2090226124))));
} else {
if(cljs.core.vector_QMARK_.call(null,form)){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",(2090226124))));
} else {
if(cljs.core.set_QMARK_.call(null,form)){
return form;
} else {
if(((cljs.core.list_QMARK_.call(null,form)) || (cljs.core.seq_QMARK_.call(null,form)))){
return cljs.core.apply.call(null,cljs.core.list,cljs.core.repeat.call(null,cljs.core.count.call(null,form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",(2090226124))));
} else {
return new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",(2090226124));

}
}
}
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.problems","summary-form","expound.problems/summary-form",(514693822),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",(-1289128341),null),new cljs.core.Keyword(null,"args","args",(1315556576)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",(-587258094)),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null),new cljs.core.Keyword(null,"form","form",(-1624062471)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",(-511870)),new cljs.core.Keyword("expound","path","expound/path",(-1026376555)))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",(-587258094)),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null),new cljs.core.Keyword(null,"form","form",(-1624062471)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",(-511870)),new cljs.core.Keyword("expound","path","expound/path",(-1026376555))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",(-587258094)),new cljs.core.Keyword(null,"form","form",(-1624062471)),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",(-511870))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.core.any_QMARK_,new cljs.core.Keyword("expound","path","expound/path",(-1026376555))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null),new cljs.core.Keyword("expound","path","expound/path",(-1026376555))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",(-587258094)),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null),new cljs.core.Keyword(null,"form","form",(-1624062471)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",(-511870)),new cljs.core.Keyword("expound","path","expound/path",(-1026376555))),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null),null,null,null));
expound.problems.summary_form = (function expound$problems$summary_form(show_valid_values_QMARK_,form,in$){
while(true){
var vec__151 = in$;
var seq__152 = cljs.core.seq.call(null,vec__151);
var first__153 = cljs.core.first.call(null,seq__152);
var seq__152__$1 = cljs.core.next.call(null,seq__152);
var k = first__153;
var rst = seq__152__$1;
var rst__$1 = (function (){var or__8070__auto__ = rst;
if(or__8070__auto__){
return or__8070__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var displayed_form = (cljs.core.truth_(show_valid_values_QMARK_)?form:expound.problems.blank_form.call(null,form));
if(cljs.core.empty_QMARK_.call(null,in$)){
return new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",(1188199036));
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.map_QMARK_.call(null,form);
if(and__8052__auto__){
return expound.paths.kps_QMARK_.call(null,k);
} else {
return and__8052__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,displayed_form,new cljs.core.Keyword(null,"key","key",(-1516042587)).cljs$core$IFn$_invoke$arity$1(k)),expound.problems.summary_form.call(null,show_valid_values_QMARK_,new cljs.core.Keyword(null,"key","key",(-1516042587)).cljs$core$IFn$_invoke$arity$1(k),rst__$1),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",(2090226124)));
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.map_QMARK_.call(null,form);
if(and__8052__auto__){
return expound.paths.kvps_QMARK_.call(null,k);
} else {
return and__8052__auto__;
}
})())){
var G__154 = show_valid_values_QMARK_;
var G__155 = cljs.core.nth.call(null,cljs.core.seq.call(null,form),new cljs.core.Keyword(null,"idx","idx",(1053688473)).cljs$core$IFn$_invoke$arity$1(k));
var G__156 = rst__$1;
show_valid_values_QMARK_ = G__154;
form = G__155;
in$ = G__156;
continue;
} else {
if(cljs.core.associative_QMARK_.call(null,form)){
return cljs.core.assoc.call(null,displayed_form,k,expound.problems.summary_form.call(null,show_valid_values_QMARK_,cljs.core.get.call(null,form,k),rst__$1));
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.seq_QMARK_.call(null,form)))){
return cljs.core.apply.call(null,cljs.core.list,cljs.core.assoc.call(null,cljs.core.vec.call(null,displayed_form),k,expound.problems.summary_form.call(null,show_valid_values_QMARK_,cljs.core.nth.call(null,form,k),rst__$1)));
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.set_QMARK_.call(null,form)))){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.assoc.call(null,cljs.core.vec.call(null,displayed_form),k,expound.problems.summary_form.call(null,show_valid_values_QMARK_,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k),rst__$1)));
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.list_QMARK_.call(null,form)))){
return cljs.core.into.call(null,cljs.core.List.EMPTY,cljs.core.assoc.call(null,cljs.core.vec.call(null,displayed_form),k,expound.problems.summary_form.call(null,show_valid_values_QMARK_,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k),rst__$1)));
} else {
throw cljs.core.ex_info.call(null,"Cannot find path segment in form. This can be caused by using conformers to transform values, which is not supported in Expound",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",(-1624062471)),form,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$], null));

}
}
}
}
}
}
}
break;
}
});
expound.problems.highlight_line = (function expound$problems$highlight_line(prefix,replacement){
var max_width = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__7_SHARP_){
return cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7_SHARP_)].join(''));
}),clojure.string.split_lines.call(null,replacement)));
return expound.printer.indent.call(null,cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join('')),cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,max_width,"^")));
});
expound.problems.adjust_in = (function expound$problems$adjust_in(form,problem){
try{return cljs.core.assoc.call(null,problem,new cljs.core.Keyword("expound","in","expound/in",(-1900412298)),expound.paths.in_with_kps.call(null,form,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"in","in",(-1531184865)).cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY));
}catch (e157){var e = e157;
if(cljs.core.truth_((function (){var or__8070__auto__ = cljs.core._EQ_.call(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",(-1334050276),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null)),new cljs.core.Keyword(null,"pred","pred",(1927423397)).cljs$core$IFn$_invoke$arity$1(problem));
if(or__8070__auto__){
return or__8070__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret","ret",(-468222814)),null], null), null).call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(problem)));
}
})())){
return cljs.core.assoc.call(null,problem,new cljs.core.Keyword("expound","in","expound/in",(-1900412298)),new cljs.core.Keyword(null,"in","in",(-1531184865)).cljs$core$IFn$_invoke$arity$1(problem));
} else {
throw e;
}
}});
expound.problems.adjust_path = (function expound$problems$adjust_path(failure,problem){
return cljs.core.assoc.call(null,problem,new cljs.core.Keyword("expound","path","expound/path",(-1026376555)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",(-960698844)),failure))?cljs.core.vec.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(problem))):new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(problem)));
});
expound.problems.add_spec = (function expound$problems$add_spec(spec,problem){
return cljs.core.assoc.call(null,problem,new cljs.core.Keyword(null,"spec","spec",(347520401)),spec);
});
expound.problems.fix_via = (function expound$problems$fix_via(spec,problem){
if(cljs.core._EQ_.call(null,spec,cljs.core.first.call(null,new cljs.core.Keyword(null,"via","via",(-1904457336)).cljs$core$IFn$_invoke$arity$1(problem)))){
return cljs.core.assoc.call(null,problem,new cljs.core.Keyword("expound","via","expound/via",(-595987777)),new cljs.core.Keyword(null,"via","via",(-1904457336)).cljs$core$IFn$_invoke$arity$1(problem));
} else {
return cljs.core.assoc.call(null,problem,new cljs.core.Keyword("expound","via","expound/via",(-595987777)),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null),new cljs.core.Keyword(null,"via","via",(-1904457336)).cljs$core$IFn$_invoke$arity$1(problem)));
}
});
expound.problems.missing_spec_QMARK_ = (function expound$problems$missing_spec_QMARK_(_failure,problem){
return cljs.core._EQ_.call(null,"no method",new cljs.core.Keyword(null,"reason","reason",(-2070751759)).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.not_in_set_QMARK_ = (function expound$problems$not_in_set_QMARK_(_failure,problem){
return cljs.core.set_QMARK_.call(null,new cljs.core.Keyword(null,"pred","pred",(1927423397)).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.fspec_exception_failure_QMARK_ = (function expound$problems$fspec_exception_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",(-960698844)),failure)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"check-failed","check-failed",(-1316157547)),failure)) && (cljs.core._EQ_.call(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",(-1334050276),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null)),new cljs.core.Keyword(null,"pred","pred",(1927423397)).cljs$core$IFn$_invoke$arity$1(problem))));
});
expound.problems.fspec_ret_failure_QMARK_ = (function expound$problems$fspec_ret_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",(-960698844)),failure)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"check-failed","check-failed",(-1316157547)),failure)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ret","ret",(-468222814)),cljs.core.first.call(null,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.fspec_fn_failure_QMARK_ = (function expound$problems$fspec_fn_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",(-960698844)),failure)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"check-failed","check-failed",(-1316157547)),failure)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",(-1175266204)),cljs.core.first.call(null,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.check_ret_failure_QMARK_ = (function expound$problems$check_ret_failure_QMARK_(failure,problem){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"check-failed","check-failed",(-1316157547)),failure)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ret","ret",(-468222814)),cljs.core.first.call(null,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.check_fn_failure_QMARK_ = (function expound$problems$check_fn_failure_QMARK_(failure,problem){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"check-failed","check-failed",(-1316157547)),failure)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",(-1175266204)),cljs.core.first.call(null,new cljs.core.Keyword(null,"path","path",(-188191168)).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.missing_key_QMARK_ = (function expound$problems$missing_key_QMARK_(_failure,problem){
var pred = new cljs.core.Keyword(null,"pred","pred",(1927423397)).cljs$core$IFn$_invoke$arity$1(problem);
var and__8052__auto__ = cljs.core.seq_QMARK_.call(null,pred);
if(and__8052__auto__){
var and__8052__auto____$1 = ((2) < cljs.core.count.call(null,pred));
if(and__8052__auto____$1){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",(-989075236)),cljs.core.nth.call(null,pred,(2)));
} else {
return and__8052__auto____$1;
}
} else {
return and__8052__auto__;
}
});
expound.problems.insufficient_input_QMARK_ = (function expound$problems$insufficient_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Insufficient input",null], null), null),new cljs.core.Keyword(null,"reason","reason",(-2070751759)).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.extra_input_QMARK_ = (function expound$problems$extra_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Extra input",null], null), null),new cljs.core.Keyword(null,"reason","reason",(-2070751759)).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.ptype = (function expound$problems$ptype(failure,problem){
if(cljs.core.truth_(new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",(-862044659)).cljs$core$IFn$_invoke$arity$1(problem))){
return new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",(-862044659)).cljs$core$IFn$_invoke$arity$1(problem);
} else {
if(cljs.core.truth_(expound.problems.insufficient_input_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("expound.problem","insufficient-input","expound.problem/insufficient-input",(1437497436));
} else {
if(cljs.core.truth_(expound.problems.extra_input_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("expound.problem","extra-input","expound.problem/extra-input",(2043170217));
} else {
if(cljs.core.truth_(expound.problems.not_in_set_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("expound.problem","not-in-set","expound.problem/not-in-set",(14506077));
} else {
if(cljs.core.truth_(expound.problems.missing_key_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("expound.problem","missing-key","expound.problem/missing-key",(-750683408));
} else {
if(cljs.core.truth_(expound.problems.missing_spec_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("expound.problem","missing-spec","expound.problem/missing-spec",(-1439599438));
} else {
if(cljs.core.truth_(expound.problems.fspec_exception_failure_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("expound.problem","fspec-exception-failure","expound.problem/fspec-exception-failure",(-398312942));
} else {
if(cljs.core.truth_(expound.problems.fspec_ret_failure_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("expound.problem","fspec-ret-failure","expound.problem/fspec-ret-failure",(1192937934));
} else {
if(cljs.core.truth_(expound.problems.fspec_fn_failure_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("expound.problem","fspec-fn-failure","expound.problem/fspec-fn-failure",(-814692716));
} else {
if(cljs.core.truth_(expound.problems.check_ret_failure_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("expound.problem","check-ret-failure","expound.problem/check-ret-failure",(1795987483));
} else {
if(cljs.core.truth_(expound.problems.check_fn_failure_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("expound.problem","check-fn-failure","expound.problem/check-fn-failure",(443478179));
} else {
return new cljs.core.Keyword("expound.problem","unknown","expound.problem/unknown",(1364832957));

}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Similar to get-in, but works with paths that reference map keys
 */
expound.problems.value_in = (function expound$problems$value_in(form,in$){
while(true){
var vec__158 = in$;
var seq__159 = cljs.core.seq.call(null,vec__158);
var first__160 = cljs.core.first.call(null,seq__159);
var seq__159__$1 = cljs.core.next.call(null,seq__159);
var k = first__160;
var rst = seq__159__$1;
if(cljs.core.empty_QMARK_.call(null,in$)){
return form;
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.map_QMARK_.call(null,form);
if(and__8052__auto__){
return expound.paths.kps_QMARK_.call(null,k);
} else {
return and__8052__auto__;
}
})())){
return new cljs.core.Keyword(null,"key","key",(-1516042587)).cljs$core$IFn$_invoke$arity$1(k);
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.map_QMARK_.call(null,form);
if(and__8052__auto__){
return expound.paths.kvps_QMARK_.call(null,k);
} else {
return and__8052__auto__;
}
})())){
var G__161 = cljs.core.nth.call(null,cljs.core.seq.call(null,form),new cljs.core.Keyword(null,"idx","idx",(1053688473)).cljs$core$IFn$_invoke$arity$1(k));
var G__162 = rst;
form = G__161;
in$ = G__162;
continue;
} else {
if(cljs.core.associative_QMARK_.call(null,form)){
var G__163 = cljs.core.get.call(null,form,k);
var G__164 = rst;
form = G__163;
in$ = G__164;
continue;
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.seqable_QMARK_.call(null,form)))){
var G__165 = cljs.core.nth.call(null,cljs.core.seq.call(null,form),k);
var G__166 = rst;
form = G__165;
in$ = G__166;
continue;
} else {
return null;
}
}
}
}
}
break;
}
});
expound.problems.escape_replacement = (function expound$problems$escape_replacement(pattern,s){
return clojure.string.replace.call(null,s,/\$/,"$$$$");
});
/**
 * Given a problem, returns a pretty printed
 * string that highlights the problem value
 */
expound.problems.highlighted_value = (function expound$problems$highlighted_value(opts,problem){
var map__167 = problem;
var map__167__$1 = ((((!((map__167 == null)))?(((((map__167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__167):map__167);
var form = cljs.core.get.call(null,map__167__$1,new cljs.core.Keyword("expound","form","expound/form",(-264680632)));
var in$ = cljs.core.get.call(null,map__167__$1,new cljs.core.Keyword("expound","in","expound/in",(-1900412298)));
var map__168 = opts;
var map__168__$1 = ((((!((map__168 == null)))?(((((map__168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__168):map__168);
var show_valid_values_QMARK_ = cljs.core.get.call(null,map__168__$1,new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",(-587258094)),false);
var value_at_path = expound.problems.value_in.call(null,form,in$);
var relevant = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",(1188199036))),"|(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",(229013575))),"\\s+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",(229013575))),"))"].join('');
var regex = cljs.core.re_pattern.call(null,["(.*)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relevant),".*"].join(''));
var s = (function (){var _STAR_print_namespace_maps_STAR_174 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return expound.printer.pprint_str.call(null,clojure.walk.prewalk_replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",(2090226124)),new cljs.core.Symbol(null,"...","...",(-1926939749),null)], null),expound.problems.summary_form.call(null,show_valid_values_QMARK_,form,in$)));
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_174;
}})();
var vec__169 = cljs.core.re_find.call(null,regex,s);
var seq__170 = cljs.core.seq.call(null,vec__169);
var first__171 = cljs.core.first.call(null,seq__170);
var seq__170__$1 = cljs.core.next.call(null,seq__170);
var line = first__171;
var first__171__$1 = cljs.core.first.call(null,seq__170__$1);
var seq__170__$2 = cljs.core.next.call(null,seq__170__$1);
var prefix = first__171__$1;
var _more = seq__170__$2;
var highlighted_line = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,line,cljs.core.re_pattern.call(null,relevant),expound.problems.escape_replacement.call(null,cljs.core.re_pattern.call(null,relevant),expound.printer.indent.call(null,(0),cljs.core.count.call(null,prefix),expound.ansi.color.call(null,expound.printer.pprint_str.call(null,value_at_path),new cljs.core.Keyword(null,"bad-value","bad-value",(-139100659))))))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.call(null,expound.problems.highlight_line.call(null,prefix,expound.printer.pprint_str.call(null,value_at_path)),new cljs.core.Keyword(null,"pointer","pointer",(85071187))))].join('');
return expound.printer.no_trailing_whitespace.call(null,clojure.string.replace.call(null,s,line,expound.problems.escape_replacement.call(null,line,highlighted_line)));
});
expound.problems.annotate = (function expound$problems$annotate(explain_data){
var map__175 = explain_data;
var map__175__$1 = ((((!((map__175 == null)))?(((((map__175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__175):map__175);
var problems = cljs.core.get.call(null,map__175__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",(447400814)));
var value = cljs.core.get.call(null,map__175__$1,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",(1974786274)));
var args = cljs.core.get.call(null,map__175__$1,new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",(1870769783)));
var ret = cljs.core.get.call(null,map__175__$1,new cljs.core.Keyword("cljs.spec.alpha","ret","cljs.spec.alpha/ret",(1165997503)));
var fn = cljs.core.get.call(null,map__175__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",(408600443)));
var failure = cljs.core.get.call(null,map__175__$1,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",(188258592)));
var spec = cljs.core.get.call(null,map__175__$1,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(1947137578)));
var caller = (function (){var or__8070__auto__ = new cljs.core.Keyword("clojure.spec.test.alpha","caller","clojure.spec.test.alpha/caller",(-706822212)).cljs$core$IFn$_invoke$arity$1(explain_data);
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return new cljs.core.Keyword("orchestra.spec.test","caller","orchestra.spec.test/caller",(-686413347)).cljs$core$IFn$_invoke$arity$1(explain_data);
}
})();
var form = ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",(-960698844)),failure))?value:((cljs.core.contains_QMARK_.call(null,explain_data,new cljs.core.Keyword("cljs.spec.alpha","ret","cljs.spec.alpha/ret",(1165997503))))?ret:((cljs.core.contains_QMARK_.call(null,explain_data,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",(408600443))))?fn:((cljs.core.contains_QMARK_.call(null,explain_data,new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",(1870769783))))?args:null))));
var problems_SINGLEQUOTE_ = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,expound.problems.adjust_in,form),cljs.core.partial.call(null,expound.problems.adjust_path,failure),cljs.core.partial.call(null,expound.problems.add_spec,spec),cljs.core.partial.call(null,expound.problems.fix_via,spec),((function (map__175,map__175__$1,problems,value,args,ret,fn,failure,spec,caller,form){
return (function (p1__8_SHARP_){
return cljs.core.assoc.call(null,p1__8_SHARP_,new cljs.core.Keyword("expound","form","expound/form",(-264680632)),form);
});})(map__175,map__175__$1,problems,value,args,ret,fn,failure,spec,caller,form))
,((function (map__175,map__175__$1,problems,value,args,ret,fn,failure,spec,caller,form){
return (function (p1__9_SHARP_){
return cljs.core.assoc.call(null,p1__9_SHARP_,new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",(-862044659)),expound.problems.ptype.call(null,failure,p1__9_SHARP_));
});})(map__175,map__175__$1,problems,value,args,ret,fn,failure,spec,caller,form))
),problems);
return cljs.core.assoc.call(null,explain_data,new cljs.core.Keyword("expound","form","expound/form",(-264680632)),form,new cljs.core.Keyword("expound","caller","expound/caller",(-503638870)),caller,new cljs.core.Keyword("expound","problems","expound/problems",(1257773984)),problems_SINGLEQUOTE_);
});
expound.problems.type = expound.problems.ptype;

//# sourceURL=expound/problems.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3VuZC9wcm9ibGVtcy5qcyIsInNvdXJjZXMiOlsicHJvYmxlbXMuY2xqcyJdLCJsaW5lQ291bnQiOjM0MCwibWFwcGluZ3MiOiI7QUFTQSw4QkFBQSw5QkFBTUEsb0VBQVlDO0FBQWxCLEFBQ0UsR0FDRSxBQUFDQywrQkFBS0Q7QUFDTixPQUFDRSwyQkFBTyxBQUFDQyx5QkFBS0gsTUFBTSwyQkFBQSwzQkFBQ0k7O0FBRnZCLEdBSUUsQUFBQ0Msa0NBQVFMO0FBQ1QsT0FBQ00sd0JBQUksMkRBQUEsM0RBQUNGLDJCQUFPLEFBQUNHLDBCQUFNUDs7QUFMdEIsR0FPRSxBQUFDUSwrQkFBS1I7QUFDTkE7O0FBUkYsR0FVRSxFQUFJLEFBQUNTLGdDQUFNVCxXQUNQLEFBQUNVLCtCQUFLVjtBQUNWLE9BQUNXLDBCQUFNQyxlQUFLLDJEQUFBLDNEQUFDUiwyQkFBTyxBQUFDRywwQkFBTVA7O0FBWjdCLEFBQUE7Ozs7Ozs7QUFpQkYsQUFBQWEsbUNBQUEseUdBQUEsZUFBQSwyRkFBQSx1REFBQSxlQUFBLHVGQUFBLG1GQUFBLG9GQUFBLHdEQUFBLDZFQUFBLDRFQUFBLHVFQUFBLEFBQUFDLHFDQUFBLEFBQUFDLG9DQUFBLGVBQUEsdUZBQUEsbUZBQUEsb0ZBQUEsd0RBQUEsNkVBQUEsNEVBQUEsMjZCQUFBLEtBQUEsTUFBQSxlQUFBLHVGQUFBLG1GQUFBLG9GQUFBLHdEQUFBLDZFQUFBLDRFQUFBLHNFQUFBLEFBQUFBLG9DQUFBLDZFQUFBQyxxQkFBQSxLQUFBLE1BQUEsNkVBQUEsS0FBQSxLQUFBLDVuREFDYyxBQUFBQyxtQ0FBQSxtRkFBQSxtRkFBQSx3REFBQSxvRkFBQSxpSUFBQSw2RUFBQSxtRkFBQSxvRkFBQSw2RUFBQSwvV0FBMkJDLHlCQUNkRjtBQUUzQixnQ0FBQSxoQ0FBTUcsd0VBQWNDLHlCQUFtQnBCLEtBQUtxQjs7QUFBNUMsQUFDRSxJQUFBQyxXQUFnQkQ7SUFBaEJFLFdBQUEsQUFBQUMsd0JBQUFGO0lBQUFHLGFBQUEsQUFBQUMsMEJBQUFIO0lBQUFBLGVBQUEsQUFBQUkseUJBQUFKO1FBQUFFLEpBQU9HO1VBQVBMLE5BQVdNO0lBQ0xBLFVBQUksaUJBQUFDLG1CQUFJRDtBQUFKLEFBQUEsR0FBQUM7QUFBQUE7O0FBQUE7OztJQUNKQyxpQkFBZSxrQkFBSVgsMEJBQW1CcEIsS0FBSyxBQUFDRCxzQ0FBV0M7QUFGN0QsQUFHRSxHQUNFLEFBQUNnQyxpQ0FBT1g7QUFEVjs7QUFBQSxvQkFJRSxpQkFBQVksb0JBQUssQUFBQ2hDLCtCQUFLRDtBQUFYLEFBQUEsR0FBQWlDO0FBQWlCLE9BQUNDLG1DQUFXTjs7QUFBN0JLOzs7NERBQ0lGLDNCQUNBLEFBQUNJLDBDQUFPLEFBQUEsb0ZBQU1QLC9KQUNkLG9VQUFBLDdUQUFDUSw0SkFBTSxBQUFDakIsd0NBQWFDLHlCQUFtQixBQUFBLG9GQUFNUSxHQUFHQzs7QUFQdkQsb0JBVUUsaUJBQUFJLG9CQUFLLEFBQUNoQywrQkFBS0Q7QUFBWCxBQUFBLEdBQUFpQztBQUFpQixPQUFDSSxvQ0FBWVQ7O0FBQTlCSzs7O0FBQ0EsYUFBT2I7YUFBbUIsQUFBQ2tCLHdCQUFJLEFBQUNkLHdCQUFJeEIsTUFBTSxBQUFBLG1GQUFNNEI7YUFBSUM7Ozs7OztBQVh0RCxHQWFFLEFBQUNVLHVDQUFhdkM7QUFDZCxPQUFDb0MsMEJBQU1MLGVBQ0FILEVBQ0EsQUFBQ1Qsd0NBQWFDLHlCQUFtQixBQUFDb0Isd0JBQUl4QyxLQUFLNEIsR0FBR0M7O0FBaEJ2RCxHQWtCRSxFQUFLLEFBQUNZLCtCQUFLYixRQUFHLEFBQUNsQiwrQkFBS1Y7QUFDcEIsT0FBQ1csMEJBQU1DLGlFQUFTbUIseEJBQ0F6QiwxQkFDQSwwQkFBQSwxQkFBQzhCLGtFQUFNUixFQUFFLEFBQUNULHdDQUFhQyx5QkFBbUIsQUFBQ2tCLHdCQUFJdEMsS0FBSzRCLEdBQUdDOztBQXJCekUsR0F1QkUsRUFBSyxBQUFDWSwrQkFBS2IsUUFBRyxBQUFDcEIsK0JBQUtSO0FBQ3BCLGdDQUFBLHpCQUFDMEMsNkdBQWFYLHhCQUNBekIsMUJBQ0EsMEJBQUEsMUJBQUM4QixrRUFBTVIsRUFBRSxBQUFDVCx3Q0FBYUMseUJBQW1CLEFBQUNrQix3QkFBSSxBQUFDZCx3QkFBSXhCLE1BQU00QixHQUFHQzs7QUExQjdFLEdBNEJFLEVBQUssQUFBQ1ksK0JBQUtiLFFBQUcsQUFBQ25CLGdDQUFNVDtBQUNyQixnQ0FBQSx6QkFBQzBDLGdHQUFhWCx4QkFDQXpCLDFCQUNBLDBCQUFBLDFCQUFDOEIsa0VBQU1SLEVBQUUsQUFBQ1Qsd0NBQWFDLHlCQUFtQixBQUFDa0Isd0JBQUksQUFBQ2Qsd0JBQUl4QixNQUFNNEIsR0FBR0M7O0FBL0I3RSxBQWtDRSxNQUFPLDRCQUFBLGtJQUFBLDJDQUFBLDZEQUFBLHRRQUFDYyxpUUFDZTNDLHlEQUNGcUI7Ozs7Ozs7Ozs7OztBQUczQixrQ0FBQSxsQ0FBTXVCLDRFQUNIQyxPQUFPQztBQURWLEFBRUUsSUFBTUMsWUFBVSxBQUFDcEMsMEJBQU1xQyxjQUFJLHdCQUFBLFdBQUFDLG5DQUFDQztBQUFELEFBQU0sT0FBQzNDLDBCQUFNLDZDQUFBMEM7R0FBUyxBQUFDRSxxQ0FBbUJMO0FBQXJFLEFBQ0UsT0FBQ00saUNBQWUsQUFBQzdDLDBCQUFNLDZDQUFLc0MsbUJBQ1osQUFBQ2xDLDBCQUFNMEMsY0FBSSxxQ0FBQSxyQ0FBQ2pELDJCQUFPMkM7O0FBRXZDLDZCQUFBLDdCQUFPTyxrRUFBV3RELEtBQUt1RDtBQUF2QixBQUlFLElBQUEsQUFDRSx5Q0FBQSxsQ0FBQ25CLDBCQUFNbUIseUVBQW9CLCtOQUFBLC9OQUFDRSxvQ0FBa0J6RCxLQUFLLEFBQUEsa0ZBQU11RCxTQUFTLEFBQUEsa0ZBQUtBO2NBRHpFLFFBQUFDLEpBRzRCRTtBQUg1QixBQUlJLG9CQUFJLGlCQUFBNUIsbUJBQ0MseUJBQUEsZUFBQSw4REFBQSx0R0FBQzZCLDZKQUFjLEFBQUEscUZBQU9KO0FBRHZCLEFBQUEsR0FBQXpCO0FBQUFBOztBQUVDLE9BQUEsaUZBQUEsbUZBQVMsQUFBQ0osMEJBQU0sQUFBQSxxRkFBTzZCOzs7QUFDMUIseUNBQUEsbENBQUNuQiwwQkFBTW1CLHlFQUFvQixBQUFBLGtGQUFLQTs7QUFDaEMsTUFBT0c7OztBQUVmLCtCQUFBLC9CQUFPRSxzRUFBYUMsUUFBUU47QUFBNUIsQUFDRSx5Q0FBQSxsQ0FBQ25CLDBCQUFNbUIsNkVBQ0EsRUFBSSx5QkFBQSx6QkFBQ0ksNEZBQWNFLFVBQ2pCLEFBQUN2RCx3QkFBSSxBQUFDd0QseUJBQUssQUFBQSxxRkFBT1AsV0FDbEIsQUFBQSxxRkFBT0E7O0FBRWxCLDRCQUFBLDVCQUFPUSxnRUFBVUMsS0FBS1Q7QUFBdEIsQUFDRSx5Q0FBQSxsQ0FBQ25CLDBCQUFNbUIsOERBQWNTOztBQUd2QiwyQkFBQSwzQkFBTUMsOERBQVNELEtBQUtUO0FBQXBCLEFBQ0UsR0FBSSxBQUFDSSx5QkFBRUssS0FBSyxBQUFDdEMsMEJBQU0sQUFBQSxvRkFBTTZCO0FBQ3ZCLHlDQUFBLGxDQUFDbkIsMEJBQU1tQiwwRUFBcUIsQUFBQSxvRkFBTUE7O0FBQ2xDLHlDQUFBLGxDQUFDbkIsMEJBQU1tQiwwRUFBcUIseUJBQUEsekJBQUNiLDRHQUFNc0IsYUFBTSxBQUFBLG9GQUFNVDs7O0FBRW5ELHVDQUFBLHZDQUFnQlcsc0ZBQWVDLFNBQVNaO0FBQXhDLEFBQ0UsZ0NBQUEsekJBQUNJLHFDQUFjLEFBQUEsMEZBQVNKOztBQUUxQixxQ0FBQSxyQ0FBZ0JhLGtGQUFhRCxTQUFTWjtBQUF0QyxBQUNFLE9BQUMvQywrQkFBSyxBQUFBLHFGQUFPK0M7O0FBRWYsa0RBQUEsbERBQWdCYyw0R0FBMEJSLFFBQVFOO0FBQWxELEFBQ0UsU0FBSyw0QkFBQSw1QkFBQ2UsK0ZBQWlCVCxjQUNsQiw0QkFBQSw1QkFBQ1Msb0dBQW1CVCxjQUNwQix5QkFBQSxlQUFBLDhEQUFBLHRHQUFDRiw2SkFBYyxBQUFBLHFGQUFPSjs7QUFFN0IsNENBQUEsNUNBQWdCZ0IsZ0dBQW9CVixRQUFRTjtBQUE1QyxBQUNFLFNBQ0MsNEJBQUEsNUJBQUNlLCtGQUFpQlQsY0FDbEIsNEJBQUEsNUJBQUNTLG9HQUFtQlQsY0FDcEIseUJBQUEsekJBQUNGLDhFQUFPLEFBQUNqQywwQkFBTSxBQUFBLHFGQUFPNkI7O0FBRXpCLDJDQUFBLDNDQUFnQmlCLDhGQUFtQlgsUUFBUU47QUFBM0MsQUFDRSxTQUNDLDRCQUFBLDVCQUFDZSwrRkFBaUJULGNBQ2xCLDRCQUFBLDVCQUFDUyxvR0FBbUJULGNBQ3BCLHlCQUFBLHpCQUFDRiw2RUFBTSxBQUFDakMsMEJBQU0sQUFBQSxxRkFBTzZCOztBQUV4Qiw0Q0FBQSw1Q0FBZ0JrQixnR0FBb0JaLFFBQVFOO0FBQTVDLEFBQ0UsU0FDQyx5QkFBQSx6QkFBQ0ksaUdBQWdCRSxjQUNqQix5QkFBQSx6QkFBQ0YsOEVBQU8sQUFBQ2pDLDBCQUFNLEFBQUEscUZBQU82Qjs7QUFFekIsMkNBQUEsM0NBQWdCbUIsOEZBQW1CYixRQUFRTjtBQUEzQyxBQUNFLFNBQUsseUJBQUEsekJBQUNJLGlHQUFnQkUsY0FDakIseUJBQUEsekJBQUNGLDZFQUFNLEFBQUNqQywwQkFBTSxBQUFBLHFGQUFPNkI7O0FBRTVCLHNDQUFBLHRDQUFnQm9CLG9GQUFjUixTQUFTWjtBQUF2QyxBQUNFLElBQU1xQixPQUFLLEFBQUEscUZBQU9yQjtBQUFsQixBQUNFLElBQUF0QixvQkFBSyxBQUFDdkIsK0JBQUtrRTtBQUFYLEFBQUEsR0FBQTNDO0FBQUEsSUFBQUEsd0JBQ0ssQ0FBQSxNQUFLLEFBQUMxQiwwQkFBTXFFO0FBRGpCLEFBQUEsR0FBQTNDO0FBRUssOENBQUEsdkNBQUM0QywrSUFFQSw2QkFBQSw3QkFBQ3ZDLHdCQUFJc0M7O0FBSlgzQzs7O0FBQUFBOzs7QUFNSiw2Q0FBQSw3Q0FBZ0I2QyxrR0FBcUJYLFNBQVNaO0FBQTlDLEFBQ0UsMkNBQUEsaUZBQUEsckhBQUN3Qiw4SkFBa0MsQUFBQSwwRkFBU3hCOztBQUU5QyxzQ0FBQSx0Q0FBZ0J5QixvRkFBY2IsU0FBU1o7QUFBdkMsQUFDRSwyQ0FBQSxpRkFBQSxySEFBQ3dCLHVKQUEyQixBQUFBLDBGQUFTeEI7O0FBRXZDLHlCQUFBLHpCQUFnQjBCLDBEQUFPcEIsUUFBUU47QUFBL0IsQUFDRSxvQkFDRSxBQUFBLDRIQUE0QkE7QUFDNUIsT0FBQSw0SEFBNEJBOztBQUY5QixvQkFJRSxBQUFDdUIscURBQW9CakIsUUFBUU47QUFKL0I7O0FBQUEsb0JBT0UsQUFBQ3lCLDhDQUFhbkIsUUFBUU47QUFQeEI7O0FBQUEsb0JBVUUsQUFBQ2EsNkNBQVlQLFFBQVFOO0FBVnZCOztBQUFBLG9CQWFFLEFBQUNvQiw4Q0FBYWQsUUFBUU47QUFieEI7O0FBQUEsb0JBZ0JFLEFBQUNXLCtDQUFjTCxRQUFRTjtBQWhCekI7O0FBQUEsb0JBbUJFLEFBQUNjLDBEQUF5QlIsUUFBUU47QUFuQnBDOztBQUFBLG9CQXNCRSxBQUFDZ0Isb0RBQW1CVixRQUFRTjtBQXRCOUI7O0FBQUEsb0JBeUJFLEFBQUNpQixtREFBa0JYLFFBQVFOO0FBekI3Qjs7QUFBQSxvQkE0QkUsQUFBQ2tCLG9EQUFtQlosUUFBUU47QUE1QjlCOztBQUFBLG9CQStCRSxBQUFDbUIsbURBQWtCYixRQUFRTjtBQS9CN0I7O0FBQUEsQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUF1Q0Y7Ozs0QkFBQSw1QkFBTTJCLGdFQUVIbEYsS0FBS3FCOztBQUZSLEFBR0UsSUFBQThELFdBQWdCOUQ7SUFBaEIrRCxXQUFBLEFBQUE1RCx3QkFBQTJEO0lBQUFFLGFBQUEsQUFBQTNELDBCQUFBMEQ7SUFBQUEsZUFBQSxBQUFBekQseUJBQUF5RDtRQUFBQyxKQUFPekQ7VUFBUHdELE5BQVd2RDtBQUFYLEFBQ0UsR0FDRSxBQUFDRyxpQ0FBT1g7QUFDUnJCOztBQUZGLG9CQUlFLGlCQUFBaUMsb0JBQUssQUFBQ2hDLCtCQUFLRDtBQUFYLEFBQUEsR0FBQWlDO0FBQWlCLE9BQUNDLG1DQUFXTjs7QUFBN0JLOzs7QUFDQSxPQUFBLG9GQUFNTDs7QUFMUixvQkFPRSxpQkFBQUssb0JBQUssQUFBQ2hDLCtCQUFLRDtBQUFYLEFBQUEsR0FBQWlDO0FBQWlCLE9BQUNJLG9DQUFZVDs7QUFBOUJLOzs7QUFDQSxhQUFPLEFBQUNLLHdCQUFJLEFBQUNkLHdCQUFJeEIsTUFBTSxBQUFBLG1GQUFNNEI7YUFBSUM7Ozs7O0FBUm5DLEdBVUUsQUFBQ1UsdUNBQWF2QztBQUNkLGFBQU8sQUFBQ3dDLHdCQUFJeEMsS0FBSzRCO2FBQUdDOzs7OztBQVh0QixHQWFFLEVBQUssQUFBQ1ksK0JBQUtiLFFBQUcsQUFBQzBELG1DQUFTdEY7QUFDeEIsYUFBTyxBQUFDc0Msd0JBQUksQUFBQ2Qsd0JBQUl4QixNQUFNNEI7YUFBR0M7Ozs7O0FBZDVCOzs7Ozs7Ozs7QUFnQkosc0NBQUEsdENBQU0wRCxvRkFBb0JDLFFBQVFDO0FBQWxDLEFBSVcsMENBQUEsS0FBQSx4Q0FBQ0MsaUNBQWVEOztBQUUzQjs7OztxQ0FBQSxyQ0FBTUUsa0ZBR0hDLEtBQUtyQztBQUhSLEFBSUUsSUFBQXNDLFdBQTBDdEM7SUFBMUNzQyxlQUFBLEVBQUEsRUFBQSxFQUFBLENBQUFBLFlBQUEsUUFBQSxFQUFBLEVBQUEsQ0FBQSxBQUFBQSwrQ0FBQSxXQUFBLENBQUFDLGdDQUFBLEFBQUFELDZCQUFBLEtBQUEsT0FBQSxRQUFBLEFBQUFsRiwwQkFBQW9GLG1CQUFBRixVQUFBQTtJQUFBN0YsT0FBQSxBQUFBd0Msd0JBQUFxRCxhQUFBO0lBQUF4RSxNQUFBLEFBQUFtQix3QkFBQXFELGFBQUE7SUFBQUcsV0FDa0VKO0lBRGxFSSxlQUFBLEVBQUEsRUFBQSxFQUFBLENBQUFBLFlBQUEsUUFBQSxFQUFBLEVBQUEsQ0FBQSxBQUFBQSwrQ0FBQSxXQUFBLENBQUFGLGdDQUFBLEFBQUFFLDZCQUFBLEtBQUEsT0FBQSxRQUFBLEFBQUFyRiwwQkFBQW9GLG1CQUFBQyxVQUFBQTsrQkFBQSxBQUFBeEQsd0JBQUF3RCxhQUFBLG1GQUFBLG5KQUNjNUU7SUFDUmdGLGdCQUFjLEFBQUNsQixvQ0FBU2xGLEtBQUtxQjtJQUM3QmdGLFdBQVMsQ0FBQSxnREFBQSwrRkFBQSxpREFBQSxvR0FBQSxtREFBQSxvR0FBQTtJQUNUQyxRQUFNLEFBQUNDLCtCQUFXLENBQUEsNkRBQUEsVkFBWUY7SUFDOUJaLElBQUUsaUJBQUFlLHNDQUFVQztBQUFWLEFBQUEsNkNBQUEsN0NBQVVBOztBQUFWLElBQUEsQUFBd0MsT0FBQ0MscUNBQW1CLHVDQUFBLDJDQUFBLGtHQUFBLHBMQUFDQyxzUEFBeUMsQUFBQ3hGLHdDQUFhQyx5QkFBbUJwQixLQUFLcUI7VUFBNUksQUFBQSw2Q0FBQW1GLDdDQUFVQzs7SUFMbEJSLFdBTTRCLEFBQUNhLDRCQUFRUixNQUFNYjtJQU4zQ1MsV0FBQSxBQUFBMUUsd0JBQUF5RTtJQUFBRSxhQUFBLEFBQUF6RSwwQkFBQXdFO0lBQUFBLGVBQUEsQUFBQXZFLHlCQUFBdUU7V0FBQUMsUEFNT1M7SUFOUFQsaUJBQUEsQUFBQXpFLDBCQUFBd0U7SUFBQUEsZUFBQSxBQUFBdkUseUJBQUF1RTthQUFBQyxUQU1ZdEQ7WUFOWnFELFJBTXFCVztJQUNmRSxpR0FBcUJILGpDQUNBLEFBQUNsQixzQ0FBZSxBQUFDYSwrQkFBV0YsVUFBVSxBQUFDZCw4Q0FDQSxBQUFDZ0IsK0JBQVdGLFVBQ1osaUNBQUEsakNBQUNqRCxxQ0FBaUIsQUFBQzdDLDBCQUFNc0MsUUFBUSxpRkFBQSxqRkFBQ21FLDZCQUFXLEFBQUNOLHFDQUFtQk4sNVZBQ3hHLGliQUFBLGlEQUFVLG1JQUFBLG5JQUFDWSw2QkFBVyxBQUFDcEUsMENBQWVDLE9BQU8sQUFBQzZELHFDQUFtQk47QUFYNUYsQUFjRSxPQUFDYSxpREFBK0IsQUFBQ3ZCLGlDQUFlRCxFQUFFbUIsS0FBSyxBQUFDckIsOENBQW1CcUIsS0FBS0c7O0FBRXBGLDRCQUFBLDVCQUFNRyxnRUFBVUM7QUFBaEIsQUFDRSxJQUFBQyxXQUEyREQ7SUFBM0RDLGVBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQUEsWUFBQSxRQUFBLEVBQUEsRUFBQSxDQUFBLEFBQUFBLCtDQUFBLFdBQUEsQ0FBQXRCLGdDQUFBLEFBQUFzQiw2QkFBQSxLQUFBLE9BQUEsUUFBQSxBQUFBekcsMEJBQUFvRixtQkFBQXFCLFVBQUFBO2VBQUEsQUFBQTVFLHdCQUFBNEUsYUFBQSxoREFBaUJDO1lBQWpCLEFBQUE3RSx3QkFBQTRFLGFBQUEsN0NBQTBCRTtXQUExQixBQUFBOUUsd0JBQUE0RSxhQUFBLDVDQUFnQ0c7VUFBaEMsQUFBQS9FLHdCQUFBNEUsYUFBQSwzQ0FBcUNJO1NBQXJDLEFBQUFoRix3QkFBQTRFLGFBQUEsMUNBQXlDSztjQUF6QyxBQUFBakYsd0JBQUE0RSxhQUFBLC9DQUE0Q3ZEO1dBQTVDLEFBQUFyQix3QkFBQTRFLGFBQUEsNUNBQW9EcEQ7SUFDOUMwRCxTQUFPLGlCQUFBNUYsbUJBQUksQUFBQSxzSUFBaUNxRjtBQUFyQyxBQUFBLG9CQUFBckY7QUFBQUE7O0FBQW1ELE9BQUEsOEhBQTZCcUY7OztJQUN2Rm5ILE9BQUssRUFBSSw0QkFBQSw1QkFBQ3NFLCtGQUFpQlQsVUFDcEJ5RCxNQUNBLDJJQUFBLHVJQUFBLDhJQUFBLDlaQUNFLGlEQUFBLGpEQUFDdkMsb0NBQVVvQyxpR0FBc0JLLE1BQ2pDLGlEQUFBLGpEQUFDekMsb0NBQVVvQyw4RkFBcUJNLEtBQ2hDLGlEQUFBLGpEQUFDMUMsb0NBQVVvQyxtR0FBdUJJO0lBQzNDSSx3QkFBVSxBQUFDekUsd0JBQUksK1FBQUEsL1FBQUM0RSx5QkFBSyxBQUFDQyw0QkFBUXpFLDJCQUFVdEQsTUFDbkIsQUFBQytILDRCQUFRbkUsNkJBQVlDLFNBQ3JCLEFBQUNrRSw0QkFBUWhFLDBCQUFTQyxNQUNsQixBQUFDK0QsNEJBQVE5RCx5QkFBUUQ7a0JBSHZCNEQ7QUFBQSxBQUlPLGlDQUFBQSxhQUFBLHZDQUFDeEYsMkdBQXNCcEM7O0NBSjlCO2tCQUFBNkg7QUFBQSxBQUtPLGlDQUFBQSxhQUFBLHZDQUFDekYscUlBQW1DLHlDQUFBeUYsekNBQUM1QyxpQ0FBTXBCOztFQUNsRHdEO0FBZHJCLGlDQWVNRixqQ0FDQSw4Q0FBQSx5RUFBQSwrRUFBQSwvTEFBQy9FLDJHQUFvQnBDLDZFQUNFMEgsbUZBQ0VDOztBQUVqQyxBQUFLSyx3QkFBSy9DIiwibmFtZXMiOlsiZXhwb3VuZC5wcm9ibGVtcy9ibGFuay1mb3JtIiwiZm9ybSIsImNsanMuY29yZS9tYXA/IiwiY2xqcy5jb3JlL3ppcG1hcCIsImNsanMuY29yZS9rZXlzIiwiY2xqcy5jb3JlL3JlcGVhdCIsImNsanMuY29yZS92ZWN0b3I/IiwiY2xqcy5jb3JlL3ZlYyIsImNsanMuY29yZS9jb3VudCIsImNsanMuY29yZS9zZXQ/IiwiY2xqcy5jb3JlL2xpc3Q/IiwiY2xqcy5jb3JlL3NlcT8iLCJjbGpzLmNvcmUvYXBwbHkiLCJjbGpzLmNvcmUvbGlzdCIsImNsanMuc3BlYy5hbHBoYS9kZWYtaW1wbCIsImNsanMuc3BlYy5hbHBoYS9mc3BlYy1pbXBsIiwiY2xqcy5zcGVjLmFscGhhL3NwZWMtaW1wbCIsImNsanMuY29yZS9hbnk/IiwiY2xqcy5zcGVjLmFscGhhL2NhdC1pbXBsIiwiY2xqcy5jb3JlL2Jvb2xlYW4/IiwiZXhwb3VuZC5wcm9ibGVtcy9zdW1tYXJ5LWZvcm0iLCJzaG93LXZhbGlkLXZhbHVlcz8iLCJpbiIsInZlY19fMTUxIiwic2VxX18xNTIiLCJjbGpzLmNvcmUvc2VxIiwiZmlyc3RfXzE1MyIsImNsanMuY29yZS9maXJzdCIsImNsanMuY29yZS9uZXh0IiwiayIsInJzdCIsIm9yX184MDcwX19hdXRvX18iLCJkaXNwbGF5ZWQtZm9ybSIsImNsanMuY29yZS9lbXB0eT8iLCJhbmRfXzgwNTJfX2F1dG9fXyIsImV4cG91bmQucGF0aHMva3BzPyIsImNsanMuY29yZS9kaXNzb2MiLCJjbGpzLmNvcmUvYXNzb2MiLCJleHBvdW5kLnBhdGhzL2t2cHM/IiwiY2xqcy5jb3JlL250aCIsImNsanMuY29yZS9hc3NvY2lhdGl2ZT8iLCJjbGpzLmNvcmUvZ2V0IiwiY2xqcy5jb3JlL2ludD8iLCJjbGpzLmNvcmUvaW50byIsImNsanMuY29yZS9leC1pbmZvIiwiZXhwb3VuZC5wcm9ibGVtcy9oaWdobGlnaHQtbGluZSIsInByZWZpeCIsInJlcGxhY2VtZW50IiwibWF4LXdpZHRoIiwiY2xqcy5jb3JlL21heCIsInAxX183IyIsImNsanMuY29yZS9tYXAiLCJjbG9qdXJlLnN0cmluZy9zcGxpdC1saW5lcyIsImV4cG91bmQucHJpbnRlci9pbmRlbnQiLCJjbGpzLmNvcmUvc3RyIiwiZXhwb3VuZC5wcm9ibGVtcy9hZGp1c3QtaW4iLCJwcm9ibGVtIiwiZTE1NyIsImV4cG91bmQucGF0aHMvaW4td2l0aC1rcHMiLCJlIiwiY2xqcy5jb3JlLz0iLCJleHBvdW5kLnByb2JsZW1zL2FkanVzdC1wYXRoIiwiZmFpbHVyZSIsImNsanMuY29yZS9yZXN0IiwiZXhwb3VuZC5wcm9ibGVtcy9hZGQtc3BlYyIsInNwZWMiLCJleHBvdW5kLnByb2JsZW1zL2ZpeC12aWEiLCJleHBvdW5kLnByb2JsZW1zL21pc3Npbmctc3BlYz8iLCJfZmFpbHVyZSIsImV4cG91bmQucHJvYmxlbXMvbm90LWluLXNldD8iLCJleHBvdW5kLnByb2JsZW1zL2ZzcGVjLWV4Y2VwdGlvbi1mYWlsdXJlPyIsImNsanMuY29yZS9ub3Q9IiwiZXhwb3VuZC5wcm9ibGVtcy9mc3BlYy1yZXQtZmFpbHVyZT8iLCJleHBvdW5kLnByb2JsZW1zL2ZzcGVjLWZuLWZhaWx1cmU/IiwiZXhwb3VuZC5wcm9ibGVtcy9jaGVjay1yZXQtZmFpbHVyZT8iLCJleHBvdW5kLnByb2JsZW1zL2NoZWNrLWZuLWZhaWx1cmU/IiwiZXhwb3VuZC5wcm9ibGVtcy9taXNzaW5nLWtleT8iLCJwcmVkIiwiY2xqcy5zcGVjLmFscGhhL3ZhbGlkPyIsImV4cG91bmQucHJvYmxlbXMvaW5zdWZmaWNpZW50LWlucHV0PyIsImNsanMuY29yZS9jb250YWlucz8iLCJleHBvdW5kLnByb2JsZW1zL2V4dHJhLWlucHV0PyIsImV4cG91bmQucHJvYmxlbXMvcHR5cGUiLCJleHBvdW5kLnByb2JsZW1zL3ZhbHVlLWluIiwidmVjX18xNTgiLCJzZXFfXzE1OSIsImZpcnN0X18xNjAiLCJjbGpzLmNvcmUvc2VxYWJsZT8iLCJleHBvdW5kLnByb2JsZW1zL2VzY2FwZS1yZXBsYWNlbWVudCIsInBhdHRlcm4iLCJzIiwiY2xvanVyZS5zdHJpbmcvcmVwbGFjZSIsImV4cG91bmQucHJvYmxlbXMvaGlnaGxpZ2h0ZWQtdmFsdWUiLCJvcHRzIiwibWFwX18xNjciLCJjbGpzLmNvcmUvUFJPVE9DT0xfU0VOVElORUwiLCJjbGpzLmNvcmUvaGFzaC1tYXAiLCJtYXBfXzE2OCIsInZlY19fMTY5Iiwic2VxX18xNzAiLCJmaXJzdF9fMTcxIiwidmFsdWUtYXQtcGF0aCIsInJlbGV2YW50IiwicmVnZXgiLCJjbGpzLmNvcmUvcmUtcGF0dGVybiIsIipwcmludC1uYW1lc3BhY2UtbWFwcyoxNzQiLCJjbGpzLmNvcmUvKnByaW50LW5hbWVzcGFjZS1tYXBzKiIsImV4cG91bmQucHJpbnRlci9wcHJpbnQtc3RyIiwiY2xvanVyZS53YWxrL3ByZXdhbGstcmVwbGFjZSIsImxpbmUiLCJfbW9yZSIsImNsanMuY29yZS9yZS1maW5kIiwiaGlnaGxpZ2h0ZWQtbGluZSIsImV4cG91bmQuYW5zaS9jb2xvciIsImV4cG91bmQucHJpbnRlci9uby10cmFpbGluZy13aGl0ZXNwYWNlIiwiZXhwb3VuZC5wcm9ibGVtcy9hbm5vdGF0ZSIsImV4cGxhaW4tZGF0YSIsIm1hcF9fMTc1IiwicHJvYmxlbXMiLCJ2YWx1ZSIsImFyZ3MiLCJyZXQiLCJmbiIsImNhbGxlciIsInByb2JsZW1zJyIsInAxX184IyIsInAxX185IyIsImNsanMuY29yZS9jb21wIiwiY2xqcy5jb3JlL3BhcnRpYWwiLCJleHBvdW5kLnByb2JsZW1zL3R5cGUiXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIGV4cG91bmQucHJvYmxlbXNcbiAgKDpyZXF1aXJlIFtleHBvdW5kLnBhdGhzIDphcyBwYXRoc11cbiAgICAgICAgICAgIFtjbG9qdXJlLnNwZWMuYWxwaGEgOmFzIHNdXG4gICAgICAgICAgICBbY2xvanVyZS53YWxrIDphcyB3YWxrXVxuICAgICAgICAgICAgW2Nsb2p1cmUuc3RyaW5nIDphcyBzdHJpbmddXG4gICAgICAgICAgICBbZXhwb3VuZC5wcmludGVyIDphcyBwcmludGVyXVxuICAgICAgICAgICAgW2V4cG91bmQuYW5zaSA6YXMgYW5zaV0pXG4gICg6cmVmZXItY2xvanVyZSA6ZXhjbHVkZSBbdHlwZV0pKVxuXG4oZGVmbiBibGFuay1mb3JtIFtmb3JtXVxuICAoY29uZFxuICAgIChtYXA/IGZvcm0pXG4gICAgKHppcG1hcCAoa2V5cyBmb3JtKSAocmVwZWF0IDo6aXJyZWxldmFudCkpXG5cbiAgICAodmVjdG9yPyBmb3JtKVxuICAgICh2ZWMgKHJlcGVhdCAoY291bnQgZm9ybSkgOjppcnJlbGV2YW50KSlcblxuICAgIChzZXQ/IGZvcm0pXG4gICAgZm9ybVxuXG4gICAgKG9yIChsaXN0PyBmb3JtKVxuICAgICAgICAoc2VxPyBmb3JtKSlcbiAgICAoYXBwbHkgbGlzdCAocmVwZWF0IChjb3VudCBmb3JtKSA6OmlycmVsZXZhbnQpKVxuXG4gICAgOmVsc2VcbiAgICA6OmlycmVsZXZhbnQpKVxuXG4ocy9mZGVmIHN1bW1hcnktZm9ybVxuICAgICAgICA6YXJncyAocy9jYXQgOnNob3ctdmFsaWQtdmFsdWVzPyBib29sZWFuP1xuICAgICAgICAgICAgICAgICAgICAgOmZvcm0gYW55P1xuICAgICAgICAgICAgICAgICAgICAgOmhpZ2hsaWdodGVkLXBhdGggOmV4cG91bmQvcGF0aCkpXG4oZGVmbiBzdW1tYXJ5LWZvcm0gW3Nob3ctdmFsaWQtdmFsdWVzPyBmb3JtIGluXVxuICAobGV0IFtbayAmIHJzdF0gaW5cbiAgICAgICAgcnN0IChvciByc3QgW10pXG4gICAgICAgIGRpc3BsYXllZC1mb3JtIChpZiBzaG93LXZhbGlkLXZhbHVlcz8gZm9ybSAoYmxhbmstZm9ybSBmb3JtKSldXG4gICAgKGNvbmRcbiAgICAgIChlbXB0eT8gaW4pXG4gICAgICA6OnJlbGV2YW50XG5cbiAgICAgIChhbmQgKG1hcD8gZm9ybSkgKHBhdGhzL2twcz8gaykpXG4gICAgICAoLT4gZGlzcGxheWVkLWZvcm1cbiAgICAgICAgICAoZGlzc29jICg6a2V5IGspKVxuICAgICAgICAgIChhc3NvYyAoc3VtbWFyeS1mb3JtIHNob3ctdmFsaWQtdmFsdWVzPyAoOmtleSBrKSByc3QpXG4gICAgICAgICAgICAgICAgIDo6aXJyZWxldmFudCkpXG5cbiAgICAgIChhbmQgKG1hcD8gZm9ybSkgKHBhdGhzL2t2cHM/IGspKVxuICAgICAgKHJlY3VyIHNob3ctdmFsaWQtdmFsdWVzPyAobnRoIChzZXEgZm9ybSkgKDppZHggaykpIHJzdClcblxuICAgICAgKGFzc29jaWF0aXZlPyBmb3JtKVxuICAgICAgKGFzc29jIGRpc3BsYXllZC1mb3JtXG4gICAgICAgICAgICAga1xuICAgICAgICAgICAgIChzdW1tYXJ5LWZvcm0gc2hvdy12YWxpZC12YWx1ZXM/IChnZXQgZm9ybSBrKSByc3QpKVxuXG4gICAgICAoYW5kIChpbnQ/IGspIChzZXE/IGZvcm0pKVxuICAgICAgKGFwcGx5IGxpc3QgKC0+IGRpc3BsYXllZC1mb3JtXG4gICAgICAgICAgICAgICAgICAgICAgdmVjXG4gICAgICAgICAgICAgICAgICAgICAgKGFzc29jIGsgKHN1bW1hcnktZm9ybSBzaG93LXZhbGlkLXZhbHVlcz8gKG50aCBmb3JtIGspIHJzdCkpKSlcblxuICAgICAgKGFuZCAoaW50PyBrKSAoc2V0PyBmb3JtKSlcbiAgICAgIChpbnRvICN7fSAoLT4gZGlzcGxheWVkLWZvcm1cbiAgICAgICAgICAgICAgICAgICAgdmVjXG4gICAgICAgICAgICAgICAgICAgIChhc3NvYyBrIChzdW1tYXJ5LWZvcm0gc2hvdy12YWxpZC12YWx1ZXM/IChudGggKHNlcSBmb3JtKSBrKSByc3QpKSkpXG5cbiAgICAgIChhbmQgKGludD8gaykgKGxpc3Q/IGZvcm0pKVxuICAgICAgKGludG8gJygpICgtPiBkaXNwbGF5ZWQtZm9ybVxuICAgICAgICAgICAgICAgICAgICB2ZWNcbiAgICAgICAgICAgICAgICAgICAgKGFzc29jIGsgKHN1bW1hcnktZm9ybSBzaG93LXZhbGlkLXZhbHVlcz8gKG50aCAoc2VxIGZvcm0pIGspIHJzdCkpKSlcblxuICAgICAgOmVsc2VcbiAgICAgICh0aHJvdyAoZXgtaW5mbyBcIkNhbm5vdCBmaW5kIHBhdGggc2VnbWVudCBpbiBmb3JtLiBUaGlzIGNhbiBiZSBjYXVzZWQgYnkgdXNpbmcgY29uZm9ybWVycyB0byB0cmFuc2Zvcm0gdmFsdWVzLCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGluIEV4cG91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHs6Zm9ybSBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgIDppbiBpbn0pKSkpKVxuXG47OyBGSVhNRSAtIHRoaXMgZnVuY3Rpb24gaXMgbm90IGludHVpdGl2ZS5cbihkZWZuIGhpZ2hsaWdodC1saW5lXG4gIFtwcmVmaXggcmVwbGFjZW1lbnRdXG4gIChsZXQgW21heC13aWR0aCAoYXBwbHkgbWF4IChtYXAgIyhjb3VudCAoc3RyICUpKSAoc3RyaW5nL3NwbGl0LWxpbmVzIHJlcGxhY2VtZW50KSkpXVxuICAgIChwcmludGVyL2luZGVudCAoY291bnQgKHN0ciBwcmVmaXgpKVxuICAgICAgICAgICAgICAgICAgICAoYXBwbHkgc3RyIChyZXBlYXQgbWF4LXdpZHRoIFwiXlwiKSkpKSlcblxuKGRlZm4tIGFkanVzdC1pbiBbZm9ybSBwcm9ibGVtXVxuICA7OyBSZW1vdmUgdHJ5L2NhdGNoIHdoZW5cbiAgOzsgaHR0cHM6Ly9kZXYuY2xvanVyZS5vcmcvamlyYS9icm93c2UvQ0xKLTIxOTIgb3JcbiAgOzsgaHR0cHM6Ly9kZXYuY2xvanVyZS5vcmcvamlyYS9icm93c2UvQ0xKLTIyNTggYXJlIGZpeGVkXG4gICh0cnlcbiAgICAoYXNzb2MgcHJvYmxlbSA6ZXhwb3VuZC9pbiAocGF0aHMvaW4td2l0aC1rcHMgZm9ybSAoOnZhbCBwcm9ibGVtKSAoOmluIHByb2JsZW0pIFtdKSlcbiAgICAoY2F0Y2ggIz8oOmNsanMgOmRlZmF1bHRcbiAgICAgICAgICAgICAgOmNsaiBFeGNlcHRpb24pIGVcbiAgICAgIChpZiAob3JcbiAgICAgICAgICAgKD0gJyhhcHBseSBmbikgKDpwcmVkIHByb2JsZW0pKVxuICAgICAgICAgICAoI3s6cmV0fSAoZmlyc3QgKDpwYXRoIHByb2JsZW0pKSkpXG4gICAgICAgIChhc3NvYyBwcm9ibGVtIDpleHBvdW5kL2luICg6aW4gcHJvYmxlbSkpXG4gICAgICAgICh0aHJvdyBlKSkpKSlcblxuKGRlZm4tIGFkanVzdC1wYXRoIFtmYWlsdXJlIHByb2JsZW1dXG4gIChhc3NvYyBwcm9ibGVtIDpleHBvdW5kL3BhdGhcbiAgICAgICAgIChpZiAoPSA6aW5zdHJ1bWVudCBmYWlsdXJlKVxuICAgICAgICAgICAodmVjIChyZXN0ICg6cGF0aCBwcm9ibGVtKSkpXG4gICAgICAgICAgICg6cGF0aCBwcm9ibGVtKSkpKVxuXG4oZGVmbi0gYWRkLXNwZWMgW3NwZWMgcHJvYmxlbV1cbiAgKGFzc29jIHByb2JsZW0gOnNwZWMgc3BlYykpXG5cbjs7IHZpYSBpcyBzbGlnaHRseSBkaWZmZXJlbnQgd2hlbiB1c2luZyBzL2Fzc2VydFxuKGRlZm4gZml4LXZpYSBbc3BlYyBwcm9ibGVtXVxuICAoaWYgKD0gc3BlYyAoZmlyc3QgKDp2aWEgcHJvYmxlbSkpKVxuICAgIChhc3NvYyBwcm9ibGVtIDpleHBvdW5kL3ZpYSAoOnZpYSBwcm9ibGVtKSlcbiAgICAoYXNzb2MgcHJvYmxlbSA6ZXhwb3VuZC92aWEgKGludG8gW3NwZWNdICg6dmlhIHByb2JsZW0pKSkpKVxuXG4oZGVmbiBeOnByaXZhdGUgbWlzc2luZy1zcGVjPyBbX2ZhaWx1cmUgcHJvYmxlbV1cbiAgKD0gXCJubyBtZXRob2RcIiAoOnJlYXNvbiBwcm9ibGVtKSkpXG5cbihkZWZuIF46cHJpdmF0ZSBub3QtaW4tc2V0PyBbX2ZhaWx1cmUgcHJvYmxlbV1cbiAgKHNldD8gKDpwcmVkIHByb2JsZW0pKSlcblxuKGRlZm4gXjpwcml2YXRlIGZzcGVjLWV4Y2VwdGlvbi1mYWlsdXJlPyBbZmFpbHVyZSBwcm9ibGVtXVxuICAoYW5kIChub3Q9IDppbnN0cnVtZW50IGZhaWx1cmUpXG4gICAgICAgKG5vdD0gOmNoZWNrLWZhaWxlZCBmYWlsdXJlKVxuICAgICAgICg9ICcoYXBwbHkgZm4pICg6cHJlZCBwcm9ibGVtKSkpKVxuXG4oZGVmbiBeOnByaXZhdGUgZnNwZWMtcmV0LWZhaWx1cmU/IFtmYWlsdXJlIHByb2JsZW1dXG4gIChhbmRcbiAgIChub3Q9IDppbnN0cnVtZW50IGZhaWx1cmUpXG4gICAobm90PSA6Y2hlY2stZmFpbGVkIGZhaWx1cmUpXG4gICAoPSA6cmV0IChmaXJzdCAoOnBhdGggcHJvYmxlbSkpKSkpXG5cbihkZWZuIF46cHJpdmF0ZSBmc3BlYy1mbi1mYWlsdXJlPyBbZmFpbHVyZSBwcm9ibGVtXVxuICAoYW5kXG4gICAobm90PSA6aW5zdHJ1bWVudCBmYWlsdXJlKVxuICAgKG5vdD0gOmNoZWNrLWZhaWxlZCBmYWlsdXJlKVxuICAgKD0gOmZuIChmaXJzdCAoOnBhdGggcHJvYmxlbSkpKSkpXG5cbihkZWZuIF46cHJpdmF0ZSBjaGVjay1yZXQtZmFpbHVyZT8gW2ZhaWx1cmUgcHJvYmxlbV1cbiAgKGFuZFxuICAgKD0gOmNoZWNrLWZhaWxlZCBmYWlsdXJlKVxuICAgKD0gOnJldCAoZmlyc3QgKDpwYXRoIHByb2JsZW0pKSkpKVxuXG4oZGVmbiBeOnByaXZhdGUgY2hlY2stZm4tZmFpbHVyZT8gW2ZhaWx1cmUgcHJvYmxlbV1cbiAgKGFuZCAoPSA6Y2hlY2stZmFpbGVkIGZhaWx1cmUpXG4gICAgICAgKD0gOmZuIChmaXJzdCAoOnBhdGggcHJvYmxlbSkpKSkpXG5cbihkZWZuIF46cHJpdmF0ZSBtaXNzaW5nLWtleT8gW19mYWlsdXJlIHByb2JsZW1dXG4gIChsZXQgW3ByZWQgKDpwcmVkIHByb2JsZW0pXVxuICAgIChhbmQgKHNlcT8gcHJlZClcbiAgICAgICAgICg8IDIgKGNvdW50IHByZWQpKVxuICAgICAgICAgKHMvdmFsaWQ/XG4gICAgICAgICAgOmV4cG91bmQuc3BlYy9jb250YWlucy1rZXktcHJlZFxuICAgICAgICAgIChudGggcHJlZCAyKSkpKSlcblxuKGRlZm4gXjpwcml2YXRlIGluc3VmZmljaWVudC1pbnB1dD8gW19mYWlsdXJlIHByb2JsZW1dXG4gIChjb250YWlucz8gI3tcIkluc3VmZmljaWVudCBpbnB1dFwifSAoOnJlYXNvbiBwcm9ibGVtKSkpXG5cbihkZWZuIF46cHJpdmF0ZSBleHRyYS1pbnB1dD8gW19mYWlsdXJlIHByb2JsZW1dXG4gIChjb250YWlucz8gI3tcIkV4dHJhIGlucHV0XCJ9ICg6cmVhc29uIHByb2JsZW0pKSlcblxuKGRlZm4gXjpwcml2YXRlIHB0eXBlIFtmYWlsdXJlIHByb2JsZW1dXG4gIChjb25kXG4gICAgKDpleHBvdW5kLnNwZWMucHJvYmxlbS90eXBlIHByb2JsZW0pXG4gICAgKDpleHBvdW5kLnNwZWMucHJvYmxlbS90eXBlIHByb2JsZW0pXG5cbiAgICAoaW5zdWZmaWNpZW50LWlucHV0PyBmYWlsdXJlIHByb2JsZW0pXG4gICAgOmV4cG91bmQucHJvYmxlbS9pbnN1ZmZpY2llbnQtaW5wdXRcblxuICAgIChleHRyYS1pbnB1dD8gZmFpbHVyZSBwcm9ibGVtKVxuICAgIDpleHBvdW5kLnByb2JsZW0vZXh0cmEtaW5wdXRcblxuICAgIChub3QtaW4tc2V0PyBmYWlsdXJlIHByb2JsZW0pXG4gICAgOmV4cG91bmQucHJvYmxlbS9ub3QtaW4tc2V0XG5cbiAgICAobWlzc2luZy1rZXk/IGZhaWx1cmUgcHJvYmxlbSlcbiAgICA6ZXhwb3VuZC5wcm9ibGVtL21pc3Npbmcta2V5XG5cbiAgICAobWlzc2luZy1zcGVjPyBmYWlsdXJlIHByb2JsZW0pXG4gICAgOmV4cG91bmQucHJvYmxlbS9taXNzaW5nLXNwZWNcblxuICAgIChmc3BlYy1leGNlcHRpb24tZmFpbHVyZT8gZmFpbHVyZSBwcm9ibGVtKVxuICAgIDpleHBvdW5kLnByb2JsZW0vZnNwZWMtZXhjZXB0aW9uLWZhaWx1cmVcblxuICAgIChmc3BlYy1yZXQtZmFpbHVyZT8gZmFpbHVyZSBwcm9ibGVtKVxuICAgIDpleHBvdW5kLnByb2JsZW0vZnNwZWMtcmV0LWZhaWx1cmVcblxuICAgIChmc3BlYy1mbi1mYWlsdXJlPyBmYWlsdXJlIHByb2JsZW0pXG4gICAgOmV4cG91bmQucHJvYmxlbS9mc3BlYy1mbi1mYWlsdXJlXG5cbiAgICAoY2hlY2stcmV0LWZhaWx1cmU/IGZhaWx1cmUgcHJvYmxlbSlcbiAgICA6ZXhwb3VuZC5wcm9ibGVtL2NoZWNrLXJldC1mYWlsdXJlXG5cbiAgICAoY2hlY2stZm4tZmFpbHVyZT8gZmFpbHVyZSBwcm9ibGVtKVxuICAgIDpleHBvdW5kLnByb2JsZW0vY2hlY2stZm4tZmFpbHVyZVxuXG4gICAgOmVsc2VcbiAgICA6ZXhwb3VuZC5wcm9ibGVtL3Vua25vd24pKVxuXG47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyBwdWJsaWMgOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1xuXG4oZGVmbiB2YWx1ZS1pblxuICBcIlNpbWlsYXIgdG8gZ2V0LWluLCBidXQgd29ya3Mgd2l0aCBwYXRocyB0aGF0IHJlZmVyZW5jZSBtYXAga2V5c1wiXG4gIFtmb3JtIGluXVxuICAobGV0IFtbayAmIHJzdF0gaW5dXG4gICAgKGNvbmRcbiAgICAgIChlbXB0eT8gaW4pXG4gICAgICBmb3JtXG5cbiAgICAgIChhbmQgKG1hcD8gZm9ybSkgKHBhdGhzL2twcz8gaykpXG4gICAgICAoOmtleSBrKVxuXG4gICAgICAoYW5kIChtYXA/IGZvcm0pIChwYXRocy9rdnBzPyBrKSlcbiAgICAgIChyZWN1ciAobnRoIChzZXEgZm9ybSkgKDppZHggaykpIHJzdClcblxuICAgICAgKGFzc29jaWF0aXZlPyBmb3JtKVxuICAgICAgKHJlY3VyIChnZXQgZm9ybSBrKSByc3QpXG5cbiAgICAgIChhbmQgKGludD8gaykgKHNlcWFibGU/IGZvcm0pKVxuICAgICAgKHJlY3VyIChudGggKHNlcSBmb3JtKSBrKSByc3QpKSkpXG5cbihkZWZuIGVzY2FwZS1yZXBsYWNlbWVudCBbcGF0dGVybiBzXVxuICAjPyg6Y2xqIChpZiAoc3RyaW5nPyBwYXR0ZXJuKVxuICAgICAgICAgICAgc1xuICAgICAgICAgICAgKHN0cmluZy9yZS1xdW90ZS1yZXBsYWNlbWVudCBzKSlcbiAgICAgOmNsanMgKHN0cmluZy9yZXBsYWNlIHMgI1wiXFwkXCIgXCIkJCQkXCIpKSlcblxuKGRlZm4gaGlnaGxpZ2h0ZWQtdmFsdWVcbiAgXCJHaXZlbiBhIHByb2JsZW0sIHJldHVybnMgYSBwcmV0dHkgcHJpbnRlZFxuICAgc3RyaW5nIHRoYXQgaGlnaGxpZ2h0cyB0aGUgcHJvYmxlbSB2YWx1ZVwiXG4gIFtvcHRzIHByb2JsZW1dXG4gIChsZXQgW3s6a2V5cyBbOmV4cG91bmQvZm9ybSA6ZXhwb3VuZC9pbl19IHByb2JsZW1cbiAgICAgICAgezprZXlzIFtzaG93LXZhbGlkLXZhbHVlcz9dIDpvciB7c2hvdy12YWxpZC12YWx1ZXM/IGZhbHNlfX0gb3B0c1xuICAgICAgICB2YWx1ZS1hdC1wYXRoICh2YWx1ZS1pbiBmb3JtIGluKVxuICAgICAgICByZWxldmFudCAoc3RyIFwiKFwiIDo6cmVsZXZhbnQgXCJ8KFwiIDo6a3YtcmVsZXZhbnQgXCJcXFxccytcIiA6Omt2LXJlbGV2YW50IFwiKSlcIilcbiAgICAgICAgcmVnZXggKHJlLXBhdHRlcm4gKHN0ciBcIiguKilcIiByZWxldmFudCBcIi4qXCIpKVxuICAgICAgICBzIChiaW5kaW5nIFsqcHJpbnQtbmFtZXNwYWNlLW1hcHMqIGZhbHNlXSAocHJpbnRlci9wcHJpbnQtc3RyICh3YWxrL3ByZXdhbGstcmVwbGFjZSB7OjppcnJlbGV2YW50ICcuLi59IChzdW1tYXJ5LWZvcm0gc2hvdy12YWxpZC12YWx1ZXM/IGZvcm0gaW4pKSkpXG4gICAgICAgIFtsaW5lIHByZWZpeCAmIF9tb3JlXSAocmUtZmluZCByZWdleCBzKVxuICAgICAgICBoaWdobGlnaHRlZC1saW5lICgtPiBsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdHJpbmcvcmVwbGFjZSAocmUtcGF0dGVybiByZWxldmFudCkgKGVzY2FwZS1yZXBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmUtcGF0dGVybiByZWxldmFudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByaW50ZXIvaW5kZW50IDAgKGNvdW50IHByZWZpeCkgKGFuc2kvY29sb3IgKHByaW50ZXIvcHByaW50LXN0ciB2YWx1ZS1hdC1wYXRoKSA6YmFkLXZhbHVlKSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RyIFwiXFxuXCIgKGFuc2kvY29sb3IgKGhpZ2hsaWdodC1saW5lIHByZWZpeCAocHJpbnRlci9wcHJpbnQtc3RyIHZhbHVlLWF0LXBhdGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBvaW50ZXIpKSldXG4gICAgOztoaWdobGlnaHRlZC1saW5lXG4gICAgKHByaW50ZXIvbm8tdHJhaWxpbmctd2hpdGVzcGFjZSAoc3RyaW5nL3JlcGxhY2UgcyBsaW5lIChlc2NhcGUtcmVwbGFjZW1lbnQgbGluZSBoaWdobGlnaHRlZC1saW5lKSkpKSlcblxuKGRlZm4gYW5ub3RhdGUgW2V4cGxhaW4tZGF0YV1cbiAgKGxldCBbezo6cy9rZXlzIFtwcm9ibGVtcyB2YWx1ZSBhcmdzIHJldCBmbiBmYWlsdXJlIHNwZWNdfSBleHBsYWluLWRhdGFcbiAgICAgICAgY2FsbGVyIChvciAoOmNsb2p1cmUuc3BlYy50ZXN0LmFscGhhL2NhbGxlciBleHBsYWluLWRhdGEpICg6b3JjaGVzdHJhLnNwZWMudGVzdC9jYWxsZXIgZXhwbGFpbi1kYXRhKSlcbiAgICAgICAgZm9ybSAoaWYgKG5vdD0gOmluc3RydW1lbnQgZmFpbHVyZSlcbiAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAoY29uZFxuICAgICAgICAgICAgICAgICAoY29udGFpbnM/IGV4cGxhaW4tZGF0YSA6OnMvcmV0KSByZXRcbiAgICAgICAgICAgICAgICAgKGNvbnRhaW5zPyBleHBsYWluLWRhdGEgOjpzL2ZuKSBmblxuICAgICAgICAgICAgICAgICAoY29udGFpbnM/IGV4cGxhaW4tZGF0YSA6OnMvYXJncykgYXJncykpXG4gICAgICAgIHByb2JsZW1zJyAobWFwIChjb21wIChwYXJ0aWFsIGFkanVzdC1pbiBmb3JtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGFydGlhbCBhZGp1c3QtcGF0aCBmYWlsdXJlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGFydGlhbCBhZGQtc3BlYyBzcGVjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGFydGlhbCBmaXgtdmlhIHNwZWMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICMoYXNzb2MgJSA6ZXhwb3VuZC9mb3JtIGZvcm0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICMoYXNzb2MgJSA6ZXhwb3VuZC5zcGVjLnByb2JsZW0vdHlwZSAocHR5cGUgZmFpbHVyZSAlKSkpXG4gICAgICAgICAgICAgICAgICAgICAgIHByb2JsZW1zKV1cbiAgICAoLT4gZXhwbGFpbi1kYXRhXG4gICAgICAgIChhc3NvYyA6ZXhwb3VuZC9mb3JtIGZvcm1cbiAgICAgICAgICAgICAgIDpleHBvdW5kL2NhbGxlciBjYWxsZXJcbiAgICAgICAgICAgICAgIDpleHBvdW5kL3Byb2JsZW1zIHByb2JsZW1zJykpKSlcblxuKGRlZiB0eXBlIHB0eXBlKVxuIl19