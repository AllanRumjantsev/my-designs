(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"HF_cosmos_en_600x200_atlas_", frames: [[155,317,63,69],[0,459,196,50],[0,407,196,50],[0,0,180,170],[198,444,34,44],[220,304,34,44],[0,172,169,143],[182,0,72,149],[171,230,60,72],[0,317,153,88],[198,388,54,54],[182,151,72,77]]}
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



(lib.astronaut = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btn_en = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn_ru = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.earth = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hand_shad = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.planet = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Rocket = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Rocket_fire = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.sattelite = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.star = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.tube = function() {
	this.spriteSheet = ss["HF_cosmos_en_600x200_atlas_"];
	this.gotoAndStop(11);
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


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3D576").s().p("AhJDQQgggJgXgNQgYgOgQgRIA7hBQAWATAZAKQAZALAdAAQAagBANgKQAMgKgBgQQABgMgGgJQgFgIgPgHQgOgIgagIQgxgPgdgUQgbgSgMgZQgMgYABgdQABgoAUgcQAVgcAkgPQAjgPAtAAQAyAAAlAOQAlAPAcAbIg1A/QgVgQgWgJQgWgIgYAAQgVAAgLAIQgLAIAAANQAAALAGAHQAHAHAPAGQAQAHAdAJQAqANAbATQAbARANAZQANAaAAAlQgBAngUAfQgUAegnARQgnARg1AAQgnAAgfgJg");
	this.shape.setTransform(287.8,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3D576").s().p("AAxDNIhujaIBxi/IB9AAIh0C2IB/DjgAi7DNIAAmZIB6AAIAAGZg");
	this.shape_1.setTransform(253.3,36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3D576").s().p("AhJDAQgsgZgYgwQgYgxAAhGQAAhFAZgwQAYgwAsgZQArgaA4AAQArAAAhANQAgANAaAWIg5BEQgPgNgRgIQgRgIgVAAQgiAAgTAgQgUAgAABBQAABAAUAfQAUAfAlAAQAVgBASgJQASgKASgPIA1BFQgPAPgUANQgVANgZAIQgaAIgcAAQg8AAgsgZg");
	this.shape_2.setTransform(215.4,36.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3D576").s().p("Ag8DNIAAmZIB5AAIAAGZg");
	this.shape_3.setTransform(188.9,36.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3D576").s().p("AiJDNIAAmZIB5AAIAAE8ICaAAIgMBdg");
	this.shape_4.setTransform(165.9,36.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3D576").s().p("AhJDAQgsgZgYgwQgYgxAAhGQAAhFAZgwQAYgwAsgZQArgaA4AAQArAAAhANQAgANAaAWIg5BEQgPgNgRgIQgRgIgVAAQgiAAgTAgQgUAgAABBQAABAAUAfQAUAfAlAAQAVgBASgJQASgKASgPIA1BFQgPAPgUANQgVANgZAIQgaAIgcAAQg8AAgsgZg");
	this.shape_5.setTransform(132.9,36.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3D576").s().p("AheDBQglgRgXgeIA8g7QAUATATAJQASAJAWAAQAWAAAOgMQAPgLAAgXQAAgZgOgMQgOgMgcAAIgkAAIANhNIAZAAQAXAAAMgLQANgLAAgTQgBgSgMgJQgMgKgUAAQgVAAgTAJQgTAJgQAQIg5g8QAdgdAkgPQAmgOAsAAQAtAAAgANQAgAOAQAWQARAXAAAdQAAAkgVAZQgTAYgnANQAZACAVAKQAVAMAMAVQANAVAAAhQAAAhgSAcQgSAbgkARQgkARg1ABQg0AAgkgSg");
	this.shape_6.setTransform(85.4,37.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3D576").s().p("AAPDNIhZkqIAKBIQAFAqABA5IAAB/IhrAAIAAmZICUAAIBdErIgIgwQgDgZgDgcQgDgeAAglIAAiDIBsAAIAAGZg");
	this.shape_7.setTransform(38.5,36.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3D576").s().p("Ag8DNIAAmZIB5AAIAAGZg");
	this.shape_8.setTransform(10.7,36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,307.7,74.8), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAC6QglgYgUgvQgWguAAhFQAAg1APgmQANgnAYgaQAYgaAegNQAegNAfAAQAkAAAaALQAaAKAYATIgVAWQgVgQgVgIQgWgIgaAAQggAAgeASQgeASgSAnQgUAngBBAQABBbAiAsQAjAsA8AAQAYAAAVgFQAUgGATgKIAAiQIhPAAIgEgdIB2AAIAAC/QgaAQgeAIQgeAJgjAAQgxAAglgXg");
	this.shape.setTransform(372.4,36.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABXDKIi/lsIAEA1QABAgABA2IAADhIgiAAIAAmTIAtAAIDAFsIgDgbIgCgqIgBgyIAAj1IAiAAIAAGTg");
	this.shape_1.setTransform(334.3,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRDKIAAmTIAjAAIAAGTg");
	this.shape_2.setTransform(306.2,37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABWDKIi9lsIADA1QABAgAAA2IAADhIghAAIAAmTIAuAAIC+FsIgBgbIgDgqIgBgyIAAj1IAiAAIAAGTg");
	this.shape_3.setTransform(278,37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRDKIAAmTIAjAAIAAGTg");
	this.shape_4.setTransform(249.9,37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACYDKIgSjCIgGhBIgGg+IgDgwIhmFBIggAAIhqlBIgCAyIgGA+IgFA/IgRDCIgiAAIAmmTIAxAAIBjE6IBhk6IAxAAIAnGTg");
	this.shape_5.setTransform(218.4,37);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvDKIhWAAIAAmTIBQAAQAjAAAhAHQAhAJAbAVQAbAVAQAnQAQAnAAA/QAAA9gRApQgQAogaAWQgbAWggAKQgdAIgeAAIgEAAgAhiCsIA2AAQAaABAYgIQAagHAUgTQAUgTANgiQAMgjAAg1QAAg3gNgiQgMgigWgRQgVgSgagGQgZgGgaAAIgyAAg");
	this.shape_6.setTransform(161.9,36.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhJC8QgegRgOgdQgPgeAAgnIAAkVIAkAAIAAESQAAAxAXAcQAXAcAyAAQAzgBAXgbQAXgcAAgxIAAkSIAkAAIAAEVQAAAngPAeQgPAdgdARQgeARgsAAQgsAAgdgRg");
	this.shape_7.setTransform(122.7,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhWC5QglgYgUguQgVguAAhEQAAhCAVgvQAVguAlgZQAkgYAxgBQAxAAAlAYQAlAYAVAvQAUAuABBEQgBBCgTAvQgVAuglAYQglAZgyAAQgxAAglgYgAhDieQgcATgQAoQgPAogBA8QAAA9AQAnQARAoAcATQAcATAmAAQA8AAAhgsQAigrAAhbQAAhbgjgsQghgsg7AAQgmAAgdAUg");
	this.shape_8.setTransform(83.1,36.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhlDKIAAmTIAjAAIAAFzICoAAIgFAgg");
	this.shape_9.setTransform(51.3,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4C5QgkgYgVguQgVgvgBhEQABhEAWgvQAVguAlgXQAlgYAsAAQAjAAAZAKQAXAKAVASIgTAXQgUgQgTgHQgTgIgYAAQgjAAgdASQgdASgRAnQgSAoAAA/QAAA9ARAoQARAnAcATQAdATAjgBQAfAAAUgKQAVgJARgPIATAYQgRASgcALQgbAMgmABQgtAAglgYg");
	this.shape_10.setTransform(19.6,36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,392.7,74.8), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93D954").s().p("Ag8DNIAAiXIiDkCICFAAIA7CnIA+inICBAAIiDECIAACXg");
	this.shape.setTransform(285.7,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93D954").s().p("AhJDQQgggJgWgNQgYgOgRgRIA8hBQAVATAaAKQAZALAdAAQAYgBANgKQANgKAAgQQAAgMgFgJQgGgIgPgHQgOgIgagIQgxgPgcgUQgcgSgMgZQgMgYABgdQAAgoAVgcQAVgcAkgPQAjgPAuAAQAxAAAlAOQAmAPAbAbIg1A/QgVgQgWgJQgVgIgYAAQgWAAgLAIQgLAIAAANQAAALAGAHQAGAHAQAGQAQAHAdAJQAqANAbATQAbARANAZQANAaAAAlQgBAngUAfQgVAegmARQgnARg1AAQgnAAgfgJg");
	this.shape_1.setTransform(249.6,36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93D954").s().p("AA/DNIgQhPIhgAAIgQBPIh+AAIB3mZICQAAIB4GZgAAeApIgfigIgfCgIA+AAg");
	this.shape_2.setTransform(215,36.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93D954").s().p("AiGDNIAAmZIENAAIgNBUIiGAAIAABNIB2AAIAABRIh2AAIAABSICQAAIAABVg");
	this.shape_3.setTransform(182.6,36.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93D954").s().p("AiGDNIAAmZIENAAIgNBUIiGAAIAABNIB2AAIAABRIh2AAIAABSICQAAIAABVg");
	this.shape_4.setTransform(138.9,36.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#93D954").s().p("AgjDNIiLAAIAAmZICEAAQAqgBAmAJQAnAIAfAWQAfAWASAoQASAoAAA/QAAA8gRApQgRAogdAXQgdAXgmAKQgkAJgoAAIgEAAgAg0B4IAYAAQAbAAARgLQARgLAIgbQAJgbAAgtQAAgugJgaQgJgagRgKQgRgKgaAAIgYAAg");
	this.shape_5.setTransform(104.2,36.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#93D954").s().p("ABADNIgRhPIhgAAIgPBPIh/AAIB4mZICQAAIB3GZgAAeApIgfigIgfCgIA+AAg");
	this.shape_6.setTransform(66.5,36.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#93D954").s().p("ABpDNIgDiSQgBgnABgoQAAgpAEguIgxEPIhyAAIgzkPIAFA9IACA0IAAA1IgDCSIh4AAIAemZICWAAIAuEJIAqkJICXAAIAeGZg");
	this.shape_7.setTransform(25.4,36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,306.1,74.8), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQDKIAAieIiBj1IAnAAIBsDXIBrjXIAlAAIh/D1IAACeg");
	this.shape.setTransform(421.3,37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoDKIAAmTIDNAAIgFAdIikAAIAACXICOAAIAAAdIiOAAIAACkICtAAIAAAeg");
	this.shape_1.setTransform(392.7,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABWDKIi9lsIADA1QABAgAAA2IAADhIghAAIAAmTIAuAAIC+FsIgBgbIgDgqIgBgyIAAj1IAiAAIAAGTg");
	this.shape_2.setTransform(355.9,37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWC5QglgYgUguQgVguAAhEQAAhCAVgvQAVguAlgZQAkgYAxgBQAxAAAlAYQAmAYAUAvQAUAuABBEQAABCgUAvQgVAuglAYQglAZgyAAQgwAAgmgYgAhDieQgcATgQAoQgPAogBA8QAAA9AQAnQARAoAcATQAdATAlAAQA8AAAhgsQAigrABhbQgBhbgjgsQgigsg6AAQgmAAgdAUg");
	this.shape_3.setTransform(315.7,36.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACYDKIgSjCIgHhBIgFg+IgEgwIhlFBIghAAIholBIgEAyIgEA+IgGA/IgSDCIghAAIAmmTIAxAAIBjE6IBhk6IAyAAIAmGTg");
	this.shape_4.setTransform(272.1,37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhAC6QglgYgVgvQgUgugBhFQAAg1APgmQANgnAZgaQAYgaAdgNQAegNAfAAQAkAAAaALQAaAKAYATIgVAWQgVgQgVgIQgWgIgaAAQggAAgdASQgeASgUAnQgTAngBBAQABBbAiAsQAjAsA8AAQAYAAAVgFQAVgGASgKIAAiQIhPAAIgEgdIB3AAIAAC/QgbAQgeAIQgfAJgiAAQgxAAglgXg");
	this.shape_5.setTransform(214.7,36.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABWDKIi+lsIAEA1QACAgAAA2IAADhIgiAAIAAmTIAtAAIC/FsIgCgbIgCgqIAAgyIAAj1IAhAAIAAGTg");
	this.shape_6.setTransform(176.6,37);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRDKIAAmTIAjAAIAAGTg");
	this.shape_7.setTransform(148.5,37);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABXDKIi+lsIADA1QACAggBA2IAADhIghAAIAAmTIAtAAIDAFsIgCgbIgDgqIgBgyIAAj1IAiAAIAAGTg");
	this.shape_8.setTransform(120.3,37);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABZDKIhni1IhRAAIAAC1IgjAAIAAmTIBiAAQBHAAAkAcQAkAbAAA3QgBAsgXAaQgXAZgsALIBvC7gAhfgHIBDAAQAwABAagVQAbgUAAgsQAAgpgZgUQgZgVg5ABIg9AAg");
	this.shape_9.setTransform(85.3,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AB4DKIgjhvIipAAIgkBvIgkAAICHmTIAsAAICGGTgABLA+IhLjqIhLDqICWAAg");
	this.shape_10.setTransform(49,37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhoDKIAAmTIDNAAIgFAdIikAAIAACXICOAAIAAAdIiOAAIAACkICtAAIAAAeg");
	this.shape_11.setTransform(19.1,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,438.8,74.8), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,34,44), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand_shad();
	this.instance.parent = this;
	this.instance.setTransform(0.1,13.7,1,1,-23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0.1,0,48.9,54), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn_en();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.btn_ru();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,196,50), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sattelite();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,153,88), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Rocket_fire();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,60,72), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Rocket();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,72,149), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.astronaut();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,63,69), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tube();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,72,77), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.earth();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,180,170), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,54,54), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.planet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,169,143), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQOBFQgHAAgHgDQgHgCgFgGQgFgFgDgHQgEgHAAgKIAAhNQAAgGAFgEQAEgFAGABIDYAAQAGgBAFAFQAEAEAAAGQAAAGgEAEQgFAFgGAAIjJAAIAAAWIDDAAQAGABAEAEQAEAEAAAFQAAAGgEAEQgEAFgGAAIjDAAIAAAOQAAAEACACQADACAEAAIDAAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAFgGgBgAOiBBIgagSQgOgJgNgGQgOgGgQgFQgQgDgPAAIg9AAQgEAAgDADQgDAEAAAEIAAAaQAAAGgEAEQgEAFgGgBQgGABgFgFQgEgEAAgGIAAgdIAAgEIAAgBIAAhFQAAgGAEgEQAFgFAGABIC2AAQAJAAAIACQAHAEAGAFQAFAGADAHQAEAHAAAJQAAAJgEAHQgDAGgFAFQgGAGgHADQgIAEgJAAIgBAAIARALIARAMIAGAGQADADAAAFQAAAGgFAEQgEAFgGgBQgFABgFgFgALpgKIAIgBICiAAQAEAAAEgDQADgDAAgFQAAgFgDgDQgEgDgEAAIiqAAgAKEBAIhHheIgFgFQgDgEgEAAQgDAAgDAEIgFAFIhIBeQgFAGgGgBQgGABgFgFQgEgEAAgGQAAgGADgDIBKhiQAFgIAJgEQAJgEAJgBQAJAAAJAEQAIAFAFAHIBKBiIADAEIABAGQAAAGgEAEQgEAFgGgBQgHAAgFgFgADSBFQgJAAgHgDQgIgDgGgGQgFgFgEgHQgDgHAAgJIAAhNQAAgGAEgEQAEgFAGABQAGgBAFAFQAEAEAAAGIAABNQAAAFAEADQADADAFAAIC3AAQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAFgGgBgAh2BBQgEgEAAgGIAAhnQAAgGAEgEQAEgFAHABIDXAAQAGgBAEAFQAEAEAAAGQAAAGgEAEQgEAFgGAAIjJAAIAAAnIDJAAQAGAAAEAFQAEADAAAHQAAAGgEAEQgEAFgGAAIjJAAIAAATQAAAGgEAEQgEAFgGgBQgHABgEgFgAjBBBQgEgEAAgGIAAglIi1AAIAAAlQAAAGgEAEQgEAFgGgBQgGABgFgFQgEgEAAgGIAAhnQAAgGAEgEQAFgFAGABQAGgBAEAFQAEAEAAAGIAAAlIC1AAIAAglQAAgGAEgEQAEgFAGABQAGgBAFAFQAEAEAAAGIAABnQAAAGgEAEQgFAFgGgBQgGABgEgFgAqmBFQgGABgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIC6AAQAEAAAEgDQADgDAAgFQAAgFgDgDQgEgEgEABIipAAQgJAAgHgEQgIgDgFgGQgGgFgDgGQgDgHAAgJQAAgJADgHQADgHAGgGQAFgFAIgEQAHgCAJAAIC5AAQAGgBAEAFQAEAEAAAGQAAAGgEAEQgEAFgGAAIi6AAQgFAAgDADQgEADAAAFQAAAEAEAEQADADAFAAICpAAQAIABAHADQAIADAFAEQAGAGADAHQADAHAAAJQAAAJgDAHQgDAHgGAGQgFAFgIADQgHADgIAAgAsABAIhHheIgFgFQgDgEgEAAQgDAAgDAEIgGAFIhHBeQgFAGgGgBQgHABgEgFQgEgEAAgGQAAgGADgDIBKhiQAFgIAJgEQAJgEAJgBQAJAAAIAEQAJAFAFAHIBKBiIADAEQABACAAAEQAAAGgEAEQgEAFgGgBQgIAAgEgFgAwHBBQgEgEAAgGIAAglIi0AAIAAAlQAAAGgFAEQgEAFgGgBQgGABgEgFQgFgEAAgGIAAhnQAAgGAFgEQAEgFAGABQAGgBAEAFQAFAEAAAGIAAAlIC0AAIAAglQAAgGAEgEQAEgFAHABQAGgBAEAFQAEAEAAAGIAABnQAAAGgEAEQgEAFgGgBQgHABgEgFg");
	this.shape.setTransform(124.6,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,249.2,13.9), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(17,22,1,1,0,0,0,17,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:19.7,y:23.2},44).to({x:17,y:22},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,44);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(76.5,44,1,1,0,0,0,76.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.2,x:76.6},28).to({rotation:0,x:76.5},31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,88);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(76.5,44,1,1,0,0,0,76.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:41},39).to({y:44},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,88);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(32.9,15.5,1,1,0,0,0,32.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.91,x:33},3).to({scaleX:1,x:32.9},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,72);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(33.3,16.4,1,1,0,0,0,33.3,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.3,scaleY:1.23,y:16.3},2).to({regY:16.4,scaleY:1,y:16.4},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,72);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 9
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(159.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:31.6,regY:34.6,rotation:-12,x:159.6,y:43.6},51).to({regX:31.5,regY:34.5,rotation:0,x:159.5,y:34.5},49).wait(1));

	// Symbol 8
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.1,91.5,1,1,0,0,0,13.1,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:61.6,rotation:7.2,x:99.2,y:91.6},51).to({regY:61.5,rotation:0,x:99.1,y:91.5},49).wait(1));

	// Symbol 7
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90,95,1,1,0,0,0,90,85);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:92,y:96},51).to({x:90,y:95},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,180);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,27,27);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.59},29).to({alpha:0},30).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,27,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.694)").s().p("AgdAsIgJAAIgHgDIgHgEIgFgFIgEgHQgBgFAAgEIAAgiQAAgGACgFQACgEAEgDQAFgEAGgCQAGgBAHAAIBdAAIAAAXIhnAAIAAApIBQAAIAAgKIgoAAIAAgVIA/AAIAAAbIgBAIIgEAHIgGAFIgHAEIgHADIgJAAg");
	this.shape.setTransform(187.2,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.694)").s().p("AAjAtIgEgBIgFgDIgFgEIg7g6IAABBIgXAAIAAhEQAAgEACgEQACgEADgDQADgDAEgBIAIgCQAKAAAJAJIA7A6IAAhBIAXAAIAABAQAAAFgCAEIgEAIQgDAEgEACQgEACgFAAIgFgBg");
	this.shape_1.setTransform(173.5,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.694)").s().p("AgLAtIAAhYIAYAAIAABYg");
	this.shape_2.setTransform(164.9,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.694)").s().p("AAjAtIgEgBIgFgDIgFgEIg7g6IAABBIgXAAIAAhEQAAgEACgEQACgEADgDQADgDAEgBIAIgCQAKAAAJAJIA7A6IAAhBIAXAAIAABAQAAAFgCAEIgEAIQgDAEgEACQgEACgFAAIgFgBg");
	this.shape_3.setTransform(156.2,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.694)").s().p("AgMAtIAAhYIAZAAIAABYg");
	this.shape_4.setTransform(147.6,24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.694)").s().p("AgHAsIgGgFQgDgDgCgEIgEgHIgVgtIAABAIgWgBIAAhBQAAgFACgEIAEgHQADgDAEgBQAEgCAFAAQAEAAAEABQAEACACACIAGAGIAEAIIATAwIAWgzQADgIAFgEQAFgEAIAAQAFAAAFACQAEACADADIAEAIIACAJIAAA/IgWAAIAAhAIgVAuIgEAIIgFAHIgGAEQgDABgFAAQgDAAgEgBg");
	this.shape_5.setTransform(138.6,24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.694)").s().p("Ag9AsIAAhXIBdAAQAHAAAFACQAFACAFADQAEAEACAFQADAFAAAHIAAAfQAAAHgDAFQgDAFgEADQgEAEgFACQgGACgGAAgAgnAWIBOAAIAAgrIhOAAg");
	this.shape_6.setTransform(116.8,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.694)").s().p("AgjAsIgHgBIgGgDIgGgFIgEgGIgEgGIgBgHIAAg7IAYAAIAABBIBPAAIAAhBIAXAAIAAA9IgBAHIgCAGIgEAFIgGAEIgHADIgGABg");
	this.shape_7.setTransform(103,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.694)").s().p("AghAsQgGAAgFgCQgFgCgEgEQgEgEgCgFQgCgFAAgGIAAghQAAgGACgEQADgFAFgEQAEgDAGgCQAFgCAGAAIBBAAQAFAAAFACQAFADAEAEQAEADACAGQACAFAAAFIAAAgIgBAHIgDAGIgEAGIgGAEIgHADIgHABgAgmAWIBNAAIAAgqIhNAAg");
	this.shape_8.setTransform(89.2,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.694)").s().p("AgiAtQgFgBgFgBIgJgHQgEgEgCgFQgCgFAAgFIAAg9IAXAAIAABBIBkAAIAAAYg");
	this.shape_9.setTransform(75.6,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.694)").s().p("AghAsQgGAAgEgCQgGgCgEgDQgEgDgDgFQgCgFAAgGIAAgdQAAgIACgGQADgGAEgEQAEgEAHgCQAFgCAIAAIBcAAIAAAWIhmAAIAAArIBmAAIAAAWg");
	this.shape_10.setTransform(61.9,23.9);

	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(124.6,7,1,1,0,0,0,124.6,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,249.2,33.8), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(183.9,20.2,1,1,-25,0,0,9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({regY:1,scaleX:0.79,scaleY:0.79,x:184,y:21.3},4).to({regY:0.9,scaleX:1,scaleY:1,x:183.9,y:20.2},3).wait(2).to({regY:1,scaleX:0.79,scaleY:0.79,x:184,y:21.3},4).to({regY:0.9,scaleX:1,scaleY:1,x:183.9,y:20.2},3).wait(44).to({regY:1,scaleX:0.79,scaleY:0.79,x:184,y:21.3},4).to({regY:0.9,scaleX:1,scaleY:1,x:183.9,y:20.2},3).wait(2).to({regY:1,scaleX:0.79,scaleY:0.79,x:184,y:21.3},4).to({regY:0.9,scaleX:1,scaleY:1,x:183.9,y:20.2},3).wait(3).to({regY:1,scaleX:0.79,scaleY:0.79,x:184,y:21.3},4).to({regY:0.9,scaleX:1,scaleY:1,x:183.9,y:20.2},3).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(184.2,20.5,1,1,0,0,0,8.8,1.6);
	this.instance_1.alpha = 0.23;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({scaleX:0.75,scaleY:0.75,y:17.5},4).to({scaleX:1,scaleY:1,y:20.5},3).wait(2).to({scaleX:0.75,scaleY:0.75,y:17.5},4).to({scaleX:1,scaleY:1,y:20.5},3).wait(44).to({scaleX:0.75,scaleY:0.75,y:17.5},4).to({scaleX:1,scaleY:1,y:20.5},3).wait(2).to({scaleX:0.75,scaleY:0.75,y:17.5},4).to({scaleX:1,scaleY:1,y:20.5},3).wait(3).to({scaleX:0.75,scaleY:0.75,y:17.5},4).to({scaleX:1,scaleY:1,y:20.5},3).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(98,25,1,1,0,0,0,98,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({y:25.8},4).to({y:25},3).wait(2).to({y:25.8},4).to({y:25},3).wait(44).to({y:25.8},4).to({y:25},3).wait(2).to({y:25.8},4).to({y:25},3).wait(3).to({y:25.8},4).to({y:25},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.8,72.8);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(36,74.5,1,1,0,0,0,36,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.9,143.9,0.723,1.322,0,0,180,30.1,36.1);
	this.instance_1.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34,145,1,1,0,0,0,30,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,72,191.3), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(473.8,85.9,0.302,0.302,0,0,0,1,0.1);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(432.9,164.5,0.177,0.177,0,0,0,1.2,0.3);

	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(544.1,90.3,0.081,0.081,0,0,0,1.3,0.6);

	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(472.1,146.3,0.081,0.081,0,0,0,1.3,0.6);

	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(396.1,26.3,0.081,0.081,0,0,0,1.3,0.6);

	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(136.1,94.3,0.081,0.081,0,0,0,1.3,0.6);

	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(76.1,122.3,0.081,0.081,0,0,0,1.3,0.6);

	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(59,2.3,0.081,0.081,0,0,0,1.3,0.6);

	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(19,66.3,0.081,0.081,0,0,0,1.3,0.6);

	this.instance_9 = new lib.Symbol5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(144.9,164.5,0.177,0.177,0,0,0,1.2,0.3);

	this.instance_10 = new lib.Symbol5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(4.3,101.5,0.202,0.202,0,0,0,-5.7,1.8);

	this.instance_11 = new lib.Symbol5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(73.5,69.8,0.302,0.302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,546.1,169.2), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(26.1,65.4,0.722,0.722,0,0,0,36.1,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-128.6},100).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,138.1);


// stage content:
(lib.HF_cosmos_en_600x200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var target = this.t1;
		var target2 = this.t2;
		var target3 = this.t3;
		var target4 = this.t4;
		
		var tween = createjs.Tween.get(target, {
			loop: true
		})
			
			.to({		
				alpha: target.alpha - 1,
				scaleX: 0,
				scaleY: 0
			}, 0)
			.wait(0)
			.to({		
				alpha: target.alpha,
				scaleX: target.scaleX,
				scaleY: target.scaleY
			}, 500, createjs.Ease.backOut)
			.wait(2000)
			.to({
				alpha: target.alpha - 1
			}, 0)
			.wait(2500);
		
		var tween = createjs.Tween.get(target2, {
			loop: true
		})
			
			.to({		
				alpha: target2.alpha - 1,
				scaleX: 0,
				scaleY: 0
			}, 0)
			.wait(200)
			.to({		
				alpha: target2.alpha,
				scaleX: target2.scaleX,
				scaleY: target2.scaleY
			}, 500, createjs.Ease.backOut)
			.wait(1800)
			.to({
				alpha: target2.alpha - 1
			}, 0)
			.wait(2500);
			
		var tween = createjs.Tween.get(target3, {
			loop: true
		})
			
			.to({		
				alpha: target3.alpha - 1,
				scaleX: 0,
				scaleY: 0
			}, 0)
			.wait(2500)
			.to({		
				alpha: target3.alpha,
				scaleX: target3.scaleX,
				scaleY: target3.scaleY
			}, 500, createjs.Ease.backOut)
			.wait(2000)
			.to({
				alpha: target3.alpha - 1
			}, 0)
			.wait(0);
		
		var tween = createjs.Tween.get(target4, {
			loop: true
		})
			
			.to({		
				alpha: target4.alpha - 1,
				scaleX: 0,
				scaleY: 0
			}, 0)
			.wait(2700)
			.to({		
				alpha: target4.alpha,
				scaleX: target4.scaleX,
				scaleY: target4.scaleY
			}, 500, createjs.Ease.backOut)
			.wait(1800)
			.to({
				alpha: target4.alpha - 1
			}, 0)
			.wait(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// fr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F274A3").s().p("Egu3APoIAA/PMBdvAAAIAAfPgEgujAPUMBdHAAAIAA+nMhdHAAAg");
	this.shape.setTransform(300,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// logo
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(300.1,24,1,1,0,0,0,124.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// EARNING MONEY
	this.t1 = new lib.Symbol25();
	this.t1.parent = this;
	this.t1.setTransform(300,68,1,1,0,0,0,219.4,37.4);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// MADE EASY
	this.t2 = new lib.Symbol26();
	this.t2.parent = this;
	this.t2.setTransform(300.1,114,1,1,0,0,0,153.1,37.4);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// CLOUD MINING
	this.t3 = new lib.Symbol27();
	this.t3.parent = this;
	this.t3.setTransform(300,68,1,1,0,0,0,196.3,37.4);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// IN 3 CLICKS
	this.t4 = new lib.Symbol28();
	this.t4.parent = this;
	this.t4.setTransform(300,114,1,1,0,0,0,153.8,37.4);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// btn
	this.instance_1 = new lib.Symbol22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(304,175,1,1,0,0,0,102,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg_stuff
	this.instance_2 = new lib.Symbol17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(570.5,193,1,1,0,0,0,76.5,44);

	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(657.5,69.1,1,1,-55.2,0,0,26,69);

	this.instance_4 = new lib.Symbol10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6.5,198,1,1,0,0,0,95.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// stars
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(310.9,93,1,1,0,0,0,273.1,84.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// planet
	this.instance_6 = new lib.Symbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(548.5,43.5,1,1,0,0,0,84.5,71.5);
	this.instance_6.alpha = 0.328;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#053152").s().p("Egu3APoIAA/PMBdvAAAIAAfPg");
	this.shape_1.setTransform(300,100);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(198,72,825.6,316);
// library properties:
lib.properties = {
	width: 600,
	height: 200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/HF_cosmos_en_600x200_atlas_.png", id:"HF_cosmos_en_600x200_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;