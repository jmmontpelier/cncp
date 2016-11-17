
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x8='rgba(255,255,255,0.00)',x2='5.0.0',x4='rgba(0,0,0,0)',lf='left',g='image',b='block',cl='clip',e11='${Nixon_handout_1950}',o='opacity',e15='${btn_startCopy}',e14='${close_btn_image}',e13='${rct_white}',e16='${btn_start}',x12='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',e10='${btn_close}',d='display',x3='6.0.0.400',x7='rgba(255,255,255,1.00)',m='rect',xc='rgba(0,0,0,1)',i='none';var g5='nixon_sidebear.jpg',g6='Nixon_handout_1950.jpg',g9='close_btn_image.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={'marvel, sans-serif':'<script src=\"http://use.edgefonts.net/marvel:i4,n7,n4,i7:all.js\"></script>'},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'nixon_sidebear',t:g,r:['791px','0px','233px','565px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Nixon_handout_1950',t:g,r:['0px','0px','671px','565px','auto','auto'],cl:'rect(0px 671px 565px 44.88671875px)',o:'1',f:[x4,im+g6,'0px','0px']},{id:'rct_white',t:m,r:['1024px','0px','354px','565px','auto','auto'],f:[x7],s:[0,xc,i]},{id:'btn_start',v:b,t:m,r:['791px','0px','233px','565px','auto','auto'],cu:'pointer',f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'close_btn_image',t:g,r:['969px','0px','56px','56px','auto','auto'],o:'0',f:[x4,im+g9,'0px','0px'],filter:[1,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]},{id:'btn_startCopy',v:b,t:m,r:['791px','0px','233px','565px','auto','auto'],cu:'pointer',f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'btn_close',v:i,t:m,r:['791px','0px','233px','565px','auto','auto'],cu:'pointer',f:[x8],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:[undefined,undefined,'1024px','565px'],overflow:'hidden',f:[x8]}}},tt:{d:3500,a:y,l:{"start":500,"reverse":2500},data:[["eid36",d,1974,0,"linear",e10,i,b],["eid41",d,2467,0,"linear",e10,b,i],["eid29",cl,500,1000,"linear",e11,[0,671,565,44.88671875],[0,671,565,0.58984375],{vt:x12}],["eid39",cl,2500,1000,"linear",e11,[0,671,565,0.58984375],[0,671,565,44.88671875],{vt:x12}],["eid31",lf,1027,473,"linear",e13,'1024px','671px'],["eid38",lf,2500,473,"linear",e13,'671px','1024px'],["eid34",o,1027,473,"linear",e14,'0','1'],["eid37",o,2500,473,"linear",e14,'1','0'],["eid35",d,474,0,"linear",e15,b,i],["eid32",d,474,0,"linear",e16,b,i],["eid42",d,2500,0,"linear",e16,i,b],["eid26",lf,500,1000,"linear",e11,'747px','0px'],["eid40",lf,2500,1000,"linear",e11,'0px','747px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-8235537");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${btn_start}","click",function(sym,e){sym.play("start");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btn_startCopy}","click",function(sym,e){sym.play("start");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btn_close}","click",function(sym,e){sym.play("reverse");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3500,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-8235537");