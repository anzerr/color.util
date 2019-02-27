
class Rgb {

	constructor(r, g, b) {
		this.r = r;
		this.g = g;
		this.b = b;
	}

	toHsl() {
		let color = [this.r / 255, this.g / 255, this.b / 255];

		let max = Math.max(...color), min = Math.min(...color);
		let h = 0, s = 0, l = (max + min) / 2;

		if (max === min) {
			h = s = 0; // achromatic
		} else {
			let d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

			if (max === color[0]) {
				h = (color[1] - color[2]) / d + (color[1] < color[2] ? 6 : 0);
			}
			if (max === color[1]) {
				h = (color[2] - color[0]) / d + 2;
			}
			if (max === color[2]) {
				h = (color[0] - color[1]) / d + 4;
			}

			h /= 6;
		}

		return [h, s, l];
	}

	toHsv() {
		let color = [this.r / 255, this.g / 255, this.b / 255];

		let max = Math.max(...color), min = Math.min(...color);
		let h = 0, s = 0, v = max;

		let d = max - min;
		s = max === 0 ? 0 : d / max;

		if (max === min) {
			h = 0; // achromatic
		} else {
			if (max === color[0]) {
				h = (color[1] - color[2]) / d + (color[1] < color[2] ? 6 : 0);
			}
			if (max === color[1]) {
				h = (color[2] - color[0]) / d + 2;
			}
			if (max === color[2]) {
				h = (color[0] - color[1]) / d + 4;
			}

			h /= 6;
		}

		return [h, s, v];
	}

}

module.exports = Rgb;
