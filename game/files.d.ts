declare interface GameFilesLegacy {
	getNumPropsFromOutfit(character: number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;
	getNumForcedComponents(componentHash: number): number;
	getPropFromOutfit(outfitHash: number, variantIndex: number): number;
	isDlcDataEmpty(itemHash: number): boolean;
}

declare interface GameFilesUnk {
	_0x10144267DD22866C(overlayHash: number, p1: number, character: number): number;
	_0x96E2929292A4DB77(componentHash: number): number;
	_0x6CEBE002E58DEE97(componentHash: number): number;
}

declare interface GetVariantComponentResult {
	nameHash: number;
	enumValue: number;
	componentType: number;
}

declare interface GetVariantPropResult {
	nameHash: number;
	enumValue: number;
	anchorPoint: number;
}

declare interface GetForcedComponentResult {
	nameHash: number;
	enumValue: number;
	componentType: number;
}

declare interface GetForcedPropResult {
	nameHash: number;
	enumValue: number;
	anchorPoint: number;
}

declare interface GameFiles extends GameFilesLegacy {
	getNumTattooShopDlcItems(character: number): number;
	getTattooShopDlcItemData(characterType: number, decorationIndex: number): number;
	initShopPedComponent(): number;
	initShopPedProp(): number;
	setupShopPedApparelQuery(p0: number, p1: number, p2: number, p3: number): number;
	setupShopPedApparelQueryTu(character: number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;
	getShopPedQueryComponent(componentId: number): number;
	getShopPedComponent(componentHash: number): number;
	getShopPedQueryProp(componentId: number): number;
	getShopPedProp(componentHash: number): number;
	getHashNameForComponent(entity: number, componentId: number, drawableVariant: number, textureVariant: number): number;
	getHashNameForProp(entity: number, componentId: number, propIndex: number, propTextureIndex: number): number;
	getShopPedApparelVariantComponentCount(componentHash: number): number;
	getShopPedApparelVariantPropCount(propHash: number): number;
	getVariantComponent(componentHash: number, variantComponentIndex: number): GetVariantComponentResult;
	getVariantProp(componentHash: number, variantPropIndex: number): GetVariantPropResult;
	getShopPedApparelForcedComponentCount(componentHash: number): number;
	getShopPedApparelForcedPropCount(componentHash: number): number;
	getForcedComponent(componentHash: number, forcedComponentIndex: number): GetForcedComponentResult;
	getForcedProp(componentHash: number, forcedPropIndex: number): GetForcedPropResult;
	doesShopPedApparelHaveRestrictionTag(componentHash: number, restrictionTagHash: number, componentId: number): boolean;
	setupShopPedOutfitQuery(character: number, p1: boolean): number;
	getShopPedQueryOutfit(outfitIndex: number): number;
	getShopPedOutfit(p0: number): number;
	getShopPedOutfitLocate(p0: number): number;
	getShopPedOutfitPropVariant(outfitHash: number, variantIndex: number): number;
	getShopPedOutfitComponentVariant(outfitHash: number, variantIndex: number): number;
	getNumDlcVehicles(): number;
	getDlcVehicleModel(dlcVehicleIndex: number): number;
	getDlcVehicleData(dlcVehicleIndex: number): number;
	getDlcVehicleFlags(dlcVehicleIndex: number): number;
	getNumDlcWeapons(): number;
	getNumDlcWeaponsSp(): number;
	getDlcWeaponData(dlcWeaponIndex: number): number;
	getDlcWeaponDataSp(dlcWeaponIndex: number): number;
	getNumDlcWeaponComponents(dlcWeaponIndex: number): number;
	getNumDlcWeaponComponentsSp(dlcWeaponIndex: number): number;
	getDlcWeaponComponentData(dlcWeaponIndex: number, dlcWeapCompIndex: number): number;
	getDlcWeaponComponentDataSp(dlcWeaponIndex: number, dlcWeapCompIndex: number): number;
	isContentItemLocked(itemHash: number): boolean;
	isDlcVehicleMod(hash: number): boolean;
	getDlcVehicleModLockHash(hash: number): number;
	loadContentChangeSetGroup(hash: number): void;
	unloadContentChangeSetGroup(hash: number): void;

	unk: GameFilesUnk;
}

declare interface GameFilesMp extends GameFiles {}
