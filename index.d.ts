/// <reference path="enums.d.ts" />
/// <reference path="game.d.ts" />
/// <reference path="natives.d.ts" />

declare type Handle = number; // TODO: Temp type. Replace to the Entity, when methods are updated
declare type Hash = number; // TODO: Temp type. Replace to HashOrString, when methods are updated
declare type HashOrString = Hash | string;
declare type Array2d = [number, number];
declare type Array3d = [number, number, number];
declare type Array4d = [number, number, number, number];
declare type RGB = Array3d;
declare type RGBA = Array4d;
declare type VoiceHandle = number;

interface VoiceFxChorus {
	fWetDryMix: number;
	fDepth: number;
	fFeedback: number;
	fFrequency: number;
	lWaveform: number;
	fDelay: number;
	lPhase: RageEnums.Voice.BASSFXPhase;
}

interface VoiceFxCompressor {
	fGain: number;
	fAttack: number;
	fRelease: number;
	fThreshold: number;
	fRatio: number;
	fPredelay: number;
}

interface VoiceFxDistortion {
	fGain: number;
	fEdge: number;
	fPostEQCenterFrequency: number;
	fPostEQBandwidth: number;
	fPreLowpassCutoff: number;
}

interface VoiceFxEcho {
	fWetDryMix: number;
	fFeedback: number;
	fLeftDelay: number;
	fRightDelay: number;
	lPanDelay: number;
}

interface VoiceFxFlanger {
	fWetDryMix: number;
	fDepth: number;
	fFeedback: number;
	fFrequency: number;
	lWaveform: number;
	fDelay: number;
	lPhase: RageEnums.Voice.BASSFXPhase;
}

interface VoiceFxGargle {
	dwRateHz: number;
	dwWaveShape: number;
}

interface VoiceFxI3DL2Reverb {
	lRoom: number;
	lRoomHF: number;
	flRoomRolloffFactor: number;
	flDecayTime: number;
	flDecayHFRatio: number;
	lReflections: number;
	flReflectionsDelay: number;
	lReverb: number;
	flReverbDelay: number;
	flDiffusion: number;
	flDensity: number;
	flHFReference: number;
}

interface VoiceFxParamEq {
	fCenter: number;
	fBandwidth: number;
	fGain: number;
}

interface VoiceFxReverb {
	fInGain: number;
	fReverbMix: number;
	fReverbTime: number;
	fHighFreqRTRatio: number;
}

interface VoiceFxVolume {
	fTarget: number;
	fCurrent: number;
	fTime: number;
	lCurve: number;
}

interface VoiceFxPeakEq {
	lBand: number;
	fBandwidth: number;
	fQ: number;
	fCenter: number;
	fGain: number;
	lChannel: RageEnums.Voice.BASSFXChan;
}

interface VoiceFxBQF {
	lFilter: number;
	fCenter: number;
	fGain: number;
	fBandwidth: number;
	fQ: number;
	fS: number;
	lChannel: RageEnums.Voice.BASSFXChan;
}

declare interface IVector3 {
	x: number;
	y: number;
	z: number;
}

declare class Vector3 {
	public x: number;
	public y: number;
	public z: number;

	constructor(x: number, y: number, z: number);
	constructor(arr: Array3d);
	constructor(obj: IVector3);

	/**
	 * Add a Vector3 to another Vector3 or scalar
	 *
	 * @param otherVec Vector3 or number: The vector or scalar to be added to the callee.
	 */
	add(otherVec: Vector3 | number): Vector3;

	/**
	 * Get the angle (in radians) between two vectors.
	 *
	 * @param otherVec the other vector to calculate the angle to.
	 * @returns The angle (in radians) between two vectors.
	 */
	angleTo(otherVec: Vector3): number;

	/**
	 * Clone a vector
	 *
	 * @returns A copy of a Vector3
	 */
	clone(): Vector3;

	/**
	 * Calculate the cross product of two vectors.
	 * The cross product is a vector that is perpendicular to both input vectors.
	 *
	 * @param otherVec The other vector.
	 */
	cross(otherVec: Vector3): Vector3;

	/**
	 * Divide a Vector3 by another Vector3 or scalar.
	 *
	 * @param otherVec The vector or scalar to divide the callee by.
	 */
	divide(otherVec: Vector3 | number): Vector3;

	/**
	 * Calculate the dot product of two vectors.
	 *
	 * @param otherVec The other vector.
	 */
	dot(otherVec: Vector3): number;

	/**
	 * Test where two Vector3s equal each other.
	 *
	 * @param otherVec The vector to compare to the callee.
	 */
	equals(otherVec: Vector3): boolean;

	/**
	 * Get the magnitude of a Vector3
	 *
	 * @returns The magnitude of a Vector3
	 */
	length(): number;

	/**
	 * Get the maximum partial of a Vector3
	 *
	 * @returns The maximum partial of a Vector3
	 */
	max(): number;

	/**
	 * Get the minimum partial of a Vector3
	 *
	 * @returns The minimum partial of a Vector3
	 */
	min(): number;

	/**
	 * Multiply a Vector3 by another Vector3 or scalar.
	 *
	 * @param otherVec The vector or scalar to be added to the callee.
	 */
	multiply(otherVec: Vector3 | number): Vector3;

	/**
	 * Get the opposite of a Vector3 by flipping the sign of each partial.
	 *
	 * @returns The opposite of a Vector3 by flipping the sign of each partial
	 */
	negative(): Vector3;

	/**
	 * Subtract a Vector3 or scalar from another Vector3.
	 *
	 * @param otherVec The vector or scalar to be subtracted from the callee.
	 */
	subtract(otherVec: Vector3 | number): Vector3;

	/**
	 * TODO: docs
	 */
	toAngles(): Array2d;

	/**
	 * Get an array of the partials of a Vector3.
	 *
	 * @returns An array of the partials of a Vector3
	 */
	toArray(): Array3d;

	/**
	 * Normalized copy of a Vector3- one that has the same direction but with a magnitude of 1.
	 *
	 * @returns Normalized copy of a Vector3- one that has the same direction but with a magnitude of 1.
	 */
	unit(): Vector3;
}

declare interface DiscordMp {
	/**
	 * This function will let you set further details for the [Discord Rich Presence](https://discordapp.com/developers/docs/rich-presence/how-to) field for a player if they have Discord running.
	 *
	 * Each argument represents one line under the 'playing a game' section.
	 *
	 * @param status Detailed status
	 * @param state State
	 *
	 * @example
	 * ```js
	 * mp.discord.update('Playing on Freeroam', 'Playing as Ronald McDonald')
	 * ```
	 *
	 * ![DISCORD_RICH_PRESENCE](https://wiki.rage.mp/images/c/c4/UpdatedRichPresence.jpg),
	 */
	update(status: string, state: string): void;
}

declare interface ConsoleMp {
	/**
	 * Property used to gets/sets the console's verbosity
	 */
	verbosity: RageEnums.Console.Verbosity | string;

	/**
	 * Logs a clientside information message
	 *
	 * @param message The information message
	 * @param save Saves message into a text file in the RAGEMP folder
	 * @param saveAsync Saves message into a text file in the RAGEMP folder asynchronous
	 */
	logInfo(message: string, save?: boolean, saveAsync?: boolean): void;

	/**
	 * Logs a clientside warning message
	 *
	 * @param message The warning message
	 * @param save Saves message into a text file in the RAGEMP folder
	 * @param saveAsync Saves message into a text file in the RAGEMP folder asynchronous
	 */
	logWarning(message: string, save?: boolean, saveAsync?: boolean): void;

	/**
	 * Logs a clientside error message
	 *
	 * @param message The error message
	 * @param save Saves message into a text file in the RAGEMP folder
	 * @param saveAsync Saves message into a text file in the RAGEMP folder asynchronous
	 */
	logError(message: string, save?: boolean, saveAsync?: boolean): void;

	/**
	 * Logs a clientside fatal error message
	 *
	 * @param message The fatal error message
	 * @param save Saves message into a text file in the RAGEMP folder
	 * @param saveAsync Saves message into a text file in the RAGEMP folder asynchronous
	 */
	logFatal(message: string, save?: boolean, saveAsync?: boolean): void;

	clear(): void;
	reset(): void;
}

declare interface KeysMp {
	/**
	 * Binds the key
	 *
	 * @param keyCode Hexadecimal code of [key](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731).
	 * @param keyHold True triggers on keydown, false triggers on keyup (bool)
	 * @param handler Function Handler
	 */
	bind(keyCode: number, keyHold: boolean, handler: Function): void;

	/**
	 * Check if specific key is released
	 *
	 * @param keyCode Hexadecimal code of [key](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731).
	 */
	isUp(keyCode: number): boolean;

	/**
	 * Checks if specific key is pressed down
	 *
	 * @param keyCode Hexadecimal code of [key](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731).
	 */
	isDown(keyCode: number): boolean;

	/**
	 * Unbinds the key
	 *
	 * @param keyCode Hexadecimal code of [key](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731).
	 * @param keyHold True triggers on keydown, false triggers on keyup (bool)
	 * @param handler Only unbind this function handler
	 */
	unbind(keyCode: number, keyHold: boolean, handler?: Function): void;
}

declare interface StorageMp {
	/** Keeps data saved over resource reloads, but is cleared on reconnect.
	 */
	sessionData: unknown;

	/**
	 * Used to set some client-related data.
	 *
	 * Saved on the client, see storage.flush() for more details.
	 *
	 * Data is saved in <path to RAGEMP>/client_resources/<server ip>/.storage
	 *
	 * Thus it is wiped when player deletes client folder.
	 */
	data: { [key: string]: any };

	/**
	 * Flushes storage.data.
	 *
	 * It isn't necessary to flush it after every change since it will be flushed on disconnect, but recommended.
	 *
	 * Data is saved in <path to RAGEMP>/client_resources/<server ip>/.storage
	 */
	flush(): void;
}

declare class EntityMp {
	/**
	 * This property is used for getting an entity ID. The ID is a unique identifier for the entity.
	 *
	 * A server-side ID is NOT the same as a client-side ID.
	 *
	 * Use [remoteId](https://wiki.rage.mp/index.php?title=Entity::remoteId) property if you want it to match the server-side ID.
	 */
	public readonly id: number;

	/**
	 * Returns type of entity.
	 */
	public readonly type: RageEnums.EntityType;

	/**
	 * This property is used for getting shared entity ID.
	 *
	 * This ID is unique for an entity and shared between serverside and clientside.
	 */
	public readonly remoteId: number;

	/**
	 * Returns an entity handle
	 */
	public readonly handle: any;

	/**
	 * This property is used for setting or getting entity alpha.
	 */
	alpha: number;

	/**
	 * This property is used to get or set entity data.
	 */
	data: any;

	/**
	 * This property is used for setting or getting an entity's dimension. The dimension determines who the entity is visible to.
	 */
	dimension: number;

	/**
	 * This property is used for setting or getting an entity's model.
	 */
	model: number;

	/**
	 * This property gets/sets the entity position.
	 */
	position: Vector3;

	/**
	 * This property gets/sets the entity rotation.
	 */
	rotation: Vector3;

	applyForceTo(
		forceType: number,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		boneIndex: number,
		isRel: number,
		p9: boolean,
		highForce: boolean,
		p11: boolean,
		p12: boolean
	): void;
	applyForceToCenterOfMass(forceType: number, x: number, y: number, z: number, p4: boolean, isRel: boolean, highForce: boolean, p7: boolean): void;
	attachTo(
		entity: Handle,
		boneIndex: number,
		xPos: number,
		yPos: number,
		zPos: number,
		xRot: number,
		yRot: number,
		zRot: number,
		p8: boolean,
		useSoftPinning: boolean,
		collision: boolean,
		isPed: boolean,
		vertexIndex: number,
		fixedRot: boolean
	): void;
	attachToPhysically(
		entity: Handle,
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
		p14: boolean,
		collision: boolean,
		p16: boolean,
		p17: number
	): void;
	clearLastDamage(): void;
	destroy(): void;
	detach(p0: boolean, collision: boolean): void;
	dist(position: Vector3): number;
	distSquared(position: Vector3): number;
	doesBelongToThisScript(p0: boolean): boolean;
	doesExist(): boolean;
	doesHaveDrawable(): boolean;
	doesHavePhysics(): boolean;
	forceAiAndAnimationUpdate(): void;
	forceStreamingUpdate(): void;
	freezePosition(toggle: boolean): void;
	getAlpha(): number;
	getAnimCurrentTime(animDict: string, animName: string): number;
	getAnimTotalTime(animDict: string, animName: string): number;
	getAttachedTo(): Handle;
	getBoneIndexByName(boneName: string): number;
	getCollisionNormalOfLastHitFor(): Vector3;
	getCoords(alive: boolean): Vector3;
	getForwardVector(): Vector3;
	getForwardX(): number;
	getForwardY(): number;
	getHeading(): number;
	getHealth(): number;
	getHeight(x: number, y: number, z: number, atTop: boolean, inWorldCoords: boolean): number;
	getHeightAboveGround(): number;
	getLastMaterialHitBy(): Hash;
	getLodDist(): number;
	getMatrix(
		rightVector: Vector3,
		forwardVector: Vector3,
		upVector: Vector3,
		position: Vector3
	): {
		rightVector: Vector3;
		forwardVector: Vector3;
		upVector: Vector3;
		position: Vector3;
	};
	getMaxHealth(): number;
	getModel(): Hash;
	getNearestPlayerTo(): Handle;
	getNearestPlayerToOnTeam(team: number): Handle;
	getObjectIndexFromIndex(): Handle;
	getOffsetFromGivenWorldCoords(posX: number, posY: number, posZ: number): Vector3;
	getOffsetFromInWorldCoords(offsetX: number, offsetY: number, offsetZ: number): Vector3;
	getPedIndexFromIndex(): Handle;
	getPhysicsHeading(): number;
	getPitch(): number;
	getPopulationType(): number;
	getQuaternion(
		x: number,
		y: number,
		z: number,
		w: number
	): {
		x: number;
		y: number;
		z: number;
		w: number;
	};
	getRoll(): number;
	/**
	 * @param {number} - Int (specifies which axis rotates before the other axis in a certain order)
	 *
	 * Rotation Orders
	 * <pre>
	 * 0: ZYX
	 * 1: YZX
	 * 2: ZXY
	 * 3: XZY
	 * 4: YXZ
	 * 5: XYZ
	 * </pre>
	 *
	 * {@link https://wiki.rage.mp/index.php?title=Entity::getRotation|Entity::getRotation}
	 * */
	getRotation(rotationOrder: number): Vector3;
	getRotationVelocity(): Vector3;
	getScript(script: Handle): Handle;
	getSpeed(): number;
	getSpeedVector(relative: boolean): Vector3;
	getSubmergedLevel(): number;
	getType(): number;
	getUprightValue(): number;
	getVariable(value: string): any;
	getVehicleIndexFromIndex(): Handle;
	getVelocity(): Vector3;
	getWorldPositionOfBone(boneIndex: number): Vector3;
	hasAnimEventFired(actionHash: Hash): boolean;
	hasAnimFinished(animDict: string, animName: string, p2: number): boolean;
	hasBeenDamagedBy(entity: Handle, p1: boolean): boolean;
	hasBeenDamagedByAnyObject(): boolean;
	hasBeenDamagedByAnyPed(): boolean;
	hasBeenDamagedByAnyVehicle(): boolean;
	hasClearLosTo(entity: Handle, traceType: number): boolean;
	hasClearLosToInFront(entity: Handle): boolean;
	hasCollidedWithAnything(): boolean;
	hasCollisionLoadedAround(): boolean;
	isAMission(): boolean;
	isAnObject(): boolean;
	isAPed(): boolean;
	isAt(entity: Handle, xSize: number, ySize: number, zSize: number, p4: boolean, p5: boolean, p6: number): boolean;
	isAtCoord(xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, zSize: number, p6: boolean, p7: boolean, p8: number): boolean;
	isAttached(): boolean;
	isAttachedTo(to: Handle): boolean;
	isAttachedToAnyObject(): boolean;
	isAttachedToAnyPed(): boolean;
	isAttachedToAnyVehicle(): boolean;
	isAVehicle(): boolean;
	isCollisonDisabled(): boolean;
	isDead(): boolean;
	isInAir(): boolean;
	isInAngledArea(
		originX: number,
		originY: number,
		originZ: number,
		edgeX: number,
		edgeY: number,
		edgeZ: number,
		angle: number,
		p7: boolean,
		p8: boolean,
		p9: any
	): boolean;
	isInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean, p8: any): boolean;
	isInWater(): boolean;
	isInZone(zone: string): boolean;
	isOccluded(): boolean;
	isOnScreen(): boolean;
	isPlayingAnim(animDict: string, animName: string, p2: number): boolean;
	isStatic(): boolean;
	isTouching(targetEntity: Handle): boolean;
	isTouchingModel(modelHash: Hash): boolean;
	isUpright(angle: number): boolean;
	isUpsidedown(): boolean;
	isVisible(): boolean;
	isVisibleToScript(): boolean;
	isWaitingForWorldCollision(): boolean;
	playAnim(animName: string, propName: string, p2: number, p3: boolean, p4: boolean, p5: boolean, delta: number, bitset: any): boolean;
	playSynchronizedAnim(syncedScene: number, animation: string, propName: string, p3: number, p4: number, p5: any, p6: number): boolean;
	processAttachments(): void;
	resetAlpha(): void;
	setAlpha(alphaLevel: number): void;
	setAlwaysPrerender(toggle: boolean): void;
	setAnimCurrentTime(animDict: string, animName: string, time: number): void;
	setAnimSpeed(animDict: string, animName: string, speedMultiplier: number): void;
	setAsMission(p0: boolean, byThisScript: boolean): void;
	setCanBeDamaged(toggle: boolean): void;
	setCanBeDamagedByRelationshipGroup(p0: boolean, p1: any): void;
	setCanBeTargetedWithoutLos(toggle: boolean): void;
	setCollision(toggle: boolean, keepPhysics: boolean): void;
	setCoords(xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;
	setCoords2(xPos: number, yPos: number, zPos: number, xAxis: number, yAxis: number, zAxis: number, clearArea: boolean): void;
	setCoordsNoOffset(xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;
	setDynamic(toggle: boolean): void;
	setHasGravity(toggle: boolean): void;
	setHeading(heading: number): void;
	setHealth(health: number): void;
	setInvincible(toggle: boolean): void;
	setIsTargetPriority(p0: boolean, p1: number): void;
	setLights(toggle: boolean): void;
	/**
		 * Loads collision grid for an entity spawned outside of a player's loaded area. This allows peds to execute tasks rather than sit dormant because of a lack of a physics grid.
		 *
		 * Certainly not the main usage of this native but when set to true for a Vehicle, it will prevent the vehicle to explode if it is spawned far away from the player.

		 * @param {boolean} toggle
		 *
		 * @return {void}
		 */
	setLoadCollisionFlag(toggle: boolean): void;
	setLodDist(value: number): void;
	setMaxHealth(value: number): void;
	setMaxSpeed(speed: number): void;
	setMotionBlur(toggle: boolean): void;
	setNoCollision(entity: Handle, collision: boolean): void;
	setOnlyDamagedByPlayer(toggle: boolean): void;
	setOnlyDamagedByRelationshipGroup(p0: boolean, p1: any): void;
	setProofs(
		bulletProof: boolean,
		fireProof: boolean,
		explosionProof: boolean,
		collisionProof: boolean,
		meleeProof: boolean,
		p5: boolean,
		p6: boolean,
		drownProof: boolean
	): void;
	setQuaternion(x: number, y: number, z: number, w: number): void;
	setRecordsCollisions(toggle: boolean): void;
	setRenderScorched(toggle: boolean): void;
	setRotation(pitch: number, roll: number, yaw: number, rotationOrder: number, p4: boolean): void;
	setTrafficlightOverride(state: number): void;
	setVelocity(x: number, y: number, z: number): void;
	setVisible(toggle: boolean, p1: boolean): void;
	stopAnim(animation: string, animGroup: string, p2: number): void;
	stopSynchronizedAnim(p0: number, p1: boolean): boolean;
}

declare class EntityMpPool<T> {
	/**
	 * Property used to get the element count of a pool.
	 */
	public readonly length: number;

	/**
	 * Property used to get an element pool size.
	 *
	 * Useful to be used in explicit array size declaration or manual for loop size (non [foreach](https://wiki.rage.mp/index.php?title=Pool::forEach)).
	 */
	public readonly size: number;

	/**
	 * Gets the entities of the specified entity type is streamed.
	 *
	 * @returns An array of how many entities of the specified entity type is streamed.
	 */
	public readonly streamed: T[];

	/**
	 * Gets or sets the maximum amount of streamed entities of a given pool
	 */
	public maxStreamed: number;

	/**
	 * TODO: docs
	 */
	public apply(callingFunction: (...args: any[]) => void, ...args: any[]): void;

	/**
	 * Used to get an element from a pool at an ID.
	 *
	 * @param id Element ID, what you need get from the pool.
	 * @returns An element from a pool at an ID
	 */
	public at(id: number): T;

	/**
	 * Gets the entity with the given handle from his entity pool.
	 *
	 * @param handle Handle of the entity
	 */
	public atHandle(handle: number): T;

	/**
	 * Returns the entity object, if valid from the server-side generated entity.id.
	 *
	 * This is important to know, because the client-side entity.id may be different to the entity.id server-side.
	 *
	 * @param remoteId Entity remote ID (entity.remoteId)
	 * @returns An entity with the selected remote ID from a pool, or undefined if entity with this remote ID does not exists.
	 */
	public atRemoteId(remoteId: number): T;

	/**
	 * Used for check, exists entity with ID in pool or not.
	 *
	 * @param entity Entity ID or the entity itself, what you wanna check in pool.
	 */
	public exists(entity: T | number): boolean;

	/**
	 * Used for calling a function for each element in a pool.
	 *
	 * @param callingFunction Function what will be called
	 */
	public forEach(callingFunction: (entity: T) => void): void;

	/**
	 * Used for calling a function for each element in a pool, but only if it in range of position.
	 *
	 * @param callingFunction Function, what will be called.
	 */
	public forEachInRange(position: Vector3, range: number, callingFunction: (entity: T) => void): void;
	public forEachInRange(position: Vector3, range: number, dimension: number, callingFunction: (entity: T) => void): void;

	/**
	 * Used to call a function for each element in the pool.
	 *
	 * @param dimension Dimension
	 * @param callingFunction Function, what will be called.
	 */
	public forEachInDimension(dimension: number, callingFunction: (entity: T) => void): void;

	/**
	 * Used for calling a function for each element that is in a client's streaming range in a pool
	 * @param callingFunction Function, what will be called.
	 */
	public forEachInStreamRange(callingFunction: (entity: T) => void): void;

	/**
	 * Gets the closest set of entities to a position.
	 *
	 * @param position Vector3
	 * @param limit Limit of results
	 * @returns Array of entities sorted by distance to given position
	 *
	 * @example
	 * ```
	 * const [closestVehicle] = mp.vehicles.getClosest(mp.players.local.position, 1);
	 * ```
	 */
	public getClosest(position: Vector3, limit: number): T[];

	/**
	 * Converts a pool to an array.
	 *
	 * If you don't need to create a new array every time, use [Pool::toArrayFast](https://wiki.rage.mp/index.php?title=Pool::toArrayFast).
	 */
	public toArray(): T[];

	/**
	 * Same as [Pool::toArray](https://wiki.rage.mp/index.php?title=Pool::toArray) except it doesn't create a new array each time and instead updates it and returns the same array.
	 */
	public toArrayFast(): T[];
}

declare interface GuiMp {
	/**
	 * Gui Chat Object
	 */
	chat: GuiChatMp;

	/**
	 * Gui Cursor Object
	 */
	cursor: GuiCursorMp;

	/**
	 * Gui getter for checking if GPU Rendering is enabled
	 */
	readonly isGpuRenderingEnabled: boolean;

	/**
	 * Takes screenshot of game screen and puts at /screenshots/ip_port folder.
	 *
	 * Accessible in CEF via screenshots:// scheme. (Will be available in 0.4)
	 *
	 * You can also use http://screenshots/name.png as a fetcher for your screen shot in CEF
	 *
	 * @param name Screenshot name
	 * @param type Type of screenshot (0 - JPG, 1 - PNG, 2 - BMP)
	 * @param quality Quality (0 - 100)
	 * @param compressionQuality Compression quality (0 - 100)
	 */
	takeScreenshot(name: string, type: RageEnums.ScreenshotType | number, quality: number, compressionQuality: number): void;

	execute(code: string): void;
}

declare interface GuiChatMp {
	/**
	 * Toggles the chat colors.
	 *
	 * If disabled you'll find the color codes.
	 */
	colors: boolean;

	/**
	 * Toggles the chat safe mode.
	 *
	 * When the safe mode is deactivated (safe mode false) then you can use HTML in the chat.
	 */
	safeMode: boolean;

	/**
	 * Enables or disables the chat with a given boolean.
	 */
	activate(state: boolean): void;

	/**
	 * Sends a chat message to the player.
	 */
	push(text: string): void;

	/**
	 * Toggles the chat visibility.
	 */
	show(state: boolean): void;
}

declare interface GuiCursorMp {
	/**
	 * Get X & Y coordinates of cursor.
	 */
	readonly position: Array2d;

	/**
	 * Property used to gets/sets the cursor's visibility.
	 */
	visible: boolean;

	/**
	 * Show or hide the cursor on your screen
	 */
	show(freezeControls: boolean, state: boolean): void;
}

declare interface UserMp {
	preferences: UserMpPreferences;
}

declare interface UserMpPreferences {
	/**
	 * Showing if the user has low-quality server assets enabled
	 */
	lowQualityAssets: boolean;

	/**
	 * Gets the client's language settings (Set inside the RAGE:MP client)
	 */
	language: string;
}

declare interface NametagsMp {
	/**
	 * Specifies whether nametags are enabled or disabled.
	 */
	enabled: boolean;

	/**
	 * This is a client-side function and only needs to be executed once.
	 *
	 * It does not need to be called every frame.
	 */
	set(style: NametagsStyle): void;

	/**
	 * This is a client-side function and only needs to be executed once.
	 *
	 * true by default; when false, passes 3D world coords to render event (so it can be used with set/clearDrawOrigin)
	 */
	useScreen2dCoords(state: boolean): void;

	/**
	 * This is a client-side function and only needs to be executed once.
	 * false by default; you might want to draw nametags in reverse order when enabled
	 */
	orderByDistance(state: boolean): void;
}

declare interface NametagsStyle {
	font: number;
	outline: boolean;
	offset: number;
	veh_offset: number;
	color: RGBA;
	size: number;
	hbar?: NametagsHealthBarStyle;
}

declare interface NametagsHealthBarStyle {
	size: Array2d;
	color: RGBA;
	bg_color: RGBA;
}

declare interface SystemMp {
	readonly isFullscreen: boolean;
	readonly isFocused: boolean;

	/**
	 * Send a Notification direct to the Desktop of the User
	 */
	notify(args: SystemNotifyArgs): void;
}

declare interface SystemNotifyArgs {
	title: string;
	text: string;
	attribute: string;
	duration: number;
	silent: boolean;
}

declare interface VoiceChatMp {
	readonly isAllowed: boolean;
	readonly lastVad: number;

	minVad: number;
	muted: boolean;

	/**
	 * Gets Audio Pre-Processing on the Voicechat.
	 *
	 * Utilized by the Speexdsp library therefore for any setting you wish to check would be best referred to the documentation.
	 *
	 * @param setting Number representing the setting you wish to check (For example SPEEX_PREPROCESS_GET_DEREVERB would be 9) [SpeexDSP PreProcess Source](https://github.com/xiph/speexdsp/blob/master/include/speex/speex_preprocess.h#L98-L212).
	 */
	getPreprocessingParam(setting: number): any;

	/**
	 * Sets Audio Pre-Processing on the Voicechat.
	 *
	 * Utilized by the Speexdsp library therefore for any values and params it would be best to check those.
	 *
	 * @param setting Number representing the setting you wish to check (For example SPEEX_PREPROCESS_GET_DEREVERB would be 9) [SpeexDSP PreProcess Source](https://github.com/xiph/speexdsp/blob/master/include/speex/speex_preprocess.h#L98-L212).
	 * @param value Based on the value allowed in the Speex documentation
	 */
	setPreprocessingParam(setting: number, value: any): void;

	cleanupAndReload(p0: boolean, p1: boolean, p2: boolean): void;
}

declare interface RaycastingMp {
	/**
	 * Cats a ray from Point1 to Point2 and returns the position and entity of what's in the way, or undefined if the way is cleared.
	 *
	 * Flags are intersection bit flags. They tell the ray what to care about and what not to care about when casting.
	 *
	 * Passing -1 will intersect with everything, presumably.
	 *
	 * Raycasts that intersect with mission_entities (flag = 2) has limited range and will not register for far away entities. The range seems to be about 30 metres.
	 */
	testPointToPoint(startPos: Vector3, endPos: Vector3, ignoreEntity?: EntityMp | EntityMp[], flags?: number | number[]): RaycastResult;

	/**
	 * Same as testPointToPoint but async
	 */
	testPointToPointAsync(startPos: Vector3, endPos: Vector3, ignoreEntity?: EntityMp | EntityMp[], flags?: number | number[]): Promise<RaycastResult>;

	/**
	 * Raycast from point to point, where the ray has a radius.
	 */
	testCapsule(startPos: Vector3, endPos: Vector3, radius: number, ignoreEntity?: EntityMp | EntityMp[], flags?: number | number[]): RaycastResult;
}

declare interface RaycastResult {
	entity: EntityMp | number;
	position: Vector3;
	surfaceNormal: Vector3;
}

declare interface BrowserMp {
	/**
	 * Property used to gets/sets the console's active state.
	 */
	active: boolean;

	/**
	 * Property used to gets/sets the browser's url.
	 */
	url: string;

	/**
	 * Destroys browser instance.
	 */
	destroy(): void;

	/**
	 * Calls JavaScript code inside the browser.
	 *
	 * @param executedCode JavaScript code to be executed in browser
	 */
	execute(executedCode: string): void;

	/**
	 * Marks the browser as the chat for the server.
	 */
	markAsChat(): void;

	/**
	 * Reloads current page.
	 *
	 * @param ignoreCache True to ignore cache
	 */
	reload(ignoreCache: boolean): void;

	call(eventName: string, ...args: any[]): void;
	callProc<T = any>(procName: string, ...args: any[]): Promise<T>;
	executeCached(code: string): void;
}

declare interface BrowserMpPool extends EntityMpPool<BrowserMp> {
	'new'(url: string): BrowserMp;
}

declare interface CheckpointMp extends EntityMp {
	/**
	 * This property gets/sets the checkpoint visibility.
	 */
	visible: boolean;
}

declare interface CheckpointMpPool extends EntityMpPool<CheckpointMp> {
	'new'(
		type: number,
		position: Vector3,
		radius: number,
		options?: {
			color?: RGBA;
			dimension?: number;
			direction?: Vector3;
			visible?: boolean;
		}
	): CheckpointMp;
}

declare interface IClientEvents {
	browserCreated: (browser: BrowserMp) => void;
	browserDomReady: (browser: BrowserMp) => void;
	browserLoadingFailed: (browser: BrowserMp) => void;
	playerEnterCheckpoint: (checkpoint: CheckpointMp) => void;
	playerExitCheckpoint: (checkpoint: CheckpointMp) => void;
	consoleCommand: (command: string) => void;
	click: (
		absoluteX: number,
		absoluteY: number,
		upOrDown: 'up' | 'down',
		leftOrRight: 'left' | 'right',
		relativeX: number,
		relativeY: number,
		worldPosition: Vector3,
		hitEntity: number
	) => void;
	playerChat: (text: string) => void;
	playerCommand: (command: string) => void;
	playerDeath: (player: PlayerMp, reason: number, killer: PlayerMp) => void;
	playerJoin: (player: PlayerMp) => void;
	playerQuit: (player: PlayerMp) => void;
	playerReady: () => void;
	playerResurrect: () => void;
	playerRuleTriggered: (rule: string, counter: number) => void;
	playerSpawn: (player: PlayerMp) => void;
	playerWeaponShot: (targetPosition: Vector3, targetEntity?: EntityMp) => void;
	dummyEntityCreated: (dummyType: number, dummy: DummyEntityMp) => void;
	dummyEntityDestroyed: (dummyType: number, dummy: DummyEntityMp) => void;
	entityControllerChange: (entity: EntityMp, newController: PlayerMp) => void;
	incomingDamage: (
		sourceEntity: EntityMp,
		sourcePlayer: PlayerMp,
		targetEntity: EntityMp,
		weapon: number,
		boneIndex: number,
		damage: number
	) => void;
	outgoingDamage: (
		sourceEntity: EntityMp,
		targetEntity: EntityMp,
		targetPlayer: PlayerMp,
		weapon: number,
		boneIndex: number,
		damage: number
	) => void;
	playerStartEnterVehicle: (vehicle: VehicleMp, seat: number) => void;
	playerEnterVehicle: (vehicle: VehicleMp, seat: number) => void;
	playerLeaveVehicle: (vehicle: VehicleMp, seat: number) => void;
	playerStartTalking: (player: PlayerMp) => void;
	playerStopTalking: (player: PlayerMp) => void;
	entityStreamIn: (entity: EntityMp) => void;
	entityStreamOut: (entity: EntityMp) => void;
	render: (nametags: [PlayerMp, number, number, number][]) => void;
	playerCreateWaypoint: (position: Vector3) => void;
	playerReachWaypoint: (player: PlayerMp) => void;
	playerEnterColshape: (shape: ColshapeMp) => void;
	playerExitColshape: (shape: ColshapeMp) => void;
	explosion: (sourcePlayer: PlayerMp, type: RageEnums.Explosions, position: Vector3) => boolean;
	projectile: (sourcePlayer: PlayerMp, weaponHash: number, ammoType: number, position: Vector3, direction: Vector3) => boolean;
}

declare class EventMp {
	// @ts-ignore
	constructor<K extends keyof IClientEvents>(eventName: K, callback: IClientEvents[K]);
	constructor(eventName: string, callback: (...args: any[]) => void);

	/**
	 * Destroys the event
	 */
	public destroy(): void;
}

declare type MultiEventHandlers = Partial<IClientEvents> & Record<string, (...args: any) => void>;

declare interface EventMpPool {
	/**
	 * Alerts client-side with entity's data change for a specified variable
	 *
	 * @param keyName Shared data key's name
	 * @param callback Handler function with parameters
	 */
	addDataHandler<T extends EntityMp>(keyName: string, callback: (entity: T, value: any, oldValue: any) => void): void;

	/**
	 * Registers event handlers.
	 *
	 * Returning true will destroy automatically the event handler.
	 *
	 * @param eventName The name of the event you wish to attach a handler to
	 * @param callback The function that you want the event to trigger, which has to be defined before you add the handler
	 */
	add<K extends keyof IClientEvents>(eventName: K, callback: IClientEvents[K]): void;
	add(eventHandlers: MultiEventHandlers): void;
	add(eventName: string, callback: (...args: any[]) => void): void;

	/**
	 * Register the specified player's Remote Procedure Call (RPC) event and expects a callback.
	 *
	 * @param procedureName The name of the procedure you wish to attach a handler to
	 * @param callback The function that you want the RPC to trigger, which has to be defined before you add the handler
	 */
	addProc(procedureName: string, callback: (...args: any[]) => void): void;
	addProc(procedures: { [name: string]: (...args: any[]) => void }): void;

	/**
	 * Calls registered event handlers. This function can call serverside events from serverside and clientside events from clientside.
	 *
	 * 1.1 - If you're sending number more than 2^31 to client, you need to arg.toString() transform your number on server and parseInt(arg) on client.
	 *
	 * @param eventName The name of the event you wish to call
	 * @param args The arguments
	 */
	call<K extends keyof IClientEvents>(eventName: K, ...args: any[]): void;
	call(eventName: string, ...args: any[]): void;

	/**
	 * Calls a server-side event from a client-side script.
	 *
	 * @param eventName The name of the event you wish to call
	 * @param args The arguments
	 */
	callRemote(eventName: string, ...args: any[]): void;

	/**
	 * Calls a previously registered event on the server using [mp.events.addProc(String eventName [, ...args])](https://wiki.rage.mp/index.php?title=Events::addProc).
	 *
	 * @param procName The name of the procedure name you wish to call
	 * @param args The arguments
	 */
	callRemoteProc<T = any>(procName: string, ...args: any[]): Promise<T>;

	callRemoteUnreliable(eventName: string, ...args: any[]): void;
	cancelPendingRpc(procName?: string): void;
	hasPendingRpc(procName?: string): boolean;

	/**
	 * Removes the specified event from events tree.
	 *
	 * @param eventName Name of the event you want to remove
	 * @param callback The function that you want the event to remove
	 */
	remove<K extends keyof IClientEvents>(eventName: K, callback?: IClientEvents[K]): void;
	remove(eventName: string, callback?: (...args: any[]) => void): void;
	remove(eventNames: string[]): void;
}

declare interface BlipMp {
	dimension: number;
	position: Vector3;
	handle: number;
	id: number;
	remoteId: number;
	type: string;

	addTextComponentSubstringName(): void;
	destroy(): void;
	doesExist(): boolean;
	endTextCommandSetName(): void;
	getAlpha(): number;
	getColour(): number;
	getCoords(): Vector3;
	getFirstInfoId(): BlipMp;
	getHudColour(): number;
	getInfoIdDisplay(): number;
	getInfoIdEntityIndex(): Handle;
	getInfoIdPickupIndex(): PickupMp;
	getInfoIdType(): number;
	getNextInfoId(): BlipMp;
	getSprite(): number;
	getVariable(value: string): any;
	hasVariable(value: string): boolean;
	hideNumberOn(): void;
	isFlashing(): boolean;
	isMissionCreator(): boolean;
	isOnMinimap(): boolean;
	isShortRange(): boolean;
	pulse(): void;
	setAlpha(alpha: number): void;
	setAsFriendly(toggle: boolean): void;
	setAsMissionCreator(toggle: boolean): void;
	setAsShortRange(toggle: boolean): void;
	setBright(toggle: boolean): void;
	setCategory(index: number): void;
	setColour(color: number): void;
	setCoords(position: Vector3): void;
	setDisplay(displayId: number): void;
	setFade(opacity: number, duration: number): void;
	setFlashes(toggle: boolean): void;
	setFlashesAlternate(toggle: boolean): void;
	setFlashInterval(p1: any): void;
	setFlashTimer(duration: number): void;
	setHighDetail(toggle: boolean): void;
	setNameFromTextFile(gxtEntry: string): void;
	setNameToPlayerName(player: PlayerMp): void;
	setPosition(posX: number, posY: number, posZ: number): void;
	setPriority(priority: number): void;
	setRotation(rotation: number): void;
	setRoute(enabled: boolean): void;
	setRouteColour(colour: number): void;
	setScale(scale: number): void;
	setSecondaryColour(r: number, g: number, b: number): void;
	setShowCone(toggle: boolean): void;
	setShowHeadingIndicator(toggle: boolean): void;
	setSprite(spriteId: number): void;
	showNumberOn(number: number): void;
}

declare interface BlipMpPool extends EntityMpPool<BlipMp> {
	'new'(
		sprite: number,
		position: Vector3,
		options?: {
			alpha?: number;
			color?: number;
			dimension?: number;
			drawDistance?: number;
			name?: string;
			rotation?: number;
			scale?: number;
			shortRange?: boolean;
		}
	): BlipMp;
}

declare interface ColshapeMp extends EntityMp {
	triggered: boolean;
}

declare interface ColshapeMpPool extends EntityMpPool<ColshapeMp> {
	newCircle(x: number, y: number, range: number, dimension?: number): ColshapeMp;
	newCuboid(x: number, y: number, z: number, width: number, depth: number, height: number, dimension?: number): ColshapeMp;
	newRectangle(x: number, y: number, width: number, height: number, dimension?: number): ColshapeMp;
	newSphere(x: number, y: number, z: number, range: number, dimension?: number): ColshapeMp;
	newTube(x: number, y: number, z: number, range: number, height: number, dimension?: number): ColshapeMp;
}

declare interface CameraMp {
	handle: Handle;

	animatedShake(p0: string, p1: string, p2: string, p3: number): void;
	attachTo(
		entity: Handle,
		boneIndex: number,
		xPos: number,
		yPos: number,
		zPos: number,
		xRot: number,
		yRot: number,
		zRot: number,
		p8: boolean,
		useSoftPinning: boolean,
		collision: boolean,
		isPed: boolean,
		vertexIndex: number,
		fixedRot: boolean
	): void;
	attachTo(entity: Handle, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;
	attachToPedBone(ped: Handle, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;
	destroy(destroy?: boolean): void;
	detach(): void;
	doesExist(): boolean;
	getAnimCurrentPhase(): number;
	getCoord(): Vector3;
	getDirection(): Vector3;
	getFarClip(): number;
	getFarDof(): number;
	getFov(): number;
	getNearClip(): number;
	getRot(p0: number): Vector3;
	getSplinePhase(): number;
	isActive(): boolean;
	isInterpolating(): boolean;
	isPlayingAnim(animName: string, animDictionary: string): boolean;
	isRendering(): boolean;
	isShaking(): boolean;
	playAnim(
		animName: string,
		animDictionary: string,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		p8: boolean,
		p9: number
	): void;
	playAnim(animName: string, propName: string, p2: number, p3: boolean, p4: boolean, p5: boolean, delta: number, bitset: any): boolean;
	pointAt(entity: EntityMp, offsetX: number, offsetY: number, offsetZ: number, p4: boolean): void;
	pointAtCoord(x: number, y: number, z: number): void;
	pointAtPedBone(ped: Handle, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;
	setActive(active: boolean): void;
	setActiveWithInterp(camFrom: Handle, duration: number, easeLocation: number, easeRotation: number): void;
	setAffectsAiming(toggle: boolean): void;
	setAnimCurrentPhase(phase: number): void;
	setCoord(posX: number, posY: number, posZ: number): void;
	setDebugName(name: string): void;
	setDofFnumberOfLens(p1: number): void;
	setDofFocusDistanceBias(p0: number): void;
	setDofMaxNearInFocusDistance(p0: number): void;
	setDofMaxNearInFocuxDistanceBlendLevel(p0: number): void;
	setDofPlanes(p0: number, p1: number, p2: number, p3: number): void;
	setDofStrength(dofStrength: number): void;
	setFarClip(farClip: number): void;
	setFarDof(farDof: number): void;
	setFov(fieldOfView: number): void;
	setInheritRollVehicle(p1: boolean): void;
	setMotionBlurStrength(strength: number): void;
	setNearClip(nearClip: number): void;
	setNearDof(nearDof: number): void;
	setParams(
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		fov: number,
		duration: number,
		p8: number,
		p9: number,
		p10: number
	): void;
	setRot(rotX: number, rotY: number, rotZ: number, p3: number): void;
	setShakeAmplitude(amplitude: number): void;
	setUseShallowDofMode(toggle: boolean): void;
	shake(type: string, amplitude: number): void;
	stopPointing(): void;
	stopShaking(p0: boolean): void;
}

declare interface CameraMpPool extends EntityMpPool<CameraMp> {
	'new'(name: string, position?: Vector3, rotation?: Vector3, fov?: number): CameraMp;
	gameplay: CameraMp;
}

declare interface PedMpBase extends EntityMp {
	applyBlood(boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string): void;
	applyBloodByZone(p1: any, p2: number, p3: number, p4: any): void;
	applyBloodDamageByZone(p1: any, p2: number, p3: number, p4: any): void;
	applyBloodSpecific(p1: any, p2: number, p3: number, p4: number, p5: number, p6: any, p7: number, p8: any): void;
	applyDamageDecal(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: string): void;
	applyDamagePack(damagePack: string, damage: number, mult: number): void;
	applyDamageTo(damageAmount: number, p2: boolean): void;
	canInCombatSeeTarget(target: Handle): boolean;
	canKnockOffVehicle(): boolean;
	canRagdoll(): boolean;
	clearAllProps(): void;
	clearAlternateMovementAnim(stance: number, p2: number): void;
	clearBloodDamage(): void;
	clearBloodDamageByZone(p1: number): void;
	clearDamageDecalByZone(p1: number, p2: string): void;
	clearDecorations(): void;
	clearDriveByClipsetOverride(): void;
	clearDrivebyTaskUnderneathDrivingTask(): void;
	clearFacialDecorations(): void;
	clearFacialIdleAnimOverride(): void;
	clearLastDamageBone(): void;
	clearProp(propId: number): void;
	clearTasks(): void;
	clearTasksImmediately(): void;
	clearWetness(): void;
	clone(heading: number, networkHandle: boolean, pedHandle: boolean): Handle;
	cloneToTarget(ped2: Handle): void;
	controlMountedWeapon(): boolean;
	forceMotionState(motionStateHash: Hash, p2: boolean, p3: boolean, p4: boolean): boolean;
	forceToOpenParachute(): void;
	getAccuracy(): number;
	getAlertness(): number;
	getAmmoInClip(weapon: Hash): number;
	getArmour(): number;
	getBoneCoords(boneId: number, offsetX: number, offsetY: number, offsetZ: number): Vector3;
	getBoneIndex(boneId: number): number;
	getCauseOfDeath(): Hash;
	getCombatFloat(ped: Handle, p1: number): number;
	getCombatMovement(): number;
	getCombatRange(): number;
	getConfigFlag(flagId: number, p2: boolean): boolean;
	getDeadPickupCoords(p1: number, p2: number): Vector3;
	getDecorationsState(): number;
	getDefensiveAreaPosition(p1: boolean): Vector3;
	getDesiredMoveBlendRatio(): number;
	getDrawableVariation(componentId: number): number;
	getEnveffScale(): number;
	getExtractedDisplacement(worldSpace: boolean): Vector3;
	getFloodInvincibility(p1: boolean): void;
	getGroupIndex(): number;
	getHeadBlendData(headBlendData: {
		shapeFirst: number;
		shapeSecond: number;
		shapeThird: number;
		skinFirst: number;
		skinSecond: number;
		skinThird: number;
		shapeMix: number;
		skinMix: number;
		thirdMix: number;
	}): void;
	getHeadOverlayValue(overlayID: number): number;
	getIsTaskActive(taskNumber: number): boolean;
	getJackTarget(): Handle;
	getLastDamageBone(outBone: number): number;
	getMaxHealth(): number;
	getMeleeTargetFor(): Handle;
	getMoney(): number;
	getMount(): Handle;
	getNavmeshRouteDistanceRemaining(p1: any, p2: any): any;
	getNearbyPeds(sizeAndPeds: number, ignore: number): number;
	getNearbyVehicles(sizeAndVehs: number): number;
	getNumberOfDrawableVariations(componentId: number): number;
	getNumberOfPropDrawableVariations(propId: number): number;
	getNumberOfPropTextureVariations(propId: number, drawableId: number): number;
	getNumberOfTextureVariations(componentId: number, drawableId: number): number;
	getPaletteVariation(componentId: number): number;
	getParachuteLandingType(): number;
	getParachuteState(): number;
	getParachuteTintIndex(tintIndex: number): number;
	getPhoneGestureAnimCurrentTime(): number;
	getPhoneGestureAnimTotalTime(): number;
	getPlayerIsFollowing(): Handle;
	getPropIndex(componentId: number): number;
	getPropTextureIndex(componentId: number): number;
	getRagdollBoneIndex(bone: number): number;
	getRelationshipBetweens(ped2: Handle): void;
	getRelationshipGroupDefaultHash(): Hash;
	getRelationshipGroupHash(): Hash;
	getResetFlag(flagId: number): boolean;
	getScriptTaskStatus(taskHash: Hash): number;
	getSeatIsTryingToEnter(): number;
	getSequenceProgress(): number;
	getsJacker(): Handle;
	getSourceOfDeath(): Handle;
	getTextureVariation(componentId: number): number;
	getTimeOfDeath(): number;
	getType(): number;
	getVehicleIsIn(getLastVehicle: boolean): Handle;
	getVehicleIsTryingToEnter(): Handle;
	getVehicleIsUsing(): Handle;
	giveHelmet(cannotRemove: boolean, helmetFlag: number, textureIndex: number): void;
	giveNmMessage(): void;
	giveWeapon(weapon: RageEnums.Hashes.Weapon | Hash, ammo: number, equipNow: boolean): void;
	hasHeadBlendFinished(): boolean;
	isActiveInScenario(): boolean;
	isAimingFromCover(): boolean;
	isBeingArrested(atArresting: boolean): boolean;
	isBeingJacked(): boolean;
	isBeingStealthKilled(): boolean;
	isBeingStunned(p1: number): boolean;
	isComponentVariationValid(componentId: number, drawableId: number, textureId: number): boolean;
	isConversationDead(): boolean;
	isCuffed(): boolean;
	isDead(): boolean;
	isDeadOrDying(p1: boolean): boolean;
	isDiving(): boolean;
	isDoingDriveby(): boolean;
	isDrivebyTaskUnderneathDrivingTask(): boolean;
	isDucking(): boolean;
	isEvasiveDiving(evadingEntity: Handle): boolean;
	isFacingPed(otherPed: Handle, angle: number): boolean;
	isFalling(): boolean;
	isFatallyInjured(): boolean;
	isFleeing(): boolean;
	isGettingIntoAVehicle(): boolean;
	isGettingUp(): boolean;
	isGoingIntoCover(): boolean;
	isGroupMember(groupId: number): boolean;
	isHangingOnToVehicle(): boolean;
	isHeadtracking(entity: Handle): boolean;
	isHeadtrackingPed(ped2: Handle): boolean;
	isHuman(): boolean;
	isHurt(): boolean;
	isInAnyBoat(): boolean;
	isInAnyHeli(): boolean;
	isInAnyPlane(): boolean;
	isInAnyPoliceVehicle(): boolean;
	isInAnySub(): boolean;
	isInAnyTaxi(): boolean;
	isInAnyTrain(): boolean;
	isInAnyVehicle(atGetIn: boolean): boolean;
	isInCombat(target: Handle): boolean;
	isInCoverFacingLeft(): boolean;
	isInFlyingVehicle(): boolean;
	isInGroup(): boolean;
	isInjured(): boolean;
	isInMeleeCombat(): boolean;
	isInModel(modelHash: Hash): boolean;
	isInParachuteFreeFall(): boolean;
	isInVehicle(vehicle: Handle, atGetIn: boolean): boolean;
	isInWrithe(): boolean;
	isJacking(): boolean;
	isJumpingOutOfVehicle(): boolean;
	isMale(): boolean;
	isModel(modelHash: Hash): boolean;
	isMountedWeaponTaskUnderneathDrivingTask(): boolean;
	isMoveBlendRatioRunning(): boolean;
	isMoveBlendRatioSprinting(): boolean;
	isMoveBlendRatioStill(): boolean;
	isMoveBlendRatioWalking(): boolean;
	isOnAnyBike(): boolean;
	isOnFoot(): boolean;
	isOnMount(): boolean;
	isOnSpecificVehicle(vehicle: Handle): boolean;
	isOnVehicle(): boolean;
	isPerformingStealthKill(): boolean;
	isPlantingBomb(): boolean;
	isPlayingPhoneGestureAnim(): boolean;
	isProne(): boolean;
	isPropValid(componentId: number, drawableId: number, TextureId: number): boolean;
	isRagdoll(): boolean;
	isReloading(): boolean;
	isRunning(): boolean;
	isRunningArrestTask(): boolean;
	isRunningMobilePhoneTask(): boolean;
	isRunningRagdollTask(): boolean;
	isScriptedScenarioUsingConditionalAnim(animDict: string, anim: string): boolean;
	isShooting(): boolean;
	isShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean): boolean;
	isSittingInAnyVehicle(): boolean;
	isSittingInVehicle(vehicle: Handle): boolean;
	isSprinting(): boolean;
	isStill(): boolean;
	isStopped(): boolean;
	isStrafing(): boolean;
	isSwimming(): boolean;
	isSwimmingUnderWater(): boolean;
	isTracked(): boolean;
	isTrackedVisible(): boolean;
	isTryingToEnterALockedVehicle(): boolean;
	isUsingActionMode(): boolean;
	isUsingAnyScenario(): boolean;
	isUsingScenario(scenario: string): boolean;
	isVaulting(): boolean;
	isWalking(): boolean;
	isWearingHelmet(): boolean;
	knockOffProp(p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;
	knockOffVehicle(): void;
	playAnimOnRunningScenario(animDict: string, animName: string): void;
	playFacialAnim(animName: string, animDict: string): void;
	registerHatedTargetsAround(radius: number): void;
	registerheadshot(): number;
	registerTarget(target: Handle): void;
	removeDefensiveArea(toggle: boolean): void;
	removeFromGroup(): void;
	removeHelmet(p2: boolean): void;
	removePreferredCoverSet(): void;
	removeWeapon(weapon: RageEnums.Hashes.Weapon | Hash): void;
	removeAllWeapons(): void;
	resetInVehicleContext(): void;
	resetLastVehicle(): void;
	resetMovementClipset(p1: number): void;
	resetRagdollTimer(): void;
	resetStrafeClipset(): void;
	resetVisibleDamage(): void;
	resetWeaponMovementClipset(): void;
	resurrect(): void;
	reviveInjured(): void;
	setAccuracy(accuracy: number): void;
	setAlertness(value: number): void;
	setAllowedToDuck(toggle: boolean): void;
	setAllowVehiclesOverride(toggle: boolean): void;
	setAlternateMovementAnim(stance: number, animDictionary: string, animationName: string, p4: number, p5: boolean): void;
	setAmmoInClip(weapon: RageEnums.Hashes.Weapon | Hash, ammo: number): void;
	setAngledDefensiveArea(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: boolean): void;
	setArmour(amount: number): void;
	setAsCop(toggle: boolean): void;
	setAsEnemy(toggle: boolean): void;
	setAsGroupLeader(groupId: number): void;
	setAsGroupMember(groupId: number): void;
	setBlendFromParents(p1: any, p2: any, p3: number, p4: number): void;
	setBlockingOfNonTemporaryEvents(toggle: boolean): void;
	setBoundsOrientation(p1: number, p2: number, p3: number, p4: number, p5: number): void;
	setCanArmIk(toggle: boolean): void;
	setCanAttackFriendly(toggle: boolean, p2: boolean): void;
	setCanBeDraggedOut(toggle: boolean): void;
	setCanBeKnockedOffVehicle(state: number): void;
	setCanBeShotInVehicle(toggle: boolean): void;
	setCanBeTargetedWhenInjured(toggle: boolean): void;
	setCanBeTargetedWithoutLos(toggle: boolean): void;
	setCanBeTargetted(toggle: boolean): void;
	setCanBeTargettedByPlayer(player: Handle, toggle: boolean): void;
	setCanBeTargettedByTeam(team: number, toggle: boolean): void;
	setCanCowerInCover(toggle: boolean): void;
	setCanEvasiveDive(toggle: boolean): void;
	setCanHeadIk(toggle: boolean): void;
	setCanLegIk(toggle: boolean): void;
	setCanPeekInCover(toggle: boolean): void;
	setCanPlayAmbientAnims(toggle: boolean): void;
	setCanPlayAmbientBaseAnims(toggle: boolean): void;
	setCanPlayGestureAnims(toggle: boolean): void;
	setCanPlayVisemeAnims(p1: boolean, p2: boolean): void;
	setCanRagdoll(toggle: boolean): void;
	setCanRagdollFromPlayerImpact(toggle: boolean): void;
	setCanSmashGlass(p1: boolean, p2: boolean): void;
	setCanSwitchWeapon(toggle: boolean): void;
	setCanTeleportToGroupLeader(groupHandle: number, toggle: boolean): void;
	setCanTorsoIk(toggle: boolean): void;
	setCanUseAutoConversationLookat(toggle: boolean): void;
	setCapsule(value: number): void;
	setCombatAbility(p1: number): void;
	setCombatAttributes(attributeIndex: number, enabled: boolean): void;
	setCombatFloat(combatType: number, p2: number): void;
	setCombatMovement(combatMovement: number): void;
	setCombatRange(p1: number): void;
	setComponentVariation(componentId: number, drawableId: number, textureId: number, paletteId: number): void;
	setConfigFlag(flagId: number, value: boolean): void;
	setCoordsKeepVehicle(posX: number, posY: number, posZ: number): void;
	setCoordsNoGang(posX: number, posY: number, posZ: number): void;
	setCowerHash(p1: string): void;
	setDecoration(collection: Hash, overlay: Hash): void;
	setDefaultComponentVariation(): void;
	setDefensiveAreaAttachedToPed(
		attachPed: Handle,
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
	setDefensiveAreaDirection(p1: number, p2: number, p3: number, p4: boolean): void;
	setDefensiveSphereAttachedToPed(p1: any, p2: number, p3: number, p4: number, p5: number, p6: boolean): void;
	setDesiredHeading(heading: number): void;
	setDesiredMoveBlendRatio(p1: number): void;
	setDiesInSinkingVehicle(toggle: boolean): void;
	setDiesInstantlyInWater(toggle: boolean): void;
	setDiesInVehicle(toggle: boolean): void;
	setDiesInWater(toggle: boolean): void;
	setDiesWhenInjured(toggle: boolean): void;
	setDriveByClipsetOverride(clipset: string): void;
	setDriverAbility(ability: number): void;
	setDriverAggressiveness(aggressiveness: number): void;
	setDriveTaskCruiseSpeed(cruiseSpeed: number): void;
	setDriveTaskDrivingStyle(drivingStyle: number): void;
	setDucking(toggle: boolean): void;
	setEnableBoundAnkles(toggle: boolean): void;
	setEnableEnveffScale(toggle: boolean): void;
	setEnableHandcuffs(toggle: boolean): void;
	setEnableScuba(toggle: boolean): void;
	setEnableWeaponBlocking(toggle: boolean): void;
	setEnveffScale(value: number): void;
	setExclusivePhoneRelationships(): Handle;
	setEyeColor(index: number): void;
	setFaceFeature(index: number, scale: number): void;
	setFacialDecoration(collection: Hash, overlay: Hash): void;
	setFacialIdleAnimOverride(animName: string, animDict: string): void;
	setFiringPattern(patternHash: Hash): void;
	setFleeAttributes(attributes: number, p2: boolean): void;
	setGeneratesDeadBodyEvents(toggle: boolean): void;
	setGestureGroup(p1: any): void;
	setGetOutUpsideDownVehicle(toggle: boolean): void;
	setGravity(toggle: boolean): void;
	setGroupMemberPassengerIndex(index: number): void;
	setHairColor(colorID: number, highlightColorID: number): void;
	setHeadBlendData(
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
	setHeadOverlay(overlayID: number, index: number, opacity: number, firstColor: number, secondColor: number): void;
	setHeadOverlayColor(overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
	setHearingRange(value: number): void;
	setHelmet(canWearHelmet: boolean): void;
	setHelmetFlag(helmetFlag: number): void;
	setHelmetPropIndex(propIndex: number): void;
	setHelmetTextureIndex(textureIndex: number): void;
	setHighFallTask(p1: any, p2: any, p3: any): void;
	setIdRange(value: number): void;
	setIkTarget(
		p1: number,
		targetPed: Handle,
		boneLookAt: number,
		x: number,
		y: number,
		z: number,
		p7: any,
		duration: number,
		duration1: number
	): void;
	setIntoVehicle(vehicle: Handle, seatIndex: number): void;
	setInVehicleContext(context: Hash): void;
	setKeepTask(toggle: boolean): void;
	setLegIkMode(mode: number): void;
	setLodMultiplier(multiplier: number): void;
	setMaxHealth(value: number): void;
	setMaxMoveBlendRatio(value: number): void;
	setMaxTimeInWater(value: number): void;
	setMaxTimeUnderwater(value: number): void;
	setMinGroundTimeForStungun(ms: number): void;
	setMinMoveBlendRatio(value: number): void;
	setModelIsSuppressed(toggle: boolean): void;
	setMoney(amount: number): void;
	setMotionBlur(toggle: boolean): void;
	setMountedWeaponTarget(targetEntity: Handle, p2: any, x: number, y: number, z: number): void;
	setMoveAnimsBlendOut(): void;
	setMovementClipset(clipSet: string, p2: number): void;
	setMoveRateOverride(value: number): void;
	setNameDebug(name: string): void;
	setNeverLeavesGroup(toggle: boolean): void;
	setParachuteTaskTarget(x: number, y: number, z: number): void;
	setParachuteTaskThrust(thrust: number): void;
	setParachuteTintIndex(tintIndex: number): void;
	setPathAvoidFire(avoidFire: boolean): void;
	setPathCanDropFromHeight(Toggle: boolean): void;
	setPathCanUseClimbovers(Toggle: boolean): void;
	setPathCanUseLadders(Toggle: boolean): void;
	setPathPreferToAvoidWater(avoidWater: boolean): void;
	setPathsWidthPlant(mayEnterWater: boolean): void;
	setPinnedDown(pinned: boolean, i: number): void;
	setPlaysHeadOnHornAnimWhenDiesInVehicle(toggle: boolean): void;
	setPreferredCoverSet(itemSet: any): void;
	setPrimaryLookat(lookAt: Handle): void;
	setPropIndex(componentId: number, drawableId: number, TextureId: number, attach: boolean): void;
	setRagdollFlag(flag: number): void;
	setRagdollForceFall(): void;
	setRagdollOnCollision(toggle: boolean): void;
	setRandomComponentVariation(p1: boolean): void;
	setRandomProps(): void;
	setRelationshipGroupDefaultHash(hash: Hash): void;
	setRelationshipGroupHash(hash: Hash): void;
	setResetFlag(flagId: number, doReset: boolean): void;
	setResetFlagPreferRearSeats(flags: number): void;
	setResetRagdollFlag(flag: number): void;
	setScriptedAnimSeatOffset(p1: number): void;
	setSeeingRange(value: number): void;
	setShootRate(shootRate: number): void;
	setShootsAtCoord(x: number, y: number, z: number, toggle: boolean): void;
	setSphereDefensiveArea(x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;
	setStayInVehicleWhenJacked(toggle: boolean): void;
	setStealthMovement(p1: boolean, action: string): void;
	setSteersAroundObjects(toggle: boolean): void;
	setSteersAroundPeds(toggle: boolean): void;
	setSteersAroundVehicles(toggle: boolean): void;
	setStrafeClipset(clipSet: string): void;
	setSuffersCriticalHits(toggle: boolean): void;
	setSweat(sweat: number): void;
	setTargetLossResponse(responseType: number): void;
	setTaskVehicleChaseBehaviorFlag(flag: number, set: boolean): void;
	setTaskVehicleChaseIdealPursuitDistance(distance: number): void;
	setToInformRespectedFriends(radius: number, maxFriends: number): void;
	setToLoadCover(toggle: boolean): void;
	setToRagdoll(time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): boolean;
	setUsingActionMode(p1: boolean, p2: any, action: string): void;
	setVisualFieldCenterAngle(angle: number): void;
	setVisualFieldMaxAngle(value: number): void;
	setVisualFieldMaxElevationAngle(angle: number): void;
	setVisualFieldMinAngle(value: number): void;
	setVisualFieldMinElevationAngle(angle: number): void;
	setVisualFieldPeripheralRange(range: number): void;
	setWeaponMovementClipset(clipSet: string): void;
	setWetnessEnabledThisFrame(): void;
	setWetnessHeight(height: number): void;
	stopAnimPlayback(p1: any, p2: boolean): void;
	stopAnimTask(animDictionary: string, animationName: string, p3: number): void;
	stopWeaponFiringWhenDropped(): void;
	taskAchieveHeading(heading: number, timeout: number): void;
	taskAimGunAt(entity: Handle, duration: number, p3: boolean): void;
	taskAimGunAtCoord(x: number, y: number, z: number, time: number, p5: boolean, p6: boolean): void;
	taskAimGunScripted(scriptTask: Hash, p2: boolean, p3: boolean): void;
	taskArrest(target: Handle): void;
	taskBoatMission(boat: Handle, p2: any, p3: any, x: number, y: number, z: number, p7: any, maxSpeed: number, p9: any, p10: number, p11: any): void;
	taskChatTo(target: Handle, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number): void;
	taskClearLookAt(): void;
	taskClimb(unused: boolean): void;
	taskClimbLadder(p1: number): void;
	taskCombat(targetPed: Handle, p2: number, p3: number): void;
	taskCombatHatedTargetsAround(radius: number, p2: number): void;
	taskCombatHatedTargetsInArea(x: number, y: number, z: number, radius: number, p5: any): void;
	taskCower(duration: number): void;
	taskDriveBy(
		targetPed: Handle,
		p2: any,
		targetX: number,
		targetY: number,
		targetZ: number,
		p6: number,
		p7: any,
		p8: boolean,
		firingPattern: Hash
	): void;
	taskEnterVehicle(vehicle: Handle, timeout: number, seat: number, speed: number, p5: number, p6: any): void;
	taskFollowNavMeshToCoord(
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
		unk2: number
	): void;
	taskFollowPointRoute(speed: number, unknown: number): void;
	taskFollowToOffsetOf(
		entity: Handle,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		movementSpeed: number,
		timeout: number,
		stoppingRange: number,
		persistFollowing: boolean
	): void;
	taskForceMotionState(state: Hash, p2: boolean): void;
	taskGetOffBoat(boat: Handle): void;
	taskGoStraightToCoord(x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void;
	taskGotoAiming(target: Handle, distanceToStopAt: number, StartAimingDist: number): void;
	taskGoToCoordAndAimAtHatedEntitiesNearCoord(
		gotoX: number,
		gotoY: number,
		gotoZ: number,
		aimNearX: number,
		aimNearY: number,
		aimNearZ: number,
		speed: number,
		shoot: boolean,
		unknown1: number,
		unknown2: number,
		unkTrue: boolean,
		unknown3: number,
		heading: boolean,
		firingPattern: Hash
	): void;
	taskGoToCoordAnyMeans(x: number, y: number, z: number, speed: number, p5: any, p6: boolean, walkingStyle: number, p8: number): void;
	taskGoToCoordAnyMeansExtraParams(
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: any,
		p6: boolean,
		walkingStyle: number,
		p8: number,
		p9: any,
		p10: any,
		p11: any
	): void;
	taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: any,
		p6: boolean,
		walkingStyle: number,
		p8: number,
		p9: any,
		p10: any,
		p11: any,
		p12: any
	): void;
	taskGoToCoordWhileAimingAtCoord(
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
		flags: any,
		p13: boolean,
		firingPattern: Hash
	): void;
	taskGuardCurrentPosition(p1: number, p2: number, p3: number): void;
	taskGuardSphereDefensiveArea(
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: any,
		p7: number,
		p8: number,
		p9: number,
		p10: number
	): void;
	taskHandsUp(duration: number, facingPed: Handle, p3: number, p4: boolean): void;
	taskHeliChase(entityToFollow: Handle, x: number, y: number, z: number): void;
	taskHeliMission(
		vehicle: Handle,
		p2: any,
		pedToFollow: Handle,
		posX: number,
		posY: number,
		posZ: number,
		mode: number,
		speed: number,
		radius: number,
		angle: number,
		p11: number,
		height: number,
		p13: number,
		p14: number
	): void;
	taskJump(unused: boolean): void;
	taskLeaveAnyVehicle(p1: number, p2: number): void;
	taskLeaveVehicle(vehicle: Handle, flags: number): void;
	taskLookAt(lookAt: Handle, duration: number, unknown1: number, unknown2: number): void;
	taskMoveNetwork(task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;
	taskMoveNetworkAdvanced(
		p1: string,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: any,
		p9: number,
		p10: boolean,
		animDict: string,
		flags: number
	): void;
	taskOpenVehicleDoor(vehicle: Handle, timeOut: number, doorIndex: number, speed: number): void;
	taskParachute(p1: boolean): void;
	taskParachuteToTarget(x: number, y: number, z: number): void;
	taskPatrol(p1: string, p2: any, p3: boolean, p4: boolean): void;
	taskPause(ms: number): void;
	taskPerformSequence(taskSequence: Handle): void;
	taskPlaneChase(entityToFollow: Handle, x: number, y: number, z: number): void;
	taskPlaneLand(
		plane: Handle,
		runwayStartX: number,
		runwayStartY: number,
		runwayStartZ: number,
		runwayEndX: number,
		runwayEndY: number,
		runwayEndZ: number
	): void;
	taskPlaneMission(
		plane: Handle,
		targetVehicle: Handle,
		targetPed: Handle,
		destinationX: number,
		destinationY: number,
		destinationZ: number,
		p7: number,
		physicsSpeed: number,
		p9: number,
		p10: number,
		maxAltitude: number,
		minAltitude: number
	): void;
	taskPlantBomb(x: number, y: number, z: number, heading: number): void;
	taskPlayAnim(
		animDictionary: string,
		animationName: string,
		speed: number,
		speedMultiplier: number,
		duration: number,
		flag: number,
		playbackRate: number,
		lockX: boolean,
		lockY: boolean,
		lockZ: boolean
	): void;
	taskPlayAnimAdvanced(
		animDict: string,
		animName: string,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		speed: number,
		speedMultiplier: number,
		duration: number,
		flag: any,
		animTime: number,
		p14: any,
		p15: any
	): void;
	taskPlayPhoneGestureAnimation(p1: any, p2: any, p3: any, p4: number, p5: number, p6: boolean, p7: boolean): void;
	taskPutDirectlyIntoCover(
		x: number,
		y: number,
		z: number,
		timeout: any,
		p5: boolean,
		p6: number,
		p7: boolean,
		p8: boolean,
		p9: object,
		p10: boolean
	): void;
	taskPutDirectlyIntoMelee(meleeTarget: Handle, p2: number, p3: number, p4: number, p5: boolean): void;
	taskRappelFromHeli(p1: number): void;
	taskReactAndFlee(fleeTarget: Handle): void;
	taskReloadWeapon(doReload: boolean): void;
	taskScriptedAnimation(lowData: number, midData: number, highData: number, blendIn: number, blendOut: number): void;
	taskSeekCoverFrom(target: Handle, duration: number, p3: boolean): void;
	taskSeekCoverToCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: any, p8: boolean): void;
	taskSetBlockingOfNonTemporaryEvents(toggle: boolean): void;
	taskSetDecisionMaker(p1: Hash): void;
	taskShockingEventReact(eventHandle: number): void;
	taskShootAtCoord(x: number, y: number, z: number, duration: number, firingPattern: Hash): void;
	taskShuffleToNextVehicleSeat(vehicle: Handle): void;
	taskSkyDive(): void;
	taskSlideToCoord(x: number, y: number, z: number, heading: number, p5: number): void;
	taskSlideToCoordHdgRate(x: number, y: number, z: number, heading: number, p5: number, p6: number): void;
	taskSmartFlee(fleeTarget: Handle, distance: number, fleeTime: any, p4: boolean, p5: boolean): void;
	taskSmartFleeCoord(x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean): void;
	taskStandGuard(x: number, y: number, z: number, heading: number, scenarioName: string): void;
	taskStandStill(time: number): void;
	taskStartScenarioAtPosition(scenarioName: string, x: number, y: number, z: number, heading: number, p6: any, p7: boolean, p8: boolean): void;
	taskStartScenarioInPlace(scenarioName: string, unkDelay: number, playEnterAnim: boolean): void;
	taskStayInCover(): void;
	taskStealthKill(target: Handle, killType: Hash, p3: number, p4: boolean): void;
	taskStopPhoneGestureAnimation(): void;
	taskSwapWeapon(p1: boolean): void;
	taskSweepAim(anim: string, p2: string, p3: string, p4: string, p5: number, vehicle: Handle, p7: number, p8: number): void;
	taskSynchronizedScene(
		scene: number,
		animDictionary: string,
		animationName: string,
		speed: number,
		speedMultiplier: number,
		duration: number,
		flag: number,
		playbackRate: number,
		p9: any
	): void;
	taskTurnToFace(entity: Handle, duration: number): void;
	taskTurnToFaceCoord(x: number, y: number, z: number, duration: number): void;
	taskUseMobilePhone(p1: number): void;
	taskUseMobilePhoneTimed(duration: number): void;
	taskUseNearestScenarioToCoordWarp(x: number, y: number, z: number, radius: number, p5: any): void;
	taskVehicleAimAt(target: Handle): void;
	taskVehicleChase(targetEnt: Handle): void;
	taskVehicleDriveToCoord(
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		p6: any,
		vehicleModel: Hash,
		drivingMode: number,
		stopRange: number,
		p10: number
	): void;
	taskVehicleDriveToCoordLongrange(vehicle: Handle, x: number, y: number, z: number, speed: number, driveMode: number, stopRange: number): void;
	taskVehicleDriveWander(vehicle: Handle, speed: number, drivingStyle: number): void;
	taskVehicleEscort(
		vehicle: Handle,
		targetVehicle: Handle,
		mode: number,
		speed: number,
		drivingStyle: number,
		minDistance: number,
		p7: number,
		noRoadsDistance: number
	): void;
	taskVehicleFollow(vehicle: Handle, targetEntity: Handle, drivingStyle: number, speed: number, minDistance: number): void;
	taskVehicleFollowWaypointRecording(
		vehicle: Handle,
		WPRecording: string,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: boolean,
		p9: number
	): void;
	taskVehicleGotoNavmesh(vehicle: Handle, x: number, y: number, z: number, speed: number, behaviorFlag: number, stoppingRange: number): void;
	taskVehicleHeliProtect(
		vehicle: Handle,
		entityToFollow: Handle,
		targetSpeed: number,
		p4: number,
		radius: number,
		altitude: number,
		p7: number
	): void;
	taskVehicleMissionCoorsTarget(
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		p10: boolean
	): void;
	taskVehicleMissionTarget(
		vehicle: Handle,
		pedTarget: Handle,
		mode: number,
		maxSpeed: number,
		drivingStyle: number,
		minDistance: number,
		p7: number,
		p8: boolean
	): void;
	taskVehiclePark(vehicle: Handle, x: number, y: number, z: number, heading: number, mode: number, radius: number, keepEngineOn: boolean): void;
	taskVehicleTempAction(vehicle: Handle, action: number, time: number): void;
	taskWanderInArea(x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
	taskWanderStandard(p1: number, p2: number): void;
	taskWarpIntoVehicle(vehicle: Handle, seat: number): void;
	taskWrithe(target: Handle, time: number, p3: number): void;
	uncuff(): void;
	unregisterheadshot(): void;
	updateHeadBlendData(shapeMix: number, skinMix: number, thirdMix: number): void;
	updateTaskAimGunScriptedTarget(p1: Handle, p2: number, p3: number, p4: number, p5: boolean): void;
	updateTaskHandsUpDuration(duration: number): void;
	wasKilledByStealth(): boolean;
	wasKilledByTakedown(): boolean;
	wasSkeletonUpdated(): boolean;
}

declare interface PedMp extends PedMpBase {
	spawnPosition: Vector3;
	/**
	 * Returns the player set as the peds controller.
	 */
	readonly controller: PlayerMp;

	taskPlayAnim(
		animDictionary: string,
		animationName: string,
		speed: number,
		speedMultiplier: number,
		duration: number,
		flag: number,
		playbackRate: number,
		lockX: boolean,
		lockY: boolean,
		lockZ: boolean
	): void;
	setHeadOverlay(overlayID: number, index: number, opacity: number): void;
	setHeadOverlayColor(overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
	setComponentVariation(componentId: number, drawableId: number, textureId: number, paletteId: number): void;
	setHairColor(colorID: number, highlightColorID: number): void;
	setEyeColor(index: number): void;
	setHeadBlendData(
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
	setFaceFeature(index: number, scale: number): void;
	setAlpha(alphaLevel: number, skin?: boolean): void;

	/**
	 * @returns boolean
	 */
	isPositionFrozen: boolean;

}

declare interface PedMpPool extends EntityMpPool<PedMp> {
	'new'(model: RageEnums.Hashes.Ped | Hash, position: Vector3, heading: number, dimension?: number): PedMp;
}

declare interface PickupMp extends EntityMp { }

declare interface PickupMpPool extends EntityMpPool<PickupMp> {
	'new'(...args: any[]): PickupMp;
}

declare interface PlayerMp extends PedMpBase {
	armour: number;
	eyeColour: number;
	hairColour: number;
	hairHighlightColour: number;
	heading: number;
	health: number;
	name: string;
	p2pEnabled: boolean;
	p2pConnected: boolean;
	voiceAutoVolume: boolean;
	voiceVolume: number;
	voice3d: any;
	weapon: Hash;
	readonly action: string;
	readonly aimTarget: boolean;
	readonly ip: string;
	readonly isTypingInTextChat: boolean;
	readonly isVoiceActive: boolean;
	readonly ping: number;
	readonly vehicle: VehicleMp;

	addVehicleSubtaskAttack(ped2: Handle): void;
	addVehicleSubtaskAttackCoord(x: number, y: number, z: number): void;
	call(eventName: string, ...args: any[]): void;
	canPedHear(ped: Handle): boolean;
	changePed(ped: Handle, b2: boolean, b3: boolean): void;
	clearHasDamagedAtLeastOneNonAnimalPed(): void;
	clearHasDamagedAtLeastOnePed(): void;
	clearParachuteModelOverride(): void;
	clearParachutePackModelOverride(): void;
	clearParachuteVariationOverride(): void;
	clearSecondaryTask(): void;
	clearWantedLevel(): void;
	explodeHead(weaponHash: Hash): void;
	getCurrentStealthNoise(): number;
	getGroup(): number;
	getHasReserveParachute(): boolean;
	getInvincible(): boolean;
	getMaxArmour(): number;
	getName(): string;
	getParachutePackTintIndex(tintIndex: number): number;
	getParachuteSmokeTrailColor(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getPed(): Handle;
	getPedScriptIndex(): Handle;
	getReserveParachuteTintIndex(tintIndex: number): number;
	getRgbColour(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getSprintStaminaRemaining(): number;
	getSprintTimeRemaining(): number;
	getTeam(): number;
	getUnderwaterTimeRemaining(): number;
	getVoiceAttribute(attribute: any): any;
	getWantedCentrePosition(): Vector3;
	getWantedLevel(): number;
	giveRagdollControl(toggle: boolean): void;
	hasBeenSpottedInStolenVehicle(): boolean;
	hasDamagedAtLeastOneNonAnimalPed(): boolean;
	hasDamagedAtLeastOnePed(): boolean;
	hasLeftTheWorld(): boolean;
	hasTeleportFinished(): boolean;
	hasUseScenarioTask(): boolean;
	hideBloodDamageByZone(p1: any, p2: boolean): void;
	isClimbing(): boolean;
	isJumping(): boolean;
	isInCover(exceptUseWeapon: boolean): boolean;
	isControlOn(): boolean;
	isFreeAiming(): boolean;
	isFreeForAmbientTask(): boolean;
	isPlaying(): boolean;
	isPressingHorn(): boolean;
	isReadyForCutscene(): boolean;
	isRidingTrain(): boolean;
	isScriptControlOn(): boolean;
	isTargettingAnything(): boolean;
	isWantedLevelGreater(wantedLevel: number): boolean;
	resetArrestState(): void;
	resetInputGait(): void;
	resetStamina(): void;
	setCanBeHassledByGangs(toggle: boolean): void;
	setCanDoDriveBy(toggle: boolean): void;
	setCanLeaveParachuteSmokeTrail(enabled: boolean): void;
	setCanUseCover(toggle: boolean): void;
	setClothPinFrames(toggle: boolean): void;
	setControl(toggle: boolean, possiblyFlags: number): void;
	setEveryoneIgnore(toggle: boolean): void;
	setForcedAim(toggle: boolean): void;
	setForcedZoom(toggle: boolean): void;
	setForceSkipAimIntro(toggle: boolean): void;
	setHasReserveParachute(): void;
	setLockon(toggle: boolean): void;
	setLockonRangeOverride(range: number): void;
	setMaxArmour(value: number): void;
	setMayNotEnterAnyVehicle(): void;
	setMayOnlyEnterThisVehicle(vehicle: Handle): void;
	setMeleeWeaponDamageModifier(modifier: number): void;
	setModel(model: Hash): void;
	setNoiseMultiplier(multiplier: number): void;
	setParachuteModelOverride(model: Hash): void;
	setParachutePackModelOverride(model: Hash): void;
	setParachutePackTintIndex(tintIndex: number): void;
	setParachuteSmokeTrailColor(r: number, g: number, b: number): void;
	setParachuteVariationOverride(p1: number, p2: any, p3: any, p4: boolean): void;
	setPoliceIgnore(toggle: boolean): void;
	setReserveParachuteTintIndex(tintIndex: number): void;
	setSimulateAiming(toggle: boolean): void;
	setSneakingNoiseMultiplier(multiplier: number): void;
	setSprint(toggle: boolean): void;
	setStealthPerceptionModifier(value: number): void;
	setTeam(team: number): void;
	setVehicleDamageModifier(damageAmount: number): void;
	setVehicleDefenseModifier(modifier: number): void;
	setVoiceAttribute(attribute: any, value: any): void; // TODO
	setWantedCentrePosition(x: number, y: number, z: number): void;
	setWantedLevel(wantedLevel: number, disableNoMission: boolean): void;
	setWantedLevelNoDrop(wantedLevel: number, p2: boolean): void;
	setWantedLevelNow(p1: boolean): void;
	setWeaponDamageModifier(damageAmount: number): void;
	setWeaponDefenseModifier(modifier: number): void;
	taskGotoOffset(p1: any, p2: any, x: number, y: number, z: number, duration: number): void;
	taskGoToWhileAimingAtEntity(
		entityToWalkTo: Handle,
		entityToAimAt: Handle,
		speed: number,
		shootatEntity: boolean,
		p5: number,
		p6: number,
		p7: boolean,
		p8: boolean,
		firingPattern: Hash
	): void;
	taskVehicleShootAt(target: Handle, p2: number): void;
	updateTaskSweepAim(entity: Handle): void;

	getCurrentScriptedAnim(): string;
	getCurrentScenarioId(): number;

	/**

	 * @returns boolean
	 */
	isPositionFrozen: boolean;

	/**
	 * https://wiki.rage.mp/index.php?title=Player::setVoiceFx
	 */
	setVoiceFx(fxType: RageEnums.Voice.BASSFXType, priority: number): void;
	removeVoiceFx(fxHandle: VoiceHandle): void;
	resetVoiceFx(fxHandle: VoiceHandle): void;
	setVoiceFxChorus(fxHandle: VoiceHandle, { fWetDryMix, fDepth, fFeedback, fFrequency, lWaveform, fDelay, lPhase }: VoiceFxChorus): void;
	setVoiceFxCompressor(fxHandle: VoiceHandle, { fGain, fAttack, fRelease, fThreshold, fRatio, fPredelay }: VoiceFxCompressor): void;
	setVoiceFxDistortion(fxHandle: VoiceHandle, { fGain, fEdge, fPostEQCenterFrequency, fPostEQBandwidth, fPreLowpassCutoff }: VoiceFxDistortion): void;
	setVoiceFxEcho(fxHandle: VoiceHandle, { fWetDryMix, fFeedback, fLeftDelay, fRightDelay, lPanDelay }: VoiceFxEcho): void;
	setVoiceFxFlanger(fxHandle: VoiceHandle, { fWetDryMix, fDepth, fFeedback, fFrequency, lWaveform, fDelay, lPhase }: VoiceFxFlanger): void;
	setVoiceFxGargle(fxHandle: VoiceHandle, { dwRateHz, dwWaveShape }: VoiceFxGargle): void;
	setVoiceFxI3DL2Reverb(fxHandle: VoiceHandle, { lRoom, lRoomHF, flRoomRolloffFactor, flDecayTime, flDecayHFRatio, lReflections, flReflectionsDelay, lReverb, flReverbDelay, flDiffusion, flDensity, flHFReference }: VoiceFxI3DL2Reverb): void;
	setVoiceFxParamEq(fxHandle: VoiceHandle, { fCenter, fBandwidth, fGain }: VoiceFxParamEq): void;
	setVoiceFxReverb(fxHandle: VoiceHandle, { fInGain, fReverbMix, fReverbTime, fHighFreqRTRatio }: VoiceFxReverb): void;
	setVoiceFxVolume(fxHandle: VoiceHandle, { fTarget, fCurrent, fTime, lCurve }: VoiceFxVolume): void;
	setVoiceFxPeakEq(fxHandle: VoiceHandle, { lBand, fBandwidth, fQ, fCenter, fGain, lChannel }: VoiceFxPeakEq): void;
	setVoiceFxBQF(fxHandle: VoiceHandle, { lFilter, fCenter, fGain, fBandwidth, fQ, fS, lChannel }: VoiceFxBQF): void;
}

declare interface PlayerMpPool extends EntityMpPool<PlayerMp> {
	local: PlayerMp;
}

declare interface VehicleMp extends EntityMp {
	gear: number;
	rpm: number;
	steeringAngle: number;

	addUpsidedownCheck(): void;
	areAllWindowsIntact(): boolean;
	attachToCargobob(cargobob: Handle, p1: number, x: number, y: number, z: number): void;
	attachToTowTruck(vehicle: Handle, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;
	attachToTrailer(trailer: Handle, radius: number): void;
	canShuffleSeat(p0: any): boolean;
	cargobobMagnetGrab(toggle: boolean): void;
	clearCustomPrimaryColour(): void;
	clearCustomSecondaryColour(): void;
	closeBombBayDoors(): void;
	detachFromAnyCargobob(): boolean;
	detachFromAnyTowTruck(): boolean;
	detachFromCargobob(cargobob: Handle): void;
	detachFromTowTruck(vehicle: Handle): void;
	detachFromTrailer(): void;
	detachWindscreen(): void;
	disableImpactExplosionActivation(toggle: boolean): void;
	disablePlaneAileron(p0: boolean, p1: boolean): void;
	doesExtraExist(extraId: number): boolean;
	doesHaveRoof(): boolean;
	doesHaveStuckVehicleCheck(): boolean;
	doesHaveWeapon(): boolean;
	ejectJb700Roof(x: number, y: number, z: number): void;
	enableCargobobHook(state: number): void;
	explode(isAudible: boolean, isInvisble: boolean): void;
	explodeInCutscene(p0: boolean): void;
	fixWindow(index: number): void;
	getAcceleration(): number;
	getAttachedToCargobob(): Handle;
	getAttachedToTowTruck(): Handle;
	getBoatAnchor(): boolean;
	getBodyHealth(): number;
	getBodyHealth2(): number;
	getCargobobHookPosition(): Vector3;
	getCauseOfDestruction(): Hash;
	getClass(): number;
	getColor(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getColourCombination(): number;
	getColours(
		colorPrimary: number,
		colorSecondary: number
	): {
		colorPrimary: number;
		colorSecondary: number;
	};
	getConvertibleRoofState(): number;
	getCustomPrimaryColour(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getCustomSecondaryColour(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getDeformationAtPos(offsetX: number, offsetY: number, offsetZ: number): Vector3;
	getDirtLevel(): number;
	getDoorAngleRatio(door: number): number;
	getDoorLockStatus(): number;
	getDoorsLockedForPlayer(player: Handle): boolean;
	getEngineHealth(): number;
	getExtraColours(
		pearlescentColor: number,
		wheelColor: number
	): {
		pearlescentColor: number;
		wheelColor: number;
	};
	getHandling(typeName: string): number | string;
	getDefaultHandling(typeName: string): number | string;
	getHeliEngineHealth(): number;
	getHeliMainRotorHealth(): number;
	getHeliTailRotorHealth(): number;
	getIsEngineRunning(): number;
	getIsLeftHeadlightDamaged(): boolean;
	getIsPrimaryColourCustom(): boolean;
	getIsRightHeadlightDamaged(): boolean;
	getIsSecondaryColourCustom(): boolean;
	getLandingGearState(): number;
	getLastPedInSeat(seatIndex: number): Handle;
	getLayoutHash(): Hash;
	getLightsState(
		lightsOn: number,
		highbeamsOn: number
	): {
		lightsOn: boolean;
		highbeamsOn: boolean;
	};
	getLivery(): number;
	getLiveryCount(): number;
	getLiveryName(liveryIndex: number): string;
	getMaxBreaking(): number;
	getMaxNumberOfPassengers(): number;
	getMaxTraction(): number;
	getMod(modType: number): number;
	getModColor1(
		paintType: number,
		color: number,
		p2: number
	): {
		paintType: number;
		color: number;
		p2: number;
	};
	getModColor1TextLabel(p0: boolean): string;
	getModColor2(
		paintType: number,
		color: number
	): {
		paintType: number;
		color: number;
		p2: number;
	};
	getModColor2TextLabel(): string;
	getModKit(): number;
	getModKitType(): number;
	getModModifierValue(modType: number, modIndex: number): any; // TODO
	getModSlotName(modType: number): string;
	getModTextLabel(modType: number, modValue: number): string;
	getModVariation(modType: number): boolean;
	getNeonLightsColour(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getNumberOfColours(): number;
	getNumberOfPassengers(): number;
	getNumberPlateText(): string;
	getNumberPlateTextIndex(): number;
	getNumModKits(): number;
	getNumMods(modType: number): number;
	getOwner(entity: Handle): boolean;
	getPaintFade(): number;
	getPedInSeat(index: number): Handle;
	getPedUsingDoor(doorIndex: number): Handle;
	getPetrolTankHealth(): number;
	getPlateType(): number;
	getSuspensionHeight(): number;
	getTrailer(vehicle: Handle): Handle;
	getTrainCarriage(cariage: number): Handle;
	getTyresCanBurst(): boolean;
	getTyreSmokeColor(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getVehicleTrailer(vehicle: Handle): Handle;
	getWheelType(): number;
	getWindowTint(): number;
	isAConvertible(p0: boolean): boolean;
	isAlarmActivated(): boolean;
	isAnySeatEmpty(): boolean;
	isAttachedToCargobob(vehicleAttached: Handle): boolean;
	isAttachedToTowTruck(vehicle: Handle): boolean;
	isAttachedToTrailer(): boolean;
	isBig(): boolean;
	isBumperBrokenOff(front: boolean): boolean;
	isCargobobHookActive(): boolean;
	isCargobobMagnetActive(): boolean;
	isDamaged(): boolean;
	isDoorDamaged(doorId: number): boolean;
	isDriveable(p0: boolean): boolean;
	isExtraTurnedOn(extraId: number): boolean;
	isHeliPartBroken(p0: boolean, p1: boolean, p2: boolean): boolean;
	isHighDetail(): boolean;
	isInBurnout(): boolean;
	isModel(model: Hash): boolean;
	isNeonLightEnabled(index: number): boolean;
	isOnAllWheels(): boolean;
	isSearchlightOn(): boolean;
	isSeatFree(seatIndex: number): boolean;
	isSirenOn(): boolean;
	isSirenSoundOn(): boolean;
	isStolen(): boolean;
	isStopped(): boolean;
	isStoppedAtTrafficLights(): boolean;
	isStuckOnRoof(): boolean;
	isStuckTimerUp(p0: number, p1: number): boolean;
	isTaxiLightOn(): boolean;
	isToggleModOn(modType: number): boolean;
	isTyreBurst(wheelId: number, completely: boolean): boolean;
	isVisible(): boolean;
	isWindowIntact(windowIndex: number): boolean;
	jitter(p0: boolean, yaw: number, pitch: number, roll: number): void;
	lowerConvertibleRoof(instantlyLower: boolean): void;
	movable(): boolean;
	openBombBayDoors(): void;
	raiseConvertibleRoof(instantlyRaise: boolean): void;
	releasePreloadMods(): void;
	removeHighDetailModel(): void;
	removeMod(modType: number): void;
	removeUpsidedownCheck(): void;
	removeWindow(windowIndex: number): void;
	requestHighDetailModel(): void;
	resetStuckTimer(reset: boolean): void;
	resetWheels(toggle: boolean): void;
	retractCargobobHook(): void;
	rollDownWindow(windowIndex: number): void;
	rollDownWindows(): void;
	rollUpWindow(windowIndex: number): void;
	setAlarm(state: boolean): void;
	setAllowNoPassengersLockon(toggle: boolean): void;
	setAllsSpawns(p0: boolean, p1: boolean, p2: boolean): void;
	setAutomaticallyAttaches(p0: any, p1: any): void;
	setBikeLeanAngle(x: number, y: number): void;
	setBoatAnchor(toggle: boolean): void;
	setBodyHealth(value: number): void;
	setBrakeLights(toggle: boolean): void;
	setBurnout(toggle: boolean): void;
	setCanBeTargetted(state: boolean): void;
	setCanBeUsedByFleeingPeds(toggle: boolean): void;
	setCanBeVisiblyDamaged(state: boolean): void;
	setCanBreak(toggle: boolean): void;
	setCanRespray(state: boolean): void;
	setCeilingHeight(p0: number): void;
	setColourCombination(numCombos: number): void;
	setColours(colorPrimary: number, colorSecondary: number): void;
	setConvertibleRoof(p0: boolean): void;
	setCreatesMoneyPickupsWhenExploded(toggle: boolean): void;
	setCustomPrimaryColour(r: number, g: number, b: number): void;
	setCustomSecondaryColour(r: number, g: number, b: number): void;
	setDamage(xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, focusOnModel: boolean): void;
	setDeformationFixed(): void;
	setDirtLevel(dirtLevel: number): void;
	setDisablePetrolTankDamage(toggle: boolean): void;
	setDisablePetrolTankFires(toggle: boolean): void;
	setDoorBreakable(doorIndex: number, isBreakable: boolean): void;
	setDoorBroken(doorIndex: number, createDoorObject: boolean): void;
	setDoorControl(doorIndex: number, speed: number, angle: number): void;
	setDoorLatched(doorIndex: number, p1: boolean, p2: boolean, p3: boolean): void;
	setDoorOpen(doorIndex: number, loose: boolean, openInstantly: boolean): void;
	setDoorShut(doorIndex: number, closeInstantly: boolean): void;
	setDoorsLocked(doorLockStatus: number): void;
	setDoorsLockedForAllPlayers(toggle: boolean): void;
	setDoorsLockedForPlayer(player: Handle, toggle: boolean): void;
	setDoorsLockedForTeam(team: number, toggle: boolean): void;
	setDoorsShut(closeInstantly: boolean): void;
	setDriftTyresEnabled(toggle: boolean): void;
	setEngineCanDegrade(toggle: boolean): void;
	setEngineHealth(health: number): void;
	setEngineOn(value: boolean, instantly: boolean, otherwise: boolean): void;
	setEnginePowerMultiplier(value: number): void;
	setEngineTorqueMultiplier(value: number): void;
	setExclusiveDriver(ped: Handle, p1: number): void;
	setExplodesOnHighExplosionDamage(toggle: boolean): void;
	setExtra(extraId: number, toggle: number): void;
	setExtraColours(pearlescentColor: number, wheelColor: number): void;
	setFixed(): void;
	setForwardSpeed(speed: number): void;
	setFrictionOverride(friction: number): void;
	setFullbeam(toggle: boolean): void;
	setGravity(toggle: boolean): void;
	setHalt(distance: number, killEngine: number, unknown: boolean): void;
	setHandbrake(toggle: boolean): void;
	setHandling(typeName: string, value: number | string): void;
	setHasBeenOwnedByPlayer(owned: boolean): void;
	setHasStrongAxles(toggle: boolean): void;
	setHeliBladesFullSpeed(): void;
	setHeliBladeSpeed(speed: number): void;
	setHelicopterRollPitchYawMult(multiplier: number): void;
	setIndicatorLights(turnSignal: number, toggle: boolean): void;
	setInteriorLight(toggle: boolean): void;
	setIsConsideredByPlayer(toggle: boolean): void;
	setIsStolen(isStolen: boolean): void;
	setIsWanted(state: boolean): void;
	setJetEngineOn(toggle: boolean): void;
	setLandingGear(state: number): void;
	setLightMultiplier(multiplier: number): void;
	setLights(state: number | boolean): void;
	setLivery(livery: number): void;
	setLodMultiplier(multiplier: number): void;
	setMissionTrainCoords(x: number, y: number, z: number): void;
	setMod(modType: number, modIndex: number): void;
	setModColor1(paintType: number, color: number, p2: number): void;
	setModColor2(paintType: number, color: number): void;
	setModKit(modKit: number): void;
	setNameDebug(name: string): void;
	setNeedsToBeHotwired(toggle: boolean): void;
	setNeonLightEnabled(index: number, toggle: boolean): void;
	setNeonLightsColour(r: number, g: number, b: number): void;
	setNumberPlateText(plateText: string): void;
	setNumberPlateTextIndex(plateIndex: number): void;
	setOnGroundProperly(): boolean;
	setOutOfControl(killDriver: boolean, explodeOnImpact: boolean): void;
	setPaintFade(fade: number): void;
	setPedEnabledBikeRingtone(p0: any): boolean;
	setPedTargettableDestory(vehicleComponent: number, destroyType: number): void;
	setPetrolTankHealth(fix: number): void;
	setPlaneMinHeightAboveGround(height: number): void;
	setPlaybackToUseAi(flag: number): void;
	setPlayersLast(): void;
	setProvidesCover(toggle: boolean): void;
	setReduceGrip(toggle: boolean): void;
	setRenderTrainAsDerailed(toggle: boolean): void;
	setRudderBroken(p0: boolean): void;
	setSearchlight(toggle: boolean, canBeUsedByAI: boolean): void;
	setSilent(toggle: boolean): void;
	setSiren(toggle: boolean): void;
	setSirenSound(toggle: boolean): void;
	setSteerBias(value: number): void;
	setStrong(toggle: boolean): void;
	setTaxiLights(state: boolean): void;
	setTimedExplosion(ped: Handle, toggle: boolean): void;
	setTowTruckCraneHeight(height: number): void;
	setTrainCruiseSpeed(speed: number): void;
	setTrainSpeed(speed: number): void;
	setTyreBurst(tyreIndex: number, onRim: boolean, p2: number): void;
	setTyreFixed(tyreIndex: number): void;
	setTyresCanBurst(toggle: boolean): void;
	setTyreSmokeColor(r: number, g: number, b: number): void;
	setUndriveable(toggle: boolean): void;
	setWheelsCanBreak(enabled: boolean): void;
	setWheelsCanBreakOffWhenBlowUp(toggle: boolean): void;
	setWheelType(wheelType: number): void;
	setWindowTint(tint: number): void;
	smashWindow(index: number): void;
	startAlarm(): void;
	startHorn(duration: number, model: Hash, forever: boolean): void;
	steerUnlockBias(toggle: boolean): void;
	toggleMod(modType: number, toggle: boolean): void;
	trackVisibility(): void;
	wasCounterActivated(p0: any): boolean;

	/**

	 * @returns boolean
	 */
	isPositionFrozen: boolean;

	/**
	 * @returns number
	 */
	wheelCount: number;

	/**
	* @params wheelId
	* @returns number
	*/
	getWheelCamber(wheelId: number): number;

	/**

	 * @params wheelId - use 255 to apply all wheel
	 * @params value
	 * 
	 * @returns void
	 */
	setWheelCamber(wheelId: number, value: number): void;

	/**

	 * @params wheelId - use 255 to apply all wheel
	 * 
	 * @returns number
	 */
	getWheelTrackWidth(wheelId: number): number;

	/**
	
	* @params wheelId - use 255 to apply all wheel
	* @params value
	* 
	* @returns void
	*/
	setWheelTrackWidth(wheelId: number, value: number): void;

	/**

	 * @params wheelId
	 * 
	 * @returns number
	 */
	getWheelHeight(wheelId: number): number;

	/**

	 * @params wheelId - use 255 to apply all wheel
	 * @params value
	 * 
	 * @returns void
	 */
	setWheelHeight(wheelId: number, value: number): void;

	/**

	 * @params wheelId
	 * 
	 * @returns number
	 */
	getTyreWidth(wheelId: number): number;

	/**

	 * @params wheelId - use 255 to apply all wheel
	 * @params value
	 * 
	 * @returns void
	 */
	setTyreWidth(wheelId: number, value: number): void;

	/**

	 * @params wheelId
	 * 
	 * @returns number
	 */
	getTyreRadius(wheelId: number): number;

	/**

	 * @params wheelId - use 255 to apply all wheel
	 * @params value
	 * 
	 * @returns void
	 */
	setTyreRadius(wheelId: number, value: number): void;

	/**

	 * @params wheelId
	 * 
	 * @returns number
	 */
	getRimRadius(wheelId: number): number;

	/**

	 * @params wheelId - use 255 to apply all wheel
	 * @params value
	 * 
	 * @returns void
	 */
	setRimRadius(wheelId: number, value: number): void;

	/**

	 * 
	 * @returns number
	 */
	getWheelRadius(): number;

	/**

	 * @params value
	 * 
	 * @returns void
	 */
	setWheelRadius(value: number): void;

	/**

	 * 
	 * @returns number
	 */
	getWheelWidth(): number;

	/**

	 * @params value
	 * 
	 * @returns void
	 */
	setWheelWidth(value: number): void;

	/**

	 * @params height
	 * 
	 * @returns void
	 */
	setSuspensionHeight(height: number): void;

}

declare interface VehicleMpPool extends EntityMpPool<VehicleMp> {
	'new'(
		model: HashOrString,
		position: Vector3,
		options?: {
			alpha?: number;
			color?: [Array2d, Array2d] | [RGB, RGB];
			dimension?: number;
			engine?: boolean;
			heading?: number;
			locked?: boolean;
			numberPlate?: string;
		}
	): VehicleMp;
}

declare interface DummyEntityMp {
	// TODO (temporary solution):
	// Since this is a very abstract concept, it is not at all a familiar essence, but it has most of its properties.
	// The easiest option is, of course, to inherit the EntityMpPool interface, but this will add
	// non-existent methods and parameters associated with the dimension and position.
	// It is proposed in the future to introduce a more abstract concept than an entity, which will have only an ID, a type and several basic
	// methods such as deletion, enumeration and transformation into an array. The same goes for the entity pool.

	readonly dummyType: number;
	readonly id: number;
	readonly remoteId: number;
	readonly type: string;

	getVariable(value: string): any;
}

declare interface DummyEntityMpPool extends EntityMpPool<DummyEntityMp> {
	forEachByType(dummyType: number, fn: (entity: DummyEntityMp) => void): void;
}

declare interface TextLabelMp extends EntityMp {
	color: RGB;
	drawDistance: number;
	los: boolean;
	text: string;
}

declare interface TextLabelMpPool extends EntityMpPool<TextLabelMp> {
	'new'(
		text: string,
		position: Vector3,
		options?: {
			color?: RGBA;
			dimension?: number;
			drawDistance?: number;
			font?: number;
			los?: boolean;
		}
	): TextLabelMp;
}

declare interface VehicleMp extends EntityMp {
	gear: number;
	rpm: number;
	steeringAngle: number;

	addUpsidedownCheck(): void;
	areAllWindowsIntact(): boolean;
	attachToCargobob(cargobob: Handle, p1: number, x: number, y: number, z: number): void;
	attachToTowTruck(vehicle: Handle, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;
	attachToTrailer(trailer: Handle, radius: number): void;
	canShuffleSeat(p0: any): boolean;
	cargobobMagnetGrab(toggle: boolean): void;
	clearCustomPrimaryColour(): void;
	clearCustomSecondaryColour(): void;
	closeBombBayDoors(): void;
	detachFromAnyCargobob(): boolean;
	detachFromAnyTowTruck(): boolean;
	detachFromCargobob(cargobob: Handle): void;
	detachFromTowTruck(vehicle: Handle): void;
	detachFromTrailer(): void;
	detachWindscreen(): void;
	disableImpactExplosionActivation(toggle: boolean): void;
	disablePlaneAileron(p0: boolean, p1: boolean): void;
	doesExtraExist(extraId: number): boolean;
	doesHaveRoof(): boolean;
	doesHaveStuckVehicleCheck(): boolean;
	doesHaveWeapon(): boolean;
	ejectJb700Roof(x: number, y: number, z: number): void;
	enableCargobobHook(state: number): void;
	explode(isAudible: boolean, isInvisible: boolean): void;
	explodeInCutscene(p0: boolean): void;
	fixWindow(index: number): void;
	getAcceleration(): number;
	getAttachedToCargobob(): Handle;
	getAttachedToTowTruck(): Handle;
	getBoatAnchor(): boolean;
	getBodyHealth(): number;
	getBodyHealth2(): number;
	getCargobobHookPosition(): Vector3;
	getCauseOfDestruction(): Hash;
	getClass(): number;
	getColor(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getColourCombination(): number;
	getColours(
		colorPrimary: number,
		colorSecondary: number
	): {
		colorPrimary: number;
		colorSecondary: number;
	};
	getConvertibleRoofState(): number;
	getCustomPrimaryColour(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getCustomSecondaryColour(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getDeformationAtPos(offsetX: number, offsetY: number, offsetZ: number): Vector3;
	getDirtLevel(): number;
	getDoorAngleRatio(door: number): number;
	getDoorLockStatus(): number;
	getDoorsLockedForPlayer(player: Handle): boolean;
	getEngineHealth(): number;
	getExtraColours(
		pearlescentColor: number,
		wheelColor: number
	): {
		pearlescentColor: number;
		wheelColor: number;
	};
	getHandling(typeName: string): number | string;
	getDefaultHandling(typeName: string): number | string;
	getHeliEngineHealth(): number;
	getHeliMainRotorHealth(): number;
	getHeliTailRotorHealth(): number;
	getIsEngineRunning(): number;
	getIsLeftHeadlightDamaged(): boolean;
	getIsPrimaryColourCustom(): boolean;
	getIsRightHeadlightDamaged(): boolean;
	getIsSecondaryColourCustom(): boolean;
	getLandingGearState(): number;
	getLastPedInSeat(seatIndex: number): Handle;
	getLayoutHash(): Hash;
	getLightsState(
		lightsOn: number,
		highbeamsOn: number
	): {
		lightsOn: boolean;
		highbeamsOn: boolean;
	};
	getLivery(): number;
	getLiveryCount(): number;
	getLiveryName(liveryIndex: number): string;
	getMaxBreaking(): number;
	getMaxNumberOfPassengers(): number;
	getMaxTraction(): number;
	getMod(modType: number): number;
	getModColor1(
		paintType: number,
		color: number,
		p2: number
	): {
		paintType: number;
		color: number;
		p2: number;
	};
	getModColor1TextLabel(p0: boolean): string;
	getModColor2(
		paintType: number,
		color: number
	): {
		paintType: number;
		color: number;
		p2: number;
	};
	getModColor2TextLabel(): string;
	getModKit(): number;
	getModKitType(): number;
	getModModifierValue(modType: number, modIndex: number): any; // TODO
	getModSlotName(modType: number): string;
	getModTextLabel(modType: number, modValue: number): string;
	getModVariation(modType: number): boolean;
	getNeonLightsColour(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getNumberOfColours(): number;
	getNumberOfPassengers(): number;
	getNumberPlateText(): string;
	getNumberPlateTextIndex(): number;
	getNumModKits(): number;
	getNumMods(modType: number): number;
	getOwner(entity: Handle): boolean;
	getPaintFade(): number;
	getPedInSeat(index: number): Handle;
	getPedUsingDoor(doorIndex: number): Handle;
	getPetrolTankHealth(): number;
	getPlateType(): number;
	getSuspensionHeight(): number;
	getTrailer(vehicle: Handle): Handle;
	getTrainCarriage(carriage: number): Handle;
	getTyresCanBurst(): boolean;
	getTyreSmokeColor(
		r: number,
		g: number,
		b: number
	): {
		r: number;
		g: number;
		b: number;
	};
	getVehicleTrailer(vehicle: Handle): Handle;
	getWheelType(): number;
	getWindowTint(): number;
	isAConvertible(p0: boolean): boolean;
	isAlarmActivated(): boolean;
	isAnySeatEmpty(): boolean;
	isAttachedToCargobob(vehicleAttached: Handle): boolean;
	isAttachedToTowTruck(vehicle: Handle): boolean;
	isAttachedToTrailer(): boolean;
	isBig(): boolean;
	isBumperBrokenOff(front: boolean): boolean;
	isCargobobHookActive(): boolean;
	isCargobobMagnetActive(): boolean;
	isDamaged(): boolean;
	isDoorDamaged(doorId: number): boolean;
	isDriveable(p0: boolean): boolean;
	isExtraTurnedOn(extraId: number): boolean;
	isHeliPartBroken(p0: boolean, p1: boolean, p2: boolean): boolean;
	isHighDetail(): boolean;
	isInBurnout(): boolean;
	isModel(model: Hash): boolean;
	isNeonLightEnabled(index: number): boolean;
	isOnAllWheels(): boolean;
	isSearchlightOn(): boolean;
	isSeatFree(seatIndex: number): boolean;
	isSirenOn(): boolean;
	isSirenSoundOn(): boolean;
	isStolen(): boolean;
	isStopped(): boolean;
	isStoppedAtTrafficLights(): boolean;
	isStuckOnRoof(): boolean;
	isStuckTimerUp(p0: number, p1: number): boolean;
	isTaxiLightOn(): boolean;
	isToggleModOn(modType: number): boolean;
	isTyreBurst(wheelId: number, completely: boolean): boolean;
	isVisible(): boolean;
	isWindowIntact(windowIndex: number): boolean;
	jitter(p0: boolean, yaw: number, pitch: number, roll: number): void;
	lowerConvertibleRoof(instantlyLower: boolean): void;
	movable(): boolean;
	openBombBayDoors(): void;
	raiseConvertibleRoof(instantlyRaise: boolean): void;
	releasePreloadMods(): void;
	removeHighDetailModel(): void;
	removeMod(modType: number): void;
	removeUpsidedownCheck(): void;
	removeWindow(windowIndex: number): void;
	requestHighDetailModel(): void;
	resetStuckTimer(reset: boolean): void;
	resetWheels(toggle: boolean): void;
	retractCargobobHook(): void;
	rollDownWindow(windowIndex: number): void;
	rollDownWindows(): void;
	rollUpWindow(windowIndex: number): void;
	setAlarm(state: boolean): void;
	setAllowNoPassengersLockon(toggle: boolean): void;
	setAllsSpawns(p0: boolean, p1: boolean, p2: boolean): void;
	setAutomaticallyAttaches(p0: any, p1: any): void;
	setBikeLeanAngle(x: number, y: number): void;
	setBoatAnchor(toggle: boolean): void;
	setBodyHealth(value: number): void;
	setBrakeLights(toggle: boolean): void;
	setBurnout(toggle: boolean): void;
	setCanBeTargetted(state: boolean): void;
	setCanBeUsedByFleeingPeds(toggle: boolean): void;
	setCanBeVisiblyDamaged(state: boolean): void;
	setCanBreak(toggle: boolean): void;
	setCanRespray(state: boolean): void;
	setCeilingHeight(p0: number): void;
	setColourCombination(numCombos: number): void;
	setColours(colorPrimary: number, colorSecondary: number): void;
	setConvertibleRoof(p0: boolean): void;
	setCreatesMoneyPickupsWhenExploded(toggle: boolean): void;
	setCustomPrimaryColour(r: number, g: number, b: number): void;
	setCustomSecondaryColour(r: number, g: number, b: number): void;
	setDamage(xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, focusOnModel: boolean): void;
	setDeformationFixed(): void;
	setDirtLevel(dirtLevel: number): void;
	setDisablePetrolTankDamage(toggle: boolean): void;
	setDisablePetrolTankFires(toggle: boolean): void;
	setDoorBreakable(doorIndex: number, isBreakable: boolean): void;
	setDoorBroken(doorIndex: number, createDoorObject: boolean): void;
	setDoorControl(doorIndex: number, speed: number, angle: number): void;
	setDoorLatched(doorIndex: number, p1: boolean, p2: boolean, p3: boolean): void;
	setDoorOpen(doorIndex: number, loose: boolean, openInstantly: boolean): void;
	setDoorShut(doorIndex: number, closeInstantly: boolean): void;
	setDoorsLocked(doorLockStatus: number): void;
	setDoorsLockedForAllPlayers(toggle: boolean): void;
	setDoorsLockedForPlayer(player: Handle, toggle: boolean): void;
	setDoorsLockedForTeam(team: number, toggle: boolean): void;
	setDoorsShut(closeInstantly: boolean): void;
	setEngineCanDegrade(toggle: boolean): void;
	setEngineHealth(health: number): void;
	setEngineOn(value: boolean, instantly: boolean, otherwise: boolean): void;
	setEnginePowerMultiplier(value: number): void;
	setEngineTorqueMultiplier(value: number): void;
	setExclusiveDriver(ped: Handle, p1: number): void;
	setExplodesOnHighExplosionDamage(toggle: boolean): void;
	setExtra(extraId: number, toggle: number): void;
	setExtraColours(pearlescentColor: number, wheelColor: number): void;
	setFixed(): void;
	setForwardSpeed(speed: number): void;
	setFrictionOverride(friction: number): void;
	setFullbeam(toggle: boolean): void;
	setGravity(toggle: boolean): void;
	setHalt(distance: number, killEngine: number, unknown: boolean): void;
	setHandbrake(toggle: boolean): void;
	setHandling(typeName: string, value: number | string): void;
	setHasBeenOwnedByPlayer(owned: boolean): void;
	setHasStrongAxles(toggle: boolean): void;
	setHeliBladesFullSpeed(): void;
	setHeliBladeSpeed(speed: number): void;
	setHelicopterRollPitchYawMult(multiplier: number): void;
	setIndicatorLights(turnSignal: number, toggle: boolean): void;
	setInteriorLight(toggle: boolean): void;
	setIsConsideredByPlayer(toggle: boolean): void;
	setIsStolen(isStolen: boolean): void;
	setIsWanted(state: boolean): void;
	setJetEngineOn(toggle: boolean): void;
	setLandingGear(state: number): void;
	setLightMultiplier(multiplier: number): void;
	setLights(state: number | boolean): void;
	setLivery(livery: number): void;
	setLodMultiplier(multiplier: number): void;
	setMissionTrainCoords(x: number, y: number, z: number): void;
	setMod(modType: number, modIndex: number): void;
	setModColor1(paintType: number, color: number, p2: number): void;
	setModColor2(paintType: number, color: number): void;
	setModKit(modKit: number): void;
	setNameDebug(name: string): void;
	setNeedsToBeHotwired(toggle: boolean): void;
	setNeonLightEnabled(index: number, toggle: boolean): void;
	setNeonLightsColour(r: number, g: number, b: number): void;
	setNumberPlateText(plateText: string): void;
	setNumberPlateTextIndex(plateIndex: number): void;
	setOnGroundProperly(): boolean;
	setOutOfControl(killDriver: boolean, explodeOnImpact: boolean): void;
	setPaintFade(fade: number): void;
	setPedEnabledBikeRingtone(p0: any): boolean;
	setPedTargettableDestory(vehicleComponent: number, destroyType: number): void;
	setPetrolTankHealth(fix: number): void;
	setPlaneMinHeightAboveGround(height: number): void;
	setPlaybackToUseAi(flag: number): void;
	setPlayersLast(): void;
	setProvidesCover(toggle: boolean): void;
	setReduceGrip(toggle: boolean): void;
	setRenderTrainAsDerailed(toggle: boolean): void;
	setRudderBroken(p0: boolean): void;
	setSearchlight(toggle: boolean, canBeUsedByAI: boolean): void;
	setSilent(toggle: boolean): void;
	setSiren(toggle: boolean): void;
	setSteerBias(value: number): void;
	setStrong(toggle: boolean): void;
	setTaxiLights(state: boolean): void;
	setTimedExplosion(ped: Handle, toggle: boolean): void;
	setTowTruckCraneHeight(height: number): void;
	setTrainCruiseSpeed(speed: number): void;
	setTrainSpeed(speed: number): void;
	setTyreBurst(tyreIndex: number, onRim: boolean, p2: number): void;
	setTyreFixed(tyreIndex: number): void;
	setTyresCanBurst(toggle: boolean): void;
	setTyreSmokeColor(r: number, g: number, b: number): void;
	setUndriveable(toggle: boolean): void;
	setWheelsCanBreak(enabled: boolean): void;
	setWheelsCanBreakOffWhenBlowUp(toggle: boolean): void;
	setWheelType(wheelType: number): void;
	setWindowTint(tint: number): void;
	smashWindow(index: number): void;
	startAlarm(): void;
	startHorn(duration: number, model: Hash, forever: boolean): void;
	steerUnlockBias(toggle: boolean): void;
	toggleMod(modType: number, toggle: boolean): void;
	trackVisibility(): void;
	wasCounterActivated(p0: any): boolean;
}

declare interface VehicleMpPool extends EntityMpPool<VehicleMp> {
	'new'(
		model: HashOrString,
		position: Vector3,
		options?: {
			alpha?: number;
			color?: [Array2d, Array2d] | [RGB, RGB];
			dimension?: number;
			engine?: boolean;
			heading?: number;
			locked?: boolean;
			numberPlate?: string;
		}
	): VehicleMp;
}

declare interface MarkerMp extends EntityMp {
	/**
	 * This property gets/sets the marker visibility.
	 */
	visible: boolean;
}

declare interface MarkerMpPool extends EntityMpPool<MarkerMp> {
	'new'(
		type: RageEnums.Markers | number,
		position: Vector3,
		scale: number,
		options?: {
			bobUpAndDown?: boolean;
			color?: RGBA;
			dimension?: number;
			direction?: Vector3;
			rotation?: Vector3;
			visible?: boolean;
		}
	): MarkerMp;
}

declare interface ObjectMp extends EntityMp {
	hidden: boolean;
	isWeak: boolean;
	notifyStreaming: boolean;
	streamingRange: number;
	rotation: Vector3;

	hasBeenBroken(): boolean;
	isVisible(): boolean;
	markForDeletion(): void;
	placeOnGroundProperly(): boolean;
	setActivatePhysicsAsSoonAsItIsUnfrozen(toggle: boolean): void;
	setPhysicsParams(
		weight: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		gravity: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		buoyancy: number
	): void;
	setTargettable(targettable: boolean): void;
	slide(toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;
	getAllByHash(hash: number): void;
}

declare interface ObjectMpPool extends EntityMpPool<ObjectMp> {
	'new'(
		model: HashOrString,
		position: Vector3,
		options?: {
			alpha?: number;
			dimension?: number;
			rotation?: Vector3;
		}
	): ObjectMp;

	newWeak(handle: number): ObjectMp;
	newWeaponObject(
		weaponHash: number,
		position: Vector3,
		options?: { ammo?: number; scale?: number; showWorldObject?: boolean; rotation?: Vector3; dimension?: number }
	): ObjectMp;
}

declare interface Mp {
	discord: DiscordMp;
	console: ConsoleMp;
	keys: KeysMp;
	storage: StorageMp;
	gui: GuiMp;
	user: UserMp;
	nametags: NametagsMp;
	system: SystemMp;
	voiceChat: VoiceChatMp;
	raycasting: RaycastingMp;
	Event: typeof EventMp;
	events: EventMpPool;
	browsers: BrowserMpPool;
	checkpoints: CheckpointMpPool;
	blips: BlipMpPool;
	colshapes: ColshapeMpPool;
	cameras: CameraMpPool;
	pickups: PickupMpPool;
	peds: PedMpPool;
	players: PlayerMpPool;
	vehicles: VehicleMpPool;
	dummies: DummyEntityMpPool;
	labels: TextLabelMpPool;
	markers: MarkerMpPool;
	objects: ObjectMpPool;
	game: GameMp;

	Vector3: typeof Vector3;
}

declare const mp: Mp;