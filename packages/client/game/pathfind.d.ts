declare interface GetNthClosestVehicleNodeWithHeadingResult {
	outPosition: Vector3;
	outHeading: number;
	unknown1: number;
	result: boolean;
}

declare interface GetNthClosestVehicleNodeIdWithHeadingResult {
	outPosition: Vector3;
	outHeading: number;
	result: number;
}

declare interface GetNthClosestVehicleNodeFavourDirectionResult {
	outPosition: Vector3;
	outHeading: number;
	result: boolean;
}

declare interface GetClosestVehicleNodeWithHeadingResult {
	outPosition: Vector3;
	outHeading: number;
	result: boolean;
}

declare interface GamePathfindLegacy {
	getSupportsGpsRouteFlag(nodeID: number): boolean;
	getIsSlowRoadFlag(nodeID: number): boolean;
}

declare interface GetVehicleNodePropertiesResult {
	density: number;
	flags: number;
	result: boolean;
}

declare interface GetClosestRoadResult {
	p5: Vector3;
	p6: Vector3;
	p7: number;
	p8: number;
	p9: number;
	result: number;
}

declare interface GetRandomVehicleNodeResult {
	outPosition: Vector3;
	nodeId: number;
	result: boolean;
}

declare interface GetStreetNameAtCoordResult {
	streetName: number;
	crossingRoad: number;
}

declare interface GenerateDirectionsToCoordResult {
	direction: number;
	p5: number;
	distToNxJunction: number;
	result: number;
}

declare interface GamePathfindUnk {
	_0xAA76052DDA9BFC3E(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	_0xF3162836C28F9DA5(p0: number, p1: number, p2: number, p3: number): number;
	_0x01708E8DD3FF8C65(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;
}

declare interface GamePathfind extends GamePathfindLegacy {
	setRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, nodeEnabled: boolean, unknown2: boolean): void;
	setRoadsInAngledArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		unknown1: boolean,
		unknown2: boolean,
		unknown3: boolean
	): void;
	setPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: boolean, p7: number): void;
	getSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, flags: number): Vector3;
	getClosestVehicleNode(x: number, y: number, z: number, nodeType: number, p5: number, p6: number): Vector3;
	getClosestMajorVehicleNode(x: number, y: number, z: number, unknown1: number, unknown2: number): Vector3;
	getClosestVehicleNodeWithHeading(
		x: number,
		y: number,
		z: number,
		nodeType: number,
		p6: number,
		p7: number
	): GetClosestVehicleNodeWithHeadingResult;
	getNthClosestVehicleNode(x: number, y: number, z: number, nthClosest: number, unknown1: number, unknown2: number, unknown3: number): Vector3;
	getNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): number;
	getNthClosestVehicleNodeWithHeading(
		x: number,
		y: number,
		z: number,
		nthClosest: number,
		unknown2: number,
		unknown3: number,
		unknown4: number
	): GetNthClosestVehicleNodeWithHeadingResult;
	getNthClosestVehicleNodeIdWithHeading(
		x: number,
		y: number,
		z: number,
		nthClosest: number,
		p6: number,
		p7: number,
		p8: number
	): GetNthClosestVehicleNodeIdWithHeadingResult;
	getNthClosestVehicleNodeFavourDirection(
		x: number,
		y: number,
		z: number,
		desiredX: number,
		desiredY: number,
		desiredZ: number,
		nthClosest: number,
		nodetype: number,
		p10: number,
		p11: number
	): GetNthClosestVehicleNodeFavourDirectionResult;
	getVehicleNodeProperties(x: number, y: number, z: number): GetVehicleNodePropertiesResult;
	isVehicleNodeIdValid(vehicleNodeId: number): boolean;
	getVehicleNodePosition(nodeId: number): Vector3;
	getVehicleNodeIsGpsAllowed(nodeID: number): boolean;
	getVehicleNodeIsSwitchedOff(nodeID: number): boolean;
	getClosestRoad(x: number, y: number, z: number, p3: number, p4: number, p10: boolean): GetClosestRoadResult;
	setAllPathsCacheBoundingstruct(toggle: boolean): void;
	setAiGlobalPathNodesType(type: number): void;
	areNodesLoadedForArea(x1: number, y1: number, x2: number, y2: number): boolean;
	requestPathsPreferAccurateBoundingstruct(x1: number, y1: number, x2: number, y2: number): boolean;
	setRoadsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	setRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, p7: number): void;
	setAmbientPedRangeMultiplierThisFrame(multiplier: number): void;
	setPedPathsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	getRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean): GetRandomVehicleNodeResult;
	getStreetNameAtCoord(x: number, y: number, z: number): GetStreetNameAtCoordResult;
	generateDirectionsToCoord(x: number, y: number, z: number, p3: boolean): GenerateDirectionsToCoordResult;
	setIgnoreNoGpsFlag(toggle: boolean): void;
	setIgnoreSecondaryRouteNodes(toggle: boolean): void;
	setGpsDisabledZone(x1: number, y1: number, z1: number, x2: number, y2: number, z3: number): void;
	getGpsBlipRouteLength(): number;
	getGpsBlipRouteFound(): boolean;
	getRoadSidePointWithHeading(x: number, y: number, z: number, heading: number): Vector3;
	getPointOnRoadSide(x: number, y: number, z: number, p3: number): Vector3;
	isPointOnRoad(x: number, y: number, z: number, vehicle: number): boolean;
	getNextGpsDisabledZoneIndex(): number;
	setGpsDisabledZoneAtIndex(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, index: number): void;
	clearGpsDisabledZoneAtIndex(index: number): void;
	addNavmeshRequiredRegion(x: number, y: number, radius: number): void;
	removeNavmeshRequiredRegions(): void;
	isNavmeshRequiredRegionOwnedByAnyThread(): boolean;
	disableNavmeshInArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	areAllNavmeshRegionsLoaded(): boolean;
	isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	addNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: number): number;
	updateNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;
	removeNavmeshBlockingObject(p0: number): void;
	doesNavmeshBlockingObjectExist(p0: number): boolean;
	getHeightmapTopZForPosition(x: number, y: number): number;
	getHeightmapTopZForArea(x1: number, y1: number, x2: number, y2: number): number;
	getHeightmapBottomZForPosition(x: number, y: number): number;
	getHeightmapBottomZForArea(x1: number, y1: number, x2: number, y2: number): number;
	calculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

	unk: GamePathfindUnk;
}

declare interface GamePathfindMp extends GamePathfind {}
