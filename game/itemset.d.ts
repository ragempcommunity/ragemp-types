declare interface GameItemsetLegacy {
	createItemset(p0: boolean): number;
	destroyItemset(p0: number): void;
	isItemsetValid(p0: number): boolean;
	addToItemset(p0: number, p1: number): boolean;
	removeFromItemset(p0: number, p1: number): void;
	getItemsetSize(x: number): number;
	getIndexedItemInItemset(p0: number, p1: number): number;
	isInItemset(p0: number, p1: number): boolean;
	cleanItemset(p0: number): void;
}

declare interface GameItemset extends GameItemsetLegacy {
	create(p0: boolean): number;
	destroy(p0: number): void;
	isValid(p0: number): boolean;
	addTo(p0: number, p1: number): boolean;
	removeFrom(p0: number, p1: number): void;
	getSize(x: number): number;
	getIndexedItemIn(p0: number, p1: number): number;
	isIn(p0: number, p1: number): boolean;
	clean(p0: number): void;
}

declare interface GameItemsetMp extends GameItemset {}
