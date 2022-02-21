declare interface GetRandomVehicleModelInMemoryResult {
	modelHash: number;
	successIndicator: number;
}

declare interface GetVehicleCustomPrimaryColourResult {
	r: number;
	g: number;
	b: number;
}

declare interface GetVehicleCustomSecondaryColourResult {
	r: number;
	g: number;
	b: number;
}

declare interface GetVehicleColoursResult {
	colorPrimary: number;
	colorSecondary: number;
}

declare interface GetVehicleLightsStateResult {
	lightsOn: boolean;
	highbeamsOn: boolean;
	result: boolean;
}

declare interface GetVehicleExtraColoursResult {
	pearlescentColor: number;
	wheelColor: number;
}

declare interface GetVehicleModColor1Result {
	paintType: number;
	color: number;
	pearlescentColor: number;
}

declare interface GetVehicleModColor2Result {
	paintType: number;
	color: number;
}

declare interface GetVehicleTyreSmokeColorResult {
	r: number;
	g: number;
	b: number;
}

declare interface GetVehicleColorResult {
	r: number;
	g: number;
	b: number;
}

declare interface GetVehicleNeonLightsColourResult {
	r: number;
	g: number;
	b: number;
}

declare interface GetVehicleSuspensionBoundsResult {
	out1: Vector3;
	out2: Vector3;
}

declare interface GetAllVehiclesResult {
	vehsStruct: number;
	result: number;
}

declare interface _0xA4822F1CF23F4810Result {
	outVec: Vector3;
	outVec1: Vector3;
	result: boolean;
}

declare interface GameVehicleLegacy {
	createVehicle(
		modelHash: number,
		x: number,
		y: number,
		z: number,
		heading: number,
		isNetwork: boolean,
		bScriptHostVeh: boolean,
		p7: boolean
	): number;
	doesScriptVehicleGeneratorExist(vehicleGenerator: number): boolean;
	createScriptVehicleGenerator(
		x: number,
		y: number,
		z: number,
		heading: number,
		p4: number,
		p5: number,
		modelHash: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		p11: boolean,
		p12: boolean,
		p13: boolean,
		p14: boolean,
		p15: boolean,
		p16: number
	): number;
	deleteScriptVehicleGenerator(vehicleGenerator: number): void;
	setScriptVehicleGenerator(vehicleGenerator: number, enabled: boolean): void;
	setAllVehicleGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): void;
	setAllVehicleGeneratorsActive(): void;
	setAllLowPriorityVehicleGeneratorsActive(active: boolean): void;
	getVehicleModelMaxNumberOfPassengers(modelHash: number): number;
	setVehicleDensityMultiplierThisFrame(multiplier: number): void;
	setRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;
	setParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;
	setFarDrawVehicles(toggle: boolean): void;
	setNumberOfParkedVehicles(value: number): void;
	isVehicleInGarageArea(garageName: string, vehicle: number): boolean;
	removeVehicleStuckCheck(vehicle: number): void;
	getVehicleRecordingId(recording: number, script: string): number;
	requestVehicleRecording(recording: number, script: string): void;
	hasVehicleRecordingBeenLoaded(recording: number, script: string): boolean;
	removeVehicleRecording(recording: number, script: string): void;
	getPositionOfVehicleRecordingAtTime(recording: number, time: number, script: string): Vector3;
	getRotationOfVehicleRecordingAtTime(recording: number, time: number, script: string): Vector3;
	getTotalDurationOfVehicleRecordingId(id: number): number;
	getTotalDurationOfVehicleRecording(recording: number, script: string): number;
	startPlaybackRecordedVehicle(vehicle: number, recording: number, script: string, p3: boolean): void;
	startPlaybackRecordedVehicleWithFlags(
		vehicle: number,
		recording: number,
		script: string,
		flags: number,
		time: number,
		drivingStyle: number
	): void;
	stopPlaybackRecordedVehicle(vehicle: number): void;
	pausePlaybackRecordedVehicle(vehicle: number): void;
	unpausePlaybackRecordedVehicle(vehicle: number): void;
	isPlaybackGoingOnForVehicle(vehicle: number): boolean;
	isPlaybackUsingAiGoingOnForVehicle(vehicle: number): boolean;
	getCurrentPlaybackForVehicle(vehicle: number): number;
	skipToEndAndStopPlaybackRecordedVehicle(vehicle: number): void;
	startPlaybackRecordedVehicleUsingAi(vehicle: number, recording: number, script: string, speed: number, drivingStyle: number): void;
	skipTimeInPlaybackRecordedVehicle(vehicle: number, time: number): void;
	addVehicleStuckCheckWithWarp(p0: number, p1: number, p2: number, p3: boolean, p4: boolean, p5: boolean, p6: number): void;
	setVehicleModelIsSuppressed(model: number, suppressed: boolean): void;
	getRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: number, flags: number): number;
	getRandomVehicleFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
	getRandomVehicleBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
	getClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: number, flags: number): number;
	isThisModelAnEmergencyBoat(model: number): boolean;
	getRandomVehicleModelInMemory(p0: boolean): GetRandomVehicleModelInMemoryResult;
	setVehicleDamage(vehicle: number, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, focusOnModel: boolean): void;
	getDisplayNameFromVehicleModel(modelHash: number): string;
	isAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): boolean;
	requestVehicleAsset(vehicleHash: number, vehicleAsset: number): void;
	hasVehicleAssetLoaded(vehicleAsset: number): boolean;
	removeVehicleAsset(vehicleAsset: number): void;
	getVehicleModelMaxSpeed(modelHash: number): number;
	getVehicleModelMaxBraking(modelHash: number): number;
	getVehicleModelMaxTraction(modelHash: number): number;
	getVehicleModelAcceleration(modelHash: number): number;
	getVehicleClassMaxTraction(vehicleClass: number): number;
	getVehicleClassMaxAgility(vehicleClass: number): number;
	getVehicleClassMaxAcceleration(vehicleClass: number): number;
	getVehicleClassMaxBraking(vehicleClass: number): number;
	setVehicleMod(vehicle: number, modType: number, modIndex: number, customTires: boolean): void;
	getVehicleMod(vehicle: number, modType: number): number;
	preloadVehicleMod(p0: number, modType: number, p2: number): void;
	setVehicleShootAtTarget(driver: number, entity: number, xTarget: number, yTarget: number, zTarget: number): void;
	setCargobobHookPosition(cargobob: number, length1: number, length2: number, p3: boolean): void;
	disableVehicleWeapon(disabled: boolean, weaponHash: number, vehicle: number, owner: number): void;
	getVehicleClass(vehicle: number): number;
	getVehicleClassFromName(modelHash: number): number;
	doesVehicleExistWithDecorator(decorator: string): boolean;
	displayDistantVehicles(toggle: boolean): void;
}

declare interface GameVehicleUnk {
	_0x7D6F9A3EF26136A0(vehicle: number, toggle: boolean, p2: boolean): void;
	_0x6EAAEFC76ACC311F(p0: number): number;
	_0x407DC5E97DB1A4D3(p0: number, p1: number): void;
	_0x9A75585FB2E54FAD(x: number, y: number, z: number, radius: number): void;
	_0x0A436B8643716D14(): void;
	_0x76D26A22750E849E(vehicle: number): void;
	_0xAB31EF4DE6800CE9(p0: number, p1: number): void;
	_0x1B212B26DD3C04DF(vehicle: number, toggle: boolean): void;
	_0xC67DB108A9ADE3BE(p0: number, p1: number): void;
	_0xED5EDE9E676643C9(p0: number, p1: number): void;
	_0xB28B1FE5BFADD7F5(vehicle: number, p1: boolean): void;
	_0x6501129C9E0FFA05(p0: number, p1: number): void;
	_0xDCE97BDF8A0EABC8(vehicle: number, p1: number): void;
	_0x9849DE24FCF23CCC(vehicle: number, toggle: boolean): void;
	_0x8664170EF165C4A6(p0: number, p1: number): void;
	_0x6A98C2ECF57FA5D4(vehicle: number, entity: number): void;
	_0x8AA9180DE2FEDD45(vehicle: number, p1: boolean): void;
	_0x107A473D7A6647A9(vehicle: number): void;
	_0x3B458DDB57038F08(vehicle: number, doorIndex: number, toggle: boolean): void;
	_0xA247F9EF01D8082E(p0: number): void;
	_0x8821196D91FA2DE5(vehicle: number, toggle: boolean): void;
	_0x5845066D8A1EA7F7(vehicle: number, x: number, y: number, z: number, p4: number): void;
	_0x796A877E459B99EA(p0: number, p1: number, p2: number, p3: number): void;
	_0xFAF2A78061FD9EF4(p0: number, p1: number, p2: number, p3: number): void;
	_0x063AE2B2CC273588(vehicle: number, p1: boolean): void;
	_0x99CAD8E7AFDB60FA(vehicle: number, p1: number, p2: number): void;
	_0xDBC631F109350B8C(vehicle: number, p1: boolean): void;
	_0x2311DD7159F00582(vehicle: number, p1: boolean): void;
	_0x065D03A9D6B2C6B5(p0: number, p1: number): void;
	_0xC4B3347BD68BD609(p0: number): void;
	_0xD3301660A57C9272(p0: number): void;
	_0xB9562064627FF9DB(p0: number, p1: number): void;
	_0xBE5C1255A1830FF5(vehicle: number, toggle: boolean): void;
	_0x9BECD4B9FEF3F8A6(vehicle: number, p1: boolean): void;
	_0x88BC673CA9E0AE99(vehicle: number, p1: boolean): void;
	_0xE851E480B814D4BA(vehicle: number, p1: boolean): void;
	_0xA01BC64DD4BFBBAC(vehicle: number, p1: number): number;
	_0xC50CE861B55EAB8B(vehicle: number, p1: boolean): void;
	_0x6EBFB22D646FFC18(vehicle: number, p1: boolean): void;
	_0x35BB21DE06784373(p0: number, p1: number): void;
	_0x9F3F689B814F2599(vehicle: number, p1: boolean): void;
	_0x4E74E62E0A97E901(vehicle: number, p1: boolean): void;
	_0x4056EA1105F5ABD7(p0: number, p1: number): void;
	_0xD565F438137F0E10(p0: number, p1: number): void;
	_0x3441CAD2F2231923(vehicle: number, p1: boolean): void;
	_0x0581730AB9380412(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	_0x737E398138550FFF(p0: number, p1: number): void;
	_0xA4822F1CF23F4810(p1: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): _0xA4822F1CF23F4810Result;
	_0x51DB102F4A3BA5E0(toggle: boolean): void;
	_0xA4A9A4C40E615885(p0: number): void;
	_0xEEBFC7A7EFDC35B4(vehicle: number): number;
	_0x5EE5632F47AE9695(vehicle: number, health: number): void;
	_0x1CF38D529D7441D9(vehicle: number, toggle: boolean): void;
	_0x1F9FB66F3A3842D2(vehicle: number, p1: boolean): void;
	_0x59C3757B3B7408E8(vehicle: number, toggle: boolean, p2: number): void;
	_0x0AD9E8F87FF7C16F(p0: number, p1: boolean): void;
	_0xAB04325045427AAE(vehicle: number, p1: boolean): void;
	_0xCFD778E7904C255E(vehicle: number): void;
	_0x4D9D109F63FEE1D4(p0: number, p1: boolean): void;
	_0x279D50DE5652D935(vehicle: number, toggle: boolean): void;
	_0xF25E02CB9C5818F8(): void;
	_0x182F266C2D9E2BEB(vehicle: number, p1: number): void;
	_0xF051D9BFB6BA39C0(p0: number): void;
	_0x4C815EB175086F84(p0: number, p1: number): number;
	_0xB264C4D2F2B0A78B(vehicle: number): void;
	_0x1F34B0626C594380(p0: number, p1: number): void;
	_0x2C1D8B3B19E517CC(p0: number, p1: number): number;
	_0xC0ED6438E6D39BA8(p0: number, p1: number, p2: number): void;
	_0x9BDDC73CC6A115D4(vehicle: number, p1: boolean, p2: boolean): void;
	_0x56EB5E94318D3FB6(vehicle: number, p1: boolean): void;
	_0x2C4A1590ABF43E8B(vehicle: number, p1: boolean): void;
	_0xE05DD0E9707003A3(p0: number, p1: boolean): void;
	_0xE5810AC70602F2F5(vehicle: number, p1: number): void;
	_0x6A973569BA094650(vehicle: number, p1: number): void;
	_0xF78F94D60248C737(vehicle: number, p1: boolean): boolean;
	_0x5E569EC46EC21CAE(vehicle: number, toggle: boolean): void;
	_0x41062318F23ED854(vehicle: number, toggle: boolean): void;
	_0x4AD280EB48B2D8E6(vehicle: number, togle: boolean): void;
	_0xB68CFAF83A02768D(vehicle: number, toggle: boolean): void;
	_0x0205F5365292D2EB(vehicle: number, p1: number): void;
	_0xCF9159024555488C(p0: number): void;
	_0xB93B2867F7B479D1(vehicle: number, index: number): void;
	_0x35E0654F4BAD7971(p0: boolean): void;
	_0xA7DCDF4DED40A8F4(vehicle: number, p1: boolean): void;
	_0xD4C4642CB7F50B5D(vehicle: number): boolean;
	_0xC361AA040D6637A8(vehicle: number, p1: boolean): void;
	_0xE16142B94664DEFD(vehicle: number, p1: boolean): void;
	_0x26D99D5A82FD18E8(p0: number): void;
	_0x5BA68A0840D546AC(p0: number, p1: number): number;
	_0x4419966C9936071A(vehicle: number): void;
	_0x870B8B7A766615C8(p0: number, p1: number, p2: number): void;
	_0x8533CAFDE1F0F336(p0: number): number;
	_0xD4196117AF7BB974(p0: number, p1: number): number;
	_0xBB2333BB87DDD87F(p0: number, p1: number): void;
	_0x73561D4425A021A2(p0: number, p1: number): void;
	_0x7BBE7FF626A591FE(p0: number): void;
	_0x65B080555EA48149(p0: number): void;
	_0x428AD3E26C8D9EB0(vehicle: number, x: number, y: number, z: number, p4: number): void;
	_0xE2F53F172B45EDE1(): void;
	_0xBA91D045575699AD(vehicle: number): boolean;
	_0x80E3357FDEF45C21(p0: number, p1: number): void;
	_0xB2E0C0D6922D31F2(vehicle: number, toggle: boolean): void;
	_0x3DE51E9C80B116CF(p0: number): number;
	_0x9D30687C57BAA0BB(p0: number): void;
	_0x41290B40FA63E6DA(p0: number): void;
	_0x0419B167EE128F33(p0: number, p1: number): number;
	_0xF3B0E0AED097A3F5(p0: number, p1: number): number;
	_0xD3E51C0AB8C26EEE(p0: number, p1: number): number;
	_0x72BECCF4B829522E(p0: number, p1: number): void;
	_0x66E3AAFACE2D1EB8(p0: number, p1: number, p2: number): void;
	_0x1312DDD8385AEE4E(p0: number, p1: number): void;
	_0xEDBC8405B3895CC9(p0: number, p1: number): void;
	_0x26E13D440E7F6064(vehicle: number, value: number): void;
	_0x2FA2494B47FDD009(p0: number, p1: number): void;
	_0x78CEEE41F49F421F(p0: number, p1: number): void;
	_0xAF60E6A2936F982A(p0: number, p1: number): void;
	_0x430A7631A84C9BE7(p0: number): void;
	_0x8235F1BEAD557629(vehicle: number, toggle: boolean): void;
	_0x9640E30A7F395E4B(vehicle: number, p1: number, p2: number, p3: number, p4: number): void;
	_0x0BBB9A7A8FFE931B(p0: number, p1: number, p2: number): void;
	_0x0A3F820A9A9A9AC5(vehicle: number, x: number, y: number, z: number): void;
	_0x51F30DB60626A20E(vehicle: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number): boolean;
	_0x97841634EF7DF1D6(vehicle: number, toggle: boolean): void;
	_0x3A9128352EAC9E85(p0: number): number;
	_0xAA653AE61924B0A0(vehicle: number, toggle: boolean): void;
	_0x887FA38787DE8C72(vehicle: number): void;
	_0x36DE109527A2C0C4(toggle: boolean): void;
	_0x82E0AC411E41A5B4(toggle: boolean): void;
	_0x99A05839C46CE316(toggle: boolean): void;
	_0xE8718FAF591FD224(vehicle: number): boolean;
	_0x5BBCF35BF6E456F7(toggle: boolean): void;
	_0x8F0D5BA1C2CC91D7(toggle: boolean): void;
	_0xF8B49F5BA7F850E7(vehicle: number, p1: number): void;
}

declare interface GameVehicle extends GameVehicleLegacy {
	/**
	 * Lets you disable the default engine behaviour (when you enter a vehicle, the player automatically turns on the engine). Setting this to false will stop the player from turning the engine on.
	 *
	 * **NOTE**: It is best to set the config flag: [PED_FLAG_STOP_ENGINE_TURNING](https://wiki.rage.mp/index.php?title=Player_Config_Flags) - to ensure the player doesn't attempt to turn the engine resulting in a strange animation.
	 */
	defaultEngineBehaviour: boolean;

	create(modelHash: number, x: number, y: number, z: number, heading: number, isNetwork: boolean, bScriptHostVeh: boolean, p7: boolean): number;
	delete(vehicle: number): number;
	setCanBeLockedOn(vehicle: number, canBeLockedOn: boolean, unk: boolean): void;
	setAllowNoPassengersLockon(veh: number, toggle: boolean): void;
	getHomingLockonState(vehicle: number): number;
	isModel(vehicle: number, model: number): boolean;
	doesScriptGeneratorExist(vehicleGenerator: number): boolean;
	createScriptGenerator(
		x: number,
		y: number,
		z: number,
		heading: number,
		p4: number,
		p5: number,
		modelHash: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		p11: boolean,
		p12: boolean,
		p13: boolean,
		p14: boolean,
		p15: boolean,
		p16: number
	): number;
	deleteScriptGenerator(vehicleGenerator: number): void;
	setScriptGenerator(vehicleGenerator: number, enabled: boolean): void;
	setAllGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): void;
	setAllGeneratorsActive(): void;
	setAllLowPriorityGeneratorsActive(active: boolean): void;
	setOnGroundProperly(vehicle: number, p1: number): boolean;
	setUseCutsceneWheelCompression(p0: number, p1: boolean, p2: boolean, p3: boolean): number;
	isStuckOnRoof(vehicle: number): boolean;
	addUpsidedownCheck(vehicle: number): void;
	removeUpsidedownCheck(vehicle: number): void;
	isStopped(vehicle: number): boolean;
	getNumberOfPassengers(vehicle: number): number;
	getMaxNumberOfPassengers(vehicle: number): number;
	getModelNumberOfSeats(modelHash: number): number;
	isSeatWarpOnly(vehicle: number, seatIndex: number): boolean;
	isTurretSeat(vehicle: number, seatIndex: number): boolean;
	doesAllowRappel(vehicle: number): boolean;
	setDensityMultiplierThisFrame(multiplier: number): void;
	setRandomDensityMultiplierThisFrame(multiplier: number): void;
	setParkedDensityMultiplierThisFrame(multiplier: number): void;
	setDisableRandomTrainsThisFrame(toggle: boolean): void;
	setAmbientRangeMultiplierThisFrame(value: number): void;
	setFarDrawS(toggle: boolean): void;
	setNumberOfParkedS(value: number): void;
	setDoorsLocked(vehicle: number, doorLockStatus: number): void;
	setIndividualDoorsLocked(vehicle: number, doorIndex: number, destroyType: number): void;
	setHasMutedSirens(vehicle: number, toggle: boolean): void;
	setDoorsLockedForPlayer(vehicle: number, player: number, toggle: boolean): void;
	getDoorsLockedForPlayer(vehicle: number, player: number): boolean;
	setDoorsLockedForAllPlayers(vehicle: number, toggle: boolean): void;
	setDoorsLockedForNonScriptPlayers(vehicle: number, toggle: boolean): void;
	setDoorsLockedForTeam(vehicle: number, team: number, toggle: boolean): void;
	setDoorsLockedForUnk(vehicle: number, toggle: boolean): void;
	explode(vehicle: number, isAudible: boolean, isInvisible: boolean): void;
	setOutOfControl(vehicle: number, killDriver: boolean, explodeOnImpact: boolean): void;
	setTimedExplosion(vehicle: number, ped: number, toggle: boolean): void;
	addPhoneExplosiveDevice(vehicle: number): void;
	clearPhoneExplosiveDevice(): void;
	hasPhoneExplosiveDevice(): boolean;
	detonatePhoneExplosiveDevice(): void;
	setTaxiLights(vehicle: number, state: boolean): void;
	isTaxiLightOn(vehicle: number): boolean;
	isInGarageArea(garageName: string, vehicle: number): boolean;
	setColours(vehicle: number, colorPrimary: number, colorSecondary: number): void;
	setFullbeam(vehicle: number, toggle: boolean): void;
	setIsRacing(vehicle: number, toggle: boolean): void;
	setCustomPrimaryColour(vehicle: number, r: number, g: number, b: number): void;
	getCustomPrimaryColour(vehicle: number): GetVehicleCustomPrimaryColourResult;
	clearCustomPrimaryColour(vehicle: number): void;
	getIsPrimaryColourCustom(vehicle: number): boolean;
	setCustomSecondaryColour(vehicle: number, r: number, g: number, b: number): void;
	getCustomSecondaryColour(vehicle: number): GetVehicleCustomSecondaryColourResult;
	clearCustomSecondaryColour(vehicle: number): void;
	getIsSecondaryColourCustom(vehicle: number): boolean;
	setEnveffScale(vehicle: number, fade: number): void;
	getEnveffScale(vehicle: number): number;
	setCanRespray(vehicle: number, state: boolean): void;
	forceSubmarineSurfaceMode(vehicle: number, toggle: boolean): void;
	setSubmarineCrushDepths(vehicle: number, p1: boolean, depth1: number, depth2: number, depth3: number): void;
	getSubmarineIsBelowFirstCrushDepth(submarine: number): boolean;
	getSubmarineCrushDepthWarningState(submarine: number): number;
	setBoatAnchor(vehicle: number, toggle: boolean): void;
	canAnchorBoatHere(vehicle: number): boolean;
	canAnchorBoatHere2(vehicle: number): boolean;
	setBoatFrozenWhenAnchored(vehicle: number, toggle: boolean): void;
	setBoatMovementResistance(vehicle: number, value: number): void;
	isBoatAnchoredAndFrozen(vehicle: number): boolean;
	setBoatSinksWhenWrecked(vehicle: number, toggle: boolean): void;
	setBoatIsSinking(p0: number): void;
	setSiren(vehicle: number, toggle: boolean): void;
	isSirenOn(vehicle: number): boolean;
	isSirenAudioOn(vehicle: number): boolean;
	setStrong(vehicle: number, toggle: boolean): void;
	removeStuckCheck(vehicle: number): void;
	getColours(vehicle: number): GetVehicleColoursResult;
	isSeatFree(vehicle: number, seatIndex: number, isTaskRunning: boolean): boolean;
	getPedInSeat(vehicle: number, seatIndex: number, p2: boolean): number;
	getLastPedInSeat(vehicle: number, seatIndex: number): number;
	getLightsState(vehicle: number): GetVehicleLightsStateResult;
	isTyreBurst(vehicle: number, wheelID: number, completely: boolean): boolean;
	setForwardSpeed(vehicle: number, speed: number): void;
	bringToHalt(vehicle: number, distance: number, duration: number, unknown: boolean): void;
	stopBringToHalt(vehicle: number): void;
	isBeingHalted(vehicle: number): boolean;
	setForkliftForkHeight(vehicle: number, height: number): void;
	isEntityAttachedToHandlerFrame(vehicle: number, entity: number): boolean;
	isAnyEntityAttachedToHandlerFrame(vehicle: number): boolean;
	findCarryingThisEntity(entity: number): number;
	isHandlerFrameAboveContainer(vehicle: number, entity: number): boolean;
	detachContainerFromHandlerFrame(vehicle: number): void;
	setBoatDisableAvoidance(vehicle: number, p1: boolean): void;
	isHeliLandingAreaBlocked(vehicle: number): boolean;
	setHeliTurbulenceScalar(vehicle: number, p1: number): void;
	setCarBootOpen(vehicle: number): void;
	setTyreBurst(vehicle: number, index: number, onRim: boolean, p3: number): void;
	setDoorsShut(vehicle: number, closeInstantly: boolean): void;
	setTyresCanBurst(vehicle: number, toggle: boolean): void;
	getTyresCanBurst(vehicle: number): boolean;
	setWheelsCanBreak(vehicle: number, enabled: boolean): void;
	setDoorOpen(vehicle: number, doorIndex: number, loose: boolean, openInstantly: boolean): void;
	removeWindow(vehicle: number, windowIndex: number): void;
	rollDownWindows(vehicle: number): void;
	rollDownWindow(vehicle: number, windowIndex: number): void;
	rollUpWindow(vehicle: number, windowIndex: number): void;
	smashWindow(vehicle: number, index: number): void;
	fixWindow(vehicle: number, index: number): void;
	popOutWindscreen(vehicle: number): void;
	ejectJb700Roof(vehicle: number, x: number, y: number, z: number): void;
	setLights(vehicle: number, state: number): void;
	setUsePlayerLightSettings(vehicle: number, toggle: boolean): void;
	setLightsMode(vehicle: number, p1: number): void;
	setAlarm(vehicle: number, state: boolean): void;
	startAlarm(vehicle: number): void;
	isAlarmActivated(vehicle: number): boolean;
	setInteriorlight(vehicle: number, toggle: boolean): void;
	setLightMultiplier(vehicle: number, multiplier: number): void;
	attachToTrailer(vehicle: number, trailer: number, radius: number): void;
	attachOnToTrailer(
		vehicle: number,
		trailer: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		coordsX: number,
		coordsY: number,
		coordsZ: number,
		rotationX: number,
		rotationY: number,
		rotationZ: number,
		disableCollisions: number
	): void;
	stabiliseEntityAttachedToHeli(vehicle: number, entity: number, p2: number): void;
	detachFromTrailer(vehicle: number): void;
	isAttachedToTrailer(vehicle: number): boolean;
	setTrailerInverseMassScale(vehicle: number, p1: number): void;
	setTrailerLegsRaised(vehicle: number): void;
	setTrailerLegsLowered(p0: number): void;
	setTyreFixed(vehicle: number, tyreIndex: number): void;
	setNumberPlateText(vehicle: number, plateText: string): void;
	getNumberPlateText(vehicle: number): string;
	getNumberOfNumberPlates(): number;
	setNumberPlateTextIndex(vehicle: number, plateIndex: number): void;
	getNumberPlateTextIndex(vehicle: number): number;
	setRandomTrains(toggle: boolean): void;
	createMissionTrain(variation: number, x: number, y: number, z: number, direction: boolean): number;
	switchTrainTrack(trackId: number, state: boolean): void;
	setTrainTrackSpawnFrequency(trackIndex: number, frequency: number): void;
	deleteAllTrains(): void;
	setTrainSpeed(train: number, speed: number): void;
	setTrainCruiseSpeed(train: number, speed: number): void;
	setRandomBoats(toggle: boolean): void;
	setGarbageTrucks(toggle: boolean): void;
	doesHaveStuckVehicleCheck(vehicle: number): boolean;
	getRecordingId(recording: number, script: string): number;
	requestRecording(recording: number, script: string): void;
	hasRecordingBeenLoaded(recording: number, script: string): boolean;
	removeRecording(recording: number, script: string): void;
	getPositionOfRecordingIdAtTime(id: number, time: number): Vector3;
	getPositionOfRecordingAtTime(recording: number, time: number, script: string): Vector3;
	getRotationOfRecordingIdAtTime(id: number, time: number): Vector3;
	getRotationOfRecordingAtTime(recording: number, time: number, script: string): Vector3;
	getTotalDurationOfRecordingId(id: number): number;
	getTotalDurationOfRecording(recording: number, script: string): number;
	getPositionInRecording(vehicle: number): number;
	getTimePositionInRecording(vehicle: number): number;
	startPlaybackRecorded(vehicle: number, recording: number, script: string, p3: boolean): void;
	startPlaybackRecordedWithFlags(vehicle: number, recording: number, script: string, flags: number, time: number, drivingStyle: number): void;
	forcePlaybackRecordedUpdate(vehicle: number, p1: boolean): void;
	stopPlaybackRecorded(vehicle: number): void;
	pausePlaybackRecorded(vehicle: number): void;
	unpausePlaybackRecorded(vehicle: number): void;
	isPlaybackGoingOnFor(vehicle: number): boolean;
	isPlaybackUsingAiGoingOnFor(vehicle: number): boolean;
	getCurrentPlaybackFor(vehicle: number): number;
	skipToEndAndStopPlaybackRecorded(vehicle: number): void;
	setPlaybackSpeed(vehicle: number, speed: number): void;
	startPlaybackRecordedUsingAi(vehicle: number, recording: number, script: string, speed: number, drivingStyle: number): void;
	skipTimeInPlaybackRecorded(vehicle: number, time: number): void;
	setPlaybackToUseAi(vehicle: number, drivingStyle: number): void;
	setPlaybackToUseAiTryToRevertBackLater(vehicle: number, time: number, drivingStyle: number, p3: boolean): void;
	explodeInCutscene(vehicle: number, p1: boolean): void;
	addStuckCheckWithWarp(p0: number, p1: number, p2: number, p3: boolean, p4: boolean, p5: boolean, p6: number): void;
	setModelIsSuppressed(model: number, suppressed: boolean): void;
	getRandomInSphere(x: number, y: number, z: number, radius: number, modelHash: number, flags: number): number;
	getRandomFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
	getRandomBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
	getClosest(x: number, y: number, z: number, radius: number, modelHash: number, flags: number): number;
	getTrainCarriage(train: number, trailerNumber: number): number;
	deleteMissionTrain(train: number): number;
	setMissionTrainAsNoLongerNeeded(train: number, p1: boolean): number;
	setMissionTrainCoords(train: number, x: number, y: number, z: number): void;
	isThisModelABoat(model: number): boolean;
	isThisModelAJetski(model: number): boolean;
	isThisModelAPlane(model: number): boolean;
	isThisModelAHeli(model: number): boolean;
	isThisModelACar(model: number): boolean;
	isThisModelATrain(model: number): boolean;
	isThisModelABike(model: number): boolean;
	isThisModelABicycle(model: number): boolean;
	isThisModelAQuadbike(model: number): boolean;
	isThisModelAnAmphibiousCar(model: number): boolean;
	isThisModelAnAmphibiousQuadbike(model: number): boolean;
	setHeliBladesFullSpeed(vehicle: number): void;
	setHeliBladesSpeed(vehicle: number, speed: number): void;
	setCanBeTargetted(vehicle: number, state: boolean): void;
	setCanBeVisiblyDamaged(vehicle: number, state: boolean): void;
	setHasUnbreakableLights(vehicle: number, p1: boolean): void;
	getDirtLevel(vehicle: number): number;
	setDirtLevel(vehicle: number, dirtLevel: number): void;
	isDamaged(vehicle: number): boolean;
	isDoorFullyOpen(vehicle: number, doorIndex: number): boolean;
	setEngineOn(vehicle: number, value: boolean, instantly: boolean, disableAutoStart: boolean): void;
	setUndriveable(vehicle: number, toggle: boolean): void;
	setProvidesCover(vehicle: number, toggle: boolean): void;
	setDoorControl(vehicle: number, doorIndex: number, speed: number, angle: number): void;
	setDoorLatched(vehicle: number, doorIndex: number, p2: boolean, p3: boolean, p4: boolean): void;
	getDoorAngleRatio(vehicle: number, door: number): number;
	getPedUsingDoor(vehicle: number, doorIndex: number): number;
	setDoorShut(vehicle: number, doorIndex: number, closeInstantly: boolean): void;
	setDoorBroken(vehicle: number, doorIndex: number, deleteDoor: boolean): void;
	setCanBreak(vehicle: number, toggle: boolean): void;
	doesHaveRoof(vehicle: number): boolean;
	isBig(vehicle: number): boolean;
	getNumberOfColours(vehicle: number): number;
	setColourCombination(vehicle: number, colorCombination: number): void;
	getColourCombination(vehicle: number): number;
	setXenonLightsColor(vehicle: number, colorIndex: number): void;
	getXenonLightsColor(vehicle: number): number;
	setIsConsideredByPlayer(vehicle: number, toggle: boolean): void;
	getRandomModelInMemory(p0: boolean): GetRandomVehicleModelInMemoryResult;
	getDoorLockStatus(vehicle: number): number;
	getDoorDestroyType(vehicle: number, doorIndex: number): number;
	isDoorDamaged(veh: number, doorID: number): boolean;
	setDoorCanBreak(vehicle: number, doorIndex: number, isBreakable: boolean): void;
	isBumperBouncing(vehicle: number, frontBumper: boolean): boolean;
	isBumperBrokenOff(vehicle: number, front: boolean): boolean;
	isCopInArea3D(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): boolean;
	isOnAllWheels(vehicle: number): boolean;
	getModelMonetaryValue(vehicleModel: number): number;
	getLayoutHash(vehicle: number): number;
	setRenderTrainAsDerailed(train: number, toggle: boolean): void;
	setExtraColours(vehicle: number, pearlescentColor: number, wheelColor: number): void;
	getExtraColours(vehicle: number): GetVehicleExtraColoursResult;
	setInteriorColor(vehicle: number, color: number): void;
	getInteriorColor(vehicle: number): number;
	setDashboardColor(vehicle: number, color: number): void;
	getDashboardColor(vehicle: number): number;
	stopAllGarageActivity(): void;
	setFixed(vehicle: number): void;
	setDeformationFixed(vehicle: number): void;
	setCanEngineOperateOnFire(vehicle: number, toggle: boolean): void;
	setCanLeakOil(vehicle: number, toggle: boolean): void;
	setCanLeakPetrol(vehicle: number, toggle: boolean): void;
	setDisablePetrolTankFires(vehicle: number, toggle: boolean): void;
	setDisablePetrolTankDamage(vehicle: number, toggle: boolean): void;
	setDisableEngineFires(vehicle: number, toggle: boolean): void;
	setDisablePretendOccupants(vehicle: number, toggle: boolean): void;
	removeVehiclesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unk: number): void;
	setSteerBias(vehicle: number, value: number): void;
	isExtraTurnedOn(vehicle: number, extraId: number): boolean;
	setExtra(vehicle: number, extraId: number, disable: boolean): void;
	doesExtraExist(vehicle: number, extraId: number): boolean;
	doesTyreExist(vehicle: number, tyreIndex: number): boolean;
	setConvertibleRoof(vehicle: number, p1: boolean): void;
	lowerConvertibleRoof(vehicle: number, instantlyLower: boolean): void;
	raiseConvertibleRoof(vehicle: number, instantlyRaise: boolean): void;
	getConvertibleRoofState(vehicle: number): number;
	isAConvertible(vehicle: number, p1: boolean): boolean;
	transformToSubmarine(vehicle: number, noAnimation: boolean): void;
	transformSubmarineTo(vehicle: number, noAnimation: boolean): void;
	getIsSubmarineTransformed(vehicle: number): boolean;
	isStoppedAtTrafficLights(vehicle: number): boolean;
	setDamage(vehicle: number, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, focusOnModel: boolean): void;
	getEngineHealth(vehicle: number): number;
	setEngineHealth(vehicle: number, health: number): void;
	setPlaneEngineHealth(vehicle: number, health: number): void;
	getPetrolTankHealth(vehicle: number): number;
	setPetrolTankHealth(vehicle: number, health: number): void;
	isStuckTimerUp(vehicle: number, p1: number, p2: number): boolean;
	resetStuckTimer(vehicle: number, nullAttributes: number): void;
	isDriveable(vehicle: number, isOnFireCheck: boolean): boolean;
	setHasBeenOwnedByPlayer(vehicle: number, owned: boolean): void;
	setNeedsToBeHotwired(vehicle: number, toggle: boolean): void;
	startHorn(vehicle: number, duration: number, mode: number, forever: boolean): void;
	setSilent(vehicle: number, toggle: boolean): void;
	setHasStrongAxles(vehicle: number, toggle: boolean): void;
	getDisplayNameFromModel(modelHash: number): string;
	getMakeNameFromModel(modelHash: number): string;
	getDeformationAtPos(vehicle: number, offsetX: number, offsetY: number, offsetZ: number): Vector3;
	setLivery(vehicle: number, livery: number): void;
	getLivery(vehicle: number): number;
	getLiveryCount(vehicle: number): number;
	setRoofLivery(vehicle: number, livery: number): void;
	getRoofLivery(vehicle: number): number;
	getRoofLiveryCount(vehicle: number): number;
	isWindowIntact(vehicle: number, windowIndex: number): boolean;
	areAllWindowsIntact(vehicle: number): boolean;
	areAnySeatsFree(vehicle: number): boolean;
	resetWheels(vehicle: number, toggle: boolean): void;
	isHeliPartBroken(vehicle: number, p1: boolean, p2: boolean, p3: boolean): boolean;
	getHeliMainRotorHealth(vehicle: number): number;
	getHeliTailRotorHealth(vehicle: number): number;
	getHeliTailBoomHealth(vehicle: number): number;
	setHeliTailRotorHealth(vehicle: number, health: number): void;
	setHeliTailExplodeThrowDashboard(vehicle: number, p1: boolean): void;
	setNameDebug(vehicle: number, name: string): void;
	setExplodesOnHighExplosionDamage(vehicle: number, toggle: boolean): void;
	setDisableTowing(vehicle: number, toggle: boolean): void;
	doesHaveLandingGear(vehicle: number): boolean;
	controlLandingGear(vehicle: number, state: number): void;
	getLandingGearState(vehicle: number): number;
	isAnyNearPoint(x: number, y: number, z: number, radius: number): boolean;
	requestHighDetailModel(vehicle: number): void;
	removeHighDetailModel(vehicle: number): void;
	isHighDetail(vehicle: number): boolean;
	requestAsset(vehicleHash: number, vehicleAsset: number): void;
	hasAssetLoaded(vehicleAsset: number): boolean;
	removeAsset(vehicleAsset: number): void;
	setTowTruckArmPosition(vehicle: number, position: number): void;
	attachToTowTruck(towTruck: number, vehicle: number, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;
	detachFromTowTruck(towTruck: number, vehicle: number): void;
	detachFromAnyTowTruck(vehicle: number): boolean;
	isAttachedToTowTruck(towTruck: number, vehicle: number): boolean;
	getEntityAttachedToTowTruck(towTruck: number): number;
	setAutomaticallyAttaches(vehicle: number, p1: boolean, p2: number): number;
	setBulldozerArmPosition(vehicle: number, position: number, p2: boolean): void;
	setTankTurretPosition(vehicle: number, position: number, p2: boolean): void;
	setTurretSpeedThisFrame(vehicle: number, speed: number): void;
	disableTurretMovementThisFrame(vehicle: number): void;
	setFlightNozzlePosition(vehicle: number, angleRatio: number): void;
	setFlightNozzlePositionImmediate(vehicle: number, angle: number): void;
	getFlightNozzlePosition(plane: number): number;
	setDisableFlightNozzlePosition(vehicle: number, toggle: boolean): void;
	setBurnout(vehicle: number, toggle: boolean): void;
	isInBurnout(vehicle: number): boolean;
	setReduceGrip(vehicle: number, toggle: boolean): void;
	setReduceTraction(vehicle: number, val: number): void;
	setIndicatorLights(vehicle: number, turnSignal: number, toggle: boolean): void;
	setBrakeLights(vehicle: number, toggle: boolean): void;
	setHandbrake(vehicle: number, toggle: boolean): void;
	setBrake(vehicle: number, toggle: boolean): void;
	instantlyFillPopulation(): void;
	hasFilledPopulation(): boolean;
	getTrailerVehicle(vehicle: number): number;
	setUsesLargeRearRamp(vehicle: number, toggle: boolean): void;
	setRudderBroken(vehicle: number, toggle: boolean): void;
	setConvertibleRoofLatchState(vehicle: number, state: boolean): void;
	getEstimatedMaxSpeed(vehicle: number): number;
	getMaxBraking(vehicle: number): number;
	getMaxTraction(vehicle: number): number;
	getAcceleration(vehicle: number): number;
	getModelEstimatedMaxSpeed(modelHash: number): number;
	getModelMaxBraking(modelHash: number): number;
	getModelMaxBrakingMaxMods(modelHash: number): number;
	getModelMaxTraction(modelHash: number): number;
	getModelAcceleration(modelHash: number): number;
	getModelEstimatedAgility(modelHash: number): number;
	getModelMaxKnots(modelHash: number): number;
	getModelMoveResistance(modelHash: number): number;
	getClassEstimatedMaxSpeed(vehicleClass: number): number;
	getClassMaxTraction(vehicleClass: number): number;
	getClassMaxAgility(vehicleClass: number): number;
	getClassMaxAcceleration(vehicleClass: number): number;
	getClassMaxBraking(vehicleClass: number): number;
	addRoadNodeSpeedZone(x: number, y: number, z: number, radius: number, speed: number, p5: boolean): number;
	removeRoadNodeSpeedZone(speedzone: number): boolean;
	openBombBayDoors(vehicle: number): void;
	closeBombBayDoors(vehicle: number): void;
	areBombBayDoorsOpen(aircraft: number): boolean;
	isSearchlightOn(vehicle: number): boolean;
	setSearchlight(heli: number, toggle: boolean, canBeUsedByAI: boolean): void;
	doesHaveSearchlight(vehicle: number): boolean;
	isSeatAccessible(ped: number, vehicle: number, seatIndex: number, side: boolean, onEnter: boolean): boolean;
	getEntryPositionOfDoor(vehicle: number, doorIndex: number): Vector3;
	canShuffleSeat(vehicle: number, seatIndex: number): boolean;
	getNumModKits(vehicle: number): number;
	setModKit(vehicle: number, modKit: number): void;
	getModKit(vehicle: number): number;
	getModKitType(vehicle: number): number;
	getWheelType(vehicle: number): number;
	setWheelType(vehicle: number, WheelType: number): void;
	getNumModColors(paintType: number, p1: boolean): number;
	setModColor1(vehicle: number, paintType: number, color: number, pearlescentColor: number): void;
	setModColor2(vehicle: number, paintType: number, color: number): void;
	getModColor1(vehicle: number): GetVehicleModColor1Result;
	getModColor2(vehicle: number): GetVehicleModColor2Result;
	getModColor1Name(vehicle: number, p1: boolean): string;
	getModColor2Name(vehicle: number): string;
	haveModsStreamedIn(vehicle: number): boolean;
	setMod(vehicle: number, modType: number, modIndex: number, customTires: boolean): void;
	getMod(vehicle: number, modType: number): number;
	getModVariation(vehicle: number, modType: number): boolean;
	getNumMods(vehicle: number, modType: number): number;
	removeMod(vehicle: number, modType: number): void;
	toggleMod(vehicle: number, modType: number, toggle: boolean): void;
	isToggleModOn(vehicle: number, modType: number): boolean;
	getModTextLabel(vehicle: number, modType: number, modValue: number): string;
	getModSlotName(vehicle: number, modType: number): string;
	getLiveryName(vehicle: number, liveryIndex: number): string;
	getModModifierValue(vehicle: number, modType: number, modIndex: number): number;
	getModIdentifierHash(vehicle: number, modType: number, modIndex: number): number;
	preloadMod(p0: number, modType: number, p2: number): void;
	hasPreloadModsFinished(p0: number): boolean;
	releasePreloadMods(vehicle: number): void;
	setTyreSmokeColor(vehicle: number, r: number, g: number, b: number): void;
	getTyreSmokeColor(vehicle: number): GetVehicleTyreSmokeColorResult;
	setWindowTint(vehicle: number, tint: number): void;
	getWindowTint(vehicle: number): number;
	getNumWindowTints(): number;
	getColor(vehicle: number): GetVehicleColorResult;
	getCauseOfDestruction(vehicle: number): number;
	getIsLeftHeadlightDamaged(vehicle: number): boolean;
	getIsRightHeadlightDamaged(vehicle: number): boolean;
	isEngineOnFire(vehicle: number): boolean;
	modifyTopSpeed(vehicle: number, value: number): void;
	setMaxSpeed(vehicle: number, speed: number): void;
	addCombatAngledAvoidanceArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
	removeCombatAvoidanceArea(p0: number): void;
	isAnyPedRappellingFromHeli(vehicle: number): boolean;
	setCheatPowerIncrease(vehicle: number, value: number): void;
	setIsWanted(vehicle: number, state: boolean): void;
	setBoatBoomPositionRatio(vehicle: number, ratio: number): void;
	getBoatBoomPositionRatio2(vehicle: number, p1: boolean): void;
	getBoatBoomPositionRatio3(vehicle: number, p1: boolean): void;
	getBoatBoomPositionRatio(vehicle: number): number;
	disablePlaneAileron(vehicle: number, p1: boolean, p2: boolean): void;
	getIsEngineRunning(vehicle: number): boolean;
	setUseAlternateHandling(vehicle: number, toggle: boolean): void;
	setBikeOnStand(vehicle: number, x: number, y: number): void;
	setLastDriven(vehicle: number): void;
	getLastDriven(): number;
	clearLastDriven(): void;
	setHasBeenDrivenFlag(vehicle: number, toggle: boolean): void;
	setTaskGotoPlaneMinHeightAboveTerrain(plane: number, height: number): void;
	setLodMultiplier(vehicle: number, multiplier: number): void;
	setCanSaveInGarage(vehicle: number, toggle: boolean): void;
	getNumberOfBrokenOffBones(vehicle: number): number;
	getNumberOfBrokenBones(vehicle: number): number;
	copyDamages(sourceVehicle: number, targetVehicle: number): void;
	setLightsCutoffDistanceTweak(distance: number): void;
	setShootAtTarget(driver: number, entity: number, xTarget: number, yTarget: number, zTarget: number): void;
	getLockOnTarget(vehicle: number): number;
	setForceHd(vehicle: number, toggle: boolean): void;
	getPlateType(vehicle: number): number;
	trackVisibility(vehicle: number): void;
	isVisible(vehicle: number): boolean;
	setGravity(vehicle: number, toggle: boolean): void;
	setEnableSlipstreaming(toggle: boolean): void;
	getCurrentSlipstreamDraft(vehicle: number): number;
	isSlipstreamLeader(vehicle: number): boolean;
	setInactiveDuringPlayback(vehicle: number, toggle: boolean): void;
	setActiveDuringPlayback(p0: number, p1: boolean): void;
	isSprayable(vehicle: number): boolean;
	setEngineCanDegrade(vehicle: number, toggle: boolean): void;
	setShadowEffect(vehicle: number, p1: number, p2: number): void;
	removeShadowEffect(vehicle: number): void;
	isPlaneLandingGearIntact(plane: number): boolean;
	arePlanePropellersIntact(plane: number): boolean;
	setCanDeformWheels(vehicle: number, toggle: boolean): void;
	isStolen(vehicle: number): boolean;
	setIsStolen(vehicle: number, isStolen: boolean): void;
	setPlaneTurbulenceMultiplier(vehicle: number, multiplier: number): void;
	arePlaneWingsIntact(plane: number): boolean;
	detachFromCargobob(vehicle: number, cargobob: number): void;
	detachFromAnyCargobob(vehicle: number): boolean;
	detachEntityFromCargobob(cargobob: number, entity: number): number;
	isAttachedToCargobob(cargobob: number, vehicleAttached: number): boolean;
	getAttachedToCargobob(cargobob: number): number;
	getEntityAttachedToCargobob(p0: number): number;
	attachToCargobob(vehicle: number, cargobob: number, p2: number, x: number, y: number, z: number): void;
	attachEntityToCargobob(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	setCargobobHookCanDetach(cargobob: number, toggle: boolean): void;
	getCargobobHookPosition(cargobob: number): Vector3;
	doesCargobobHavePickUpRope(cargobob: number): boolean;
	createPickUpRopeForCargobob(cargobob: number, state: number): void;
	removePickUpRopeForCargobob(cargobob: number): void;
	setPickupRopeLengthForCargobob(cargobob: number, length1: number, length2: number, p3: boolean): void;
	setCargobobPickupRopeDampingMultiplier(p0: number, p1: number): void;
	setCargobobPickupRopeType(p0: number, p1: number): void;
	doesCargobobHavePickupMagnet(cargobob: number): boolean;
	setCargobobPickupMagnetActive(cargobob: number, isActive: boolean): void;
	setCargobobPickupMagnetStrength(cargobob: number, strength: number): void;
	setCargobobPickupMagnetEffectRadius(cargobob: number, p1: number): void;
	setCargobobPickupMagnetReducedFalloff(cargobob: number, p1: number): void;
	setCargobobPickupMagnetPullRopeLength(cargobob: number, p1: number): void;
	setCargobobPickupMagnetPullStrength(cargobob: number, p1: number): void;
	setCargobobPickupMagnetFalloff(vehicle: number, p1: number): void;
	setCargobobPickupMagnetReducedStrength(vehicle: number, cargobob: number): void;
	doesHaveWeapons(vehicle: number): boolean;
	disableWeapon(disabled: boolean, weaponHash: number, vehicle: number, owner: number): void;
	isWeaponDisabled(weaponHash: number, vehicle: number, owner: number): boolean;
	setActiveForPedNavigation(vehicle: number, toggle: boolean): void;
	getClass(vehicle: number): number;
	getClassFromName(modelHash: number): number;
	setPlayersLast(vehicle: number): void;
	setCanBeUsedByFleeingPeds(vehicle: number, toggle: boolean): void;
	setDropsMoneyWhenBlownUp(vehicle: number, toggle: boolean): void;
	setJetEngineOn(vehicle: number, toggle: boolean): void;
	setHandlingHashForAi(vehicle: number, hash: number): void;
	setExtendedRemovalRange(vehicle: number, range: number): void;
	setSteeringBiasScalar(p0: number, p1: number): void;
	setHelicopterRollPitchYawMult(helicopter: number, multiplier: number): void;
	setFrictionOverride(vehicle: number, friction: number): void;
	setWheelsCanBreakOffWhenBlowUp(vehicle: number, toggle: boolean): void;
	setCeilingHeight(vehicle: number, height: number): void;
	clearRouteHistory(vehicle: number): void;
	doesExistWithDecorator(decorator: string): boolean;
	setExclusiveDriver(vehicle: number, ped: number, index: number): void;
	isPedExclusiveDriverOf(ped: number, vehicle: number): number;
	disablePlanePropeller(vehicle: number, p1: number): void;
	setForceAfterburner(vehicle: number, toggle: boolean): void;
	setDisableWindowCollisions(vehicle: number, toggle: boolean): void;
	setDistantCarsEnabled(toggle: boolean): void;
	setNeonLightsColour(vehicle: number, r: number, g: number, b: number): void;
	getNeonLightsColour(vehicle: number): GetVehicleNeonLightsColourResult;
	setNeonLightEnabled(vehicle: number, index: number, toggle: boolean): void;
	isNeonLightEnabled(vehicle: number, index: number): boolean;
	disableNeonLights(vehicle: number, toggle: boolean): void;
	setDisableSuperdummyMode(vehicle: number, p1: boolean): void;
	requestDashboardScaleformMovie(vehicle: number): void;
	getBodyHealth(vehicle: number): number;
	setBodyHealth(vehicle: number, value: number): void;
	getSuspensionBounds(vehicle: number): GetVehicleSuspensionBoundsResult;
	getSuspensionHeight(vehicle: number): number;
	setCarHighSpeedBumpSeverityMultiplier(multiplier: number): void;
	getNumberOfDoors(vehicle: number): number;
	setHydraulicRaised(p0: number, p1: number): void;
	getBodyHealth2(vehicle: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
	setKersAllowed(vehicle: number, toggle: boolean): void;
	getHasKers(vehicle: number): boolean;
	setHydraulicWheelValue(vehicle: number, wheelId: number, value: number): void;
	setCamberedWheelsDisabled(p0: number, p1: number): void;
	setHydraulicWheelState(p0: number, p1: number): void;
	setHydraulicWheelStateTransition(vehicle: number, wheelId: number, state: number, value: number, p4: number): void;
	setDamageModifier(vehicle: number, p1: number): number;
	setUnkDamageMultiplier(vehicle: number, multiplier: number): void;
	setControlsInverted(vehicle: number, state: boolean): void;
	setRampLaunchModifier(p0: number, p1: number): void;
	getIsDoorValid(vehicle: number, doorIndex: number): boolean;
	setRocketBoostRefillTime(vehicle: number, seconds: number): void;
	getHasRocketBoost(vehicle: number): boolean;
	isRocketBoostActive(vehicle: number): boolean;
	setRocketBoostActive(vehicle: number, active: boolean): void;
	getHasRetractableWheels(vehicle: number): boolean;
	getIsWheelsLoweredStateActive(vehicle: number): boolean;
	raiseRetractableWheels(vehicle: number): void;
	lowerRetractableWheels(vehicle: number): void;
	getCanJump(vehicle: number): boolean;
	setUseHigherJumpForce(vehicle: number, toggle: boolean): void;
	setWeaponCapacity(vehicle: number, weaponIndex: number, capacity: number): void;
	getWeaponCapacity(vehicle: number, weaponIndex: number): number;
	getHasParachute(vehicle: number): boolean;
	getCanActivateParachute(vehicle: number): boolean;
	setParachuteActive(vehicle: number, active: boolean): void;
	setReceivesRampDamage(vehicle: number, toggle: boolean): void;
	setRampSidewaysLaunchMotion(p0: number, p1: number): void;
	setRampUpwardsLaunchMotion(p0: number, p1: number): void;
	setWeaponsDisabled(p0: number, p1: number): void;
	setParachuteModel(vehicle: number, modelHash: number): void;
	setParachuteTextureVariatiion(vehicle: number, textureVariation: number): void;
	getAllS(): GetAllVehiclesResult;
	setRocketBoostPercentage(vehicle: number, percentage: number): void;
	setOppressorTransformState(vehicle: number, state: boolean): void;
	disableWorldCollision(vehicle: number): void;
	setCargobobHookCanAttach(vehicle: number, toggle: boolean): void;
	setBombCount(vehicle: number, bombCount: number): void;
	getBombCount(vehicle: number): number;
	setCountermeasureCount(vehicle: number, counterMeasureCount: number): void;
	getCountermeasureCount(vehicle: number): number;
	setHoverTransformRatio(vehicle: number, ratio: number): void;
	setHoverTransformPercentage(vehicle: number, percentage: number): void;
	setHoverTransformEnabled(vehicle: number, toggle: boolean): void;
	setHoverTransformActive(vehicle: number, toggle: boolean): void;
	findRandomPointInSpace(ped: number): Vector3;
	setDeployHeliStubWings(vehicle: number, deploy: boolean, p2: boolean): void;
	areHeliStubWingsDeployed(vehicle: number): boolean;
	setTurretUnk(vehicle: number, index: number, toggle: boolean): void;
	setSpecialflightWingRatio(vehicle: number, ratio: number): void;
	setDisableTurretMovementThisFrame(vehicle: number, turretId: number): void;
	setUnkFloat0X104ForSubmarineTask(vehicle: number, value: number): void;
	setUnkBool0X102ForSubmarineTask(vehicle: number, value: boolean): void;
	getIsShuntBoostActive(vehicle: number): boolean;
	getLastRammed(vehicle: number): number;
	setDisableUnk(toggle: boolean): void;
	setNitroEnabled(vehicle: number, toggle: boolean, level: number, power: number, rechargeTime: number, disableSound: boolean): void;
	setWheelsDealDamage(vehicle: number, toggle: boolean): void;
	setDisableUnk2(toggle: boolean): void;
	getDoesHaveTombstone(vehicle: number): boolean;
	hideTombstone(vehicle: number, toggle: boolean): void;
	getIsEmpDisabled(vehicle: number): boolean;
	getTyreHealth(vehicle: number, wheelIndex: number): number;
	setTyreHealth(vehicle: number, wheelIndex: number, health: number): void;
	getTyreWearMultiplier(vehicle: number, wheelIndex: number): number;
	setTyreWearMultiplier(vehicle: number, wheelIndex: number, multiplier: number): void;
	setTyreSoftnessMultiplier(vehicle: number, wheelIndex: number, multiplier: number): void;
	setTyreTractionLossMultiplier(vehicle: number, wheelIndex: number, multiplier: number): void;

	unk: GameVehicleUnk;
}

declare interface GameVehicleMp extends GameVehicle {}
