declare interface GameLoadingscreenLegacy {
	getBroadcastFinshedLosSound(toggle: boolean): void;
}

declare interface GameLoadingscreenUnk {
	_0xF2CA003F167E21D2(): number;
	_0xFA1E0E893D915215(toggle: boolean): void;
}

declare interface GameLoadingscreen extends GameLoadingscreenLegacy {
	getLoadFreemode(): boolean;
	setLoadFreemode(toggle: boolean): void;
	getLoadFreemodeWithEventName(): boolean;
	setLoadFreemodeWithEventName(toggle: boolean): void;
	isLoadingFreemode(): boolean;
	setIsLoadingFreemode(toggle: boolean): void;

	unk: GameLoadingscreenUnk;
}

declare interface GameLoadingscreenMp extends GameLoadingscreen {}
