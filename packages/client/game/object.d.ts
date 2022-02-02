declare interface GetCoordsAndRotationOfClosestObjectOfTypeResult {
	outPosition: Vector3;
	outRotation: Vector3;
	result: number;
}

declare interface GetStateOfClosestDoorOfTypeResult {
	locked: boolean;
	heading: number;
}

declare interface GameObjectLegacy {
	createObject(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;
	createObjectNoOffset(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;
	deleteObject(object: number): number;
	getClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: number, isMission: boolean, p6: boolean, p7: boolean): number;
	hasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: number, p5: number): boolean;
	getObjectOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number, zOffset: number): Vector3;
	setDoorAccelerationLimit(doorHash: number, state: number, requestDoor: boolean, forceUpdate: boolean): void;
	setDoorAjarAngle(doorHash: number, ajar: number, requestDoor: boolean, forceUpdate: boolean): void;
	doesDoorExist(doorHash: number): boolean;
	doesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: number, p5: boolean): boolean;
	getObjectFragmentDamageHealth(p0: number, p1: boolean): number;
	isAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;
	isObjectNearPoint(objectHash: number, x: number, y: number, z: number, range: number): boolean;
	trackObjectVisibility(object: number): void;
	doesPickupObjectExist(pickupObject: number): boolean;
	isPickupWithinRadius(pickupHash: number, x: number, y: number, z: number, radius: number): boolean;
	setTeamPickupObject(object: number, p1: number, p2: boolean): void;
	highlightPlacementCoords(x: number, y: number, z: number, colorIndex: number): void;
	setForceObjectThisFrame(x: number, y: number, z: number, p3: number): void;
}

declare interface GameObjectUnk {
	_0xAFE24E4D29249E4A(object: number, p1: number, p2: number, p3: boolean): boolean;
	_0x2542269291C6AC84(p0: number): number;
	_0x006E4B040ED37EC3(p0: number): void;
	_0xE851471AEFC3374F(p0: number): number;
	_0xA85A21582451E951(doorHash: number, p1: boolean): void;
	_0xC7F29CA00F46350E(p0: boolean): void;
	_0x701FDA1E82076BA4(): void;
	_0x190428512B240692(garageHash: number, vehicles: boolean, peds: boolean, objects: boolean, isNetwork: boolean): void;
	_0x659F9D71F52843F8(id: number, toggle: boolean): void;
	_0x66A49D021870FE88(): void;
	_0xE05F6AEEFEB0BB02(p0: number, p1: number, p2: number): void;
	_0xF9C1681347C8BD15(object: number): void;
	_0xC6033D32241F6FB5(object: number, toggle: boolean): void;
	_0xEB6F1A9B5510A5D2(p0: number, p1: boolean): void;
	_0x394CD08E31313C28(): void;
	_0x826D1EE4D1CAFC78(p0: number, p1: number): void;
	_0x1E3F1B1B891A2AAA(p0: number, p1: number): void;
	_0xD4A7A435B3710D05(x: number, y: number, z: number, radius: number): void;
	_0xB7C6D80FB371659A(): void;
	_0x8DCA505A5C196F05(p0: number, p1: number): void;
	_0xFDC07C58E8AAB715(pickupHash: number): void;
	_0x0596843B34B95CE5(p0: number, p1: number): void;
	_0xA08FE5E49BDC39DD(p0: number, p1: number, p2: boolean): void;
	_0x62454A641B41F3C5(p0: number): void;
	_0x39A5FB7EAF150840(p0: number, p1: number): void;
	_0xDB41D07A45A6D4B7(p0: number): number;
	_0x31F924B53EADDF65(p0: boolean): void;
	_0x858EC9FD25DE04AA(p0: number, p1: number): void;
	_0x8881C98A31117998(p0: number, p1: number): void;
	_0x8CFF648FBD7330F1(p0: number): void;
	_0x46F3ADD1E2D5BAF2(p0: number, p1: number): void;
	_0x641F272B52E2F0F8(p0: number, p1: number): void;
	_0x4C134B4DF76025D0(pickup: number, toggle: boolean): void;
	_0xAA059C615DE9DD03(pickup: number, toggle: boolean): void;
	_0xF92099527DB8E2A7(p0: number, p1: number): void;
	_0xA2C1F5E92AFE49ED(): void;
	_0x762DB2D380B48D04(p0: number): void;
	_0x7813E8B8C4AE4799(pickup: number): void;
	_0xBFFE53AE7E67FCDC(pickup: number, toggle: boolean): void;
	_0xD05A3241B9A86F19(entity: number, toggle: boolean): void;
	_0xB2D0BDE54F0E8E5A(object: number, toggle: boolean): void;
	_0x31574B1B41268673(p0: number, p1: number): void;
	_0xADF084FB8F075D06(object: number): boolean;
	_0x3B2FD68DB5F8331C(object: number, toggle: boolean): void;
	_0x8CAAB2BD3EA58BD4(p0: number): void;
	_0x63ECF581BC70E363(p0: number, p1: number): void;
	_0x734E1714D077DA9A(object: number, toggle: boolean): void;
	_0x1A6CBB06E2D0D79D(object: number, p1: boolean): void;
	_0x3BD770D281982DB5(p0: number, p1: number): number;
	_0x1C57C94A6446492A(object: number, toggle: boolean): void;
	_0xB5B7742424BD4445(object: number, toggle: boolean): void;
}

declare interface GameObject extends GameObjectLegacy {
	create(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;
	createNoOffset(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;
	delete(object: number): number;
	placeOnGroundProperly(object: number): boolean;
	placeOnGroundProperly2(object: number): boolean;
	slide(object: number, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;
	setTargettable(object: number, targettable: boolean): void;
	setSomething(object: number, p1: boolean): void;
	getClosestOfType(x: number, y: number, z: number, radius: number, modelHash: number, isMission: boolean, p6: boolean, p7: boolean): number;
	hasBeenBroken(object: number, p1: number): boolean;
	hasClosestOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: number, p5: number): boolean;
	hasClosestOfTypeBeenCompletelyDestroyed(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): boolean;
	getOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number, zOffset: number): Vector3;
	getCoordsAndRotationOfClosestOfType(
		x: number,
		y: number,
		z: number,
		radius: number,
		modelHash: number,
		rotationOrder: number
	): GetCoordsAndRotationOfClosestObjectOfTypeResult;
	setStateOfClosestDoorOfType(type: number, x: number, y: number, z: number, locked: boolean, heading: number, p6: boolean): void;
	getStateOfClosestDoorOfType(type: number, x: number, y: number, z: number): GetStateOfClosestDoorOfTypeResult;
	doorControl(modelHash: number, x: number, y: number, z: number, locked: boolean, xRotMult: number, yRotMult: number, zRotMult: number): void;
	addDoorToSystem(doorHash: number, modelHash: number, x: number, y: number, z: number, p5: boolean, scriptDoor: boolean, isLocal: boolean): void;
	removeDoorFromSystem(doorHash: number): void;
	doorSystemSetDoorState(doorHash: number, state: number, requestDoor: boolean, forceUpdate: boolean): void;
	doorSystemGetDoorState(doorHash: number): number;
	doorSystemGetDoorPendingState(doorHash: number): number;
	doorSystemSetAutomaticRate(doorHash: number, rate: number, requestDoor: boolean, forceUpdate: boolean): void;
	doorSystemSetAutomaticDistance(doorHash: number, distance: number, requestDoor: boolean, forceUpdate: boolean): void;
	doorSystemSetOpenRatio(doorHash: number, ajar: number, requestDoor: boolean, forceUpdate: boolean): void;
	doorSystemGetOpenRatio(doorHash: number): number;
	doorSystemSetSpringRemoved(doorHash: number, removed: boolean, requestDoor: boolean, forceUpdate: boolean): void;
	doorSystemSetHoldOpen(doorHash: number, toggle: boolean): void;
	isDoorRegisteredWithSystem(doorHash: number): boolean;
	isDoorClosed(doorHash: number): boolean;
	doorSystemGetIsPhysicsLoaded(p0: number): boolean;
	doorSystemFindExistingDoor(x: number, y: number, z: number, modelHash: number): number;
	isGarageEmpty(garageHash: number, p1: boolean, p2: number): boolean;
	isPlayerEntirelyInsideGarage(garageHash: number, player: number, p2: number, p3: number): boolean;
	isPlayerPartiallyInsideGarage(garageHash: number, player: number, p2: number): boolean;
	areEntitiesEntirelyInsideGarage(garageHash: number, p1: boolean, p2: boolean, p3: boolean, p4: number): boolean;
	isAnyEntityEntirelyInsideGarage(garageHash: number, p1: boolean, p2: boolean, p3: boolean, p4: number): boolean;
	isEntirelyInsideGarage(garageHash: number, entity: number, p2: number, p3: number): boolean;
	isPartiallyInsideGarage(garageHash: number, entity: number, p2: number): boolean;
	clearGarageArea(garageHash: number, isNetwork: boolean): void;
	enableSavingInGarage(garageHash: number, toggle: boolean): void;
	doesOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: number, p5: boolean): boolean;
	isPointInAngledArea(
		xPos: number,
		yPos: number,
		zPos: number,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		debug: boolean,
		includeZ: boolean
	): boolean;
	setAllowLowLodBuoyancy(object: number, toggle: boolean): void;
	setPhysicsParams(
		object: number,
		weight: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		gravity: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		buoyancy: number
	): void;
	getFragmentDamageHealth(p0: number, p1: boolean): number;
	setActivatePhysicsAsSoonAsItIsUnfrozen(object: number, toggle: boolean): void;
	isAnyNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;
	isNearPoint(objectHash: number, x: number, y: number, z: number, range: number): boolean;
	removeHighDetailModel(object: number): void;
	breakFragmentChild(p0: number, p1: number, p2: boolean): void;
	trackVisibility(object: number): void;
	isVisible(object: number): boolean;
	setUnkGlobalBoolRelatedToDamage(value: boolean): void;
	setCreateWeaponLightSource(object: number, toggle: boolean): void;
	getRayfireMap(x: number, y: number, z: number, radius: number, name: string): number;
	setStateOfRayfireMap(object: number, state: number): void;
	getStateOfRayfireMap(object: number): number;
	doesRayfireMapExist(object: number): boolean;
	getRayfireMapAnimPhase(object: number): number;
	createPickup(pickupHash: number, posX: number, posY: number, posZ: number, p4: number, value: number, p6: boolean, modelHash: number): number;
	createPickupRotate(
		pickupHash: number,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		flag: number,
		amount: number,
		p9: number,
		p10: boolean,
		modelHash: number
	): number;
	createAmbientPickup(
		pickupHash: number,
		posX: number,
		posY: number,
		posZ: number,
		flags: number,
		value: number,
		modelHash: number,
		p7: boolean,
		p8: boolean
	): number;
	createPortablePickup(pickupHash: number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: number): number;
	createPortablePickup2(pickupHash: number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: number): number;
	attachPortablePickupToPed(pickupObject: number, ped: number): void;
	detachPortablePickupFromPed(pickupObject: number): void;
	hidePickup(pickupObject: number, toggle: boolean): void;
	setMaxNumPortablePickupsCarriedByPlayer(modelHash: number, p1: number): void;
	setLocalPlayerCanCollectPortablePickups(p0: boolean): void;
	getSafePickupCoords(x: number, y: number, z: number, p3: number, p4: number): Vector3;
	getPickupCoords(pickup: number): Vector3;
	removeAllPickupsOfType(pickupHash: number): void;
	hasPickupBeenCollected(pickup: number): boolean;
	removePickup(pickup: number): void;
	createMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: number): void;
	doesPickupExist(pickup: number): boolean;
	doesPickupExist(pickupObject: number): boolean;
	getPickup(pickup: number): number;
	isAPortablePickup(object: number): boolean;
	isAPickup(object: number): boolean;
	doesPickupOfTypeExistInArea(pickupHash: number, x: number, y: number, z: number, radius: number): boolean;
	setPickupRegenerationTime(pickup: number, duration: number): void;
	forcePickupRegenerate(p0: number): void;
	toggleUsePickupsForPlayer(player: number, pickupHash: number, toggle: boolean): void;
	setLocalPlayerCanUsePickupsWithThisModel(modelHash: number, toggle: boolean): void;
	setTeamPickup(object: number, p1: number, p2: boolean): void;
	preventCollectionOfPortablePickup(object: number, p1: boolean, p2: boolean): void;
	setPickupGenerationRangeMultiplier(multiplier: number): void;
	getPickupGenerationRangeMultiplier(): number;
	setPickupUncollectable(p0: number, p1: number): void;
	setPickupHiddenWhenUncollectable(p0: number, p1: number): void;
	renderFakePickupGlow(x: number, y: number, z: number, colorIndex: number): void;
	getWeaponTypeFromPickupType(pickupHash: number): number;
	getPickupHashFromWeapon(weaponHash: number): number;
	isPickupWeaponValid(object: number): boolean;
	getTextureVariation(object: number): number;
	setTextureVariation(object: number, textureVariation: number): void;
	setTextureVariationOfClosestOfType(x: number, y: number, z: number, radius: number, modelHash: number, textureVariation: number): boolean;
	setLightColor(object: number, p1: boolean, r: number, g: number, b: number): number;
	setStuntPropSpeedup(object: number, p1: number): void;
	setStuntPropDuration(object: number, duration: number): void;
	getPickupHash(pickupHash: number): number;
	setForceThisFrame(x: number, y: number, z: number, p3: number): void;
	markForDeletion(object: number): void;
	setEnableArenaPropPhysics(object: number, toggle: boolean, p2: number): void;
	setEnableArenaPropPhysicsOnPed(object: number, toggle: boolean, p2: number, ped: number): void;
	getIsArenaPropPhysicsDisabled(object: number, p1: number): boolean;
	getAllInRange(position: Vector3, range?: number, includeDistance?: boolean, sortByDistance?: boolean): void;

	unk: GameObjectUnk;
}

declare interface GameObjectMp extends GameObject {}
