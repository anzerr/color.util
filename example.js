
const Color = require('./index.js'),
	Map = require('image.util'),
	bmp = require('bmp.util'),
	fs = require('fs.promisify');

let scale = 2;
let row = 20;
const map = new Map({
	width: 360 * scale,
	height: (row * 3) * 5,
	mask: {r: 3, g: 2, b: 1, a: 0}
});

const fill = (x, y, color, width, height) => {
	map.fill(x, y, {r: color[0], g: color[1], b: color[2]}, width, height);
};

const cap = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const getColor = (key, ...arg) => {
	let v = Color[key](...arg).toRgb();
	Color[key](Color.rgb(v)['to' + cap(key)]()).toRgb();
	return [v, Color[key](Color.rgb(v)['to' + cap(key)]()).toRgb()];
};

for (let i = 0; i < 360 * scale; i++) {
	for (let x = 0; x < row; x++) {
		for (let y = 0; y < row; y++) {
			let n = (i % 360) / 360, s = (row * 3);
			let hsv = getColor('hsv', n, y / row, x / row);
			let hsl = getColor('hsl', n, y / row, x / row);

			fill(x + y, i, hsv[0], 10, 1);
			fill(x + y + s, i, hsv[1], 10, 1);
			fill(x + y + (s * 2), i, hsl[0], 10, 1);
			fill(x + y + (s * 3), i, hsl[1], 10, 1);
		}
	}
}

fs.writeFile('example.bmp', bmp.encode({
	width: map.width,
	height: map.height,
	endian: true,
	data: map.toBuffer()
}).data);
