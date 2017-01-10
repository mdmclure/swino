// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args26346 = [];
var len__23128__auto___26360 = arguments.length;
var i__23129__auto___26361 = (0);
while(true){
if((i__23129__auto___26361 < len__23128__auto___26360)){
args26346.push((arguments[i__23129__auto___26361]));

var G__26363 = (i__23129__auto___26361 + (1));
i__23129__auto___26361 = G__26363;
continue;
} else {
}
break;
}

var G__26348 = args26346.length;
switch (G__26348) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26346.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26352 = (function (f,blockable,meta26353){
this.f = f;
this.blockable = blockable;
this.meta26353 = meta26353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26354,meta26353__$1){
var self__ = this;
var _26354__$1 = this;
return (new cljs.core.async.t_cljs$core$async26352(self__.f,self__.blockable,meta26353__$1));
});

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26354){
var self__ = this;
var _26354__$1 = this;
return self__.meta26353;
});

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26353","meta26353",-1541611345,null)], null);
});

cljs.core.async.t_cljs$core$async26352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26352";

cljs.core.async.t_cljs$core$async26352.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cljs.core.async/t_cljs$core$async26352");
});

cljs.core.async.__GT_t_cljs$core$async26352 = (function cljs$core$async$__GT_t_cljs$core$async26352(f__$1,blockable__$1,meta26353){
return (new cljs.core.async.t_cljs$core$async26352(f__$1,blockable__$1,meta26353));
});

}

return (new cljs.core.async.t_cljs$core$async26352(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26486 = [];
var len__23128__auto___26494 = arguments.length;
var i__23129__auto___26495 = (0);
while(true){
if((i__23129__auto___26495 < len__23128__auto___26494)){
args26486.push((arguments[i__23129__auto___26495]));

var G__26496 = (i__23129__auto___26495 + (1));
i__23129__auto___26495 = G__26496;
continue;
} else {
}
break;
}

var G__26493 = args26486.length;
switch (G__26493) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26486.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args26508 = [];
var len__23128__auto___26516 = arguments.length;
var i__23129__auto___26517 = (0);
while(true){
if((i__23129__auto___26517 < len__23128__auto___26516)){
args26508.push((arguments[i__23129__auto___26517]));

var G__26522 = (i__23129__auto___26517 + (1));
i__23129__auto___26517 = G__26522;
continue;
} else {
}
break;
}

var G__26510 = args26508.length;
switch (G__26510) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26508.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26531 = [];
var len__23128__auto___26540 = arguments.length;
var i__23129__auto___26541 = (0);
while(true){
if((i__23129__auto___26541 < len__23128__auto___26540)){
args26531.push((arguments[i__23129__auto___26541]));

var G__26543 = (i__23129__auto___26541 + (1));
i__23129__auto___26541 = G__26543;
continue;
} else {
}
break;
}

var G__26535 = args26531.length;
switch (G__26535) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26531.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26551 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26551);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26551,ret){
return (function (){
return fn1.call(null,val_26551);
});})(val_26551,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26573 = [];
var len__23128__auto___26576 = arguments.length;
var i__23129__auto___26577 = (0);
while(true){
if((i__23129__auto___26577 < len__23128__auto___26576)){
args26573.push((arguments[i__23129__auto___26577]));

var G__26578 = (i__23129__auto___26577 + (1));
i__23129__auto___26577 = G__26578;
continue;
} else {
}
break;
}

var G__26575 = args26573.length;
switch (G__26575) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26573.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22938__auto___26601 = n;
var x_26602 = (0);
while(true){
if((x_26602 < n__22938__auto___26601)){
(a[x_26602] = (0));

var G__26603 = (x_26602 + (1));
x_26602 = G__26603;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26606 = (i + (1));
i = G__26606;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26612 = (function (flag,meta26613){
this.flag = flag;
this.meta26613 = meta26613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26614,meta26613__$1){
var self__ = this;
var _26614__$1 = this;
return (new cljs.core.async.t_cljs$core$async26612(self__.flag,meta26613__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26614){
var self__ = this;
var _26614__$1 = this;
return self__.meta26613;
});})(flag))
;

cljs.core.async.t_cljs$core$async26612.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26612.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26612.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26613","meta26613",-906723559,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26612";

cljs.core.async.t_cljs$core$async26612.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cljs.core.async/t_cljs$core$async26612");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26612 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26612(flag__$1,meta26613){
return (new cljs.core.async.t_cljs$core$async26612(flag__$1,meta26613));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26612(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26651 = (function (flag,cb,meta26652){
this.flag = flag;
this.cb = cb;
this.meta26652 = meta26652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26653,meta26652__$1){
var self__ = this;
var _26653__$1 = this;
return (new cljs.core.async.t_cljs$core$async26651(self__.flag,self__.cb,meta26652__$1));
});

cljs.core.async.t_cljs$core$async26651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26653){
var self__ = this;
var _26653__$1 = this;
return self__.meta26652;
});

cljs.core.async.t_cljs$core$async26651.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26651.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26652","meta26652",623543758,null)], null);
});

cljs.core.async.t_cljs$core$async26651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26651";

cljs.core.async.t_cljs$core$async26651.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cljs.core.async/t_cljs$core$async26651");
});

cljs.core.async.__GT_t_cljs$core$async26651 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26651(flag__$1,cb__$1,meta26652){
return (new cljs.core.async.t_cljs$core$async26651(flag__$1,cb__$1,meta26652));
});

}

return (new cljs.core.async.t_cljs$core$async26651(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26709_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26709_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26710_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22020__auto__ = wport;
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26813 = (i + (1));
i = G__26813;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22020__auto__ = ret;
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__22008__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22008__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22008__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__23135__auto__ = [];
var len__23128__auto___26973 = arguments.length;
var i__23129__auto___26974 = (0);
while(true){
if((i__23129__auto___26974 < len__23128__auto___26973)){
args__23135__auto__.push((arguments[i__23129__auto___26974]));

var G__26976 = (i__23129__auto___26974 + (1));
i__23129__auto___26974 = G__26976;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((1) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23136__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26968){
var map__26969 = p__26968;
var map__26969__$1 = ((((!((map__26969 == null)))?((((map__26969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26969):map__26969);
var opts = map__26969__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26902){
var G__26903 = cljs.core.first.call(null,seq26902);
var seq26902__$1 = cljs.core.next.call(null,seq26902);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26903,seq26902__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26994 = [];
var len__23128__auto___27189 = arguments.length;
var i__23129__auto___27190 = (0);
while(true){
if((i__23129__auto___27190 < len__23128__auto___27189)){
args26994.push((arguments[i__23129__auto___27190]));

var G__27193 = (i__23129__auto___27190 + (1));
i__23129__auto___27190 = G__27193;
continue;
} else {
}
break;
}

var G__26996 = args26994.length;
switch (G__26996) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26994.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26288__auto___27199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___27199){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___27199){
return (function (state_27132){
var state_val_27133 = (state_27132[(1)]);
if((state_val_27133 === (7))){
var inst_27126 = (state_27132[(2)]);
var state_27132__$1 = state_27132;
var statearr_27150_27204 = state_27132__$1;
(statearr_27150_27204[(2)] = inst_27126);

(statearr_27150_27204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (1))){
var state_27132__$1 = state_27132;
var statearr_27151_27208 = state_27132__$1;
(statearr_27151_27208[(2)] = null);

(statearr_27151_27208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (4))){
var inst_27071 = (state_27132[(7)]);
var inst_27071__$1 = (state_27132[(2)]);
var inst_27091 = (inst_27071__$1 == null);
var state_27132__$1 = (function (){var statearr_27153 = state_27132;
(statearr_27153[(7)] = inst_27071__$1);

return statearr_27153;
})();
if(cljs.core.truth_(inst_27091)){
var statearr_27156_27209 = state_27132__$1;
(statearr_27156_27209[(1)] = (5));

} else {
var statearr_27157_27210 = state_27132__$1;
(statearr_27157_27210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (13))){
var state_27132__$1 = state_27132;
var statearr_27161_27211 = state_27132__$1;
(statearr_27161_27211[(2)] = null);

(statearr_27161_27211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (6))){
var inst_27071 = (state_27132[(7)]);
var state_27132__$1 = state_27132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27132__$1,(11),to,inst_27071);
} else {
if((state_val_27133 === (3))){
var inst_27130 = (state_27132[(2)]);
var state_27132__$1 = state_27132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27132__$1,inst_27130);
} else {
if((state_val_27133 === (12))){
var state_27132__$1 = state_27132;
var statearr_27170_27227 = state_27132__$1;
(statearr_27170_27227[(2)] = null);

(statearr_27170_27227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (2))){
var state_27132__$1 = state_27132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27132__$1,(4),from);
} else {
if((state_val_27133 === (11))){
var inst_27118 = (state_27132[(2)]);
var state_27132__$1 = state_27132;
if(cljs.core.truth_(inst_27118)){
var statearr_27171_27235 = state_27132__$1;
(statearr_27171_27235[(1)] = (12));

} else {
var statearr_27172_27237 = state_27132__$1;
(statearr_27172_27237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (9))){
var state_27132__$1 = state_27132;
var statearr_27173_27238 = state_27132__$1;
(statearr_27173_27238[(2)] = null);

(statearr_27173_27238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (5))){
var state_27132__$1 = state_27132;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27174_27243 = state_27132__$1;
(statearr_27174_27243[(1)] = (8));

} else {
var statearr_27175_27245 = state_27132__$1;
(statearr_27175_27245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (14))){
var inst_27124 = (state_27132[(2)]);
var state_27132__$1 = state_27132;
var statearr_27176_27247 = state_27132__$1;
(statearr_27176_27247[(2)] = inst_27124);

(statearr_27176_27247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (10))){
var inst_27115 = (state_27132[(2)]);
var state_27132__$1 = state_27132;
var statearr_27177_27249 = state_27132__$1;
(statearr_27177_27249[(2)] = inst_27115);

(statearr_27177_27249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (8))){
var inst_27112 = cljs.core.async.close_BANG_.call(null,to);
var state_27132__$1 = state_27132;
var statearr_27178_27252 = state_27132__$1;
(statearr_27178_27252[(2)] = inst_27112);

(statearr_27178_27252[(1)] = (10));


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
});})(c__26288__auto___27199))
;
return ((function (switch__25578__auto__,c__26288__auto___27199){
return (function() {
var cljs$core$async$state_machine__25579__auto__ = null;
var cljs$core$async$state_machine__25579__auto____0 = (function (){
var statearr_27185 = [null,null,null,null,null,null,null,null];
(statearr_27185[(0)] = cljs$core$async$state_machine__25579__auto__);

(statearr_27185[(1)] = (1));

return statearr_27185;
});
var cljs$core$async$state_machine__25579__auto____1 = (function (state_27132){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_27132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e27186){if((e27186 instanceof Object)){
var ex__25582__auto__ = e27186;
var statearr_27187_27297 = state_27132;
(statearr_27187_27297[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27298 = state_27132;
state_27132 = G__27298;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$state_machine__25579__auto__ = function(state_27132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25579__auto____1.call(this,state_27132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25579__auto____0;
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25579__auto____1;
return cljs$core$async$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___27199))
})();
var state__26290__auto__ = (function (){var statearr_27188 = f__26289__auto__.call(null);
(statearr_27188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___27199);

return statearr_27188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___27199))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27563){
var vec__27564 = p__27563;
var v = cljs.core.nth.call(null,vec__27564,(0),null);
var p = cljs.core.nth.call(null,vec__27564,(1),null);
var job = vec__27564;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26288__auto___27844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___27844,res,vec__27564,v,p,job,jobs,results){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___27844,res,vec__27564,v,p,job,jobs,results){
return (function (state_27574){
var state_val_27575 = (state_27574[(1)]);
if((state_val_27575 === (1))){
var state_27574__$1 = state_27574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27574__$1,(2),res,v);
} else {
if((state_val_27575 === (2))){
var inst_27570 = (state_27574[(2)]);
var inst_27571 = cljs.core.async.close_BANG_.call(null,res);
var state_27574__$1 = (function (){var statearr_27576 = state_27574;
(statearr_27576[(7)] = inst_27570);

return statearr_27576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27574__$1,inst_27571);
} else {
return null;
}
}
});})(c__26288__auto___27844,res,vec__27564,v,p,job,jobs,results))
;
return ((function (switch__25578__auto__,c__26288__auto___27844,res,vec__27564,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0 = (function (){
var statearr_27585 = [null,null,null,null,null,null,null,null];
(statearr_27585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__);

(statearr_27585[(1)] = (1));

return statearr_27585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1 = (function (state_27574){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_27574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e27586){if((e27586 instanceof Object)){
var ex__25582__auto__ = e27586;
var statearr_27587_27996 = state_27574;
(statearr_27587_27996[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28002 = state_27574;
state_27574 = G__28002;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__ = function(state_27574){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1.call(this,state_27574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___27844,res,vec__27564,v,p,job,jobs,results))
})();
var state__26290__auto__ = (function (){var statearr_27588 = f__26289__auto__.call(null);
(statearr_27588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___27844);

return statearr_27588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___27844,res,vec__27564,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27589){
var vec__27590 = p__27589;
var v = cljs.core.nth.call(null,vec__27590,(0),null);
var p = cljs.core.nth.call(null,vec__27590,(1),null);
var job = vec__27590;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22938__auto___28013 = n;
var __28014 = (0);
while(true){
if((__28014 < n__22938__auto___28013)){
var G__27596_28018 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27596_28018) {
case "compute":
var c__26288__auto___28020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28014,c__26288__auto___28020,G__27596_28018,n__22938__auto___28013,jobs,results,process,async){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (__28014,c__26288__auto___28020,G__27596_28018,n__22938__auto___28013,jobs,results,process,async){
return (function (state_27610){
var state_val_27611 = (state_27610[(1)]);
if((state_val_27611 === (1))){
var state_27610__$1 = state_27610;
var statearr_27614_28027 = state_27610__$1;
(statearr_27614_28027[(2)] = null);

(statearr_27614_28027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (2))){
var state_27610__$1 = state_27610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27610__$1,(4),jobs);
} else {
if((state_val_27611 === (3))){
var inst_27608 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27610__$1,inst_27608);
} else {
if((state_val_27611 === (4))){
var inst_27599 = (state_27610[(2)]);
var inst_27600 = process.call(null,inst_27599);
var state_27610__$1 = state_27610;
if(cljs.core.truth_(inst_27600)){
var statearr_27617_28034 = state_27610__$1;
(statearr_27617_28034[(1)] = (5));

} else {
var statearr_27618_28035 = state_27610__$1;
(statearr_27618_28035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (5))){
var state_27610__$1 = state_27610;
var statearr_27620_28036 = state_27610__$1;
(statearr_27620_28036[(2)] = null);

(statearr_27620_28036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (6))){
var state_27610__$1 = state_27610;
var statearr_27623_28040 = state_27610__$1;
(statearr_27623_28040[(2)] = null);

(statearr_27623_28040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (7))){
var inst_27605 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27625_28048 = state_27610__$1;
(statearr_27625_28048[(2)] = inst_27605);

(statearr_27625_28048[(1)] = (3));


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
});})(__28014,c__26288__auto___28020,G__27596_28018,n__22938__auto___28013,jobs,results,process,async))
;
return ((function (__28014,switch__25578__auto__,c__26288__auto___28020,G__27596_28018,n__22938__auto___28013,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0 = (function (){
var statearr_27629 = [null,null,null,null,null,null,null];
(statearr_27629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__);

(statearr_27629[(1)] = (1));

return statearr_27629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1 = (function (state_27610){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_27610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e27633){if((e27633 instanceof Object)){
var ex__25582__auto__ = e27633;
var statearr_27635_28063 = state_27610;
(statearr_27635_28063[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28068 = state_27610;
state_27610 = G__28068;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__ = function(state_27610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1.call(this,state_27610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__;
})()
;})(__28014,switch__25578__auto__,c__26288__auto___28020,G__27596_28018,n__22938__auto___28013,jobs,results,process,async))
})();
var state__26290__auto__ = (function (){var statearr_27637 = f__26289__auto__.call(null);
(statearr_27637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___28020);

return statearr_27637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(__28014,c__26288__auto___28020,G__27596_28018,n__22938__auto___28013,jobs,results,process,async))
);


break;
case "async":
var c__26288__auto___28074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28014,c__26288__auto___28074,G__27596_28018,n__22938__auto___28013,jobs,results,process,async){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (__28014,c__26288__auto___28074,G__27596_28018,n__22938__auto___28013,jobs,results,process,async){
return (function (state_27652){
var state_val_27653 = (state_27652[(1)]);
if((state_val_27653 === (1))){
var state_27652__$1 = state_27652;
var statearr_27656_28084 = state_27652__$1;
(statearr_27656_28084[(2)] = null);

(statearr_27656_28084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (2))){
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27652__$1,(4),jobs);
} else {
if((state_val_27653 === (3))){
var inst_27650 = (state_27652[(2)]);
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27652__$1,inst_27650);
} else {
if((state_val_27653 === (4))){
var inst_27641 = (state_27652[(2)]);
var inst_27642 = async.call(null,inst_27641);
var state_27652__$1 = state_27652;
if(cljs.core.truth_(inst_27642)){
var statearr_27658_28097 = state_27652__$1;
(statearr_27658_28097[(1)] = (5));

} else {
var statearr_27660_28099 = state_27652__$1;
(statearr_27660_28099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (5))){
var state_27652__$1 = state_27652;
var statearr_27663_28101 = state_27652__$1;
(statearr_27663_28101[(2)] = null);

(statearr_27663_28101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (6))){
var state_27652__$1 = state_27652;
var statearr_27664_28110 = state_27652__$1;
(statearr_27664_28110[(2)] = null);

(statearr_27664_28110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (7))){
var inst_27648 = (state_27652[(2)]);
var state_27652__$1 = state_27652;
var statearr_27666_28136 = state_27652__$1;
(statearr_27666_28136[(2)] = inst_27648);

(statearr_27666_28136[(1)] = (3));


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
});})(__28014,c__26288__auto___28074,G__27596_28018,n__22938__auto___28013,jobs,results,process,async))
;
return ((function (__28014,switch__25578__auto__,c__26288__auto___28074,G__27596_28018,n__22938__auto___28013,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0 = (function (){
var statearr_27670 = [null,null,null,null,null,null,null];
(statearr_27670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__);

(statearr_27670[(1)] = (1));

return statearr_27670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1 = (function (state_27652){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_27652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e27671){if((e27671 instanceof Object)){
var ex__25582__auto__ = e27671;
var statearr_27672_28143 = state_27652;
(statearr_27672_28143[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28147 = state_27652;
state_27652 = G__28147;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__ = function(state_27652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1.call(this,state_27652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__;
})()
;})(__28014,switch__25578__auto__,c__26288__auto___28074,G__27596_28018,n__22938__auto___28013,jobs,results,process,async))
})();
var state__26290__auto__ = (function (){var statearr_27673 = f__26289__auto__.call(null);
(statearr_27673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___28074);

return statearr_27673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(__28014,c__26288__auto___28074,G__27596_28018,n__22938__auto___28013,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28157 = (__28014 + (1));
__28014 = G__28157;
continue;
} else {
}
break;
}

var c__26288__auto___28158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___28158,jobs,results,process,async){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___28158,jobs,results,process,async){
return (function (state_27700){
var state_val_27701 = (state_27700[(1)]);
if((state_val_27701 === (1))){
var state_27700__$1 = state_27700;
var statearr_27702_28179 = state_27700__$1;
(statearr_27702_28179[(2)] = null);

(statearr_27702_28179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (2))){
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27700__$1,(4),from);
} else {
if((state_val_27701 === (3))){
var inst_27698 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27700__$1,inst_27698);
} else {
if((state_val_27701 === (4))){
var inst_27679 = (state_27700[(7)]);
var inst_27679__$1 = (state_27700[(2)]);
var inst_27680 = (inst_27679__$1 == null);
var state_27700__$1 = (function (){var statearr_27705 = state_27700;
(statearr_27705[(7)] = inst_27679__$1);

return statearr_27705;
})();
if(cljs.core.truth_(inst_27680)){
var statearr_27706_28192 = state_27700__$1;
(statearr_27706_28192[(1)] = (5));

} else {
var statearr_27707_28194 = state_27700__$1;
(statearr_27707_28194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (5))){
var inst_27683 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27700__$1 = state_27700;
var statearr_27712_28198 = state_27700__$1;
(statearr_27712_28198[(2)] = inst_27683);

(statearr_27712_28198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (6))){
var inst_27679 = (state_27700[(7)]);
var inst_27685 = (state_27700[(8)]);
var inst_27685__$1 = cljs.core.async.chan.call(null,(1));
var inst_27687 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27688 = [inst_27679,inst_27685__$1];
var inst_27689 = (new cljs.core.PersistentVector(null,2,(5),inst_27687,inst_27688,null));
var state_27700__$1 = (function (){var statearr_27713 = state_27700;
(statearr_27713[(8)] = inst_27685__$1);

return statearr_27713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27700__$1,(8),jobs,inst_27689);
} else {
if((state_val_27701 === (7))){
var inst_27696 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27714_28204 = state_27700__$1;
(statearr_27714_28204[(2)] = inst_27696);

(statearr_27714_28204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (8))){
var inst_27685 = (state_27700[(8)]);
var inst_27691 = (state_27700[(2)]);
var state_27700__$1 = (function (){var statearr_27715 = state_27700;
(statearr_27715[(9)] = inst_27691);

return statearr_27715;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27700__$1,(9),results,inst_27685);
} else {
if((state_val_27701 === (9))){
var inst_27693 = (state_27700[(2)]);
var state_27700__$1 = (function (){var statearr_27716 = state_27700;
(statearr_27716[(10)] = inst_27693);

return statearr_27716;
})();
var statearr_27717_28213 = state_27700__$1;
(statearr_27717_28213[(2)] = null);

(statearr_27717_28213[(1)] = (2));


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
});})(c__26288__auto___28158,jobs,results,process,async))
;
return ((function (switch__25578__auto__,c__26288__auto___28158,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0 = (function (){
var statearr_27723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__);

(statearr_27723[(1)] = (1));

return statearr_27723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1 = (function (state_27700){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_27700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e27724){if((e27724 instanceof Object)){
var ex__25582__auto__ = e27724;
var statearr_27725_28219 = state_27700;
(statearr_27725_28219[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28225 = state_27700;
state_27700 = G__28225;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__ = function(state_27700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1.call(this,state_27700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___28158,jobs,results,process,async))
})();
var state__26290__auto__ = (function (){var statearr_27728 = f__26289__auto__.call(null);
(statearr_27728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___28158);

return statearr_27728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___28158,jobs,results,process,async))
);


var c__26288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto__,jobs,results,process,async){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto__,jobs,results,process,async){
return (function (state_27767){
var state_val_27768 = (state_27767[(1)]);
if((state_val_27768 === (7))){
var inst_27763 = (state_27767[(2)]);
var state_27767__$1 = state_27767;
var statearr_27769_28277 = state_27767__$1;
(statearr_27769_28277[(2)] = inst_27763);

(statearr_27769_28277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (20))){
var state_27767__$1 = state_27767;
var statearr_27771_28296 = state_27767__$1;
(statearr_27771_28296[(2)] = null);

(statearr_27771_28296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (1))){
var state_27767__$1 = state_27767;
var statearr_27772_28297 = state_27767__$1;
(statearr_27772_28297[(2)] = null);

(statearr_27772_28297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (4))){
var inst_27732 = (state_27767[(7)]);
var inst_27732__$1 = (state_27767[(2)]);
var inst_27733 = (inst_27732__$1 == null);
var state_27767__$1 = (function (){var statearr_27774 = state_27767;
(statearr_27774[(7)] = inst_27732__$1);

return statearr_27774;
})();
if(cljs.core.truth_(inst_27733)){
var statearr_27778_28303 = state_27767__$1;
(statearr_27778_28303[(1)] = (5));

} else {
var statearr_27779_28304 = state_27767__$1;
(statearr_27779_28304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (15))){
var inst_27745 = (state_27767[(8)]);
var state_27767__$1 = state_27767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27767__$1,(18),to,inst_27745);
} else {
if((state_val_27768 === (21))){
var inst_27758 = (state_27767[(2)]);
var state_27767__$1 = state_27767;
var statearr_27780_28312 = state_27767__$1;
(statearr_27780_28312[(2)] = inst_27758);

(statearr_27780_28312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (13))){
var inst_27760 = (state_27767[(2)]);
var state_27767__$1 = (function (){var statearr_27782 = state_27767;
(statearr_27782[(9)] = inst_27760);

return statearr_27782;
})();
var statearr_27784_28317 = state_27767__$1;
(statearr_27784_28317[(2)] = null);

(statearr_27784_28317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (6))){
var inst_27732 = (state_27767[(7)]);
var state_27767__$1 = state_27767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27767__$1,(11),inst_27732);
} else {
if((state_val_27768 === (17))){
var inst_27753 = (state_27767[(2)]);
var state_27767__$1 = state_27767;
if(cljs.core.truth_(inst_27753)){
var statearr_27788_28320 = state_27767__$1;
(statearr_27788_28320[(1)] = (19));

} else {
var statearr_27789_28322 = state_27767__$1;
(statearr_27789_28322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (3))){
var inst_27765 = (state_27767[(2)]);
var state_27767__$1 = state_27767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27767__$1,inst_27765);
} else {
if((state_val_27768 === (12))){
var inst_27742 = (state_27767[(10)]);
var state_27767__$1 = state_27767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27767__$1,(14),inst_27742);
} else {
if((state_val_27768 === (2))){
var state_27767__$1 = state_27767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27767__$1,(4),results);
} else {
if((state_val_27768 === (19))){
var state_27767__$1 = state_27767;
var statearr_27795_28326 = state_27767__$1;
(statearr_27795_28326[(2)] = null);

(statearr_27795_28326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (11))){
var inst_27742 = (state_27767[(2)]);
var state_27767__$1 = (function (){var statearr_27798 = state_27767;
(statearr_27798[(10)] = inst_27742);

return statearr_27798;
})();
var statearr_27799_28329 = state_27767__$1;
(statearr_27799_28329[(2)] = null);

(statearr_27799_28329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (9))){
var state_27767__$1 = state_27767;
var statearr_27801_28330 = state_27767__$1;
(statearr_27801_28330[(2)] = null);

(statearr_27801_28330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (5))){
var state_27767__$1 = state_27767;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27802_28335 = state_27767__$1;
(statearr_27802_28335[(1)] = (8));

} else {
var statearr_27804_28336 = state_27767__$1;
(statearr_27804_28336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (14))){
var inst_27745 = (state_27767[(8)]);
var inst_27747 = (state_27767[(11)]);
var inst_27745__$1 = (state_27767[(2)]);
var inst_27746 = (inst_27745__$1 == null);
var inst_27747__$1 = cljs.core.not.call(null,inst_27746);
var state_27767__$1 = (function (){var statearr_27805 = state_27767;
(statearr_27805[(8)] = inst_27745__$1);

(statearr_27805[(11)] = inst_27747__$1);

return statearr_27805;
})();
if(inst_27747__$1){
var statearr_27806_28346 = state_27767__$1;
(statearr_27806_28346[(1)] = (15));

} else {
var statearr_27807_28347 = state_27767__$1;
(statearr_27807_28347[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (16))){
var inst_27747 = (state_27767[(11)]);
var state_27767__$1 = state_27767;
var statearr_27808_28348 = state_27767__$1;
(statearr_27808_28348[(2)] = inst_27747);

(statearr_27808_28348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (10))){
var inst_27739 = (state_27767[(2)]);
var state_27767__$1 = state_27767;
var statearr_27809_28354 = state_27767__$1;
(statearr_27809_28354[(2)] = inst_27739);

(statearr_27809_28354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (18))){
var inst_27750 = (state_27767[(2)]);
var state_27767__$1 = state_27767;
var statearr_27811_28358 = state_27767__$1;
(statearr_27811_28358[(2)] = inst_27750);

(statearr_27811_28358[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (8))){
var inst_27736 = cljs.core.async.close_BANG_.call(null,to);
var state_27767__$1 = state_27767;
var statearr_27814_28368 = state_27767__$1;
(statearr_27814_28368[(2)] = inst_27736);

(statearr_27814_28368[(1)] = (10));


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
}
}
}
}
});})(c__26288__auto__,jobs,results,process,async))
;
return ((function (switch__25578__auto__,c__26288__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0 = (function (){
var statearr_27825 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__);

(statearr_27825[(1)] = (1));

return statearr_27825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1 = (function (state_27767){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_27767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e27826){if((e27826 instanceof Object)){
var ex__25582__auto__ = e27826;
var statearr_27827_28378 = state_27767;
(statearr_27827_28378[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28383 = state_27767;
state_27767 = G__28383;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__ = function(state_27767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1.call(this,state_27767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto__,jobs,results,process,async))
})();
var state__26290__auto__ = (function (){var statearr_27830 = f__26289__auto__.call(null);
(statearr_27830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto__);

return statearr_27830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto__,jobs,results,process,async))
);

return c__26288__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28390 = [];
var len__23128__auto___28420 = arguments.length;
var i__23129__auto___28425 = (0);
while(true){
if((i__23129__auto___28425 < len__23128__auto___28420)){
args28390.push((arguments[i__23129__auto___28425]));

var G__28426 = (i__23129__auto___28425 + (1));
i__23129__auto___28425 = G__28426;
continue;
} else {
}
break;
}

var G__28402 = args28390.length;
switch (G__28402) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28390.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28439 = [];
var len__23128__auto___28452 = arguments.length;
var i__23129__auto___28454 = (0);
while(true){
if((i__23129__auto___28454 < len__23128__auto___28452)){
args28439.push((arguments[i__23129__auto___28454]));

var G__28456 = (i__23129__auto___28454 + (1));
i__23129__auto___28454 = G__28456;
continue;
} else {
}
break;
}

var G__28447 = args28439.length;
switch (G__28447) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28439.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28472 = [];
var len__23128__auto___28556 = arguments.length;
var i__23129__auto___28561 = (0);
while(true){
if((i__23129__auto___28561 < len__23128__auto___28556)){
args28472.push((arguments[i__23129__auto___28561]));

var G__28562 = (i__23129__auto___28561 + (1));
i__23129__auto___28561 = G__28562;
continue;
} else {
}
break;
}

var G__28480 = args28472.length;
switch (G__28480) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28472.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26288__auto___28570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___28570,tc,fc){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___28570,tc,fc){
return (function (state_28511){
var state_val_28512 = (state_28511[(1)]);
if((state_val_28512 === (7))){
var inst_28506 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
var statearr_28513_28573 = state_28511__$1;
(statearr_28513_28573[(2)] = inst_28506);

(statearr_28513_28573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (1))){
var state_28511__$1 = state_28511;
var statearr_28516_28577 = state_28511__$1;
(statearr_28516_28577[(2)] = null);

(statearr_28516_28577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (4))){
var inst_28487 = (state_28511[(7)]);
var inst_28487__$1 = (state_28511[(2)]);
var inst_28488 = (inst_28487__$1 == null);
var state_28511__$1 = (function (){var statearr_28518 = state_28511;
(statearr_28518[(7)] = inst_28487__$1);

return statearr_28518;
})();
if(cljs.core.truth_(inst_28488)){
var statearr_28519_28582 = state_28511__$1;
(statearr_28519_28582[(1)] = (5));

} else {
var statearr_28520_28583 = state_28511__$1;
(statearr_28520_28583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (13))){
var state_28511__$1 = state_28511;
var statearr_28521_28584 = state_28511__$1;
(statearr_28521_28584[(2)] = null);

(statearr_28521_28584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (6))){
var inst_28487 = (state_28511[(7)]);
var inst_28493 = p.call(null,inst_28487);
var state_28511__$1 = state_28511;
if(cljs.core.truth_(inst_28493)){
var statearr_28522_28588 = state_28511__$1;
(statearr_28522_28588[(1)] = (9));

} else {
var statearr_28523_28591 = state_28511__$1;
(statearr_28523_28591[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (3))){
var inst_28508 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28511__$1,inst_28508);
} else {
if((state_val_28512 === (12))){
var state_28511__$1 = state_28511;
var statearr_28527_28593 = state_28511__$1;
(statearr_28527_28593[(2)] = null);

(statearr_28527_28593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (2))){
var state_28511__$1 = state_28511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28511__$1,(4),ch);
} else {
if((state_val_28512 === (11))){
var inst_28487 = (state_28511[(7)]);
var inst_28497 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28511__$1,(8),inst_28497,inst_28487);
} else {
if((state_val_28512 === (9))){
var state_28511__$1 = state_28511;
var statearr_28530_28607 = state_28511__$1;
(statearr_28530_28607[(2)] = tc);

(statearr_28530_28607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (5))){
var inst_28490 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28491 = cljs.core.async.close_BANG_.call(null,fc);
var state_28511__$1 = (function (){var statearr_28531 = state_28511;
(statearr_28531[(8)] = inst_28490);

return statearr_28531;
})();
var statearr_28532_28621 = state_28511__$1;
(statearr_28532_28621[(2)] = inst_28491);

(statearr_28532_28621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (14))){
var inst_28504 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
var statearr_28533_28626 = state_28511__$1;
(statearr_28533_28626[(2)] = inst_28504);

(statearr_28533_28626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (10))){
var state_28511__$1 = state_28511;
var statearr_28534_28627 = state_28511__$1;
(statearr_28534_28627[(2)] = fc);

(statearr_28534_28627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (8))){
var inst_28499 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
if(cljs.core.truth_(inst_28499)){
var statearr_28535_28630 = state_28511__$1;
(statearr_28535_28630[(1)] = (12));

} else {
var statearr_28536_28632 = state_28511__$1;
(statearr_28536_28632[(1)] = (13));

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
});})(c__26288__auto___28570,tc,fc))
;
return ((function (switch__25578__auto__,c__26288__auto___28570,tc,fc){
return (function() {
var cljs$core$async$state_machine__25579__auto__ = null;
var cljs$core$async$state_machine__25579__auto____0 = (function (){
var statearr_28546 = [null,null,null,null,null,null,null,null,null];
(statearr_28546[(0)] = cljs$core$async$state_machine__25579__auto__);

(statearr_28546[(1)] = (1));

return statearr_28546;
});
var cljs$core$async$state_machine__25579__auto____1 = (function (state_28511){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_28511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e28548){if((e28548 instanceof Object)){
var ex__25582__auto__ = e28548;
var statearr_28550_28641 = state_28511;
(statearr_28550_28641[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28642 = state_28511;
state_28511 = G__28642;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$state_machine__25579__auto__ = function(state_28511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25579__auto____1.call(this,state_28511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25579__auto____0;
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25579__auto____1;
return cljs$core$async$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___28570,tc,fc))
})();
var state__26290__auto__ = (function (){var statearr_28552 = f__26289__auto__.call(null);
(statearr_28552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___28570);

return statearr_28552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___28570,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto__){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto__){
return (function (state_28756){
var state_val_28757 = (state_28756[(1)]);
if((state_val_28757 === (7))){
var inst_28752 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
var statearr_28758_28791 = state_28756__$1;
(statearr_28758_28791[(2)] = inst_28752);

(statearr_28758_28791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (1))){
var inst_28735 = init;
var state_28756__$1 = (function (){var statearr_28759 = state_28756;
(statearr_28759[(7)] = inst_28735);

return statearr_28759;
})();
var statearr_28760_28800 = state_28756__$1;
(statearr_28760_28800[(2)] = null);

(statearr_28760_28800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (4))){
var inst_28738 = (state_28756[(8)]);
var inst_28738__$1 = (state_28756[(2)]);
var inst_28740 = (inst_28738__$1 == null);
var state_28756__$1 = (function (){var statearr_28761 = state_28756;
(statearr_28761[(8)] = inst_28738__$1);

return statearr_28761;
})();
if(cljs.core.truth_(inst_28740)){
var statearr_28762_28809 = state_28756__$1;
(statearr_28762_28809[(1)] = (5));

} else {
var statearr_28763_28812 = state_28756__$1;
(statearr_28763_28812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (6))){
var inst_28738 = (state_28756[(8)]);
var inst_28735 = (state_28756[(7)]);
var inst_28743 = (state_28756[(9)]);
var inst_28743__$1 = f.call(null,inst_28735,inst_28738);
var inst_28744 = cljs.core.reduced_QMARK_.call(null,inst_28743__$1);
var state_28756__$1 = (function (){var statearr_28766 = state_28756;
(statearr_28766[(9)] = inst_28743__$1);

return statearr_28766;
})();
if(inst_28744){
var statearr_28767_28829 = state_28756__$1;
(statearr_28767_28829[(1)] = (8));

} else {
var statearr_28768_28831 = state_28756__$1;
(statearr_28768_28831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (3))){
var inst_28754 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28756__$1,inst_28754);
} else {
if((state_val_28757 === (2))){
var state_28756__$1 = state_28756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28756__$1,(4),ch);
} else {
if((state_val_28757 === (9))){
var inst_28743 = (state_28756[(9)]);
var inst_28735 = inst_28743;
var state_28756__$1 = (function (){var statearr_28770 = state_28756;
(statearr_28770[(7)] = inst_28735);

return statearr_28770;
})();
var statearr_28771_28837 = state_28756__$1;
(statearr_28771_28837[(2)] = null);

(statearr_28771_28837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (5))){
var inst_28735 = (state_28756[(7)]);
var state_28756__$1 = state_28756;
var statearr_28772_28840 = state_28756__$1;
(statearr_28772_28840[(2)] = inst_28735);

(statearr_28772_28840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (10))){
var inst_28750 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
var statearr_28773_28850 = state_28756__$1;
(statearr_28773_28850[(2)] = inst_28750);

(statearr_28773_28850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (8))){
var inst_28743 = (state_28756[(9)]);
var inst_28746 = cljs.core.deref.call(null,inst_28743);
var state_28756__$1 = state_28756;
var statearr_28774_28856 = state_28756__$1;
(statearr_28774_28856[(2)] = inst_28746);

(statearr_28774_28856[(1)] = (10));


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
});})(c__26288__auto__))
;
return ((function (switch__25578__auto__,c__26288__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25579__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25579__auto____0 = (function (){
var statearr_28779 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28779[(0)] = cljs$core$async$reduce_$_state_machine__25579__auto__);

(statearr_28779[(1)] = (1));

return statearr_28779;
});
var cljs$core$async$reduce_$_state_machine__25579__auto____1 = (function (state_28756){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_28756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e28782){if((e28782 instanceof Object)){
var ex__25582__auto__ = e28782;
var statearr_28784_28860 = state_28756;
(statearr_28784_28860[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28861 = state_28756;
state_28756 = G__28861;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25579__auto__ = function(state_28756){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25579__auto____1.call(this,state_28756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25579__auto____0;
cljs$core$async$reduce_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25579__auto____1;
return cljs$core$async$reduce_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto__))
})();
var state__26290__auto__ = (function (){var statearr_28790 = f__26289__auto__.call(null);
(statearr_28790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto__);

return statearr_28790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto__))
);

return c__26288__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28865 = [];
var len__23128__auto___28928 = arguments.length;
var i__23129__auto___28929 = (0);
while(true){
if((i__23129__auto___28929 < len__23128__auto___28928)){
args28865.push((arguments[i__23129__auto___28929]));

var G__28931 = (i__23129__auto___28929 + (1));
i__23129__auto___28929 = G__28931;
continue;
} else {
}
break;
}

var G__28867 = args28865.length;
switch (G__28867) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28865.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto__){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto__){
return (function (state_28895){
var state_val_28896 = (state_28895[(1)]);
if((state_val_28896 === (7))){
var inst_28877 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28897_28933 = state_28895__$1;
(statearr_28897_28933[(2)] = inst_28877);

(statearr_28897_28933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (1))){
var inst_28871 = cljs.core.seq.call(null,coll);
var inst_28872 = inst_28871;
var state_28895__$1 = (function (){var statearr_28898 = state_28895;
(statearr_28898[(7)] = inst_28872);

return statearr_28898;
})();
var statearr_28900_28937 = state_28895__$1;
(statearr_28900_28937[(2)] = null);

(statearr_28900_28937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (4))){
var inst_28872 = (state_28895[(7)]);
var inst_28875 = cljs.core.first.call(null,inst_28872);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28895__$1,(7),ch,inst_28875);
} else {
if((state_val_28896 === (13))){
var inst_28889 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28903_28938 = state_28895__$1;
(statearr_28903_28938[(2)] = inst_28889);

(statearr_28903_28938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (6))){
var inst_28880 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28880)){
var statearr_28904_28939 = state_28895__$1;
(statearr_28904_28939[(1)] = (8));

} else {
var statearr_28905_28940 = state_28895__$1;
(statearr_28905_28940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (3))){
var inst_28893 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28895__$1,inst_28893);
} else {
if((state_val_28896 === (12))){
var state_28895__$1 = state_28895;
var statearr_28906_28941 = state_28895__$1;
(statearr_28906_28941[(2)] = null);

(statearr_28906_28941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (2))){
var inst_28872 = (state_28895[(7)]);
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28872)){
var statearr_28907_28944 = state_28895__$1;
(statearr_28907_28944[(1)] = (4));

} else {
var statearr_28908_28947 = state_28895__$1;
(statearr_28908_28947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (11))){
var inst_28886 = cljs.core.async.close_BANG_.call(null,ch);
var state_28895__$1 = state_28895;
var statearr_28909_28951 = state_28895__$1;
(statearr_28909_28951[(2)] = inst_28886);

(statearr_28909_28951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (9))){
var state_28895__$1 = state_28895;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28910_28955 = state_28895__$1;
(statearr_28910_28955[(1)] = (11));

} else {
var statearr_28911_28957 = state_28895__$1;
(statearr_28911_28957[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (5))){
var inst_28872 = (state_28895[(7)]);
var state_28895__$1 = state_28895;
var statearr_28912_28967 = state_28895__$1;
(statearr_28912_28967[(2)] = inst_28872);

(statearr_28912_28967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (10))){
var inst_28891 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28915_28970 = state_28895__$1;
(statearr_28915_28970[(2)] = inst_28891);

(statearr_28915_28970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (8))){
var inst_28872 = (state_28895[(7)]);
var inst_28882 = cljs.core.next.call(null,inst_28872);
var inst_28872__$1 = inst_28882;
var state_28895__$1 = (function (){var statearr_28916 = state_28895;
(statearr_28916[(7)] = inst_28872__$1);

return statearr_28916;
})();
var statearr_28918_28981 = state_28895__$1;
(statearr_28918_28981[(2)] = null);

(statearr_28918_28981[(1)] = (2));


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
});})(c__26288__auto__))
;
return ((function (switch__25578__auto__,c__26288__auto__){
return (function() {
var cljs$core$async$state_machine__25579__auto__ = null;
var cljs$core$async$state_machine__25579__auto____0 = (function (){
var statearr_28922 = [null,null,null,null,null,null,null,null];
(statearr_28922[(0)] = cljs$core$async$state_machine__25579__auto__);

(statearr_28922[(1)] = (1));

return statearr_28922;
});
var cljs$core$async$state_machine__25579__auto____1 = (function (state_28895){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_28895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e28923){if((e28923 instanceof Object)){
var ex__25582__auto__ = e28923;
var statearr_28924_28994 = state_28895;
(statearr_28924_28994[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28997 = state_28895;
state_28895 = G__28997;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$state_machine__25579__auto__ = function(state_28895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25579__auto____1.call(this,state_28895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25579__auto____0;
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25579__auto____1;
return cljs$core$async$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto__))
})();
var state__26290__auto__ = (function (){var statearr_28925 = f__26289__auto__.call(null);
(statearr_28925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto__);

return statearr_28925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto__))
);

return c__26288__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22683__auto__ = (((_ == null))?null:_);
var m__22684__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,_);
} else {
var m__22684__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22683__auto__ = (((m == null))?null:m);
var m__22684__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22684__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22683__auto__ = (((m == null))?null:m);
var m__22684__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,m,ch);
} else {
var m__22684__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22683__auto__ = (((m == null))?null:m);
var m__22684__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,m);
} else {
var m__22684__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29401 = (function (ch,cs,meta29402){
this.ch = ch;
this.cs = cs;
this.meta29402 = meta29402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29403,meta29402__$1){
var self__ = this;
var _29403__$1 = this;
return (new cljs.core.async.t_cljs$core$async29401(self__.ch,self__.cs,meta29402__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29403){
var self__ = this;
var _29403__$1 = this;
return self__.meta29402;
});})(cs))
;

cljs.core.async.t_cljs$core$async29401.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29401.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29401.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29401.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29401.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29401.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29402","meta29402",656685329,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29401.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29401";

cljs.core.async.t_cljs$core$async29401.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cljs.core.async/t_cljs$core$async29401");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29401 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29401(ch__$1,cs__$1,meta29402){
return (new cljs.core.async.t_cljs$core$async29401(ch__$1,cs__$1,meta29402));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29401(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26288__auto___29736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___29736,cs,m,dchan,dctr,done){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___29736,cs,m,dchan,dctr,done){
return (function (state_29575){
var state_val_29576 = (state_29575[(1)]);
if((state_val_29576 === (7))){
var inst_29571 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29579_29743 = state_29575__$1;
(statearr_29579_29743[(2)] = inst_29571);

(statearr_29579_29743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (20))){
var inst_29466 = (state_29575[(7)]);
var inst_29479 = cljs.core.first.call(null,inst_29466);
var inst_29480 = cljs.core.nth.call(null,inst_29479,(0),null);
var inst_29481 = cljs.core.nth.call(null,inst_29479,(1),null);
var state_29575__$1 = (function (){var statearr_29583 = state_29575;
(statearr_29583[(8)] = inst_29480);

return statearr_29583;
})();
if(cljs.core.truth_(inst_29481)){
var statearr_29585_29756 = state_29575__$1;
(statearr_29585_29756[(1)] = (22));

} else {
var statearr_29586_29759 = state_29575__$1;
(statearr_29586_29759[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (27))){
var inst_29432 = (state_29575[(9)]);
var inst_29519 = (state_29575[(10)]);
var inst_29512 = (state_29575[(11)]);
var inst_29514 = (state_29575[(12)]);
var inst_29519__$1 = cljs.core._nth.call(null,inst_29512,inst_29514);
var inst_29520 = cljs.core.async.put_BANG_.call(null,inst_29519__$1,inst_29432,done);
var state_29575__$1 = (function (){var statearr_29589 = state_29575;
(statearr_29589[(10)] = inst_29519__$1);

return statearr_29589;
})();
if(cljs.core.truth_(inst_29520)){
var statearr_29591_29769 = state_29575__$1;
(statearr_29591_29769[(1)] = (30));

} else {
var statearr_29592_29770 = state_29575__$1;
(statearr_29592_29770[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (1))){
var state_29575__$1 = state_29575;
var statearr_29593_29771 = state_29575__$1;
(statearr_29593_29771[(2)] = null);

(statearr_29593_29771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (24))){
var inst_29466 = (state_29575[(7)]);
var inst_29487 = (state_29575[(2)]);
var inst_29489 = cljs.core.next.call(null,inst_29466);
var inst_29442 = inst_29489;
var inst_29443 = null;
var inst_29444 = (0);
var inst_29445 = (0);
var state_29575__$1 = (function (){var statearr_29596 = state_29575;
(statearr_29596[(13)] = inst_29487);

(statearr_29596[(14)] = inst_29445);

(statearr_29596[(15)] = inst_29442);

(statearr_29596[(16)] = inst_29443);

(statearr_29596[(17)] = inst_29444);

return statearr_29596;
})();
var statearr_29598_29782 = state_29575__$1;
(statearr_29598_29782[(2)] = null);

(statearr_29598_29782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (39))){
var state_29575__$1 = state_29575;
var statearr_29605_29786 = state_29575__$1;
(statearr_29605_29786[(2)] = null);

(statearr_29605_29786[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (4))){
var inst_29432 = (state_29575[(9)]);
var inst_29432__$1 = (state_29575[(2)]);
var inst_29433 = (inst_29432__$1 == null);
var state_29575__$1 = (function (){var statearr_29606 = state_29575;
(statearr_29606[(9)] = inst_29432__$1);

return statearr_29606;
})();
if(cljs.core.truth_(inst_29433)){
var statearr_29608_29792 = state_29575__$1;
(statearr_29608_29792[(1)] = (5));

} else {
var statearr_29609_29793 = state_29575__$1;
(statearr_29609_29793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (15))){
var inst_29445 = (state_29575[(14)]);
var inst_29442 = (state_29575[(15)]);
var inst_29443 = (state_29575[(16)]);
var inst_29444 = (state_29575[(17)]);
var inst_29461 = (state_29575[(2)]);
var inst_29462 = (inst_29445 + (1));
var tmp29601 = inst_29442;
var tmp29602 = inst_29443;
var tmp29603 = inst_29444;
var inst_29442__$1 = tmp29601;
var inst_29443__$1 = tmp29602;
var inst_29444__$1 = tmp29603;
var inst_29445__$1 = inst_29462;
var state_29575__$1 = (function (){var statearr_29611 = state_29575;
(statearr_29611[(14)] = inst_29445__$1);

(statearr_29611[(18)] = inst_29461);

(statearr_29611[(15)] = inst_29442__$1);

(statearr_29611[(16)] = inst_29443__$1);

(statearr_29611[(17)] = inst_29444__$1);

return statearr_29611;
})();
var statearr_29612_29811 = state_29575__$1;
(statearr_29612_29811[(2)] = null);

(statearr_29612_29811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (21))){
var inst_29492 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29617_29814 = state_29575__$1;
(statearr_29617_29814[(2)] = inst_29492);

(statearr_29617_29814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (31))){
var inst_29519 = (state_29575[(10)]);
var inst_29524 = done.call(null,null);
var inst_29525 = cljs.core.async.untap_STAR_.call(null,m,inst_29519);
var state_29575__$1 = (function (){var statearr_29619 = state_29575;
(statearr_29619[(19)] = inst_29524);

return statearr_29619;
})();
var statearr_29620_29838 = state_29575__$1;
(statearr_29620_29838[(2)] = inst_29525);

(statearr_29620_29838[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (32))){
var inst_29511 = (state_29575[(20)]);
var inst_29513 = (state_29575[(21)]);
var inst_29512 = (state_29575[(11)]);
var inst_29514 = (state_29575[(12)]);
var inst_29527 = (state_29575[(2)]);
var inst_29528 = (inst_29514 + (1));
var tmp29614 = inst_29511;
var tmp29615 = inst_29513;
var tmp29616 = inst_29512;
var inst_29511__$1 = tmp29614;
var inst_29512__$1 = tmp29616;
var inst_29513__$1 = tmp29615;
var inst_29514__$1 = inst_29528;
var state_29575__$1 = (function (){var statearr_29623 = state_29575;
(statearr_29623[(20)] = inst_29511__$1);

(statearr_29623[(21)] = inst_29513__$1);

(statearr_29623[(11)] = inst_29512__$1);

(statearr_29623[(22)] = inst_29527);

(statearr_29623[(12)] = inst_29514__$1);

return statearr_29623;
})();
var statearr_29625_29866 = state_29575__$1;
(statearr_29625_29866[(2)] = null);

(statearr_29625_29866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (40))){
var inst_29542 = (state_29575[(23)]);
var inst_29547 = done.call(null,null);
var inst_29548 = cljs.core.async.untap_STAR_.call(null,m,inst_29542);
var state_29575__$1 = (function (){var statearr_29626 = state_29575;
(statearr_29626[(24)] = inst_29547);

return statearr_29626;
})();
var statearr_29627_29875 = state_29575__$1;
(statearr_29627_29875[(2)] = inst_29548);

(statearr_29627_29875[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (33))){
var inst_29531 = (state_29575[(25)]);
var inst_29533 = cljs.core.chunked_seq_QMARK_.call(null,inst_29531);
var state_29575__$1 = state_29575;
if(inst_29533){
var statearr_29628_29884 = state_29575__$1;
(statearr_29628_29884[(1)] = (36));

} else {
var statearr_29629_29888 = state_29575__$1;
(statearr_29629_29888[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (13))){
var inst_29454 = (state_29575[(26)]);
var inst_29458 = cljs.core.async.close_BANG_.call(null,inst_29454);
var state_29575__$1 = state_29575;
var statearr_29630_29893 = state_29575__$1;
(statearr_29630_29893[(2)] = inst_29458);

(statearr_29630_29893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (22))){
var inst_29480 = (state_29575[(8)]);
var inst_29484 = cljs.core.async.close_BANG_.call(null,inst_29480);
var state_29575__$1 = state_29575;
var statearr_29631_29904 = state_29575__$1;
(statearr_29631_29904[(2)] = inst_29484);

(statearr_29631_29904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (36))){
var inst_29531 = (state_29575[(25)]);
var inst_29535 = cljs.core.chunk_first.call(null,inst_29531);
var inst_29538 = cljs.core.chunk_rest.call(null,inst_29531);
var inst_29539 = cljs.core.count.call(null,inst_29535);
var inst_29511 = inst_29538;
var inst_29512 = inst_29535;
var inst_29513 = inst_29539;
var inst_29514 = (0);
var state_29575__$1 = (function (){var statearr_29632 = state_29575;
(statearr_29632[(20)] = inst_29511);

(statearr_29632[(21)] = inst_29513);

(statearr_29632[(11)] = inst_29512);

(statearr_29632[(12)] = inst_29514);

return statearr_29632;
})();
var statearr_29633_29912 = state_29575__$1;
(statearr_29633_29912[(2)] = null);

(statearr_29633_29912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (41))){
var inst_29531 = (state_29575[(25)]);
var inst_29550 = (state_29575[(2)]);
var inst_29551 = cljs.core.next.call(null,inst_29531);
var inst_29511 = inst_29551;
var inst_29512 = null;
var inst_29513 = (0);
var inst_29514 = (0);
var state_29575__$1 = (function (){var statearr_29637 = state_29575;
(statearr_29637[(27)] = inst_29550);

(statearr_29637[(20)] = inst_29511);

(statearr_29637[(21)] = inst_29513);

(statearr_29637[(11)] = inst_29512);

(statearr_29637[(12)] = inst_29514);

return statearr_29637;
})();
var statearr_29638_29921 = state_29575__$1;
(statearr_29638_29921[(2)] = null);

(statearr_29638_29921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (43))){
var state_29575__$1 = state_29575;
var statearr_29639_29924 = state_29575__$1;
(statearr_29639_29924[(2)] = null);

(statearr_29639_29924[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (29))){
var inst_29559 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29640_29932 = state_29575__$1;
(statearr_29640_29932[(2)] = inst_29559);

(statearr_29640_29932[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (44))){
var inst_29568 = (state_29575[(2)]);
var state_29575__$1 = (function (){var statearr_29641 = state_29575;
(statearr_29641[(28)] = inst_29568);

return statearr_29641;
})();
var statearr_29642_29937 = state_29575__$1;
(statearr_29642_29937[(2)] = null);

(statearr_29642_29937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (6))){
var inst_29503 = (state_29575[(29)]);
var inst_29502 = cljs.core.deref.call(null,cs);
var inst_29503__$1 = cljs.core.keys.call(null,inst_29502);
var inst_29504 = cljs.core.count.call(null,inst_29503__$1);
var inst_29505 = cljs.core.reset_BANG_.call(null,dctr,inst_29504);
var inst_29510 = cljs.core.seq.call(null,inst_29503__$1);
var inst_29511 = inst_29510;
var inst_29512 = null;
var inst_29513 = (0);
var inst_29514 = (0);
var state_29575__$1 = (function (){var statearr_29645 = state_29575;
(statearr_29645[(30)] = inst_29505);

(statearr_29645[(29)] = inst_29503__$1);

(statearr_29645[(20)] = inst_29511);

(statearr_29645[(21)] = inst_29513);

(statearr_29645[(11)] = inst_29512);

(statearr_29645[(12)] = inst_29514);

return statearr_29645;
})();
var statearr_29646_29946 = state_29575__$1;
(statearr_29646_29946[(2)] = null);

(statearr_29646_29946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (28))){
var inst_29511 = (state_29575[(20)]);
var inst_29531 = (state_29575[(25)]);
var inst_29531__$1 = cljs.core.seq.call(null,inst_29511);
var state_29575__$1 = (function (){var statearr_29648 = state_29575;
(statearr_29648[(25)] = inst_29531__$1);

return statearr_29648;
})();
if(inst_29531__$1){
var statearr_29649_29952 = state_29575__$1;
(statearr_29649_29952[(1)] = (33));

} else {
var statearr_29650_29954 = state_29575__$1;
(statearr_29650_29954[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (25))){
var inst_29513 = (state_29575[(21)]);
var inst_29514 = (state_29575[(12)]);
var inst_29516 = (inst_29514 < inst_29513);
var inst_29517 = inst_29516;
var state_29575__$1 = state_29575;
if(cljs.core.truth_(inst_29517)){
var statearr_29651_29955 = state_29575__$1;
(statearr_29651_29955[(1)] = (27));

} else {
var statearr_29652_29956 = state_29575__$1;
(statearr_29652_29956[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (34))){
var state_29575__$1 = state_29575;
var statearr_29653_29961 = state_29575__$1;
(statearr_29653_29961[(2)] = null);

(statearr_29653_29961[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (17))){
var state_29575__$1 = state_29575;
var statearr_29654_29963 = state_29575__$1;
(statearr_29654_29963[(2)] = null);

(statearr_29654_29963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (3))){
var inst_29573 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29575__$1,inst_29573);
} else {
if((state_val_29576 === (12))){
var inst_29497 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29655_29971 = state_29575__$1;
(statearr_29655_29971[(2)] = inst_29497);

(statearr_29655_29971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (2))){
var state_29575__$1 = state_29575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29575__$1,(4),ch);
} else {
if((state_val_29576 === (23))){
var state_29575__$1 = state_29575;
var statearr_29656_29982 = state_29575__$1;
(statearr_29656_29982[(2)] = null);

(statearr_29656_29982[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (35))){
var inst_29557 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29657_29985 = state_29575__$1;
(statearr_29657_29985[(2)] = inst_29557);

(statearr_29657_29985[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (19))){
var inst_29466 = (state_29575[(7)]);
var inst_29470 = cljs.core.chunk_first.call(null,inst_29466);
var inst_29471 = cljs.core.chunk_rest.call(null,inst_29466);
var inst_29472 = cljs.core.count.call(null,inst_29470);
var inst_29442 = inst_29471;
var inst_29443 = inst_29470;
var inst_29444 = inst_29472;
var inst_29445 = (0);
var state_29575__$1 = (function (){var statearr_29659 = state_29575;
(statearr_29659[(14)] = inst_29445);

(statearr_29659[(15)] = inst_29442);

(statearr_29659[(16)] = inst_29443);

(statearr_29659[(17)] = inst_29444);

return statearr_29659;
})();
var statearr_29661_29995 = state_29575__$1;
(statearr_29661_29995[(2)] = null);

(statearr_29661_29995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (11))){
var inst_29442 = (state_29575[(15)]);
var inst_29466 = (state_29575[(7)]);
var inst_29466__$1 = cljs.core.seq.call(null,inst_29442);
var state_29575__$1 = (function (){var statearr_29663 = state_29575;
(statearr_29663[(7)] = inst_29466__$1);

return statearr_29663;
})();
if(inst_29466__$1){
var statearr_29665_29998 = state_29575__$1;
(statearr_29665_29998[(1)] = (16));

} else {
var statearr_29667_30001 = state_29575__$1;
(statearr_29667_30001[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (9))){
var inst_29499 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29668_30003 = state_29575__$1;
(statearr_29668_30003[(2)] = inst_29499);

(statearr_29668_30003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (5))){
var inst_29440 = cljs.core.deref.call(null,cs);
var inst_29441 = cljs.core.seq.call(null,inst_29440);
var inst_29442 = inst_29441;
var inst_29443 = null;
var inst_29444 = (0);
var inst_29445 = (0);
var state_29575__$1 = (function (){var statearr_29670 = state_29575;
(statearr_29670[(14)] = inst_29445);

(statearr_29670[(15)] = inst_29442);

(statearr_29670[(16)] = inst_29443);

(statearr_29670[(17)] = inst_29444);

return statearr_29670;
})();
var statearr_29672_30015 = state_29575__$1;
(statearr_29672_30015[(2)] = null);

(statearr_29672_30015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (14))){
var state_29575__$1 = state_29575;
var statearr_29673_30027 = state_29575__$1;
(statearr_29673_30027[(2)] = null);

(statearr_29673_30027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (45))){
var inst_29565 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29676_30034 = state_29575__$1;
(statearr_29676_30034[(2)] = inst_29565);

(statearr_29676_30034[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (26))){
var inst_29503 = (state_29575[(29)]);
var inst_29561 = (state_29575[(2)]);
var inst_29562 = cljs.core.seq.call(null,inst_29503);
var state_29575__$1 = (function (){var statearr_29677 = state_29575;
(statearr_29677[(31)] = inst_29561);

return statearr_29677;
})();
if(inst_29562){
var statearr_29678_30046 = state_29575__$1;
(statearr_29678_30046[(1)] = (42));

} else {
var statearr_29679_30052 = state_29575__$1;
(statearr_29679_30052[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (16))){
var inst_29466 = (state_29575[(7)]);
var inst_29468 = cljs.core.chunked_seq_QMARK_.call(null,inst_29466);
var state_29575__$1 = state_29575;
if(inst_29468){
var statearr_29680_30058 = state_29575__$1;
(statearr_29680_30058[(1)] = (19));

} else {
var statearr_29681_30059 = state_29575__$1;
(statearr_29681_30059[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (38))){
var inst_29554 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29682_30067 = state_29575__$1;
(statearr_29682_30067[(2)] = inst_29554);

(statearr_29682_30067[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (30))){
var state_29575__$1 = state_29575;
var statearr_29685_30072 = state_29575__$1;
(statearr_29685_30072[(2)] = null);

(statearr_29685_30072[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (10))){
var inst_29445 = (state_29575[(14)]);
var inst_29443 = (state_29575[(16)]);
var inst_29453 = cljs.core._nth.call(null,inst_29443,inst_29445);
var inst_29454 = cljs.core.nth.call(null,inst_29453,(0),null);
var inst_29455 = cljs.core.nth.call(null,inst_29453,(1),null);
var state_29575__$1 = (function (){var statearr_29689 = state_29575;
(statearr_29689[(26)] = inst_29454);

return statearr_29689;
})();
if(cljs.core.truth_(inst_29455)){
var statearr_29690_30088 = state_29575__$1;
(statearr_29690_30088[(1)] = (13));

} else {
var statearr_29691_30095 = state_29575__$1;
(statearr_29691_30095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (18))){
var inst_29495 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29692_30104 = state_29575__$1;
(statearr_29692_30104[(2)] = inst_29495);

(statearr_29692_30104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (42))){
var state_29575__$1 = state_29575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29575__$1,(45),dchan);
} else {
if((state_val_29576 === (37))){
var inst_29542 = (state_29575[(23)]);
var inst_29432 = (state_29575[(9)]);
var inst_29531 = (state_29575[(25)]);
var inst_29542__$1 = cljs.core.first.call(null,inst_29531);
var inst_29544 = cljs.core.async.put_BANG_.call(null,inst_29542__$1,inst_29432,done);
var state_29575__$1 = (function (){var statearr_29695 = state_29575;
(statearr_29695[(23)] = inst_29542__$1);

return statearr_29695;
})();
if(cljs.core.truth_(inst_29544)){
var statearr_29697_30111 = state_29575__$1;
(statearr_29697_30111[(1)] = (39));

} else {
var statearr_29698_30112 = state_29575__$1;
(statearr_29698_30112[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (8))){
var inst_29445 = (state_29575[(14)]);
var inst_29444 = (state_29575[(17)]);
var inst_29447 = (inst_29445 < inst_29444);
var inst_29448 = inst_29447;
var state_29575__$1 = state_29575;
if(cljs.core.truth_(inst_29448)){
var statearr_29700_30113 = state_29575__$1;
(statearr_29700_30113[(1)] = (10));

} else {
var statearr_29701_30114 = state_29575__$1;
(statearr_29701_30114[(1)] = (11));

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
});})(c__26288__auto___29736,cs,m,dchan,dctr,done))
;
return ((function (switch__25578__auto__,c__26288__auto___29736,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25579__auto__ = null;
var cljs$core$async$mult_$_state_machine__25579__auto____0 = (function (){
var statearr_29713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29713[(0)] = cljs$core$async$mult_$_state_machine__25579__auto__);

(statearr_29713[(1)] = (1));

return statearr_29713;
});
var cljs$core$async$mult_$_state_machine__25579__auto____1 = (function (state_29575){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_29575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e29714){if((e29714 instanceof Object)){
var ex__25582__auto__ = e29714;
var statearr_29715_30129 = state_29575;
(statearr_29715_30129[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30134 = state_29575;
state_29575 = G__30134;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25579__auto__ = function(state_29575){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25579__auto____1.call(this,state_29575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25579__auto____0;
cljs$core$async$mult_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25579__auto____1;
return cljs$core$async$mult_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___29736,cs,m,dchan,dctr,done))
})();
var state__26290__auto__ = (function (){var statearr_29717 = f__26289__auto__.call(null);
(statearr_29717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___29736);

return statearr_29717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___29736,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30146 = [];
var len__23128__auto___30157 = arguments.length;
var i__23129__auto___30159 = (0);
while(true){
if((i__23129__auto___30159 < len__23128__auto___30157)){
args30146.push((arguments[i__23129__auto___30159]));

var G__30160 = (i__23129__auto___30159 + (1));
i__23129__auto___30159 = G__30160;
continue;
} else {
}
break;
}

var G__30150 = args30146.length;
switch (G__30150) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30146.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22683__auto__ = (((m == null))?null:m);
var m__22684__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,m,ch);
} else {
var m__22684__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22683__auto__ = (((m == null))?null:m);
var m__22684__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,m,ch);
} else {
var m__22684__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22683__auto__ = (((m == null))?null:m);
var m__22684__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,m);
} else {
var m__22684__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22683__auto__ = (((m == null))?null:m);
var m__22684__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,m,state_map);
} else {
var m__22684__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22683__auto__ = (((m == null))?null:m);
var m__22684__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,m,mode);
} else {
var m__22684__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23135__auto__ = [];
var len__23128__auto___30249 = arguments.length;
var i__23129__auto___30250 = (0);
while(true){
if((i__23129__auto___30250 < len__23128__auto___30249)){
args__23135__auto__.push((arguments[i__23129__auto___30250]));

var G__30252 = (i__23129__auto___30250 + (1));
i__23129__auto___30250 = G__30252;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((3) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23136__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30238){
var map__30239 = p__30238;
var map__30239__$1 = ((((!((map__30239 == null)))?((((map__30239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30239):map__30239);
var opts = map__30239__$1;
var statearr_30241_30259 = state;
(statearr_30241_30259[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30239,map__30239__$1,opts){
return (function (val){
var statearr_30244_30277 = state;
(statearr_30244_30277[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30239,map__30239__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30245_30281 = state;
(statearr_30245_30281[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30232){
var G__30233 = cljs.core.first.call(null,seq30232);
var seq30232__$1 = cljs.core.next.call(null,seq30232);
var G__30235 = cljs.core.first.call(null,seq30232__$1);
var seq30232__$2 = cljs.core.next.call(null,seq30232__$1);
var G__30236 = cljs.core.first.call(null,seq30232__$2);
var seq30232__$3 = cljs.core.next.call(null,seq30232__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30233,G__30235,G__30236,seq30232__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30573 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30574){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30574 = meta30574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30575,meta30574__$1){
var self__ = this;
var _30575__$1 = this;
return (new cljs.core.async.t_cljs$core$async30573(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30574__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30575){
var self__ = this;
var _30575__$1 = this;
return self__.meta30574;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30573.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30574","meta30574",-490668751,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30573";

cljs.core.async.t_cljs$core$async30573.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cljs.core.async/t_cljs$core$async30573");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30573 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30573(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30574){
return (new cljs.core.async.t_cljs$core$async30573(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30574));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30573(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26288__auto___30931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___30931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___30931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30706){
var state_val_30708 = (state_30706[(1)]);
if((state_val_30708 === (7))){
var inst_30617 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30710_30935 = state_30706__$1;
(statearr_30710_30935[(2)] = inst_30617);

(statearr_30710_30935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (20))){
var inst_30631 = (state_30706[(7)]);
var state_30706__$1 = state_30706;
var statearr_30713_30936 = state_30706__$1;
(statearr_30713_30936[(2)] = inst_30631);

(statearr_30713_30936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (27))){
var state_30706__$1 = state_30706;
var statearr_30715_30937 = state_30706__$1;
(statearr_30715_30937[(2)] = null);

(statearr_30715_30937[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (1))){
var inst_30599 = (state_30706[(8)]);
var inst_30599__$1 = calc_state.call(null);
var inst_30601 = (inst_30599__$1 == null);
var inst_30602 = cljs.core.not.call(null,inst_30601);
var state_30706__$1 = (function (){var statearr_30716 = state_30706;
(statearr_30716[(8)] = inst_30599__$1);

return statearr_30716;
})();
if(inst_30602){
var statearr_30717_30938 = state_30706__$1;
(statearr_30717_30938[(1)] = (2));

} else {
var statearr_30718_30939 = state_30706__$1;
(statearr_30718_30939[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (24))){
var inst_30665 = (state_30706[(9)]);
var inst_30679 = (state_30706[(10)]);
var inst_30656 = (state_30706[(11)]);
var inst_30679__$1 = inst_30656.call(null,inst_30665);
var state_30706__$1 = (function (){var statearr_30719 = state_30706;
(statearr_30719[(10)] = inst_30679__$1);

return statearr_30719;
})();
if(cljs.core.truth_(inst_30679__$1)){
var statearr_30720_30940 = state_30706__$1;
(statearr_30720_30940[(1)] = (29));

} else {
var statearr_30721_30941 = state_30706__$1;
(statearr_30721_30941[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (4))){
var inst_30620 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
if(cljs.core.truth_(inst_30620)){
var statearr_30725_30942 = state_30706__$1;
(statearr_30725_30942[(1)] = (8));

} else {
var statearr_30726_30943 = state_30706__$1;
(statearr_30726_30943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (15))){
var inst_30650 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
if(cljs.core.truth_(inst_30650)){
var statearr_30727_30944 = state_30706__$1;
(statearr_30727_30944[(1)] = (19));

} else {
var statearr_30728_30945 = state_30706__$1;
(statearr_30728_30945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (21))){
var inst_30655 = (state_30706[(12)]);
var inst_30655__$1 = (state_30706[(2)]);
var inst_30656 = cljs.core.get.call(null,inst_30655__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30657 = cljs.core.get.call(null,inst_30655__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30658 = cljs.core.get.call(null,inst_30655__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30706__$1 = (function (){var statearr_30732 = state_30706;
(statearr_30732[(13)] = inst_30657);

(statearr_30732[(11)] = inst_30656);

(statearr_30732[(12)] = inst_30655__$1);

return statearr_30732;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30706__$1,(22),inst_30658);
} else {
if((state_val_30708 === (31))){
var inst_30687 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
if(cljs.core.truth_(inst_30687)){
var statearr_30733_30949 = state_30706__$1;
(statearr_30733_30949[(1)] = (32));

} else {
var statearr_30734_30950 = state_30706__$1;
(statearr_30734_30950[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (32))){
var inst_30664 = (state_30706[(14)]);
var state_30706__$1 = state_30706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30706__$1,(35),out,inst_30664);
} else {
if((state_val_30708 === (33))){
var inst_30655 = (state_30706[(12)]);
var inst_30631 = inst_30655;
var state_30706__$1 = (function (){var statearr_30737 = state_30706;
(statearr_30737[(7)] = inst_30631);

return statearr_30737;
})();
var statearr_30738_30954 = state_30706__$1;
(statearr_30738_30954[(2)] = null);

(statearr_30738_30954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (13))){
var inst_30631 = (state_30706[(7)]);
var inst_30639 = inst_30631.cljs$lang$protocol_mask$partition0$;
var inst_30640 = (inst_30639 & (64));
var inst_30641 = inst_30631.cljs$core$ISeq$;
var inst_30642 = (cljs.core.PROTOCOL_SENTINEL === inst_30641);
var inst_30643 = (inst_30640) || (inst_30642);
var state_30706__$1 = state_30706;
if(cljs.core.truth_(inst_30643)){
var statearr_30741_30955 = state_30706__$1;
(statearr_30741_30955[(1)] = (16));

} else {
var statearr_30742_30956 = state_30706__$1;
(statearr_30742_30956[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (22))){
var inst_30664 = (state_30706[(14)]);
var inst_30665 = (state_30706[(9)]);
var inst_30663 = (state_30706[(2)]);
var inst_30664__$1 = cljs.core.nth.call(null,inst_30663,(0),null);
var inst_30665__$1 = cljs.core.nth.call(null,inst_30663,(1),null);
var inst_30666 = (inst_30664__$1 == null);
var inst_30667 = cljs.core._EQ_.call(null,inst_30665__$1,change);
var inst_30668 = (inst_30666) || (inst_30667);
var state_30706__$1 = (function (){var statearr_30745 = state_30706;
(statearr_30745[(14)] = inst_30664__$1);

(statearr_30745[(9)] = inst_30665__$1);

return statearr_30745;
})();
if(cljs.core.truth_(inst_30668)){
var statearr_30746_30957 = state_30706__$1;
(statearr_30746_30957[(1)] = (23));

} else {
var statearr_30747_30958 = state_30706__$1;
(statearr_30747_30958[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (36))){
var inst_30655 = (state_30706[(12)]);
var inst_30631 = inst_30655;
var state_30706__$1 = (function (){var statearr_30748 = state_30706;
(statearr_30748[(7)] = inst_30631);

return statearr_30748;
})();
var statearr_30749_30959 = state_30706__$1;
(statearr_30749_30959[(2)] = null);

(statearr_30749_30959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (29))){
var inst_30679 = (state_30706[(10)]);
var state_30706__$1 = state_30706;
var statearr_30750_30960 = state_30706__$1;
(statearr_30750_30960[(2)] = inst_30679);

(statearr_30750_30960[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (6))){
var state_30706__$1 = state_30706;
var statearr_30751_30961 = state_30706__$1;
(statearr_30751_30961[(2)] = false);

(statearr_30751_30961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (28))){
var inst_30675 = (state_30706[(2)]);
var inst_30676 = calc_state.call(null);
var inst_30631 = inst_30676;
var state_30706__$1 = (function (){var statearr_30753 = state_30706;
(statearr_30753[(15)] = inst_30675);

(statearr_30753[(7)] = inst_30631);

return statearr_30753;
})();
var statearr_30756_30962 = state_30706__$1;
(statearr_30756_30962[(2)] = null);

(statearr_30756_30962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (25))){
var inst_30701 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30758_30963 = state_30706__$1;
(statearr_30758_30963[(2)] = inst_30701);

(statearr_30758_30963[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (34))){
var inst_30699 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30765_30964 = state_30706__$1;
(statearr_30765_30964[(2)] = inst_30699);

(statearr_30765_30964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (17))){
var state_30706__$1 = state_30706;
var statearr_30766_30965 = state_30706__$1;
(statearr_30766_30965[(2)] = false);

(statearr_30766_30965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (3))){
var state_30706__$1 = state_30706;
var statearr_30770_30966 = state_30706__$1;
(statearr_30770_30966[(2)] = false);

(statearr_30770_30966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (12))){
var inst_30703 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30706__$1,inst_30703);
} else {
if((state_val_30708 === (2))){
var inst_30599 = (state_30706[(8)]);
var inst_30605 = inst_30599.cljs$lang$protocol_mask$partition0$;
var inst_30606 = (inst_30605 & (64));
var inst_30610 = inst_30599.cljs$core$ISeq$;
var inst_30611 = (cljs.core.PROTOCOL_SENTINEL === inst_30610);
var inst_30612 = (inst_30606) || (inst_30611);
var state_30706__$1 = state_30706;
if(cljs.core.truth_(inst_30612)){
var statearr_30776_30967 = state_30706__$1;
(statearr_30776_30967[(1)] = (5));

} else {
var statearr_30777_30968 = state_30706__$1;
(statearr_30777_30968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (23))){
var inst_30664 = (state_30706[(14)]);
var inst_30670 = (inst_30664 == null);
var state_30706__$1 = state_30706;
if(cljs.core.truth_(inst_30670)){
var statearr_30778_30981 = state_30706__$1;
(statearr_30778_30981[(1)] = (26));

} else {
var statearr_30779_30982 = state_30706__$1;
(statearr_30779_30982[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (35))){
var inst_30690 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
if(cljs.core.truth_(inst_30690)){
var statearr_30780_30983 = state_30706__$1;
(statearr_30780_30983[(1)] = (36));

} else {
var statearr_30781_30984 = state_30706__$1;
(statearr_30781_30984[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (19))){
var inst_30631 = (state_30706[(7)]);
var inst_30652 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30631);
var state_30706__$1 = state_30706;
var statearr_30789_30985 = state_30706__$1;
(statearr_30789_30985[(2)] = inst_30652);

(statearr_30789_30985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (11))){
var inst_30631 = (state_30706[(7)]);
var inst_30636 = (inst_30631 == null);
var inst_30637 = cljs.core.not.call(null,inst_30636);
var state_30706__$1 = state_30706;
if(inst_30637){
var statearr_30790_31000 = state_30706__$1;
(statearr_30790_31000[(1)] = (13));

} else {
var statearr_30791_31001 = state_30706__$1;
(statearr_30791_31001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (9))){
var inst_30599 = (state_30706[(8)]);
var state_30706__$1 = state_30706;
var statearr_30792_31004 = state_30706__$1;
(statearr_30792_31004[(2)] = inst_30599);

(statearr_30792_31004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (5))){
var state_30706__$1 = state_30706;
var statearr_30794_31007 = state_30706__$1;
(statearr_30794_31007[(2)] = true);

(statearr_30794_31007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (14))){
var state_30706__$1 = state_30706;
var statearr_30796_31008 = state_30706__$1;
(statearr_30796_31008[(2)] = false);

(statearr_30796_31008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (26))){
var inst_30665 = (state_30706[(9)]);
var inst_30672 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30665);
var state_30706__$1 = state_30706;
var statearr_30798_31009 = state_30706__$1;
(statearr_30798_31009[(2)] = inst_30672);

(statearr_30798_31009[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (16))){
var state_30706__$1 = state_30706;
var statearr_30800_31010 = state_30706__$1;
(statearr_30800_31010[(2)] = true);

(statearr_30800_31010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (38))){
var inst_30695 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30804_31012 = state_30706__$1;
(statearr_30804_31012[(2)] = inst_30695);

(statearr_30804_31012[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (30))){
var inst_30665 = (state_30706[(9)]);
var inst_30657 = (state_30706[(13)]);
var inst_30656 = (state_30706[(11)]);
var inst_30682 = cljs.core.empty_QMARK_.call(null,inst_30656);
var inst_30683 = inst_30657.call(null,inst_30665);
var inst_30684 = cljs.core.not.call(null,inst_30683);
var inst_30685 = (inst_30682) && (inst_30684);
var state_30706__$1 = state_30706;
var statearr_30810_31016 = state_30706__$1;
(statearr_30810_31016[(2)] = inst_30685);

(statearr_30810_31016[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (10))){
var inst_30599 = (state_30706[(8)]);
var inst_30626 = (state_30706[(2)]);
var inst_30628 = cljs.core.get.call(null,inst_30626,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30629 = cljs.core.get.call(null,inst_30626,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30630 = cljs.core.get.call(null,inst_30626,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30631 = inst_30599;
var state_30706__$1 = (function (){var statearr_30818 = state_30706;
(statearr_30818[(16)] = inst_30630);

(statearr_30818[(17)] = inst_30628);

(statearr_30818[(18)] = inst_30629);

(statearr_30818[(7)] = inst_30631);

return statearr_30818;
})();
var statearr_30820_31026 = state_30706__$1;
(statearr_30820_31026[(2)] = null);

(statearr_30820_31026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (18))){
var inst_30647 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30825_31027 = state_30706__$1;
(statearr_30825_31027[(2)] = inst_30647);

(statearr_30825_31027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (37))){
var state_30706__$1 = state_30706;
var statearr_30827_31028 = state_30706__$1;
(statearr_30827_31028[(2)] = null);

(statearr_30827_31028[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (8))){
var inst_30599 = (state_30706[(8)]);
var inst_30623 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30599);
var state_30706__$1 = state_30706;
var statearr_30828_31031 = state_30706__$1;
(statearr_30828_31031[(2)] = inst_30623);

(statearr_30828_31031[(1)] = (10));


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
});})(c__26288__auto___30931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25578__auto__,c__26288__auto___30931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25579__auto__ = null;
var cljs$core$async$mix_$_state_machine__25579__auto____0 = (function (){
var statearr_30833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30833[(0)] = cljs$core$async$mix_$_state_machine__25579__auto__);

(statearr_30833[(1)] = (1));

return statearr_30833;
});
var cljs$core$async$mix_$_state_machine__25579__auto____1 = (function (state_30706){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_30706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e30835){if((e30835 instanceof Object)){
var ex__25582__auto__ = e30835;
var statearr_30836_31038 = state_30706;
(statearr_30836_31038[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31039 = state_30706;
state_30706 = G__31039;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25579__auto__ = function(state_30706){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25579__auto____1.call(this,state_30706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25579__auto____0;
cljs$core$async$mix_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25579__auto____1;
return cljs$core$async$mix_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___30931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26290__auto__ = (function (){var statearr_30838 = f__26289__auto__.call(null);
(statearr_30838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___30931);

return statearr_30838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___30931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22683__auto__ = (((p == null))?null:p);
var m__22684__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22684__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22683__auto__ = (((p == null))?null:p);
var m__22684__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,p,v,ch);
} else {
var m__22684__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31132 = [];
var len__23128__auto___31208 = arguments.length;
var i__23129__auto___31209 = (0);
while(true){
if((i__23129__auto___31209 < len__23128__auto___31208)){
args31132.push((arguments[i__23129__auto___31209]));

var G__31211 = (i__23129__auto___31209 + (1));
i__23129__auto___31209 = G__31211;
continue;
} else {
}
break;
}

var G__31134 = args31132.length;
switch (G__31134) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31132.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22683__auto__ = (((p == null))?null:p);
var m__22684__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,p);
} else {
var m__22684__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22683__auto__ = (((p == null))?null:p);
var m__22684__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22683__auto__)]);
if(!((m__22684__auto__ == null))){
return m__22684__auto__.call(null,p,v);
} else {
var m__22684__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22684__auto____$1 == null))){
return m__22684__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31247 = [];
var len__23128__auto___31446 = arguments.length;
var i__23129__auto___31447 = (0);
while(true){
if((i__23129__auto___31447 < len__23128__auto___31446)){
args31247.push((arguments[i__23129__auto___31447]));

var G__31449 = (i__23129__auto___31447 + (1));
i__23129__auto___31447 = G__31449;
continue;
} else {
}
break;
}

var G__31252 = args31247.length;
switch (G__31252) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31247.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22020__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22020__auto__,mults){
return (function (p1__31241_SHARP_){
if(cljs.core.truth_(p1__31241_SHARP_.call(null,topic))){
return p1__31241_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31241_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22020__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31253 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31254){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31254 = meta31254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31255,meta31254__$1){
var self__ = this;
var _31255__$1 = this;
return (new cljs.core.async.t_cljs$core$async31253(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31254__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31255){
var self__ = this;
var _31255__$1 = this;
return self__.meta31254;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31253.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31253.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31253.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31253.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31253.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31253.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31253.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31254","meta31254",-1234641129,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31253";

cljs.core.async.t_cljs$core$async31253.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cljs.core.async/t_cljs$core$async31253");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31253 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31253(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31254){
return (new cljs.core.async.t_cljs$core$async31253(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31254));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31253(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26288__auto___31523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___31523,mults,ensure_mult,p){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___31523,mults,ensure_mult,p){
return (function (state_31349){
var state_val_31350 = (state_31349[(1)]);
if((state_val_31350 === (7))){
var inst_31345 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31351_31527 = state_31349__$1;
(statearr_31351_31527[(2)] = inst_31345);

(statearr_31351_31527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (20))){
var state_31349__$1 = state_31349;
var statearr_31352_31532 = state_31349__$1;
(statearr_31352_31532[(2)] = null);

(statearr_31352_31532[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (1))){
var state_31349__$1 = state_31349;
var statearr_31354_31535 = state_31349__$1;
(statearr_31354_31535[(2)] = null);

(statearr_31354_31535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (24))){
var inst_31326 = (state_31349[(7)]);
var inst_31337 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31326);
var state_31349__$1 = state_31349;
var statearr_31356_31538 = state_31349__$1;
(statearr_31356_31538[(2)] = inst_31337);

(statearr_31356_31538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (4))){
var inst_31276 = (state_31349[(8)]);
var inst_31276__$1 = (state_31349[(2)]);
var inst_31277 = (inst_31276__$1 == null);
var state_31349__$1 = (function (){var statearr_31357 = state_31349;
(statearr_31357[(8)] = inst_31276__$1);

return statearr_31357;
})();
if(cljs.core.truth_(inst_31277)){
var statearr_31358_31540 = state_31349__$1;
(statearr_31358_31540[(1)] = (5));

} else {
var statearr_31359_31545 = state_31349__$1;
(statearr_31359_31545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (15))){
var inst_31320 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31362_31546 = state_31349__$1;
(statearr_31362_31546[(2)] = inst_31320);

(statearr_31362_31546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (21))){
var inst_31342 = (state_31349[(2)]);
var state_31349__$1 = (function (){var statearr_31363 = state_31349;
(statearr_31363[(9)] = inst_31342);

return statearr_31363;
})();
var statearr_31364_31558 = state_31349__$1;
(statearr_31364_31558[(2)] = null);

(statearr_31364_31558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (13))){
var inst_31301 = (state_31349[(10)]);
var inst_31304 = cljs.core.chunked_seq_QMARK_.call(null,inst_31301);
var state_31349__$1 = state_31349;
if(inst_31304){
var statearr_31365_31562 = state_31349__$1;
(statearr_31365_31562[(1)] = (16));

} else {
var statearr_31366_31563 = state_31349__$1;
(statearr_31366_31563[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (22))){
var inst_31332 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
if(cljs.core.truth_(inst_31332)){
var statearr_31367_31570 = state_31349__$1;
(statearr_31367_31570[(1)] = (23));

} else {
var statearr_31368_31572 = state_31349__$1;
(statearr_31368_31572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (6))){
var inst_31328 = (state_31349[(11)]);
var inst_31326 = (state_31349[(7)]);
var inst_31276 = (state_31349[(8)]);
var inst_31326__$1 = topic_fn.call(null,inst_31276);
var inst_31327 = cljs.core.deref.call(null,mults);
var inst_31328__$1 = cljs.core.get.call(null,inst_31327,inst_31326__$1);
var state_31349__$1 = (function (){var statearr_31370 = state_31349;
(statearr_31370[(11)] = inst_31328__$1);

(statearr_31370[(7)] = inst_31326__$1);

return statearr_31370;
})();
if(cljs.core.truth_(inst_31328__$1)){
var statearr_31371_31576 = state_31349__$1;
(statearr_31371_31576[(1)] = (19));

} else {
var statearr_31373_31580 = state_31349__$1;
(statearr_31373_31580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (25))){
var inst_31339 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31378_31581 = state_31349__$1;
(statearr_31378_31581[(2)] = inst_31339);

(statearr_31378_31581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (17))){
var inst_31301 = (state_31349[(10)]);
var inst_31311 = cljs.core.first.call(null,inst_31301);
var inst_31312 = cljs.core.async.muxch_STAR_.call(null,inst_31311);
var inst_31313 = cljs.core.async.close_BANG_.call(null,inst_31312);
var inst_31314 = cljs.core.next.call(null,inst_31301);
var inst_31286 = inst_31314;
var inst_31287 = null;
var inst_31288 = (0);
var inst_31289 = (0);
var state_31349__$1 = (function (){var statearr_31389 = state_31349;
(statearr_31389[(12)] = inst_31288);

(statearr_31389[(13)] = inst_31289);

(statearr_31389[(14)] = inst_31286);

(statearr_31389[(15)] = inst_31287);

(statearr_31389[(16)] = inst_31313);

return statearr_31389;
})();
var statearr_31390_31586 = state_31349__$1;
(statearr_31390_31586[(2)] = null);

(statearr_31390_31586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (3))){
var inst_31347 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31349__$1,inst_31347);
} else {
if((state_val_31350 === (12))){
var inst_31322 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31391_31595 = state_31349__$1;
(statearr_31391_31595[(2)] = inst_31322);

(statearr_31391_31595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (2))){
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31349__$1,(4),ch);
} else {
if((state_val_31350 === (23))){
var state_31349__$1 = state_31349;
var statearr_31397_31596 = state_31349__$1;
(statearr_31397_31596[(2)] = null);

(statearr_31397_31596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (19))){
var inst_31328 = (state_31349[(11)]);
var inst_31276 = (state_31349[(8)]);
var inst_31330 = cljs.core.async.muxch_STAR_.call(null,inst_31328);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31349__$1,(22),inst_31330,inst_31276);
} else {
if((state_val_31350 === (11))){
var inst_31301 = (state_31349[(10)]);
var inst_31286 = (state_31349[(14)]);
var inst_31301__$1 = cljs.core.seq.call(null,inst_31286);
var state_31349__$1 = (function (){var statearr_31408 = state_31349;
(statearr_31408[(10)] = inst_31301__$1);

return statearr_31408;
})();
if(inst_31301__$1){
var statearr_31409_31599 = state_31349__$1;
(statearr_31409_31599[(1)] = (13));

} else {
var statearr_31410_31600 = state_31349__$1;
(statearr_31410_31600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (9))){
var inst_31324 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31411_31604 = state_31349__$1;
(statearr_31411_31604[(2)] = inst_31324);

(statearr_31411_31604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (5))){
var inst_31283 = cljs.core.deref.call(null,mults);
var inst_31284 = cljs.core.vals.call(null,inst_31283);
var inst_31285 = cljs.core.seq.call(null,inst_31284);
var inst_31286 = inst_31285;
var inst_31287 = null;
var inst_31288 = (0);
var inst_31289 = (0);
var state_31349__$1 = (function (){var statearr_31412 = state_31349;
(statearr_31412[(12)] = inst_31288);

(statearr_31412[(13)] = inst_31289);

(statearr_31412[(14)] = inst_31286);

(statearr_31412[(15)] = inst_31287);

return statearr_31412;
})();
var statearr_31413_31605 = state_31349__$1;
(statearr_31413_31605[(2)] = null);

(statearr_31413_31605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (14))){
var state_31349__$1 = state_31349;
var statearr_31417_31606 = state_31349__$1;
(statearr_31417_31606[(2)] = null);

(statearr_31417_31606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (16))){
var inst_31301 = (state_31349[(10)]);
var inst_31306 = cljs.core.chunk_first.call(null,inst_31301);
var inst_31307 = cljs.core.chunk_rest.call(null,inst_31301);
var inst_31308 = cljs.core.count.call(null,inst_31306);
var inst_31286 = inst_31307;
var inst_31287 = inst_31306;
var inst_31288 = inst_31308;
var inst_31289 = (0);
var state_31349__$1 = (function (){var statearr_31418 = state_31349;
(statearr_31418[(12)] = inst_31288);

(statearr_31418[(13)] = inst_31289);

(statearr_31418[(14)] = inst_31286);

(statearr_31418[(15)] = inst_31287);

return statearr_31418;
})();
var statearr_31419_31610 = state_31349__$1;
(statearr_31419_31610[(2)] = null);

(statearr_31419_31610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (10))){
var inst_31288 = (state_31349[(12)]);
var inst_31289 = (state_31349[(13)]);
var inst_31286 = (state_31349[(14)]);
var inst_31287 = (state_31349[(15)]);
var inst_31294 = cljs.core._nth.call(null,inst_31287,inst_31289);
var inst_31296 = cljs.core.async.muxch_STAR_.call(null,inst_31294);
var inst_31297 = cljs.core.async.close_BANG_.call(null,inst_31296);
var inst_31298 = (inst_31289 + (1));
var tmp31414 = inst_31288;
var tmp31415 = inst_31286;
var tmp31416 = inst_31287;
var inst_31286__$1 = tmp31415;
var inst_31287__$1 = tmp31416;
var inst_31288__$1 = tmp31414;
var inst_31289__$1 = inst_31298;
var state_31349__$1 = (function (){var statearr_31425 = state_31349;
(statearr_31425[(12)] = inst_31288__$1);

(statearr_31425[(17)] = inst_31297);

(statearr_31425[(13)] = inst_31289__$1);

(statearr_31425[(14)] = inst_31286__$1);

(statearr_31425[(15)] = inst_31287__$1);

return statearr_31425;
})();
var statearr_31426_31614 = state_31349__$1;
(statearr_31426_31614[(2)] = null);

(statearr_31426_31614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (18))){
var inst_31317 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31429_31615 = state_31349__$1;
(statearr_31429_31615[(2)] = inst_31317);

(statearr_31429_31615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (8))){
var inst_31288 = (state_31349[(12)]);
var inst_31289 = (state_31349[(13)]);
var inst_31291 = (inst_31289 < inst_31288);
var inst_31292 = inst_31291;
var state_31349__$1 = state_31349;
if(cljs.core.truth_(inst_31292)){
var statearr_31430_31619 = state_31349__$1;
(statearr_31430_31619[(1)] = (10));

} else {
var statearr_31431_31620 = state_31349__$1;
(statearr_31431_31620[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__26288__auto___31523,mults,ensure_mult,p))
;
return ((function (switch__25578__auto__,c__26288__auto___31523,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25579__auto__ = null;
var cljs$core$async$state_machine__25579__auto____0 = (function (){
var statearr_31440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31440[(0)] = cljs$core$async$state_machine__25579__auto__);

(statearr_31440[(1)] = (1));

return statearr_31440;
});
var cljs$core$async$state_machine__25579__auto____1 = (function (state_31349){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_31349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e31442){if((e31442 instanceof Object)){
var ex__25582__auto__ = e31442;
var statearr_31443_31630 = state_31349;
(statearr_31443_31630[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31632 = state_31349;
state_31349 = G__31632;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$state_machine__25579__auto__ = function(state_31349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25579__auto____1.call(this,state_31349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25579__auto____0;
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25579__auto____1;
return cljs$core$async$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___31523,mults,ensure_mult,p))
})();
var state__26290__auto__ = (function (){var statearr_31445 = f__26289__auto__.call(null);
(statearr_31445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___31523);

return statearr_31445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___31523,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31641 = [];
var len__23128__auto___31657 = arguments.length;
var i__23129__auto___31658 = (0);
while(true){
if((i__23129__auto___31658 < len__23128__auto___31657)){
args31641.push((arguments[i__23129__auto___31658]));

var G__31659 = (i__23129__auto___31658 + (1));
i__23129__auto___31658 = G__31659;
continue;
} else {
}
break;
}

var G__31651 = args31641.length;
switch (G__31651) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31641.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31687 = [];
var len__23128__auto___31698 = arguments.length;
var i__23129__auto___31699 = (0);
while(true){
if((i__23129__auto___31699 < len__23128__auto___31698)){
args31687.push((arguments[i__23129__auto___31699]));

var G__31700 = (i__23129__auto___31699 + (1));
i__23129__auto___31699 = G__31700;
continue;
} else {
}
break;
}

var G__31693 = args31687.length;
switch (G__31693) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31687.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31705 = [];
var len__23128__auto___31857 = arguments.length;
var i__23129__auto___31858 = (0);
while(true){
if((i__23129__auto___31858 < len__23128__auto___31857)){
args31705.push((arguments[i__23129__auto___31858]));

var G__31859 = (i__23129__auto___31858 + (1));
i__23129__auto___31858 = G__31859;
continue;
} else {
}
break;
}

var G__31708 = args31705.length;
switch (G__31708) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31705.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26288__auto___31877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___31877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___31877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31749){
var state_val_31750 = (state_31749[(1)]);
if((state_val_31750 === (7))){
var state_31749__$1 = state_31749;
var statearr_31752_31887 = state_31749__$1;
(statearr_31752_31887[(2)] = null);

(statearr_31752_31887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (1))){
var state_31749__$1 = state_31749;
var statearr_31753_31891 = state_31749__$1;
(statearr_31753_31891[(2)] = null);

(statearr_31753_31891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (4))){
var inst_31711 = (state_31749[(7)]);
var inst_31713 = (inst_31711 < cnt);
var state_31749__$1 = state_31749;
if(cljs.core.truth_(inst_31713)){
var statearr_31754_31893 = state_31749__$1;
(statearr_31754_31893[(1)] = (6));

} else {
var statearr_31755_31896 = state_31749__$1;
(statearr_31755_31896[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (15))){
var inst_31745 = (state_31749[(2)]);
var state_31749__$1 = state_31749;
var statearr_31756_31898 = state_31749__$1;
(statearr_31756_31898[(2)] = inst_31745);

(statearr_31756_31898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (13))){
var inst_31738 = cljs.core.async.close_BANG_.call(null,out);
var state_31749__$1 = state_31749;
var statearr_31757_31900 = state_31749__$1;
(statearr_31757_31900[(2)] = inst_31738);

(statearr_31757_31900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (6))){
var state_31749__$1 = state_31749;
var statearr_31758_31901 = state_31749__$1;
(statearr_31758_31901[(2)] = null);

(statearr_31758_31901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (3))){
var inst_31747 = (state_31749[(2)]);
var state_31749__$1 = state_31749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31749__$1,inst_31747);
} else {
if((state_val_31750 === (12))){
var inst_31735 = (state_31749[(8)]);
var inst_31735__$1 = (state_31749[(2)]);
var inst_31736 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31735__$1);
var state_31749__$1 = (function (){var statearr_31762 = state_31749;
(statearr_31762[(8)] = inst_31735__$1);

return statearr_31762;
})();
if(cljs.core.truth_(inst_31736)){
var statearr_31763_31906 = state_31749__$1;
(statearr_31763_31906[(1)] = (13));

} else {
var statearr_31764_31907 = state_31749__$1;
(statearr_31764_31907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (2))){
var inst_31710 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31711 = (0);
var state_31749__$1 = (function (){var statearr_31765 = state_31749;
(statearr_31765[(9)] = inst_31710);

(statearr_31765[(7)] = inst_31711);

return statearr_31765;
})();
var statearr_31766_31909 = state_31749__$1;
(statearr_31766_31909[(2)] = null);

(statearr_31766_31909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (11))){
var inst_31711 = (state_31749[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31749,(10),Object,null,(9));
var inst_31722 = chs__$1.call(null,inst_31711);
var inst_31723 = done.call(null,inst_31711);
var inst_31724 = cljs.core.async.take_BANG_.call(null,inst_31722,inst_31723);
var state_31749__$1 = state_31749;
var statearr_31767_31912 = state_31749__$1;
(statearr_31767_31912[(2)] = inst_31724);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31749__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (9))){
var inst_31711 = (state_31749[(7)]);
var inst_31726 = (state_31749[(2)]);
var inst_31727 = (inst_31711 + (1));
var inst_31711__$1 = inst_31727;
var state_31749__$1 = (function (){var statearr_31768 = state_31749;
(statearr_31768[(7)] = inst_31711__$1);

(statearr_31768[(10)] = inst_31726);

return statearr_31768;
})();
var statearr_31769_31915 = state_31749__$1;
(statearr_31769_31915[(2)] = null);

(statearr_31769_31915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (5))){
var inst_31733 = (state_31749[(2)]);
var state_31749__$1 = (function (){var statearr_31770 = state_31749;
(statearr_31770[(11)] = inst_31733);

return statearr_31770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31749__$1,(12),dchan);
} else {
if((state_val_31750 === (14))){
var inst_31735 = (state_31749[(8)]);
var inst_31740 = cljs.core.apply.call(null,f,inst_31735);
var state_31749__$1 = state_31749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31749__$1,(16),out,inst_31740);
} else {
if((state_val_31750 === (16))){
var inst_31742 = (state_31749[(2)]);
var state_31749__$1 = (function (){var statearr_31771 = state_31749;
(statearr_31771[(12)] = inst_31742);

return statearr_31771;
})();
var statearr_31772_31926 = state_31749__$1;
(statearr_31772_31926[(2)] = null);

(statearr_31772_31926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (10))){
var inst_31715 = (state_31749[(2)]);
var inst_31716 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31749__$1 = (function (){var statearr_31773 = state_31749;
(statearr_31773[(13)] = inst_31715);

return statearr_31773;
})();
var statearr_31774_31930 = state_31749__$1;
(statearr_31774_31930[(2)] = inst_31716);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31749__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (8))){
var inst_31731 = (state_31749[(2)]);
var state_31749__$1 = state_31749;
var statearr_31775_31934 = state_31749__$1;
(statearr_31775_31934[(2)] = inst_31731);

(statearr_31775_31934[(1)] = (5));


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
});})(c__26288__auto___31877,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25578__auto__,c__26288__auto___31877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25579__auto__ = null;
var cljs$core$async$state_machine__25579__auto____0 = (function (){
var statearr_31845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31845[(0)] = cljs$core$async$state_machine__25579__auto__);

(statearr_31845[(1)] = (1));

return statearr_31845;
});
var cljs$core$async$state_machine__25579__auto____1 = (function (state_31749){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_31749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e31848){if((e31848 instanceof Object)){
var ex__25582__auto__ = e31848;
var statearr_31849_31939 = state_31749;
(statearr_31849_31939[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31941 = state_31749;
state_31749 = G__31941;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$state_machine__25579__auto__ = function(state_31749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25579__auto____1.call(this,state_31749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25579__auto____0;
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25579__auto____1;
return cljs$core$async$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___31877,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26290__auto__ = (function (){var statearr_31854 = f__26289__auto__.call(null);
(statearr_31854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___31877);

return statearr_31854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___31877,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31945 = [];
var len__23128__auto___32018 = arguments.length;
var i__23129__auto___32019 = (0);
while(true){
if((i__23129__auto___32019 < len__23128__auto___32018)){
args31945.push((arguments[i__23129__auto___32019]));

var G__32022 = (i__23129__auto___32019 + (1));
i__23129__auto___32019 = G__32022;
continue;
} else {
}
break;
}

var G__31949 = args31945.length;
switch (G__31949) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31945.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26288__auto___32029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___32029,out){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___32029,out){
return (function (state_31983){
var state_val_31984 = (state_31983[(1)]);
if((state_val_31984 === (7))){
var inst_31963 = (state_31983[(7)]);
var inst_31962 = (state_31983[(8)]);
var inst_31962__$1 = (state_31983[(2)]);
var inst_31963__$1 = cljs.core.nth.call(null,inst_31962__$1,(0),null);
var inst_31964 = cljs.core.nth.call(null,inst_31962__$1,(1),null);
var inst_31965 = (inst_31963__$1 == null);
var state_31983__$1 = (function (){var statearr_31986 = state_31983;
(statearr_31986[(7)] = inst_31963__$1);

(statearr_31986[(8)] = inst_31962__$1);

(statearr_31986[(9)] = inst_31964);

return statearr_31986;
})();
if(cljs.core.truth_(inst_31965)){
var statearr_31987_32030 = state_31983__$1;
(statearr_31987_32030[(1)] = (8));

} else {
var statearr_31988_32031 = state_31983__$1;
(statearr_31988_32031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (1))){
var inst_31951 = cljs.core.vec.call(null,chs);
var inst_31952 = inst_31951;
var state_31983__$1 = (function (){var statearr_31989 = state_31983;
(statearr_31989[(10)] = inst_31952);

return statearr_31989;
})();
var statearr_31991_32032 = state_31983__$1;
(statearr_31991_32032[(2)] = null);

(statearr_31991_32032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (4))){
var inst_31952 = (state_31983[(10)]);
var state_31983__$1 = state_31983;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31983__$1,(7),inst_31952);
} else {
if((state_val_31984 === (6))){
var inst_31979 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
var statearr_31992_32037 = state_31983__$1;
(statearr_31992_32037[(2)] = inst_31979);

(statearr_31992_32037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (3))){
var inst_31981 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31983__$1,inst_31981);
} else {
if((state_val_31984 === (2))){
var inst_31952 = (state_31983[(10)]);
var inst_31954 = cljs.core.count.call(null,inst_31952);
var inst_31955 = (inst_31954 > (0));
var state_31983__$1 = state_31983;
if(cljs.core.truth_(inst_31955)){
var statearr_31995_32045 = state_31983__$1;
(statearr_31995_32045[(1)] = (4));

} else {
var statearr_31996_32048 = state_31983__$1;
(statearr_31996_32048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (11))){
var inst_31952 = (state_31983[(10)]);
var inst_31972 = (state_31983[(2)]);
var tmp31993 = inst_31952;
var inst_31952__$1 = tmp31993;
var state_31983__$1 = (function (){var statearr_31997 = state_31983;
(statearr_31997[(10)] = inst_31952__$1);

(statearr_31997[(11)] = inst_31972);

return statearr_31997;
})();
var statearr_31998_32051 = state_31983__$1;
(statearr_31998_32051[(2)] = null);

(statearr_31998_32051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (9))){
var inst_31963 = (state_31983[(7)]);
var state_31983__$1 = state_31983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31983__$1,(11),out,inst_31963);
} else {
if((state_val_31984 === (5))){
var inst_31977 = cljs.core.async.close_BANG_.call(null,out);
var state_31983__$1 = state_31983;
var statearr_32001_32058 = state_31983__$1;
(statearr_32001_32058[(2)] = inst_31977);

(statearr_32001_32058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (10))){
var inst_31975 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
var statearr_32002_32059 = state_31983__$1;
(statearr_32002_32059[(2)] = inst_31975);

(statearr_32002_32059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (8))){
var inst_31963 = (state_31983[(7)]);
var inst_31962 = (state_31983[(8)]);
var inst_31964 = (state_31983[(9)]);
var inst_31952 = (state_31983[(10)]);
var inst_31967 = (function (){var cs = inst_31952;
var vec__31958 = inst_31962;
var v = inst_31963;
var c = inst_31964;
return ((function (cs,vec__31958,v,c,inst_31963,inst_31962,inst_31964,inst_31952,state_val_31984,c__26288__auto___32029,out){
return (function (p1__31944_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31944_SHARP_);
});
;})(cs,vec__31958,v,c,inst_31963,inst_31962,inst_31964,inst_31952,state_val_31984,c__26288__auto___32029,out))
})();
var inst_31968 = cljs.core.filterv.call(null,inst_31967,inst_31952);
var inst_31952__$1 = inst_31968;
var state_31983__$1 = (function (){var statearr_32005 = state_31983;
(statearr_32005[(10)] = inst_31952__$1);

return statearr_32005;
})();
var statearr_32006_32061 = state_31983__$1;
(statearr_32006_32061[(2)] = null);

(statearr_32006_32061[(1)] = (2));


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
});})(c__26288__auto___32029,out))
;
return ((function (switch__25578__auto__,c__26288__auto___32029,out){
return (function() {
var cljs$core$async$state_machine__25579__auto__ = null;
var cljs$core$async$state_machine__25579__auto____0 = (function (){
var statearr_32011 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32011[(0)] = cljs$core$async$state_machine__25579__auto__);

(statearr_32011[(1)] = (1));

return statearr_32011;
});
var cljs$core$async$state_machine__25579__auto____1 = (function (state_31983){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_31983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e32012){if((e32012 instanceof Object)){
var ex__25582__auto__ = e32012;
var statearr_32013_32071 = state_31983;
(statearr_32013_32071[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32075 = state_31983;
state_31983 = G__32075;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$state_machine__25579__auto__ = function(state_31983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25579__auto____1.call(this,state_31983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25579__auto____0;
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25579__auto____1;
return cljs$core$async$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___32029,out))
})();
var state__26290__auto__ = (function (){var statearr_32014 = f__26289__auto__.call(null);
(statearr_32014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___32029);

return statearr_32014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___32029,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32080 = [];
var len__23128__auto___32159 = arguments.length;
var i__23129__auto___32160 = (0);
while(true){
if((i__23129__auto___32160 < len__23128__auto___32159)){
args32080.push((arguments[i__23129__auto___32160]));

var G__32161 = (i__23129__auto___32160 + (1));
i__23129__auto___32160 = G__32161;
continue;
} else {
}
break;
}

var G__32085 = args32080.length;
switch (G__32085) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32080.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26288__auto___32165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___32165,out){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___32165,out){
return (function (state_32109){
var state_val_32110 = (state_32109[(1)]);
if((state_val_32110 === (7))){
var inst_32091 = (state_32109[(7)]);
var inst_32091__$1 = (state_32109[(2)]);
var inst_32092 = (inst_32091__$1 == null);
var inst_32093 = cljs.core.not.call(null,inst_32092);
var state_32109__$1 = (function (){var statearr_32111 = state_32109;
(statearr_32111[(7)] = inst_32091__$1);

return statearr_32111;
})();
if(inst_32093){
var statearr_32112_32171 = state_32109__$1;
(statearr_32112_32171[(1)] = (8));

} else {
var statearr_32113_32172 = state_32109__$1;
(statearr_32113_32172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (1))){
var inst_32086 = (0);
var state_32109__$1 = (function (){var statearr_32114 = state_32109;
(statearr_32114[(8)] = inst_32086);

return statearr_32114;
})();
var statearr_32115_32173 = state_32109__$1;
(statearr_32115_32173[(2)] = null);

(statearr_32115_32173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (4))){
var state_32109__$1 = state_32109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32109__$1,(7),ch);
} else {
if((state_val_32110 === (6))){
var inst_32104 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
var statearr_32116_32179 = state_32109__$1;
(statearr_32116_32179[(2)] = inst_32104);

(statearr_32116_32179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (3))){
var inst_32106 = (state_32109[(2)]);
var inst_32107 = cljs.core.async.close_BANG_.call(null,out);
var state_32109__$1 = (function (){var statearr_32117 = state_32109;
(statearr_32117[(9)] = inst_32106);

return statearr_32117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32109__$1,inst_32107);
} else {
if((state_val_32110 === (2))){
var inst_32086 = (state_32109[(8)]);
var inst_32088 = (inst_32086 < n);
var state_32109__$1 = state_32109;
if(cljs.core.truth_(inst_32088)){
var statearr_32118_32180 = state_32109__$1;
(statearr_32118_32180[(1)] = (4));

} else {
var statearr_32119_32184 = state_32109__$1;
(statearr_32119_32184[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (11))){
var inst_32086 = (state_32109[(8)]);
var inst_32096 = (state_32109[(2)]);
var inst_32097 = (inst_32086 + (1));
var inst_32086__$1 = inst_32097;
var state_32109__$1 = (function (){var statearr_32120 = state_32109;
(statearr_32120[(8)] = inst_32086__$1);

(statearr_32120[(10)] = inst_32096);

return statearr_32120;
})();
var statearr_32121_32202 = state_32109__$1;
(statearr_32121_32202[(2)] = null);

(statearr_32121_32202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (9))){
var state_32109__$1 = state_32109;
var statearr_32122_32203 = state_32109__$1;
(statearr_32122_32203[(2)] = null);

(statearr_32122_32203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (5))){
var state_32109__$1 = state_32109;
var statearr_32123_32205 = state_32109__$1;
(statearr_32123_32205[(2)] = null);

(statearr_32123_32205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (10))){
var inst_32101 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
var statearr_32124_32207 = state_32109__$1;
(statearr_32124_32207[(2)] = inst_32101);

(statearr_32124_32207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (8))){
var inst_32091 = (state_32109[(7)]);
var state_32109__$1 = state_32109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32109__$1,(11),out,inst_32091);
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
});})(c__26288__auto___32165,out))
;
return ((function (switch__25578__auto__,c__26288__auto___32165,out){
return (function() {
var cljs$core$async$state_machine__25579__auto__ = null;
var cljs$core$async$state_machine__25579__auto____0 = (function (){
var statearr_32128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32128[(0)] = cljs$core$async$state_machine__25579__auto__);

(statearr_32128[(1)] = (1));

return statearr_32128;
});
var cljs$core$async$state_machine__25579__auto____1 = (function (state_32109){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_32109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e32145){if((e32145 instanceof Object)){
var ex__25582__auto__ = e32145;
var statearr_32151_32213 = state_32109;
(statearr_32151_32213[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32222 = state_32109;
state_32109 = G__32222;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$state_machine__25579__auto__ = function(state_32109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25579__auto____1.call(this,state_32109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25579__auto____0;
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25579__auto____1;
return cljs$core$async$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___32165,out))
})();
var state__26290__auto__ = (function (){var statearr_32157 = f__26289__auto__.call(null);
(statearr_32157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___32165);

return statearr_32157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___32165,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32268 = (function (f,ch,meta32269){
this.f = f;
this.ch = ch;
this.meta32269 = meta32269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32270,meta32269__$1){
var self__ = this;
var _32270__$1 = this;
return (new cljs.core.async.t_cljs$core$async32268(self__.f,self__.ch,meta32269__$1));
});

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32270){
var self__ = this;
var _32270__$1 = this;
return self__.meta32269;
});

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32274 = (function (f,ch,meta32269,_,fn1,meta32275){
this.f = f;
this.ch = ch;
this.meta32269 = meta32269;
this._ = _;
this.fn1 = fn1;
this.meta32275 = meta32275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32276,meta32275__$1){
var self__ = this;
var _32276__$1 = this;
return (new cljs.core.async.t_cljs$core$async32274(self__.f,self__.ch,self__.meta32269,self__._,self__.fn1,meta32275__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32276){
var self__ = this;
var _32276__$1 = this;
return self__.meta32275;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32251_SHARP_){
return f1.call(null,(((p1__32251_SHARP_ == null))?null:self__.f.call(null,p1__32251_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32274.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32269","meta32269",-1059253918,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32268","cljs.core.async/t_cljs$core$async32268",323386391,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32275","meta32275",-1197809956,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32274";

cljs.core.async.t_cljs$core$async32274.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cljs.core.async/t_cljs$core$async32274");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32274 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32274(f__$1,ch__$1,meta32269__$1,___$2,fn1__$1,meta32275){
return (new cljs.core.async.t_cljs$core$async32274(f__$1,ch__$1,meta32269__$1,___$2,fn1__$1,meta32275));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32274(self__.f,self__.ch,self__.meta32269,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22008__auto__ = ret;
if(cljs.core.truth_(and__22008__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22008__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32269","meta32269",-1059253918,null)], null);
});

cljs.core.async.t_cljs$core$async32268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32268";

cljs.core.async.t_cljs$core$async32268.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cljs.core.async/t_cljs$core$async32268");
});

cljs.core.async.__GT_t_cljs$core$async32268 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32268(f__$1,ch__$1,meta32269){
return (new cljs.core.async.t_cljs$core$async32268(f__$1,ch__$1,meta32269));
});

}

return (new cljs.core.async.t_cljs$core$async32268(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32311 = (function (f,ch,meta32312){
this.f = f;
this.ch = ch;
this.meta32312 = meta32312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32313,meta32312__$1){
var self__ = this;
var _32313__$1 = this;
return (new cljs.core.async.t_cljs$core$async32311(self__.f,self__.ch,meta32312__$1));
});

cljs.core.async.t_cljs$core$async32311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32313){
var self__ = this;
var _32313__$1 = this;
return self__.meta32312;
});

cljs.core.async.t_cljs$core$async32311.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32311.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32311.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32312","meta32312",941541995,null)], null);
});

cljs.core.async.t_cljs$core$async32311.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32311";

cljs.core.async.t_cljs$core$async32311.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cljs.core.async/t_cljs$core$async32311");
});

cljs.core.async.__GT_t_cljs$core$async32311 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32311(f__$1,ch__$1,meta32312){
return (new cljs.core.async.t_cljs$core$async32311(f__$1,ch__$1,meta32312));
});

}

return (new cljs.core.async.t_cljs$core$async32311(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32331 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32331 = (function (p,ch,meta32332){
this.p = p;
this.ch = ch;
this.meta32332 = meta32332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32333,meta32332__$1){
var self__ = this;
var _32333__$1 = this;
return (new cljs.core.async.t_cljs$core$async32331(self__.p,self__.ch,meta32332__$1));
});

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32333){
var self__ = this;
var _32333__$1 = this;
return self__.meta32332;
});

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32332","meta32332",1136831492,null)], null);
});

cljs.core.async.t_cljs$core$async32331.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32331";

cljs.core.async.t_cljs$core$async32331.cljs$lang$ctorPrWriter = (function (this__22626__auto__,writer__22627__auto__,opt__22628__auto__){
return cljs.core._write.call(null,writer__22627__auto__,"cljs.core.async/t_cljs$core$async32331");
});

cljs.core.async.__GT_t_cljs$core$async32331 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32331(p__$1,ch__$1,meta32332){
return (new cljs.core.async.t_cljs$core$async32331(p__$1,ch__$1,meta32332));
});

}

return (new cljs.core.async.t_cljs$core$async32331(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32355 = [];
var len__23128__auto___32428 = arguments.length;
var i__23129__auto___32429 = (0);
while(true){
if((i__23129__auto___32429 < len__23128__auto___32428)){
args32355.push((arguments[i__23129__auto___32429]));

var G__32430 = (i__23129__auto___32429 + (1));
i__23129__auto___32429 = G__32430;
continue;
} else {
}
break;
}

var G__32359 = args32355.length;
switch (G__32359) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32355.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26288__auto___32444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___32444,out){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___32444,out){
return (function (state_32398){
var state_val_32399 = (state_32398[(1)]);
if((state_val_32399 === (7))){
var inst_32393 = (state_32398[(2)]);
var state_32398__$1 = state_32398;
var statearr_32400_32445 = state_32398__$1;
(statearr_32400_32445[(2)] = inst_32393);

(statearr_32400_32445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (1))){
var state_32398__$1 = state_32398;
var statearr_32401_32447 = state_32398__$1;
(statearr_32401_32447[(2)] = null);

(statearr_32401_32447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (4))){
var inst_32379 = (state_32398[(7)]);
var inst_32379__$1 = (state_32398[(2)]);
var inst_32380 = (inst_32379__$1 == null);
var state_32398__$1 = (function (){var statearr_32402 = state_32398;
(statearr_32402[(7)] = inst_32379__$1);

return statearr_32402;
})();
if(cljs.core.truth_(inst_32380)){
var statearr_32403_32449 = state_32398__$1;
(statearr_32403_32449[(1)] = (5));

} else {
var statearr_32404_32450 = state_32398__$1;
(statearr_32404_32450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (6))){
var inst_32379 = (state_32398[(7)]);
var inst_32384 = p.call(null,inst_32379);
var state_32398__$1 = state_32398;
if(cljs.core.truth_(inst_32384)){
var statearr_32405_32453 = state_32398__$1;
(statearr_32405_32453[(1)] = (8));

} else {
var statearr_32406_32454 = state_32398__$1;
(statearr_32406_32454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (3))){
var inst_32395 = (state_32398[(2)]);
var state_32398__$1 = state_32398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32398__$1,inst_32395);
} else {
if((state_val_32399 === (2))){
var state_32398__$1 = state_32398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32398__$1,(4),ch);
} else {
if((state_val_32399 === (11))){
var inst_32387 = (state_32398[(2)]);
var state_32398__$1 = state_32398;
var statearr_32408_32459 = state_32398__$1;
(statearr_32408_32459[(2)] = inst_32387);

(statearr_32408_32459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (9))){
var state_32398__$1 = state_32398;
var statearr_32409_32461 = state_32398__$1;
(statearr_32409_32461[(2)] = null);

(statearr_32409_32461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (5))){
var inst_32382 = cljs.core.async.close_BANG_.call(null,out);
var state_32398__$1 = state_32398;
var statearr_32411_32462 = state_32398__$1;
(statearr_32411_32462[(2)] = inst_32382);

(statearr_32411_32462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (10))){
var inst_32390 = (state_32398[(2)]);
var state_32398__$1 = (function (){var statearr_32412 = state_32398;
(statearr_32412[(8)] = inst_32390);

return statearr_32412;
})();
var statearr_32413_32464 = state_32398__$1;
(statearr_32413_32464[(2)] = null);

(statearr_32413_32464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (8))){
var inst_32379 = (state_32398[(7)]);
var state_32398__$1 = state_32398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32398__$1,(11),out,inst_32379);
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
});})(c__26288__auto___32444,out))
;
return ((function (switch__25578__auto__,c__26288__auto___32444,out){
return (function() {
var cljs$core$async$state_machine__25579__auto__ = null;
var cljs$core$async$state_machine__25579__auto____0 = (function (){
var statearr_32421 = [null,null,null,null,null,null,null,null,null];
(statearr_32421[(0)] = cljs$core$async$state_machine__25579__auto__);

(statearr_32421[(1)] = (1));

return statearr_32421;
});
var cljs$core$async$state_machine__25579__auto____1 = (function (state_32398){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_32398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e32422){if((e32422 instanceof Object)){
var ex__25582__auto__ = e32422;
var statearr_32423_32466 = state_32398;
(statearr_32423_32466[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32468 = state_32398;
state_32398 = G__32468;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$state_machine__25579__auto__ = function(state_32398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25579__auto____1.call(this,state_32398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25579__auto____0;
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25579__auto____1;
return cljs$core$async$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___32444,out))
})();
var state__26290__auto__ = (function (){var statearr_32425 = f__26289__auto__.call(null);
(statearr_32425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___32444);

return statearr_32425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___32444,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32472 = [];
var len__23128__auto___32483 = arguments.length;
var i__23129__auto___32484 = (0);
while(true){
if((i__23129__auto___32484 < len__23128__auto___32483)){
args32472.push((arguments[i__23129__auto___32484]));

var G__32486 = (i__23129__auto___32484 + (1));
i__23129__auto___32484 = G__32486;
continue;
} else {
}
break;
}

var G__32478 = args32472.length;
switch (G__32478) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32472.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto__){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto__){
return (function (state_32692){
var state_val_32693 = (state_32692[(1)]);
if((state_val_32693 === (7))){
var inst_32686 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32695_32768 = state_32692__$1;
(statearr_32695_32768[(2)] = inst_32686);

(statearr_32695_32768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (20))){
var inst_32656 = (state_32692[(7)]);
var inst_32667 = (state_32692[(2)]);
var inst_32668 = cljs.core.next.call(null,inst_32656);
var inst_32642 = inst_32668;
var inst_32643 = null;
var inst_32644 = (0);
var inst_32645 = (0);
var state_32692__$1 = (function (){var statearr_32696 = state_32692;
(statearr_32696[(8)] = inst_32667);

(statearr_32696[(9)] = inst_32644);

(statearr_32696[(10)] = inst_32642);

(statearr_32696[(11)] = inst_32645);

(statearr_32696[(12)] = inst_32643);

return statearr_32696;
})();
var statearr_32697_32769 = state_32692__$1;
(statearr_32697_32769[(2)] = null);

(statearr_32697_32769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (1))){
var state_32692__$1 = state_32692;
var statearr_32698_32774 = state_32692__$1;
(statearr_32698_32774[(2)] = null);

(statearr_32698_32774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (4))){
var inst_32631 = (state_32692[(13)]);
var inst_32631__$1 = (state_32692[(2)]);
var inst_32632 = (inst_32631__$1 == null);
var state_32692__$1 = (function (){var statearr_32699 = state_32692;
(statearr_32699[(13)] = inst_32631__$1);

return statearr_32699;
})();
if(cljs.core.truth_(inst_32632)){
var statearr_32700_32782 = state_32692__$1;
(statearr_32700_32782[(1)] = (5));

} else {
var statearr_32701_32783 = state_32692__$1;
(statearr_32701_32783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (15))){
var state_32692__$1 = state_32692;
var statearr_32706_32785 = state_32692__$1;
(statearr_32706_32785[(2)] = null);

(statearr_32706_32785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (21))){
var state_32692__$1 = state_32692;
var statearr_32707_32786 = state_32692__$1;
(statearr_32707_32786[(2)] = null);

(statearr_32707_32786[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (13))){
var inst_32644 = (state_32692[(9)]);
var inst_32642 = (state_32692[(10)]);
var inst_32645 = (state_32692[(11)]);
var inst_32643 = (state_32692[(12)]);
var inst_32652 = (state_32692[(2)]);
var inst_32653 = (inst_32645 + (1));
var tmp32703 = inst_32644;
var tmp32704 = inst_32642;
var tmp32705 = inst_32643;
var inst_32642__$1 = tmp32704;
var inst_32643__$1 = tmp32705;
var inst_32644__$1 = tmp32703;
var inst_32645__$1 = inst_32653;
var state_32692__$1 = (function (){var statearr_32708 = state_32692;
(statearr_32708[(9)] = inst_32644__$1);

(statearr_32708[(14)] = inst_32652);

(statearr_32708[(10)] = inst_32642__$1);

(statearr_32708[(11)] = inst_32645__$1);

(statearr_32708[(12)] = inst_32643__$1);

return statearr_32708;
})();
var statearr_32710_32791 = state_32692__$1;
(statearr_32710_32791[(2)] = null);

(statearr_32710_32791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (22))){
var state_32692__$1 = state_32692;
var statearr_32711_32795 = state_32692__$1;
(statearr_32711_32795[(2)] = null);

(statearr_32711_32795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (6))){
var inst_32631 = (state_32692[(13)]);
var inst_32640 = f.call(null,inst_32631);
var inst_32641 = cljs.core.seq.call(null,inst_32640);
var inst_32642 = inst_32641;
var inst_32643 = null;
var inst_32644 = (0);
var inst_32645 = (0);
var state_32692__$1 = (function (){var statearr_32714 = state_32692;
(statearr_32714[(9)] = inst_32644);

(statearr_32714[(10)] = inst_32642);

(statearr_32714[(11)] = inst_32645);

(statearr_32714[(12)] = inst_32643);

return statearr_32714;
})();
var statearr_32715_32802 = state_32692__$1;
(statearr_32715_32802[(2)] = null);

(statearr_32715_32802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (17))){
var inst_32656 = (state_32692[(7)]);
var inst_32660 = cljs.core.chunk_first.call(null,inst_32656);
var inst_32661 = cljs.core.chunk_rest.call(null,inst_32656);
var inst_32662 = cljs.core.count.call(null,inst_32660);
var inst_32642 = inst_32661;
var inst_32643 = inst_32660;
var inst_32644 = inst_32662;
var inst_32645 = (0);
var state_32692__$1 = (function (){var statearr_32725 = state_32692;
(statearr_32725[(9)] = inst_32644);

(statearr_32725[(10)] = inst_32642);

(statearr_32725[(11)] = inst_32645);

(statearr_32725[(12)] = inst_32643);

return statearr_32725;
})();
var statearr_32727_32810 = state_32692__$1;
(statearr_32727_32810[(2)] = null);

(statearr_32727_32810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (3))){
var inst_32688 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32692__$1,inst_32688);
} else {
if((state_val_32693 === (12))){
var inst_32676 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32728_32814 = state_32692__$1;
(statearr_32728_32814[(2)] = inst_32676);

(statearr_32728_32814[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (2))){
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32692__$1,(4),in$);
} else {
if((state_val_32693 === (23))){
var inst_32684 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32731_32831 = state_32692__$1;
(statearr_32731_32831[(2)] = inst_32684);

(statearr_32731_32831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (19))){
var inst_32671 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32732_32902 = state_32692__$1;
(statearr_32732_32902[(2)] = inst_32671);

(statearr_32732_32902[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (11))){
var inst_32656 = (state_32692[(7)]);
var inst_32642 = (state_32692[(10)]);
var inst_32656__$1 = cljs.core.seq.call(null,inst_32642);
var state_32692__$1 = (function (){var statearr_32733 = state_32692;
(statearr_32733[(7)] = inst_32656__$1);

return statearr_32733;
})();
if(inst_32656__$1){
var statearr_32735_32903 = state_32692__$1;
(statearr_32735_32903[(1)] = (14));

} else {
var statearr_32736_32904 = state_32692__$1;
(statearr_32736_32904[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (9))){
var inst_32678 = (state_32692[(2)]);
var inst_32679 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32692__$1 = (function (){var statearr_32738 = state_32692;
(statearr_32738[(15)] = inst_32678);

return statearr_32738;
})();
if(cljs.core.truth_(inst_32679)){
var statearr_32739_32905 = state_32692__$1;
(statearr_32739_32905[(1)] = (21));

} else {
var statearr_32740_32906 = state_32692__$1;
(statearr_32740_32906[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (5))){
var inst_32634 = cljs.core.async.close_BANG_.call(null,out);
var state_32692__$1 = state_32692;
var statearr_32741_32907 = state_32692__$1;
(statearr_32741_32907[(2)] = inst_32634);

(statearr_32741_32907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (14))){
var inst_32656 = (state_32692[(7)]);
var inst_32658 = cljs.core.chunked_seq_QMARK_.call(null,inst_32656);
var state_32692__$1 = state_32692;
if(inst_32658){
var statearr_32744_32909 = state_32692__$1;
(statearr_32744_32909[(1)] = (17));

} else {
var statearr_32746_32910 = state_32692__$1;
(statearr_32746_32910[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (16))){
var inst_32674 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32747_32911 = state_32692__$1;
(statearr_32747_32911[(2)] = inst_32674);

(statearr_32747_32911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (10))){
var inst_32645 = (state_32692[(11)]);
var inst_32643 = (state_32692[(12)]);
var inst_32650 = cljs.core._nth.call(null,inst_32643,inst_32645);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32692__$1,(13),out,inst_32650);
} else {
if((state_val_32693 === (18))){
var inst_32656 = (state_32692[(7)]);
var inst_32665 = cljs.core.first.call(null,inst_32656);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32692__$1,(20),out,inst_32665);
} else {
if((state_val_32693 === (8))){
var inst_32644 = (state_32692[(9)]);
var inst_32645 = (state_32692[(11)]);
var inst_32647 = (inst_32645 < inst_32644);
var inst_32648 = inst_32647;
var state_32692__$1 = state_32692;
if(cljs.core.truth_(inst_32648)){
var statearr_32749_32919 = state_32692__$1;
(statearr_32749_32919[(1)] = (10));

} else {
var statearr_32750_32920 = state_32692__$1;
(statearr_32750_32920[(1)] = (11));

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
}
}
}
}
}
}
});})(c__26288__auto__))
;
return ((function (switch__25578__auto__,c__26288__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25579__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25579__auto____0 = (function (){
var statearr_32758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32758[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25579__auto__);

(statearr_32758[(1)] = (1));

return statearr_32758;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25579__auto____1 = (function (state_32692){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_32692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e32759){if((e32759 instanceof Object)){
var ex__25582__auto__ = e32759;
var statearr_32760_32926 = state_32692;
(statearr_32760_32926[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32941 = state_32692;
state_32692 = G__32941;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25579__auto__ = function(state_32692){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25579__auto____1.call(this,state_32692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25579__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25579__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto__))
})();
var state__26290__auto__ = (function (){var statearr_32764 = f__26289__auto__.call(null);
(statearr_32764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto__);

return statearr_32764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto__))
);

return c__26288__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32956 = [];
var len__23128__auto___32968 = arguments.length;
var i__23129__auto___32970 = (0);
while(true){
if((i__23129__auto___32970 < len__23128__auto___32968)){
args32956.push((arguments[i__23129__auto___32970]));

var G__32975 = (i__23129__auto___32970 + (1));
i__23129__auto___32970 = G__32975;
continue;
} else {
}
break;
}

var G__32966 = args32956.length;
switch (G__32966) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32956.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32979 = [];
var len__23128__auto___32984 = arguments.length;
var i__23129__auto___32985 = (0);
while(true){
if((i__23129__auto___32985 < len__23128__auto___32984)){
args32979.push((arguments[i__23129__auto___32985]));

var G__32986 = (i__23129__auto___32985 + (1));
i__23129__auto___32985 = G__32986;
continue;
} else {
}
break;
}

var G__32981 = args32979.length;
switch (G__32981) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32979.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32999 = [];
var len__23128__auto___33064 = arguments.length;
var i__23129__auto___33065 = (0);
while(true){
if((i__23129__auto___33065 < len__23128__auto___33064)){
args32999.push((arguments[i__23129__auto___33065]));

var G__33066 = (i__23129__auto___33065 + (1));
i__23129__auto___33065 = G__33066;
continue;
} else {
}
break;
}

var G__33002 = args32999.length;
switch (G__33002) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32999.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26288__auto___33074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___33074,out){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___33074,out){
return (function (state_33028){
var state_val_33029 = (state_33028[(1)]);
if((state_val_33029 === (7))){
var inst_33021 = (state_33028[(2)]);
var state_33028__$1 = state_33028;
var statearr_33031_33079 = state_33028__$1;
(statearr_33031_33079[(2)] = inst_33021);

(statearr_33031_33079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33029 === (1))){
var inst_33003 = null;
var state_33028__$1 = (function (){var statearr_33032 = state_33028;
(statearr_33032[(7)] = inst_33003);

return statearr_33032;
})();
var statearr_33033_33081 = state_33028__$1;
(statearr_33033_33081[(2)] = null);

(statearr_33033_33081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33029 === (4))){
var inst_33006 = (state_33028[(8)]);
var inst_33006__$1 = (state_33028[(2)]);
var inst_33007 = (inst_33006__$1 == null);
var inst_33008 = cljs.core.not.call(null,inst_33007);
var state_33028__$1 = (function (){var statearr_33034 = state_33028;
(statearr_33034[(8)] = inst_33006__$1);

return statearr_33034;
})();
if(inst_33008){
var statearr_33035_33091 = state_33028__$1;
(statearr_33035_33091[(1)] = (5));

} else {
var statearr_33036_33093 = state_33028__$1;
(statearr_33036_33093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33029 === (6))){
var state_33028__$1 = state_33028;
var statearr_33037_33096 = state_33028__$1;
(statearr_33037_33096[(2)] = null);

(statearr_33037_33096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33029 === (3))){
var inst_33023 = (state_33028[(2)]);
var inst_33024 = cljs.core.async.close_BANG_.call(null,out);
var state_33028__$1 = (function (){var statearr_33038 = state_33028;
(statearr_33038[(9)] = inst_33023);

return statearr_33038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33028__$1,inst_33024);
} else {
if((state_val_33029 === (2))){
var state_33028__$1 = state_33028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33028__$1,(4),ch);
} else {
if((state_val_33029 === (11))){
var inst_33006 = (state_33028[(8)]);
var inst_33015 = (state_33028[(2)]);
var inst_33003 = inst_33006;
var state_33028__$1 = (function (){var statearr_33040 = state_33028;
(statearr_33040[(7)] = inst_33003);

(statearr_33040[(10)] = inst_33015);

return statearr_33040;
})();
var statearr_33042_33106 = state_33028__$1;
(statearr_33042_33106[(2)] = null);

(statearr_33042_33106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33029 === (9))){
var inst_33006 = (state_33028[(8)]);
var state_33028__$1 = state_33028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33028__$1,(11),out,inst_33006);
} else {
if((state_val_33029 === (5))){
var inst_33006 = (state_33028[(8)]);
var inst_33003 = (state_33028[(7)]);
var inst_33010 = cljs.core._EQ_.call(null,inst_33006,inst_33003);
var state_33028__$1 = state_33028;
if(inst_33010){
var statearr_33047_33135 = state_33028__$1;
(statearr_33047_33135[(1)] = (8));

} else {
var statearr_33048_33137 = state_33028__$1;
(statearr_33048_33137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33029 === (10))){
var inst_33018 = (state_33028[(2)]);
var state_33028__$1 = state_33028;
var statearr_33049_33138 = state_33028__$1;
(statearr_33049_33138[(2)] = inst_33018);

(statearr_33049_33138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33029 === (8))){
var inst_33003 = (state_33028[(7)]);
var tmp33045 = inst_33003;
var inst_33003__$1 = tmp33045;
var state_33028__$1 = (function (){var statearr_33050 = state_33028;
(statearr_33050[(7)] = inst_33003__$1);

return statearr_33050;
})();
var statearr_33051_33140 = state_33028__$1;
(statearr_33051_33140[(2)] = null);

(statearr_33051_33140[(1)] = (2));


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
});})(c__26288__auto___33074,out))
;
return ((function (switch__25578__auto__,c__26288__auto___33074,out){
return (function() {
var cljs$core$async$state_machine__25579__auto__ = null;
var cljs$core$async$state_machine__25579__auto____0 = (function (){
var statearr_33059 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33059[(0)] = cljs$core$async$state_machine__25579__auto__);

(statearr_33059[(1)] = (1));

return statearr_33059;
});
var cljs$core$async$state_machine__25579__auto____1 = (function (state_33028){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_33028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e33060){if((e33060 instanceof Object)){
var ex__25582__auto__ = e33060;
var statearr_33061_33144 = state_33028;
(statearr_33061_33144[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33146 = state_33028;
state_33028 = G__33146;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$state_machine__25579__auto__ = function(state_33028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25579__auto____1.call(this,state_33028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25579__auto____0;
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25579__auto____1;
return cljs$core$async$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___33074,out))
})();
var state__26290__auto__ = (function (){var statearr_33062 = f__26289__auto__.call(null);
(statearr_33062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___33074);

return statearr_33062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___33074,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33151 = [];
var len__23128__auto___33250 = arguments.length;
var i__23129__auto___33251 = (0);
while(true){
if((i__23129__auto___33251 < len__23128__auto___33250)){
args33151.push((arguments[i__23129__auto___33251]));

var G__33254 = (i__23129__auto___33251 + (1));
i__23129__auto___33251 = G__33254;
continue;
} else {
}
break;
}

var G__33160 = args33151.length;
switch (G__33160) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33151.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26288__auto___33262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___33262,out){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___33262,out){
return (function (state_33205){
var state_val_33206 = (state_33205[(1)]);
if((state_val_33206 === (7))){
var inst_33199 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33209_33266 = state_33205__$1;
(statearr_33209_33266[(2)] = inst_33199);

(statearr_33209_33266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (1))){
var inst_33166 = (new Array(n));
var inst_33167 = inst_33166;
var inst_33168 = (0);
var state_33205__$1 = (function (){var statearr_33210 = state_33205;
(statearr_33210[(7)] = inst_33167);

(statearr_33210[(8)] = inst_33168);

return statearr_33210;
})();
var statearr_33212_33269 = state_33205__$1;
(statearr_33212_33269[(2)] = null);

(statearr_33212_33269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (4))){
var inst_33171 = (state_33205[(9)]);
var inst_33171__$1 = (state_33205[(2)]);
var inst_33172 = (inst_33171__$1 == null);
var inst_33173 = cljs.core.not.call(null,inst_33172);
var state_33205__$1 = (function (){var statearr_33213 = state_33205;
(statearr_33213[(9)] = inst_33171__$1);

return statearr_33213;
})();
if(inst_33173){
var statearr_33214_33283 = state_33205__$1;
(statearr_33214_33283[(1)] = (5));

} else {
var statearr_33215_33285 = state_33205__$1;
(statearr_33215_33285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (15))){
var inst_33193 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33217_33294 = state_33205__$1;
(statearr_33217_33294[(2)] = inst_33193);

(statearr_33217_33294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (13))){
var state_33205__$1 = state_33205;
var statearr_33219_33303 = state_33205__$1;
(statearr_33219_33303[(2)] = null);

(statearr_33219_33303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (6))){
var inst_33168 = (state_33205[(8)]);
var inst_33189 = (inst_33168 > (0));
var state_33205__$1 = state_33205;
if(cljs.core.truth_(inst_33189)){
var statearr_33220_33307 = state_33205__$1;
(statearr_33220_33307[(1)] = (12));

} else {
var statearr_33221_33308 = state_33205__$1;
(statearr_33221_33308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (3))){
var inst_33201 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33205__$1,inst_33201);
} else {
if((state_val_33206 === (12))){
var inst_33167 = (state_33205[(7)]);
var inst_33191 = cljs.core.vec.call(null,inst_33167);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33205__$1,(15),out,inst_33191);
} else {
if((state_val_33206 === (2))){
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33205__$1,(4),ch);
} else {
if((state_val_33206 === (11))){
var inst_33183 = (state_33205[(2)]);
var inst_33184 = (new Array(n));
var inst_33167 = inst_33184;
var inst_33168 = (0);
var state_33205__$1 = (function (){var statearr_33224 = state_33205;
(statearr_33224[(10)] = inst_33183);

(statearr_33224[(7)] = inst_33167);

(statearr_33224[(8)] = inst_33168);

return statearr_33224;
})();
var statearr_33225_33346 = state_33205__$1;
(statearr_33225_33346[(2)] = null);

(statearr_33225_33346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (9))){
var inst_33167 = (state_33205[(7)]);
var inst_33181 = cljs.core.vec.call(null,inst_33167);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33205__$1,(11),out,inst_33181);
} else {
if((state_val_33206 === (5))){
var inst_33176 = (state_33205[(11)]);
var inst_33167 = (state_33205[(7)]);
var inst_33171 = (state_33205[(9)]);
var inst_33168 = (state_33205[(8)]);
var inst_33175 = (inst_33167[inst_33168] = inst_33171);
var inst_33176__$1 = (inst_33168 + (1));
var inst_33177 = (inst_33176__$1 < n);
var state_33205__$1 = (function (){var statearr_33230 = state_33205;
(statearr_33230[(11)] = inst_33176__$1);

(statearr_33230[(12)] = inst_33175);

return statearr_33230;
})();
if(cljs.core.truth_(inst_33177)){
var statearr_33232_33360 = state_33205__$1;
(statearr_33232_33360[(1)] = (8));

} else {
var statearr_33233_33365 = state_33205__$1;
(statearr_33233_33365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (14))){
var inst_33196 = (state_33205[(2)]);
var inst_33197 = cljs.core.async.close_BANG_.call(null,out);
var state_33205__$1 = (function (){var statearr_33235 = state_33205;
(statearr_33235[(13)] = inst_33196);

return statearr_33235;
})();
var statearr_33236_33368 = state_33205__$1;
(statearr_33236_33368[(2)] = inst_33197);

(statearr_33236_33368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (10))){
var inst_33187 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33237_33370 = state_33205__$1;
(statearr_33237_33370[(2)] = inst_33187);

(statearr_33237_33370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (8))){
var inst_33176 = (state_33205[(11)]);
var inst_33167 = (state_33205[(7)]);
var tmp33234 = inst_33167;
var inst_33167__$1 = tmp33234;
var inst_33168 = inst_33176;
var state_33205__$1 = (function (){var statearr_33238 = state_33205;
(statearr_33238[(7)] = inst_33167__$1);

(statearr_33238[(8)] = inst_33168);

return statearr_33238;
})();
var statearr_33239_33373 = state_33205__$1;
(statearr_33239_33373[(2)] = null);

(statearr_33239_33373[(1)] = (2));


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
});})(c__26288__auto___33262,out))
;
return ((function (switch__25578__auto__,c__26288__auto___33262,out){
return (function() {
var cljs$core$async$state_machine__25579__auto__ = null;
var cljs$core$async$state_machine__25579__auto____0 = (function (){
var statearr_33244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33244[(0)] = cljs$core$async$state_machine__25579__auto__);

(statearr_33244[(1)] = (1));

return statearr_33244;
});
var cljs$core$async$state_machine__25579__auto____1 = (function (state_33205){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_33205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e33245){if((e33245 instanceof Object)){
var ex__25582__auto__ = e33245;
var statearr_33246_33378 = state_33205;
(statearr_33246_33378[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33380 = state_33205;
state_33205 = G__33380;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$state_machine__25579__auto__ = function(state_33205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25579__auto____1.call(this,state_33205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25579__auto____0;
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25579__auto____1;
return cljs$core$async$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___33262,out))
})();
var state__26290__auto__ = (function (){var statearr_33247 = f__26289__auto__.call(null);
(statearr_33247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___33262);

return statearr_33247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___33262,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33390 = [];
var len__23128__auto___33503 = arguments.length;
var i__23129__auto___33505 = (0);
while(true){
if((i__23129__auto___33505 < len__23128__auto___33503)){
args33390.push((arguments[i__23129__auto___33505]));

var G__33508 = (i__23129__auto___33505 + (1));
i__23129__auto___33505 = G__33508;
continue;
} else {
}
break;
}

var G__33392 = args33390.length;
switch (G__33392) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33390.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26288__auto___33520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___33520,out){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___33520,out){
return (function (state_33443){
var state_val_33444 = (state_33443[(1)]);
if((state_val_33444 === (7))){
var inst_33437 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33460_33521 = state_33443__$1;
(statearr_33460_33521[(2)] = inst_33437);

(statearr_33460_33521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (1))){
var inst_33395 = [];
var inst_33396 = inst_33395;
var inst_33397 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33443__$1 = (function (){var statearr_33463 = state_33443;
(statearr_33463[(7)] = inst_33396);

(statearr_33463[(8)] = inst_33397);

return statearr_33463;
})();
var statearr_33464_33530 = state_33443__$1;
(statearr_33464_33530[(2)] = null);

(statearr_33464_33530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (4))){
var inst_33400 = (state_33443[(9)]);
var inst_33400__$1 = (state_33443[(2)]);
var inst_33402 = (inst_33400__$1 == null);
var inst_33403 = cljs.core.not.call(null,inst_33402);
var state_33443__$1 = (function (){var statearr_33465 = state_33443;
(statearr_33465[(9)] = inst_33400__$1);

return statearr_33465;
})();
if(inst_33403){
var statearr_33468_33541 = state_33443__$1;
(statearr_33468_33541[(1)] = (5));

} else {
var statearr_33469_33542 = state_33443__$1;
(statearr_33469_33542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (15))){
var inst_33430 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33470_33550 = state_33443__$1;
(statearr_33470_33550[(2)] = inst_33430);

(statearr_33470_33550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (13))){
var state_33443__$1 = state_33443;
var statearr_33471_33558 = state_33443__$1;
(statearr_33471_33558[(2)] = null);

(statearr_33471_33558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (6))){
var inst_33396 = (state_33443[(7)]);
var inst_33425 = inst_33396.length;
var inst_33426 = (inst_33425 > (0));
var state_33443__$1 = state_33443;
if(cljs.core.truth_(inst_33426)){
var statearr_33473_33565 = state_33443__$1;
(statearr_33473_33565[(1)] = (12));

} else {
var statearr_33475_33566 = state_33443__$1;
(statearr_33475_33566[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (3))){
var inst_33439 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33443__$1,inst_33439);
} else {
if((state_val_33444 === (12))){
var inst_33396 = (state_33443[(7)]);
var inst_33428 = cljs.core.vec.call(null,inst_33396);
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33443__$1,(15),out,inst_33428);
} else {
if((state_val_33444 === (2))){
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33443__$1,(4),ch);
} else {
if((state_val_33444 === (11))){
var inst_33406 = (state_33443[(10)]);
var inst_33400 = (state_33443[(9)]);
var inst_33416 = (state_33443[(2)]);
var inst_33417 = [];
var inst_33418 = inst_33417.push(inst_33400);
var inst_33396 = inst_33417;
var inst_33397 = inst_33406;
var state_33443__$1 = (function (){var statearr_33478 = state_33443;
(statearr_33478[(7)] = inst_33396);

(statearr_33478[(11)] = inst_33418);

(statearr_33478[(8)] = inst_33397);

(statearr_33478[(12)] = inst_33416);

return statearr_33478;
})();
var statearr_33479_33572 = state_33443__$1;
(statearr_33479_33572[(2)] = null);

(statearr_33479_33572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (9))){
var inst_33396 = (state_33443[(7)]);
var inst_33414 = cljs.core.vec.call(null,inst_33396);
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33443__$1,(11),out,inst_33414);
} else {
if((state_val_33444 === (5))){
var inst_33406 = (state_33443[(10)]);
var inst_33400 = (state_33443[(9)]);
var inst_33397 = (state_33443[(8)]);
var inst_33406__$1 = f.call(null,inst_33400);
var inst_33407 = cljs.core._EQ_.call(null,inst_33406__$1,inst_33397);
var inst_33408 = cljs.core.keyword_identical_QMARK_.call(null,inst_33397,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33409 = (inst_33407) || (inst_33408);
var state_33443__$1 = (function (){var statearr_33481 = state_33443;
(statearr_33481[(10)] = inst_33406__$1);

return statearr_33481;
})();
if(cljs.core.truth_(inst_33409)){
var statearr_33482_33643 = state_33443__$1;
(statearr_33482_33643[(1)] = (8));

} else {
var statearr_33483_33644 = state_33443__$1;
(statearr_33483_33644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (14))){
var inst_33434 = (state_33443[(2)]);
var inst_33435 = cljs.core.async.close_BANG_.call(null,out);
var state_33443__$1 = (function (){var statearr_33485 = state_33443;
(statearr_33485[(13)] = inst_33434);

return statearr_33485;
})();
var statearr_33486_33648 = state_33443__$1;
(statearr_33486_33648[(2)] = inst_33435);

(statearr_33486_33648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (10))){
var inst_33421 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33491_33650 = state_33443__$1;
(statearr_33491_33650[(2)] = inst_33421);

(statearr_33491_33650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (8))){
var inst_33396 = (state_33443[(7)]);
var inst_33406 = (state_33443[(10)]);
var inst_33400 = (state_33443[(9)]);
var inst_33411 = inst_33396.push(inst_33400);
var tmp33484 = inst_33396;
var inst_33396__$1 = tmp33484;
var inst_33397 = inst_33406;
var state_33443__$1 = (function (){var statearr_33492 = state_33443;
(statearr_33492[(7)] = inst_33396__$1);

(statearr_33492[(14)] = inst_33411);

(statearr_33492[(8)] = inst_33397);

return statearr_33492;
})();
var statearr_33494_33656 = state_33443__$1;
(statearr_33494_33656[(2)] = null);

(statearr_33494_33656[(1)] = (2));


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
});})(c__26288__auto___33520,out))
;
return ((function (switch__25578__auto__,c__26288__auto___33520,out){
return (function() {
var cljs$core$async$state_machine__25579__auto__ = null;
var cljs$core$async$state_machine__25579__auto____0 = (function (){
var statearr_33498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33498[(0)] = cljs$core$async$state_machine__25579__auto__);

(statearr_33498[(1)] = (1));

return statearr_33498;
});
var cljs$core$async$state_machine__25579__auto____1 = (function (state_33443){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_33443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e33499){if((e33499 instanceof Object)){
var ex__25582__auto__ = e33499;
var statearr_33500_33662 = state_33443;
(statearr_33500_33662[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33663 = state_33443;
state_33443 = G__33663;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
cljs$core$async$state_machine__25579__auto__ = function(state_33443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25579__auto____1.call(this,state_33443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25579__auto____0;
cljs$core$async$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25579__auto____1;
return cljs$core$async$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___33520,out))
})();
var state__26290__auto__ = (function (){var statearr_33502 = f__26289__auto__.call(null);
(statearr_33502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___33520);

return statearr_33502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___33520,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map