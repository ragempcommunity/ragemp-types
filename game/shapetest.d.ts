declare interface StartShapeTestSurroundingCoordsResult {
	pVec1: Vector3;
	pVec2: Vector3;
	result: number;
}

declare interface GetShapeTestResultResult {
	hit: boolean;
	endCoords: Vector3;
	surfaceNormal: Vector3;
	entityHit: number;
	result: number;
}

declare interface GetShapeTestResultIncludingMaterialResult {
	hit: boolean;
	endCoords: Vector3;
	surfaceNormal: Vector3;
	materialHash: number;
	entityHit: number;
	result: number;
}

declare interface GameShapetest {
	startShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: number, p8: number): number;
	startExpensiveSynchronousShapeTestLosProbe(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		flags: number,
		entity: number,
		p8: number
	): number;
	startShapeTestBoundingBox(entity: number, flags1: number, flags2: number): number;
	startShapeTestBox(
		x: number,
		y: number,
		z: number,
		x1: number,
		y2: number,
		z2: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		p9: number,
		flags: number,
		entity: number,
		p12: number
	): number;
	startShapeTestBound(entity: number, flags1: number, flags2: number): number;
	startShapeTestCapsule(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		radius: number,
		flags: number,
		entity: number,
		p9: number
	): number;
	startShapeTestSweptSphere(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		radius: number,
		flags: number,
		entity: number,
		p9: number
	): number;
	startShapeTestSurroundingCoords(flag: number, entity: number, flag2: number): StartShapeTestSurroundingCoordsResult;
	getShapeTestResult(shapeTestHandle: number): GetShapeTestResultResult;
	getShapeTestResultIncludingMaterial(shapeTestHandle: number): GetShapeTestResultIncludingMaterialResult;
	releaseScriptGuidFromEntity(entityHit: number): void;
}
declare interface GameShapetestMp extends GameShapetest {}
