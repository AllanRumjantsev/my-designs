(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"HF_html4_bw_600x200_atlas_", frames: [[0,0,600,200]]},
		{name:"HF_html4_bw_600x200_atlas_2", frames: [[0,0,600,200]]}
];


// symbols:



(lib.screen_600x200_1 = function() {
	this.spriteSheet = ss["HF_html4_bw_600x200_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.screen_600x200_2 = function() {
	this.spriteSheet = ss["HF_html4_bw_600x200_atlas_"];
	this.gotoAndStop(0);
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


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.screen_600x200_1();
	this.instance.parent = this;

	this.instance_1 = new lib.screen_600x200_2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(198.6,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(198.8,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,442.3,58.4);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(225.3,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(225.4,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,467.7,58.4);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzVCmQgHgBgXgHQgWgHgGAAQgGAAgDADQgEAEgCAKIgIAAIAAhrIAIAAQAGAiALAQQAKARAVALQAVALAZAAQAdAAARgPQAQgPAAgVQAAgMgGgLQgGgMgOgKQgJgHgogXQgogXgRgMQgSgNgIgRQgJgQAAgTQAAgiAagYQAagZAoAAQAZAAAcAMQANAGAFAAQAGAAAEgDQAEgEACgLIAJAAIAABtIgJAAQgEgggLgSQgLgTgTgLQgUgKgWAAQgYAAgQAOQgPAPAAATQAAAOAKAMQAOARA2AdQAsAXAQANQAQAMAJARQAJARAAATQAAAkgcAaQgcAZgrAAQgOAAgMgCgAT+CgQgIgHAAgLQAAgKAIgIQAHgHALAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgLAAgHgIgAQ9ChQgHgDgFAAQgGAAgDAGIgHAAIAAhLIAHAAQAHAgASARQATAQAWAAQAQAAAKgJQAKgKAAgNQAAgQgLgLQgLgLgigQQghgRgLgNQgKgOAAgUQAAgZASgSQASgRAcAAQANAAASAFQALAEAEAAQAEAAACgCIAFgHIAIAAIAABHIgIAAQgJghgNgMQgOgMgWAAQgQAAgKAIQgKAJAAAKQAAANAIAIQAHAKAWAKIAiARQAvAXAAAlQAAAdgWASQgWASgbAAQgUAAgZgHgANhCJQgbgeAAg0QAAgyAegeQAegfAqAAQAfAAAUARQAUAQAAASQAAAIgFAFQgGAGgKAAQgOAAgHgJQgEgFgBgNQgBgNgJgIQgIgHgOAAQgXAAgOASQgTAWAAAlQAAAlATAeQASAdAgAAQAXAAASgQQAMgLANgcIAGAEQgIAqgZAWQgZAXgfAAQgkAAgbgfgAIuChQgHgDgFAAQgGAAgDAGIgHAAIAAhLIAHAAQAHAgASARQATAQAWAAQAQAAAKgJQAKgKAAgNQAAgQgLgLQgLgLgigQQghgRgLgNQgKgOAAgUQAAgZASgSQASgRAcAAQANAAASAFQALAEAEAAQAEAAACgCIAFgHIAIAAIAABHIgIAAQgJghgNgMQgOgMgWAAQgQAAgKAIQgKAJAAAKQAAANAIAIQAHAKAWAKIAiARQAvAXAAAlQAAAdgWASQgWASgbAAQgUAAgZgHgAF2ChQgIgDgFAAQgFAAgDAGIgIAAIAAhLIAIAAQAGAgATARQASAQAXAAQAQAAAKgJQAKgKAAgNQAAgQgLgLQgMgLghgQQgigRgKgNQgLgOAAgUQAAgZASgSQASgRAdAAQAMAAASAFQAMAEAEAAQAEAAACgCIAFgHIAHAAIAABHIgHAAQgJghgOgMQgOgMgVAAQgQAAgKAIQgKAJAAAKQAAANAHAIQAHAKAWAKIAiARQAvAXAAAlQAAAdgWASQgWASgbAAQgTAAgZgHgAi7CJQgbgeAAg0QAAgyAegeQAdgfAqAAQAfAAAVARQAUAQAAASQAAAIgGAFQgGAGgKAAQgNAAgHgJQgEgFgCgNQgBgNgIgIQgIgHgOAAQgYAAgOASQgTAWAAAlQAAAlATAeQATAdAfAAQAXAAASgQQANgLAMgcIAHAEQgJAqgZAWQgZAXgeAAQgkAAgbgfgAmmCoIAAgfQgPARgPAHQgPAHgRAAQgjAAgagdQgagdAAguQAAguAdgkQAdgmAtAAQAcAAASARIAAgnQAAgkgBgIQgCgJgEgDQgDgDgGAAQgGAAgKAEIgDgIIA/gaIALAAIAAD0QAAAlABAJQACAIAEADQAEADAFAAQAGAAAKgEIADAJIg/AagAn7gYQgVAYAAAuQAAAuAUAZQAVAZAZAAQAVAAATgVIAAhtQgBgPgHgNQgHgNgLgGQgMgHgLAAQgUAAgQASgAwXCCQgYghAAgoQAAgdAPgcQAOgdAYgNQAXgOAbAAQAwAAAdAkQAZAfAAAoQAAAdgOAdQgNAdgYAPQgYAPgeAAQgwAAgcgmgAvogiQgMAIgIASQgIARAAAdQAAAuATAiQASAhAeAAQAXAAAOgSQAPgTAAgtQAAg4gYggQgRgWgZAAQgNAAgMAHgACPCXQgPgPAAgZQAAgQAHgLQAKgQAXgOQAYgNA2gUIAAgJQAAgegKgMQgKgMgTAAQgPAAgIAIQgJAIAAAKIAAANQAAAKgFAGQgFAGgJAAQgJAAgFgGQgGgGAAgKQAAgUAVgQQAUgRAlAAQAcAAASAJQAOAIAGAPQAEAKAAAeIAABIQAAAeACAHQABAHADACQACACAEAAQADAAADgBQAFgDAOgOIAAANQgaAigYAAQgLAAgHgHQgHgIAAgTQggAZgJAEQgMAGgOAAQgWAAgOgPgADJA2QgSALgIALQgIALAAANQAAARAKALQAKALANAAQASAAAcgXIAAhRQgjAOgKAFgALEChIAAgIQAPAAAGgDQAFgDADgHQADgHAAgUIAAhRQAAgigCgKQgBgIgEgCQgDgDgGAAQgHAAgJADIgDgIIBAgaIAKAAIAACpQAAAUADAHQADAGAFAEQAGADAPAAIAAAIgAgCChIAAgIQAOAAAFgDQAGgDADgHQADgHAAgUIAAi/QAAgkgCgIQgCgJgDgDQgEgDgFAAQgGAAgJAEIgEgIIA/gaIAKAAIAAEYQAAAUADAHQADAGAGAEQAGADAQAAIAAAIgAq9ChIAAgIQAQAAAFgDQAGgDADgHQADgHAAgUIAAhRQAAgigCgKQgCgIgDgCQgEgDgGAAQgGAAgKADIgDgIIBAgaIAKAAIAACpQAAAUADAHQADAGAGAEQAFADAPAAIAAAIgAtAChIAAgIQAPAAAFgDQAGgDADgHQADgHAAgUIAAi/QAAgkgCgIQgCgJgDgDQgEgDgFAAQgGAAgKAEIgEgIIBAgaIAKAAIAAEYQAAAUADAHQADAGAGAEQAGADAQAAIAAAIgAUMBOIgVi6IgBgTQAAgOAIgJQAIgJAKAAQALAAAIAJQAHAJAAARIgBAQIgUC6gALnh/QgHgHAAgKQAAgJAHgHQAHgHAKAAQAJAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgJAAQgKAAgHgHgAqah/QgHgHAAgKQAAgJAHgHQAHgHAKAAQAKAAAHAHQAGAHAAAJQAAAKgGAHQgHAHgKAAQgKAAgHgHg");
	this.shape.setTransform(138.1,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A0oA9QAPAXAUAiQALASAWAHQBZAcABhTQAAgVgVgKQhLgng0g+QgRgVAJgaQAbhQBWAPQAVAGAXAIIAHABIATgSIAABtQgOgWgSgjQgIgOgPgHQhIgjgUBIQgDAKAHAHQAyAwA/AiQBIAogjBIQgMAZgZAKQg4AYg5gZQgKgFgOADIgJAQgAT8CgQgHgHAAgLQAAgKAHgIQAIgHALAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgLAAgIgIgAmnCJQhJBDg5hTQgZgkAJgrQAWhsBmAUQALABALAGIgHhfIgaABIA9giIASEtIAZgBIg8AjgAoNAFQgcBnBbAdQAPAFAOgMIAKgJQgCg+gGg8QgDglgmgEQgqAHgLAogAwSCHQgeghAAgvQAAguAeggQAeghAqAAQArAAAeAhQAeAgAAAuQAAAvgeAhQgeAhgrAAQgqAAgeghgAv0gNQgRAbAAAoQAAAoARAdQASAcAYAAQAZAAARgcQASgdAAgoQAAgogSgbQgRgdgZAAQgYAAgSAdgAQvCeIgEADQgIgjgEglQAQAkAnAWQAYAOASgTQAagbghgVQgrgagigiQgRgRAIgXQAYhFBIAaIAKACIASgJIAABHQgOgeghgVQgQgJgRAFQgSAGgDATQAPAuA2AQQA0ARgJA0QgIAqgsAJIgQABQgcAAgbgKgAFoCeIgFADQgIgjgDglQAOAbAfAaQAXAUAYgQQAfgVgcgaQgggcgkgVQgngYATgrQAPgnApAAQAZAEAVAFIATgJIAABHQgOgegigUQgPgKgRAFQgSAGgEATQAPAuA2AQQA1ARgKA0QgIAqgsAGQgNACgMAAQgXAAgWgIgAIgCeIgEADQgIgjgEglQAPAbAfAaQAXAUAXgRQAegUgZgcQgSgTgagJQhJgdAihDQAMgZAZgDQAdgBAeAJIASgJIAABHQgNgegjgUQgOgKgSAFQgTAGgCATQAQAuA1AQQA0ARgJA1QgHApguAFQgNADgNAAQgWAAgWgIgAD1CDQgwA1g1glQgNgJgBgPQgBhBBFgUIAvgRIgKgzIg1gEIgQAyIgegKQAOhNBYAUQA0ALgHA4QgHA+APA3QAAABAAAAQABAAAAABQAAAAABABQABAAAAAAIATgMIAGAHIg7AhgACqBlQgEAPAMAJQAiAcAhglIAAhRQg8ANgPA1gAN+CdQgbgJgNgcQgthaBMhBQAegZAmAFQAoAGAQAjIgFAWIggABIgTgrQhLgRgCBXQgDBYBSACQAUAAAMgTQAOgXAPgDQgTBShBAAQgRAAgVgGgAieCbQgbgHgNgcQgthaBMhBQAegZAmAFQAoAGAPAjIgEAWIggABIgUgrQhLgRgBBXQgCBYBQACQAVAAAMgSQAPgYANgDQgSBRg/AAQgSAAgWgHgALKCZIASgHIAAioIgaAAIBHgiIAMDOIADABQASgCgBAMgAq3CZIATgHIgBioIgZAAIBHgiIALDOIAEACQASgDgBAMgAADCZIASgHIgBkYIgXABIBFgiIALE9IAXADgAs6CZIASgHIgBkYIgYABIBGgiIALE9IAXADgATzhsQgFgfAXgRIAZACQAOAPgCAXQgMBhgLBhQgPhdgRhdgALlh/QgHgHAAgKQAAgJAHgHQAHgHAKAAQAJAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgJAAQgKAAgHgHgAqbh/QgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_1.setTransform(138.3,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,435.4,58.4);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AMsChQgIgIAAgKQAAgLAIgIQAHgIALABQALgBAHAIQAIAIAAALQAAAKgIAIQgHAHgLAAQgLAAgHgHgAK1ChQgHgIAAgKQAAgLAHgIQAIgIALABQAKgBAIAIQAHAIAAALQAAAKgHAIQgIAHgKAAQgLAAgIgHgAI/ChQgIgIAAgKQAAgLAIgIQAHgIALABQALgBAHAIQAIAIgBALQABAKgIAIQgHAHgLAAQgLAAgHgHgAggCCQgYghAAgoQAAgcAOgdQAPgcAXgOQAXgOAbAAQAvAAAeAkQAZAfgBAoQAAAdgNAdQgOAegYAOQgXAPgeAAQgvAAgcgmgAAOghQgMAHgHASQgIASAAAcQAAAvARAhQATAiAeAAQAXgBAOgSQAOgSAAguQAAg4gXgfQgRgXgZAAQgNAAgMAIgAjvCKQgbgegBg0QABgzAdgdQAeggAqAAQAfAAAUARQAUAQAAASQABAIgGAGQgGAFgKAAQgOAAgGgJQgEgFgCgNQgBgNgIgHQgJgIgOAAQgXAAgOASQgTAWAAAlQAAAlATAeQASAdAgAAQAXAAASgPQANgMAMgcIAHAEQgJAqgZAXQgZAWgfAAQgkAAgagegAlkCfQgKgGgFgKQgFgMAAgXIAAiNIgiAAIAAgIQAOgFANgMQANgMALgRQAEgJAKgYIAHAAIAABGIAyAAIAAARIgyAAIAACIQAAAVAHAHQAFAHAJAAQAIAAAHgEQAIgGADgIIAJAAQgHAWgPAMQgPALgQAAQgLAAgKgGgAGqCiIAAgJIAFAAQAOAAAHgEQAFgFADgIQABgEAAgTIAAhWQgBgcgHgNQgHgNgTAAQgbAAgcAdIAABvQABAWACAFQADAHAGADQAGADARAAIAAAJIhpAAIAAgJIAFAAQAQAAAGgIQAFgIABgYIAAhOQgBgmgBgIQgCgIgEgDQgDgDgGAAQgHAAgJADIgDgIIBAgaIAJAAIAAAtQAmgtAhAAQASAAAMAJQANAJAIAUQAEAOAAAbIAABaQABAUADAIQACAFAGAEQAGADAPAAIAAAJgAC2CiIAAgJQAPAAAFgDQAGgDADgHQADgHAAgUIAAhRQAAghgCgLQgCgIgDgCQgEgDgFAAQgHAAgJADIgDgIIBAgaIAKAAIAACpQAAAUACAHQADAGAGAEQAFADAPAAIAAAJgAoRCiIAAgJQAPAAAGgDQAFgDADgHQADgHAAgUIAAhRQAAghgCgLQgBgIgDgCQgEgDgGAAQgGAAgKADIgDgIIBAgaIAKAAIAACpQAAAUADAHQADAGAFAEQAGADAPAAIAAAJgAtWCiIAAgJIALAAQAUAAAIgNQAGgHAAgbIAAjKQAAgdgHgHQgJgLgSAAIgLAAIAAgIICHAAQAmgBAXAGQAjAJASAVQASAVAAAbQAAAYgOATQgPASgcAJQAhAGARAPQAWAWAAAeQAAAYgPAVQgPAWgZAKQgbAKg1AAgArtAJIgQABIAACBQAbAGAbAAQApAAAWgSQAWgUAAgbQAAgTgKgQQgKgSgWgJQgXgKghAAIgZABgAr9iDIAAB5IAUADIAYAAQAiAAARgHQARgHAJgPQAJgQAAgRQAAgcgWgTQgXgUgrAAQgYAAgSAFgADZh+QgIgIABgJQgBgKAIgHQAGgHALAAQAJAAAHAHQAGAHAAAKQAAAJgGAIQgHAGgJAAQgLAAgGgGgAnuh+QgHgIAAgJQAAgKAHgHQAHgHAKAAQAKAAAGAHQAHAHAAAKQAAAJgHAIQgGAGgKAAQgKAAgHgGg");
	this.shape.setTransform(89.3,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AMrChQgHgIAAgLQAAgLAHgIQAIgHALAAQALAAAHAHQAIAIAAALQAAALgIAIQgHAHgLAAQgLAAgIgHgAK1ChQgIgIAAgLQAAgLAIgIQAHgHALAAQALAAAIAHQAHAIAAALQAAALgHAIQgIAHgLAAQgLAAgHgHgAI+ChQgHgIAAgLQAAgLAHgIQAIgHALAAQALAAAHAHQAIAIAAALQAAALgIAIQgHAHgLAAQgLAAgIgHgAgaCHQgeghAAguQAAgvAeggQAdghAqAAQArAAAeAhQAeAgAAAvQAAAugeAhQgeAhgrAAQgqAAgdghgAADgNQgQAcAAAoQAAAoAQAcQASAdAYAAQAZAAARgdQASgcAAgoQAAgogSgcQgRgcgZgBQgYABgSAcgAq1CkQhRgChRAAIAdgMQAWgPgBgdQgEhrAAhsQAAgMgHgLIgngLQBZgTBrAVQBRARgSBNQgJAngnAKQBRARgRBPQgFAZgVAPQgmAaguAAIgDAAgArhAJIgVABIgHCBQBgAgAlhQQAIgTgKgRQgcgwg3AAIgUACgArTiIIgqAFIAAB5QBIATAtgxQAQgSgIgWQgTg4g7AAIgFAAgAlxB/QgShNALhTIgiAAIBIhXIAABGIAyAAIAAARIgyAAIANCqIAXgDIAUgOQgGAVgSALQgSALgNAAQgYAAgIgkgAjRCbQghgLgMggQgqh1BwguQAQgHASAEQAnAFAQAjIgEAXIggABIgUgrQhLgSgCBXQgCBZBRABQAVABAMgTQAPgYANgDQgSBRg/AAQgSAAgWgHgAGqCZIAZgEQALgLACgPQAIhGgWhCQgCgGgFgFIhHAaIAMCUIAXADIhpAAIAXgFIACiqIgZAAIA8giIAKAtQA0hHA5AyQAPANgBASQgCBFAMBIQABAGAEAEIAVAMgAC9CZIASgHIAAioIgaAAIBHgiIAMDOIAUAMgAoKCZIATgHIgBioIgZAAIBHgiIALDOIAVAMgADYh/QgHgHAAgJQAAgKAHgHQAHgHAKAAQAJAAAHAHQAHAHAAAKQAAAJgHAHQgHAHgJAAQgKAAgHgHgAnuh/QgHgHAAgJQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAAJgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_1.setTransform(89.3,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.8,58.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AkNYPIBynMQhggYh/ghIh0HNIkYhGIB0nTIjIgzIluhcICMlBQDPA3gDgEQA1ANAkgaQAZgTAPgiIE7zwQADg3gZgmQgggzhNgTQAEgDjQgwIBLksIGDBhIAAABICzArIBznOIEYBGIhxHFQCDAdBeAYIBwnCIEZBGIhzHOQEoBlCKCMQClCmgkDuQgyFUk1BIQDKBpBECaQBMCthXD5QhrEwkKBSQjeBEmMhLIh0HSgAkfK4IDLAzQCYAiBzAGQFSASA3jfQA6jokziLQhogviZgnQibgkgwgMgAg+jNICoArQB/AdBhADQEbALAyjKQA1jUkAh4QhWgoh/ghIirgog");
	this.shape.setTransform(71,94,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,142,188), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AkbiOIH4AUIA/APIgaC4IhvBCg");
	this.shape.setTransform(28.4,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,56.8,28.5), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("Egu3APoIAA/PMBdvAAAIAAfPgEgujAPUMBdHAAAIAA+nMhdHAAAg");
	this.shape.setTransform(300,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,600,200), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("Ai8DJIiSixIJ1kzIAoBFIjWGqIhBBIg");
	this.shape.setTransform(33.5,28.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,67,56.7), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("Ah/CoIAAjUIDXiMIAoCMIjaDlg");
	this.shape.setTransform(12.8,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,25.7,37.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AAYCqIikh7IAAjYIDHAxIBSDKIAABYg");
	this.shape.setTransform(14.1,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,28.2,33.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AlOCMIEVmiIGlAfIAACRIrXF9g");
	this.shape.setTransform(36.4,27.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,72.7,55.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("Ag9JDIAAyFIB7AAIAASFg");
	this.shape.setTransform(6.2,57.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,12.3,115.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AhtBlIAAgkQi5ADicALQhOAFgpAFQAAgNAkgWQAkgXA9gXQCVg3CygQIAAglIDbAAIAAAlQCyAQCWA3QA8AXAlAXQAiAWABANQgpgFhOgFQicgLi5gDIAAAkg");
	this.shape.setTransform(57,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,113.9,20.2), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 13
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(94.6,26.1,0.889,0.889,0,0,0,106.4,29.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).wait(62).to({alpha:0},5).to({_off:true},1).wait(166));

	// Symbol 14
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(193.5,65.5,0.889,0.889,0,0,0,217.7,29.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).to({alpha:1},10).wait(34).to({alpha:0},5).to({_off:true},1).wait(162));

	// Symbol 15
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-242.1,25.9,0.889,0.889,0,0,0,234,29.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(86).to({_off:false},0).wait(1).to({regX:225.3,regY:33.8,x:-91.2,y:30.1},0).wait(1).to({x:-37.7},0).wait(1).to({x:-1.2},0).wait(1).to({x:26.8},0).wait(1).to({x:49.2},0).wait(1).to({x:67.9},0).wait(1).to({x:83.8},0).wait(1).to({x:97.5},0).wait(1).to({x:109.4},0).wait(1).to({x:119.8},0).wait(1).to({x:129.1},0).wait(1).to({x:137.3},0).wait(1).to({x:144.6},0).wait(1).to({x:151.1},0).wait(1).to({x:156.9},0).wait(1).to({x:162.1},0).wait(1).to({x:166.8},0).wait(1).to({x:171.1},0).wait(1).to({x:174.8},0).wait(1).to({x:178.2},0).wait(1).to({x:181.3},0).wait(1).to({x:184},0).wait(1).to({x:186.4},0).wait(1).to({x:188.6},0).wait(1).to({x:190.5},0).wait(1).to({x:192.2},0).wait(1).to({x:193.7},0).wait(1).to({x:195},0).wait(1).to({x:196.1},0).wait(1).to({x:197.1},0).wait(1).to({x:197.9},0).wait(1).to({x:198.6},0).wait(1).to({x:199.1},0).wait(1).to({x:199.5},0).wait(1).to({x:199.9},0).wait(1).to({x:200.1},0).wait(1).to({x:200.2},0).wait(1).to({regX:234,regY:29.1,x:207.9,y:25.9},0).wait(76).to({alpha:0},8).to({_off:true},1).wait(36));

	// Symbol 16
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-233.4,65.3,0.889,0.889,0,0,0,221.2,29.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).wait(1).to({regX:198.6,regY:29,x:-103.6,y:65.2},0).wait(1).to({x:-53},0).wait(1).to({x:-18.3},0).wait(1).to({x:8.3},0).wait(1).to({x:29.7},0).wait(1).to({x:47.6},0).wait(1).to({x:62.7},0).wait(1).to({x:75.8},0).wait(1).to({x:87.2},0).wait(1).to({x:97.3},0).wait(1).to({x:106.2},0).wait(1).to({x:114.1},0).wait(1).to({x:121.1},0).wait(1).to({x:127.4},0).wait(1).to({x:133.1},0).wait(1).to({x:138.2},0).wait(1).to({x:142.7},0).wait(1).to({x:146.8},0).wait(1).to({x:150.6},0).wait(1).to({x:153.9},0).wait(1).to({x:156.9},0).wait(1).to({x:159.6},0).wait(1).to({x:162},0).wait(1).to({x:164.2},0).wait(1).to({x:166.1},0).wait(1).to({x:167.8},0).wait(1).to({x:169.3},0).wait(1).to({x:170.6},0).wait(1).to({x:171.8},0).wait(1).to({x:172.8},0).wait(1).to({x:173.7},0).wait(1).to({x:174.4},0).wait(1).to({x:175},0).wait(1).to({x:175.5},0).wait(1).to({x:175.9},0).wait(1).to({x:176.2},0).wait(1).to({x:176.4},0).wait(1).to({x:176.5},0).wait(1).to({regX:221.2,regY:29.1,x:196.6,y:65.3},0).wait(73).to({alpha:0},9).to({_off:true},1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,10.9,152,29.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(57,19.4,1,1,0,0,0,57,10.1);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57,57.9,1,1,0,0,0,6.2,57.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,113.9,115.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(57,57.9,1,1,0,0,0,57,57.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:58.1},0).wait(1).to({y:58.3},0).wait(1).to({y:58.5},0).wait(1).to({y:58.8},0).wait(1).to({y:59.2},0).wait(1).to({y:59.6},0).wait(1).to({y:60.1},0).wait(1).to({y:60.6},0).wait(1).to({y:61.3},0).wait(1).to({y:62},0).wait(1).to({y:62.8},0).wait(1).to({y:63.7},0).wait(1).to({y:64.8},0).wait(1).to({y:66},0).wait(1).to({y:65.9},0).wait(1).to({y:65.7},0).wait(1).to({y:65.4},0).wait(1).to({y:65.2},0).wait(1).to({y:64.9},0).wait(1).to({y:64.5},0).wait(1).to({y:64.1},0).wait(1).to({y:63.6},0).wait(1).to({y:63},0).wait(1).to({y:62.4},0).wait(1).to({y:61.7},0).wait(1).to({y:60.9},0).wait(1).to({y:60},0).wait(1).to({y:59},0).wait(1).to({y:57.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.9,115.8);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(113,124.4,1,1,0,0,0,99.1,167.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({regX:99.2,rotation:1.9,x:110.1,y:126.5},7).to({regX:99.1,rotation:0,x:113,y:124.4},4).wait(8));

	// kirkaa
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.4,35.9,0.353,0.353,0,0,0,57.9,101.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:57.8,rotation:-47,y:36},6,cjs.Ease.get(1)).wait(4).to({regX:57,regY:61.9,rotation:33.7,x:28,y:24.1},0).wait(1).to({rotation:47.8,x:30.7,y:26.3},0).wait(1).to({rotation:55.4,x:31.8,y:27.7},0).wait(1).to({rotation:60,x:32.4,y:28.6},0).wait(1).to({rotation:62.8,x:32.8,y:29.2},0).wait(1).to({rotation:64.6,x:33,y:29.6},0).wait(1).to({rotation:65.4,x:33.1,y:29.8},0).wait(1).to({regX:57.9,regY:101.8,rotation:65.7,x:20.4,y:35.9},0).wait(3).to({regX:57,regY:61.9,rotation:64.6,x:33,y:29.6},0).wait(1).to({rotation:60.4,x:32.5,y:28.7},0).wait(1).to({rotation:49.3,x:30.8,y:26.6},0).wait(1).to({rotation:22.1,x:25.4,y:22.8},0).wait(1).to({regX:57.9,regY:101.9,rotation:0,x:20.4,y:35.9},0).wait(6));

	// p1
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.5,45.9,0.2,0.2,115.3,0,0,28.4,14.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(1).to({regY:14.3,rotation:21,x:14.6,y:50.5},0).wait(1).to({rotation:-1.9,x:4.7,y:51.7},0).wait(1).to({rotation:-14,x:-0.5,y:52.3},0).wait(1).to({rotation:-21.1,x:-3.6,y:52.6},0).wait(1).to({rotation:-25.3,x:-5.4,y:52.9},0).wait(1).to({rotation:-27.9,x:-6.5,y:53},0).wait(1).to({rotation:-29.6,x:-7.3,y:53.1},0).wait(1).to({rotation:-30.9,x:-7.8,y:53.2},0).wait(1).to({regX:28.3,regY:14.6,rotation:-32.2,x:-8.4,y:53.3},0).to({alpha:0},2).to({_off:true},1).wait(7));

	// p2
	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.6,45.7,0.2,0.2,178,0,0,34,28.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(1).to({regX:33.5,regY:28.4,rotation:286.2,x:28.5,y:65.3},0).wait(1).to({rotation:312.5,x:21.5,y:70.1},0).wait(1).to({rotation:326.4,x:17.7,y:72.6},0).wait(1).to({rotation:334.5,x:15.6,y:74},0).wait(1).to({rotation:339.3,x:14.2,y:74.8},0).wait(1).to({rotation:342.3,x:13.5,y:75.4},0).wait(1).to({rotation:344.2,x:13,y:75.7},0).wait(1).to({rotation:345.7,x:12.6,y:76},0).wait(1).to({regX:34.1,regY:29,rotation:347.2,x:12.3,y:76.3},0).to({alpha:0},2).to({_off:true},1).wait(7));

	// p3
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(57,43.1,0.2,0.2,73.9,0,0,13.1,18.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).wait(1).to({regX:12.8,regY:18.5,rotation:6,x:36.4,y:6.3},0).wait(1).to({rotation:-10.4,x:31.4,y:-2.5},0).wait(1).to({rotation:-19.1,x:28.8,y:-7.2},0).wait(1).to({rotation:-24.2,x:27.3,y:-9.9},0).wait(1).to({rotation:-27.2,x:26.4,y:-11.5},0).wait(1).to({rotation:-29.1,x:25.8,y:-12.5},0).wait(1).to({rotation:-30.3,x:25.4,y:-13.2},0).wait(1).to({rotation:-31.2,x:25.2,y:-13.8},0).wait(1).to({regX:13.1,regY:19.2,rotation:-32.2,x:25,y:-14.3},0).to({alpha:0},2).to({_off:true},1).wait(7));

	// p4
	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(53.1,41.8,0.2,0.2,68.4,0,0,14.1,16.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).wait(1).to({regY:16.9,rotation:4.1,x:15.8,y:10.4},0).wait(1).to({rotation:-11.6,x:6.8,y:2.8},0).wait(1).to({rotation:-19.8,x:2.1,y:-1.2},0).wait(1).to({rotation:-24.6,x:-0.7,y:-3.6},0).wait(1).to({rotation:-27.5,x:-2.3,y:-5},0).wait(1).to({rotation:-29.3,x:-3.3,y:-5.9},0).wait(1).to({rotation:-30.4,x:-4,y:-6.5},0).wait(1).to({rotation:-31.3,x:-4.5,y:-6.8},0).wait(1).to({regX:14,regY:17.1,rotation:-32.2,x:-5.1,y:-7.4},0).to({alpha:0},2).to({_off:true},1).wait(7));

	// p5
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(57.5,39.2,0.2,0.2,104.3,0,0,36.3,27.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).wait(1).to({regX:36.4,rotation:9,x:9.5,y:30.2},0).wait(1).to({rotation:-14.1,x:-2.1,y:28},0).wait(1).to({rotation:-26.3,x:-8.2,y:26.8},0).wait(1).to({rotation:-33.4,x:-11.8,y:26.2},0).wait(1).to({rotation:-37.7,x:-14,y:25.7},0).wait(1).to({rotation:-40.3,x:-15.3,y:25.5},0).wait(1).to({rotation:-42,x:-16.2,y:25.3},0).wait(1).to({rotation:-43.3,x:-16.8,y:25.2},0).wait(1).to({regX:36.6,regY:28.4,rotation:-44.7,x:-17.6,y:25.1},0).to({alpha:0},2).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42.8,155.9,188);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kirka
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(71.4,70.9,1,1,0,0,0,32.9,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(38.5,1.8,155.9,188), null);


// stage content:
(lib.HF_html4_bw_600x200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fr
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(300,25,1,1,0,0,0,300,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// screen
	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,100,1,1,0,0,0,300,100);
	this.instance_1.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// act
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(598.4,225,0.997,0.997,0,0,0,193.8,188.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// text
	this.instance_3 = new lib.Symbol19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.2,50.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,100,600,226);
// library properties:
lib.properties = {
	width: 600,
	height: 200,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HF_html4_bw_600x200_atlas_.jpg?1515593973201", id:"HF_html4_bw_600x200_atlas_"},
		{src:"images/HF_html4_bw_600x200_atlas_2.jpg?1515593973202", id:"HF_html4_bw_600x200_atlas_2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;