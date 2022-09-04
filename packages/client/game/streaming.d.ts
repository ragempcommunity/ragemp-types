declare interface GameStreamingLegacy {
	requestModel2(model: number): void;
	setStreaming(toggle: boolean): void;
	setGamePausesForStreaming(toggle: boolean): void;
	removeNamedPtfxAsset(fxName: string): void;
	setFocusArea(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;
	setUnkCameraSettings(x: number, y: number, z: number, rad: number, p4: number, p5: number): number;
	newLoadSceneStartSafe(x: number, y: number, z: number, radius: number, p4: number): boolean;
	setPlayerSwitchLocation(
		cameraCoordX: number,
		cameraCoordY: number,
		cameraCoordZ: number,
		camRotationX: number,
		camRotationY: number,
		camRotationZ: number,
		camFov: number,
		camFarClip: number,
		rotationOrder: number
	): void;
}

declare interface GameStreamingUnk {
	_0x0811381EF5062FEC(p0: number): void;
	_0x4E52E752C76E7E7A(p0: number): void;
	_0x1F3F018BC3AFA77C(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;
	_0x0AD9710CEE2F590F(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
	_0x1EE7D8DF4425F053(p0: number): void;
	_0x7D41E9D2D17C5B2D(p0: number): number;
	_0x07C313F94746702C(p0: number): number;
	_0xBC9823AB80A3DCAC(): number;
	_0x71E7B2E657449AAD(): number;
	_0x5F2013F8BC24EE69(p0: number): void;
	_0x933BBEEB8C61B5F4(): boolean;
	_0x5B48A06DD0E792A5(): number;
	_0x1E9057A74FD73E23(): void;
	_0xBED8CA5FF5E04113(p0: number, p1: number, p2: number, p3: number): void;
	_0x472397322E92A856(): void;
	_0x40AEFD1A244741F2(p0: boolean): void;
	_0x03F1A106BDA7DD3E(): void;
	_0x95A7DABDDBB78AE7(iplName1: string, iplName2: string): void;
	_0x63EB2B972A218CAC(): void;
	_0xFB199266061F820A(): boolean;
	_0xF4A0DADB70F57FA6(): void;
	_0x5068F488DDB54DD8(): number;
	_0xEF39EE20C537E98C(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	_0xBEB2D9A1D9A8F55A(p0: number, p1: number, p2: number, p3: number): void;
	_0x20C6C7E4EB082A7F(p0: boolean): void;
	_0xF8155A7F03DDFC8E(p0: number): void;
}

declare interface GameStreaming extends GameStreamingLegacy {
	forceStreamingUpdate(): void;
	loadAllObjectsNow(): void;
	loadScene(x: number, y: number, z: number): void;
	networkUpdateLoadScene(): boolean;
	isNetworkLoadingScene(): boolean;
	setInteriorActive(interiorID: number, toggle: boolean): void;
	requestModel(model: number): void;
	requestMenuPedModel(model: number): void;
	hasModelLoaded(model: number): boolean;
	requestModelsInRoom(interior: number, roomName: string): void;
	setModelAsNoLongerNeeded(model: number): void;
	isModelInCdimage(model: number): boolean;
	isModelValid(model: number): boolean;
	isModelAPed(model: number): boolean;
	isModelAVehicle(model: number): boolean;
	requestCollisionAtCoord(x: number, y: number, z: number): void;
	requestCollisionForModel(model: number): void;
	hasCollisionForModelLoaded(model: number): boolean;
	requestAdditionalCollisionAtCoord(x: number, y: number, z: number): void;
	doesAnimDictExist(animDict: string): boolean;
	requestAnimDict(animDict: string): void;
	hasAnimDictLoaded(animDict: string): boolean;
	removeAnimDict(animDict: string): void;
	requestAnimSet(animSet: string): void;
	hasAnimSetLoaded(animSet: string): boolean;
	removeAnimSet(animSet: string): void;
	requestClipSet(clipSet: string): void;
	hasClipSetLoaded(clipSet: string): boolean;
	removeClipSet(clipSet: string): void;
	requestIpl(iplName: string): void;
	removeIpl(iplName: string): void;
	isIplActive(iplName: string): boolean;
	set(toggle: boolean): void;
	loadGlobalWaterType(waterType: number): void;
	getGlobalWaterType(): number;
	setGamePausesFor(toggle: boolean): void;
	setReducePedModelBudget(toggle: boolean): void;
	setReduceVehicleModelBudget(toggle: boolean): void;
	setDitchPoliceModels(toggle: boolean): void;
	getNumberOfRequests(): number;
	requestPtfxAsset(): void;
	hasPtfxAssetLoaded(): boolean;
	removePtfxAsset(): void;
	requestNamedPtfxAsset(fxName: string): void;
	hasNamedPtfxAssetLoaded(fxName: string): boolean;
	removeNamedPtfxAsset(fxName: string): void;
	setVehiclePopulationBudget(p0: number): void;
	setPedPopulationBudget(p0: number): void;
	clearFocus(): void;
	setFocusPosAndVel(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;
	setFocusEntity(entity: number): void;
	isEntityFocus(entity: number): boolean;
	setMapdatacullboxEnabled(name: string, toggle: boolean): void;
	formatFocusHeading(x: number, y: number, z: number, rad: number, p4: number, p5: number): number;
	newLoadSceneStart(
		posX: number,
		posY: number,
		posZ: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		radius: number,
		p7: number
	): boolean;
	newLoadSceneStartSphere(x: number, y: number, z: number, radius: number, p4: number): boolean;
	newLoadSceneStop(): void;
	isNewLoadSceneActive(): boolean;
	isNewLoadSceneLoaded(): boolean;
	startPlayerSwitch(from: number, to: number, flags: number, switchType: number): void;
	stopPlayerSwitch(): void;
	isPlayerSwitchInProgress(): boolean;
	getPlayerSwitchType(): number;
	getIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
	getPlayerSwitchState(): number;
	getPlayerShortSwitchState(): number;
	getPlayerSwitchJumpCutIndex(): number;
	setPlayerSwitchOutro(
		cameraCoordX: number,
		cameraCoordY: number,
		cameraCoordZ: number,
		camRotationX: number,
		camRotationY: number,
		camRotationZ: number,
		camFov: number,
		camFarClip: number,
		rotationOrder: number
	): void;
	setPlayerSwitchEstablishingShot(name: string): void;
	allowPlayerSwitchPan(): void;
	allowPlayerSwitchOutro(): void;
	allowPlayerSwitchAscent(): void;
	allowPlayerSwitchDescent(): void;
	isSwitchReadyForDescent(): boolean;
	enableSwitchPauseBeforeDescent(): void;
	disableSwitchOutroFx(): void;
	switchOutPlayer(ped: number, flags: number, switchType: number): void;
	switchInPlayer(ped: number): void;
	getPlayerSwitchInterpOutDuration(): number;
	isSwitchSkippingDescent(): boolean;
	getLodscale(): number;
	overrideLodscaleThisFrame(scaling: number): void;
	prefetchSrl(srl: string): void;
	isSrlLoaded(): boolean;
	beginSrl(): void;
	endSrl(): void;
	setSrlTime(p0: number): void;
	setHdArea(x: number, y: number, z: number, radius: number): void;
	clearHdArea(): void;
	initCreatorBudget(): void;
	shutdownCreatorBudget(): void;
	addModelToCreatorBudget(modelHash: number): boolean;
	removeModelFromCreatorBudget(modelHash: number): void;
	getUsedCreatorModelMemoryPercentage(): number;
	setIslandHopperEnabled(name: string, toggle: boolean): void;

	unk: GameStreamingUnk;
}

declare interface GameStreamingMp extends GameStreaming {}
