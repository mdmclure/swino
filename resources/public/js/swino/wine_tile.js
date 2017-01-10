// Compiled by ClojureScript 1.9.293 {}
goog.provide('swino.wine_tile');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('cljs_react_material_ui.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
swino.wine_tile.WineTile = (function swino$wine_tile$WineTile(){
var this__31575__auto__ = this;
React.Component.apply(this__31575__auto__,arguments);

if(!((this__31575__auto__.initLocalState == null))){
this__31575__auto__.state = this__31575__auto__.initLocalState();
} else {
this__31575__auto__.state = {};
}

return this__31575__auto__;
});

swino.wine_tile.WineTile.prototype = goog.object.clone(React.Component.prototype);

var x37820_37838 = swino.wine_tile.WineTile.prototype;
x37820_37838.componentWillUpdate = ((function (x37820_37838){
return (function (next_props__31511__auto__,next_state__31512__auto__){
var this__31510__auto__ = this;
if(((!((this__31510__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__31510__auto__.om$next$Ident$)))?true:false):false)){
var ident__31514__auto___37839 = om.next.ident.call(null,this__31510__auto__,om.next.props.call(null,this__31510__auto__));
var next_ident__31515__auto___37840 = om.next.ident.call(null,this__31510__auto__,om.next._next_props.call(null,next_props__31511__auto__,this__31510__auto__));
if(cljs.core.not_EQ_.call(null,ident__31514__auto___37839,next_ident__31515__auto___37840)){
var idxr__31516__auto___37841 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__31510__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__31516__auto___37841 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__31516__auto___37841),((function (idxr__31516__auto___37841,ident__31514__auto___37839,next_ident__31515__auto___37840,this__31510__auto__,x37820_37838){
return (function (indexes__31517__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__31517__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__31514__auto___37839], null),cljs.core.disj,this__31510__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__31515__auto___37840], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__31510__auto__);
});})(idxr__31516__auto___37841,ident__31514__auto___37839,next_ident__31515__auto___37840,this__31510__auto__,x37820_37838))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__31510__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__31510__auto__);
});})(x37820_37838))
;

x37820_37838.shouldComponentUpdate = ((function (x37820_37838){
return (function (next_props__31511__auto__,next_state__31512__auto__){
var this__31510__auto__ = this;
var next_children__31513__auto__ = next_props__31511__auto__.children;
var next_props__31511__auto____$1 = goog.object.get(next_props__31511__auto__,"omcljs$value");
var next_props__31511__auto____$2 = (function (){var G__37822 = next_props__31511__auto____$1;
if((next_props__31511__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__37822);
} else {
return G__37822;
}
})();
var or__22020__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__31510__auto__),next_props__31511__auto____$2);
if(or__22020__auto__){
return or__22020__auto__;
} else {
var or__22020__auto____$1 = (function (){var and__22008__auto__ = this__31510__auto__.state;
if(cljs.core.truth_(and__22008__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__31510__auto__.state,"omcljs$state"),goog.object.get(next_state__31512__auto__,"omcljs$state"));
} else {
return and__22008__auto__;
}
})();
if(cljs.core.truth_(or__22020__auto____$1)){
return or__22020__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__31510__auto__.props.children,next_children__31513__auto__);
}
}
});})(x37820_37838))
;

x37820_37838.componentWillUnmount = ((function (x37820_37838){
return (function (){
var this__31510__auto__ = this;
var r__31521__auto__ = om.next.get_reconciler.call(null,this__31510__auto__);
var cfg__31522__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__31521__auto__);
var st__31523__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__31522__auto__);
var indexer__31520__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__31522__auto__);
if(cljs.core.truth_((function (){var and__22008__auto__ = !((st__31523__auto__ == null));
if(and__22008__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__31523__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__31510__auto__], null));
} else {
return and__22008__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__31523__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__31510__auto__);
} else {
}

if((indexer__31520__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__31520__auto__,this__31510__auto__);
}
});})(x37820_37838))
;

x37820_37838.componentDidUpdate = ((function (x37820_37838){
return (function (prev_props__31518__auto__,prev_state__31519__auto__){
var this__31510__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__31510__auto__);
});})(x37820_37838))
;

x37820_37838.isMounted = ((function (x37820_37838){
return (function (){
var this__31510__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__31510__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37820_37838))
;

x37820_37838.componentWillMount = ((function (x37820_37838){
return (function (){
var this__31510__auto__ = this;
var indexer__31520__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__31510__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__31520__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__31520__auto__,this__31510__auto__);
}
});})(x37820_37838))
;

x37820_37838.render = ((function (x37820_37838){
return (function (){
var this__31509__auto__ = this;
var this$ = this__31509__auto__;
var _STAR_reconciler_STAR_37823 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37824 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37825 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37826 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37827 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__31509__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__31509__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__31509__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__31509__auto__);

om.next._STAR_parent_STAR_ = this__31509__auto__;

try{var map__37828 = om.next.props.call(null,this$);
var map__37828__$1 = ((((!((map__37828 == null)))?((((map__37828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37828):map__37828);
var id = cljs.core.get.call(null,map__37828__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var name = cljs.core.get.call(null,map__37828__$1,new cljs.core.Keyword("wine","name","wine/name",1848373320));
var year = cljs.core.get.call(null,map__37828__$1,new cljs.core.Keyword("wine","year","wine/year",338649532));
var color = cljs.core.get.call(null,map__37828__$1,new cljs.core.Keyword("wine","color","wine/color",1017397294));
return cljs_react_material_ui.core.grid_tile.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),name,new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),((function (map__37828,map__37828__$1,id,name,year,color,_STAR_reconciler_STAR_37823,_STAR_depth_STAR_37824,_STAR_shared_STAR_37825,_STAR_instrument_STAR_37826,_STAR_parent_STAR_37827,this$,this__31509__auto__,x37820_37838){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22857__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("wine","focus","wine/focus",1863130313,null)),(function (){var x__22857__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),(function (){var x__22857__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("wine","focus","wine/focus",222598786)))))));
});})(map__37828,map__37828__$1,id,name,year,color,_STAR_reconciler_STAR_37823,_STAR_depth_STAR_37824,_STAR_shared_STAR_37825,_STAR_instrument_STAR_37826,_STAR_parent_STAR_37827,this$,this__31509__auto__,x37820_37838))
], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37827;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37826;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37825;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37824;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37823;
}});})(x37820_37838))
;


swino.wine_tile.WineTile.prototype.constructor = swino.wine_tile.WineTile;

swino.wine_tile.WineTile.prototype.constructor.displayName = "swino.wine-tile/WineTile";

swino.wine_tile.WineTile.prototype.om$isComponent = true;

var x37830_37842 = swino.wine_tile.WineTile;
x37830_37842.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x37830_37842.om$next$Ident$ident$arity$2 = ((function (x37830_37842){
return (function (this$,p__37831){
var map__37832 = p__37831;
var map__37832__$1 = ((((!((map__37832 == null)))?((((map__37832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37832):map__37832);
var id = cljs.core.get.call(null,map__37832__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wine","by-id","wine/by-id",-2141512132),id], null);
});})(x37830_37842))
;

x37830_37842.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x37830_37842.om$next$IQuery$query$arity$1 = ((function (x37830_37842){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("wine","name","wine/name",1848373320),new cljs.core.Keyword("wine","year","wine/year",338649532),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wine","color","wine/color",1017397294),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("color","name","color/name",1619226510)], null)], null)], null);
});})(x37830_37842))
;


var x37834_37843 = swino.wine_tile.WineTile.prototype;
x37834_37843.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x37834_37843.om$next$Ident$ident$arity$2 = ((function (x37834_37843){
return (function (this$,p__37835){
var map__37836 = p__37835;
var map__37836__$1 = ((((!((map__37836 == null)))?((((map__37836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37836):map__37836);
var id = cljs.core.get.call(null,map__37836__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wine","by-id","wine/by-id",-2141512132),id], null);
});})(x37834_37843))
;

x37834_37843.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x37834_37843.om$next$IQuery$query$arity$1 = ((function (x37834_37843){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("wine","name","wine/name",1848373320),new cljs.core.Keyword("wine","year","wine/year",338649532),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wine","color","wine/color",1017397294),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("color","name","color/name",1619226510)], null)], null)], null);
});})(x37834_37843))
;


swino.wine_tile.WineTile.cljs$lang$type = true;

swino.wine_tile.WineTile.cljs$lang$ctorStr = "swino.wine-tile/WineTile";

swino.wine_tile.WineTile.cljs$lang$ctorPrWriter = (function (this__31577__auto__,writer__31578__auto__,opt__31579__auto__){
return cljs.core._write.call(null,writer__31578__auto__,"swino.wine-tile/WineTile");
});
swino.wine_tile.tile_wine = om.next.factory.call(null,swino.wine_tile.WineTile,cljs.core.PersistentArrayMap.EMPTY);
goog.exportSymbol('swino.wine_tile.tile_wine', swino.wine_tile.tile_wine);

//# sourceMappingURL=wine_tile.js.map