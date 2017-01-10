// Compiled by ClojureScript 1.9.293 {}
goog.provide('swino.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('swino.parser');
goog.require('om.dom');
goog.require('cljsjs.material_ui');
goog.require('swino.util');
goog.require('swino.state');
goog.require('swino.wine_view');
goog.require('cljs_react_material_ui.icons');
goog.require('om.next');
goog.require('cljs_react_material_ui.core');
goog.require('swino.wine_tile');
goog.require('swino.toolbar');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * @constructor
 */
swino.core.AppRoot = (function swino$core$AppRoot(){
var this__31575__auto__ = this;
React.Component.apply(this__31575__auto__,arguments);

if(!((this__31575__auto__.initLocalState == null))){
this__31575__auto__.state = this__31575__auto__.initLocalState();
} else {
this__31575__auto__.state = {};
}

return this__31575__auto__;
});

swino.core.AppRoot.prototype = goog.object.clone(React.Component.prototype);

var x44596_44606 = swino.core.AppRoot.prototype;
x44596_44606.componentWillUpdate = ((function (x44596_44606){
return (function (next_props__31511__auto__,next_state__31512__auto__){
var this__31510__auto__ = this;
if(((!((this__31510__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__31510__auto__.om$next$Ident$)))?true:false):false)){
var ident__31514__auto___44607 = om.next.ident.call(null,this__31510__auto__,om.next.props.call(null,this__31510__auto__));
var next_ident__31515__auto___44608 = om.next.ident.call(null,this__31510__auto__,om.next._next_props.call(null,next_props__31511__auto__,this__31510__auto__));
if(cljs.core.not_EQ_.call(null,ident__31514__auto___44607,next_ident__31515__auto___44608)){
var idxr__31516__auto___44609 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__31510__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__31516__auto___44609 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__31516__auto___44609),((function (idxr__31516__auto___44609,ident__31514__auto___44607,next_ident__31515__auto___44608,this__31510__auto__,x44596_44606){
return (function (indexes__31517__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__31517__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__31514__auto___44607], null),cljs.core.disj,this__31510__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__31515__auto___44608], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__31510__auto__);
});})(idxr__31516__auto___44609,ident__31514__auto___44607,next_ident__31515__auto___44608,this__31510__auto__,x44596_44606))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__31510__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__31510__auto__);
});})(x44596_44606))
;

x44596_44606.shouldComponentUpdate = ((function (x44596_44606){
return (function (next_props__31511__auto__,next_state__31512__auto__){
var this__31510__auto__ = this;
var next_children__31513__auto__ = next_props__31511__auto__.children;
var next_props__31511__auto____$1 = goog.object.get(next_props__31511__auto__,"omcljs$value");
var next_props__31511__auto____$2 = (function (){var G__44598 = next_props__31511__auto____$1;
if((next_props__31511__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__44598);
} else {
return G__44598;
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
});})(x44596_44606))
;

x44596_44606.componentWillUnmount = ((function (x44596_44606){
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
});})(x44596_44606))
;

x44596_44606.componentDidUpdate = ((function (x44596_44606){
return (function (prev_props__31518__auto__,prev_state__31519__auto__){
var this__31510__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__31510__auto__);
});})(x44596_44606))
;

x44596_44606.isMounted = ((function (x44596_44606){
return (function (){
var this__31510__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__31510__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44596_44606))
;

x44596_44606.componentWillMount = ((function (x44596_44606){
return (function (){
var this__31510__auto__ = this;
var indexer__31520__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__31510__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__31520__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__31520__auto__,this__31510__auto__);
}
});})(x44596_44606))
;

x44596_44606.render = ((function (x44596_44606){
return (function (){
var this__31509__auto__ = this;
var this$ = this__31509__auto__;
var _STAR_reconciler_STAR_44599 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44600 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44601 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44602 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44603 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__31509__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__31509__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__31509__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__31509__auto__);

om.next._STAR_parent_STAR_ = this__31509__auto__;

try{var props = om.next.props.call(null,this$);
var state = om.next.get_state.call(null,this$);
var wine_list = new cljs.core.Keyword("wine","list","wine/list",761667164).cljs$core$IFn$_invoke$arity$1(props);
var color_list = new cljs.core.Keyword("color","list","color/list",552902846).cljs$core$IFn$_invoke$arity$1(props);
var wine_focus = cljs.core.first.call(null,new cljs.core.Keyword("wine","focus","wine/focus",222598786).cljs$core$IFn$_invoke$arity$1(props));
return cljs_react_material_ui.core.mui_theme_provider.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"primary1-color","primary1-color",-450634374),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"deep-orange-a100","deep-orange-a100",-560524699))], null),new cljs.core.Keyword(null,"raised-button","raised-button",1120646461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary-text-color","primary-text-color",-1255467826),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"light-black","light-black",1983033322)),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(200)], null)], null))], null),React.DOM.div(({"className": "h-100"}),om.util.force_children.call(null,cljs_react_material_ui.core.grid_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cell-height","cell-height",776757236),(50),new cljs.core.Keyword(null,"cols","cols",-1914801295),(2)], null),cljs.core.map.call(null,swino.wine_tile.tile_wine,wine_list))),om.util.force_children.call(null,(cljs.core.truth_(wine_focus)?swino.wine_view.view_wine.call(null,wine_focus):swino.toolbar.toolbar.call(null))),om.util.force_children.call(null,React.DOM.img(({"src": "./swino-button.svg", "height": (56), "width": (56), "className": "swino-button"}))),om.util.force_children.call(null,cljs_react_material_ui.core.floating_action_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),((function (props,state,wine_list,color_list,wine_focus,_STAR_reconciler_STAR_44599,_STAR_depth_STAR_44600,_STAR_shared_STAR_44601,_STAR_instrument_STAR_44602,_STAR_parent_STAR_44603,this$,this__31509__auto__,x44596_44606){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22857__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("wine","add","wine/add",1862716189,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("wine","new","wine/new",-2084868497)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("wine","list","wine/list",761667164)))))));
});})(props,state,wine_list,color_list,wine_focus,_STAR_reconciler_STAR_44599,_STAR_depth_STAR_44600,_STAR_shared_STAR_44601,_STAR_instrument_STAR_44602,_STAR_parent_STAR_44603,this$,this__31509__auto__,x44596_44606))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"12%","12%",-117947074),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"10%","10%",-1282153063),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(-28),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(-28)], null)], null),cljs_react_material_ui.icons.content_add.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(56),new cljs.core.Keyword(null,"height","height",1025178622),(56)], null)], null))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44603;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44602;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44601;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44600;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44599;
}});})(x44596_44606))
;


swino.core.AppRoot.prototype.constructor = swino.core.AppRoot;

swino.core.AppRoot.prototype.constructor.displayName = "swino.core/AppRoot";

swino.core.AppRoot.prototype.om$isComponent = true;

var x44604_44610 = swino.core.AppRoot;
x44604_44610.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44604_44610.om$next$IQuery$query$arity$1 = ((function (x44604_44610){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wine","list","wine/list",761667164),om.next.get_query.call(null,swino.wine_tile.WineTile)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("color","list","color/list",552902846),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("color","name","color/name",1619226510)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wine","focus","wine/focus",222598786),om.next.get_query.call(null,swino.wine_view.WineView)], null)], null);
});})(x44604_44610))
;


var x44605_44611 = swino.core.AppRoot.prototype;
x44605_44611.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44605_44611.om$next$IQuery$query$arity$1 = ((function (x44605_44611){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wine","list","wine/list",761667164),om.next.get_query.call(null,swino.wine_tile.WineTile)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("color","list","color/list",552902846),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("color","name","color/name",1619226510)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wine","focus","wine/focus",222598786),om.next.get_query.call(null,swino.wine_view.WineView)], null)], null);
});})(x44605_44611))
;


swino.core.AppRoot.cljs$lang$type = true;

swino.core.AppRoot.cljs$lang$ctorStr = "swino.core/AppRoot";

swino.core.AppRoot.cljs$lang$ctorPrWriter = (function (this__31577__auto__,writer__31578__auto__,opt__31579__auto__){
return cljs.core._write.call(null,writer__31578__auto__,"swino.core/AppRoot");
});
swino.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,swino.state.init_state),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),swino.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),swino.parser.mutate], null))], null));
om.next.add_root_BANG_.call(null,swino.core.reconciler,swino.core.AppRoot,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map