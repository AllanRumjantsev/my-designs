
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var pointers=[sym.$('item1'),sym.$('item2'),sym.$('item3'),sym.$('item4'),sym.$('btn'),sym.$('benny')];$.each(pointers,function(x,val){$(val).css('cursor','pointer');});var mouseX=0;var mouseY=0;var stageW=$('#Stage').width();var stageH=$('#Stage').height();var iso=sym.$('iso');var item=$('.item');iso.css('visibility','hidden');var isoX=iso.position().left;var isoY=iso.position().top;var angles=[0,90,180,270];var delay=15;var scale=3;var circleW=0.6;var circleH=7;var mouseReactor=1;var speed=3;function mouseCheck(){$('#Stage').one("mousemove",function(event){mouseX=event.pageX;mouseY=event.pageY;});};function mouseReactorCheck(){var StageW=$('#Stage').width();var StageH=$('#Stage').height();var StageLeft=$('#Stage').position().left;var StageTop=$('#Stage').position().top;var StageRight=$('#Stage').position().left+StageW;var StageBtm=$('#Stage').position().top+StageH;var adjustDelay=100;function mouseReactorFunction(){mouseCheck();mouseReactor=Math.abs(mouseX-isoX)/Math.abs(isoX-stageW)*speed;};var mouseReactorLoop=null;$('#Stage').mouseenter(function(){mouseReactorLoop=setInterval(mouseReactorFunction,adjustDelay);speed=3;});$('#Stage').mouseleave(function(){clearInterval(mouseReactorLoop);mouseReactor=1;speed=1;});};mouseReactorCheck();var animate=function(){$.each(item,function(x,val){var rad=angles[x]*(Math.PI/180);var itemScale=(1-Math.sin(rad)/scale);var offsetX=item.width()/2;var offsetY=item.height()/2;$(val).css({'transform':'scale('+itemScale+')','left':isoX+Math.cos(rad)*isoY*circleW-offsetX+'px','top':isoY*(1-Math.sin(rad)/circleH)-offsetY+'px'});var num=$(val).css('transform');var itemZ=parseInt(num[7]+num[9]+num[10]+num[11]);$(val).css({'z-index':itemZ});angles[x]=angles[x]-mouseReactor;});};var timer=setInterval(animate,delay);var checkMouseEnterDelay=60;var checkMouseLeaveDelay=300;function krutilka(){$('#Stage').one('mousemove',function(){var item1=sym.$('item1');var item1get=sym.getSymbol('item1');var item1act1=function(){return(item1get.stop('2'));};var item1act2=function(){return(item1get.stop('1'));};var item1H=item1.height();var item1W=item1.width();var checkMouseEnter_item1=setInterval(function(){var num=item1.css('transform');var item1Scale=parseFloat(num[7]+num[8]+num[9]+num[10]);var item1Top=item1.position().top;var item1Left=item1.position().left;var item1Btm=item1.position().top+item1H*item1Scale;var item1Right=item1.position().left+item1W*item1Scale;mouseCheck();if(mouseX>item1Left&&mouseX<item1Right&&mouseY>item1Top&&mouseY<item1Btm){item1act1();var checkMouseLeave=setInterval(function(){var num=item1.css('transform');var item1Scale=parseFloat(num[7]+num[8]+num[9]+num[10]);var item1Top=item1.position().top;var item1Left=item1.position().left;var item1Btm=item1.position().top+item1H*item1Scale;var item1Right=item1.position().left+item1W*item1Scale;mouseCheck();if(mouseX<=item1Left||mouseX>=item1Right||mouseY<=item1Top||mouseY>=item1Btm){item1act2();clearInterval(checkMouseLeave);}else{checkMouseLeave;}},checkMouseLeaveDelay);}else{checkMouseEnter_item1;};},checkMouseEnterDelay);checkMouseEnter_item1;var item2=sym.$('item2');var item2get=sym.getSymbol('item2');var item2act1=function(){return(item2get.stop('2'));};var item2act2=function(){return(item2get.stop('1'));};var item2H=item2.height();var item2W=item2.width();var checkMouseEnter_item2=setInterval(function(){var num=item2.css('transform');var item2Scale=parseFloat(num[7]+num[8]+num[9]+num[10]);var item2Top=item2.position().top;var item2Left=item2.position().left;var item2Btm=item2.position().top+item2H*item2Scale;var item2Right=item2.position().left+item2W*item2Scale;mouseCheck();if(mouseX>item2Left&&mouseX<item2Right&&mouseY>item2Top&&mouseY<item2Btm){item2act1();var checkMouseLeave=setInterval(function(){var num=item2.css('transform');var item2Scale=parseFloat(num[7]+num[8]+num[9]+num[10]);var item2Top=item2.position().top;var item2Left=item2.position().left;var item2Btm=item2.position().top+item2H*item2Scale;var item2Right=item2.position().left+item2W*item2Scale;mouseCheck();if(mouseX<=item2Left||mouseX>=item2Right||mouseY<=item2Top||mouseY>=item2Btm){item2act2();clearInterval(checkMouseLeave);}else{checkMouseLeave;}},checkMouseLeaveDelay);}else{checkMouseEnter_item2;};},checkMouseEnterDelay);checkMouseEnter_item2;var item3=sym.$('item3');var item3get=sym.getSymbol('item3');var item3act1=function(){return(item3get.stop('2'));};var item3act2=function(){return(item3get.stop('1'));};var item3H=item3.height();var item3W=item3.width();var checkMouseEnter_item3=setInterval(function(){var num=item3.css('transform');var item3Scale=parseFloat(num[7]+num[8]+num[9]+num[10]);var item3Top=item3.position().top;var item3Left=item3.position().left;var item3Btm=item3.position().top+item3H*item3Scale;var item3Right=item3.position().left+item3W*item3Scale;mouseCheck();if(mouseX>item3Left&&mouseX<item3Right&&mouseY>item3Top&&mouseY<item3Btm){item3act1();var checkMouseLeave=setInterval(function(){var num=item3.css('transform');var item3Scale=parseFloat(num[7]+num[8]+num[9]+num[10]);var item3Top=item3.position().top;var item3Left=item3.position().left;var item3Btm=item3.position().top+item3H*item3Scale;var item3Right=item3.position().left+item3W*item3Scale;mouseCheck();if(mouseX<=item3Left||mouseX>=item3Right||mouseY<=item3Top||mouseY>=item3Btm){item3act2();clearInterval(checkMouseLeave);}else{checkMouseLeave;}},checkMouseLeaveDelay);}else{checkMouseEnter_item3;};},checkMouseEnterDelay);checkMouseEnter_item3;var item4=sym.$('item4');var item4get=sym.getSymbol('item4');var item4act1=function(){return(item4get.stop('2'));};var item4act2=function(){return(item4get.stop('1'));};var item4H=item4.height();var item4W=item4.width();var checkMouseEnter_item4=setInterval(function(){var num=item4.css('transform');var item4Scale=parseFloat(num[7]+num[8]+num[9]+num[10]);var item4Top=item4.position().top;var item4Left=item4.position().left;var item4Btm=item4.position().top+item4H*item4Scale;var item4Right=item4.position().left+item4W*item4Scale;mouseCheck();if(mouseX>item4Left&&mouseX<item4Right&&mouseY>item4Top&&mouseY<item4Btm){item4act1();var checkMouseLeave=setInterval(function(){var num=item4.css('transform');var item4Scale=parseFloat(num[7]+num[8]+num[9]+num[10]);var item4Top=item4.position().top;var item4Left=item4.position().left;var item4Btm=item4.position().top+item4H*item4Scale;var item4Right=item4.position().left+item4W*item4Scale;mouseCheck();if(mouseX<=item4Left||mouseX>=item4Right||mouseY<=item4Top||mouseY>=item4Btm){item4act2();clearInterval(checkMouseLeave);}else{checkMouseLeave;}},checkMouseLeaveDelay);}else{checkMouseEnter_item4;};},checkMouseEnterDelay);checkMouseEnter_item4;$('#Stage').one("mouseleave",function(){clearInterval(checkMouseEnter_item1);clearInterval(checkMouseEnter_item2);clearInterval(checkMouseEnter_item3);clearInterval(checkMouseEnter_item4);krutilka();});});};krutilka();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn}","mouseenter",function(sym,e){sym.getSymbol('btn').play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn}","mouseleave",function(sym,e){sym.getSymbol('btn').play(194);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'btn'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",300,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",193,function(sym,e){sym.stop();});
//Edge binding end
})("btn");
//Edge symbol end:'btn'

//=========================================================

//Edge symbol: 't_anims'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6250,function(sym,e){sym.play(0);});
//Edge binding end
})("t_anims");
//Edge symbol end:'t_anims'

//=========================================================

//Edge symbol: 't1_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1615,function(sym,e){sym.stop();});
//Edge binding end
})("t1_anim");
//Edge symbol end:'t1_anim'

//=========================================================

//Edge symbol: 't2_anim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1640,function(sym,e){sym.stop();});
//Edge binding end
})("t2_anim");
//Edge symbol end:'t2_anim'

//=========================================================

//Edge symbol: 'item1'
(function(symbolName){})("item1");
//Edge symbol end:'item1'

//=========================================================

//Edge symbol: 'item2'
(function(symbolName){})("item2");
//Edge symbol end:'item2'

//=========================================================

//Edge symbol: 'item3'
(function(symbolName){})("item3");
//Edge symbol end:'item3'

//=========================================================

//Edge symbol: 'item4'
(function(symbolName){})("item4");
//Edge symbol end:'item4'
})(jQuery,AdobeEdge,"EDGE-11732998");