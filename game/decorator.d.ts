declare interface GameDecorator {
	decorSetTime(entity: number, propertyName: string, timestamp: number): boolean;
	decorSetBool(entity: number, propertyName: string, value: boolean): boolean;
	decorSetFloat(entity: number, propertyName: string, value: number): boolean;
	decorSetInt(entity: number, propertyName: string, value: number): boolean;
	decorGetBool(entity: number, propertyName: string): boolean;
	decorGetFloat(entity: number, propertyName: string): number;
	decorGetInt(entity: number, propertyName: string): number;
	decorExistOn(entity: number, propertyName: string): boolean;
	decorRemove(entity: number, propertyName: string): boolean;
	decorRegister(propertyName: string, type: number): void;
	decorIsRegisteredAsType(propertyName: string, type: number): boolean;
	decorRegisterLock(): void;
}

declare interface GameDecoratorMp extends GameDecorator {}
