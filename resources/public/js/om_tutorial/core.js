// Compiled by ClojureScript 1.8.40 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Ant"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Antelope"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"Bird"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"Cat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"Dog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),"Lion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"Mouse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),"Monkey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),"Snake"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"Zebra"], null)], null)], null));
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__22483__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22487__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),((function (method_table__22483__auto__,prefer_table__22484__auto__,method_cache__22485__auto__,cached_hierarchy__22486__auto__,hierarchy__22487__auto__){
return (function (env,key,params){
return key;
});})(method_table__22483__auto__,prefer_table__22484__auto__,method_cache__22485__auto__,cached_hierarchy__22486__auto__,hierarchy__22487__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22487__auto__,method_table__22483__auto__,prefer_table__22484__auto__,method_cache__22485__auto__,cached_hierarchy__22486__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27110,key,params){
var map__27111 = p__27110;
var map__27111__$1 = ((((!((map__27111 == null)))?((((map__27111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27111):map__27111);
var env = map__27111__$1;
var state = cljs.core.get.call(null,map__27111__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__27113 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__27113,(0),null);
var value = cljs.core.nth.call(null,vec__27113,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__27114,key,p__27115){
var map__27116 = p__27114;
var map__27116__$1 = ((((!((map__27116 == null)))?((((map__27116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27116):map__27116);
var env = map__27116__$1;
var state = cljs.core.get.call(null,map__27116__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27117 = p__27115;
var map__27117__$1 = ((((!((map__27117 == null)))?((((map__27117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27117):map__27117);
var start = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
/**
 * @constructor
 */
om_tutorial.core.AnimalsList = (function om_tutorial$core$AnimalsList(){
var this__25459__auto__ = this;
React.Component.apply(this__25459__auto__,arguments);

if(!((this__25459__auto__.initLocalState == null))){
this__25459__auto__.state = this__25459__auto__.initLocalState();
} else {
this__25459__auto__.state = {};
}

return this__25459__auto__;
});

om_tutorial.core.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x27124_27138 = om_tutorial.core.AnimalsList.prototype;
x27124_27138.componentWillUpdate = ((function (x27124_27138){
return (function (next_props__25395__auto__,next_state__25396__auto__){
var this__25394__auto__ = this;
if(((!((this__25394__auto__ == null)))?(((false) || (this__25394__auto__.om$next$Ident$))?true:false):false)){
var ident__25398__auto___27139 = om.next.ident.call(null,this__25394__auto__,om.next.props.call(null,this__25394__auto__));
var next_ident__25399__auto___27140 = om.next.ident.call(null,this__25394__auto__,om.next._next_props.call(null,next_props__25395__auto__,this__25394__auto__));
if(cljs.core.not_EQ_.call(null,ident__25398__auto___27139,next_ident__25399__auto___27140)){
var idxr__25400__auto___27141 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25394__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25400__auto___27141 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25400__auto___27141),((function (idxr__25400__auto___27141,ident__25398__auto___27139,next_ident__25399__auto___27140,this__25394__auto__,x27124_27138){
return (function (indexes__25401__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25401__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25398__auto___27139], null),cljs.core.disj,this__25394__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25399__auto___27140], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25394__auto__);
});})(idxr__25400__auto___27141,ident__25398__auto___27139,next_ident__25399__auto___27140,this__25394__auto__,x27124_27138))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25394__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25394__auto__);
});})(x27124_27138))
;

x27124_27138.shouldComponentUpdate = ((function (x27124_27138){
return (function (next_props__25395__auto__,next_state__25396__auto__){
var this__25394__auto__ = this;
var next_children__25397__auto__ = next_props__25395__auto__.children;
var next_props__25395__auto____$1 = goog.object.get(next_props__25395__auto__,"omcljs$value");
var next_props__25395__auto____$2 = (function (){var G__27126 = next_props__25395__auto____$1;
if((next_props__25395__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__27126);
} else {
return G__27126;
}
})();
var or__21559__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__25394__auto__),next_props__25395__auto____$2);
if(or__21559__auto__){
return or__21559__auto__;
} else {
var or__21559__auto____$1 = (function (){var and__21547__auto__ = this__25394__auto__.state;
if(cljs.core.truth_(and__21547__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__25394__auto__.state,"omcljs$state"),goog.object.get(next_state__25396__auto__,"omcljs$state"));
} else {
return and__21547__auto__;
}
})();
if(cljs.core.truth_(or__21559__auto____$1)){
return or__21559__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__25394__auto__.props.children,next_children__25397__auto__);
}
}
});})(x27124_27138))
;

x27124_27138.componentWillUnmount = ((function (x27124_27138){
return (function (){
var this__25394__auto__ = this;
var r__25405__auto__ = om.next.get_reconciler.call(null,this__25394__auto__);
var cfg__25406__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__25405__auto__);
var st__25407__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__25406__auto__);
var indexer__25404__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__25406__auto__);
if(cljs.core.truth_((function (){var and__21547__auto__ = !((st__25407__auto__ == null));
if(and__21547__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__25407__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__25394__auto__], null));
} else {
return and__21547__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__25407__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__25394__auto__);
} else {
}

if((indexer__25404__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__25404__auto__,this__25394__auto__);
}
});})(x27124_27138))
;

x27124_27138.componentDidUpdate = ((function (x27124_27138){
return (function (prev_props__25402__auto__,prev_state__25403__auto__){
var this__25394__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25394__auto__);
});})(x27124_27138))
;

x27124_27138.isMounted = ((function (x27124_27138){
return (function (){
var this__25394__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25394__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27124_27138))
;

x27124_27138.componentWillMount = ((function (x27124_27138){
return (function (){
var this__25394__auto__ = this;
var indexer__25404__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25394__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25404__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25404__auto__,this__25394__auto__);
}
});})(x27124_27138))
;

x27124_27138.render = ((function (x27124_27138){
return (function (){
var this__25393__auto__ = this;
var this$ = this__25393__auto__;
var _STAR_reconciler_STAR_27127 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27128 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27129 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27130 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27131 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25393__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25393__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25393__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25393__auto__);

om.next._STAR_parent_STAR_ = this__25393__auto__;

try{var map__27132 = om.next.props.call(null,this$);
var map__27132__$1 = ((((!((map__27132 == null)))?((((map__27132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27132):map__27132);
var title = cljs.core.get.call(null,map__27132__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__27132__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (map__27132,map__27132__$1,title,list,_STAR_reconciler_STAR_27127,_STAR_depth_STAR_27128,_STAR_shared_STAR_27129,_STAR_instrument_STAR_27130,_STAR_parent_STAR_27131,this$,this__25393__auto__,x27124_27138){
return (function (p__27134){
var vec__27135 = p__27134;
var i = cljs.core.nth.call(null,vec__27135,(0),null);
var name = cljs.core.nth.call(null,vec__27135,(1),null);
return React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join('')));
});})(map__27132,map__27132__$1,title,list,_STAR_reconciler_STAR_27127,_STAR_depth_STAR_27128,_STAR_shared_STAR_27129,_STAR_instrument_STAR_27130,_STAR_parent_STAR_27131,this$,this__25393__auto__,x27124_27138))
,list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27131;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27130;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27129;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27128;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27127;
}});})(x27124_27138))
;


om_tutorial.core.AnimalsList.prototype.constructor = om_tutorial.core.AnimalsList;

om_tutorial.core.AnimalsList.prototype.constructor.displayName = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.prototype.om$isComponent = true;

var x27136_27142 = om_tutorial.core.AnimalsList;
x27136_27142.om$next$IQueryParams$ = true;

x27136_27142.om$next$IQueryParams$params$arity$1 = ((function (x27136_27142){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x27136_27142))
;

x27136_27142.om$next$IQuery$ = true;

x27136_27142.om$next$IQuery$query$arity$1 = ((function (x27136_27142){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x27136_27142))
;


var x27137_27143 = om_tutorial.core.AnimalsList.prototype;
x27137_27143.om$next$IQueryParams$ = true;

x27137_27143.om$next$IQueryParams$params$arity$1 = ((function (x27137_27143){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x27137_27143))
;

x27137_27143.om$next$IQuery$ = true;

x27137_27143.om$next$IQuery$query$arity$1 = ((function (x27137_27143){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x27137_27143))
;


om_tutorial.core.AnimalsList.cljs$lang$type = true;

om_tutorial.core.AnimalsList.cljs$lang$ctorStr = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.cljs$lang$ctorPrWriter = (function (this__25461__auto__,writer__25462__auto__,opt__25463__auto__){
return cljs.core._write.call(null,writer__25462__auto__,"om-tutorial.core/AnimalsList");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.AnimalsList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map