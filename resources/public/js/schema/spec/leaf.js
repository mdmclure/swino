// Compiled by ClojureScript 1.9.293 {}
goog.provide('schema.spec.leaf');
goog.require('cljs.core');
goog.require('schema.spec.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
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
schema.spec.leaf.LeafSpec = (function (pre,__meta,__extmap,__hash){
this.pre = pre;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22642__auto__,k__22643__auto__){
var self__ = this;
var this__22642__auto____$1 = this;
return cljs.core._lookup.call(null,this__22642__auto____$1,k__22643__auto__,null);
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22644__auto__,k26153,else__22645__auto__){
var self__ = this;
var this__22644__auto____$1 = this;
var G__26159 = (((k26153 instanceof cljs.core.Keyword))?k26153.fqn:null);
switch (G__26159) {
case "pre":
return self__.pre;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26153,else__22645__auto__);

}
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var or__22020__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return x;
}
});
;})(this$__$1))
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22656__auto__,writer__22657__auto__,opts__22658__auto__){
var self__ = this;
var this__22656__auto____$1 = this;
var pr_pair__22659__auto__ = ((function (this__22656__auto____$1){
return (function (keyval__22660__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22657__auto__,cljs.core.pr_writer,""," ","",opts__22658__auto__,keyval__22660__auto__);
});})(this__22656__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22657__auto__,pr_pair__22659__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__22658__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26152){
var self__ = this;
var G__26152__$1 = this;
return (new cljs.core.RecordIter((0),G__26152__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22640__auto__){
var self__ = this;
var this__22640__auto____$1 = this;
return self__.__meta;
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22636__auto__){
var self__ = this;
var this__22636__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22646__auto__){
var self__ = this;
var this__22646__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22637__auto__){
var self__ = this;
var this__22637__auto____$1 = this;
var h__22455__auto__ = self__.__hash;
if(!((h__22455__auto__ == null))){
return h__22455__auto__;
} else {
var h__22455__auto____$1 = cljs.core.hash_imap.call(null,this__22637__auto____$1);
self__.__hash = h__22455__auto____$1;

return h__22455__auto____$1;
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22638__auto__,other__22639__auto__){
var self__ = this;
var this__22638__auto____$1 = this;
if(cljs.core.truth_((function (){var and__22008__auto__ = other__22639__auto__;
if(cljs.core.truth_(and__22008__auto__)){
var and__22008__auto____$1 = (this__22638__auto____$1.constructor === other__22639__auto__.constructor);
if(and__22008__auto____$1){
return cljs.core.equiv_map.call(null,this__22638__auto____$1,other__22639__auto__);
} else {
return and__22008__auto____$1;
}
} else {
return and__22008__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22651__auto__,k__22652__auto__){
var self__ = this;
var this__22651__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),null], null), null),k__22652__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22651__auto____$1),self__.__meta),k__22652__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22652__auto__)),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22649__auto__,k__22650__auto__,G__26152){
var self__ = this;
var this__22649__auto____$1 = this;
var pred__26171 = cljs.core.keyword_identical_QMARK_;
var expr__26172 = k__22650__auto__;
if(cljs.core.truth_(pred__26171.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__26172))){
return (new schema.spec.leaf.LeafSpec(G__26152,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22650__auto__,G__26152),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22654__auto__){
var self__ = this;
var this__22654__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22641__auto__,G__26152){
var self__ = this;
var this__22641__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__26152,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22647__auto__,entry__22648__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22648__auto__)){
return cljs.core._assoc.call(null,this__22647__auto____$1,cljs.core._nth.call(null,entry__22648__auto__,(0)),cljs.core._nth.call(null,entry__22648__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22647__auto____$1,entry__22648__auto__);
}
});

schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null)], null);
});

schema.spec.leaf.LeafSpec.cljs$lang$type = true;

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__22676__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__22676__auto__,writer__22677__auto__){
return cljs.core._write.call(null,writer__22677__auto__,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__26155){
return (new schema.spec.leaf.LeafSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__26155),null,cljs.core.dissoc.call(null,G__26155,new cljs.core.Keyword(null,"pre","pre",2118456869)),null));
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec.call(null,pre);
});

//# sourceMappingURL=leaf.js.map