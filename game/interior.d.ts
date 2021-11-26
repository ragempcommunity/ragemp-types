declare interface GameInteriorLegacy {
	getInteriorGroupId(interior: number): number;
	getOffsetFromInteriorInWorldCoords(interior: number, x: number, y: number, z: number): Vector3;
	isValidInterior(interior: number): boolean;
	getInteriorAtCoords(x: number, y: number, z: number): number;
	addPickupToInteriorRoomByName(pickup: number, roomName: string): void;
	unpinInterior(interior: number): void;
	isInteriorReady(interior: number): boolean;
	getInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;
	unkGetInteriorAtCoords(x: number, y: number, z: number, typeHash: number): number;
	areCoordsCollidingWithExterior(x: number, y: number, z: number): boolean;
	getInteriorFromCollision(x: number, y: number, z: number): number;
	enableInteriorProp(interior: number, entitySetName: string): void;
	disableInteriorProp(interior: number, entitySetName: string): void;
	isInteriorPropEnabled(interior: number, entitySetName: string): boolean;
	refreshInterior(interior: number): void;
	hideMapObjectThisFrame(mapObjectHash: number): void;
	disableInterior(interior: number, toggle: boolean): void;
	isInteriorDisabled(interior: number): boolean;
	capInterior(interior: number, toggle: boolean): void;
	isInteriorCapped(interior: number): boolean;
}

declare interface GetInteriorInfoResult {
	position: Vector3;
	nameHash: number;
}

declare interface GameInteriorUnk {
	_0x82EBB79E258FA2B7(entity: number, interior: number): void;
	_0x38C1CB1CB119A016(p0: number, p1: number): void;
	_0xAF348AFCB575A441(roomName: string): void;
	_0x405DC2AEF6AF95B9(roomHashKey: number): void;
	_0x4C2330E61D3DEB56(interior: number): number;
	_0x483ACA1176CA93F1(): void;
	_0x7ECDF98587E92DEC(p0: number): void;
	_0x9E6542F0CE8E70A3(toggle: boolean): void;
	_0x7241CCB7D020DB69(entity: number, toggle: boolean): void;
}

declare interface GameInterior extends GameInteriorLegacy {
	getHeading(interior: number): number;
	getInfo(interior: number): GetInteriorInfoResult;
	getGroupId(interior: number): number;
	getOffsetFromInWorldCoords(interior: number, x: number, y: number, z: number): Vector3;
	isScene(): boolean;
	isValid(interior: number): boolean;
	clearRoomForEntity(entity: number): void;
	forceRoomForEntity(entity: number, interior: number, roomHashKey: number): void;
	getRoomKeyFromEntity(entity: number): number;
	getKeyForEntityInRoom(entity: number): number;
	getFromEntity(entity: number): number;
	clearForEntity(entity: number): void;
	forceRoomForGameViewport(interiorID: number, roomHashKey: number): void;
	getRoomKeyForGameViewport(): number;
	clearRoomForGameViewport(): void;
	getFromGameplayCam(): number;
	getAtCoords(x: number, y: number, z: number): number;
	addPickupToRoomByName(pickup: number, roomName: string): void;
	pinInMemory(interior: number): void;
	unpin(interior: number): void;
	isReady(interior: number): boolean;
	getAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;
	getAtCoordsWithTypehash(x: number, y: number, z: number, typeHash: number): number;
	isCollisionMarkedOutside(x: number, y: number, z: number): boolean;
	getFromCollision(x: number, y: number, z: number): number;
	activateEntitySet(interior: number, entitySetName: string): void;
	deactivateEntitySet(interior: number, entitySetName: string): void;
	isEntitySetActive(interior: number, entitySetName: string): boolean;
	setEntitySetColor(interior: number, entitySetName: string, color: number): void;
	refresh(interior: number): void;
	enableExteriorCullModelThisFrame(mapObjectHash: number): void;
	enableScriptCullModelThisFrame(mapObjectHash: number): void;
	disable(interior: number, toggle: boolean): void;
	isDisabled(interior: number): boolean;
	cap(interior: number, toggle: boolean): void;
	isCapped(interior: number): boolean;

	unk: GameInteriorUnk;
}

declare interface GameInteriorMp extends GameInterior {}
