declare interface GameFireLegacy {
	startScriptFire(X: number, Y: number, Z: number, maxChildren: number, isGasFire: boolean): number;
	removeScriptFire(fireHandle: number): void;
	stopFireInRange(x: number, y: number, z: number, radius: number): void;
	getClosestFirePos(x: number, y: number, z: number): Vector3;
	addSpecfxExplosion(
		x: number,
		y: number,
		z: number,
		explosionType: number,
		explosionFx: number,
		damageScale: number,
		isAudible: boolean,
		isInvisible: boolean,
		cameraShake: number
	): void;
	getPedInsideExplosionArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): number;
}

declare interface GameFire extends GameFireLegacy {
	startScript(X: number, Y: number, Z: number, maxChildren: number, isGasFire: boolean): number;
	removeScript(fireHandle: number): void;
	startEntity(entity: number): number;
	stopEntity(entity: number): void;
	isEntityOn(entity: number): boolean;
	getNumberOfFiresInRange(x: number, y: number, z: number, radius: number): number;
	setSpreadRate(p0: number): void;
	stopInRange(x: number, y: number, z: number, radius: number): void;
	getClosestPos(x: number, y: number, z: number): Vector3;
	addExplosion(
		x: number,
		y: number,
		z: number,
		explosionType: number,
		damageScale: number,
		isAudible: boolean,
		isInvisible: boolean,
		cameraShake: number,
		noDamage: boolean
	): void;
	addOwnedExplosion(
		ped: number,
		x: number,
		y: number,
		z: number,
		explosionType: number,
		damageScale: number,
		isAudible: boolean,
		isInvisible: boolean,
		cameraShake: number
	): void;
	addExplosionWithUserVfx(
		x: number,
		y: number,
		z: number,
		explosionType: number,
		explosionFx: number,
		damageScale: number,
		isAudible: boolean,
		isInvisible: boolean,
		cameraShake: number
	): void;
	isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isExplosionActiveInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): boolean;
	getEntityInsideExplosionSphere(explosionType: number, x: number, y: number, z: number, radius: number): number;
	isExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): boolean;
	getEntityInsideExplosionArea(
		explosionType: number,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		radius: number
	): number;
}

declare interface GameFireMp extends GameFire {}
