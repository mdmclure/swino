// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__23135__auto__ = [];
var len__23128__auto___27960 = arguments.length;
var i__23129__auto___27961 = (0);
while(true){
if((i__23129__auto___27961 < len__23128__auto___27960)){
args__23135__auto__.push((arguments[i__23129__auto___27961]));

var G__27962 = (i__23129__auto___27961 + (1));
i__23129__auto___27961 = G__27962;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((4) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23136__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__27944){
var map__27945 = p__27944;
var map__27945__$1 = ((((!((map__27945 == null)))?((((map__27945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27945):map__27945);
var separator = cljs.core.get.call(null,map__27945__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__27954 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__27955 = cljs.core.seq.call(null,vec__27954);
var first__27956 = cljs.core.first.call(null,seq__27955);
var seq__27955__$1 = cljs.core.next.call(null,seq__27955);
var first = first__27956;
var rest = seq__27955__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq27924){
var G__27925 = cljs.core.first.call(null,seq27924);
var seq27924__$1 = cljs.core.next.call(null,seq27924);
var G__27926 = cljs.core.first.call(null,seq27924__$1);
var seq27924__$2 = cljs.core.next.call(null,seq27924__$1);
var G__27927 = cljs.core.first.call(null,seq27924__$2);
var seq27924__$3 = cljs.core.next.call(null,seq27924__$2);
var G__27928 = cljs.core.first.call(null,seq27924__$3);
var seq27924__$4 = cljs.core.next.call(null,seq27924__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__27925,G__27926,G__27927,G__27928,seq27924__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__22020__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map