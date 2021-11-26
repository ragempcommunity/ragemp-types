declare interface GameAppLegacy {
	appGetInt(property: string): number;
	appGetFloat(property: string): number;
	appGetString(property: string): string;
	appSetInt(property: string, value: number): void;
	appSetFloat(property: string, value: number): void;
	appSetString(property: string, value: string): void;
	appSetApp(appName: string): void;
	appSetBlock(blockName: string): void;
	appHasSyncedData(appName: string): boolean;
	appDeleteAppData(appName: string): boolean;
}

declare interface GameApp extends GameAppLegacy {
	dataValid(): boolean;
	getInt(property: string): number;
	getFloat(property: string): number;
	getString(property: string): string;
	setInt(property: string, value: number): void;
	setFloat(property: string, value: number): void;
	setString(property: string, value: string): void;
	setApp(appName: string): void;
	setBlock(blockName: string): void;
	clearBlock(): void;
	closeApp(): void;
	closeBlock(): void;
	hasLinkedSocialClubAccount(): boolean;
	hasSyncedData(appName: string): boolean;
	saveData(): void;
	getDeletedFileStatus(): number;
	deleteAppData(appName: string): boolean;
}

declare interface GameAppMp extends GameApp {}
