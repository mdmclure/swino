// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,cljs.core.partial.call(null,camel_snake_kebab.extras.transform_keys,camel_snake_kebab.core.__GT_camelCase));
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var args32481 = [];
var len__23128__auto___32488 = arguments.length;
var i__23129__auto___32489 = (0);
while(true){
if((i__23129__auto___32489 < len__23128__auto___32488)){
args32481.push((arguments[i__23129__auto___32489]));

var G__32490 = (i__23129__auto___32489 + (1));
i__23129__auto___32489 = G__32490;
continue;
} else {
}
break;
}

var G__32485 = args32481.length;
switch (G__32485) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32481.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = (((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null)))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,react_class,cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,(root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var args32565 = [];
var len__23128__auto___32576 = arguments.length;
var i__23129__auto___32577 = (0);
while(true){
if((i__23129__auto___32577 < len__23128__auto___32576)){
args32565.push((arguments[i__23129__auto___32577]));

var G__32583 = (i__23129__auto___32577 + (1));
i__23129__auto___32577 = G__32583;
continue;
} else {
}
break;
}

var G__32571 = args32565.length;
switch (G__32571) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32565.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,raw_theme));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][camel_snake_kebab.core.__GT_camelCaseString.call(null,color_key)]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.css_transition_group = (function cljs_react_material_ui$core$css_transition_group(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32608 = arguments.length;
var i__23129__auto___32610 = (0);
while(true){
if((i__23129__auto___32610 < len__23128__auto___32608)){
args__23135__auto__.push((arguments[i__23129__auto___32610]));

var G__32614 = (i__23129__auto___32610 + (1));
i__23129__auto___32610 = G__32614;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"CSSTransitionGroup",args);
});

cljs_react_material_ui.core.css_transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.css_transition_group.cljs$lang$applyTo = (function (seq32596){
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32596));
});

cljs_react_material_ui.core.transition_group = (function cljs_react_material_ui$core$transition_group(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32690 = arguments.length;
var i__23129__auto___32691 = (0);
while(true){
if((i__23129__auto___32691 < len__23128__auto___32690)){
args__23135__auto__.push((arguments[i__23129__auto___32691]));

var G__32694 = (i__23129__auto___32691 + (1));
i__23129__auto___32691 = G__32694;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"TransitionGroup",args);
});

cljs_react_material_ui.core.transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.transition_group.cljs$lang$applyTo = (function (seq32627){
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32627));
});

cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32712 = arguments.length;
var i__23129__auto___32713 = (0);
while(true){
if((i__23129__auto___32713 < len__23128__auto___32712)){
args__23135__auto__.push((arguments[i__23129__auto___32713]));

var G__32716 = (i__23129__auto___32713 + (1));
i__23129__auto___32713 = G__32716;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,(MaterialUI["List"])),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq32702){
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32702));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32775 = arguments.length;
var i__23129__auto___32776 = (0);
while(true){
if((i__23129__auto___32776 < len__23128__auto___32775)){
args__23135__auto__.push((arguments[i__23129__auto___32776]));

var G__32781 = (i__23129__auto___32776 + (1));
i__23129__auto___32776 = G__32781;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq32729){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32729));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32792 = arguments.length;
var i__23129__auto___32793 = (0);
while(true){
if((i__23129__auto___32793 < len__23128__auto___32792)){
args__23135__auto__.push((arguments[i__23129__auto___32793]));

var G__32796 = (i__23129__auto___32793 + (1));
i__23129__auto___32793 = G__32796;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq32787){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32787));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32807 = arguments.length;
var i__23129__auto___32808 = (0);
while(true){
if((i__23129__auto___32808 < len__23128__auto___32807)){
args__23135__auto__.push((arguments[i__23129__auto___32808]));

var G__32809 = (i__23129__auto___32808 + (1));
i__23129__auto___32808 = G__32809;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq32801){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32801));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32830 = arguments.length;
var i__23129__auto___32832 = (0);
while(true){
if((i__23129__auto___32832 < len__23128__auto___32830)){
args__23135__auto__.push((arguments[i__23129__auto___32832]));

var G__32834 = (i__23129__auto___32832 + (1));
i__23129__auto___32832 = G__32834;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq32816){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32816));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32875 = arguments.length;
var i__23129__auto___32876 = (0);
while(true){
if((i__23129__auto___32876 < len__23128__auto___32875)){
args__23135__auto__.push((arguments[i__23129__auto___32876]));

var G__32883 = (i__23129__auto___32876 + (1));
i__23129__auto___32876 = G__32883;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq32837){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32837));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32912 = arguments.length;
var i__23129__auto___32913 = (0);
while(true){
if((i__23129__auto___32913 < len__23128__auto___32912)){
args__23135__auto__.push((arguments[i__23129__auto___32913]));

var G__32914 = (i__23129__auto___32913 + (1));
i__23129__auto___32913 = G__32914;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq32908){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32908));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32921 = arguments.length;
var i__23129__auto___32922 = (0);
while(true){
if((i__23129__auto___32922 < len__23128__auto___32921)){
args__23135__auto__.push((arguments[i__23129__auto___32922]));

var G__32923 = (i__23129__auto___32922 + (1));
i__23129__auto___32922 = G__32923;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq32916){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32916));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32960 = arguments.length;
var i__23129__auto___32961 = (0);
while(true){
if((i__23129__auto___32961 < len__23128__auto___32960)){
args__23135__auto__.push((arguments[i__23129__auto___32961]));

var G__32962 = (i__23129__auto___32961 + (1));
i__23129__auto___32961 = G__32962;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq32940){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32940));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32967 = arguments.length;
var i__23129__auto___32969 = (0);
while(true){
if((i__23129__auto___32969 < len__23128__auto___32967)){
args__23135__auto__.push((arguments[i__23129__auto___32969]));

var G__32973 = (i__23129__auto___32969 + (1));
i__23129__auto___32969 = G__32973;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq32964){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32964));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32987 = arguments.length;
var i__23129__auto___32988 = (0);
while(true){
if((i__23129__auto___32988 < len__23128__auto___32987)){
args__23135__auto__.push((arguments[i__23129__auto___32988]));

var G__32989 = (i__23129__auto___32988 + (1));
i__23129__auto___32988 = G__32989;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq32978){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32978));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33026 = arguments.length;
var i__23129__auto___33027 = (0);
while(true){
if((i__23129__auto___33027 < len__23128__auto___33026)){
args__23135__auto__.push((arguments[i__23129__auto___33027]));

var G__33030 = (i__23129__auto___33027 + (1));
i__23129__auto___33027 = G__33030;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq33000){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33000));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33052 = arguments.length;
var i__23129__auto___33053 = (0);
while(true){
if((i__23129__auto___33053 < len__23128__auto___33052)){
args__23135__auto__.push((arguments[i__23129__auto___33053]));

var G__33056 = (i__23129__auto___33053 + (1));
i__23129__auto___33053 = G__33056;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq33039){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33039));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33071 = arguments.length;
var i__23129__auto___33072 = (0);
while(true){
if((i__23129__auto___33072 < len__23128__auto___33071)){
args__23135__auto__.push((arguments[i__23129__auto___33072]));

var G__33073 = (i__23129__auto___33072 + (1));
i__23129__auto___33072 = G__33073;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq33063){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33063));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33082 = arguments.length;
var i__23129__auto___33084 = (0);
while(true){
if((i__23129__auto___33084 < len__23128__auto___33082)){
args__23135__auto__.push((arguments[i__23129__auto___33084]));

var G__33094 = (i__23129__auto___33084 + (1));
i__23129__auto___33084 = G__33094;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq33080){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33080));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33100 = arguments.length;
var i__23129__auto___33101 = (0);
while(true){
if((i__23129__auto___33101 < len__23128__auto___33100)){
args__23135__auto__.push((arguments[i__23129__auto___33101]));

var G__33102 = (i__23129__auto___33101 + (1));
i__23129__auto___33101 = G__33102;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq33098){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33098));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33129 = arguments.length;
var i__23129__auto___33130 = (0);
while(true){
if((i__23129__auto___33130 < len__23128__auto___33129)){
args__23135__auto__.push((arguments[i__23129__auto___33130]));

var G__33131 = (i__23129__auto___33130 + (1));
i__23129__auto___33130 = G__33131;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq33118){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33118));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33133 = arguments.length;
var i__23129__auto___33134 = (0);
while(true){
if((i__23129__auto___33134 < len__23128__auto___33133)){
args__23135__auto__.push((arguments[i__23129__auto___33134]));

var G__33136 = (i__23129__auto___33134 + (1));
i__23129__auto___33134 = G__33136;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq33132){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33132));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33141 = arguments.length;
var i__23129__auto___33142 = (0);
while(true){
if((i__23129__auto___33142 < len__23128__auto___33141)){
args__23135__auto__.push((arguments[i__23129__auto___33142]));

var G__33143 = (i__23129__auto___33142 + (1));
i__23129__auto___33142 = G__33143;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq33139){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33139));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33147 = arguments.length;
var i__23129__auto___33148 = (0);
while(true){
if((i__23129__auto___33148 < len__23128__auto___33147)){
args__23135__auto__.push((arguments[i__23129__auto___33148]));

var G__33149 = (i__23129__auto___33148 + (1));
i__23129__auto___33148 = G__33149;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq33145){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33145));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33202 = arguments.length;
var i__23129__auto___33204 = (0);
while(true){
if((i__23129__auto___33204 < len__23128__auto___33202)){
args__23135__auto__.push((arguments[i__23129__auto___33204]));

var G__33207 = (i__23129__auto___33204 + (1));
i__23129__auto___33204 = G__33207;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq33159){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33159));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33227 = arguments.length;
var i__23129__auto___33228 = (0);
while(true){
if((i__23129__auto___33228 < len__23128__auto___33227)){
args__23135__auto__.push((arguments[i__23129__auto___33228]));

var G__33231 = (i__23129__auto___33228 + (1));
i__23129__auto___33228 = G__33231;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq33218){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33218));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33248 = arguments.length;
var i__23129__auto___33249 = (0);
while(true){
if((i__23129__auto___33249 < len__23128__auto___33248)){
args__23135__auto__.push((arguments[i__23129__auto___33249]));

var G__33252 = (i__23129__auto___33249 + (1));
i__23129__auto___33249 = G__33252;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq33241){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33241));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33267 = arguments.length;
var i__23129__auto___33268 = (0);
while(true){
if((i__23129__auto___33268 < len__23128__auto___33267)){
args__23135__auto__.push((arguments[i__23129__auto___33268]));

var G__33271 = (i__23129__auto___33268 + (1));
i__23129__auto___33268 = G__33271;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq33263){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33263));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33296 = arguments.length;
var i__23129__auto___33297 = (0);
while(true){
if((i__23129__auto___33297 < len__23128__auto___33296)){
args__23135__auto__.push((arguments[i__23129__auto___33297]));

var G__33298 = (i__23129__auto___33297 + (1));
i__23129__auto___33297 = G__33298;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq33286){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33286));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33309 = arguments.length;
var i__23129__auto___33311 = (0);
while(true){
if((i__23129__auto___33311 < len__23128__auto___33309)){
args__23135__auto__.push((arguments[i__23129__auto___33311]));

var G__33312 = (i__23129__auto___33311 + (1));
i__23129__auto___33311 = G__33312;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq33304){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33304));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33317 = arguments.length;
var i__23129__auto___33318 = (0);
while(true){
if((i__23129__auto___33318 < len__23128__auto___33317)){
args__23135__auto__.push((arguments[i__23129__auto___33318]));

var G__33319 = (i__23129__auto___33318 + (1));
i__23129__auto___33318 = G__33319;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq33313){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33313));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33334 = arguments.length;
var i__23129__auto___33335 = (0);
while(true){
if((i__23129__auto___33335 < len__23128__auto___33334)){
args__23135__auto__.push((arguments[i__23129__auto___33335]));

var G__33336 = (i__23129__auto___33335 + (1));
i__23129__auto___33335 = G__33336;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq33324){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33324));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33353 = arguments.length;
var i__23129__auto___33354 = (0);
while(true){
if((i__23129__auto___33354 < len__23128__auto___33353)){
args__23135__auto__.push((arguments[i__23129__auto___33354]));

var G__33357 = (i__23129__auto___33354 + (1));
i__23129__auto___33354 = G__33357;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq33345){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33345));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33449 = arguments.length;
var i__23129__auto___33450 = (0);
while(true){
if((i__23129__auto___33450 < len__23128__auto___33449)){
args__23135__auto__.push((arguments[i__23129__auto___33450]));

var G__33455 = (i__23129__auto___33450 + (1));
i__23129__auto___33450 = G__33455;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq33405){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33405));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33472 = arguments.length;
var i__23129__auto___33474 = (0);
while(true){
if((i__23129__auto___33474 < len__23128__auto___33472)){
args__23135__auto__.push((arguments[i__23129__auto___33474]));

var G__33476 = (i__23129__auto___33474 + (1));
i__23129__auto___33474 = G__33476;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq33459){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33459));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33489 = arguments.length;
var i__23129__auto___33490 = (0);
while(true){
if((i__23129__auto___33490 < len__23128__auto___33489)){
args__23135__auto__.push((arguments[i__23129__auto___33490]));

var G__33493 = (i__23129__auto___33490 + (1));
i__23129__auto___33490 = G__33493;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq33477){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33477));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33510 = arguments.length;
var i__23129__auto___33513 = (0);
while(true){
if((i__23129__auto___33513 < len__23128__auto___33510)){
args__23135__auto__.push((arguments[i__23129__auto___33513]));

var G__33515 = (i__23129__auto___33513 + (1));
i__23129__auto___33513 = G__33515;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq33501){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33501));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33523 = arguments.length;
var i__23129__auto___33525 = (0);
while(true){
if((i__23129__auto___33525 < len__23128__auto___33523)){
args__23135__auto__.push((arguments[i__23129__auto___33525]));

var G__33527 = (i__23129__auto___33525 + (1));
i__23129__auto___33525 = G__33527;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq33519){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33519));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33551 = arguments.length;
var i__23129__auto___33555 = (0);
while(true){
if((i__23129__auto___33555 < len__23128__auto___33551)){
args__23135__auto__.push((arguments[i__23129__auto___33555]));

var G__33559 = (i__23129__auto___33555 + (1));
i__23129__auto___33555 = G__33559;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq33531){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33531));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33586 = arguments.length;
var i__23129__auto___33587 = (0);
while(true){
if((i__23129__auto___33587 < len__23128__auto___33586)){
args__23135__auto__.push((arguments[i__23129__auto___33587]));

var G__33588 = (i__23129__auto___33587 + (1));
i__23129__auto___33587 = G__33588;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq33579){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33579));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33596 = arguments.length;
var i__23129__auto___33598 = (0);
while(true){
if((i__23129__auto___33598 < len__23128__auto___33596)){
args__23135__auto__.push((arguments[i__23129__auto___33598]));

var G__33599 = (i__23129__auto___33598 + (1));
i__23129__auto___33598 = G__33599;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq33592){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33592));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33622 = arguments.length;
var i__23129__auto___33623 = (0);
while(true){
if((i__23129__auto___33623 < len__23128__auto___33622)){
args__23135__auto__.push((arguments[i__23129__auto___33623]));

var G__33624 = (i__23129__auto___33623 + (1));
i__23129__auto___33623 = G__33624;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq33621){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33621));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33633 = arguments.length;
var i__23129__auto___33635 = (0);
while(true){
if((i__23129__auto___33635 < len__23128__auto___33633)){
args__23135__auto__.push((arguments[i__23129__auto___33635]));

var G__33636 = (i__23129__auto___33635 + (1));
i__23129__auto___33635 = G__33636;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq33626){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33626));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33651 = arguments.length;
var i__23129__auto___33652 = (0);
while(true){
if((i__23129__auto___33652 < len__23128__auto___33651)){
args__23135__auto__.push((arguments[i__23129__auto___33652]));

var G__33653 = (i__23129__auto___33652 + (1));
i__23129__auto___33652 = G__33653;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq33642){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33642));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33760 = arguments.length;
var i__23129__auto___33761 = (0);
while(true){
if((i__23129__auto___33761 < len__23128__auto___33760)){
args__23135__auto__.push((arguments[i__23129__auto___33761]));

var G__33763 = (i__23129__auto___33761 + (1));
i__23129__auto___33761 = G__33763;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq33655){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33655));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33769 = arguments.length;
var i__23129__auto___33770 = (0);
while(true){
if((i__23129__auto___33770 < len__23128__auto___33769)){
args__23135__auto__.push((arguments[i__23129__auto___33770]));

var G__33771 = (i__23129__auto___33770 + (1));
i__23129__auto___33770 = G__33771;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq33768){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33768));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33786 = arguments.length;
var i__23129__auto___33787 = (0);
while(true){
if((i__23129__auto___33787 < len__23128__auto___33786)){
args__23135__auto__.push((arguments[i__23129__auto___33787]));

var G__33788 = (i__23129__auto___33787 + (1));
i__23129__auto___33787 = G__33788;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq33779){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33779));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33794 = arguments.length;
var i__23129__auto___33795 = (0);
while(true){
if((i__23129__auto___33795 < len__23128__auto___33794)){
args__23135__auto__.push((arguments[i__23129__auto___33795]));

var G__33798 = (i__23129__auto___33795 + (1));
i__23129__auto___33795 = G__33798;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq33791){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33791));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33813 = arguments.length;
var i__23129__auto___33814 = (0);
while(true){
if((i__23129__auto___33814 < len__23128__auto___33813)){
args__23135__auto__.push((arguments[i__23129__auto___33814]));

var G__33816 = (i__23129__auto___33814 + (1));
i__23129__auto___33814 = G__33816;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq33802){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33802));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33831 = arguments.length;
var i__23129__auto___33832 = (0);
while(true){
if((i__23129__auto___33832 < len__23128__auto___33831)){
args__23135__auto__.push((arguments[i__23129__auto___33832]));

var G__33835 = (i__23129__auto___33832 + (1));
i__23129__auto___33832 = G__33835;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq33820){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33820));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33849 = arguments.length;
var i__23129__auto___33850 = (0);
while(true){
if((i__23129__auto___33850 < len__23128__auto___33849)){
args__23135__auto__.push((arguments[i__23129__auto___33850]));

var G__33852 = (i__23129__auto___33850 + (1));
i__23129__auto___33850 = G__33852;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq33840){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33840));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33873 = arguments.length;
var i__23129__auto___33874 = (0);
while(true){
if((i__23129__auto___33874 < len__23128__auto___33873)){
args__23135__auto__.push((arguments[i__23129__auto___33874]));

var G__33875 = (i__23129__auto___33874 + (1));
i__23129__auto___33874 = G__33875;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq33860){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33860));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33893 = arguments.length;
var i__23129__auto___33894 = (0);
while(true){
if((i__23129__auto___33894 < len__23128__auto___33893)){
args__23135__auto__.push((arguments[i__23129__auto___33894]));

var G__33898 = (i__23129__auto___33894 + (1));
i__23129__auto___33894 = G__33898;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq33890){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33890));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33909 = arguments.length;
var i__23129__auto___33911 = (0);
while(true){
if((i__23129__auto___33911 < len__23128__auto___33909)){
args__23135__auto__.push((arguments[i__23129__auto___33911]));

var G__33915 = (i__23129__auto___33911 + (1));
i__23129__auto___33911 = G__33915;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq33908){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33908));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33929 = arguments.length;
var i__23129__auto___33930 = (0);
while(true){
if((i__23129__auto___33930 < len__23128__auto___33929)){
args__23135__auto__.push((arguments[i__23129__auto___33930]));

var G__33931 = (i__23129__auto___33930 + (1));
i__23129__auto___33930 = G__33931;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq33918){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33918));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33940 = arguments.length;
var i__23129__auto___33941 = (0);
while(true){
if((i__23129__auto___33941 < len__23128__auto___33940)){
args__23135__auto__.push((arguments[i__23129__auto___33941]));

var G__33942 = (i__23129__auto___33941 + (1));
i__23129__auto___33941 = G__33942;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq33935){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33935));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33947 = arguments.length;
var i__23129__auto___33948 = (0);
while(true){
if((i__23129__auto___33948 < len__23128__auto___33947)){
args__23135__auto__.push((arguments[i__23129__auto___33948]));

var G__33949 = (i__23129__auto___33948 + (1));
i__23129__auto___33948 = G__33949;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq33946){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33946));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33954 = arguments.length;
var i__23129__auto___33955 = (0);
while(true){
if((i__23129__auto___33955 < len__23128__auto___33954)){
args__23135__auto__.push((arguments[i__23129__auto___33955]));

var G__33956 = (i__23129__auto___33955 + (1));
i__23129__auto___33955 = G__33956;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq33950){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33950));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33968 = arguments.length;
var i__23129__auto___33969 = (0);
while(true){
if((i__23129__auto___33969 < len__23128__auto___33968)){
args__23135__auto__.push((arguments[i__23129__auto___33969]));

var G__33975 = (i__23129__auto___33969 + (1));
i__23129__auto___33969 = G__33975;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq33961){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33961));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__23135__auto__ = [];
var len__23128__auto___33997 = arguments.length;
var i__23129__auto___33998 = (0);
while(true){
if((i__23129__auto___33998 < len__23128__auto___33997)){
args__23135__auto__.push((arguments[i__23129__auto___33998]));

var G__34000 = (i__23129__auto___33998 + (1));
i__23129__auto___33998 = G__34000;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq33982){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33982));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34021 = arguments.length;
var i__23129__auto___34022 = (0);
while(true){
if((i__23129__auto___34022 < len__23128__auto___34021)){
args__23135__auto__.push((arguments[i__23129__auto___34022]));

var G__34023 = (i__23129__auto___34022 + (1));
i__23129__auto___34022 = G__34023;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq34016){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34016));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34031 = arguments.length;
var i__23129__auto___34032 = (0);
while(true){
if((i__23129__auto___34032 < len__23128__auto___34031)){
args__23135__auto__.push((arguments[i__23129__auto___34032]));

var G__34033 = (i__23129__auto___34032 + (1));
i__23129__auto___34032 = G__34033;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq34024){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34024));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34038 = arguments.length;
var i__23129__auto___34039 = (0);
while(true){
if((i__23129__auto___34039 < len__23128__auto___34038)){
args__23135__auto__.push((arguments[i__23129__auto___34039]));

var G__34042 = (i__23129__auto___34039 + (1));
i__23129__auto___34039 = G__34042;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq34036){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34036));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34049 = arguments.length;
var i__23129__auto___34050 = (0);
while(true){
if((i__23129__auto___34050 < len__23128__auto___34049)){
args__23135__auto__.push((arguments[i__23129__auto___34050]));

var G__34051 = (i__23129__auto___34050 + (1));
i__23129__auto___34050 = G__34051;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq34045){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34045));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34058 = arguments.length;
var i__23129__auto___34059 = (0);
while(true){
if((i__23129__auto___34059 < len__23128__auto___34058)){
args__23135__auto__.push((arguments[i__23129__auto___34059]));

var G__34060 = (i__23129__auto___34059 + (1));
i__23129__auto___34059 = G__34060;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq34056){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34056));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34072 = arguments.length;
var i__23129__auto___34073 = (0);
while(true){
if((i__23129__auto___34073 < len__23128__auto___34072)){
args__23135__auto__.push((arguments[i__23129__auto___34073]));

var G__34074 = (i__23129__auto___34073 + (1));
i__23129__auto___34073 = G__34074;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq34066){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34066));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34082 = arguments.length;
var i__23129__auto___34083 = (0);
while(true){
if((i__23129__auto___34083 < len__23128__auto___34082)){
args__23135__auto__.push((arguments[i__23129__auto___34083]));

var G__34096 = (i__23129__auto___34083 + (1));
i__23129__auto___34083 = G__34096;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq34077){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34077));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34103 = arguments.length;
var i__23129__auto___34104 = (0);
while(true){
if((i__23129__auto___34104 < len__23128__auto___34103)){
args__23135__auto__.push((arguments[i__23129__auto___34104]));

var G__34107 = (i__23129__auto___34104 + (1));
i__23129__auto___34104 = G__34107;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq34099){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34099));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34118 = arguments.length;
var i__23129__auto___34120 = (0);
while(true){
if((i__23129__auto___34120 < len__23128__auto___34118)){
args__23135__auto__.push((arguments[i__23129__auto___34120]));

var G__34124 = (i__23129__auto___34120 + (1));
i__23129__auto___34120 = G__34124;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq34113){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34113));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34141 = arguments.length;
var i__23129__auto___34143 = (0);
while(true){
if((i__23129__auto___34143 < len__23128__auto___34141)){
args__23135__auto__.push((arguments[i__23129__auto___34143]));

var G__34145 = (i__23129__auto___34143 + (1));
i__23129__auto___34143 = G__34145;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq34132){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34132));
});


//# sourceMappingURL=core.js.map