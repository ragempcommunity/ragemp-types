declare interface GameReplayUnk {
	_0x7E2BD3EF6C205F09(p0: string, p1: boolean): void;
	_0x5AD3932DAEB1E5D3(): void;
	_0xE058175F8EAFE79A(p0: boolean): void;
}

declare interface GameReplay {
	isInteriorRenderingDisabled(): boolean;
	resetEditorValues(): void;
	activateRockstarEditor(): void;

	unk: GameReplayUnk;
}

declare interface GameReplayMp extends GameReplay {}
