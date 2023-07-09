/// <reference path="enums.d.ts" />
/// <reference path="./hashes/ped_hashes.d.ts" />
/// <reference path="./hashes/vehicle_hashes.d.ts" />
/// <reference path="./hashes/weapon_hashes.d.ts" />

declare type HashOrNumberOrString<T> = T | number | string;
declare type HashOrString<T> = T | string;
declare type Array2d = [number, number];
declare type Array3d = [number, number, number];
declare type Array4d = [number, number, number, number];
declare type RGB = Array3d;
declare type RGBA = Array4d;

declare type KeyValueCollection = { [key: string]: any };

declare interface IVector3 {
	x: number;
	y: number;
	z: number;
}

declare type PlayerWeaponCollection = {
	current: number;
	reset(): void;
};

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

declare class EntityMp {
	/**
	 * Property used for getting an entity ID.
	 *
	 * The ID is a unique identifier for the entity.
	 *
	 * A server-side ID is NOT the same as a client-side ID.
	 *
	 * Use [remoteId](https://wiki.rage.mp/index.php?title=Entity::remoteId) property if you want it to match the server-side ID.
	 */
	public readonly id: number;

	/**
	 * Property used for getting an entity type.
	 */
	public readonly type: RageEnums.EntityType;

	/**
	 * Property used to gets/sets the entity's alpha.
	 */
	public alpha: number;

	/**
	 * Property used to gets/sets the entity's data.
	 */
	public data: any;

	/**
	 * Property used to gets/sets the entity's dimension.
	 *
	 * The dimension determines who the entity is visible to.
	 */
	public dimension: number;

	/**
	 * Property used to gets/sets the entity's model.
	 */
	public model: number;

	/**
	 * Property used to gets/sets the entity's position.
	 */
	public position: Vector3;

	/**
	 * Retrieves the custom data from the entity.
	 *
	 * @param name The variabile name
	 */
	public getVariable<T = any>(name: string): T | undefined;

	/**
	 * Allows to get the value set with [entity.setOwnVariable(key, value)](https://wiki.rage.mp/index.php?title=Entity::setOwnVariable).
	 *
	 * @param name The variabile name
	 */
	public getOwnVariable<T = any>(name: string): T | undefined;

	/**
	 * Set custom data to an entity.
	 *
	 * @param name The variabile name
	 * @param value The value
	 */
	public setVariable(name: string, value: any): void;

	/**
	 * Set multiple custom data variables to an entity.
	 *
	 * @param values The values
	 */
	public setVariables(values: KeyValueCollection): void;

	/**
	 * Sets the data available to the player as opposed to [entity.setVariable(key, value)](https://wiki.rage.mp/index.php?title=Entity::setVariable).
	 */
	public setOwnVariable(key: string, value: any): void;

	/**
	 * Set multiple custom data variables that will be only available to an entity.
	 */
	public setOwnVariables(values: KeyValueCollection): void;

	/**
	 * Gets the distance between two entities.
	 *
	 * @param position Vector3
	 */
	public dist(position: Vector3): number;

	/**
	 * Gets the squared distance between two entities.
	 *
	 * @param position Vector3
	 */
	public distSquared(position: Vector3): number;

	/**
	 * Destroy a created entity.
	 */
	public destroy(): void;
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
	 * Calling for each entity in a pool.
	 *
	 * Same as forEach except faster at lookups. Do not use this for destroying entities..
	 *
	 * @param callingFunction Function what will be called
	 */
	public forEachFast(callingFunction: (entity: T) => void): void;

	/**
	 * Used to call a function for each elements in the pool.
	 *
	 * @param dimension Dimension
	 * @param callingFunction Function, what will be called.
	 */
	public forEachInDimension(dimension: number, callingFunction: (entity: T) => void): void;

	/**
	 * Used for calling a function for each element in a pool, but only if it in range of position.
	 *
	 * @param callingFunction Function, what will be called.
	 */
	public forEachInRange(position: Vector3, range: number, callingFunction: (entity: T) => void): void;
	public forEachInRange(position: Vector3, range: number, dimension: number, callingFunction: (entity: T) => void): void;

	/**
	 * Gets the closest set of entities to a position.
	 *
	 * @param position Vector3
	 * @param limit Limit of results
	 * @returns Array of entities sorted by distance to given position
	 *
	 * @example
	 * ```
	 * const [closestVehicle] = mp.vehicles.getClosest(player.position, 1);
	 * closestVehicle.locked = true;
	 * ```
	 */
	public getClosest(position: Vector3, limit: number): T[];

	 /**
	  * Gets the closest set of entities to a position in the defined dimension.
	  *
	  * @param position Vector3
	  * @param dimension The Dimension
	  * @param limit Limit of results
	  * @returns Array of entities sorted by distance to given position
	  *
	  * @example
	  * ```
	  * const [closestVehicle] = mp.vehicles.getClosestInDimension(player.position, player.dimension, 1);
	  * closestVehicle.locked = true;
	  * ```
	  */
	public getClosestInDimension(position: Vector3, dimension: number, limit: number): T[];

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

declare class PlayerMp extends EntityMp {
	/**
	 * Property used for getting the player's action.
	 */
	public readonly action: string;

	/**
	 * Property used for getting the player's aim target
	 *
	 * If player currently [isn't aiming](https://wiki.rage.mp/index.php?title=Player::isAiming), this property will be last aim target.
	 */
	public readonly aimTarget: PlayerMp;

	/**
	 * Property used for getting the player's weapon hash and ammo.
	 */
	public readonly allWeapons: number[];

	/**
	 * Property used for getting the player's ip address.
	 */
	public readonly ip: string;

	/**
	 * Property used for getting the player's aiming state.
	 */
	public readonly isAiming: boolean;

	/**
	 * Property used for getting the player's climbing state.
	 */
	public readonly isClimbing: boolean;

	/**
	 * Property used for getting the player's entering vehicle state.
	 */
	public readonly isEnteringVehicle: boolean;

	/**
	 * Property used for getting the player's cover state.
	 */
	public readonly isInCover: boolean;

	/**
	 * Property used for getting the player's melee state.
	 */
	public readonly isInMelee: boolean;

	/**
	 * Property used for getting the player's jumping state.
	 */
	public readonly isJumping: boolean;

	/**
	 * Property used for getting the player's leaving vehicle state.
	 */
	public readonly isLeavingVehicle: boolean;

	/**
	 * Property used for getting the player's on ladder state.
	 */
	public readonly isOnLadder: boolean;

	/**
	 * Property used for getting the player's reloading state.
	 */
	public readonly isReloading: boolean;

	/**
	 * Property used for getting the player's primary hair color.
	 */
	public readonly hairColor: number;

	/**
	 * Property used for getting the player's hair highlight color.
	 */
	public readonly hairHighlightColor: number;

	/**
	 * Property used for getting the player's packet loss.
	 */
	public readonly packetLoss: number;

	/**
	 * Property used for getting the player's ping.
	 */
	public readonly ping: number;

	/**
	 * Property used for getting the player's social club id.
	 */
	public readonly rgscId: string;

	/**
	 * Property used for getting the player's vehicle seat.
	 */
	public readonly seat: RageEnums.VehicleSeat;

	/**
	 * Property used for getting the player's client serial.
	 */
	public readonly serial: string;

	/**
	 * Property used for getting the player's social club.
	 */
	public readonly socialClub: string;

	/**
	 * Property used for getting the player's streamed players.
	 */
	public readonly streamedPlayers: PlayerMp[];

	/**
	 * Property used for getting the player's weapons.
	 */
	public readonly weapons: PlayerWeaponCollection;

	/**
	 * Property used for getting the player's vehicle.
	 */
	public readonly vehicle: VehicleMp;

	/**
	 * Property used for getting the player's voice listeners.
	 *
	 * @returns All active voice listeners as array, which got added by [Player::enableVoiceTo](https://wiki.rage.mp/index.php?title=Player::enableVoiceTo).
	 */
	public readonly voiceListeners: PlayerMp[];

	/**
	 * Property used to gets/sets the player's armour.
	 */
	public armour: number;

	/**
	 * Property used to gets/sets the player's eye color.
	 */
	public eyeColor: number;

	/**
	 * Property used to gets/sets the player's game type.
	 */
	public gameType: string;

	/**
	 * Property used to gets/sets the player's heading.
	 */
	public heading: number;

	/**
	 * Property used to gets/sets the player's health.
	 */
	public health: number;

	/**
	 * Property used to gets/sets the player's name.
	 */
	public name: string;

	/**
	 * Property used to gets/sets the player's weapon.
	 */
	public weapon: number;

	/**
	 * Property used to gets/sets the player's weapon ammo.
	 */
	public weaponAmmo: number;

	/**
	 * Property used to gets/sets the player's outgoing sync.
	 */
	public disableOutgoingSync: boolean;

	/**
	 * Bans the player from your server.
	 *
	 * The ban reason doesn't display for the player, you need to use something else to display it for the player.
	 *
	 * Also, all bans that use this function are cleared once the server restarts.
	 *
	 * You need to save the bans yourself if you want them to stay after restarting your server.
	 * @param reason The reason of ban
	 */
	public ban(reason: string): void;

	/**
	 * `FROM SERVER` Calls a client-side event for the selected player
	 *
	 * `FROM CLIENT` For Peer 2 Peer connections.
	 *
	 * The current client can call an event on another client's scriptside and that other client can handle that event.
	 *
	 * @param eventName The event name that will be called
	 * @param args Any arguments, what should be sent to client. Supports entities, strings, numbers and booleans. (Objects and Arrays should be packed to JSON format.) Arguments has to be packed in an array.
	 */
	public call(eventName: string, args?: any[]): void;

	/**
	 * Calls the specified player's clientside Remote procedure call (RPC) event and expects a callback.
	 *
	 * @param eventProcName Procedure Name
	 * @param args Args
	 */
	public callProc<T = any>(eventName: string, args?: any[]): Promise<T>;

	/**
	 * Triggers a client-side event for the selected player unreliably, which means it will be affected by potential packet loss, but it will be triggered way more faster, useful for when you need frequent triggers.
	 *
	 * @param eventName Event Name
	 * @param args Args
	 */
	public callUnreliable(eventName: string, args?: any[]): void;

	/**
	 * TODO: docs
	 */
	public cancelPendingRpc(procName?: string): void;

	/**
	 * TODO: docs
	 */
	public clearDecorations(): void;

	/**
	 * Enables voice listening to a certain player.
	 *
	 * @param targetPlayer The Player you want to listen to.
	 */
	public enableVoiceTo(targetPlayer: PlayerMp): void;

	/**
	 * Disables voice listening to a certain player.
	 *
	 * @param targetPlayer The Player you want to stop listen to.
	 */
	public disableVoiceTo(targetPlayer: PlayerMp): void;

	/**
	 * TODO: docs
	 */
	public eval(code: string): void;

	/**
	 * Gets a hash of player clothes.
	 *
	 * @param component [Components](https://wiki.rage.mp/index.php?title=Player::getClothes)
	 * @returns A hash of player clothes
	 */
	public getClothes(component: RageEnums.ClothesComponent | number): {
		drawable: number;
		texture: number;
		palette: number;
	};

	/**
	 * Gets the tattoo (decoration) from a collection specified.
	 *
	 * @param collection [Collections](https://github.com/root-cause/v-tattoos)
	 */
	public getDecoration(collection: number): number;

	/**
	 * Gets the various freemode face features, e.g. nose length, chin shape. Scale ranges from -1.0 to 1.0. Index can be 0 - 19.
	 *
	 * @param index [Index](https://wiki.rage.mp/index.php?title=Player::getFaceFeature)
	 */
	public getFaceFeature(index: number): number;

	/**
	 * TODO: docs
	 */
	public getHeadBlend(): {
		shapes: number[];
		skins: number[];
		shapeMix: number;
		skinMix: number;
		thirdMix: number;
	};

	/**
	 * TODO: docs
	 */
	public getHeadOverlay(overlay: RageEnums.HeadOverlay | number): Array4d;

	/**
	 * Gets a prop of player from ID.
	 *
	 * @param prop [Props](https://wiki.rage.mp/index.php?title=Player::getProp)
	 * @returns A prop of player from ID
	 */
	public getProp(prop: RageEnums.PlayerProp | number): {
		drawable: number;
		texture: number;
	};

	/**
	 * Get the weapon's ammo.
	 *
	 * @param weapon Weapon Hash
	 */
	public getWeaponAmmo(weapon: HashOrNumberOrString<RageEnums.Hashes.Weapon>): number;

	/**
	 * Gives a weapon(see) for the player.
	 *
	 * @param weaponHash Weapon Hash
	 * @param ammo Ammo
	 */
	public giveWeapon(weaponHash: HashOrNumberOrString<RageEnums.Hashes.Weapon>, ammo: number): void;
	public giveWeapon(weaponHashes: HashOrNumberOrString<RageEnums.Hashes.Weapon>[], ammo: number): void;

	/**
	 * TODO: docs
	 */
	public hasPendingRpc(procName?: string): boolean;

	/**
	 * Used for check, player is located in stream distance for another player or not.
	 *
	 * @param player Player
	 */
	public isStreamed(player: PlayerMp): boolean;

	/**
	 * Invokes specified [native](https://cdn.rage.mp/public/natives/) function
	 *
	 * @param hash Hash
	 * @param args Args
	 */
	public invoke(hash: string, ...args: any[]): void;

	/**
	 * Kicks a player from the server.
	 *
	 * @param reason This message does not show up for the player being kicked
	 */
	public kick(reason: string): void;

	/**
	 * Silently kicks the player which will then reconnect them back to the server.
	 *
	 * Useful for quick reconnects without going through the UI.
	 *
	 * The client will act as if it has timed out.
	 */
	public kickSilent(): void;

	/**
	 * Sends a notification to the player.
	 *
	 * You can use the colour codes found here: [Fonts and colors](https://wiki.rage.mp/index.php?title=Fonts_and_Colors)
	 *
	 * @param message Message
	 */
	public notify(message: string): void;

	/**
	 * Writes a chat message to player.
	 *
	 * @param message Text what should be output in player chat.
	 */
	public outputChatBox(message: string): void;

	/**
	 * Starts animation
	 *
	 * @param dict [Animation List](https://wiki.rage.mp/index.php?title=Animations)
	 * @param name Animation Name
	 * @param speed Animation Speed
	 * @param flag [Animation Flags](https://wiki.rage.mp/index.php?title=Player::playAnimation)
	 */
	public playAnimation(dict: string, name: string, speed: number, flag: number): void;

	/**
	 * Stops animation of the player
	 */
	public stopAnimation(): void;

	/**
	 * Puts player into vehicle.
	 *
	 * You can't put player in vehicle immediately after creating vehicle, use timeout (200 ms will be fine)
	 *
	 * @param vehicle Vehicle
	 * @param seat Seat Number
	 */
	public putIntoVehicle(vehicle: VehicleMp, seat: RageEnums.VehicleSeat | number): void;

	/**
	 * Removes all weapons from the player
	 */
	public removeAllWeapons(): void;

	/**
	 * Ejects player from vehicle.
	 */
	public removeFromVehicle(): void;

	/**
	 * Removes a weapon of player. Weapon's hashes list
	 *
	 * @param weaponHash [Weapon Hash](https://wiki.rage.mp/index.php?title=Weapons)
	 */
	public removeWeapon(weaponHash: HashOrNumberOrString<RageEnums.Hashes.Weapon>): void;

	/**
	 * Sets clothing for player.
	 *
	 * Alternative of client-side function: [Player::setComponentVariation](https://wiki.rage.mp/index.php?title=Player::setComponentVariation)
	 *
	 * @param component ClothesComponent
	 * @param drawable Number
	 * @param texture Texture
	 * @param palette Palette
	 */
	public setClothes(component: RageEnums.ClothesComponent | number, drawable: number, texture: number, palette: number): void;

	/**
	 * Sets player customization (NB: This resets your weapons also).
	 *
	 * IMPORTANT! faceFeatures array must contain 20 elements
	 */
	public setCustomization(
		gender: boolean,
		shapeFirst: number,
		shapeSecond: number,
		shapeThird: number,
		skinFirst: number,
		skinSecond: number,
		skinThird: number,
		shapeMix: number,
		skinMix: number,
		thirdMix: number,
		eyeColor: number,
		hairColor: number,
		hightlightColor: number,
		faceFeatures: number[]
	): void;

	/**
	 * Applies an Item from a PedDecorationCollection to a player. These include tattoos and shirt decals.
	 *
	 * @param collection Model hash or name
	 * @param overlay Model hash or name
	 */
	public setDecoration(collection: number, overlay: number): void;

	/**
	 * Sets the various freemode face features, e.g. nose length, chin shape. Scale ranges from -1.0 to 1.0. Index can be 0 - 19.
	 */
	public setFaceFeature(index: number, scale: number): void;

	/**
	 * Used for freemode (online) characters.
	 *
	 * @param firstColor First Color
	 * @param secondColor Second Color
	 */
	public setHairColor(firstColor: number, secondColor: number): void;

	/**
	 * TODO: docs
	 */
	public setHeadBlend(
		shapeFirst: number,
		shapeSecond: number,
		shapeThird: number,
		skinFirst: number,
		skinSecond: number,
		skinThird: number,
		shapeMix: number,
		skinMix: number,
		thirdMix: number
	): void;

	/**
	 * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
	 *
	 * First and second color you can take in the list of hair colors.
	 *
	 * [List of colors](https://wiki.gtanet.work/index.php?title=Hair_Colors)
	 *
	 * To disable any overlay use 255 as index.
	 */
	public setHeadOverlay(overlay: RageEnums.HeadOverlay | number, value: Array4d): void;

	/**
	 * Sets the prop for the player
	 */
	public setProp(prop: RageEnums.PlayerProp | number, drawable: number, texture: number): void;

	/**
	 * Sets the amount of ammo for the selected weapon
	 *
	 * @param weapon Weapon Hash
	 * @param ammo Ammo
	 */
	public setWeaponAmmo(weapon: HashOrNumberOrString<RageEnums.Hashes.Weapon>, ammo: number): void;

	/**
	 * Spawns the player.
	 *
	 * @param position Vector3
	 */
	public spawn(position: Vector3): void;

	/**
	 * Updates the player head blend data
	 */
	public updateHeadBlend(shapeMix: number, skinMix: number, thirdMix: number): void;

	/**
	 * Makes the player play a scenario.
	 *
	 * @param scenario [Scenario List](https://wiki.rage.mp/index.php?title=Scenarios)
	 */
	public playScenario(scenario: string): void;

	/**
	 * Calls all streamed in players' clientside from the specified player passing data.
	 *
	 * @param includeSelf Calls the specified player's clientside also along with the streamed players to him
	 * @param eventName Event Name
	 * @param args Args
	 */
	public callToStreamed(includeSelf: boolean, eventName: string, args?: any[]): void;
}

declare class PlayerMpPool extends EntityMpPool<PlayerMp> {
	/**
	 * Writes a chat message for all players (like [Player::outputChatBox](https://wiki.rage.mp/index.php?title=Player::outputChatBox)).
	 *
	 * @param text The text to be sent
	 */
	public broadcast(text: string): void;

	/**
	 * Writes a chat message for all players in range (like [Player::outputChatBox](https://wiki.rage.mp/index.php?title=Player::outputChatBox)).
	 *
	 * @param position The position from which the broadcast will be sent
	 * @param range The range from position
	 * @param dimension The dimension in which the broadcast will be sent (optional)
	 * @param text The text to be sent
	 */
	public broadcastInRange(position: Vector3, range: number, text: string): void;
	public broadcastInRange(position: Vector3, range: number, dimension: number, text: string): void;

	/**
	 * Triggers an event for:
	 *
	 * - the whole server
	 * - specified players array
	 *
	 * @param eventName Event name, what will be called
	 * @param args Any arguments, what should be sended to client. Supports entities, strings, numbers and booleans. (Objects and Arrays should be packed to JSON format.)
	 */
	public call(eventName: string, args?: any[]): void;
	public call(players: PlayerMp[], eventName: string, args?: any[]): void;

	/**
	 * Calls added client-side event for any players in a specific dimension
	 *
	 * @param dimension The dimension in which the event will be sent
	 * @param eventName Event name, what will be called
	 * @param args Any arguments, what should be sended to client. Supports entities, strings, numbers and booleans. (Objects and Arrays should be packed to JSON format.)
	 */
	public callInDimension(dimension: number, eventName: string, args?: any[]): void;

	/**
	 * Calls a function for each player in range of position.
	 *
	 * @param position The position from which the broadcast will be sent
	 * @param range The range from position
	 * @param eventName Event name, what will be called
	 * @param args Any arguments, what should be sended to client. Supports entities, strings, numbers and booleans. (Objects and Arrays should be packed to JSON format.)
	 */
	public callInRange(position: Vector3, range: number, eventName: string, args?: any[]): void;
	public callInRange(position: Vector3, range: number, dimension: number, eventName: string, args?: any[]): void;

	/**
	 * TODO: docs
	 */
	public callUnreliable(eventName: string, args?: any[]): void;
	public callUnreliable(players: PlayerMp[], eventName: string, args?: any[]): void;

	/**
	 * TODO: docs
	 */
	public callInDimensionUnreliable(dimension: number, eventName: string, args?: any[]): void;

	/**
	 * TODO: docs
	 */
	public callInRangeUnreliable(position: Vector3, range: number, eventName: string, args?: any[]): void;
	public callInRangeUnreliable(position: Vector3, range: number, dimension: number, eventName: string, args?: any[]): void;
}

declare type Quaternion = {
	x: number;
	y: number;
	z: number;
	w: number;
};

declare class VehicleMp extends EntityMp {
	/**
	 * Property used for getting the vehicle's extras
	 */
	public readonly extras: boolean[];

	/**
	 * Property used for getting the vehicle's mods
	 */
	public readonly mods: number[];

	/**
	 * Property used for getting the engine's health.
	 *
	 * For edit health use [Vehicle::repair](https://wiki.rage.mp/index.php?title=Vehicle::repair)
	 */
	public readonly engineHealth: number;

	/**
	 * Property used for getting the brake's state.
	 */
	public readonly brake: boolean;

	/**
	 * Property used for getting the highbeams's state.
	 */
	public readonly highbeams: boolean;

	/**
	 * Property used for getting the horn's state.
	 */
	public readonly horn: boolean;

	/**
	 * Property used for getting the rocket boost's state.
	 */
	public readonly rocketBoost: boolean;

	/**
	 * Property used for getting the siren's state.
	 */
	public readonly siren: boolean;

	/**
	 * Property used for getting the steer angle's state.
	 *
	 * From -1 to 1
	 */
	public readonly steerAngle: number;
	/**
	 * Property used for getting the vehicle velocity.
	 */
	public readonly velocity: Vector3;

	/**
	 * Property used for getting the vehicle's streamed players
	 */
	public readonly streamedPlayers: PlayerMp[];

	/**
	 * Property used for getting the vehicle's heading.
	 */
	public readonly heading: number;

	/**
	 * Property used for getting the vehicle's quaternion.
	 */
	public readonly quaternion: Quaternion;

	/**
	 * Property used for getting the vehicle's trailer
	 */
	public readonly trailer: VehicleMp;

	/**
	 * Property used for getting the vehicle's trailered by
	 */
	public readonly traileredBy: VehicleMp;

	/**
	 * Property used to gets/sets the vehicle's rotation.
	 */
	public rotation: Vector3;

	/**
	 * Property used to gets/sets the body's health.
	 */
	public bodyHealth: number;

	/**
	 * Property used to gets/sets the vehicle's controller.
	 */
	public controller: PlayerMp | undefined;

	/**
	 * Property used to gets/sets the vehicle's custom tires.
	 */
	public customTires: boolean;

	/**
	 * Property used for getting the vehicle's engine status.
	 */
	public engine: boolean;

	/**
	 * Property used to gets/sets the vehicle's dashboard color.
	 */
	public dashboardColor: number;

	/**
	 * Property used to gets/sets the vehicle's dead state.
	 */
	public dead: boolean;

	/**
	 * Property used to gets/sets the vehicle's livery
	 */
	public livery: number;

	/**
	 * Property used to gets/sets the vehicle's lock state
	 */
	public locked: boolean;

	/**
	 * Property used to gets/sets the vehicle's movable state.
	 */
	public movable: boolean;

	/**
	 * Property used for getting the vehicle's neon status.
	 */
	public neonEnabled: boolean;

	/**
	 * Property used to gets/sets the vehicle's number plate
	 *
	 * Maximum length: 8 char
	 */
	public numberPlate: string;

	/**
	 * Property used to gets/sets the vehicle's number plate type
	 */
	public numberPlateType: RageEnums.VehicleNumberPlateType;

	/**
	 * Property used to gets/sets the vehicle's pearlescent color
	 *
	 * Using the [Vehicle colors](https://wiki.rage.mp/index.php?title=Vehicle_Colors).
	 */
	public pearlescentColor: number;

	/**
	 * Property used to gets/sets the vehicle's taxi lights state.
	 */
	public taxiLights: boolean;

	/**
	 * Property used to gets/sets the vehicle's trim color.
	 */
	public trimColor: number;

	/**
	 * Property used to gets/sets the vehicle's wheels [color](https://wiki.rage.mp/index.php?title=Vehicle_Colors).
	 */
	public wheelColor: number;

	/**
	 * Property used to gets/sets the vehicle's wheel type.
	 */
	public wheelType: number;

	/**
	 * Property used to gets/sets the vehicle's window tint.
	 *
	 * 1 - 255
	 */
	public windowTint: number;

	/**
	 * Explodes the target vehicle.
	 */
	public explode(): void;

	/**
	 * On the client-side, this function requires three args (red: int, green: int, blue: int), and will return an object: RGB
	 *
	 * @param id 0 - Primary Color | 1 - Secondary Color
	 */
	public getColor(id: number): number;

	/**
	 * Used to get the vehicle RGB body color. Returns null if never set explicitly.
	 *
	 * @param id 0 - Primary Color | 1 - Secondary Color
	 */
	public getColorRGB(id: number): RGB;

	/**
	 * Get the extra currently applied on vehicle in the target extra id.
	 *
	 * @param extraId Extra Id
	 */
	public getExtra(index: number): boolean;

	/**
	 * Gets the mod currently applied on your vehicle in the targetted modType.
	 *
	 * @param modType Mod Type
	 */
	public getMod(modType: number): number;

	/**
	 * Used to get the current neon lights of a vehicle.
	 */
	public getNeonColor(): number[];

	/**
	 * Get the occupant inside a vehicle by seat number
	 *
	 * @param seat Vehicle Seat
	 */
	public getOccupant(seat: number): PlayerMp;

	/**
	 * Gets the occupants inside of a vehicle.
	 */
	public getOccupants(): PlayerMp[];

	/**
	 * Get vehicle paint by id
	 *
	 * @param id 0 - Primary Color | 1 - Secondary Color
	 */
	public getPaint(id: number): number;

	/**
	 * Used for check, vehicle is located in stream distance for player or not.
	 *
	 * @param player Player object
	 */
	public isStreamed(player: PlayerMp): boolean;

	/**
	 * Repairs a vehicle.
	 */
	public repair(): void;

	/**
	 * Sets vehicle body color. ([Vehicle colors](https://wiki.rage.mp/index.php?title=Vehicle_Colors))
	 *
	 * @param primary Primary Color
	 * @param secondary Secondary Color
	 */
	public setColor(primary: number, secondary: number): void;

	/**
	 * Sets vehicle RGB body color.
	 *
	 * @param red1 Primary Red Colour [0 - 255]
	 * @param green1 Primary Green Colour [0 - 255]
	 * @param blue1 Primary Blue Colour [0 - 255]
	 * @param red2 Secondary Red Colour [0 - 255]
	 * @param green2 Secondary Green Colour [0 - 255]
	 * @param blue2 Secondary Blue Colour [0 - 255]
	 */
	public setColorRGB(red1: number, green1: number, blue1: number, red2: number, green2: number, blue2: number): void;

	/**
	 * Max extra ID is 16.
	 */
	public setExtra(index: number, value: boolean): void;

	/**
	 * Applies the specified mod onto the vehicle.
	 *
	 * @param modType Mod Type
	 * @param modIndex Mod Index
	 */
	public setMod(modType: number, modIndex: number): void;

	/**
	 * Sets vehicle neon lights.
	 *
	 * @param red Red Value 0 - 255.
	 * @param green Green Value 0 - 255.
	 * @param blue Blue Value 0 - 255.
	 */
	public setNeonColor(red: number, green: number, blue: number): void;

	/**
	 * TODO: docs
	 */
	public setPaint(primaryType: number, primaryColor: number, secondaryType: number, secondaryColor: number): void;

	/**
	 * TODO: docs
	 */
	public setOccupant(seat: number, player: PlayerMp): void;

	/**
	 * Spawns vehicle.
	 *
	 * @param position Vector3
	 * @param heading Heading
	 */
	public spawn(position: Vector3, heading: number): void;
}

declare interface VehicleMpPool extends EntityMpPool<VehicleMp> {
	'new'(
		model: HashOrNumberOrString<RageEnums.Hashes.Vehicle>,
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

declare interface EventMpThis {
	cancel: boolean;
}

declare interface IServerEvents {
	entityCreated: (entity: EntityMp) => void;
	/*
 	 * @deprecated Broken/Removed in RageMP 1.1 DP1
	 */
	entityDestroyed: (entity: EntityMp) => void;
	entityModelChange: (entity: EntityMp, oldModel: number) => void;
	incomingConnection: (ip: string, serial: string, rgscName: string, rgscId: string, gameType: string) => void;
	packagesLoaded: () => void;
	playerChat: (player: PlayerMp, text: string) => void;
	playerCommand: (player: PlayerMp, command: string) => void;
	playerDamage: (player: PlayerMp, healthLoss: number, armorLoss: number) => void;
	playerDeath: (player: PlayerMp, reason: number, killer?: PlayerMp) => void;
	playerEnterCheckpoint: (player: PlayerMp, checkpoint: CheckpointMp) => void;
	playerEnterColshape: (player: PlayerMp, colshape: ColshapeMp) => void;
	playerEnterVehicle: (player: PlayerMp, vehicle: VehicleMp, seat: RageEnums.VehicleSeat) => void;
	playerExitCheckpoint: (player: PlayerMp, checkpoint: CheckpointMp) => void;
	playerExitColshape: (player: PlayerMp, colshape: ColshapeMp) => void;
	playerExitVehicle: (player: PlayerMp, vehicle: VehicleMp, seat: number) => void;
	playerJoin: (player: PlayerMp) => void;
	playerQuit: (player: PlayerMp, exitType: string, reason: string) => void;
	playerReachWaypoint: (player: PlayerMp) => void;
	playerReady: (player: PlayerMp) => void;
	playerSpawn: (player: PlayerMp) => void;
	playerStartEnterVehicle: (player: PlayerMp, vehicle: VehicleMp, seat: RageEnums.VehicleSeat) => void;
	playerStartExitVehicle: (player: PlayerMp) => void;
	playerStreamIn: (player: PlayerMp, forPlayer: PlayerMp) => void;
	playerStreamOut: (player: PlayerMp, forPlayer: PlayerMp) => void;
	playerWeaponChange: (player: PlayerMp, oldWeapon: number, newWeapon: number) => void;
	serverShutdown: () => void;
	trailerAttached: (vehicle: VehicleMp, trailer: VehicleMp) => void;
	vehicleDamage: (vehicle: VehicleMp, bodyHealthLoss: number, engineHealthLoss: number) => void;
	vehicleDeath: (vehicle: VehicleMp) => void;
	vehicleHornToggle: (vehicle: VehicleMp, toggle: boolean) => void;
	vehicleSirenToggle: (vehicle: VehicleMp, toggle: boolean) => void;
}

declare class EventMp {
	// @ts-ignore
	constructor<K extends keyof IServerEvents>(eventName: K, callback: IServerEvents[K]);
	constructor(eventName: string, callback: (...args: any[]) => void);

	/**
	 * Destroys the event
	 */
	public destroy(): void;
}

declare type MultiEventHandlers = Partial<IServerEvents> & Record<string, (...args: any) => void>;

declare type ThisifyServerEvents = {
	[P in keyof IServerEvents]: (this: EventMpThis, ...args: Parameters<IServerEvents[P]>) => void;
}

declare class EventMpPool {
	/**
	 * Delays server's shutdown till you finish all your async tasks.
	 *
	 * HINT: use [delayTermination](https://wiki.rage.mp/index.php?title=Events::delayTermination) instead.
	 */
	public delayShutdown: boolean;

	/**
	 * Same as [delayShutdown](https://wiki.rage.mp/index.php?title=Events::delayTermination), but it seems to work over [delayShutdown](https://wiki.rage.mp/index.php?title=Events::delayTermination).
	 */
	public delayTermination: boolean;

	/**
	 * Delays server's initialization of packages to run early functions.
	 */
	public delayInitialization: boolean;

	/**
	 * Registers event handlers.
	 *
	 * Returning true will destroy automatically the event handler.
	 *
	 * @param eventName The name of the event you wish to attach a handler to
	 * @param callback The function that you want the event to trigger, which has to be defined before you add the handler
	 */
	public add<K extends keyof IServerEvents>(eventName: K, callback: ThisifyServerEvents[K]): void;
	public add(eventHandlers: MultiEventHandlers): void;
	public add(eventName: string, callback: (this: EventMpThis, ...args: any[]) => void): void;

	/**
	 * Registers a command handler.
	 *
	 * @param commandName The name of the command you wish to attach a handler to
	 * @param callback The function that you want the command to trigger, which has to be defined before you add the handler
	 */
	public addCommand(commandName: string, callback: (player: PlayerMp, fullText: string, ...args: string[]) => void): void;
	public addCommand(commands: { [commandName: string]: (player: PlayerMp, fullText: string, ...args: string[]) => void }): void;

	/**
	 * Register the specified player's Remote Procedure Call (RPC) event and expects a callback.
	 *
	 * @param procedureName The name of the procedure you wish to attach a handler to
	 * @param callback The function that you want the RPC to trigger, which has to be defined before you add the handler
	 */
	public addProc(procedureName: string, callback: (...args: any[]) => void): void;
	public addProc(procedures: { [name: string]: (...args: any[]) => void }): void;

	/**
	 * Calls registered event handlers. This function can call serverside events from serverside and clientside events from clientside.
	 *
	 * 1.1 - If you're sending number more than 2^31 to client, you need to arg.toString() transform your number on server and parseInt(arg) on client.
	 *
	 * @param eventName The name of the event you wish to call
	 * @param args The arguments
	 */
	public call<K extends keyof IServerEvents>(eventName: K, ...args: any[]): void;
	public call(eventName: string, ...args: any[]): void;

	/**
	 * Gets all handlers of the specified event.
	 *
	 * @param eventName Name of the event you want to gets all handlers
	 * @returns An array of specified event
	 */
	public getAllOf<K extends keyof IServerEvents>(eventName: K): Function[];
	public getAllOf(eventName: string): Function[];

	/**
	 * Removes the specified event from events tree.
	 *
	 * @param eventName Name of the event you want to remove
	 * @param callback The function that you want the event to remove
	 */
	public remove<K extends keyof IServerEvents>(eventName: K, callback?: IServerEvents[K]): void;
	public remove(eventName: string, callback?: (...args: any[]) => void): void;
	public remove(eventNames: string[]): void;

	/**
	 * Resets the whole event manager.
	 */
	public reset(): void;
}

declare class BlipMp extends EntityMp {
	/**
	 * Property related to the Blip's color. [Colors](https://wiki.rage.mp/index.php?title=Blip::color)
	 */
	color: number;

	/**
	 * Changes the name of the blip shown on the map. When you press Esc and hover over the blip, it will have this name.
	 */
	name: string;

	/**
	 * Used to have a fade in/out of the blip when you're in range of the draw distance.
	 */
	drawDistance: number;

	/**
	 * Changes the blip rotation.
	 */
	rotation: number;

	/**
	 * Changes the blip scale.
	 */
	scale: number;

	/**
	 * Changes the behavior of the Blip on the minimap.
	 */
	shortRange: boolean;

	/**
	 * Changes the blip sprite. [Sprites](https://wiki.rage.mp/index.php?title=Blip::sprite)
	 */
	sprite: number;

	/**
	 * Creates a route to the blip from the player's location.
	 *
	 * @param player Player object or an array of player objects
	 * @param color All colors available on [Blip Colors](https://wiki.rage.mp/index.php?title=Blips#Blip_colors) page
	 * @param scale Float
	 */
	routeFor(player: PlayerMp | PlayerMp[] | undefined, color: number, scale: number): void;

	/**
	 * Removes a route to blip for player.
	 *
	 * @param player Array or object of player to which to remove route
	 */
	unrouteFor(player: PlayerMp | PlayerMp[]): void;
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

declare class CheckpointMp extends EntityMp {
	/**
	 * Property related to the Checkpoint's color.
	 */
	color: number;

	/**
	 * This property is used to set or retrieve the direction of the checkpoint.
	 */
	destination: Vector3;

	/**
	 * This property is used to set or get the radius of the checkpoint.
	 */
	radius: number;

	/**
	 * This property is used to set or get the visible of the checkpoint.
	 */
	visible: boolean;

	/**
	 * Returns an array of 4 numbers, with a checkpoint color.
	 */
	getColor(): number[];

	/**
	 * Hiding a checkpoint for a particular player.
	 */
	hideFor(player: PlayerMp): void;

	/**
	 * Sets the checkpoint color.
	 *
	 * @param red Red color value (0 to 255)
	 * @param green Green color value (0 to 255)
	 * @param blue Blue color value (0 to 255)
	 * @param alpha Alpha color value (0 to 255)
	 */
	setColor(red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Showing a checkpoint for a particular player.
	 */
	showFor(player: PlayerMp): void;
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

declare class ColshapeMp extends EntityMp {
	/**
	 * Returns type of colshape.
	 */
	readonly shapeType: RageEnums.ColshapeType;

	/**
	 * Checking if a point is within the colshape.
	 *
	 * @param point Vector3
	 */
	isPointWithin(point: Vector3): boolean;
}

declare class ColshapeMpPool extends EntityMpPool<ColshapeMp> {
	/**
	 * Create a ColShape of circle in the 2D plane
	 *
	 * @param x Number in float
	 * @param y Number in float
	 * @param range Number in float
	 * @param dimension  Number (optional parameter)
	 */
	newCircle(x: number, y: number, range: number, dimension?: number): ColshapeMp;

	/**
	 * Creates a cuboid ColShape in 3D space
	 *
	 * @param x Number in float
	 * @param y Number in float
	 * @param z Number in float
	 * @param width Number in float
	 * @param depth Number in float
	 * @param height Number in float
	 * @param dimension Number (optional)
	 */
	newCuboid(x: number, y: number, z: number, width: number, depth: number, height: number, dimension?: number): ColshapeMp;

	/**
	 * Creates a rectangle (square) ColShape 2D plane
	 *
	 * @param x Number in float
	 * @param y Number in float
	 * @param width Number in float
	 * @param height Number in float
	 * @param dimension Number (optional)
	 */
	newRectangle(x: number, y: number, width: number, height: number, dimension?: number): ColshapeMp;

	/**
	 * Creates a Sphere ColShape
	 *
	 * @param x Number in float
	 * @param y Number in float
	 * @param z Number in float
	 * @param range Number in float
	 * @param dimension Number (optional parameter)
	 */
	newSphere(x: number, y: number, z: number, range: number, dimension?: number): ColshapeMp;

	/**
	 * Creates a Colshape into the shape of a Tube.
	 *
	 * @param x Number in float
	 * @param y Number in float
	 * @param z Number in float
	 * @param height Number in float
	 * @param range Number in float
	 * @param dimension Number in float
	 */
	newTube(x: number, y: number, z: number, height: number, range: number, dimension?: number): ColshapeMp;
}

declare class MarkerMp extends EntityMp {
	/**
	 * TODO: docs
	 */
	direction: Vector3;

	/**
	 * Sets the scale of the selected marker
	 */
	scale: number;

	/**
	 * TODO: docs
	 */
	visible: boolean;

	/**
	 * Gets the marker's color.
	 */
	getColor(): number[];

	/**
	 * Hiding a marker for a particular player.
	 */
	hideFor(player: PlayerMp): void;

	/**
	 * Sets the marker color.
	 *
	 * @param red Red color value (0 to 255)
	 * @param green Green color value (0 to 255)
	 * @param blue Blue color value (0 to 255)
	 * @param alpha Alpha color value (0 to 255)
	 */
	setColor(red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Showing a marker for a particular player.
	 */
	showFor(player: PlayerMp): void;
}

declare interface MarkerMpPool extends EntityMpPool<MarkerMp> {
	'new'(
		type: number,
		position: Vector3,
		scale: number,
		options?: {
			color?: RGBA;
			dimension?: number;
			direction?: Vector3;
			rotation?: Vector3;
			visible?: boolean;
		}
	): MarkerMp;
}

declare class TextLabelMp extends EntityMp {
	/**
	 * Update the color of the selected label
	 */
	color: RGB;

	/**
	 * Update the draw distance of the selected label
	 */
	drawDistance: number;

	/**
	 * Updates the los(Line of Sight) on the selected label.
	 */
	los: boolean;

	/**
	 * Updates the text of a created label.
	 */
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

declare class PedMp extends EntityMp {
	controller: PlayerMp;

	/**
   * Property used to gets/sets the ped's heading.
   */
	public heading: number;
}

declare interface PedMpPool extends EntityMpPool<PedMp> {
	'new'(
		modelHash: number,
		position: Vector3,
		options?: {
			dynamic?: boolean;
			frozen?: boolean;
			invincible?: boolean;
			lockController?: boolean;
			heading?: number;
			dimension?: number;
		}
	): PedMp;
}

declare class ObjectMp extends EntityMp {
	rotation: Vector3;
}

declare interface ObjectMpPool extends EntityMpPool<ObjectMp> {
	/**
	 * @see https://cdn.rage.mp/public/odb/index.html
	 */
	'new'(
		model: HashOrNumberOrString<string>,
		position: Vector3,
		options?: {
			alpha?: number;
			dimension?: number;
			rotation?: Vector3;
		}
	): ObjectMp;
}

declare interface WorldMp {
	/**
	 * This property gets/sets game weather.
	 *
	 * [Weather](https://wiki.rage.mp/index.php?title=Weather)
	 */
	weather: HashOrString<RageEnums.Weather>;

	/**
	 * This function sets time.
	 */
	time: {
		hour: number;
		minute: number;
		second: number;

		set(hour: number, minute: number, second: number): void;
	};

	trafficLights: {
		/**
		 * This property locks the traffic lights in their current position.
		 */
		locked: boolean;

		/**
		 * This property set the traffic lights state. (If you want to make your own traffic lights system, make sure of locking the traffic lights to avoid the game to change them by itself)
		 */
		state: number;
	};

	/**
	 * Removes an IPL and sync it to every client
	 *
	 * @param ipl [IPLs](https://wiki.rage.mp/index.php?title=Interiors_and_Locations)
	 */
	removeIpl(ipl: string): void;

	/**
	 * Requests an IPL and sync it to every client.
	 *
	 * @param name ipl [IPLs](https://wiki.rage.mp/index.php?title=Interiors_and_Locations)
	 */
	requestIpl(name: string): void;

	/**
	 * Starts a weather transition to the weather specified and sync it to all clients.
	 *
	 * @param weather [Weather](https://wiki.rage.mp/index.php?title=Weather)
	 * @param duration Weather transitioning time
	 */
	setWeatherTransition(weather: HashOrString<RageEnums.Weather>, duration?: number): void;
}

declare interface DummyMp {
	dummyType: number;
}

declare interface DummyMpPool {
	'new'(dummyEntityType: number, sharedVariables: KeyValueCollection): DummyMp;

	forEachByType(dummyEntityType: number, fn: (entity: DummyMp) => void): void;
}

declare interface ConfigMp {
	announce: boolean;
	bind: string;
	gamemode: string;
	encryption: boolean;
	maxplayers: number;
	name: string;
	'stream-distance': number;
	port: number;
	'disallow-multiple-connections-per-ip': boolean;
	'limit-time-of-connections-per-ip': number;
	url: string;
	language: string;
	'sync-rate': number;
	'resource-scan-thread-limit': number;
	'max-ping': number;
	'min-fps': number;
	'max-packet-loss': number;
	'allow-cef-debugging': boolean;
	'enable-nodejs': boolean;
	csharp: boolean;
	'enable-http-security': boolean;
	'voice-chat': boolean;
	'allow-voice-chat-input': number;
	'voice-chat-sample-rate': number;
	'fastdl-host': string;
	'create-fastdl-snapshot': boolean;
}

declare interface NetworkMp {
	startBatch(): void;
	endBatch(): void;
}

declare interface Mp {
	Player: typeof PlayerMp;
	players: PlayerMpPool;

	Vehicle: typeof VehicleMp;
	vehicles: VehicleMpPool;

	Event: typeof EventMp;
	events: EventMpPool;

	Blip: typeof BlipMp;
	blips: BlipMpPool;

	Checkpoint: typeof CheckpointMp;
	checkpoints: CheckpointMpPool;

	Colshape: typeof ColshapeMp;
	colshapes: ColshapeMpPool;

	Marker: typeof MarkerMp;
	markers: MarkerMpPool;

	TextLabel: typeof TextLabelMp;
	labels: TextLabelMpPool;

	Ped: typeof PedMp;
	peds: PedMpPool;

	Object: typeof ObjectMp;
	objects: ObjectMpPool;

	dummies: DummyMpPool;
	world: WorldMp;
	config: ConfigMp;
	network: NetworkMp;

	Vector3: typeof Vector3;

	joaat(str: string): number;
	joaat(strs: string[]): number[];
}

declare const mp: Mp;
