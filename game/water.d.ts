declare interface GameWaterLegacy {
	getWaterHeight(x: number, y: number, z: number): number;
	getWaterHeightNoWaves(x: number, y: number, z: number): number;
	testProbeAgainstWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): Vector3;
	testProbeAgainstAllWater(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): boolean;
	testVerticalProbeAgainstAllWater(x: number, y: number, z: number, p3: number): number;
	modifyWater(x: number, y: number, radius: number, height: number): void;
	setWavesIntensity(intensity: number): void;
}

declare interface GameWaterUnk {
	_0x547237AA71AB44DE(p0: number): void;
}

declare interface GameWater extends GameWaterLegacy {
	getHeight(x: number, y: number, z: number): number;
	getHeightNoWaves(x: number, y: number, z: number): number;
	testProbeAgainst(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): Vector3;
	testProbeAgainstAll(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): boolean;
	testVerticalProbeAgainstAll(x: number, y: number, z: number, p3: number): number;
	modify(x: number, y: number, radius: number, height: number): void;
	addCurrentRise(x: number, y: number, z: number, radius: number, unk: number): number;
	removeCurrentRise(p0: number): void;
	setDeepOceanScaler(intensity: number): void;
	getDeepOceanScaler(): number;
	resetDeepOceanScaler(): void;

	unk: GameWaterUnk;
}

declare interface GameWaterMp extends GameWater {}
