// Compiled by ClojureScript 1.9.293 {}
goog.provide('swino.toolbar');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.icons');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
swino.toolbar.Toolbar = (function swino$toolbar$Toolbar(){
var this__31575__auto__ = this;
React.Component.apply(this__31575__auto__,arguments);

if(!((this__31575__auto__.initLocalState == null))){
this__31575__auto__.state = this__31575__auto__.initLocalState();
} else {
this__31575__auto__.state = {};
}

return this__31575__auto__;
});

swino.toolbar.Toolbar.prototype = goog.object.clone(React.Component.prototype);

var x44574_44584 = swino.toolbar.Toolbar.prototype;
x44574_44584.componentWillUpdate = ((function (x44574_44584){
return (function (next_props__31511__auto__,next_state__31512__auto__){
var this__31510__auto__ = this;
if(((!((this__31510__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__31510__auto__.om$next$Ident$)))?true:false):false)){
var ident__31514__auto___44585 = om.next.ident.call(null,this__31510__auto__,om.next.props.call(null,this__31510__auto__));
var next_ident__31515__auto___44586 = om.next.ident.call(null,this__31510__auto__,om.next._next_props.call(null,next_props__31511__auto__,this__31510__auto__));
if(cljs.core.not_EQ_.call(null,ident__31514__auto___44585,next_ident__31515__auto___44586)){
var idxr__31516__auto___44587 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__31510__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__31516__auto___44587 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__31516__auto___44587),((function (idxr__31516__auto___44587,ident__31514__auto___44585,next_ident__31515__auto___44586,this__31510__auto__,x44574_44584){
return (function (indexes__31517__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__31517__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__31514__auto___44585], null),cljs.core.disj,this__31510__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__31515__auto___44586], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__31510__auto__);
});})(idxr__31516__auto___44587,ident__31514__auto___44585,next_ident__31515__auto___44586,this__31510__auto__,x44574_44584))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__31510__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__31510__auto__);
});})(x44574_44584))
;

x44574_44584.shouldComponentUpdate = ((function (x44574_44584){
return (function (next_props__31511__auto__,next_state__31512__auto__){
var this__31510__auto__ = this;
var next_children__31513__auto__ = next_props__31511__auto__.children;
var next_props__31511__auto____$1 = goog.object.get(next_props__31511__auto__,"omcljs$value");
var next_props__31511__auto____$2 = (function (){var G__44576 = next_props__31511__auto____$1;
if((next_props__31511__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__44576);
} else {
return G__44576;
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
});})(x44574_44584))
;

x44574_44584.componentWillUnmount = ((function (x44574_44584){
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
});})(x44574_44584))
;

x44574_44584.componentDidUpdate = ((function (x44574_44584){
return (function (prev_props__31518__auto__,prev_state__31519__auto__){
var this__31510__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__31510__auto__);
});})(x44574_44584))
;

x44574_44584.isMounted = ((function (x44574_44584){
return (function (){
var this__31510__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__31510__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44574_44584))
;

x44574_44584.componentWillMount = ((function (x44574_44584){
return (function (){
var this__31510__auto__ = this;
var indexer__31520__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__31510__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__31520__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__31520__auto__,this__31510__auto__);
}
});})(x44574_44584))
;

x44574_44584.render = ((function (x44574_44584){
return (function (){
var this__31509__auto__ = this;
var this$ = this__31509__auto__;
var _STAR_reconciler_STAR_44577 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44578 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44579 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44580 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44581 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__31509__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__31509__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__31509__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__31509__auto__);

om.next._STAR_parent_STAR_ = this__31509__auto__;

try{var filter = om.next.props.call(null,this$);
cljs.core.println.call(null,filter);

return React.DOM.div(({"className": "toolbar"}));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44581;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44580;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44579;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44578;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44577;
}});})(x44574_44584))
;


swino.toolbar.Toolbar.prototype.constructor = swino.toolbar.Toolbar;

swino.toolbar.Toolbar.prototype.constructor.displayName = "swino.toolbar/Toolbar";

swino.toolbar.Toolbar.prototype.om$isComponent = true;

var x44582_44588 = swino.toolbar.Toolbar;
x44582_44588.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44582_44588.om$next$IQuery$query$arity$1 = ((function (x44582_44588){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("filter","focus","filter/focus",-1037456609)], null);
});})(x44582_44588))
;


var x44583_44589 = swino.toolbar.Toolbar.prototype;
x44583_44589.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44583_44589.om$next$IQuery$query$arity$1 = ((function (x44583_44589){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("filter","focus","filter/focus",-1037456609)], null);
});})(x44583_44589))
;


swino.toolbar.Toolbar.cljs$lang$type = true;

swino.toolbar.Toolbar.cljs$lang$ctorStr = "swino.toolbar/Toolbar";

swino.toolbar.Toolbar.cljs$lang$ctorPrWriter = (function (this__31577__auto__,writer__31578__auto__,opt__31579__auto__){
return cljs.core._write.call(null,writer__31578__auto__,"swino.toolbar/Toolbar");
});
swino.toolbar.toolbar = om.next.factory.call(null,swino.toolbar.Toolbar,cljs.core.PersistentArrayMap.EMPTY);
goog.exportSymbol('swino.toolbar.toolbar', swino.toolbar.toolbar);

//# sourceMappingURL=toolbar.js.map