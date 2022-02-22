declare interface GameWeaponLegacy {
	getWeaponComponentTypeModel(componentHash: number): number;
	getWeapontypeModel(weaponHash: number): number;
	getWeapontypeSlot(weaponHash: number): number;
	getWeapontypeGroup(weaponHash: number): number;
	isWeaponValid(weaponHash: number): boolean;
	requestWeaponAsset(weaponHash: number, p1: number, p2: number): void;
	hasWeaponAssetLoaded(weaponHash: number): boolean;
	removeWeaponAsset(weaponHash: number): void;
	createWeaponObject(
		weaponHash: number,
		ammoCount: number,
		x: number,
		y: number,
		z: number,
		showWorldModel: boolean,
		scale: number,
		p7: number,
		p8: number,
		p9: number
	): number;
	giveWeaponComponentToWeaponObject(weaponObject: number, addonHash: number): void;
	removeWeaponComponentFromWeaponObject(p0: number, p1: number): void;
	hasWeaponGotWeaponComponent(weapon: number, addonHash: number): boolean;
	giveWeaponObjectToPed(weaponObject: number, ped: number): void;
	doesWeaponTakeWeaponComponent(weaponHash: number, componentHash: number): boolean;
	setWeaponObjectTintIndex(weapon: number, tintIndex: number): void;
	getWeaponObjectTintIndex(weapon: number): number;
	getWeaponTintCount(weaponHash: number): number;
	getWeaponHudStats(weaponHash: number): number;
	getWeaponComponentHudStats(componentHash: number): number;
	getWeaponClipSize(weaponHash: number): number;
	requestWeaponHighDetailModel(weaponObject: number): void;
	getWeaponDamageType(weaponHash: number): number;
	canUseWeaponOnParachute(weaponHash: number): boolean;
}

declare interface GameWeaponUnk {
	_0x50276EF8172F5F12(ped: number): void;
	_0x24C024BA8379A70A(p0: number, p1: number): void;
	_0xA2C9AC24B4061285(ped: number, weaponHash: number): number;
	_0x977CA98939E82E4B(weaponObject: number, p1: number): void;
	_0xE4DCEC7FD5B739A5(ped: number): void;
}

declare interface GameWeapon extends GameWeaponLegacy {
	/**
	 * Toggle if you want to stop the player from putting away a weapon when it runs out of ammo (defaults to true)
	 * 
	 * true: allow empty weapon auto-unequip
	 * false: prevent empty weapon auto-unequip
	 */
	unequipEmptyWeapons: boolean;

	enableLaserSightRendering(toggle: boolean): void;
	getComponentTypeModel(componentHash: number): number;
	getTypeModel(weaponHash: number): number;
	getTypeSlot(weaponHash: number): number;
	getTypeGroup(weaponHash: number): number;
	getComponentVariantExtraComponentCount(componentHash: number): number;
	getComponentVariantExtraComponentModel(componentHash: number, extraComponentIndex: number): number;
	setCurrentPed(ped: number, weaponHash: number, bForceInHand: boolean): void;
	getCurrentPed(ped: number, p2: boolean): number;
	getCurrentPedEntityIndex(ped: number, p1: number): number;
	getBestPed(ped: number, p1: boolean): number;
	setCurrentPedVehicle(ped: number, weaponHash: number): boolean;
	getCurrentPedVehicle(ped: number): number;
	isPedArmed(ped: number, typeFlags: number): boolean;
	isValid(weaponHash: number): boolean;
	hasPedGot(ped: number, weaponHash: number, p2: boolean): boolean;
	isPedReadyToShoot(ped: number): boolean;
	getPedTypeInSlot(ped: number, weaponSlot: number): number;
	getAmmoInPed(ped: number, weaponhash: number): number;
	addAmmoToPed(ped: number, weaponHash: number, ammo: number): void;
	setPedAmmo(ped: number, weaponHash: number, ammo: number, p3: boolean): void;
	setPedInfiniteAmmo(ped: number, toggle: boolean, weaponHash: number): void;
	setPedInfiniteAmmoClip(ped: number, toggle: boolean): void;
	giveToPed(ped: number, weaponHash: number, ammoCount: number, isHidden: boolean, bForceInHand: boolean): void;
	giveDelayedToPed(ped: number, weaponHash: number, ammoCount: number, bForceInHand: boolean): void;
	removeAllPedS(ped: number, p1: boolean): void;
	removeFromPed(ped: number, weaponHash: number): void;
	hidePedForScriptedCutscene(ped: number, toggle: boolean): void;
	setPedCurrentVisible(ped: number, visible: boolean, deselectWeapon: boolean, p3: boolean, p4: boolean): void;
	setPedDropsWeaponsWhenDead(ped: number, toggle: boolean): void;
	hasPedBeenDamagedBy(ped: number, weaponHash: number, weaponType: number): boolean;
	clearPedLastDamage(ped: number): void;
	hasEntityBeenDamagedBy(entity: number, weaponHash: number, weaponType: number): boolean;
	clearEntityLastDamage(entity: number): void;
	setPedDrops(ped: number): void;
	setPedDropsInventory(ped: number, weaponHash: number, xOffset: number, yOffset: number, zOffset: number, ammoCount: number): void;
	getMaxAmmoInClip(ped: number, weaponHash: number, p2: boolean): number;
	getAmmoInClip(ped: number, weaponHash: number): number;
	setAmmoInClip(ped: number, weaponHash: number, ammo: number): boolean;
	getMaxAmmo(ped: number, weaponHash: number): number;
	getMaxAmmoByType(ped: number, ammoTypeHash: number): number;
	addAmmoToPedByType(ped: number, ammoTypeHash: number, ammo: number): void;
	setPedAmmoByType(ped: number, ammoTypeHash: number, ammo: number): void;
	getPedAmmoByType(ped: number, ammoTypeHash: number): number;
	setPedAmmoToDrop(ped: number, p1: number): void;
	setPickupAmmoAmountScaler(p0: number): void;
	getPedAmmoTypeFrom(ped: number, weaponHash: number): number;
	getPedAmmoTypeFrom2(ped: number, weaponHash: number): number;
	getPedLastImpactCoord(ped: number): Vector3;
	setPedGadget(ped: number, gadgetHash: number, p2: boolean): void;
	getIsPedGadgetEquipped(ped: number, gadgetHash: number): boolean;
	getSelectedPed(ped: number): number;
	explodeProjectiles(ped: number, weaponHash: number, p2: boolean): void;
	removeAllProjectilesOfType(weaponHash: number, explode: boolean): void;
	getLockonDistanceOfCurrentPed(ped: number): number;
	getMaxRangeOfCurrentPed(ped: number): number;
	hasVehicleGotProjectileAttached(driver: number, vehicle: number, weaponHash: number, p3: number): boolean;
	giveComponentToPed(ped: number, weaponHash: number, componentHash: number): void;
	removeComponentFromPed(ped: number, weaponHash: number, componentHash: number): void;
	hasPedGotComponent(ped: number, weaponHash: number, componentHash: number): boolean;
	isPedComponentActive(ped: number, weaponHash: number, componentHash: number): boolean;
	refillAmmoInstantly(ped: number): boolean;
	makePedReload(ped: number): boolean;
	requestAsset(weaponHash: number, p1: number, p2: number): void;
	hasAssetLoaded(weaponHash: number): boolean;
	removeAsset(weaponHash: number): void;
	createObject(
		weaponHash: number,
		ammoCount: number,
		x: number,
		y: number,
		z: number,
		showWorldModel: boolean,
		scale: number,
		p7: number,
		p8: number,
		p9: number
	): number;
	giveComponentToWeaponObject(weaponObject: number, addonHash: number): void;
	removeComponentFromWeaponObject(p0: number, p1: number): void;
	hasGotWeaponComponent(weapon: number, addonHash: number): boolean;
	giveObjectToPed(weaponObject: number, ped: number): void;
	doesTakeWeaponComponent(weaponHash: number, componentHash: number): boolean;
	getObjectFromPed(ped: number, p1: boolean): number;
	giveLoadoutToPed(ped: number, loadoutHash: number): void;
	setPedTintIndex(ped: number, weaponHash: number, tintIndex: number): void;
	getPedTintIndex(ped: number, weaponHash: number): number;
	setObjectTintIndex(weapon: number, tintIndex: number): void;
	getObjectTintIndex(weapon: number): number;
	getTintCount(weaponHash: number): number;
	setPedLiveryColor(ped: number, weaponHash: number, camoComponentHash: number, colorIndex: number): void;
	getPedLiveryColor(ped: number, weaponHash: number, camoComponentHash: number): number;
	setObjectLiveryColor(weaponObject: number, camoComponentHash: number, colorIndex: number): void;
	getObjectLiveryColor(weaponObject: number, camoComponentHash: number): number;
	getHudStats(weaponHash: number): number;
	getComponentHudStats(componentHash: number): number;
	getDamage(weaponHash: number, componentHash: number): number;
	getClipSize(weaponHash: number): number;
	getTimeBetweenShots(weaponHash: number): number;
	setPedChanceOfFiringBlanks(ped: number, xBias: number, yBias: number): void;
	setPedShootOrdnance(ped: number, p1: number): number;
	requestHighDetailModel(weaponObject: number): void;
	setDamageModifierThisFrame(weaponHash: number, damageMultiplier: number): void;
	isPedCurrentSilenced(ped: number): boolean;
	isFlashLightOn(ped: number): boolean;
	setFlashLightFadeDistance(distance: number): number;
	setFlashLightEnabled(ped: number, toggle: boolean): void;
	setAnimationOverride(ped: number, animStyle: number): void;
	getDamageType(weaponHash: number): number;
	canUseOnParachute(weaponHash: number): boolean;
	createAirDefenseSphere(x: number, y: number, z: number, radius: number, p4: number, p5: number, p6: number, weaponHash: number): number;
	createAirDefenseArea(
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
		weaponHash: number
	): number;
	removeAirDefenseZone(zoneId: number): boolean;
	removeAllAirDefenseZones(): void;
	setPlayerAirDefenseZoneFlag(player: number, zoneId: number, enable: boolean): void;
	isAnyAirDefenseZoneInsideSphere(x: number, y: number, z: number, radius: number): number;
	fireAirDefense(zoneId: number, x: number, y: number, z: number): void;
	doesAirDefenseZoneExist(zoneId: number): boolean;
	setCanPedEquip(ped: number, weaponHash: number, toggle: boolean): void;
	setCanPedEquipAllS(ped: number, toggle: boolean): void;

	unk: GameWeaponUnk;
}

declare interface GameWeaponEventRelated {
	/**
	 * Can be used only in outgoingDamage or incomingDamage events.
	 * Unlike "return true" in the event, it only cancels damage locally.
	 */
	cancelCurrentDamageEvent(): void;

	/**
	 * Can be used only in outgoingDamage or incomingDamage events.
	 */
	setCurrentDamageEventAmount(amount: number): void;

	/**
	 * Enables outgoingDamage event calls when issuing weapon damage on local player, peds and vehicles
	 */
	setEnableLocalOutgoingDamage(toggle: boolean): void;
	setCurrentDamageEventCritical(toggle: boolean): void;
}

declare interface GameWeaponMp extends GameWeapon, GameWeaponEventRelated {}
