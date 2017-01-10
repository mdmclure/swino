// Compiled by ClojureScript 1.9.293 {}
goog.provide('print.foo');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
/**
 * Turns any one binding arg (which may be a destructuring binding) into a vector
 *   where the left elem is the arg with a possible :as added to it.
 *   And the rght side is the symbol referring to the arg itself.
 */
print.foo.single_destructuring_arg__GT_form_PLUS_name = (function print$foo$single_destructuring_arg__GT_form_PLUS_name(arg_form){
var as_symbol = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"symbol-for-destructured-arg","symbol-for-destructured-arg",-470881179,null));
var snd_to_last_is_as_QMARK_ = ((function (as_symbol){
return (function (p1__35482_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.second.call(null,cljs.core.reverse.call(null,p1__35482_SHARP_)));
});})(as_symbol))
;
if(cljs.core.truth_((function (){var and__22008__auto__ = cljs.core.vector_QMARK_.call(null,arg_form);
if(and__22008__auto__){
return snd_to_last_is_as_QMARK_.call(null,arg_form);
} else {
return and__22008__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_form,cljs.core.last.call(null,arg_form)], null);
} else {
if(cljs.core.vector_QMARK_.call(null,arg_form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,cljs.core.conj.call(null,arg_form,new cljs.core.Keyword(null,"as","as",1148689641)),as_symbol),as_symbol], null);
} else {
if((cljs.core.map_QMARK_.call(null,arg_form)) && (cljs.core.contains_QMARK_.call(null,arg_form,new cljs.core.Keyword(null,"as","as",1148689641)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_form,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg_form)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg_form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,arg_form,new cljs.core.Keyword(null,"as","as",1148689641),as_symbol),as_symbol], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_form,arg_form], null);

}
}
}
}
});
print.foo.expand_arg = (function print$foo$expand_arg(arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
return cljs.core.first.call(null,print.foo.single_destructuring_arg__GT_form_PLUS_name.call(null,arg));
}
});
/**
 * Diagnostic tool for printing the result of evaluating an s-expression.
 * Any initial args over 1, are printed as strings, and generally used as a label.
 */
print.foo.print_and_return = (function print$foo$print_and_return(var_args){
var args__23135__auto__ = [];
var len__23128__auto___35529 = arguments.length;
var i__23129__auto___35531 = (0);
while(true){
if((i__23129__auto___35531 < len__23128__auto___35529)){
args__23135__auto__.push((arguments[i__23129__auto___35531]));

var G__35532 = (i__23129__auto___35531 + (1));
i__23129__auto___35531 = G__35532;
continue;
} else {
}
break;
}

var argseq__23136__auto__ = ((((0) < args__23135__auto__.length))?(new cljs.core.IndexedSeq(args__23135__auto__.slice((0)),(0),null)):null);
return print.foo.print_and_return.cljs$core$IFn$_invoke$arity$variadic(argseq__23136__auto__);
});

print.foo.print_and_return.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
if(cljs.core.seq.call(null,cljs.core.butlast.call(null,xs))){
cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.butlast.call(null,xs)));
} else {
}

cljs.pprint.pprint.call(null,cljs.core.last.call(null,xs));

return cljs.core.last.call(null,xs);
});

print.foo.print_and_return.cljs$lang$maxFixedArity = (0);

print.foo.print_and_return.cljs$lang$applyTo = (function (seq35517){
return print.foo.print_and_return.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35517));
});

/**
 * Quicker-to-type version of `print-and-return` with " *** " appended to the front
 */
print.foo.tap = cljs.core.partial.call(null,print.foo.print_and_return," *** ");
print.foo.resolves_to_fn_QMARK_ = (function print$foo$resolves_to_fn_QMARK_(x){
return true;
});
if(typeof print.foo.parse_item !== 'undefined'){
} else {
print.foo.parse_item = (function (){var method_table__22948__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22949__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22950__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22951__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22952__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"print.foo","parse-item"),((function (method_table__22948__auto__,prefer_table__22949__auto__,method_cache__22950__auto__,cached_hierarchy__22951__auto__,hierarchy__22952__auto__){
return (function (x){
if(cljs.core.list_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((x instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,print.foo.resolves_to_fn_QMARK_.call(null,x)))){
return new cljs.core.Keyword(null,"sym","sym",-1444860305);
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
});})(method_table__22948__auto__,prefer_table__22949__auto__,method_cache__22950__auto__,cached_hierarchy__22951__auto__,hierarchy__22952__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22952__auto__,method_table__22948__auto__,prefer_table__22949__auto__,method_cache__22950__auto__,cached_hierarchy__22951__auto__));
})();
}
if(typeof print.foo.parse_list !== 'undefined'){
} else {
print.foo.parse_list = (function (){var method_table__22948__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22949__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22950__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22951__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22952__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"print.foo","parse-list"),((function (method_table__22948__auto__,prefer_table__22949__auto__,method_cache__22950__auto__,cached_hierarchy__22951__auto__,hierarchy__22952__auto__){
return (function (p__35596){
var vec__35597 = p__35596;
var seq__35598 = cljs.core.seq.call(null,vec__35597);
var first__35599 = cljs.core.first.call(null,seq__35598);
var seq__35598__$1 = cljs.core.next.call(null,seq__35598);
var sym = first__35599;
var _ = seq__35598__$1;
return sym;
});})(method_table__22948__auto__,prefer_table__22949__auto__,method_cache__22950__auto__,cached_hierarchy__22951__auto__,hierarchy__22952__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22952__auto__,method_table__22948__auto__,prefer_table__22949__auto__,method_cache__22950__auto__,cached_hierarchy__22951__auto__));
})();
}
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"list","list",765357683),(function (lst){
return print.foo.parse_list.call(null,lst);
}));
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (v){
return cljs.core.into.call(null,cljs.core.empty.call(null,v),cljs.core.map.call(null,print.foo.parse_item,v));
}));
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"set","set",304602554),(function (s){
return cljs.core.into.call(null,cljs.core.empty.call(null,s),cljs.core.map.call(null,print.foo.parse_item,s));
}));
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"map","map",1371690461),(function (m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),(function (){var iter__22803__auto__ = (function print$foo$iter__35604(s__35605){
return (new cljs.core.LazySeq(null,(function (){
var s__35605__$1 = s__35605;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35605__$1);
if(temp__4657__auto__){
var s__35605__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35605__$2)){
var c__22801__auto__ = cljs.core.chunk_first.call(null,s__35605__$2);
var size__22802__auto__ = cljs.core.count.call(null,c__22801__auto__);
var b__35607 = cljs.core.chunk_buffer.call(null,size__22802__auto__);
if((function (){var i__35606 = (0);
while(true){
if((i__35606 < size__22802__auto__)){
var vec__35614 = cljs.core._nth.call(null,c__22801__auto__,i__35606);
var k = cljs.core.nth.call(null,vec__35614,(0),null);
var v = cljs.core.nth.call(null,vec__35614,(1),null);
cljs.core.chunk_append.call(null,b__35607,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [print.foo.parse_item.call(null,k),print.foo.parse_item.call(null,v)], null));

var G__35660 = (i__35606 + (1));
i__35606 = G__35660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35607),print$foo$iter__35604.call(null,cljs.core.chunk_rest.call(null,s__35605__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35607),null);
}
} else {
var vec__35618 = cljs.core.first.call(null,s__35605__$2);
var k = cljs.core.nth.call(null,vec__35618,(0),null);
var v = cljs.core.nth.call(null,vec__35618,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [print.foo.parse_item.call(null,k),print.foo.parse_item.call(null,v)], null),print$foo$iter__35604.call(null,cljs.core.rest.call(null,s__35605__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22803__auto__.call(null,m);
})());
}));
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"sym","sym",-1444860305),(function (s){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","print-and-return","print.foo/print-and-return",-439645733,null)),(function (){var x__22857__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__22857__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),(function (){var x__22857__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})())));
}));
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return x;
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"->","->",-2139605430,null),(function (p__35716){
var vec__35717 = p__35716;
var seq__35718 = cljs.core.seq.call(null,vec__35717);
var first__35719 = cljs.core.first.call(null,seq__35718);
var seq__35718__$1 = cljs.core.next.call(null,seq__35718);
var _ = first__35719;
var args = seq__35718__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","print->","print.foo/print->",-1561919828,null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"->>","->>",-1874332161,null),(function (p__35724){
var vec__35725 = p__35724;
var seq__35726 = cljs.core.seq.call(null,vec__35725);
var first__35727 = cljs.core.first.call(null,seq__35726);
var seq__35726__$1 = cljs.core.next.call(null,seq__35726);
var _ = first__35727;
var args = seq__35726__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","print->>","print.foo/print->>",18105645,null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"cond->","cond->",561741875,null),(function (p__35738){
var vec__35739 = p__35738;
var seq__35740 = cljs.core.seq.call(null,vec__35739);
var first__35741 = cljs.core.first.call(null,seq__35740);
var seq__35740__$1 = cljs.core.next.call(null,seq__35740);
var _ = first__35741;
var args = seq__35740__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","print-cond->","print.foo/print-cond->",1299792964,null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null),(function (p__35745){
var vec__35746 = p__35745;
var seq__35747 = cljs.core.seq.call(null,vec__35746);
var first__35748 = cljs.core.first.call(null,seq__35747);
var seq__35747__$1 = cljs.core.next.call(null,seq__35747);
var _ = first__35748;
var args = seq__35747__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","print-cond->>","print.foo/print-cond->>",1988528225,null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"let","let",358118826,null),(function (p__35752){
var vec__35753 = p__35752;
var seq__35754 = cljs.core.seq.call(null,vec__35753);
var first__35755 = cljs.core.first.call(null,seq__35754);
var seq__35754__$1 = cljs.core.next.call(null,seq__35754);
var _ = first__35755;
var vec__35756 = seq__35754__$1;
var seq__35757 = cljs.core.seq.call(null,vec__35756);
var first__35758 = cljs.core.first.call(null,seq__35757);
var seq__35757__$1 = cljs.core.next.call(null,seq__35757);
var bindings = first__35758;
var body = seq__35757__$1;
var bdg_names = cljs.core.take_nth.call(null,(2),bindings);
var bdg_vals = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,bindings));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","print-let","print.foo/print-let",202687074,null)),(function (){var x__22857__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bdg_names,cljs.core.map.call(null,print.foo.parse_item,bdg_vals)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),cljs.core.map.call(null,print.foo.parse_item,body))));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (p__35773){
var vec__35774 = p__35773;
var seq__35775 = cljs.core.seq.call(null,vec__35774);
var first__35776 = cljs.core.first.call(null,seq__35775);
var seq__35775__$1 = cljs.core.next.call(null,seq__35775);
var _ = first__35776;
var args = seq__35775__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","print-if","print.foo/print-if",1068606534,null)),cljs.core.map.call(null,print.foo.parse_item,args))));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"cond","cond",1606708055,null),(function (p__35789){
var vec__35790 = p__35789;
var seq__35791 = cljs.core.seq.call(null,vec__35790);
var first__35792 = cljs.core.first.call(null,seq__35791);
var seq__35791__$1 = cljs.core.next.call(null,seq__35791);
var _ = first__35792;
var args = seq__35791__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core.map.call(null,print.foo.parse_item,args))));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"defn","defn",-126010802,null),(function (p__35844){
var vec__35845 = p__35844;
var seq__35846 = cljs.core.seq.call(null,vec__35845);
var first__35847 = cljs.core.first.call(null,seq__35846);
var seq__35846__$1 = cljs.core.next.call(null,seq__35846);
var _ = first__35847;
var args = seq__35846__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","print-defn","print.foo/print-defn",848552547,null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),(function (p__35858){
var vec__35859 = p__35858;
var seq__35860 = cljs.core.seq.call(null,vec__35859);
var first__35861 = cljs.core.first.call(null,seq__35860);
var seq__35860__$1 = cljs.core.next.call(null,seq__35860);
var _ = first__35861;
var args = seq__35860__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","print-defn-","print.foo/print-defn-",1412715370,null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35868){
var vec__35869 = p__35868;
var seq__35870 = cljs.core.seq.call(null,vec__35869);
var first__35871 = cljs.core.first.call(null,seq__35870);
var seq__35870__$1 = cljs.core.next.call(null,seq__35870);
var sym = first__35871;
var args = seq__35870__$1;
var l = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),args);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","print-and-return","print.foo/print-and-return",-439645733,null)),(function (){var x__22857__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__22857__auto__ = l;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),(function (){var x__22857__auto__ = cljs.core.map.call(null,((function (l,vec__35869,seq__35870,first__35871,seq__35870__$1,sym,args){
return (function (idx,x){
if((idx === (0))){
return x;
} else {
return print.foo.parse_item.call(null,x);
}
});})(l,vec__35869,seq__35870,first__35871,seq__35870__$1,sym,args))
,cljs.core.range.call(null),l);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})())));
}));
print.foo.get_miliseconds = (function print$foo$get_miliseconds(){
return (new Date()).getMilliseconds();
});
print.foo.wrap_middleware_debugging = (function print$foo$wrap_middleware_debugging(handler,middleware_name,p__35928){
var map__35942 = p__35928;
var map__35942__$1 = ((((!((map__35942 == null)))?((((map__35942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35942):map__35942);
var get_in = cljs.core.get.call(null,map__35942__$1,new cljs.core.Keyword(null,"get-in","get-in",688791704),cljs.core.PersistentVector.EMPTY);
var summarize_QMARK_ = cljs.core.get.call(null,map__35942__$1,new cljs.core.Keyword(null,"summarize?","summarize?",829177006),true);
var timings_QMARK_ = cljs.core.get.call(null,map__35942__$1,new cljs.core.Keyword(null,"timings?","timings?",-1773054946),false);
return ((function (map__35942,map__35942__$1,get_in,summarize_QMARK_,timings_QMARK_){
return (function (request){
print.foo.print_and_return.call(null,[cljs.core.str("REQUEST - GOING INTO: "),cljs.core.str(middleware_name)].join(''));

print.foo.print_and_return.call(null,cljs.core.get_in.call(null,request,get_in));

var start = print.foo.get_miliseconds.call(null);
var result = handler.call(null,request);
var end = print.foo.get_miliseconds.call(null);
var result__$1 = (function (){var G__35947 = result;
if(cljs.core.truth_(timings_QMARK_)){
return cljs.core.update_in.call(null,G__35947,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print.foo","timings","print.foo/timings",17857736)], null),((function (G__35947,start,result,end,map__35942,map__35942__$1,get_in,summarize_QMARK_,timings_QMARK_){
return (function (p1__35925_SHARP_){
return cljs.core.conj.call(null,(function (){var or__22020__auto__ = p1__35925_SHARP_;
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"middleware","middleware",1462115504),middleware_name,new cljs.core.Keyword(null,"middleware-elapsed","middleware-elapsed",700303951),(end - start)], null));
});})(G__35947,start,result,end,map__35942,map__35942__$1,get_in,summarize_QMARK_,timings_QMARK_))
);
} else {
return G__35947;
}
})();
print.foo.print_and_return.call(null,[cljs.core.str("RESPONSE - COMING OUT OF: "),cljs.core.str(middleware_name)].join(''));

print.foo.print_and_return.call(null,cljs.core.get_in.call(null,result__$1,get_in));

if(cljs.core.truth_((function (){var and__22008__auto__ = timings_QMARK_;
if(cljs.core.truth_(and__22008__auto__)){
return summarize_QMARK_;
} else {
return and__22008__auto__;
}
})())){
print.foo.print_and_return.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"middleware-timings","middleware-timings",1251383063),new cljs.core.Keyword("print.foo","timings","print.foo/timings",17857736).cljs$core$IFn$_invoke$arity$1(result__$1)], null));

return cljs.core.dissoc.call(null,result__$1,new cljs.core.Keyword("print.foo","timings","print.foo/timings",17857736));
} else {
return result__$1;
}
});
;})(map__35942,map__35942__$1,get_in,summarize_QMARK_,timings_QMARK_))
});
print.foo.interleave_middlewares = (function print$foo$interleave_middlewares(handler,middlewares,p__36009){
var map__36134 = p__36009;
var map__36134__$1 = ((((!((map__36134 == null)))?((((map__36134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36134):map__36134);
var get_in = cljs.core.get.call(null,map__36134__$1,new cljs.core.Keyword(null,"get-in","get-in",688791704),cljs.core.PersistentVector.EMPTY);
var timings_QMARK_ = cljs.core.get.call(null,map__36134__$1,new cljs.core.Keyword(null,"timings?","timings?",-1773054946),false);
var summarize_QMARK__determinations = cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,(cljs.core.count.call(null,middlewares) - (1)),false)),true);
var mw_names = cljs.core.map.call(null,cljs.core.str,middlewares);
var logging_mws = (function (){var iter__22803__auto__ = ((function (summarize_QMARK__determinations,mw_names,map__36134,map__36134__$1,get_in,timings_QMARK_){
return (function print$foo$interleave_middlewares_$_iter__36137(s__36138){
return (new cljs.core.LazySeq(null,((function (summarize_QMARK__determinations,mw_names,map__36134,map__36134__$1,get_in,timings_QMARK_){
return (function (){
var s__36138__$1 = s__36138;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36138__$1);
if(temp__4657__auto__){
var s__36138__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36138__$2)){
var c__22801__auto__ = cljs.core.chunk_first.call(null,s__36138__$2);
var size__22802__auto__ = cljs.core.count.call(null,c__22801__auto__);
var b__36140 = cljs.core.chunk_buffer.call(null,size__22802__auto__);
if((function (){var i__36139 = (0);
while(true){
if((i__36139 < size__22802__auto__)){
var vec__36155 = cljs.core._nth.call(null,c__22801__auto__,i__36139);
var summarize_QMARK_ = cljs.core.nth.call(null,vec__36155,(0),null);
var mw_name = cljs.core.nth.call(null,vec__36155,(1),null);
cljs.core.chunk_append.call(null,b__36140,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","wrap-middleware-debugging","print.foo/wrap-middleware-debugging",-128908014,null)),(function (){var x__22857__auto__ = mw_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),(function (){var x__22857__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"summarize?","summarize?",829177006)),(function (){var x__22857__auto__ = summarize_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"get-in","get-in",688791704)),(function (){var x__22857__auto__ = get_in;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"timings?","timings?",-1773054946)),(function (){var x__22857__auto__ = timings_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})()))));

var G__36238 = (i__36139 + (1));
i__36139 = G__36238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36140),print$foo$interleave_middlewares_$_iter__36137.call(null,cljs.core.chunk_rest.call(null,s__36138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36140),null);
}
} else {
var vec__36162 = cljs.core.first.call(null,s__36138__$2);
var summarize_QMARK_ = cljs.core.nth.call(null,vec__36162,(0),null);
var mw_name = cljs.core.nth.call(null,vec__36162,(1),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("print.foo","wrap-middleware-debugging","print.foo/wrap-middleware-debugging",-128908014,null)),(function (){var x__22857__auto__ = mw_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),(function (){var x__22857__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"summarize?","summarize?",829177006)),(function (){var x__22857__auto__ = summarize_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"get-in","get-in",688791704)),(function (){var x__22857__auto__ = get_in;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"timings?","timings?",-1773054946)),(function (){var x__22857__auto__ = timings_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})()))),print$foo$interleave_middlewares_$_iter__36137.call(null,cljs.core.rest.call(null,s__36138__$2)));
}
} else {
return null;
}
break;
}
});})(summarize_QMARK__determinations,mw_names,map__36134,map__36134__$1,get_in,timings_QMARK_))
,null,null));
});})(summarize_QMARK__determinations,mw_names,map__36134,map__36134__$1,get_in,timings_QMARK_))
;
return iter__22803__auto__.call(null,cljs.core.map.call(null,cljs.core.list,summarize_QMARK__determinations,mw_names));
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),(function (){var x__22857__auto__ = handler;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22857__auto__);
})(),cljs.core.interleave.call(null,middlewares,logging_mws))));
});

//# sourceMappingURL=foo.js.map