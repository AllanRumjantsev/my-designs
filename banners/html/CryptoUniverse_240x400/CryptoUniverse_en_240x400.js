(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg_240x400 = function() {
	this.initialize(img.bg_240x400);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.btc = function() {
	this.initialize(img.btc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,156);// helper functions:

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


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,297,156), null);


(lib.Scene_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg_240x400();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_bg, null, null);


(lib.logosvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwSCbIAAgiIAcgOIAAhMIgcgOIAAghIAcgOIAAhMIgcgOIAAgjIAjgRIAiARIAAAjIgcAOIABAAIAABMIAbAOIAAAhIgbAOIAABNIAbANIAAAiIgjASgAxGBXIAAgiIAcgPIAAhKIgcgPIAAgjIAjgRIAiARIAAAjIgcAOIAABLIABAAIAbAOIAAAjIgiARgAveBXIAAgjIARgIIAKhRIgcgOIAAgjIAjgRIAjARIAAAjIgbAOIAABLIAbAOIAAAjIgjARgACCBTQgIAAgJgDQgHgEgDgHQgFgIAAgJIACgRIAUhxIATABIgUBwQgCAGAAAIQgBAGAFAGQAEAEAIABQAMACANAAQAOAAAPgCQAJgCAGgIQAGgLABgKIAUhwIASAAIgUBwQgCAOgHAOQgFAIgKAGQgJAFgKABIgeABIgYgBgAAABTQgSABgPgEQgLgCgHgLQgGgMABgOQAAgTAEgUQACgSAJgYQAFgNAJgLQAJgJAOgDQAOgEAUABQAOAAAMABQAKACAIAFQAGAFAEAHQACALAAAKQgBAWgEASQgDATgHAXQgFAOgJAKQgLAKgMADQgNADgOAAIgHgBgAAAg9QgJACgGAHQgIAJgEAKQgEAQgEATQgDASgBATQgBAKAFAIQAFAHAIACQAKACAPAAQAQAAALgCQAIgCAHgIQAHgIAEgLQAGgZABgKQAFgWAAgQQABgKgEgHQgFgHgIgBQgMgEgOACIgDgBQgLAAgMADgArHBTQgRAAgOgDQgLgDgGgKQgGgNABgNQAAgTAEgUQAEgWAHgTQAFgOAKgKQAJgKAMgDQARgEAPABQAPgBARAEQALADAGAIQAFAKAAALIgCARIgSAAIACgNQgBgHgDgHQgEgGgHgBQgKgEgOACQgLgBgMADQgIADgIAHQgIAKgCAKQgFAOgEATQgEAUAAAPQAAAIACAIQABAGAFAEQAHAEAGAAIARABQANAAAKgCQAHgBAJgFQAFgEAEgIIAAAAQAEgLACgJIARAAQgCARgKARQgIAMgOAEQgTAGgSAAIgDgBgAOMBTQgHgBgJgEQgGgCgFgHQgDgGAAgJQgBgIACgGIABgIIASAAIgCASQgBAFAEAHQAHAEAFAAIAvAAQAIgCAFgEQAEgDADgGQADgIABgGIABgKQAAgGgEgEQgEgEgGgCQgLgBgNAAQgRgBgNgDQgKgCgHgHQgHgJABgKIABgMQADgNAEgJQAFgHAJgGQAIgFALgDQAPgDANABQARgBALADQALADAFAGQAIAJgBAKIgBAOIAAACIgSAAIABgLQAAgHgDgFQgFgGgGAAQgJgCgMAAIgWACQgIABgFADQgFADgDAGQgFAKAAAMQgBAGAFAFQAFAFAKACQAPACANAAQAKABAPADQAIADAGAFQAGAJgBAJQAAAGgBAHQgCAMgFALQgFAJgIAGQgJAFgLACQgQACgNAAIgYAAgAP2BSIAcigIBpAAIgEAQIhWAAIgKA3IBSAAIgEAPIhRAAIgKA6IBVAAIgDAQgANABSIAHgkIABgJQABgJgHgGQgKgGgKACIg3AAIgMBAIgSAAIAdigIBMAAQARgBANAJQAMAKgBAPQAAAHgCAHQgBAJgEAMQgEAJgGADQgKAHgLACIAEAAQAIAAAFAHQAFAGAAAHIgJAzgAL6ACIA0AAQAJAAALgCQAIgBAFgHQAFgJACgKQABgGAAgHQACgJgHgIQgIgFgKAAIg7AAgAJZBSIAdigIBoAAIgDAQIhWAAIgKA3IBSAAIgDAPIhSAAIgKA6IBVAAIgCAQgAH3BSIgcigIATAAIAZCRIBMiQIAUAAIhWCfgAFlBSIhAiQIgaCQIgSAAIAdigIAdAAIBACSIAaiSIARABIgcCfgAiVBSIAaiPIg0AAIACgRIB7AAIgEARIgzAAIgaCPgAlNBSIAeigIBLAAQAQgBAMAJIAAAAQAKAJgBANIgCAQQgCAPgIARQgJAKgKAEQgRAGgQgBIgwAAIgMA/gAksADIAqAAQAOABAKgDQAIgBAHgHQAGgLACgKQACgIgBgHQACgIgHgHQgHgFgKABIg5AAgAmsBSIAMhDIgrhdIAVAAIAiBNIA+hNIAVAAIhOBdIgLBDgAoLBSIAHgkIAAgJQAAgJgHgGQgJgGgLACIg2AAIgLBAIgSAAIAdigIBLAAQASgBANAJQAMAJgBAQIgCAOIgGAVQgDAJgHADQgIAHgLACIACAAQAIAAAGAHQAEAFgBAJIgIAygApTACIA1AAQAJAAAMgCQAGgBAHgHQAEgIACgLQACgGAAgHQABgJgHgIQgJgGgKABIg6AAgAGgBSIAdigIASAAIgdCggAuqARIAAghIAjgRIAiARIAAAhIgiASgAx6ARIAAghIAjgRIAjARIAAAhIgjASg");
	this.shape.setTransform(114.65,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229.3,34.6);


(lib.btn_yellowsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn_yellow_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBD600").s().p("AsaEYQgsAAgegfQgfgeAAgsIAAldQAAgsAfgeQAegfAsAAIY1AAQAsAAAeAfQAfAeAAAsIAAFdQAAAsgfAeQgeAfgsAAgAtAjUQgRAPAAAXIAAFdQAAAWARARQAPAQAXAAIY1AAQAWAAARgQQAQgRAAgWIAAldQAAgXgQgPQgRgRgWAAI41AAQgXAAgPARg");
	this.shape.setTransform(90,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,56);


(lib.btn_bluesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn_blue_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C7EFF").s().p("AsaEYQgsAAgegfQgfgeAAgsIAAldQAAgsAfgeQAegfAsAAIY1AAQAsAAAeAfQAfAeAAAsIAAFdQAAAsgfAeQgeAfgsAAgAtAjUQgRAPAAAXIAAFdQAAAWARARQAPAQAXAAIY1AAQAWAAARgQQAQgRAAgWIAAldQAAgXgQgPQgRgRgWAAI41AAQgXAAgPARg");
	this.shape.setTransform(90,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,56);


(lib._5_en_btnsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// __en_btn_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBxIgtiAIgsCAIg2AAIhMjhIBDAAIAnCBIAriBIA0AAIAqCBIAoiBIBAAAIhLDhg");
	this.shape.setTransform(184.95,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhVBTQgjgiABgxQAAgwAigiQAjgiAyAAQA0AAAjAiQAhAiABAwQAAAxgjAiQgjAigzAAQgzgBgighgAgogqQgRASABAYQgBAZARASQAPASAZAAQAagBAQgRQAQgRAAgaQAAgYgQgRQgRgTgZAAQgZAAgPASg");
	this.shape_1.setTransform(155.05,11.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAzBwIheh6IAAB6Ig9AAIAAjfIA5AAIBbB1IAAh1IA9AAIAADfg");
	this.shape_2.setTransform(129.15,11.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBwIgBioIhCAAIAAg3IDDAAIAAA2IhDAAIAACpg");
	this.shape_3.setTransform(97.2,11.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBwIgshEIgbAAIAABEIg+AAIAAjfIBoAAQAyAAAYAYQAUAUAAAhQAAAwguAUIA1BOgAgpgDIApAAQAPAAAKgHQAIgHAAgNQAAgbghAAIgpAAg");
	this.shape_4.setTransform(75.9,11.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA6BxIgQgoIhVAAIgQAoIhBAAIBfjhIA7AAIBfDhgAgaAYIAzAAIgZg/g");
	this.shape_5.setTransform(50.9,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBwIAAioIhFAAIAAg3IDFAAIAAA2IhEAAIAACpg");
	this.shape_6.setTransform(30.55,11.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhhBOIAjgpQAhAbAnAAQAZAAAAgQQAAgHgHgEQgIgFgWgFQgrgKgRgMQgZgQAAggQAAggAYgTQAXgVAoAAQA3AAAlAeIggAsQgfgWgfAAQgWAAAAAPQAAAIAIAEQAIAFAWAFQArAJATAPQAWAPAAAeQAAAigZAUQgYATgqAAQhAgBgoglg");
	this.shape_7.setTransform(9.825,11.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202.3,23.4);


(lib._4_en_centersvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// __en_center_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZBYIAAhcQAAgOgHgJQgGgHgLAAQgLAAgHAHQgHAJAAAOIAABcIg9AAIAAisIA9AAIAAAZQAVgcAeAAQAcgBAPASQAQARAAAeIAABvg");
	this.shape.setTransform(124.575,44.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDBBQgbgbAAglQAAglAbgbQAbgbAoAAQApAAAbAbQAcAaAAAlQAAAlgcAbQgbAbgpAAQgpAAgagagAgagaQgJALgBAQQAAAQALALQALAMAOgBQARAAAJgLQAKgLAAgQQAAgQgKgLQgKgMgQAAQgQAAgKAMg");
	this.shape_1.setTransform(103.85,44.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeB1IAAisIA8AAIAACsgAgehHIAAgtIA+AAIAAAtg");
	this.shape_2.setTransform(88.55,41.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA1IAAhFIgTAAIAAgxIATAAIAAgsIA8AAIAAAsIAoAAIAAAxIgoAAIAAA6QABARARAAQAMAAAKgGIAAAwQgRAJgYAAQg7AAAAg5g");
	this.shape_3.setTransform(76.7,42.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BAQgagaAAgmQAAglAagaQAagaAoAAQAyAAAYAnIgpAdQgLgRgUAAQgPAAgKALQgKALAAAQQAAARAKALQAJALAPAAQAQAAARgSIApAeQgbAngyAAQgmAAgagag");
	this.shape_4.setTransform(61.1,44.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFBHQgQgRAAgdIAAhwIA9AAIAABdQAAAOAHAHQAGAIALAAQALAAAHgIQAHgHAAgOIAAhdIA9AAIAACsIg+AAIAAgYQgVAcgegBQgbAAgPgRg");
	this.shape_5.setTransform(41.575,44.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA7BxIgQgoIhVAAIgQAoIhCAAIBfjhIA7AAIBfDhgAgYAYIAxAAIgZg/g");
	this.shape_6.setTransform(19.075,42.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8BDQgagZAAgpQAAglAYgaQAZgbAlAAQArAAAXAdQAVAZAAAoIAAAMIhzAAQAHAcAdAAQAVAAARgSIAiAcQgdAjguAAIgFAAQgkAAgYgXgAgSgiQgIAIgCAOIA7AAQgCgOgIgIQgIgJgMAAQgLAAgIAJg");
	this.shape_7.setTransform(133.275,14.5793);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYBhQgQgOAAgeIAAhFIgTAAIAAgxIATAAIAAgsIA9AAIAAAsIAnAAIAAAxIgnAAIAAA6QAAARARAAQAMAAAKgGIAAAvQgQAKgZAAQgdAAgOgNg");
	this.shape_8.setTransform(117.1,12.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDBLQgRgPAAgaQAAgbATgMQARgOAgAAQAYAAARAHIAAgDQAAgcgiAAQgVAAgbAKIgMgrQAggNAlAAQAtAAAUAVQAUATAAAkIAABjIg8AAIAAgSQgVAWgdAAQgbgBgPgOgAgTAQQgHAGgBAKQAAAJAHAFQAGAFAIAAQANAAAJgIQAJgJAAgMIAAgIQgIgEgRAAQgMAAgHAGg");
	this.shape_9.setTransform(100.5,14.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5BYIAAisIA8AAIAAAjQARgnAmABIAABAIgFAAQgyAAAAA5IAAA2g");
	this.shape_10.setTransform(85.7,14.5973);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhVB1IAAjpIA9AAIAABUQAWgcAdAAQAbAAARARQAPARAAAdIAABwIg9AAIAAhcQAAgOgGgHQgHgHgLAAQgLAAgGAHQgIAHAAAOIAABeg");
	this.shape_11.setTransform(68.15,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhLBBIAXglQAgAUAbAAQAPAAAAgKQAAgFgHgEIgUgGQgfgIgMgKQgSgNAAgYQAAgbATgQQATgOAeAAQAqAAAdAUIgVAmQgdgQgWAAQgNAAAAAIQAAAFAIAEIATAGQAeAJANAKQASANAAAYQAAAbgTAQQgTAPghAAIgDAAQgrAAgigZg");
	this.shape_12.setTransform(49.5,14.7019);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhDBLQgRgPAAgaQAAgbASgMQATgOAfAAQAYAAARAHIAAgDQAAgcgiAAQgWAAgaAKIgMgrQAhgNAkAAQAtAAAVAVQATATAAAkIAABjIg8AAIAAgSQgVAWgdAAQgagBgQgOgAgRAQQgIAGAAAKQAAAJAGAFQAGAFAJAAQANAAAJgIQAIgIAAgNIAAgIQgIgEgQAAQgMAAgHAGg");
	this.shape_13.setTransform(31.6,14.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAoBwIAAhVIhPAAIAABVIg+AAIAAjfIA+AAIAABUIBPAAIAAhUIA+AAIAADfg");
	this.shape_14.setTransform(10.175,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,53.8);


(lib._3_en_centersvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// __en_center_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLBBIAXglQAfAUAcAAQAPAAAAgKQAAgFgHgDIgUgHQgegJgNgJQgSgNAAgYQAAgbATgQQATgOAeAAQAqAAAdAUIgVAmQgdgQgWAAQgNAAAAAJQAAAFAIADIATAHQAfAJANAJQARANAAAYQAAAcgTAPQgTAPghAAIgFAAQgoAAgjgZg");
	this.shape.setTransform(119.5,44.704);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA0IAAhEIgUAAIAAgyIAUAAIAAgsIA7AAIAAAsIAoAAIAAAyIgoAAIAAA5QAAARARAAQANABAKgHIAAAxQgRAJgYABQg6gCAAg5g");
	this.shape_1.setTransform(104.525,42.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBHQgQgRAAgdIAAhxIA9AAIAABeQAAAOAHAHQAGAIALAAQALAAAHgIQAHgHAAgOIAAheIA9AAIAACsIg9AAIAAgXQgVAcgeAAQgcAAgPgSg");
	this.shape_2.setTransform(87.575,44.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDBAQgbgaAAgmQAAgkAbgbQAbgbAoAAQApAAAbAbQAbAaAAAlQAAAlgbAbQgbAbgpAAIgBAAQgnAAgbgbgAgZgaQgKALAAAPQAAAQAKAMQAKALAPAAQARAAAKgLQAJgLAAgRQAAgPgKgLQgKgMgQAAQgPAAgKAMg");
	this.shape_3.setTransform(67.025,44.6505);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZBiIAUgrQAQAJALAAQAJAAAFgHIhEipIBAAAIAiBoIAhhoIA+AAIhACpQgMAfgOAMQgNANgaAAQgeAAgbgPg");
	this.shape_4.setTransform(47.5,47.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDBLQgRgPAAgaQAAgaATgNQASgOAfgBQAXAAASAIIAAgDQAAgcgiAAQgWAAgaAKIgMgrQAhgNAkAAQAuAAAUAVQATATAAAkIAABjIg8AAIAAgSQgVAWgdAAQgagBgQgOgAgRAQQgIAGABAKQAAAJAFAFQAGAFAKAAQAMAAAIgJQAJgHAAgNIAAgIQgJgFgOAAQgNAAgHAHg");
	this.shape_5.setTransform(28.25,44.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AheBwIAAjfIBgAAQAqAAAZAVQAZAVAAAlQAAAmgbAVQgaAVgqAAIgfAAIAABAgAgggBIAeAAQAPABAKgJQAKgIAAgNQAAgdgjAAIgeAAg");
	this.shape_6.setTransform(9.45,42.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhYBiIATgrQAPAJAMAAQAIAAAGgHIhEipIBAAAIAiBoIAihoIA9AAIg/CpQgMAfgOAMQgOANgaAAQgdAAgbgPg");
	this.shape_7.setTransform(94.45,17.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdB1IAAjpIA7AAIAADpg");
	this.shape_8.setTransform(79.6,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeB1IAAisIA8AAIAACsgAgfhHIAAgtIA+AAIAAAtg");
	this.shape_9.setTransform(70.05,11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhCBLQgSgPAAgaQAAgbATgNQASgNAfAAQAXAAASAHIAAgDQAAgcgiAAQgWAAgaAKIgMgrQAhgNAkAAQAuAAAUAVQATATAAAjIAABkIg8AAIAAgSQgVAWgcAAQgagBgQgOgAgRAQQgIAGABAKQAAAJAFAFQAGAFAJAAQANgBAIgHQAJgJAAgMIAAgIQgHgEgQAAQgNAAgHAGg");
	this.shape_10.setTransform(55.25,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhqBwIAAjfIBYAAQA6AAAhAfQAiAfAAAxQgBAxghAfQgjAgg6AAgAgrA6IAZAAIAAgBQAbAAASgOQAQgPABgcQgBgZgQgQQgSgPgbAAIgZAAg");
	this.shape_11.setTransform(34.15,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127.1,58.6);


(lib._2_en_centersvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// __en_center_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheByIgBjfIA9AAIAAAXQAXgbAdAAQAgAAAWAYQAYAaAAAoQAAAogYAZQgWAZgfAAQgfAAgVgZIAABIgAgagzQgKALAAASQAAARALAKQAKAMAOAAQAPAAAKgMQAKgKAAgSQAAgQgKgMQgLgLgOAAQgPAAgKALg");
	this.shape.setTransform(125.225,46.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGBIQgPgRAAgeIAAhxIA9AAIAABdQAAAeAYAAQALAAAHgHQAHgJAAgOIAAhdIA9AAIAACsIg9AAIAAgXQgVAcgeAAQgcAAgQgRg");
	this.shape_1.setTransform(103.9,43.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0AaIAAgzIBpAAIAAAzg");
	this.shape_2.setTransform(87.25,42.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnA0IAAhFIgUAAIAAgxIAUAAIAAgsIA8AAIAAAsIAoAAIAAAxIgoAAIAAA7QAAARAQAAQANAAALgGIAAAwQgTAKgXAAQg7gBABg6g");
	this.shape_3.setTransform(73.6,41.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BYIAAisIA8AAIAAAjQAQgoAnACIAABAIgFAAQgyAAAAA5IAAA2g");
	this.shape_4.setTransform(60.7,43.6223);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCBKQgSgPAAgZQAAgbATgNQASgNAfAAQAZgBAQAIIAAgDQAAgcgiAAQgVAAgaAKIgNgrQAggNAlAAQAuAAAUAVQATATAAAkIAABjIg8AAIAAgSQgVAWgdAAQgagCgPgOgAgSAPQgIAGAAAJQAAAJAGAGQAGAEAJAAQANABAJgIQAIgHAAgPIAAgIQgHgDgRAAQgMgBgHAHg");
	this.shape_5.setTransform(43.25,44.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYBhQgPgOAAgfIAAhFIgUAAIAAgxIAUAAIAAgsIA7AAIAAAsIAoAAIAAAxIgoAAIAAA7QAAARARAAQAMAAALgGIAAAwQgTAKgYAAQgbgBgOgNg");
	this.shape_6.setTransform(27,41.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhhBOIAjgpQAhAcAnAAQAZAAAAgQQABgHgIgEQgIgFgWgFQgrgKgRgMQgYgQAAggQAAggAXgUQAYgUAnAAQA3AAAlAeIggAqQgggWgeAAQgWAAAAAPQAAAIAIAEQAIAFAWAFQArAJATAPQAWAQAAAdQAAAigZAUQgZATgpAAQg+AAgqglg");
	this.shape_7.setTransform(9.8,41.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhXBiIATgrQAPAJALAAQAIAAAHgHIhFipIBAAAIAiBpIAhhoIA+AAIhACoQgLAfgOAMQgOANgaAAQgcAAgbgPg");
	this.shape_8.setTransform(95.825,16.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhLBBIAXglQAfAUAcAAQAPAAAAgKQAAgFgHgDIgUgHQgegIgNgKQgSgNAAgYQAAgbAUgQQASgOAeAAQAqAAAdAUIgVAmQgdgQgWAAQgNAAAAAJQAAAFAIADIATAHQAfAJANAJQARANAAAYQAAAcgUAPQgSAPghAAIgDAAQgrAAgigZg");
	this.shape_9.setTransform(78,13.7269);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhDBKQgRgPAAgZQAAgbASgNQATgNAfAAQAVAAAUAHIAAgDQAAgcgiAAQgVAAgbAKIgMgrQAggNAlAAQAtAAAVAVQATASAAAlIAABjIg8AAIAAgSQgVAWgcAAQgbgCgQgOgAgRAQQgIAFABALQgBAIAHAFQAFAFAJAAQANAAAJgHQAIgJABgNIAAgHQgHgFgSAAQgMAAgHAHg");
	this.shape_10.setTransform(60.05,14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhaBxIAAjhICzAAIAAA2Ih1AAIAAAiIBrAAIAAAwIhrAAIAAAkIB3AAIAAA1g");
	this.shape_11.setTransform(40.6,11.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.8,57.5);


(lib._1_en_center2svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// __en_center2_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABQBZIAAheQAAgdgZAAQgLABgGAHQgIAIAAANIAABeIg7AAIAAheQAAgdgZAAQgLABgGAHQgIAIAAANIAABeIg8AAIAAitIA9AAIAAAYQAWgcAeAAQAjAAAOAcQAZgcAhAAQAcAAAQARQAPARAAAdIAAByg");
	this.shape.setTransform(79.025,74.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BYIAAisIA8AAIAAAjQAQgnAnABIAABAIgFAAQgyAAAAA5IAAA2g");
	this.shape_1.setTransform(57.2,74.5973);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDBLQgRgPAAgaQAAgaASgNQASgOAgAAQAVAAAUAHIAAgDQAAgcgiAAQgVAAgbAKIgMgrQAhgNAkAAQAtAAAVAVQATAUAAAjIAABjIg8AAIAAgSQgUAWgeAAQgagBgQgOgAgSAQQgIAGAAAKQAAAJAGAFQAGAFAJAAQANgBAIgHQAJgIAAgNIAAgIQgIgEgQAAQgMAAgHAGg");
	this.shape_2.setTransform(39.875,74.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhYBwIAAjfICxAAIAAA2Ih0AAIAAAnIBqAAIAAAyIhqAAIAABQg");
	this.shape_3.setTransform(21.6,72.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZBfIAUgoQAfAQAdAAQAsAAAAgrIAAgHQgVAagfAAQghAAgVgVQgXgXAAgkQAAgkAXgXQAVgWAfAAQASAAANAHQAKAGANALIAAgUIA8AAIAACDQAAAwgVAVQgZAZgzAAIgCAAQgvAAgmgUgAgYg4QgLAJABAPQgBAPALAJQAKAIAOAAQAPABAKgJQAKgKAAgPQAAgOgKgJQgKgKgPAAQgOAAgKAKg");
	this.shape_4.setTransform(96.05,47.0756);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBYIAAhcQAAgOgHgIQgGgIgLABQgLgBgHAIQgHAIAAAOIAABcIg9AAIAAisIA9AAIAAAZQAVgcAeAAQAbgBAQASQAQARAAAeIAABvg");
	this.shape_5.setTransform(75.475,44.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcB1IAAisIA7AAIAACsgAgfhHIAAgtIA+AAIAAAtg");
	this.shape_6.setTransform(60.4,41.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZBYIAAhcQAAgOgHgIQgGgIgLABQgKgBgIAIQgHAIAAAOIAABcIg9AAIAAisIA8AAIAAAZQAXgcAcAAQAdgBAPASQAQARAAAeIAABvg");
	this.shape_7.setTransform(45.6,44.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcB1IAAisIA8AAIAACsgAgehHIgBgtIA/AAIAAAtg");
	this.shape_8.setTransform(30.525,41.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA5BwIAAiAIg5BXIAAAAIg5hWIAAB/Ig9AAIAAjfIBCAAIA0BXIA1hXIBCAAIAADfg");
	this.shape_9.setTransform(11.9,42.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhHBeQgXgaAAgoQAAgoAXgaQAVgYAgAAQAeAAAWAZIAAhRIA9AAIAADpIg9AAIAAgXQgXAbgdAAQgfAAgWgZgAgYAAQgKAMAAARQAAARAKALQALALAOAAQAPAAAKgMQAKgLAAgRQAAgRgKgLQgKgKgPAAQgOAAgLAKg");
	this.shape_10.setTransform(89.4,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhEBHQgRgSAAgdIAAhvIA9AAIAABcQAAAPAHAHQAGAIALgBQALABAHgIQAHgHAAgPIAAhcIA9AAIAACrIg9AAIAAgYQgWAcgdAAQgbAAgPgRg");
	this.shape_11.setTransform(68.65,14.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhEBAQgbgaAAgmQAAgkAbgbQAcgbAoAAQAqAAAbAbQAbAaAAAlQAAAlgbAbQgcAbgpAAQgpAAgbgbgAgZgaQgKALAAAPQAAAQAKAMQALALAPAAQAQAAAKgLQAKgLAAgRQAAgPgKgLQgMgMgPAAQgPAAgKAMg");
	this.shape_12.setTransform(48.1,14.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdB1IAAjpIA7AAIAADpg");
	this.shape_13.setTransform(32.8,11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhJBUQgigiAAgxQAAgwAigjQAhghAyAAQA7gBAjAwIgtAjQgVgagcAAQgWAAgPARQgPASAAAYQAAAZAPARQAPARAWAAQAQAAANgHQAKgGAMgOIAvAiQgSAYgVAMQgaAOgiAAQgxAAghggg");
	this.shape_14.setTransform(16.7,12.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.6,83.9);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(148.55,78,1,1,-1.4856,0,0,148.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:148.6,rotation:0.9784,x:148.65,y:78.05},34).to({regX:148.5,rotation:-1.4856,x:148.55,y:78},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-3.8,301,163.70000000000002);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(148.5,78,1,1,0,0,0,148.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:96.9},44,cjs.Ease.sineInOut).to({y:78},45,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-3.8,301,182.60000000000002);


(lib.Symbol_13_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1_en_center2svg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(174.1,26.9,1,1,0,0,0,174.1,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_13_Layer_1, null, null);


(lib.Symbol_12_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2_en_centersvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(109.5,14.6,1,1,0,0,0,109.5,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_12_Layer_1, null, null);


(lib.Symbol_11_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._3_en_centersvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(106.9,26.4,1,1,0,0,0,106.9,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_11_Layer_1, null, null);


(lib.Symbol_10_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._4_en_centersvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(158.4,14.6,1,1,0,0,0,158.4,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_10_Layer_1, null, null);


(lib.Symbol_9_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn_bluesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(90,28,1,1,0,0,0,90,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_9_Layer_1, null, null);


(lib.Symbol_8_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn_yellowsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(90,28,1,1,0,0,0,90,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_8_Layer_1, null, null);


(lib.Symbol_2_btn_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn_text
	this.instance = new lib._5_en_btnsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(64.3,27.65,0.743,0.743,0,0,0,66.9,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logosvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120.1,37.05,0.6685,0.6685,0,0,0,114.8,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_logo, null, null);


(lib.Scene_1_btc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btc
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(120.1,247.1,0.4907,0.4907,0,0,0,148.8,78.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_btc, null, null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_13_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(87,41.9,1,1,0,0,0,87,41.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,105.6,83.9), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_12_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(67.4,28.8,1,1,0,0,0,67.4,28.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,134.8,57.5), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_11_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(63.6,29.3,1,1,0,0,0,63.6,29.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,127.1,58.6), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_10_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(79.2,26.9,1,1,0,0,0,79.2,26.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,142,53.8), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_9_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(90,28,1,1,0,0,0,90,28);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,180,56), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_8_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(90,28,1,1,0,0,0,90,28);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,180,56), null);


(lib.Symbol_5_t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t4
	this.t4 = new lib.Symbol10();
	this.t4.name = "t4";
	this.t4.parent = this;
	this.t4.setTransform(87.4,66.75,1,1,0,0,0,158.4,14.6);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_5_t4, null, null);


(lib.Symbol_5_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t3
	this.t3 = new lib.Symbol11();
	this.t3.name = "t3";
	this.t3.parent = this;
	this.t3.setTransform(43.35,76.15,1,1,0,0,0,106.9,26.4);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_5_t3, null, null);


(lib.Symbol_5_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2
	this.t2 = new lib.Symbol12();
	this.t2.name = "t2";
	this.t2.parent = this;
	this.t2.setTransform(42.1,64.85,1,1,0,0,0,109.5,14.6);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_5_t2, null, null);


(lib.Symbol_5_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1
	this.t1 = new lib.Symbol13();
	this.t1.name = "t1";
	this.t1.parent = this;
	this.t1.setTransform(121.35,64,1,1,0,0,0,174.1,26.9);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_5_t1, null, null);


(lib.Symbol_2_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// yellow
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(179.5,28.05,1,1,0,0,0,179.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_2_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(179.5,28.05,1,1,0,0,0,179.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({alpha:0},5).wait(10).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(this.t4.parent == undefined || this.t4.parent == this)
		this.t4 = this.t4.t4;
		if(this.t3.parent == undefined || this.t3.parent == this)
		this.t3 = this.t3.t3;
		if(this.t2.parent == undefined || this.t2.parent == this)
		this.t2 = this.t2.t2;
		if(this.t1.parent == undefined || this.t1.parent == this)
		this.t1 = this.t1.t1;
		var target = this.t1;
		var target3 = this.t2;
		var target5 = this.t3;
		var target6 = this.t4;
		
		
		var tween = createjs.Tween.get(target, {
			loop: true
		})
			
			.to({
				x: target.x - 300,
				alpha: target.alpha - 1
			}, 0)
			.wait(0)
			.to({
				x: target.x,
				alpha: target.alpha
			}, 500, createjs.Ease.circOut)
			.wait(2000)
			.to({
				alpha: target.alpha - 1
			}, 0)
			.wait(7500);
			
			
		
		var tween = createjs.Tween.get(target3, {
			loop: true
		})
			
			.to({
				x: target3.x - 300,
				alpha: target3.alpha - 1
			}, 0)
			.wait(2500)
			.to({
				x: target3.x,
				alpha: target3.alpha
			}, 500, createjs.Ease.circOut)
			.wait(2000)
			.to({
				alpha: target3.alpha - 1
			}, 0)
			.wait(5000);
			
			
		var tween = createjs.Tween.get(target5, {
			loop: true
		})
			
			.to({
				x: target5.x - 300,
				alpha: target5.alpha - 1
			}, 0)
			.wait(5000)
			.to({
				x: target5.x,
				alpha: target5.alpha
			}, 500, createjs.Ease.circOut)
			.wait(2000)
			.to({
				alpha: target5.alpha - 1
			}, 0)
			.wait(2500);
		
		var tween = createjs.Tween.get(target6, {
			loop: true
		})
			
			.to({
				x: target6.x - 300,
				alpha: target6.alpha - 1
			}, 0)
			.wait(7500)
			.to({
				x: target6.x,
				alpha: target6.alpha
			}, 500, createjs.Ease.circOut)
			.wait(2000)
			.to({
				alpha: target6.alpha - 1
			}, 0)
			.wait(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// t4_obj_
	this.t4 = new lib.Symbol_5_t4();
	this.t4.name = "t4";
	this.t4.parent = this;
	this.t4.setTransform(8.2,79,1,1,0,0,0,8.2,79);
	this.t4.depth = 0;
	this.t4.isAttachedToCamera = 0
	this.t4.isAttachedToMask = 0
	this.t4.layerDepth = 0
	this.t4.layerIndex = 0
	this.t4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3_obj_
	this.t3 = new lib.Symbol_5_t3();
	this.t3.name = "t3";
	this.t3.parent = this;
	this.t3.setTransform(0,79,1,1,0,0,0,0,79);
	this.t3.depth = 0;
	this.t3.isAttachedToCamera = 0
	this.t3.isAttachedToMask = 0
	this.t3.layerDepth = 0
	this.t3.layerIndex = 1
	this.t3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2_obj_
	this.t2 = new lib.Symbol_5_t2();
	this.t2.name = "t2";
	this.t2.parent = this;
	this.t2.setTransform(0,79,1,1,0,0,0,0,79);
	this.t2.depth = 0;
	this.t2.isAttachedToCamera = 0
	this.t2.isAttachedToMask = 0
	this.t2.layerDepth = 0
	this.t2.layerIndex = 2
	this.t2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1_obj_
	this.t1 = new lib.Symbol_5_t1();
	this.t1.name = "t1";
	this.t1.parent = this;
	this.t1.setTransform(34.3,79,1,1,0,0,0,34.3,79);
	this.t1.depth = 0;
	this.t1.isAttachedToCamera = 0
	this.t1.isAttachedToMask = 0
	this.t1.layerDepth = 0
	this.t1.layerIndex = 3
	this.t1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-71,37.1,142,83.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// blue_obj_
	this.blue = new lib.Symbol_2_blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(90,28.1,1,1,0,0,0,90,28.1);
	this.blue.depth = 0;
	this.blue.isAttachedToCamera = 0
	this.blue.isAttachedToMask = 0
	this.blue.layerDepth = 0
	this.blue.layerIndex = 0
	this.blue.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blue).wait(30));

	// yellow_obj_
	this.yellow = new lib.Symbol_2_yellow();
	this.yellow.name = "yellow";
	this.yellow.parent = this;
	this.yellow.setTransform(90,28.1,1,1,0,0,0,90,28.1);
	this.yellow.depth = 0;
	this.yellow.isAttachedToCamera = 0
	this.yellow.isAttachedToMask = 0
	this.yellow.layerDepth = 0
	this.yellow.layerIndex = 1
	this.yellow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.yellow).wait(30));

	// btn_text_obj_
	this.btn_text = new lib.Symbol_2_btn_text();
	this.btn_text.name = "btn_text";
	this.btn_text.parent = this;
	this.btn_text.setTransform(89.8,27.9,1,1,0,0,0,89.8,27.9);
	this.btn_text.depth = 0;
	this.btn_text.isAttachedToCamera = 0
	this.btn_text.isAttachedToMask = 0
	this.btn_text.layerDepth = 0
	this.btn_text.layerIndex = 2
	this.btn_text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.btn_text).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,180,56);


(lib.Scene_1_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(294.1,75.95,1,1,0,0,0,174.1,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_text, null, null);


(lib.Scene_1_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(208,355.05,1,1,0,0,0,178,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_btn, null, null);


// stage content:
(lib.CryptoUniverse_en_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// logo_obj_
	this.logo = new lib.Scene_1_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(120,37.1,1,1,0,0,0,120,37.1);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 0
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// btc_obj_
	this.btc = new lib.Scene_1_btc();
	this.btc.name = "btc";
	this.btc.parent = this;
	this.btc.setTransform(120,247,1,1,0,0,0,120,247);
	this.btc.depth = 0;
	this.btc.isAttachedToCamera = 0
	this.btc.isAttachedToMask = 0
	this.btc.layerDepth = 0
	this.btc.layerIndex = 1
	this.btc.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.btc).wait(1));

	// btn_obj_
	this.btn = new lib.Scene_1_btn();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(120,355.1,1,1,0,0,0,120,355.1);
	this.btn.depth = 0;
	this.btn.isAttachedToCamera = 0
	this.btn.isAttachedToMask = 0
	this.btn.layerDepth = 0
	this.btn.layerIndex = 2
	this.btn.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(171.5,123,1,1,0,0,0,171.5,123);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 3
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(120,200,1,1,0,0,0,120,200);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 4
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,200,120,200);
// library properties:
lib.properties = {
	id: '5E884A961C76964A907418A8B4A484F2',
	width: 240,
	height: 400,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg_240x400.jpg", id:"bg_240x400"},
		{src:"images/btc.png", id:"btc"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5E884A961C76964A907418A8B4A484F2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;