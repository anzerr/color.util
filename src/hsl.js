
const Hue = require('./hue.js');

class Hsl {

	constructor(h, s, l) {
		this.h = h;
		this.s = s;
		this.l = l;
	}

	toRgb() {
		let color = [0, 0, 0];

		if (this.s !== 0) {
			let q = this.l < 0.5 ? this.l * (1 + this.s) : this.l + this.s - this.l * this.s;
			let p = 2 * this.l - q;
			color = [
				(new Hue(p, q, this.h + 1 / 3)).toRgb(),
				(new Hue(p, q, this.h)).toRgb(),
				(new Hue(p, q, this.h - 1 / 3)).toRgb()
			];
		}
		return [Math.floor(color[0] * 256), Math.floor(color[1] * 256), Math.floor(color[2] * 256)];
	}

}

module.exports = Hsl;
