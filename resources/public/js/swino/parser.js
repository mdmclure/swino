// Compiled by ClojureScript 1.9.293 {}
goog.provide('swino.parser');
goog.require('cljs.core');
goog.require('om.next');
goog.require('swino.state');
if(typeof swino.parser.read !== 'undefined'){
} else {
swino.parser.read = (function (){var method_table__22948__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22949__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22950__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22951__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22952__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"swino.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22952__auto__,method_table__22948__auto__,prefer_table__22949__auto__,method_cache__22950__auto__,cached_hierarchy__22951__auto__));
})();
}
cljs.core._add_method.call(null,swino.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__39473,k,_){
var map__39474 = p__39473;
var map__39474__$1 = ((((!((map__39474 == null)))?((((map__39474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39474):map__39474);
var state = cljs.core.get.call(null,map__39474__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__39474__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false,new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,k.call(null,st),st)], null);
}));
cljs.core._add_method.call(null,swino.parser.read,new cljs.core.Keyword("wine","new","wine/new",-2084868497),(function (p__39476,k,_){
var map__39477 = p__39476;
var map__39477__$1 = ((((!((map__39477 == null)))?((((map__39477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39477):map__39477);
var state = cljs.core.get.call(null,map__39477__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k.call(null,cljs.core.deref.call(null,state))], null);
}));
if(typeof swino.parser.mutate !== 'undefined'){
} else {
swino.parser.mutate = (function (){var method_table__22948__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22949__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22950__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22951__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22952__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"swino.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22952__auto__,method_table__22948__auto__,prefer_table__22949__auto__,method_cache__22950__auto__,cached_hierarchy__22951__auto__));
})();
}
cljs.core._add_method.call(null,swino.parser.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,k,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
}));
cljs.core._add_method.call(null,swino.parser.mutate,new cljs.core.Symbol("wine","change","wine/change",473565176,null),(function (p__39479,_,p__39480){
var map__39481 = p__39479;
var map__39481__$1 = ((((!((map__39481 == null)))?((((map__39481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39481):map__39481);
var state = cljs.core.get.call(null,map__39481__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__39482 = p__39480;
var map__39482__$1 = ((((!((map__39482 == null)))?((((map__39482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39482):map__39482);
var value = cljs.core.get.call(null,map__39482__$1,new cljs.core.Keyword(null,"value","value",305978217));
var path = cljs.core.get.call(null,map__39482__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__39481,map__39481__$1,state,map__39482,map__39482__$1,value,path){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,cljs.core.cons.call(null,new cljs.core.Keyword("wine","new","wine/new",-2084868497),path),value);
});})(map__39481,map__39481__$1,state,map__39482,map__39482__$1,value,path))
], null);
}));
cljs.core._add_method.call(null,swino.parser.mutate,new cljs.core.Symbol("wine","focus","wine/focus",1863130313,null),(function (p__39485,_,p__39486){
var map__39487 = p__39485;
var map__39487__$1 = ((((!((map__39487 == null)))?((((map__39487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39487):map__39487);
var state = cljs.core.get.call(null,map__39487__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__39488 = p__39486;
var map__39488__$1 = ((((!((map__39488 == null)))?((((map__39488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39488):map__39488);
var id = cljs.core.get.call(null,map__39488__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__39487,map__39487__$1,state,map__39488,map__39488__$1,id){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("wine","focus","wine/focus",222598786),(cljs.core.truth_(id)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wine","by-id","wine/by-id",-2141512132),id], null)], null):null));

return cljs.core.println.call(null,"State: ",state);
});})(map__39487,map__39487__$1,state,map__39488,map__39488__$1,id))
], null);
}));
cljs.core._add_method.call(null,swino.parser.mutate,new cljs.core.Symbol("wine","add","wine/add",1862716189,null),(function (p__39491,_){
var map__39492 = p__39491;
var map__39492__$1 = ((((!((map__39492 == null)))?((((map__39492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39492):map__39492);
var state = cljs.core.get.call(null,map__39492__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__39492,map__39492__$1,state){
return (function (){
var id = cljs.core.rand_int.call(null,(9999));
var person_new = cljs.core.assoc.call(null,new cljs.core.Keyword("person","new","person/new",1050106675).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword("db","id","db/id",-1388397098),id);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),id], null),person_new);

cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("person","list","person/list",1618531536),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),id], null));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("person","new","person/new",1050106675),new cljs.core.Keyword("person","new","person/new",1050106675).cljs$core$IFn$_invoke$arity$1(swino.state.init_state));
});})(map__39492,map__39492__$1,state))
], null);
}));

//# sourceMappingURL=parser.js.map