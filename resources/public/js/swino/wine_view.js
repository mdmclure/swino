// Compiled by ClojureScript 1.9.293 {}
goog.provide('swino.wine_view');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('swino.parser');
goog.require('om.dom');
goog.require('cljsjs.material_ui');
goog.require('swino.util');
goog.require('cljs.core.async');
goog.require('cljs_react_material_ui.icons');
goog.require('om.next');
goog.require('cljs_react_material_ui.core');
swino.wine_view.async_transition = (function swino$wine_view$async_transition(component,state_key,update_fn,end_fn,final_transaction){
if(cljs.core.truth_(state_key.call(null,om.next.get_state.call(null,component)))){
var c__28720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28720__auto__){
return (function (){
var f__28721__auto__ = (function (){var switch__28655__auto__ = ((function (c__28720__auto__){
return (function (state_44297){
var state_val_44298 = (state_44297[(1)]);
if((state_val_44298 === (1))){
var state_44297__$1 = state_44297;
var statearr_44299_44314 = state_44297__$1;
(statearr_44299_44314[(2)] = null);

(statearr_44299_44314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44298 === (2))){
var inst_44281 = om.next.get_state.call(null,component);
var inst_44282 = state_key.call(null,inst_44281);
var inst_44283 = end_fn.call(null,inst_44282);
var state_44297__$1 = state_44297;
if(cljs.core.truth_(inst_44283)){
var statearr_44300_44315 = state_44297__$1;
(statearr_44300_44315[(1)] = (4));

} else {
var statearr_44301_44316 = state_44297__$1;
(statearr_44301_44316[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44298 === (3))){
var inst_44295 = (state_44297[(2)]);
var state_44297__$1 = state_44297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44297__$1,inst_44295);
} else {
if((state_val_44298 === (4))){
var inst_44285 = om.next.transact_BANG_.call(null,component,final_transaction);
var state_44297__$1 = state_44297;
var statearr_44302_44317 = state_44297__$1;
(statearr_44302_44317[(2)] = inst_44285);

(statearr_44302_44317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44298 === (5))){
var inst_44287 = om.next.update_state_BANG_.call(null,component,cljs.core.update,state_key,update_fn);
var inst_44288 = cljs.core.async.timeout.call(null,(10));
var state_44297__$1 = (function (){var statearr_44303 = state_44297;
(statearr_44303[(7)] = inst_44287);

return statearr_44303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44297__$1,(7),inst_44288);
} else {
if((state_val_44298 === (6))){
var inst_44293 = (state_44297[(2)]);
var state_44297__$1 = state_44297;
var statearr_44304_44318 = state_44297__$1;
(statearr_44304_44318[(2)] = inst_44293);

(statearr_44304_44318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44298 === (7))){
var inst_44290 = (state_44297[(2)]);
var state_44297__$1 = (function (){var statearr_44305 = state_44297;
(statearr_44305[(8)] = inst_44290);

return statearr_44305;
})();
var statearr_44306_44319 = state_44297__$1;
(statearr_44306_44319[(2)] = null);

(statearr_44306_44319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28720__auto__))
;
return ((function (switch__28655__auto__,c__28720__auto__){
return (function() {
var swino$wine_view$async_transition_$_state_machine__28656__auto__ = null;
var swino$wine_view$async_transition_$_state_machine__28656__auto____0 = (function (){
var statearr_44310 = [null,null,null,null,null,null,null,null,null];
(statearr_44310[(0)] = swino$wine_view$async_transition_$_state_machine__28656__auto__);

(statearr_44310[(1)] = (1));

return statearr_44310;
});
var swino$wine_view$async_transition_$_state_machine__28656__auto____1 = (function (state_44297){
while(true){
var ret_value__28657__auto__ = (function (){try{while(true){
var result__28658__auto__ = switch__28655__auto__.call(null,state_44297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28658__auto__;
}
break;
}
}catch (e44311){if((e44311 instanceof Object)){
var ex__28659__auto__ = e44311;
var statearr_44312_44320 = state_44297;
(statearr_44312_44320[(5)] = ex__28659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44321 = state_44297;
state_44297 = G__44321;
continue;
} else {
return ret_value__28657__auto__;
}
break;
}
});
swino$wine_view$async_transition_$_state_machine__28656__auto__ = function(state_44297){
switch(arguments.length){
case 0:
return swino$wine_view$async_transition_$_state_machine__28656__auto____0.call(this);
case 1:
return swino$wine_view$async_transition_$_state_machine__28656__auto____1.call(this,state_44297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swino$wine_view$async_transition_$_state_machine__28656__auto__.cljs$core$IFn$_invoke$arity$0 = swino$wine_view$async_transition_$_state_machine__28656__auto____0;
swino$wine_view$async_transition_$_state_machine__28656__auto__.cljs$core$IFn$_invoke$arity$1 = swino$wine_view$async_transition_$_state_machine__28656__auto____1;
return swino$wine_view$async_transition_$_state_machine__28656__auto__;
})()
;})(switch__28655__auto__,c__28720__auto__))
})();
var state__28722__auto__ = (function (){var statearr_44313 = f__28721__auto__.call(null);
(statearr_44313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28720__auto__);

return statearr_44313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28722__auto__);
});})(c__28720__auto__))
);

return c__28720__auto__;
} else {
return null;
}
});
/**
 * @constructor
 */
swino.wine_view.WineView = (function swino$wine_view$WineView(){
var this__31575__auto__ = this;
React.Component.apply(this__31575__auto__,arguments);

if(!((this__31575__auto__.initLocalState == null))){
this__31575__auto__.state = this__31575__auto__.initLocalState();
} else {
this__31575__auto__.state = {};
}

return this__31575__auto__;
});

swino.wine_view.WineView.prototype = goog.object.clone(React.Component.prototype);

var x44328_44348 = swino.wine_view.WineView.prototype;
x44328_44348.componentWillUpdate = ((function (x44328_44348){
return (function (next_props__31511__auto__,next_state__31512__auto__){
var this__31510__auto__ = this;
if(((!((this__31510__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__31510__auto__.om$next$Ident$)))?true:false):false)){
var ident__31514__auto___44349 = om.next.ident.call(null,this__31510__auto__,om.next.props.call(null,this__31510__auto__));
var next_ident__31515__auto___44350 = om.next.ident.call(null,this__31510__auto__,om.next._next_props.call(null,next_props__31511__auto__,this__31510__auto__));
if(cljs.core.not_EQ_.call(null,ident__31514__auto___44349,next_ident__31515__auto___44350)){
var idxr__31516__auto___44351 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__31510__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__31516__auto___44351 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__31516__auto___44351),((function (idxr__31516__auto___44351,ident__31514__auto___44349,next_ident__31515__auto___44350,this__31510__auto__,x44328_44348){
return (function (indexes__31517__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__31517__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__31514__auto___44349], null),cljs.core.disj,this__31510__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__31515__auto___44350], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__31510__auto__);
});})(idxr__31516__auto___44351,ident__31514__auto___44349,next_ident__31515__auto___44350,this__31510__auto__,x44328_44348))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__31510__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__31510__auto__);
});})(x44328_44348))
;

x44328_44348.shouldComponentUpdate = ((function (x44328_44348){
return (function (next_props__31511__auto__,next_state__31512__auto__){
var this__31510__auto__ = this;
var next_children__31513__auto__ = next_props__31511__auto__.children;
var next_props__31511__auto____$1 = goog.object.get(next_props__31511__auto__,"omcljs$value");
var next_props__31511__auto____$2 = (function (){var G__44330 = next_props__31511__auto____$1;
if((next_props__31511__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__44330);
} else {
return G__44330;
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
});})(x44328_44348))
;

x44328_44348.componentWillUnmount = ((function (x44328_44348){
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
});})(x44328_44348))
;

x44328_44348.componentDidUpdate = ((function (x44328_44348){
return (function (prev_props__31518__auto__,prev_state__31519__auto__){
var this__31510__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__31510__auto__);
});})(x44328_44348))
;

x44328_44348.isMounted = ((function (x44328_44348){
return (function (){
var this__31510__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__31510__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44328_44348))
;

x44328_44348.initLocalState = ((function (x44328_44348){
return (function (){
var this$ = this;
var ret__31488__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),(84)], null);
var obj44332 = {"omcljs$state":ret__31488__auto__};
return obj44332;
});})(x44328_44348))
;

x44328_44348.componentWillMount = ((function (x44328_44348){
return (function (){
var this__31502__auto__ = this;
var this$ = this__31502__auto__;
var indexer__31503__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__31502__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__31503__auto__ == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__31503__auto__,this__31502__auto__);
}

return swino.wine_view.async_transition.call(null,this$,new cljs.core.Keyword(null,"top","top",-1856271961),((function (this$,indexer__31503__auto__,this__31502__auto__,x44328_44348){
return (function (p1__44322_SHARP_){
return (p1__44322_SHARP_ - (16));
});})(this$,indexer__31503__auto__,this__31502__auto__,x44328_44348))
,((function (this$,indexer__31503__auto__,this__31502__auto__,x44328_44348){
return (function (p1__44323_SHARP_){
return (p1__44323_SHARP_ <= (6));
});})(this$,indexer__31503__auto__,this__31502__auto__,x44328_44348))
,null);
});})(x44328_44348))
;

x44328_44348.render = ((function (x44328_44348){
return (function (){
var this__31509__auto__ = this;
var this$ = this__31509__auto__;
var _STAR_reconciler_STAR_44333 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44334 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44335 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44336 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44337 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__31509__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__31509__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__31509__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__31509__auto__);

om.next._STAR_parent_STAR_ = this__31509__auto__;

try{var map__44338 = om.next.props.call(null,this$);
var map__44338__$1 = ((((!((map__44338 == null)))?((((map__44338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44338):map__44338);
var id = cljs.core.get.call(null,map__44338__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var name = cljs.core.get.call(null,map__44338__$1,new cljs.core.Keyword("wine","name","wine/name",1848373320));
var year = cljs.core.get.call(null,map__44338__$1,new cljs.core.Keyword("wine","year","wine/year",338649532));
var color = cljs.core.get.call(null,map__44338__$1,new cljs.core.Keyword("wine","color","wine/color",1017397294));
var topk = cljs.core.keyword.call(null,[cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))),cljs.core.str("%")].join(''));
return cljs_react_material_ui.core.paper.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"wine-view",new cljs.core.Keyword(null,"zDepth","zDepth",1069399109),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),topk], null)], null),React.DOM.h1(({"className": "wine-header"}),om.util.force_children.call(null,name)),cljs_react_material_ui.icons.content_clear.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"exit",new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),((function (map__44338,map__44338__$1,id,name,year,color,topk,_STAR_reconciler_STAR_44333,_STAR_depth_STAR_44334,_STAR_shared_STAR_44335,_STAR_instrument_STAR_44336,_STAR_parent_STAR_44337,this$,this__31509__auto__,x44328_44348){
return (function (){
return swino.wine_view.async_transition.call(null,this$,new cljs.core.Keyword(null,"top","top",-1856271961),((function (map__44338,map__44338__$1,id,name,year,color,topk,_STAR_reconciler_STAR_44333,_STAR_depth_STAR_44334,_STAR_shared_STAR_44335,_STAR_instrument_STAR_44336,_STAR_parent_STAR_44337,this$,this__31509__auto__,x44328_44348){
return (function (x){
return (x + (4));
});})(map__44338,map__44338__$1,id,name,year,color,topk,_STAR_reconciler_STAR_44333,_STAR_depth_STAR_44334,_STAR_shared_STAR_44335,_STAR_instrument_STAR_44336,_STAR_parent_STAR_44337,this$,this__31509__auto__,x44328_44348))
,((function (map__44338,map__44338__$1,id,name,year,color,topk,_STAR_reconciler_STAR_44333,_STAR_depth_STAR_44334,_STAR_shared_STAR_44335,_STAR_instrument_STAR_44336,_STAR_parent_STAR_44337,this$,this__31509__auto__,x44328_44348){
return (function (x){
return (x >= (84));
});})(map__44338,map__44338__$1,id,name,year,color,topk,_STAR_reconciler_STAR_44333,_STAR_depth_STAR_44334,_STAR_shared_STAR_44335,_STAR_instrument_STAR_44336,_STAR_parent_STAR_44337,this$,this__31509__auto__,x44328_44348))
,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22857__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("wine","focus","wine/focus",1863130313,null)),(function (){var x__22857__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("wine","focus","wine/focus",222598786)))))));
});})(map__44338,map__44338__$1,id,name,year,color,topk,_STAR_reconciler_STAR_44333,_STAR_depth_STAR_44334,_STAR_shared_STAR_44335,_STAR_instrument_STAR_44336,_STAR_parent_STAR_44337,this$,this__31509__auto__,x44328_44348))
], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44337;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44336;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44335;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44334;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44333;
}});})(x44328_44348))
;


swino.wine_view.WineView.prototype.constructor = swino.wine_view.WineView;

swino.wine_view.WineView.prototype.constructor.displayName = "swino.wine-view/WineView";

swino.wine_view.WineView.prototype.om$isComponent = true;

var x44340_44352 = swino.wine_view.WineView;
x44340_44352.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44340_44352.om$next$Ident$ident$arity$2 = ((function (x44340_44352){
return (function (this$,p__44341){
var map__44342 = p__44341;
var map__44342__$1 = ((((!((map__44342 == null)))?((((map__44342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44342):map__44342);
var id = cljs.core.get.call(null,map__44342__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wine","by-id","wine/by-id",-2141512132),id], null);
});})(x44340_44352))
;

x44340_44352.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44340_44352.om$next$IQuery$query$arity$1 = ((function (x44340_44352){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("wine","name","wine/name",1848373320),new cljs.core.Keyword("wine","year","wine/year",338649532),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wine","color","wine/color",1017397294),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("color","name","color/name",1619226510)], null)], null)], null);
});})(x44340_44352))
;


var x44344_44353 = swino.wine_view.WineView.prototype;
x44344_44353.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44344_44353.om$next$Ident$ident$arity$2 = ((function (x44344_44353){
return (function (this$,p__44345){
var map__44346 = p__44345;
var map__44346__$1 = ((((!((map__44346 == null)))?((((map__44346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44346):map__44346);
var id = cljs.core.get.call(null,map__44346__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wine","by-id","wine/by-id",-2141512132),id], null);
});})(x44344_44353))
;

x44344_44353.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44344_44353.om$next$IQuery$query$arity$1 = ((function (x44344_44353){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("wine","name","wine/name",1848373320),new cljs.core.Keyword("wine","year","wine/year",338649532),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wine","color","wine/color",1017397294),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("color","name","color/name",1619226510)], null)], null)], null);
});})(x44344_44353))
;


swino.wine_view.WineView.cljs$lang$type = true;

swino.wine_view.WineView.cljs$lang$ctorStr = "swino.wine-view/WineView";

swino.wine_view.WineView.cljs$lang$ctorPrWriter = (function (this__31577__auto__,writer__31578__auto__,opt__31579__auto__){
return cljs.core._write.call(null,writer__31578__auto__,"swino.wine-view/WineView");
});
swino.wine_view.view_wine = om.next.factory.call(null,swino.wine_view.WineView,cljs.core.PersistentArrayMap.EMPTY);
goog.exportSymbol('swino.wine_view.view_wine', swino.wine_view.view_wine);

//# sourceMappingURL=wine_view.js.map