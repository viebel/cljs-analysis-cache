// Compiled by ClojureScript 1.10.339
goog.provide("expound.ansi");
/**
 * Map of symbols to numeric SGR (select graphic rendition) codes.
 */
expound.ansi.sgr_code = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bold","bold",(-116809535)),new cljs.core.Keyword(null,"blink","blink",(-271985917)),new cljs.core.Keyword(null,"white","white",(-483998618)),new cljs.core.Keyword(null,"yellow","yellow",(-881035449)),new cljs.core.Keyword(null,"bg-red","bg-red",(-1645498040)),new cljs.core.Keyword(null,"bg-cyan","bg-cyan",(-1582237015)),new cljs.core.Keyword(null,"green","green",(-945526839)),new cljs.core.Keyword(null,"bg-green","bg-green",(-138353590)),new cljs.core.Keyword(null,"fg-reset","fg-reset",(1908873578)),new cljs.core.Keyword(null,"cyan","cyan",(1118839274)),new cljs.core.Keyword(null,"bg-black","bg-black",(2110303851)),new cljs.core.Keyword(null,"fg-256","fg-256",(-255017013)),new cljs.core.Keyword(null,"underline","underline",(2018066703)),new cljs.core.Keyword(null,"bg-magenta","bg-magenta",(2073641232)),new cljs.core.Keyword(null,"strike","strike",(-1173815471)),new cljs.core.Keyword(null,"bg-yellow","bg-yellow",(-1293468429)),new cljs.core.Keyword(null,"hidden","hidden",(-312506092)),new cljs.core.Keyword(null,"red","red",(-969428204)),new cljs.core.Keyword(null,"blue","blue",(-622100620)),new cljs.core.Keyword(null,"bg-white","bg-white",(-1453241673)),new cljs.core.Keyword(null,"bg-256","bg-256",(1097886744)),new cljs.core.Keyword(null,"magenta","magenta",(1687937081)),new cljs.core.Keyword(null,"bg-blue","bg-blue",(-1747478308)),new cljs.core.Keyword(null,"bg-reset","bg-reset",(857739453)),new cljs.core.Keyword(null,"none","none",(1333468478)),new cljs.core.Keyword(null,"reverse","reverse",(-888455266)),new cljs.core.Keyword(null,"black","black",(1294279647))],[(1),(5),(37),(33),(41),(46),(32),(42),(39),(36),(40),(38),(3),(45),(9),(43),(8),(31),(34),(47),(48),(35),(44),(49),(0),(7),(30)]);
expound.ansi._STAR_enable_color_STAR_ = false;
/**
 * Returns an ANSI escope string which will apply the given collection of SGR
 *   codes.
 */
expound.ansi.esc = (function expound$ansi$esc(codes){
var codes__$1 = cljs.core.map.call(null,expound.ansi.sgr_code,codes,codes);
var codes__$2 = clojure.string.join.call(null,";",codes__$1);
return ["\u001b","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(codes__$2),"m"].join('');
});
/**
 * Returns an ANSI escope string which will enact the given SGR codes.
 */
expound.ansi.escape = (function expound$ansi$escape(var_args){
var args__9144__auto__ = [];
var len__9141__auto___63 = arguments.length;
var i__9142__auto___64 = (0);
while(true){
if((i__9142__auto___64 < len__9141__auto___63)){
args__9144__auto__.push((arguments[i__9142__auto___64]));

var G__65 = (i__9142__auto___64 + (1));
i__9142__auto___64 = G__65;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((0) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((0)),(0),null)):null);
return expound.ansi.escape.cljs$core$IFn$_invoke$arity$variadic(argseq__9145__auto__);
});

expound.ansi.escape.cljs$core$IFn$_invoke$arity$variadic = (function (codes){
return expound.ansi.esc.call(null,codes);
});

expound.ansi.escape.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
expound.ansi.escape.cljs$lang$applyTo = (function (seq62){
var self__9133__auto__ = this;
return self__9133__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62));
});

/**
 * Wraps the given string with SGR escapes to apply the given codes, then reset
 *   the graphics.
 */
expound.ansi.sgr = (function expound$ansi$sgr(var_args){
var args__9144__auto__ = [];
var len__9141__auto___68 = arguments.length;
var i__9142__auto___69 = (0);
while(true){
if((i__9142__auto___69 < len__9141__auto___68)){
args__9144__auto__.push((arguments[i__9142__auto___69]));

var G__70 = (i__9142__auto___69 + (1));
i__9142__auto___69 = G__70;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((1) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((1)),(0),null)):null);
return expound.ansi.sgr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9145__auto__);
});

expound.ansi.sgr.cljs$core$IFn$_invoke$arity$variadic = (function (string,codes){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.esc.call(null,codes)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.escape.call(null,new cljs.core.Keyword(null,"none","none",(1333468478))))].join('');
});

expound.ansi.sgr.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
expound.ansi.sgr.cljs$lang$applyTo = (function (seq66){
var G__67 = cljs.core.first.call(null,seq66);
var seq66__$1 = cljs.core.next.call(null,seq66);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67,seq66__$1);
});

/**
 * Removes color codes from the given string.
 */
expound.ansi.strip = (function expound$ansi$strip(string){
return clojure.string.replace.call(null,string,/\u001b\[[0-9;]*[mK]/,"");
});
var ret__9167__auto___74 = (function (){
expound.ansi.with_color = (function expound$ansi$with_color(var_args){
var args__9144__auto__ = [];
var len__9141__auto___75 = arguments.length;
var i__9142__auto___76 = (0);
while(true){
if((i__9142__auto___76 < len__9141__auto___75)){
args__9144__auto__.push((arguments[i__9142__auto___76]));

var G__77 = (i__9142__auto___76 + (1));
i__9142__auto___76 = G__77;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return expound.ansi.with_color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

expound.ansi.with_color.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("expound.ansi","*enable-color*","expound.ansi/*enable-color*",(-970177940),null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),body));
});

expound.ansi.with_color.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
expound.ansi.with_color.cljs$lang$applyTo = (function (seq71){
var G__72 = cljs.core.first.call(null,seq71);
var seq71__$1 = cljs.core.next.call(null,seq71);
var G__73 = cljs.core.first.call(null,seq71__$1);
var seq71__$2 = cljs.core.next.call(null,seq71__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72,G__73,seq71__$2);
});

return null;
})()
;
expound.ansi.with_color.cljs$lang$macro = true;

var ret__9167__auto___82 = (function (){
expound.ansi.with_color_when = (function expound$ansi$with_color_when(var_args){
var args__9144__auto__ = [];
var len__9141__auto___83 = arguments.length;
var i__9142__auto___84 = (0);
while(true){
if((i__9142__auto___84 < len__9141__auto___83)){
args__9144__auto__.push((arguments[i__9142__auto___84]));

var G__85 = (i__9142__auto___84 + (1));
i__9142__auto___84 = G__85;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((3) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((3)),(0),null)):null);
return expound.ansi.with_color_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9145__auto__);
});

expound.ansi.with_color_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,b,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("expound.ansi","with-color","expound.ansi/with-color",(-531311072),null),null,(1),null)),body)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),body)),null,(1),null))));
});

expound.ansi.with_color_when.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
expound.ansi.with_color_when.cljs$lang$applyTo = (function (seq78){
var G__79 = cljs.core.first.call(null,seq78);
var seq78__$1 = cljs.core.next.call(null,seq78);
var G__80 = cljs.core.first.call(null,seq78__$1);
var seq78__$2 = cljs.core.next.call(null,seq78__$1);
var G__81 = cljs.core.first.call(null,seq78__$2);
var seq78__$3 = cljs.core.next.call(null,seq78__$2);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79,G__80,G__81,seq78__$3);
});

return null;
})()
;
expound.ansi.with_color_when.cljs$lang$macro = true;

expound.ansi.ansi_code_QMARK_ = expound.ansi.sgr_code;
expound.ansi._STAR_print_styles_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"good-key","good-key",(-1265033983)),new cljs.core.Keyword(null,"warning-key","warning-key",(-1487066651)),new cljs.core.Keyword(null,"correct-key","correct-key",(1087492967)),new cljs.core.Keyword(null,"highlight","highlight",(-800930873)),new cljs.core.Keyword(null,"focus-path","focus-path",(-2048689431)),new cljs.core.Keyword(null,"bad-value","bad-value",(-139100659)),new cljs.core.Keyword(null,"footer","footer",(1606445390)),new cljs.core.Keyword(null,"header","header",(119441134)),new cljs.core.Keyword(null,"good-pred","good-pred",(-629085297)),new cljs.core.Keyword(null,"good","good",(511701169)),new cljs.core.Keyword(null,"focus-key","focus-key",(2074966449)),new cljs.core.Keyword(null,"pointer","pointer",(85071187)),new cljs.core.Keyword(null,"bad","bad",(1127186645)),new cljs.core.Keyword(null,"error-key","error-key",(-1651308715)),new cljs.core.Keyword(null,"none","none",(1333468478)),new cljs.core.Keyword(null,"message","message",(-406056002))],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",(-945526839))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",(-116809535))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",(-945526839))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",(-116809535))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",(1687937081))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",(-969428204))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cyan","cyan",(1118839274))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cyan","cyan",(1118839274))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",(-945526839))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",(-945526839))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",(-116809535))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",(1687937081))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",(-969428204))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",(-969428204))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",(1333468478))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",(1687937081))], null)]);
var ret__9167__auto___87 = expound.ansi.black_and_white = (function expound$ansi$black_and_white(_AMPERSAND_form,_AMPERSAND_env,body){
var _STAR_print_styles_STAR_86 = expound.ansi._STAR_print_styles_STAR_;
expound.ansi._STAR_print_styles_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

try{return cljs.core.unquote.call(null,body);
}finally {expound.ansi._STAR_print_styles_STAR_ = _STAR_print_styles_STAR_86;
}});
expound.ansi.black_and_white.cljs$lang$macro = true;

expound.ansi.resolve_styles = (function expound$ansi$resolve_styles(styles){
var temp__7824__auto__ = cljs.core.not_empty.call(null,cljs.core.mapcat.call(null,(function (p1__1_SHARP_){
var or__8070__auto__ = (function (){var temp__7879__auto__ = expound.ansi._STAR_print_styles_STAR_.call(null,p1__1_SHARP_);
if(cljs.core.truth_(temp__7879__auto__)){
var res = temp__7879__auto__;
return res;
} else {
return null;
}
})();
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1_SHARP_], null);
}
}),styles));
if(cljs.core.truth_(temp__7824__auto__)){
var res = temp__7824__auto__;
return res;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",(-116809535))], null);
}
});
expound.ansi.color = (function expound$ansi$color(var_args){
var args__9144__auto__ = [];
var len__9141__auto___90 = arguments.length;
var i__9142__auto___91 = (0);
while(true){
if((i__9142__auto___91 < len__9141__auto___90)){
args__9144__auto__.push((arguments[i__9142__auto___91]));

var G__92 = (i__9142__auto___91 + (1));
i__9142__auto___91 = G__92;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((1) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((1)),(0),null)):null);
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9145__auto__);
});

expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic = (function (s,styles){
if(expound.ansi._STAR_enable_color_STAR_){
return cljs.core.apply.call(null,expound.ansi.sgr,s,expound.ansi.resolve_styles.call(null,styles));
} else {
return s;
}
});

expound.ansi.color.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
expound.ansi.color.cljs$lang$applyTo = (function (seq88){
var G__89 = cljs.core.first.call(null,seq88);
var seq88__$1 = cljs.core.next.call(null,seq88);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89,seq88__$1);
});

var ret__9167__auto___93 = expound.ansi.print_color_text = (function expound$ansi$print_color_text(_AMPERSAND_form,_AMPERSAND_env,codes,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("expound.ansi","*enable-color*","expound.ansi/*enable-color*",(-970177940),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".write",".write",(1632359621),null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",(-1813565621),null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",(-1269645878)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expound.ansi","expound.ansi",(1079087012),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",(212345235)),null,(1),null)),(new cljs.core.List(null,(117),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",(2078222095)),null,(1),null)),(new cljs.core.List(null,(32),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),null,(1),null)),(new cljs.core.List(null,(117),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),null,(1),null)),(new cljs.core.List(null,(37),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"java.io.Writer","java.io.Writer",(-1891611896),null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("expound.ansi","esc","expound.ansi/esc",(509051398),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("expound.ansi","resolve-styles","expound.ansi/resolve-styles",(450366791),null),null,(1),null)),(new cljs.core.List(null,codes,null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,body,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".write",".write",(1632359621),null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",(-1813565621),null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",(-1269645878)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expound.ansi","expound.ansi",(1079087012),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",(212345235)),null,(1),null)),(new cljs.core.List(null,(119),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",(2078222095)),null,(1),null)),(new cljs.core.List(null,(32),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),null,(1),null)),(new cljs.core.List(null,(119),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),null,(1),null)),(new cljs.core.List(null,(37),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"java.io.Writer","java.io.Writer",(-1891611896),null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("expound.ansi","escape","expound.ansi/escape",(114469759),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"none","none",(1333468478)),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))));
});
expound.ansi.print_color_text.cljs$lang$macro = true;


//# sourceURL=expound/ansi.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3VuZC9hbnNpLmpzIiwic291cmNlcyI6WyJhbnNpLmNsanMiXSwibGluZUNvdW50IjoyNjAsIm1hcHBpbmdzIjoiO0FBT0E7Ozt3QkFBQSx3Q0FBQSx1REFBQSx5REFBQSx5REFBQSwyREFBQSw0REFBQSw4REFBQSx5REFBQSwrREFBQSwrREFBQSx1REFBQSwrREFBQSwyREFBQSxpRUFBQSxtRUFBQSw0REFBQSxrRUFBQSwyREFBQSxxREFBQSx1REFBQSxnRUFBQSwyREFBQSw2REFBQSw4REFBQSw4REFBQSx1REFBQSw2REFBQSwyREFBQSxJQUFBLElBQUEsS0FBQSxLQUFBLEtBQUEsS0FBQSxLQUFBLEtBQUEsS0FBQSxLQUFBLEtBQUEsS0FBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxLQUFBLEtBQUEsS0FBQSxLQUFBLEtBQUEsS0FBQSxJQUFBLElBQUEsN3dEQUFLQTtBQThCTCx3Q0FBQSx4Q0FBZUM7QUFFZjs7OzttQkFBQSxuQkFBTUMsOENBR0hDO0FBSEgsQUFJRSxJQUFNQSxZQUFNLEFBQUNDLHdCQUFJSixzQkFBU0csTUFBTUE7SUFDMUJBLFlBQU0sOEJBQUEsOUJBQUNFLGtDQUFZRjtBQUR6QixBQUVFLFFBQUEsU0FBQSwyREFBQSxYQUFlQTs7QUFFbkIsQUFBQTs7O3NCQUFBLDhCQUFBRyxwREFBTUs7QUFBTixBQUFBLElBQUFKLHFCQUFBO0FBQUEsQUFBQSxJQUFBQyx1QkFBQSxBQUFBO0FBQUEsQUFBQSxJQUFBQyxxQkFBQTs7QUFBQSxBQUFBLEdBQUEsQ0FBQUEscUJBQUFEO0FBQUEsQUFBQSxBQUFBRCx3QkFBQSxDQUFBLFVBQUFFOztBQUFBLFlBQUEsQ0FBQUEscUJBQUE7Ozs7QUFBQTs7OztBQUFBLElBQUFDLHVCQUFBLEVBQUEsQ0FBQSxNQUFBLEFBQUFILDRCQUFBLEFBQUEsMEJBQUEsQUFBQUEseUJBQUEsS0FBQSxJQUFBLE9BQUEsOURBdTlGc0R5RDtBQXY5RnRELEFBQUEsT0FBQXJELHlEQUFBRDs7O0FBQUEsQUFB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QUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSx1REFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUYsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLCtEQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBK0IsOEJBQUEsK0VBQUEsQUFBQUQsMEJBQUFFLG9CQUFBLEFBQUFsQyw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsd0RBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLDJFQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxzREFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsTUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsMkRBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEtBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLCtEQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxNQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxtRUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsS0FBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsc0RBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLGdGQUFBLEtBQUEsSUFBQSxXQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBRiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsOEVBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLDJFQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBRiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsK0VBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxxR0FBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLFdBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxVQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBRiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsK0RBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUErQiw4QkFBQSwrRUFBQSxBQUFBRCwwQkFBQUUsb0JBQUEsQUFBQWxDLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSx3REFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsMkVBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLHNEQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxNQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSwyREFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsS0FBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsK0RBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLE1BQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLG1FQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxLQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxzREFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsZ0ZBQUEsS0FBQSxJQUFBLFdBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxxRkFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsdURBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxVQUFBLEtBQUEsSUFBQSwvOERBSXNFekIsdUhBQzlEOEIsMDBEQUVGQTs7QUFQTixBQUFBLEFBQUEsZ0RBQUEsaERBQVU0Qjs7QUFBVnZDIiwibmFtZXMiOlsiZXhwb3VuZC5hbnNpL3Nnci1jb2RlIiwiZXhwb3VuZC5hbnNpLyplbmFibGUtY29sb3IqIiwiZXhwb3VuZC5hbnNpL2VzYyIsImNvZGVzIiwiY2xqcy5jb3JlL21hcCIsImNsb2p1cmUuc3RyaW5nL2pvaW4iLCJ2YXJfYXJncyIsImFyZ3NfXzkxNDRfX2F1dG9fXyIsImxlbl9fOTE0MV9fYXV0b19fIiwiaV9fOTE0Ml9fYXV0b19fIiwiYXJnc2VxX185MTQ1X19hdXRvX18iLCJleHBvdW5kLmFuc2kvZXNjYXBlIiwic2VxNjIiLCJzZWxmX185MTMzX19hdXRvX18iLCJjbGpzLmNvcmUvc2VxIiwiZXhwb3VuZC5hbnNpL3NnciIsInNlcTY2IiwiR19fNjciLCJzZWxmX185MTMyX19hdXRvX18iLCJzdHJpbmciLCJleHBvdW5kLmFuc2kvc3RyaXAiLCJjbG9qdXJlLnN0cmluZy9yZXBsYWNlIiwicmV0X185MTY3X19hdXRvX18iLCJleHBvdW5kLmFuc2kvd2l0aC1jb2xvciIsIiZmb3JtIiwiJmVudiIsImNsanMuY29yZS9zZXF1ZW5jZSIsImNsanMuY29yZS9jb25jYXQiLCJjbGpzLmNvcmUvTGlzdCIsImNsanMuY29yZS92ZWMiLCJzZXE3MSIsIkdfXzcyIiwiR19fNzMiLCJib2R5IiwiZXhwb3VuZC5hbnNpL3dpdGgtY29sb3Itd2hlbiIsInNlcTc4IiwiR19fNzkiLCJHX184MCIsIkdfXzgxIiwiYiIsImV4cG91bmQuYW5zaS9hbnNpLWNvZGU/IiwiZXhwb3VuZC5hbnNpLypwcmludC1zdHlsZXMqIiwiZXhwb3VuZC5hbnNpL2JsYWNrLWFuZC13aGl0ZSIsIipwcmludC1zdHlsZXMqODYiLCJjbGpzLmNvcmUvdW5xdW90ZSIsImV4cG91bmQuYW5zaS9yZXNvbHZlLXN0eWxlcyIsInN0eWxlcyIsInRlbXBfXzc4MjRfX2F1dG9fXyIsInJlcyIsImNsanMuY29yZS9ub3QtZW1wdHkiLCJwMV9fMSMiLCJjbGpzLmNvcmUvbWFwY2F0Iiwib3JfXzgwNzBfX2F1dG9fXyIsInRlbXBfXzc4NzlfX2F1dG9fXyIsImV4cG91bmQuYW5zaS9jb2xvciIsInNlcTg4IiwiR19fODkiLCJzIiwiY2xqcy5jb3JlL2FwcGx5IiwiY2xqcy5jb3JlL3dpdGgtbWV0YSIsImNsanMuY29yZS9hcnJheS1tYXAiLCJleHBvdW5kLmFuc2kvcHJpbnQtY29sb3ItdGV4dCIsImNsanMuY29yZS9maXJzdCIsImNsanMuY29yZS9uZXh0IiwiY2xqcy5jb3JlL0luZGV4ZWRTZXEiXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIGV4cG91bmQuYW5zaVxuICAoOnJlcXVpcmUgW2Nsb2p1cmUuc3RyaW5nIDphcyBzdHJdKSlcblxuOzsgQ29waWVkIGZyb20gc3RyaWN0bHktc3BlY2tpbmcsIHNpbmNlIEkgc2VlIG5vIHJlYXNvblxuOzsgdG8gZGV2aWF0ZSBmcm9tIHRoZSBjb2xvcnMgZGlzcGxheWVkIGluIGZpZ3doZWVsXG47OyBodHRwczovL2dpdGh1Yi5jb20vYmhhdW1hbi9zdHJpY3RseS1zcGVja2luZy9ibG9iL2YxMDJjOWJkNjA0ZjBjMjM4YTczOGFjOWUyYjFmNjk2OGZkZmQyZDgvc3JjL3N0cmljdGx5X3NwZWNraW5nL2Fuc2lfdXRpbC5jbGpcblxuKGRlZiBzZ3ItY29kZVxuICBcIk1hcCBvZiBzeW1ib2xzIHRvIG51bWVyaWMgU0dSIChzZWxlY3QgZ3JhcGhpYyByZW5kaXRpb24pIGNvZGVzLlwiXG4gIHs6bm9uZSAgICAgICAgMFxuICAgOmJvbGQgICAgICAgIDFcbiAgIDp1bmRlcmxpbmUgICAzXG4gICA6YmxpbmsgICAgICAgNVxuICAgOnJldmVyc2UgICAgIDdcbiAgIDpoaWRkZW4gICAgICA4XG4gICA6c3RyaWtlICAgICAgOVxuICAgOmJsYWNrICAgICAgMzBcbiAgIDpyZWQgICAgICAgIDMxXG4gICA6Z3JlZW4gICAgICAzMlxuICAgOnllbGxvdyAgICAgMzNcbiAgIDpibHVlICAgICAgIDM0XG4gICA6bWFnZW50YSAgICAzNVxuICAgOmN5YW4gICAgICAgMzZcbiAgIDp3aGl0ZSAgICAgIDM3XG4gICA6ZmctMjU2ICAgICAzOFxuICAgOmZnLXJlc2V0ICAgMzlcbiAgIDpiZy1ibGFjayAgIDQwXG4gICA6YmctcmVkICAgICA0MVxuICAgOmJnLWdyZWVuICAgNDJcbiAgIDpiZy15ZWxsb3cgIDQzXG4gICA6YmctYmx1ZSAgICA0NFxuICAgOmJnLW1hZ2VudGEgNDVcbiAgIDpiZy1jeWFuICAgIDQ2XG4gICA6Ymctd2hpdGUgICA0N1xuICAgOmJnLTI1NiAgICAgNDhcbiAgIDpiZy1yZXNldCAgIDQ5fSlcblxuKGRlZiBeOmR5bmFtaWMgKmVuYWJsZS1jb2xvciogZmFsc2UpXG5cbihkZWZuIGVzY1xuICBcIlJldHVybnMgYW4gQU5TSSBlc2NvcGUgc3RyaW5nIHdoaWNoIHdpbGwgYXBwbHkgdGhlIGdpdmVuIGNvbGxlY3Rpb24gb2YgU0dSXG4gIGNvZGVzLlwiXG4gIFtjb2Rlc11cbiAgKGxldCBbY29kZXMgKG1hcCBzZ3ItY29kZSBjb2RlcyBjb2RlcylcbiAgICAgICAgY29kZXMgKHN0ci9qb2luIFxcOyBjb2RlcyldXG4gICAgKHN0ciBcXHUwMDFiIFxcWyBjb2RlcyBcXG0pKSlcblxuKGRlZm4gZXNjYXBlXG4gIFwiUmV0dXJucyBhbiBBTlNJIGVzY29wZSBzdHJpbmcgd2hpY2ggd2lsbCBlbmFjdCB0aGUgZ2l2ZW4gU0dSIGNvZGVzLlwiXG4gIFsmIGNvZGVzXVxuICAoZXNjIGNvZGVzKSlcblxuKGRlZm4gc2dyXG4gIFwiV3JhcHMgdGhlIGdpdmVuIHN0cmluZyB3aXRoIFNHUiBlc2NhcGVzIHRvIGFwcGx5IHRoZSBnaXZlbiBjb2RlcywgdGhlbiByZXNldFxuICB0aGUgZ3JhcGhpY3MuXCJcbiAgW3N0cmluZyAmIGNvZGVzXVxuICAoc3RyIChlc2MgY29kZXMpIHN0cmluZyAoZXNjYXBlIDpub25lKSkpXG5cbihkZWZuIHN0cmlwXG4gIFwiUmVtb3ZlcyBjb2xvciBjb2RlcyBmcm9tIHRoZSBnaXZlbiBzdHJpbmcuXCJcbiAgW3N0cmluZ11cbiAgKHN0ci9yZXBsYWNlIHN0cmluZyAjXCJcXHUwMDFiXFxbWzAtOTtdKlttS11cIiBcIlwiKSlcblxuKGRlZm1hY3JvIHdpdGgtY29sb3IgWyYgYm9keV1cbiAgYChiaW5kaW5nIFsqZW5hYmxlLWNvbG9yKiB0cnVlXVxuICAgICB+QGJvZHkpKVxuXG4oZGVmbWFjcm8gd2l0aC1jb2xvci13aGVuIFtiICYgYm9keV1cbiAgYChpZiB+YlxuICAgICAod2l0aC1jb2xvciB+QGJvZHkpXG4gICAgIChkbyB+QGJvZHkpKSlcblxuKGRlZiBhbnNpLWNvZGU/IHNnci1jb2RlKVxuXG4oZGVmIF46ZHluYW1pYyAqcHJpbnQtc3R5bGVzKlxuICB7OmhpZ2hsaWdodCAgIFs6Ym9sZF1cbiAgIDpnb29kICAgICAgICBbOmdyZWVuXVxuICAgOmdvb2QtcHJlZCAgIFs6Z3JlZW5dXG4gICA6Z29vZC1rZXkgICAgWzpncmVlbl1cbiAgIDpiYWQgICAgICAgICBbOnJlZF1cbiAgIDpiYWQtdmFsdWUgICBbOnJlZF1cbiAgIDplcnJvci1rZXkgICBbOnJlZF1cbiAgIDpmb2N1cy1rZXkgICBbOmJvbGRdXG4gICA6Y29ycmVjdC1rZXkgWzpncmVlbl1cbiAgIDpoZWFkZXIgICAgICBbOmN5YW5dXG4gICA6Zm9vdGVyICAgICAgWzpjeWFuXVxuICAgOndhcm5pbmcta2V5IFs6Ym9sZF1cbiAgIDpmb2N1cy1wYXRoICBbOm1hZ2VudGFdXG4gICA6bWVzc2FnZSAgICAgWzptYWdlbnRhXVxuICAgOnBvaW50ZXIgICAgIFs6bWFnZW50YV1cbiAgIDpub25lICAgICAgICBbOm5vbmVdfSlcblxuKGRlZm1hY3JvIGJsYWNrLWFuZC13aGl0ZSBbYm9keV1cbiAgKGJpbmRpbmcgWypwcmludC1zdHlsZXMqIHt9XVxuICAgIH5ib2R5KSlcblxuKGRlZm4gcmVzb2x2ZS1zdHlsZXMgW3N0eWxlc11cbiAgKGlmLWxldCBbcmVzIChub3QtZW1wdHlcbiAgICAgICAgICAgICAgICAobWFwY2F0ICMob3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHdoZW4tbGV0IFtyZXMgKCpwcmludC1zdHlsZXMqICUpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzKSldXG4gICAgcmVzXG4gICAgOzsgZmFsbCBiYWNrIHRvIGJyaWdodFxuICAgIFs6Ym9sZF0pKVxuXG4oZGVmbiBjb2xvciBbcyAmIHN0eWxlc11cbiAgKGlmICplbmFibGUtY29sb3IqXG4gICAgKGFwcGx5IHNnciBzIChyZXNvbHZlLXN0eWxlcyBzdHlsZXMpKVxuICAgIHMpKVxuXG4oZGVmbWFjcm8gcHJpbnQtY29sb3ItdGV4dFxuICBbY29kZXMgYm9keV1cbiAgYChpZiAqZW5hYmxlLWNvbG9yKlxuICAgICAoZG9cbiAgICAgICAoLndyaXRlIF5qYXZhLmlvLldyaXRlciAqb3V0KiAoYXBwbHkgc3RyIChlc2MgKHJlc29sdmUtc3R5bGVzIH5jb2RlcykpKSlcbiAgICAgICB+Ym9keVxuICAgICAgICgud3JpdGUgXmphdmEuaW8uV3JpdGVyICpvdXQqIChlc2NhcGUgOm5vbmUpKSlcbiAgICAgfmJvZHkpKVxuIl19