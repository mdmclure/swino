// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39569 = cljs.core._EQ_;
var expr__39570 = (function (){var or__22020__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39569.call(null,"true",expr__39570))){
return true;
} else {
if(cljs.core.truth_(pred__39569.call(null,"false",expr__39570))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39570)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__23135__auto__ = [];
var len__23128__auto___39579 = arguments.length;
var i__23129__auto___39581 = (0);
while(true){
if((i__23129__auto___39581 < len__23128__auto___39579)){
args__23135__auto__.push((arguments[i__23129__auto___39581]));

var G__39583 = (i__23129__auto___39581 + (1));
i__23129__auto___39581 = G__39583;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq39576){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39576));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39588){
var map__39592 = p__39588;
var map__39592__$1 = ((((!((map__39592 == null)))?((((map__39592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39592):map__39592);
var message = cljs.core.get.call(null,map__39592__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39592__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__22020__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__22008__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__22008__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__22008__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26288__auto___39786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___39786,ch){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___39786,ch){
return (function (state_39750){
var state_val_39751 = (state_39750[(1)]);
if((state_val_39751 === (7))){
var inst_39746 = (state_39750[(2)]);
var state_39750__$1 = state_39750;
var statearr_39753_39790 = state_39750__$1;
(statearr_39753_39790[(2)] = inst_39746);

(statearr_39753_39790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (1))){
var state_39750__$1 = state_39750;
var statearr_39754_39791 = state_39750__$1;
(statearr_39754_39791[(2)] = null);

(statearr_39754_39791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (4))){
var inst_39703 = (state_39750[(7)]);
var inst_39703__$1 = (state_39750[(2)]);
var state_39750__$1 = (function (){var statearr_39755 = state_39750;
(statearr_39755[(7)] = inst_39703__$1);

return statearr_39755;
})();
if(cljs.core.truth_(inst_39703__$1)){
var statearr_39756_39793 = state_39750__$1;
(statearr_39756_39793[(1)] = (5));

} else {
var statearr_39757_39794 = state_39750__$1;
(statearr_39757_39794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (15))){
var inst_39710 = (state_39750[(8)]);
var inst_39725 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39710);
var inst_39726 = cljs.core.first.call(null,inst_39725);
var inst_39727 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39726);
var inst_39728 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39727)].join('');
var inst_39729 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39728);
var state_39750__$1 = state_39750;
var statearr_39758_39797 = state_39750__$1;
(statearr_39758_39797[(2)] = inst_39729);

(statearr_39758_39797[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (13))){
var inst_39734 = (state_39750[(2)]);
var state_39750__$1 = state_39750;
var statearr_39759_39799 = state_39750__$1;
(statearr_39759_39799[(2)] = inst_39734);

(statearr_39759_39799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (6))){
var state_39750__$1 = state_39750;
var statearr_39760_39800 = state_39750__$1;
(statearr_39760_39800[(2)] = null);

(statearr_39760_39800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (17))){
var inst_39732 = (state_39750[(2)]);
var state_39750__$1 = state_39750;
var statearr_39762_39801 = state_39750__$1;
(statearr_39762_39801[(2)] = inst_39732);

(statearr_39762_39801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (3))){
var inst_39748 = (state_39750[(2)]);
var state_39750__$1 = state_39750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39750__$1,inst_39748);
} else {
if((state_val_39751 === (12))){
var inst_39709 = (state_39750[(9)]);
var inst_39723 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39709,opts);
var state_39750__$1 = state_39750;
if(cljs.core.truth_(inst_39723)){
var statearr_39764_39803 = state_39750__$1;
(statearr_39764_39803[(1)] = (15));

} else {
var statearr_39766_39805 = state_39750__$1;
(statearr_39766_39805[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (2))){
var state_39750__$1 = state_39750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39750__$1,(4),ch);
} else {
if((state_val_39751 === (11))){
var inst_39710 = (state_39750[(8)]);
var inst_39715 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39716 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39710);
var inst_39717 = cljs.core.async.timeout.call(null,(1000));
var inst_39718 = [inst_39716,inst_39717];
var inst_39719 = (new cljs.core.PersistentVector(null,2,(5),inst_39715,inst_39718,null));
var state_39750__$1 = state_39750;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39750__$1,(14),inst_39719);
} else {
if((state_val_39751 === (9))){
var inst_39710 = (state_39750[(8)]);
var inst_39736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39737 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39710);
var inst_39738 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39737);
var inst_39739 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39738)].join('');
var inst_39740 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39739);
var state_39750__$1 = (function (){var statearr_39767 = state_39750;
(statearr_39767[(10)] = inst_39736);

return statearr_39767;
})();
var statearr_39768_39809 = state_39750__$1;
(statearr_39768_39809[(2)] = inst_39740);

(statearr_39768_39809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (5))){
var inst_39703 = (state_39750[(7)]);
var inst_39705 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39706 = (new cljs.core.PersistentArrayMap(null,2,inst_39705,null));
var inst_39707 = (new cljs.core.PersistentHashSet(null,inst_39706,null));
var inst_39708 = figwheel.client.focus_msgs.call(null,inst_39707,inst_39703);
var inst_39709 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39708);
var inst_39710 = cljs.core.first.call(null,inst_39708);
var inst_39711 = figwheel.client.autoload_QMARK_.call(null);
var state_39750__$1 = (function (){var statearr_39769 = state_39750;
(statearr_39769[(9)] = inst_39709);

(statearr_39769[(8)] = inst_39710);

return statearr_39769;
})();
if(cljs.core.truth_(inst_39711)){
var statearr_39770_39814 = state_39750__$1;
(statearr_39770_39814[(1)] = (8));

} else {
var statearr_39771_39815 = state_39750__$1;
(statearr_39771_39815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (14))){
var inst_39721 = (state_39750[(2)]);
var state_39750__$1 = state_39750;
var statearr_39772_39816 = state_39750__$1;
(statearr_39772_39816[(2)] = inst_39721);

(statearr_39772_39816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (16))){
var state_39750__$1 = state_39750;
var statearr_39773_39818 = state_39750__$1;
(statearr_39773_39818[(2)] = null);

(statearr_39773_39818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (10))){
var inst_39742 = (state_39750[(2)]);
var state_39750__$1 = (function (){var statearr_39774 = state_39750;
(statearr_39774[(11)] = inst_39742);

return statearr_39774;
})();
var statearr_39775_39821 = state_39750__$1;
(statearr_39775_39821[(2)] = null);

(statearr_39775_39821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (8))){
var inst_39709 = (state_39750[(9)]);
var inst_39713 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39709,opts);
var state_39750__$1 = state_39750;
if(cljs.core.truth_(inst_39713)){
var statearr_39776_39822 = state_39750__$1;
(statearr_39776_39822[(1)] = (11));

} else {
var statearr_39777_39824 = state_39750__$1;
(statearr_39777_39824[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
}
});})(c__26288__auto___39786,ch))
;
return ((function (switch__25578__auto__,c__26288__auto___39786,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25579__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25579__auto____0 = (function (){
var statearr_39782 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39782[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25579__auto__);

(statearr_39782[(1)] = (1));

return statearr_39782;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25579__auto____1 = (function (state_39750){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_39750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e39783){if((e39783 instanceof Object)){
var ex__25582__auto__ = e39783;
var statearr_39784_39828 = state_39750;
(statearr_39784_39828[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39829 = state_39750;
state_39750 = G__39829;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25579__auto__ = function(state_39750){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25579__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25579__auto____1.call(this,state_39750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25579__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25579__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___39786,ch))
})();
var state__26290__auto__ = (function (){var statearr_39785 = f__26289__auto__.call(null);
(statearr_39785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___39786);

return statearr_39785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___39786,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39832_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39832_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39842 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39842){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_39840 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_39841 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39841;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39840;
}}catch (e39839){if((e39839 instanceof Error)){
var e = e39839;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39842], null));
} else {
var e = e39839;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39842))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39847){
var map__39859 = p__39847;
var map__39859__$1 = ((((!((map__39859 == null)))?((((map__39859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39859):map__39859);
var opts = map__39859__$1;
var build_id = cljs.core.get.call(null,map__39859__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39859,map__39859__$1,opts,build_id){
return (function (p__39861){
var vec__39862 = p__39861;
var seq__39863 = cljs.core.seq.call(null,vec__39862);
var first__39864 = cljs.core.first.call(null,seq__39863);
var seq__39863__$1 = cljs.core.next.call(null,seq__39863);
var map__39865 = first__39864;
var map__39865__$1 = ((((!((map__39865 == null)))?((((map__39865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39865):map__39865);
var msg = map__39865__$1;
var msg_name = cljs.core.get.call(null,map__39865__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39863__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39862,seq__39863,first__39864,seq__39863__$1,map__39865,map__39865__$1,msg,msg_name,_,map__39859,map__39859__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39862,seq__39863,first__39864,seq__39863__$1,map__39865,map__39865__$1,msg,msg_name,_,map__39859,map__39859__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39859,map__39859__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39881){
var vec__39882 = p__39881;
var seq__39883 = cljs.core.seq.call(null,vec__39882);
var first__39884 = cljs.core.first.call(null,seq__39883);
var seq__39883__$1 = cljs.core.next.call(null,seq__39883);
var map__39885 = first__39884;
var map__39885__$1 = ((((!((map__39885 == null)))?((((map__39885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39885):map__39885);
var msg = map__39885__$1;
var msg_name = cljs.core.get.call(null,map__39885__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39883__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39890){
var map__39903 = p__39890;
var map__39903__$1 = ((((!((map__39903 == null)))?((((map__39903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39903):map__39903);
var on_compile_warning = cljs.core.get.call(null,map__39903__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39903__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39903,map__39903__$1,on_compile_warning,on_compile_fail){
return (function (p__39905){
var vec__39906 = p__39905;
var seq__39907 = cljs.core.seq.call(null,vec__39906);
var first__39908 = cljs.core.first.call(null,seq__39907);
var seq__39907__$1 = cljs.core.next.call(null,seq__39907);
var map__39909 = first__39908;
var map__39909__$1 = ((((!((map__39909 == null)))?((((map__39909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39909):map__39909);
var msg = map__39909__$1;
var msg_name = cljs.core.get.call(null,map__39909__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39907__$1;
var pred__39912 = cljs.core._EQ_;
var expr__39913 = msg_name;
if(cljs.core.truth_(pred__39912.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39913))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39912.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39913))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39903,map__39903__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto__,msg_hist,msg_names,msg){
return (function (state_40149){
var state_val_40150 = (state_40149[(1)]);
if((state_val_40150 === (7))){
var inst_40072 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
if(cljs.core.truth_(inst_40072)){
var statearr_40151_40209 = state_40149__$1;
(statearr_40151_40209[(1)] = (8));

} else {
var statearr_40152_40210 = state_40149__$1;
(statearr_40152_40210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (20))){
var inst_40142 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40153_40211 = state_40149__$1;
(statearr_40153_40211[(2)] = inst_40142);

(statearr_40153_40211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (27))){
var inst_40138 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40154_40215 = state_40149__$1;
(statearr_40154_40215[(2)] = inst_40138);

(statearr_40154_40215[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (1))){
var inst_40065 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40149__$1 = state_40149;
if(cljs.core.truth_(inst_40065)){
var statearr_40155_40216 = state_40149__$1;
(statearr_40155_40216[(1)] = (2));

} else {
var statearr_40156_40217 = state_40149__$1;
(statearr_40156_40217[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (24))){
var inst_40140 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40157_40219 = state_40149__$1;
(statearr_40157_40219[(2)] = inst_40140);

(statearr_40157_40219[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (4))){
var inst_40146 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40149__$1,inst_40146);
} else {
if((state_val_40150 === (15))){
var inst_40144 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40160_40220 = state_40149__$1;
(statearr_40160_40220[(2)] = inst_40144);

(statearr_40160_40220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (21))){
var inst_40103 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40161_40224 = state_40149__$1;
(statearr_40161_40224[(2)] = inst_40103);

(statearr_40161_40224[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (31))){
var inst_40127 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40149__$1 = state_40149;
if(cljs.core.truth_(inst_40127)){
var statearr_40163_40225 = state_40149__$1;
(statearr_40163_40225[(1)] = (34));

} else {
var statearr_40164_40226 = state_40149__$1;
(statearr_40164_40226[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (32))){
var inst_40136 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40165_40228 = state_40149__$1;
(statearr_40165_40228[(2)] = inst_40136);

(statearr_40165_40228[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (33))){
var inst_40125 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40166_40229 = state_40149__$1;
(statearr_40166_40229[(2)] = inst_40125);

(statearr_40166_40229[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (13))){
var inst_40086 = figwheel.client.heads_up.clear.call(null);
var state_40149__$1 = state_40149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40149__$1,(16),inst_40086);
} else {
if((state_val_40150 === (22))){
var inst_40107 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40108 = figwheel.client.heads_up.append_message.call(null,inst_40107);
var state_40149__$1 = state_40149;
var statearr_40167_40233 = state_40149__$1;
(statearr_40167_40233[(2)] = inst_40108);

(statearr_40167_40233[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (36))){
var inst_40134 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40168_40234 = state_40149__$1;
(statearr_40168_40234[(2)] = inst_40134);

(statearr_40168_40234[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (29))){
var inst_40118 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40169_40236 = state_40149__$1;
(statearr_40169_40236[(2)] = inst_40118);

(statearr_40169_40236[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (6))){
var inst_40067 = (state_40149[(7)]);
var state_40149__$1 = state_40149;
var statearr_40170_40237 = state_40149__$1;
(statearr_40170_40237[(2)] = inst_40067);

(statearr_40170_40237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (28))){
var inst_40114 = (state_40149[(2)]);
var inst_40115 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40116 = figwheel.client.heads_up.display_warning.call(null,inst_40115);
var state_40149__$1 = (function (){var statearr_40171 = state_40149;
(statearr_40171[(8)] = inst_40114);

return statearr_40171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40149__$1,(29),inst_40116);
} else {
if((state_val_40150 === (25))){
var inst_40112 = figwheel.client.heads_up.clear.call(null);
var state_40149__$1 = state_40149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40149__$1,(28),inst_40112);
} else {
if((state_val_40150 === (34))){
var inst_40129 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40149__$1 = state_40149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40149__$1,(37),inst_40129);
} else {
if((state_val_40150 === (17))){
var inst_40094 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40173_40242 = state_40149__$1;
(statearr_40173_40242[(2)] = inst_40094);

(statearr_40173_40242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (3))){
var inst_40084 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40149__$1 = state_40149;
if(cljs.core.truth_(inst_40084)){
var statearr_40174_40243 = state_40149__$1;
(statearr_40174_40243[(1)] = (13));

} else {
var statearr_40175_40244 = state_40149__$1;
(statearr_40175_40244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (12))){
var inst_40080 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40176_40247 = state_40149__$1;
(statearr_40176_40247[(2)] = inst_40080);

(statearr_40176_40247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (2))){
var inst_40067 = (state_40149[(7)]);
var inst_40067__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40149__$1 = (function (){var statearr_40177 = state_40149;
(statearr_40177[(7)] = inst_40067__$1);

return statearr_40177;
})();
if(cljs.core.truth_(inst_40067__$1)){
var statearr_40178_40249 = state_40149__$1;
(statearr_40178_40249[(1)] = (5));

} else {
var statearr_40179_40250 = state_40149__$1;
(statearr_40179_40250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (23))){
var inst_40110 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40149__$1 = state_40149;
if(cljs.core.truth_(inst_40110)){
var statearr_40180_40252 = state_40149__$1;
(statearr_40180_40252[(1)] = (25));

} else {
var statearr_40181_40253 = state_40149__$1;
(statearr_40181_40253[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (35))){
var state_40149__$1 = state_40149;
var statearr_40182_40254 = state_40149__$1;
(statearr_40182_40254[(2)] = null);

(statearr_40182_40254[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (19))){
var inst_40105 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40149__$1 = state_40149;
if(cljs.core.truth_(inst_40105)){
var statearr_40185_40257 = state_40149__$1;
(statearr_40185_40257[(1)] = (22));

} else {
var statearr_40186_40259 = state_40149__$1;
(statearr_40186_40259[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (11))){
var inst_40076 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40187_40260 = state_40149__$1;
(statearr_40187_40260[(2)] = inst_40076);

(statearr_40187_40260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (9))){
var inst_40078 = figwheel.client.heads_up.clear.call(null);
var state_40149__$1 = state_40149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40149__$1,(12),inst_40078);
} else {
if((state_val_40150 === (5))){
var inst_40069 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40149__$1 = state_40149;
var statearr_40189_40262 = state_40149__$1;
(statearr_40189_40262[(2)] = inst_40069);

(statearr_40189_40262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (14))){
var inst_40096 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40149__$1 = state_40149;
if(cljs.core.truth_(inst_40096)){
var statearr_40190_40263 = state_40149__$1;
(statearr_40190_40263[(1)] = (18));

} else {
var statearr_40191_40264 = state_40149__$1;
(statearr_40191_40264[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (26))){
var inst_40120 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40149__$1 = state_40149;
if(cljs.core.truth_(inst_40120)){
var statearr_40192_40268 = state_40149__$1;
(statearr_40192_40268[(1)] = (30));

} else {
var statearr_40193_40269 = state_40149__$1;
(statearr_40193_40269[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (16))){
var inst_40088 = (state_40149[(2)]);
var inst_40089 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40090 = figwheel.client.format_messages.call(null,inst_40089);
var inst_40091 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40092 = figwheel.client.heads_up.display_error.call(null,inst_40090,inst_40091);
var state_40149__$1 = (function (){var statearr_40194 = state_40149;
(statearr_40194[(9)] = inst_40088);

return statearr_40194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40149__$1,(17),inst_40092);
} else {
if((state_val_40150 === (30))){
var inst_40122 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40123 = figwheel.client.heads_up.display_warning.call(null,inst_40122);
var state_40149__$1 = state_40149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40149__$1,(33),inst_40123);
} else {
if((state_val_40150 === (10))){
var inst_40082 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40195_40271 = state_40149__$1;
(statearr_40195_40271[(2)] = inst_40082);

(statearr_40195_40271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (18))){
var inst_40098 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40099 = figwheel.client.format_messages.call(null,inst_40098);
var inst_40100 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40101 = figwheel.client.heads_up.display_error.call(null,inst_40099,inst_40100);
var state_40149__$1 = state_40149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40149__$1,(21),inst_40101);
} else {
if((state_val_40150 === (37))){
var inst_40131 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40196_40275 = state_40149__$1;
(statearr_40196_40275[(2)] = inst_40131);

(statearr_40196_40275[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (8))){
var inst_40074 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40149__$1 = state_40149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40149__$1,(11),inst_40074);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26288__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25578__auto__,c__26288__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto____0 = (function (){
var statearr_40201 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40201[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto__);

(statearr_40201[(1)] = (1));

return statearr_40201;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto____1 = (function (state_40149){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_40149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e40202){if((e40202 instanceof Object)){
var ex__25582__auto__ = e40202;
var statearr_40203_40280 = state_40149;
(statearr_40203_40280[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40281 = state_40149;
state_40149 = G__40281;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto__ = function(state_40149){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto____1.call(this,state_40149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto__,msg_hist,msg_names,msg))
})();
var state__26290__auto__ = (function (){var statearr_40205 = f__26289__auto__.call(null);
(statearr_40205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto__);

return statearr_40205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto__,msg_hist,msg_names,msg))
);

return c__26288__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26288__auto___40356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___40356,ch){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___40356,ch){
return (function (state_40335){
var state_val_40336 = (state_40335[(1)]);
if((state_val_40336 === (1))){
var state_40335__$1 = state_40335;
var statearr_40337_40357 = state_40335__$1;
(statearr_40337_40357[(2)] = null);

(statearr_40337_40357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40336 === (2))){
var state_40335__$1 = state_40335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40335__$1,(4),ch);
} else {
if((state_val_40336 === (3))){
var inst_40333 = (state_40335[(2)]);
var state_40335__$1 = state_40335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40335__$1,inst_40333);
} else {
if((state_val_40336 === (4))){
var inst_40322 = (state_40335[(7)]);
var inst_40322__$1 = (state_40335[(2)]);
var state_40335__$1 = (function (){var statearr_40338 = state_40335;
(statearr_40338[(7)] = inst_40322__$1);

return statearr_40338;
})();
if(cljs.core.truth_(inst_40322__$1)){
var statearr_40339_40361 = state_40335__$1;
(statearr_40339_40361[(1)] = (5));

} else {
var statearr_40340_40363 = state_40335__$1;
(statearr_40340_40363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40336 === (5))){
var inst_40322 = (state_40335[(7)]);
var inst_40325 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40322);
var state_40335__$1 = state_40335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40335__$1,(8),inst_40325);
} else {
if((state_val_40336 === (6))){
var state_40335__$1 = state_40335;
var statearr_40341_40364 = state_40335__$1;
(statearr_40341_40364[(2)] = null);

(statearr_40341_40364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40336 === (7))){
var inst_40331 = (state_40335[(2)]);
var state_40335__$1 = state_40335;
var statearr_40343_40366 = state_40335__$1;
(statearr_40343_40366[(2)] = inst_40331);

(statearr_40343_40366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40336 === (8))){
var inst_40327 = (state_40335[(2)]);
var state_40335__$1 = (function (){var statearr_40344 = state_40335;
(statearr_40344[(8)] = inst_40327);

return statearr_40344;
})();
var statearr_40345_40367 = state_40335__$1;
(statearr_40345_40367[(2)] = null);

(statearr_40345_40367[(1)] = (2));


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
}
});})(c__26288__auto___40356,ch))
;
return ((function (switch__25578__auto__,c__26288__auto___40356,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25579__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25579__auto____0 = (function (){
var statearr_40349 = [null,null,null,null,null,null,null,null,null];
(statearr_40349[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25579__auto__);

(statearr_40349[(1)] = (1));

return statearr_40349;
});
var figwheel$client$heads_up_plugin_$_state_machine__25579__auto____1 = (function (state_40335){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_40335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e40350){if((e40350 instanceof Object)){
var ex__25582__auto__ = e40350;
var statearr_40351_40371 = state_40335;
(statearr_40351_40371[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40373 = state_40335;
state_40335 = G__40373;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25579__auto__ = function(state_40335){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25579__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25579__auto____1.call(this,state_40335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25579__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25579__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___40356,ch))
})();
var state__26290__auto__ = (function (){var statearr_40353 = f__26289__auto__.call(null);
(statearr_40353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___40356);

return statearr_40353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___40356,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto__){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto__){
return (function (state_40400){
var state_val_40401 = (state_40400[(1)]);
if((state_val_40401 === (1))){
var inst_40395 = cljs.core.async.timeout.call(null,(3000));
var state_40400__$1 = state_40400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40400__$1,(2),inst_40395);
} else {
if((state_val_40401 === (2))){
var inst_40397 = (state_40400[(2)]);
var inst_40398 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40400__$1 = (function (){var statearr_40403 = state_40400;
(statearr_40403[(7)] = inst_40397);

return statearr_40403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40400__$1,inst_40398);
} else {
return null;
}
}
});})(c__26288__auto__))
;
return ((function (switch__25578__auto__,c__26288__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25579__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25579__auto____0 = (function (){
var statearr_40407 = [null,null,null,null,null,null,null,null];
(statearr_40407[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25579__auto__);

(statearr_40407[(1)] = (1));

return statearr_40407;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25579__auto____1 = (function (state_40400){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_40400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e40408){if((e40408 instanceof Object)){
var ex__25582__auto__ = e40408;
var statearr_40409_40416 = state_40400;
(statearr_40409_40416[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40420 = state_40400;
state_40400 = G__40420;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25579__auto__ = function(state_40400){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25579__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25579__auto____1.call(this,state_40400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25579__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25579__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto__))
})();
var state__26290__auto__ = (function (){var statearr_40411 = f__26289__auto__.call(null);
(statearr_40411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto__);

return statearr_40411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto__))
);

return c__26288__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40422){
var map__40431 = p__40422;
var map__40431__$1 = ((((!((map__40431 == null)))?((((map__40431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40431):map__40431);
var ed = map__40431__$1;
var formatted_exception = cljs.core.get.call(null,map__40431__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40431__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40431__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40434_40439 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40435_40440 = null;
var count__40436_40441 = (0);
var i__40437_40442 = (0);
while(true){
if((i__40437_40442 < count__40436_40441)){
var msg_40445 = cljs.core._nth.call(null,chunk__40435_40440,i__40437_40442);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40445);

var G__40447 = seq__40434_40439;
var G__40448 = chunk__40435_40440;
var G__40449 = count__40436_40441;
var G__40450 = (i__40437_40442 + (1));
seq__40434_40439 = G__40447;
chunk__40435_40440 = G__40448;
count__40436_40441 = G__40449;
i__40437_40442 = G__40450;
continue;
} else {
var temp__4657__auto___40451 = cljs.core.seq.call(null,seq__40434_40439);
if(temp__4657__auto___40451){
var seq__40434_40452__$1 = temp__4657__auto___40451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40434_40452__$1)){
var c__22834__auto___40453 = cljs.core.chunk_first.call(null,seq__40434_40452__$1);
var G__40454 = cljs.core.chunk_rest.call(null,seq__40434_40452__$1);
var G__40455 = c__22834__auto___40453;
var G__40456 = cljs.core.count.call(null,c__22834__auto___40453);
var G__40457 = (0);
seq__40434_40439 = G__40454;
chunk__40435_40440 = G__40455;
count__40436_40441 = G__40456;
i__40437_40442 = G__40457;
continue;
} else {
var msg_40459 = cljs.core.first.call(null,seq__40434_40452__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40459);

var G__40460 = cljs.core.next.call(null,seq__40434_40452__$1);
var G__40461 = null;
var G__40462 = (0);
var G__40463 = (0);
seq__40434_40439 = G__40460;
chunk__40435_40440 = G__40461;
count__40436_40441 = G__40462;
i__40437_40442 = G__40463;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40466){
var map__40470 = p__40466;
var map__40470__$1 = ((((!((map__40470 == null)))?((((map__40470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40470):map__40470);
var w = map__40470__$1;
var message = cljs.core.get.call(null,map__40470__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__22008__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__22008__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__22008__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40495 = cljs.core.seq.call(null,plugins);
var chunk__40496 = null;
var count__40497 = (0);
var i__40498 = (0);
while(true){
if((i__40498 < count__40497)){
var vec__40499 = cljs.core._nth.call(null,chunk__40496,i__40498);
var k = cljs.core.nth.call(null,vec__40499,(0),null);
var plugin = cljs.core.nth.call(null,vec__40499,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40509 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40495,chunk__40496,count__40497,i__40498,pl_40509,vec__40499,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40509.call(null,msg_hist);
});})(seq__40495,chunk__40496,count__40497,i__40498,pl_40509,vec__40499,k,plugin))
);
} else {
}

var G__40510 = seq__40495;
var G__40511 = chunk__40496;
var G__40512 = count__40497;
var G__40513 = (i__40498 + (1));
seq__40495 = G__40510;
chunk__40496 = G__40511;
count__40497 = G__40512;
i__40498 = G__40513;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40495);
if(temp__4657__auto__){
var seq__40495__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40495__$1)){
var c__22834__auto__ = cljs.core.chunk_first.call(null,seq__40495__$1);
var G__40517 = cljs.core.chunk_rest.call(null,seq__40495__$1);
var G__40518 = c__22834__auto__;
var G__40519 = cljs.core.count.call(null,c__22834__auto__);
var G__40520 = (0);
seq__40495 = G__40517;
chunk__40496 = G__40518;
count__40497 = G__40519;
i__40498 = G__40520;
continue;
} else {
var vec__40504 = cljs.core.first.call(null,seq__40495__$1);
var k = cljs.core.nth.call(null,vec__40504,(0),null);
var plugin = cljs.core.nth.call(null,vec__40504,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40522 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40495,chunk__40496,count__40497,i__40498,pl_40522,vec__40504,k,plugin,seq__40495__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40522.call(null,msg_hist);
});})(seq__40495,chunk__40496,count__40497,i__40498,pl_40522,vec__40504,k,plugin,seq__40495__$1,temp__4657__auto__))
);
} else {
}

var G__40524 = cljs.core.next.call(null,seq__40495__$1);
var G__40525 = null;
var G__40526 = (0);
var G__40527 = (0);
seq__40495 = G__40524;
chunk__40496 = G__40525;
count__40497 = G__40526;
i__40498 = G__40527;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args40530 = [];
var len__23128__auto___40536 = arguments.length;
var i__23129__auto___40537 = (0);
while(true){
if((i__23129__auto___40537 < len__23128__auto___40536)){
args40530.push((arguments[i__23129__auto___40537]));

var G__40539 = (i__23129__auto___40537 + (1));
i__23129__auto___40537 = G__40539;
continue;
} else {
}
break;
}

var G__40532 = args40530.length;
switch (G__40532) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40530.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__23135__auto__ = [];
var len__23128__auto___40552 = arguments.length;
var i__23129__auto___40554 = (0);
while(true){
if((i__23129__auto___40554 < len__23128__auto___40552)){
args__23135__auto__.push((arguments[i__23129__auto___40554]));

var G__40555 = (i__23129__auto___40554 + (1));
i__23129__auto___40554 = G__40555;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40547){
var map__40548 = p__40547;
var map__40548__$1 = ((((!((map__40548 == null)))?((((map__40548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40548):map__40548);
var opts = map__40548__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40546){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40546));
});


//# sourceMappingURL=client.js.map