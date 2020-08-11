// Compiled by ClojureScript 1.10.597
goog.provide("reagent.impl.protocols");

/**
 * @interface
 */
reagent.impl.protocols.Compiler = function(){};

reagent.impl.protocols.get_id = (function reagent$impl$protocols$get_id(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$get_id$arity$1 == null)))))){
return this$.reagent$impl$protocols$Compiler$get_id$arity$1(this$);
} else {
var x__11578__auto__ = (((this$ == null))?null:this$);
var m__11579__auto__ = (reagent.impl.protocols.get_id[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,this$);
} else {
var m__11576__auto__ = (reagent.impl.protocols.get_id["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.get-id",this$);
}
}
}
});

reagent.impl.protocols.as_element = (function reagent$impl$protocols$as_element(this$,x){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$as_element$arity$2 == null)))))){
return this$.reagent$impl$protocols$Compiler$as_element$arity$2(this$,x);
} else {
var x__11578__auto__ = (((this$ == null))?null:this$);
var m__11579__auto__ = (reagent.impl.protocols.as_element[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,this$,x);
} else {
var m__11576__auto__ = (reagent.impl.protocols.as_element["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.as-element",this$);
}
}
}
});

reagent.impl.protocols.make_element = (function reagent$impl$protocols$make_element(this$,argv,component,jsprops,first_child){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$make_element$arity$5 == null)))))){
return this$.reagent$impl$protocols$Compiler$make_element$arity$5(this$,argv,component,jsprops,first_child);
} else {
var x__11578__auto__ = (((this$ == null))?null:this$);
var m__11579__auto__ = (reagent.impl.protocols.make_element[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,this$,argv,component,jsprops,first_child);
} else {
var m__11576__auto__ = (reagent.impl.protocols.make_element["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,this$,argv,component,jsprops,first_child);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.make-element",this$);
}
}
}
});


//# sourceURL=reagent/impl/protocols.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9pbXBsL3Byb3RvY29scy5qcyIsInNvdXJjZXMiOlsicHJvdG9jb2xzLmNsanMiXSwibGluZUNvdW50Ijo2NywibWFwcGluZ3MiOiI7QUFFQSxBQUFBO0FBQUE7OztrQ0FBQSxsQ0FBYVE7O0FBQWIsZ0NBQUEsaENBQ0dOLHdFQUFRTztBQURYLEFBQUEsR0FBQSxFQUFBLEdBQUEsVUFBQSxhQUFBLEdBQUEsQ0FBQSx3REFBQSxsRkFDV0EsMEJBQUFBO0FBRFgsT0FDV0EscURBQUFBOztBQURYLElBQUFULG1CQUFBLEVBQUEsVUFBQSxPQUFBLGhCQUNXUyxxQkFBQUE7SUFEWFIsbUJBQUEsQ0FBQUMsOEJBQUEsQUFBQUMsWUFBQUg7QUFBQSxBQUFBLEdBQUEsR0FBQSxDQUFBQyxvQkFBQTtBQUFBLE9BQUFBLDJCQUNXUTs7QUFEWCxJQUFBTCxtQkFBQSxDQUFBRiw4QkFBQTtBQUFBLEFBQUEsR0FBQSxHQUFBLENBQUFFLG9CQUFBO0FBQUEsT0FBQUEsMkJBQ1dLOztBQURYLE1BQUEsQUFBQUoscUNBQUEsa0JBQ1dJOzs7Ozs7QUFEWCxvQ0FBQSxwQ0FFR0gsZ0ZBQVlHLE1BQUtDO0FBRnBCLEFBQUEsR0FBQSxFQUFBLEdBQUEsVUFBQSxhQUFBLEdBQUEsQ0FBQSw0REFBQSx0RkFFZUQsMEJBQUFBO0FBRmYsT0FFZUEseURBQUFBLE1BQUtDOztBQUZwQixJQUFBVixtQkFBQSxFQUFBLFVBQUEsT0FBQSxoQkFFZVMscUJBQUFBO0lBRmZSLG1CQUFBLENBQUFLLGtDQUFBLEFBQUFILFlBQUFIO0FBQUEsQUFBQSxHQUFBLEdBQUEsQ0FBQUMsb0JBQUE7QUFBQSxPQUFBQSwyQkFFZVEsTUFBS0M7O0FBRnBCLElBQUFOLG1CQUFBLENBQUFFLGtDQUFBO0FBQUEsQUFBQSxHQUFBLEdBQUEsQ0FBQUYsb0JBQUE7QUFBQSxPQUFBQSwyQkFFZUssTUFBS0M7O0FBRnBCLE1BQUEsQUFBQUwscUNBQUEsc0JBRWVJOzs7Ozs7QUFGZixzQ0FBQSx0Q0FHR0Ysb0ZBQWNFLE1BQUtFLEtBQUtDLFVBQVVDLFFBQVFDO0FBSDdDLEFBQUEsR0FBQSxFQUFBLEdBQUEsVUFBQSxhQUFBLEdBQUEsQ0FBQSw4REFBQSx4RkFHaUJMLDBCQUFBQTtBQUhqQixPQUdpQkEsMkRBQUFBLE1BQUtFLEtBQUtDLFVBQVVDLFFBQVFDOztBQUg3QyxJQUFBZCxtQkFBQSxFQUFBLFVBQUEsT0FBQSxoQkFHaUJTLHFCQUFBQTtJQUhqQlIsbUJBQUEsQ0FBQU0sb0NBQUEsQUFBQUosWUFBQUg7QUFBQSxBQUFBLEdBQUEsR0FBQSxDQUFBQyxvQkFBQTtBQUFBLE9BQUFBLDJCQUdpQlEsTUFBS0UsS0FBS0MsVUFBVUMsUUFBUUM7O0FBSDdDLElBQUFWLG1CQUFBLENBQUFHLG9DQUFBO0FBQUEsQUFBQSxHQUFBLEdBQUEsQ0FBQUgsb0JBQUE7QUFBQSxPQUFBQSwyQkFHaUJLLE1BQUtFLEtBQUtDLFVBQVVDLFFBQVFDOztBQUg3QyxNQUFBLEFBQUFULHFDQUFBLHdCQUdpQkk7Ozs7OztBQUhqQiIsIm5hbWVzIjpbInhfXzExNTc4X19hdXRvX18iLCJtX18xMTU3OV9fYXV0b19fIiwicmVhZ2VudC5pbXBsLnByb3RvY29scy9nZXQtaWQiLCJnb29nL3R5cGVPZiIsIm1fXzExNTc2X19hdXRvX18iLCJjbGpzLmNvcmUvbWlzc2luZy1wcm90b2NvbCIsInJlYWdlbnQuaW1wbC5wcm90b2NvbHMvYXMtZWxlbWVudCIsInJlYWdlbnQuaW1wbC5wcm90b2NvbHMvbWFrZS1lbGVtZW50IiwicmVhZ2VudC5pbXBsLnByb3RvY29scy9Db21waWxlciIsInRoaXMiLCJ4IiwiYXJndiIsImNvbXBvbmVudCIsImpzcHJvcHMiLCJmaXJzdC1jaGlsZCJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgcmVhZ2VudC5pbXBsLnByb3RvY29scylcblxuKGRlZnByb3RvY29sIENvbXBpbGVyXG4gIChnZXQtaWQgW3RoaXNdKVxuICAoYXMtZWxlbWVudCBbdGhpcyB4XSlcbiAgKG1ha2UtZWxlbWVudCBbdGhpcyBhcmd2IGNvbXBvbmVudCBqc3Byb3BzIGZpcnN0LWNoaWxkXSkpXG5cbiJdfQ==