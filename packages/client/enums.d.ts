/// <reference path="enums/markers.d.ts" />
/// <reference path="enums/weapons.d.ts" />
/// <reference path="enums/peds.d.ts" />
/// <reference path="enums/console.d.ts" />

declare namespace RageEnums {
	const enum EntityType {
		BLIP = 'blip',
		CHECKPOINT = 'checkpoint',
		COLSHAPE = 'colshape',
		DUMMY = 'dummy',
		MARKER = 'marker',
		OBJECT = 'object',
		PICKUP = 'pickup',
		PLAYER = 'player',
		VEHICLE = 'vehicle',
		PED = 'ped',
		TEXT_LABEL = 'textlabel'
	}

	const enum ScreenshotType {
		JPG = 0,
		PNG = 1,
		BMP = 2
	}
}
