declare interface GameDlcLegacy {
	isDlcPresent(dlcHash: number): boolean;
	nullify(unused: number): boolean;
}

declare interface GameDlcUnk {
	_0x241FCA5B1AA14F75(): boolean;
	_0xF2E07819EF1A5289(): boolean;
	_0x9489659372A81585(): boolean;
	_0xA213B11DFF526300(): boolean;
	_0xC4637A6D03C24CC3(): boolean;
}

declare interface GameDlc extends GameDlcLegacy {
	isPresent(dlcHash: number): boolean;
	getExtraContentPackHasBeenInstalled(): boolean;
	getIsLoadingScreenActive(): boolean;
	hasCloudRequestsFinished(unused: number): boolean;
	onEnterSp(): void;
	onEnterMp(): void;

	unk: GameDlcUnk;
}

declare interface GameDlcMp extends GameDlc {}
