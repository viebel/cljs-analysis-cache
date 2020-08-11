// Compiled by ClojureScript 1.10.597
goog.provide("reagent.debug");
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__74__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",(-436710552))], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__74 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75__i = 0, G__75__a = new Array(arguments.length -  0);
while (G__75__i < G__75__a.length) {G__75__a[G__75__i] = arguments[G__75__i + 0]; ++G__75__i;}
  args = new cljs.core.IndexedSeq(G__75__a,0,null);
} 
return G__74__delegate.call(this,args);};
G__74.cljs$lang$maxFixedArity = 0;
G__74.cljs$lang$applyTo = (function (arglist__76){
var args = cljs.core.seq(arglist__76);
return G__74__delegate(args);
});
G__74.cljs$core$IFn$_invoke$arity$variadic = G__74__delegate;
return G__74;
})()
);

(o.error = (function() { 
var G__77__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",(-978969032))], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__77 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78__i = 0, G__78__a = new Array(arguments.length -  0);
while (G__78__i < G__78__a.length) {G__78__a[G__78__i] = arguments[G__78__i + 0]; ++G__78__i;}
  args = new cljs.core.IndexedSeq(G__78__a,0,null);
} 
return G__77__delegate.call(this,args);};
G__77.cljs$lang$maxFixedArity = 0;
G__77.cljs$lang$applyTo = (function (arglist__79){
var args = cljs.core.seq(arglist__79);
return G__77__delegate(args);
});
G__77.cljs$core$IFn$_invoke$arity$variadic = G__77__delegate;
return G__77;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceURL=reagent/debug.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9kZWJ1Zy5qcyIsInNvdXJjZXMiOlsiZGVidWcuY2xqcyJdLCJsaW5lQ291bnQiOjc0LCJtYXBwaW5ncyI6IjtBQUdBLEFBQWFBLDRCQUFZLFFBQUFDO0FBRXpCLHlCQUFBLHpCQUFjQztBQUVkLEdBQUEsUUFBQUMsb0NBQUFDLDBDQUFBQztBQUFBO0FBQUEsQUFBQSxBQUFTQyx5QkFBUyx5QkFBQSx6QkFBQ0M7O0FBRW5CLEdBQUEsUUFBQUosb0NBQUFDLDBDQUFBSTtBQUFBO0FBQUEsQUFBQSxBQUFTQyw4QkFDUCxxQkFBQSxKQUFNQztBQUFOLEFBQ0UsQ0FBTSxBQUFRQSxTQUNSO2dDQUFPQztBQUFQLEFBQ0UsaUZBQUEsbUZBQUEsN0pBQUNDLCtCQUFNTix1QkFBU08sc0tBQWtCQyxlQUFLLEFBQUNDLDBCQUFNQyxjQUFJTDs7O0lBRDdDQTs7OztFQUFBQTs7aUNBQUFBOzs7SUFBQUE7dUJBQUFBOzs7Ozs7O0FBRWIsQ0FBTSxBQUFTRCxVQUNUO2dDQUFPQztBQUFQLEFBQ0UsaUZBQUEsbUZBQUEsN0pBQUNDLCtCQUFNTix1QkFBU08sd0tBQW1CQyxlQUFLLEFBQUNDLDBCQUFNQyxjQUFJTDs7O0lBRDlDQTs7OztFQUFBQTs7aUNBQUFBOzs7SUFBQUE7dUJBQUFBOzs7Ozs7O0FBRWJEOzs7QUFFSiwrQkFBQSwvQkFBTU8sc0VBQWdCQztBQUF0QixBQUNFLDBCQUFBLHpCQUFNaEI7O0FBQ04sdURBQUEsdkRBQUNpQixnQ0FBT2I7O0FBQ1IsQUFBQ1k7O0FBQ0QsWUFBQSxBQUFBRSxSQUFNQyxrQ0FBT2Y7QUFBYixBQUNFLHVEQUFBLHZEQUFDYSxnQ0FBT2I7O0FBQ1IsMEJBQUEsekJBQU1KOztBQUNObUIiLCJuYW1lcyI6WyJyZWFnZW50LmRlYnVnL2hhcy1jb25zb2xlIiwianMvY29uc29sZSIsInJlYWdlbnQuZGVidWcvdHJhY2tpbmciLCJqcy9yZWFnZW50IiwianMvcmVhZ2VudC5kZWJ1ZyIsImpzL3JlYWdlbnQuZGVidWcud2FybmluZ3MiLCJyZWFnZW50LmRlYnVnL3dhcm5pbmdzIiwiY2xqcy5jb3JlL2F0b20iLCJqcy9yZWFnZW50LmRlYnVnLnRyYWNrLWNvbnNvbGUiLCJyZWFnZW50LmRlYnVnL3RyYWNrLWNvbnNvbGUiLCJvIiwiYXJncyIsImNsanMuY29yZS9zd2FwISIsImNsanMuY29yZS91cGRhdGUtaW4iLCJjbGpzLmNvcmUvY29uaiIsImNsanMuY29yZS9hcHBseSIsImNsanMuY29yZS9zdHIiLCJyZWFnZW50LmRlYnVnL3RyYWNrLXdhcm5pbmdzIiwiZiIsImNsanMuY29yZS9yZXNldCEiLCJjbGpzLmNvcmUvZGVyZWYiLCJ3YXJucyJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgcmVhZ2VudC5kZWJ1Z1xuICAoOnJlcXVpcmUtbWFjcm9zIFtyZWFnZW50LmRlYnVnXSkpXG5cbihkZWYgXjpjb25zdCBoYXMtY29uc29sZSAoZXhpc3RzPyBqcy9jb25zb2xlKSlcblxuKGRlZiBeYm9vbGVhbiB0cmFja2luZyBmYWxzZSlcblxuKGRlZm9uY2Ugd2FybmluZ3MgKGF0b20gbmlsKSlcblxuKGRlZm9uY2UgdHJhY2stY29uc29sZVxuICAobGV0IFtvICNqc3t9XVxuICAgIChzZXQhICguLXdhcm4gbylcbiAgICAgICAgICAoZm4gWyYgYXJnc11cbiAgICAgICAgICAgIChzd2FwISB3YXJuaW5ncyB1cGRhdGUtaW4gWzp3YXJuXSBjb25qIChhcHBseSBzdHIgYXJncykpKSlcbiAgICAoc2V0ISAoLi1lcnJvciBvKVxuICAgICAgICAgIChmbiBbJiBhcmdzXVxuICAgICAgICAgICAgKHN3YXAhIHdhcm5pbmdzIHVwZGF0ZS1pbiBbOmVycm9yXSBjb25qIChhcHBseSBzdHIgYXJncykpKSlcbiAgICBvKSlcblxuKGRlZm4gdHJhY2std2FybmluZ3MgW2ZdXG4gIChzZXQhIHRyYWNraW5nIHRydWUpXG4gIChyZXNldCEgd2FybmluZ3MgbmlsKVxuICAoZilcbiAgKGxldCBbd2FybnMgQHdhcm5pbmdzXVxuICAgIChyZXNldCEgd2FybmluZ3MgbmlsKVxuICAgIChzZXQhIHRyYWNraW5nIGZhbHNlKVxuICAgIHdhcm5zKSlcbiJdfQ==