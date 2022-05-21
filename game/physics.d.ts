declare interface GamePhysicsLegacy {
	getRopeLength(ropeId: number): number;
}

declare interface GamePhysicsUnk {
	_0xA1AE736541B0FCA3(p1: boolean): number;
	_0x36CCB9BE67B970FD(ropeId: number, p1: boolean): void;
	_0x84DE3B5FB3E666F0(): number;
	_0xBC0CE682D4D05650(
		ropeId: number,
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
	): void;
	_0xB1B6216CA2E7B55E(p0: number, p1: boolean, p2: boolean): void;
	_0xB743F735C03D7810(ropeId: number, p1: number): void;
	_0xCC6E963682533882(object: number): void;
	_0x9EBD751E5787BAF2(p0: boolean): void;
}

declare interface AddRopeResult {
	unkPtr: number;
	result: number;
}

declare interface AttachEntitiesToRopeResult {
	p12: number;
	p13: number;
}

declare interface GamePhysics extends GamePhysicsLegacy {
	addRope(
		x: number,
		y: number,
		z: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		length: number,
		ropeType: number,
		maxLength: number,
		minLength: number,
		windingSpeed: number,
		p11: boolean,
		p12: boolean,
		rigid: boolean,
		p14: number,
		breakWhenShot: boolean
	): AddRopeResult;
	deleteRope(ropeId: number): void;
	deleteChildRope(ropeId: number): void;
	doesRopeExist(): number;
	ropeDrawShadowEnabled(toggle: boolean): number;
	loadRopeData(ropeId: number, rope_preset: string): void;
	pinRopeVertex(ropeId: number, vertex: number, x: number, y: number, z: number): void;
	unpinRopeVertex(ropeId: number, vertex: number): void;
	getRopeVertexCount(ropeId: number): number;
	attachEntitiesToRope(
		ropeId: number,
		ent1: number,
		ent2: number,
		ent1_x: number,
		ent1_y: number,
		ent1_z: number,
		ent2_x: number,
		ent2_y: number,
		ent2_z: number,
		length: number,
		p10: boolean,
		p11: boolean
	): AttachEntitiesToRopeResult;
	attachRopeToEntity(ropeId: number, entity: number, x: number, y: number, z: number, p5: boolean): void;
	detachRopeFromEntity(ropeId: number, entity: number): void;
	ropeSetUpdatePinverts(ropeId: number): void;
	ropeSetUpdateOrder(ropeId: number, p1: number): void;
	getRopeLastVertexCoord(ropeId: number): Vector3;
	getRopeVertexCoord(ropeId: number, vertex: number): Vector3;
	startRopeWinding(ropeId: number): void;
	stopRopeWinding(ropeId: number): void;
	startRopeUnwindingFront(ropeId: number): void;
	stopRopeUnwindingFront(ropeId: number): void;
	ropeConvertToSimple(ropeId: number): void;
	ropeLoadTextures(): void;
	ropeAreTexturesLoaded(): boolean;
	ropeUnloadTextures(): void;
	doesRopeBelongToThisScript(ropeId: number): boolean;
	ropeGetDistanceBetweenEnds(ropeId: number): number;
	ropeForceLength(ropeId: number, length: number): void;
	ropeResetLength(ropeId: number, length: number): void;
	applyImpulseToCloth(posX: number, posY: number, posZ: number, vecX: number, vecY: number, vecZ: number, impulse: number): void;
	setDamping(entity: number, vertex: number, value: number): void;
	activate(entity: number): void;
	setCgoffset(entity: number, x: number, y: number, z: number): void;
	getCgoffset(entity: number): Vector3;
	setCgAtBoundcenter(entity: number): void;
	breakEntityGlass(
		entity: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		p10: boolean
	): void;
	getHasObjectFragInst(object: number): boolean;
	setDisableBreaking(object: number, toggle: boolean): void;
	setDisableFragDamage(object: number, toggle: boolean): void;
	setEntityProofUnk(entity: number, toggle: boolean): void;
	setLaunchControlEnabled(toggle: boolean): void;

	unk: GamePhysicsUnk;
}

declare interface GamePhysicsMp extends GamePhysics {}
