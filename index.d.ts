
declare class Hsl {
	public constructor(n0: number, n1: number, n2: number);
	public toRgb(): [number, number, number];
}

declare class Hsv {
	public constructor(n0: number, n1: number, n2: number);
	public toRgb(): [number, number, number];
}

declare class Hue {
	public constructor(n0: number, n1: number, n2: number);
	public toRgb(): [number, number, number];
}

declare class Rgb {
	public constructor(n0: number, n1: number, n2: number);
	public toHsl(): [number, number, number];
	public toHsv(): [number, number, number];
}

declare namespace color {

	function hsl(color: number[] | number, n1?: number, n2?: number): Hsl
	function hsv(color: number[] | number, n1?: number, n2?: number): Hsv
	function hue(color: number[] | number, n1?: number, n2?: number): Hue
	function rgb(color: number[] | number, n1?: number, n2?: number): Rgb

}

export as namespace color;
export = color;