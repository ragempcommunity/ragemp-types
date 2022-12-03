interface _0xA4A0065E39C9F25CResult {
	p0: Vector3;
	p1: number;
	fadeInAfterLoad: boolean;
	p3: boolean;
	result: boolean;
}

interface GameMiscUnk {
	_0x4DCDF92BF64236CD(p0: string, p1: string): void;
	_0x31125FD509D9043F(p0: string): void;
	_0xEBD3205A207939ED(p0: string): void;
	_0x97E7E2C04245115B(p0: number): void;
	_0x916CA67D26FD1E37(p0: string): void;
	_0xEB078CA2B5E82ADD(p0: string, p1: string): void;
	_0x703CC7F60CBB2B57(p0: string): void;
	_0x8951EB9C6906D3C8(): void;
	_0xBA4B8D83BDC75551(p0: string): void;
	_0x65D2EBB47E1CEC21(toggle: boolean): void;
	_0x6F2135B6129620C1(toggle: boolean): void;
	_0x8D74E26F54B4E5C3(p0: string): void;
	_0x0CF97F497FE7D048(p0: number): void;
	_0x1178E104409FE58C(p0: number, p1: number): void;
	_0x02DEAAC8F8EA7FE7(p0: string): void;
	_0x7F8F6405F4777AF6(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: boolean
	): number;
	_0x21C235BC64831E5A(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: boolean
	): Vector3;
	_0xF56DFB7B61BE7276(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number
	): number;
	_0xA0AD167E4B39D9A2(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number,
		p12: number,
		p13: number
	): number;
	_0x39455BF4F4F55186(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number,
		p12: number
	): number;
	_0x7EC6F9A478A6A512(): void;
	_0x397BAA01068BAA96(): number;
	_0xB51B9AB9EF81868C(toggle: boolean): void;
	_0xA4A0065E39C9F25C(): _0xA4A0065E39C9F25CResult;
	_0x2107A3773771186D(): boolean;
	_0x06462A961E94B67C(): void;
	_0xD642319C54AADEB6(): number;
	_0x5B1F2E327B6B6FE1(): number;
	_0x72DE52178C291CB5(): number;
	_0x44A0BDC559B35F6E(): boolean;
	_0xEB2104E905C6F2E9(): number;
	_0x2B5E102E4A42F2BF(): number;
	_0xFB80AB299D2EE1BD(toggle: boolean): void;
	_0xFA3FFB0EEBC288A3(p0: boolean): void;
	_0x48F069265A0E4BEC(name: string): number;
	_0x8269816F6CFD40F8(name: string): number;
	_0xFAA457EF263E8763(name: string): number;
	_0x19BFED045C647C49(ped: number): boolean;
	_0xE95B0C7D5BA3B96B(ped: number): boolean;
	_0x54F157E0336A3822(ped: number, p1: string, p2: number): void;
	_0xD9F692D349249528(): void;
	_0xE532EC1A63231B4F(p0: number, p1: number): void;
	_0x1EAE0A6E978894A2(p0: number, p1: boolean): void;
	_0x6FDDF453C0C756EC(): boolean;
	_0xFB00CA71DA386228(): void;
	_0xE3D969D2785FFB5E(): void;
	_0x1BB299305C3E8C13(p0: number, p1: number, p2: number, p3: number): void;
	_0x23227DF0B2115469(): void;
	_0xD10282B6E3751BA0(): number;
	_0x693478ACBD7F18E7(): void;
}

interface GameMiscLegacy {
	getFreeStackSlotsCount(stackSize: number): number;
	setWeatherTypeOverTime(weatherType: string, time: number): void;
	setRainFxIntensity(intensity: number): void;
	setCloudHatTransition(name: string, transitionTime: number): void;
	clearAreaOfEverything(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
	disableAutomaticRespawn(toggle: boolean): void;
	enableMpDlcMaps(toggle: boolean): void;
	setUnkMapFlag(flag: number): void;
	startSaveStruct(size: number, structName: string): number;
	startSaveArray(size: number, arrayName: string): number;
}

interface GetBaseElementMetadataResult {
	p0: number;
	p1: number;
	result: boolean;
}

interface GetWeatherTypeTransitionResult {
	weatherType1: number;
	weatherType2: number;
	percentWeather2: number;
}

interface GetGroundZAndNormalFor3DCoordResult {
	groundZ: number;
	normal: Vector3;
	result: boolean;
}

interface SlerpNearQuaternionResult {
	outX: number;
	outY: number;
	outZ: number;
	outW: number;
}

interface RegisterSaveHouseResult {
	p4: number;
	result: number;
}

interface GetModelDimensionsResult {
	minimum: Vector3;
	maximum: Vector3;
}

interface GetCoordsOfProjectileTypeWithinDistanceResult {
	entity: number;
}

interface ScriptRaceGetPlayerSplitTimeResult {
	p1: number;
	p2: number;
	result: boolean;
}

interface CopyMemoryResult {
	dst: number;
	src: number;
}

interface GameMisc extends GameMiscLegacy {
	getAllocatedStackSize(): number;
	getNumberOfFreeStacksOfThisSize(stackSize: number): number;
	setRandomSeed(seed: number): void;
	setTimeScale(timeScale: number): void;
	setMissionFlag(toggle: boolean): void;
	getMissionFlag(): boolean;
	setRandomEventFlag(toggle: boolean): void;
	getRandomEventFlag(): boolean;
	getGlobalCharBuffer(): string;
	hasResumedFromSuspend(): boolean;
	getBaseElementMetadata(p2: number, p3: boolean): GetBaseElementMetadataResult;
	getPrevWeatherTypeHashName(): number;
	getNextWeatherTypeHashName(): number;
	isPrevWeatherType(weatherType: string): boolean;
	isNextWeatherType(weatherType: string): boolean;
	setWeatherTypePersist(weatherType: string): void;
	setWeatherTypeNowPersist(weatherType: string): void;
	setWeatherTypeNow(weatherType: string): void;
	setWeatherTypeOvertimePersist(weatherType: string, time: number): void;
	setRandomWeatherType(): void;
	clearWeatherTypePersist(): void;
	getWeatherTypeTransition(): GetWeatherTypeTransitionResult;
	setWeatherTypeTransition(weatherType1: number, weatherType2: number, percentWeather2: number): void;
	setOverrideWeather(weatherType: string): void;
	clearOverrideWeather(): void;
	waterOverrideSetShorewaveamplitude(amplitude: number): void;
	waterOverrideSetShorewaveminamplitude(minAmplitude: number): void;
	waterOverrideSetShorewavemaxamplitude(maxAmplitude: number): void;
	waterOverrideSetOceannoiseminamplitude(minAmplitude: number): void;
	waterOverrideSetOceanwaveamplitude(amplitude: number): void;
	waterOverrideSetOceanwaveminamplitude(minAmplitude: number): void;
	waterOverrideSetOceanwavemaxamplitude(maxAmplitude: number): void;
	waterOverrideSetRipplebumpiness(bumpiness: number): void;
	waterOverrideSetRippleminbumpiness(minBumpiness: number): void;
	waterOverrideSetRipplemaxbumpiness(maxBumpiness: number): void;
	waterOverrideSetRippledisturb(disturb: number): void;
	waterOverrideSetStrength(strength: number): void;
	waterOverrideFadeIn(p0: number): void;
	waterOverrideFadeOut(p0: number): void;
	setWind(speed: number): void;
	setWindSpeed(speed: number): void;
	getWindSpeed(): number;
	setWindDirection(direction: number): void;
	getWindDirection(): Vector3;
	setRainLevel(intensity: number): void;
	getRainLevel(): number;
	setSnowLevel(level: number): void;
	getSnowLevel(): number;
	forceLightningFlash(): void;
	preloadCloudHat(name: string): void;
	loadCloudHat(name: string, transitionTime: number): void;
	unloadCloudHat(name: string, p1: number): void;
	clearCloudHat(): void;
	setCloudHatOpacity(opacity: number): void;
	getCloudHatOpacity(): number;
	getGameTimer(): number;
	getFrameTime(): number;
	getBenchmarkTime(): number;
	getFrameCount(): number;
	getRandomFloatInRange(startRange: number, endRange: number): number;
	getRandomIntInRange(startRange: number, endRange: number): number;
	getRandomIntInRange2(startRange: number, endRange: number): number;
	getGroundZFor3dCoord(x: number, y: number, z: number, ignoreWater: boolean, p5: boolean): number;
	getGroundZAndNormalFor3DCoord(x: number, y: number, z: number): GetGroundZAndNormalFor3DCoordResult;
	getGroundZFor3dCoord2(x: number, y: number, z: number, p4: boolean, p5: boolean): number;
	asin(p0: number): number;
	acos(p0: number): number;
	tan(p0: number): number;
	atan(p0: number): number;
	atan2(p0: number, p1: number): number;
	getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;
	getAngleBetween2DVectors(x1: number, y1: number, x2: number, y2: number): number;
	getHeadingFromVector2D(dx: number, dy: number): number;
	setBit(offset: number): number;
	clearBit(offset: number): number;
	getHashKey(string: string): number;
	slerpNearQuaternion(
		t: number,
		x: number,
		y: number,
		z: number,
		w: number,
		x1: number,
		y1: number,
		z1: number,
		w1: number
	): SlerpNearQuaternionResult;
	isAreaOccupied(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: boolean,
		p7: boolean,
		p8: boolean,
		p9: boolean,
		p10: boolean,
		p11: number,
		p12: boolean
	): boolean;
	isPositionOccupied(
		x: number,
		y: number,
		z: number,
		range: number,
		p4: boolean,
		checkVehicles: boolean,
		checkPeds: boolean,
		p7: boolean,
		p8: boolean,
		ignoreEntity: number,
		p10: boolean
	): boolean;
	isPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): boolean;
	clearArea(X: number, Y: number, Z: number, radius: number, p4: boolean, ignoreCopCars: boolean, ignoreObjects: boolean, p7: boolean): void;
	clearAreaLeaveVehicleHealth(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
	clearAreaOfVehicles(
		x: number,
		y: number,
		z: number,
		radius: number,
		p4: boolean,
		p5: boolean,
		p6: boolean,
		p7: boolean,
		p8: boolean,
		p9: boolean
	): void;
	clearAngledAreaOfVehicles(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		p7: boolean,
		p8: boolean,
		p9: boolean,
		p10: boolean,
		p11: boolean,
		p12: number
	): void;
	clearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: number): void;
	clearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: number): void;
	clearAreaOfCops(x: number, y: number, z: number, radius: number, flags: number): void;
	clearAreaOfProjectiles(x: number, y: number, z: number, radius: number, flags: number): void;
	setSaveMenuActive(ignoreVehicle: boolean): void;
	setCreditsActive(toggle: boolean): void;
	haveCreditsReachedEnd(): boolean;
	terminateAllScriptsWithThisName(scriptName: string): void;
	networkSetScriptIsSafeForNetworkGame(): void;
	addHospitalRestart(x: number, y: number, z: number, p3: number, p4: number): number;
	disableHospitalRestart(hospitalIndex: number, toggle: boolean): void;
	addPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: number): number;
	disablePoliceRestart(policeIndex: number, toggle: boolean): void;
	setRestartCustomPosition(x: number, y: number, z: number, heading: number): void;
	clearRestartCustomPosition(): void;
	pauseDeathArrestRestart(toggle: boolean): void;
	ignoreNextRestart(toggle: boolean): void;
	setFadeOutAfterDeath(toggle: boolean): void;
	setFadeOutAfterArrest(toggle: boolean): void;
	setFadeInAfterDeathArrest(toggle: boolean): void;
	setFadeInAfterLoad(toggle: boolean): void;
	registerSaveHouse(p0: number, p1: number, p2: number, p3: number, p5: number, p6: number): RegisterSaveHouseResult;
	setSaveHouse(p0: number, p1: boolean, p2: boolean): void;
	overrideSaveHouse(p0: boolean, p1: number, p2: number, p3: number, p4: number, p5: boolean, p6: number, p7: number): boolean;
	doAutoSave(): void;
	getIsAutoSaveOff(): boolean;
	isAutoSaveInProgress(): boolean;
	beginReplayStats(p0: number, p1: number): void;
	addReplayStatValue(value: number): void;
	endReplayStats(): void;
	getReplayStatMissionType(): number;
	getReplayStatCount(): number;
	getReplayStatAtIndex(index: number): number;
	clearReplayStats(): void;
	isMemoryCardInUse(): boolean;
	shootSingleBulletBetweenCoords(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		damage: number,
		p7: boolean,
		weaponHash: number,
		ownerPed: number,
		isAudible: boolean,
		isInvisible: boolean,
		speed: number
	): void;
	shootSingleBulletBetweenCoordsIgnoreEntity(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		damage: number,
		p7: boolean,
		weaponHash: number,
		ownerPed: number,
		isAudible: boolean,
		isInvisible: boolean,
		speed: number,
		entity: number,
		p14: number
	): void;
	shootSingleBulletBetweenCoordsIgnoreEntityNew(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		damage: number,
		p7: boolean,
		weaponHash: number,
		ownerPed: number,
		isAudible: boolean,
		isInvisible: boolean,
		speed: number,
		entity: number,
		p14: boolean,
		p15: boolean,
		p16: boolean,
		p17: boolean,
		p18: number,
		p19: number,
		p20: number
	): void;
	getModelDimensions(modelHash: number): GetModelDimensionsResult;
	setFakeWantedLevel(fakeWantedLevel: number): void;
	getFakeWantedLevel(): number;
	isBitSet(address: number, offset: number): boolean;
	usingMissionCreator(toggle: boolean): void;
	allowMissionCreatorWarp(toggle: boolean): void;
	setMinigameInProgress(toggle: boolean): void;
	isMinigameInProgress(): boolean;
	isThisAMinigameScript(): boolean;
	isSniperInverted(): boolean;
	shouldUseMetricMeasurements(): boolean;
	getProfileSetting(profileSetting: number): number;
	areStringsEqual(string1: string, string2: string): boolean;
	compareStrings(str1: string, str2: string, matchCase: boolean, maxLength: number): number;
	absi(value: number): number;
	absf(value: number): number;
	isSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
	isProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, ownedByPlayer: boolean): boolean;
	isProjectileTypeInAngledArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		p7: number,
		ownedByPlayer: boolean
	): boolean;
	isProjectileTypeWithinDistance(x: number, y: number, z: number, projectileHash: number, radius: number, ownedByPlayer: boolean): boolean;
	getCoordsOfProjectileTypeInArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		projectileHash: number,
		ownedByPlayer: boolean
	): Vector3;
	getCoordsOfProjectileTypeWithinDistance(
		ped: number,
		weaponHash: number,
		radius: number,
		ownedByPlayer: boolean
	): GetCoordsOfProjectileTypeWithinDistanceResult;
	getProjectileNearPed(ped: number, weaponhash: number, p2: number, p3: number, p4: number, p5: boolean): boolean;
	isBulletInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, ownedByPlayer: boolean): boolean;
	isBulletInArea(x: number, y: number, z: number, radius: number, ownedByPlayer: boolean): boolean;
	isBulletInBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
	hasBulletImpactedInArea(x: number, y: number, z: number, p3: number, p4: boolean, p5: boolean): boolean;
	hasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): boolean;
	isOrbisVersion(): boolean;
	isDurangoVersion(): boolean;
	isXbox360Version(): boolean;
	isPs3Version(): boolean;
	isPcVersion(): boolean;
	isAussieVersion(): boolean;
	isStringNull(string: string): boolean;
	isStringNullOrEmpty(string: string): boolean;
	stringToInt(string: string): number;
	setBitsInRange(rangeStart: number, rangeEnd: number, p3: number): number;
	getBitsInRange(variable: number, rangeStart: number, rangeEnd: number): number;
	addStuntJump(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number,
		x4: number,
		y4: number,
		z4: number,
		camX: number,
		camY: number,
		camZ: number,
		p15: number,
		p16: number,
		p17: number
	): number;
	addStuntJumpAngled(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		radius1: number,
		x3: number,
		y3: number,
		z3: number,
		x4: number,
		y4: number,
		z4: number,
		radius2: number,
		camX: number,
		camY: number,
		camZ: number,
		p17: number,
		p18: number,
		p19: number
	): number;
	deleteStuntJump(p0: number): void;
	enableStuntJumpSet(p0: number): void;
	disableStuntJumpSet(p0: number): void;
	setStuntJumpsCanTrigger(toggle: boolean): void;
	isStuntJumpInProgress(): boolean;
	isStuntJumpMessageShowing(): boolean;
	getNumSuccessfulStuntJumps(): number;
	getTotalSuccessfulStuntJumps(): number;
	cancelStuntJump(): void;
	setGamePaused(toggle: boolean): void;
	setThisScriptCanBePaused(toggle: boolean): void;
	setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;
	hasButtonCombinationJustBeenEntered(hash: number, amount: number): boolean;
	hasCheatStringJustBeenEntered(hash: number): boolean;
	setInstancePriorityMode(p0: number): void;
	setInstancePriorityHint(flag: number): void;
	isFrontendFading(): boolean;
	populateNow(): void;
	getIndexOfCurrentLevel(): number;
	setGravityLevel(level: number): void;
	startSaveData(p1: number, p2: boolean): number;
	stopSaveData(): void;
	getSizeOfSaveData(p0: boolean): number;
	registerIntToSave(name: string): number;
	registerInt64ToSave(name: string): number;
	registerEnumToSave(name: string): number;
	registerFloatToSave(name: string): number;
	registerBoolToSave(name: string): number;
	registerTextLabelToSave(name: string): number;
	registerTextLabelToSave2(name: string): number;
	startSaveStructWithSize(size: number, structName: string): number;
	stopSaveStruct(): void;
	startSaveArrayWithSize(size: number, arrayName: string): number;
	stopSaveArray(): void;
	copyMemory(size: number): CopyMemoryResult;
	enableDispatchService(dispatchService: number, toggle: boolean): void;
	blockDispatchServiceResourceCreation(dispatchService: number, toggle: boolean): void;
	getNumDispatchedUnitsForPlayer(dispatchService: number): number;
	createIncident(dispatchService: number, x: number, y: number, z: number, numUnits: number, radius: number, p7: number, p8: number): number;
	createIncidentWithEntity(dispatchService: number, ped: number, numUnits: number, radius: number, p5: number, p6: number): number;
	deleteIncident(incidentId: number): void;
	isIncidentValid(incidentId: number): boolean;
	setIncidentRequestedUnits(incidentId: number, dispatchService: number, numUnits: number): void;
	setIncidentUnk(incidentId: number, p1: number): void;
	findSpawnPointInDirection(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, distance: number): Vector3;
	addPopMultiplierArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p6: number,
		p7: number,
		p8: boolean,
		p9: boolean
	): number;
	doesPopMultiplierAreaExist(id: number): boolean;
	removePopMultiplierArea(id: number, p1: boolean): void;
	isPopMultiplierAreaUnk(id: number): boolean;
	addPopMultiplierSphere(
		x: number,
		y: number,
		z: number,
		radius: number,
		pedMultiplier: number,
		vehicleMultiplier: number,
		p6: boolean,
		p7: boolean
	): number;
	doesPopMultiplierSphereExist(id: number): boolean;
	removePopMultiplierSphere(id: number, p1: boolean): void;
	enableTennisMode(ped: number, toggle: boolean, p2: boolean): void;
	isTennisMode(ped: number): boolean;
	playTennisSwingAnim(ped: number, animDict: string, animName: string, p3: number, p4: number, p5: boolean): void;
	getTennisSwingAnimComplete(ped: number): boolean;
	playTennisDiveAnim(ped: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;
	resetDispatchSpawnLocation(): void;
	setDispatchSpawnLocation(x: number, y: number, z: number): void;
	resetDispatchIdealSpawnDistance(): void;
	setDispatchIdealSpawnDistance(p0: number): void;
	resetDispatchTimeBetweenSpawnAttempts(p0: number): void;
	setDispatchTimeBetweenSpawnAttempts(p0: number, p1: number): void;
	setDispatchTimeBetweenSpawnAttemptsMultiplier(p0: number, p1: number): void;
	addDispatchSpawnBlockingAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): number;
	addDispatchSpawnBlockingArea(x1: number, y1: number, x2: number, y2: number): number;
	removeDispatchSpawnBlockingArea(p0: number): void;
	resetDispatchSpawnBlockingAreas(): void;
	addTacticalAnalysisPoint(x: number, y: number, z: number): void;
	clearTacticalAnalysisPoints(): void;
	setRiotModeEnabled(toggle: boolean): void;
	displayOnscreenKeyboardWithLongerInitialString(
		p0: number,
		windowTitle: string,
		defaultText: string,
		defaultConcat1: string,
		defaultConcat2: string,
		defaultConcat3: string,
		defaultConcat4: string,
		defaultConcat5: string,
		defaultConcat6: string,
		defaultConcat7: string,
		maxInputLength: number
	): number;
	displayOnscreenKeyboard(
		p0: number,
		windowTitle: string,
		p2: string,
		defaultText: string,
		defaultConcat1: string,
		defaultConcat2: string,
		defaultConcat3: string,
		maxInputLength: number
	): void;
	updateOnscreenKeyboard(): number;
	getOnscreenKeyboardResult(): string;
	cancelOnscreenKeyboard(): void;
	nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(p0: number): void;
	removeStealthKill(hash: number, p1: boolean): void;
	setExplosiveAmmoThisFrame(player: number): void;
	setFireAmmoThisFrame(player: number): void;
	setExplosiveMeleeThisFrame(player: number): void;
	setSuperJumpThisFrame(player: number): void;
	setBeastModeActive(player: number): void;
	setForcePlayerToJump(player: number): void;
	areProfileSettingsValid(): boolean;
	forceGameStatePlaying(): void;
	scriptRaceInit(p0: number, p1: number, p2: number, p3: number): void;
	scriptRaceShutdown(): void;
	scriptRaceGetPlayerSplitTime(player: number): ScriptRaceGetPlayerSplitTimeResult;
	startBenchmarkRecording(): void;
	stopBenchmarkRecording(): void;
	resetBenchmarkRecording(): void;
	saveBenchmarkRecording(): void;
	uiIsSingleplayerPauseMenuActive(): boolean;
	landingMenuIsActive(): boolean;
	isCommandLineBenchmarkValueSet(): boolean;
	getBenchmarkIterationsFromCommandLine(): number;
	getBenchmarkPassFromCommandLine(): number;
	restartGame(): void;
	forceSocialClubUpdate(): void;
	hasAsyncInstallFinished(): boolean;
	cleanupAsyncInstall(): void;
	isInPowerSavingMode(): boolean;
	getPowerSavingModeDuration(): number;
	setPlayerIsInAnimalForm(toggle: boolean): void;
	getIsPlayerInAnimalForm(): boolean;
	setPlayerRockstarEditorDisabled(toggle: boolean): void;

	/**
	 * Overrides snow value set by server setter
	 * - ⚠️ mp.game1.gameplay.enableSnow is a temporary workaround, "game" setter to be fixed later
	 */
	enableSnow: boolean;

	unk: GameMiscUnk;
}

interface GameMiscMp extends GameMisc {}
