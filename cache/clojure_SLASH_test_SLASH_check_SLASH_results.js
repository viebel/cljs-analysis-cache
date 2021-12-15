goog.provide('clojure.test.check.results');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

var clojure$test$check$results$Result$pass_QMARK_$dyn_7371 = (function (result){
var x__4428__auto__ = (((result == null))?null:result);
var m__4429__auto__ = (clojure.test.check.results.pass_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4429__auto__.call(null,result));
} else {
var m__4426__auto__ = (clojure.test.check.results.pass_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4426__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.pass?",result);
}
}
});
/**
 * A boolean indicating if the result passed.
 */
clojure.test.check.results.pass_QMARK_ = (function clojure$test$check$results$pass_QMARK_(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$pass_QMARK_$arity$1 == null)))))){
return result.clojure$test$check$results$Result$pass_QMARK_$arity$1(result);
} else {
return clojure$test$check$results$Result$pass_QMARK_$dyn_7371(result);
}
});

var clojure$test$check$results$Result$result_data$dyn_7376 = (function (result){
var x__4428__auto__ = (((result == null))?null:result);
var m__4429__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4429__auto__.call(null,result));
} else {
var m__4426__auto__ = (clojure.test.check.results.result_data["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4426__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.result-data",result);
}
}
});
/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
return clojure$test$check$results$Result$result_data$dyn_7376(result);
}
});

goog.object.set(clojure.test.check.results.Result,"_",true);

goog.object.set(clojure.test.check.results.pass_QMARK_,"_",(function (this$){
return cljs.core.boolean$(this$);
}));

goog.object.set(clojure.test.check.results.result_data,"_",(function (this$){
return null;
}));

goog.object.set(clojure.test.check.results.Result,"null",true);

goog.object.set(clojure.test.check.results.pass_QMARK_,"null",(function (this$){
return false;
}));

goog.object.set(clojure.test.check.results.result_data,"null",(function (this$){
return null;
}));

//# sourceMappingURL=clojure.test.check.results.js.map
