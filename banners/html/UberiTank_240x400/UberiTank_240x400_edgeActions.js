
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var moveTank=sym.getSymbol('moveTank_anim').getSymbol('moveTank_anim2').$('moveTank_crop');var pricel=sym.getSymbol('pricel');var pricelCircle=sym.getSymbol('pricel').$('circle');var pricelCenter=sym.getSymbol('pricel').$('center');var pricelCrossRot=sym.getSymbol('pricel').getSymbol('cross_rot').$('moveTank');var pricelCrossRotCross=sym.getSymbol('pricel').getSymbol('cross_rot').$('cross');var tankBenny=sym.$('tankBenny');var benny=sym.$('benny');var pricelDirectStartX=$('#Stage').width()/2;var pricelDirectStartY=$('#Stage').height()/2;var pricelDirect=sym.$('pricel');var pricelW=pricelDirect.width();var pricelH=pricelDirect.height();tankBenny.css('cursor','none');benny.css('cursor','none');pricelDirect.css({'left':pricelDirectStartX-pricelW/2,'top':pricelDirectStartY-pricelH/2,});function act1(){pricel.play('1');pricelCircle.css({'background-position':'-171px 0px'});pricelCrossRotCross.css({'background-position':'0px 0px'});pricelCenter.css({'background-color':'rgb(102,255,51)'});};function act2(){pricel.play(0);pricelCircle.css({'background-position':'-116px -1px'});pricelCrossRotCross.css({'background-position':'-60px 0px'});pricelCenter.css({'background-color':'rgb(255,0,0)'});};tankBenny.hover(act1,act2);var startX=79,startY=298;var follower=sym.$("stillTank_crop");var width=follower.width()/2,height=follower.height()/2;follower.css({'position':'relative','left':startX-width,'top':startY-height});var mouseX=0,mouseY=0,mouseXoffset=mouseX,mouseYoffset=mouseY;var xp=startX,yp=startY;var xp2=pricelDirectStartX,yp2=pricelDirectStartY;var speed=150,speed2=100,speed3=20,delay=5;var loop=null;var loop2=null;var isRunning=false;function mouseCheck(){$('#Stage').one("mousemove",function(event){mouseX=event.pageX;mouseY=event.pageY;mouseXoffset=mouseX;var border=$('#Stage').width()*0.3;if(mouseXoffset<border){mouseXoffset=border;}else if(mouseXoffset>$('#Stage').width()-border){mouseXoffset=$('#Stage').width()-border;}else{mouseXoffset=mouseX;};mouseYoffset=event.pageY+100;if(mouseYoffset<$('#Stage').height()*2/3){mouseYoffset=$('#Stage').height()*2/3+100;}else{mouseYoffset=mouseY+100;};});};function stillTankFollowsMouse(){mouseCheck();targetX=sym.getSymbol('moveTank_anim').getSymbol('moveTank_anim2').$('moveTank_crop').position().left;targetY=sym.getSymbol('moveTank_anim').$('moveTank_anim2').position().top;targetXoffset=sym.$('moveTank_anim').position().left;targetYoffset=sym.$('moveTank_anim').position().top;tankBenny.css({'left':targetX+targetXoffset,'top':targetY+targetYoffset+20});xp+=(mouseXoffset-xp)/speed;yp+=(mouseYoffset-yp)/speed;xp2+=(mouseX-xp2)/speed3;yp2+=(mouseY-yp2)/speed3;follower.css({left:xp-width,top:yp-height});pricelDirect.css({left:xp2-pricelW/2,top:yp2-pricelH/2});};function stillTankGoesBack(){mouseCheck();mouseX=startX;mouseY=startY;xp+=(mouseX-xp)/speed2;yp+=(mouseY-yp)/speed2;follower.css({left:xp-width,top:yp-height});if(follower.position().left+width==startX+2||follower.position().top+height==startY+2){clearInterval(loop2);};xp2+=(pricelDirectStartX-xp2)/speed3;yp2+=(pricelDirectStartY-yp2)/speed3;pricelDirect.css({left:xp2-pricelW/2,top:yp2-pricelH/2});};$('#Stage').mouseenter(function(e){if(isRunning==true){clearInterval(loop2);}else{};loop=setInterval(stillTankFollowsMouse,delay);});$('#Stage').mouseleave(function(){clearInterval(loop);loop2=setInterval(stillTankGoesBack,delay);isRunning=true;});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'road'
(function(symbolName){})("road");
//Edge symbol end:'road'

//=========================================================

//Edge symbol: 'road_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.play(0);});
//Edge binding end
})("road_anim");
//Edge symbol end:'road_anim'

//=========================================================

//Edge symbol: 'text_uberiTank_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play(0);});
//Edge binding end
})("text_uberiTank_anim");
//Edge symbol end:'text_uberiTank_anim'

//=========================================================

//Edge symbol: 'pricel'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1110,function(sym,e){sym.play('1');});
//Edge binding end
})("pricel");
//Edge symbol end:'pricel'

//=========================================================

//Edge symbol: 'cross_rot'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",555,function(sym,e){sym.play(0);});
//Edge binding end
})("cross_rot");
//Edge symbol end:'cross_rot'

//=========================================================

//Edge symbol: 'moveTank_crop'
(function(symbolName){})("moveTank_crop");
//Edge symbol end:'moveTank_crop'

//=========================================================

//Edge symbol: 'moveTank_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.play(0);});
//Edge binding end
})("moveTank_anim2");
//Edge symbol end:'moveTank_anim2'

//=========================================================

//Edge symbol: 'moveTank_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3500,function(sym,e){sym.play(0);});
//Edge binding end
})("moveTank_anim");
//Edge symbol end:'moveTank_anim'

//=========================================================

//Edge symbol: 'stillTank_crop'
(function(symbolName){})("stillTank_crop");
//Edge symbol end:'stillTank_crop'
})(jQuery,AdobeEdge,"EDGE-624964436");