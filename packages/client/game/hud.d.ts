declare interface GetHudColourResult {
	r: number;
	g: number;
	b: number;
	a: number;
}

declare interface SetWarningMessageWithHeaderResult {
	showBackground: number;
	p7: number;
}

declare interface SetWarningMessageWithHeaderAndSubstringFlagsResult {
	p7: number;
	p8: number;
}

declare interface SetWarningMessageWithHeaderUnkResult {
	p6: number;
	p7: number;
}

declare interface ThefeedAddTxdRefResult {
	p0: number;
	p1: number;
	p2: number;
	p3: number;
}

declare interface EndTextCommandThefeedPostCrewtagResult {
	p2: number;
	result: number;
}

declare interface EndTextCommandThefeedPostCrewtagWithGameNameResult {
	p2: number;
	result: number;
}

declare interface EndTextCommandThefeedPostVersusTuResult {
	p0: number;
	p1: number;
	p3: number;
	p4: number;
	result: number;
}

declare interface GetHudScreenPositionFromWorldPositionResult {
	screenX: number;
	screenY: number;
	result: boolean;
}

declare interface GetPauseMenuSelectionResult {
	lastItemMenuId: number;
	selectedItemUniqueId: number;
}

declare interface GetPauseMenuSelectionDataResult {
	lastItemMenuId: number;
	selectedItemMenuId: number;
	selectedItemUniqueId: number;
}

declare interface GameHudLegacy {
	setLoadingPromptTextEntry(string: string): void;
	showLoadingPrompt(busySpinnerType: number): void;
	setCursorSprite(spriteId: number): void;
	removeNotification(notificationId: number): void;
	setNotificationFlashColor(red: number, green: number, blue: number, alpha: number): void;
	setNotificationTextEntry(text: string): void;
	setNotificationMessage(txdName: string, textureName: string, flash: boolean, iconType: number, sender: string, subject: string): number;
	setNotificationMessageClanTag(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType: number,
		sender: string,
		subject: string,
		duration: number,
		clanTag: string
	): number;
	setNotificationMessageClanTag2(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType1: number,
		sender: string,
		subject: string,
		duration: number,
		clanTag: string,
		iconType2: number,
		p9: number
	): number;
	drawNotification(blink: boolean, p1: boolean): number;
	drawNotification2(blink: boolean, p1: boolean): number;
	drawNotification3(blink: boolean, p1: boolean): number;
	drawNotification4(blink: boolean, p1: boolean): number;
	setTextEntry2(GxtEntry: string): void;
	drawSubtitleTimed(duration: number, drawImmediately: boolean): void;
	setTextEntry(text: string): void;
	drawText(x: number, y: number, p2: number): void;
	setTextEntryForWidth(text: string): void;
	getTextScreenWidth(p0: boolean): number;
	setTextGxtEntry(entry: string): void;
	setTextComponentFormat(inputType: string): void;
	displayHelpTextFromStringLabel(p0: number, loop: boolean, beep: boolean, shape: number): void;
	addTextComponentItemString(labelName: string): void;
	addTextComponentSubstringLocalized(gxtEntryHash: number): void;
	addTextComponentSubstringCash(value: number, commaSeparated: boolean): void;
	requestAdditionalText2(gxt: string, slot: number): void;
	displayHud(toggle: boolean): void;
	respondingAsTemp(zoom: number): void;
	setRadarZoomLevelThisFrame(zoom: number): void;
	getHudColour(hudColorIndex: number): GetHudColourResult;
	setHudColour(hudColorIndex: number, r: number, g: number, b: number, a: number): void;
	getTextScaleHeight(size: number, font: number): number;
	setMultiplayerHudCash(p0: number, p1: number): void;
	showWeaponWheel(show: boolean): void;
	keyHudColour(toggle: boolean, ped: number): void;
	setMinimapVisible(toggle: boolean): void;
	setMinimapRevealed(toggle: boolean): void;
	isMinimapAreaRevealed(x: number, y: number, z: number): boolean;
	setMinimapAttitudeIndicatorLevel(altitude: number, p1: boolean, p2: number): void;
	setRadarBigmapEnabled(toggleBigMap: boolean, showFullMap: boolean): void;
	isHudComponentActive(id: number): boolean;
	isScriptedHudComponentActive(id: number): boolean;
	hideScriptedHudComponentThisFrame(id: number): void;
	hideHudComponentThisFrame(id: number): void;
	showHudComponentThisFrame(id: number): void;
	resetHudComponentValues(id: number): void;
	setHudComponentPosition(id: number, x: number, y: number): void;
	getHudComponentPosition(id: number): Vector3;
	hasHeadDisplayLoaded(gamerTagId: number): boolean;
	addTrevorRandomModifier(gamerTagId: number): boolean;
	setHeadDisplayFlag(gamerTagId: number, component: number, toggle: boolean, p3: number): void;
	setHeadDisplayWanted(gamerTagId: number, wantedlvl: number): void;
	setHeadDisplayString(gamerTagId: number, string: string): void;
	setWarningMessage2(
		entryHeader: string,
		entryLine1: string,
		instructionalKey: number,
		entryLine2: string,
		p4: boolean,
		p5: number,
		p8: boolean,
		p9: number
	): SetWarningMessageWithHeaderResult;
	setWarningMessage3(
		entryHeader: string,
		entryLine1: string,
		instructionalKey: number,
		entryLine2: string,
		p4: boolean,
		p5: number,
		p6: number,
		p9: boolean,
		p10: number
	): SetWarningMessageWithHeaderAndSubstringFlagsResult;
	objectDecalToggle(contextHash: number): void;
	setUseridsUihidden(p0: number): number;
	hideSpecialAbilityLockonOperation(ped: number, toggle: boolean): void;
}

declare interface _0xA238192F33110615Result {
	p0: number;
	p1: number;
	p2: number;
	result: boolean;
}

declare interface _0x632B2940C67F4EA9Result {
	p1: number;
	p2: number;
	p3: number;
	result: boolean;
}

declare interface _0x817B86108EB94E51Result {
	p1: number;
	p2: number;
	p3: number;
	p4: number;
	p5: number;
	p6: number;
	p7: number;
	p8: number;
}

declare interface _0xC8E1071177A23BE5Result {
	p0: number;
	p1: number;
	p2: number;
	result: boolean;
}

declare interface GameHudUnk {
	_0x9245E81072704B8A(p0: boolean): void;
	_0x3D9ACB1EB139E702(): number;
	_0x632B2940C67F4EA9(scaleformHandle: number): _0x632B2940C67F4EA9Result;
	_0x98C3CF913D895111(string: string, length: number): string;
	_0xCD74233600C4EA6B(toggle: boolean): void;
	_0xC2D2AD9EAAE265B8(): boolean;
	_0x0C698D8F099174C7(p0: number): void;
	_0xE4C3B169876D33D7(p0: number): void;
	_0xEB81A3DADD503187(): void;
	_0x2790F4B17D098E26(toggle: boolean): void;
	_0x6CDD58146A436083(p0: number): void;
	_0xD1942374085C8469(p0: number): void;
	_0x57D760D55F54E071(p0: number): void;
	_0xD2049635DEB9C375(): void;
	_0xBA8D65C1C65702E5(toggle: boolean): void;
	_0x214CD562A939246A(): boolean;
	_0x9FCB3CBFB3EAD69A(p0: number, p1: number): void;
	_0xB7B873520C84C118(): void;
	_0x2C173AE2BDB9385E(blip: number): number;
	_0x003E92BA477F9D7F(blip: number): number;
	_0x2916A928514C9827(): void;
	_0xB552929B85FC27EC(p0: number, p1: number): void;
	_0x4B5B620C9B59ED34(p0: number, p1: number): void;
	_0x2C9F302398E13141(p0: number, p1: number): void;
	_0xC594B315EDF2D4AF(ped: number): void;
	_0xF83D0FEBE75E62C9(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;
	_0x35A3CD97B2C0A6D2(blip: number): void;
	_0x8410C5E0CD847B9D(): void;
	_0x41350B4FC28E3941(p0: boolean): void;
	_0x504DFE62A1692296(toggle: boolean): void;
	_0xA17784FCA9548D15(p0: number, p1: number, p2: number): void;
	_0x55F5A5F07134DE60(): void;
	_0x170F541E1CADD1DE(p0: boolean): void;
	_0xE67C6DFD386EA5E7(p0: boolean): void;
	_0x801879A9B4F4B2FB(): boolean;
	_0x7B21E0BB01E8224A(p0: number): void;
	_0x817B86108EB94E51(p0: boolean): _0x817B86108EB94E51Result;
	_0x62E849B7EB28E770(p0: boolean): void;
	_0xDAF87174BE7454FF(p0: number): boolean;
	_0x211C4EF450086857(): void;
	_0xBF4F34A85CA2970C(): void;
	_0x2F057596F2BD0061(): boolean;
	_0x5BFF36D6ED83E0AE(): Vector3;
	_0x77F16B447824DA6C(p0: number): void;
	_0xCDCA26E80FAECB8F(): void;
	_0x2DE6C5E2E996F178(p0: number): void;
	_0xDE03620F8703A9DF(): number;
	_0x359AF31A4B52F5ED(): number;
	_0x13C4B962653A5280(): number;
	_0xC8E1071177A23BE5(): _0xC8E1071177A23BE5Result;
	_0x4895BDEA16E7C080(p0: number): void;
	_0xF06EBB91A81E09E3(p0: boolean): void;
	_0x66E7CB63C97B7D20(): number;
	_0x593FEAE1F73392D4(): number;
	_0xF284AC67940C6812(): number;
	_0x2E22FEFA0100275E(): boolean;
	_0x0CF54F20DE43879C(p0: number): void;
	_0xA238192F33110615(): _0xA238192F33110615Result;
	_0xCA6B2F7CE32AB653(p0: number, p2: number): number;
	_0x24A49BEAF468DC90(p0: number, p2: number, p3: number, p4: number): number;
	_0x8F08017F9D7C47BD(p0: number, p2: number): number;
	_0xF13FE2A80C05C561(): boolean;
	_0x1185A8087587322C(p0: boolean): void;
	_0x577599CCED639CA2(p0: number): void;
	_0x7C226D5346D4D10A(p0: number): void;
	_0x04655F9D075D0AE5(toggle: boolean): void;
	_0x243296A510B562B6(): void;
}

declare interface GameHud extends GameHudLegacy {
	beginTextCommandBusyspinnerOn(string: string): void;
	endTextCommandBusyspinnerOn(busySpinnerType: number): void;
	busyspinnerOff(): void;
	preloadBusyspinner(): void;
	busyspinnerIsOn(): boolean;
	busyspinnerIsDisplaying(): boolean;
	setMouseCursorActiveThisFrame(): void;
	setMouseCursorSprite(spriteId: number): void;
	setMouseCursorVisibleInMenus(toggle: boolean): void;
	thefeedOnlyShowTooltips(toggle: boolean): void;
	thefeedSetScriptedMenuHeight(pos: number): void;
	thefeedDisableLoadingScreenTips(): void;
	thefeedHideThisFrame(): void;
	thefeedDisplayLoadingScreenTips(): void;
	thefeedFlushQueue(): void;
	thefeedRemoveItem(notificationId: number): void;
	thefeedForceRenderOn(): void;
	thefeedForceRenderOff(): void;
	thefeedPause(): void;
	thefeedResume(): void;
	thefeedIsPaused(): boolean;
	thefeedSpsExtendWidescreenOn(): void;
	thefeedSpsExtendWidescreenOff(): void;
	thefeedGetFirstVisibleDeleteRemaining(): number;
	thefeedCommentTeleportPoolOn(): void;
	thefeedCommentTeleportPoolOff(): void;
	thefeedSetNextPostBackgroundColor(hudColorIndex: number): void;
	thefeedSetAnimpostfxColor(red: number, green: number, blue: number, alpha: number): void;
	thefeedSetAnimpostfxCount(count: number): void;
	thefeedSetAnimpostfxSound(toggle: boolean): void;
	thefeedResetAllParameters(): void;
	thefeedFreezeNextPost(): void;
	thefeedClearFrozenPost(): void;
	thefeedSetFlushAnimpostfx(p0: boolean): void;
	thefeedAddTxdRef(): ThefeedAddTxdRefResult;
	beginTextCommandThefeedPost(text: string): void;
	endTextCommandThefeedPostStats(
		statTitle: string,
		iconEnum: number,
		stepVal: boolean,
		barValue: number,
		isImportant: boolean,
		pictureTextureDict: string,
		pictureTextureName: string
	): number;
	endTextCommandThefeedPostMessagetext(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType: number,
		sender: string,
		subject: string
	): number;
	endTextCommandThefeedPostMessagetextGxtEntry(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType: number,
		sender: string,
		subject: string
	): number;
	endTextCommandThefeedPostMessagetextTu(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType: number,
		sender: string,
		subject: string,
		duration: number
	): number;
	endTextCommandThefeedPostMessagetextWithCrewTag(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType: number,
		sender: string,
		subject: string,
		duration: number,
		clanTag: string
	): number;
	endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType1: number,
		sender: string,
		subject: string,
		duration: number,
		clanTag: string,
		iconType2: number,
		p9: number
	): number;
	endTextCommandThefeedPostTicker(blink: boolean, p1: boolean): number;
	endTextCommandThefeedPostTickerForced(blink: boolean, p1: boolean): number;
	endTextCommandThefeedPostTickerWithTokens(blink: boolean, p1: boolean): number;
	endTextCommandThefeedPostAward(textureDict: string, textureName: string, rpBonus: number, colorOverlay: number, titleLabel: string): number;
	endTextCommandThefeedPostCrewtag(
		p0: boolean,
		p1: boolean,
		p3: number,
		isLeader: boolean,
		unk0: boolean,
		clanDesc: number,
		R: number,
		G: number,
		B: number
	): EndTextCommandThefeedPostCrewtagResult;
	endTextCommandThefeedPostCrewtagWithGameName(
		p0: boolean,
		p1: boolean,
		p3: number,
		isLeader: boolean,
		unk0: boolean,
		clanDesc: number,
		playerName: string,
		R: number,
		G: number,
		B: number
	): EndTextCommandThefeedPostCrewtagWithGameNameResult;
	endTextCommandThefeedPostUnlock(p0: number, p1: number, p2: number): number;
	endTextCommandThefeedPostUnlockTu(p0: number, p1: number, p2: number, p3: number): number;
	endTextCommandThefeedPostUnlockTuWithColor(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;
	endTextCommandThefeedPostMpticker(blink: boolean, p1: boolean): number;
	endTextCommandThefeedPostCrewRankup(p0: string, p1: string, p2: string, p3: boolean, p4: boolean): number;
	endTextCommandThefeedPostVersusTu(p2: number, p5: number, p6: number, p7: number): EndTextCommandThefeedPostVersusTuResult;
	endTextCommandThefeedPostReplayIcon(type: number, image: number, text: string): number;
	endTextCommandThefeedPostReplayInput(type: number, button: string, text: string): number;
	beginTextCommandPrint(GxtEntry: string): void;
	endTextCommandPrint(duration: number, drawImmediately: boolean): void;
	beginTextCommandIsMessageDisplayed(text: string): void;
	endTextCommandIsMessageDisplayed(): boolean;
	beginTextCommandDisplayText(text: string): void;
	endTextCommandDisplayText(x: number, y: number, p2: number): void;
	beginTextCommandGetWidth(text: string): void;
	endTextCommandGetWidth(p0: boolean): number;
	beginTextCommandLineCount(entry: string): void;
	endTextCommandLineCount(x: number, y: number): number;
	beginTextCommandDisplayHelp(inputType: string): void;
	endTextCommandDisplayHelp(p0: number, loop: boolean, beep: boolean, shape: number): void;
	beginTextCommandIsThisHelpMessageBeingDisplayed(labelName: string): void;
	endTextCommandIsThisHelpMessageBeingDisplayed(p0: number): boolean;
	beginTextCommandSetBlipName(textLabel: string): void;
	endTextCommandSetBlipName(blip: number): void;
	beginTextCommandObjective(p0: string): void;
	endTextCommandObjective(p0: boolean): void;
	beginTextCommandClearPrint(text: string): void;
	endTextCommandClearPrint(): void;
	beginTextCommandOverrideButtonText(gxtEntry: string): void;
	endTextCommandOverrideButtonText(p0: number): void;
	addTextComponentInteger(value: number): void;
	addTextComponentFloat(value: number, decimalPlaces: number): void;
	addTextComponentSubstringTextLabel(labelName: string): void;
	addTextComponentSubstringTextLabelHashKey(gxtEntryHash: number): void;
	addTextComponentSubstringBlipName(blip: number): void;
	addTextComponentSubstringPlayerName(text: string): void;
	addTextComponentSubstringTime(timestamp: number, flags: number): void;
	addTextComponentFormattedInteger(value: number, commaSeparated: boolean): void;
	addTextComponentSubstringPhoneNumber(p0: string, p1: number): void;
	addTextComponentSubstringWebsite(website: string): void;
	addTextComponentSubstringKeyboardDisplay(string: string): void;
	setColourOfNextTextComponent(hudColor: number): void;
	getTextSubstring(text: string, position: number, length: number): string;
	getTextSubstringSafe(text: string, position: number, length: number, maxLength: number): string;
	getTextSubstringSlice(text: string, startPosition: number, endPosition: number): string;
	getLabelText(labelName: string): string;
	clearPrints(): void;
	clearBrief(): void;
	clearAllHelpMessages(): void;
	clearThisPrint(p0: string): void;
	clearSmallPrints(): void;
	doesTextBlockExist(gxt: string): boolean;
	requestAdditionalText(gxt: string, slot: number): void;
	requestAdditionalTextForDlc(gxt: string, slot: number): void;
	hasAdditionalTextLoaded(slot: number): boolean;
	clearAdditionalText(p0: number, p1: boolean): void;
	isStreamingAdditionalText(p0: number): boolean;
	hasThisAdditionalTextLoaded(gxt: string, slot: number): boolean;
	isMessageBeingDisplayed(): boolean;
	doesTextLabelExist(gxt: string): boolean;
	getLengthOfStringWithThisTextLabel(gxt: string): number;
	getLengthOfLiteralString(string: string): number;
	getLengthOfLiteralStringInBytes(string: string): number;
	getStreetNameFromHashKey(hash: number): string;
	isPreferenceSwitchedOn(): boolean;
	isRadarPreferenceSwitchedOn(): boolean;
	isSubtitlePreferenceSwitchedOn(): boolean;
	display(toggle: boolean): void;
	displayWhenDeadThisFrame(): void;
	displayWhenPausedThisFrame(): void;
	displayRadar(toggle: boolean): void;
	isHidden(): boolean;
	isRadarHidden(): boolean;
	isMinimapRendering(): boolean;
	setBlipRoute(blip: number, enabled: boolean): void;
	clearAllBlipRoutes(): void;
	setBlipRouteColour(blip: number, colour: number): void;
	addNextMessageToPreviousBriefs(p0: boolean): void;
	setRadarZoomPrecise(zoom: number): void;
	setRadarZoom(zoomLevel: number): void;
	setRadarZoomToBlip(blip: number, zoom: number): void;
	setRadarZoomToDistance(zoom: number): void;
	getColour(hudColorIndex: number): GetHudColourResult;
	setScriptVariableColour(r: number, g: number, b: number, a: number): void;
	setScriptVariable2Colour(r: number, g: number, b: number, a: number): void;
	replaceColour(hudColorIndex: number, hudColorIndex2: number): void;
	replaceColourWithRgba(hudColorIndex: number, r: number, g: number, b: number, a: number): void;
	setAbilityBarVisibilityInMultiplayer(visible: boolean): void;
	setAllowAbilityBarInMultiplayer(toggle: boolean): void;
	flashAbilityBar(millisecondsToFlash: number): void;
	setAbilityBarValue(p0: number, p1: number): void;
	flashWantedDisplay(p0: boolean): void;
	getRenderedCharacterHeight(size: number, font: number): number;
	setTextScale(scale: number, size: number): void;
	setTextColour(red: number, green: number, blue: number, alpha: number): void;
	setTextCentre(align: boolean): void;
	setTextRightJustify(toggle: boolean): void;
	setTextJustification(justifyType: number): void;
	setTextWrap(start: number, end: number): void;
	setTextLeading(p0: number): void;
	setTextProportional(p0: boolean): void;
	setTextFont(fontType: number): void;
	setTextDropShadow(): void;
	setTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;
	setTextOutline(): void;
	setTextEdge(p0: number, r: number, g: number, b: number, a: number): void;
	setTextRenderId(renderId: number): void;
	getDefaultScriptRendertargetRenderId(): number;
	registerNamedRendertarget(name: string, p1: boolean): boolean;
	isNamedRendertargetRegistered(name: string): boolean;
	releaseNamedRendertarget(name: string): boolean;
	linkNamedRendertarget(modelHash: number): void;
	getNamedRendertargetRenderId(name: string): number;
	isNamedRendertargetLinked(modelHash: number): boolean;
	clearHelp(toggle: boolean): void;
	isHelpMessageOnScreen(): boolean;
	isHelpMessageBeingDisplayed(): boolean;
	isHelpMessageFadingOut(): boolean;
	setHelpMessageTextStyle(style: number, hudColor: number, alpha: number, p3: number, p4: number): void;
	getStandardBlipEnumId(): boolean;
	getWaypointBlipEnumId(): number;
	getNumberOfActiveBlips(): number;
	getNextBlipInfoId(blipSprite: number): number;
	getFirstBlipInfoId(blipSprite: number): number;
	getClosestBlipOfType(blipSprite: number): number;
	getBlipInfoIdCoord(blip: number): Vector3;
	getBlipInfoIdDisplay(blip: number): number;
	getBlipInfoIdType(blip: number): number;
	getBlipInfoIdEntityIndex(blip: number): number;
	getBlipInfoIdPickupIndex(blip: number): number;
	getBlipFromEntity(entity: number): number;
	addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): number;
	addBlipForArea(x: number, y: number, z: number, width: number, height: number): number;
	addBlipForEntity(entity: number): number;
	addBlipForPickup(pickup: number): number;
	addBlipForCoord(x: number, y: number, z: number): number;
	triggerSonarBlip(posX: number, posY: number, posZ: number, radius: number, p4: number): void;
	allowSonarBlips(toggle: boolean): void;
	setBlipCoords(blip: number, posX: number, posY: number, posZ: number): void;
	getBlipCoords(blip: number): Vector3;
	setBlipSprite(blip: number, spriteId: number): void;
	getBlipSprite(blip: number): number;
	setBlipNameFromTextFile(blip: number, gxtEntry: string): void;
	setBlipNameToPlayerName(blip: number, player: number): void;
	setBlipAlpha(blip: number, alpha: number): void;
	getBlipAlpha(blip: number): number;
	setBlipFade(blip: number, opacity: number, duration: number): void;
	setBlipRotation(blip: number, rotation: number): void;
	setBlipSquaredRotation(blip: number, heading: number): void;
	setBlipFlashTimer(blip: number, duration: number): void;
	setBlipFlashInterval(blip: number, p1: number): void;
	setBlipColour(blip: number, color: number): void;
	setBlipSecondaryColour(blip: number, r: number, g: number, b: number): void;
	getBlipColour(blip: number): number;
	getBlipColour(blip: number): number;
	isBlipShortRange(blip: number): boolean;
	isBlipOnMinimap(blip: number): boolean;
	doesBlipHaveGpsRoute(blip: number): boolean;
	setBlipHiddenOnLegend(blip: number, toggle: boolean): void;
	setBlipHighDetail(blip: number, toggle: boolean): void;
	setBlipAsMissionCreatorBlip(blip: number, toggle: boolean): void;
	isMissionCreatorBlip(blip: number): boolean;
	getNewSelectedMissionCreatorBlip(): number;
	isHoveringOverMissionCreatorBlip(): boolean;
	showStartMissionInstructionalButton(p0: boolean): void;
	setBlipFlashes(blip: number, toggle: boolean): void;
	setBlipFlashesAlternate(blip: number, toggle: boolean): void;
	isBlipFlashing(blip: number): boolean;
	setBlipAsShortRange(blip: number, toggle: boolean): void;
	setBlipScale(blip: number, scale: number): void;
	setBlipScaleTransformation(blip: number, xScale: number, yScale: number): void;
	setBlipPriority(blip: number, priority: number): void;
	setBlipDisplay(blip: number, displayId: number): void;
	setBlipCategory(blip: number, index: number): void;
	removeBlip(blip: number): number;
	setBlipAsFriendly(blip: number, toggle: boolean): void;
	pulseBlip(blip: number): void;
	showNumberOnBlip(blip: number, number: number): void;
	hideNumberOnBlip(blip: number): void;
	showHeightOnBlip(blip: number, toggle: boolean): void;
	showTickOnBlip(blip: number, toggle: boolean): void;
	showHeadingIndicatorOnBlip(blip: number, toggle: boolean): void;
	showOutlineIndicatorOnBlip(blip: number, toggle: boolean): void;
	showFriendIndicatorOnBlip(blip: number, toggle: boolean): void;
	showCrewIndicatorOnBlip(blip: number, toggle: boolean): void;
	setBlipDisplayIndicatorOnBlip(blip: number, toggle: boolean): void;
	setBlipShrink(blip: number, toggle: boolean): void;
	setRadiusBlipEdge(blip: number, toggle: boolean): void;
	doesBlipExist(blip: number): boolean;
	setWaypointOff(): void;
	deleteWaypoint(): void;
	refreshWaypoint(): void;
	isWaypointActive(): boolean;
	setNewWaypoint(x: number, y: number): void;
	setBlipBright(blip: number, toggle: boolean): void;
	setBlipShowCone(blip: number, toggle: boolean, p2: number): void;
	setMinimapComponent(componentId: number, toggle: boolean, overrideColor: number): number;
	setMinimapSonarEnabled(toggle: boolean): void;
	showSigninUi(): void;
	getMainPlayerBlipId(): number;
	hideLoadingOnFadeThisFrame(): void;
	setRadarAsInteriorThisFrame(interior: number, x: number, y: number, z: number, zoom: number): void;
	setRadarAsExteriorThisFrame(): void;
	setPlayerBlipPositionThisFrame(x: number, y: number): void;
	isMinimapInInterior(): boolean;
	hideMinimapExteriorMapThisFrame(): void;
	hideMinimapInteriorMapThisFrame(): void;
	setToggleMinimapHeistIsland(toggle: boolean): void;
	dontTiltMinimapThisFrame(): void;
	setWidescreenFormat(p0: number): void;
	displayAreaName(toggle: boolean): void;
	displayCash(toggle: boolean): void;
	setPlayerCashChange(cash: number, bank: number): void;
	displayAmmoThisFrame(display: boolean): void;
	displaySniperScopeThisFrame(): void;
	hideAndRadarThisFrame(): void;
	setMultiplayerWalletCash(): void;
	removeMultiplayerWalletCash(): void;
	setMultiplayerBankCash(): void;
	removeMultiplayerBankCash(): void;
	setMultiplayerCash(p0: number, p1: number): void;
	removeMultiplayerCash(): void;
	hideHelpTextThisFrame(): void;
	displayHelpTextThisFrame(message: string, p1: boolean): void;
	forceWeaponWheel(show: boolean): void;
	displayLoadingScreenTips(): void;
	weaponWheelIgnoreSelection(): void;
	weaponWheelGetSelectedHash(): number;
	setWeaponWheelTopSlot(weaponHash: number): void;
	weaponWheelGetSlotHash(weaponTypeIndex: number): number;
	weaponWheelIgnoreControlInput(toggle: boolean): void;
	setGpsFlags(p0: number, p1: number): void;
	clearGpsFlags(): void;
	setRaceTrackRender(toggle: boolean): void;
	clearGpsRaceTrack(): void;
	startGpsCustomRoute(hudColor: number, displayOnFoot: boolean, followPlayer: boolean): void;
	addPointToGpsCustomRoute(x: number, y: number, z: number): void;
	setGpsCustomRouteRender(toggle: boolean, radarThickness: number, mapThickness: number): void;
	clearGpsCustomRoute(): void;
	startGpsMultiRoute(hudColor: number, routeFromPlayer: boolean, displayOnFoot: boolean): void;
	addPointToGpsMultiRoute(x: number, y: number, z: number): void;
	setGpsMultiRouteRender(toggle: boolean): void;
	clearGpsMultiRoute(): void;
	clearGpsPlayerWaypoint(): void;
	setGpsFlashes(toggle: boolean): void;
	flashMinimapDisplay(): void;
	flashMinimapDisplayWithColor(hudColorIndex: number): void;
	toggleStealthRadar(toggle: boolean): void;
	setMinimapInSpectatorMode(toggle: boolean, ped: number): void;
	setMissionName(p0: boolean, name: string): void;
	setMissionName2(p0: boolean, name: string): void;
	setMinimapBlockWaypoint(toggle: boolean): void;
	setMinimapInPrologue(toggle: boolean): void;
	setMinimapHideFow(toggle: boolean): void;
	getMinimapFowDiscoveryRatio(): number;
	getMinimapFowCoordinateIsRevealed(x: number, y: number, z: number): boolean;
	setMinimapFowRevealCoordinate(x: number, y: number, z: number): void;
	setMinimapGolfCourse(hole: number): void;
	setMinimapGolfCourseOff(): void;
	lockMinimapAngle(angle: number): void;
	unlockMinimapAngle(): void;
	lockMinimapPosition(x: number, y: number): void;
	unlockMinimapPosition(): void;
	setMinimapAltitudeIndicatorLevel(altitude: number, p1: boolean, p2: number): void;
	setHealthDisplayValues(health: number, capacity: number, wasAdded: boolean): void;
	setMaxHealthDisplay(maximumValue: number): void;
	setMaxArmourDisplay(maximumValue: number): void;
	setBigmapActive(toggleBigMap: boolean, showFullMap: boolean): void;
	isComponentActive(id: number): boolean;
	isScriptedComponentActive(id: number): boolean;
	hideScriptedComponentThisFrame(id: number): void;
	showScriptedComponentThisFrame(id: number): void;
	isScriptedComponentHiddenThisFrame(id: number): boolean;
	hideComponentThisFrame(id: number): void;
	showComponentThisFrame(id: number): void;
	hideAreaAndVehicleNameThisFrame(): void;
	resetReticuleValues(): void;
	resetComponentValues(id: number): void;
	setComponentPosition(id: number, x: number, y: number): void;
	getComponentPosition(id: number): Vector3;
	clearReminderMessage(): void;
	getScreenPositionFromWorldPosition(worldX: number, worldY: number, worldZ: number): GetHudScreenPositionFromWorldPositionResult;
	openReportugcMenu(): void;
	forceCloseReportugcMenu(): void;
	isReportugcMenuOpen(): boolean;
	isFloatingHelpTextOnScreen(hudIndex: number): boolean;
	setFloatingHelpTextScreenPosition(hudIndex: number, x: number, y: number): void;
	setFloatingHelpTextWorldPosition(hudIndex: number, x: number, y: number, z: number): void;
	setFloatingHelpTextToEntity(hudIndex: number, entity: number, offsetX: number, offsetY: number): void;
	setFloatingHelpTextStyle(hudIndex: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	clearFloatingHelp(hudIndex: number, p1: boolean): void;
	createMpGamerTagWithCrewColor(
		player: number,
		username: string,
		pointedClanTag: boolean,
		isRockstarClan: boolean,
		clanTag: string,
		clanFlag: number,
		r: number,
		g: number,
		b: number
	): void;
	isMpGamerTagMovieActive(): boolean;
	createFakeMpGamerTag(ped: number, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, clanFlag: number): number;
	removeMpGamerTag(gamerTagId: number): void;
	isMpGamerTagActive(gamerTagId: number): boolean;
	isMpGamerTagFree(gamerTagId: number): boolean;
	setMpGamerTagVisibility(gamerTagId: number, component: number, toggle: boolean, p3: number): void;
	setMpGamerTagEnabled(gamerTagId: number, toggle: boolean): void;
	setMpGamerTagIcons(gamerTagId: number, toggle: boolean): void;
	setMpGamerHealthBarDisplay(gamerTagId: number, toggle: boolean): void;
	setMpGamerHealthBarMax(gamerTagId: number, value: number, maximumValue: number): void;
	setMpGamerTagColour(gamerTagId: number, component: number, hudColorIndex: number): void;
	setMpGamerTagHealthBarColour(gamerTagId: number, hudColorIndex: number): void;
	setMpGamerTagAlpha(gamerTagId: number, component: number, alpha: number): void;
	setMpGamerTagWantedLevel(gamerTagId: number, wantedlvl: number): void;
	setMpGamerTagUnk(gamerTagId: number, p1: number): void;
	setMpGamerTagName(gamerTagId: number, string: string): void;
	isValidMpGamerTagMovie(gamerTagId: number): boolean;
	setMpGamerTagBigText(gamerTagId: number, string: string): void;
	getCurrentWebpageId(): number;
	getCurrentWebsiteId(): number;
	getGlobalActionscriptFlag(flagIndex: number): number;
	resetGlobalActionscriptFlag(flagIndex: number): void;
	isWarningMessageActive2(): boolean;
	setWarningMessage(
		titleMsg: string,
		flags: number,
		promptMsg: string,
		p3: boolean,
		p4: number,
		p5: string,
		p6: string,
		showBackground: boolean,
		p8: number
	): void;
	setWarningMessageWithHeader(
		entryHeader: string,
		entryLine1: string,
		instructionalKey: number,
		entryLine2: string,
		p4: boolean,
		p5: number,
		p8: boolean,
		p9: number
	): SetWarningMessageWithHeaderResult;
	setWarningMessageWithHeaderAndSubstringFlags(
		entryHeader: string,
		entryLine1: string,
		instructionalKey: number,
		entryLine2: string,
		p4: boolean,
		p5: number,
		p6: number,
		p9: boolean,
		p10: number
	): SetWarningMessageWithHeaderAndSubstringFlagsResult;
	setWarningMessageWithHeaderUnk(
		entryHeader: string,
		entryLine1: string,
		flags: number,
		entryLine2: string,
		p4: boolean,
		p5: number,
		showBg: boolean,
		p9: number,
		p10: number
	): SetWarningMessageWithHeaderUnkResult;
	setWarningMessageWithAlert(
		labelTitle: string,
		labelMessage: string,
		p2: number,
		p3: number,
		labelMessage2: string,
		p5: boolean,
		p6: number,
		p7: number,
		p8: string,
		p9: string,
		background: boolean,
		errorCode: number
	): void;
	getWarningMessageTitleHash(): number;
	setWarningMessageListRow(index: number, name: string, cash: number, rp: number, lvl: number, colour: number): boolean;
	removeWarningMessageListItems(): void;
	isWarningMessageActive(): boolean;
	clearDynamicPauseMenuErrorMessage(): void;
	raceGalleryFullscreen(toggle: boolean): void;
	raceGalleryNextBlipSprite(spriteId: number): void;
	raceGalleryAddBlip(x: number, y: number, z: number): number;
	clearRaceGalleryBlips(): void;
	forceSonarBlipsThisFrame(): number;
	getNorthRadarBlip(): number;
	displayPlayerNameTagsOnBlips(toggle: boolean): void;
	activateFrontendMenu(menuhash: number, togglePause: boolean, component: number): void;
	restartFrontendMenu(menuHash: number, p1: number): void;
	getCurrentFrontendMenuVersion(): number;
	setPauseMenuActive(toggle: boolean): void;
	disableFrontendThisFrame(): void;
	suppressFrontendRenderingThisFrame(): void;
	allowPauseMenuWhenDeadThisFrame(): void;
	setFrontendActive(active: boolean): void;
	isPauseMenuActive(): boolean;
	getPauseMenuState(): number;
	isPauseMenuRestarting(): boolean;
	logDebugInfo(p0: string): void;
	pauseMenuActivateContext(contextHash: number): void;
	pauseMenuDeactivateContext(contextHash: number): void;
	pauseMenuIsContextActive(contextHash: number): boolean;
	pauseMenuIsContextMenuActive(): number;
	pauseMenuSetBusySpinner(p0: boolean, p1: number, p2: number): void;
	isFrontendReadyForControl(): boolean;
	takeControlOfFrontend(): void;
	releaseControlOfFrontend(): void;
	isNavigatingMenuContent(): number;
	getPauseMenuSelection(): GetPauseMenuSelectionResult;
	getPauseMenuSelectionData(): GetPauseMenuSelectionDataResult;
	getMenuPedIntStat(p0: number): number;
	getMenuPedMaskedIntStat(p0: number, p2: number, p3: number): number;
	getMenuPedFloatStat(p0: number): number;
	getMenuPedBoolStat(p0: number): number;
	clearPedInPauseMenu(): void;
	givePedToPauseMenu(ped: number, p1: number): void;
	setPauseMenuPedLighting(state: boolean): void;
	setPauseMenuPedSleepState(state: boolean): void;
	openOnlinePoliciesMenu(): void;
	isOnlinePoliciesMenuActive(): boolean;
	openSocialClubMenu(): void;
	closeSocialClubMenu(): void;
	setSocialClubTour(name: string): void;
	isSocialClubActive(): boolean;
	forceCloseTextInputBox(): void;
	overrideMultiplayerChatPrefix(gxtEntryHash: number): void;
	isMultiplayerChatActive(): boolean;
	closeMultiplayerChat(): void;
	overrideMultiplayerChatColour(p0: number, hudColor: number): void;
	setTextChatUnk(p0: boolean): void;
	flagPlayerContextInTournament(toggle: boolean): void;
	setPedHasAiBlip(ped: number, hasCone: boolean): void;
	setPedHasAiBlipWithColor(ped: number, hasCone: boolean, color: number): void;
	doesPedHaveAiBlip(ped: number): boolean;
	setPedAiBlipGangId(ped: number, gangId: number): void;
	setPedAiBlipHasCone(ped: number, toggle: boolean): void;
	setPedAiBlipForcedOn(ped: number, toggle: boolean): void;
	setPedAiBlipNoticeRange(ped: number, range: number): void;
	setPedAiBlipSprite(ped: number, spriteId: number): void;
	getAiBlip2(ped: number): number;
	getAiBlip(ped: number): number;
	hasDirectorModeBeenTriggered(): boolean;
	setDirectorModeClearTriggeredFlag(): void;
	setPlayerIsInDirectorMode(toggle: boolean): void;

	/**
	 * Check frontend.xml for details
	 */
	setMinimapComponentValues(name: string, alignX: number, alignY: number, posX: number, posY: number, sizeX: number, sizeY: number): void; 
	resetMinimapComponentValues(names: string[]): void;
	getMinimapComponentValues(componentName: string): number | string;
	getCurrentAreaNameString(): string;
	getCurrentAreaNameHash(): number;
	getCurrentAreaNameLabel(): string;
	getCurrentStreetNameString(): string;
	
	/**
	 * Way, way faster than GET_STREET_NAME_AT_COORD native function as it uses the street HUD component cached value.
	 */
	getCurrentStreetNameHash(): number;
	setShowHudComponentsThisFrameBatch(show: boolean, hudComponents: RageEnums.Hud.Component[]): void;
	applyShowHudComponentsThisFrameBatch(): void;

	unk: GameHudUnk;
}

interface GameHudMp extends GameHud {}
