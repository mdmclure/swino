// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31249 = arguments.length;
var i__23129__auto___31250 = (0);
while(true){
if((i__23129__auto___31250 < len__23128__auto___31249)){
args__23135__auto__.push((arguments[i__23129__auto___31250]));

var G__31251 = (i__23129__auto___31250 + (1));
i__23129__auto___31250 = G__31251;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((4) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23136__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq31234){
var G__31235 = cljs.core.first.call(null,seq31234);
var seq31234__$1 = cljs.core.next.call(null,seq31234);
var G__31236 = cljs.core.first.call(null,seq31234__$1);
var seq31234__$2 = cljs.core.next.call(null,seq31234__$1);
var G__31237 = cljs.core.first.call(null,seq31234__$2);
var seq31234__$3 = cljs.core.next.call(null,seq31234__$2);
var G__31239 = cljs.core.first.call(null,seq31234__$3);
var seq31234__$4 = cljs.core.next.call(null,seq31234__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__31235,G__31236,G__31237,G__31239,seq31234__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31392 = arguments.length;
var i__23129__auto___31393 = (0);
while(true){
if((i__23129__auto___31393 < len__23128__auto___31392)){
args__23135__auto__.push((arguments[i__23129__auto___31393]));

var G__31398 = (i__23129__auto___31393 + (1));
i__23129__auto___31393 = G__31398;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__30896__auto__,rest__30897__auto__){
var convert_case__30898__auto__ = (function (p1__30895__30899__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__30895__30899__auto__,rest__30897__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__30896__auto__,convert_case__30898__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq31272){
var G__31273 = cljs.core.first.call(null,seq31272);
var seq31272__$1 = cljs.core.next.call(null,seq31272);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__31273,seq31272__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31423 = arguments.length;
var i__23129__auto___31424 = (0);
while(true){
if((i__23129__auto___31424 < len__23128__auto___31423)){
args__23135__auto__.push((arguments[i__23129__auto___31424]));

var G__31427 = (i__23129__auto___31424 + (1));
i__23129__auto___31424 = G__31427;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq31333){
var G__31336 = cljs.core.first.call(null,seq31333);
var seq31333__$1 = cljs.core.next.call(null,seq31333);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__31336,seq31333__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31450 = arguments.length;
var i__23129__auto___31451 = (0);
while(true){
if((i__23129__auto___31451 < len__23128__auto___31450)){
args__23135__auto__.push((arguments[i__23129__auto___31451]));

var G__31453 = (i__23129__auto___31451 + (1));
i__23129__auto___31451 = G__31453;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq31360){
var G__31361 = cljs.core.first.call(null,seq31360);
var seq31360__$1 = cljs.core.next.call(null,seq31360);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__31361,seq31360__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31460 = arguments.length;
var i__23129__auto___31461 = (0);
while(true){
if((i__23129__auto___31461 < len__23128__auto___31460)){
args__23135__auto__.push((arguments[i__23129__auto___31461]));

var G__31465 = (i__23129__auto___31461 + (1));
i__23129__auto___31461 = G__31465;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq31372){
var G__31374 = cljs.core.first.call(null,seq31372);
var seq31372__$1 = cljs.core.next.call(null,seq31372);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__31374,seq31372__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31521 = arguments.length;
var i__23129__auto___31522 = (0);
while(true){
if((i__23129__auto___31522 < len__23128__auto___31521)){
args__23135__auto__.push((arguments[i__23129__auto___31522]));

var G__31524 = (i__23129__auto___31522 + (1));
i__23129__auto___31522 = G__31524;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__30896__auto__,rest__30897__auto__){
var convert_case__30898__auto__ = (function (p1__30895__30899__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__30895__30899__auto__,rest__30897__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__30896__auto__,convert_case__30898__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq31479){
var G__31480 = cljs.core.first.call(null,seq31479);
var seq31479__$1 = cljs.core.next.call(null,seq31479);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__31480,seq31479__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31536 = arguments.length;
var i__23129__auto___31537 = (0);
while(true){
if((i__23129__auto___31537 < len__23128__auto___31536)){
args__23135__auto__.push((arguments[i__23129__auto___31537]));

var G__31539 = (i__23129__auto___31537 + (1));
i__23129__auto___31537 = G__31539;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq31492){
var G__31493 = cljs.core.first.call(null,seq31492);
var seq31492__$1 = cljs.core.next.call(null,seq31492);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__31493,seq31492__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31553 = arguments.length;
var i__23129__auto___31554 = (0);
while(true){
if((i__23129__auto___31554 < len__23128__auto___31553)){
args__23135__auto__.push((arguments[i__23129__auto___31554]));

var G__31555 = (i__23129__auto___31554 + (1));
i__23129__auto___31554 = G__31555;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq31499){
var G__31500 = cljs.core.first.call(null,seq31499);
var seq31499__$1 = cljs.core.next.call(null,seq31499);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__31500,seq31499__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31573 = arguments.length;
var i__23129__auto___31574 = (0);
while(true){
if((i__23129__auto___31574 < len__23128__auto___31573)){
args__23135__auto__.push((arguments[i__23129__auto___31574]));

var G__31575 = (i__23129__auto___31574 + (1));
i__23129__auto___31574 = G__31575;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq31511){
var G__31512 = cljs.core.first.call(null,seq31511);
var seq31511__$1 = cljs.core.next.call(null,seq31511);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__31512,seq31511__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31601 = arguments.length;
var i__23129__auto___31602 = (0);
while(true){
if((i__23129__auto___31602 < len__23128__auto___31601)){
args__23135__auto__.push((arguments[i__23129__auto___31602]));

var G__31603 = (i__23129__auto___31602 + (1));
i__23129__auto___31602 = G__31603;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__30896__auto__,rest__30897__auto__){
var convert_case__30898__auto__ = (function (p1__30895__30899__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__30895__30899__auto__,rest__30897__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__30896__auto__,convert_case__30898__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq31582){
var G__31583 = cljs.core.first.call(null,seq31582);
var seq31582__$1 = cljs.core.next.call(null,seq31582);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__31583,seq31582__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31607 = arguments.length;
var i__23129__auto___31608 = (0);
while(true){
if((i__23129__auto___31608 < len__23128__auto___31607)){
args__23135__auto__.push((arguments[i__23129__auto___31608]));

var G__31609 = (i__23129__auto___31608 + (1));
i__23129__auto___31608 = G__31609;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq31584){
var G__31585 = cljs.core.first.call(null,seq31584);
var seq31584__$1 = cljs.core.next.call(null,seq31584);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__31585,seq31584__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31611 = arguments.length;
var i__23129__auto___31612 = (0);
while(true){
if((i__23129__auto___31612 < len__23128__auto___31611)){
args__23135__auto__.push((arguments[i__23129__auto___31612]));

var G__31613 = (i__23129__auto___31612 + (1));
i__23129__auto___31612 = G__31613;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq31590){
var G__31591 = cljs.core.first.call(null,seq31590);
var seq31590__$1 = cljs.core.next.call(null,seq31590);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__31591,seq31590__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31627 = arguments.length;
var i__23129__auto___31628 = (0);
while(true){
if((i__23129__auto___31628 < len__23128__auto___31627)){
args__23135__auto__.push((arguments[i__23129__auto___31628]));

var G__31629 = (i__23129__auto___31628 + (1));
i__23129__auto___31628 = G__31629;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq31597){
var G__31598 = cljs.core.first.call(null,seq31597);
var seq31597__$1 = cljs.core.next.call(null,seq31597);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__31598,seq31597__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31672 = arguments.length;
var i__23129__auto___31673 = (0);
while(true){
if((i__23129__auto___31673 < len__23128__auto___31672)){
args__23135__auto__.push((arguments[i__23129__auto___31673]));

var G__31675 = (i__23129__auto___31673 + (1));
i__23129__auto___31673 = G__31675;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__30896__auto__,rest__30897__auto__){
var convert_case__30898__auto__ = (function (p1__30895__30899__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__30895__30899__auto__,rest__30897__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__30896__auto__,convert_case__30898__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq31636){
var G__31637 = cljs.core.first.call(null,seq31636);
var seq31636__$1 = cljs.core.next.call(null,seq31636);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__31637,seq31636__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31718 = arguments.length;
var i__23129__auto___31720 = (0);
while(true){
if((i__23129__auto___31720 < len__23128__auto___31718)){
args__23135__auto__.push((arguments[i__23129__auto___31720]));

var G__31751 = (i__23129__auto___31720 + (1));
i__23129__auto___31720 = G__31751;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq31642){
var G__31643 = cljs.core.first.call(null,seq31642);
var seq31642__$1 = cljs.core.next.call(null,seq31642);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__31643,seq31642__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31759 = arguments.length;
var i__23129__auto___31760 = (0);
while(true){
if((i__23129__auto___31760 < len__23128__auto___31759)){
args__23135__auto__.push((arguments[i__23129__auto___31760]));

var G__31761 = (i__23129__auto___31760 + (1));
i__23129__auto___31760 = G__31761;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq31655){
var G__31656 = cljs.core.first.call(null,seq31655);
var seq31655__$1 = cljs.core.next.call(null,seq31655);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__31656,seq31655__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31776 = arguments.length;
var i__23129__auto___31780 = (0);
while(true){
if((i__23129__auto___31780 < len__23128__auto___31776)){
args__23135__auto__.push((arguments[i__23129__auto___31780]));

var G__31781 = (i__23129__auto___31780 + (1));
i__23129__auto___31780 = G__31781;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq31667){
var G__31668 = cljs.core.first.call(null,seq31667);
var seq31667__$1 = cljs.core.next.call(null,seq31667);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__31668,seq31667__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31812 = arguments.length;
var i__23129__auto___31813 = (0);
while(true){
if((i__23129__auto___31813 < len__23128__auto___31812)){
args__23135__auto__.push((arguments[i__23129__auto___31813]));

var G__31814 = (i__23129__auto___31813 + (1));
i__23129__auto___31813 = G__31814;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__30896__auto__,rest__30897__auto__){
var convert_case__30898__auto__ = (function (p1__30895__30899__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__30895__30899__auto__,rest__30897__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__30896__auto__,convert_case__30898__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq31794){
var G__31795 = cljs.core.first.call(null,seq31794);
var seq31794__$1 = cljs.core.next.call(null,seq31794);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__31795,seq31794__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31827 = arguments.length;
var i__23129__auto___31828 = (0);
while(true){
if((i__23129__auto___31828 < len__23128__auto___31827)){
args__23135__auto__.push((arguments[i__23129__auto___31828]));

var G__31829 = (i__23129__auto___31828 + (1));
i__23129__auto___31828 = G__31829;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq31797){
var G__31798 = cljs.core.first.call(null,seq31797);
var seq31797__$1 = cljs.core.next.call(null,seq31797);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__31798,seq31797__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31836 = arguments.length;
var i__23129__auto___31837 = (0);
while(true){
if((i__23129__auto___31837 < len__23128__auto___31836)){
args__23135__auto__.push((arguments[i__23129__auto___31837]));

var G__31838 = (i__23129__auto___31837 + (1));
i__23129__auto___31837 = G__31838;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq31801){
var G__31802 = cljs.core.first.call(null,seq31801);
var seq31801__$1 = cljs.core.next.call(null,seq31801);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__31802,seq31801__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31842 = arguments.length;
var i__23129__auto___31843 = (0);
while(true){
if((i__23129__auto___31843 < len__23128__auto___31842)){
args__23135__auto__.push((arguments[i__23129__auto___31843]));

var G__31844 = (i__23129__auto___31843 + (1));
i__23129__auto___31843 = G__31844;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq31810){
var G__31811 = cljs.core.first.call(null,seq31810);
var seq31810__$1 = cljs.core.next.call(null,seq31810);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__31811,seq31810__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31878 = arguments.length;
var i__23129__auto___31882 = (0);
while(true){
if((i__23129__auto___31882 < len__23128__auto___31878)){
args__23135__auto__.push((arguments[i__23129__auto___31882]));

var G__31883 = (i__23129__auto___31882 + (1));
i__23129__auto___31882 = G__31883;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__30896__auto__,rest__30897__auto__){
var convert_case__30898__auto__ = (function (p1__30895__30899__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__30895__30899__auto__,rest__30897__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__30896__auto__,convert_case__30898__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq31846){
var G__31847 = cljs.core.first.call(null,seq31846);
var seq31846__$1 = cljs.core.next.call(null,seq31846);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__31847,seq31846__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31892 = arguments.length;
var i__23129__auto___31894 = (0);
while(true){
if((i__23129__auto___31894 < len__23128__auto___31892)){
args__23135__auto__.push((arguments[i__23129__auto___31894]));

var G__31897 = (i__23129__auto___31894 + (1));
i__23129__auto___31894 = G__31897;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq31855){
var G__31856 = cljs.core.first.call(null,seq31855);
var seq31855__$1 = cljs.core.next.call(null,seq31855);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__31856,seq31855__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31902 = arguments.length;
var i__23129__auto___31903 = (0);
while(true){
if((i__23129__auto___31903 < len__23128__auto___31902)){
args__23135__auto__.push((arguments[i__23129__auto___31903]));

var G__31905 = (i__23129__auto___31903 + (1));
i__23129__auto___31903 = G__31905;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq31865){
var G__31866 = cljs.core.first.call(null,seq31865);
var seq31865__$1 = cljs.core.next.call(null,seq31865);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__31866,seq31865__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31920 = arguments.length;
var i__23129__auto___31924 = (0);
while(true){
if((i__23129__auto___31924 < len__23128__auto___31920)){
args__23135__auto__.push((arguments[i__23129__auto___31924]));

var G__31925 = (i__23129__auto___31924 + (1));
i__23129__auto___31924 = G__31925;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq31872){
var G__31873 = cljs.core.first.call(null,seq31872);
var seq31872__$1 = cljs.core.next.call(null,seq31872);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__31873,seq31872__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__23135__auto__ = [];
var len__23128__auto___31985 = arguments.length;
var i__23129__auto___31990 = (0);
while(true){
if((i__23129__auto___31990 < len__23128__auto___31985)){
args__23135__auto__.push((arguments[i__23129__auto___31990]));

var G__31994 = (i__23129__auto___31990 + (1));
i__23129__auto___31990 = G__31994;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__30896__auto__,rest__30897__auto__){
var convert_case__30898__auto__ = (function (p1__30895__30899__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__30895__30899__auto__,rest__30897__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__30896__auto__,convert_case__30898__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq31935){
var G__31936 = cljs.core.first.call(null,seq31935);
var seq31935__$1 = cljs.core.next.call(null,seq31935);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__31936,seq31935__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32003 = arguments.length;
var i__23129__auto___32004 = (0);
while(true){
if((i__23129__auto___32004 < len__23128__auto___32003)){
args__23135__auto__.push((arguments[i__23129__auto___32004]));

var G__32007 = (i__23129__auto___32004 + (1));
i__23129__auto___32004 = G__32007;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq31937){
var G__31938 = cljs.core.first.call(null,seq31937);
var seq31937__$1 = cljs.core.next.call(null,seq31937);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__31938,seq31937__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32020 = arguments.length;
var i__23129__auto___32021 = (0);
while(true){
if((i__23129__auto___32021 < len__23128__auto___32020)){
args__23135__auto__.push((arguments[i__23129__auto___32021]));

var G__32024 = (i__23129__auto___32021 + (1));
i__23129__auto___32021 = G__32024;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq31942){
var G__31943 = cljs.core.first.call(null,seq31942);
var seq31942__$1 = cljs.core.next.call(null,seq31942);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__31943,seq31942__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__23135__auto__ = [];
var len__23128__auto___32065 = arguments.length;
var i__23129__auto___32066 = (0);
while(true){
if((i__23129__auto___32066 < len__23128__auto___32065)){
args__23135__auto__.push((arguments[i__23129__auto___32066]));

var G__32070 = (i__23129__auto___32066 + (1));
i__23129__auto___32066 = G__32070;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__30901__auto__,rest__30902__auto__){
if(!((s__30901__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__30901__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__30901__auto__),rest__30902__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq31947){
var G__31948 = cljs.core.first.call(null,seq31947);
var seq31947__$1 = cljs.core.next.call(null,seq31947);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__31948,seq31947__$1);
});


//# sourceMappingURL=core.js.map