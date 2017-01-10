// Compiled by ClojureScript 1.9.293 {}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__23135__auto__ = [];
var len__23128__auto___23420 = arguments.length;
var i__23129__auto___23421 = (0);
while(true){
if((i__23129__auto___23421 < len__23128__auto___23420)){
args__23135__auto__.push((arguments[i__23129__auto___23421]));

var G__23422 = (i__23129__auto___23421 + (1));
i__23129__auto___23421 = G__23422;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__22020__auto__ = m;
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__22803__auto__ = (function schema$utils$iter__23379(s__23380){
return (new cljs.core.LazySeq(null,(function (){
var s__23380__$1 = s__23380;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23380__$1);
if(temp__4657__auto__){
var s__23380__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23380__$2)){
var c__22801__auto__ = cljs.core.chunk_first.call(null,s__23380__$2);
var size__22802__auto__ = cljs.core.count.call(null,c__22801__auto__);
var b__23382 = cljs.core.chunk_buffer.call(null,size__22802__auto__);
if((function (){var i__23381 = (0);
while(true){
if((i__23381 < size__22802__auto__)){
var vec__23395 = cljs.core._nth.call(null,c__22801__auto__,i__23381);
var k = cljs.core.nth.call(null,vec__23395,(0),null);
var v = cljs.core.nth.call(null,vec__23395,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__23382,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23424 = (i__23381 + (1));
i__23381 = G__23424;
continue;
} else {
var G__23425 = (i__23381 + (1));
i__23381 = G__23425;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23382),schema$utils$iter__23379.call(null,cljs.core.chunk_rest.call(null,s__23380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23382),null);
}
} else {
var vec__23417 = cljs.core.first.call(null,s__23380__$2);
var k = cljs.core.nth.call(null,vec__23417,(0),null);
var v = cljs.core.nth.call(null,vec__23417,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__23379.call(null,cljs.core.rest.call(null,s__23380__$2)));
} else {
var G__23426 = cljs.core.rest.call(null,s__23380__$2);
s__23380__$1 = G__23426;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22803__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

schema.utils.assoc_when.cljs$lang$applyTo = (function (seq23375){
var G__23376 = cljs.core.first.call(null,seq23375);
var seq23375__$1 = cljs.core.next.call(null,seq23375);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__23376,seq23375__$1);
});

schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__23135__auto__ = [];
var len__23128__auto___23429 = arguments.length;
var i__23129__auto___23430 = (0);
while(true){
if((i__23129__auto___23430 < len__23128__auto___23429)){
args__23135__auto__.push((arguments[i__23129__auto___23430]));

var G__23431 = (i__23129__auto___23430 + (1));
i__23129__auto___23430 = G__23431;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq23427){
var G__23428 = cljs.core.first.call(null,seq23427);
var seq23427__$1 = cljs.core.next.call(null,seq23427);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23428,seq23427__$1);
});

schema.utils.max_value_length = cljs.core.atom.call(null,(19));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of.call(null,value);
if((cljs.core.count.call(null,[cljs.core.str(value)].join('')) <= cljs.core.deref.call(null,schema.utils.max_value_length))){
return value;
} else {
return cljs.core.symbol.call(null,[cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
 * TODO: eventually use built in demunge in latest cljs.
 */
schema.utils.unmunge = (function schema$utils$unmunge(s){
return cljs.core.reduce.call(null,(function (s__$1,p__23445){
var vec__23446 = p__23445;
var to = cljs.core.nth.call(null,vec__23446,(0),null);
var from = cljs.core.nth.call(null,vec__23446,(1),null);
return clojure.string.replace.call(null,s__$1,from,[cljs.core.str(to)].join(''));
}),s,cljs.core.sort_by.call(null,(function (p1__23440_SHARP_){
return (- cljs.core.count.call(null,cljs.core.second.call(null,p1__23440_SHARP_)));
}),cljs.core.PersistentHashMap.fromArrays(["@","!","\"","#","%","&","'","*","+","-","/",":","[","{","<","\\","|","=","]","}",">","^","~","?"],["_CIRCA_","_BANG_","_DOUBLEQUOTE_","_SHARP_","_PERCENT_","_AMPERSAND_","_SINGLEQUOTE_","_STAR_","_PLUS_","_","_SLASH_","_COLON_","_LBRACK_","_LBRACE_","_LT_","_BSLASH_","_BAR_","_EQ_","_RBRACK_","_RBRACE_","_GT_","_CARET_","_TILDE_","_QMARK_"])));
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
return schema.utils.unmunge.call(null,(function (){var or__22020__auto__ = cljs.core.not_empty.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/function ([^\(]*)\(/,[cljs.core.str(f)].join(''))));
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return "function";
}
})());
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IRecord$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.validation_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"expectation-delay","expectation-delay",-1886214669,null),new cljs.core.Symbol(null,"fail-explanation","fail-explanation",530278923,null)], null);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
var x__22857__auto__ = (function (){var or__22020__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})();
return cljs.core._conj.call(null,(function (){var x__22857__auto____$1 = cljs.core.deref.call(null,err.expectation_delay);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto____$1);
})(),x__22857__auto__);
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.named_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj.call(null,(function (){var x__22857__auto__ = err.error;
return cljs.core._conj.call(null,(function (){var x__22857__auto____$1 = err.name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto____$1);
})(),x__22857__auto__);
})(),new cljs.core.Symbol(null,"named","named",1218138048,null));
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
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22642__auto__,k__22643__auto__){
var self__ = this;
var this__22642__auto____$1 = this;
return cljs.core._lookup.call(null,this__22642__auto____$1,k__22643__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22644__auto__,k23550,else__22645__auto__){
var self__ = this;
var this__22644__auto____$1 = this;
var G__23557 = (((k23550 instanceof cljs.core.Keyword))?k23550.fqn:null);
switch (G__23557) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23550,else__22645__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22656__auto__,writer__22657__auto__,opts__22658__auto__){
var self__ = this;
var this__22656__auto____$1 = this;
var pr_pair__22659__auto__ = ((function (this__22656__auto____$1){
return (function (keyval__22660__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22657__auto__,cljs.core.pr_writer,""," ","",opts__22658__auto__,keyval__22660__auto__);
});})(this__22656__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22657__auto__,pr_pair__22659__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__22658__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23549){
var self__ = this;
var G__23549__$1 = this;
return (new cljs.core.RecordIter((0),G__23549__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22640__auto__){
var self__ = this;
var this__22640__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22636__auto__){
var self__ = this;
var this__22636__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22646__auto__){
var self__ = this;
var this__22646__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22637__auto__){
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

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22638__auto__,other__22639__auto__){
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

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22651__auto__,k__22652__auto__){
var self__ = this;
var this__22651__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__22652__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22651__auto____$1),self__.__meta),k__22652__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22652__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22649__auto__,k__22650__auto__,G__23549){
var self__ = this;
var this__22649__auto____$1 = this;
var pred__23576 = cljs.core.keyword_identical_QMARK_;
var expr__23577 = k__22650__auto__;
if(cljs.core.truth_(pred__23576.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__23577))){
return (new schema.utils.ErrorContainer(G__23549,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22650__auto__,G__23549),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22654__auto__){
var self__ = this;
var this__22654__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22641__auto__,G__23549){
var self__ = this;
var this__22641__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__23549,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22647__auto__,entry__22648__auto__){
var self__ = this;
var this__22647__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22648__auto__)){
return cljs.core._assoc.call(null,this__22647__auto____$1,cljs.core._nth.call(null,entry__22648__auto__,(0)),cljs.core._nth.call(null,entry__22648__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22647__auto____$1,entry__22648__auto__);
}
});

schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__22676__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__22676__auto__,writer__22677__auto__){
return cljs.core._write.call(null,writer__22677__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__23552){
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__23552),null,cljs.core.dissoc.call(null,G__23552,new cljs.core.Keyword(null,"error","error",-978969032)),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error("Assert failed: x"));
}

return schema.utils.__GT_ErrorContainer.call(null,x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,x))){
return x.error;
} else {
return null;
}
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return (klass["schema$utils$schema"]);
});
/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = cljs.core.atom.call(null,false);

//# sourceMappingURL=utils.js.map