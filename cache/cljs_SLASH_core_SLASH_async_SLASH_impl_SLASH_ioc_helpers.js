// Compiled by ClojureScript 1.10.597
goog.provide("cljs.core.async.impl.ioc_helpers");
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_.call(null,(state_array[(1)]),new cljs.core.Keyword(null,"finished","finished",(-1018867731)));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39 = (function (f,meta40){
this.f = f;
this.meta40 = meta40;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41,meta40__$1){
var self__ = this;
var _41__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39(self__.f,meta40__$1));
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41){
var self__ = this;
var _41__$1 = this;
return self__.meta40;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"meta40","meta40",(44588954),null)], null);
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39.cljs$lang$type = true);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers39");

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers39");
}));

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers39.
 */
cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers39 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers39(f__$1,meta40){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39(f__$1,meta40));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers39(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,(0)).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e42){if((e42 instanceof Object)){
var ex = e42;
cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,(6)));

throw ex;
} else {
throw e42;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__9395__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){
var statearr_43_45 = state;
(statearr_43_45[(2)] = x);

(statearr_43_45[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__9395__auto__)){
var cb = temp__9395__auto__;
var statearr_44_46 = state;
(statearr_44_46[(2)] = cljs.core.deref.call(null,cb));

(statearr_44_46[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__9395__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){
var statearr_47_49 = state;
(statearr_47_49[(2)] = ret_val);

(statearr_47_49[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__9395__auto__)){
var cb = temp__9395__auto__;
var statearr_48_50 = state;
(statearr_48_50[(2)] = cljs.core.deref.call(null,cb));

(statearr_48_50[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){
return null;
})));
}

cljs.core.async.impl.protocols.close_BANG_.call(null,c);

return c;
});

//# sourceURL=cljs/core/async/impl/ioc_helpers.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9jb3JlL2FzeW5jL2ltcGwvaW9jX2hlbHBlcnMuanMiLCJzb3VyY2VzIjpbImlvY19oZWxwZXJzLmNsanMiXSwibGluZUNvdW50IjoxNjgsIm1hcHBpbmdzIjoiO0FBWUEsMENBQUEsMUNBQWFBO0FBQ2IsNkNBQUEsN0NBQWFDO0FBQ2IsNkNBQUEsN0NBQWFDO0FBQ2IsZ0RBQUEsaERBQWFDO0FBQ2Isb0RBQUEscERBQWFDO0FBQ2IscURBQUEsckRBQWFDO0FBQ2Isa0RBQUEsbERBQWFDO0FBRWIsK0NBQUEsL0NBQU1DLHNHQUFhQyxJQUFJQyxJQUFJQztBQUEzQixBQUNFLFFBQU1GLElBQUlDLEtBQUlDOztBQUVoQiwrQ0FBQSwvQ0FBTUMsc0dBQWFILElBQUlDO0FBQXZCLEFBQ0UsUUFBTUQsSUFBSUM7O0FBR1o7OzttREFBQSxuREFBTUcsOEdBRUhDO0FBRkgsQUFHRSx1RUFBQSxoRUFBQ0MsNkNBQW1CLENBQU1ELFlBQVlaLEFBQUE7O0FBRXhDLDhDQUFBLDlDQUFPYyxvR0FDSkM7QUFESCxBQUVFLEFBQUEsR0FBQSxRQUFBQyxpQ0FBQUMsc0NBQUFDLDRDQUFBQyxpREFBQUMsNkRBQUFDO0FBQUE7QUFBQSxBQUFBLEFBQUE7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFBLENBQUEsQUFBQSxBQUFBQyx5SEFBQSxXQUFBQyxJQUFBQzs7QUFBQSxBQUFBLElBQUFELFVBQUE7a0ZBRENSLGxGQUNELEFBQUEsWUFBQU8sK0VBQUFFOzs7QUFBQSxDQUFBLEFBQUEsQUFBQUYsZ0hBQUEsV0FBQUM7O0FBQUEsQUFBQSxJQUFBQSxVQUFBO0FBQUEsQUFBQUM7OztBQUFBLENBQUEsQUFBQSxBQUFBRiwwSEFBQUc7O0FBQUEsQ0FBQSxBQUFBLEFBQUFILCtJQUFBLFdBRVdTOztBQUZYLEFBQUEsWUFBQSxSQUVXQTtBQUZYLEFBQUE7OztBQUFBLENBQUEsQUFBQSxBQUFBVCxrSkFBQSxXQUdjUzs7QUFIZCxBQUFBLFlBQUEsUkFHY0E7QUFIZCxBQUFBOzs7QUFBQSxDQUFBLEFBQUEsQUFBQVQsd0lBQUEsV0FJVVM7O0FBSlYsQUFBQSxZQUFBLFJBSVVBO0FBSlYsQUFJYWhCOzs7QUFKYixDQUFBLEFBQUFPLGlGQUFBO0FBQUEsQUFBQSxBQUFBOzs7QUFBQSxDQUFBLEFBQUFBLHVGQUFBOztBQUFBLENBQUEsQUFBQUEsMEZBQUE7O0FBQUEsQ0FBQSxBQUFBQSwrRkFBQSxXQUFBSSxvQkFBQUMsc0JBQUFDO0FBQUEsQUFBQSxPQUFBQywyQkFBQUYsc0JBQUE7OztBQUFBOzs7K0tBRENaLC9LQUNEZSw2RUFBQSx3R0FBQU47a0ZBRENULGxGQUNELEFBQUEsWUFBQU8sNEVBQUFFOzs7QUFBQUY7O2tGQURDUCxsRkFDRCxZQUFBTyx3RUFBQTs7QUFPRixxREFBQSxyREFBTVUsa0hBQW1CQztBQUF6QixBQUNFLE9BQUMsQUFBQ3ZCLHVEQUFZdUIsTUFBTWxDLEFBQUEsZUFBUWtDOztBQUU5Qiw2REFBQSw3REFBTUMsa0lBQTJCRDtBQUFqQyxBQUNFLElBQUEsQUFDRSxPQUFDRCw2REFBa0JDO2FBRHJCLEdBQUEsQ0FBQUUsZUFFU0M7QUFGVCxTQUFBRCxMQUVtQkU7QUFGbkIsQUFHSSxBQUFDQyxxREFBWSxBQUFhNUIsdURBQVl1QixNQUFNNUIsQUFBQTs7QUFDNUMsTUFBT2dDOztBQUpYLEFBQUEsTUFBQUY7Ozs7QUFNRiw4Q0FBQSw5Q0FBTUksb0dBQU9OLE1BQU1PLElBQWdCQztBQUFuQyxBQUNFLElBQUFDLHFCQUFZLEFBQUNFLG9EQUFXSCxFQUFFLEFBQUMzQixzREFDTSxXQUFLK0I7QUFBTCxBQUNFLElBQUFDLGlCQUFlYjtBQUFmLEFBQUEsQ0FBQWEsZUFBcUI3QyxBQUFBLE9BQVU0Qzs7QUFBL0IsQ0FBQUMsZUFBaUM5QyxBQUFBLE9BQVV3Qzs7QUFBM0NNO0FBQ0EsT0FBQ1oscUVBQTBCRDs7QUFIOUQsQUFBQSxvQkFBQVM7QUFBQSxTQUFBQSxMQUFTQztBQUFULEFBSUUsQUFBSSxJQUFBSSxpQkFBZWQ7QUFBZixBQUFBLENBQUFjLHNCQUFBLEFBQUFDLFBBQXFCL0MsQUFBQSxpQ0FBVzBDOztBQUFoQyxDQUFBSSxlQUFtQy9DLEFBQUEsT0FBVXdDOztBQUE3Q087QUFBSjs7QUFKRjs7O0FBUUYsNkNBQUEsN0NBQU1FLGtHQUFNaEIsTUFBTU8sSUFBZ0JDLEVBQUVTO0FBQXBDLEFBQ0UsSUFBQVIscUJBQVksQUFBQ1MsbURBQVVWLEVBQUVTLElBQUksQUFBQ3BDLHNEQUFXLFdBQUtzQztBQUFMLEFBQ0UsSUFBQUMsaUJBQWVwQjtBQUFmLEFBQUEsQ0FBQW9CLGVBQXFCcEQsQUFBQSxPQUFVbUQ7O0FBQS9CLENBQUFDLGVBQXVDckQsQUFBQSxPQUFVd0M7O0FBQWpEYTtBQUNBLE9BQUNuQixxRUFBMEJEOztBQUZ0RSxBQUFBLG9CQUFBUztBQUFBLFNBQUFBLExBQVNDO0FBQVQsQUFHRSxBQUFJLElBQUFXLGlCQUFlckI7QUFBZixBQUFBLENBQUFxQixzQkFBQSxBQUFBTixQQUFxQi9DLEFBQUEsaUNBQVcwQzs7QUFBaEMsQ0FBQVcsZUFBbUN0RCxBQUFBLE9BQVV3Qzs7QUFBN0NjO0FBQUo7O0FBSEY7OztBQU9GLCtDQUFBLC9DQUFNQyxzR0FBYXRCLE1BQU11QjtBQUF6QixBQUNFLElBQWtCZixJQUFFLENBQU1SLE1BQU01QixBQUFBO0FBQWhDLEFBQ1MsR0FBVSxVQUFBLFRBQU1tRDtBQUFoQjtBQUFBLEFBQ0UsQUFBQ0wsbURBQVVWLEVBQUVlLE1BQU0sQUFBQzFDLHNEQUFXO0FBQUEsQUFBQTs7OztBQUNqQyxBQUFDd0IscURBQVlHOztBQUNiQSIsIm5hbWVzIjpbImNsanMuY29yZS5hc3luYy5pbXBsLmlvYy1oZWxwZXJzL0ZOLUlEWCIsImNsanMuY29yZS5hc3luYy5pbXBsLmlvYy1oZWxwZXJzL1NUQVRFLUlEWCIsImNsanMuY29yZS5hc3luYy5pbXBsLmlvYy1oZWxwZXJzL1ZBTFVFLUlEWCIsImNsanMuY29yZS5hc3luYy5pbXBsLmlvYy1oZWxwZXJzL0JJTkRJTkdTLUlEWCIsImNsanMuY29yZS5hc3luYy5pbXBsLmlvYy1oZWxwZXJzL0VYQ0VQVElPTi1GUkFNRVMiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5pb2MtaGVscGVycy9DVVJSRU5ULUVYQ0VQVElPTiIsImNsanMuY29yZS5hc3luYy5pbXBsLmlvYy1oZWxwZXJzL1VTRVItU1RBUlQtSURYIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuaW9jLWhlbHBlcnMvYXNldC1vYmplY3QiLCJhcnIiLCJpZHgiLCJvIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuaW9jLWhlbHBlcnMvYWdldC1vYmplY3QiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5pb2MtaGVscGVycy9maW5pc2hlZD8iLCJzdGF0ZS1hcnJheSIsImNsanMuY29yZS9rZXl3b3JkLWlkZW50aWNhbD8iLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5pb2MtaGVscGVycy9mbi1oYW5kbGVyIiwiZiIsImpzL2NsanMiLCJqcy9jbGpzLmNvcmUiLCJqcy9jbGpzLmNvcmUuYXN5bmMiLCJqcy9jbGpzLmNvcmUuYXN5bmMuaW1wbCIsImpzL2NsanMuY29yZS5hc3luYy5pbXBsLmlvYy1oZWxwZXJzIiwianMvY2xqcy5jb3JlLmFzeW5jLmltcGwuaW9jLWhlbHBlcnMudF9jbGpzJGNvcmUkYXN5bmMkaW1wbCRpb2NfaGVscGVyczM5IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuaW9jLWhlbHBlcnMvdF9jbGpzJGNvcmUkYXN5bmMkaW1wbCRpb2NfaGVscGVyczM5IiwiXzQxIiwibWV0YTQwIiwiY2xqcy5jb3JlL1BST1RPQ09MX1NFTlRJTkVMIiwidGhpc19fMTEzODVfX2F1dG9fXyIsIndyaXRlcl9fMTEzODZfX2F1dG9fXyIsIm9wdF9fMTEzODdfX2F1dG9fXyIsImNsanMuY29yZS8td3JpdGUiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5pb2MtaGVscGVycy8tPnRfY2xqcyRjb3JlJGFzeW5jJGltcGwkaW9jX2hlbHBlcnMzOSIsIl8iLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5pb2MtaGVscGVycy9ydW4tc3RhdGUtbWFjaGluZSIsInN0YXRlIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuaW9jLWhlbHBlcnMvcnVuLXN0YXRlLW1hY2hpbmUtd3JhcHBlZCIsImU0MiIsImpzL09iamVjdCIsImV4IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2Nsb3NlISIsImNsanMuY29yZS5hc3luYy5pbXBsLmlvYy1oZWxwZXJzL3Rha2UhIiwiYmxrIiwiYyIsInRlbXBfXzkzOTVfX2F1dG9fXyIsImNiIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL3Rha2UhIiwieCIsInN0YXRlYXJyLTQzIiwic3RhdGVhcnItNDQiLCJjbGpzLmNvcmUvZGVyZWYiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5pb2MtaGVscGVycy9wdXQhIiwidmFsIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL3B1dCEiLCJyZXQtdmFsIiwic3RhdGVhcnItNDciLCJzdGF0ZWFyci00OCIsImNsanMuY29yZS5hc3luYy5pbXBsLmlvYy1oZWxwZXJzL3JldHVybi1jaGFuIiwidmFsdWUiXSwic291cmNlc0NvbnRlbnQiOlsiOzsgICBDb3B5cmlnaHQgKGMpIFJpY2ggSGlja2V5IGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG47OyAgIFRoZSB1c2UgYW5kIGRpc3RyaWJ1dGlvbiB0ZXJtcyBmb3IgdGhpcyBzb2Z0d2FyZSBhcmUgY292ZXJlZCBieSB0aGVcbjs7ICAgRWNsaXBzZSBQdWJsaWMgTGljZW5zZSAxLjAgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9lY2xpcHNlLTEuMC5waHApXG47OyAgIHdoaWNoIGNhbiBiZSBmb3VuZCBpbiB0aGUgZmlsZSBlcGwtdjEwLmh0bWwgYXQgdGhlIHJvb3Qgb2YgdGhpcyBkaXN0cmlidXRpb24uXG47OyAgIEJ5IHVzaW5nIHRoaXMgc29mdHdhcmUgaW4gYW55IGZhc2hpb24sIHlvdSBhcmUgYWdyZWVpbmcgdG8gYmUgYm91bmQgYnlcbjs7ICAgdGhlIHRlcm1zIG9mIHRoaXMgbGljZW5zZS5cbjs7ICAgWW91IG11c3Qgbm90IHJlbW92ZSB0aGlzIG5vdGljZSwgb3IgYW55IG90aGVyLCBmcm9tIHRoaXMgc29mdHdhcmUuXG5cbihucyBjbGpzLmNvcmUuYXN5bmMuaW1wbC5pb2MtaGVscGVyc1xuICAoOnJlcXVpcmUgW2NsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scyA6YXMgaW1wbF0pXG4gICg6cmVxdWlyZS1tYWNyb3MgW2NsanMuY29yZS5hc3luYy5pbXBsLmlvYy1tYWNyb3MgOmFzIGlvY10pKVxuXG4oZGVmIF46Y29uc3QgRk4tSURYIDApXG4oZGVmIF46Y29uc3QgU1RBVEUtSURYIDEpXG4oZGVmIF46Y29uc3QgVkFMVUUtSURYIDIpXG4oZGVmIF46Y29uc3QgQklORElOR1MtSURYIDMpXG4oZGVmIF46Y29uc3QgRVhDRVBUSU9OLUZSQU1FUyA0KVxuKGRlZiBeOmNvbnN0IENVUlJFTlQtRVhDRVBUSU9OIDUpXG4oZGVmIF46Y29uc3QgVVNFUi1TVEFSVC1JRFggNilcblxuKGRlZm4gYXNldC1vYmplY3QgW2FyciBpZHggb11cbiAgKGFnZXQgYXJyIGlkeCBvKSlcblxuKGRlZm4gYWdldC1vYmplY3QgW2FyciBpZHhdXG4gIChhZ2V0IGFyciBpZHgpKVxuXG5cbihkZWZuIGZpbmlzaGVkP1xuICBcIlJldHVybnMgdHJ1ZSBpZiB0aGUgbWFjaGluZSBpcyBpbiBhIGZpbmlzaGVkIHN0YXRlXCJcbiAgW3N0YXRlLWFycmF5XVxuICAoa2V5d29yZC1pZGVudGljYWw/IChhZ2V0IHN0YXRlLWFycmF5IFNUQVRFLUlEWCkgOmZpbmlzaGVkKSlcblxuKGRlZm4tIGZuLWhhbmRsZXJcbiAgW2ZdXG4gIChyZWlmeVxuICAgaW1wbC9IYW5kbGVyXG4gICAoYWN0aXZlPyBbX10gdHJ1ZSlcbiAgIChibG9ja2FibGU/IFtfXSB0cnVlKVxuICAgKGNvbW1pdCBbX10gZikpKVxuXG5cbihkZWZuIHJ1bi1zdGF0ZS1tYWNoaW5lIFtzdGF0ZV1cbiAgKChhZ2V0LW9iamVjdCBzdGF0ZSBGTi1JRFgpIHN0YXRlKSlcblxuKGRlZm4gcnVuLXN0YXRlLW1hY2hpbmUtd3JhcHBlZCBbc3RhdGVdXG4gICh0cnlcbiAgICAocnVuLXN0YXRlLW1hY2hpbmUgc3RhdGUpXG4gICAgKGNhdGNoIGpzL09iamVjdCBleFxuICAgICAgKGltcGwvY2xvc2UhIF5ub3QtbmF0aXZlIChhZ2V0LW9iamVjdCBzdGF0ZSBVU0VSLVNUQVJULUlEWCkpXG4gICAgICAodGhyb3cgZXgpKSkpXG5cbihkZWZuIHRha2UhIFtzdGF0ZSBibGsgXm5vdC1uYXRpdmUgY11cbiAgKGlmLWxldCBbY2IgKGltcGwvdGFrZSEgYyAoZm4taGFuZGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm4gW3hdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlvYy9hc2V0LWFsbCEgc3RhdGUgVkFMVUUtSURYIHggU1RBVEUtSURYIGJsaylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocnVuLXN0YXRlLW1hY2hpbmUtd3JhcHBlZCBzdGF0ZSkpKSldXG4gICAgKGRvIChpb2MvYXNldC1hbGwhIHN0YXRlIFZBTFVFLUlEWCBAY2IgU1RBVEUtSURYIGJsaylcbiAgICAgICAgOnJlY3VyKVxuICAgIG5pbCkpXG5cbihkZWZuIHB1dCEgW3N0YXRlIGJsayBebm90LW5hdGl2ZSBjIHZhbF1cbiAgKGlmLWxldCBbY2IgKGltcGwvcHV0ISBjIHZhbCAoZm4taGFuZGxlciAoZm4gW3JldC12YWxdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW9jL2FzZXQtYWxsISBzdGF0ZSBWQUxVRS1JRFggcmV0LXZhbCBTVEFURS1JRFggYmxrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJ1bi1zdGF0ZS1tYWNoaW5lLXdyYXBwZWQgc3RhdGUpKSkpXVxuICAgIChkbyAoaW9jL2FzZXQtYWxsISBzdGF0ZSBWQUxVRS1JRFggQGNiIFNUQVRFLUlEWCBibGspXG4gICAgICAgIDpyZWN1cilcbiAgICBuaWwpKVxuXG4oZGVmbiByZXR1cm4tY2hhbiBbc3RhdGUgdmFsdWVdXG4gIChsZXQgW15ub3QtbmF0aXZlIGMgKGFnZXQgc3RhdGUgVVNFUi1TVEFSVC1JRFgpXVxuICAgICAgICAgICAod2hlbi1ub3QgKG5pbD8gdmFsdWUpXG4gICAgICAgICAgICAgKGltcGwvcHV0ISBjIHZhbHVlIChmbi1oYW5kbGVyIChmbiBbXSBuaWwpKSkpXG4gICAgICAgICAgIChpbXBsL2Nsb3NlISBjKVxuICAgICAgICAgICBjKSlcblxuXG4iXX0=