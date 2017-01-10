// Compiled by ClojureScript 1.9.293 {}
goog.provide('swino.util');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('cljs.pprint');
goog.require('goog.events.KeyCodes');
swino.util.p = (function swino$util$p(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35494 = arguments.length;
var i__23129__auto___35495 = (0);
while(true){
if((i__23129__auto___35495 < len__23128__auto___35494)){
args__23135__auto__.push((arguments[i__23129__auto___35495]));

var G__35499 = (i__23129__auto___35495 + (1));
i__23129__auto___35495 = G__35499;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return swino.util.p.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

swino.util.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var seq__35488_35506 = cljs.core.seq.call(null,args);
var chunk__35489_35507 = null;
var count__35490_35508 = (0);
var i__35491_35509 = (0);
while(true){
if((i__35491_35509 < count__35490_35508)){
var a_35510 = cljs.core._nth.call(null,chunk__35489_35507,i__35491_35509);
var f_35511 = ((cljs.core.map_QMARK_.call(null,a_35510))?cljs.pprint.pprint:cljs.core.print);
f_35511.call(null,a_35510);

var G__35513 = seq__35488_35506;
var G__35514 = chunk__35489_35507;
var G__35515 = count__35490_35508;
var G__35516 = (i__35491_35509 + (1));
seq__35488_35506 = G__35513;
chunk__35489_35507 = G__35514;
count__35490_35508 = G__35515;
i__35491_35509 = G__35516;
continue;
} else {
var temp__4657__auto___35518 = cljs.core.seq.call(null,seq__35488_35506);
if(temp__4657__auto___35518){
var seq__35488_35519__$1 = temp__4657__auto___35518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35488_35519__$1)){
var c__22834__auto___35520 = cljs.core.chunk_first.call(null,seq__35488_35519__$1);
var G__35522 = cljs.core.chunk_rest.call(null,seq__35488_35519__$1);
var G__35523 = c__22834__auto___35520;
var G__35524 = cljs.core.count.call(null,c__22834__auto___35520);
var G__35525 = (0);
seq__35488_35506 = G__35522;
chunk__35489_35507 = G__35523;
count__35490_35508 = G__35524;
i__35491_35509 = G__35525;
continue;
} else {
var a_35528 = cljs.core.first.call(null,seq__35488_35519__$1);
var f_35530 = ((cljs.core.map_QMARK_.call(null,a_35528))?cljs.pprint.pprint:cljs.core.print);
f_35530.call(null,a_35528);

var G__35533 = cljs.core.next.call(null,seq__35488_35519__$1);
var G__35534 = null;
var G__35535 = (0);
var G__35536 = (0);
seq__35488_35506 = G__35533;
chunk__35489_35507 = G__35534;
count__35490_35508 = G__35535;
i__35491_35509 = G__35536;
continue;
}
} else {
}
}
break;
}

cljs.core.println.call(null);

cljs.core.flush.call(null);

return cljs.core.last.call(null,args);
});

swino.util.p.cljs$lang$maxFixedArity = (0);

swino.util.p.cljs$lang$applyTo = (function (seq35483){
return swino.util.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35483));
});

swino.util.pcoll = (function swino$util$pcoll(items){
return cljs.core.doall.call(null,cljs.core.map.call(null,swino.util.p,items));
});
swino.util.prevent_default = (function swino$util$prevent_default(e){
var G__35541 = e;
G__35541.preventDefault();

G__35541.stopPropagation();

return G__35541;
});
swino.util.target_val = (function swino$util$target_val(e){
return e.target.value;
});
swino.util.on_key_down = (function swino$util$on_key_down(key_fns){
return (function (e){
var f = (function (){var pred__35547 = cljs.core._EQ__EQ_;
var expr__35548 = (e["keyCode"]);
if(cljs.core.truth_(pred__35547.call(null,goog.events.KeyCodes.ESC,expr__35548))){
return new cljs.core.Keyword("key","esc","key/esc",-1672046650).cljs$core$IFn$_invoke$arity$1(key_fns);
} else {
if(cljs.core.truth_(pred__35547.call(null,goog.events.KeyCodes.ENTER,expr__35548))){
return new cljs.core.Keyword("key","enter","key/enter",1792346545).cljs$core$IFn$_invoke$arity$1(key_fns);
} else {
return ((function (pred__35547,expr__35548){
return (function (p1__35543_SHARP_){
return p1__35543_SHARP_;
});
;})(pred__35547,expr__35548))
}
}
})();
return f.call(null,e);
});
});
swino.util.event_data = (function swino$util$event_data(e){
return (e.event_["data"]);
});
swino.util.apply_if = (function swino$util$apply_if(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35583 = arguments.length;
var i__23129__auto___35584 = (0);
while(true){
if((i__23129__auto___35584 < len__23128__auto___35583)){
args__23135__auto__.push((arguments[i__23129__auto___35584]));

var G__35587 = (i__23129__auto___35584 + (1));
i__23129__auto___35584 = G__35587;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((3) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((3)),(0),null)):null);
return swino.util.apply_if.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23136__auto__);
});

swino.util.apply_if.cljs$core$IFn$_invoke$arity$variadic = (function (pred,f,x,args){
if(cljs.core.not.call(null,pred.call(null,x))){
return cljs.core.apply.call(null,f,x,args);
} else {
return x;
}
});

swino.util.apply_if.cljs$lang$maxFixedArity = (3);

swino.util.apply_if.cljs$lang$applyTo = (function (seq35575){
var G__35576 = cljs.core.first.call(null,seq35575);
var seq35575__$1 = cljs.core.next.call(null,seq35575);
var G__35577 = cljs.core.first.call(null,seq35575__$1);
var seq35575__$2 = cljs.core.next.call(null,seq35575__$1);
var G__35578 = cljs.core.first.call(null,seq35575__$2);
var seq35575__$3 = cljs.core.next.call(null,seq35575__$2);
return swino.util.apply_if.cljs$core$IFn$_invoke$arity$variadic(G__35576,G__35577,G__35578,seq35575__$3);
});

swino.util.find_by_key = (function swino$util$find_by_key(k,v,coll){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__35593_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,p1__35593_SHARP_,k));
}),coll));
});

//# sourceMappingURL=util.js.map