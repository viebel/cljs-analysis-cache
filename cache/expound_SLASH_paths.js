// Compiled by ClojureScript 1.10.339
goog.provide("expound.paths");
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound","path","expound/path",(-1026376555)),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",(1777854658),null),cljs.core.sequential_QMARK_);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
expound.paths.KeyPathSegment = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8638__auto__,k__8639__auto__){
var self__ = this;
var this__8638__auto____$1 = this;
return this__8638__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8639__auto__,null);
});

expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8640__auto__,k23,else__8641__auto__){
var self__ = this;
var this__8640__auto____$1 = this;
var G__27 = k23;
var G__27__$1 = (((G__27 instanceof cljs.core.Keyword))?G__27.fqn:null);
switch (G__27__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23,else__8641__auto__);

}
});

expound.paths.KeyPathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8652__auto__,writer__8653__auto__,opts__8654__auto__){
var self__ = this;
var this__8652__auto____$1 = this;
var pr_pair__8655__auto__ = ((function (this__8652__auto____$1){
return (function (keyval__8656__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8653__auto__,cljs.core.pr_writer,""," ","",opts__8654__auto__,keyval__8656__auto__);
});})(this__8652__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8653__auto__,pr_pair__8655__auto__,"#expound.paths.KeyPathSegment{",", ","}",opts__8654__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",(-1516042587)),self__.key],null))], null),self__.__extmap));
});

expound.paths.KeyPathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22){
var self__ = this;
var G__22__$1 = this;
return (new cljs.core.RecordIter((0),G__22__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",(-1516042587))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

expound.paths.KeyPathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8636__auto__){
var self__ = this;
var this__8636__auto____$1 = this;
return self__.__meta;
});

expound.paths.KeyPathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8633__auto__){
var self__ = this;
var this__8633__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,self__.__extmap,self__.__hash));
});

expound.paths.KeyPathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8642__auto__){
var self__ = this;
var this__8642__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

expound.paths.KeyPathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8634__auto__){
var self__ = this;
var this__8634__auto____$1 = this;
var h__8443__auto__ = self__.__hash;
if(!((h__8443__auto__ == null))){
return h__8443__auto__;
} else {
var h__8443__auto____$1 = ((function (h__8443__auto__,this__8634__auto____$1){
return (function (coll__8635__auto__){
return ((233526946) ^ cljs.core.hash_unordered_coll.call(null,coll__8635__auto__));
});})(h__8443__auto__,this__8634__auto____$1))
.call(null,this__8634__auto____$1);
self__.__hash = h__8443__auto____$1;

return h__8443__auto____$1;
}
});

expound.paths.KeyPathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24,other25){
var self__ = this;
var this24__$1 = this;
return ((!((other25 == null))) && ((this24__$1.constructor === other25.constructor)) && (cljs.core._EQ_.call(null,this24__$1.key,other25.key)) && (cljs.core._EQ_.call(null,this24__$1.__extmap,other25.__extmap)));
});

expound.paths.KeyPathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8647__auto__,k__8648__auto__){
var self__ = this;
var this__8647__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",(-1516042587)),null], null), null),k__8648__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8647__auto____$1),self__.__meta),k__8648__auto__);
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8648__auto__)),null));
}
});

expound.paths.KeyPathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8645__auto__,k__8646__auto__,G__22){
var self__ = this;
var this__8645__auto____$1 = this;
var pred__28 = cljs.core.keyword_identical_QMARK_;
var expr__29 = k__8646__auto__;
if(cljs.core.truth_(pred__28.call(null,new cljs.core.Keyword(null,"key","key",(-1516042587)),expr__29))){
return (new expound.paths.KeyPathSegment(G__22,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8646__auto__,G__22),null));
}
});

expound.paths.KeyPathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8650__auto__){
var self__ = this;
var this__8650__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",(-1516042587)),self__.key,null))], null),self__.__extmap));
});

expound.paths.KeyPathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8637__auto__,G__22){
var self__ = this;
var this__8637__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,G__22,self__.__extmap,self__.__hash));
});

expound.paths.KeyPathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8643__auto__,entry__8644__auto__){
var self__ = this;
var this__8643__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8644__auto__)){
return this__8643__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8644__auto__,(0)),cljs.core._nth.call(null,entry__8644__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8643__auto____$1,entry__8644__auto__);
}
});

expound.paths.KeyPathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null)], null);
});

expound.paths.KeyPathSegment.cljs$lang$type = true;

expound.paths.KeyPathSegment.cljs$lang$ctorPrSeq = (function (this__8661__auto__){
return (new cljs.core.List(null,"expound.paths/KeyPathSegment",null,(1),null));
});

expound.paths.KeyPathSegment.cljs$lang$ctorPrWriter = (function (this__8661__auto__,writer__8662__auto__){
return cljs.core._write.call(null,writer__8662__auto__,"expound.paths/KeyPathSegment");
});

/**
 * Positional factory function for expound.paths/KeyPathSegment.
 */
expound.paths.__GT_KeyPathSegment = (function expound$paths$__GT_KeyPathSegment(key){
return (new expound.paths.KeyPathSegment(key,null,null,null));
});

/**
 * Factory function for expound.paths/KeyPathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyPathSegment = (function expound$paths$map__GT_KeyPathSegment(G__26){
var extmap__8660__auto__ = (function (){var G__31 = cljs.core.dissoc.call(null,G__26,new cljs.core.Keyword(null,"key","key",(-1516042587)));
if(cljs.core.record_QMARK_.call(null,G__26)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31);
} else {
return G__31;
}
})();
return (new expound.paths.KeyPathSegment(new cljs.core.Keyword(null,"key","key",(-1516042587)).cljs$core$IFn$_invoke$arity$1(G__26),null,cljs.core.not_empty.call(null,extmap__8660__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
expound.paths.KeyValuePathSegment = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8638__auto__,k__8639__auto__){
var self__ = this;
var this__8638__auto____$1 = this;
return this__8638__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8639__auto__,null);
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8640__auto__,k34,else__8641__auto__){
var self__ = this;
var this__8640__auto____$1 = this;
var G__38 = k34;
var G__38__$1 = (((G__38 instanceof cljs.core.Keyword))?G__38.fqn:null);
switch (G__38__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34,else__8641__auto__);

}
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8652__auto__,writer__8653__auto__,opts__8654__auto__){
var self__ = this;
var this__8652__auto____$1 = this;
var pr_pair__8655__auto__ = ((function (this__8652__auto____$1){
return (function (keyval__8656__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8653__auto__,cljs.core.pr_writer,""," ","",opts__8654__auto__,keyval__8656__auto__);
});})(this__8652__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8653__auto__,pr_pair__8655__auto__,"#expound.paths.KeyValuePathSegment{",", ","}",opts__8654__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",(1053688473)),self__.idx],null))], null),self__.__extmap));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33){
var self__ = this;
var G__33__$1 = this;
return (new cljs.core.RecordIter((0),G__33__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",(1053688473))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8636__auto__){
var self__ = this;
var this__8636__auto____$1 = this;
return self__.__meta;
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8633__auto__){
var self__ = this;
var this__8633__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8642__auto__){
var self__ = this;
var this__8642__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8634__auto__){
var self__ = this;
var this__8634__auto____$1 = this;
var h__8443__auto__ = self__.__hash;
if(!((h__8443__auto__ == null))){
return h__8443__auto__;
} else {
var h__8443__auto____$1 = ((function (h__8443__auto__,this__8634__auto____$1){
return (function (coll__8635__auto__){
return ((1269438429) ^ cljs.core.hash_unordered_coll.call(null,coll__8635__auto__));
});})(h__8443__auto__,this__8634__auto____$1))
.call(null,this__8634__auto____$1);
self__.__hash = h__8443__auto____$1;

return h__8443__auto____$1;
}
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35,other36){
var self__ = this;
var this35__$1 = this;
return ((!((other36 == null))) && ((this35__$1.constructor === other36.constructor)) && (cljs.core._EQ_.call(null,this35__$1.idx,other36.idx)) && (cljs.core._EQ_.call(null,this35__$1.__extmap,other36.__extmap)));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8647__auto__,k__8648__auto__){
var self__ = this;
var this__8647__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",(1053688473)),null], null), null),k__8648__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8647__auto____$1),self__.__meta),k__8648__auto__);
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8648__auto__)),null));
}
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8645__auto__,k__8646__auto__,G__33){
var self__ = this;
var this__8645__auto____$1 = this;
var pred__39 = cljs.core.keyword_identical_QMARK_;
var expr__40 = k__8646__auto__;
if(cljs.core.truth_(pred__39.call(null,new cljs.core.Keyword(null,"idx","idx",(1053688473)),expr__40))){
return (new expound.paths.KeyValuePathSegment(G__33,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8646__auto__,G__33),null));
}
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8650__auto__){
var self__ = this;
var this__8650__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",(1053688473)),self__.idx,null))], null),self__.__extmap));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8637__auto__,G__33){
var self__ = this;
var this__8637__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,G__33,self__.__extmap,self__.__hash));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8643__auto__,entry__8644__auto__){
var self__ = this;
var this__8643__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8644__auto__)){
return this__8643__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8644__auto__,(0)),cljs.core._nth.call(null,entry__8644__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8643__auto____$1,entry__8644__auto__);
}
});

expound.paths.KeyValuePathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",(-1600747296),null)], null);
});

expound.paths.KeyValuePathSegment.cljs$lang$type = true;

expound.paths.KeyValuePathSegment.cljs$lang$ctorPrSeq = (function (this__8661__auto__){
return (new cljs.core.List(null,"expound.paths/KeyValuePathSegment",null,(1),null));
});

expound.paths.KeyValuePathSegment.cljs$lang$ctorPrWriter = (function (this__8661__auto__,writer__8662__auto__){
return cljs.core._write.call(null,writer__8662__auto__,"expound.paths/KeyValuePathSegment");
});

/**
 * Positional factory function for expound.paths/KeyValuePathSegment.
 */
expound.paths.__GT_KeyValuePathSegment = (function expound$paths$__GT_KeyValuePathSegment(idx){
return (new expound.paths.KeyValuePathSegment(idx,null,null,null));
});

/**
 * Factory function for expound.paths/KeyValuePathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyValuePathSegment = (function expound$paths$map__GT_KeyValuePathSegment(G__37){
var extmap__8660__auto__ = (function (){var G__42 = cljs.core.dissoc.call(null,G__37,new cljs.core.Keyword(null,"idx","idx",(1053688473)));
if(cljs.core.record_QMARK_.call(null,G__37)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__42);
} else {
return G__42;
}
})();
return (new expound.paths.KeyValuePathSegment(new cljs.core.Keyword(null,"idx","idx",(1053688473)).cljs$core$IFn$_invoke$arity$1(G__37),null,cljs.core.not_empty.call(null,extmap__8660__auto__),null));
});

expound.paths.kps_QMARK_ = (function expound$paths$kps_QMARK_(x){
return (x instanceof expound.paths.KeyPathSegment);
});
expound.paths.kvps_QMARK_ = (function expound$paths$kvps_QMARK_(x){
return (x instanceof expound.paths.KeyValuePathSegment);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.paths","prefix-path?","expound.paths/prefix-path?",(-1893707133),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",(-1289128341),null),new cljs.core.Keyword(null,"args","args",(1315556576)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"partial-path","partial-path",(213994140)),new cljs.core.Keyword("expound","path","expound/path",(-1026376555)),new cljs.core.Keyword(null,"partial-path","partial-path",(213994140)),new cljs.core.Keyword("expound","path","expound/path",(-1026376555))),new cljs.core.Keyword(null,"ret","ret",(-468222814)),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"partial-path","partial-path",(213994140)),new cljs.core.Keyword("expound","path","expound/path",(-1026376555)),new cljs.core.Keyword(null,"partial-path","partial-path",(213994140)),new cljs.core.Keyword("expound","path","expound/path",(-1026376555))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"partial-path","partial-path",(213994140)),new cljs.core.Keyword(null,"partial-path","partial-path",(213994140))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound","path","expound/path",(-1026376555)),new cljs.core.Keyword("expound","path","expound/path",(-1026376555))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound","path","expound/path",(-1026376555)),new cljs.core.Keyword("expound","path","expound/path",(-1026376555))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"partial-path","partial-path",(213994140)),new cljs.core.Keyword("expound","path","expound/path",(-1026376555)),new cljs.core.Keyword(null,"partial-path","partial-path",(213994140)),new cljs.core.Keyword("expound","path","expound/path",(-1026376555))),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null),null,null,null));
/**
 * True if partial-path is a prefix of full-path.
 */
expound.paths.prefix_path_QMARK_ = (function expound$paths$prefix_path_QMARK_(partial_path,full_path){
return (((cljs.core.count.call(null,partial_path) < cljs.core.count.call(null,full_path))) && (cljs.core._EQ_.call(null,partial_path,cljs.core.subvec.call(null,full_path,(0),cljs.core.count.call(null,partial_path)))));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.paths","kps-path?","expound.paths/kps-path?",(581831806),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",(-1289128341),null),new cljs.core.Keyword(null,"args","args",(1315556576)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)),new cljs.core.Keyword(null,"ret","ret",(-468222814)),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",(2099068185))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null),null,null,null));
/**
 * True if path points to a key
 */
expound.paths.kps_path_QMARK_ = (function expound$paths$kps_path_QMARK_(x){
return cljs.core.boolean$.call(null,(function (){var and__8052__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__8052__auto__){
return expound.paths.kps_QMARK_.call(null,cljs.core.last.call(null,x));
} else {
return and__8052__auto__;
}
})());
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.paths","kvps-path?","expound.paths/kvps-path?",(991506987),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",(-1289128341),null),new cljs.core.Keyword(null,"args","args",(1315556576)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)),new cljs.core.Keyword(null,"ret","ret",(-468222814)),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",(2099068185))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",(1400713761),null),null,null,null));
/**
 * True if path points to a key/value pair
 */
expound.paths.kvps_path_QMARK_ = (function expound$paths$kvps_path_QMARK_(x){
return cljs.core.boolean$.call(null,(function (){var and__8052__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__8052__auto__){
return cljs.core.some.call(null,expound.paths.kvps_QMARK_,x);
} else {
return and__8052__auto__;
}
})());
});
expound.paths.fn_equal = (function expound$paths$fn_equal(x,y){
return ((cljs.core.fn_QMARK_.call(null,x)) && (cljs.core.fn_QMARK_.call(null,y)) && (cljs.core._EQ_.call(null,cljs.core.pr_str.call(null,x),cljs.core.pr_str.call(null,y))));
});
expound.paths.both_nan_QMARK_ = (function expound$paths$both_nan_QMARK_(x,y){
var and__8052__auto__ = expound.util.nan_QMARK_.call(null,x);
if(cljs.core.truth_(and__8052__auto__)){
return expound.util.nan_QMARK_.call(null,y);
} else {
return and__8052__auto__;
}
});
expound.paths.equalish_QMARK_ = (function expound$paths$equalish_QMARK_(x,y){
var or__8070__auto__ = cljs.core._EQ_.call(null,x,y);
if(or__8070__auto__){
return or__8070__auto__;
} else {
var or__8070__auto____$1 = expound.paths.fn_equal.call(null,x,y);
if(cljs.core.truth_(or__8070__auto____$1)){
return or__8070__auto____$1;
} else {
return expound.paths.both_nan_QMARK_.call(null,x,y);
}
}
});
expound.paths.in_with_kps_maps_as_seqs = (function expound$paths$in_with_kps_maps_as_seqs(form,val,in$,in_SINGLEQUOTE_){
var vec__44 = in$;
var seq__45 = cljs.core.seq.call(null,vec__44);
var first__46 = cljs.core.first.call(null,seq__45);
var seq__45__$1 = cljs.core.next.call(null,seq__45);
var k = first__46;
var rst = seq__45__$1;
var vec__47 = rst;
var seq__48 = cljs.core.seq.call(null,vec__47);
var first__49 = cljs.core.first.call(null,seq__48);
var seq__48__$1 = cljs.core.next.call(null,seq__48);
var idx = first__49;
var rst2 = seq__48__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795)),form)){
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795));
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.empty_QMARK_.call(null,in$);
if(and__8052__auto__){
return expound.paths.equalish_QMARK_.call(null,form,val);
} else {
return and__8052__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (cljs.core.nat_int_QMARK_.call(null,k)) && ((k < cljs.core.count.call(null,cljs.core.seq.call(null,form)))))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment.call(null,k)));
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (cljs.core.nat_int_QMARK_.call(null,k)) && (cljs.core.int_QMARK_.call(null,idx)) && ((k < cljs.core.count.call(null,cljs.core.seq.call(null,form)))) && ((idx < cljs.core.count.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k)))))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k),idx),val,rst2,cljs.core.conj.call(null,in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment.call(null,k),idx));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795));

}
}
}
}
});
expound.paths.in_with_kps_fuzzy_match_for_regex_failures = (function expound$paths$in_with_kps_fuzzy_match_for_regex_failures(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795)))){
return form;
} else {
var vec__50 = in$;
var seq__51 = cljs.core.seq.call(null,vec__50);
var first__52 = cljs.core.first.call(null,seq__51);
var seq__51__$1 = cljs.core.next.call(null,seq__51);
var k = first__52;
var rst = seq__51__$1;
if(((cljs.core.empty_QMARK_.call(null,in$)) && (cljs.core.seqable_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,val,cljs.core.List.EMPTY)))){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.empty_QMARK_.call(null,in$)) && (((cljs.core.seq_QMARK_.call(null,val)) && (cljs.core._EQ_.call(null,form,cljs.core.first.call(null,val))))))){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.nat_int_QMARK_.call(null,k)) && (cljs.core.seqable_QMARK_.call(null,form)))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795))),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795));

}
}
}
}
});
expound.paths.in_with_kps_ints_are_keys = (function expound$paths$in_with_kps_ints_are_keys(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795)))){
return form;
} else {
var vec__53 = in$;
var seq__54 = cljs.core.seq.call(null,vec__53);
var first__55 = cljs.core.first.call(null,seq__54);
var seq__54__$1 = cljs.core.next.call(null,seq__54);
var k = first__55;
var rst = seq__54__$1;
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.empty_QMARK_.call(null,in$);
if(and__8052__auto__){
return expound.paths.equalish_QMARK_.call(null,form,val);
} else {
return and__8052__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(cljs.core.associative_QMARK_.call(null,form)){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.get.call(null,form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795))),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.seqable_QMARK_.call(null,form)))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795))),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795));

}
}
}
}
});
expound.paths.in_with_kps_ints_are_key_value_indicators = (function expound$paths$in_with_kps_ints_are_key_value_indicators(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795)))){
return form;
} else {
var vec__56 = in$;
var seq__57 = cljs.core.seq.call(null,vec__56);
var first__58 = cljs.core.first.call(null,seq__57);
var seq__57__$1 = cljs.core.next.call(null,seq__57);
var k = first__58;
var rst = seq__57__$1;
var vec__59 = rst;
var seq__60 = cljs.core.seq.call(null,vec__59);
var first__61 = cljs.core.first.call(null,seq__60);
var seq__60__$1 = cljs.core.next.call(null,seq__60);
var idx = first__61;
var rst2 = seq__60__$1;
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.empty_QMARK_.call(null,in$);
if(and__8052__auto__){
return expound.paths.equalish_QMARK_.call(null,form,val);
} else {
return and__8052__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,(0),idx)))){
return expound.paths.in_with_kps_STAR_.call(null,k,val,rst2,cljs.core.conj.call(null,in_SINGLEQUOTE_,expound.paths.__GT_KeyPathSegment.call(null,k)));
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,(1),idx)))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.get.call(null,form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795))),val,rst2,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795));

}
}
}
}
});
expound.paths.in_with_kps_STAR_ = (function expound$paths$in_with_kps_STAR_(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core.fn_QMARK_.call(null,form)){
return in_SINGLEQUOTE_;
} else {
var br1 = expound.paths.in_with_kps_ints_are_key_value_indicators.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795)),br1)){
return br1;
} else {
var br2 = expound.paths.in_with_kps_maps_as_seqs.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795)),br2)){
return br2;
} else {
var br3 = expound.paths.in_with_kps_ints_are_keys.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795)),br3)){
return br3;
} else {
var br4 = expound.paths.in_with_kps_fuzzy_match_for_regex_failures.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795)),br4)){
return br4;
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795));
}
}
}
}
}
});
expound.paths.in_with_kps = (function expound$paths$in_with_kps(form,val,in$,in_SINGLEQUOTE_){
var res = expound.paths.in_with_kps_STAR_.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",(-195785795)),res)){
throw cljs.core.ex_info.call(null,"Cannot convert path. This can be caused by using conformers to transform values, which is not supported in Expound",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form","form",(-1624062471)),form,new cljs.core.Keyword(null,"val","val",(128701612)),val,new cljs.core.Keyword(null,"in","in",(-1531184865)),in$,new cljs.core.Keyword(null,"in'","in'",(1281266374)),in_SINGLEQUOTE_], null));
} else {
return res;
}
});
expound.paths.compare_path_segment = (function expound$paths$compare_path_segment(x,y){
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.int_QMARK_.call(null,x);
if(and__8052__auto__){
return expound.paths.kvps_QMARK_.call(null,y);
} else {
return and__8052__auto__;
}
})())){
return cljs.core.compare.call(null,x,new cljs.core.Keyword(null,"idx","idx",(1053688473)).cljs$core$IFn$_invoke$arity$1(y));
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = expound.paths.kvps_QMARK_.call(null,x);
if(cljs.core.truth_(and__8052__auto__)){
return cljs.core.int_QMARK_.call(null,y);
} else {
return and__8052__auto__;
}
})())){
return cljs.core.compare.call(null,new cljs.core.Keyword(null,"idx","idx",(1053688473)).cljs$core$IFn$_invoke$arity$1(x),y);
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = expound.paths.kps_QMARK_.call(null,x);
if(cljs.core.truth_(and__8052__auto__)){
return cljs.core.not.call(null,expound.paths.kps_QMARK_.call(null,y));
} else {
return and__8052__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.not.call(null,expound.paths.kps_QMARK_.call(null,x));
if(and__8052__auto__){
return expound.paths.kps_QMARK_.call(null,y);
} else {
return and__8052__auto__;
}
})())){
return (1);
} else {
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core.vector_QMARK_.call(null,y)))){
return expound.paths.compare_paths.call(null,x,y);
} else {
return cljs.core.compare.call(null,x,y);

}
}
}
}
}
});
expound.paths.compare_paths = (function expound$paths$compare_paths(path1,path2){
return cljs.core.first.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,expound.paths.compare_path_segment,path1,path2)));
});

//# sourceURL=expound/paths.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3VuZC9wYXRocy5qcyIsInNvdXJjZXMiOlsicGF0aHMuY2xqcyJdLCJsaW5lQ291bnQiOjY2MCwibWFwcGluZ3MiOiI7QUFNQSxBQUFBQSxtQ0FBQSxxRUFBQSwwRkFBcUJDO0FBSXJCLEFBQUEsQUFBQSxBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQUEsQUFBQSxBQUFBLDJFQUFBLFdBQUFDLG1CQUFBQyx6R0FBVzBEOztBQUFYLEFBQUEsSUFBQTNELHlCQUFBO0FBQUEsQUFBQSxPQUFBQSw4REFBQUMsZ0JBQUE7OztBQUFBLEFBQUEsQUFBQSwyRUFBQSxXQUFBQyxtQkFBQUMsSUFBQUMsN0dBQVd1RDs7QUFBWCxBQUFBLElBQUF6RCx5QkFBQTtBQUFBLEFBQUEsSUFBQUcsUUFBQUY7SUFBQUUsWUFBQSxFQUFBLENBQUFBLGlCQUFBQyxvQkFBQSxBQUFBRCxVQUFBO0FBQUEsQUFBQSxRQUFBQTtLQUFBO0FBQUFFOzs7O0FBQUEsT0FBQUMsd0JBQUFDLGdCQUFBTixJQUFBQzs7Ozs7QUFBQSxBQUFBLEFBQUEsdUZBQUEsV0FBQU0sbUJBQUFDLHFCQUFBQywxSUFBVytDOztBQUFYLEFBQUEsSUFBQWpELHlCQUFBO0FBQUEsQUFBQSxJQUFBRyx3QkFBQTtrQkFBQUM7QUFBQSxBQUFBLE9BQUFDLHlDQUFBSixxQkFBQUssb0JBQUEsR0FBQSxJQUFBLEdBQUFKLG1CQUFBRTs7O0FBQUEsQUFBQSxPQUFBQyx5Q0FBQUoscUJBQUFFLHNCQUFBLGlDQUFBLEtBQUEsSUFBQUQsbUJBQUEsQUFBQUssMkJBQUEsbUZBQUEsS0FBQUMsMkJBQUEsS0FBQSxJQUFBLElBQUEsQUFBQUEsc0NBQUEsQ0FBQSxzREFBQVgsWUFBQSxlQUFBRTs7O0FBQUEsQUFBQSxBQUFBLCtFQUFBLFdBQUFVLDFGQUFXd0M7O0FBQVgsQUFBQSxJQUFBeEMsWUFBQTtBQUFBLEFBQUEsWUFBQUMscUJBQUEsSUFBQUQsVUFBQSxJQUFBLG1GQUFBLDhEQUFBLGtCQUFBVixpQkFB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Q0FBS0M7QUFBWCxBQUFBLG9CQUFBYTtBQUFjLE9BQUMrRCx3QkFBSSxBQUFDN0UsbUNBQUttQjs7QUFBekJMOzs7QUFQRjs7QUFBQSxvQkFVRSxpQkFBQUEsb0JBQUssQUFBQytELHdCQUFJLEFBQUM3RSxtQ0FBS0M7QUFBaEIsQUFBQSxHQUFBYTtBQUFvQixPQUFDZCxtQ0FBS21COztBQUExQkw7OztBQVZGOztBQUFBLEdBYUUsRUFBSyxBQUFDMUMsa0NBQVE2QixRQUFHLEFBQUM3QixrQ0FBUStDO0FBQzFCLE9BQUMyRCxzQ0FBYzdFLEVBQUVrQjs7QUFkbkIsQUFpQkUsT0FBQ3lELDRCQUFRM0UsRUFBRWtCOzs7Ozs7OztBQUVmLDhCQUFBLDlCQUFNMkQsb0VBQWVDLE1BQU1DO0FBQTNCLEFBQ0UscUtBQUssQUFBQ0Msd0JBQUlOLG1DQUFxQkksTUFBTUMsck1BQ2hDLDJCQUFBLGlGQUFBLDVHQUFDRSwxQkFDRGhEIiwibmFtZXMiOlsiY2xqcy5zcGVjLmFscGhhL2RlZi1pbXBsIiwiY2xqcy5jb3JlL3NlcXVlbnRpYWw/IiwidGhpc19fODYzOF9fYXV0b19fIiwia19fODYzOV9fYXV0b19fIiwidGhpc19fODY0MF9fYXV0b19fIiwiazIzIiwiZWxzZV9fODY0MV9fYXV0b19fIiwiR19fMjciLCJjbGpzLmNvcmUvS2V5d29yZCIsImtleSIsImNsanMuY29yZS9nZXQiLCJfX2V4dG1hcCIsInRoaXNfXzg2NTJfX2F1dG9fXyIsIndyaXRlcl9fODY1M19fYXV0b19fIiwib3B0c19fODY1NF9fYXV0b19fIiwicHItcGFpcl9fODY1NV9fYXV0b19fIiwia2V5dmFsX184NjU2X19hdXRvX18iLCJjbGpzLmNvcmUvcHItc2VxdWVudGlhbC13cml0ZXIiLCJjbGpzLmNvcmUvcHItd3JpdGVyIiwiY2xqcy5jb3JlL2NvbmNhdCIsImNsanMuY29yZS9QZXJzaXN0ZW50VmVjdG9yIiwiR19fMjIiLCJjbGpzLmNvcmUvUmVjb3JkSXRlciIsImNsanMuY29yZS8taXRlcmF0b3IiLCJjbGpzLmNvcmUvbmlsLWl0ZXIiLCJ0aGlzX184NjM2X19hdXRvX18iLCJfX21ldGEiLCJ0aGlzX184NjMzX19hdXRvX18iLCJfX2hhc2giLCJ0aGlzX184NjQyX19hdXRvX18iLCJjbGpzLmNvcmUvY291bnQiLCJ0aGlzX184NjM0X19hdXRvX18iLCJoX184NDQzX19hdXRvX18iLCJjb2xsX184NjM1X19hdXRvX18iLCJjbGpzLmNvcmUvaGFzaC11bm9yZGVyZWQtY29sbCIsInRoaXMyNCIsIm90aGVyMjUiLCJjbGpzLmNvcmUvPSIsInRoaXNfXzg2NDdfX2F1dG9fXyIsImtfXzg2NDhfX2F1dG9fXyIsImNsanMuY29yZS9jb250YWlucz8iLCJjbGpzLmNvcmUvZGlzc29jIiwiY2xqcy5jb3JlLy13aXRoLW1ldGEiLCJjbGpzLmNvcmUvaW50byIsImNsanMuY29yZS9ub3QtZW1wdHkiLCJ0aGlzX184NjQ1X19hdXRvX18iLCJrX184NjQ2X19hdXRvX18iLCJwcmVkX18yOCIsImNsanMuY29yZS9rZXl3b3JkLWlkZW50aWNhbD8iLCJleHByX18yOSIsImNsanMuY29yZS9hc3NvYyIsInRoaXNfXzg2NTBfX2F1dG9fXyIsImNsanMuY29yZS9zZXEiLCJjbGpzL2NvcmUuTWFwRW50cnkiLCJ0aGlzX184NjM3X19hdXRvX18iLCJ0aGlzX184NjQzX19hdXRvX18iLCJlbnRyeV9fODY0NF9fYXV0b19fIiwiY2xqcy5jb3JlL3ZlY3Rvcj8iLCJjbGpzLmNvcmUvLW50aCIsImNsanMuY29yZS9yZWR1Y2UiLCJjbGpzLmNvcmUvLWNvbmoiLCJleHBvdW5kLnBhdGhzL0tleVBhdGhTZWdtZW50IiwidGhpc19fODY2MV9fYXV0b19fIiwiY2xqcy5jb3JlL0xpc3QiLCJ3cml0ZXJfXzg2NjJfX2F1dG9fXyIsImNsanMuY29yZS8td3JpdGUiLCJHX18yNiIsImV4dG1hcF9fODY2MF9fYXV0b19fIiwiR19fMzEiLCJjbGpzLmNvcmUvcmVjb3JkPyIsImV4cG91bmQucGF0aHMvLT5LZXlQYXRoU2VnbWVudCIsImV4cG91bmQucGF0aHMvbWFwLT5LZXlQYXRoU2VnbWVudCIsImszNCIsIkdfXzM4IiwiaWR4IiwiR19fMzMiLCJ0aGlzMzUiLCJvdGhlcjM2IiwicHJlZF9fMzkiLCJleHByX180MCIsImV4cG91bmQucGF0aHMvS2V5VmFsdWVQYXRoU2VnbWVudCIsIkdfXzM3IiwiR19fNDIiLCJleHBvdW5kLnBhdGhzLy0+S2V5VmFsdWVQYXRoU2VnbWVudCIsImV4cG91bmQucGF0aHMvbWFwLT5LZXlWYWx1ZVBhdGhTZWdtZW50IiwiZXhwb3VuZC5wYXRocy9rcHM/IiwieCIsImV4cG91bmQucGF0aHMva3Zwcz8iLCJjbGpzLnNwZWMuYWxwaGEvZnNwZWMtaW1wbCIsImNsanMuc3BlYy5hbHBoYS9zcGVjLWltcGwiLCJjbGpzLnNwZWMuYWxwaGEvY2F0LWltcGwiLCJjbGpzLmNvcmUvYm9vbGVhbj8iLCJleHBvdW5kLnBhdGhzL3ByZWZpeC1wYXRoPyIsInBhcnRpYWwtcGF0aCIsImZ1bGwtcGF0aCIsImNsanMuY29yZS9zdWJ2ZWMiLCJjbGpzLmNvcmUvYW55PyIsImV4cG91bmQucGF0aHMva3BzLXBhdGg/IiwiY2xqcy5jb3JlL2Jvb2xlYW4iLCJhbmRfXzgwNTJfX2F1dG9fXyIsImNsanMuY29yZS9sYXN0IiwiZXhwb3VuZC5wYXRocy9rdnBzLXBhdGg/IiwiY2xqcy5jb3JlL3NvbWUiLCJleHBvdW5kLnBhdGhzL2ZuLWVxdWFsIiwieSIsImNsanMuY29yZS9mbj8iLCJjbGpzLmNvcmUvcHItc3RyIiwiZXhwb3VuZC5wYXRocy9ib3RoLW5hbj8iLCJleHBvdW5kLnV0aWwvbmFuPyIsImV4cG91bmQucGF0aHMvZXF1YWxpc2g/Iiwib3JfXzgwNzBfX2F1dG9fXyIsImV4cG91bmQucGF0aHMvaW4td2l0aC1rcHMtbWFwcy1hcy1zZXFzIiwiZm9ybSIsInZhbCIsImluIiwiaW4nIiwidmVjX180NCIsInNlcV9fNDUiLCJmaXJzdF9fNDYiLCJjbGpzLmNvcmUvZmlyc3QiLCJjbGpzLmNvcmUvbmV4dCIsInZlY19fNDciLCJzZXFfXzQ4IiwiZmlyc3RfXzQ5IiwiayIsInJzdCIsInJzdDIiLCJjbGpzLmNvcmUvZW1wdHk/IiwiY2xqcy5jb3JlL21hcD8iLCJjbGpzLmNvcmUvbmF0LWludD8iLCJleHBvdW5kLnBhdGhzL2luLXdpdGgta3BzKiIsImNsanMuY29yZS9udGgiLCJjbGpzLmNvcmUvY29uaiIsImNsanMuY29yZS9pbnQ/IiwiZXhwb3VuZC5wYXRocy9pbi13aXRoLWtwcy1mdXp6eS1tYXRjaC1mb3ItcmVnZXgtZmFpbHVyZXMiLCJ2ZWNfXzUwIiwic2VxX181MSIsImZpcnN0X181MiIsImNsanMuY29yZS9zZXFhYmxlPyIsImNsanMuY29yZS9zZXE/IiwiZXhwb3VuZC5wYXRocy9pbi13aXRoLWtwcy1pbnRzLWFyZS1rZXlzIiwidmVjX181MyIsInNlcV9fNTQiLCJmaXJzdF9fNTUiLCJjbGpzLmNvcmUvYXNzb2NpYXRpdmU/IiwiZXhwb3VuZC5wYXRocy9pbi13aXRoLWtwcy1pbnRzLWFyZS1rZXktdmFsdWUtaW5kaWNhdG9ycyIsInZlY19fNTYiLCJzZXFfXzU3IiwiZmlyc3RfXzU4IiwidmVjX181OSIsInNlcV9fNjAiLCJmaXJzdF9fNjEiLCJicjEiLCJjbGpzLmNvcmUvbm90PSIsImJyMiIsImJyMyIsImJyNCIsImV4cG91bmQucGF0aHMvaW4td2l0aC1rcHMiLCJyZXMiLCJjbGpzLmNvcmUvZXgtaW5mbyIsImV4cG91bmQucGF0aHMvY29tcGFyZS1wYXRoLXNlZ21lbnQiLCJjbGpzLmNvcmUvY29tcGFyZSIsImNsanMuY29yZS9ub3QiLCJleHBvdW5kLnBhdGhzL2NvbXBhcmUtcGF0aHMiLCJwYXRoMSIsInBhdGgyIiwiY2xqcy5jb3JlL21hcCIsImNsanMuY29yZS9yZW1vdmUiXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIGV4cG91bmQucGF0aHNcbiAgKDpyZXF1aXJlIFtjbG9qdXJlLnNwZWMuYWxwaGEgOmFzIHNdXG4gICAgICAgICAgICBbZXhwb3VuZC51dGlsIDphcyB1dGlsXSkpXG5cbjs7Ozs7OyBzcGVjcyA7Ozs7OztcblxuKHMvZGVmIDpleHBvdW5kL3BhdGggc2VxdWVudGlhbD8pXG5cbjs7Ozs7OyB0eXBlcyA7Ozs7OztcblxuKGRlZnJlY29yZCBLZXlQYXRoU2VnbWVudCBba2V5XSlcblxuKGRlZnJlY29yZCBLZXlWYWx1ZVBhdGhTZWdtZW50IFtpZHhdKVxuXG47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7XG5cbihkZWZuIGtwcz8gW3hdXG4gIChpbnN0YW5jZT8gS2V5UGF0aFNlZ21lbnQgeCkpXG5cbihkZWZuIGt2cHM/IFt4XVxuICAoaW5zdGFuY2U/IEtleVZhbHVlUGF0aFNlZ21lbnQgeCkpXG5cbihzL2ZkZWYgcHJlZml4LXBhdGg/XG4gICAgICAgIDphcmdzIChzL2NhdFxuICAgICAgICAgICAgICAgOnBhcnRpYWwtcGF0aCA6ZXhwb3VuZC9wYXRoXG4gICAgICAgICAgICAgICA6cGFydGlhbC1wYXRoIDpleHBvdW5kL3BhdGgpXG4gICAgICAgIDpyZXQgYm9vbGVhbj8pXG4oZGVmbiBwcmVmaXgtcGF0aD9cbiAgXCJUcnVlIGlmIHBhcnRpYWwtcGF0aCBpcyBhIHByZWZpeCBvZiBmdWxsLXBhdGguXCJcbiAgW3BhcnRpYWwtcGF0aCBmdWxsLXBhdGhdXG4gIChhbmQgKDwgKGNvdW50IHBhcnRpYWwtcGF0aCkgKGNvdW50IGZ1bGwtcGF0aCkpXG4gICAgICAgKD0gcGFydGlhbC1wYXRoXG4gICAgICAgICAgKHN1YnZlYyBmdWxsLXBhdGggMCAoY291bnQgcGFydGlhbC1wYXRoKSkpKSlcblxuKHMvZmRlZiBrcHMtcGF0aD9cbiAgICAgICAgOmFyZ3MgKHMvY2F0IDp4IGFueT8pXG4gICAgICAgIDpyZXQgYm9vbGVhbj8pXG4oZGVmbiBrcHMtcGF0aD9cbiAgXCJUcnVlIGlmIHBhdGggcG9pbnRzIHRvIGEga2V5XCJcbiAgW3hdXG4gIChib29sZWFuIChhbmQgKHZlY3Rvcj8geClcbiAgICAgICAgICAgICAgICAoa3BzPyAobGFzdCB4KSkpKSlcblxuKHMvZmRlZiBrdnBzLXBhdGg/XG4gICAgICAgIDphcmdzIChzL2NhdCA6eCBhbnk/KVxuICAgICAgICA6cmV0IGJvb2xlYW4/KVxuKGRlZm4ga3Zwcy1wYXRoP1xuICBcIlRydWUgaWYgcGF0aCBwb2ludHMgdG8gYSBrZXkvdmFsdWUgcGFpclwiXG4gIFt4XVxuICAoYm9vbGVhbiAoYW5kICh2ZWN0b3I/IHgpXG4gICAgICAgICAgICAgICAgKHNvbWUga3Zwcz8geCkpKSlcblxuKGRlY2xhcmUgaW4td2l0aC1rcHMqKVxuXG4oZGVmbiBmbi1lcXVhbCBbeCB5XVxuICAoYW5kIChmbj8geClcbiAgICAgICAoZm4/IHkpXG4gICAgICAgKD0gKHByLXN0ciB4KVxuICAgICAgICAgIChwci1zdHIgeSkpKSlcblxuKGRlZm4gYm90aC1uYW4/IFt4IHldXG4gIChhbmQgKHV0aWwvbmFuPyB4KVxuICAgICAgICh1dGlsL25hbj8geSkpKVxuXG4oZGVmbiBlcXVhbGlzaD8gW3ggeV1cbiAgKG9yXG4gICAoPSB4IHkpXG4gICAoZm4tZXF1YWwgeCB5KVxuICAgKGJvdGgtbmFuPyB4IHkpKSlcblxuKGRlZm4gaW4td2l0aC1rcHMtbWFwcy1hcy1zZXFzIFtmb3JtIHZhbCBpbiBpbiddXG4gIChsZXQgW1trICYgcnN0XSBpblxuICAgICAgICBbaWR4ICYgcnN0Ml0gcnN0XVxuICAgIChjb25kXG4gICAgICAoPSA6Om5vdC1mb3VuZCBmb3JtKVxuICAgICAgOjpub3QtZm91bmRcblxuICAgICAgKGFuZCAoZW1wdHk/IGluKVxuICAgICAgICAgICAoZXF1YWxpc2g/IGZvcm0gdmFsKSlcbiAgICAgIGluJ1xuXG4gICAgICA7OyBkZXRlY3QgYSBgOmluYCBwYXRoIHRoYXQgcG9pbnRzIHRvIGEga2V5L3ZhbHVlIHBhaXIgaW4gYSBjb2xsLW9mIHNwZWNcbiAgICAgIChhbmQgKG1hcD8gZm9ybSlcbiAgICAgICAgICAgKG5hdC1pbnQ/IGspXG4gICAgICAgICAgICg8IGsgKGNvdW50IChzZXEgZm9ybSkpKSlcbiAgICAgIChpbi13aXRoLWtwcyogKG50aCAoc2VxIGZvcm0pIGspIHZhbCByc3QgKGNvbmogaW4nICgtPktleVZhbHVlUGF0aFNlZ21lbnQgaykpKVxuXG4gICAgICAoYW5kIChtYXA/IGZvcm0pXG4gICAgICAgICAgIChuYXQtaW50PyBrKVxuICAgICAgICAgICAoaW50PyBpZHgpXG4gICAgICAgICAgICg8IGsgKGNvdW50IChzZXEgZm9ybSkpKVxuICAgICAgICAgICAoPCBpZHggKGNvdW50IChudGggKHNlcSBmb3JtKSBrKSkpKVxuICAgICAgKGluLXdpdGgta3BzKiAobnRoIChudGggKHNlcSBmb3JtKSBrKSBpZHgpIHZhbCByc3QyIChjb25qIGluJyAoLT5LZXlWYWx1ZVBhdGhTZWdtZW50IGspIGlkeCkpXG5cbiAgICAgIDplbHNlXG4gICAgICA6Om5vdC1mb3VuZCkpKVxuXG4oZGVmbiBpbi13aXRoLWtwcy1mdXp6eS1tYXRjaC1mb3ItcmVnZXgtZmFpbHVyZXMgW2Zvcm0gdmFsIGluIGluJ11cbiAgKGlmICg9IGZvcm0gOjpub3QtZm91bmQpXG4gICAgZm9ybVxuICAgIChsZXQgW1trICYgcnN0XSBpbl1cbiAgICAgIChjb25kXG4gICAgICAgIDs7IG5vdCBlbm91Z2ggaW5wdXRcbiAgICAgICAgKGFuZCAoZW1wdHk/IGluKVxuICAgICAgICAgICAgIChzZXFhYmxlPyBmb3JtKVxuICAgICAgICAgICAgICg9IHZhbCAnKCkpKVxuICAgICAgICBpbidcblxuICAgICAgICA7OyB0b28gbXVjaCBpbnB1dFxuICAgICAgICAoYW5kIChlbXB0eT8gaW4pXG4gICAgICAgICAgICAgKGFuZCAoc2VxPyB2YWwpXG4gICAgICAgICAgICAgICAgICAoPSBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAoZmlyc3QgdmFsKSkpKVxuICAgICAgICBpbidcblxuICAgICAgICAoYW5kIChuYXQtaW50PyBrKSAoc2VxYWJsZT8gZm9ybSkpXG4gICAgICAgIChpbi13aXRoLWtwcyogKG50aCAoc2VxIGZvcm0pIGsgOjpub3QtZm91bmQpIHZhbCByc3QgKGNvbmogaW4nIGspKVxuXG4gICAgICAgIDplbHNlXG4gICAgICAgIDo6bm90LWZvdW5kKSkpKVxuXG4oZGVmbiBpbi13aXRoLWtwcy1pbnRzLWFyZS1rZXlzIFtmb3JtIHZhbCBpbiBpbiddXG4gIChpZiAoPSBmb3JtIDo6bm90LWZvdW5kKVxuICAgIGZvcm1cbiAgICAobGV0IFtbayAmIHJzdF0gaW5dXG4gICAgICAoY29uZFxuICAgICAgICAoYW5kIChlbXB0eT8gaW4pXG4gICAgICAgICAgICAgKGVxdWFsaXNoPyBmb3JtIHZhbCkpXG4gICAgICAgIGluJ1xuXG4gICAgICAgIChhc3NvY2lhdGl2ZT8gZm9ybSlcbiAgICAgICAgKGluLXdpdGgta3BzKiAoZ2V0IGZvcm0gayA6Om5vdC1mb3VuZCkgdmFsIHJzdCAoY29uaiBpbicgaykpXG5cbiAgICAgICAgKGFuZCAoaW50PyBrKSAoc2VxYWJsZT8gZm9ybSkpXG4gICAgICAgIChpbi13aXRoLWtwcyogKG50aCAoc2VxIGZvcm0pIGsgOjpub3QtZm91bmQpIHZhbCByc3QgKGNvbmogaW4nIGspKVxuXG4gICAgICAgIDplbHNlXG4gICAgICAgIDo6bm90LWZvdW5kKSkpKVxuXG4oZGVmbiBpbi13aXRoLWtwcy1pbnRzLWFyZS1rZXktdmFsdWUtaW5kaWNhdG9ycyBbZm9ybSB2YWwgaW4gaW4nXVxuICAoaWYgKD0gZm9ybSA6Om5vdC1mb3VuZClcbiAgICBmb3JtXG4gICAgKGxldCBbW2sgJiByc3RdIGluXG4gICAgICAgICAgW2lkeCAmIHJzdDJdIHJzdF1cbiAgICAgIChjb25kXG4gICAgICAgIChhbmQgKGVtcHR5PyBpbilcbiAgICAgICAgICAgICAoZXF1YWxpc2g/IGZvcm0gdmFsKSlcbiAgICAgICAgaW4nXG5cbiAgICAgICAgOzsgZGV0ZWN0IGEgYDppbmAgcGF0aCB0aGF0IHBvaW50cyBhdCBhIGtleSBpbiBhIG1hcC1vZiBzcGVjXG4gICAgICAgIChhbmQgKG1hcD8gZm9ybSlcbiAgICAgICAgICAgICAoPSAwIGlkeCkpXG4gICAgICAgIChpbi13aXRoLWtwcyogayB2YWwgcnN0MiAoY29uaiBpbicgKC0+S2V5UGF0aFNlZ21lbnQgaykpKVxuXG4gICAgICAgIDs7IGRldGVjdCBhIGA6aW5gIHBhdGggdGhhdCBwb2ludHMgYXQgYSB2YWx1ZSBpbiBhIG1hcC1vZiBzcGVjXG4gICAgICAgIChhbmQgKG1hcD8gZm9ybSlcbiAgICAgICAgICAgICAoPSAxIGlkeCkpXG4gICAgICAgIChpbi13aXRoLWtwcyogKGdldCBmb3JtIGsgOjpub3QtZm91bmQpIHZhbCByc3QyIChjb25qIGluJyBrKSlcblxuICAgICAgICA6ZWxzZVxuICAgICAgICA6Om5vdC1mb3VuZCkpKSlcblxuKGRlZm4gaW4td2l0aC1rcHMqIFtmb3JtIHZhbCBpbiBpbiddXG4gIChpZiAoZm4/IGZvcm0pXG4gICAgaW4nXG4gICAgKGxldCBbYnIxIChpbi13aXRoLWtwcy1pbnRzLWFyZS1rZXktdmFsdWUtaW5kaWNhdG9ycyBmb3JtIHZhbCBpbiBpbicpXVxuICAgICAgKGlmIChub3Q9IDo6bm90LWZvdW5kIGJyMSlcbiAgICAgICAgYnIxXG4gICAgICAgIChsZXQgW2JyMiAoaW4td2l0aC1rcHMtbWFwcy1hcy1zZXFzIGZvcm0gdmFsIGluIGluJyldXG4gICAgICAgICAgKGlmIChub3Q9IDo6bm90LWZvdW5kIGJyMilcbiAgICAgICAgICAgIGJyMlxuICAgICAgICAgICAgKGxldCBbYnIzIChpbi13aXRoLWtwcy1pbnRzLWFyZS1rZXlzIGZvcm0gdmFsIGluIGluJyldXG4gICAgICAgICAgICAgIChpZiAobm90PSA6Om5vdC1mb3VuZCBicjMpXG4gICAgICAgICAgICAgICAgYnIzXG4gICAgICAgICAgICAgICAgKGxldCBbYnI0IChpbi13aXRoLWtwcy1mdXp6eS1tYXRjaC1mb3ItcmVnZXgtZmFpbHVyZXMgZm9ybSB2YWwgaW4gaW4nKV1cbiAgICAgICAgICAgICAgICAgIChpZiAobm90PSA6Om5vdC1mb3VuZCBicjQpXG4gICAgICAgICAgICAgICAgICAgIGJyNFxuICAgICAgICAgICAgICAgICAgICA6Om5vdC1mb3VuZCkpKSkpKSkpKSlcblxuKGRlZm4gaW4td2l0aC1rcHMgW2Zvcm0gdmFsIGluIGluJ11cbiAgKGxldCBbcmVzIChpbi13aXRoLWtwcyogZm9ybSB2YWwgaW4gaW4nKV1cbiAgICAoaWYgKD0gOjpub3QtZm91bmQgcmVzKVxuICAgICAgKHRocm93IChleC1pbmZvIFwiQ2Fubm90IGNvbnZlcnQgcGF0aC4gVGhpcyBjYW4gYmUgY2F1c2VkIGJ5IHVzaW5nIGNvbmZvcm1lcnMgdG8gdHJhbnNmb3JtIHZhbHVlcywgd2hpY2ggaXMgbm90IHN1cHBvcnRlZCBpbiBFeHBvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICB7OmZvcm0gZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICA6dmFsIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICA6aW4gaW5cbiAgICAgICAgICAgICAgICAgICAgICAgOmluJyBpbid9KSlcbiAgICAgIHJlcykpKVxuXG4oZGVjbGFyZSBjb21wYXJlLXBhdGhzKVxuXG4oZGVmbiBjb21wYXJlLXBhdGgtc2VnbWVudCBbeCB5XVxuICAoY29uZFxuICAgIChhbmQgKGludD8geCkgKGt2cHM/IHkpKVxuICAgIChjb21wYXJlIHggKDppZHggeSkpXG5cbiAgICAoYW5kIChrdnBzPyB4KSAoaW50PyB5KSlcbiAgICAoY29tcGFyZSAoOmlkeCB4KSB5KVxuXG4gICAgKGFuZCAoa3BzPyB4KSAobm90IChrcHM/IHkpKSlcbiAgICAtMVxuXG4gICAgKGFuZCAobm90IChrcHM/IHgpKSAoa3BzPyB5KSlcbiAgICAxXG5cbiAgICAoYW5kICh2ZWN0b3I/IHgpICh2ZWN0b3I/IHkpKVxuICAgIChjb21wYXJlLXBhdGhzIHggeSlcblxuICAgIDplbHNlXG4gICAgKGNvbXBhcmUgeCB5KSkpXG5cbihkZWZuIGNvbXBhcmUtcGF0aHMgW3BhdGgxIHBhdGgyXVxuICAoLT4+IChtYXAgY29tcGFyZS1wYXRoLXNlZ21lbnQgcGF0aDEgcGF0aDIpXG4gICAgICAgKHJlbW92ZSAjezB9KVxuICAgICAgIGZpcnN0KSlcbiJdfQ==