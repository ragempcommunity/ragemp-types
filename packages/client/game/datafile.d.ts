declare interface DatadictCreateDictResult {
	objectData: number;
	result: number;
}

declare interface DatadictCreateArrayResult {
	objectData: number;
	result: number;
}

declare interface DatadictGetIntResult {
	objectData: number;
	result: number;
}

declare interface DatadictGetFloatResult {
	objectData: number;
	result: number;
}

declare interface DatadictGetStringResult {
	objectData: number;
	result: string;
}

declare interface DatadictGetVectorResult {
	objectData: number;
}

declare interface DatadictGetDictResult {
	objectData: number;
	result: number;
}

declare interface DatadictGetArrayResult {
	objectData: number;
	result: number;
}

declare interface DatadictGetTypeResult {
	objectData: number;
	result: number;
}

declare interface DataarrayAddDictResult {
	arrayData: number;
	result: number;
}

declare interface DataarrayGetIntResult {
	arrayData: number;
	result: number;
}

declare interface DataarrayGetFloatResult {
	arrayData: number;
	result: number;
}

declare interface DataarrayGetStringResult {
	arrayData: number;
	result: string;
}

declare interface DataarrayGetVectorResult {
	arrayData: number;
}

declare interface DataarrayGetDictResult {
	arrayData: number;
	result: number;
}

declare interface DataarrayGetCountResult {
	arrayData: number;
	result: number;
}

declare interface DataarrayGetTypeResult {
	arrayData: number;
	result: number;
}

declare interface GameDatafileLegacy {
	loadUgcFile(filename: string): boolean;
	objectValueAddBoolean(key: string, value: boolean): number;
	objectValueAddInteger(key: string, value: number): number;
	objectValueAddFloat(key: string, value: number): number;
	objectValueAddString(key: string, value: string): number;
	objectValueAddVector3(key: string, valueX: number, valueY: number, valueZ: number): number;
	objectValueAddObject(key: string): DatadictCreateDictResult;
	objectValueAddArray(key: string): DatadictCreateArrayResult;
	objectValueGetBoolean(key: string): number;
	objectValueGetInteger(key: string): DatadictGetIntResult;
	objectValueGetFloat(key: string): DatadictGetFloatResult;
	objectValueGetString(key: string): DatadictGetStringResult;
	objectValueGetVector3(key: string): DatadictGetVectorResult;
	objectValueGetObject(key: string): DatadictGetDictResult;
	objectValueGetArray(key: string): DatadictGetArrayResult;
	objectValueGetType(key: string): DatadictGetTypeResult;
	arrayValueAddBoolean(value: boolean): number;
	arrayValueAddInteger(value: number): number;
	arrayValueAddFloat(value: number): number;
	arrayValueAddString(value: string): number;
	arrayValueAddVector3(valueX: number, valueY: number, valueZ: number): number;
	arrayValueAddObject(): DataarrayAddDictResult;
	arrayValueGetBoolean(arrayIndex: number): number;
	arrayValueGetInteger(arrayIndex: number): DataarrayGetIntResult;
	arrayValueGetFloat(arrayIndex: number): DataarrayGetFloatResult;
	arrayValueGetString(arrayIndex: number): DataarrayGetStringResult;
	arrayValueGetVector3(arrayIndex: number): DataarrayGetVectorResult;
	arrayValueGetObject(arrayIndex: number): DataarrayGetDictResult;
	arrayValueGetSize(): DataarrayGetCountResult;
	arrayValueGetType(arrayIndex: number): DataarrayGetTypeResult;
}

declare interface GameDatafileUnk {
	_0xA6EEF01087181EDD(p0: number, p1: number): number;
	_0x6AD0BD5E087866CB(p0: number): void;
	_0xDBF860CF1DB8E599(p0: number): number;
}

declare interface GameDatafile extends GameDatafileLegacy {
	watchRequestId(id: number): void;
	clearWatchList(): void;
	isValidRequestId(index: number): boolean;
	hasLoadedFileData(p0: number): boolean;
	hasValidFileData(p0: number): boolean;
	selectActiveFile(p0: number): boolean;
	deleteRequestedFile(p0: number): boolean;
	ugcCreateContent(dataCount: number, contentName: string, description: string, tagsCsv: string, contentTypeName: string, publish: boolean): number;
	ugcCreateMission(contentName: string, description: string, tagsCsv: string, contentTypeName: string, publish: boolean): boolean;
	ugcUpdateContent(
		contentId: string,
		dataCount: number,
		contentName: string,
		description: string,
		tagsCsv: string,
		contentTypeName: string
	): number;
	ugcUpdateMission(contentId: string, contentName: string, description: string, tagsCsv: string, contentTypeName: string): boolean;
	ugcSetPlayerData(contentId: string, rating: number, contentTypeName: string): boolean;
	selectUgcData(p0: number): boolean;
	selectUgcStats(p0: number, p1: boolean): boolean;
	selectUgcPlayerData(p0: number): boolean;
	selectCreatorStats(p0: number): boolean;
	loadOfflineUgc(filename: string): boolean;
	create(): void;
	delete(): void;
	storeMissionHeader(): void;
	flushMissionHeader(): void;
	getFileDict(): string;
	startSaveToCloud(filename: string): boolean;
	updateSaveToCloud(): boolean;
	isSavePending(): boolean;
	datadictSetBool(key: string, value: boolean): number;
	datadictSetInt(key: string, value: number): number;
	datadictSetFloat(key: string, value: number): number;
	datadictSetString(key: string, value: string): number;
	datadictSetVector(key: string, valueX: number, valueY: number, valueZ: number): number;
	datadictCreateDict(key: string): DatadictCreateDictResult;
	datadictCreateArray(key: string): DatadictCreateArrayResult;
	datadictGetBool(key: string): number;
	datadictGetInt(key: string): DatadictGetIntResult;
	datadictGetFloat(key: string): DatadictGetFloatResult;
	datadictGetString(key: string): DatadictGetStringResult;
	datadictGetVector(key: string): DatadictGetVectorResult;
	datadictGetDict(key: string): DatadictGetDictResult;
	datadictGetArray(key: string): DatadictGetArrayResult;
	datadictGetType(key: string): DatadictGetTypeResult;
	dataarrayAddBool(value: boolean): number;
	dataarrayAddInt(value: number): number;
	dataarrayAddFloat(value: number): number;
	dataarrayAddString(value: string): number;
	dataarrayAddVector(valueX: number, valueY: number, valueZ: number): number;
	dataarrayAddDict(): DataarrayAddDictResult;
	dataarrayGetBool(arrayIndex: number): number;
	dataarrayGetInt(arrayIndex: number): DataarrayGetIntResult;
	dataarrayGetFloat(arrayIndex: number): DataarrayGetFloatResult;
	dataarrayGetString(arrayIndex: number): DataarrayGetStringResult;
	dataarrayGetVector(arrayIndex: number): DataarrayGetVectorResult;
	dataarrayGetDict(arrayIndex: number): DataarrayGetDictResult;
	dataarrayGetCount(): DataarrayGetCountResult;
	dataarrayGetType(arrayIndex: number): DataarrayGetTypeResult;

	unk: GameDatafileUnk;
}

declare interface GameDatafileMp extends GameDatafile {}
