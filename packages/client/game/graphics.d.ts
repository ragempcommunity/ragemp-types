declare interface GetActiveScreenResolutionResult {
	x: number;
	y: number;
}

declare interface GetStatusOfLoadMissionCreatorPhotoResult {
	p0: number;
	result: number;
}

declare interface GetScriptGfxPositionResult {
	calculatedX: number;
	calculatedY: number;
}

declare interface GetScreenResolutionResult {
	x: number;
	y: number;
}

declare interface GetScreenCoordFromWorldCoordResult {
	screenX: number;
	screenY: number;
	result: boolean;
}

declare interface GameGraphicsUnk {
	_0xC5C8F970D4EDFF71(p0: number): void;
	_0x7FA5D82B8F58EC06(): number;
	_0x5B0316762AFD4A64(): number;
	_0x346EF3ECAAAB149E(): void;
	_0x1BBC135A4D25EDDE(p0: boolean): void;
	_0xF3F776ADA161E47D(p0: number, p1: number): void;
	_0xADD6627C4D325458(p0: number): void;
	_0x759650634F07B6B4(p0: number): boolean;
	_0xCB82A0BF0E3E3265(p0: number): number;
	_0x2A893980E96B659A(p0: number): number;
	_0x4AF92ACD3141D96C(): void;
	_0xE791DF1F73ED2C8B(p0: number): number;
	_0xEC72C258667BE5EA(p0: number): number;
	_0x9641588DAB93B4B5(p0: number): void;
	_0x393BD2275CEB7793(): number;
	_0xF51D36185993515D(checkpoint: number, posX: number, posY: number, posZ: number, unkX: number, unkY: number, unkZ: number): void;
	_0xFCF6788FC4860CD4(checkpoint: number): void;
	_0x615D3925E87A3B26(checkpoint: number): void;
	_0xDB1EA9411C8911EC(p0: number): void;
	_0x3C788E7F6438754D(p0: number, p1: number, p2: number, p3: number): void;
	_0x2D3B147AFAD49DE0(
		textureDict: string,
		textureName: string,
		x: number,
		y: number,
		width: number,
		height: number,
		p6: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
		p11: number
	): void;
	_0xB2EBE8CBC58B90E9(): number;
	_0xEFABC7722293DA7C(): void;
	_0xEF398BEEE4EF45F9(p0: boolean): void;
	_0x814AF7DCAACC597B(p0: number): void;
	_0x43FA7CBE20DAB219(p0: number): void;
	_0xE2892E7E55D7073A(p0: number): void;
	_0xC35A6D07C93802B2(): void;
	_0xBE197EAA669238F4(p0: number, p1: number, p2: number, p3: number): number;
	_0x61F95E5BB3E0A8C6(p0: number): void;
	_0xAE51BC858F32BA66(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	_0x649C97D52332341A(p0: number): void;
	_0x2C42340F916C5930(p0: number): number;
	_0x14FC5833464340A8(): void;
	_0x0218BA067D249DEA(): void;
	_0x1612C45F9E3E0D44(): void;
	_0x5DEBD9C4DC995692(): void;
	_0xAAE9BE70EC7C69AB(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
	_0x36F6626459D91457(p0: number): void;
	_0x259BA6D4E6F808F1(p0: number): void;
	_0x25FC3E33A31AD0C9(p0: boolean): void;
	_0x0AE73D8DF3A762B2(p0: boolean): void;
	_0xCA465D9CC0D231BA(p0: number): void;
	_0xC0416B061F2B7E5E(p0: boolean): void;
	_0xB3C641F3630BF6DA(p0: number): void;
	_0xE59343E9E96529E7(): number;
	_0x6A51F78772175A51(toggle: boolean): void;
	_0xE63D7C6EECECB66B(toggle: boolean): void;
	_0xE3E2C1B4C59DBC77(unk: number): void;
	_0x851CD923176EBA7C(): void;
	_0xB569F41F3E7E83A4(p0: number): void;
	_0x7AC24EAB6D74118D(p0: boolean): boolean;
	_0xBCEDB009461DA156(): number;
	_0x27FEB5254759CDE3(textureDict: string, p1: boolean): boolean;
	_0x8CDE909A0370BB3A(toggle: boolean): void;
	_0xBA0127DA25FD54C9(p0: number, p1: number): void;
	_0x2A251AA48B2B46DB(): void;
	_0x908311265D42A820(p0: number): void;
	_0xCFD16F0DB5A3535C(toggle: boolean): void;
	_0x5F6DF3D92271E8A1(toggle: boolean): void;
	_0x2B40A97646381508(p0: number): void;
	_0xBB90E12CAC1DAB25(p0: number): void;
	_0xCA4AE345A153D573(p0: boolean): void;
	_0x54E22EA2C1956A8D(p0: number): void;
	_0x949F397A288B28B3(p0: number): void;
	_0xBA3D194057C79A7B(p0: string): void;
	_0x5DBF05DB5926D089(p0: number): void;
	_0x9B079E5221D984D3(p0: boolean): void;
	_0xA46B73FAA3460AE1(p0: boolean): void;
	_0xF78B803082D4386F(p0: number): void;
	_0xD9454B5752C857DC(): void;
	_0x27CFB1B1E078CB2D(): void;
	_0x82ACC484FFA3B05F(p0: number): number;
	_0x0E4299C549F0D1F1(toggle: boolean): void;
	_0x02369D5C8A51FDCF(toggle: boolean): void;
	_0x46D1A61A21F566FC(p0: number): void;
	_0x03300B57FCAC6DDB(p0: boolean): void;
	_0x98EDF76A7271E4F2(): void;
	_0x1CBA05AE7BD7EE05(p0: number): void;
	_0x98D18905BF723B99(): number;
	_0x2FCB133CA50A49EB(val: number): boolean;
	_0x86255B1FC929E33E(val: number): boolean;
	_0x32F34FF7F617643B(p0: number, p1: number): void;
	_0x5E657EF1099EDD65(p0: number): boolean;
	_0xD1C7CB175E012964(scaleformHandle: number): boolean;
	_0xD1C55B110E4DF534(p0: number): void;
	_0x30432A0118736E00(): number;
	_0x98C4FE6EC34154CA(presetName: string, ped: number, p2: number, posX: number, posY: number, posZ: number): boolean;
	_0x7A42B2E236E71415(): void;
	_0x108BE26959A9D9BB(toggle: boolean): void;
}

declare interface GameGraphicsLegacy {
	setScreenDrawPosition(horizontalAlign: number, verticalAlign: number): void;
	getScreenActiveResolution(x: number, y: number): GetActiveScreenResolutionResult;
	getScreenAspectRatio(b: boolean): number;
	setBlackout(state: boolean): void;
	setFarShadowsSuppressed(toggle: boolean): void;
	transitionToBlurred(transitionTime: number): boolean;
	transitionFromBlurred(transitionTime: number): boolean;
	setFrozenRenderingDisabled(toggle: boolean): void;
	startParticleFxNonLoopedAtCoord2(
		effectName: string,
		xPos: number,
		yPos: number,
		zPos: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p11: boolean
	): boolean;
	startParticleFxNonLoopedOnPedBone2(
		effectName: string,
		ped: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		boneIndex: number,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;
	startParticleFxNonLoopedOnEntity2(
		effectName: string,
		entity: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;
	startParticleFxLoopedOnEntityBone(
		effectName: string,
		entity: number,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		boneIndex: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean
	): number;
	startParticleFxLoopedOnEntity2(
		effectName: string,
		entity: number,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p12: number,
		p13: number,
		p14: number,
		p15: number
	): number;
	startParticleFxLoopedOnEntityBone2(
		effectName: string,
		entity: number,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		boneIndex: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p13: number,
		p14: number,
		p15: number,
		p16: number
	): number;
	setParticleFxLoopedRange(ptfxHandle: number, range: number): void;
	setPtfxAssetNextCall(name: string): void;
	setPtfxAssetOldToNew(oldAsset: string, newAsset: string): void;
	requestScaleformMovie3(scaleformName: string): number;
	hasNamedScaleformMovieLoaded(scaleformName: string): boolean;
	callScaleformMovieFunctionFloatParams(
		scaleform: number,
		methodName: string,
		param1: number,
		param2: number,
		param3: number,
		param4: number,
		param5: number
	): void;
	callScaleformMovieFunctionStringParams(
		scaleform: number,
		methodName: string,
		param1: string,
		param2: string,
		param3: string,
		param4: string,
		param5: string
	): void;
	callScaleformMovieFunctionMixedParams(
		scaleform: number,
		methodName: string,
		floatParam1: number,
		floatParam2: number,
		floatParam3: number,
		floatParam4: number,
		floatParam5: number,
		stringParam1: string,
		stringParam2: string,
		stringParam3: string,
		stringParam4: string,
		stringParam5: string
	): void;
	pushScaleformMovieFunctionFromHudComponent(hudComponent: number, methodName: string): boolean;
	pushScaleformMovieFunction(scaleform: number, methodName: string): boolean;
	pushScaleformMovieFunctionN(methodName: string): boolean;
	popScaleformMovieFunctionVoid(): void;
	popScaleformMovieFunction(): number;
	sittingTv(methodReturn: number): string;
	pushScaleformMovieFunctionParameterInt(value: number): void;
	pushScaleformMovieFunctionParameterFloat(value: number): void;
	pushScaleformMovieFunctionParameterBool(value: boolean): void;
	beginTextComponent(componentType: string): void;
	endTextComponent(): void;
	pushScaleformMovieFunctionParameterString(string: string): void;
	requestHudScaleform(hudComponent: number): void;
	hasHudScaleformLoaded(hudComponent: number): boolean;
	loadTvChannel(videoCliphash: number): boolean;
	startScreenEffect(effectName: string, duration: number, looped: boolean): void;
	stopScreenEffect(effectName: string): void;
	getScreenEffectIsActive(effectName: string): boolean;
	stopAllScreenEffects(): void;
}

declare interface GameGraphics extends GameGraphicsLegacy {
	setDebugLinesAndSpheresDrawingActive(enabled: boolean): void;
	drawDebugLine(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
	drawDebugLineWithTwoColours(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		r1: number,
		g1: number,
		b1: number,
		r2: number,
		g2: number,
		b2: number,
		alpha1: number,
		alpha2: number
	): void;
	drawDebugSphere(x: number, y: number, z: number, radius: number, red: number, green: number, blue: number, alpha: number): void;
	drawDebugBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
	drawDebugCross(x: number, y: number, z: number, size: number, red: number, green: number, blue: number, alpha: number): void;
	drawDebugText(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;
	drawDebugText2D(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;
	drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
	drawPoly(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number,
		red: number,
		green: number,
		blue: number,
		alpha: number
	): void;
	drawSpritePoly(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
		textureDict: string,
		textureName: string,
		u1: number,
		v1: number,
		w1: number,
		u2: number,
		v2: number,
		w2: number,
		u3: number,
		v3: number,
		w3: number
	): void;
	drawSpritePoly2(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number,
		red1: number,
		green1: number,
		blue1: number,
		alpha1: number,
		red2: number,
		green2: number,
		blue2: number,
		alpha2: number,
		red3: number,
		green3: number,
		blue3: number,
		alpha3: number,
		textureDict: string,
		textureName: string,
		u1: number,
		v1: number,
		w1: number,
		u2: number,
		v2: number,
		w2: number,
		u3: number,
		v3: number,
		w3: number
	): void;
	drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
	setBackfaceculling(toggle: boolean): void;
	beginTakeMissionCreatorPhoto(): number;
	getStatusOfTakeMissionCreatorPhoto(): number;
	freeMemoryForMissionCreatorPhoto(): void;
	loadMissionCreatorPhoto(p1: number, p2: number, p3: number): number;
	getStatusOfLoadMissionCreatorPhoto(): GetStatusOfLoadMissionCreatorPhotoResult;
	beginTakeHighQualityPhoto(): boolean;
	getStatusOfTakeHighQualityPhoto(): number;
	freeMemoryForHighQualityPhoto(): void;
	saveHighQualityPhoto(unused: number): boolean;
	getStatusOfSaveHighQualityPhoto(): number;
	freeMemoryForLowQualityPhoto(): void;
	drawLowQualityPhotoToPhone(p0: boolean, p1: boolean): void;
	getMaximumNumberOfPhotos(): number;
	getMaximumNumberOfCloudPhotos(): number;
	getCurrentNumberOfCloudPhotos(): number;
	getStatusOfSortedListOperation(p0: number): number;
	returnTwo(p0: number): number;
	drawLightWithRangeAndShadow(
		x: number,
		y: number,
		z: number,
		r: number,
		g: number,
		b: number,
		range: number,
		intensity: number,
		shadow: number
	): void;
	drawLightWithRange(
		posX: number,
		posY: number,
		posZ: number,
		colorR: number,
		colorG: number,
		colorB: number,
		range: number,
		intensity: number
	): void;
	drawSpotLight(
		posX: number,
		posY: number,
		posZ: number,
		dirX: number,
		dirY: number,
		dirZ: number,
		colorR: number,
		colorG: number,
		colorB: number,
		distance: number,
		brightness: number,
		hardness: number,
		radius: number,
		falloff: number
	): void;
	drawSpotLightWithShadow(
		posX: number,
		posY: number,
		posZ: number,
		dirX: number,
		dirY: number,
		dirZ: number,
		colorR: number,
		colorG: number,
		colorB: number,
		distance: number,
		brightness: number,
		roundness: number,
		radius: number,
		falloff: number,
		shadowId: number
	): void;
	fadeUpPedLight(p0: number): void;
	updateLightsOnEntity(entity: number): void;
	drawMarker(
		type: number,
		posX: number,
		posY: number,
		posZ: number,
		dirX: number,
		dirY: number,
		dirZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
		bobUpAndDown: boolean,
		faceCamera: boolean,
		p19: number,
		rotate: boolean,
		textureDict: string | null,
		textureName: string | null,
		drawOnEnts: boolean
	): void;
	drawMarker2(
		type: number,
		posX: number,
		posY: number,
		posZ: number,
		dirX: number,
		dirY: number,
		dirZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
		bobUpAndDown: boolean,
		faceCamera: boolean,
		p19: number,
		rotate: boolean,
		textureDict: string | null,
		textureName: string | null,
		drawOnEnts: boolean,
		p24: boolean,
		p25: boolean
	): void;
	drawSphere(x: number, y: number, z: number, radius: number, red: number, green: number, blue: number, alpha: number): void;
	createCheckpoint(
		type: number,
		posX1: number,
		posY1: number,
		posZ1: number,
		posX2: number,
		posY2: number,
		posZ2: number,
		diameter: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
		reserved: number
	): number;
	setCheckpointScale(checkpoint: number, p0: number): void;
	setCheckpointIconScale(checkpoint: number, scale: number): void;
	setCheckpointCylinderHeight(checkpoint: number, nearHeight: number, farHeight: number, radius: number): void;
	setCheckpointRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;
	setCheckpointRgba2(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;
	deleteCheckpoint(checkpoint: number): void;
	dontRenderInGameUi(p0: boolean): void;
	forceRenderInGameUi(toggle: boolean): void;
	requestStreamedTextureDict(textureDict: string, p1: boolean): void;
	hasStreamedTextureDictLoaded(textureDict: string): boolean;
	setStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;
	drawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a: number, p8: boolean): void;
	setScriptGfxDrawBehindPausemenu(toggle: boolean): void;
	setScriptGfxDrawOrder(drawOrder: number): void;
	setScriptGfxAlign(horizontalAlign: number, verticalAlign: number): void;
	resetScriptGfxAlign(): void;
	setScriptGfxAlignParams(x: number, y: number, w: number, h: number): void;
	getScriptGfxPosition(x: number, y: number): GetScriptGfxPositionResult;
	getSafeZoneSize(): number;
	drawSprite(
		textureDict: string,
		textureName: string,
		screenX: number,
		screenY: number,
		width: number,
		height: number,
		heading: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
		p11: boolean
	): void;
	drawInteractiveSprite(
		textureDict: string,
		textureName: string,
		screenX: number,
		screenY: number,
		width: number,
		height: number,
		heading: number,
		red: number,
		green: number,
		blue: number,
		alpha: number
	): void;
	drawSpriteUv(
		textureDict: string,
		textureName: string,
		x: number,
		y: number,
		width: number,
		height: number,
		u1: number,
		v1: number,
		u2: number,
		v2: number,
		heading: number,
		red: number,
		green: number,
		blue: number,
		alpha: number
	): void;
	addEntityIcon(entity: number, icon: string): number;
	setEntityIconVisibility(entity: number, toggle: boolean): void;
	setEntityIconColor(entity: number, red: number, green: number, blue: number, alpha: number): void;
	setDrawOrigin(x: number, y: number, z: number, p3: number): void;
	clearDrawOrigin(): void;
	setBinkMovie(name: string): number;
	playBinkMovie(binkMovie: number): void;
	stopBinkMovie(binkMovie: number): void;
	releaseBinkMovie(binkMovie: number): void;
	drawBinkMovie(binkMovie: number, p1: number, p2: number, p3: number, p4: number, p5: number, r: number, g: number, b: number, a: number): void;
	setBinkMovieTime(binkMovie: number, progress: number): void;
	getBinkMovieTime(binkMovie: number): number;
	setBinkMovieVolume(binkMovie: number, value: number): void;
	attachTvAudioToEntity(entity: number): void;
	setBinkMovieUnk2(binkMovie: number, p1: boolean): void;
	setTvAudioFrontend(toggle: boolean): void;
	setBinkShouldSkip(binkMovie: number, bShouldSkip: boolean): void;
	loadMovieMeshSet(movieMeshSetName: string): number;
	releaseMovieMeshSet(movieMeshSet: number): void;
	queryMovieMeshSetState(p0: number): number;
	getScreenResolution(): GetScreenResolutionResult;
	getActiveScreenResolution(): GetActiveScreenResolutionResult;
	getAspectRatio(b: boolean): number;
	getIsWidescreen(): boolean;
	getIsHidef(): boolean;
	setNightvision(toggle: boolean): void;
	getRequestingnightvision(): boolean;
	getUsingnightvision(): boolean;
	setNoiseoveride(toggle: boolean): void;
	setNoisinessoveride(value: number): void;
	getScreenCoordFromWorldCoord(worldX: number, worldY: number, worldZ: number): GetScreenCoordFromWorldCoordResult;
	getTextureResolution(textureDict: string, textureName: string): Vector3;
	overridePedBadgeTexture(ped: number, txd: string, txn: string): boolean;
	setFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number): void;
	disableOcclusionThisFrame(): void;
	setArtificialLightsState(state: boolean): void;
	setArtificialLightsStateAffectsVehicles(toggle: boolean): void;
	createTrackedPoint(): number;
	setTrackedPointInfo(point: number, x: number, y: number, z: number, radius: number): void;
	isTrackedPointVisible(point: number): boolean;
	destroyTrackedPoint(point: number): void;
	grassLodShrinkScriptAreas(x: number, y: number, z: number, radius: number, p4: number, p5: number, p6: number): void;
	grassLodResetScriptAreas(): void;
	cascadeShadowsInitSession(): void;
	cascadeShadowsSetCascadeBounds(p0: number, p1: boolean, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number): void;
	cascadeShadowsSetCascadeBoundsScale(p0: number): void;
	cascadeShadowsSetEntityTrackerScale(p0: number): void;
	cascadeShadowsEnableEntityTracker(toggle: boolean): void;
	cascadeShadowsSetShadowSampleType(type: string): void;
	cascadeShadowsClearShadowSampleType(): void;
	cascadeShadowsSetAircraftMode(p0: boolean): void;
	cascadeShadowsSetDynamicDepthMode(p0: boolean): void;
	cascadeShadowsSetDynamicDepthValue(p0: number): void;
	golfTrailSetEnabled(toggle: boolean): void;
	golfTrailSetPath(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean): void;
	golfTrailSetRadius(p0: number, p1: number, p2: number): void;
	golfTrailSetColour(
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
	): void;
	golfTrailSetTessellation(p0: number, p1: number): void;
	golfTrailSetFixedControlPoint(
		type: number,
		xPos: number,
		yPos: number,
		zPos: number,
		p4: number,
		red: number,
		green: number,
		blue: number,
		alpha: number
	): void;
	golfTrailSetShaderParams(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	golfTrailSetFacing(p0: boolean): void;
	golfTrailGetMaxHeight(): number;
	golfTrailGetVisualControlPoint(p0: number): Vector3;
	setSeethrough(toggle: boolean): void;
	getUsingseethrough(): boolean;
	seethroughReset(): void;
	seethroughSetFadeStartDistance(distance: number): void;
	seethroughSetFadeEndDistance(distance: number): void;
	seethroughGetMaxThickness(): number;
	seethroughSetMaxThickness(thickness: number): void;
	seethroughSetNoiseAmountMin(amount: number): void;
	seethroughSetNoiseAmountMax(amount: number): void;
	seethroughSetHiLightIntensity(intensity: number): void;
	seethroughSetHiLightNoise(noise: number): void;
	seethroughSetHeatscale(index: number, heatScale: number): void;
	seethroughSetColorNear(red: number, green: number, blue: number): void;
	triggerScreenblurFadeIn(transitionTime: number): boolean;
	triggerScreenblurFadeOut(transitionTime: number): boolean;
	disableScreenblurFade(): void;
	getScreenblurFadeCurrentTime(): number;
	isScreenblurFadeRunning(): boolean;
	togglePausedRenderphases(toggle: boolean): void;
	getTogglePausedRenderphasesStatus(): boolean;
	resetPausedRenderphases(): void;
	setHidofEnvBlurParams(p0: boolean, p1: boolean, nearplaneOut: number, nearplaneIn: number, farplaneOut: number, farplaneIn: number): void;
	startParticleFxNonLoopedAtCoord(
		effectName: string,
		xPos: number,
		yPos: number,
		zPos: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean
	): number;
	startNetworkedParticleFxNonLoopedAtCoord(
		effectName: string,
		xPos: number,
		yPos: number,
		zPos: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p11: boolean
	): boolean;
	startParticleFxNonLoopedOnPedBone(
		effectName: string,
		ped: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		boneIndex: number,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;
	startNetworkedParticleFxNonLoopedOnPedBone(
		effectName: string,
		ped: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		boneIndex: number,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;
	startParticleFxNonLoopedOnEntity(
		effectName: string,
		entity: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;
	startNetworkedParticleFxNonLoopedOnEntity(
		effectName: string,
		entity: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;
	startNetworkedParticleFxNonLoopedOnEntityBone(
		effectName: string,
		entity: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		boneIndex: number,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;
	setParticleFxNonLoopedColour(r: number, g: number, b: number): void;
	setParticleFxNonLoopedAlpha(alpha: number): void;
	startParticleFxLoopedAtCoord(
		effectName: string,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p11: boolean
	): number;
	startParticleFxLoopedOnPedBone(
		effectName: string,
		ped: number,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		boneIndex: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean
	): number;
	startParticleFxLoopedOnEntity(
		effectName: string,
		entity: number,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean
	): number;
	startParticleFxLoopedOnEntityBone(
		effectName: string,
		entity: number,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		boneIndex: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean
	): number;
	startNetworkedParticleFxLoopedOnEntity(
		effectName: string,
		entity: number,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p12: number,
		p13: number,
		p14: number,
		p15: number
	): number;
	startNetworkedParticleFxLoopedOnEntityBone(
		effectName: string,
		entity: number,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		boneIndex: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p13: number,
		p14: number,
		p15: number,
		p16: number
	): number;
	stopParticleFxLooped(ptfxHandle: number, p1: boolean): void;
	removeParticleFx(ptfxHandle: number, p1: boolean): void;
	removeParticleFxFromEntity(entity: number): void;
	removeParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;
	doesParticleFxLoopedExist(ptfxHandle: number): boolean;
	setParticleFxLoopedOffsets(ptfxHandle: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;
	setParticleFxLoopedEvolution(ptfxHandle: number, propertyName: string, amount: number, noNetwork: boolean): void;
	setParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number, p4: boolean): void;
	setParticleFxLoopedAlpha(ptfxHandle: number, alpha: number): void;
	setParticleFxLoopedScale(ptfxHandle: number, scale: number): void;
	setParticleFxLoopedFarClipDist(ptfxHandle: number, range: number): void;
	setParticleFxCamInsideVehicle(p0: boolean): void;
	setParticleFxCamInsideNonplayerVehicle(vehicle: number, p1: boolean): void;
	setParticleFxShootoutBoat(p0: number): void;
	enableClownBloodVfx(toggle: boolean): void;
	enableAlienBloodVfx(toggle: boolean): void;
	setParticleFxBulletImpactScale(scale: number): void;
	useParticleFxAsset(name: string): void;
	setParticleFxOverride(oldAsset: string, newAsset: string): void;
	resetParticleFxOverride(name: string): void;
	washDecalsInRange(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	washDecalsFromVehicle(vehicle: number, p1: number): void;
	fadeDecalsInRange(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	removeDecalsInRange(x: number, y: number, z: number, range: number): void;
	removeDecalsFromObject(obj: number): void;
	removeDecalsFromObjectFacing(obj: number, x: number, y: number, z: number): void;
	removeDecalsFromVehicle(vehicle: number): void;
	addDecal(
		decalType: number,
		posX: number,
		posY: number,
		posZ: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		width: number,
		height: number,
		rCoef: number,
		gCoef: number,
		bCoef: number,
		opacity: number,
		timeout: number,
		p17: boolean,
		p18: boolean,
		p19: boolean
	): number;
	addPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): number;
	startPetrolTrailDecals(p0: number): void;
	addPetrolTrailDecalInfo(x: number, y: number, z: number, p3: number): void;
	endPetrolTrailDecals(): void;
	removeDecal(decal: number): void;
	isDecalAlive(decal: number): boolean;
	getDecalWashLevel(decal: number): number;
	setDisableDecalRenderingThisFrame(): void;
	getIsPetrolDecalInRange(xCoord: number, yCoord: number, zCoord: number, radius: number): boolean;
	patchDecalDiffuseMap(decalType: number, textureDict: string, textureName: string): void;
	unpatchDecalDiffuseMap(decalType: number): void;
	moveVehicleDecals(p0: number, p1: number): void;
	addVehicleCrewEmblem(
		vehicle: number,
		ped: number,
		boneIndex: number,
		x1: number,
		x2: number,
		x3: number,
		y1: number,
		y2: number,
		y3: number,
		z1: number,
		z2: number,
		z3: number,
		scale: number,
		p13: number,
		alpha: number
	): boolean;
	removeVehicleCrewEmblem(vehicle: number, p1: number): void;
	getVehicleCrewEmblemRequestState(vehicle: number, p1: number): number;
	doesVehicleHaveCrewEmblem(vehicle: number, p1: number): boolean;
	overrideInteriorSmokeName(name: string): void;
	overrideInteriorSmokeLevel(level: number): void;
	overrideInteriorSmokeEnd(): void;
	registerNoirScreenEffectThisFrame(): void;
	disableVehicleDistantlights(toggle: boolean): void;
	setForcePedFootstepsTracks(toggle: boolean): void;
	setForceVehicleTrails(toggle: boolean): void;
	disableScriptAmbientEffects(p0: number): void;
	presetInteriorAmbientCache(timecycleModifierName: string): void;
	setTimecycleModifier(modifierName: string): void;
	setTimecycleModifierStrength(strength: number): void;
	setTransitionTimecycleModifier(modifierName: string, transition: number): void;
	clearTimecycleModifier(): void;
	getTimecycleModifierIndex(): number;
	getTimecycleTransitionModifierIndex(): number;
	pushTimecycleModifier(): void;
	popTimecycleModifier(): void;
	setCurrentPlayerTcmodifier(modifierName: string): void;
	setPlayerTcmodifierTransition(value: number): void;
	setNextPlayerTcmodifier(modifierName: string): void;
	addTcmodifierOverride(modifierName1: string, modifierName2: string): void;
	removeTcmodifierOverride(p0: string): void;
	setExtraTimecycleModifier(modifierName: string): void;
	clearExtraTimecycleModifier(): void;
	getExtraTimecycleModifierIndex(): number;
	setExtraTimecycleModifierStrength(strength: number): void;
	resetExtraTimecycleModifierStrength(): void;
	requestScaleformMovie(scaleformName: string): number;
	requestScaleformMovie2(scaleformName: string): number;
	requestScaleformMovieInstance(scaleformName: string): number;
	requestScaleformMovieInteractive(scaleformName: string): number;
	hasScaleformMovieLoaded(scaleformHandle: number): boolean;
	hasScaleformMovieFilenameLoaded(scaleformName: string): boolean;
	hasScaleformContainerMovieLoadedIntoParent(scaleformHandle: number): boolean;
	setScaleformMovieAsNoLongerNeeded(scaleformHandle: number): number;
	setScaleformMovieToUseSystemTime(scaleform: number, toggle: boolean): void;
	setScaleformFitRendertarget(scaleformHandle: number, toggle: boolean): void;
	drawScaleformMovie(
		scaleformHandle: number,
		x: number,
		y: number,
		width: number,
		height: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
		unk: number
	): void;
	drawScaleformMovieFullscreen(scaleform: number, red: number, green: number, blue: number, alpha: number, unk: number): void;
	drawScaleformMovieFullscreenMasked(scaleform1: number, scaleform2: number, red: number, green: number, blue: number, alpha: number): void;
	drawScaleformMovie3D(
		scaleform: number,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		p7: number,
		p8: number,
		p9: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		p13: number
	): void;
	drawScaleformMovie3DNonAdditive(
		scaleform: number,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		p7: number,
		p8: number,
		p9: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		p13: number
	): void;
	drawScaleformMovie3DSolid(
		scaleform: number,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		p7: number,
		p8: number,
		p9: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		p13: number
	): void;
	callScaleformMovieMethod(scaleform: number, method: string): void;
	callScaleformMovieMethodWithNumber(
		scaleform: number,
		methodName: string,
		param1: number,
		param2: number,
		param3: number,
		param4: number,
		param5: number
	): void;
	callScaleformMovieMethodWithString(
		scaleform: number,
		methodName: string,
		param1: string,
		param2: string,
		param3: string,
		param4: string,
		param5: string
	): void;
	callScaleformMovieMethodWithNumberAndString(
		scaleform: number,
		methodName: string,
		floatParam1: number,
		floatParam2: number,
		floatParam3: number,
		floatParam4: number,
		floatParam5: number,
		stringParam1: string,
		stringParam2: string,
		stringParam3: string,
		stringParam4: string,
		stringParam5: string
	): void;
	beginScaleformScriptHudMovieMethod(hudComponent: number, methodName: string): boolean;
	beginScaleformMovieMethod(scaleform: number, methodName: string): boolean;
	beginScaleformMovieMethodOnFrontend(methodName: string): boolean;
	beginScaleformMovieMethodOnFrontendHeader(methodName: string): boolean;
	endScaleformMovieMethod(): void;
	endScaleformMovieMethodReturnValue(): number;
	isScaleformMovieMethodReturnValueReady(methodReturn: number): boolean;
	getScaleformMovieMethodReturnValueInt(methodReturn: number): number;
	getScaleformMovieMethodReturnValueBool(methodReturn: number): boolean;
	getScaleformMovieMethodReturnValueString(methodReturn: number): string;
	scaleformMovieMethodAddParamInt(value: number): void;
	scaleformMovieMethodAddParamFloat(value: number): void;
	scaleformMovieMethodAddParamBool(value: boolean): void;
	beginTextCommandScaleformString(componentType: string): void;
	endTextCommandScaleformString(): void;
	endTextCommandScaleformString2(): void;
	scaleformMovieMethodAddParamTextureNameString2(string: string): void;
	scaleformMovieMethodAddParamTextureNameString(string: string): void;
	scaleformMovieMethodAddParamPlayerNameString(string: string): void;
	scaleformMovieMethodAddParamLatestBriefString(value: number): void;
	requestScaleformScriptHudMovie(hudComponent: number): void;
	hasScaleformScriptHudMovieLoaded(hudComponent: number): boolean;
	removeScaleformScriptHudMovie(hudComponent: number): void;
	setTvChannel(channel: number): void;
	getTvChannel(): number;
	setTvVolume(volume: number): void;
	getTvVolume(): number;
	drawTvChannel(
		xPos: number,
		yPos: number,
		xScale: number,
		yScale: number,
		rotation: number,
		red: number,
		green: number,
		blue: number,
		alpha: number
	): void;
	setTvChannelPlaylist(tvChannel: number, playlistName: string, restart: boolean): void;
	setTvChannelPlaylistAtHour(tvChannel: number, playlistName: string, hour: number): void;
	clearTvChannelPlaylist(tvChannel: number): void;
	isPlaylistUnk(tvChannel: number, p1: number): boolean;
	isTvPlaylistItemPlaying(videoCliphash: number): boolean;
	enableMovieKeyframeWait(toggle: boolean): void;
	enableMovieSubtitles(toggle: boolean): void;
	ui3DsceneIsAvailable(): boolean;
	ui3DscenePushPreset(presetName: string): boolean;
	terraingridActivate(toggle: boolean): void;
	terraingridSetParams(
		x: number,
		y: number,
		z: number,
		p3: number,
		rotation: number,
		p5: number,
		width: number,
		height: number,
		p8: number,
		scale: number,
		glowIntensity: number,
		normalHeight: number,
		heightDiff: number
	): void;
	terraingridSetColours(
		lowR: number,
		lowG: number,
		lowB: number,
		lowAlpha: number,
		r: number,
		g: number,
		b: number,
		alpha: number,
		highR: number,
		highG: number,
		highB: number,
		highAlpha: number
	): void;
	animpostfxPlay(effectName: string, duration: number, looped: boolean): void;
	animpostfxStop(effectName: string): void;
	animpostfxGetUnk(effectName: string): number;
	animpostfxIsRunning(effectName: string): boolean;
	animpostfxStopAll(): void;
	animpostfxStopAndDoUnk(effectName: string): void;

	/**
	 * Convert a world coordinate into its relative screen coordinate. (WorldToScreen)
	 *
	 * Inverted function [Graphics::screen2dToWorld3d](https://wiki.rage.mp/index.php?title=Graphics::screen2dToWorld3d)
	 *
	 * @param coords3d Vector3
	 */
	world3dToScreen2d(coords3d: Vector3): { x: number; y: number };

	/**
	 * Returns world position from screen position
	 *
	 * Inverted function: [Graphics::world3dToScreen2d](https://wiki.rage.mp/index.php?title=Graphics::world3dToScreen2d)
	 *
	 * @param coords2d Vector3 only { x, y }
	 */
	screen2dToWorld3d(coords2d: Vector3): Vector3;

	drawText(
		text: string,
		pos: Array2d | Array3d,
		data?: {
			font?: number;
			color?: RGBA;
			scale?: Array2d;
			outline?: boolean;
			centre?: boolean;
		}
	): void;

	/**
	 * This function sends a notification message to the player.
	 *
	 * You can also use the colour codes seen here: Fonts and colors
	 */
	notify(message: string): void;

	/**
	 * This function allows you to disable the state of an artificial lightId (granular control over lights instead of e.g. setBlackout turning all on/off)
	 * 
	 * @param lightId The lightId (valid 0 through 16) to change the state of
	 * @param disable true to disable; false to enable (defaults to false)
	 */
	setLightsState(lightId: number, disable: boolean): void

	/**
	 * @param layer Only layer 4 works
	 */
	set2dLayer(layer: number): void

	unk: GameGraphicsUnk;
}

declare interface GameGraphicsMp extends GameGraphics {}
