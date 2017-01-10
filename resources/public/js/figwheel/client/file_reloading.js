// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__22020__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__22020__auto__){
return or__22020__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__22020__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34862_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34862_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34884 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34885 = null;
var count__34886 = (0);
var i__34887 = (0);
while(true){
if((i__34887 < count__34886)){
var n = cljs.core._nth.call(null,chunk__34885,i__34887);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34893 = seq__34884;
var G__34894 = chunk__34885;
var G__34895 = count__34886;
var G__34896 = (i__34887 + (1));
seq__34884 = G__34893;
chunk__34885 = G__34894;
count__34886 = G__34895;
i__34887 = G__34896;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34884);
if(temp__4657__auto__){
var seq__34884__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34884__$1)){
var c__22834__auto__ = cljs.core.chunk_first.call(null,seq__34884__$1);
var G__34900 = cljs.core.chunk_rest.call(null,seq__34884__$1);
var G__34901 = c__22834__auto__;
var G__34902 = cljs.core.count.call(null,c__22834__auto__);
var G__34903 = (0);
seq__34884 = G__34900;
chunk__34885 = G__34901;
count__34886 = G__34902;
i__34887 = G__34903;
continue;
} else {
var n = cljs.core.first.call(null,seq__34884__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34905 = cljs.core.next.call(null,seq__34884__$1);
var G__34906 = null;
var G__34907 = (0);
var G__34908 = (0);
seq__34884 = G__34905;
chunk__34885 = G__34906;
count__34886 = G__34907;
i__34887 = G__34908;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35078_35097 = cljs.core.seq.call(null,deps);
var chunk__35079_35098 = null;
var count__35080_35099 = (0);
var i__35081_35100 = (0);
while(true){
if((i__35081_35100 < count__35080_35099)){
var dep_35103 = cljs.core._nth.call(null,chunk__35079_35098,i__35081_35100);
topo_sort_helper_STAR_.call(null,dep_35103,(depth + (1)),state);

var G__35104 = seq__35078_35097;
var G__35105 = chunk__35079_35098;
var G__35106 = count__35080_35099;
var G__35107 = (i__35081_35100 + (1));
seq__35078_35097 = G__35104;
chunk__35079_35098 = G__35105;
count__35080_35099 = G__35106;
i__35081_35100 = G__35107;
continue;
} else {
var temp__4657__auto___35110 = cljs.core.seq.call(null,seq__35078_35097);
if(temp__4657__auto___35110){
var seq__35078_35112__$1 = temp__4657__auto___35110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35078_35112__$1)){
var c__22834__auto___35113 = cljs.core.chunk_first.call(null,seq__35078_35112__$1);
var G__35114 = cljs.core.chunk_rest.call(null,seq__35078_35112__$1);
var G__35115 = c__22834__auto___35113;
var G__35116 = cljs.core.count.call(null,c__22834__auto___35113);
var G__35117 = (0);
seq__35078_35097 = G__35114;
chunk__35079_35098 = G__35115;
count__35080_35099 = G__35116;
i__35081_35100 = G__35117;
continue;
} else {
var dep_35120 = cljs.core.first.call(null,seq__35078_35112__$1);
topo_sort_helper_STAR_.call(null,dep_35120,(depth + (1)),state);

var G__35122 = cljs.core.next.call(null,seq__35078_35112__$1);
var G__35123 = null;
var G__35124 = (0);
var G__35125 = (0);
seq__35078_35097 = G__35122;
chunk__35079_35098 = G__35123;
count__35080_35099 = G__35124;
i__35081_35100 = G__35125;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35083){
var vec__35087 = p__35083;
var seq__35088 = cljs.core.seq.call(null,vec__35087);
var first__35089 = cljs.core.first.call(null,seq__35088);
var seq__35088__$1 = cljs.core.next.call(null,seq__35088);
var x = first__35089;
var xs = seq__35088__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35087,seq__35088,first__35089,seq__35088__$1,x,xs,get_deps__$1){
return (function (p1__34962_SHARP_){
return clojure.set.difference.call(null,p1__34962_SHARP_,x);
});})(vec__35087,seq__35088,first__35089,seq__35088__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35171 = cljs.core.seq.call(null,provides);
var chunk__35172 = null;
var count__35173 = (0);
var i__35174 = (0);
while(true){
if((i__35174 < count__35173)){
var prov = cljs.core._nth.call(null,chunk__35172,i__35174);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35175_35191 = cljs.core.seq.call(null,requires);
var chunk__35176_35192 = null;
var count__35177_35193 = (0);
var i__35178_35194 = (0);
while(true){
if((i__35178_35194 < count__35177_35193)){
var req_35196 = cljs.core._nth.call(null,chunk__35176_35192,i__35178_35194);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35196,prov);

var G__35197 = seq__35175_35191;
var G__35198 = chunk__35176_35192;
var G__35199 = count__35177_35193;
var G__35200 = (i__35178_35194 + (1));
seq__35175_35191 = G__35197;
chunk__35176_35192 = G__35198;
count__35177_35193 = G__35199;
i__35178_35194 = G__35200;
continue;
} else {
var temp__4657__auto___35201 = cljs.core.seq.call(null,seq__35175_35191);
if(temp__4657__auto___35201){
var seq__35175_35203__$1 = temp__4657__auto___35201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35175_35203__$1)){
var c__22834__auto___35204 = cljs.core.chunk_first.call(null,seq__35175_35203__$1);
var G__35205 = cljs.core.chunk_rest.call(null,seq__35175_35203__$1);
var G__35206 = c__22834__auto___35204;
var G__35207 = cljs.core.count.call(null,c__22834__auto___35204);
var G__35208 = (0);
seq__35175_35191 = G__35205;
chunk__35176_35192 = G__35206;
count__35177_35193 = G__35207;
i__35178_35194 = G__35208;
continue;
} else {
var req_35210 = cljs.core.first.call(null,seq__35175_35203__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35210,prov);

var G__35211 = cljs.core.next.call(null,seq__35175_35203__$1);
var G__35212 = null;
var G__35213 = (0);
var G__35214 = (0);
seq__35175_35191 = G__35211;
chunk__35176_35192 = G__35212;
count__35177_35193 = G__35213;
i__35178_35194 = G__35214;
continue;
}
} else {
}
}
break;
}

var G__35215 = seq__35171;
var G__35216 = chunk__35172;
var G__35217 = count__35173;
var G__35218 = (i__35174 + (1));
seq__35171 = G__35215;
chunk__35172 = G__35216;
count__35173 = G__35217;
i__35174 = G__35218;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35171);
if(temp__4657__auto__){
var seq__35171__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35171__$1)){
var c__22834__auto__ = cljs.core.chunk_first.call(null,seq__35171__$1);
var G__35275 = cljs.core.chunk_rest.call(null,seq__35171__$1);
var G__35276 = c__22834__auto__;
var G__35277 = cljs.core.count.call(null,c__22834__auto__);
var G__35278 = (0);
seq__35171 = G__35275;
chunk__35172 = G__35276;
count__35173 = G__35277;
i__35174 = G__35278;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35171__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35184_35282 = cljs.core.seq.call(null,requires);
var chunk__35185_35283 = null;
var count__35186_35284 = (0);
var i__35187_35285 = (0);
while(true){
if((i__35187_35285 < count__35186_35284)){
var req_35287 = cljs.core._nth.call(null,chunk__35185_35283,i__35187_35285);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35287,prov);

var G__35288 = seq__35184_35282;
var G__35289 = chunk__35185_35283;
var G__35290 = count__35186_35284;
var G__35291 = (i__35187_35285 + (1));
seq__35184_35282 = G__35288;
chunk__35185_35283 = G__35289;
count__35186_35284 = G__35290;
i__35187_35285 = G__35291;
continue;
} else {
var temp__4657__auto___35294__$1 = cljs.core.seq.call(null,seq__35184_35282);
if(temp__4657__auto___35294__$1){
var seq__35184_35361__$1 = temp__4657__auto___35294__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35184_35361__$1)){
var c__22834__auto___35362 = cljs.core.chunk_first.call(null,seq__35184_35361__$1);
var G__35365 = cljs.core.chunk_rest.call(null,seq__35184_35361__$1);
var G__35366 = c__22834__auto___35362;
var G__35367 = cljs.core.count.call(null,c__22834__auto___35362);
var G__35368 = (0);
seq__35184_35282 = G__35365;
chunk__35185_35283 = G__35366;
count__35186_35284 = G__35367;
i__35187_35285 = G__35368;
continue;
} else {
var req_35371 = cljs.core.first.call(null,seq__35184_35361__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35371,prov);

var G__35375 = cljs.core.next.call(null,seq__35184_35361__$1);
var G__35376 = null;
var G__35377 = (0);
var G__35378 = (0);
seq__35184_35282 = G__35375;
chunk__35185_35283 = G__35376;
count__35186_35284 = G__35377;
i__35187_35285 = G__35378;
continue;
}
} else {
}
}
break;
}

var G__35379 = cljs.core.next.call(null,seq__35171__$1);
var G__35380 = null;
var G__35381 = (0);
var G__35382 = (0);
seq__35171 = G__35379;
chunk__35172 = G__35380;
count__35173 = G__35381;
i__35174 = G__35382;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35393_35400 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35394_35401 = null;
var count__35395_35402 = (0);
var i__35396_35403 = (0);
while(true){
if((i__35396_35403 < count__35395_35402)){
var ns_35405 = cljs.core._nth.call(null,chunk__35394_35401,i__35396_35403);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35405);

var G__35406 = seq__35393_35400;
var G__35407 = chunk__35394_35401;
var G__35408 = count__35395_35402;
var G__35409 = (i__35396_35403 + (1));
seq__35393_35400 = G__35406;
chunk__35394_35401 = G__35407;
count__35395_35402 = G__35408;
i__35396_35403 = G__35409;
continue;
} else {
var temp__4657__auto___35411 = cljs.core.seq.call(null,seq__35393_35400);
if(temp__4657__auto___35411){
var seq__35393_35413__$1 = temp__4657__auto___35411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35393_35413__$1)){
var c__22834__auto___35414 = cljs.core.chunk_first.call(null,seq__35393_35413__$1);
var G__35415 = cljs.core.chunk_rest.call(null,seq__35393_35413__$1);
var G__35416 = c__22834__auto___35414;
var G__35417 = cljs.core.count.call(null,c__22834__auto___35414);
var G__35418 = (0);
seq__35393_35400 = G__35415;
chunk__35394_35401 = G__35416;
count__35395_35402 = G__35417;
i__35396_35403 = G__35418;
continue;
} else {
var ns_35426 = cljs.core.first.call(null,seq__35393_35413__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35426);

var G__35428 = cljs.core.next.call(null,seq__35393_35413__$1);
var G__35429 = null;
var G__35430 = (0);
var G__35431 = (0);
seq__35393_35400 = G__35428;
chunk__35394_35401 = G__35429;
count__35395_35402 = G__35430;
i__35396_35403 = G__35431;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__22020__auto__ = goog.require__;
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35443__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35445__i = 0, G__35445__a = new Array(arguments.length -  0);
while (G__35445__i < G__35445__a.length) {G__35445__a[G__35445__i] = arguments[G__35445__i + 0]; ++G__35445__i;}
  args = new cljs.core.IndexedSeq(G__35445__a,0);
} 
return G__35443__delegate.call(this,args);};
G__35443.cljs$lang$maxFixedArity = 0;
G__35443.cljs$lang$applyTo = (function (arglist__35446){
var args = cljs.core.seq(arglist__35446);
return G__35443__delegate(args);
});
G__35443.cljs$core$IFn$_invoke$arity$variadic = G__35443__delegate;
return G__35443;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35470 = cljs.core._EQ_;
var expr__35471 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35470.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35471))){
var path_parts = ((function (pred__35470,expr__35471){
return (function (p1__35468_SHARP_){
return clojure.string.split.call(null,p1__35468_SHARP_,/[\/\\]/);
});})(pred__35470,expr__35471))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35470,expr__35471){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35474){if((e35474 instanceof Error)){
var e = e35474;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35474;

}
}})());
});
;})(path_parts,sep,root,pred__35470,expr__35471))
} else {
if(cljs.core.truth_(pred__35470.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35471))){
return ((function (pred__35470,expr__35471){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35470,expr__35471){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35470,expr__35471))
);

return deferred.addErrback(((function (deferred,pred__35470,expr__35471){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35470,expr__35471))
);
});
;})(pred__35470,expr__35471))
} else {
return ((function (pred__35470,expr__35471){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35470,expr__35471))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35562,callback){
var map__35565 = p__35562;
var map__35565__$1 = ((((!((map__35565 == null)))?((((map__35565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35565):map__35565);
var file_msg = map__35565__$1;
var request_url = cljs.core.get.call(null,map__35565__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35565,map__35565__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35565,map__35565__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto__){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto__){
return (function (state_35649){
var state_val_35650 = (state_35649[(1)]);
if((state_val_35650 === (7))){
var inst_35645 = (state_35649[(2)]);
var state_35649__$1 = state_35649;
var statearr_35652_35683 = state_35649__$1;
(statearr_35652_35683[(2)] = inst_35645);

(statearr_35652_35683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (1))){
var state_35649__$1 = state_35649;
var statearr_35653_35685 = state_35649__$1;
(statearr_35653_35685[(2)] = null);

(statearr_35653_35685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (4))){
var inst_35629 = (state_35649[(7)]);
var inst_35629__$1 = (state_35649[(2)]);
var state_35649__$1 = (function (){var statearr_35654 = state_35649;
(statearr_35654[(7)] = inst_35629__$1);

return statearr_35654;
})();
if(cljs.core.truth_(inst_35629__$1)){
var statearr_35655_35687 = state_35649__$1;
(statearr_35655_35687[(1)] = (5));

} else {
var statearr_35656_35688 = state_35649__$1;
(statearr_35656_35688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (6))){
var state_35649__$1 = state_35649;
var statearr_35658_35690 = state_35649__$1;
(statearr_35658_35690[(2)] = null);

(statearr_35658_35690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (3))){
var inst_35647 = (state_35649[(2)]);
var state_35649__$1 = state_35649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35649__$1,inst_35647);
} else {
if((state_val_35650 === (2))){
var state_35649__$1 = state_35649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35649__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35650 === (11))){
var inst_35641 = (state_35649[(2)]);
var state_35649__$1 = (function (){var statearr_35662 = state_35649;
(statearr_35662[(8)] = inst_35641);

return statearr_35662;
})();
var statearr_35663_35721 = state_35649__$1;
(statearr_35663_35721[(2)] = null);

(statearr_35663_35721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (9))){
var inst_35635 = (state_35649[(9)]);
var inst_35633 = (state_35649[(10)]);
var inst_35637 = inst_35635.call(null,inst_35633);
var state_35649__$1 = state_35649;
var statearr_35664_35728 = state_35649__$1;
(statearr_35664_35728[(2)] = inst_35637);

(statearr_35664_35728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (5))){
var inst_35629 = (state_35649[(7)]);
var inst_35631 = figwheel.client.file_reloading.blocking_load.call(null,inst_35629);
var state_35649__$1 = state_35649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35649__$1,(8),inst_35631);
} else {
if((state_val_35650 === (10))){
var inst_35633 = (state_35649[(10)]);
var inst_35639 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35633);
var state_35649__$1 = state_35649;
var statearr_35665_35742 = state_35649__$1;
(statearr_35665_35742[(2)] = inst_35639);

(statearr_35665_35742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35650 === (8))){
var inst_35629 = (state_35649[(7)]);
var inst_35635 = (state_35649[(9)]);
var inst_35633 = (state_35649[(2)]);
var inst_35634 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35635__$1 = cljs.core.get.call(null,inst_35634,inst_35629);
var state_35649__$1 = (function (){var statearr_35666 = state_35649;
(statearr_35666[(9)] = inst_35635__$1);

(statearr_35666[(10)] = inst_35633);

return statearr_35666;
})();
if(cljs.core.truth_(inst_35635__$1)){
var statearr_35667_35782 = state_35649__$1;
(statearr_35667_35782[(1)] = (9));

} else {
var statearr_35668_35783 = state_35649__$1;
(statearr_35668_35783[(1)] = (10));

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
});})(c__26288__auto__))
;
return ((function (switch__25578__auto__,c__26288__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25579__auto__ = null;
var figwheel$client$file_reloading$state_machine__25579__auto____0 = (function (){
var statearr_35673 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35673[(0)] = figwheel$client$file_reloading$state_machine__25579__auto__);

(statearr_35673[(1)] = (1));

return statearr_35673;
});
var figwheel$client$file_reloading$state_machine__25579__auto____1 = (function (state_35649){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_35649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e35674){if((e35674 instanceof Object)){
var ex__25582__auto__ = e35674;
var statearr_35676_35794 = state_35649;
(statearr_35676_35794[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35798 = state_35649;
state_35649 = G__35798;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25579__auto__ = function(state_35649){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25579__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25579__auto____1.call(this,state_35649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25579__auto____0;
figwheel$client$file_reloading$state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25579__auto____1;
return figwheel$client$file_reloading$state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto__))
})();
var state__26290__auto__ = (function (){var statearr_35679 = f__26289__auto__.call(null);
(statearr_35679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto__);

return statearr_35679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto__))
);

return c__26288__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35803,callback){
var map__35808 = p__35803;
var map__35808__$1 = ((((!((map__35808 == null)))?((((map__35808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35808):map__35808);
var file_msg = map__35808__$1;
var namespace = cljs.core.get.call(null,map__35808__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35808,map__35808__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35808,map__35808__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35815){
var map__35820 = p__35815;
var map__35820__$1 = ((((!((map__35820 == null)))?((((map__35820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35820):map__35820);
var file_msg = map__35820__$1;
var namespace = cljs.core.get.call(null,map__35820__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__22008__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__22008__auto__){
var or__22020__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22020__auto__)){
return or__22020__auto__;
} else {
var or__22020__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22020__auto____$1)){
return or__22020__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__22008__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35854,callback){
var map__35862 = p__35854;
var map__35862__$1 = ((((!((map__35862 == null)))?((((map__35862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35862):map__35862);
var file_msg = map__35862__$1;
var request_url = cljs.core.get.call(null,map__35862__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35862__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26288__auto___36007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto___36007,out){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto___36007,out){
return (function (state_35985){
var state_val_35986 = (state_35985[(1)]);
if((state_val_35986 === (1))){
var inst_35956 = cljs.core.seq.call(null,files);
var inst_35957 = cljs.core.first.call(null,inst_35956);
var inst_35958 = cljs.core.next.call(null,inst_35956);
var inst_35961 = files;
var state_35985__$1 = (function (){var statearr_35987 = state_35985;
(statearr_35987[(7)] = inst_35961);

(statearr_35987[(8)] = inst_35958);

(statearr_35987[(9)] = inst_35957);

return statearr_35987;
})();
var statearr_35988_36013 = state_35985__$1;
(statearr_35988_36013[(2)] = null);

(statearr_35988_36013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (2))){
var inst_35961 = (state_35985[(7)]);
var inst_35967 = (state_35985[(10)]);
var inst_35966 = cljs.core.seq.call(null,inst_35961);
var inst_35967__$1 = cljs.core.first.call(null,inst_35966);
var inst_35968 = cljs.core.next.call(null,inst_35966);
var inst_35969 = (inst_35967__$1 == null);
var inst_35970 = cljs.core.not.call(null,inst_35969);
var state_35985__$1 = (function (){var statearr_35989 = state_35985;
(statearr_35989[(10)] = inst_35967__$1);

(statearr_35989[(11)] = inst_35968);

return statearr_35989;
})();
if(inst_35970){
var statearr_35990_36133 = state_35985__$1;
(statearr_35990_36133[(1)] = (4));

} else {
var statearr_35991_36136 = state_35985__$1;
(statearr_35991_36136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (3))){
var inst_35982 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35985__$1,inst_35982);
} else {
if((state_val_35986 === (4))){
var inst_35967 = (state_35985[(10)]);
var inst_35972 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35967);
var state_35985__$1 = state_35985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35985__$1,(7),inst_35972);
} else {
if((state_val_35986 === (5))){
var inst_35978 = cljs.core.async.close_BANG_.call(null,out);
var state_35985__$1 = state_35985;
var statearr_35993_36147 = state_35985__$1;
(statearr_35993_36147[(2)] = inst_35978);

(statearr_35993_36147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (6))){
var inst_35980 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
var statearr_35994_36148 = state_35985__$1;
(statearr_35994_36148[(2)] = inst_35980);

(statearr_35994_36148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (7))){
var inst_35968 = (state_35985[(11)]);
var inst_35974 = (state_35985[(2)]);
var inst_35975 = cljs.core.async.put_BANG_.call(null,out,inst_35974);
var inst_35961 = inst_35968;
var state_35985__$1 = (function (){var statearr_35995 = state_35985;
(statearr_35995[(12)] = inst_35975);

(statearr_35995[(7)] = inst_35961);

return statearr_35995;
})();
var statearr_35996_36153 = state_35985__$1;
(statearr_35996_36153[(2)] = null);

(statearr_35996_36153[(1)] = (2));


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
});})(c__26288__auto___36007,out))
;
return ((function (switch__25578__auto__,c__26288__auto___36007,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto____0 = (function (){
var statearr_36002 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36002[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto__);

(statearr_36002[(1)] = (1));

return statearr_36002;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto____1 = (function (state_35985){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_35985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e36004){if((e36004 instanceof Object)){
var ex__25582__auto__ = e36004;
var statearr_36005_36160 = state_35985;
(statearr_36005_36160[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36161 = state_35985;
state_35985 = G__36161;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto__ = function(state_35985){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto____1.call(this,state_35985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto___36007,out))
})();
var state__26290__auto__ = (function (){var statearr_36006 = f__26289__auto__.call(null);
(statearr_36006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto___36007);

return statearr_36006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto___36007,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36166,opts){
var map__36170 = p__36166;
var map__36170__$1 = ((((!((map__36170 == null)))?((((map__36170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36170):map__36170);
var eval_body = cljs.core.get.call(null,map__36170__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36170__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__22008__auto__ = eval_body;
if(cljs.core.truth_(and__22008__auto__)){
return typeof eval_body === 'string';
} else {
return and__22008__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36175){var e = e36175;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36181_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36181_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36226){
var vec__36227 = p__36226;
var k = cljs.core.nth.call(null,vec__36227,(0),null);
var v = cljs.core.nth.call(null,vec__36227,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36230){
var vec__36231 = p__36230;
var k = cljs.core.nth.call(null,vec__36231,(0),null);
var v = cljs.core.nth.call(null,vec__36231,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36260,p__36261){
var map__36562 = p__36260;
var map__36562__$1 = ((((!((map__36562 == null)))?((((map__36562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36562):map__36562);
var opts = map__36562__$1;
var before_jsload = cljs.core.get.call(null,map__36562__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36562__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36562__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36563 = p__36261;
var map__36563__$1 = ((((!((map__36563 == null)))?((((map__36563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36563):map__36563);
var msg = map__36563__$1;
var files = cljs.core.get.call(null,map__36563__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36563__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36563__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26289__auto__ = (function (){var switch__25578__auto__ = ((function (c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36728){
var state_val_36729 = (state_36728[(1)]);
if((state_val_36729 === (7))){
var inst_36583 = (state_36728[(7)]);
var inst_36582 = (state_36728[(8)]);
var inst_36584 = (state_36728[(9)]);
var inst_36581 = (state_36728[(10)]);
var inst_36590 = cljs.core._nth.call(null,inst_36582,inst_36584);
var inst_36591 = figwheel.client.file_reloading.eval_body.call(null,inst_36590,opts);
var inst_36593 = (inst_36584 + (1));
var tmp36730 = inst_36583;
var tmp36731 = inst_36582;
var tmp36732 = inst_36581;
var inst_36581__$1 = tmp36732;
var inst_36582__$1 = tmp36731;
var inst_36583__$1 = tmp36730;
var inst_36584__$1 = inst_36593;
var state_36728__$1 = (function (){var statearr_36735 = state_36728;
(statearr_36735[(7)] = inst_36583__$1);

(statearr_36735[(8)] = inst_36582__$1);

(statearr_36735[(11)] = inst_36591);

(statearr_36735[(9)] = inst_36584__$1);

(statearr_36735[(10)] = inst_36581__$1);

return statearr_36735;
})();
var statearr_36736_36882 = state_36728__$1;
(statearr_36736_36882[(2)] = null);

(statearr_36736_36882[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (20))){
var inst_36627 = (state_36728[(12)]);
var inst_36635 = figwheel.client.file_reloading.sort_files.call(null,inst_36627);
var state_36728__$1 = state_36728;
var statearr_36737_36884 = state_36728__$1;
(statearr_36737_36884[(2)] = inst_36635);

(statearr_36737_36884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (27))){
var state_36728__$1 = state_36728;
var statearr_36739_36889 = state_36728__$1;
(statearr_36739_36889[(2)] = null);

(statearr_36739_36889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (1))){
var inst_36573 = (state_36728[(13)]);
var inst_36570 = before_jsload.call(null,files);
var inst_36571 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36572 = (function (){return ((function (inst_36573,inst_36570,inst_36571,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36257_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36257_SHARP_);
});
;})(inst_36573,inst_36570,inst_36571,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36573__$1 = cljs.core.filter.call(null,inst_36572,files);
var inst_36574 = cljs.core.not_empty.call(null,inst_36573__$1);
var state_36728__$1 = (function (){var statearr_36742 = state_36728;
(statearr_36742[(14)] = inst_36571);

(statearr_36742[(13)] = inst_36573__$1);

(statearr_36742[(15)] = inst_36570);

return statearr_36742;
})();
if(cljs.core.truth_(inst_36574)){
var statearr_36743_36902 = state_36728__$1;
(statearr_36743_36902[(1)] = (2));

} else {
var statearr_36744_36903 = state_36728__$1;
(statearr_36744_36903[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (24))){
var state_36728__$1 = state_36728;
var statearr_36745_36952 = state_36728__$1;
(statearr_36745_36952[(2)] = null);

(statearr_36745_36952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (39))){
var inst_36680 = (state_36728[(16)]);
var state_36728__$1 = state_36728;
var statearr_36746_36955 = state_36728__$1;
(statearr_36746_36955[(2)] = inst_36680);

(statearr_36746_36955[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (46))){
var inst_36723 = (state_36728[(2)]);
var state_36728__$1 = state_36728;
var statearr_36747_36956 = state_36728__$1;
(statearr_36747_36956[(2)] = inst_36723);

(statearr_36747_36956[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (4))){
var inst_36621 = (state_36728[(2)]);
var inst_36622 = cljs.core.List.EMPTY;
var inst_36623 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36622);
var inst_36624 = (function (){return ((function (inst_36621,inst_36622,inst_36623,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36258_SHARP_){
var and__22008__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36258_SHARP_);
if(cljs.core.truth_(and__22008__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36258_SHARP_));
} else {
return and__22008__auto__;
}
});
;})(inst_36621,inst_36622,inst_36623,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36625 = cljs.core.filter.call(null,inst_36624,files);
var inst_36626 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36627 = cljs.core.concat.call(null,inst_36625,inst_36626);
var state_36728__$1 = (function (){var statearr_36749 = state_36728;
(statearr_36749[(17)] = inst_36621);

(statearr_36749[(18)] = inst_36623);

(statearr_36749[(12)] = inst_36627);

return statearr_36749;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36750_36977 = state_36728__$1;
(statearr_36750_36977[(1)] = (16));

} else {
var statearr_36751_36979 = state_36728__$1;
(statearr_36751_36979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (15))){
var inst_36611 = (state_36728[(2)]);
var state_36728__$1 = state_36728;
var statearr_36752_36984 = state_36728__$1;
(statearr_36752_36984[(2)] = inst_36611);

(statearr_36752_36984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (21))){
var inst_36637 = (state_36728[(19)]);
var inst_36637__$1 = (state_36728[(2)]);
var inst_36639 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36637__$1);
var state_36728__$1 = (function (){var statearr_36753 = state_36728;
(statearr_36753[(19)] = inst_36637__$1);

return statearr_36753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36728__$1,(22),inst_36639);
} else {
if((state_val_36729 === (31))){
var inst_36726 = (state_36728[(2)]);
var state_36728__$1 = state_36728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36728__$1,inst_36726);
} else {
if((state_val_36729 === (32))){
var inst_36680 = (state_36728[(16)]);
var inst_36685 = inst_36680.cljs$lang$protocol_mask$partition0$;
var inst_36686 = (inst_36685 & (64));
var inst_36687 = inst_36680.cljs$core$ISeq$;
var inst_36688 = (cljs.core.PROTOCOL_SENTINEL === inst_36687);
var inst_36689 = (inst_36686) || (inst_36688);
var state_36728__$1 = state_36728;
if(cljs.core.truth_(inst_36689)){
var statearr_36754_36989 = state_36728__$1;
(statearr_36754_36989[(1)] = (35));

} else {
var statearr_36755_36992 = state_36728__$1;
(statearr_36755_36992[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (40))){
var inst_36703 = (state_36728[(20)]);
var inst_36702 = (state_36728[(2)]);
var inst_36703__$1 = cljs.core.get.call(null,inst_36702,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36704 = cljs.core.get.call(null,inst_36702,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36705 = cljs.core.not_empty.call(null,inst_36703__$1);
var state_36728__$1 = (function (){var statearr_36758 = state_36728;
(statearr_36758[(20)] = inst_36703__$1);

(statearr_36758[(21)] = inst_36704);

return statearr_36758;
})();
if(cljs.core.truth_(inst_36705)){
var statearr_36759_37001 = state_36728__$1;
(statearr_36759_37001[(1)] = (41));

} else {
var statearr_36761_37004 = state_36728__$1;
(statearr_36761_37004[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (33))){
var state_36728__$1 = state_36728;
var statearr_36762_37006 = state_36728__$1;
(statearr_36762_37006[(2)] = false);

(statearr_36762_37006[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (13))){
var inst_36596 = (state_36728[(22)]);
var inst_36600 = cljs.core.chunk_first.call(null,inst_36596);
var inst_36601 = cljs.core.chunk_rest.call(null,inst_36596);
var inst_36602 = cljs.core.count.call(null,inst_36600);
var inst_36581 = inst_36601;
var inst_36582 = inst_36600;
var inst_36583 = inst_36602;
var inst_36584 = (0);
var state_36728__$1 = (function (){var statearr_36763 = state_36728;
(statearr_36763[(7)] = inst_36583);

(statearr_36763[(8)] = inst_36582);

(statearr_36763[(9)] = inst_36584);

(statearr_36763[(10)] = inst_36581);

return statearr_36763;
})();
var statearr_36764_37017 = state_36728__$1;
(statearr_36764_37017[(2)] = null);

(statearr_36764_37017[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (22))){
var inst_36643 = (state_36728[(23)]);
var inst_36648 = (state_36728[(24)]);
var inst_36641 = (state_36728[(25)]);
var inst_36637 = (state_36728[(19)]);
var inst_36641__$1 = (state_36728[(2)]);
var inst_36643__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36641__$1);
var inst_36644 = (function (){var all_files = inst_36637;
var res_SINGLEQUOTE_ = inst_36641__$1;
var res = inst_36643__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36643,inst_36648,inst_36641,inst_36637,inst_36641__$1,inst_36643__$1,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36259_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36259_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36643,inst_36648,inst_36641,inst_36637,inst_36641__$1,inst_36643__$1,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36645 = cljs.core.filter.call(null,inst_36644,inst_36641__$1);
var inst_36647 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36648__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36647);
var inst_36649 = cljs.core.not_empty.call(null,inst_36648__$1);
var state_36728__$1 = (function (){var statearr_36774 = state_36728;
(statearr_36774[(26)] = inst_36645);

(statearr_36774[(23)] = inst_36643__$1);

(statearr_36774[(24)] = inst_36648__$1);

(statearr_36774[(25)] = inst_36641__$1);

return statearr_36774;
})();
if(cljs.core.truth_(inst_36649)){
var statearr_36775_37036 = state_36728__$1;
(statearr_36775_37036[(1)] = (23));

} else {
var statearr_36776_37037 = state_36728__$1;
(statearr_36776_37037[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (36))){
var state_36728__$1 = state_36728;
var statearr_36777_37040 = state_36728__$1;
(statearr_36777_37040[(2)] = false);

(statearr_36777_37040[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (41))){
var inst_36703 = (state_36728[(20)]);
var inst_36707 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36708 = cljs.core.map.call(null,inst_36707,inst_36703);
var inst_36709 = cljs.core.pr_str.call(null,inst_36708);
var inst_36710 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36709)].join('');
var inst_36711 = figwheel.client.utils.log.call(null,inst_36710);
var state_36728__$1 = state_36728;
var statearr_36780_37046 = state_36728__$1;
(statearr_36780_37046[(2)] = inst_36711);

(statearr_36780_37046[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (43))){
var inst_36704 = (state_36728[(21)]);
var inst_36714 = (state_36728[(2)]);
var inst_36715 = cljs.core.not_empty.call(null,inst_36704);
var state_36728__$1 = (function (){var statearr_36782 = state_36728;
(statearr_36782[(27)] = inst_36714);

return statearr_36782;
})();
if(cljs.core.truth_(inst_36715)){
var statearr_36783_37054 = state_36728__$1;
(statearr_36783_37054[(1)] = (44));

} else {
var statearr_36784_37055 = state_36728__$1;
(statearr_36784_37055[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (29))){
var inst_36645 = (state_36728[(26)]);
var inst_36643 = (state_36728[(23)]);
var inst_36648 = (state_36728[(24)]);
var inst_36680 = (state_36728[(16)]);
var inst_36641 = (state_36728[(25)]);
var inst_36637 = (state_36728[(19)]);
var inst_36676 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36679 = (function (){var all_files = inst_36637;
var res_SINGLEQUOTE_ = inst_36641;
var res = inst_36643;
var files_not_loaded = inst_36645;
var dependencies_that_loaded = inst_36648;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36645,inst_36643,inst_36648,inst_36680,inst_36641,inst_36637,inst_36676,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36678){
var map__36785 = p__36678;
var map__36785__$1 = ((((!((map__36785 == null)))?((((map__36785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36785):map__36785);
var namespace = cljs.core.get.call(null,map__36785__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36645,inst_36643,inst_36648,inst_36680,inst_36641,inst_36637,inst_36676,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36680__$1 = cljs.core.group_by.call(null,inst_36679,inst_36645);
var inst_36682 = (inst_36680__$1 == null);
var inst_36683 = cljs.core.not.call(null,inst_36682);
var state_36728__$1 = (function (){var statearr_36787 = state_36728;
(statearr_36787[(28)] = inst_36676);

(statearr_36787[(16)] = inst_36680__$1);

return statearr_36787;
})();
if(inst_36683){
var statearr_36788_37083 = state_36728__$1;
(statearr_36788_37083[(1)] = (32));

} else {
var statearr_36789_37084 = state_36728__$1;
(statearr_36789_37084[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (44))){
var inst_36704 = (state_36728[(21)]);
var inst_36717 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36704);
var inst_36718 = cljs.core.pr_str.call(null,inst_36717);
var inst_36719 = [cljs.core.str("not required: "),cljs.core.str(inst_36718)].join('');
var inst_36720 = figwheel.client.utils.log.call(null,inst_36719);
var state_36728__$1 = state_36728;
var statearr_36791_37094 = state_36728__$1;
(statearr_36791_37094[(2)] = inst_36720);

(statearr_36791_37094[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (6))){
var inst_36618 = (state_36728[(2)]);
var state_36728__$1 = state_36728;
var statearr_36792_37096 = state_36728__$1;
(statearr_36792_37096[(2)] = inst_36618);

(statearr_36792_37096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (28))){
var inst_36645 = (state_36728[(26)]);
var inst_36673 = (state_36728[(2)]);
var inst_36674 = cljs.core.not_empty.call(null,inst_36645);
var state_36728__$1 = (function (){var statearr_36793 = state_36728;
(statearr_36793[(29)] = inst_36673);

return statearr_36793;
})();
if(cljs.core.truth_(inst_36674)){
var statearr_36794_37106 = state_36728__$1;
(statearr_36794_37106[(1)] = (29));

} else {
var statearr_36795_37108 = state_36728__$1;
(statearr_36795_37108[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (25))){
var inst_36643 = (state_36728[(23)]);
var inst_36660 = (state_36728[(2)]);
var inst_36661 = cljs.core.not_empty.call(null,inst_36643);
var state_36728__$1 = (function (){var statearr_36796 = state_36728;
(statearr_36796[(30)] = inst_36660);

return statearr_36796;
})();
if(cljs.core.truth_(inst_36661)){
var statearr_36797_37115 = state_36728__$1;
(statearr_36797_37115[(1)] = (26));

} else {
var statearr_36798_37117 = state_36728__$1;
(statearr_36798_37117[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (34))){
var inst_36697 = (state_36728[(2)]);
var state_36728__$1 = state_36728;
if(cljs.core.truth_(inst_36697)){
var statearr_36799_37120 = state_36728__$1;
(statearr_36799_37120[(1)] = (38));

} else {
var statearr_36800_37121 = state_36728__$1;
(statearr_36800_37121[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (17))){
var state_36728__$1 = state_36728;
var statearr_36801_37126 = state_36728__$1;
(statearr_36801_37126[(2)] = recompile_dependents);

(statearr_36801_37126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (3))){
var state_36728__$1 = state_36728;
var statearr_36804_37130 = state_36728__$1;
(statearr_36804_37130[(2)] = null);

(statearr_36804_37130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (12))){
var inst_36614 = (state_36728[(2)]);
var state_36728__$1 = state_36728;
var statearr_36806_37134 = state_36728__$1;
(statearr_36806_37134[(2)] = inst_36614);

(statearr_36806_37134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (2))){
var inst_36573 = (state_36728[(13)]);
var inst_36580 = cljs.core.seq.call(null,inst_36573);
var inst_36581 = inst_36580;
var inst_36582 = null;
var inst_36583 = (0);
var inst_36584 = (0);
var state_36728__$1 = (function (){var statearr_36807 = state_36728;
(statearr_36807[(7)] = inst_36583);

(statearr_36807[(8)] = inst_36582);

(statearr_36807[(9)] = inst_36584);

(statearr_36807[(10)] = inst_36581);

return statearr_36807;
})();
var statearr_36808_37141 = state_36728__$1;
(statearr_36808_37141[(2)] = null);

(statearr_36808_37141[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (23))){
var inst_36645 = (state_36728[(26)]);
var inst_36643 = (state_36728[(23)]);
var inst_36648 = (state_36728[(24)]);
var inst_36641 = (state_36728[(25)]);
var inst_36637 = (state_36728[(19)]);
var inst_36651 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36653 = (function (){var all_files = inst_36637;
var res_SINGLEQUOTE_ = inst_36641;
var res = inst_36643;
var files_not_loaded = inst_36645;
var dependencies_that_loaded = inst_36648;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36645,inst_36643,inst_36648,inst_36641,inst_36637,inst_36651,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36652){
var map__36809 = p__36652;
var map__36809__$1 = ((((!((map__36809 == null)))?((((map__36809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36809):map__36809);
var request_url = cljs.core.get.call(null,map__36809__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36645,inst_36643,inst_36648,inst_36641,inst_36637,inst_36651,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36654 = cljs.core.reverse.call(null,inst_36648);
var inst_36655 = cljs.core.map.call(null,inst_36653,inst_36654);
var inst_36656 = cljs.core.pr_str.call(null,inst_36655);
var inst_36657 = figwheel.client.utils.log.call(null,inst_36656);
var state_36728__$1 = (function (){var statearr_36811 = state_36728;
(statearr_36811[(31)] = inst_36651);

return statearr_36811;
})();
var statearr_36812_37168 = state_36728__$1;
(statearr_36812_37168[(2)] = inst_36657);

(statearr_36812_37168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (35))){
var state_36728__$1 = state_36728;
var statearr_36814_37179 = state_36728__$1;
(statearr_36814_37179[(2)] = true);

(statearr_36814_37179[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (19))){
var inst_36627 = (state_36728[(12)]);
var inst_36633 = figwheel.client.file_reloading.expand_files.call(null,inst_36627);
var state_36728__$1 = state_36728;
var statearr_36815_37182 = state_36728__$1;
(statearr_36815_37182[(2)] = inst_36633);

(statearr_36815_37182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (11))){
var state_36728__$1 = state_36728;
var statearr_36816_37183 = state_36728__$1;
(statearr_36816_37183[(2)] = null);

(statearr_36816_37183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (9))){
var inst_36616 = (state_36728[(2)]);
var state_36728__$1 = state_36728;
var statearr_36817_37189 = state_36728__$1;
(statearr_36817_37189[(2)] = inst_36616);

(statearr_36817_37189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (5))){
var inst_36583 = (state_36728[(7)]);
var inst_36584 = (state_36728[(9)]);
var inst_36586 = (inst_36584 < inst_36583);
var inst_36587 = inst_36586;
var state_36728__$1 = state_36728;
if(cljs.core.truth_(inst_36587)){
var statearr_36818_37196 = state_36728__$1;
(statearr_36818_37196[(1)] = (7));

} else {
var statearr_36819_37199 = state_36728__$1;
(statearr_36819_37199[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (14))){
var inst_36596 = (state_36728[(22)]);
var inst_36606 = cljs.core.first.call(null,inst_36596);
var inst_36607 = figwheel.client.file_reloading.eval_body.call(null,inst_36606,opts);
var inst_36608 = cljs.core.next.call(null,inst_36596);
var inst_36581 = inst_36608;
var inst_36582 = null;
var inst_36583 = (0);
var inst_36584 = (0);
var state_36728__$1 = (function (){var statearr_36820 = state_36728;
(statearr_36820[(7)] = inst_36583);

(statearr_36820[(32)] = inst_36607);

(statearr_36820[(8)] = inst_36582);

(statearr_36820[(9)] = inst_36584);

(statearr_36820[(10)] = inst_36581);

return statearr_36820;
})();
var statearr_36823_37209 = state_36728__$1;
(statearr_36823_37209[(2)] = null);

(statearr_36823_37209[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (45))){
var state_36728__$1 = state_36728;
var statearr_36824_37215 = state_36728__$1;
(statearr_36824_37215[(2)] = null);

(statearr_36824_37215[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (26))){
var inst_36645 = (state_36728[(26)]);
var inst_36643 = (state_36728[(23)]);
var inst_36648 = (state_36728[(24)]);
var inst_36641 = (state_36728[(25)]);
var inst_36637 = (state_36728[(19)]);
var inst_36663 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36665 = (function (){var all_files = inst_36637;
var res_SINGLEQUOTE_ = inst_36641;
var res = inst_36643;
var files_not_loaded = inst_36645;
var dependencies_that_loaded = inst_36648;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36645,inst_36643,inst_36648,inst_36641,inst_36637,inst_36663,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36664){
var map__36826 = p__36664;
var map__36826__$1 = ((((!((map__36826 == null)))?((((map__36826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36826):map__36826);
var namespace = cljs.core.get.call(null,map__36826__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36826__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36645,inst_36643,inst_36648,inst_36641,inst_36637,inst_36663,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36666 = cljs.core.map.call(null,inst_36665,inst_36643);
var inst_36667 = cljs.core.pr_str.call(null,inst_36666);
var inst_36668 = figwheel.client.utils.log.call(null,inst_36667);
var inst_36669 = (function (){var all_files = inst_36637;
var res_SINGLEQUOTE_ = inst_36641;
var res = inst_36643;
var files_not_loaded = inst_36645;
var dependencies_that_loaded = inst_36648;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36645,inst_36643,inst_36648,inst_36641,inst_36637,inst_36663,inst_36665,inst_36666,inst_36667,inst_36668,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36645,inst_36643,inst_36648,inst_36641,inst_36637,inst_36663,inst_36665,inst_36666,inst_36667,inst_36668,state_val_36729,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36670 = setTimeout(inst_36669,(10));
var state_36728__$1 = (function (){var statearr_36828 = state_36728;
(statearr_36828[(33)] = inst_36668);

(statearr_36828[(34)] = inst_36663);

return statearr_36828;
})();
var statearr_36829_37245 = state_36728__$1;
(statearr_36829_37245[(2)] = inst_36670);

(statearr_36829_37245[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (16))){
var state_36728__$1 = state_36728;
var statearr_36830_37247 = state_36728__$1;
(statearr_36830_37247[(2)] = reload_dependents);

(statearr_36830_37247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (38))){
var inst_36680 = (state_36728[(16)]);
var inst_36699 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36680);
var state_36728__$1 = state_36728;
var statearr_36832_37257 = state_36728__$1;
(statearr_36832_37257[(2)] = inst_36699);

(statearr_36832_37257[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (30))){
var state_36728__$1 = state_36728;
var statearr_36833_37259 = state_36728__$1;
(statearr_36833_37259[(2)] = null);

(statearr_36833_37259[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (10))){
var inst_36596 = (state_36728[(22)]);
var inst_36598 = cljs.core.chunked_seq_QMARK_.call(null,inst_36596);
var state_36728__$1 = state_36728;
if(inst_36598){
var statearr_36834_37266 = state_36728__$1;
(statearr_36834_37266[(1)] = (13));

} else {
var statearr_36835_37269 = state_36728__$1;
(statearr_36835_37269[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (18))){
var inst_36631 = (state_36728[(2)]);
var state_36728__$1 = state_36728;
if(cljs.core.truth_(inst_36631)){
var statearr_36836_37280 = state_36728__$1;
(statearr_36836_37280[(1)] = (19));

} else {
var statearr_36837_37282 = state_36728__$1;
(statearr_36837_37282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (42))){
var state_36728__$1 = state_36728;
var statearr_36838_37288 = state_36728__$1;
(statearr_36838_37288[(2)] = null);

(statearr_36838_37288[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (37))){
var inst_36694 = (state_36728[(2)]);
var state_36728__$1 = state_36728;
var statearr_36839_37295 = state_36728__$1;
(statearr_36839_37295[(2)] = inst_36694);

(statearr_36839_37295[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36729 === (8))){
var inst_36596 = (state_36728[(22)]);
var inst_36581 = (state_36728[(10)]);
var inst_36596__$1 = cljs.core.seq.call(null,inst_36581);
var state_36728__$1 = (function (){var statearr_36840 = state_36728;
(statearr_36840[(22)] = inst_36596__$1);

return statearr_36840;
})();
if(inst_36596__$1){
var statearr_36841_37308 = state_36728__$1;
(statearr_36841_37308[(1)] = (10));

} else {
var statearr_36842_37309 = state_36728__$1;
(statearr_36842_37309[(1)] = (11));

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
}
});})(c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25578__auto__,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto____0 = (function (){
var statearr_36851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36851[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto__);

(statearr_36851[(1)] = (1));

return statearr_36851;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto____1 = (function (state_36728){
while(true){
var ret_value__25580__auto__ = (function (){try{while(true){
var result__25581__auto__ = switch__25578__auto__.call(null,state_36728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25581__auto__;
}
break;
}
}catch (e36852){if((e36852 instanceof Object)){
var ex__25582__auto__ = e36852;
var statearr_36853_37314 = state_36728;
(statearr_36853_37314[(5)] = ex__25582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37317 = state_36728;
state_36728 = G__37317;
continue;
} else {
return ret_value__25580__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto__ = function(state_36728){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto____1.call(this,state_36728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25579__auto__;
})()
;})(switch__25578__auto__,c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26290__auto__ = (function (){var statearr_36855 = f__26289__auto__.call(null);
(statearr_36855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26288__auto__);

return statearr_36855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26290__auto__);
});})(c__26288__auto__,map__36562,map__36562__$1,opts,before_jsload,on_jsload,reload_dependents,map__36563,map__36563__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26288__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37331,link){
var map__37338 = p__37331;
var map__37338__$1 = ((((!((map__37338 == null)))?((((map__37338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37338):map__37338);
var file = cljs.core.get.call(null,map__37338__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37338,map__37338__$1,file){
return (function (p1__37328_SHARP_,p2__37329_SHARP_){
if(cljs.core._EQ_.call(null,p1__37328_SHARP_,p2__37329_SHARP_)){
return p1__37328_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37338,map__37338__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37375){
var map__37376 = p__37375;
var map__37376__$1 = ((((!((map__37376 == null)))?((((map__37376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37376):map__37376);
var match_length = cljs.core.get.call(null,map__37376__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37376__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37370_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37370_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args37443 = [];
var len__23128__auto___37451 = arguments.length;
var i__23129__auto___37454 = (0);
while(true){
if((i__23129__auto___37454 < len__23128__auto___37451)){
args37443.push((arguments[i__23129__auto___37454]));

var G__37456 = (i__23129__auto___37454 + (1));
i__23129__auto___37454 = G__37456;
continue;
} else {
}
break;
}

var G__37449 = args37443.length;
switch (G__37449) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37443.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37460_SHARP_,p2__37461_SHARP_){
return cljs.core.assoc.call(null,p1__37460_SHARP_,cljs.core.get.call(null,p2__37461_SHARP_,key),p2__37461_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37479){
var map__37487 = p__37479;
var map__37487__$1 = ((((!((map__37487 == null)))?((((map__37487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37487):map__37487);
var f_data = map__37487__$1;
var file = cljs.core.get.call(null,map__37487__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37507,files_msg){
var map__37528 = p__37507;
var map__37528__$1 = ((((!((map__37528 == null)))?((((map__37528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37528):map__37528);
var opts = map__37528__$1;
var on_cssload = cljs.core.get.call(null,map__37528__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37536_37565 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__37537_37566 = null;
var count__37538_37567 = (0);
var i__37539_37568 = (0);
while(true){
if((i__37539_37568 < count__37538_37567)){
var f_37576 = cljs.core._nth.call(null,chunk__37537_37566,i__37539_37568);
figwheel.client.file_reloading.reload_css_file.call(null,f_37576);

var G__37579 = seq__37536_37565;
var G__37580 = chunk__37537_37566;
var G__37581 = count__37538_37567;
var G__37582 = (i__37539_37568 + (1));
seq__37536_37565 = G__37579;
chunk__37537_37566 = G__37580;
count__37538_37567 = G__37581;
i__37539_37568 = G__37582;
continue;
} else {
var temp__4657__auto___37616 = cljs.core.seq.call(null,seq__37536_37565);
if(temp__4657__auto___37616){
var seq__37536_37618__$1 = temp__4657__auto___37616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37536_37618__$1)){
var c__22834__auto___37622 = cljs.core.chunk_first.call(null,seq__37536_37618__$1);
var G__37625 = cljs.core.chunk_rest.call(null,seq__37536_37618__$1);
var G__37626 = c__22834__auto___37622;
var G__37627 = cljs.core.count.call(null,c__22834__auto___37622);
var G__37628 = (0);
seq__37536_37565 = G__37625;
chunk__37537_37566 = G__37626;
count__37538_37567 = G__37627;
i__37539_37568 = G__37628;
continue;
} else {
var f_37636 = cljs.core.first.call(null,seq__37536_37618__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37636);

var G__37639 = cljs.core.next.call(null,seq__37536_37618__$1);
var G__37640 = null;
var G__37641 = (0);
var G__37642 = (0);
seq__37536_37565 = G__37639;
chunk__37537_37566 = G__37640;
count__37538_37567 = G__37641;
i__37539_37568 = G__37642;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37528,map__37528__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__37528,map__37528__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map