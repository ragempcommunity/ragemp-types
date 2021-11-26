declare interface GameMobileLegacy {
	createMobilePhone(phoneType: number): void;
	setMobilePhoneScale(scale: number): void;
	setMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: number): void;
	getMobilePhoneRotation(p1: number): Vector3;
	setMobilePhonePosition(posX: number, posY: number, posZ: number): void;
	getMobilePhonePosition(): Vector3;
	scriptIsMovingMobilePhoneOffscreen(toggle: boolean): void;
	moveFinger(direction: number): void;
	setPhoneLean(toggle: boolean): void;
	getMobilePhoneRenderId(): number;
}

declare interface GameMobileUnk {
	_0xA2CCBE62CD4C91A4(): number;
	_0x1B0B4AEED5B9B41C(p0: number): void;
	_0x53F4892D18EC90A4(p0: number): void;
	_0x3117D84EFA60F77B(p0: number): void;
	_0x15E69E2802C24B8D(p0: number): void;
	_0xAC2890471901861C(p0: number): void;
	_0xD6ADE981781FCA09(p0: number): void;
	_0xF1E22DC13F5EEBAD(p0: number): void;
	_0x466DA42C89865553(p0: number): void;
}

declare interface GameMobile extends GameMobileLegacy {
	createPhone(phoneType: number): void;
	destroyPhone(): void;
	setPhoneScale(scale: number): void;
	setPhoneRotation(rotX: number, rotY: number, rotZ: number, p3: number): void;
	getPhoneRotation(p1: number): Vector3;
	setPhonePosition(posX: number, posY: number, posZ: number): void;
	getPhonePosition(): Vector3;
	scriptIsMovingPhoneOffscreen(toggle: boolean): void;
	canPhoneBeSeenOnScreen(): boolean;
	setPhoneUnk(toggle: boolean): void;
	cellCamMoveFinger(direction: number): void;
	cellCamSetLean(toggle: boolean): void;
	cellCamActivate(p0: boolean, p1: boolean): void;
	cellCamDisableThisFrame(toggle: boolean): void;
	cellCamIsCharVisibleNoFaceCheck(entity: number): boolean;
	getPhoneRenderId(): number;

	unk: GameMobileUnk;
}

declare interface GameMobileMp extends GameMobile {}
