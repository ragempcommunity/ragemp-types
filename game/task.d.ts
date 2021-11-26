declare interface TaskScriptedAnimationResult {
	p1: number;
	p2: number;
	p3: number;
}

declare interface GetNavmeshRouteDistanceRemainingResult {
	distanceRemaining: number;
	isPathReady: boolean;
	result: number;
}

declare interface PlayEntityScriptedAnimResult {
	p1: number;
	p2: number;
	p3: number;
}

declare interface TaskSweepAimPositionResult {
	p1: number;
	p2: number;
	p3: number;
	p4: number;
}

declare interface GameTaskLegacy {
	taskPause(ped: number, ms: number): void;
	taskStandStill(ped: number, time: number): void;
	taskJump(ped: number, unused: boolean, p2: number, p3: number): void;
	taskCower(ped: number, duration: number): void;
	taskHandsUp(ped: number, duration: number, facingPed: number, p3: number, p4: boolean): void;
	updateTaskHandsUpDuration(ped: number, duration: number): void;
	taskOpenVehicleDoor(ped: number, vehicle: number, timeOut: number, seat: number, speed: number): void;
	taskEnterVehicle(ped: number, vehicle: number, timeout: number, seat: number, speed: number, flag: number, p6: number): void;
	taskLeaveVehicle(ped: number, vehicle: number, flags: number): void;
	taskGetOffBoat(ped: number, boat: number): void;
	taskSkyDive(ped: number, p1: boolean): void;
	taskParachute(ped: number, p1: boolean, p2: boolean): void;
	taskParachuteToTarget(ped: number, x: number, y: number, z: number): void;
	setParachuteTaskTarget(ped: number, x: number, y: number, z: number): void;
	setParachuteTaskThrust(ped: number, thrust: number): void;
	taskRappelFromHeli(ped: number, p1: number): void;
	taskVehicleDriveToCoord(
		ped: number,
		vehicle: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		p6: number,
		vehicleModel: number,
		drivingMode: number,
		stopRange: number,
		p10: number
	): void;
	taskVehicleDriveToCoordLongrange(
		ped: number,
		vehicle: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		driveMode: number,
		stopRange: number
	): void;
	taskVehicleDriveWander(ped: number, vehicle: number, speed: number, drivingStyle: number): void;
	taskGoStraightToCoord(
		ped: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: number,
		targetHeading: number,
		distanceToSlide: number
	): void;
	taskAchieveHeading(ped: number, heading: number, timeout: number): void;
	taskFollowPointRoute(ped: number, speed: number, unknown: number): void;
	taskSmartFleeCoord(ped: number, x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean): void;
	taskShockingEventReact(ped: number, eventHandle: number): void;
	taskWanderInArea(ped: number, x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
	taskWanderStandard(ped: number, p1: number, p2: number): void;
	taskVehiclePark(
		ped: number,
		vehicle: number,
		x: number,
		y: number,
		z: number,
		heading: number,
		mode: number,
		radius: number,
		keepEngineOn: boolean
	): void;
	taskStealthKill(killer: number, target: number, actionType: number, p3: number, p4: number): void;
	taskPlantBomb(ped: number, x: number, y: number, z: number, heading: number): void;
	taskFollowNavMeshToCoord(
		ped: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: number,
		stoppingRange: number,
		persistFollowing: boolean,
		unk: number
	): void;
	taskFollowNavMeshToCoordAdvanced(
		ped: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: number,
		unkFloat: number,
		unkInt: number,
		unkX: number,
		unkY: number,
		unkZ: number,
		unk_40000f: number
	): void;
	taskGoToCoordAnyMeans(
		ped: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: number,
		p6: boolean,
		walkingStyle: number,
		p8: number
	): void;
	taskGoToCoordAnyMeansExtraParams(
		ped: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: number,
		p6: boolean,
		walkingStyle: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number,
		p12: number
	): void;
	taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(
		ped: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: number,
		p6: boolean,
		walkingStyle: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number,
		p12: number,
		p13: number
	): void;
	taskPlayAnim(
		ped: number,
		animDictionary: string,
		animationName: string,
		blendInSpeed: number,
		blendOutSpeed: number,
		duration: number,
		flag: number,
		playbackRate: number,
		lockX: boolean,
		lockY: boolean,
		lockZ: boolean
	): void;
	taskPlayAnimAdvanced(
		ped: number,
		animDict: string,
		animName: string,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		animEnterSpeed: number,
		animExitSpeed: number,
		duration: number,
		flag: number,
		animTime: number,
		p14: number,
		p15: number
	): void;
	stopAnimTask(ped: number, animDictionary: string, animationName: string, p3: number): void;
	taskScriptedAnimation(ped: number, p4: number, p5: number): TaskScriptedAnimationResult;
	taskPlayPhoneGestureAnimation(
		ped: number,
		animDict: string,
		animation: string,
		boneMaskType: string,
		p4: number,
		p5: number,
		p6: boolean,
		p7: boolean
	): void;
	taskStopPhoneGestureAnimation(ped: number, p1: number): void;
	taskClearLookAt(ped: number): void;
	taskPerformSequence(ped: number, taskSequenceId: number): void;
	getIsTaskActive(ped: number, taskIndex: number): boolean;
	getScriptTaskStatus(ped: number, taskHash: number): number;
	taskLeaveAnyVehicle(ped: number, p1: number, flags: number): void;
	taskAimGunScripted(ped: number, scriptTask: number, p2: boolean, p3: boolean): void;
	updateTaskAimGunScriptedTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;
	taskAimGunAtCoord(ped: number, x: number, y: number, z: number, time: number, p5: boolean, p6: boolean): void;
	taskShootAtCoord(ped: number, x: number, y: number, z: number, duration: number, firingPattern: number): void;
	taskShuffleToNextVehicleSeat(ped: number, vehicle: number, p2: number): void;
	clearPedSecondaryTask(ped: number): void;
	taskGotoEntityOffset(ped: number, p1: number, p2: number, x: number, y: number, z: number, duration: number): void;
	taskVehicleTempAction(driver: number, vehicle: number, action: number, time: number): void;
	taskVehicleMission(
		driver: number,
		vehicle: number,
		vehicleTarget: number,
		missionType: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		DriveAgainstTraffic: boolean
	): void;
	taskVehicleMissionCoorsTarget(
		ped: number,
		vehicle: number,
		x: number,
		y: number,
		z: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		DriveAgainstTraffic: boolean
	): void;
	taskVehicleEscort(
		ped: number,
		vehicle: number,
		targetVehicle: number,
		mode: number,
		speed: number,
		drivingStyle: number,
		minDistance: number,
		p7: number,
		noRoadsDistance: number
	): void;
	taskVehicleFollow(driver: number, vehicle: number, targetEntity: number, speed: number, drivingStyle: number, minDistance: number): void;
	taskVehicleChase(driver: number, targetEnt: number): void;
	taskVehicleHeliProtect(
		pilot: number,
		vehicle: number,
		entityToFollow: number,
		targetSpeed: number,
		p4: number,
		radius: number,
		altitude: number,
		p7: number
	): void;
	setTaskVehicleChaseBehaviorFlag(ped: number, flag: number, set: boolean): void;
	setTaskVehicleChaseIdealPursuitDistance(ped: number, distance: number): void;
	taskHeliChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;
	taskPlaneChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;
	taskPlaneLand(
		pilot: number,
		plane: number,
		runwayStartX: number,
		runwayStartY: number,
		runwayStartZ: number,
		runwayEndX: number,
		runwayEndY: number,
		runwayEndZ: number
	): void;
	taskHeliMission(
		pilot: number,
		aircraft: number,
		targetVehicle: number,
		targetPed: number,
		destinationX: number,
		destinationY: number,
		destinationZ: number,
		missionFlag: number,
		maxSpeed: number,
		landingRadius: number,
		targetHeading: number,
		unk1: number,
		unk2: number,
		unk3: number,
		landingFlags: number
	): void;
	taskPlaneMission(
		pilot: number,
		aircraft: number,
		targetVehicle: number,
		targetPed: number,
		destinationX: number,
		destinationY: number,
		destinationZ: number,
		missionFlag: number,
		angularDrag: number,
		unk: number,
		targetHeading: number,
		maxZ: number,
		minZ: number,
		p13: number
	): void;
	taskBoatMission(
		pedDriver: number,
		boat: number,
		p2: number,
		p3: number,
		x: number,
		y: number,
		z: number,
		p7: number,
		maxSpeed: number,
		drivingStyle: number,
		p10: number,
		p11: number
	): void;
	taskDriveBy(
		driverPed: number,
		targetPed: number,
		targetVehicle: number,
		targetX: number,
		targetY: number,
		targetZ: number,
		distanceToShoot: number,
		pedAccuracy: number,
		p8: boolean,
		firingPattern: number
	): void;
	clearDrivebyTaskUnderneathDrivingTask(ped: number): void;
	isDrivebyTaskUnderneathDrivingTask(ped: number): boolean;
	isMountedWeaponTaskUnderneathDrivingTask(ped: number): boolean;
	taskUseMobilePhone(ped: number, p1: number, p2: number): void;
	taskUseMobilePhoneTimed(ped: number, duration: number): void;
	taskClimb(ped: number, unused: boolean): void;
	taskClimbLadder(ped: number, p1: number): void;
	taskSetDecisionMaker(ped: number, p1: number): void;
	taskSeekCoverToCoords(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: number, p8: boolean): void;
	taskGuardCurrentPosition(p0: number, p1: number, p2: number, p3: boolean): void;
	taskGuardSphereDefensiveArea(
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
		p10: number
	): void;
	taskStandGuard(ped: number, x: number, y: number, z: number, heading: number, scenarioName: string): void;
	setDriveTaskCruiseSpeed(driver: number, cruiseSpeed: number): void;
	setDriveTaskDrivingStyle(ped: number, drivingStyle: number): void;
	taskStartScenarioInPlace(ped: number, scenarioName: string, unkDelay: number, playEnterAnim: boolean): void;
	taskStartScenarioAtPosition(
		ped: number,
		scenarioName: string,
		x: number,
		y: number,
		z: number,
		heading: number,
		duration: number,
		sittingScenario: boolean,
		teleport: boolean
	): void;
	taskUseNearestScenarioToCoord(ped: number, x: number, y: number, z: number, distance: number, duration: number): void;
	taskUseNearestScenarioToCoordWarp(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;
	pedHasUseScenarioTask(ped: number): boolean;
	taskCombatHatedTargetsInArea(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;
	taskSwapWeapon(ped: number, p1: boolean): void;
	taskReloadWeapon(ped: number, unused: boolean): void;
	taskWrithe(ped: number, target: number, time: number, p3: number, p4: number, p5: number): void;
	taskPatrol(ped: number, p1: string, p2: number, p3: boolean, p4: boolean): void;
	taskStayInCover(ped: number): void;
	taskVehicleShootAtPed(ped: number, target: number, p2: number): void;
	taskVehicleGotoNavmesh(
		ped: number,
		vehicle: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		behaviorFlag: number,
		stoppingRange: number
	): void;
	taskGoToCoordWhileAimingAtCoord(
		ped: number,
		x: number,
		y: number,
		z: number,
		aimAtX: number,
		aimAtY: number,
		aimAtZ: number,
		moveSpeed: number,
		p8: boolean,
		p9: number,
		p10: number,
		p11: boolean,
		flags: number,
		p13: boolean,
		firingPattern: number
	): void;
	taskGoToCoordAndAimAtHatedEntitiesNearCoord(
		pedHandle: number,
		goToLocationX: number,
		goToLocationY: number,
		goToLocationZ: number,
		focusLocationX: number,
		focusLocationY: number,
		focusLocationZ: number,
		speed: number,
		shootAtEnemies: boolean,
		distanceToStopAt: number,
		noRoadsDistance: number,
		unkTrue: boolean,
		unkFlag: number,
		aimingFlag: number,
		firingPattern: number
	): void;
	setHighFallTask(ped: number, p1: number, p2: number, p3: number): void;
	taskVehicleFollowWaypointRecording(
		ped: number,
		vehicle: number,
		WPRecording: string,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: boolean,
		p9: number
	): void;
	taskSetBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;
	taskForceMotionState(ped: number, state: number, p2: boolean): void;
	taskMoveNetwork(ped: number, task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;
	taskMoveNetworkAdvanced(
		ped: number,
		p1: string,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		p10: boolean,
		animDict: string,
		flags: number
	): void;
	taskSynchronizedScene(
		ped: number,
		scene: number,
		animDictionary: string,
		animationName: string,
		speed: number,
		speedMultiplier: number,
		duration: number,
		flag: number,
		playbackRate: number,
		p9: number
	): void;
	updateTaskSweepAimEntity(ped: number, entity: number): void;
}

declare interface GameTaskUnk {
	_0x3E38E28A1D80DDF6(ped: number): boolean;
	_0x6100B3CEFD43452E(p0: number): void;
	_0x53DDC75BC3AC0A90(vehicle: number): void;
	_0x9D252648778160DF(p0: number): number;
	_0xFA83CA6776038F64(x: number, y: number, z: number): void;
	_0x1F351CF1C6475734(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
	_0x29682E2CCF21E9B5(
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
		p11: number,
		p12: number,
		p13: number
	): void;
	_0xAB13A5565480B6D9(ped: number, p1: string): number;
	_0x8423541E8B3A1589(p0: number, p1: number, p2: number): void;
	_0x8634CEF2522D987B(ped: number, p1: string, value: number): void;
	_0x0FFB3C758E8C07B9(ped: number, p1: boolean): number;
}

declare interface GameTask extends GameTaskLegacy {
	pause(ped: number, ms: number): void;
	standStill(ped: number, time: number): void;
	jump(ped: number, unused: boolean, p2: number, p3: number): void;
	cower(ped: number, duration: number): void;
	handsUp(ped: number, duration: number, facingPed: number, p3: number, p4: boolean): void;
	updateHandsUpDuration(ped: number, duration: number): void;
	openVehicleDoor(ped: number, vehicle: number, timeOut: number, seat: number, speed: number): void;
	enterVehicle(ped: number, vehicle: number, timeout: number, seat: number, speed: number, flag: number, p6: number): void;
	leaveVehicle(ped: number, vehicle: number, flags: number): void;
	getOffBoat(ped: number, boat: number): void;
	skyDive(ped: number, p1: boolean): void;
	parachute(ped: number, p1: boolean, p2: boolean): void;
	parachuteToTarget(ped: number, x: number, y: number, z: number): void;
	setParachuteTarget(ped: number, x: number, y: number, z: number): void;
	setParachuteThrust(ped: number, thrust: number): void;
	rappelFromHeli(ped: number, p1: number): void;
	vehicleDriveToCoord(
		ped: number,
		vehicle: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		p6: number,
		vehicleModel: number,
		drivingMode: number,
		stopRange: number,
		p10: number
	): void;
	vehicleDriveToCoordLongrange(
		ped: number,
		vehicle: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		driveMode: number,
		stopRange: number
	): void;
	vehicleDriveWander(ped: number, vehicle: number, speed: number, drivingStyle: number): void;
	followToOffsetOfEntity(
		ped: number,
		entity: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		movementSpeed: number,
		timeout: number,
		stoppingRange: number,
		persistFollowing: boolean
	): void;
	goStraightToCoord(
		ped: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: number,
		targetHeading: number,
		distanceToSlide: number
	): void;
	goStraightToCoordRelativeToEntity(entity1: number, entity2: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	achieveHeading(ped: number, heading: number, timeout: number): void;
	flushRoute(): void;
	extendRoute(x: number, y: number, z: number): void;
	followPointRoute(ped: number, speed: number, unknown: number): void;
	goToEntity(entity: number, target: number, duration: number, distance: number, speed: number, p5: number, p6: number): void;
	smartFleeCoord(ped: number, x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean): void;
	smartFleePed(ped: number, fleeTarget: number, distance: number, fleeTime: number, p4: boolean, p5: boolean): void;
	reactAndFleePed(ped: number, fleeTarget: number): void;
	shockingEventReact(ped: number, eventHandle: number): void;
	wanderInArea(ped: number, x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
	wanderStandard(ped: number, p1: number, p2: number): void;
	wanderSpecific(p0: number, p1: number, p2: number, p3: number): void;
	vehiclePark(
		ped: number,
		vehicle: number,
		x: number,
		y: number,
		z: number,
		heading: number,
		mode: number,
		radius: number,
		keepEngineOn: boolean
	): void;
	stealthKill(killer: number, target: number, actionType: number, p3: number, p4: number): void;
	plantBomb(ped: number, x: number, y: number, z: number, heading: number): void;
	followNavMeshToCoord(
		ped: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: number,
		stoppingRange: number,
		persistFollowing: boolean,
		unk: number
	): void;
	followNavMeshToCoordAdvanced(
		ped: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: number,
		unkFloat: number,
		unkInt: number,
		unkX: number,
		unkY: number,
		unkZ: number,
		unk_40000f: number
	): void;
	setPedPathCanUseClimbovers(ped: number, Toggle: boolean): void;
	setPedPathCanUseLadders(ped: number, Toggle: boolean): void;
	setPedPathCanDropFromHeight(ped: number, Toggle: boolean): void;
	setPedPathClimbCostModifier(ped: number, modifier: number): void;
	setPedPathMayEnterWater(ped: number, mayEnterWater: boolean): void;
	setPedPathPreferToAvoidWater(ped: number, avoidWater: boolean): void;
	setPedPathAvoidFire(ped: number, avoidFire: boolean): void;
	setGlobalMinBirdFlightHeight(height: number): void;
	getNavmeshRouteDistanceRemaining(ped: number): GetNavmeshRouteDistanceRemainingResult;
	getNavmeshRouteResult(ped: number): number;
	goToCoordAnyMeans(ped: number, x: number, y: number, z: number, speed: number, p5: number, p6: boolean, walkingStyle: number, p8: number): void;
	goToCoordAnyMeansExtraParams(
		ped: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: number,
		p6: boolean,
		walkingStyle: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number,
		p12: number
	): void;
	goToCoordAnyMeansExtraParamsWithCruiseSpeed(
		ped: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: number,
		p6: boolean,
		walkingStyle: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number,
		p12: number,
		p13: number
	): void;
	playAnim(
		ped: number,
		animDictionary: string,
		animationName: string,
		blendInSpeed: number,
		blendOutSpeed: number,
		duration: number,
		flag: number,
		playbackRate: number,
		lockX: boolean,
		lockY: boolean,
		lockZ: boolean
	): void;
	playAnimAdvanced(
		ped: number,
		animDict: string,
		animName: string,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		animEnterSpeed: number,
		animExitSpeed: number,
		duration: number,
		flag: number,
		animTime: number,
		p14: number,
		p15: number
	): void;
	stopAnim(ped: number, animDictionary: string, animationName: string, p3: number): void;
	scriptedAnimation(ped: number, p4: number, p5: number): TaskScriptedAnimationResult;
	playEntityScriptedAnim(p0: number, p4: number, p5: number): PlayEntityScriptedAnimResult;
	stopAnimPlayback(ped: number, p1: number, p2: boolean): void;
	setAnimWeight(p0: number, p1: number, p2: number, p3: number, p4: boolean): void;
	setAnimRate(p0: number, p1: number, p2: number, p3: boolean): void;
	setAnimLooped(p0: number, p1: boolean, p2: number, p3: boolean): void;
	playPhoneGestureAnimation(
		ped: number,
		animDict: string,
		animation: string,
		boneMaskType: string,
		p4: number,
		p5: number,
		p6: boolean,
		p7: boolean
	): void;
	stopPhoneGestureAnimation(ped: number, p1: number): void;
	isPlayingPhoneGestureAnim(ped: number): boolean;
	getPhoneGestureAnimCurrentTime(ped: number): number;
	getPhoneGestureAnimTotalTime(ped: number): number;
	vehiclePlayAnim(vehicle: number, animationSet: string, animationName: string): void;
	lookAtCoord(entity: number, x: number, y: number, z: number, duration: number, p5: number, p6: number): void;
	lookAtEntity(ped: number, lookAt: number, duration: number, unknown1: number, unknown2: number): void;
	clearLookAt(ped: number): void;
	openSequence(): number;
	closeSequence(taskSequenceId: number): void;
	performSequence(ped: number, taskSequenceId: number): void;
	performSequenceLocally(ped: number, taskSequenceId: number): void;
	clearSequence(): number;
	setSequenceToRepeat(taskSequenceId: number, repeat: boolean): void;
	getSequenceProgress(ped: number): number;
	getIsActive(ped: number, taskIndex: number): boolean;
	getScriptStatus(ped: number, taskHash: number): number;
	getActiveVehicleMissionType(vehicle: number): number;
	leaveAnyVehicle(ped: number, p1: number, flags: number): void;
	aimGunScripted(ped: number, scriptTask: number, p2: boolean, p3: boolean): void;
	aimGunScriptedWithTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): void;
	updateAimGunScriptedTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;
	getClipSetForScriptedGun(p0: number): string;
	aimGunAtEntity(ped: number, entity: number, duration: number, p3: boolean): void;
	turnPedToFaceEntity(ped: number, entity: number, duration: number): void;
	aimGunAtCoord(ped: number, x: number, y: number, z: number, time: number, p5: boolean, p6: boolean): void;
	shootAtCoord(ped: number, x: number, y: number, z: number, duration: number, firingPattern: number): void;
	shuffleToNextVehicleSeat(ped: number, vehicle: number, p2: number): void;
	clearPedS(ped: number): void;
	clearPedSecondary(ped: number): void;
	everyoneLeaveVehicle(vehicle: number): void;
	gotoEntityOffset(ped: number, p1: number, p2: number, x: number, y: number, z: number, duration: number): void;
	gotoEntityOffsetXy(p0: number, oed: number, duration: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): void;
	turnPedToFaceCoord(ped: number, x: number, y: number, z: number, duration: number): void;
	vehicleTempAction(driver: number, vehicle: number, action: number, time: number): void;
	vehicleMission(
		driver: number,
		vehicle: number,
		vehicleTarget: number,
		missionType: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		DriveAgainstTraffic: boolean
	): void;
	vehicleMissionPedTarget(
		ped: number,
		vehicle: number,
		pedTarget: number,
		missionType: number,
		maxSpeed: number,
		drivingStyle: number,
		minDistance: number,
		p7: number,
		DriveAgainstTraffic: boolean
	): void;
	vehicleMissionCoorsTarget(
		ped: number,
		vehicle: number,
		x: number,
		y: number,
		z: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		DriveAgainstTraffic: boolean
	): void;
	vehicleEscort(
		ped: number,
		vehicle: number,
		targetVehicle: number,
		mode: number,
		speed: number,
		drivingStyle: number,
		minDistance: number,
		p7: number,
		noRoadsDistance: number
	): void;
	vehicleFollow(driver: number, vehicle: number, targetEntity: number, speed: number, drivingStyle: number, minDistance: number): void;
	vehicleChase(driver: number, targetEnt: number): void;
	vehicleHeliProtect(
		pilot: number,
		vehicle: number,
		entityToFollow: number,
		targetSpeed: number,
		p4: number,
		radius: number,
		altitude: number,
		p7: number
	): void;
	setVehicleChaseBehaviorFlag(ped: number, flag: number, set: boolean): void;
	setVehicleChaseIdealPursuitDistance(ped: number, distance: number): void;
	heliChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;
	planeChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;
	planeLand(
		pilot: number,
		plane: number,
		runwayStartX: number,
		runwayStartY: number,
		runwayStartZ: number,
		runwayEndX: number,
		runwayEndY: number,
		runwayEndZ: number
	): void;
	clearVehicleS(vehicle: number): void;
	planeGotoPreciseVtol(
		ped: number,
		vehicle: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number
	): void;
	submarineGotoAndStop(p0: number, submarine: number, x: number, y: number, z: number, p5: number): void;
	heliMission(
		pilot: number,
		aircraft: number,
		targetVehicle: number,
		targetPed: number,
		destinationX: number,
		destinationY: number,
		destinationZ: number,
		missionFlag: number,
		maxSpeed: number,
		landingRadius: number,
		targetHeading: number,
		unk1: number,
		unk2: number,
		unk3: number,
		landingFlags: number
	): void;
	heliEscortHeli(pilot: number, heli1: number, heli2: number, p3: number, p4: number, p5: number): void;
	planeMission(
		pilot: number,
		aircraft: number,
		targetVehicle: number,
		targetPed: number,
		destinationX: number,
		destinationY: number,
		destinationZ: number,
		missionFlag: number,
		angularDrag: number,
		unk: number,
		targetHeading: number,
		maxZ: number,
		minZ: number,
		p13: number
	): void;
	planeTaxi(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	boatMission(
		pedDriver: number,
		boat: number,
		p2: number,
		p3: number,
		x: number,
		y: number,
		z: number,
		p7: number,
		maxSpeed: number,
		drivingStyle: number,
		p10: number,
		p11: number
	): void;
	driveBy(
		driverPed: number,
		targetPed: number,
		targetVehicle: number,
		targetX: number,
		targetY: number,
		targetZ: number,
		distanceToShoot: number,
		pedAccuracy: number,
		p8: boolean,
		firingPattern: number
	): void;
	setDrivebyTarget(shootingPed: number, targetPed: number, targetVehicle: number, x: number, y: number, z: number): void;
	clearDrivebyUnderneathDrivingTask(ped: number): void;
	isDrivebyUnderneathDrivingTask(ped: number): boolean;
	controlMountedWeapon(ped: number): boolean;
	setMountedWeaponTarget(
		shootingPed: number,
		targetPed: number,
		targetVehicle: number,
		x: number,
		y: number,
		z: number,
		p6: number,
		p7: number
	): void;
	isMountedWeaponUnderneathDrivingTask(ped: number): boolean;
	useMobilePhone(ped: number, p1: number, p2: number): void;
	useMobilePhoneTimed(ped: number, duration: number): void;
	chatToPed(ped: number, target: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
	warpPedIntoVehicle(ped: number, vehicle: number, seat: number): void;
	shootAtEntity(entity: number, target: number, duration: number, firingPattern: number): void;
	climb(ped: number, unused: boolean): void;
	climbLadder(ped: number, p1: number): void;
	rappelDownWall(
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
		p10: number
	): void;
	clearPedTasksImmediately(ped: number): void;
	performSequenceFromProgress(p0: number, p1: number, p2: number, p3: number): void;
	setNextDesiredMoveState(p0: number): void;
	setPedDesiredMoveBlendRatio(ped: number, p1: number): void;
	getPedDesiredMoveBlendRatio(ped: number): number;
	gotoEntityAiming(ped: number, target: number, distanceToStopAt: number, StartAimingDist: number): void;
	setDecisionMaker(ped: number, p1: number): void;
	setSphereDefensiveArea(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	clearDefensiveArea(p0: number): void;
	pedSlideToCoord(ped: number, x: number, y: number, z: number, heading: number, p5: number): void;
	pedSlideToCoordHdgRate(ped: number, x: number, y: number, z: number, heading: number, p5: number, p6: number): void;
	addCoverPoint(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): number;
	removeCoverPoint(coverpoint: number): void;
	doesScriptedCoverPointExistAtCoords(x: number, y: number, z: number): boolean;
	getScriptedCoverPointCoords(coverpoint: number): Vector3;
	combatPed(ped: number, targetPed: number, p2: number, p3: number): void;
	combatPedTimed(p0: number, ped: number, p2: number, p3: number): void;
	seekCoverFromPos(ped: number, x: number, y: number, z: number, duration: number, p5: boolean): void;
	seekCoverFromPed(ped: number, target: number, duration: number, p3: boolean): void;
	seekCoverToCoverPoint(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): void;
	seekCoverToCoords(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: number, p8: boolean): void;
	putPedDirectlyIntoCover(
		ped: number,
		x: number,
		y: number,
		z: number,
		timeout: number,
		p5: boolean,
		p6: number,
		p7: boolean,
		p8: boolean,
		p9: number,
		p10: boolean
	): void;
	exitCover(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	putPedDirectlyIntoMelee(ped: number, meleeTarget: number, p2: number, p3: number, p4: number, p5: boolean): void;
	toggleDuck(p0: boolean, p1: boolean): void;
	guardCurrentPosition(p0: number, p1: number, p2: number, p3: boolean): void;
	guardAssignedDefensiveArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	guardSphereDefensiveArea(
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
		p10: number
	): void;
	standGuard(ped: number, x: number, y: number, z: number, heading: number, scenarioName: string): void;
	setDriveCruiseSpeed(driver: number, cruiseSpeed: number): void;
	setDriveMaxCruiseSpeed(p0: number, p1: number): void;
	setDriveDrivingStyle(ped: number, drivingStyle: number): void;
	addCoverBlockingArea(
		playerX: number,
		playerY: number,
		playerZ: number,
		radiusX: number,
		radiusY: number,
		radiusZ: number,
		p6: boolean,
		p7: boolean,
		p8: boolean,
		p9: boolean
	): void;
	removeAllCoverBlockingAreas(): void;
	startScenarioInPlace(ped: number, scenarioName: string, unkDelay: number, playEnterAnim: boolean): void;
	startScenarioAtPosition(
		ped: number,
		scenarioName: string,
		x: number,
		y: number,
		z: number,
		heading: number,
		duration: number,
		sittingScenario: boolean,
		teleport: boolean
	): void;
	useNearestScenarioToCoord(ped: number, x: number, y: number, z: number, distance: number, duration: number): void;
	useNearestScenarioToCoordWarp(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;
	useNearestScenarioChainToCoord(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	useNearestScenarioChainToCoordWarp(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	doesScenarioExistInArea(x: number, y: number, z: number, radius: number, b: boolean): boolean;
	doesScenarioOfTypeExistInArea(p0: number, p1: number, p2: number, p4: number, p5: boolean): number;
	isScenarioOccupied(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean;
	pedHasUseScenario(ped: number): boolean;
	playAnimOnRunningScenario(ped: number, animDict: string, animName: string): void;
	doesScenarioGroupExist(scenarioGroup: string): boolean;
	isScenarioGroupEnabled(scenarioGroup: string): boolean;
	setScenarioGroupEnabled(scenarioGroup: string, p1: boolean): void;
	resetScenarioGroupsEnabled(): void;
	setExclusiveScenarioGroup(scenarioGroup: string): void;
	resetExclusiveScenarioGroup(): void;
	isScenarioTypeEnabled(scenarioType: string): boolean;
	setScenarioTypeEnabled(scenarioType: string, toggle: boolean): void;
	resetScenarioTypesEnabled(): void;
	isPedActiveInScenario(ped: number): boolean;
	isPedPlayingBaseClipInScenario(ped: number): boolean;
	setPedCanPlayAmbientIdles(ped: number, p1: boolean, p2: boolean): void;
	combatHatedTargetsInArea(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;
	combatHatedTargetsAroundPed(ped: number, radius: number, p2: number): void;
	combatHatedTargetsAroundPedTimed(p0: number, p1: number, p2: number, p3: number): void;
	throwProjectile(ped: number, x: number, y: number, z: number, p4: number, p5: number): void;
	swapWeapon(ped: number, p1: boolean): void;
	reloadWeapon(ped: number, unused: boolean): void;
	isPedGettingUp(ped: number): boolean;
	writhe(ped: number, target: number, time: number, p3: number, p4: number, p5: number): void;
	isPedInWrithe(ped: number): boolean;
	openPatrolRoute(patrolRoute: string): void;
	closePatrolRoute(): void;
	addPatrolRouteNode(p0: number, p1: string, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p8: number): void;
	addPatrolRouteLink(p0: number, p1: number): void;
	createPatrolRoute(): void;
	deletePatrolRoute(patrolRoute: string): void;
	patrol(ped: number, p1: string, p2: number, p3: boolean, p4: boolean): void;
	stayInCover(ped: number): void;
	addVehicleSubAttackCoord(ped: number, x: number, y: number, z: number): void;
	addVehicleSubAttackPed(ped: number, ped2: number): void;
	vehicleShootAtPed(ped: number, target: number, p2: number): void;
	vehicleAimAtPed(ped: number, target: number): void;
	vehicleShootAtCoord(ped: number, x: number, y: number, z: number, p4: number): void;
	vehicleAimAtCoord(ped: number, x: number, y: number, z: number): void;
	vehicleGotoNavmesh(
		ped: number,
		vehicle: number,
		x: number,
		y: number,
		z: number,
		speed: number,
		behaviorFlag: number,
		stoppingRange: number
	): void;
	goToCoordWhileAimingAtCoord(
		ped: number,
		x: number,
		y: number,
		z: number,
		aimAtX: number,
		aimAtY: number,
		aimAtZ: number,
		moveSpeed: number,
		p8: boolean,
		p9: number,
		p10: number,
		p11: boolean,
		flags: number,
		p13: boolean,
		firingPattern: number
	): void;
	goToCoordWhileAimingAtEntity(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: boolean,
		p7: number,
		p8: number,
		p9: boolean,
		p10: number,
		p11: boolean,
		p12: number,
		p13: number
	): void;
	goToCoordAndAimAtHatedEntitiesNearCoord(
		pedHandle: number,
		goToLocationX: number,
		goToLocationY: number,
		goToLocationZ: number,
		focusLocationX: number,
		focusLocationY: number,
		focusLocationZ: number,
		speed: number,
		shootAtEnemies: boolean,
		distanceToStopAt: number,
		noRoadsDistance: number,
		unkTrue: boolean,
		unkFlag: number,
		aimingFlag: number,
		firingPattern: number
	): void;
	goToEntityWhileAimingAtCoord(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: boolean,
		p7: number,
		p8: number,
		p9: boolean,
		p10: boolean,
		p11: number
	): void;
	goToEntityWhileAimingAtEntity(
		ped: number,
		entityToWalkTo: number,
		entityToAimAt: number,
		speed: number,
		shootatEntity: boolean,
		p5: number,
		p6: number,
		p7: boolean,
		p8: boolean,
		firingPattern: number
	): void;
	setHighFall(ped: number, p1: number, p2: number, p3: number): void;
	requestWaypointRecording(name: string): void;
	getIsWaypointRecordingLoaded(name: string): boolean;
	removeWaypointRecording(name: string): void;
	waypointRecordingGetNumPoints(name: string): number;
	waypointRecordingGetCoord(name: string, point: number): Vector3;
	waypointRecordingGetSpeedAtPoint(name: string, point: number): number;
	waypointRecordingGetClosestWaypoint(name: string, x: number, y: number, z: number): number;
	followWaypointRecording(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	isWaypointPlaybackGoingOnForPed(p0: number): boolean;
	getPedWaypointProgress(ped: number): number;
	getPedWaypointDistance(p0: number): number;
	setPedWaypointRouteOffset(p0: number, p1: number, p2: number, p3: number): number;
	getWaypointDistanceAlongRoute(p0: string, p1: number): number;
	waypointPlaybackGetIsPaused(p0: number): boolean;
	waypointPlaybackPause(p0: number, p1: boolean, p2: boolean): void;
	waypointPlaybackResume(p0: number, p1: boolean, p2: number, p3: number): void;
	waypointPlaybackOverrideSpeed(p0: number, p1: number, p2: boolean): void;
	waypointPlaybackUseDefaultSpeed(p0: number): void;
	useWaypointRecordingAsAssistedMovementRoute(name: string, p1: boolean, p2: number, p3: number): void;
	waypointPlaybackStartAimingAtPed(p0: number, p1: number, p2: boolean): void;
	waypointPlaybackStartAimingAtCoord(p0: number, p1: number, p2: number, p3: number, p4: boolean): void;
	waypointPlaybackStartShootingAtPed(p0: number, p1: number, p2: boolean, p3: number): void;
	waypointPlaybackStartShootingAtCoord(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: number): void;
	waypointPlaybackStopAimingOrShooting(p0: number): void;
	assistedMovementRequestRoute(route: string): void;
	assistedMovementRemoveRoute(route: string): void;
	assistedMovementIsRouteLoaded(route: string): boolean;
	assistedMovementSetRouteProperties(route: string, props: number): void;
	assistedMovementOverrideLoadDistanceThisFrame(dist: number): void;
	vehicleFollowWaypointRecording(
		ped: number,
		vehicle: number,
		WPRecording: string,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: boolean,
		p9: number
	): void;
	isWaypointPlaybackGoingOnForVehicle(vehicle: number): boolean;
	getVehicleWaypointProgress(vehicle: number): number;
	getVehicleWaypointTargetPoint(vehicle: number): number;
	vehicleWaypointPlaybackPause(vehicle: number): void;
	vehicleWaypointPlaybackResume(vehicle: number): void;
	vehicleWaypointPlaybackUseDefaultSpeed(vehicle: number): void;
	vehicleWaypointPlaybackOverrideSpeed(vehicle: number, speed: number): void;
	setBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;
	forceMotionState(ped: number, state: number, p2: boolean): void;
	moveNetworkByName(ped: number, task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;
	moveNetworkAdvancedByName(
		ped: number,
		p1: string,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		p10: boolean,
		animDict: string,
		flags: number
	): void;
	moveNetworkByNameWithInitParams(ped: number, p1: string, p3: number, p4: boolean, animDict: string, flags: number): number;
	isMoveNetworkActive(ped: number): boolean;
	isMoveNetworkReadyForTransition(ped: number): boolean;
	requestMoveNetworkStateTransition(ped: number, name: string): boolean;
	getMoveNetworkState(ped: number): string;
	setMoveNetworkSignalFloat(ped: number, signalName: string, value: number): void;
	setMoveNetworkSignalFloat2(ped: number, signalName: string, value: number): void;
	setMoveNetworkSignalBool(ped: number, signalName: string, value: boolean): void;
	getMoveNetworkSignalFloat(ped: number, signalName: string): number;
	getMoveNetworkSignalBool(ped: number, signalName: string): boolean;
	getMoveNetworkEvent(ped: number, eventName: string): boolean;
	isMoveBlendRatioStill(ped: number): boolean;
	isMoveBlendRatioWalking(ped: number): boolean;
	isMoveBlendRatioRunning(ped: number): boolean;
	isMoveBlendRatioSprinting(ped: number): boolean;
	isPedStill(ped: number): boolean;
	isPedWalking(ped: number): boolean;
	isPedRunning(ped: number): boolean;
	isPedSprinting(ped: number): boolean;
	isPedStrafing(ped: number): boolean;
	synchronizedScene(
		ped: number,
		scene: number,
		animDictionary: string,
		animationName: string,
		speed: number,
		speedMultiplier: number,
		duration: number,
		flag: number,
		playbackRate: number,
		p9: number
	): void;
	agitatedAction(ped: number, ped2: number): void;
	sweepAimEntity(ped: number, anim: string, p2: string, p3: string, p4: string, p5: number, vehicle: number, p7: number, p8: number): void;
	updateSweepAimEntity(ped: number, entity: number): void;
	sweepAimPosition(p0: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): TaskSweepAimPositionResult;
	updateSweepAimPosition(p0: number, p1: number, p2: number, p3: number): void;
	arrestPed(ped: number, target: number): void;
	isPedRunningArrest(ped: number): boolean;
	isPedBeingArrested(ped: number): boolean;
	uncuffPed(ped: number): void;
	isPedCuffed(ped: number): boolean;

	unk: GameTaskUnk;
}

declare interface GameTaskMp extends GameTask {}
