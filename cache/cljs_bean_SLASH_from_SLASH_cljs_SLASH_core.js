// Compiled by ClojureScript 1.10.520
goog.provide("cljs_bean.from.cljs.core");
cljs_bean.from.cljs.core._indexOf = (function cljs_bean$from$cljs$core$_indexOf(var_args){
var G__23 = arguments.length;
switch (G__23) {
case (2):
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
return cljs_bean.from.cljs.core._indexOf.call(null,coll,x,(0));
});

cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3 = (function (coll,x,start){
var len = cljs.core.count.call(null,coll);
if((start >= len)){
return (-1);
} else {
var idx = (((start > (0)))?start:(((start < (0)))?(function (){var x__10606__auto__ = (0);
var y__10607__auto__ = (start + len);
return ((x__10606__auto__ > y__10607__auto__) ? x__10606__auto__ : y__10607__auto__);
})():start
));
while(true){
if((idx < len)){
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,coll,idx),x)){
return idx;
} else {
var G__25 = (idx + (1));
idx = G__25;
continue;
}
} else {
return (-1);
}
break;
}
}
});

cljs_bean.from.cljs.core._indexOf.cljs$lang$maxFixedArity = (3);

cljs_bean.from.cljs.core._lastIndexOf = (function cljs_bean$from$cljs$core$_lastIndexOf(var_args){
var G__27 = arguments.length;
switch (G__27) {
case (2):
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
return cljs_bean.from.cljs.core._lastIndexOf.call(null,coll,x,cljs.core.count.call(null,coll));
});

cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3 = (function (coll,x,start){
var len = cljs.core.count.call(null,coll);
if((len === (0))){
return (-1);
} else {
var idx = (((start > (0)))?(function (){var x__10642__auto__ = (len - (1));
var y__10643__auto__ = start;
return ((x__10642__auto__ < y__10643__auto__) ? x__10642__auto__ : y__10643__auto__);
})():(((start < (0)))?(len + start):start
));
while(true){
if((idx >= (0))){
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,coll,idx),x)){
return idx;
} else {
var G__29 = (idx - (1));
idx = G__29;
continue;
}
} else {
return (-1);
}
break;
}
}
});

cljs_bean.from.cljs.core._lastIndexOf.cljs$lang$maxFixedArity = (3);

/**
 * Compare indexed collection.
 */
cljs_bean.from.cljs.core.compare_indexed = (function cljs_bean$from$cljs$core$compare_indexed(var_args){
var G__31 = arguments.length;
switch (G__31) {
case (2):
return cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (4):
return cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2 = (function (xs,ys){
var xl = cljs.core.count.call(null,xs);
var yl = cljs.core.count.call(null,ys);
if((xl < yl)){
return (-1);
} else {
if((xl > yl)){
return (1);
} else {
if((xl === (0))){
return (0);
} else {
return cljs_bean.from.cljs.core.compare_indexed.call(null,xs,ys,xl,(0));

}
}
}
});

cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((((d === (0))) && (((n + (1)) < len)))){
var G__33 = xs;
var G__34 = ys;
var G__35 = len;
var G__36 = (n + (1));
xs = G__33;
ys = G__34;
len = G__35;
n = G__36;
continue;
} else {
return d;
}
break;
}
});

cljs_bean.from.cljs.core.compare_indexed.cljs$lang$maxFixedArity = (4);

/**
 * Assumes x is sequential. Returns true if x equals y, otherwise
 *   returns false.
 */
cljs_bean.from.cljs.core.equiv_sequential = (function cljs_bean$from$cljs$core$equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?((((cljs.core.counted_QMARK_.call(null,x)) && (cljs.core.counted_QMARK_.call(null,y)) && ((!((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))))))?false:(function (){var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if((ys == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){
var G__37 = cljs.core.next.call(null,xs);
var G__38 = cljs.core.next.call(null,ys);
xs = G__37;
ys = G__38;
continue;
} else {
return false;

}
}
}
break;
}
})()):null));
});
/**
 * Accepts any collection which satisfies the ICount and IIndexed protocols and
 * reduces them without incurring seq initialization
 */
cljs_bean.from.cljs.core.ci_reduce = (function cljs_bean$from$cljs$core$ci_reduce(var_args){
var G__40 = arguments.length;
switch (G__40) {
case (2):
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2 = (function (cicoll,f){
var cnt = cljs.core._count.call(null,cicoll);
if((cnt === (0))){
return f.call(null);
} else {
var val = cljs.core._nth.call(null,cicoll,(0));
var n = (1);
while(true){
if((n < cnt)){
var nval = f.call(null,val,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__42 = nval;
var G__43 = (n + (1));
val = G__42;
n = G__43;
continue;
}
} else {
return val;
}
break;
}
}
});

cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3 = (function (cicoll,f,val){
var cnt = cljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__44 = nval;
var G__45 = (n + (1));
val__$1 = G__44;
n = G__45;
continue;
}
} else {
return val__$1;
}
break;
}
});

cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__46 = nval;
var G__47 = (n + (1));
val__$1 = G__46;
n = G__47;
continue;
}
} else {
return val__$1;
}
break;
}
});

cljs_bean.from.cljs.core.ci_reduce.cljs$lang$maxFixedArity = (4);

cljs_bean.from.cljs.core.TransientArrayMap_conj_BANG_ = (function cljs_bean$from$cljs$core$TransientArrayMap_conj_BANG_(tcoll,o,editable_QMARK_){
if(cljs.core.truth_(editable_QMARK_)){
if(cljs.core.map_entry_QMARK_.call(null,o)){
return cljs.core._assoc_BANG_.call(null,tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else {
if(cljs.core.vector_QMARK_.call(null,o)){
return cljs.core._assoc_BANG_.call(null,tcoll,o.call(null,(0)),o.call(null,(1)));
} else {
var es = cljs.core.seq.call(null,o);
var tcoll__$1 = tcoll;
while(true){
var temp__9517__auto__ = cljs.core.first.call(null,es);
if(cljs.core.truth_(temp__9517__auto__)){
var e = temp__9517__auto__;
var G__48 = cljs.core.next.call(null,es);
var G__49 = cljs.core._assoc_BANG_.call(null,tcoll__$1,cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__48;
tcoll__$1 = G__49;
continue;
} else {
return tcoll__$1;
}
break;
}

}
}
} else {
throw (new Error("conj! after persistent!"));
}
});
cljs_bean.from.cljs.core.PersistentArrayMap_conj = (function cljs_bean$from$cljs$core$PersistentArrayMap_conj(coll,entry){
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
var ret = coll;
var es = cljs.core.seq.call(null,entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first.call(null,es);
if(cljs.core.vector_QMARK_.call(null,e)){
var G__50 = cljs.core._assoc.call(null,ret,cljs.core._nth.call(null,e,(0)),cljs.core._nth.call(null,e,(1)));
var G__51 = cljs.core.next.call(null,es);
ret = G__50;
es = G__51;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs_bean.from.cljs.core.TransientVector_assoc_BANG_ = (function cljs_bean$from$cljs$core$TransientVector_assoc_BANG_(tcoll,key,val,type_name){
if(typeof key === 'number'){
return cljs.core._assoc_n_BANG_.call(null,tcoll,key,val);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_name),"'s key for assoc! must be a number."].join('')));
}
});
cljs_bean.from.cljs.core.PersistentVector_equiv = (function cljs_bean$from$cljs$core$PersistentVector_equiv(coll,other,type,cnt){
if((other instanceof type)){
if((cnt === cljs.core.count.call(null,other))){
var me_iter = cljs.core._iterator.call(null,coll);
var you_iter = cljs.core._iterator.call(null,other);
while(true){
if(me_iter.hasNext()){
var x = me_iter.next();
var y = you_iter.next();
if(cljs.core._EQ_.call(null,x,y)){
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs_bean.from.cljs.core.equiv_sequential.call(null,coll,other);
}
});
cljs_bean.from.cljs.core.PersistentVector_lookup = (function cljs_bean$from$cljs$core$PersistentVector_lookup(coll,k,not_found){
if(typeof k === 'number'){
return cljs.core._nth.call(null,coll,k,not_found);
} else {
return not_found;
}
});
cljs_bean.from.cljs.core.PersistentVector_assoc = (function cljs_bean$from$cljs$core$PersistentVector_assoc(coll,k,v){
if(typeof k === 'number'){
return cljs.core._assoc_n.call(null,coll,k,v);
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
});
cljs_bean.from.cljs.core.PersistentVector_contains_key_QMARK_ = (function cljs_bean$from$cljs$core$PersistentVector_contains_key_QMARK_(coll,k,cnt){
if(cljs.core.integer_QMARK_.call(null,k)){
return ((((0) <= k)) && ((k < cnt)));
} else {
return false;
}
});

//# sourceURL=cljs_bean/from/cljs/core.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqc19iZWFuL2Zyb20vY2xqcy9jb3JlLmpzIiwic291cmNlcyI6WyJjb3JlLmNsanMiXSwibGluZUNvdW50Ijo0MDUsIm1hcHBpbmdzIjoiO0FBV0EsQUFBQSxvQ0FBQSw0Q0FBQUEsaEZBQU1FO0FBQU4sQUFBQSxJQUFBRCxRQUFBLEFBQUE7QUFBQSxBQUFBLFFBQUFBO0tBQUE7QUFBQSxPQUFBQyxnRUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7OztLQUFBO0FBQUEsT0FBQUEsZ0VBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7O0FBQUEsTUFBQSxLQUFBQyxNQUFBLENBQUEsOERBQUEsQUFBQTs7Ozs7QUFBQSxBQUFBLGtFQUFBLGxFQUFNRCw2RUFDVUUsS0FBS0M7QUFEckIsQUFFRywwREFBQSxuREFBQ0gsNENBQVNFLEtBQUtDOzs7QUFGbEIsQUFBQSxrRUFBQSxsRUFBTUgsNkVBR1VFLEtBQUtDLEVBQUVDO0FBSHZCLEFBSUcsSUFBTUMsTUFBSSxBQUFDQywwQkFBTUo7QUFBakIsQUFDRSxHQUFJLENBQUlFLFNBQU1DO0FBQWQ7O0FBRUUsSUFBT0UsTUFBSSx1QkFBQSxyQkFDRSxTQUFBLFJBQU1ILGNBQU9BLFFBQ2IsU0FBQSxSQUFNQSxjQUFPLGlCQUFBSSxtQkFBQTtJQUFBQyxtQkFBTyxDQUFHTCxRQUFNQztBQUFoQixBQUFBLFNBQUFHLG1CQUFBQyxvQkFBQUQsbUJBQUFDO0tBRmYsQUFHUUw7OztBQUhuQixBQUlFLEdBQUksQ0FBR0csTUFBSUY7QUFDVCxHQUFJLEFBQUNLLHlCQUFFLEFBQUNDLHdCQUFJVCxLQUFLSyxLQUFLSjtBQUNwQkk7O0FBQ0EsWUFBTyxPQUFBLE5BQUtBOzs7OztBQUhoQjs7Ozs7OztBQVhULEFBQUEsNERBQUEsNURBQU1QOztBQUFOLEFBa0JBLEFBQUEsd0NBQUEsZ0RBQUFGLHhGQUFNZTtBQUFOLEFBQUEsSUFBQUQsUUFBQSxBQUFBO0FBQUEsQUFBQSxRQUFBQTtLQUFBO0FBQUEsT0FBQUMsb0VBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7S0FBQTtBQUFBLE9BQUFBLG9FQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQTs7OztBQUFBLE1BQUEsS0FBQVosTUFBQSxDQUFBLDhEQUFBLEFBQUE7Ozs7O0FBQUEsQUFBQSxzRUFBQSx0RUFBTVksaUZBQ1VYLEtBQUtDO0FBRHJCLEFBRUcsT0FBQ1UsZ0RBQWFYLEtBQUtDLEVBQUUsQUFBQ0csMEJBQU1KOzs7QUFGL0IsQUFBQSxzRUFBQSx0RUFBTVcsaUZBR1VYLEtBQUtDLEVBQUVDO0FBSHZCLEFBSUcsSUFBTUMsTUFBSSxBQUFDQywwQkFBTUo7QUFBakIsQUFDRSxHQUFJLFNBQUEsUkFBT0c7QUFBWDs7QUFFRSxJQUFPRSxNQUFJLEVBQ0UsU0FBQSxSQUFNSCxjQUFPLGlCQUFBVSxtQkFBSyxPQUFBLE5BQUtUO0lBQVZVLG1CQUFlWDtBQUFmLEFBQUEsU0FBQVUsbUJBQUFDLG9CQUFBRCxtQkFBQUM7S0FEZiwrQkFBQSw3QkFFRSxTQUFBLFJBQU1YLGNBQU8sQ0FBR0MsTUFBSUQsT0FDZEE7OztBQUhuQixBQUlFLEdBQUksUUFBQSxQQUFJRztBQUNOLEdBQUksQUFBQ0cseUJBQUUsQUFBQ0Msd0JBQUlULEtBQUtLLEtBQUtKO0FBQ3BCSTs7QUFDQSxZQUFPLE9BQUEsTkFBS0E7Ozs7O0FBSGhCOzs7Ozs7O0FBWFQsQUFBQSxnRUFBQSxoRUFBTU07O0FBQU4sQUFrQkEsQUFBQTs7OzJDQUFBLG1EQUFBZiw5RkFBTW1CO0FBQU4sQUFBQSxJQUFBRCxRQUFBLEFBQUE7QUFBQSxBQUFBLFFBQUFBO0tBQUE7QUFBQSxPQUFBQyx1RUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7OztLQUFBO0FBQUEsT0FBQUEsdUVBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7O0FBQUEsTUFBQSxLQUFBaEIsTUFBQSxDQUFBLDhEQUFBLEFBQUE7Ozs7O0FBQUEsQUFBQSx5RUFBQSx6RUFBTWdCLG9GQUVVQyxHQUFHQztBQUZuQixBQUdHLElBQU1DLEtBQUcsQUFBQ2QsMEJBQU1ZO0lBQ1ZHLEtBQUcsQUFBQ2YsMEJBQU1hO0FBRGhCLEFBRUUsR0FDRSxDQUFHQyxLQUFHQztBQURSOztBQUFBLEdBRUUsQ0FBR0QsS0FBR0M7QUFGUjs7QUFBQSxHQUdFLFFBQUEsUEFBSUQ7QUFITjs7QUFBQSxBQUlRLG1FQUFBLDVEQUFDSCxtREFBZ0JDLEdBQUdDLEdBQUdDOzs7Ozs7O0FBVHBDLEFBQUEseUVBQUEsekVBQU1ILG9GQVVVQyxHQUFHQyxHQUFHZCxJQUFJaUI7O0FBVjFCLEFBV0csSUFBTUMsSUFBRSxBQUFDQyw0QkFBUSxBQUFDYix3QkFBSU8sR0FBR0ksR0FBRyxBQUFDWCx3QkFBSVEsR0FBR0c7QUFBcEMsQUFDRSxHQUFJLEVBQUssT0FBQSxOQUFPQyxnQkFBRyxDQUFHLEtBQUEsSkFBR0QsV0FBS2pCO0FBQzVCLFlBQU9hO1lBQUdDO1lBQUdkO1lBQUksS0FBQSxKQUFLaUI7Ozs7Ozs7QUFDdEJDOzs7Ozs7QUFkUCxBQUFBLG1FQUFBLG5FQUFNTjs7QUFBTixBQWlCQTs7Ozs0Q0FBQSw1Q0FBTVEsZ0dBR1N0QixFQUFFdUI7QUFIakIsQUFJRSxPQUFDQyw2QkFDQyw0Q0FBQSwxQ0FBTSxBQUFDQyxzQ0FBWUYsSUFDakIsa0tBQUEsaEtBQUksRUFBSyxBQUFDRyxtQ0FBUzFCLFFBQUcsQUFBQzBCLG1DQUFTSCxRQUMxQixHQUFLLENBQUksQUFBQ3BCLDBCQUFNSCxPQUFHLEFBQUNHLDBCQUFNb0IsZUFFOUIsaUJBQU9SLEtBQUcsQUFBQ1ksd0JBQUkzQjtJQUFHZ0IsS0FBRyxBQUFDVyx3QkFBSUo7O0FBQTFCLEFBQ0UsR0FBTSxPQUFBLE5BQU1SO0FBQUksY0FBQSxOQUFNQzs7QUFBdEIsR0FDTSxPQUFBLE5BQU1BO0FBRFo7O0FBQUEsR0FFTSxBQUFDVCx5QkFBRSxBQUFDcUIsMEJBQU1iLElBQUksQUFBQ2EsMEJBQU1aO0FBQUssWUFBTyxBQUFDYSx5QkFBS2Q7WUFBSSxBQUFDYyx5QkFBS2I7Ozs7O0FBRnZELEFBQUE7Ozs7Ozs7TUFMTjs7QUFXSixBQUFBOzs7O3FDQUFBLDZDQUFBckIsbEZBQU1vQztBQUFOLEFBQUEsSUFBQUQsUUFBQSxBQUFBO0FBQUEsQUFBQSxRQUFBQTtLQUFBO0FBQUEsT0FBQUMsaUVBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7S0FBQTtBQUFBLE9BQUFBLGlFQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQTs7O0tBQUE7QUFBQSxPQUFBQSxpRUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7Ozs7QUFBQSxNQUFBLEtBQUFqQyxNQUFBLENBQUEsOERBQUEsQUFBQTs7Ozs7QUFBQSxBQUFBLG1FQUFBLG5FQUFNaUMsOEVBR1VDLE9BQU9DO0FBSHZCLEFBSUcsSUFBTUMsTUFBSSxBQUFDQywyQkFBT0g7QUFBbEIsQUFDRSxHQUFJLFNBQUEsUkFBT0U7QUFDVCxPQUFDRDs7QUFDRCxJQUFPRyxNQUFJLGdDQUFBLGhDQUFDQyx5QkFBS0w7UUFBakIsSkFBNEJiOztBQUE1QixBQUNFLEdBQUksQ0FBR0EsSUFBRWU7QUFDUCxJQUFNSSxPQUFLLEFBQUNMLFlBQUVHLElBQUksQUFBQ0MseUJBQUtMLE9BQU9iO0FBQS9CLEFBQ0UsR0FBSSxBQUFDcUIsbUNBQVNGO0FBQWQsT0FBQUMsMEJBQ0dEOztBQUNELFlBQU9BO1lBQUssS0FBQSxKQUFLbkI7Ozs7OztBQUNyQmlCOzs7Ozs7O0FBYlgsQUFBQSxtRUFBQSxuRUFBTUwsOEVBY1VDLE9BQU9DLEVBQUVHO0FBZHpCLEFBZUcsSUFBTUYsTUFBSSxBQUFDQywyQkFBT0g7QUFBbEIsQUFDRSxJQUFPSSxVQUFJQTtRQUFYLEpBQWdCakI7O0FBQWhCLEFBQ0UsR0FBSSxDQUFHQSxJQUFFZTtBQUNQLElBQU1JLE9BQUssQUFBQ0wsWUFBRUcsUUFBSSxBQUFDQyx5QkFBS0wsT0FBT2I7QUFBL0IsQUFDRSxHQUFJLEFBQUNxQixtQ0FBU0Y7QUFBZCxPQUFBQywwQkFDR0Q7O0FBQ0QsWUFBT0E7WUFBSyxLQUFBLEpBQUtuQjs7Ozs7O0FBQ3JCaUI7Ozs7OztBQXRCVCxBQUFBLG1FQUFBLG5FQUFNTCw4RUF1QlVDLE9BQU9DLEVBQUVHLElBQUloQztBQXZCN0IsQUF3QkcsSUFBTThCLE1BQUksQUFBQ0MsMkJBQU9IO0FBQWxCLEFBQ0UsSUFBT0ksVUFBSUE7SUFBS2pCLElBQUVmOztBQUFsQixBQUNFLEdBQUksQ0FBR2UsSUFBRWU7QUFDUCxJQUFNSSxPQUFLLEFBQUNMLFlBQUVHLFFBQUksQUFBQ0MseUJBQUtMLE9BQU9iO0FBQS9CLEFBQ0UsR0FBSSxBQUFDcUIsbUNBQVNGO0FBQWQsT0FBQUMsMEJBQ0dEOztBQUNELFlBQU9BO1lBQUssS0FBQSxKQUFLbkI7Ozs7OztBQUNyQmlCOzs7Ozs7QUEvQlQsQUFBQSw2REFBQSw3REFBTUw7O0FBQU4sQUFrQ0Esd0RBQUEseERBQU1VLHdIQUFxQ0MsTUFBTUMsRUFBRUM7QUFBbkQsQUFDRSxvQkFBSUE7QUFDRixHQUNFLEFBQUNDLHFDQUFXRjtBQUNaLE9BQUNHLGlDQUFRSixNQUFNLEFBQUNLLHdCQUFJSixHQUFHLEFBQUNLLHdCQUFJTDs7QUFGOUIsR0FJRSxBQUFDTSxrQ0FBUU47QUFDVCxPQUFDRyxpQ0FBUUosTUFBTSxZQUFBLFpBQUNDLGlCQUFLLFlBQUEsWkFBQ0E7O0FBTHhCLEFBUUUsSUFBT08sS0FBRyxBQUFDdkIsd0JBQUlnQjtJQUFHRCxZQUFNQTs7QUFBeEIsQUFDRSxJQUFBUyxxQkFBVyxBQUFDdkIsMEJBQU1zQjtBQUFsQixBQUFBLG9CQUFBQztBQUFBLFFBQUFBLEpBQVNDO0FBQVQsQUFDRSxZQUFPLEFBQUN2Qix5QkFBS3FCO1lBQ1gsQUFBQ0osaUNBQVFKLFVBQU0sQUFBQ0ssd0JBQUlLLEdBQUcsQUFBQ0osd0JBQUlJOzs7OztBQUM5QlY7Ozs7Ozs7O0FBQ04sTUFBTyxLQUFBNUMsTUFBQTs7O0FBR1gsbURBQUEsbkRBQU11RCw4R0FBcUN0RCxLQUFLdUQ7QUFBaEQsQUFDRSxHQUFJLEFBQUNMLGtDQUFRSztBQUNYLE9BQUNDLDJCQUFPeEQsS0FBSywrQkFBQSwvQkFBQ3NDLHlCQUFLaUIsV0FBUywrQkFBQSwvQkFBQ2pCLHlCQUFLaUI7O0FBQ2xDLElBQU9FLE1BQUl6RDtJQUFLbUQsS0FBRyxBQUFDdkIsd0JBQUkyQjs7QUFBeEIsQUFDRSxHQUFJLE9BQUEsTkFBTUo7QUFDUk07O0FBQ0EsSUFBTUosSUFBRSxBQUFDeEIsMEJBQU1zQjtBQUFmLEFBQ0UsR0FBSSxBQUFDRCxrQ0FBUUc7QUFDWCxZQUFPLEFBQUNHLDJCQUFPQyxJQUFJLDJCQUFBLDNCQUFDbkIseUJBQUtlLE9BQUssMkJBQUEsM0JBQUNmLHlCQUFLZTtZQUNsQyxBQUFDdkIseUJBQUtxQjs7Ozs7QUFDUixNQUFPLEtBQUFwRCxNQUFBOzs7Ozs7O0FBR25CLHVEQUFBLHZEQUFNMkQsc0hBQW9DZixNQUFNZ0IsSUFBSXRCLElBQUl1QjtBQUF4RCxBQUNFLEdBQUksT0FBU0Q7QUFDWCxPQUFDRSxtQ0FBVWxCLE1BQU1nQixJQUFJdEI7O0FBQ3JCLE1BQU8sS0FBQXRDLE1BQVcsd0RBQUEsWEFBSzZEOzs7QUFHM0Isa0RBQUEsbERBQU1FLDRHQUFvQzlELEtBQUsrRCxNQUFNQyxLQUFLN0I7QUFBMUQsQUFDRSxHQUFJLGtCQUFXNkIsakJBQUtEO0FBQ2xCLEdBQUksQ0FBSTVCLFFBQUksQUFBQy9CLDBCQUFNMkQ7QUFDakIsSUFBTUUsVUFBUyxBQUFDQyw4QkFBVWxFO0lBQ3BCbUUsV0FBUyxBQUFDRCw4QkFBVUg7QUFEMUIsQUFFRTtBQUFBLEFBQ0UsR0FBSSxBQUFtQkU7QUFDckIsSUFBTWhFLElBQUUsQUFBT2dFO0lBQ1R6QyxJQUFFLEFBQU8yQztBQURmLEFBRUUsR0FBSSxBQUFDM0QseUJBQUVQLEVBQUV1QjtBQUNQOztBQURGOzs7QUFISjs7Ozs7QUFKTjs7O0FBWUEsT0FBQ0Qsb0RBQWlCdkIsS0FBSytEOzs7QUFHM0IsbURBQUEsbkRBQU1LLDhHQUFxQ3BFLEtBQUtxRSxFQUFFQztBQUFsRCxBQUNFLEdBQUksT0FBU0Q7QUFDWCxPQUFDL0IseUJBQUt0QyxLQUFLcUUsRUFBRUM7O0FBQ2JBOzs7QUFHSixrREFBQSxsREFBTUMsNEdBQW9DdkUsS0FBS3FFLEVBQUVHO0FBQWpELEFBQ0UsR0FBSSxPQUFTSDtBQUNYLE9BQUNJLDZCQUFTekUsS0FBS3FFLEVBQUVHOztBQUNqQixNQUFPLEtBQUF6RSxNQUFBOzs7QUFHWCxnRUFBQSxoRUFBTTJFLHdJQUFnQzFFLEtBQUtxRSxFQUFFbEM7QUFBN0MsQUFDRSxHQUFJLEFBQUN3QyxtQ0FBU047QUFDWixTQUFLLENBQUEsT0FBTUEsUUFBRyxDQUFHQSxJQUFFbEM7O0FBRHJCIiwibmFtZXMiOlsidmFyX2FyZ3MiLCJHX18yMyIsImNsanMtYmVhbi5mcm9tLmNsanMuY29yZS8taW5kZXhPZiIsImpzL0Vycm9yIiwiY29sbCIsIngiLCJzdGFydCIsImxlbiIsImNsanMuY29yZS9jb3VudCIsImlkeCIsInhfXzEwNjA2X19hdXRvX18iLCJ5X18xMDYwN19fYXV0b19fIiwiY2xqcy5jb3JlLz0iLCJjbGpzLmNvcmUvbnRoIiwiR19fMjciLCJjbGpzLWJlYW4uZnJvbS5jbGpzLmNvcmUvLWxhc3RJbmRleE9mIiwieF9fMTA2NDJfX2F1dG9fXyIsInlfXzEwNjQzX19hdXRvX18iLCJHX18zMSIsImNsanMtYmVhbi5mcm9tLmNsanMuY29yZS9jb21wYXJlLWluZGV4ZWQiLCJ4cyIsInlzIiwieGwiLCJ5bCIsIm4iLCJkIiwiY2xqcy5jb3JlL2NvbXBhcmUiLCJjbGpzLWJlYW4uZnJvbS5jbGpzLmNvcmUvZXF1aXYtc2VxdWVudGlhbCIsInkiLCJjbGpzLmNvcmUvYm9vbGVhbiIsImNsanMuY29yZS9zZXF1ZW50aWFsPyIsImNsanMuY29yZS9jb3VudGVkPyIsImNsanMuY29yZS9zZXEiLCJjbGpzLmNvcmUvZmlyc3QiLCJjbGpzLmNvcmUvbmV4dCIsIkdfXzQwIiwiY2xqcy1iZWFuLmZyb20uY2xqcy5jb3JlL2NpLXJlZHVjZSIsImNpY29sbCIsImYiLCJjbnQiLCJjbGpzLmNvcmUvLWNvdW50IiwidmFsIiwiY2xqcy5jb3JlLy1udGgiLCJudmFsIiwiY2xqcy5jb3JlL2RlcmVmIiwiY2xqcy5jb3JlL3JlZHVjZWQ/IiwiY2xqcy1iZWFuLmZyb20uY2xqcy5jb3JlL1RyYW5zaWVudEFycmF5TWFwLWNvbmohIiwidGNvbGwiLCJvIiwiZWRpdGFibGU/IiwiY2xqcy5jb3JlL21hcC1lbnRyeT8iLCJjbGpzLmNvcmUvLWFzc29jISIsImNsanMuY29yZS9rZXkiLCJjbGpzLmNvcmUvdmFsIiwiY2xqcy5jb3JlL3ZlY3Rvcj8iLCJlcyIsInRlbXBfXzk1MTdfX2F1dG9fXyIsImUiLCJjbGpzLWJlYW4uZnJvbS5jbGpzLmNvcmUvUGVyc2lzdGVudEFycmF5TWFwLWNvbmoiLCJlbnRyeSIsImNsanMuY29yZS8tYXNzb2MiLCJyZXQiLCJjbGpzLWJlYW4uZnJvbS5jbGpzLmNvcmUvVHJhbnNpZW50VmVjdG9yLWFzc29jISIsImtleSIsInR5cGUtbmFtZSIsImNsanMuY29yZS8tYXNzb2MtbiEiLCJjbGpzLWJlYW4uZnJvbS5jbGpzLmNvcmUvUGVyc2lzdGVudFZlY3Rvci1lcXVpdiIsIm90aGVyIiwidHlwZSIsIm1lLWl0ZXIiLCJjbGpzLmNvcmUvLWl0ZXJhdG9yIiwieW91LWl0ZXIiLCJjbGpzLWJlYW4uZnJvbS5jbGpzLmNvcmUvUGVyc2lzdGVudFZlY3Rvci1sb29rdXAiLCJrIiwibm90LWZvdW5kIiwiY2xqcy1iZWFuLmZyb20uY2xqcy5jb3JlL1BlcnNpc3RlbnRWZWN0b3ItYXNzb2MiLCJ2IiwiY2xqcy5jb3JlLy1hc3NvYy1uIiwiY2xqcy1iZWFuLmZyb20uY2xqcy5jb3JlL1BlcnNpc3RlbnRWZWN0b3ItY29udGFpbnMta2V5PyIsImNsanMuY29yZS9pbnRlZ2VyPyJdLCJzb3VyY2VzQ29udGVudCI6WyI7ICAgQ29weXJpZ2h0IChjKSBSaWNoIEhpY2tleS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbjsgICBUaGUgdXNlIGFuZCBkaXN0cmlidXRpb24gdGVybXMgZm9yIHRoaXMgc29mdHdhcmUgYXJlIGNvdmVyZWQgYnkgdGhlXG47ICAgRWNsaXBzZSBQdWJsaWMgTGljZW5zZSAxLjAgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9lY2xpcHNlLTEuMC5waHApXG47ICAgd2hpY2ggY2FuIGJlIGZvdW5kIGluIHRoZSBmaWxlIGVwbC12MTAuaHRtbCBhdCB0aGUgcm9vdCBvZiB0aGlzIGRpc3RyaWJ1dGlvbi5cbjsgICBCeSB1c2luZyB0aGlzIHNvZnR3YXJlIGluIGFueSBmYXNoaW9uLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5XG47ICAgdGhlIHRlcm1zIG9mIHRoaXMgbGljZW5zZS5cbjsgICBZb3UgbXVzdCBub3QgcmVtb3ZlIHRoaXMgbm90aWNlLCBvciBhbnkgb3RoZXIsIGZyb20gdGhpcyBzb2Z0d2FyZS5cblxuKG5zIF46bm8tZG9jIGNsanMtYmVhbi5mcm9tLmNsanMuY29yZSlcblxuOzsgQ29waWVkIGFuZCBtYWRlIHB1YmxpYywgYWRkaW5nIF5ub3QtbmF0aXZlIGhpbnRzXG4oZGVmbiAtaW5kZXhPZlxuICAoW15ub3QtbmF0aXZlIGNvbGwgeF1cbiAgICgtaW5kZXhPZiBjb2xsIHggMCkpXG4gIChbXm5vdC1uYXRpdmUgY29sbCB4IHN0YXJ0XVxuICAgKGxldCBbbGVuIChjb3VudCBjb2xsKV1cbiAgICAgKGlmICg+PSBzdGFydCBsZW4pXG4gICAgICAgLTFcbiAgICAgICAobG9vcCBbaWR4IChjb25kXG4gICAgICAgICAgICAgICAgICAgIChwb3M/IHN0YXJ0KSBzdGFydFxuICAgICAgICAgICAgICAgICAgICAobmVnPyBzdGFydCkgKG1heCAwICgrIHN0YXJ0IGxlbikpXG4gICAgICAgICAgICAgICAgICAgIDplbHNlIHN0YXJ0KV1cbiAgICAgICAgIChpZiAoPCBpZHggbGVuKVxuICAgICAgICAgICAoaWYgKD0gKG50aCBjb2xsIGlkeCkgeClcbiAgICAgICAgICAgICBpZHhcbiAgICAgICAgICAgICAocmVjdXIgKGluYyBpZHgpKSlcbiAgICAgICAgICAgLTEpKSkpKSlcblxuOzsgQ29waWVkIGFuZCBtYWRlIHB1YmxpYywgYWRkaW5nIF5ub3QtbmF0aXZlIGhpbnRzXG4oZGVmbiAtbGFzdEluZGV4T2ZcbiAgKFtebm90LW5hdGl2ZSBjb2xsIHhdXG4gICAoLWxhc3RJbmRleE9mIGNvbGwgeCAoY291bnQgY29sbCkpKVxuICAoW15ub3QtbmF0aXZlIGNvbGwgeCBzdGFydF1cbiAgIChsZXQgW2xlbiAoY291bnQgY29sbCldXG4gICAgIChpZiAoemVybz8gbGVuKVxuICAgICAgIC0xXG4gICAgICAgKGxvb3AgW2lkeCAoY29uZFxuICAgICAgICAgICAgICAgICAgICAocG9zPyBzdGFydCkgKG1pbiAoZGVjIGxlbikgc3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIChuZWc/IHN0YXJ0KSAoKyBsZW4gc3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIDplbHNlIHN0YXJ0KV1cbiAgICAgICAgIChpZiAoPj0gaWR4IDApXG4gICAgICAgICAgIChpZiAoPSAobnRoIGNvbGwgaWR4KSB4KVxuICAgICAgICAgICAgIGlkeFxuICAgICAgICAgICAgIChyZWN1ciAoZGVjIGlkeCkpKVxuICAgICAgICAgICAtMSkpKSkpKVxuXG47OyBDb3BpZWQgYW5kIG1hZGUgcHVibGljLCBhZGRpbmcgXm5vdC1uYXRpdmUgaGludHNcbihkZWZuIGNvbXBhcmUtaW5kZXhlZFxuICBcIkNvbXBhcmUgaW5kZXhlZCBjb2xsZWN0aW9uLlwiXG4gIChbXm5vdC1uYXRpdmUgeHMgeXNdXG4gICAobGV0IFt4bCAoY291bnQgeHMpXG4gICAgICAgICB5bCAoY291bnQgeXMpXVxuICAgICAoY29uZFxuICAgICAgICg8IHhsIHlsKSAtMVxuICAgICAgICg+IHhsIHlsKSAxXG4gICAgICAgKD09IHhsIDApIDBcbiAgICAgICA6ZWxzZSAoY29tcGFyZS1pbmRleGVkIHhzIHlzIHhsIDApKSkpXG4gIChbXm5vdC1uYXRpdmUgeHMgeXMgbGVuIG5dXG4gICAobGV0IFtkIChjb21wYXJlIChudGggeHMgbikgKG50aCB5cyBuKSldXG4gICAgIChpZiAoYW5kICh6ZXJvPyBkKSAoPCAoKyBuIDEpIGxlbikpXG4gICAgICAgKHJlY3VyIHhzIHlzIGxlbiAoaW5jIG4pKVxuICAgICAgIGQpKSkpXG5cbjs7IENvcGllZCBhbmQgbWFkZSBwdWJsaWMsIGFkZGluZyBebm90LW5hdGl2ZSBoaW50XG4oZGVmbiBlcXVpdi1zZXF1ZW50aWFsXG4gIFwiQXNzdW1lcyB4IGlzIHNlcXVlbnRpYWwuIFJldHVybnMgdHJ1ZSBpZiB4IGVxdWFscyB5LCBvdGhlcndpc2VcbiAgcmV0dXJucyBmYWxzZS5cIlxuICBbXm5vdC1uYXRpdmUgeCB5XVxuICAoYm9vbGVhblxuICAgICh3aGVuIChzZXF1ZW50aWFsPyB5KVxuICAgICAgKGlmIChhbmQgKGNvdW50ZWQ/IHgpIChjb3VudGVkPyB5KVxuICAgICAgICAgICAgKG5vdCAoPT0gKGNvdW50IHgpIChjb3VudCB5KSkpKVxuICAgICAgICBmYWxzZVxuICAgICAgICAobG9vcCBbeHMgKHNlcSB4KSB5cyAoc2VxIHkpXVxuICAgICAgICAgIChjb25kIChuaWw/IHhzKSAobmlsPyB5cylcbiAgICAgICAgICAgICAgICAobmlsPyB5cykgZmFsc2VcbiAgICAgICAgICAgICAgICAoPSAoZmlyc3QgeHMpIChmaXJzdCB5cykpIChyZWN1ciAobmV4dCB4cykgKG5leHQgeXMpKVxuICAgICAgICAgICAgICAgIDplbHNlIGZhbHNlKSkpKSkpXG5cbjs7IENvcGllZCBhbmQgbWFkZSBwdWJsaWMsIGFkZGluZyBebm90LW5hdGl2ZSBoaW50c1xuKGRlZm4gY2ktcmVkdWNlXG4gIFwiQWNjZXB0cyBhbnkgY29sbGVjdGlvbiB3aGljaCBzYXRpc2ZpZXMgdGhlIElDb3VudCBhbmQgSUluZGV4ZWQgcHJvdG9jb2xzIGFuZFxucmVkdWNlcyB0aGVtIHdpdGhvdXQgaW5jdXJyaW5nIHNlcSBpbml0aWFsaXphdGlvblwiXG4gIChbXm5vdC1uYXRpdmUgY2ljb2xsIGZdXG4gICAobGV0IFtjbnQgKC1jb3VudCBjaWNvbGwpXVxuICAgICAoaWYgKHplcm8/IGNudClcbiAgICAgICAoZilcbiAgICAgICAobG9vcCBbdmFsICgtbnRoIGNpY29sbCAwKSwgbiAxXVxuICAgICAgICAgKGlmICg8IG4gY250KVxuICAgICAgICAgICAobGV0IFtudmFsIChmIHZhbCAoLW50aCBjaWNvbGwgbikpXVxuICAgICAgICAgICAgIChpZiAocmVkdWNlZD8gbnZhbClcbiAgICAgICAgICAgICAgIEBudmFsXG4gICAgICAgICAgICAgICAocmVjdXIgbnZhbCAoaW5jIG4pKSkpXG4gICAgICAgICAgIHZhbCkpKSkpXG4gIChbXm5vdC1uYXRpdmUgY2ljb2xsIGYgdmFsXVxuICAgKGxldCBbY250ICgtY291bnQgY2ljb2xsKV1cbiAgICAgKGxvb3AgW3ZhbCB2YWwsIG4gMF1cbiAgICAgICAoaWYgKDwgbiBjbnQpXG4gICAgICAgICAobGV0IFtudmFsIChmIHZhbCAoLW50aCBjaWNvbGwgbikpXVxuICAgICAgICAgICAoaWYgKHJlZHVjZWQ/IG52YWwpXG4gICAgICAgICAgICAgQG52YWxcbiAgICAgICAgICAgICAocmVjdXIgbnZhbCAoaW5jIG4pKSkpXG4gICAgICAgICB2YWwpKSkpXG4gIChbXm5vdC1uYXRpdmUgY2ljb2xsIGYgdmFsIGlkeF1cbiAgIChsZXQgW2NudCAoLWNvdW50IGNpY29sbCldXG4gICAgIChsb29wIFt2YWwgdmFsLCBuIGlkeF1cbiAgICAgICAoaWYgKDwgbiBjbnQpXG4gICAgICAgICAobGV0IFtudmFsIChmIHZhbCAoLW50aCBjaWNvbGwgbikpXVxuICAgICAgICAgICAoaWYgKHJlZHVjZWQ/IG52YWwpXG4gICAgICAgICAgICAgQG52YWxcbiAgICAgICAgICAgICAocmVjdXIgbnZhbCAoaW5jIG4pKSkpXG4gICAgICAgICB2YWwpKSkpKVxuXG47OyBDb3BpZWQgZnJvbSBUcmFuc2llbnRBcnJheU1hcCBhbmQgbW9kaWZpZWQgd2l0aCBlZGl0YWJsZT8gcGFyYW0sIGFkZGluZyBebm90LW5hdGl2ZSBoaW50XG4oZGVmbiBUcmFuc2llbnRBcnJheU1hcC1jb25qISBbXm5vdC1uYXRpdmUgdGNvbGwgbyBlZGl0YWJsZT9dXG4gIChpZiBlZGl0YWJsZT9cbiAgICAoY29uZFxuICAgICAgKG1hcC1lbnRyeT8gbylcbiAgICAgICgtYXNzb2MhIHRjb2xsIChrZXkgbykgKHZhbCBvKSlcblxuICAgICAgKHZlY3Rvcj8gbylcbiAgICAgICgtYXNzb2MhIHRjb2xsIChvIDApIChvIDEpKVxuXG4gICAgICA6ZWxzZVxuICAgICAgKGxvb3AgW2VzIChzZXEgbykgdGNvbGwgdGNvbGxdXG4gICAgICAgIChpZi1sZXQgW2UgKGZpcnN0IGVzKV1cbiAgICAgICAgICAocmVjdXIgKG5leHQgZXMpXG4gICAgICAgICAgICAoLWFzc29jISB0Y29sbCAoa2V5IGUpICh2YWwgZSkpKVxuICAgICAgICAgIHRjb2xsKSkpXG4gICAgKHRocm93IChqcy9FcnJvci4gXCJjb25qISBhZnRlciBwZXJzaXN0ZW50IVwiKSkpKVxuXG47OyBDb3BpZWQgZnJvbSBQZXJzaXN0ZW50QXJyYXlNYXAsIGFkZGluZyBebm90LW5hdGl2ZSBoaW50XG4oZGVmbiBQZXJzaXN0ZW50QXJyYXlNYXAtY29uaiBbXm5vdC1uYXRpdmUgY29sbCBlbnRyeV1cbiAgKGlmICh2ZWN0b3I/IGVudHJ5KVxuICAgICgtYXNzb2MgY29sbCAoLW50aCBlbnRyeSAwKSAoLW50aCBlbnRyeSAxKSlcbiAgICAobG9vcCBbcmV0IGNvbGwgZXMgKHNlcSBlbnRyeSldXG4gICAgICAoaWYgKG5pbD8gZXMpXG4gICAgICAgIHJldFxuICAgICAgICAobGV0IFtlIChmaXJzdCBlcyldXG4gICAgICAgICAgKGlmICh2ZWN0b3I/IGUpXG4gICAgICAgICAgICAocmVjdXIgKC1hc3NvYyByZXQgKC1udGggZSAwKSAoLW50aCBlIDEpKVxuICAgICAgICAgICAgICAobmV4dCBlcykpXG4gICAgICAgICAgICAodGhyb3cgKGpzL0Vycm9yLiBcImNvbmogb24gYSBtYXAgdGFrZXMgbWFwIGVudHJpZXMgb3Igc2VxYWJsZXMgb2YgbWFwIGVudHJpZXNcIikpKSkpKSkpXG5cbjs7IENvcGllZCBmcm9tIFRyYW5zaWVudFZlY3RvciBhbmQgcGFyYW1ldGVyaXplZCBvbiB0eXBlLW5hbWUsIGFkZGluZyBebm90LW5hdGl2ZSBoaW50XG4oZGVmbiBUcmFuc2llbnRWZWN0b3ItYXNzb2MhIFtebm90LW5hdGl2ZSB0Y29sbCBrZXkgdmFsIHR5cGUtbmFtZV1cbiAgKGlmIChudW1iZXI/IGtleSlcbiAgICAoLWFzc29jLW4hIHRjb2xsIGtleSB2YWwpXG4gICAgKHRocm93IChqcy9FcnJvci4gKHN0ciB0eXBlLW5hbWUgXCIncyBrZXkgZm9yIGFzc29jISBtdXN0IGJlIGEgbnVtYmVyLlwiKSkpKSlcblxuOzsgQ29waWVkIGZyb20gUGVyc2lzdGVudFZlY3RvciBhbmQgcGFyYW1ldGVyaXplZCBvbiB0eXBlIGFuZCBjbnQsIGFkZGluZyBebm90LW5hdGl2ZSBoaW50XG4oZGVmbiBQZXJzaXN0ZW50VmVjdG9yLWVxdWl2IFtebm90LW5hdGl2ZSBjb2xsIG90aGVyIHR5cGUgY250XVxuICAoaWYgKGluc3RhbmNlPyB0eXBlIG90aGVyKVxuICAgIChpZiAoPT0gY250IChjb3VudCBvdGhlcikpXG4gICAgICAobGV0IFttZS1pdGVyICAoLWl0ZXJhdG9yIGNvbGwpXG4gICAgICAgICAgICB5b3UtaXRlciAoLWl0ZXJhdG9yIG90aGVyKV1cbiAgICAgICAgKGxvb3AgW11cbiAgICAgICAgICAoaWYgXmJvb2xlYW4gKC5oYXNOZXh0IG1lLWl0ZXIpXG4gICAgICAgICAgICAobGV0IFt4ICgubmV4dCBtZS1pdGVyKVxuICAgICAgICAgICAgICAgICAgeSAoLm5leHQgeW91LWl0ZXIpXVxuICAgICAgICAgICAgICAoaWYgKD0geCB5KVxuICAgICAgICAgICAgICAgIChyZWN1cilcbiAgICAgICAgICAgICAgICBmYWxzZSkpXG4gICAgICAgICAgICB0cnVlKSkpXG4gICAgICBmYWxzZSlcbiAgICAoZXF1aXYtc2VxdWVudGlhbCBjb2xsIG90aGVyKSkpXG5cbjs7IENvcGllZCBmcm9tIFBlcnNpc3RlbnRWZWN0b3IsIGFkZGluZyBebm90LW5hdGl2ZSBoaW50XG4oZGVmbiBQZXJzaXN0ZW50VmVjdG9yLWxvb2t1cCBbXm5vdC1uYXRpdmUgY29sbCBrIG5vdC1mb3VuZF1cbiAgKGlmIChudW1iZXI/IGspXG4gICAgKC1udGggY29sbCBrIG5vdC1mb3VuZClcbiAgICBub3QtZm91bmQpKVxuXG47OyBDb3BpZWQgZnJvbSBQZXJzaXN0ZW50VmVjdG9yLCBhZGRpbmcgXm5vdC1uYXRpdmUgaGludFxuKGRlZm4gUGVyc2lzdGVudFZlY3Rvci1hc3NvYyBbXm5vdC1uYXRpdmUgY29sbCBrIHZdXG4gIChpZiAobnVtYmVyPyBrKVxuICAgICgtYXNzb2MtbiBjb2xsIGsgdilcbiAgICAodGhyb3cgKGpzL0Vycm9yLiBcIlZlY3RvcidzIGtleSBmb3IgYXNzb2MgbXVzdCBiZSBhIG51bWJlci5cIikpKSlcblxuOzsgQ29waWVkIGZyb20gUGVyc2lzdGVudFZlY3RvciBhbiBwYXJhbWV0ZXJpemVkIG9uIGNudFxuKGRlZm4gUGVyc2lzdGVudFZlY3Rvci1jb250YWlucy1rZXk/IFtjb2xsIGsgY250XVxuICAoaWYgKGludGVnZXI/IGspXG4gICAgKGFuZCAoPD0gMCBrKSAoPCBrIGNudCkpXG4gICAgZmFsc2UpKVxuIl19