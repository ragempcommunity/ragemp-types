declare interface StartNewScriptWithNameHashAndArgsResult {
	args: number;
	result: number;
}

declare interface StartNewScriptWithArgsResult {
	args: number;
	result: number;
}

declare interface GameSystemLegacy {
	startNewStreamedScript(scriptHash: number, stackSize: number): number;
	startNewStreamedScriptWithArgs(scriptHash: number, argCount: number, stackSize: number): StartNewScriptWithNameHashAndArgsResult;
}

declare interface GameSystem extends GameSystemLegacy {
	wait(ms: number): void;
	startNewScript(scriptName: string, stackSize: number): number;
	startNewScriptWithArgs(scriptName: string, argCount: number, stackSize: number): StartNewScriptWithArgsResult;
	startNewScriptWithNameHash(scriptHash: number, stackSize: number): number;
	startNewScriptWithNameHashAndArgs(scriptHash: number, argCount: number, stackSize: number): StartNewScriptWithNameHashAndArgsResult;
	timera(): number;
	timerb(): number;
	settimera(value: number): void;
	settimerb(value: number): void;
	timestep(): number;
	sin(value: number): number;
	cos(value: number): number;
	sqrt(value: number): number;
	pow(base: number, exponent: number): number;
	log10(value: number): number;
	vmag(x: number, y: number, z: number): number;
	vmag2(x: number, y: number, z: number): number;
	vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
	vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
	shiftLeft(value: number, bitShift: number): number;
	shiftRight(value: number, bitShift: number): number;
	floor(value: number): number;
	ceil(value: number): number;
	round(value: number): number;
	toFloat(value: number): number;
	setThreadPriority(priority: number): void;
}

declare interface GameSystemMp extends GameSystem {}
