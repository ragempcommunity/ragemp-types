/// <reference path="enums/alarms.d.ts" />
/// <reference path="enums/causeOfDeath.d.ts" />
/// <reference path="enums/clothes.d.ts" />
/// <reference path="enums/console.d.ts" />
/// <reference path="enums/controls.d.ts" />
/// <reference path="enums/explosions.d.ts" />
/// <reference path="enums/hud.d.ts" />
/// <reference path="enums/inputGroup.d.ts" />
/// <reference path="enums/markers.d.ts" />
/// <reference path="enums/notification.d.ts" />
/// <reference path="enums/peds.d.ts" />
/// <reference path="enums/pickups.d.ts" />
/// <reference path="enums/props.d.ts" />
/// <reference path="enums/scripts.d.ts" />
/// <reference path="enums/vehicle.d.ts" />
/// <reference path="enums/weapons.d.ts" />
/// <reference path="enums/weather.d.ts" />
/// <reference path="enums/voice.d.ts" />

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
