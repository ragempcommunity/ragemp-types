declare interface GameCamLegacy {
	/**
	 * @deprecated Native DB added sixth parameter, just set it to 0.
	 */
	renderScriptCams(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean): void;
	renderScriptCams(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean, p5: number): void;
	createCam(camName: string, p1: boolean): number;
	createCamWithParams(
		camName: string,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		fov: number,
		p8: boolean,
		p9: number
	): number;
	createCamera(camHash: number, p1: boolean): number;
	createCameraWithParams(
		camHash: number,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		fov: number,
		p8: boolean,
		p9: number
	): number;
	destroyAllCams(bScriptHostCam: boolean): void;
	addCamSplineNode(
		camera: number,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		length: number,
		p8: number,
		p9: number
	): void;
	setCamSplinePhase(cam: number, p1: number): void;
	getCamSplineNodePhase(cam: number): number;
	setCamSplineDuration(cam: number, timeDuration: number): void;
	getCamSplineNodeIndex(cam: number): number;
	overrideCamSplineVelocity(cam: number, p1: number, p2: number, p3: number): void;
	overrideCamSplineMotionBlur(cam: number, p1: number, p2: number, p3: number): void;
	isCamSplinePaused(p0: number): boolean;
	playSynchronizedCamAnim(p0: number, p1: number, animName: string, animDictionary: string): boolean;
	getGameplayCamRot(rotationOrder: number): Vector3;
	getGameplayCamRelativeHeading(): number;
	setGameplayCamRelativeHeading(heading: number): void;
	setGameplayCamRelativePitch(angle: number, scalingFactor: number): void;
	setGameplayCamRawYaw(yaw: number): void;
	setGameplayCamRawPitch(pitch: number): void;
	shakeGameplayCam(shakeName: string, intensity: number): void;
	setGameplayCamShakeAmplitude(amplitude: number): void;
	stopGameplayCamShaking(p0: boolean): void;
	setFollowPedCamCutsceneChat(camName: string, p1: number): boolean;
	clampGameplayCamYaw(minimum: number, maximum: number): void;
	clampGameplayCamPitch(minimum: number, maximum: number): void;
	animateGameplayCamZoom(p0: number, distance: number): void;
	setFollowPedCamViewMode(viewMode: number): void;
	setFollowVehicleCamZoomLevel(zoomLevel: number): void;
	setFollowVehicleCamViewMode(viewMode: number): void;
	getGameplayCamRot(rotationOrder: number): Vector3;
	getIsMultiplayerBrief(toggle: boolean): void;
	shakeCinematicCam(p0: string, p1: number): void;
	setCinematicCamShakeAmplitude(p0: number): void;
	stopCinematicCamShaking(p0: boolean): void;
	setCamEffect(p0: number): void;
}

declare interface GameCamUnk {
	_0xAABD62873FFB1A33(p0: number, p1: number): void;
	_0xF55E4046F6F831DC(p0: number, p1: number): void;
	_0xE111A7C0D200CBC5(p0: number, p1: number): void;
	_0x202A5ED9CE01D6E7(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;
	_0x661B5C8654ADD825(cam: number, p1: boolean): void;
	_0xA2767257A320FC82(p0: number, p1: boolean): void;
	_0x271017B9BA825366(p0: number, p1: boolean): void;
	_0x5D96CFB59DA076A0(vehicle: number, p1: number, p2: number): void;
	_0xC8B5C4A79CC18B94(cam: number): void;
	_0x5C48A1D6E3B33179(cam: number): boolean;
	_0x4879E4FE39074CDF(): boolean;
	_0x487A82C650EB7799(p0: number): void;
	_0x0225778816FDC28C(p0: number): void;
	_0x28B022A17B068A3A(p0: number, p1: number): void;
	_0x469F2ECDEC046337(p0: boolean): void;
	_0x3044240D2E0FA842(): boolean;
	_0x705A276EBFF3133D(): boolean;
	_0xDB90C6CCA48940F1(p0: boolean): void;
	_0xA7092AFE81944852(): void;
	_0xFD3151CD37EA2245(entity: number): void;
	_0xB1381B97F70C7B30(): void;
	_0xDD79DF9F4D26E1C9(): void;
	_0x271401846BD26E92(p0: boolean, p1: boolean): void;
	_0xC8391C309684595A(): void;
	_0x59424BD75174C9B1(): void;
	_0x9F97DA93681F87EA(): void;
	_0x91EF6EE6419E5B97(p0: boolean): void;
	_0x9DFE13ECDC1EC196(p0: boolean, p1: boolean): void;
	_0x79C0E43EB9B944E2(hash: number): boolean;
	_0xEE778F8C7E1142E2(p0: number): number;
	_0x2A2173E46DAECD12(p0: number, p1: number): void;
	_0x19CAFA3C87F7C2FF(): number;
	_0x0AA27680A0BD43FA(): void;
	_0xCED08CBE8EBB97C7(p0: number, p1: number): void;
	_0x2F7F2B26DD3F18EE(p0: number, p1: number): void;
	_0x4008EDF7D6E48175(p0: boolean): void;
	_0x380B4968D1E09E55(): void;
	_0xCCD078C2665D2973(p0: boolean): void;
	_0x247ACBC4ABBC9D1C(p0: boolean): void;
	_0xBF72910D0F26F025(): number;
	_0x62ECFCFDEE7885D6(): void;
	_0xDC9DA9E8789F5246(): void;
	_0x1F2300CB7FA7B7F6(): number;
	_0x17FCA7199A530203(): number;
	_0xD7360051C885628B(): number;
	_0x7B8A361C1813FBEF(): void;
	_0x324C5AA411DA7737(p0: number): void;
	_0x12DED8CA53D47EA5(p0: number): void;
	_0x5A43C76F7FC7BA5F(): void;
	_0x5C41E6BABC9E2112(p0: number): void;
	_0xEAF0FA793D05C592(): number;
	_0x62374889A4D59F72(): void;
}

declare interface GameCam extends GameCamLegacy {
	renderScriptS(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean, p5: number): void;
	stopRenderingScriptCamsUsingCatchUp(render: boolean, p1: number, p2: number, p3: number): void;
	create(camName: string, p1: boolean): number;
	createWithParams(
		camName: string,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		fov: number,
		p8: boolean,
		p9: number
	): number;
	createEra(camHash: number, p1: boolean): number;
	createEraWithParams(
		camHash: number,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		fov: number,
		p8: boolean,
		p9: number
	): number;
	destroy(cam: number, bScriptHostCam: boolean): void;
	destroyAllS(bScriptHostCam: boolean): void;
	doesExist(cam: number): boolean;
	setActive(cam: number, active: boolean): void;
	isActive(cam: number): boolean;
	isRendering(cam: number): boolean;
	getRendering(): number;
	getCoord(cam: number): Vector3;
	getRot(cam: number, rotationOrder: number): Vector3;
	getFov(cam: number): number;
	getNearClip(cam: number): number;
	getFarClip(cam: number): number;
	getFarDof(cam: number): number;
	setParams(
		cam: number,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		fieldOfView: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number
	): void;
	setCoord(cam: number, posX: number, posY: number, posZ: number): void;
	setRot(cam: number, rotX: number, rotY: number, rotZ: number, rotationOrder: number): void;
	setFov(cam: number, fieldOfView: number): void;
	setNearClip(cam: number, nearClip: number): void;
	setFarClip(cam: number, farClip: number): void;
	setMotionBlurStrength(cam: number, strength: number): void;
	setNearDof(cam: number, nearDOF: number): void;
	setFarDof(cam: number, farDOF: number): void;
	setDofStrength(cam: number, dofStrength: number): void;
	setDofPlanes(cam: number, p1: number, p2: number, p3: number, p4: number): void;
	setUseShallowDofMode(cam: number, toggle: boolean): void;
	setUseHiDof(): void;
	setDofFnumberOfLens(camera: number, p1: number): void;
	setDofFocalLengthMultiplier(camera: number, multiplier: number): void;
	setDofFocusDistanceBias(camera: number, p1: number): void;
	setDofMaxNearInFocusDistance(camera: number, p1: number): void;
	setDofMaxNearInFocusDistanceBlendLevel(camera: number, p1: number): void;
	attachToEntity(cam: number, entity: number, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;
	attachToPedBone(cam: number, ped: number, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;
	attachToPedBone2(
		cam: number,
		ped: number,
		boneIndex: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: boolean
	): void;
	attachToVehicleBone(
		cam: number,
		vehicle: number,
		boneIndex: number,
		relativeRotation: boolean,
		rotX: number,
		rotY: number,
		rotZ: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		fixedDirection: boolean
	): void;
	detach(cam: number): void;
	setInheritRollVehicle(cam: number, p1: boolean): void;
	pointAtCoord(cam: number, x: number, y: number, z: number): void;
	pointAtEntity(cam: number, entity: number, p2: number, p3: number, p4: number, p5: boolean): void;
	pointAtPedBone(cam: number, ped: number, boneIndex: number, x: number, y: number, z: number, p6: boolean): void;
	stopPointing(cam: number): void;
	setAffectsAiming(cam: number, toggle: boolean): void;
	setDebugName(camera: number, name: string): void;
	addSplineNode(
		camera: number,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		length: number,
		p8: number,
		p9: number
	): void;
	addSplineNodeUsingCameraFrame(cam: number, cam2: number, p2: number, p3: number): void;
	addSplineNodeUsingCamera(cam: number, cam2: number, p2: number, p3: number): void;
	addSplineNodeUsingGameplayFrame(cam: number, p1: number, p2: number): void;
	setSplinePhase(cam: number, p1: number): void;
	getSplinePhase(cam: number): number;
	getSplineNodePhase(cam: number): number;
	setSplineDuration(cam: number, timeDuration: number): void;
	setSplineSmoothingStyle(cam: number, smoothingStyle: number): void;
	getSplineNodeIndex(cam: number): number;
	setSplineNodeEase(cam: number, p1: number, p2: number, p3: number): void;
	setSplineNodeVelocityScale(cam: number, p1: number, scale: number): void;
	overrideSplineVelocity(cam: number, p1: number, p2: number, p3: number): void;
	overrideSplineMotionBlur(cam: number, p1: number, p2: number, p3: number): void;
	setSplineNodeExtraFlags(cam: number, p1: number, flags: number): void;
	isSplinePaused(p0: number): boolean;
	setActiveWithInterp(camTo: number, camFrom: number, duration: number, easeLocation: number, easeRotation: number): void;
	isInterpolating(cam: number): boolean;
	shake(cam: number, type: string, amplitude: number): void;
	animatedShake(cam: number, p1: string, p2: string, p3: string, amplitude: number): void;
	isShaking(cam: number): boolean;
	setShakeAmplitude(cam: number, amplitude: number): void;
	stopShaking(cam: number, p1: boolean): void;
	shakeScriptGlobal(p0: string, p1: number): void;
	animatedShakeScriptGlobal(p0: string, p1: string, p2: string, p3: number): void;
	isScriptGlobalShaking(): boolean;
	stopScriptGlobalShaking(p0: boolean): void;
	playAnim(
		cam: number,
		animName: string,
		animDictionary: string,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		p9: boolean,
		p10: number
	): boolean;
	isPlayingAnim(cam: number, animName: string, animDictionary: string): boolean;
	setAnimCurrentPhase(cam: number, phase: number): void;
	getAnimCurrentPhase(cam: number): number;
	playSynchronizedAnim(p0: number, p1: number, animName: string, animDictionary: string): boolean;
	setFlyHorizontalResponse(cam: number, p1: number, p2: number, p3: number): void;
	setFlyVerticalSpeedMultiplier(cam: number, p1: number, p2: number, p3: number): void;
	setFlyMaxHeight(cam: number, height: number): void;
	setFlyCoordAndConstrain(cam: number, x: number, y: number, z: number): void;
	isScreenFadedOut(): boolean;
	isScreenFadedIn(): boolean;
	isScreenFadingOut(): boolean;
	isScreenFadingIn(): boolean;
	doScreenFadeIn(duration: number): void;
	doScreenFadeOut(duration: number): void;
	setWidescreenBorders(p0: boolean, p1: number): void;
	getGameplayCoord(): Vector3;
	getGameplayRot(rotationOrder: number): Vector3;
	getGameplayFov(): number;
	getGameplayRelativeHeading(): number;
	setGameplayRelativeHeading(heading: number): void;
	getGameplayRelativePitch(): number;
	setGameplayRelativePitch(angle: number, scalingFactor: number): void;
	setGameplayRelativeRotation(roll: number, pitch: number, yaw: number): void;
	setGameplayRawYaw(yaw: number): void;
	setGameplayRawPitch(pitch: number): void;
	shakeGameplay(shakeName: string, intensity: number): void;
	isGameplayShaking(): boolean;
	setGameplayShakeAmplitude(amplitude: number): void;
	stopGameplayShaking(p0: boolean): void;
	setGameplayFollowPedThisUpdate(ped: number): void;
	isGameplayRendering(): boolean;
	enableCrosshairThisFrame(): void;
	isGameplayLookingBehind(): boolean;
	disableCollisionForEntity(entity: number): void;
	disableCollisionForObject(entity: number): void;
	isSphereVisible(x: number, y: number, z: number, radius: number): boolean;
	isFollowPedActive(): boolean;
	setFollowPedThisUpdate(camName: string, p1: number): boolean;
	clampGameplayYaw(minimum: number, maximum: number): void;
	clampGameplayPitch(minimum: number, maximum: number): void;
	animateGameplayZoom(p0: number, distance: number): void;
	setInVehicleStateThisUpdate(p0: number, p1: number): void;
	disableFirstPersonThisFrame(): void;
	getFollowPedZoomLevel(): number;
	getFollowPedViewMode(): number;
	setFollowPedViewMode(viewMode: number): void;
	isFollowVehicleActive(): boolean;
	getFollowVehicleZoomLevel(): number;
	setFollowVehicleZoomLevel(zoomLevel: number): void;
	getFollowVehicleViewMode(): number;
	setFollowVehicleViewMode(viewMode: number): void;
	useStuntEraThisFrame(): void;
	setGameplayHash(camName: string): void;
	setFollowTurretSeat(seatIndex: number): void;
	isAimActive(): boolean;
	isAimThirdPersonActive(): boolean;
	isFirstPersonAimActive(): boolean;
	disableAimThisUpdate(): void;
	getFirstPersonAimZoomFactor(): number;
	setFirstPersonAimZoomFactor(zoomFactor: number): void;
	setFirstPersonPitchRange(p0: number, p1: number): void;
	setFirstPersonAimNearClipThisUpdate(p0: number): void;
	setThirdPersonAimNearClipThisUpdate(p0: number): void;
	getFinalRenderedCoord(): Vector3;
	getFinalRenderedRot(rotationOrder: number): Vector3;
	getFinalRenderedInWhenFriendlyRot(player: number, rotationOrder: number): Vector3;
	getFinalRenderedFov(): number;
	getFinalRenderedInWhenFriendlyFov(player: number): number;
	getFinalRenderedNearClip(): number;
	getFinalRenderedFarClip(): number;
	getFinalRenderedNearDof(): number;
	getFinalRenderedFarDof(): number;
	getFinalRenderedMotionBlurStrength(): number;
	setGameplayCoordHint(x: number, y: number, z: number, duration: number, blendOutDuration: number, blendInDuration: number, unk: number): void;
	setGameplayPedHint(p0: number, x1: number, y1: number, z1: number, p4: boolean, p5: number, p6: number, p7: number): void;
	setGameplayVehicleHint(
		vehicle: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		p4: boolean,
		time: number,
		easeInTime: number,
		easeOutTime: number
	): void;
	setGameplayObjectHint(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: number, p6: number, p7: number): void;
	setGameplayEntityHint(
		entity: number,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		p4: boolean,
		p5: number,
		p6: number,
		p7: number,
		p8: number
	): void;
	isGameplayHintActive(): boolean;
	stopGameplayHint(p0: boolean): void;
	setGameplayHintFov(FOV: number): void;
	setGameplayHintFollowDistanceScalar(value: number): void;
	setGameplayHintBaseOrbitPitchOffset(value: number): void;
	setGameplayHintAnimOffsetx(xOffset: number): void;
	setGameplayHintAnimOffsety(yOffset: number): void;
	setGameplayHintAnimCloseup(toggle: boolean): void;
	setCinematicButtonActive(p0: boolean): void;
	isCinematicRendering(): boolean;
	shakeCinematic(p0: string, p1: number): void;
	isCinematicShaking(): boolean;
	setCinematicShakeAmplitude(p0: number): void;
	stopCinematicShaking(p0: boolean): void;
	disableVehicleFirstPersonThisFrame(): void;
	invalidateVehicleIdle(): void;
	invalidateIdle(): void;
	isCinematicIdleRendering(): boolean;
	isInVehicleDisabled(): boolean;
	createCinematicShot(p0: number, p1: number, p2: number, entity: number): void;
	isCinematicShotActive(p0: number): boolean;
	stopCinematicShot(p0: number): void;
	forceCinematicRenderingThisUpdate(p0: boolean): void;
	setCinematicModeActive(toggle: boolean): void;
	isCinematicActive(): boolean;
	stopCutsceneShaking(): void;
	getFocusPedOnScreen(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;
	setEffect(p0: number): void;
	setGameplayVehicleCamera(vehicleName: string): void;
	setGameplayVehicleCameraName(vehicleModel: number): void;
	replayFreeGetMaxRange(): number;

	unk: GameCamUnk;
}

declare interface GameCamMp extends GameCam {}
