
const Hsl = require('./src/hsl.js'),
	Hsv = require('./src/hsv.js'),
	Hue = require('./src/hue.js'),
	Rgb = require('./src/rgb.js');

module.exports = {
	hsl: (...arg) => {
		return new Hsl(...(Array.isArray(arg[0]) ? arg[0] : arg));
	},
	hsv: (...arg) => {
		return new Hsv(...(Array.isArray(arg[0]) ? arg[0] : arg));
	},
	hue: (...arg) => {
		return new Hue(...(Array.isArray(arg[0]) ? arg[0] : arg));
	},
	rgb: (...arg) => {
		return new Rgb(...(Array.isArray(arg[0]) ? arg[0] : arg));
	}
};
