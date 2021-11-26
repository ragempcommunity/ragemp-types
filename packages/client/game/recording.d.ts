declare interface GameRecordingLegacy {
	isRecording(): boolean;
}

declare interface GameRecordingUnk {
	_0x48621C9FCA3EBD28(p0: number): void;
	_0x81CBAE94390F9F89(): void;
	_0x13B350B8AD0EEE10(): void;
	_0x293220DA1B46CEBC(p0: number, p1: number, p2: number): void;
	_0x208784099002BC30(missionNameLabel: string, p1: number): void;
	_0xF854439EFBB3B583(): void;
	_0x66972397E0757E7A(p0: number, p1: number, p2: number): void;
	_0xDF4B952F7D381B95(): number;
	_0x4282E08174868BE3(): number;
	_0x33D47E85B476ABCD(p0: boolean): boolean;
}

declare interface GameRecording extends GameRecordingLegacy {
	stopThisFrame(): void;
	disableRockstarEditorCameraChanges(): void;
	start(mode: number): void;
	stopAndSaveClip(): void;
	stopAndDiscardClip(): void;
	saveClip(): boolean;
	is(): boolean;

	unk: GameRecordingUnk;
}

declare interface GameRecordingMp extends GameRecording {}
