// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__23135__auto__ = [];
var len__23128__auto___37246 = arguments.length;
var i__23129__auto___37248 = (0);
while(true){
if((i__23129__auto___37248 < len__23128__auto___37246)){
args__23135__auto__.push((arguments[i__23129__auto___37248]));

var G__37249 = (i__23129__auto___37248 + (1));
i__23129__auto___37248 = G__37249;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((2) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23136__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__37237_37253 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__37238_37254 = null;
var count__37239_37255 = (0);
var i__37240_37256 = (0);
while(true){
if((i__37240_37256 < count__37239_37255)){
var k_37258 = cljs.core._nth.call(null,chunk__37238_37254,i__37240_37256);
e.setAttribute(cljs.core.name.call(null,k_37258),cljs.core.get.call(null,attrs,k_37258));

var G__37260 = seq__37237_37253;
var G__37261 = chunk__37238_37254;
var G__37262 = count__37239_37255;
var G__37263 = (i__37240_37256 + (1));
seq__37237_37253 = G__37260;
chunk__37238_37254 = G__37261;
count__37239_37255 = G__37262;
i__37240_37256 = G__37263;
continue;
} else {
var temp__4657__auto___37264 = cljs.core.seq.call(null,seq__37237_37253);
if(temp__4657__auto___37264){
var seq__37237_37267__$1 = temp__4657__auto___37264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37237_37267__$1)){
var c__22834__auto___37268 = cljs.core.chunk_first.call(null,seq__37237_37267__$1);
var G__37270 = cljs.core.chunk_rest.call(null,seq__37237_37267__$1);
var G__37271 = c__22834__auto___37268;
var G__37272 = cljs.core.count.call(null,c__22834__auto___37268);
var G__37273 = (0);
seq__37237_37253 = G__37270;
chunk__37238_37254 = G__37271;
count__37239_37255 = G__37272;
i__37240_37256 = G__37273;
continue;
} else {
var k_37274 = cljs.core.first.call(null,seq__37237_37267__$1);
e.setAttribute(cljs.core.name.call(null,k_37274),cljs.core.get.call(null,attrs,k_37274));

var G__37275 = cljs.core.next.call(null,seq__37237_37267__$1);
var G__37276 = null;
var G__37277 = (0);
var G__37278 = (0);
seq__37237_37253 = G__37275;
chunk__37238_37254 = G__37276;
count__37239_37255 = G__37277;
i__37240_37256 = G__37278;
continue;
}
} else {
}
}
break;
}

var seq__37241_37283 = cljs.core.seq.call(null,children);
var chunk__37242_37284 = null;
var count__37243_37285 = (0);
var i__37244_37286 = (0);
while(true){
if((i__37244_37286 < count__37243_37285)){
var ch_37289 = cljs.core._nth.call(null,chunk__37242_37284,i__37244_37286);
e.appendChild(ch_37289);

var G__37290 = seq__37241_37283;
var G__37291 = chunk__37242_37284;
var G__37292 = count__37243_37285;
var G__37293 = (i__37244_37286 + (1));
seq__37241_37283 = G__37290;
chunk__37242_37284 = G__37291;
count__37243_37285 = G__37292;
i__37244_37286 = G__37293;
continue;
} else {
var temp__4657__auto___37294 = cljs.core.seq.call(null,seq__37241_37283);
if(temp__4657__auto___37294){
var seq__37241_37296__$1 = temp__4657__auto___37294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37241_37296__$1)){
var c__22834__auto___37298 = cljs.core.chunk_first.call(null,seq__37241_37296__$1);
var G__37299 = cljs.core.chunk_rest.call(null,seq__37241_37296__$1);
var G__37300 = c__22834__auto___37298;
var G__37301 = cljs.core.count.call(null,c__22834__auto___37298);
var G__37302 = (0);
seq__37241_37283 = G__37299;
chunk__37242_37284 = G__37300;
count__37243_37285 = G__37301;
i__37244_37286 = G__37302;
continue;
} else {
var ch_37303 = cljs.core.first.call(null,seq__37241_37296__$1);
e.appendChild(ch_37303);

var G__37304 = cljs.core.next.call(null,seq__37241_37296__$1);
var G__37305 = null;
var G__37306 = (0);
var G__37307 = (0);
seq__37241_37283 = G__37304;
chunk__37242_37284 = G__37305;
count__37243_37285 = G__37306;
i__37244_37286 = G__37307;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq37234){
var G__37235 = cljs.core.first.call(null,seq37234);
var seq37234__$1 = cljs.core.next.call(null,seq37234);
var G__37236 = cljs.core.first.call(null,seq37234__$1);
var seq37234__$2 = cljs.core.next.call(null,seq37234__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__37235,G__37236,seq37234__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__22948__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22949__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22950__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22951__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22952__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__22948__auto__,prefer_table__22949__auto__,method_cache__22950__auto__,cached_hierarchy__22951__auto__,hierarchy__22952__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__22948__auto__,prefer_table__22949__auto__,method_cache__22950__auto__,cached_hierarchy__22951__auto__,hierarchy__22952__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22952__auto__,method_table__22948__auto__,prefer_table__22949__auto__,method_cache__22950__auto__,cached_hierarchy__22951__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_37334 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_37334.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_37334.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_37334.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_37334);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__37342,st_map){
var map__37350 = p__37342;
var map__37350__$1 = ((((!((map__37350 == null)))?((((map__37350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37350):map__37350);
var container_el = cljs.core.get.call(null,map__37350__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__37350,map__37350__$1,container_el){
return (function (p__37352){
var vec__37353 = p__37352;
var k = cljs.core.nth.call(null,vec__37353,(0),null);
var v = cljs.core.nth.call(null,vec__37353,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__37350,map__37350__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__37361,dom_str){
var map__37366 = p__37361;
var map__37366__$1 = ((((!((map__37366 == null)))?((((map__37366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37366):map__37366);
var c = map__37366__$1;
var content_area_el = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__37378){
var map__37381 = p__37378;
var map__37381__$1 = ((((!((map__37381 == null)))?((((map__37381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37381):map__37381);
var content_area_el = cljs.core.get.call(null,map__37381__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__26288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto__){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto__){
return (function (state_37427){
var state_val_37428 = (state_37427[(1)]);
if((state_val_37428 === (1))){
var inst_37412 = (state_37427[(7)]);
var inst_37412__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37413 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37414 = ["10px","10px","100%","68px","1.0"];
var inst_37415 = cljs.core.PersistentHashMap.fromArrays(inst_37413,inst_37414);
var inst_37416 = cljs.core.merge.call(null,inst_37415,style);
var inst_37417 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37412__$1,inst_37416);
var inst_37418 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37412__$1,msg);
var inst_37419 = cljs.core.async.timeout.call(null,(300));
var state_37427__$1 = (function (){var statearr_37430 = state_37427;
(statearr_37430[(8)] = inst_37418);

(statearr_37430[(7)] = inst_37412__$1);

(statearr_37430[(9)] = inst_37417);

return statearr_37430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37427__$1,(2),inst_37419);
} else {
if((state_val_37428 === (2))){
var inst_37412 = (state_37427[(7)]);
var inst_37421 = (state_37427[(2)]);
var inst_37422 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_37423 = ["auto"];
var inst_37424 = cljs.core.PersistentHashMap.fromArrays(inst_37422,inst_37423);
var inst_37425 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37412,inst_37424);
var state_37427__$1 = (function (){var statearr_37431 = state_37427;
(statearr_37431[(10)] = inst_37421);

return statearr_37431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37427__$1,inst_37425);
} else {
return null;
}
}
});})(c__26288__auto__))
;
return ((function (switch__25578__auto__,c__26288__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto____0 = (function (){
var statearr_37437 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37437[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto__);

(statearr_37437[(1)] = (1));

return statearr_37437;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto____1 = (function (state_37427){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_37427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e37438){if((e37438 instanceof Object)){
var ex__25582__auto__ = e37438;
var statearr_37439_37450 = state_37427;
(statearr_37439_37450[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37455 = state_37427;
state_37427 = G__37455;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto__ = function(state_37427){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto____1.call(this,state_37427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto__))
})();
var state__26290__auto__ = (function (){var statearr_37441 = f__26289__auto__.call(null);
(statearr_37441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto__);

return statearr_37441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto__))
);

return c__26288__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__37470 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__37470,(0),null);
var ln = cljs.core.nth.call(null,vec__37470,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__37489 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__37489,(0),null);
var file_line = cljs.core.nth.call(null,vec__37489,(1),null);
var file_column = cljs.core.nth.call(null,vec__37489,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__37489,file_name,file_line,file_column){
return (function (p1__37483_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__37483_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__37489,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__22020__auto__ = file_line;
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
var and__22008__auto__ = cause;
if(cljs.core.truth_(and__22008__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__22008__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__37561 = figwheel.client.heads_up.ensure_container.call(null);
var map__37561__$1 = ((((!((map__37561 == null)))?((((map__37561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37561):map__37561);
var content_area_el = cljs.core.get.call(null,map__37561__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__26288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto__){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto__){
return (function (state_37674){
var state_val_37675 = (state_37674[(1)]);
if((state_val_37675 === (1))){
var inst_37657 = (state_37674[(7)]);
var inst_37657__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37658 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37659 = ["0.0"];
var inst_37660 = cljs.core.PersistentHashMap.fromArrays(inst_37658,inst_37659);
var inst_37661 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37657__$1,inst_37660);
var inst_37662 = cljs.core.async.timeout.call(null,(300));
var state_37674__$1 = (function (){var statearr_37676 = state_37674;
(statearr_37676[(7)] = inst_37657__$1);

(statearr_37676[(8)] = inst_37661);

return statearr_37676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37674__$1,(2),inst_37662);
} else {
if((state_val_37675 === (2))){
var inst_37657 = (state_37674[(7)]);
var inst_37664 = (state_37674[(2)]);
var inst_37665 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_37666 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_37667 = cljs.core.PersistentHashMap.fromArrays(inst_37665,inst_37666);
var inst_37668 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37657,inst_37667);
var inst_37669 = cljs.core.async.timeout.call(null,(200));
var state_37674__$1 = (function (){var statearr_37678 = state_37674;
(statearr_37678[(9)] = inst_37664);

(statearr_37678[(10)] = inst_37668);

return statearr_37678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37674__$1,(3),inst_37669);
} else {
if((state_val_37675 === (3))){
var inst_37657 = (state_37674[(7)]);
var inst_37671 = (state_37674[(2)]);
var inst_37672 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37657,"");
var state_37674__$1 = (function (){var statearr_37679 = state_37674;
(statearr_37679[(11)] = inst_37671);

return statearr_37679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37674__$1,inst_37672);
} else {
return null;
}
}
}
});})(c__26288__auto__))
;
return ((function (switch__25578__auto__,c__26288__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__25579__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__25579__auto____0 = (function (){
var statearr_37683 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37683[(0)] = figwheel$client$heads_up$clear_$_state_machine__25579__auto__);

(statearr_37683[(1)] = (1));

return statearr_37683;
});
var figwheel$client$heads_up$clear_$_state_machine__25579__auto____1 = (function (state_37674){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_37674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e37684){if((e37684 instanceof Object)){
var ex__25582__auto__ = e37684;
var statearr_37685_37729 = state_37674;
(statearr_37685_37729[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37735 = state_37674;
state_37674 = G__37735;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__25579__auto__ = function(state_37674){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__25579__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__25579__auto____1.call(this,state_37674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__25579__auto____0;
figwheel$client$heads_up$clear_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__25579__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto__))
})();
var state__26290__auto__ = (function (){var statearr_37688 = f__26289__auto__.call(null);
(statearr_37688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto__);

return statearr_37688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto__))
);

return c__26288__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__26288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto__){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto__){
return (function (state_37825){
var state_val_37826 = (state_37825[(1)]);
if((state_val_37826 === (1))){
var inst_37804 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_37825__$1 = state_37825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37825__$1,(2),inst_37804);
} else {
if((state_val_37826 === (2))){
var inst_37806 = (state_37825[(2)]);
var inst_37807 = cljs.core.async.timeout.call(null,(400));
var state_37825__$1 = (function (){var statearr_37842 = state_37825;
(statearr_37842[(7)] = inst_37806);

return statearr_37842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37825__$1,(3),inst_37807);
} else {
if((state_val_37826 === (3))){
var inst_37809 = (state_37825[(2)]);
var inst_37810 = figwheel.client.heads_up.clear.call(null);
var state_37825__$1 = (function (){var statearr_37843 = state_37825;
(statearr_37843[(8)] = inst_37809);

return statearr_37843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37825__$1,(4),inst_37810);
} else {
if((state_val_37826 === (4))){
var inst_37812 = (state_37825[(2)]);
var state_37825__$1 = state_37825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37825__$1,inst_37812);
} else {
return null;
}
}
}
}
});})(c__26288__auto__))
;
return ((function (switch__25578__auto__,c__26288__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto____0 = (function (){
var statearr_37850 = [null,null,null,null,null,null,null,null,null];
(statearr_37850[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto__);

(statearr_37850[(1)] = (1));

return statearr_37850;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto____1 = (function (state_37825){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_37825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e37851){if((e37851 instanceof Object)){
var ex__25582__auto__ = e37851;
var statearr_37852_37872 = state_37825;
(statearr_37852_37872[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37874 = state_37825;
state_37825 = G__37874;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto__ = function(state_37825){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto____1.call(this,state_37825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto__))
})();
var state__26290__auto__ = (function (){var statearr_37859 = f__26289__auto__.call(null);
(statearr_37859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto__);

return statearr_37859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto__))
);

return c__26288__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map