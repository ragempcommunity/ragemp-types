declare interface GameBrainLegacy {
	registerObjectScriptBrain(scriptName: string, modelHash: number, p2: number, activationRange: number, p4: number, p5: number): void;
	isObjectWithinBrainActivationRange(object: number): boolean;
	registerWorldPointScriptBrain(scriptName: string, activationRange: number, p2: number): void;
	enableScriptBrainSet(brainSet: number): void;
	disableScriptBrainSet(brainSet: number): void;
}

declare interface GameBrainUnk {
	_0x0B40ED49D7D6FF84(): void;
	_0x4D953DF78EBF8158(): void;
	_0x6D6840CEE8845831(action: string): void;
	_0x6E91B04E08773030(action: string): void;
}

declare interface GameBrain extends GameBrainLegacy {
	addScriptToRandomPed(name: string, model: number, p2: number, p3: number): void;
	registerObjectScript(scriptName: string, modelHash: number, p2: number, activationRange: number, p4: number, p5: number): void;
	isObjectWithinActivationRange(object: number): boolean;
	registerWorldPointScript(scriptName: string, activationRange: number, p2: number): void;
	isWorldPointWithinActivationRange(): boolean;
	enableScriptSet(brainSet: number): void;
	disableScriptSet(brainSet: number): void;

	unk: GameBrainUnk;
}

declare interface GameBrainMp extends GameBrain {}
