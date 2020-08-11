// Compiled by ClojureScript 1.10.597
goog.provide("reagent.impl.util");
reagent.impl.util.is_client = (((typeof window !== 'undefined')) && ((!((window.document == null)))));
reagent.impl.util._STAR_non_reactive_STAR_ = false;
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if((!((v == null)))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1))),cljs.core.subs.call(null,s,(1))].join('');
}
});
reagent.impl.util.dash_to_prop_name = (function reagent$impl$util$dash_to_prop_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__85 = clojure.string.split.call(null,name_str,/-/);
var seq__86 = cljs.core.seq.call(null,vec__85);
var first__87 = cljs.core.first.call(null,seq__86);
var seq__86__$1 = cljs.core.next.call(null,seq__86);
var start = first__87;
var parts = seq__86__$1;
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});
reagent.impl.util.dash_to_method_name = (function reagent$impl$util$dash_to_method_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var name_str__$1 = clojure.string.replace.call(null,name_str,/(unsafe|UNSAFE)[-_]/,"UNSAFE_");
var vec__88 = clojure.string.split.call(null,name_str__$1,/-/);
var seq__89 = cljs.core.seq.call(null,vec__88);
var first__90 = cljs.core.first.call(null,seq__89);
var seq__89__$1 = cljs.core.next.call(null,seq__89);
var start = first__90;
var parts = seq__89__$1;
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
});
reagent.impl.util.fun_name = (function reagent$impl$util$fun_name(f){
var n = (function (){var or__10116__auto__ = ((cljs.core.fn_QMARK_.call(null,f))?(function (){var or__10116__auto__ = f.displayName;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var n = f.name;
if(((typeof n === 'string') && (cljs.core.seq.call(null,n)))){
return n;
} else {
return null;
}
}
})():false);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var or__10116__auto____$1 = (((((!((f == null))))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false))?cljs.core.name.call(null,f):false);
if(cljs.core.truth_(or__10116__auto____$1)){
return or__10116__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(n)){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"$",".");
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.Fn}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
*/
reagent.impl.util.PartialFn = (function (pfn,f,args){
this.pfn = pfn;
this.f = f;
this.args = args;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.impl.util.PartialFn.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.impl.util.PartialFn.prototype.call = (function() {
var G__98 = null;
var G__98__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null);
});
var G__98__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a);
});
var G__98__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b);
});
var G__98__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c);
});
var G__98__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d);
});
var G__98__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e);
});
var G__98__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
});
var G__98__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
});
var G__98__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
});
var G__98__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
});
var G__98__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
});
var G__98__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
});
var G__98__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
});
var G__98__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
});
var G__98__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
});
var G__98__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
});
var G__98__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
});
var G__98__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
});
var G__98__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__98__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__98__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__98__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__98 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__98__1.call(this,self__);
case 2:
return G__98__2.call(this,self__,a);
case 3:
return G__98__3.call(this,self__,a,b);
case 4:
return G__98__4.call(this,self__,a,b,c);
case 5:
return G__98__5.call(this,self__,a,b,c,d);
case 6:
return G__98__6.call(this,self__,a,b,c,d,e);
case 7:
return G__98__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__98__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__98__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__98__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__98__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__98__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__98__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__98__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__98__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__98__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__98__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__98__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__98__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__98__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__98__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__98__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__98.cljs$core$IFn$_invoke$arity$1 = G__98__1;
G__98.cljs$core$IFn$_invoke$arity$2 = G__98__2;
G__98.cljs$core$IFn$_invoke$arity$3 = G__98__3;
G__98.cljs$core$IFn$_invoke$arity$4 = G__98__4;
G__98.cljs$core$IFn$_invoke$arity$5 = G__98__5;
G__98.cljs$core$IFn$_invoke$arity$6 = G__98__6;
G__98.cljs$core$IFn$_invoke$arity$7 = G__98__7;
G__98.cljs$core$IFn$_invoke$arity$8 = G__98__8;
G__98.cljs$core$IFn$_invoke$arity$9 = G__98__9;
G__98.cljs$core$IFn$_invoke$arity$10 = G__98__10;
G__98.cljs$core$IFn$_invoke$arity$11 = G__98__11;
G__98.cljs$core$IFn$_invoke$arity$12 = G__98__12;
G__98.cljs$core$IFn$_invoke$arity$13 = G__98__13;
G__98.cljs$core$IFn$_invoke$arity$14 = G__98__14;
G__98.cljs$core$IFn$_invoke$arity$15 = G__98__15;
G__98.cljs$core$IFn$_invoke$arity$16 = G__98__16;
G__98.cljs$core$IFn$_invoke$arity$17 = G__98__17;
G__98.cljs$core$IFn$_invoke$arity$18 = G__98__18;
G__98.cljs$core$IFn$_invoke$arity$19 = G__98__19;
G__98.cljs$core$IFn$_invoke$arity$20 = G__98__20;
G__98.cljs$core$IFn$_invoke$arity$21 = G__98__21;
G__98.cljs$core$IFn$_invoke$arity$22 = G__98__22;
return G__98;
})()
);

(reagent.impl.util.PartialFn.prototype.apply = (function (self__,args97){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args97)));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.pfn.call(null);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.impl.util.PartialFn)) && (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(reagent.impl.util.PartialFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pfn","pfn",(-513383568),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null);
}));

(reagent.impl.util.PartialFn.cljs$lang$type = true);

(reagent.impl.util.PartialFn.cljs$lang$ctorStr = "reagent.impl.util/PartialFn");

(reagent.impl.util.PartialFn.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"reagent.impl.util/PartialFn");
}));

/**
 * Positional factory function for reagent.impl.util/PartialFn.
 */
reagent.impl.util.__GT_PartialFn = (function reagent$impl$util$__GT_PartialFn(pfn,f,args){
return (new reagent.impl.util.PartialFn(pfn,f,args));
});

reagent.impl.util.make_partial_fn = (function reagent$impl$util$make_partial_fn(f,args){
return reagent.impl.util.__GT_PartialFn.call(null,cljs.core.apply.call(null,cljs.core.partial,f,args),f,args);
});
reagent.impl.util.named_QMARK_ = (function reagent$impl$util$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
reagent.impl.util.class_names = (function reagent$impl$util$class_names(var_args){
var G__103 = arguments.length;
switch (G__103) {
case (0):
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__12684__auto__ = [];
var len__12666__auto___105 = arguments.length;
var i__12667__auto___106 = (0);
while(true){
if((i__12667__auto___106 < len__12666__auto___105)){
args_arr__12684__auto__.push((arguments[i__12667__auto___106]));

var G__107 = (i__12667__auto___106 + (1));
i__12667__auto___106 = G__107;
continue;
} else {
}
break;
}

var argseq__12685__auto__ = (new cljs.core.IndexedSeq(args_arr__12684__auto__.slice((2)),(0),null));
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12685__auto__);

}
});

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
if(cljs.core.coll_QMARK_.call(null,class$)){
var classes = cljs.core.keep.call(null,(function (c){
if(cljs.core.truth_(c)){
if(reagent.impl.util.named_QMARK_.call(null,c)){
return cljs.core.name.call(null,c);
} else {
return c;
}
} else {
return null;
}
}),class$);
if(cljs.core.seq.call(null,classes)){
return clojure.string.join.call(null," ",classes);
} else {
return null;
}
} else {
if(reagent.impl.util.named_QMARK_.call(null,class$)){
return cljs.core.name.call(null,class$);
} else {
return class$;
}
}
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_(a)){
if(cljs.core.truth_(b)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.class_names.call(null,a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.class_names.call(null,b))].join('');
} else {
return reagent.impl.util.class_names.call(null,a);
}
} else {
return reagent.impl.util.class_names.call(null,b);
}
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rst){
return cljs.core.reduce.call(null,reagent.impl.util.class_names,reagent.impl.util.class_names.call(null,a,b),rst);
}));

/** @this {Function} */
(reagent.impl.util.class_names.cljs$lang$applyTo = (function (seq100){
var G__101 = cljs.core.first.call(null,seq100);
var seq100__$1 = cljs.core.next.call(null,seq100);
var G__102 = cljs.core.first.call(null,seq100__$1);
var seq100__$2 = cljs.core.next.call(null,seq100__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101,G__102,seq100__$2);
}));

(reagent.impl.util.class_names.cljs$lang$maxFixedArity = (2));

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
if(((cljs.core.contains_QMARK_.call(null,p1,new cljs.core.Keyword(null,"class","class",(-2030961996)))) || (cljs.core.contains_QMARK_.call(null,p2,new cljs.core.Keyword(null,"class","class",(-2030961996)))))){
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",(-2030961996)),reagent.impl.util.class_names.call(null,new cljs.core.Keyword(null,"class","class",(-2030961996)).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"class","class",(-2030961996)).cljs$core$IFn$_invoke$arity$1(p2)));
} else {
return p2;
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__9522__auto__ = new cljs.core.Keyword(null,"style","style",(-496642736)).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__9522__auto__)){
var s1 = temp__9522__auto__;
var temp__9522__auto____$1 = new cljs.core.Keyword(null,"style","style",(-496642736)).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__9522__auto____$1)){
var s2 = temp__9522__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",(-496642736)),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(var_args){
var G__112 = arguments.length;
switch (G__112) {
case (0):
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__12684__auto__ = [];
var len__12666__auto___114 = arguments.length;
var i__12667__auto___115 = (0);
while(true){
if((i__12667__auto___115 < len__12666__auto___114)){
args_arr__12684__auto__.push((arguments[i__12667__auto___115]));

var G__116 = (i__12667__auto___115 + (1));
i__12667__auto___115 = G__116;
continue;
} else {
}
break;
}

var argseq__12685__auto__ = (new cljs.core.IndexedSeq(args_arr__12684__auto__.slice((2)),(0),null));
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12685__auto__);

}
});

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (p){
var temp__9395__auto__ = new cljs.core.Keyword(null,"class","class",(-2030961996)).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(temp__9395__auto__)){
var c = temp__9395__auto__;
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"class","class",(-2030961996)),reagent.impl.util.class_names.call(null,c));
} else {
return p;
}
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
if((p1 == null)){
var temp__9395__auto__ = new cljs.core.Keyword(null,"class","class",(-2030961996)).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__9395__auto__)){
var c = temp__9395__auto__;
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",(-2030961996)),reagent.impl.util.class_names.call(null,c));
} else {
return p2;
}
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error(["Assert failed: ",["Property must be a map, not ",cljs.core.pr_str.call(null,p1)].join(''),"\n","(map? p1)"].join('')));
}

return cljs.core.merge.call(null,p1,reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,p2)));
}
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (p1,p2,ps){
return cljs.core.reduce.call(null,reagent.impl.util.merge_props,reagent.impl.util.merge_props.call(null,p1,p2),ps);
}));

/** @this {Function} */
(reagent.impl.util.merge_props.cljs$lang$applyTo = (function (seq109){
var G__110 = cljs.core.first.call(null,seq109);
var seq109__$1 = cljs.core.next.call(null,seq109);
var G__111 = cljs.core.first.call(null,seq109__$1);
var seq109__$2 = cljs.core.next.call(null,seq109__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__110,G__111,seq109__$2);
}));

(reagent.impl.util.merge_props.cljs$lang$maxFixedArity = (2));

reagent.impl.util._STAR_always_update_STAR_ = false;
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR__orig_val__117 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__118 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__118);

try{return comp.forceUpdate();
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__117);
}} else {
return comp.forceUpdate();
}
});
reagent.impl.util.shallow_obj_to_map = (function reagent$impl$util$shallow_obj_to_map(o){
var ks = cljs.core.js_keys.call(null,o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__119 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),goog.object.get(o,k));
var G__120 = (i + (1));
m = G__119;
i = G__120;
continue;
} else {
return m;
}
break;
}
});
reagent.impl.util.js_val_QMARK_ = (function reagent$impl$util$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
reagent.impl.util.try_get_react_key = (function reagent$impl$util$try_get_react_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",(-1516042587)));
}catch (e121){var e = e121;
return null;
}});
reagent.impl.util.get_react_key = (function reagent$impl$util$get_react_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return reagent.impl.util.try_get_react_key.call(null,x);
} else {
return null;
}
});
reagent.impl.util.react_key_from_vec = (function reagent$impl$util$react_key_from_vec(v){
var or__10116__auto__ = new cljs.core.Keyword(null,"key","key",(-1516042587)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var or__10116__auto____$1 = reagent.impl.util.get_react_key.call(null,cljs.core.nth.call(null,v,(1),null));
if(cljs.core.truth_(or__10116__auto____$1)){
return or__10116__auto____$1;
} else {
var G__122 = cljs.core.nth.call(null,v,(0),null);
var G__122__$1 = (((G__122 instanceof cljs.core.Keyword))?G__122.fqn:null);
switch (G__122__$1) {
case ">":
case "f>":
return reagent.impl.util.get_react_key.call(null,cljs.core.nth.call(null,v,(2),null));

break;
case "r>":
var G__123 = cljs.core.nth.call(null,v,(2),null);
if((G__123 == null)){
return null;
} else {
return G__123.key;
}

break;
default:
return null;

}
}
}
});
reagent.impl.util.str_coll = (function reagent$impl$util$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
var n = reagent.impl.util.fun_name.call(null,x);
var G__126 = n;
if(cljs.core._EQ_.call(null,"",G__126)){
return x;
} else {
if(cljs.core._EQ_.call(null,null,G__126)){
return x;
} else {
return cljs.core.symbol.call(null,n);

}
}
} else {
return x;
}
}),coll));

});
reagent.impl.util.hiccup_err = (function reagent$impl$util$hiccup_err(var_args){
var args__12669__auto__ = [];
var len__12666__auto___130 = arguments.length;
var i__12667__auto___131 = (0);
while(true){
if((i__12667__auto___131 < len__12666__auto___130)){
args__12669__auto__.push((arguments[i__12667__auto___131]));

var G__132 = (i__12667__auto___131 + (1));
i__12667__auto___131 = G__132;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((2) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((2)),(0),null)):null);
return reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12670__auto__);
});

(reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,comp_name,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,msg)),": ",reagent.impl.util.str_coll.call(null,v),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comp_name)].join('');
}));

(reagent.impl.util.hiccup_err.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.impl.util.hiccup_err.cljs$lang$applyTo = (function (seq127){
var G__128 = cljs.core.first.call(null,seq127);
var seq127__$1 = cljs.core.next.call(null,seq127);
var G__129 = cljs.core.first.call(null,seq127__$1);
var seq127__$2 = cljs.core.next.call(null,seq127__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__128,G__129,seq127__$2);
}));


//# sourceURL=reagent/impl/util.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9pbXBsL3V0aWwuanMiLCJzb3VyY2VzIjpbInV0aWwuY2xqcyJdLCJsaW5lQ291bnQiOjg0NCwibWFwcGluZ3MiOiI7QUFNQSxBQUFLQSw4QkFBVSxFQUFLLFFBQUFDLDZCQUNBLEdBQUEsb0JBQUEsbkJBQUksQUFBWUE7QUFFcEMsNkNBQUEsN0NBQXdCQztBQU14Qiw4QkFBQSw5QkFBTUMsb0VBQVdDO0FBQWpCLEFBQ0UsSUFBTUMsTUFBSSx5QkFBQSx6QkFBQ0M7QUFBWCxBQUNFLGtCQUFLQztBQUFMLEFBQ0UsSUFBTUMsSUFBRSx3QkFBQSxBQUFBQyx4QkFBQ0Msa0RBQUtMLEtBQUlFO0FBQWxCLEFBQ0UsR0FBQSxHQUFRLE1BQUEsTEFBTUM7QUFDWkE7O0FBQ0EsSUFBTUcsTUFBSSxBQUFDUCxZQUFFRztBQUFiLEFBQ0UsQUFBQ0ssK0JBQU1QLElBQUlRLGdCQUFNTixJQUFJSTs7QUFDckJBOzs7O0FBRVosb0NBQUEsaUZBQUEsWUFBQSxqSUFBS0c7QUFFTCwrQkFBQSwvQkFBTUMsc0VBQVlDO0FBQWxCLEFBQ0UsR0FBSSxnQ0FBQSwvQkFBRyxBQUFDQywwQkFBTUQ7QUFDWixPQUFDRSxvQ0FBa0JGOztBQUNuQixRQUFLLEFBQUNFLG9DQUFrQiwyQkFBQSxJQUFBLC9CQUFDQyx5QkFBS0gsWUFBUSwyQkFBQSwzQkFBQ0cseUJBQUtIOzs7QUFFaEQsc0NBQUEsdENBQU1JLG9GQUFtQkM7QUFBekIsQUFDRSxHQUFJLE9BQVNBO0FBQ1hBOztBQUNBLElBQU1PLFdBQVMsQUFBQ0MseUJBQUtSO0lBQXJCQyxVQUNzQix3Q0FBQSx4Q0FBQ1UsK0JBQWFKO0lBRHBDTCxVQUFBLEFBQUFDLHdCQUFBRjtJQUFBRyxZQUFBLEFBQUFDLDBCQUFBSDtJQUFBQSxjQUFBLEFBQUFJLHlCQUFBSjtZQUFBRSxSQUNPSztZQURQUCxSQUNlUTtBQURmLEFBRUUsb0JBQUksQUFBQ2pCLDRDQUFnQmdCO0FBQ25CRjs7QUFDQSxPQUFDSywwQkFBTUMsY0FBSUosTUFBTSxB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LENBQUEsdURBQUEsdkRBQU1KOztBQUFOO0FBQUEsQ0FBQSxpREFBQSxXQUFBQyw1REFBTUQ7QUFBTixBQUFBLElBQUFFLFNBQUEsMEJBQUFELDFCQSt5RmdEL0g7SUEveUZoRCtILGFBQUEseUJBQUFBLHpCQWd6RmtEOUg7SUFoekZsRGdJLFNBQUEsMEJBQUFGLDFCQSt5RmdEL0g7SUEveUZoRCtILGFBQUEseUJBQUFBLHpCQWd6RmtEOUg7QUFoekZsRCxBQUFBLElBQUFzRSxzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUF5RCxPQUFBQyxPQUFBRjs7O0FBQUEiLCJuYW1lcyI6WyJyZWFnZW50LmltcGwudXRpbC9pcy1jbGllbnQiLCJqcy93aW5kb3ciLCJyZWFnZW50LmltcGwudXRpbC8qbm9uLXJlYWN0aXZlKiIsInJlYWdlbnQuaW1wbC51dGlsL21lbW9pemUtMSIsImYiLCJtZW0iLCJjbGpzLmNvcmUvYXRvbSIsImFyZyIsInYiLCJjbGpzLmNvcmUvZGVyZWYiLCJjbGpzLmNvcmUvZ2V0IiwicmV0IiwiY2xqcy5jb3JlL3N3YXAhIiwiY2xqcy5jb3JlL2Fzc29jIiwicmVhZ2VudC5pbXBsLnV0aWwvZG9udC1jYW1lbC1jYXNlIiwicmVhZ2VudC5pbXBsLnV0aWwvY2FwaXRhbGl6ZSIsInMiLCJjbGpzLmNvcmUvY291bnQiLCJjbG9qdXJlLnN0cmluZy91cHBlci1jYXNlIiwiY2xqcy5jb3JlL3N1YnMiLCJyZWFnZW50LmltcGwudXRpbC9kYXNoLXRvLXByb3AtbmFtZSIsImRhc2hlZCIsInZlY19fODUiLCJzZXFfXzg2IiwiY2xqcy5jb3JlL3NlcSIsImZpcnN0X184NyIsImNsanMuY29yZS9maXJzdCIsImNsanMuY29yZS9uZXh0IiwibmFtZS1zdHIiLCJjbGpzLmNvcmUvbmFtZSIsInN0YXJ0IiwicGFydHMiLCJjbG9qdXJlLnN0cmluZy9zcGxpdCIsImNsanMuY29yZS9hcHBseSIsImNsanMuY29yZS9zdHIiLCJjbGpzLmNvcmUvbWFwIiwicmVhZ2VudC5pbXBsLnV0aWwvZGFzaC10by1tZXRob2QtbmFtZSIsInZlY19fODgiLCJzZXFfXzg5IiwiZmlyc3RfXzkwIiwiY2xvanVyZS5zdHJpbmcvcmVwbGFjZSIsInJlYWdlbnQuaW1wbC51dGlsL2Z1bi1uYW1lIiwibiIsIm9yX18xMDExNl9fYXV0b19fIiwiY2xqcy5jb3JlL2ZuPyIsImNsanMuY29yZS9QUk9UT0NPTF9TRU5USU5FTCIsIm0iLCJjbGpzLmNvcmUvbWV0YSIsImNsanMuY29yZS9tYXA/Iiwic2VsZl9fIiwiYXJnczk3IiwiY2xqcy5jb3JlL2FjbG9uZSIsInRoaXNfXzExMzg1X19hdXRvX18iLCJ3cml0ZXJfXzExMzg2X19hdXRvX18iLCJvcHRfXzExMzg3X19hdXRvX18iLCJjbGpzLmNvcmUvLXdyaXRlIiwicmVhZ2VudC5pbXBsLnV0aWwvUGFydGlhbEZuIiwicmVhZ2VudC5pbXBsLnV0aWwvLT5QYXJ0aWFsRm4iLCJwZm4iLCJhcmdzIiwiXyIsImEiLCJiIiwiYyIsImQiLCJlIiwiZyIsImgiLCJpIiwiaiIsImsiLCJsIiwibyIsInAiLCJxIiwiciIsInQiLCJyZXN0Iiwib3RoZXIiLCJjbGpzLmNvcmUvPSIsImNsanMuY29yZS9oYXNoIiwicmVhZ2VudC5pbXBsLnV0aWwvbWFrZS1wYXJ0aWFsLWZuIiwiY2xqcy5jb3JlL3BhcnRpYWwiLCJyZWFnZW50LmltcGwudXRpbC9uYW1lZD8iLCJ4IiwiY2xqcy5jb3JlL0tleXdvcmQiLCJjbGpzLmNvcmUvU3ltYm9sIiwidmFyX2FyZ3MiLCJHX18xMDMiLCJyZWFnZW50LmltcGwudXRpbC9jbGFzcy1uYW1lcyIsImFyZ3MtYXJyX18xMjY4NF9fYXV0b19fIiwibGVuX18xMjY2Nl9fYXV0b19fIiwiaV9fMTI2NjdfX2F1dG9fXyIsImFyZ3NlcV9fMTI2ODVfX2F1dG9fXyIsInNlcTEwMCIsIkdfXzEwMSIsIkdfXzEwMiIsInNlbGZfXzEyNjU4X19hdXRvX18iLCJjbGFzcyIsImNsanMuY29yZS9jb2xsPyIsImNsYXNzZXMiLCJjbGpzLmNvcmUva2VlcCIsImNsb2p1cmUuc3RyaW5nL2pvaW4iLCJyc3QiLCJjbGpzLmNvcmUvcmVkdWNlIiwicmVhZ2VudC5pbXBsLnV0aWwvbWVyZ2UtY2xhc3MiLCJwMSIsInAyIiwiY2xqcy5jb3JlL2NvbnRhaW5zPyIsInJlYWdlbnQuaW1wbC51dGlsL21lcmdlLXN0eWxlIiwic3R5bGUiLCJ0ZW1wX185NTIyX19hdXRvX18iLCJzMSIsInMyIiwiY2xqcy5jb3JlL21lcmdlIiwiR19fMTEyIiwicmVhZ2VudC5pbXBsLnV0aWwvbWVyZ2UtcHJvcHMiLCJzZXExMDkiLCJHX18xMTAiLCJHX18xMTEiLCJ0ZW1wX185Mzk1X19hdXRvX18iLCJqcy9FcnJvciIsImNsanMuY29yZS9wci1zdHIiLCJwcyIsInJlYWdlbnQuaW1wbC51dGlsLyphbHdheXMtdXBkYXRlKiIsInJlYWdlbnQuaW1wbC51dGlsL2ZvcmNlLXVwZGF0ZSIsImNvbXAiLCJkZWVwIiwiKmFsd2F5cy11cGRhdGUqLW9yaWctdmFsX18xMTciLCIqYWx3YXlzLXVwZGF0ZSotdGVtcC12YWxfXzExOCIsInJlYWdlbnQuaW1wbC51dGlsL3NoYWxsb3ctb2JqLXRvLW1hcCIsImtzIiwiY2xqcy5jb3JlL2pzLWtleXMiLCJsZW4iLCJjbGpzLmNvcmUva2V5d29yZCIsImdvb2cub2JqZWN0L2dldCIsInJlYWdlbnQuaW1wbC51dGlsL2pzLXZhbD8iLCJnb29nL3R5cGVPZiIsInJlYWdlbnQuaW1wbC51dGlsL3RyeS1nZXQtcmVhY3Qta2V5IiwiZTEyMSIsInJlYWdlbnQuaW1wbC51dGlsL2dldC1yZWFjdC1rZXkiLCJyZWFnZW50LmltcGwudXRpbC9yZWFjdC1rZXktZnJvbS12ZWMiLCJjbGpzLmNvcmUvbnRoIiwiR19fMTIyIiwiR19fMTIzIiwicmVhZ2VudC5pbXBsLnV0aWwvc3RyLWNvbGwiLCJjb2xsIiwiY2xvanVyZS53YWxrL3ByZXdhbGsiLCJHX18xMjYiLCJjbGpzLmNvcmUvc3ltYm9sIiwiYXJnc19fMTI2NjlfX2F1dG9fXyIsImFyZ3NlcV9fMTI2NzBfX2F1dG9fXyIsInJlYWdlbnQuaW1wbC51dGlsL2hpY2N1cC1lcnIiLCJzZXExMjciLCJHX18xMjgiLCJHX18xMjkiLCJjb21wLW5hbWUiLCJtc2ciLCJjbGpzLmNvcmUvSW5kZXhlZFNlcSJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgcmVhZ2VudC5pbXBsLnV0aWxcbiAgKDpyZXF1aXJlIFtjbG9qdXJlLnN0cmluZyA6YXMgc3RyaW5nXVxuICAgICAgICAgICAgW2Nsb2p1cmUud2FsayA6cmVmZXIgW3ByZXdhbGtdXVxuICAgICAgICAgICAgW2dvb2cub2JqZWN0IDphcyBnb2JqXVxuICAgICAgICAgICAgW3JlYWdlbnQuZGVidWcgOnJlZmVyLW1hY3JvcyBbZGV2P11dKSlcblxuKGRlZiBpcy1jbGllbnQgKGFuZCAoZXhpc3RzPyBqcy93aW5kb3cpXG4gICAgICAgICAgICAgICAgICAgICgtPiAoLi1kb2N1bWVudCBqcy93aW5kb3cpIG5pbD8gbm90KSkpXG5cbihkZWYgXjpkeW5hbWljIF5ib29sZWFuICpub24tcmVhY3RpdmUqIGZhbHNlKVxuXG47OzsgUHJvcHMgYWNjZXNzb3JzXG5cbjs7IE1pc2MgdXRpbGl0aWVzXG5cbihkZWZuIG1lbW9pemUtMSBbZl1cbiAgKGxldCBbbWVtIChhdG9tIHt9KV1cbiAgICAoZm4gW2FyZ11cbiAgICAgIChsZXQgW3YgKGdldCBAbWVtIGFyZyldXG4gICAgICAgIChpZi1ub3QgKG5pbD8gdilcbiAgICAgICAgICB2XG4gICAgICAgICAgKGxldCBbcmV0IChmIGFyZyldXG4gICAgICAgICAgICAoc3dhcCEgbWVtIGFzc29jIGFyZyByZXQpXG4gICAgICAgICAgICByZXQpKSkpKSlcblxuKGRlZiBkb250LWNhbWVsLWNhc2UgI3tcImFyaWFcIiBcImRhdGFcIn0pXG5cbihkZWZuIGNhcGl0YWxpemUgW3NdXG4gIChpZiAoPCAoY291bnQgcykgMilcbiAgICAoc3RyaW5nL3VwcGVyLWNhc2UgcylcbiAgICAoc3RyIChzdHJpbmcvdXBwZXItY2FzZSAoc3VicyBzIDAgMSkpIChzdWJzIHMgMSkpKSlcblxuKGRlZm4gZGFzaC10by1wcm9wLW5hbWUgW2Rhc2hlZF1cbiAgKGlmIChzdHJpbmc/IGRhc2hlZClcbiAgICBkYXNoZWRcbiAgICAobGV0IFtuYW1lLXN0ciAobmFtZSBkYXNoZWQpXG4gICAgICAgICAgW3N0YXJ0ICYgcGFydHNdIChzdHJpbmcvc3BsaXQgbmFtZS1zdHIgI1wiLVwiKV1cbiAgICAgIChpZiAoZG9udC1jYW1lbC1jYXNlIHN0YXJ0KVxuICAgICAgICBuYW1lLXN0clxuICAgICAgICAoYXBwbHkgc3RyIHN0YXJ0IChtYXAgY2FwaXRhbGl6ZSBwYXJ0cykpKSkpKVxuXG4oZGVmbiBkYXNoLXRvLW1ldGhvZC1uYW1lIFtkYXNoZWRdXG4gIChpZiAoc3RyaW5nPyBkYXNoZWQpXG4gICAgZGFzaGVkXG4gICAgKGxldCBbbmFtZS1zdHIgKG5hbWUgZGFzaGVkKVxuICAgICAgICAgIG5hbWUtc3RyIChzdHJpbmcvcmVwbGFjZSBuYW1lLXN0ciAjXCIodW5zYWZlfFVOU0FGRSlbLV9dXCIgXCJVTlNBRkVfXCIpXG4gICAgICAgICAgW3N0YXJ0ICYgcGFydHNdIChzdHJpbmcvc3BsaXQgbmFtZS1zdHIgI1wiLVwiKV1cbiAgICAgIChhcHBseSBzdHIgc3RhcnQgKG1hcCBjYXBpdGFsaXplIHBhcnRzKSkpKSlcblxuKGRlZm4gZnVuLW5hbWUgW2ZdXG4gIChsZXQgW24gKG9yIChhbmQgKGZuPyBmKVxuICAgICAgICAgICAgICAgICAgIChvciAoLi1kaXNwbGF5TmFtZSBmKVxuICAgICAgICAgICAgICAgICAgICAgICAobGV0IFtuICguLW5hbWUgZildXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGlmIChhbmQgKHN0cmluZz8gbikgKHNlcSBuKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG4pKSkpXG4gICAgICAgICAgICAgIChhbmQgKGltcGxlbWVudHM/IElOYW1lZCBmKVxuICAgICAgICAgICAgICAgICAgIChuYW1lIGYpKVxuICAgICAgICAgICAgICAobGV0IFttIChtZXRhIGYpXVxuICAgICAgICAgICAgICAgIChpZiAobWFwPyBtKVxuICAgICAgICAgICAgICAgICAgKDpuYW1lIG0pKSkpXVxuICAgIChpZiBuXG4gICAgICAoc3RyaW5nL3JlcGxhY2UgKHN0ciBuKSBcIiRcIiBcIi5cIikpKSlcblxuKGRlZnR5cGUgUGFydGlhbEZuIFtwZm4gZiBhcmdzXVxuICBGblxuICBJRm5cbiAgKC1pbnZva2UgW19dXG4gICAgKHBmbikpXG4gICgtaW52b2tlIFtfIGFdXG4gICAgKHBmbiBhKSlcbiAgKC1pbnZva2UgW18gYSBiXVxuICAgIChwZm4gYSBiKSlcbiAgKC1pbnZva2UgW18gYSBiIGNdXG4gICAgKHBmbiBhIGIgYykpXG4gICgtaW52b2tlIFtfIGEgYiBjIGRdXG4gICAgKHBmbiBhIGIgYyBkKSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlXVxuICAgIChwZm4gYSBiIGMgZCBlKSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlIGZdXG4gICAgKHBmbiBhIGIgYyBkIGUgZikpXG4gICgtaW52b2tlIFtfIGEgYiBjIGQgZSBmIGddXG4gICAgKHBmbiBhIGIgYyBkIGUgZiBnKSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlIGYgZyBoXVxuICAgIChwZm4gYSBiIGMgZCBlIGYgZyBoKSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlIGYgZyBoIGldXG4gICAgKHBmbiBhIGIgYyBkIGUgZiBnIGggaSkpXG4gICgtaW52b2tlIFtfIGEgYiBjIGQgZSBmIGcgaCBpIGpdXG4gICAgKHBmbiBhIGIgYyBkIGUgZiBnIGggaSBqKSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlIGYgZyBoIGkgaiBrXVxuICAgIChwZm4gYSBiIGMgZCBlIGYgZyBoIGkgaiBrKSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGxdXG4gICAgKHBmbiBhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCkpXG4gICgtaW52b2tlIFtfIGEgYiBjIGQgZSBmIGcgaCBpIGogayBsIG1dXG4gICAgKHBmbiBhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtKSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuXVxuICAgIChwZm4gYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuKSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG9dXG4gICAgKHBmbiBhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbykpXG4gICgtaW52b2tlIFtfIGEgYiBjIGQgZSBmIGcgaCBpIGogayBsIG0gbiBvIHBdXG4gICAgKHBmbiBhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwKSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG8gcCBxXVxuICAgIChwZm4gYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG8gcCBxKSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG8gcCBxIHJdXG4gICAgKHBmbiBhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwIHEgcikpXG4gICgtaW52b2tlIFtfIGEgYiBjIGQgZSBmIGcgaCBpIGogayBsIG0gbiBvIHAgcSByIHNdXG4gICAgKHBmbiBhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwIHEgciBzKSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG8gcCBxIHIgcyB0XVxuICAgIChwZm4gYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG8gcCBxIHIgcyB0KSlcbiAgKC1pbnZva2UgW18gYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG8gcCBxIHIgcyB0IHJlc3RdXG4gICAgKGFwcGx5IHBmbiBhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwIHEgciBzIHQgcmVzdCkpXG4gIElFcXVpdlxuICAoLWVxdWl2IFtfIF5jbGogb3RoZXJdXG4gICAgKGFuZCAoaW5zdGFuY2U/IFBhcnRpYWxGbiBvdGhlcilcbiAgICAgICAgICg9IGYgKC4tZiBvdGhlcikpXG4gICAgICAgICAoPSBhcmdzICguLWFyZ3Mgb3RoZXIpKSkpXG4gIElIYXNoXG4gICgtaGFzaCBbX10gKGhhc2ggW2YgYXJnc10pKSlcblxuKGRlZm4gbWFrZS1wYXJ0aWFsLWZuIFtmIGFyZ3NdXG4gICgtPlBhcnRpYWxGbiAoYXBwbHkgcGFydGlhbCBmIGFyZ3MpIGYgYXJncykpXG5cbihkZWZuIF5ib29sZWFuIG5hbWVkPyBbeF1cbiAgKG9yIChrZXl3b3JkPyB4KVxuICAgICAgKHN5bWJvbD8geCkpKVxuXG4oZGVmbiBjbGFzcy1uYW1lc1xuICAoW10pXG4gIChbY2xhc3NdXG4gICAoaWYgKGNvbGw/IGNsYXNzKVxuICAgICAobGV0IFtjbGFzc2VzIChrZWVwIChmbiBbY11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChpZiBjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpZiAobmFtZWQ/IGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5hbWUgYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MpXVxuICAgICAgIChpZiAoc2VxIGNsYXNzZXMpXG4gICAgICAgICAoc3RyaW5nL2pvaW4gXCIgXCIgY2xhc3NlcykpKVxuICAgICAoaWYgKG5hbWVkPyBjbGFzcylcbiAgICAgICAobmFtZSBjbGFzcylcbiAgICAgICBjbGFzcykpKVxuICAoW2EgYl1cbiAgIChpZiBhXG4gICAgIChpZiBiXG4gICAgICAgKHN0ciAoY2xhc3MtbmFtZXMgYSkgXCIgXCIgKGNsYXNzLW5hbWVzIGIpKVxuICAgICAgIChjbGFzcy1uYW1lcyBhKSlcbiAgICAgKGNsYXNzLW5hbWVzIGIpKSlcbiAgKFthIGIgJiByc3RdXG4gICAocmVkdWNlIGNsYXNzLW5hbWVzXG4gICAgICAgICAgIChjbGFzcy1uYW1lcyBhIGIpXG4gICAgICAgICAgIHJzdCkpKVxuXG4oZGVmbi0gbWVyZ2UtY2xhc3MgW3AxIHAyXVxuICAoaWYgKG9yIChjb250YWlucz8gcDEgOmNsYXNzKSAoY29udGFpbnM/IHAyIDpjbGFzcykpXG4gICAgKGFzc29jIHAyIDpjbGFzcyAoY2xhc3MtbmFtZXMgKDpjbGFzcyBwMSkgKDpjbGFzcyBwMikpKVxuICAgIHAyKSlcblxuKGRlZm4tIG1lcmdlLXN0eWxlIFtwMSBwMl1cbiAgKGxldCBbc3R5bGUgKHdoZW4tbGV0IFtzMSAoOnN0eWxlIHAxKV1cbiAgICAgICAgICAgICAgICAod2hlbi1sZXQgW3MyICg6c3R5bGUgcDIpXVxuICAgICAgICAgICAgICAgICAgKG1lcmdlIHMxIHMyKSkpXVxuICAgIChpZiAobmlsPyBzdHlsZSlcbiAgICAgIHAyXG4gICAgICAoYXNzb2MgcDIgOnN0eWxlIHN0eWxlKSkpKVxuXG4oZGVmbiBtZXJnZS1wcm9wc1xuICAoW10gbmlsKVxuICA7OyBOb3JtYWxpemUgOmNsYXNzIGV2ZW4gaWYgdGhlcmUgYXJlIG5vIG1lcmdpbmdcbiAgKFtwXVxuICAgKGlmLWxldCBbYyAoOmNsYXNzIHApXVxuICAgICAoYXNzb2MgcCA6Y2xhc3MgKGNsYXNzLW5hbWVzIGMpKVxuICAgICBwKSlcbiAgKFtwMSBwMl1cbiAgIChpZiAobmlsPyBwMSlcbiAgICAgKGlmLWxldCBbYyAoOmNsYXNzIHAyKV1cbiAgICAgICAoYXNzb2MgcDIgOmNsYXNzIChjbGFzcy1uYW1lcyBjKSlcbiAgICAgICBwMilcbiAgICAgKGRvXG4gICAgICAgKGFzc2VydCAobWFwPyBwMSlcbiAgICAgICAgICAgICAgIChzdHIgXCJQcm9wZXJ0eSBtdXN0IGJlIGEgbWFwLCBub3QgXCIgKHByLXN0ciBwMSkpKVxuICAgICAgIChtZXJnZSBwMSAobWVyZ2Utc3R5bGUgcDEgKG1lcmdlLWNsYXNzIHAxIHAyKSkpKSkpXG4gIChbcDEgcDIgJiBwc11cbiAgIChyZWR1Y2UgbWVyZ2UtcHJvcHMgKG1lcmdlLXByb3BzIHAxIHAyKSBwcykpKVxuXG47OyBUT0RPOiBEb2Vzbid0IGxvb2sgbGlrZSBjb3JyZWN0IHBsYWNlIGZvciB0aGlzXG4oZGVmIF46ZHluYW1pYyAqYWx3YXlzLXVwZGF0ZSogZmFsc2UpXG5cbihkZWZuIGZvcmNlLXVwZGF0ZSBbXmpzL1JlYWN0LkNvbXBvbmVudCBjb21wIGRlZXBdXG4gIChpZiBkZWVwXG4gICAgKGJpbmRpbmcgWyphbHdheXMtdXBkYXRlKiB0cnVlXVxuICAgICAgKC5mb3JjZVVwZGF0ZSBjb21wKSlcbiAgICAoLmZvcmNlVXBkYXRlIGNvbXApKSlcblxuKGRlZm4gc2hhbGxvdy1vYmotdG8tbWFwIFtvXVxuICAobGV0IFtrcyAoanMta2V5cyBvKVxuICAgICAgICBsZW4gKGFsZW5ndGgga3MpXVxuICAgIChsb29wIFttIHt9XG4gICAgICAgICAgIGkgMF1cbiAgICAgIChpZiAoPCBpIGxlbilcbiAgICAgICAgKGxldCBbayAoYWdldCBrcyBpKV1cbiAgICAgICAgICAocmVjdXIgKGFzc29jIG0gKGtleXdvcmQgaykgKGdvYmovZ2V0IG8gaykpXG4gICAgICAgICAgICAgICAgIChpbmMgaSkpKVxuICAgICAgICBtKSkpKVxuXG4oZGVmbiBeYm9vbGVhbiBqcy12YWw/IFt4XVxuICAobm90IChpZGVudGljYWw/IFwib2JqZWN0XCIgKGdvb2cvdHlwZU9mIHgpKSkpXG5cbjs7IFJlYWN0IGtleVxuXG4oZGVmbiB0cnktZ2V0LXJlYWN0LWtleSBbeF1cbiAgOzsgdHJ5IGNhdGNoIHRvIGF2b2lkIGNsb2p1cmVzY3JpcHQgcGVjdWxpYXJpdHkgd2l0aFxuICA7OyBzb3J0ZWQtbWFwcyB3aXRoIGtleXMgdGhhdCBhcmUgbnVtYmVyc1xuICAodHJ5IChnZXQgeCA6a2V5KVxuICAgICAgIChjYXRjaCA6ZGVmYXVsdCBlKSkpXG5cbihkZWZuIGdldC1yZWFjdC1rZXkgW3hdXG4gICh3aGVuIChtYXA/IHgpXG4gICAgKHRyeS1nZXQtcmVhY3Qta2V5IHgpKSlcblxuKGRlZm4gcmVhY3Qta2V5LWZyb20tdmVjIFt2XVxuICA7OyBNZXRhIGlzIGEgbWFwIGFsd2F5cyBhbmQgaXMgc2FmZSB0byByZWFkXG4gIChvciAoOmtleSAobWV0YSB2KSlcbiAgICAgIChnZXQtcmVhY3Qta2V5IChudGggdiAxIG5pbCkpXG4gICAgICA7OyA6PiBpcyBhIHNwZWNpYWwgY2FzZSBiZWNhdXNlIHByb3BlcnRpZXMgbWFwIGlzIHRoZSBmaXJzdFxuICAgICAgOzsgZWxlbWVudCBvZiB0aGUgdmVjdG9yLlxuICAgICAgOzsgVE9ETzogSW5zdGVhZCBvZiBjaGVja2luZyBhbGwgcGxhY2VzIGZvciB0aGUgcHJvcHMsIHNlbGVjdCBjb3JyZWN0XG4gICAgICA7OyBwcm9zcCB2YWx1ZSBiZWZvcmUgdGhpcyBpcyBjYWxsZWQuXG4gICAgICAoY2FzZSAobnRoIHYgMCBuaWwpXG4gICAgICAgICg6PiA6Zj4pIChnZXQtcmVhY3Qta2V5IChudGggdiAyIG5pbCkpXG4gICAgICAgIDpyPiAoc29tZS0+IChudGggdiAyIG5pbCkgKC4ta2V5KSlcbiAgICAgICAgbmlsKSkpXG5cbjs7IEVycm9yIG1lc3NhZ2VzXG5cbihkZWZuLSBzdHItY29sbCBbY29sbF1cbiAgKGlmIChkZXY/KVxuICAgIChzdHIgKHByZXdhbGsgKGZuIFt4XVxuICAgICAgICAgICAgICAgICAgICAoaWYgKGZuPyB4KVxuICAgICAgICAgICAgICAgICAgICAgIChsZXQgW24gKGZ1bi1uYW1lIHgpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKGNhc2UgblxuICAgICAgICAgICAgICAgICAgICAgICAgICAoXCJcIiBuaWwpIHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHN5bWJvbCBuKSkpXG4gICAgICAgICAgICAgICAgICAgICAgeCkpIGNvbGwpKVxuICAgIChzdHIgY29sbCkpKVxuXG4oZGVmbiBoaWNjdXAtZXJyIFt2IGNvbXAtbmFtZSAmIG1zZ11cbiAgKHN0ciAoYXBwbHkgc3RyIG1zZykgXCI6IFwiIChzdHItY29sbCB2KSBcIlxcblwiIGNvbXAtbmFtZSkpXG4iXX0=