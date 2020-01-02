'use strict';

import * as WEColor from 'WEColor';

let RainbowSpeed = 0.25;
let RainbowSaturation = 1;
let RainbowBrightness = 1;
let RainbowEffect = false;

export function update(Value) {
	if (RainbowEffect) {
		Value = WEColor.hsv2rgb({
			x: Date.now() / 2000 * RainbowSpeed % 1,
			y: RainbowSaturation,
			z: RainbowBrightness
		});
	}
	return Value;
}

export function applyUserProperties(userProperties) {
	RainbowEffect = userProperties.rainbow;
}
