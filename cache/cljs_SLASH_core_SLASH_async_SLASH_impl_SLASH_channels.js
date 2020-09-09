// Compiled by ClojureScript 1.10.597
goog.provide("cljs.core.async.impl.channels");
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31 = (function (val,meta32){
this.val = val;
this.meta32 = meta32;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33,meta32__$1){
var self__ = this;
var _33__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31(self__.val,meta32__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33){
var self__ = this;
var _33__$1 = this;
return self__.meta32;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"meta32","meta32",(2073478690),null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels31");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels31");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels31.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels31 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels31(val__$1,meta32){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31(val__$1,meta32));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__11578__auto__ = (((this$ == null))?null:this$);
var m__11579__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,this$);
} else {
var m__11576__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.Channel}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_34 = self__.puts.pop();
if((putter_34 == null)){
} else {
var put_handler_35 = putter_34.handler;
var val_36 = putter_34.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_35)){
var put_cb_37 = cljs.core.async.impl.protocols.commit.call(null,put_handler_35);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_37,put_handler_35,val_36,putter_34,this$__$1){
return (function (){
return put_cb_37.call(null,true);
});})(put_cb_37,put_handler_35,val_36,putter_34,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__10091__auto__ = self__.buf;
if(cljs.core.truth_(and__10091__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__10091__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker_38 = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_38)){
var take_cb_39 = cljs.core.async.impl.protocols.commit.call(null,taker_38);
var val_40__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_39,val_40__$1,taker_38,done_QMARK_,closed__$1,this$__$1){
return (function (){
return take_cb_39.call(null,val_40__$1);
});})(take_cb_39,val_40__$1,taker_38,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return take_cb.call(null,val);
}));

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var _ = cljs.core.async.impl.protocols.commit.call(null,handler);
var retval = cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));
while(true){
if(cljs.core.truth_(cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))){
} else {
var putter_41 = self__.puts.pop();
if((putter_41 == null)){
} else {
var put_handler_42 = putter_41.handler;
var val_43 = putter_41.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_42)){
var put_cb_44 = cljs.core.async.impl.protocols.commit.call(null,put_handler_42);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_44,put_handler_42,val_43,putter_41,_,retval,this$__$1){
return (function (){
return put_cb_44.call(null,true);
});})(put_cb_44,put_handler_42,val_43,putter_41,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_43))){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return put_cb.call(null,true);
}));

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__10091__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__10091__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__10091__auto__;
}
})())){
var has_val = (function (){var and__10091__auto__ = self__.buf;
if(cljs.core.truth_(and__10091__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__10091__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__10091__auto__ = self__.buf;
if(cljs.core.truth_(and__10091__auto__)){
return (self__.puts.length === (0));
} else {
return and__10091__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_45 = self__.takes.pop();
if((taker_45 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_45)){
var take_cb_46 = cljs.core.async.impl.protocols.commit.call(null,taker_45);
var val_47 = (cljs.core.truth_((function (){var and__10091__auto__ = self__.buf;
if(cljs.core.truth_(and__10091__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__10091__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_46,val_47,taker_45,this$__$1){
return (function (){
return take_cb_46.call(null,val_47);
});})(take_cb_46,val_47,taker_45,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",(298247964),null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",(575642138),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"puts","puts",(-1883877054),null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",(57041148),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"not-native","not-native",(-236392494),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",(720856168),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"add!","add!",(2046056845),null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__10116__auto__ = exh;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__49 = arguments.length;
switch (G__49) {
case (1):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__53 = null;
var G__53__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e50){var t = e50;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__53__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e51){var t = e51;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__53 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__53__1.call(this,buf__$1);
case 2:
return G__53__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53.cljs$core$IFn$_invoke$arity$1 = G__53__1;
G__53.cljs$core$IFn$_invoke$arity$2 = G__53__2;
return G__53;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = (3));


//# sourceURL=cljs/core/async/impl/channels.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9jb3JlL2FzeW5jL2ltcGwvY2hhbm5lbHMuanMiLCJzb3VyY2VzIjpbImNoYW5uZWxzLmNsanMiXSwibGluZUNvdW50Ijo1NDMsIm1hcHBpbmdzIjoiO0FBZUEsb0NBQUEscENBQU1BLGdGQUFLQztBQUFYLEFBQ0UsQUFBQSxHQUFBLFFBQUFDLGlDQUFBQyxzQ0FBQUMsNENBQUFDLGlEQUFBQywwREFBQUM7QUFBQTtBQUFBLEFBQUEsQUFBQTs7Ozs7Ozs7Ozs7OztBQUFBLEFBQUEsQ0FBQSxBQUFBLEFBQUFDLG1IQUFBLFdBQUFDLElBQUFDOztBQUFBLEFBQUEsSUFBQUQsVUFBQTs0RUFEU1IsNUVBQ1QsQUFBQSxZQUFBTywyRUFBQUU7OztBQUFBLENBQUEsQUFBQSxBQUFBRiwwR0FBQSxXQUFBQzs7QUFBQSxBQUFBLElBQUFBLFVBQUE7QUFBQSxBQUFBQzs7O0FBQUEsQ0FBQSxBQUFBLEFBQUFGLDRHQUFBLFdBQ1dROztBQURYLEFBQUEsWUFBQSxSQUNXQTtBQURYLEFBQ2NmOzs7QUFEZCxDQUFBLEFBQUFPLDJFQUFBO0FBQUEsQUFBQSxBQUFBOzs7QUFBQSxDQUFBLEFBQUFBLGlGQUFBOztBQUFBLENBQUEsQUFBQUEsb0ZBQUE7O0FBQUEsQ0FBQSxBQUFBQSx5RkFBQSxXQUFBRyxvQkFBQUMsc0JBQUFDO0FBQUEsQUFBQSxPQUFBQywyQkFBQUYsc0JBQUE7OztBQUFBOzs7NEpBRFNYLDVKQUNUYyx1RUFBQSw2RkFBQUw7NEVBRFNULDVFQUNULEFBQUEsWUFBQU8sd0VBQUFFOzs7QUFBQUY7OzRFQURTUCw1RUFDVCxZQUFBTyxvRUFBQTs7QUFHRixBQUFBOzs7Ozs7OztBQUFBO0FBQUEsQ0FBQSxnREFBQSxoREFBU1M7QUFBVCxBQUFBLEFBQUE7OztBQUFBLENBQUEsc0RBQUEsdERBQVNBOztBQUFULENBQUEseURBQUEsekRBQVNBOztBQUFULENBQUEsOERBQUEsV0FBQU4sb0JBQUFDLHNCQUFBQyxuSEFBU0k7QUFBVCxBQUFBLE9BQUFILDJCQUFBRixz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Ozs7O0FBQUEsQ0FBQSxtRUFBQSxuRUFBTTBCLDhFQUNGcEM7QUFESixBQUNTLHdEQUFBLGpEQUFDb0MsNkNBQUtwQzs7O0FBRGYsQ0FBQSxtRUFBQSxuRUFBTW9DLDhFQUVGcEMsSUFBSXFDO0FBRlIsQUFFZSw4REFBQSx2REFBQ0QsNkNBQUtwQyxJQUFJcUM7OztBQUZ6QixDQUFBLG1FQUFBLG5FQUFNRCw4RUFHRnBDLElBQUlxQyxNQUFNUjtBQUhkLEFBSUssWUFBQW5DLHlHQUFBLDZEQUFBLFFBQUEsOUhBQW9CLG1EQUFBLG5EQUFDNEMsNkRBQTBCLG1EQUFBLG5EQUFDQSw2REFDMUJ0QyxVQUNGLGlCQUFNRSxZQUFLLGtCQUFJbUMsT0FBTSxBQUFDQSxnQkFBTUosMENBQVdBO0FBQXZDLEFBQ0U7OzBCQUNJakM7QUFESixBQUVHLElBQUEsQUFDRSxPQUFDRSxvQkFBS0Y7YUFEUixRQUFBdUMsSkFFa0JUO0FBRmxCLEFBR0ksT0FBQ0YsK0NBQU81QixRQUFJNkIsSUFBSUM7OzBCQUNuQjlCLFFBQUl0QztBQU5SLEFBT0csSUFBQSxBQUNFLE9BQUN3QyxvQkFBS0YsUUFBSXRDO2FBRFosUUFBQThFLEpBRWtCVjtBQUZsQixBQUdJLE9BQUNGLCtDQUFPNUIsUUFBSTZCLElBQUlDOztpQkFKbkI5QixRQUFJdEM7OzswQkFBSnNDOzswQkFBQUEsUUFBSXRDOzs7Ozs7Ozs7OztBQWJuQyxDQUFBLDZEQUFBLDdEQUFNMEU7O0FBQU4iLCJuYW1lcyI6WyJjbGpzLmNvcmUuYXN5bmMuaW1wbC5jaGFubmVscy9ib3giLCJ2YWwiLCJqcy9jbGpzIiwianMvY2xqcy5jb3JlIiwianMvY2xqcy5jb3JlLmFzeW5jIiwianMvY2xqcy5jb3JlLmFzeW5jLmltcGwiLCJqcy9jbGpzLmNvcmUuYXN5bmMuaW1wbC5jaGFubmVscyIsImpzL2NsanMuY29yZS5hc3luYy5pbXBsLmNoYW5uZWxzLnRfY2xqcyRjb3JlJGFzeW5jJGltcGwkY2hhbm5lbHMzMSIsImNsanMuY29yZS5hc3luYy5pbXBsLmNoYW5uZWxzL3RfY2xqcyRjb3JlJGFzeW5jJGltcGwkY2hhbm5lbHMzMSIsIl8zMyIsIm1ldGEzMiIsInRoaXNfXzExMzg1X19hdXRvX18iLCJ3cml0ZXJfXzExMzg2X19hdXRvX18iLCJvcHRfXzExMzg3X19hdXRvX18iLCJjbGpzLmNvcmUvLXdyaXRlIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvLT50X2NsanMkY29yZSRhc3luYyRpbXBsJGNoYW5uZWxzMzEiLCJfIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvUHV0Qm94IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvLT5QdXRCb3giLCJoYW5kbGVyIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvcHV0LWFjdGl2ZT8iLCJib3giLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvYWN0aXZlPyIsImNsanMuY29yZS5hc3luYy5pbXBsLmNoYW5uZWxzL01BWF9ESVJUWSIsInhfXzExNTc4X19hdXRvX18iLCJtX18xMTU3OV9fYXV0b19fIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvYWJvcnQiLCJnb29nL3R5cGVPZiIsIm1fXzExNTc2X19hdXRvX18iLCJjbGpzLmNvcmUvbWlzc2luZy1wcm90b2NvbCIsImNsanMuY29yZS5hc3luYy5pbXBsLmNoYW5uZWxzL01NQyIsInRoaXMiLCJjbGpzLmNvcmUvUFJPVE9DT0xfU0VOVElORUwiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5jaGFubmVscy9NYW55VG9NYW55Q2hhbm5lbCIsImNsanMuY29yZS5hc3luYy5pbXBsLmNoYW5uZWxzLy0+TWFueVRvTWFueUNoYW5uZWwiLCJ0YWtlcyIsImRpcnR5LXRha2VzIiwicHV0cyIsImRpcnR5LXB1dHMiLCJidWYiLCJjbG9zZWQiLCJhZGQhIiwicHV0dGVyIiwicHV0LWhhbmRsZXIiLCJwdXQtY2IiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvY29tbWl0IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuZGlzcGF0Y2gvcnVuIiwiY2xqcy5jb3JlL2NvbnN0YW50bHkiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvY2xvc2UhIiwianMvRXJyb3IiLCJhbmRfXzEwMDkxX19hdXRvX18iLCJjbGpzLmNvcmUvbm90IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2Z1bGw/IiwiZG9uZT8iLCJjbGpzLmNvcmUvcmVkdWNlZD8iLCJjbGpzLmNvcmUvY291bnQiLCJ0YWtlciIsInRha2UtY2IiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvcmVtb3ZlISIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9ibG9ja2FibGU/IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL01BWC1RVUVVRS1TSVpFIiwicmV0dmFsIiwiaGFzLXZhbCIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9jbG9zZS1idWYhIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvZXgtaGFuZGxlciIsImV4IiwianMvY29uc29sZSIsImNsanMuY29yZS5hc3luYy5pbXBsLmNoYW5uZWxzL2hhbmRsZSIsImV4aCIsInQiLCJlbHNlIiwib3JfXzEwMTE2X19hdXRvX18iLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvYWRkISIsInZhcl9hcmdzIiwiR19fNDkiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5jaGFubmVscy9jaGFuIiwieGZvcm0iLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzL3JpbmctYnVmZmVyIiwiZTUwIiwiZTUxIl0sInNvdXJjZXNDb250ZW50IjpbIjs7ICAgQ29weXJpZ2h0IChjKSBSaWNoIEhpY2tleSBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuOzsgICBUaGUgdXNlIGFuZCBkaXN0cmlidXRpb24gdGVybXMgZm9yIHRoaXMgc29mdHdhcmUgYXJlIGNvdmVyZWQgYnkgdGhlXG47OyAgIEVjbGlwc2UgUHVibGljIExpY2Vuc2UgMS4wIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvZWNsaXBzZS0xLjAucGhwKVxuOzsgICB3aGljaCBjYW4gYmUgZm91bmQgaW4gdGhlIGZpbGUgZXBsLXYxMC5odG1sIGF0IHRoZSByb290IG9mIHRoaXMgZGlzdHJpYnV0aW9uLlxuOzsgICBCeSB1c2luZyB0aGlzIHNvZnR3YXJlIGluIGFueSBmYXNoaW9uLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5XG47OyAgIHRoZSB0ZXJtcyBvZiB0aGlzIGxpY2Vuc2UuXG47OyAgIFlvdSBtdXN0IG5vdCByZW1vdmUgdGhpcyBub3RpY2UsIG9yIGFueSBvdGhlciwgZnJvbSB0aGlzIHNvZnR3YXJlLlxuXG4obnMgY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHNcbiAgKDpyZXF1aXJlIFtjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMgOmFzIGltcGxdXG4gICAgICAgICAgICBbY2xqcy5jb3JlLmFzeW5jLmltcGwuZGlzcGF0Y2ggOmFzIGRpc3BhdGNoXVxuICAgICAgICAgICAgW2NsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMgOmFzIGJ1ZmZlcnNdKSlcblxuXG5cbihkZWZuIGJveCBbdmFsXVxuICAocmVpZnkgY2xqcy5jb3JlL0lEZXJlZlxuICAgICgtZGVyZWYgW19dIHZhbCkpKVxuXG4oZGVmdHlwZSBQdXRCb3ggW2hhbmRsZXIgdmFsXSlcblxuKGRlZm4gcHV0LWFjdGl2ZT8gW2JveF1cbiAgKGltcGwvYWN0aXZlPyAoLi1oYW5kbGVyIGJveCkpKVxuXG4oZGVmIF46Y29uc3QgTUFYX0RJUlRZIDY0KVxuXG4oZGVmcHJvdG9jb2wgTU1DXG4gIChhYm9ydCBbdGhpc10pKVxuXG4oZGVmdHlwZSBNYW55VG9NYW55Q2hhbm5lbCBbdGFrZXMgXjptdXRhYmxlIGRpcnR5LXRha2VzIHB1dHMgXjptdXRhYmxlIGRpcnR5LXB1dHMgXm5vdC1uYXRpdmUgYnVmIF46bXV0YWJsZSBjbG9zZWQgYWRkIV1cbiAgTU1DXG4gIChhYm9ydCBbdGhpc11cbiAgICAobG9vcCBbXVxuICAgICAgKGxldCBbcHV0dGVyICgucG9wIHB1dHMpXVxuICAgICAgICAod2hlbi1ub3QgKG5pbD8gcHV0dGVyKVxuICAgICAgICAgIChsZXQgW15ub3QtbmF0aXZlIHB1dC1oYW5kbGVyICguLWhhbmRsZXIgcHV0dGVyKVxuICAgICAgICAgICAgICAgIHZhbCAoLi12YWwgcHV0dGVyKV1cbiAgICAgICAgICAgIChpZiBeYm9vbGVhbiAoaW1wbC9hY3RpdmU/IHB1dC1oYW5kbGVyKVxuICAgICAgICAgICAgICAobGV0IFtwdXQtY2IgKGltcGwvY29tbWl0IHB1dC1oYW5kbGVyKV1cbiAgICAgICAgICAgICAgICAoZGlzcGF0Y2gvcnVuICMocHV0LWNiIHRydWUpKSlcbiAgICAgICAgICAgICAgKHJlY3VyKSkpKSkpXG4gICAgKC5jbGVhbnVwIHB1dHMgKGNvbnN0YW50bHkgZmFsc2UpKVxuICAgIChpbXBsL2Nsb3NlISB0aGlzKSlcbiAgaW1wbC9Xcml0ZVBvcnRcbiAgKHB1dCEgW3RoaXMgdmFsIF5ub3QtbmF0aXZlIGhhbmRsZXJdXG4gICAgKGFzc2VydCAobm90IChuaWw/IHZhbCkpIFwiQ2FuJ3QgcHV0IG5pbCBpbiBvbiBhIGNoYW5uZWxcIilcbiAgICA7OyBidWcgaW4gQ0xKUyBjb21waWxlciBib29sZWFuIGluZmVyZW5jZSAtIERhdmlkXG4gICAgKGxldCBbXmJvb2xlYW4gY2xvc2VkIGNsb3NlZF1cbiAgICAgIChpZiAob3IgY2xvc2VkIChub3QgXmJvb2xlYW4gKGltcGwvYWN0aXZlPyBoYW5kbGVyKSkpXG4gICAgICAgIChib3ggKG5vdCBjbG9zZWQpKVxuICAgICAgICAoaWYgKGFuZCBidWYgKG5vdCAoaW1wbC9mdWxsPyBidWYpKSlcbiAgICAgICAgICAoZG9cbiAgICAgICAgICAgIChpbXBsL2NvbW1pdCBoYW5kbGVyKVxuICAgICAgICAgICAgKGxldCBbZG9uZT8gKHJlZHVjZWQ/IChhZGQhIGJ1ZiB2YWwpKV1cbiAgICAgICAgICAgICAgKGxvb3AgW11cbiAgICAgICAgICAgICAgICAod2hlbiAoYW5kIChwb3M/ICguLWxlbmd0aCB0YWtlcykpIChwb3M/IChjb3VudCBidWYpKSlcbiAgICAgICAgICAgICAgICAgIChsZXQgW15ub3QtbmF0aXZlIHRha2VyICgucG9wIHRha2VzKV1cbiAgICAgICAgICAgICAgICAgICAgKGlmIF5ib29sZWFuIChpbXBsL2FjdGl2ZT8gdGFrZXIpXG4gICAgICAgICAgICAgICAgICAgICAgKGxldCBbdGFrZS1jYiAoaW1wbC9jb21taXQgdGFrZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsIChpbXBsL3JlbW92ZSEgYnVmKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIChkaXNwYXRjaC9ydW4gKGZuIFtdICh0YWtlLWNiIHZhbCkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAocmVjdXIpKSkpKVxuICAgICAgICAgICAgICAod2hlbiBkb25lPyAoYWJvcnQgdGhpcykpXG4gICAgICAgICAgICAgIChib3ggdHJ1ZSkpKVxuICAgICAgICAgIChsZXQgW3Rha2VyIChsb29wIFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAobGV0IFtebm90LW5hdGl2ZSB0YWtlciAoLnBvcCB0YWtlcyldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICh3aGVuIHRha2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIChpbXBsL2FjdGl2ZT8gdGFrZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlY3VyKSkpKSldXG4gICAgICAgICAgICAoaWYgdGFrZXJcbiAgICAgICAgICAgICAgKGxldCBbdGFrZS1jYiAoaW1wbC9jb21taXQgdGFrZXIpXVxuICAgICAgICAgICAgICAgIChpbXBsL2NvbW1pdCBoYW5kbGVyKVxuICAgICAgICAgICAgICAgIChkaXNwYXRjaC9ydW4gKGZuIFtdICh0YWtlLWNiIHZhbCkpKVxuICAgICAgICAgICAgICAgIChib3ggdHJ1ZSkpXG4gICAgICAgICAgICAgIChkb1xuICAgICAgICAgICAgICAgIChpZiAoPiBkaXJ0eS1wdXRzIE1BWF9ESVJUWSlcbiAgICAgICAgICAgICAgICAgIChkbyAoc2V0ISBkaXJ0eS1wdXRzIDApXG4gICAgICAgICAgICAgICAgICAgICAgKC5jbGVhbnVwIHB1dHMgcHV0LWFjdGl2ZT8pKVxuICAgICAgICAgICAgICAgICAgKHNldCEgZGlydHktcHV0cyAoaW5jIGRpcnR5LXB1dHMpKSlcbiAgICAgICAgICAgICAgICAod2hlbiAoaW1wbC9ibG9ja2FibGU/IGhhbmRsZXIpXG4gICAgICAgICAgICAgICAgICAoYXNzZXJ0ICg8ICguLWxlbmd0aCBwdXRzKSBpbXBsL01BWC1RVUVVRS1TSVpFKVxuICAgICAgICAgICAgICAgICAgICAoc3RyIFwiTm8gbW9yZSB0aGFuIFwiIGltcGwvTUFYLVFVRVVFLVNJWkVcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIiBwZW5kaW5nIHB1dHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiIENvbnNpZGVyIHVzaW5nIGEgd2luZG93ZWQgYnVmZmVyLlwiKSlcbiAgICAgICAgICAgICAgICAgICgudW5ib3VuZGVkLXVuc2hpZnQgcHV0cyAoUHV0Qm94LiBoYW5kbGVyIHZhbCkpKVxuICAgICAgICAgICAgICAgIG5pbCkpKSkpKSlcbiAgaW1wbC9SZWFkUG9ydFxuICAodGFrZSEgW3RoaXMgXm5vdC1uYXRpdmUgaGFuZGxlcl1cbiAgICAoaWYgKG5vdCBeYm9vbGVhbiAoaW1wbC9hY3RpdmU/IGhhbmRsZXIpKVxuICAgICAgbmlsXG4gICAgICAoaWYgKGFuZCAobm90IChuaWw/IGJ1ZikpIChwb3M/IChjb3VudCBidWYpKSlcbiAgICAgICAgKGxldCBbXyAoaW1wbC9jb21taXQgaGFuZGxlcilcbiAgICAgICAgICAgICAgcmV0dmFsIChib3ggKGltcGwvcmVtb3ZlISBidWYpKV1cbiAgICAgICAgICAobG9vcCBbXVxuICAgICAgICAgICAgKHdoZW4tbm90IChpbXBsL2Z1bGw/IGJ1ZilcbiAgICAgICAgICAgICAgKGxldCBbcHV0dGVyICgucG9wIHB1dHMpXVxuICAgICAgICAgICAgICAgICh3aGVuLW5vdCAobmlsPyBwdXR0ZXIpXG4gICAgICAgICAgICAgICAgICAobGV0IFtebm90LW5hdGl2ZSBwdXQtaGFuZGxlciAoLi1oYW5kbGVyIHB1dHRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCAoLi12YWwgcHV0dGVyKV1cbiAgICAgICAgICAgICAgICAgICAgKHdoZW4gXmJvb2xlYW4gKGltcGwvYWN0aXZlPyBwdXQtaGFuZGxlcilcbiAgICAgICAgICAgICAgICAgICAgICAobGV0IFtwdXQtY2IgKGltcGwvY29tbWl0IHB1dC1oYW5kbGVyKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIChpbXBsL2NvbW1pdCBoYW5kbGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgKGRpc3BhdGNoL3J1biAjKHB1dC1jYiB0cnVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICh3aGVuIChyZWR1Y2VkPyAoYWRkISBidWYgdmFsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGFib3J0IHRoaXMpKSkpKVxuICAgICAgICAgICAgICAgICAgKHJlY3VyKSkpKSlcbiAgICAgICAgICByZXR2YWwpXG4gICAgICAgIChsZXQgW3B1dHRlciAobG9vcCBbXVxuICAgICAgICAgICAgICAgICAgICAgICAobGV0IFtwdXR0ZXIgKC5wb3AgcHV0cyldXG4gICAgICAgICAgICAgICAgICAgICAgICAgKHdoZW4gcHV0dGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgXmJvb2xlYW4gKGltcGwvYWN0aXZlPyAoLi1oYW5kbGVyIHB1dHRlcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1dHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVjdXIpKSkpKV1cbiAgICAgICAgICAoaWYgcHV0dGVyXG4gICAgICAgICAgICAobGV0IFtwdXQtY2IgKGltcGwvY29tbWl0ICguLWhhbmRsZXIgcHV0dGVyKSldXG4gICAgICAgICAgICAgIChpbXBsL2NvbW1pdCBoYW5kbGVyKVxuICAgICAgICAgICAgICAoZGlzcGF0Y2gvcnVuICMocHV0LWNiIHRydWUpKVxuICAgICAgICAgICAgICAoYm94ICguLXZhbCBwdXR0ZXIpKSlcbiAgICAgICAgICAgIChpZiBjbG9zZWRcbiAgICAgICAgICAgICAgKGRvXG4gICAgICAgICAgICAgICAgKHdoZW4gYnVmIChhZGQhIGJ1ZikpXG4gICAgICAgICAgICAgICAgKGlmIChhbmQgKGltcGwvYWN0aXZlPyBoYW5kbGVyKSAoaW1wbC9jb21taXQgaGFuZGxlcikpXG4gICAgICAgICAgICAgICAgICAobGV0IFtoYXMtdmFsIChhbmQgYnVmIChwb3M/IChjb3VudCBidWYpKSldXG4gICAgICAgICAgICAgICAgICAgIChsZXQgW3ZhbCAod2hlbiBoYXMtdmFsIChpbXBsL3JlbW92ZSEgYnVmKSldXG4gICAgICAgICAgICAgICAgICAgICAgKGJveCB2YWwpKSlcbiAgICAgICAgICAgICAgICAgIG5pbCkpXG4gICAgICAgICAgICAgIChkb1xuICAgICAgICAgICAgICAgIChpZiAoPiBkaXJ0eS10YWtlcyBNQVhfRElSVFkpXG4gICAgICAgICAgICAgICAgICAoZG8gKHNldCEgZGlydHktdGFrZXMgMClcbiAgICAgICAgICAgICAgICAgICAgICAoLmNsZWFudXAgdGFrZXMgaW1wbC9hY3RpdmU/KSlcbiAgICAgICAgICAgICAgICAgIChzZXQhIGRpcnR5LXRha2VzIChpbmMgZGlydHktdGFrZXMpKSlcbiAgICAgICAgICAgICAgICAod2hlbiAoaW1wbC9ibG9ja2FibGU/IGhhbmRsZXIpXG4gICAgICAgICAgICAgICAgICAoYXNzZXJ0ICg8ICguLWxlbmd0aCB0YWtlcykgaW1wbC9NQVgtUVVFVUUtU0laRSlcbiAgICAgICAgICAgICAgICAgICAgKHN0ciBcIk5vIG1vcmUgdGhhbiBcIiBpbXBsL01BWC1RVUVVRS1TSVpFXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCIgcGVuZGluZyB0YWtlcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsLlwiKSlcbiAgICAgICAgICAgICAgICAgICgudW5ib3VuZGVkLXVuc2hpZnQgdGFrZXMgaGFuZGxlcikpXG4gICAgICAgICAgICAgICAgbmlsKSkpKSkpKVxuICBpbXBsL0NoYW5uZWxcbiAgKGNsb3NlZD8gW19dIGNsb3NlZClcbiAgKGNsb3NlISBbdGhpc11cbiAgICAoaWYgXmJvb2xlYW4gY2xvc2VkXG4gICAgICAgIG5pbFxuICAgICAgICAoZG8gKHNldCEgY2xvc2VkIHRydWUpXG4gICAgICAgICAgICAod2hlbiAoYW5kIGJ1ZiAoemVybz8gKC4tbGVuZ3RoIHB1dHMpKSlcbiAgICAgICAgICAgICAgICAgICAgKGFkZCEgYnVmKSlcbiAgICAgICAgICAgIChsb29wIFtdXG4gICAgICAgICAgICAgIChsZXQgW15ub3QtbmF0aXZlIHRha2VyICgucG9wIHRha2VzKV1cbiAgICAgICAgICAgICAgICAod2hlbi1ub3QgKG5pbD8gdGFrZXIpXG4gICAgICAgICAgICAgICAgICAod2hlbiBeYm9vbGVhbiAoaW1wbC9hY3RpdmU/IHRha2VyKVxuICAgICAgICAgICAgICAgICAgICAobGV0IFt0YWtlLWNiIChpbXBsL2NvbW1pdCB0YWtlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsICh3aGVuIChhbmQgYnVmIChwb3M/IChjb3VudCBidWYpKSkgKGltcGwvcmVtb3ZlISBidWYpKV1cbiAgICAgICAgICAgICAgICAgICAgICAoZGlzcGF0Y2gvcnVuIChmbiBbXSAodGFrZS1jYiB2YWwpKSkpKVxuICAgICAgICAgICAgICAgICAgKHJlY3VyKSkpKVxuICAgICAgICAgICAgKHdoZW4gYnVmIChpbXBsL2Nsb3NlLWJ1ZiEgYnVmKSlcbiAgICAgICAgICAgIG5pbCkpKSlcblxuKGRlZm4tIGV4LWhhbmRsZXIgW2V4XVxuICAoLmxvZyBqcy9jb25zb2xlIGV4KVxuICBuaWwpXG5cbihkZWZuLSBoYW5kbGUgW2J1ZiBleGggdF1cbiAgKGxldCBbZWxzZSAoKG9yIGV4aCBleC1oYW5kbGVyKSB0KV1cbiAgICAoaWYgKG5pbD8gZWxzZSlcbiAgICAgIGJ1ZlxuICAgICAgKGltcGwvYWRkISBidWYgZWxzZSkpKSlcblxuKGRlZm4gY2hhblxuICAoW2J1Zl0gKGNoYW4gYnVmIG5pbCkpXG4gIChbYnVmIHhmb3JtXSAoY2hhbiBidWYgeGZvcm0gbmlsKSlcbiAgKFtidWYgeGZvcm0gZXhoXVxuICAgICAoTWFueVRvTWFueUNoYW5uZWwuIChidWZmZXJzL3JpbmctYnVmZmVyIDMyKSAwIChidWZmZXJzL3JpbmctYnVmZmVyIDMyKVxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgYnVmIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGxldCBbYWRkISAoaWYgeGZvcm0gKHhmb3JtIGltcGwvYWRkISkgaW1wbC9hZGQhKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChmblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoW2J1Zl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFkZCEgYnVmKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2F0Y2ggOmRlZmF1bHQgdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChoYW5kbGUgYnVmIGV4aCB0KSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoW2J1ZiB2YWxdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhZGQhIGJ1ZiB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYXRjaCA6ZGVmYXVsdCB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGhhbmRsZSBidWYgZXhoIHQpKSkpKSkpKSlcbiJdfQ==