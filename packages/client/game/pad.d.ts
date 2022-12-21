declare interface GamePadLegacy {
	/**
	 * Enable/Disable RageMP's controls for entering a vehicle.
	 *
	 *  False = Holding F and pressing F both go to the driver's seat
	 *
	 *  True = Holding F will go to the passenger seat, pressing F will go to the driver's seat.
	 */
	useDefaultVehicleEntering: boolean;

	isInputDisabled(padIndex: number): boolean;
	isInputJustDisabled(padIndex: number): boolean;
	getControlActionName(padIndex: number, control: number, p2: boolean): string;
	setPadShake(padIndex: number, duration: number, frequency: number): void;
	stopPadShake(padIndex: number): void;
	setPlayerpadShakesWhenControllerDisabled(toggle: boolean): void;
}

declare interface GamePadUnk {
	_0x5B73C77D9EB66E24(p0: boolean): void;
	_0xD7D22F5592AED8BA(p0: number): number;
	_0x23F09EADC01449D6(padIndex: number): boolean;
	_0x6CD79468A1E595C6(padIndex: number): boolean;
	_0xCB0360EFEFB2580D(padIndex: number): void;
	_0x14D29BB12D47F68C(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	_0xF239400E16C23E08(p0: number, p1: number): void;
	_0xA0CEFCEA390AAB9B(p0: number): void;
	_0xE1615EC03B3BB4FD(): boolean;
	_0x25AAA32BDC98F2A3(): number;
	_0x7F4724035FDCA1DD(padIndex: number): void;
}

declare interface GamePad extends GamePadLegacy {
	isControlEnabled(padIndex: number, control: number): boolean;
	isControlPressed(padIndex: number, control: number): boolean;
	isControlReleased(padIndex: number, control: number): boolean;
	isControlJustPressed(padIndex: number, control: number): boolean;
	isControlJustReleased(padIndex: number, control: number): boolean;
	getControlValue(padIndex: number, control: number): number;
	getControlNormal(padIndex: number, control: number): number;
	getControlUnboundNormal(padIndex: number, control: number): number;
	setControlNormal(padIndex: number, control: number, amount: number): boolean;
	isDisabledControlPressed(padIndex: number, control: number): boolean;
	isDisabledControlReleased(padIndex: number, control: number): boolean;
	isDisabledControlJustPressed(padIndex: number, control: number): boolean;
	isDisabledControlJustReleased(padIndex: number, control: number): boolean;
	getDisabledControlNormal(padIndex: number, control: number): number;
	getDisabledControlUnboundNormal(padIndex: number, control: number): number;
	isUsingKeyboard(padIndex: number): boolean;
	isUsingKeyboard2(padIndex: number): boolean;
	setCursorLocation(x: number, y: number): boolean;
	getControlInstructionalButton(padIndex: number, control: number, p2: boolean): string;
	getControlGroupInstructionalButton(padIndex: number, controlGroup: number, p2: boolean): string;
	setControlLightEffectColor(padIndex: number, red: number, green: number, blue: number): void;
	setShake(padIndex: number, duration: number, frequency: number): void;
	stopShake(padIndex: number): void;
	isLookInverted(): boolean;
	getLocalPlayerAimState(): number;
	getLocalPlayerAimState2(): number;
	getIsUsingAlternateDriveby(): boolean;
	getAllowMovementWhileZoomed(): boolean;
	setPlayerShakesWhenControllerDisabled(toggle: boolean): void;
	setInputExclusive(padIndex: number, control: number): void;
	disableControlAction(padIndex: number, control: number, disable: boolean): void;
	enableControlAction(padIndex: number, control: number, enable: boolean): void;
	disableAllControlActions(padIndex: number): void;
	enableAllControlActions(padIndex: number): void;
	switchToInputMappingScheme(name: string): boolean;
	switchToInputMappingScheme2(name: string): boolean;
	resetInputMappingScheme(): void;

	/**
	 * Doesn’t just improve performance by batch calls but has the new optimized implementation of DISABLE_CONTROL_ACTION algorithm under the hood as well. Batch is hold between frames.
	 */
	setDisableControlActionBatch(isMoveOrLookInputGroup: boolean, controlActions: number[]): void;
	applyDisableControlActionBatch(): void;

	unk: GamePadUnk;
}

declare interface GamePadMp extends GamePad {}
