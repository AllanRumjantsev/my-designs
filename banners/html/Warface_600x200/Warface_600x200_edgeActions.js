
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$('target1_back_anim').css('visibility','hidden');sym.$('target2_back_anim').css('visibility','hidden');sym.$('target3_back_anim').css('visibility','hidden');var stageWidth=$('#Stage').width();var stageHeight=$('#Stage').height();var sym1=sym.$('pushka');var sym1MinPosX=sym1.position().left-200;var sym1MaxPosX=sym1.position().left+200;var sym1MinPosY=sym1.position().top-5;var sym1MaxPosY=sym1.position().top+5;sym.onMouseMove=function(pageX,pageY){var sym1NewX=sym.getTranslation(0,stageWidth,sym1MinPosX,sym1MaxPosX,pageX);var sym1NewY=sym.getTranslation(0,stageHeight,sym1MinPosY,sym1MaxPosY,pageY);sym1.css({left:sym1NewX,top:sym1NewY});}
sym.getTranslation=function(minInput,maxInput,minOutput,maxOutput,inputNumber){var translatedVal=((inputNumber-minInput)*(maxOutput-minOutput)/(maxInput-minInput))+minOutput;return translatedVal;}
var follower=sym.$("pricel");var startX=208,startY=35;var mouseX=$('#Stage').width()/2,mouseY=$('#Stage').height()/2;$('#Stage').mousemove(function(e){mouseX=e.pageX;mouseY=e.pageY;$(this).css('cursor','none');});var width=follower.width()/2,height=follower.height()/2;$('#Stage').mouseleave(function(e){mouseX=startX+width;mouseY=startY+height;$(this).css('cursor','auto');});var xp=0,yp=0;var speed=15,delay=5;var loop=setInterval(function(){xp+=(mouseX-xp)/speed;yp+=(mouseY-yp)/speed;follower.css({left:xp-width,top:yp-height});},delay);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","mouseenter",function(sym,e){sym.getSymbol('target_front_anim').play(0);sym.$('target1_back_anim').css('visibility','visible');sym.getSymbol('target1_back_anim').play(0);sym.$('target2_back_anim').css('visibility','visible');sym.getSymbol('target2_back_anim').play(0);sym.$('target3_back_anim').css('visibility','visible');sym.getSymbol('target3_back_anim').play(0);sym.getSymbol('sign_anim').play('2');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","mouseleave",function(sym,e){sym.getSymbol('target_front_anim').stop(0);sym.$('target1_back_anim').css('visibility','hidden');sym.getSymbol('target1_back_anim').stop(0);sym.$('target2_back_anim').css('visibility','hidden');sym.getSymbol('target2_back_anim').stop(0);sym.$('target3_back_anim').css('visibility','hidden');sym.getSymbol('target3_back_anim').stop(0);sym.getSymbol('sign_anim').play('1');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","mousemove",function(sym,e){sym.onMouseMove(e.pageX,e.pageY);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'sign_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1095,function(sym,e){sym.stop(1);});
//Edge binding end
})("sign_anim");
//Edge symbol end:'sign_anim'

//=========================================================

//Edge symbol: 'target_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4710,function(sym,e){sym.play(0);});
//Edge binding end
})("target_anim");
//Edge symbol end:'target_anim'

//=========================================================

//Edge symbol: 'target_anim_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4340,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var random=Math.random();if(random>=2/3){sym.play('1');}
else if(random>=1/3&&random<2/3){sym.play('2');}
else{sym.play('3');}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1850,function(sym,e){var random2=Math.random();if(random2>=3/4){sym.play('4');}
else if(random2>=2/4&&random2<3/4){sym.play('5');}
else if(random2>=1/4&&random2<2/4){sym.play('6');}
else{sym.play('7');}});
//Edge binding end
})("target_back_anim");
//Edge symbol end:'target_back_anim'

//=========================================================

//Edge symbol: 'pricel'
(function(symbolName){})("pricel");
//Edge symbol end:'pricel'
})(jQuery,AdobeEdge,"EDGE-237918214");