//>>built
define("dijit/form/_FormValueMixin",["dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/sniff","./_FormWidgetMixin"],function(_1,_2,_3,_4,_5){
return _1("dijit.form._FormValueMixin",_5,{readOnly:false,_setReadOnlyAttr:function(_6){
_2.set(this.focusNode,"readOnly",_6);
this._set("readOnly",_6);
},postCreate:function(){
this.inherited(arguments);
if(_4("ie")){
this.connect(this.focusNode||this.domNode,"onkeydown",this._onKeyDown);
}
if(this._resetValue===undefined){
this._lastValueReported=this._resetValue=this.value;
}
},_setValueAttr:function(_7,_8){
this._handleOnChange(_7,_8);
},_handleOnChange:function(_9,_a){
this._set("value",_9);
this.inherited(arguments);
},undo:function(){
this._setValueAttr(this._lastValueReported,false);
},reset:function(){
this._hasBeenBlurred=false;
this._setValueAttr(this._resetValue,true);
},_onKeyDown:function(e){
if(e.keyCode==_3.ESCAPE&&!(e.ctrlKey||e.altKey||e.metaKey)){
if(_4("ie")<9||(_4("ie")&&_4("quirks"))){
e.preventDefault();
var _b=e.srcElement,te=_b.ownerDocument.createEventObject();
te.keyCode=_3.ESCAPE;
te.shiftKey=e.shiftKey;
_b.fireEvent("onkeypress",te);
}
}
}});
});
