declare interface GamePedLegacy {
	createPed(
		pedType: number,
		modelHash: number,
		x: number,
		y: number,
		z: number,
		heading: number,
		isNetwork: boolean,
		bScriptHostPed: boolean
	): number;
	isAnyPedShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): boolean;
	canCreateRandomPed(unk: boolean): boolean;
	createRandomPed(posX: number, posY: number, posZ: number): number;
	setPedDensityMultiplierThisFrame(multiplier: number): void;
	setScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;
	setPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
	setPedReserveParachuteTintIndex(ped: number, p1: number): void;
	isPedRespondingToEvent(ped: number, event: number): boolean;
	setExclusivePhoneRelationships(ped: number): number;
	getPedAsGroupMember(groupID: number, memberNumber: number): number;
	getPedAsGroupLeader(groupID: number): number;
	setPedAlternateWalkAnim(ped: number, animDict: string, animName: string, p3: number, p4: boolean): void;
	clearPedAlternateWalkAnim(ped: number, p1: number): void;
	getNumHeadOverlayValues(overlayID: number): number;
	isAValidHairColor(colorID: number): boolean;
	isAValidLipstickColor(colorID: number): boolean;
	isAValidBlushColor(colorID: number): boolean;
	getFirstParentIdForPedType(type: number): number;
	getRandomPedAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: number): number;
	getClosestPed(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p7: boolean, p8: boolean, pedType: number): number;
	setPedToRagdoll(ped: number, time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): boolean;
	setPedToRagdollWithFall(
		ped: number,
		time: number,
		p2: number,
		ragdollType: number,
		x: number,
		y: number,
		z: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number,
		p12: number,
		p13: number
	): boolean;
	getTattooZone(collection: number, overlay: number): number;
	isAnyPedNearPoint(x: number, y: number, z: number, radius: number): boolean;
	hasPedReceivedEvent(ped: number, eventId: number): boolean;
	setSynchronizedSceneLooped(sceneID: number, toggle: boolean): void;
	isSynchronizedSceneLooped(sceneID: number): boolean;
	isPedheadshotValid(id: number): boolean;
	isPedheadshotReady(id: number): boolean;
	getPedheadshotTxdString(id: number): string;
}

declare interface _0x9E30E91FB03A2CAFResult {
	p0: number;
	p1: number;
	result: boolean;
}

declare interface GamePedUnk {
	_0x87DDEB611B329A9C(multiplier: number): void;
	_0xF2BEBCDFAFDAA19E(toggle: boolean): void;
	_0x5A7F62FDA59759BD(): void;
	_0xFF4803BC019852D9(p0: number, p1: number): void;
	_0x9911F4A24485F653(p0: boolean): void;
	_0xAFC976FD0580C7B3(ped: number, toggle: boolean): void;
	_0x2F3C3D9F50681DE4(p0: number, p1: boolean): void;
	_0x061CB768363D6424(ped: number, toggle: boolean): void;
	_0xFD325494792302D7(ped: number, toggle: boolean): void;
	_0x412F1364FA066CFB(p0: number): number;
	_0x451D05012CCEC234(p0: number): number;
	_0x2F074C904D85129E(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	_0xEC4B4B3B9908052A(ped: number, unk: number): void;
	_0x733C87D4CE22BEA2(p0: number): void;
	_0x5407B7288D0478B7(p0: number): number;
	_0x336B3D200AB007CB(p0: number, p1: number, p2: number, p3: number, p4: number): number;
	_0xAD27D957598E49E9(ped: number, p1: number, p2: number, hash: number, p4: number, p5: number): void;
	_0x2735233A786B1BEF(ped: number, p1: number): void;
	_0xB282749D5E028163(p0: number, p1: number): void;
	_0x49E50BDB8BA4DAB2(ped: number, toggle: boolean): void;
	_0x80054D7FCC70EEC6(ped: number): void;
	_0x9E30E91FB03A2CAF(): _0x9E30E91FB03A2CAFResult;
	_0x1E77FA7A62EE6C4C(p0: number): number;
	_0xF033419D1B81FAE8(p0: number): number;
	_0xEA9960D07DADCF10(p0: number): number;
	_0xAAA6A3698A69E048(p0: number): number;
	_0xC56FBF2F228E1DAC(modelHash: number, p1: number, p2: number): number;
	_0xFEC9A3B1820F3331(p0: number): boolean;
	_0x03EA03AF85A85CB7(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: number): boolean;
	_0xA3F3564A5B3646C0(ped: number): boolean;
	_0xF9ACF4A08098EA25(ped: number, p1: boolean): void;
	_0x2B694AFCF64E6994(ped: number, p1: boolean): void;
	_0x9A77DFD295E29B09(p0: number, p1: boolean): void;
	_0x25361A96E0F7E419(p0: number, p1: number, p2: number, p3: number): number;
	_0xEC6935EBE0847B90(p0: number, p1: number, p2: number, p3: number): number;
	_0x425AECF167663F48(ped: number, p1: boolean): void;
	_0x5B6010B3CBC29095(p0: number, p1: boolean): void;
	_0xCEDA60A74219D064(p0: number, p1: boolean): void;
	_0xC30BDAEE47256C13(p0: number): number;
	_0xC2EE020F5FB4DB53(ped: number): void;
	_0x6647C5F6F5792496(ped: number, p1: boolean): void;
	_0xA660FAF550EB37E5(p0: number, p1: boolean): void;
	_0x3E9679C1DFCF422C(p0: number, p1: number): void;
	_0xF2385935BFFD4D92(p0: number): boolean;
	_0x1A330D297AAC6BC1(ped: number, p1: number): void;
	_0x2016C603D6B8987C(ped: number, toggle: boolean): void;
	_0xA9B61A329BFDCBEA(p0: number, p1: boolean): void;
	_0xA52D5247A4227E14(p0: number): void;
	_0xCD018C591F94CB43(ped: number, p1: boolean): void;
	_0x75BA1CB3B7D40CAF(ped: number, p1: boolean): void;
	_0x511F1A683387C7E2(ped: number): number;
	_0x9C6A6C19B6C0C496(ped: number): number;
	_0x2DFC81C9B9608549(ped: number): number;
	_0x110F526AB784111F(ped: number, p1: number): void;
	_0xE906EC930F5FE7C8(p0: number, p1: number): void;
	_0x1216E0BFA72CC703(p0: number, p1: number): void;
	_0xB8B52E498014F5B0(ped: number): boolean;
	_0x0B3E35AC043707D9(p0: number, p1: number): void;
	_0x46B05BCAE43856B0(ped: number, flag: number): boolean;
	_0xED3C76ADFA6D07C4(ped: number): void;
	_0xE861D0B05C7662B8(ped: number, p1: boolean, p2: number): void;
	_0x820E9892A77E97CD(p0: number, p1: number): void;
	_0x06087579E7AA85A9(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): boolean;
	_0xD33DAA36272177C4(ped: number): void;
	_0x711794453CFD692B(p0: number, p1: number): void;
	_0x83A169EABCDB10A2(p0: number, p1: number): void;
	_0x288DF530C92DAD6F(p0: number, p1: number): void;
	_0x0F62619393661D6E(p0: number, p1: number, p2: number): void;
	_0xDFE68C4B787E1BFB(ped: number): void;
	_0xFAB944D4D481ACCB(ped: number, toggle: boolean): void;
}

declare interface GetGroupSizeResult {
	unknown: number;
	sizeInMembers: number;
}

declare interface GetPedHairRgbColorResult {
	outR: number;
	outG: number;
	outB: number;
}

declare interface GetPedMakeupRgbColorResult {
	outR: number;
	outG: number;
	outB: number;
}

declare interface GetPedCurrentMovementSpeedResult {
	speedX: number;
	speedY: number;
	result: boolean;
}

declare interface GetPedNearbyVehiclesResult {
	sizeAndVehs: number;
	result: number;
}

declare interface GetPedNearbyPedsResult {
	sizeAndPeds: number;
	result: number;
}

declare interface SpawnpointsGetSearchResultResult {
	x: number;
	y: number;
	z: number;
}

declare interface GamePed extends GamePedLegacy {
	create(pedType: number, modelHash: number, x: number, y: number, z: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number;
	delete(ped: number): number;
	clone(ped: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number;
	cloneEx(ped: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean, p4: number): number;
	cloneToTarget(ped: number, targetPed: number): void;
	cloneToTargetEx(ped: number, targetPed: number, p2: number): void;
	isInVehicle(ped: number, vehicle: number, atGetIn: boolean): boolean;
	isInModel(ped: number, modelHash: number): boolean;
	isInAnyVehicle(ped: number, atGetIn: boolean): boolean;
	isCopInArea3D(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isInjured(ped: number): boolean;
	isHurt(ped: number): boolean;
	isFatallyInjured(ped: number): boolean;
	isDeadOrDying(ped: number, p1: boolean): boolean;
	isConversationDead(ped: number): boolean;
	isAimingFromCover(ped: number): boolean;
	isReloading(ped: number): boolean;
	isAPlayer(ped: number): boolean;
	createInsideVehicle(vehicle: number, pedType: number, modelHash: number, seat: number, isNetwork: boolean, bScriptHostPed: boolean): number;
	setDesiredHeading(ped: number, heading: number): void;
	freezeCameraRotation(ped: number): void;
	isFacingPed(ped: number, otherPed: number, angle: number): boolean;
	isInMeleeCombat(ped: number): boolean;
	isStopped(ped: number): boolean;
	isShootingInArea(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean): boolean;
	isAnyShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): boolean;
	isShooting(ped: number): boolean;
	setAccuracy(ped: number, accuracy: number): void;
	getAccuracy(ped: number): number;
	isModel(ped: number, modelHash: number): boolean;
	explodeHead(ped: number, weaponHash: number): void;
	removeElegantly(): number;
	addArmourTo(ped: number, amount: number): void;
	setArmour(ped: number, amount: number): void;
	setIntoVehicle(ped: number, vehicle: number, seatIndex: number): void;
	setAllowVehiclesOverride(ped: number, toggle: boolean): void;
	canCreateRandom(unk: boolean): boolean;
	createRandom(posX: number, posY: number, posZ: number): number;
	createRandomAsDriver(vehicle: number, returnHandle: boolean): number;
	canCreateRandomDriver(): boolean;
	canCreateRandomBikeRider(): boolean;
	setMoveAnimsBlendOut(ped: number): void;
	setCanBeDraggedOut(ped: number, toggle: boolean): void;
	isMale(ped: number): boolean;
	isHuman(ped: number): boolean;
	getVehicleIsIn(ped: number, includeLastVehicle: boolean): number;
	resetLastVehicle(ped: number): void;
	setDensityMultiplierThisFrame(multiplier: number): void;
	setScenarioDensityMultiplierThisFrame(p0: number, p1: number): void;
	setScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;
	setNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
	clearNonCreationArea(): void;
	instantlyFillPopulation(): void;
	isOnMount(ped: number): boolean;
	getMount(ped: number): number;
	isOnVehicle(ped: number): boolean;
	isOnSpecificVehicle(ped: number, vehicle: number): boolean;
	setMoney(ped: number, amount: number): void;
	getMoney(ped: number): number;
	setAmbientPedsDropMoney(p0: boolean): void;
	setSuffersCriticalHits(ped: number, toggle: boolean): void;
	isSittingInVehicle(ped: number, vehicle: number): boolean;
	isSittingInAnyVehicle(ped: number): boolean;
	isOnFoot(ped: number): boolean;
	isOnAnyBike(ped: number): boolean;
	isPlantingBomb(ped: number): boolean;
	getDeadPickupCoords(ped: number, p1: number, p2: number): Vector3;
	isInAnyBoat(ped: number): boolean;
	isInAnySub(ped: number): boolean;
	isInAnyHeli(ped: number): boolean;
	isInAnyPlane(ped: number): boolean;
	isInFlyingVehicle(ped: number): boolean;
	setDiesInWater(ped: number, toggle: boolean): void;
	setDiesInSinkingVehicle(ped: number, toggle: boolean): void;
	getArmour(ped: number): number;
	setStayInVehicleWhenJacked(ped: number, toggle: boolean): void;
	setCanBeShotInVehicle(ped: number, toggle: boolean): void;
	getLastDamageBone(ped: number): number;
	clearLastDamageBone(ped: number): void;
	setAiWeaponDamageModifier(value: number): void;
	resetAiWeaponDamageModifier(): void;
	setAiMeleeWeaponDamageModifier(modifier: number): void;
	resetAiMeleeWeaponDamageModifier(): void;
	setCanBeTargetted(ped: number, toggle: boolean): void;
	setCanBeTargettedByTeam(ped: number, team: number, toggle: boolean): void;
	setCanBeTargettedByPlayer(ped: number, player: number, toggle: boolean): void;
	isInAnyPoliceVehicle(ped: number): boolean;
	forceToOpenParachute(ped: number): void;
	isInParachuteFreeFall(ped: number): boolean;
	isFalling(ped: number): boolean;
	isJumping(ped: number): boolean;
	isClimbing(ped: number): boolean;
	isVaulting(ped: number): boolean;
	isDiving(ped: number): boolean;
	isJumpingOutOfVehicle(ped: number): boolean;
	isOpeningADoor(ped: number): boolean;
	getParachuteState(ped: number): number;
	getParachuteLandingType(ped: number): number;
	setParachuteTintIndex(ped: number, tintIndex: number): void;
	getParachuteTintIndex(ped: number): number;
	setReserveParachuteTintIndex(ped: number, p1: number): void;
	createParachuteBagObject(ped: number, p1: boolean, p2: boolean): number;
	setDucking(ped: number, toggle: boolean): void;
	isDucking(ped: number): boolean;
	isInAnyTaxi(ped: number): boolean;
	setIdRange(ped: number, value: number): void;
	setHighlyPerceptive(ped: number, toggle: boolean): void;
	setSeeingRange(ped: number, value: number): void;
	setHearingRange(ped: number, value: number): void;
	setVisualFieldMinAngle(ped: number, value: number): void;
	setVisualFieldMaxAngle(ped: number, value: number): void;
	setVisualFieldMinElevationAngle(ped: number, angle: number): void;
	setVisualFieldMaxElevationAngle(ped: number, angle: number): void;
	setVisualFieldPeripheralRange(ped: number, range: number): void;
	setVisualFieldCenterAngle(ped: number, angle: number): void;
	getVisualFieldCenterAngle(ped: number): number;
	setStealthMovement(ped: number, p1: boolean, action: string): void;
	getStealthMovement(ped: number): boolean;
	createGroup(unused: number): number;
	setAsGroupLeader(ped: number, groupId: number): void;
	setAsGroupMember(ped: number, groupId: number): void;
	setCanTeleportToGroupLeader(pedHandle: number, groupHandle: number, toggle: boolean): void;
	removeGroup(groupId: number): void;
	removeFromGroup(ped: number): void;
	isGroupMember(ped: number, groupId: number): boolean;
	isHangingOnToVehicle(ped: number): boolean;
	setGroupSeparationRange(groupHandle: number, separationRange: number): void;
	setMinGroundTimeForStungun(ped: number, ms: number): void;
	isProne(ped: number): boolean;
	isInCombat(ped: number, target: number): boolean;
	canInCombatSeeTarget(ped: number, target: number): boolean;
	isDoingDriveby(ped: number): boolean;
	isJacking(ped: number): boolean;
	isBeingJacked(ped: number): boolean;
	isBeingStunned(ped: number, p1: number): boolean;
	getPedsJacker(ped: number): number;
	getJackTarget(ped: number): number;
	isFleeing(ped: number): boolean;
	isInCover(ped: number, exceptUseWeapon: boolean): boolean;
	isInCoverFacingLeft(ped: number): boolean;
	isInHighCover(ped: number): boolean;
	isGoingIntoCover(ped: number): boolean;
	setPinnedDown(ped: number, pinned: boolean, i: number): number;
	getSeatIsTryingToEnter(ped: number): number;
	getVehicleIsTryingToEnter(ped: number): number;
	getSourceOfDeath(ped: number): number;
	getCauseOfDeath(ped: number): number;
	getTimeOfDeath(ped: number): number;
	setRelationshipGroupDefaultHash(ped: number, hash: number): void;
	setRelationshipGroupHash(ped: number, hash: number): void;
	setRelationshipBetweenGroups(relationship: number, group1: number, group2: number): void;
	clearRelationshipBetweenGroups(relationship: number, group1: number, group2: number): void;
	addRelationshipGroup(name: string): number;
	removeRelationshipGroup(groupHash: number): void;
	doesRelationshipGroupExist(groupHash: number): boolean;
	getRelationshipBetweenS(ped1: number, ped2: number): number;
	getRelationshipGroupDefaultHash(ped: number): number;
	getRelationshipGroupHash(ped: number): number;
	getRelationshipBetweenGroups(group1: number, group2: number): number;
	setRelationshipGroupDontAffectWantedLevel(group: number, p1: boolean): void;
	setCanBeTargetedWithoutLos(ped: number, toggle: boolean): void;
	setToInformRespectedFriends(ped: number, radius: number, maxFriends: number): void;
	isRespondingToEvent(ped: number, event: number): boolean;
	getEventData(ped: number, eventType: number): number;
	setFiringPattern(ped: number, patternHash: number): void;
	setShootRate(ped: number, shootRate: number): void;
	setCombatFloat(ped: number, combatType: number, p2: number): void;
	getCombatFloat(ped: number, p1: number): number;
	getGroupSize(groupID: number): GetGroupSizeResult;
	doesGroupExist(groupId: number): boolean;
	getGroupIndex(ped: number): number;
	isInGroup(ped: number): boolean;
	getPlayerIsFollowing(ped: number): number;
	setGroupFormation(groupId: number, formationType: number): void;
	setGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number): void;
	resetGroupFormationDefaultSpacing(groupHandle: number): void;
	getVehicleIsUsing(ped: number): number;
	getVehicleIsEntering(ped: number): number;
	setGravity(ped: number, toggle: boolean): void;
	applyDamageTo(ped: number, damageAmount: number, p2: boolean, p3: number): void;
	getTimeOfLastWeaponDamage(ped: number, weaponHash: number): number;
	setAllowedToDuck(ped: number, toggle: boolean): void;
	setNeverLeavesGroup(ped: number, toggle: boolean): void;
	getType(ped: number): number;
	setAsCop(ped: number, toggle: boolean): void;
	setMaxHealth(ped: number, value: number): void;
	getMaxHealth(ped: number): number;
	setMaxTimeInWater(ped: number, value: number): void;
	setMaxTimeUnderwater(ped: number, value: number): void;
	setVehicleForcedSeatUsage(ped: number, vehicle: number, seatIndex: number, flags: number, p4: number): void;
	clearAllVehicleForcedSeatUsage(ped: number): void;
	setCanBeKnockedOffVehicle(ped: number, state: number): void;
	canKnockOffVehicle(ped: number): boolean;
	knockOffVehicle(ped: number): void;
	setCoordsNoGang(ped: number, posX: number, posY: number, posZ: number): void;
	getAsGroupMember(groupID: number, memberNumber: number): number;
	getAsGroupLeader(groupID: number): number;
	setKeepTask(ped: number, toggle: boolean): void;
	isSwimming(ped: number): boolean;
	isSwimmingUnderWater(ped: number): boolean;
	setCoordsKeepVehicle(ped: number, posX: number, posY: number, posZ: number): void;
	setDiesInVehicle(ped: number, toggle: boolean): void;
	setCreateRandomCops(toggle: boolean): void;
	setCreateRandomCopsNotOnScenarios(toggle: boolean): void;
	setCreateRandomCopsOnScenarios(toggle: boolean): void;
	canCreateRandomCops(): boolean;
	setAsEnemy(ped: number, toggle: boolean): void;
	setCanSmashGlass(ped: number, p1: boolean, p2: boolean): void;
	isInAnyTrain(ped: number): boolean;
	isGettingIntoAVehicle(ped: number): boolean;
	isTryingToEnterALockedVehicle(ped: number): boolean;
	setEnableHandcuffs(ped: number, toggle: boolean): void;
	setEnableBoundAnkles(ped: number, toggle: boolean): void;
	setEnableScuba(ped: number, toggle: boolean): void;
	setCanAttackFriendly(ped: number, toggle: boolean, p2: boolean): void;
	getAlertness(ped: number): number;
	setAlertness(ped: number, value: number): void;
	setGetOutUpsideDownVehicle(ped: number, toggle: boolean): void;
	setMovementClipset(ped: number, clipSet: string, p2: number): void;
	resetMovementClipset(ped: number, p1: number): void;
	setStrafeClipset(ped: number, clipSet: string): void;
	resetStrafeClipset(ped: number): void;
	setWeaponMovementClipset(ped: number, clipSet: string): void;
	resetWeaponMovementClipset(ped: number): void;
	setDriveByClipsetOverride(ped: number, clipset: string): void;
	clearDriveByClipsetOverride(ped: number): void;
	setCoverClipsetOverride(ped: number, p1: string): void;
	clearCoverClipsetOverride(ped: number): void;
	setInVehicleContext(ped: number, context: number): void;
	resetInVehicleContext(ped: number): void;
	isScriptedScenarioUsingConditionalAnim(ped: number, animDict: string, anim: string): boolean;
	setAlternateWalkAnim(ped: number, animDict: string, animName: string, p3: number, p4: boolean): void;
	clearAlternateWalkAnim(ped: number, p1: number): void;
	setAlternateMovementAnim(ped: number, stance: number, animDictionary: string, animationName: string, p4: number, p5: boolean): void;
	clearAlternateMovementAnim(ped: number, stance: number, p2: number): void;
	setGestureGroup(ped: number, animGroupGesture: string): void;
	getAnimInitialOffsetPosition(
		animDict: string,
		animName: string,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		p8: number,
		p9: number
	): Vector3;
	getAnimInitialOffsetRotation(
		animDict: string,
		animName: string,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		p8: number,
		p9: number
	): Vector3;
	getDrawableVariation(ped: number, componentId: number): number;
	getNumberOfDrawableVariations(ped: number, componentId: number): number;
	getTextureVariation(ped: number, componentId: number): number;
	getNumberOfTextureVariations(ped: number, componentId: number, drawableId: number): number;
	getNumberOfPropDrawableVariations(ped: number, propId: number): number;
	getNumberOfPropTextureVariations(ped: number, propId: number, drawableId: number): number;
	getPaletteVariation(ped: number, componentId: number): number;
	isComponentVariationValid(ped: number, componentId: number, drawableId: number, textureId: number): boolean;
	setComponentVariation(ped: number, componentId: number, drawableId: number, textureId: number, paletteId: number): void;
	setRandomComponentVariation(ped: number, p1: number): void;
	setRandomProps(ped: number): void;
	setDefaultComponentVariation(ped: number): void;
	setBlendFromParents(ped: number, p1: number, p2: number, p3: number, p4: number): void;
	setHeadBlendData(
		ped: number,
		shapeFirstID: number,
		shapeSecondID: number,
		shapeThirdID: number,
		skinFirstID: number,
		skinSecondID: number,
		skinThirdID: number,
		shapeMix: number,
		skinMix: number,
		thirdMix: number,
		isParent: boolean
	): void;
	getHeadBlendData(ped: number): number;
	updateHeadBlendData(ped: number, shapeMix: number, skinMix: number, thirdMix: number): void;
	setEyeColor(ped: number, index: number): void;
	getEyeColor(ped: number): number;
	setHeadOverlay(ped: number, overlayID: number, index: number, opacity: number): void;
	getHeadOverlayValue(ped: number, overlayID: number): number;
	getHeadOverlayNum(overlayID: number): number;
	setHeadOverlayColor(ped: number, overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
	setHairColor(ped: number, colorID: number, highlightColorID: number): void;
	getNumHairColors(): number;
	getNumMakeupColors(): number;
	getHairRgbColor(hairColorIndex: number): GetPedHairRgbColorResult;
	getMakeupRgbColor(makeupColorIndex: number): GetPedMakeupRgbColorResult;
	isHairColorValid2(colorId: number): boolean;
	isLipstickColorValid2(colorId: number): boolean;
	isBlushColorValid2(colorId: number): boolean;
	isHairColorValid(colorID: number): boolean;
	isLipstickColorValid(colorID: number): boolean;
	isBlushColorValid(colorID: number): boolean;
	isBodyBlemishValid(colorId: number): boolean;
	setFaceFeature(ped: number, index: number, scale: number): void;
	hasHeadBlendFinished(ped: number): boolean;
	finalizeHeadBlend(ped: number): void;
	setHeadBlendPaletteColor(ped: number, r: number, g: number, b: number, id: number): void;
	disableHeadBlendPaletteColor(ped: number): void;
	getHeadBlendFirstIndex(type: number): number;
	getNumParentPedsOfType(type: number): number;
	setPreloadVariationData(ped: number, slot: number, drawableId: number, textureId: number): number;
	hasPreloadVariationDataFinished(ped: number): boolean;
	releasePreloadVariationData(ped: number): void;
	setPreloadPropData(ped: number, componentId: number, drawableId: number, TextureId: number): boolean;
	hasPreloadPropDataFinished(ped: number): boolean;
	releasePreloadPropData(ped: number): void;
	getPropIndex(ped: number, componentId: number): number;
	setPropIndex(ped: number, componentId: number, drawableId: number, TextureId: number, attach: boolean): void;
	knockOffProp(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;
	clearProp(ped: number, propId: number): void;
	clearAllProps(ped: number): void;
	dropAmbientProp(ped: number): void;
	getPropTextureIndex(ped: number, componentId: number): number;
	clearParachutePackVariation(ped: number): void;
	setScubaGearVariation(ped: number): void;
	clearScubaGearVariation(ped: number): void;
	setBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;
	setBoundsOrientation(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	registerTarget(ped: number, target: number): void;
	registerHatedTargetsAround(ped: number, radius: number): void;
	getRandomAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: number): number;
	getClosest(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p7: boolean, p8: boolean, pedType: number): number;
	setScenarioPedsToBeReturnedByNextCommand(value: boolean): void;
	setDriverRacingModifier(driver: number, modifier: number): void;
	setDriverAbility(driver: number, ability: number): void;
	setDriverAggressiveness(driver: number, aggressiveness: number): void;
	canRagdoll(ped: number): boolean;
	setToRagdoll(ped: number, time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): boolean;
	setToRagdollWithFall(
		ped: number,
		time: number,
		p2: number,
		ragdollType: number,
		x: number,
		y: number,
		z: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number,
		p12: number,
		p13: number
	): boolean;
	setRagdollOnCollision(ped: number, toggle: boolean): void;
	isRagdoll(ped: number): boolean;
	isRunningRagdollTask(ped: number): boolean;
	setRagdollForceFall(ped: number): void;
	resetRagdollTimer(ped: number): void;
	setCanRagdoll(ped: number, toggle: boolean): void;
	isRunningMeleeTask(ped: number): boolean;
	isRunningMobilePhoneTask(ped: number): boolean;
	setRagdollBlockingFlags(ped: number, flags: number): void;
	clearRagdollBlockingFlags(ped: number, flags: number): void;
	setAngledDefensiveArea(
		ped: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: boolean,
		p9: boolean
	): void;
	setSphereDefensiveArea(ped: number, x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;
	setDefensiveSphereAttachedToPed(
		ped: number,
		target: number,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		radius: number,
		p6: boolean
	): void;
	setDefensiveSphereAttachedToVehicle(
		ped: number,
		target: number,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		radius: number,
		p6: boolean
	): void;
	setDefensiveAreaAttachedToPed(
		ped: number,
		attachPed: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: boolean,
		p10: boolean
	): void;
	setDefensiveAreaDirection(ped: number, p1: number, p2: number, p3: number, p4: boolean): void;
	removeDefensiveArea(ped: number, toggle: boolean): void;
	getDefensiveAreaPosition(ped: number, p1: boolean): Vector3;
	isDefensiveAreaActive(ped: number, p1: boolean): boolean;
	setPreferredCoverSet(ped: number, itemSet: number): void;
	removePreferredCoverSet(ped: number): void;
	reviveInjured(ped: number): void;
	resurrect(ped: number): void;
	setNameDebug(ped: number, name: string): void;
	getExtractedDisplacement(ped: number, worldSpace: boolean): Vector3;
	setDiesWhenInjured(ped: number, toggle: boolean): void;
	setEnableWeaponBlocking(ped: number, toggle: boolean): void;
	resetVisibleDamage(ped: number): void;
	applyBloodDamageByZone(ped: number, p1: number, p2: number, p3: number, p4: number): void;
	applyBlood(ped: number, boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string): void;
	applyBloodByZone(ped: number, p1: number, p2: number, p3: number): number;
	applyBloodSpecific(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): number;
	applyDamageDecal(
		ped: number,
		damageZone: number,
		xOffset: number,
		yOffset: number,
		heading: number,
		scale: number,
		alpha: number,
		variation: number,
		fadeIn: boolean,
		decalName: string
	): void;
	applyDamagePack(ped: number, damagePack: string, damage: number, mult: number): void;
	clearBloodDamage(ped: number): void;
	clearBloodDamageByZone(ped: number, p1: number): void;
	hideBloodDamageByZone(ped: number, p1: number, p2: boolean): void;
	clearDamageDecalByZone(ped: number, p1: number, p2: string): void;
	getDecorationsState(ped: number): number;
	clearWetness(ped: number): void;
	setWetnessHeight(ped: number, height: number): void;
	setWetnessEnabledThisFrame(ped: number): void;
	clearEnvDirt(ped: number): void;
	setSweat(ped: number, sweat: number): void;
	addDecorationFromHashes(ped: number, collection: number, overlay: number): void;
	addDecorationFromHashesInCorona(ped: number, collection: number, overlay: number): void;
	getDecorationZoneFromHashes(collection: number, overlay: number): number;
	clearDecorations(ped: number): void;
	clearDecorationsLeaveScars(ped: number): void;
	wasSkeletonUpdated(ped: number): boolean;
	getBoneCoords(ped: number, boneId: number, offsetX: number, offsetY: number, offsetZ: number): Vector3;
	createNmMessage(startImmediately: boolean, messageId: number): void;
	giveNmMessage(ped: number): void;
	addScenarioBlockingArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p6: boolean,
		p7: boolean,
		p8: boolean,
		p9: boolean
	): number;
	removeScenarioBlockingAreas(): void;
	removeScenarioBlockingArea(p0: number, p1: boolean): void;
	setScenarioPedsSpawnInSphereArea(x: number, y: number, z: number, range: number, p4: number): void;
	doesScenarioBlockingAreaExist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isUsingScenario(ped: number, scenario: string): boolean;
	isUsingAnyScenario(ped: number): boolean;
	setPanicExitScenario(p0: number, p1: number, p2: number, p3: number): number;
	setShouldPlayNormalScenarioExit(ped: number): void;
	setShouldPlayImmediateScenarioExit(ped: number): void;
	setShouldPlayFleeScenarioExit(ped: number, p1: number, p2: number, p3: number): number;
	playFacialAnim(ped: number, animName: string, animDict: string): void;
	setFacialClipsetOverride(ped: number, animDict: string): void;
	setFacialIdleAnimOverride(ped: number, animName: string, animDict: string): void;
	clearFacialIdleAnimOverride(ped: number): void;
	setCanPlayGestureAnims(ped: number, toggle: boolean): void;
	setCanPlayVisemeAnims(ped: number, toggle: boolean, p2: boolean): void;
	setCanPlayInjuredAnims(ped: number, p1: boolean): void;
	setCanPlayAmbientAnims(ped: number, toggle: boolean): void;
	setCanPlayAmbientBaseAnims(ped: number, toggle: boolean): void;
	setCanArmIk(ped: number, toggle: boolean): void;
	setCanHeadIk(ped: number, toggle: boolean): void;
	setCanLegIk(ped: number, toggle: boolean): void;
	setCanTorsoIk(ped: number, toggle: boolean): void;
	setCanTorsoReactIk(ped: number, p1: boolean): void;
	setCanUseAutoConversationLookat(ped: number, toggle: boolean): void;
	isHeadtrackingPed(ped1: number, ped2: number): boolean;
	isHeadtrackingEntity(ped: number, entity: number): boolean;
	setPrimaryLookat(ped: number, lookAt: number): void;
	setClothPackageIndex(p0: number, p1: number): void;
	setClothProne(p0: number, p1: number): void;
	setConfigFlag(ped: number, flagId: number, value: boolean): void;
	setResetFlag(ped: number, flagId: number, doReset: boolean): void;
	getConfigFlag(ped: number, flagId: number, p2: boolean): boolean;
	getResetFlag(ped: number, flagId: number): boolean;
	setGroupMemberPassengerIndex(ped: number, index: number): void;
	setCanEvasiveDive(ped: number, toggle: boolean): void;
	isEvasiveDiving(ped: number): number;
	setShootsAtCoord(ped: number, x: number, y: number, z: number, toggle: boolean): void;
	setModelIsSuppressed(modelHash: number, toggle: boolean): void;
	stopAnyModelBeingSuppressed(): void;
	setCanBeTargetedWhenInjured(ped: number, toggle: boolean): void;
	setGeneratesDeadBodyEvents(ped: number, toggle: boolean): void;
	blockDeadBodyShockingEvents(ped: number, toggle: boolean): void;
	setCanRagdollFromPlayerImpact(ped: number, toggle: boolean): void;
	giveHelmet(ped: number, cannotRemove: boolean, helmetFlag: number, textureIndex: number): void;
	removeHelmet(ped: number, instantly: boolean): void;
	isTakingOffHelmet(ped: number): boolean;
	setHelmet(ped: number, canWearHelmet: boolean): void;
	setHelmetFlag(ped: number, helmetFlag: number): void;
	setHelmetPropIndex(ped: number, propIndex: number, p2: boolean): void;
	setHelmetUnk(ped: number, p1: boolean, p2: number, p3: number): void;
	isHelmetUnk(ped: number): boolean;
	setHelmetTextureIndex(ped: number, textureIndex: number): void;
	isWearingHelmet(ped: number): boolean;
	clearStoredHatProp(ped: number): void;
	getHelmetStoredHatPropIndex(ped: number): number;
	getHelmetStoredHatTexIndex(ped: number): number;
	setToLoadCover(ped: number, toggle: boolean): void;
	setCanCowerInCover(ped: number, toggle: boolean): void;
	setCanPeekInCover(ped: number, toggle: boolean): void;
	setPlaysHeadOnHornAnimWhenDiesInVehicle(ped: number, toggle: boolean): void;
	setLegIkMode(ped: number, mode: number): void;
	setMotionBlur(ped: number, toggle: boolean): void;
	setCanSwitchWeapon(ped: number, toggle: boolean): void;
	setDiesInstantlyInWater(ped: number, toggle: boolean): void;
	stopWeaponFiringWhenDropped(ped: number): void;
	setScriptedAnimSeatOffset(ped: number, p1: number): void;
	setCombatMovement(ped: number, combatMovement: number): void;
	getCombatMovement(ped: number): number;
	setCombatAbility(ped: number, p1: number): void;
	setCombatRange(ped: number, p1: number): void;
	getCombatRange(ped: number): number;
	setCombatAttributes(ped: number, attributeIndex: number, enabled: boolean): void;
	setTargetLossResponse(ped: number, responseType: number): void;
	isPerformingMeleeAction(ped: number): boolean;
	isPerformingStealthKill(ped: number): boolean;
	isPerformingDependentComboLimit(ped: number): boolean;
	isBeingStealthKilled(ped: number): boolean;
	getMeleeTargetFor(ped: number): number;
	wasKilledByStealth(ped: number): boolean;
	wasKilledByTakedown(ped: number): boolean;
	wasKnockedOut(ped: number): boolean;
	setFleeAttributes(ped: number, attributeFlags: number, enable: boolean): void;
	setCowerHash(ped: number, p1: string): void;
	setSteersAroundPeds(ped: number, toggle: boolean): void;
	setSteersAroundObjects(ped: number, toggle: boolean): void;
	setSteersAroundVehicles(ped: number, toggle: boolean): void;
	setIncreasedAvoidanceRadius(ped: number): void;
	setBlocksPathingWhenDead(ped: number, toggle: boolean): void;
	isAnyNearPoint(x: number, y: number, z: number, radius: number): boolean;
	forceAiAndAnimationUpdate(ped: number, p1: boolean, p2: boolean): void;
	isHeadingTowardsPosition(ped: number, x: number, y: number, z: number, p4: number): boolean;
	requestVisibilityTracking(ped: number): void;
	requestVehicleVisibilityTracking(ped: number, p1: boolean): void;
	isTrackedVisible(ped: number): boolean;
	isTracked(ped: number): boolean;
	hasReceivedEvent(ped: number, eventId: number): boolean;
	canSeeHatedPed(ped1: number, ped2: number): boolean;
	getBoneIndex(ped: number, boneId: number): number;
	getRagdollBoneIndex(ped: number, bone: number): number;
	setEnveffScale(ped: number, value: number): void;
	getEnveffScale(ped: number): number;
	setEnableEnveffScale(ped: number, toggle: boolean): void;
	setEnveffColorModulator(ped: number, p1: number, p2: number, p3: number): void;
	setEmissiveIntensity(ped: number, intensity: number): void;
	getEmissiveIntensity(ped: number): number;
	isShaderEffectValid(ped: number): boolean;
	setAoBlobRendering(ped: number, toggle: boolean): void;
	createSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: number): number;
	createSynchronizedScene2(x: number, y: number, z: number, radius: number, object: number): number;
	isSynchronizedSceneRunning(sceneId: number): boolean;
	setSynchronizedSceneOrigin(sceneID: number, x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p7: boolean): void;
	setSynchronizedScenePhase(sceneID: number, phase: number): void;
	getSynchronizedScenePhase(sceneID: number): number;
	setSynchronizedSceneRate(sceneID: number, rate: number): void;
	getSynchronizedSceneRate(sceneID: number): number;
	setSynchronizedSceneLoo(sceneID: number, toggle: boolean): void;
	isSynchronizedSceneLoo(sceneID: number): boolean;
	setSynchronizedSceneHoldLastFrame(sceneID: number, toggle: boolean): void;
	isSynchronizedSceneHoldLastFrame(sceneID: number): boolean;
	attachSynchronizedSceneToEntity(sceneID: number, entity: number, boneIndex: number): void;
	detachSynchronizedScene(sceneID: number): void;
	disposeSynchronizedScene(scene: number): void;
	forceMotionState(ped: number, motionStateHash: number, p2: boolean, p3: number, p4: boolean): boolean;
	getCurrentMovementSpeed(ped: number): GetPedCurrentMovementSpeedResult;
	setMaxMoveBlendRatio(ped: number, value: number): void;
	setMinMoveBlendRatio(ped: number, value: number): void;
	setMoveRateOverride(ped: number, value: number): void;
	getNearbyVehicles(ped: number): GetPedNearbyVehiclesResult;
	getNearbyPeds(ped: number, ignore: number): GetPedNearbyPedsResult;
	haveAllStreamingRequestsCompleted(ped: number): boolean;
	isUsingActionMode(ped: number): boolean;
	setUsingActionMode(ped: number, p1: boolean, p2: number, action: string): void;
	setMovementModeOverride(ped: number, name: string): void;
	setCapsule(ped: number, value: number): void;
	registerHeadshot(ped: number): number;
	registerHeadshot3(ped: number): number;
	registerHeadshotTransparent(ped: number): number;
	unregisterHeadshot(id: number): void;
	isHeadshotValid(id: number): boolean;
	isHeadshotReady(id: number): boolean;
	getHeadshotTxdString(id: number): string;
	requestHeadshotImgUpload(id: number): boolean;
	releaseHeadshotImgUpload(id: number): void;
	isHeadshotImgUploadAvailable(): boolean;
	hasHeadshotImgUploadFailed(): boolean;
	hasHeadshotImgUploadSucceeded(): boolean;
	setHeatscaleOverride(ped: number, heatScale: number): void;
	disableHeatscaleOverride(ped: number): void;
	spawnpointsStartSearch(p0: number, p1: number, p2: number, p3: number, p4: number, interiorFlags: number, scale: number, duration: number): void;
	spawnpointsStartSearchInAngledArea(
		x: number,
		y: number,
		z: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		interiorFlags: number,
		scale: number,
		duration: number
	): void;
	spawnpointsCancelSearch(): void;
	spawnpointsIsSearchActive(): boolean;
	spawnpointsIsSearchComplete(): boolean;
	spawnpointsIsSearchFailed(): boolean;
	spawnpointsGetNumSearchResults(): number;
	spawnpointsGetSearchResult(randomInt: number): SpawnpointsGetSearchResultResult;
	spawnpointsGetSearchResultFlags(p0: number): number;
	setIkTarget(
		ped: number,
		ikIndex: number,
		entityLookAt: number,
		boneLookAt: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		p7: number,
		blendInDuration: number,
		blendOutDuration: number
	): void;
	requestActionModeAsset(asset: string): void;
	hasActionModeAssetLoaded(asset: string): boolean;
	removeActionModeAsset(asset: string): void;
	requestStealthModeAsset(asset: string): void;
	hasStealthModeAssetLoaded(asset: string): boolean;
	removeStealthModeAsset(asset: string): void;
	setLodMultiplier(ped: number, multiplier: number): void;
	setForceFootstepUpdate(ped: number, toggle: boolean): void;
	setForceStepType(ped: number, p1: boolean, type: number, p3: number): void;
	isAnyHostileNearPoint(ped: number, x: number, y: number, z: number, radius: number): boolean;
	setPopControlSphereThisFrame(x: number, y: number, z: number, min: number, max: number): void;
	isSwappingWeapon(Ped: number): boolean;
	setEnableScubaGearLight(ped: number, toggle: boolean): void;
	isScubaGearLightEnabled(ped: number): boolean;
	clearFacialClipsetOverride(ped: number): void;

	unk: GamePedUnk;
}

declare interface GamePedMp extends GamePed {}
