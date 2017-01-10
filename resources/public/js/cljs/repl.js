// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39373){
var map__39407 = p__39373;
var map__39407__$1 = ((((!((map__39407 == null)))?((((map__39407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39407):map__39407);
var m = map__39407__$1;
var n = cljs.core.get.call(null,map__39407__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39407__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39409_39442 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39410_39443 = null;
var count__39411_39444 = (0);
var i__39412_39445 = (0);
while(true){
if((i__39412_39445 < count__39411_39444)){
var f_39446 = cljs.core._nth.call(null,chunk__39410_39443,i__39412_39445);
cljs.core.println.call(null,"  ",f_39446);

var G__39447 = seq__39409_39442;
var G__39448 = chunk__39410_39443;
var G__39449 = count__39411_39444;
var G__39450 = (i__39412_39445 + (1));
seq__39409_39442 = G__39447;
chunk__39410_39443 = G__39448;
count__39411_39444 = G__39449;
i__39412_39445 = G__39450;
continue;
} else {
var temp__4657__auto___39452 = cljs.core.seq.call(null,seq__39409_39442);
if(temp__4657__auto___39452){
var seq__39409_39453__$1 = temp__4657__auto___39452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39409_39453__$1)){
var c__22834__auto___39454 = cljs.core.chunk_first.call(null,seq__39409_39453__$1);
var G__39455 = cljs.core.chunk_rest.call(null,seq__39409_39453__$1);
var G__39456 = c__22834__auto___39454;
var G__39457 = cljs.core.count.call(null,c__22834__auto___39454);
var G__39458 = (0);
seq__39409_39442 = G__39455;
chunk__39410_39443 = G__39456;
count__39411_39444 = G__39457;
i__39412_39445 = G__39458;
continue;
} else {
var f_39461 = cljs.core.first.call(null,seq__39409_39453__$1);
cljs.core.println.call(null,"  ",f_39461);

var G__39463 = cljs.core.next.call(null,seq__39409_39453__$1);
var G__39464 = null;
var G__39465 = (0);
var G__39466 = (0);
seq__39409_39442 = G__39463;
chunk__39410_39443 = G__39464;
count__39411_39444 = G__39465;
i__39412_39445 = G__39466;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39467 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22020__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39467);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39467)))?cljs.core.second.call(null,arglists_39467):arglists_39467));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39416_39472 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39417_39473 = null;
var count__39418_39474 = (0);
var i__39419_39475 = (0);
while(true){
if((i__39419_39475 < count__39418_39474)){
var vec__39421_39476 = cljs.core._nth.call(null,chunk__39417_39473,i__39419_39475);
var name_39477 = cljs.core.nth.call(null,vec__39421_39476,(0),null);
var map__39424_39478 = cljs.core.nth.call(null,vec__39421_39476,(1),null);
var map__39424_39479__$1 = ((((!((map__39424_39478 == null)))?((((map__39424_39478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39424_39478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39424_39478):map__39424_39478);
var doc_39480 = cljs.core.get.call(null,map__39424_39479__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39481 = cljs.core.get.call(null,map__39424_39479__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39477);

cljs.core.println.call(null," ",arglists_39481);

if(cljs.core.truth_(doc_39480)){
cljs.core.println.call(null," ",doc_39480);
} else {
}

var G__39484 = seq__39416_39472;
var G__39485 = chunk__39417_39473;
var G__39486 = count__39418_39474;
var G__39487 = (i__39419_39475 + (1));
seq__39416_39472 = G__39484;
chunk__39417_39473 = G__39485;
count__39418_39474 = G__39486;
i__39419_39475 = G__39487;
continue;
} else {
var temp__4657__auto___39490 = cljs.core.seq.call(null,seq__39416_39472);
if(temp__4657__auto___39490){
var seq__39416_39491__$1 = temp__4657__auto___39490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39416_39491__$1)){
var c__22834__auto___39492 = cljs.core.chunk_first.call(null,seq__39416_39491__$1);
var G__39493 = cljs.core.chunk_rest.call(null,seq__39416_39491__$1);
var G__39494 = c__22834__auto___39492;
var G__39495 = cljs.core.count.call(null,c__22834__auto___39492);
var G__39496 = (0);
seq__39416_39472 = G__39493;
chunk__39417_39473 = G__39494;
count__39418_39474 = G__39495;
i__39419_39475 = G__39496;
continue;
} else {
var vec__39426_39497 = cljs.core.first.call(null,seq__39416_39491__$1);
var name_39498 = cljs.core.nth.call(null,vec__39426_39497,(0),null);
var map__39429_39499 = cljs.core.nth.call(null,vec__39426_39497,(1),null);
var map__39429_39500__$1 = ((((!((map__39429_39499 == null)))?((((map__39429_39499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39429_39499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39429_39499):map__39429_39499);
var doc_39501 = cljs.core.get.call(null,map__39429_39500__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39502 = cljs.core.get.call(null,map__39429_39500__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39498);

cljs.core.println.call(null," ",arglists_39502);

if(cljs.core.truth_(doc_39501)){
cljs.core.println.call(null," ",doc_39501);
} else {
}

var G__39507 = cljs.core.next.call(null,seq__39416_39491__$1);
var G__39508 = null;
var G__39509 = (0);
var G__39510 = (0);
seq__39416_39472 = G__39507;
chunk__39417_39473 = G__39508;
count__39418_39474 = G__39509;
i__39419_39475 = G__39510;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__39434 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39435 = null;
var count__39436 = (0);
var i__39437 = (0);
while(true){
if((i__39437 < count__39436)){
var role = cljs.core._nth.call(null,chunk__39435,i__39437);
var temp__4657__auto___39512__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39512__$1)){
var spec_39513 = temp__4657__auto___39512__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39513));
} else {
}

var G__39516 = seq__39434;
var G__39517 = chunk__39435;
var G__39518 = count__39436;
var G__39519 = (i__39437 + (1));
seq__39434 = G__39516;
chunk__39435 = G__39517;
count__39436 = G__39518;
i__39437 = G__39519;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__39434);
if(temp__4657__auto____$1){
var seq__39434__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39434__$1)){
var c__22834__auto__ = cljs.core.chunk_first.call(null,seq__39434__$1);
var G__39521 = cljs.core.chunk_rest.call(null,seq__39434__$1);
var G__39522 = c__22834__auto__;
var G__39523 = cljs.core.count.call(null,c__22834__auto__);
var G__39524 = (0);
seq__39434 = G__39521;
chunk__39435 = G__39522;
count__39436 = G__39523;
i__39437 = G__39524;
continue;
} else {
var role = cljs.core.first.call(null,seq__39434__$1);
var temp__4657__auto___39526__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39526__$2)){
var spec_39527 = temp__4657__auto___39526__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39527));
} else {
}

var G__39528 = cljs.core.next.call(null,seq__39434__$1);
var G__39529 = null;
var G__39530 = (0);
var G__39531 = (0);
seq__39434 = G__39528;
chunk__39435 = G__39529;
count__39436 = G__39530;
i__39437 = G__39531;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map