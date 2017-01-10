// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34579 = arguments.length;
var i__23129__auto___34580 = (0);
while(true){
if((i__23129__auto___34580 < len__23128__auto___34579)){
args__23135__auto__.push((arguments[i__23129__auto___34580]));

var G__34581 = (i__23129__auto___34580 + (1));
i__23129__auto___34580 = G__34581;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq34574){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34574));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34594 = arguments.length;
var i__23129__auto___34595 = (0);
while(true){
if((i__23129__auto___34595 < len__23128__auto___34594)){
args__23135__auto__.push((arguments[i__23129__auto___34595]));

var G__34601 = (i__23129__auto___34595 + (1));
i__23129__auto___34595 = G__34601;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq34590){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34590));
});

var g_QMARK__34620 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_34621 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34620){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34620))
,null));
var mkg_34622 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34620,g_34621){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34620,g_34621))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__34620,g_34621,mkg_34622){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34620).call(null,x);
});})(g_QMARK__34620,g_34621,mkg_34622))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__34620,g_34621,mkg_34622){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_34622).call(null,gfn);
});})(g_QMARK__34620,g_34621,mkg_34622))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__34620,g_34621,mkg_34622){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_34621).call(null,generator);
});})(g_QMARK__34620,g_34621,mkg_34622))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34536__auto___34913 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__34536__auto___34913){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34915 = arguments.length;
var i__23129__auto___34916 = (0);
while(true){
if((i__23129__auto___34916 < len__23128__auto___34915)){
args__23135__auto__.push((arguments[i__23129__auto___34916]));

var G__34917 = (i__23129__auto___34916 + (1));
i__23129__auto___34916 = G__34917;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___34913))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___34913){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___34913),args);
});})(g__34536__auto___34913))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__34536__auto___34913){
return (function (seq34650){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34650));
});})(g__34536__auto___34913))
;


var g__34536__auto___34919 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__34536__auto___34919){
return (function cljs$spec$impl$gen$list(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34923 = arguments.length;
var i__23129__auto___34924 = (0);
while(true){
if((i__23129__auto___34924 < len__23128__auto___34923)){
args__23135__auto__.push((arguments[i__23129__auto___34924]));

var G__34925 = (i__23129__auto___34924 + (1));
i__23129__auto___34924 = G__34925;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___34919))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___34919){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___34919),args);
});})(g__34536__auto___34919))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__34536__auto___34919){
return (function (seq34651){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34651));
});})(g__34536__auto___34919))
;


var g__34536__auto___34927 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__34536__auto___34927){
return (function cljs$spec$impl$gen$map(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34930 = arguments.length;
var i__23129__auto___34931 = (0);
while(true){
if((i__23129__auto___34931 < len__23128__auto___34930)){
args__23135__auto__.push((arguments[i__23129__auto___34931]));

var G__34933 = (i__23129__auto___34931 + (1));
i__23129__auto___34931 = G__34933;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___34927))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___34927){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___34927),args);
});})(g__34536__auto___34927))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__34536__auto___34927){
return (function (seq34655){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34655));
});})(g__34536__auto___34927))
;


var g__34536__auto___34935 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__34536__auto___34935){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34936 = arguments.length;
var i__23129__auto___34939 = (0);
while(true){
if((i__23129__auto___34939 < len__23128__auto___34936)){
args__23135__auto__.push((arguments[i__23129__auto___34939]));

var G__34941 = (i__23129__auto___34939 + (1));
i__23129__auto___34939 = G__34941;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___34935))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___34935){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___34935),args);
});})(g__34536__auto___34935))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__34536__auto___34935){
return (function (seq34660){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34660));
});})(g__34536__auto___34935))
;


var g__34536__auto___34946 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__34536__auto___34946){
return (function cljs$spec$impl$gen$set(var_args){
var args__23135__auto__ = [];
var len__23128__auto___34948 = arguments.length;
var i__23129__auto___34949 = (0);
while(true){
if((i__23129__auto___34949 < len__23128__auto___34948)){
args__23135__auto__.push((arguments[i__23129__auto___34949]));

var G__34952 = (i__23129__auto___34949 + (1));
i__23129__auto___34949 = G__34952;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___34946))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___34946){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___34946),args);
});})(g__34536__auto___34946))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__34536__auto___34946){
return (function (seq34661){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34661));
});})(g__34536__auto___34946))
;


var g__34536__auto___35038 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__34536__auto___35038){
return (function cljs$spec$impl$gen$vector(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35056 = arguments.length;
var i__23129__auto___35058 = (0);
while(true){
if((i__23129__auto___35058 < len__23128__auto___35056)){
args__23135__auto__.push((arguments[i__23129__auto___35058]));

var G__35062 = (i__23129__auto___35058 + (1));
i__23129__auto___35058 = G__35062;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35038))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35038){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35038),args);
});})(g__34536__auto___35038))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__34536__auto___35038){
return (function (seq34668){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34668));
});})(g__34536__auto___35038))
;


var g__34536__auto___35082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__34536__auto___35082){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35091 = arguments.length;
var i__23129__auto___35093 = (0);
while(true){
if((i__23129__auto___35093 < len__23128__auto___35091)){
args__23135__auto__.push((arguments[i__23129__auto___35093]));

var G__35094 = (i__23129__auto___35093 + (1));
i__23129__auto___35093 = G__35094;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35082))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35082){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35082),args);
});})(g__34536__auto___35082))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__34536__auto___35082){
return (function (seq34690){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34690));
});})(g__34536__auto___35082))
;


var g__34536__auto___35101 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__34536__auto___35101){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35108 = arguments.length;
var i__23129__auto___35109 = (0);
while(true){
if((i__23129__auto___35109 < len__23128__auto___35108)){
args__23135__auto__.push((arguments[i__23129__auto___35109]));

var G__35111 = (i__23129__auto___35109 + (1));
i__23129__auto___35109 = G__35111;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35101))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35101){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35101),args);
});})(g__34536__auto___35101))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__34536__auto___35101){
return (function (seq34701){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34701));
});})(g__34536__auto___35101))
;


var g__34536__auto___35126 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__34536__auto___35126){
return (function cljs$spec$impl$gen$elements(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35127 = arguments.length;
var i__23129__auto___35128 = (0);
while(true){
if((i__23129__auto___35128 < len__23128__auto___35127)){
args__23135__auto__.push((arguments[i__23129__auto___35128]));

var G__35129 = (i__23129__auto___35128 + (1));
i__23129__auto___35128 = G__35129;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35126))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35126){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35126),args);
});})(g__34536__auto___35126))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__34536__auto___35126){
return (function (seq34719){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34719));
});})(g__34536__auto___35126))
;


var g__34536__auto___35131 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__34536__auto___35131){
return (function cljs$spec$impl$gen$bind(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35135 = arguments.length;
var i__23129__auto___35136 = (0);
while(true){
if((i__23129__auto___35136 < len__23128__auto___35135)){
args__23135__auto__.push((arguments[i__23129__auto___35136]));

var G__35137 = (i__23129__auto___35136 + (1));
i__23129__auto___35136 = G__35137;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35131))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35131){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35131),args);
});})(g__34536__auto___35131))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__34536__auto___35131){
return (function (seq34733){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34733));
});})(g__34536__auto___35131))
;


var g__34536__auto___35139 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__34536__auto___35139){
return (function cljs$spec$impl$gen$choose(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35140 = arguments.length;
var i__23129__auto___35141 = (0);
while(true){
if((i__23129__auto___35141 < len__23128__auto___35140)){
args__23135__auto__.push((arguments[i__23129__auto___35141]));

var G__35144 = (i__23129__auto___35141 + (1));
i__23129__auto___35141 = G__35144;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35139))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35139){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35139),args);
});})(g__34536__auto___35139))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__34536__auto___35139){
return (function (seq34746){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34746));
});})(g__34536__auto___35139))
;


var g__34536__auto___35150 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__34536__auto___35150){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35152 = arguments.length;
var i__23129__auto___35153 = (0);
while(true){
if((i__23129__auto___35153 < len__23128__auto___35152)){
args__23135__auto__.push((arguments[i__23129__auto___35153]));

var G__35158 = (i__23129__auto___35153 + (1));
i__23129__auto___35153 = G__35158;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35150))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35150){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35150),args);
});})(g__34536__auto___35150))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__34536__auto___35150){
return (function (seq34754){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34754));
});})(g__34536__auto___35150))
;


var g__34536__auto___35170 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__34536__auto___35170){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35183 = arguments.length;
var i__23129__auto___35202 = (0);
while(true){
if((i__23129__auto___35202 < len__23128__auto___35183)){
args__23135__auto__.push((arguments[i__23129__auto___35202]));

var G__35219 = (i__23129__auto___35202 + (1));
i__23129__auto___35202 = G__35219;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35170))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35170){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35170),args);
});})(g__34536__auto___35170))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__34536__auto___35170){
return (function (seq34763){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34763));
});})(g__34536__auto___35170))
;


var g__34536__auto___35227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__34536__auto___35227){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35248 = arguments.length;
var i__23129__auto___35249 = (0);
while(true){
if((i__23129__auto___35249 < len__23128__auto___35248)){
args__23135__auto__.push((arguments[i__23129__auto___35249]));

var G__35256 = (i__23129__auto___35249 + (1));
i__23129__auto___35249 = G__35256;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35227))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35227),args);
});})(g__34536__auto___35227))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__34536__auto___35227){
return (function (seq34773){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34773));
});})(g__34536__auto___35227))
;


var g__34536__auto___35273 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__34536__auto___35273){
return (function cljs$spec$impl$gen$sample(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35279 = arguments.length;
var i__23129__auto___35280 = (0);
while(true){
if((i__23129__auto___35280 < len__23128__auto___35279)){
args__23135__auto__.push((arguments[i__23129__auto___35280]));

var G__35281 = (i__23129__auto___35280 + (1));
i__23129__auto___35280 = G__35281;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35273))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35273){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35273),args);
});})(g__34536__auto___35273))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__34536__auto___35273){
return (function (seq34776){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34776));
});})(g__34536__auto___35273))
;


var g__34536__auto___35292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__34536__auto___35292){
return (function cljs$spec$impl$gen$return(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35298 = arguments.length;
var i__23129__auto___35299 = (0);
while(true){
if((i__23129__auto___35299 < len__23128__auto___35298)){
args__23135__auto__.push((arguments[i__23129__auto___35299]));

var G__35303 = (i__23129__auto___35299 + (1));
i__23129__auto___35299 = G__35303;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35292))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35292){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35292),args);
});})(g__34536__auto___35292))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__34536__auto___35292){
return (function (seq34833){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34833));
});})(g__34536__auto___35292))
;


var g__34536__auto___35311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__34536__auto___35311){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35330 = arguments.length;
var i__23129__auto___35331 = (0);
while(true){
if((i__23129__auto___35331 < len__23128__auto___35330)){
args__23135__auto__.push((arguments[i__23129__auto___35331]));

var G__35335 = (i__23129__auto___35331 + (1));
i__23129__auto___35331 = G__35335;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35311))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35311){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35311),args);
});})(g__34536__auto___35311))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34536__auto___35311){
return (function (seq34899){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34899));
});})(g__34536__auto___35311))
;


var g__34536__auto___35353 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__34536__auto___35353){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35354 = arguments.length;
var i__23129__auto___35355 = (0);
while(true){
if((i__23129__auto___35355 < len__23128__auto___35354)){
args__23135__auto__.push((arguments[i__23129__auto___35355]));

var G__35358 = (i__23129__auto___35355 + (1));
i__23129__auto___35355 = G__35358;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34536__auto___35353))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34536__auto___35353){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34536__auto___35353),args);
});})(g__34536__auto___35353))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__34536__auto___35353){
return (function (seq34910){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34910));
});})(g__34536__auto___35353))
;

var g__34549__auto___35580 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__34549__auto___35580){
return (function cljs$spec$impl$gen$any(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35586 = arguments.length;
var i__23129__auto___35588 = (0);
while(true){
if((i__23129__auto___35588 < len__23128__auto___35586)){
args__23135__auto__.push((arguments[i__23129__auto___35588]));

var G__35589 = (i__23129__auto___35588 + (1));
i__23129__auto___35588 = G__35589;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35580))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35580){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35580);
});})(g__34549__auto___35580))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__34549__auto___35580){
return (function (seq35363){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35363));
});})(g__34549__auto___35580))
;


var g__34549__auto___35591 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__34549__auto___35591){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35617 = arguments.length;
var i__23129__auto___35621 = (0);
while(true){
if((i__23129__auto___35621 < len__23128__auto___35617)){
args__23135__auto__.push((arguments[i__23129__auto___35621]));

var G__35623 = (i__23129__auto___35621 + (1));
i__23129__auto___35621 = G__35623;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35591))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35591){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35591);
});})(g__34549__auto___35591))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__34549__auto___35591){
return (function (seq35383){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35383));
});})(g__34549__auto___35591))
;


var g__34549__auto___35651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__34549__auto___35651){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35657 = arguments.length;
var i__23129__auto___35659 = (0);
while(true){
if((i__23129__auto___35659 < len__23128__auto___35657)){
args__23135__auto__.push((arguments[i__23129__auto___35659]));

var G__35661 = (i__23129__auto___35659 + (1));
i__23129__auto___35659 = G__35661;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35651))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35651){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35651);
});})(g__34549__auto___35651))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__34549__auto___35651){
return (function (seq35392){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35392));
});})(g__34549__auto___35651))
;


var g__34549__auto___35669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__34549__auto___35669){
return (function cljs$spec$impl$gen$char(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35677 = arguments.length;
var i__23129__auto___35678 = (0);
while(true){
if((i__23129__auto___35678 < len__23128__auto___35677)){
args__23135__auto__.push((arguments[i__23129__auto___35678]));

var G__35680 = (i__23129__auto___35678 + (1));
i__23129__auto___35678 = G__35680;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35669))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35669){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35669);
});})(g__34549__auto___35669))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__34549__auto___35669){
return (function (seq35404){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35404));
});})(g__34549__auto___35669))
;


var g__34549__auto___35686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__34549__auto___35686){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35691 = arguments.length;
var i__23129__auto___35692 = (0);
while(true){
if((i__23129__auto___35692 < len__23128__auto___35691)){
args__23135__auto__.push((arguments[i__23129__auto___35692]));

var G__35693 = (i__23129__auto___35692 + (1));
i__23129__auto___35692 = G__35693;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35686))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35686){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35686);
});})(g__34549__auto___35686))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__34549__auto___35686){
return (function (seq35412){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35412));
});})(g__34549__auto___35686))
;


var g__34549__auto___35697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__34549__auto___35697){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35698 = arguments.length;
var i__23129__auto___35699 = (0);
while(true){
if((i__23129__auto___35699 < len__23128__auto___35698)){
args__23135__auto__.push((arguments[i__23129__auto___35699]));

var G__35701 = (i__23129__auto___35699 + (1));
i__23129__auto___35699 = G__35701;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35697))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35697){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35697);
});})(g__34549__auto___35697))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__34549__auto___35697){
return (function (seq35424){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35424));
});})(g__34549__auto___35697))
;


var g__34549__auto___35703 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__34549__auto___35703){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35714 = arguments.length;
var i__23129__auto___35715 = (0);
while(true){
if((i__23129__auto___35715 < len__23128__auto___35714)){
args__23135__auto__.push((arguments[i__23129__auto___35715]));

var G__35720 = (i__23129__auto___35715 + (1));
i__23129__auto___35715 = G__35720;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35703))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35703){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35703);
});})(g__34549__auto___35703))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__34549__auto___35703){
return (function (seq35435){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35435));
});})(g__34549__auto___35703))
;


var g__34549__auto___35723 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__34549__auto___35723){
return (function cljs$spec$impl$gen$double(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35731 = arguments.length;
var i__23129__auto___35732 = (0);
while(true){
if((i__23129__auto___35732 < len__23128__auto___35731)){
args__23135__auto__.push((arguments[i__23129__auto___35732]));

var G__35736 = (i__23129__auto___35732 + (1));
i__23129__auto___35732 = G__35736;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35723))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35723){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35723);
});})(g__34549__auto___35723))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__34549__auto___35723){
return (function (seq35442){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35442));
});})(g__34549__auto___35723))
;


var g__34549__auto___35823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__34549__auto___35823){
return (function cljs$spec$impl$gen$int(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35825 = arguments.length;
var i__23129__auto___35826 = (0);
while(true){
if((i__23129__auto___35826 < len__23128__auto___35825)){
args__23135__auto__.push((arguments[i__23129__auto___35826]));

var G__35827 = (i__23129__auto___35826 + (1));
i__23129__auto___35826 = G__35827;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35823))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35823){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35823);
});})(g__34549__auto___35823))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__34549__auto___35823){
return (function (seq35448){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35448));
});})(g__34549__auto___35823))
;


var g__34549__auto___35831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__34549__auto___35831){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35832 = arguments.length;
var i__23129__auto___35833 = (0);
while(true){
if((i__23129__auto___35833 < len__23128__auto___35832)){
args__23135__auto__.push((arguments[i__23129__auto___35833]));

var G__35834 = (i__23129__auto___35833 + (1));
i__23129__auto___35833 = G__35834;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35831))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35831){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35831);
});})(g__34549__auto___35831))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__34549__auto___35831){
return (function (seq35453){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35453));
});})(g__34549__auto___35831))
;


var g__34549__auto___35836 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__34549__auto___35836){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35841 = arguments.length;
var i__23129__auto___35842 = (0);
while(true){
if((i__23129__auto___35842 < len__23128__auto___35841)){
args__23135__auto__.push((arguments[i__23129__auto___35842]));

var G__35843 = (i__23129__auto___35842 + (1));
i__23129__auto___35842 = G__35843;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35836))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35836){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35836);
});})(g__34549__auto___35836))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__34549__auto___35836){
return (function (seq35460){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35460));
});})(g__34549__auto___35836))
;


var g__34549__auto___35853 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__34549__auto___35853){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35863 = arguments.length;
var i__23129__auto___35865 = (0);
while(true){
if((i__23129__auto___35865 < len__23128__auto___35863)){
args__23135__auto__.push((arguments[i__23129__auto___35865]));

var G__35866 = (i__23129__auto___35865 + (1));
i__23129__auto___35865 = G__35866;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35853))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35853){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35853);
});})(g__34549__auto___35853))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__34549__auto___35853){
return (function (seq35469){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35469));
});})(g__34549__auto___35853))
;


var g__34549__auto___35873 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__34549__auto___35873){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35875 = arguments.length;
var i__23129__auto___35876 = (0);
while(true){
if((i__23129__auto___35876 < len__23128__auto___35875)){
args__23135__auto__.push((arguments[i__23129__auto___35876]));

var G__35877 = (i__23129__auto___35876 + (1));
i__23129__auto___35876 = G__35877;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35873))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35873){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35873);
});})(g__34549__auto___35873))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__34549__auto___35873){
return (function (seq35493){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35493));
});})(g__34549__auto___35873))
;


var g__34549__auto___35879 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__34549__auto___35879){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35903 = arguments.length;
var i__23129__auto___35911 = (0);
while(true){
if((i__23129__auto___35911 < len__23128__auto___35903)){
args__23135__auto__.push((arguments[i__23129__auto___35911]));

var G__35919 = (i__23129__auto___35911 + (1));
i__23129__auto___35911 = G__35919;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35879))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35879){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35879);
});})(g__34549__auto___35879))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__34549__auto___35879){
return (function (seq35550){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35550));
});})(g__34549__auto___35879))
;


var g__34549__auto___35932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__34549__auto___35932){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35939 = arguments.length;
var i__23129__auto___35941 = (0);
while(true){
if((i__23129__auto___35941 < len__23128__auto___35939)){
args__23135__auto__.push((arguments[i__23129__auto___35941]));

var G__36012 = (i__23129__auto___35941 + (1));
i__23129__auto___35941 = G__36012;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___35932))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___35932){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___35932);
});})(g__34549__auto___35932))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__34549__auto___35932){
return (function (seq35554){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35554));
});})(g__34549__auto___35932))
;


var g__34549__auto___36017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__34549__auto___36017){
return (function cljs$spec$impl$gen$string(var_args){
var args__23135__auto__ = [];
var len__23128__auto___36018 = arguments.length;
var i__23129__auto___36019 = (0);
while(true){
if((i__23129__auto___36019 < len__23128__auto___36018)){
args__23135__auto__.push((arguments[i__23129__auto___36019]));

var G__36020 = (i__23129__auto___36019 + (1));
i__23129__auto___36019 = G__36020;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___36017))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___36017){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___36017);
});})(g__34549__auto___36017))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__34549__auto___36017){
return (function (seq35557){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35557));
});})(g__34549__auto___36017))
;


var g__34549__auto___36022 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__34549__auto___36022){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__23135__auto__ = [];
var len__23128__auto___36030 = arguments.length;
var i__23129__auto___36031 = (0);
while(true){
if((i__23129__auto___36031 < len__23128__auto___36030)){
args__23135__auto__.push((arguments[i__23129__auto___36031]));

var G__36033 = (i__23129__auto___36031 + (1));
i__23129__auto___36031 = G__36033;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___36022))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___36022){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___36022);
});})(g__34549__auto___36022))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__34549__auto___36022){
return (function (seq35561){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35561));
});})(g__34549__auto___36022))
;


var g__34549__auto___36046 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__34549__auto___36046){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__23135__auto__ = [];
var len__23128__auto___36049 = arguments.length;
var i__23129__auto___36051 = (0);
while(true){
if((i__23129__auto___36051 < len__23128__auto___36049)){
args__23135__auto__.push((arguments[i__23129__auto___36051]));

var G__36052 = (i__23129__auto___36051 + (1));
i__23129__auto___36051 = G__36052;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___36046))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___36046){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___36046);
});})(g__34549__auto___36046))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__34549__auto___36046){
return (function (seq35567){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35567));
});})(g__34549__auto___36046))
;


var g__34549__auto___36054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__34549__auto___36054){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__23135__auto__ = [];
var len__23128__auto___36056 = arguments.length;
var i__23129__auto___36057 = (0);
while(true){
if((i__23129__auto___36057 < len__23128__auto___36056)){
args__23135__auto__.push((arguments[i__23129__auto___36057]));

var G__36059 = (i__23129__auto___36057 + (1));
i__23129__auto___36057 = G__36059;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___36054))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___36054){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___36054);
});})(g__34549__auto___36054))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__34549__auto___36054){
return (function (seq35569){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35569));
});})(g__34549__auto___36054))
;


var g__34549__auto___36071 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__34549__auto___36071){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__23135__auto__ = [];
var len__23128__auto___36087 = arguments.length;
var i__23129__auto___36089 = (0);
while(true){
if((i__23129__auto___36089 < len__23128__auto___36087)){
args__23135__auto__.push((arguments[i__23129__auto___36089]));

var G__36097 = (i__23129__auto___36089 + (1));
i__23129__auto___36089 = G__36097;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___36071))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___36071){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___36071);
});})(g__34549__auto___36071))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__34549__auto___36071){
return (function (seq35570){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35570));
});})(g__34549__auto___36071))
;


var g__34549__auto___36115 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__34549__auto___36115){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__23135__auto__ = [];
var len__23128__auto___36117 = arguments.length;
var i__23129__auto___36118 = (0);
while(true){
if((i__23129__auto___36118 < len__23128__auto___36117)){
args__23135__auto__.push((arguments[i__23129__auto___36118]));

var G__36122 = (i__23129__auto___36118 + (1));
i__23129__auto___36118 = G__36122;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});})(g__34549__auto___36115))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34549__auto___36115){
return (function (args){
return cljs.core.deref.call(null,g__34549__auto___36115);
});})(g__34549__auto___36115))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__34549__auto___36115){
return (function (seq35574){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35574));
});})(g__34549__auto___36115))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__23135__auto__ = [];
var len__23128__auto___36194 = arguments.length;
var i__23129__auto___36196 = (0);
while(true){
if((i__23129__auto___36196 < len__23128__auto___36194)){
args__23135__auto__.push((arguments[i__23129__auto___36196]));

var G__36197 = (i__23129__auto___36196 + (1));
i__23129__auto___36196 = G__36197;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__36129_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36129_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq36130){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36130));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__36206_SHARP_){
return (new Date(p1__36206_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map