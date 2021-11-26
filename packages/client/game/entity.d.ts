declare interface PlaySynchronizedMapEntityAnimResult {
	p6: number;
	p7: number;
	result: boolean;
}

declare interface GetEntityMatrixResult {
	forwardVector: Vector3;
	rightVector: Vector3;
	upVector: Vector3;
	position: Vector3;
}

declare interface GetEntityQuaternionResult {
	x: number;
	y: number;
	z: number;
	w: number;
}

declare interface GetEntityScriptResult {
	script: number;
	result: string;
}

declare interface GameEntityLegacy {
	getEntityAnimDuration(animDict: string, animName: string): number;
	isAnEntity(handle: number): boolean;
	wouldEntityBeOccluded(entityModelHash: number, x: number, y: number, z: number, p4: boolean): boolean;
	playSynchronizedMapEntityAnim(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number
	): PlaySynchronizedMapEntityAnimResult;
	stopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): boolean;
}

declare interface FindAnimEventPhaseResult {
	p3: number;
	p4: number;
	result: boolean;
}

declare interface GetEntityProofsResult {
	bulletProof: boolean;
	fireProof: boolean;
	explosionProof: boolean;
	collisionProof: boolean;
	meleeProof: boolean;
	steamProof: boolean;
	p7: boolean;
	drownProof: boolean;
	result: boolean;
}

declare interface GameEntityUnk {
	_0x694E00132F2823ED(entity: number, toggle: boolean): void;
	_0x352E2B5CF420BF3B(p0: number, p1: number): void;
	_0xC34BC448DA29F5E9(entity: number, toggle: boolean): void;
	_0xE66377CDDADA4810(entity: number, p1: boolean): void;
	_0x490861B88F4FD846(p0: number): void;
	_0xCEA7C8E1B48FF68C(p0: number, p1: number): void;
	_0x5C3B791D580E0BC2(entity: number, p1: number): void;
	_0x78E8E3A640178255(entity: number): void;
	_0xDC6F8601FAF2E893(entity: number, toggle: boolean): void;
	_0x1A092BB0C3808B96(entity: number, p1: boolean): void;
	_0xB17BC6453F6CF5AC(p0: number, p1: number): void;
	_0x68B562E124CC0AEF(pickup: number, pickup2: number): void;
	_0x36F32DE87082343E(p0: number, p1: number): void;
	_0xD7B80E7C3BEFC396(pickup: number, toggle: boolean): void;
}

declare interface GameEntity extends GameEntityLegacy {
	doesExist(entity: number): boolean;
	doesBelongToThisScript(entity: number, p1: boolean): boolean;
	doesHaveDrawable(entity: number): boolean;
	doesHavePhysics(entity: number): boolean;
	hasAnimFinished(entity: number, animDict: string, animName: string, p3: number): boolean;
	hasBeenDamagedByAnyObject(entity: number): boolean;
	hasBeenDamagedByAnyPed(entity: number): boolean;
	hasBeenDamagedByAnyVehicle(entity: number): boolean;
	hasBeenDamagedByEntity(entity1: number, entity2: number, p2: boolean): boolean;
	hasClearLosToEntity(entity1: number, entity2: number, traceType: number): boolean;
	hasClearLosToEntity2(entity1: number, entity2: number, traceType: number): number;
	hasClearLosToEntityInFront(entity1: number, entity2: number): boolean;
	hasCollidedWithAnything(entity: number): boolean;
	getLastMaterialHitBy(entity: number): number;
	getCollisionNormalOfLastHitFor(entity: number): Vector3;
	forceAiAndAnimationUpdate(entity: number): void;
	getAnimCurrentTime(entity: number, animDict: string, animName: string): number;
	getAnimTotalTime(entity: number, animDict: string, animName: string): number;
	getAnimDuration(animDict: string, animName: string): number;
	getAttachedTo(entity: number): number;
	getCoords(entity: number, alive: boolean): Vector3;
	getForwardVector(entity: number): Vector3;
	getForwardX(entity: number): number;
	getForwardY(entity: number): number;
	getHeading(entity: number): number;
	getPhysicsHeading(entity: number): number;
	getHealth(entity: number): number;
	getMaxHealth(entity: number): number;
	setMaxHealth(entity: number, value: number): void;
	getHeight(entity: number, X: number, Y: number, Z: number, atTop: boolean, inWorldCoords: boolean): number;
	getHeightAboveGround(entity: number): number;
	getMatrix(entity: number): GetEntityMatrixResult;
	getModel(entity: number): number;
	getOffsetFromGivenWorldCoords(entity: number, posX: number, posY: number, posZ: number): Vector3;
	getOffsetFromInWorldCoords(entity: number, offsetX: number, offsetY: number, offsetZ: number): Vector3;
	getPitch(entity: number): number;
	getQuaternion(entity: number): GetEntityQuaternionResult;
	getRoll(entity: number): number;
	getRotation(entity: number, rotationOrder: number): Vector3;
	getRotationVelocity(entity: number): Vector3;
	getScript(entity: number): GetEntityScriptResult;
	getSpeed(entity: number): number;
	getSpeedVector(entity: number, relative: boolean): Vector3;
	getUprightValue(entity: number): number;
	getVelocity(entity: number): Vector3;
	getObjectIndexFromIndex(entity: number): number;
	getPedIndexFromIndex(entity: number): number;
	getVehicleIndexFromIndex(entity: number): number;
	getWorldPositionOfBone(entity: number, boneIndex: number): Vector3;
	getNearestPlayerTo(entity: number): number;
	getNearestPlayerToOnTeam(entity: number, team: number): number;
	getType(entity: number): number;
	getPopulationType(entity: number): number;
	isAn(handle: number): boolean;
	isAPed(entity: number): boolean;
	isAMissionEntity(entity: number): boolean;
	isAVehicle(entity: number): boolean;
	isAnObject(entity: number): boolean;
	isAtCoord(
		entity: number,
		xPos: number,
		yPos: number,
		zPos: number,
		xSize: number,
		ySize: number,
		zSize: number,
		p7: boolean,
		p8: boolean,
		p9: number
	): boolean;
	isAtEntity(entity1: number, entity2: number, xSize: number, ySize: number, zSize: number, p5: boolean, p6: boolean, p7: number): boolean;
	isAttached(entity: number): boolean;
	isAttachedToAnyObject(entity: number): boolean;
	isAttachedToAnyPed(entity: number): boolean;
	isAttachedToAnyVehicle(entity: number): boolean;
	isAttachedToEntity(from: number, to: number): boolean;
	isDead(entity: number, p1: boolean): boolean;
	isInAir(entity: number): boolean;
	isInAngledArea(
		entity: number,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		debug: boolean,
		includeZ: boolean,
		p10: number
	): boolean;
	isInArea(entity: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean, p9: number): boolean;
	isInZone(entity: number, zone: string): boolean;
	isInWater(entity: number): boolean;
	getSubmergedLevel(entity: number): number;
	isOnScreen(entity: number): boolean;
	isPlayingAnim(entity: number, animDict: string, animName: string, taskFlag: number): boolean;
	isStatic(entity: number): boolean;
	isTouchingEntity(entity: number, targetEntity: number): boolean;
	isTouchingModel(entity: number, modelHash: number): boolean;
	isUpright(entity: number, angle: number): boolean;
	isUpsidedown(entity: number): boolean;
	isVisible(entity: number): boolean;
	isVisibleToScript(entity: number): boolean;
	isOccluded(entity: number): boolean;
	wouldBeOccluded(entityModelHash: number, x: number, y: number, z: number, p4: boolean): boolean;
	isWaitingForWorldCollision(entity: number): boolean;
	applyForceToCenterOfMass(
		entity: number,
		forceType: number,
		x: number,
		y: number,
		z: number,
		p5: boolean,
		isDirectionRel: boolean,
		isForceRel: boolean,
		p8: boolean
	): void;
	applyForceTo(
		entity: number,
		forceFlags: number,
		x: number,
		y: number,
		z: number,
		offX: number,
		offY: number,
		offZ: number,
		boneIndex: number,
		isDirectionRel: boolean,
		ignoreUpVec: boolean,
		isForceRel: boolean,
		p12: boolean,
		p13: boolean
	): void;
	attachToEntity(
		entity1: number,
		entity2: number,
		boneIndex: number,
		xPos: number,
		yPos: number,
		zPos: number,
		xRot: number,
		yRot: number,
		zRot: number,
		p9: boolean,
		useSoftPinning: boolean,
		collision: boolean,
		isPed: boolean,
		vertexIndex: number,
		fixedRot: boolean
	): void;
	attachBoneToEntityBone(entity1: number, entity2: number, boneIndex1: number, boneIndex2: number, p4: boolean, p5: boolean): void;
	attachBoneToEntityBonePhysically(entity1: number, entity2: number, boneIndex1: number, boneIndex2: number, p4: boolean, p5: boolean): void;
	attachToEntityPhysically(
		entity1: number,
		entity2: number,
		boneIndex1: number,
		boneIndex2: number,
		xPos1: number,
		yPos1: number,
		zPos1: number,
		xPos2: number,
		yPos2: number,
		zPos2: number,
		xRot: number,
		yRot: number,
		zRot: number,
		breakForce: number,
		fixedRot: boolean,
		p15: boolean,
		collision: boolean,
		p17: boolean,
		p18: number
	): void;
	processAttachments(entity: number): void;
	getBoneIndexByName(entity: number, boneName: string): number;
	clearLastDamageEntity(entity: number): void;
	delete(entity: number): number;
	detach(entity: number, dynamic: boolean, collision: boolean): void;
	freezePosition(entity: number, toggle: boolean): void;
	setCleanupByEngine(entity: number, toggle: boolean): void;
	playAnim(
		entity: number,
		animName: string,
		animDict: string,
		p3: number,
		loop: boolean,
		stayInAnim: boolean,
		p6: boolean,
		delta: number,
		bitset: number
	): boolean;
	playSynchronizedAnim(
		entity: number,
		syncedScene: number,
		animation: string,
		propName: string,
		p4: number,
		p5: number,
		p6: number,
		p7: number
	): boolean;
	playSynchronizedMapAnim(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number
	): PlaySynchronizedMapEntityAnimResult;
	stopSynchronizedMapAnim(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): boolean;
	stopAnim(entity: number, animation: string, animGroup: string, p3: number): number;
	stopSynchronizedAnim(entity: number, p1: number, p2: boolean): boolean;
	hasAnimEventFired(entity: number, actionHash: number): boolean;
	findAnimEventPhase(animDictionary: string, animName: string, p2: string): FindAnimEventPhaseResult;
	setAnimCurrentTime(entity: number, animDictionary: string, animName: string, time: number): void;
	setAnimSpeed(entity: number, animDictionary: string, animName: string, speedMultiplier: number): void;
	setAsMissionEntity(entity: number, p1: boolean, p2: boolean): void;
	setAsNoLongerNeeded(entity: number): number;
	setPedAsNoLongerNeeded(ped: number): number;
	setVehicleAsNoLongerNeeded(vehicle: number): number;
	setObjectAsNoLongerNeeded(object: number): number;
	setCanBeDamaged(entity: number, toggle: boolean): void;
	getCanBeDamaged(entity: number): boolean;
	setCanBeDamagedByRelationshipGroup(entity: number, bCanBeDamaged: boolean, relGroup: number): void;
	setCanBeTargetedWithoutLos(entity: number, toggle: boolean): void;
	setCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;
	getCollisionDisabled(entity: number): boolean;
	setCompletelyDisableCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;
	setCoords(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;
	setCoordsWithoutPlantsReset(
		entity: number,
		xPos: number,
		yPos: number,
		zPos: number,
		alive: boolean,
		deadFlag: boolean,
		ragdollFlag: boolean,
		clearArea: boolean
	): void;
	setCoordsNoOffset(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;
	setDynamic(entity: number, toggle: boolean): void;
	setHeading(entity: number, heading: number): void;
	setHealth(entity: number, health: number, p2: number): void;
	setInvincible(entity: number, toggle: boolean): void;
	setIsTargetPriority(entity: number, p1: boolean, p2: number): void;
	setLights(entity: number, toggle: boolean): void;
	setLoadCollisionFlag(entity: number, toggle: boolean, p2: number): void;
	hasCollisionLoadedAround(entity: number): boolean;
	setMaxSpeed(entity: number, speed: number): void;
	setOnlyDamagedByPlayer(entity: number, toggle: boolean): void;
	setOnlyDamagedByRelationshipGroup(entity: number, p1: boolean, p2: number): void;
	setProofs(
		entity: number,
		bulletProof: boolean,
		fireProof: boolean,
		explosionProof: boolean,
		collisionProof: boolean,
		meleeProof: boolean,
		p6: boolean,
		p7: boolean,
		drownProof: boolean
	): void;
	getProofs(entity: number): GetEntityProofsResult;
	setQuaternion(entity: number, x: number, y: number, z: number, w: number): void;
	setRecordsCollisions(entity: number, toggle: boolean): void;
	setRotation(entity: number, pitch: number, roll: number, yaw: number, rotationOrder: number, p5: boolean): void;
	setVisible(entity: number, toggle: boolean, unk: boolean): void;
	setVelocity(entity: number, x: number, y: number, z: number): void;
	setHasGravity(entity: number, toggle: boolean): void;
	setLodDist(entity: number, value: number): void;
	getLodDist(entity: number): number;
	setAlpha(entity: number, alphaLevel: number, skin: boolean): void;
	getAlpha(entity: number): number;
	resetAlpha(entity: number): void;
	setAlwaysPrerender(entity: number, toggle: boolean): void;
	setRenderScorched(entity: number, toggle: boolean): void;
	setTrafficlightOverride(entity: number, state: number): void;
	createModelSwap(x: number, y: number, z: number, radius: number, originalModel: number, newModel: number, p6: boolean): void;
	removeModelSwap(x: number, y: number, z: number, radius: number, originalModel: number, newModel: number, p6: boolean): void;
	createModelHide(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): void;
	createModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): void;
	removeModelHide(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): void;
	createForcedObject(x: number, y: number, z: number, p3: number, modelHash: number, p5: boolean): void;
	removeForcedObject(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	setNoCollisionEntity(entity1: number, entity2: number, thisFrameOnly: boolean): void;
	setMotionBlur(entity: number, toggle: boolean): void;
	setCanAutoVaultOn(entity: number, toggle: boolean): void;
	setCanClimbOn(entity: number, toggle: boolean): void;
	setDecalsDisabled(entity: number, p1: boolean): void;
	getBoneRotation(entity: number, boneIndex: number): Vector3;
	getBonePosition2(entity: number, boneIndex: number): Vector3;
	getBoneRotationLocal(entity: number, boneIndex: number): Vector3;
	getBoneCount(entity: number): number;
	enableUnk(entity: number): void;
	getPickup(entity: number, modelHash: number): number;

	unk: GameEntityUnk;
}

declare interface GameEntityMp extends GameEntity {}
