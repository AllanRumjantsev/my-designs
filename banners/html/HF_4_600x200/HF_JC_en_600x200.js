(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"HF_JC_en_600x200_atlas_", frames: [[0,0,400,333],[244,335,226,333],[0,335,242,330]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.JC_body = function() {
	this.spriteSheet = ss["HF_JC_en_600x200_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.JC_l_hand = function() {
	this.spriteSheet = ss["HF_JC_en_600x200_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.JC_r_hand = function() {
	this.spriteSheet = ss["HF_JC_en_600x200_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egu3APoIAA/PMBdvAAAIAAfPg");
	this.shape.setTransform(300,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,600,200), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhACUQgdgJgXgYIAwgwQANAMASAFQATAFASAAQAWAAALgHQAKgIAAgNQAAgFgBgFQgBgEgEgEQgCgDgFgCQgFgCgIgBIgkgFQgUgDgQgHQgPgHgKgKQgLgKgFgQQgFgQAAgTQAAgcANgWQANgWAZgMQAZgNAiAAQAhAAAaAIQAZAJAUAUIgvAvQgKgKgLgDQgLgEgKgBIgRAAQgSAAgJAJQgJAJAAAKIACAHQABAEADAEIAIAFQAFACAIACIAkAFQAVADAPAGQAPAGAKAKQAMALAFARQAGARgBAWQAAAfgQAVQgQAVgaAMQgbALggAAIgEAAQghAAgbgIg");
	this.shape.setTransform(235.2,132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhdC5IB6lxIBBAAIh6Fxg");
	this.shape_1.setTransform(214,132.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAoCZIAAh6IhPAAIAAB6IhLAAIAAkxIBLAAIAAB1IBPAAIAAh1IBLAAIAAExg");
	this.shape_2.setTransform(189.9,132.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBCcQgaAAgVgJQgWgJgQgRQgQgQgGgTQgHgUgBgVIgBgtIABgsQABgWAHgTQAGgTAQgQQAQgRAVgJQAVgJAbAAQAmAAAaAPQAZAPANAXQANAXAEAaIhMAAQgEgSgKgIQgLgJgSAAQgKAAgIAEQgHAEgFAGIgGALQgCAHgCAPIgBApIABAqQACAPACAIIAGALQAFAFAHAEQAIAEAKAAQALAAAIgEQAJgDAFgFQAGgHADgJQACgIAAgJIAAgEIgsAAIAAg+IB3AAIAAApQAAAlgGAYQgIAYgRARQgTAUgWAIQgVAHgYAAIgCAAg");
	this.shape_3.setTransform(161.3,132.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvCRQgWgLgOgVQgOgVgBggIAAh3QABggAOgVQAOgWAWgKQAWgLAZAAQAaAAAWALQAXAKAOAWQANAVAAAgIAAB3QAAAggNAVQgOAVgXALQgWALgaAAQgZAAgWgLgAgThTQgHAIgBAQIAAB4QABAQAHAIQAJAHAKAAQAMAAAIgHQAHgIABgQIAAh4QgBgQgHgIQgIgIgMAAQgKAAgJAIg");
	this.shape_4.setTransform(135.4,132.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCCZIAAjmIhBA5IAAhMIBBg4IBGAAIAAExg");
	this.shape_5.setTransform(110.2,132.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiCZIg1hyIgaAAIAAByIhLAAIAAkxIB4AAQAiABAXAOQAYAOAMAWQAMAWAAAaQgBAUgHAQQgHAQgMAKQgLAKgMAHIBCB/gAgtgXIArAAQAOAAAJgJQAIgJAAgMQAAgNgIgJQgJgJgOgBIgrAAg");
	this.shape_6.setTransform(76.9,132.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhnCZIAAkxIDPAAIAABDIiEAAIAAAzIBxAAIAABCIhxAAIAAA2ICEAAIAABDg");
	this.shape_7.setTransform(49,132.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhwCZIAAkxIB5AAQAhAAAXAOQAYAOAMAXQAMAWAAAaQAAAZgMAWQgMAVgYAOQgXAOghABIgtAAIAABtgAgkgXIApAAQAPAAAJgKQAIgIAAgMQAAgNgIgJQgJgJgPgBIgpAAg");
	this.shape_8.setTransform(22.8,132.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FC0A0A").s().p("AhkEwQgugWgdgtQgegsgBhDIAAj7QABhDAegsQAdgtAugWQAvgXA1AAQA2AAAvAXQAuAWAeAtQAdAsAABDIAAD7QAABDgdAsQgeAtguAWQgvAXg2AAQg1AAgvgXgAgoiwQgQARgBAiIAAD8QABAiAQAQQARAQAXAAQAYAAARgQQARgQABgiIAAj8QgBgigRgRQgRgQgYAAQgXAAgRAQg");
	this.shape_9.setTransform(220.7,69.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FC0A0A").s().p("AjOFEIAAiFIDoj9QASgRAHgPQAIgQAAgUQAAgbgPgQQgOgQgdgBQgNAAgOAGQgNAFgJAOQgJANAAAYIiVAAQABg/AdgrQAcgrAvgXQAugXA4AAQA8AAAuAXQAuAYAbArQAaAsAAA8QABAigKAZQgJAZgSAYQgRAXgaAaIiYCjIDnAAIAACFg");
	this.shape_10.setTransform(170.8,69.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FC0A0A").s().p("AhQBRIAAihIChAAIAAChg");
	this.shape_11.setTransform(132.2,93.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FC0A0A").s().p("AgFFBIAAnjIiIB3IAAieICIh3ICUAAIAAKBg");
	this.shape_12.setTransform(91.1,70);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FC0A0A").s().p("AgqGfIAAhhQhCgCg3gTQg3gTgtgtIBlhlQAaAYAlAKQAlALAmAAIAAh3IgjgFQgrgFgggPQgggOgWgWQgWgXgLggQgLghAAgpQAAg0AWgrQAXgqArgbQAqgcA8gIIAAhSIBxAAIAABQQA5ADAtATQAtASAkAkIhjBjQgPgOgSgHQgTgIgSgEIgggEIAABxIAlAGQArAFAfAOQAgANAUAVQAaAYALAjQALAkAAAtQgBA4gZApQgZApgrAZQgsAZg3AJIAABmgAA1CuQAcgFAOgOQAOgOAAgWQAAgMgDgJQgDgKgHgHQgIgIgMgEQgLgEgMgBgAhCitQgOARAAATQAAAGADAIQADAIAHAIQAGAGAKAFQALAFAQADIAAhrQgdAGgNAQg");
	this.shape_13.setTransform(38.3,70.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,257.5,166.1), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AivDuIAAncIC8AAQA1ACAkAVQAlAWASAiQATAkAAAnQAAAngTAkQgSAhglAWQgkAWg1AAIhHAAIAACqgAg6gkIBCAAQAYgBANgOQAOgOAAgTQAAgTgOgOQgNgOgYgBIhCAAg");
	this.shape.setTransform(560.3,52.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhLDlQgggNgagbQgYgZgKgeQgKgfgCghQgCgiAAgkQAAgjACgiQACghAKgfQAKgeAYgZQAagbAggNQAhgOAqAAQArAAAgAOQAhANAZAbQAZAZAKAeQAKAfACAhQACAiAAAjQAAAkgCAiQgCAhgKAfQgKAegZAZQgZAbghANQggAOgrAAQgqAAghgOgAgbiDQgNAGgGAIQgFAHgEAKQgEAMgCAXQgCAXAAAqQAAArACAXQACAXAEALQAEAKAFAHQAGAIANAHQAMAGAPABQAQgBAMgGQAMgHAHgIQAFgHAEgKQAEgLACgXQACgXAAgrQAAgqgCgXQgCgXgEgMQgEgKgFgHQgHgIgMgGQgMgGgQAAQgPAAgMAGg");
	this.shape_1.setTransform(516.3,52);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA1DuIhUixIgoAAIAACxIh1AAIAAncIC8AAQA1ACAkAVQAlAWASAiQATAkAAAnQAAAggMAZQgLAZgSAPQgSARgTAJIBoDHgAhHgjIBDAAQAXgBANgPQAOgOAAgTQAAgTgOgOQgNgOgXgBIhDAAg");
	this.shape_2.setTransform(474.8,52.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AixDuIAAncICxAAQAlAAAhAMQAhALAZAZQAbAcAKAdQALAeABAhQABAiAAAkQAAAmgBAhQgBAhgLAeQgKAegbAbQgZAZghALQghALglAAgAg8CGIA0AAQAVAAAOgHQANgHAIgNQAEgFADgKQADgKABgVIABg9IgBg8QgBgVgDgJQgDgKgEgGQgIgMgNgHQgOgIgVAAIg0AAg");
	this.shape_3.setTransform(430.1,52.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AihDuIAAncIFDAAIAABpIjOAAIAABQICwAAIAABnIiwAAIAABUIDOAAIAABog");
	this.shape_4.setTransform(372.8,52.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhJDlQghgNgagbQgZgZgJgeQgLgfgCghQgBgiAAgkQAAgjABgiQACghALgfQAJgeAZgZQAagbAhgNQAhgOAoAAQAuAAAlARQAmARAZAjQAaAiAJA1Ih3AAQgFgVgOgPQgOgPgcAAQgPAAgNAGQgLAFgHAIQgFAHgEALQgEAMgDAXQgCAXAAAqQAAArACAYQADAWAEAMQAEALAFAGQAHAJALAGQANAFAPABQAcgBAOgPQAOgOAFgVIB3AAQgJA0gaAjQgZAigmARQglARguAAQgoAAghgOg");
	this.shape_5.setTransform(332.3,52);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag5DuIAAncIB0AAIAAHcg");
	this.shape_6.setTransform(300.2,52.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA1DuIhUixIgoAAIAACxIh1AAIAAncIC8AAQA1ACAkAVQAlAWASAiQATAkAAAnQAAAggMAZQgLAZgSAPQgSARgTAJIBoDHgAhHgjIBDAAQAXgBANgPQAOgOAAgTQAAgTgOgOQgNgOgXgBIhDAAg");
	this.shape_7.setTransform(269.5,52.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AivDuIAAncIC8AAQA1ACAkAVQAlAWASAiQATAkAAAnQAAAngTAkQgSAhglAWQgkAWg1AAIhHAAIAACqgAg6gkIBCAAQAYgBANgOQAOgOAAgTQAAgTgOgOQgNgOgYgBIhCAAg");
	this.shape_8.setTransform(226.1,52.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABhDuIgXhHIiSAAIgXBHIh7AAICuncIBZAAICuHcgAAsBGIgph/IgqB/IBTAAg");
	this.shape_9.setTransform(166.9,52.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgCDzQgqAAgggOQghgOgagaQgZgZgKgeQgKgfgCghQgBgiAAgkQAAgjABgiQACgiAKgeQAKgeAZgZQAagbAggNQAggOArAAQA8ABAnAXQAnAWAVAkQAVAkAFAoIh2AAQgGgbgQgNQgQgOgdAAQgQABgMAGQgMAGgHAIQgFAHgEALQgEALgCAXQgCAXAAAqQAAArACAXQACAXAEAMQAEALAFAGQAHAJAMAFQAMAGAQAAQARAAANgFQANgFAIgIQAKgLAEgNQAEgOAAgOIAAgGIhFAAIAAhhIC6AAIAABBQAAA5gLAmQgLAlgaAbQgfAfgiAMQghALgmAAIgCAAg");
	this.shape_10.setTransform(123.3,52);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AihDuIAAncIFDAAIAABpIjOAAIAABQICwAAIAABnIiwAAIAABUIDOAAIAABog");
	this.shape_11.setTransform(81.8,52.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABpDuIAAjkIhDB2IhKAAIhFh2IAADkIh1AAIAAncIB0AAIBqDTIBsjTIByAAIAAHcg");
	this.shape_12.setTransform(33.5,52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,586.3,97.9), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JC_l_hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,226,333), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JC_body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,400,333), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JC_r_hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,242,330), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiNDRIAAmhIEbAAIAABcIi1AAIAABFICbAAIAABbIibAAIAABJIC1AAIAABcg");
	this.shape.setTransform(363.5,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAuDRIhJibIgjAAIAACbIhnAAIAAmhIClAAQAvAAAgAUQAgASAQAfQAQAeAAAkQAAAcgKAVQgKAWgQAOQgPAPgRAIIBbCugAg+gfIA7AAQAUgBAMgMQALgMAAgRQAAgSgLgMQgMgMgUgBIg7AAg");
	this.shape_1.setTransform(327.4,50.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBDJQgdgMgWgXQgWgWgJgbQgJgagCgeIgBg9IABg9QACgdAJgbQAJgaAWgWQAWgXAdgMQAcgMAlAAQAmAAAcAMQAcAMAXAXQAWAWAJAaQAJAbABAdQACAegBAfQABAggCAdQgBAegJAaQgJAbgWAWQgXAXgcAMQgcAMgmAAQglAAgcgMgAgYhzQgLAFgFAIQgFAFgDAKQgEAJgCAVQgCAUAAAlQAAAmACAUQACAUAEAJQADAKAFAFQAFAIALAGQALAFANAAQAOAAALgFQAKgGAGgIQAFgFADgKQAEgJACgUQABgUAAgmQAAglgBgUQgCgVgEgJQgDgKgFgFQgGgIgKgFQgLgFgOgBQgNABgLAFg");
	this.shape_2.setTransform(287.7,50.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABcDRIAAjIIg7BnIhBAAIg7hnIAADIIhoAAIAAmhIBmAAIBdC4IBfi4IBlAAIAAGhg");
	this.shape_3.setTransform(245,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AibDRIAAmhICbAAQAgAAAdAKQAeAJAWAVQAXAZAJAbQAKAaAAAdQACAdgBAgQABAhgCAdQAAAdgKAaQgJAbgXAZQgWAVgeAJQgdALgggBgAg0B1IAtAAQATABALgHQAMgGAHgLQAEgFACgIQADgJABgSQABgTAAgjQAAgigBgSQgBgTgDgIQgCgJgEgFQgHgLgMgGQgLgHgTABIgtAAg");
	this.shape_4.setTransform(189.6,50.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABVDRIgUg+IiAAAIgUA+IhsAAICYmhIBPAAICYGhgAAmA9IgjhvIglBvIBIAAg");
	this.shape_5.setTransform(150.5,50.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiODRIAAmhIEdAAIAABcIi1AAIAABFICaAAIAABbIiaAAIAABJIC1AAIAABcg");
	this.shape_6.setTransform(113.9,50.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAuDRIhJibIgjAAIAACbIhnAAIAAmhIClAAQAvAAAgAUQAgASAQAfQAQAeAAAkQAAAcgKAVQgKAWgQAOQgPAPgRAIIBbCugAg+gfIA7AAQAUgBAMgMQALgMAAgRQAAgSgLgMQgMgMgUgBIg7AAg");
	this.shape_7.setTransform(77.8,50.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1B1B1C").ss(8,1,1).p("A+noCMA9PAAAQBbAABBBAQBABBAABbIAAJNQAABbhABBQhBBAhbAAMg9PAAAQhbAAhBhAQhAhBAAhbIAApNQAAhbBAhBQBBhABbAAg");
	this.shape_8.setTransform(218,51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-3.9,-3.9,443.9,110.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AU4BaQgIgBgJgDQgJgEgHgHQgHgHgEgIQgEgJAAgNIAAhkQAAgIAFgFQAGgFAIAAIEWAAQAIAAAGAFQAFAFAAAIQAAAIgFAFQgGAGgIAAIkDAAIAAAdID7AAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAIj7AAIAAATQAAAEADADQAEADAFAAID3AAQAIAAAGAFQAFAGAAAIQAAAHgFAGQgGAFgIABgAStBUQgPgLgSgLQgSgMgRgIQgRgJgVgFQgVgFgUAAIhOAAQgFABgEADQgDAFAAAFIAAAiQAAAIgGAFQgGAFgHABQgIgBgGgFQgFgGAAgHIAAgmIAAgEIAAgCIAAhZQAAgIAFgFQAGgFAIAAIDrAAQALAAAKADQAKAFAGAHQAIAHAEAJQAEAJAAAMQAAALgEAJQgEAIgIAIQgGAGgKAFQgKAEgLAAIgBAAIAVAOQAKAHAMAKQAFADADAEQADAEAAAGQAAAHgFAGQgGAFgIABQgHgBgGgFgAPAgNIAJgBIDRAAQAFAAAFgEQAEgEAAgGQAAgHgEgDQgEgFgGAAIjaAAgAM9BSIhbh5IgHgHQgEgEgEAAQgFAAgEAEIgHAHIhcB5QgGAIgIAAQgIgBgGgFQgFgGAAgHQAAgIAEgDIBfiAQAHgJALgGQALgFANgBQALAAALAGQAKAEAHAKIBgB+IAEAHQABACAAAFQAAAHgFAGQgGAFgIABQgJgBgGgHgAEOBaQgLAAgKgFQgKgEgHgHQgIgGgEgKQgEgKAAgLIAAhjQAAgIAFgFQAGgFAIAAQAHAAAGAFQAGAFAAAIIAABjQAAAGAEAEQAFAFAGAAIDrAAQAIAAAFAFQAGAGAAAIQAAAHgGAGQgFAFgIABgAiYBUQgGgGAAgHIAAiFQAAgIAGgFQAFgFAIAAIEWAAQAHAAAGAFQAFAFAAAIQAAAIgFAFQgGAGgHAAIkDAAIAAAzIEDAAQAHAAAGAFQAFAGAAAIQAAAHgFAGQgGAFgHABIkDAAIAAAZQAAAIgFAFQgGAFgIABQgIgBgFgFgAj5BUQgGgGAAgHIAAgwIjoAAIAAAwQAAAHgFAGQgGAFgIABQgIgBgFgFQgGgGAAgHIAAiFQAAgIAGgFQAFgFAIAAQAIAAAGAFQAFAFAAAIIAAAwIDoAAIAAgwQAAgIAGgFQAFgFAIAAQAIAAAFAFQAGAFAAAIIAACFQAAAHgGAGQgFAFgIABQgIgBgFgFgAtqBaQgIgBgFgFQgGgGAAgHQAAgIAGgGQAFgFAIAAIDwAAQAFAAAFgFQAEgDAAgHQAAgFgEgFQgFgEgFAAIjaAAQgMAAgJgEQgJgFgHgGQgIgIgEgIQgEgJAAgLQAAgMAEgJQAEgJAIgHQAHgHAJgFQAKgDALAAIDuAAQAIAAAFAFQAGAFAAAIQAAAIgGAFQgFAGgIAAIjvAAQgGAAgFAEQgEAEAAAHQAAAFAEAFQAFAEAGAAIDZAAQALAAAKAFQAJADAHAHQAHAGAEAKQAFAJAAALQAAAMgFAJQgEAKgHAGQgHAIgJADQgKAFgLAAgAvdBSIhch5IgHgHQgEgEgEAAQgEAAgFAEIgGAHIhcB5QgHAIgIAAQgIgBgFgFQgGgGAAgHQAAgIAEgDIBfiAQAHgJALgGQAMgFAMgBQALAAALAGQALAEAGAKIBgB+IAEAHQABACAAAFQAAAHgFAGQgGAFgIABQgJgBgFgHgA0wBUQgGgGAAgHIAAgwIjoAAIAAAwQAAAHgFAGQgGAFgHABQgIgBgGgFQgFgGAAgHIAAiFQAAgIAFgFQAGgFAIAAQAHAAAGAFQAFAFAAAIIAAAwIDoAAIAAgwQAAgIAGgFQAFgFAIAAQAIAAAGAFQAFAFAAAIIAACFQAAAHgFAGQgGAFgIABQgIgBgFgFg");
	this.shape.setTransform(160.4,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,320.9,17.9), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(99.7,15.1,0.553,0.553,0,0,0,160.4,9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCDzQgqAAgggOQghgOgagaQgZgZgKgeQgKgfgCghQgBgiAAgkQAAgjABgiQACgiAKgeQAKgeAZgZQAagbAggNQAggOArAAQA8ABAnAXQAnAWAVAkQAVAkAFAoIh2AAQgGgbgQgNQgQgOgdAAQgQABgMAGQgMAGgHAIQgFAHgEALQgEALgCAXQgCAXAAAqQAAArACAXQACAXAEAMQAEALAFAGQAHAJAMAFQAMAGAQAAQARAAANgFQANgFAIgIQAKgLAEgNQAEgOAAgOIAAgGIhFAAIAAhhIC6AAIAABBQAAA5gLAmQgLAlgaAbQgfAfgiAMQghALgmAAIgCAAg");
	this.shape.setTransform(444.1,52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABUDuIiYjuIAADuIh1AAIAAncIBmAAICYDwIAAjwIB1AAIAAHcg");
	this.shape_1.setTransform(398.9,52.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag6DuIAAncIB0AAIAAHcg");
	this.shape_2.setTransform(364.8,52.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABUDuIiYjuIAADuIh1AAIAAncIBmAAICYDwIAAjwIB1AAIAAHcg");
	this.shape_3.setTransform(330.6,52.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag6DuIAAncIB0AAIAAHcg");
	this.shape_4.setTransform(296.5,52.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABpDuIAAjkIhDB2IhLAAIhDh2IAADkIh1AAIAAncIBzAAIBqDTIBrjTIBzAAIAAHcg");
	this.shape_5.setTransform(258.7,52.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AixDuIAAncICxAAQAlAAAhAMQAhALAZAZQAbAcAKAdQALAeABAhQABAiAAAkQAAAmgBAhQgBAhgLAeQgKAegbAbQgZAZghALQghALglAAgAg8CGIA0AAQAVAAAOgHQANgHAIgNQAEgFADgKQADgKABgVIABg9IgBg8QgBgVgDgJQgDgKgEgGQgIgMgNgHQgOgIgVAAIg0AAg");
	this.shape_6.setTransform(195.6,52.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhbDbQgogVgZgmQgXgngBg0IAAk1IB1AAIAAEyQABAhAQASQARASAdABQAcgBASgSQASgSAAghIAAkyIB1AAIAAE1QgBA0gYAnQgYAmgpAVQgpAVgyABQgygBgpgVg");
	this.shape_7.setTransform(151,52.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhLDlQgggNgagbQgYgZgKgeQgKgfgCghQgCgiAAgkQAAgjACgiQACghAKgfQAKgeAYgZQAagbAggNQAhgOAqAAQArAAAgAOQAhANAZAbQAZAZAKAeQAKAfACAhQACAiAAAjQAAAkgCAiQgCAhgKAfQgKAegZAZQgZAbghANQggAOgrAAQgqAAghgOgAgbiDQgNAGgGAIQgFAHgEAKQgEAMgCAXQgCAXAAAqQAAArACAXQACAXAEALQAEAKAFAHQAGAIANAHQAMAGAPABQAQgBAMgGQAMgHAHgIQAFgHAEgKQAEgLACgXQACgXAAgrQAAgqgCgXQgCgXgEgMQgEgKgFgHQgHgIgMgGQgMgGgQAAQgPAAgMAGg");
	this.shape_8.setTransform(107.3,52);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AieDuIAAncIB1AAIAAF0IDIAAIAABog");
	this.shape_9.setTransform(68,52.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhJDlQghgNgagbQgYgZgKgeQgKgfgDghQgBgiAAgkQAAgjABgiQADghAKgfQAKgeAYgZQAagbAhgNQAggOApAAQAtAAAnARQAlARAaAjQAZAiAJA1Ih3AAQgFgVgOgPQgNgPgdAAQgPAAgNAGQgLAFgHAIQgFAHgEALQgEAMgCAXQgDAXAAAqQAAArADAYQACAWAEAMQAEALAFAGQAHAJALAGQANAFAPABQAdgBANgPQAOgOAFgVIB3AAQgJA0gZAjQgaAiglARQgnARgtAAQgpAAgggOg");
	this.shape_10.setTransform(27.8,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,472.3,97.9), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAnIAAgJIAJAAIAAAJgAgDASIgBg5IAJAAIgCA5g");
	this.shape.setTransform(280.2,77.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAmQgHgCgFgGIAGgGQAEAFAGACQAFABAFAAQAJABAFgEQAFgEAAgHIgBgGIgDgEIgEgCIgGgCIgJgBIgIgCIgGgDQgDgCgBgEQgCgEAAgEQAAgLAHgGQAGgGALAAQAIAAAFACQAGACAFAEIgGAGIgIgFQgEgBgGgBQgHAAgEAFQgFAEAAAGIABAFIADAEIAFACIAFACIAIABIAJADQADAAACACQAEADABAEQACAEAAAFQAAAHgDAFQgEAFgGADQgGACgIAAQgIAAgGgCg");
	this.shape_1.setTransform(275,77.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAnIgpg+IAAA+IgIAAIAAhOIAIAAIApA+IAAg+IAIAAIAABOg");
	this.shape_2.setTransform(267.8,77.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAnIAAhOIAHAAIAABOg");
	this.shape_3.setTransform(262.1,77.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAmQgFgCgEgEQgEgDgBgFIgDgKIAAgOIAAgNIADgKQABgEAEgEQAEgEAFgCQAFgCAFAAQAGAAAFACQAFACAEAEQAEAEABAEIADAKIAAANIAAAOIgDAKQgBAFgEADQgEAEgFACQgFACgGAAQgFAAgFgCgAgGgeIgGAEIgEAGIgCAIIAAAMIAAANIACAIIAEAGIAGAEQADABADAAQAEAAADgBIAGgEQADgDABgDIACgIIAAgNIAAgMIgCgIQgBgEgDgCIgGgEQgDgBgEgBQgDABgDABg");
	this.shape_4.setTransform(257,77.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAmQgFgCgEgEQgEgDgBgFIgCgKIAAgOIAAgNIACgKQABgEAEgEQAEgEAFgCQAFgCAFAAQALAAAHAGQAHAHADALIgJAAQgCgIgFgEQgFgEgHgBQgDABgDABIgHAEIgDAFIgCAJIAAAMIAAANIACAIIADAGQADADAEABQADABADAAQAIAAAEgDQAFgFACgHIAJAAQgCAHgEAFQgEAFgGAEQgFACgHAAQgFAAgFgCg");
	this.shape_5.setTransform(250,77.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDAnIAAhGIgXAAIAAgIIA1AAIAAAIIgXAAIAABGg");
	this.shape_6.setTransform(243.4,77.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgDAnIAAhOIAHAAIAABOg");
	this.shape_7.setTransform(238.7,77.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAnIAAhOIAcAAQAHAAAGAEQAFACADAEQACAFABAHQgBAGgCAFQgDAEgGACQAGABAEAFQADAEAAAIQAAAHgDAEQgDAFgFADQgFADgIgBgAgSAgIAVAAQAHAAAFgEQADgEAAgGQAAgHgDgEQgFgEgHAAIgVAAgAgSgEIAUAAQAEABAEgCQAEgCACgCQABgDAAgFQAAgFgBgDQgCgDgEgCQgEgBgEAAIgUAAg");
	this.shape_8.setTransform(233.6,77.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARAnIgRgjIgSAAIAAAjIgJAAIAAhOIAeAAQAGABAGADQAFACADAFQADAFAAAHQAAAIgFAFQgEAFgIACIATAjgAgSgCIAUAAQAHAAAEgEQAFgDgBgHQABgIgFgDQgEgEgHAAIgUAAg");
	this.shape_9.setTransform(223.7,77.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOAkQgFgDgEgGQgDgGAAgIIAAg0IAIAAIAAA0QAAAJAFAFQAFAFAIAAQAJAAAEgFQAGgFAAgJIAAg0IAIAAIAAA0QAAAIgDAGQgEAGgGADQgGAEgIAAQgIAAgGgEg");
	this.shape_10.setTransform(216,77.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAmQgFgCgEgEQgEgDgBgFIgCgKIAAgOIAAgNIACgKQABgEAEgEQAEgEAFgCQAFgCAFAAQAGAAAFACQAFACAEAEQAEAEACAEIACAKIAAANIAAAOIgCAKQgCAFgEADQgEAEgFACQgFACgGAAQgFAAgFgCgAgGgeIgHAEIgDAGIgCAIIAAAMIAAANIACAIIADAGIAHAEQADABADAAQAEAAAEgBIAFgEQADgDABgDIACgIIAAgNIAAgMIgCgIQgBgEgDgCIgFgEQgEgBgEgBQgDABgDABg");
	this.shape_11.setTransform(208.6,77.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAnIAAggIgXguIAJAAIARAnIATgnIAJAAIgYAuIAAAgg");
	this.shape_12.setTransform(202.2,77.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKAmQgFgCgEgEQgEgDgCgFIgCgKIAAgOIAAgNIACgKQACgEAEgEQAEgEAFgCQAFgCAFAAQAHAAAGADQAGADADAGQAEAEABAIIgIAAQgCgIgFgEQgFgEgHgBQgDABgEABIgGAEIgEAGIgBAIIAAAMIAAANIABAIIAEAGQADADADABQAEABADAAQAEAAAEgBIAHgFQACgDABgDIABgJIAAgGIgTAAIAAgGIAcAAIAAAMQAAAGgCAFQgCAFgDAEQgEAEgGADQgFACgGAAQgFAAgFgCg");
	this.shape_13.setTransform(193,77.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAVAnIgog+IAAA+IgJAAIAAhOIAIAAIAoA+IAAg+IAJAAIAABOg");
	this.shape_14.setTransform(185.3,77.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgDAnIAAhOIAHAAIAABOg");
	this.shape_15.setTransform(179.7,77.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVAnIgog+IAAA+IgJAAIAAhOIAIAAIAoA+IAAg+IAJAAIAABOg");
	this.shape_16.setTransform(174,77.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDAnIAAhOIAHAAIAABOg");
	this.shape_17.setTransform(168.4,77.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAZAnIAAg7IgVAvIgHAAIgVgvIAAA7IgJAAIAAhOIAJAAIAYA4IAZg4IAJAAIAABOg");
	this.shape_18.setTransform(162.3,77.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEAnIAAhGIgWAAIAAgIIA1AAIAAAIIgXAAIAABGg");
	this.shape_19.setTransform(152.1,77.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AARAnIgRgjIgSAAIAAAjIgJAAIAAhOIAeAAQAGABAGADQAFACADAFQADAFAAAHQAAAIgFAFQgFAFgHACIASAjgAgSgCIAUAAQAHAAAEgEQAFgDgBgHQABgIgFgDQgEgEgHAAIgUAAg");
	this.shape_20.setTransform(145.6,77.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAXAnIgGgSIghAAIgHASIgJAAIAdhOIAGAAIAdBOgAAOAOIgOgoIgOAoIAcAAg");
	this.shape_21.setTransform(138.4,77.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgEAnIAAhGIgWAAIAAgIIA1AAIAAAIIgXAAIAABGg");
	this.shape_22.setTransform(132,77.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOAmQgHgCgFgGIAGgGQAEAFAGACQAFABAFAAQAJABAFgEQAFgEAAgHIgBgGIgDgEIgEgCIgGgCIgJgBIgIgCIgGgDQgDgCgBgEQgCgEAAgEQAAgLAHgGQAGgGALAAQAIAAAFACQAGACAFAEIgGAGIgIgFQgEgBgGgBQgHAAgEAFQgFAEAAAGIABAFIADAEIAFACIAFACIAIABIAJADQADAAACACQAEADABAEQACAEAAAFQAAAHgDAFQgEAFgGADQgGACgIAAQgIAAgGgCg");
	this.shape_23.setTransform(125.6,77.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKAmQgFgCgEgEQgEgDgCgFIgBgKIAAgOIAAgNIABgKQACgEAEgEQAEgEAFgCQAFgCAFAAQAGAAAFACQAFACAEAEQAEAEACAEIABAKIAAANIAAAOIgBAKQgCAFgEADQgEAEgFACQgFACgGAAQgFAAgFgCgAgHgeIgGAEIgEAGIgBAIIAAAMIAAANIABAIIAEAGIAGAEQAEABADAAQAEAAAEgBIAFgEQADgDABgDIACgIIAAgNIAAgMIgCgIQgBgEgDgCIgFgEQgEgBgEgBQgDABgEABg");
	this.shape_24.setTransform(116.1,77.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEAnIAAhGIgWAAIAAgIIA1AAIAAAIIgXAAIAABGg");
	this.shape_25.setTransform(109.5,77.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAVAnIgpg+IAAA+IgIAAIAAhOIAIAAIApA+IAAg+IAIAAIAABOg");
	this.shape_26.setTransform(99.6,77.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKAmQgFgCgEgEQgEgDgCgFIgCgKIAAgOIAAgNIACgKQACgEAEgEQAEgEAFgCQAFgCAFAAQAGAAAFACQAFACAEAEQAEAEABAEIACAKIAAANIAAAOIgCAKQgBAFgEADQgEAEgFACQgFACgGAAQgFAAgFgCgAgHgeIgFAEIgFAGIgBAIIAAAMIAAANIABAIIAFAGIAFAEQAEABADAAQAEAAADgBIAHgEQACgDABgDIACgIIAAgNIAAgMIgCgIQgBgEgCgCIgHgEQgDgBgEgBQgDABgEABg");
	this.shape_27.setTransform(92,77.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEAnIAAhGIgWAAIAAgIIA1AAIAAAIIgXAAIAABGg");
	this.shape_28.setTransform(85.4,77.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAnIAAhGIgWAAIAAgIIA1AAIAAAIIgXAAIAABGg");
	this.shape_29.setTransform(79.3,77.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgNAkQgGgDgEgGQgEgGAAgIIAAg0IAIAAIAAA0QABAJAFAFQAFAFAIAAQAJAAAEgFQAFgFABgJIAAg0IAJAAIAAA0QgBAIgEAGQgDAGgGADQgGAEgIAAQgIAAgFgEg");
	this.shape_30.setTransform(72.5,77.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAnIAAhOIAdAAQAHAAAEAEQAGACADAEQADAFAAAHQAAAGgDAFQgDAEgGACQAGABADAFQAEAEAAAIQAAAHgDAEQgDAFgFADQgGADgGgBgAgSAgIAVAAQAHAAAEgEQAEgEAAgGQAAgHgEgEQgEgEgHAAIgVAAgAgSgEIAUAAQAEABAEgCQADgCACgCQACgDAAgFQAAgFgCgDQgCgDgDgCQgEgBgEAAIgUAAg");
	this.shape_31.setTransform(65.2,77.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAnIAAhOIAxAAIAAAIIgoAAIAAAcIAhAAIAAAGIghAAIAAAdIAoAAIAAAHg");
	this.shape_32.setTransform(55.5,77.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AATAnIAAgkIgkAAIAAAkIgJAAIAAhOIAJAAIAAAkIAkAAIAAgkIAIAAIAABOg");
	this.shape_33.setTransform(48,77.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEAnIAAhGIgWAAIAAgIIA1AAIAAAIIgXAAIAABGg");
	this.shape_34.setTransform(41.2,77.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgOAmQgHgCgFgGIAGgGQAEAFAGACQAFABAFAAQAJABAFgEQAFgEAAgHIgBgGIgDgEIgEgCIgGgCIgJgBIgIgCIgGgDQgDgCgBgEQgCgEAAgEQAAgLAHgGQAGgGALAAQAIAAAFACQAGACAFAEIgGAGIgIgFQgEgBgGgBQgHAAgEAFQgFAEAAAGIABAFIADAEIAFACIAFACIAIABIAJADQADAAACACQAEADABAEQACAEAAAFQAAAHgDAFQgEAFgGADQgGACgIAAQgIAAgGgCg");
	this.shape_35.setTransform(32,77.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgOAmQgHgCgFgGIAGgGQAEAFAGACQAFABAFAAQAJABAFgEQAFgEAAgHIgBgGIgDgEIgEgCIgGgCIgJgBIgIgCIgGgDQgDgCgBgEQgCgEAAgEQAAgLAHgGQAGgGALAAQAIAAAFACQAGACAFAEIgGAGIgIgFQgEgBgGgBQgHAAgEAFQgFAEAAAGIABAFIADAEIAFACIAFACIAIABIAJADQADAAACACQAEADABAEQACAEAAAFQAAAHgDAFQgEAFgGADQgGACgIAAQgIAAgGgCg");
	this.shape_36.setTransform(25.5,77.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAnIAAhOIAvAAIAAAIIgnAAIAAAcIAiAAIAAAGIgiAAIAAAdIAnAAIAAAHg");
	this.shape_37.setTransform(19.4,77.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASAnIgSgjIgSAAIAAAjIgIAAIAAhOIAcAAQAHABAGADQAFACADAFQADAFAAAHQAAAIgFAFQgFAFgHACIATAjgAgSgCIAUAAQAHAAAEgEQAFgDAAgHQAAgIgFgDQgEgEgHAAIgUAAg");
	this.shape_38.setTransform(12.4,77.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAnIAAhOIAcAAQAIABAFADQAGACADAGQADAFAAAHQAAAHgDAFQgDAEgGADQgFADgIAAIgTAAIAAAggAgRAAIATAAQAHAAAFgEQAEgDAAgIQAAgIgEgEQgFgEgHAAIgTAAg");
	this.shape_39.setTransform(5.3,77.2);

	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(141.6,32.5,0.631,0.631,0,0,0,218,51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,-2.5,283.4,87.7), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// JC_r_hand.png
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(553,394,1,1,0,0,0,219,394);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:393.9,rotation:8.7,x:553.1},4).to({regY:394,rotation:0,x:553},4).wait(1));

	// JC_l_hand.png
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,396.8,1,1,0,0,0,-5,396.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-12.2,x:15.1},4).to({rotation:0,x:15},4).wait(1));

	// JC_body.png
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,166.5,1,1,0,0,0,200,166.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,0,556,333);


// stage content:
(lib.HF_JC_en_600x200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var target = this.t1;
		var target2 = this.t2;
		var target3 = this.j3;
		var target4 = this.t4;
		var target5 = this.b5;
		
		var tween = createjs.Tween.get(target, {
			loop: true
		})
			
			.to({		
				alpha: target.alpha - 1
			}, 0)
			.wait(0)
			.to({		
				alpha: target.alpha
			}, 500, createjs.Ease.circOut)
			.wait(2000)
			.to({
				alpha: target.alpha - 1
			}, 0)
			.wait(7500);
		
		var tween = createjs.Tween.get(target2, {
			loop: true
		})
			
			.to({
				alpha: target2.alpha - 1
			}, 0)
			.wait(2500)
			.to({
				alpha: target2.alpha
			}, 500, createjs.Ease.circOut)
			.wait(2000)
			.to({
				alpha: target2.alpha - 1
			}, 0)
			.wait(5000);
		
		
		var tween = createjs.Tween.get(target4, {
			loop: true
		})
			
			.to({
				alpha: target4.alpha - 1
			}, 0)
			.wait(5000)
			.to({
				alpha: target4.alpha
			}, 500, createjs.Ease.circOut)
			.wait(2000)
			.to({
				alpha: target4.alpha - 1
			}, 0)
			.wait(2500);
		
		var tween = createjs.Tween.get(target3, {
			loop: true
		})
			
			.to({
				y: target3.y + 300,
				alpha: target3.alpha - 1
			}, 0)
			.wait(5500)
			.to({
				y: target3.y,
				alpha: target3.alpha
			}, 500, createjs.Ease.circOut)
			.wait(1500)
			.to({
				alpha: target3.alpha - 1
			}, 0)
			.wait(2500);	
			
		var tween = createjs.Tween.get(target5, {
			loop: true
		})
			
			.to({
				alpha: target5.alpha - 1
			}, 0)
			.wait(7500)
			.to({
				alpha: target5.alpha
			}, 500, createjs.Ease.circOut)
			.wait(2000)
			.to({
				alpha: target5.alpha - 1
			}, 0)
			.wait(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// fr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu3APoIAA/PMBdvAAAIAAfPgEgujAPUMBdHAAAIAA+nMhdHAAAg");
	this.shape.setTransform(300,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// t1
	this.t1 = new lib.Symbol9();
	this.t1.parent = this;
	this.t1.setTransform(302,98,1,1,0,0,0,236.1,48.9);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2
	this.t2 = new lib.Symbol10();
	this.t2.parent = this;
	this.t2.setTransform(301.1,98,1,1,0,0,0,293.2,48.9);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// j3
	this.j3 = new lib.Symbol4();
	this.j3.parent = this;
	this.j3.setTransform(508.7,142.7,0.475,0.475,-12.4,0,0,295.9,166.8);

	this.timeline.addTween(cjs.Tween.get(this.j3).wait(1));

	// t4
	this.t4 = new lib.Symbol11();
	this.t4.parent = this;
	this.t4.setTransform(302.4,93.5,1,1,0,0,0,128.8,83);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// b5
	this.b5 = new lib.Symbol8();
	this.b5.parent = this;
	this.b5.setTransform(302.2,111.5,1.29,1.29,0,0,0,141.7,41.4);

	this.timeline.addTween(cjs.Tween.get(this.b5).wait(1));

	// bg
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(300,100,1,1,0,0,0,300,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,100,655.4,248.1);
// library properties:
lib.properties = {
	width: 600,
	height: 200,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/HF_JC_en_600x200_atlas_.png", id:"HF_JC_en_600x200_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;