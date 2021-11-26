declare interface GameStatsLegacy {
	statSetProfileSetting(profileSetting: number, value: number): void;
	playstatsNpcInvite(): number;
	playstatsAwardXp(amount: number, type: number, category: number): void;
	playstatsRankUp(rank: number): void;
	playstatsMissionStarted(p1: number, p2: number, p3: boolean): number;
	playstatsMissionOver(p1: number, p2: number, p3: boolean, p4: boolean, p5: boolean): number;
	playstatsMissionCheckpoint(p1: number, p2: number, p3: number): number;
	playstatsRaceCheckpoint(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	playstatsMatchStarted(p0: number, p1: number, p2: number): void;
	playstatsShopItem(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	playstatsWebsiteVisited(scaleformHash: number, p1: number): void;
	playstatsFriendActivity(p0: number, p1: number): void;
	playstatsOddjobDone(p0: number, p1: number, p2: number): void;
	playstatsPropChange(p0: number, p1: number, p2: number, p3: number): void;
	playstatsClothChange(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	playstatsCheatApplied(cheat: string): void;
}

declare interface StatGetPosResult {
	p1: number;
	p2: number;
	p3: number;
	result: boolean;
}

declare interface Leaderboards2ReadFriendsByRowResult {
	p0: number;
	p1: number;
	result: boolean;
}

declare interface Leaderboards2ReadByHandleResult {
	p0: number;
	p1: number;
	result: boolean;
}

declare interface Leaderboards2ReadByRowResult {
	p0: number;
	p1: number;
	p3: number;
	p5: number;
	result: boolean;
}

declare interface Leaderboards2ReadByRadiusResult {
	p0: number;
	p2: number;
	result: boolean;
}

declare interface Leaderboards2ReadRankPredictionResult {
	p0: number;
	p1: number;
	p2: number;
	result: boolean;
}

declare interface Leaderboards2WriteDataForEventTypeResult {
	p0: number;
	p1: number;
	result: boolean;
}

declare interface StatGetSaveMigrationStatusResult {
	data: number;
	result: number;
}

declare interface StatGetSaveMigrationConsumeContentUnlockStatusResult {
	p0: number;
	result: number;
}

declare interface _0x6DEE77AFF8C21BD1Result {
	playerAccountId: number;
	posixTime: number;
	result: boolean;
}

declare interface _0xF8C54A461C3E11DCResult {
	p0: number;
	p1: number;
	p2: number;
	p3: number;
}

declare interface _0xF5BB8DAC426A52C0Result {
	p0: number;
	p1: number;
	p2: number;
	p3: number;
}

declare interface _0xA736CF7FB7C5BFF4Result {
	p0: number;
	p1: number;
	p2: number;
	p3: number;
}

declare interface _0x14E0B2D1AD1044E0Result {
	p0: number;
	p1: number;
	p2: number;
	p3: number;
}

declare interface _0xDEAAF77EB3687E97Result {
	p1: number;
	result: number;
}

declare interface GameStatsUnk {
	_0x5688585E6D563CD8(p0: number): void;
	_0x7F2C4CDF2E82DF4C(p0: number): boolean;
	_0xE496A53BA5F50A56(p0: number): number;
	_0x6A7F19756F1A9016(): boolean;
	_0x7E6946F68A38B74F(p0: number): boolean;
	_0xA8733668D1047B51(p0: number): void;
	_0xECB41AC6AB754401(): boolean;
	_0x9B4BD21D69B1E609(): void;
	_0xC0E0D686DDFC6EAE(): number;
	_0x5A556B229A169402(): boolean;
	_0xB1D2BB1E1631F5B1(): boolean;
	_0xBED9F5693F34ED17(statName: number, p1: number): number;
	_0x26D7399B9587FE89(p0: number): void;
	_0xA78B8FA58200DA56(p0: number): void;
	_0x6DEE77AFF8C21BD1(): _0x6DEE77AFF8C21BD1Result;
	_0xF8C54A461C3E11DC(): _0xF8C54A461C3E11DCResult;
	_0xF5BB8DAC426A52C0(): _0xF5BB8DAC426A52C0Result;
	_0xA736CF7FB7C5BFF4(): _0xA736CF7FB7C5BFF4Result;
	_0x14E0B2D1AD1044E0(): _0x14E0B2D1AD1044E0Result;
	_0xD1032E482629049E(p0: number): void;
	_0x6A60E43998228229(p0: number): void;
	_0xBFAFDB5FAAA5C5AB(p0: number): void;
	_0x8C9D11605E59D955(p0: number): void;
	_0x3DE3AA516FB126A4(p0: number): void;
	_0xBAA2F0490E146BE8(p0: number): void;
	_0x1A7CE7CD3E653485(p0: number): void;
	_0x419615486BBF1956(p0: number): void;
	_0x84DFC579C2FC214C(p0: number): void;
	_0x0A9C7F36E5D7B683(p0: number): void;
	_0x164C5FF663790845(p0: number): void;
	_0xEDBF6C9B0D2C65C8(p0: number): void;
	_0x6551B1F7F6CD46EA(p0: number): void;
	_0x2CD90358F67D0AA8(p0: number): void;
	_0xA0F93D5465B3094D(): number;
	_0x71B008056E5692D6(): void;
	_0x34770B9CE0E03B91(p0: number): number;
	_0x88578F6EC36B4A3A(p0: number, p1: number): number;
	_0x38491439B6BA7F7D(p0: number, p1: number): number;
	_0x8EC74CEB042E7CFF(p0: number): void;
	_0x6483C25849031C4F(p0: number, p1: number, p2: number): number;
	_0x5EAD2BF6484852E4(): boolean;
	_0xC141B8917E0017EC(): void;
	_0xC67E2DA1CBE759E2(): void;
	_0xF1A1803D3476F215(value: number): void;
	_0x38BAAA5DD4C9D19F(value: number): void;
	_0x55384438FC55AD8E(value: number): void;
	_0x723C1CE13FBFDB67(p0: number, p1: number): void;
	_0x0D01D20616FC73FB(p0: number, p1: number): void;
	_0x428EAF89E24F6C36(p0: number, p1: number): void;
	_0x6F361B8889A792A3(): void;
	_0xC847B43F369AC0B5(): void;
	_0x9A62EC95AE10E011(): number;
	_0x4C89FE2BDEB3F169(): number;
	_0xC6E0E2616A7576BB(): number;
	_0x5BD5F255321C4AAF(p0: number): number;
	_0xDEAAF77EB3687E97(p0: number): _0xDEAAF77EB3687E97Result;
	_0x98E2BC1CA26287C3(): void;
	_0x629526ABA383BCAA(): void;
	_0xBE3DB208333D9844(): number;
	_0x33D72899E24C3365(p0: number, p1: number): number;
	_0xA761D4AC6115623D(): number;
	_0xF11F01D98113536A(p0: number): number;
	_0x8B9CDBD6C566C38C(): number;
	_0xE8853FBCE7D8D0D6(): number;
	_0xA943FD1722E11EFD(): number;
	_0x84A810B375E69C0E(): number;
	_0x9EC8858184CD253A(): number;
	_0xBA9749CC94C1FD85(): number;
	_0x55A8BECAF28A4EB7(): number;
	_0x32CAC93C9DE73D32(): number;
	_0xAFF47709F1D5DCCE(): number;
	_0x6E0A5253375C4584(): number;
	_0x1A8EA222F9C67DBB(p0: number): number;
	_0xF9F2922717B819EC(): number;
	_0x0B8B7F74BF061C6D(): number;
	_0xB3DA2606774A8E2D(): boolean;
	_0x6BC0ACD0673ACEBE(p0: number, p1: number, p2: number): void;
	_0x8D8ADB562F09A245(p0: number): void;
	_0xD1A1EE3B4FA8E760(p0: number): void;
	_0x88087EE1F28024AE(p0: number): void;
	_0xFCC228E07217FCAC(p0: number): void;
	_0x678F86D8FC040BDB(p0: number): void;
	_0xA6F54BB2FFCA35EA(p0: number): void;
	_0x5FF2C33B13A02A11(p0: number): void;
	_0x282B6739644F4347(p0: number): void;
	_0xF06A6F41CB445443(p0: number): void;
	_0x7B18DA61F6BAE9D5(p0: number): void;
	_0x06EAF70AE066441E(p0: number): void;
	_0x14EDA9EE27BD1626(p0: number): void;
	_0x930F504203F561C9(p0: number): void;
	_0xE3261D791EB44ACB(p0: number): void;
	_0x73001E34F85137F8(p0: number): void;
	_0x53CAE13E9B426993(p0: number): void;
	_0x7D36291161859389(p0: number): void;
	_0x60EEDC12AF66E846(p0: number): void;
	_0x3EBEAC6C3F81F6BD(p0: number): void;
	_0x96E6D5150DBF1C09(p0: number, p1: number, p2: number): void;
	_0xA3C53804BDB68ED2(p0: number, p1: number): void;
	_0x6BCCF9948492FD85(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	_0xD1C9B92BDD3F151D(p0: number, p1: number, p2: number): void;
	_0x44919CC079BB60BF(p0: number): void;
	_0x7033EEFD9B28088E(p0: number): void;
	_0xAA525DFF66BB82F5(p0: number, p1: number, p2: number): void;
	_0x015B03EE1C43E6EC(p0: number): void;
	_0xBF371CD2B64212FD(p0: number): void;
	_0x7D8BA05688AD64C7(p0: number): void;
	_0x0B565B0AAE56A0E8(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	_0x28ECB8AC2F607DB2(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	_0xCC25A4553DFBF9EA(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	_0xF534D94DFA2EAD26(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	_0xD558BEC0BBA7E8D2(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	_0x03C2EEBB04B3FB72(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	_0x8989CBD7B4E82534(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	_0x27AA1C973CACFE63(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
	_0xDAF80797FC534BEC(p0: number): void;
	_0x316DB59CD14C1774(p0: number): void;
	_0x2D7A9B577E72385E(p0: number): void;
	_0x830C3A44EB3F2CF9(p0: number): void;
	_0xB26F670685631727(p0: number, p1: number): void;
	_0xC14BD9F5337219B2(p0: number, p1: number): void;
	_0x4FCDBD3F0A813C25(p0: number, p1: number): void;
	_0xDFBD93BF2943E29B(p0: number): void;
	_0x92FC0EEDFAC04A14(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	_0x0077F15613D36993(p0: number, p1: number, p2: number, p3: number): void;
	_0xF9096193DF1F99D4(p0: number): void;
	_0x2E0259BABC27A327(p0: number): void;
	_0x53C31853EC9531FF(p0: number): void;
	_0x810B5FCC52EC7FF0(p0: number, p1: number, p2: number, p3: number): void;
	_0x5BF29846C6527C54(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	_0xC03FAB2C2F92289B(p0: number): void;
	_0x5CDAED54B34B0ED0(p0: number): void;
	_0x4AFF7E02E485E92B(): void;
	_0xDFCDB14317A9B361(p0: number): void;
	_0xC1E963C58664B556(p0: number): void;
	_0x2FA3173480008493(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	_0xD4367D310F079DB0(p0: number, p1: number, p2: number, p3: number): void;
	_0x4DC416F246A41FC8(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	_0x2818FF6638CB09DE(p0: number): void;
	_0xD6CA58B3B53A0F22(p0: number): void;
}

declare interface GameStats extends GameStatsLegacy {
	statClearSlotForReload(statSlot: number): number;
	statLoad(p0: number): boolean;
	statSave(p0: number, p1: boolean, p2: number, p3: number): boolean;
	statLoadPending(p0: number): boolean;
	statSavePending(): boolean;
	statSavePendingOrRequested(): boolean;
	statDeleteSlot(p0: number): number;
	statSlotIsLoaded(p0: number): boolean;
	statSetBlockSaves(toggle: boolean): void;
	statSetInt(statName: number, value: number, save: boolean): boolean;
	statSetFloat(statName: number, value: number, save: boolean): boolean;
	statSetBool(statName: number, value: boolean, save: boolean): boolean;
	statSetGxtLabel(statName: number, value: string, save: boolean): boolean;
	statSetDate(statName: number, numFields: number, save: boolean): number;
	statSetString(statName: number, value: string, save: boolean): boolean;
	statSetPos(statName: number, x: number, y: number, z: number, save: boolean): boolean;
	statSetMaskedInt(statName: number, p1: number, p2: number, p3: number, save: boolean): boolean;
	statSetUserId(statName: number, value: string, save: boolean): boolean;
	statSetCurrentPosixTime(statName: number, p1: boolean): boolean;
	statGetInt(statHash: number, p2: number): number;
	statGetFloat(statHash: number, p2: number): number;
	statGetBool(statHash: number, p2: number): boolean;
	statGetDate(statHash: number, p2: number, p3: number): number;
	statGetString(statHash: number, p1: number): string;
	statGetPos(p0: number, p4: number): StatGetPosResult;
	statGetMaskedInt(p0: number, p2: number, p3: number, p4: number): number;
	statGetUserId(p0: number): string;
	statGetLicensePlate(statName: number): string;
	statSetLicensePlate(statName: number, str: string): boolean;
	statIncrement(statName: number, value: number): void;
	statGetNumberOfDays(statName: number): number;
	statGetNumberOfHours(statName: number): number;
	statGetNumberOfMinutes(statName: number): number;
	statGetNumberOfSeconds(statName: number): number;
	statSetProfileSettingValue(profileSetting: number, value: number): void;
	statGetPackedBoolMask(p0: number): number;
	statGetPackedIntMask(p0: number): number;
	getPackedBoolStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;
	getPackedIntStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;
	getPackedTuBoolStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;
	getPackedTuIntStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;
	getNgstatBoolHash(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;
	getNgstatIntHash(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;
	statGetBoolMasked(statName: number, mask: number, p2: number): boolean;
	statSetBoolMasked(statName: number, value: boolean, mask: number, save: boolean): boolean;
	playBackgroundScriptAction(action: string, value: number): void;
	playNpcInvite(): number;
	playAwardXp(amount: number, type: number, category: number): void;
	playRankUp(rank: number): void;
	playStartOfflineMode(): void;
	playActivityDone(p0: number, p1: number): void;
	playLeaveJobChain(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	playMissionStarted(p1: number, p2: number, p3: boolean): number;
	playMissionOver(p1: number, p2: number, p3: boolean, p4: boolean, p5: boolean): number;
	playMissionCheckpoint(p1: number, p2: number, p3: number): number;
	playRandomMissionDone(name: string, p1: number, p2: number, p3: number): void;
	playRosBet(amount: number, act: number, player: number, cm: number): void;
	playRaceCheckpoint(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	playMatchStarted(p0: number, p1: number, p2: number): void;
	playShopItem(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	playCrateDropMissionDone(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
	playCrateCreatedMissionDone(p0: number, p1: number, p2: number): void;
	playHoldUpMissionDone(p0: number, p1: number, p2: number, p3: number): void;
	playImportExportMissionDone(p0: number, p1: number, p2: number, p3: number): void;
	playRaceToPointMissionDone(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number
	): void;
	playAcquiredHiddenPackage(p0: number): void;
	playWebsiteVisited(scaleformHash: number, p1: number): void;
	playFriendActivity(p0: number, p1: number): void;
	playOddjobDone(p0: number, p1: number, p2: number): void;
	playPropChange(p0: number, p1: number, p2: number, p3: number): void;
	playClothChange(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	playWeaponModeChange(weaponHash: number, componentHashTo: number, componentHashFrom: number): void;
	playCheatApplied(cheat: string): void;
	playQuickfixTool(element: number, item: string): void;
	playIdleKick(time: number): void;
	playHeistSaveCheat(hash: number, p1: number): void;
	playDirectorMode(): number;
	playAwardBadsport(id: number): void;
	playPegasaircraft(modelHash: number): void;
	playPiMenuHideSettings(): number;
	leaderboardsGetNumberOfColumns(p0: number, p1: number): number;
	leaderboardsGetColumnId(p0: number, p1: number, p2: number): number;
	leaderboardsGetColumnType(p0: number, p1: number, p2: number): number;
	leaderboardsReadClearAll(): number;
	leaderboardsReadClear(p0: number, p1: number, p2: number): number;
	leaderboardsReadPending(p0: number, p1: number, p2: number): boolean;
	leaderboardsReadAnyPending(): boolean;
	leaderboardsReadSuccessful(p0: number, p1: number, p2: number): boolean;
	leaderboards2ReadFriendsByRow(p2: number, p3: boolean, p4: number, p5: number): Leaderboards2ReadFriendsByRowResult;
	leaderboards2ReadByHandle(): Leaderboards2ReadByHandleResult;
	leaderboards2ReadByRow(p2: number, p4: number, p6: number): Leaderboards2ReadByRowResult;
	leaderboards2ReadByRank(p1: number, p2: number): number;
	leaderboards2ReadByRadius(p1: number): Leaderboards2ReadByRadiusResult;
	leaderboards2ReadByScoreInt(p1: number, p2: number): number;
	leaderboards2ReadByScoreFloat(p1: number, p2: number): number;
	leaderboards2ReadRankPrediction(): Leaderboards2ReadRankPredictionResult;
	leaderboards2ReadByPlatform(gamerHandleCsv: string, platformName: string): number;
	leaderboards2WriteData(): number;
	leaderboardsWriteAddColumn(p0: number, p1: number, p2: number): void;
	leaderboardsWriteAddColumnLong(p0: number, p1: number, p2: number): void;
	leaderboardsCacheDataRow(): number;
	leaderboardsClearCacheData(): void;
	leaderboardsGetCacheExists(p0: number): boolean;
	leaderboardsGetCacheTime(p0: number): number;
	leaderboardsGetCacheNumberOfRows(p0: number): number;
	leaderboardsGetCacheDataRow(p0: number, p1: number): number;
	updateStatInt(statHash: number, value: number, p2: number): void;
	updateStatFloat(statHash: number, value: number, p2: number): void;
	setProfileSettingPrologueComplete(): void;
	statSetCheatIsActive(): void;
	leaderboards2WriteDataForEventType(): Leaderboards2WriteDataForEventTypeResult;
	statMigrateSave(platformName: string): boolean;
	statSaveMigrationStatusStart(): boolean;
	statGetSaveMigrationStatus(): StatGetSaveMigrationStatusResult;
	statSaveMigrationCancel(): boolean;
	statGetCancelSaveMigrationStatus(): number;
	statSaveMigrationConsumeContentUnlock(contentId: number, srcPlatform: string, srcGamerHandle: string): boolean;
	statGetSaveMigrationConsumeContentUnlockStatus(): StatGetSaveMigrationConsumeContentUnlockStatusResult;
	setHasContentUnlocksFlags(value: number): void;
	setSaveMigrationTransactionId(transactionId: number): void;
	playSpentPiCustomLoadout(amount: number): void;
	playBuyContraband(): number;
	playSellContraband(): number;
	playDefendContraband(): number;
	playRecoverContraband(): number;
	hiredLimo(p0: number, p1: number): void;
	orderedBossVehicle(p0: number, p1: number, vehicleHash: number): void;
	playStuntPerformedEventAllowTrigger(): void;
	playStuntPerformedEventDisallowTrigger(): void;
	playChangeMcEmblem(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	playEarnedMcPoints(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	playCopyRankIntoNewSlot(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	playDupeDetection(): number;
	playBanAlert(p0: number): void;
	playGunrunMissionEnded(): number;
	playStoneHatchetEnd(): number;
	playSmugMissionEnded(): number;
	playH2FmprepEnd(): number;
	playH2InstanceEnd(p1: number, p2: number, p3: number): number;
	playDarMissionEnd(): number;
	playEnterSessionPack(): number;
	playDroneUsage(p0: number, p1: number, p2: number): void;
	playSpectatorWheelSpin(p0: number, p1: number, p2: number, p3: number): void;
	playArenaWarSpectator(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	playArenaWarsEnded(): number;
	playPassiveMode(p0: boolean, p1: number, p2: number, p3: number): void;
	playCollectible(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
	playCasinoStoryMissionEnded(p0: number, p1: number): void;
	playCasinoChip(p0: number): void;
	playCasinoRoulette(p0: number): void;
	playCasinoBlackjack(p0: number): void;
	playCasinoThreecardpoker(p0: number): void;
	playCasinoSlotmachine(p0: number): void;
	playCasinoInsidetrack(p0: number): void;
	playCasinoLuckyseven(p0: number): void;
	playCasinoRouletteLight(p0: number): void;
	playCasinoBlackjackLight(p0: number): void;
	playCasinoThreecardpokerLight(p0: number): void;
	playCasinoSlotmachineLight(p0: number): void;
	playCasinoInsidetrackLight(p0: number): void;
	playArcadegame(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	playCasinoMissionEnded(): number;

	unk: GameStatsUnk;
}

declare interface GameStatsMp extends GameStats {}
