declare interface GameScriptLegacy {
	requestScript(scriptName: string): void;
	setScriptAsNoLongerNeeded(scriptName: string): void;
	hasScriptLoaded(scriptName: string): boolean;
	doesScriptExist(scriptName: string): boolean;
	requestStreamedScript(scriptHash: number): void;
	setStreamedScriptAsNoLongerNeeded(scriptHash: number): void;
	hasStreamedScriptLoaded(scriptHash: number): boolean;
	isStreamedScriptRunning(scriptHash: number): boolean;
	getThreadName(threadId: number): string;
	getNumberOfInstancesOfStreamedScript(scriptHash: number): number;
	triggerScriptEvent(eventGroup: number, eventDataSize: number, playerBits: number): number;
}

declare interface GameScriptUnk {
	_0xB1577667C3708F9B(): void;
	_0x836B62713E0534CA(): boolean;
	_0x760910B49D2B98EA(): void;
	_0x0F6F1EBBC4E1D5E6(scriptIndex: number, p1: string): boolean;
	_0x22E21FBCFC88C149(scriptIndex: number, p1: string): number;
	_0x829CD22E043A2577(p0: number): number;
}

declare interface GameScript extends GameScriptLegacy {
	request(scriptName: string): void;
	setAsNoLongerNeeded(scriptName: string): void;
	hasLoaded(scriptName: string): boolean;
	doesExist(scriptName: string): boolean;
	requestWithNameHash(scriptHash: number): void;
	setWithNameHashAsNoLongerNeeded(scriptHash: number): void;
	hasWithNameHashLoaded(scriptHash: number): boolean;
	doesWithNameHashExist(scriptHash: number): boolean;
	terminateThread(threadId: number): void;
	isThreadActive(threadId: number): boolean;
	getNameOfThread(threadId: number): string;
	threadIteratorReset(): void;
	threadIteratorGetNextThreadId(): number;
	getIdOfThisThread(): number;
	terminateThisThread(): void;
	getNumberOfReferencesOfWithNameHash(scriptHash: number): number;
	getThisName(): string;
	getHashOfThisName(): number;
	getNumberOfEvents(eventGroup: number): number;
	getEventExists(eventGroup: number, eventIndex: number): boolean;
	getEventAtIndex(eventGroup: number, eventIndex: number): number;
	getEventData(eventGroup: number, eventIndex: number, eventDataSize: number): number;
	triggerEvent(eventGroup: number, eventDataSize: number, playerBits: number): number;
	shutdownLoadingScreen(): void;
	setNoLoadingScreen(toggle: boolean): void;
	getNoLoadingScreen(): boolean;
	bgStartContextHash(contextHash: number): void;
	bgEndContextHash(contextHash: number): void;
	bgStartContext(contextName: string): void;
	bgEndContext(contextName: string): void;
	triggerEvent2(eventGroup: number, eventDataSize: number, playerBits: number): number;

	unk: GameScriptUnk;
}
declare interface GameScriptMp extends GameScript {}
