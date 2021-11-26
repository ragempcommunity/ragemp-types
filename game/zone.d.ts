declare interface GameZoneLegacy {
	getZoneAtCoords(x: number, y: number, z: number): number;
	getZoneFromNameId(zoneName: string): number;
	getZonePopschedule(zoneId: number): number;
	getNameOfZone(x: number, y: number, z: number): string;
	setZoneEnabled(zoneId: number, toggle: boolean): void;
	getZoneScumminess(zoneId: number): number;
}

declare interface GameZone extends GameZoneLegacy {
	getAtCoords(x: number, y: number, z: number): number;
	getFromNameId(zoneName: string): number;
	getPopschedule(zoneId: number): number;
	getNameOf(x: number, y: number, z: number): string;
	setEnabled(zoneId: number, toggle: boolean): void;
	getScumminess(zoneId: number): number;
	overridePopscheduleVehicleModel(scheduleId: number, vehicleHash: number): void;
	clearPopscheduleOverrideVehicleModel(scheduleId: number): void;
	getHashOfMapAreaAtCoords(x: number, y: number, z: number): number;
}

declare interface GameZoneMp extends GameZone {}
