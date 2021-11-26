declare interface GameCutsceneLegacy {
	requestCutscene(cutsceneName: string, flags: number): void;
	requestCutscene2(cutsceneName: string, playbackFlags: number, flags: number): void;
	hasThisCutsceneLoaded(cutsceneName: string): boolean;
	startCutscene(flags: number): void;
	startCutsceneAtCoords(x: number, y: number, z: number, flags: number): void;
	stopCutscene(p0: boolean): void;
	setCutsceneOrigin(x: number, y: number, z: number, p3: number, p4: number): void;
	getEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: number): number;
	registerEntityForCutscene(cutscenePed: number, cutsceneEntName: string, p2: number, modelHash: number, p4: number): void;
	setCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	setCutsceneFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	setCutscenePedComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;
	doesCutsceneEntityExist(cutsceneEntName: string, modelHash: number): boolean;
	setCutscenePedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;
}

declare interface GameCutsceneUnk {
	_0x8D9DF6ECA8768583(threadId: number): void;
	_0x011883F41211432A(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: number): void;
	_0x971D7B15BCDBEF99(): number;
	_0x583DF8E3D4AFBD98(): number;
	_0x4CEBC1ED31E8925E(cutsceneName: string): boolean;
	_0x4FCD976DA686580C(p0: number): number;
	_0x7F96F23FA9B73327(modelHash: number): void;
	_0xC61B86C9F61EB404(toggle: boolean): void;
	_0x20746F7B1032A3C7(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	_0x06EE9048FD080382(p0: boolean): void;
	_0xA0FE76168A189DDB(): number;
	_0x2F137B508DE238F2(p0: boolean): void;
	_0xE36A98D8AB3D3C66(p0: boolean): void;
	_0x5EDEF0CF8C1DAB3C(): number;
}

declare interface GameCutscene extends GameCutsceneLegacy {
	request(cutsceneName: string, flags: number): void;
	requestWithPlaybackList(cutsceneName: string, playbackFlags: number, flags: number): void;
	remove(): void;
	hasLoaded(): boolean;
	hasThisLoaded(cutsceneName: string): boolean;
	canRequestAssetsForEntity(): boolean;
	isPlaybackFlagSet(flag: number): boolean;
	setEntityStreamingFlags(cutsceneEntName: string, p1: number, p2: number): void;
	requestCutFile(cutsceneName: string): void;
	hasCutFileLoaded(cutsceneName: string): boolean;
	removeCutFile(cutsceneName: string): void;
	getCutFileNumSections(cutsceneName: string): number;
	start(flags: number): void;
	startAtCoords(x: number, y: number, z: number, flags: number): void;
	stop(p0: boolean): void;
	stopImmediately(): void;
	setOrigin(x: number, y: number, z: number, p3: number, p4: number): void;
	getTime(): number;
	getTotalDuration(): number;
	wasSkipped(): boolean;
	hasFinished(): boolean;
	isActive(): boolean;
	isPlaying(): boolean;
	getSectionPlaying(): number;
	getEntityIndexOfEntity(cutsceneEntName: string, modelHash: number): number;
	registerEntityFor(cutscenePed: number, cutsceneEntName: string, p2: number, modelHash: number, p4: number): void;
	getEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: number): number;
	setTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	canSetEnterStateForRegisteredEntity(cutsceneEntName: string, modelHash: number): boolean;
	canSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: number): boolean;
	canSetExitStateForCamera(p0: boolean): boolean;
	setFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	setCanBeSkipped(p0: boolean): void;
	registerSynchronisedScriptSpeech(): void;
	setPedComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;
	setPedComponentVariationFromPed(cutsceneEntName: string, ped: number, modelHash: number): void;
	doesEntityExist(cutsceneEntName: string, modelHash: number): boolean;
	setPedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;
	hasCutThisFrame(): boolean;

	unk: GameCutsceneUnk;
}

declare interface GameCutsceneMp extends GameCutscene {}
