
### `Intro`
![GitHub Actions status | publish](https://github.com/anzerr/color.util/workflows/publish/badge.svg)

Color transformation util between HSL, HSV, HUE and RGB

[logo]: https://raw.githubusercontent.com/anzerr/color.util/master/example.bmp "Example"
![alt text][logo]

#### `Install`
``` bash
npm install --save git+https://github.com/anzerr/color.util.git
npm install --save @anzerr/color.util
```

### `Example`
``` javascript
const {rgb, hsl} = require('color.util');

let a = rgb(255, 0, 0).totoHsv();
console.log(a); // ?
let b = hsl(...a).toRgb();
console.log(b); // [255, 0, 0]
```