/// <reference path="game/system.d.ts" />
/// <reference path="game/app.d.ts" />
/// <reference path="game/audio.d.ts" />
/// <reference path="game/brain.d.ts" />
/// <reference path="game/cam.d.ts" />
/// <reference path="game/clock.d.ts" />
/// <reference path="game/cutscene.d.ts" />
/// <reference path="game/datafile.d.ts" />
/// <reference path="game/decorator.d.ts" />
/// <reference path="game/dlc.d.ts" />
/// <reference path="game/entity.d.ts" />
/// <reference path="game/event.d.ts" />
/// <reference path="game/files.d.ts" />
/// <reference path="game/fire.d.ts" />
/// <reference path="game/graphics.d.ts" />
/// <reference path="game/hud.d.ts" />
/// <reference path="game/interior.d.ts" />
/// <reference path="game/itemset.d.ts" />
/// <reference path="game/loadingscreen.d.ts" />
/// <reference path="game/localization.d.ts" />
/// <reference path="game/misc.d.ts" />
/// <reference path="game/mobile.d.ts" />
/// <reference path="game/network.d.ts" />
/// <reference path="game/object.d.ts" />
/// <reference path="game/pad.d.ts" />
/// <reference path="game/pathfind.d.ts" />
/// <reference path="game/ped.d.ts" />
/// <reference path="game/physics.d.ts" />
/// <reference path="game/player.d.ts" />
/// <reference path="game/recording.d.ts" />
/// <reference path="game/replay.d.ts" />
/// <reference path="game/script.d.ts" />
/// <reference path="game/shapetest.d.ts" />
/// <reference path="game/stats.d.ts" />
/// <reference path="game/streaming.d.ts" />
/// <reference path="game/task.d.ts" />
/// <reference path="game/vehicle.d.ts" />
/// <reference path="game/water.d.ts" />
/// <reference path="game/weapon.d.ts" />
/// <reference path="game/zone.d.ts" />
/// <reference path="game/gxt.d.ts" />

declare interface GameMp {
	system: GameSystemMp;
	app: GameAppMp;
	audio: GameAudioMp;
	brain: GameBrainMp;
	cam: GameCamMp;
	clock: GameClockMp;
	cutscene: GameCutsceneMp;
	datafile: GameDatafileMp;
	decorator: GameDecoratorMp;
	dlc: GameDlcMp;
	entity: GameEntityMp;
	event: GameEventMp;
	files: GameFilesMp;
	fire: GameFireMp;
	graphics: GameGraphicsMp;
	hud: GameHudMp;
	interior: GameInteriorMp;
	itemset: GameItemsetMp;
	loadingscreen: GameLoadingscreenMp;
	localization: GameLocalizationMp;
	misc: GameMiscMp;
	mobile: GameMobileMp;
	network: GameNetworkMp;
	object: GameObjectMp;
	pad: GamePadMp;
	pathfind: GamePathfindMp;
	ped: GamePedMp;
	physics: GamePhysicsMp;
	player: GamePlayerMp;
	recording: GameRecordingMp;
	replay: GameReplayMp;
	script: GameScriptMp;
	shapetest: GameShapetestMp;
	stats: GameStatsMp;
	streaming: GameStreamingMp;
	task: GameTaskMp;
	vehicle: GameVehicleMp;
	water: GameWaterMp;
	weapon: GameWeaponMp;
	zone: GameZoneMp;
	gameplay: GameMiscMp;
	ai: GameTaskMp;
	time: GameClockMp;
	rope: GamePhysicsMp;
	controls: GamePadMp;
	ui: GameHudMp;

	gxt: GameGxtMp;

	/**
	 * Invokes a specified [Native](https://cdn.rage.mp/public/natives/) function.
	 */
	invoke(hash: string, ...args: any[]): any;

	/**
	 * Invokes a specified [Native](https://cdn.rage.mp/public/natives/) that returns a float value.
	 */
	invokeFloat(hash: string, ...args: any[]): number;

	/**
	 * Invokes a specified [Native](https://cdn.rage.mp/public/natives/) that returns a string value.
	 */
	invokeString(hash: string, ...args: any[]): string;

	/**
	 * Invokes a specified [Native](https://cdn.rage.mp/public/natives/) that returns a Vector3 object.
	 */
	invokeVector3(hash: string, ...args: any[]): Vector3;

	/**
	 * This function generates hashes/arrays of hashes (hash is integer) using strings/arrays of strings. Those hashes could be used to set entity model.
	 */
	joaat(text: string): number;
	joaat(textArray: string[]): number[];

	wait(ms: number): void;
	waitAsync(ms: number): Promise<void>;

	/**
	 * Returns a BigInt pointer to be used with native invoker whenever you need to use it in ArrayBuffer
	 */
	allocateString(string: string): number;
}
