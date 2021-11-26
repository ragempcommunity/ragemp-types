declare interface GameEventLegacy {
	clearDecisionMakerEventResponse(name: number, eventType: number): void;
	blockDecisionMakerEvent(name: number, eventType: number): void;
	unblockDecisionMakerEvent(name: number, eventType: number): void;
	addShockingEventAtPosition(eventType: number, x: number, y: number, z: number, duration: number): number;
	addShockingEventForEntity(eventType: number, entity: number, duration: number): number;
	isShockingEventInSphere(eventType: number, x: number, y: number, z: number, radius: number): boolean;
	removeShockingEvent(event: number): boolean;
	removeAllShockingEvents(p0: boolean): void;
	suppressShockingEventTypeNextFrame(eventType: number): void;
}

declare interface GameEvent extends GameEventLegacy {
	setDecisionMaker(ped: number, name: number): void;
	clearDecisionMakerResponse(name: number, eventType: number): void;
	blockDecisionMaker(name: number, eventType: number): void;
	unblockDecisionMaker(name: number, eventType: number): void;
	addShockingAtPosition(eventType: number, x: number, y: number, z: number, duration: number): number;
	addShockingForEntity(eventType: number, entity: number, duration: number): number;
	isShockingInSphere(eventType: number, x: number, y: number, z: number, radius: number): boolean;
	removeShocking(event: number): boolean;
	removeAllShockingS(p0: boolean): void;
	removeShockingSpawnBlockingAreas(): void;
	suppressShockingEventsNextFrame(): void;
	suppressShockingTypeNextFrame(eventType: number): void;
	suppressAgitationEventsNextFrame(): void;
}

declare interface GameEventMp extends GameEvent {}
