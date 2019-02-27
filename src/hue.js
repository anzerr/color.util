
class Hue {

	constructor(p, q, t) {
		this.p = p;
		this.q = q;
		this.t = t;
	}

	toRgb() {
		if (this.t < 0) {
			this.t += 1;
		}
		if (this.t > 1) {
			this.t -= 1;
		}
		if (this.t < 1 / 6) {
			return this.p + (this.q - this.p) * 6 * this.t;
		}
		if (this.t < 1 / 2) {
			return this.q;
		}
		if (this.t < 2 / 3) {
			return this.p + (this.q - this.p) * (2 / 3 - this.t) * 6;
		}
		return this.p;
	}

}

module.exports = Hue;
