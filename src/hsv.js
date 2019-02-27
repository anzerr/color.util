
class Hsv {

	constructor(h, s, v) {
		this.h = h;
		this.s = s;
		this.v = v;
	}

	toRgb() {
		let color = [0, 0, 0];

		let i = Math.floor(this.h * 6);
		let f = this.h * 6 - i;
		let p = this.v * (1 - this.s);
		let q = this.v * (1 - f * this.s);
		let t = this.v * (1 - (1 - f) * this.s);
		let cc = (i % 6);

		if (cc === 0) {
			color = [this.v, t, p];
		}
		if (cc === 1) {
			color = [q, this.v, p];
		}
		if (cc === 2) {
			color = [p, this.v, t];
		}
		if (cc === 3) {
			color = [p, q, this.v];
		}
		if (cc === 4) {
			color = [t, p, this.v];
		}
		if (cc === 5) {
			color = [this.v, p, q];
		}

		return [Math.floor(color[0] * 256), Math.floor(color[1] * 256), Math.floor(color[2] * 256)];
	}

}

module.exports = Hsv;
