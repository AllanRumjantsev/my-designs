
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$('benny').css('cursor','pointer');var pricelDirect=sym.$('rogatka');var pricelW=pricelDirect.width();var pricelH=pricelDirect.height();var startX=510,startY=150;var pricelDirectStartX=startX;var pricelDirectStartY=startY;pricelDirect.css({'left':pricelDirectStartX-pricelW/2,'top':pricelDirectStartY-pricelH/2,});var mouseX=0,mouseY=0,mouseXoffset=mouseX,mouseYoffset=mouseY;var xp=startX,yp=startY;var xp2=pricelDirectStartX,yp2=pricelDirectStartY;var speed=150,speed2=100,speed3=20,delay=5;var loop=null;var loop2=null;var isRunning=false;function mouseCheck(){$('#Stage').one("mousemove",function(event){mouseX=event.pageX;mouseY=event.pageY;});};function stillTankFollowsMouse(){mouseCheck();xp+=(mouseXoffset-xp)/speed;yp+=(mouseYoffset-yp)/speed;xp2+=(mouseX-xp2)/speed3;yp2+=(mouseY-yp2)/speed3;pricelDirect.css({left:xp2-pricelW/2,top:yp2-pricelH/2});};function stillTankGoesBack(){mouseCheck();mouseX=startX;mouseY=startY;xp+=(mouseX-xp)/speed2;yp+=(mouseY-yp)/speed2;xp2+=(pricelDirectStartX-xp2)/speed3;yp2+=(pricelDirectStartY-yp2)/speed3;pricelDirect.css({left:xp2-pricelW/2,top:yp2-pricelH/2});};$('#Stage').mouseenter(function(e){if(isRunning==true){clearInterval(loop2);}else{};loop=setInterval(stillTankFollowsMouse,delay);});$('#Stage').mouseleave(function(){clearInterval(loop);loop2=setInterval(stillTankGoesBack,delay);isRunning=true;});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'ground'
(function(symbolName){})("ground");
//Edge symbol end:'ground'

//=========================================================

//Edge symbol: 'pricel'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.play(0);});
//Edge binding end
})("pricel");
//Edge symbol end:'pricel'

//=========================================================

//Edge symbol: 'rogatka'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",976,function(sym,e){sym.play(0);});
//Edge binding end
})("rogatka");
//Edge symbol end:'rogatka'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.play(0);});
//Edge binding end
})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'mostrik'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1537,function(sym,e){var random=Math.random();if(random<=4/5){sym.play('stand');}
else{sym.play('jump');}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",862,function(sym,e){sym.getComposition().getStage().getSymbol('bg_anim').play(0);});
//Edge binding end
})("mostrik");
//Edge symbol end:'mostrik'

//=========================================================

//Edge symbol: 'head'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",600,function(sym,e){sym.play(0);});
//Edge binding end
})("head");
//Edge symbol end:'head'

//=========================================================

//Edge symbol: 'jaw_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",200,function(sym,e){sym.play(0);});
//Edge binding end
})("jaw_anim");
//Edge symbol end:'jaw_anim'

//=========================================================

//Edge symbol: 'head2_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2544,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var random=Math.random();if(random<=1/4){sym.play('1');}
else if(random>1/4&&random<=2/4){sym.play('2');}
else if(random>2/4&&random<=3/4)
{sym.play('3');}
else
{sym.play('4');}});
//Edge binding end
})("head2_anim");
//Edge symbol end:'head2_anim'

//=========================================================

//Edge symbol: 'bg_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",145,function(sym,e){sym.stop(0);});
//Edge binding end
})("bg_anim");
//Edge symbol end:'bg_anim'
})(jQuery,AdobeEdge,"EDGE-963726184");