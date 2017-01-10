// Compiled by ClojureScript 1.9.293 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__23737_23754 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__23738_23755 = null;
var count__23739_23756 = (0);
var i__23740_23757 = (0);
while(true){
if((i__23740_23757 < count__23739_23756)){
var k_23764 = cljs.core._nth.call(null,chunk__23738_23755,i__23740_23757);
var v_23767 = (b[k_23764]);
(a[k_23764] = v_23767);

var G__23768 = seq__23737_23754;
var G__23769 = chunk__23738_23755;
var G__23770 = count__23739_23756;
var G__23771 = (i__23740_23757 + (1));
seq__23737_23754 = G__23768;
chunk__23738_23755 = G__23769;
count__23739_23756 = G__23770;
i__23740_23757 = G__23771;
continue;
} else {
var temp__4657__auto___23779 = cljs.core.seq.call(null,seq__23737_23754);
if(temp__4657__auto___23779){
var seq__23737_23782__$1 = temp__4657__auto___23779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23737_23782__$1)){
var c__22834__auto___23783 = cljs.core.chunk_first.call(null,seq__23737_23782__$1);
var G__23784 = cljs.core.chunk_rest.call(null,seq__23737_23782__$1);
var G__23785 = c__22834__auto___23783;
var G__23786 = cljs.core.count.call(null,c__22834__auto___23783);
var G__23787 = (0);
seq__23737_23754 = G__23784;
chunk__23738_23755 = G__23785;
count__23739_23756 = G__23786;
i__23740_23757 = G__23787;
continue;
} else {
var k_23788 = cljs.core.first.call(null,seq__23737_23782__$1);
var v_23789 = (b[k_23788]);
(a[k_23788] = v_23789);

var G__23791 = cljs.core.next.call(null,seq__23737_23782__$1);
var G__23792 = null;
var G__23793 = (0);
var G__23794 = (0);
seq__23737_23754 = G__23791;
chunk__23738_23755 = G__23792;
count__23739_23756 = G__23793;
i__23740_23757 = G__23794;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args23810 = [];
var len__23128__auto___23884 = arguments.length;
var i__23129__auto___23885 = (0);
while(true){
if((i__23129__auto___23885 < len__23128__auto___23884)){
args23810.push((arguments[i__23129__auto___23885]));

var G__23912 = (i__23129__auto___23885 + (1));
i__23129__auto___23885 = G__23912;
continue;
} else {
}
break;
}

var G__23819 = args23810.length;
switch (G__23819) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23810.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23916 = (i + (2));
var G__23917 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__23916;
ret = G__23917;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23965_23976 = cljs.core.seq.call(null,v);
var chunk__23966_23977 = null;
var count__23967_23978 = (0);
var i__23968_23979 = (0);
while(true){
if((i__23968_23979 < count__23967_23978)){
var x_23982 = cljs.core._nth.call(null,chunk__23966_23977,i__23968_23979);
ret.push(x_23982);

var G__23983 = seq__23965_23976;
var G__23984 = chunk__23966_23977;
var G__23985 = count__23967_23978;
var G__23986 = (i__23968_23979 + (1));
seq__23965_23976 = G__23983;
chunk__23966_23977 = G__23984;
count__23967_23978 = G__23985;
i__23968_23979 = G__23986;
continue;
} else {
var temp__4657__auto___24002 = cljs.core.seq.call(null,seq__23965_23976);
if(temp__4657__auto___24002){
var seq__23965_24005__$1 = temp__4657__auto___24002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23965_24005__$1)){
var c__22834__auto___24007 = cljs.core.chunk_first.call(null,seq__23965_24005__$1);
var G__24009 = cljs.core.chunk_rest.call(null,seq__23965_24005__$1);
var G__24010 = c__22834__auto___24007;
var G__24011 = cljs.core.count.call(null,c__22834__auto___24007);
var G__24012 = (0);
seq__23965_23976 = G__24009;
chunk__23966_23977 = G__24010;
count__23967_23978 = G__24011;
i__23968_23979 = G__24012;
continue;
} else {
var x_24013 = cljs.core.first.call(null,seq__23965_24005__$1);
ret.push(x_24013);

var G__24026 = cljs.core.next.call(null,seq__23965_24005__$1);
var G__24027 = null;
var G__24028 = (0);
var G__24029 = (0);
seq__23965_23976 = G__24026;
chunk__23966_23977 = G__24027;
count__23967_23978 = G__24028;
i__23968_23979 = G__24029;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24049_24067 = cljs.core.seq.call(null,v);
var chunk__24050_24068 = null;
var count__24051_24069 = (0);
var i__24052_24070 = (0);
while(true){
if((i__24052_24070 < count__24051_24069)){
var x_24073 = cljs.core._nth.call(null,chunk__24050_24068,i__24052_24070);
ret.push(x_24073);

var G__24076 = seq__24049_24067;
var G__24077 = chunk__24050_24068;
var G__24078 = count__24051_24069;
var G__24079 = (i__24052_24070 + (1));
seq__24049_24067 = G__24076;
chunk__24050_24068 = G__24077;
count__24051_24069 = G__24078;
i__24052_24070 = G__24079;
continue;
} else {
var temp__4657__auto___24080 = cljs.core.seq.call(null,seq__24049_24067);
if(temp__4657__auto___24080){
var seq__24049_24081__$1 = temp__4657__auto___24080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24049_24081__$1)){
var c__22834__auto___24084 = cljs.core.chunk_first.call(null,seq__24049_24081__$1);
var G__24085 = cljs.core.chunk_rest.call(null,seq__24049_24081__$1);
var G__24086 = c__22834__auto___24084;
var G__24087 = cljs.core.count.call(null,c__22834__auto___24084);
var G__24088 = (0);
seq__24049_24067 = G__24085;
chunk__24050_24068 = G__24086;
count__24051_24069 = G__24087;
i__24052_24070 = G__24088;
continue;
} else {
var x_24090 = cljs.core.first.call(null,seq__24049_24081__$1);
ret.push(x_24090);

var G__24093 = cljs.core.next.call(null,seq__24049_24081__$1);
var G__24094 = null;
var G__24095 = (0);
var G__24096 = (0);
seq__24049_24067 = G__24093;
chunk__24050_24068 = G__24094;
count__24051_24069 = G__24095;
i__24052_24070 = G__24096;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24106_24122 = cljs.core.seq.call(null,v);
var chunk__24107_24123 = null;
var count__24108_24124 = (0);
var i__24109_24125 = (0);
while(true){
if((i__24109_24125 < count__24108_24124)){
var x_24128 = cljs.core._nth.call(null,chunk__24107_24123,i__24109_24125);
ret.push(x_24128);

var G__24129 = seq__24106_24122;
var G__24130 = chunk__24107_24123;
var G__24131 = count__24108_24124;
var G__24132 = (i__24109_24125 + (1));
seq__24106_24122 = G__24129;
chunk__24107_24123 = G__24130;
count__24108_24124 = G__24131;
i__24109_24125 = G__24132;
continue;
} else {
var temp__4657__auto___24136 = cljs.core.seq.call(null,seq__24106_24122);
if(temp__4657__auto___24136){
var seq__24106_24139__$1 = temp__4657__auto___24136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24106_24139__$1)){
var c__22834__auto___24141 = cljs.core.chunk_first.call(null,seq__24106_24139__$1);
var G__24143 = cljs.core.chunk_rest.call(null,seq__24106_24139__$1);
var G__24144 = c__22834__auto___24141;
var G__24145 = cljs.core.count.call(null,c__22834__auto___24141);
var G__24146 = (0);
seq__24106_24122 = G__24143;
chunk__24107_24123 = G__24144;
count__24108_24124 = G__24145;
i__24109_24125 = G__24146;
continue;
} else {
var x_24147 = cljs.core.first.call(null,seq__24106_24139__$1);
ret.push(x_24147);

var G__24150 = cljs.core.next.call(null,seq__24106_24139__$1);
var G__24152 = null;
var G__24153 = (0);
var G__24154 = (0);
seq__24106_24122 = G__24150;
chunk__24107_24123 = G__24152;
count__24108_24124 = G__24153;
i__24109_24125 = G__24154;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args24192 = [];
var len__23128__auto___24237 = arguments.length;
var i__23129__auto___24240 = (0);
while(true){
if((i__23129__auto___24240 < len__23128__auto___24237)){
args24192.push((arguments[i__23129__auto___24240]));

var G__24242 = (i__23129__auto___24240 + (1));
i__23129__auto___24240 = G__24242;
continue;
} else {
}
break;
}

var G__24202 = args24192.length;
switch (G__24202) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24192.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__24213 = obj;
G__24213.push(kfn.call(null,k),vfn.call(null,v));

return G__24213;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x24215 = cljs.core.clone.call(null,handlers);
x24215.forEach = ((function (x24215,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__24220 = cljs.core.seq.call(null,coll);
var chunk__24221 = null;
var count__24222 = (0);
var i__24223 = (0);
while(true){
if((i__24223 < count__24222)){
var vec__24224 = cljs.core._nth.call(null,chunk__24221,i__24223);
var k = cljs.core.nth.call(null,vec__24224,(0),null);
var v = cljs.core.nth.call(null,vec__24224,(1),null);
f.call(null,v,k);

var G__24281 = seq__24220;
var G__24282 = chunk__24221;
var G__24283 = count__24222;
var G__24284 = (i__24223 + (1));
seq__24220 = G__24281;
chunk__24221 = G__24282;
count__24222 = G__24283;
i__24223 = G__24284;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24220);
if(temp__4657__auto__){
var seq__24220__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24220__$1)){
var c__22834__auto__ = cljs.core.chunk_first.call(null,seq__24220__$1);
var G__24290 = cljs.core.chunk_rest.call(null,seq__24220__$1);
var G__24291 = c__22834__auto__;
var G__24292 = cljs.core.count.call(null,c__22834__auto__);
var G__24293 = (0);
seq__24220 = G__24290;
chunk__24221 = G__24291;
count__24222 = G__24292;
i__24223 = G__24293;
continue;
} else {
var vec__24230 = cljs.core.first.call(null,seq__24220__$1);
var k = cljs.core.nth.call(null,vec__24230,(0),null);
var v = cljs.core.nth.call(null,vec__24230,(1),null);
f.call(null,v,k);

var G__24299 = cljs.core.next.call(null,seq__24220__$1);
var G__24300 = null;
var G__24301 = (0);
var G__24302 = (0);
seq__24220 = G__24299;
chunk__24221 = G__24300;
count__24222 = G__24301;
i__24223 = G__24302;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24215,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x24215;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args24312 = [];
var len__23128__auto___24350 = arguments.length;
var i__23129__auto___24351 = (0);
while(true){
if((i__23129__auto___24351 < len__23128__auto___24350)){
args24312.push((arguments[i__23129__auto___24351]));

var G__24354 = (i__23129__auto___24351 + (1));
i__23129__auto___24351 = G__24354;
continue;
} else {
}
break;
}

var G__24322 = args24312.length;
switch (G__24322) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24312.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit24329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit24329 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta24330){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta24330 = meta24330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit24329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24331,meta24330__$1){
var self__ = this;
var _24331__$1 = this;
return (new cognitect.transit.t_cognitect$transit24329(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta24330__$1));
});

cognitect.transit.t_cognitect$transit24329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24331){
var self__ = this;
var _24331__$1 = this;
return self__.meta24330;
});

cognitect.transit.t_cognitect$transit24329.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24329.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24329.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24329.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta24330","meta24330",675263397,null)], null);
});

cognitect.transit.t_cognitect$transit24329.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit24329.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit24329";

cognitect.transit.t_cognitect$transit24329.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cognitect.transit/t_cognitect$transit24329");
});

cognitect.transit.__GT_t_cognitect$transit24329 = (function cognitect$transit$__GT_t_cognitect$transit24329(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24330){
return (new cognitect.transit.t_cognitect$transit24329(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24330));
});

}

return (new cognitect.transit.t_cognitect$transit24329(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__22020__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map