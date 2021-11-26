declare interface _0x1171A97A3D3981B6Result {
	p0: number;
	p1: number;
	result: boolean;
}

declare interface _0x0D77A82DC2D0DA59Result {
	p0: number;
	p1: number;
}

declare interface _0xD66C9E72B3CC4982Result {
	p0: number;
	result: number;
}

declare interface _0xADB57E5B663CCA8BResult {
	p1: number;
	p2: number;
}

declare interface _0xA7862BC5ED1DFD7EResult {
	p2: number;
	p3: number;
	result: boolean;
}

declare interface _0x97A770BEEF227E2BResult {
	p2: number;
	p3: number;
	result: boolean;
}

declare interface _0x5324A0E3E4CE3570Result {
	p2: number;
	p3: number;
	result: boolean;
}

declare interface _0xB746D20B17F2A229Result {
	p0: number;
	p1: number;
	result: boolean;
}

declare interface NetworkGetGlobalMultiplayerClockResult {
	hours: number;
	minutes: number;
	seconds: number;
}

declare interface NetworkDoTransitionToNewFreemodeResult {
	p0: number;
	p1: number;
	result: boolean;
}

declare interface NetworkGetTransitionMembersResult {
	data: number;
	result: number;
}

declare interface NetworkSendInviteViaPresenceResult {
	networkHandle: number;
	p1: number;
	result: boolean;
}

declare interface NetworkSendPresenceTransitionInviteResult {
	p0: number;
	p1: number;
	result: boolean;
}

declare interface NetworkInviteGamersResult {
	p0: number;
	p2: number;
	p3: number;
	result: boolean;
}

declare interface FilloutPmPlayerListWithNamesResult {
	p0: number;
	p1: number;
	result: boolean;
}

declare interface NetworkGetPlatformPartyMembersResult {
	data: number;
	result: number;
}

declare interface NetworkGetNumScriptParticipantsResult {
	p0: number;
	result: number;
}

declare interface NetworkGetDestroyerOfNetworkIdResult {
	weaponHash: number;
	result: number;
}

declare interface NetworkGetEntityKillerOfPlayerResult {
	weaponHash: number;
	result: number;
}

declare interface NetworkHashFromGamerHandleResult {
	networkHandle: number;
	result: number;
}

declare interface NetworkGetGamertagFromHandleResult {
	networkHandle: number;
	result: string;
}

declare interface NetworkAreHandlesTheSameResult {
	netHandle1: number;
	netHandle2: number;
	result: boolean;
}

declare interface NetworkGetPlayerFromGamerHandleResult {
	networkHandle: number;
	result: number;
}

declare interface NetworkMemberIdFromGamerHandleResult {
	networkHandle: number;
	result: string;
}

declare interface NetworkPlayerGetUseridResult {
	userID: number;
	result: string;
}

declare interface NetworkClanPlayerGetDescResult {
	clanDesc: number;
	networkHandle: number;
	result: boolean;
}

declare interface NetworkClanGetUiFormattedTagResult {
	clanDesc: number;
}

declare interface NetworkClanGetMembershipCountResult {
	p0: number;
	result: number;
}

declare interface NetworkClanGetMembershipResult {
	p0: number;
	clanMembership: number;
	result: boolean;
}

declare interface NetworkClanGetEmblemTxdNameResult {
	netHandle: number;
	result: boolean;
}

declare interface NetworkGetPrimaryClanDataNewResult {
	p0: number;
	p1: number;
	result: boolean;
}

declare interface NetworkQueryRespawnResultsResult {
	p0: number;
	result: number;
}

declare interface NetworkGetRespawnResultResult {
	coordinates: Vector3;
	heading: number;
}

declare interface UgcSetDeletedResult {
	p0: number;
	p2: number;
	result: boolean;
}

declare interface UgcCopyContentResult {
	p0: number;
	p1: number;
	result: boolean;
}

declare interface UgcGetBookmarkedContentResult {
	p2: number;
	p3: number;
	result: boolean;
}

declare interface UgcGetMyContentResult {
	p2: number;
	p3: number;
	result: boolean;
}

declare interface UgcGetFriendContentResult {
	p2: number;
	p3: number;
	result: boolean;
}

declare interface UgcGetCrewContentResult {
	p3: number;
	p4: number;
	result: boolean;
}

declare interface UgcGetGetByCategoryResult {
	p3: number;
	p4: number;
	result: boolean;
}

declare interface TextureDownloadRequestResult {
	PlayerHandle: number;
	result: number;
}

declare interface UgcTextureDownloadRequestResult {
	p0: number;
	p4: number;
	result: number;
}

declare interface NetworkHasRosPrivilegeEndDateResult {
	banType: number;
	timeData: number;
	result: boolean;
}

declare interface NetworkStartUserContentPermissionsCheckResult {
	netHandle: number;
	result: number;
}

declare interface GameNetworkUnk {
	_0xBD545D44CCE70597(): boolean;
	_0xEBCAB9E5048434F4(): number;
	_0x74FB3E29E6D10FA9(): number;
	_0x7808619F31FF22DB(): number;
	_0xA0FA4EC6A05DA44E(): number;
	_0x8D11E61A4ABF49CC(): boolean;
	_0x4237E822315D8BA9(): boolean;
	_0x78321BEA235FD8CD(p0: number, p1: boolean): boolean;
	_0x07EAB372C8841D99(p0: number, p1: number, p2: number): number;
	_0x906CA41A4B74ECA4(): number;
	_0x023ACAB2DC9DC4A4(): number;
	_0x0CF6CC51AA18F0F8(p0: number, p1: number, p2: number): number;
	_0x64E5C4CC82847B73(): boolean;
	_0x1F7BC3539F9E0224(): void;
	_0xA8ACB6459542A8C8(): number;
	_0x83FE8D7229593017(): void;
	_0x53C10C8BD774F2C9(): number;
	_0x283B6062A2C01E9B(): void;
	_0x8B4FFC790CA131EF(p0: number, p1: number, p2: number, p3: number): number;
	_0x04918A41BC9B8157(p0: number, p1: number, p2: number): number;
	_0xB9351A07A0D458B1(p0: number): number;
	_0x041C7F2A6C9894E6(p0: number, p1: number, p2: number): number;
	_0xCAE55F48D3D7875C(p0: number): void;
	_0xF49ABC20D8552257(p0: number): void;
	_0x4811BBAC21C5FCD5(p0: number): void;
	_0x5539C3EBF104A53A(p0: boolean): void;
	_0x702BC4D605522539(p0: number): void;
	_0x5ECD378EE64450AB(p0: number): void;
	_0x59D421683D31835A(p0: number): void;
	_0x1153FA02A659051C(): void;
	_0x600F8CB31C7AAB6E(p0: number): void;
	_0xF9B83B77929D8863(): number;
	_0x2CC848A861D01493(): number;
	_0x94A8394D150B013A(): number;
	_0x5AE17C6B0134B7F1(): number;
	_0xC42DD763159F3461(): boolean;
	_0xD313DE83394AF134(): boolean;
	_0xBDB6F89C729CF388(): boolean;
	_0xF814FEC6A19FD6E0(): void;
	_0x140E6A44870A11CE(): void;
	_0x4C9034162368E206(): number;
	_0xB5D3453C98456528(): number;
	_0x0E4F77F7B9D74D84(p0: number): void;
	_0x1888694923EF4591(): void;
	_0xB13E88E655E5A3BC(): void;
	_0x617F49C2668E6155(): number;
	_0x261E97AD7BCF3D40(p0: boolean): void;
	_0x39917E1B4CB0F911(p0: boolean): void;
	_0x2CE9D95E4051AECD(p0: number): void;
	_0xA2E9C1AB8A92E8CD(toggle: boolean): void;
	_0xC571D0E77D8BBC29(): boolean;
	_0x1398582B7F72B3ED(p0: number): void;
	_0x1F8E00FB18239600(p0: number): void;
	_0xF6F4383B7C92F11A(p0: number): void;
	_0x973D76AA760A6CB6(p0: boolean): void;
	_0x3F9990BF5F22759C(): number;
	_0x4A9FDE3A5A6D0437(toggle: boolean): void;
	_0x1171A97A3D3981B6(p2: number, p3: number): _0x1171A97A3D3981B6Result;
	_0x742B58F723233ED9(p0: number): number;
	_0xEBF8284D8CADEB53(): void;
	_0xF083835B70BA9BFE(): void;
	_0x71DC455F5CD1C2B1(): number;
	_0x3855FB5EB2C5E8B2(p0: number): number;
	_0x4AD490AE1536933B(p0: number, p1: number): number;
	_0x0D77A82DC2D0DA59(): _0x0D77A82DC2D0DA59Result;
	_0x2BF66D2E7414F686(): number;
	_0x14922ED3E38761F0(): boolean;
	_0x6CE50E47F5543D0C(): void;
	_0xFA2888E3833C8E96(): void;
	_0x25D990F8E0E3F13C(): void;
	_0xA12D3A5A3753CC23(): number;
	_0xF287F506767CC8A9(): number;
	_0xEA8C0DDB10E2822A(p0: number, p1: number): void;
	_0xD6D7478CA62B8D41(p0: number, p1: number): void;
	_0x560B423D73015E77(p0: number): number;
	_0x638A3A81733086DB(): number;
	_0x2302C0264EA58D31(): void;
	_0x741A3D8380319A81(): void;
	_0x2DA41ED6E1FCD7A5(p0: number, p1: number): number;
	_0xC434133D9BA52777(p0: number, p1: number): number;
	_0x83660B734994124D(p0: number, p1: number, p2: number): number;
	_0x7242F8B741CE1086(netId: number): boolean;
	_0xD66C9E72B3CC4982(p1: number): _0xD66C9E72B3CC4982Result;
	_0x37D5F739FD494675(p0: number): number;
	_0x4C2A9FDC22377075(): void;
	_0xB309EBEA797E001F(p0: number): number;
	_0x26F07DD83A5F7F98(): number;
	_0x7D395EA61622E116(p0: boolean): void;
	_0xCFEB46DCD7D8D5EB(p0: boolean): void;
	_0x265559DA40B3F327(p0: number): void;
	_0x4348BFDA56023A2F(p0: number, p1: number): number;
	_0x3C5C1E2C2FF814B1(toggle: boolean): void;
	_0x9D7AFCBF21C51712(toggle: boolean): void;
	_0x6A5D89D7769A40D8(toggle: boolean): void;
	_0x5E3AA4CA2B6FB0EE(p0: number): void;
	_0xCA575C391FEA25CC(p0: number): void;
	_0xADB57E5B663CCA8B(p0: number): _0xADB57E5B663CCA8BResult;
	_0x8EF52ACAECC51D9C(toggle: boolean): void;
	_0xBF22E0F32968E967(player: number, p1: boolean): void;
	_0x17C9E241111A674D(p0: number, p1: number): void;
	_0x2E4C123D1C8A710E(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
	_0x2B51EDBEFC301339(p0: number, p1: string): boolean;
	_0xC32EA7A2F6CA7557(): number;
	_0x9D724B400A7E8FFC(p0: number, p1: number): void;
	_0x0379DAF89BA09AA5(p0: number, p1: number): void;
	_0x32EBD154CB6B8B99(p0: number, p1: number, p2: number): void;
	_0x76B3F29D3F967692(p0: number, p1: number): void;
	_0x3FA36981311FA4FF(netId: number, state: boolean): void;
	_0xE16AA70CE9BEEDC3(p0: number): number;
	_0xE42D626EEC94E5D9(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
	_0xBA7F0B77D80A4EB7(p0: number, p1: number): void;
	_0x0F1A4B45B7693B95(p0: number, p1: number): void;
	_0xFAC18E7356BD3210(): void;
	_0xA2A707979FE754DC(p0: number, p1: number): void;
	_0x838DA0936A24ED4D(p0: number, p1: number): void;
	_0x13F1FCB111B820B0(p0: boolean): void;
	_0xD7B6C73CAD419BCF(p0: boolean): void;
	_0x7EF7649B64D7FF10(entity: number): boolean;
	_0xA5EAFE473E45C442(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
	_0x45F35C0EDC33B03B(
		netScene: number,
		modelHash: number,
		x: number,
		y: number,
		z: number,
		p5: number,
		p6: string,
		p7: number,
		p8: number,
		flags: number
	): void;
	_0xC9B43A33D09CADA7(p0: number): void;
	_0x144DA052257AE7D8(p0: number): void;
	_0xFB1F9381E80FA13F(p0: number, p1: number): number;
	_0xFB680D403909DC70(p0: number, p1: number): void;
	_0xB37E4E6A2388CA7B(): boolean;
	_0x2B1C623823DB0D9D(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
	_0x4DF7CFFF471A7FB1(p0: number): boolean;
	_0xA6FCECCF4721D679(p0: number): void;
	_0x95BAF97C82464629(p0: number, p1: number): void;
	_0x7DB53B37A2F211A0(): number;
	_0x2E0BF682CC778D49(p0: number): boolean;
	_0x0EDE326D47CD0F3E(ped: number, player: number): boolean;
	_0x38B7C51AB1EDC7D8(entity: number, toggle: boolean): void;
	_0x3FC795691834481D(p0: number, p1: number): void;
	_0x2A5E0621DD815A9A(p0: number, p1: number, p2: number, p3: number): void;
	_0xCD71A4ECAB22709E(entity: number): void;
	_0xE6717E652B8C8D8A(p0: number, p1: number): void;
	_0x367EF5E2F439B4C6(p0: number): void;
	_0x94538037EE44F5CF(p0: boolean): void;
	_0xB606E6CC59664972(p0: number): void;
	_0x1D4DC17C38FEAFF0(): boolean;
	_0x265635150FB0D82E(): void;
	_0x444C4525ECE0A4B9(): void;
	_0x59328EB08C5CEB2B(): boolean;
	_0xFAE628F1E9ADB239(p0: number, p1: number, p2: number): void;
	_0x754615490A029508(): number;
	_0x155467ACA0F55705(): number;
	_0x8B0C2964BA471961(): number;
	_0x88B588B41FF7868E(): number;
	_0x67FC09BC554A75E5(): number;
	_0x9FEDF86898F100E9(): number;
	_0x24E4E51FC16305F9(): number;
	_0x692D58DF40657E8C(p0: number, p1: number, p2: number, p4: number, p5: boolean): number;
	_0xA7862BC5ED1DFD7E(p0: number, p1: number): _0xA7862BC5ED1DFD7EResult;
	_0x97A770BEEF227E2B(p0: number, p1: number): _0x97A770BEEF227E2BResult;
	_0x5324A0E3E4CE3570(p0: number, p1: number): _0x5324A0E3E4CE3570Result;
	_0xC87E740D9F3872CC(): number;
	_0x584770794D758C18(p0: number): number;
	_0x8C8D2739BA44AF0F(p0: number): boolean;
	_0xAEAB987727C5A8A4(p0: number): boolean;
	_0x1D610EB0FEA716D9(p0: number): boolean;
	_0x7FCC39C46C3C03BD(p0: number): boolean;
	_0x2D5DC831176D0114(p0: number): boolean;
	_0xEBFA8D50ADDC54C4(p0: number): boolean;
	_0x162C23CA83ED0A62(p0: number): boolean;
	_0x5A34CD9C3C5BEC44(p0: number): boolean;
	_0x68103E2247887242(): void;
	_0x45E816772E93A9DB(): number;
	_0x793FF272D5B365F4(): number;
	_0xB746D20B17F2A229(): _0xB746D20B17F2A229Result;
	_0x63B406D7884BFA95(): number;
	_0x4D02279C83BE69FE(): number;
	_0xFD75DABC0957BF33(p0: boolean): void;
	_0x60EDD13EB3AC1FF3(): boolean;
	_0x36391F397731595D(p0: number): number;
	_0x9465E683B12D3F6B(): void;
	_0xCA59CCAE5D01E4CE(): void;
	_0x6BFF5F84102DF80A(player: number): void;
	_0x5C497525F803486B(): void;
	_0x6FB7BB3607D27FA2(): number;
	_0x45A83257ED02D9BC(): void;
	_0x16D3D49902F697BB(player: number): boolean;
	_0xD414BE129BB81B32(player: number): number;
	_0x0E3A041ED6AC2B45(player: number): number;
	_0x350C23949E43686C(player: number): number;
	_0x64D779659BC37B19(entity: number): Vector3;
	_0x33DE49EDF4DDE77A(entity: number): Vector3;
	_0xAA5FAFCD2C5F5E47(entity: number): Vector3;
	_0xAEDF1BC1C133D6E3(): number;
	_0x2555CF7DA5473794(): number;
	_0x6FD992C4A1C1B986(): number;
	_0xDB663CC9FF3407A9(player: number): number;
}

declare interface GameNetworkLegacy {
	getPosixTime(): number;
}

declare interface GameNetwork extends GameNetworkLegacy {
	getOnlineVersion(): string;
	isSignedIn(): boolean;
	isSignedOnline(): boolean;
	hasValidRosCredentials(): boolean;
	isCloudAvailable(): boolean;
	hasSocialClubAccount(): boolean;
	areSocialClubPoliciesCurrent(): boolean;
	isHost(): boolean;
	haveOnlinePrivileges(): boolean;
	hasAgeRestrictedProfile(): boolean;
	haveUserContentPrivileges(p0: number): boolean;
	haveCommunicationPrivileges(p0: number, player: number): boolean;
	checkUserContentPrivileges(p0: number, p1: number, p2: boolean): boolean;
	checkCommunicationPrivileges(p0: number, p1: number, p2: boolean): boolean;
	hasSocialNetworkingSharingPriv(): boolean;
	getAgeGroup(): number;
	haveOnlinePrivilege2(): boolean;
	canBail(): boolean;
	bail(p0: number, p1: number, p2: number): void;
	transitionTrack(hash: number, p1: number, p2: number, state: number, p4: number): void;
	canAccessMultiplayer(): number;
	isMultiplayerDisabled(): boolean;
	canEnterMultiplayer(): boolean;
	sessionEnter(p0: number, p1: number, p2: number, maxPlayers: number, p4: number, p5: number): number;
	sessionFriendMatchmaking(p0: number, p1: number, maxPlayers: number, p3: boolean): boolean;
	sessionCrewMatchmaking(p0: number, p1: number, p2: number, maxPlayers: number, p4: boolean): boolean;
	sessionActivityQuickmatch(p0: number, p1: number, p2: number, p3: number): boolean;
	sessionHost(p0: number, maxPlayers: number, p2: boolean): boolean;
	sessionHostClosed(p0: number, maxPlayers: number): boolean;
	sessionHostFriendsOnly(p0: number, maxPlayers: number): boolean;
	sessionIsClosedFriends(): boolean;
	sessionIsClosedCrew(): boolean;
	sessionIsSolo(): boolean;
	sessionIsPrivate(): boolean;
	sessionEnd(p0: boolean, p1: boolean): boolean;
	sessionKickPlayer(player: number): void;
	sessionGetKickVote(player: number): boolean;
	joinPreviouslyFailedSession(): boolean;
	joinPreviouslyFailedTransition(): boolean;
	sessionSetMatchmakingGroup(matchmakingGroup: number): void;
	sessionSetMatchmakingGroupMax(playerType: number, playerCount: number): void;
	sessionGetMatchmakingGroupFree(p0: number): number;
	sessionSetMatchmakingPropertyId(p0: boolean): void;
	sessionSetMatchmakingMentalState(p0: number): void;
	sessionValidateJoin(p0: boolean): void;
	addFollowers(p1: number): number;
	clearFollowers(): void;
	getGlobalMultiplayerClock(): NetworkGetGlobalMultiplayerClockResult;
	getTargetingMode(): number;
	findGamersInCrew(p0: number): boolean;
	findMatchedGamers(p0: number, p1: number, p2: number, p3: number): boolean;
	isFindingGamers(): boolean;
	getNumFoundGamers(): number;
	getFoundGamer(p1: number): number;
	clearFoundGamers(): void;
	getGamerStatus(): number;
	getGamerStatusResult(p1: number): number;
	clearGetGamerStatus(): void;
	sessionJoinInvite(): void;
	sessionCancelInvite(): void;
	sessionForceCancelInvite(): void;
	hasPendingInvite(): boolean;
	acceptInvite(): boolean;
	sessionWasInvited(): boolean;
	sessionGetInviter(): number;
	suppressInvite(toggle: boolean): void;
	blockInvites(toggle: boolean): void;
	blockJoinQueueInvites(toggle: boolean): void;
	blockKickedPlayers(p0: boolean): void;
	setScriptReadyForEvents(toggle: boolean): void;
	isOfflineInvitePending(): boolean;
	sessionHostSinglePlayer(p0: number): void;
	sessionLeaveSinglePlayer(): void;
	isGameInProgress(): boolean;
	isSessionActive(): boolean;
	isInSession(): boolean;
	isSessionStarted(): boolean;
	isSessionBusy(): boolean;
	canSessionEnd(): boolean;
	sessionMarkVisible(toggle: boolean): void;
	sessionIsVisible(): boolean;
	sessionBlockJoinRequests(toggle: boolean): void;
	sessionChangeSlots(p0: number, p1: boolean): void;
	sessionGetPrivateSlots(): number;
	sessionVoiceHost(): void;
	sessionVoiceLeave(): void;
	sessionVoiceConnectToPlayer(): number;
	sessionVoiceRespondToRequest(p0: boolean, p1: number): void;
	sessionVoiceSetTimeout(timeout: number): void;
	sessionIsInVoiceSession(): boolean;
	sessionIsVoiceSessionBusy(): boolean;
	sendTextMessage(message: string): number;
	setActivitySpectator(toggle: boolean): void;
	isActivitySpectator(): boolean;
	setActivitySpectatorMax(maxSpectators: number): void;
	getActivityPlayerNum(p0: boolean): number;
	isActivitySpectatorFromHandle(): number;
	hostTransition(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean, p6: boolean, p7: number, p8: number, p9: number): boolean;
	doTransitionQuickmatch(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): boolean;
	doTransitionQuickmatchAsync(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): boolean;
	doTransitionQuickmatchWithGroup(p0: number, p1: number, p2: number, p3: number, p5: number, p6: number, p7: number): number;
	joinGroupActivity(): number;
	isTransitionClosedFriends(): boolean;
	isTransitionClosedCrew(): boolean;
	isTransitionSolo(): boolean;
	isTransitionPrivate(): boolean;
	setTransitionCreatorHandle(): number;
	clearTransitionCreatorHandle(): void;
	inviteGamersToTransition(p1: number): number;
	setGamerInvitedToTransition(): number;
	leaveTransition(): boolean;
	launchTransition(): boolean;
	bailTransition(p0: number, p1: number, p2: number): void;
	doTransitionToGame(p0: boolean, maxPlayers: number): boolean;
	doTransitionToNewGame(p0: boolean, maxPlayers: number, p2: boolean): boolean;
	doTransitionToFreemode(p1: number, p2: boolean, players: number, p4: boolean): number;
	doTransitionToNewFreemode(players: number, p3: boolean, p4: boolean, p5: boolean): NetworkDoTransitionToNewFreemodeResult;
	isTransitionToGame(): boolean;
	getTransitionMembers(dataCount: number): NetworkGetTransitionMembersResult;
	applyTransitionParameter(p0: number, p1: number): void;
	applyTransitionParameterString(p0: number, string: string, p2: boolean): void;
	sendTransitionGamerInstruction(p1: string, p2: number, p3: number, p4: boolean): number;
	markTransitionGamerAsFullyJoined(): number;
	isTransitionHost(): boolean;
	isTransitionHostFromHandle(): number;
	getTransitionHost(): number;
	isInTransition(): boolean;
	isTransitionStarted(): boolean;
	isTransitionBusy(): boolean;
	isTransitionMatchmaking(): boolean;
	openTransitionMatchmaking(): void;
	closeTransitionMatchmaking(): void;
	isTransitionOpenToMatchmaking(): boolean;
	setTransitionVisibilityLock(p0: boolean, p1: boolean): void;
	isTransitionVisibilityLocked(): boolean;
	setTransitionActivityId(p0: number): void;
	changeTransitionSlots(p0: number, p1: number): void;
	hasPlayerStartedTransition(player: number): boolean;
	areTransitionDetailsValid(p0: number): boolean;
	joinTransition(player: number): boolean;
	hasInvitedGamerToTransition(): number;
	isActivitySession(): boolean;
	sendInviteViaPresence(p2: number, p3: number): NetworkSendInviteViaPresenceResult;
	sendPresenceTransitionInvite(p2: number, p3: number): NetworkSendPresenceTransitionInviteResult;
	getNumPresenceInvites(): number;
	acceptPresenceInvite(p0: number): boolean;
	removePresenceInvite(p0: number): boolean;
	getPresenceInviteId(p0: number): number;
	getPresenceInviteInviter(p0: number): number;
	getPresenceInviteHandle(p0: number): number;
	getPresenceInviteSessionId(p0: number): number;
	getPresenceInviteContentId(p0: number): number;
	getPresenceInvitePlaylistLength(p0: number): number;
	getPresenceInvitePlaylistCurrent(p0: number): number;
	getPresenceInviteFromAdmin(p0: number): boolean;
	getPresenceInviteIsTournament(p0: number): boolean;
	hasFollowInvite(): boolean;
	actionFollowInvite(): number;
	clearFollowInvite(): number;
	removeTransitionInvite(): number;
	removeAllTransitionInvite(): void;
	inviteGamers(p1: number): NetworkInviteGamersResult;
	hasInvitedGamer(): number;
	getCurrentlySelectedGamerHandleFromInviteMenu(): number;
	setCurrentlySelectedGamerHandleFromInviteMenu(): number;
	setInviteOnCallForInviteMenu(): number;
	checkDataManagerSucceededForHandle(p0: number): number;
	filloutPmPlayerList(p1: number, p2: number): number;
	filloutPmPlayerListWithNames(p2: number, p3: number): FilloutPmPlayerListWithNamesResult;
	refreshPlayerListStats(p0: number): boolean;
	setCurrentDataManagerHandle(): number;
	isInPlatformParty(): boolean;
	getPlatformPartyUnk(): number;
	getPlatformPartyMembers(dataSize: number): NetworkGetPlatformPartyMembersResult;
	isInPlatformPartyChat(): boolean;
	isChattingInPlatformParty(): number;
	seedRandomNumberGenerator(seed: number): void;
	getRandomInt(): number;
	getRandomIntRanged(rangeStart: number, rangeEnd: number): number;
	playerIsCheater(): boolean;
	playerGetCheaterReason(): number;
	playerIsBadsport(): boolean;
	triggerScriptCrcCheckOnPlayer(player: number, p1: number, scriptHash: number): boolean;
	remoteCheatDetected(player: number, a: number, b: number): boolean;
	badSportPlayerLeftDetected(event: number, amountReceived: number): number;
	applyPedScarData(ped: number, p1: number): void;
	setThisScriptIsNetworkScript(lobbySize: number, p1: boolean, playerId: number): void;
	isThisScriptMarked(p0: number, p1: boolean, p2: number): boolean;
	getThisScriptIsNetworkScript(): boolean;
	getMaxNumParticipants(): number;
	getNumParticipants(): number;
	getScriptStatus(): number;
	registerHostBroadcastVariables(numVars: number): number;
	registerPlayerBroadcastVariables(numVars: number): number;
	finishBroadcastingData(): void;
	hasReceivedHostBroadcastData(): boolean;
	getPlayerIndex(player: number): number;
	getParticipantIndex(index: number): number;
	getPlayerIndexFromPed(ped: number): number;
	getNumConnectedPlayers(): number;
	isPlayerConnected(player: number): boolean;
	getTotalNumPlayers(): number;
	isParticipantActive(p0: number): boolean;
	isPlayerActive(player: number): boolean;
	isPlayerAParticipant(player: number): boolean;
	isHostOfThisScript(): boolean;
	getHostOfThisScript(): number;
	getHostOfScript(scriptName: string, p1: number, p2: number): number;
	setMissionFinished(): void;
	isScriptActive(scriptName: string, player: number, p2: boolean, p3: number): boolean;
	isScriptActiveByHash(scriptHash: number, p1: number, p2: boolean, p3: number): boolean;
	getNumScriptParticipants(p1: number, p2: number): NetworkGetNumScriptParticipantsResult;
	isPlayerAParticipantOnScript(player1: number, script: string, player2: number): boolean;
	participantId(): number;
	participantIdToInt(): number;
	getDestroyerOfNetworkId(netId: number): NetworkGetDestroyerOfNetworkIdResult;
	getDestroyerOfEntity(p0: number, p1: number): number;
	getEntityKillerOfPlayer(player: number): NetworkGetEntityKillerOfPlayerResult;
	resurrectLocalPlayer(x: number, y: number, z: number, heading: number, unk: boolean, changetime: boolean, p6: number): void;
	setLocalPlayerInvincibleTime(time: number): void;
	isLocalPlayerInvincible(): boolean;
	disableInvincibleFlashing(player: number, toggle: boolean): void;
	setLocalPlayerSyncLookAt(toggle: boolean): void;
	hasEntityBeenRegisteredWithThisThread(entity: number): boolean;
	getNetworkIdFromEntity(entity: number): number;
	getEntityFromNetworkId(netId: number): number;
	getEntityIsNetworked(entity: number): boolean;
	getEntityIsLocal(entity: number): boolean;
	registerEntityAsNetworked(entity: number): void;
	unregisterNetworkedEntity(entity: number): void;
	doesNetworkIdExist(netId: number): boolean;
	doesEntityExistWithNetworkId(netId: number): boolean;
	requestControlOfNetworkId(netId: number): boolean;
	hasControlOfNetworkId(netId: number): boolean;
	requestControlOfEntity(entity: number): boolean;
	requestControlOfDoor(doorID: number): boolean;
	hasControlOfEntity(entity: number): boolean;
	hasControlOfPickup(pickup: number): boolean;
	hasControlOfDoor(doorHash: number): boolean;
	isDoorNetworked(doorHash: number): boolean;
	vehToNet(vehicle: number): number;
	pedToNet(ped: number): number;
	objToNet(object: number): number;
	netToVeh(netHandle: number): number;
	netToPed(netHandle: number): number;
	netToObj(netHandle: number): number;
	netToEnt(netHandle: number): number;
	getLocalHandle(bufferSize: number): number;
	handleFromUserId(userId: string, bufferSize: number): number;
	handleFromMemberId(memberId: string, bufferSize: number): number;
	handleFromPlayer(player: number, bufferSize: number): number;
	hashFromPlayerHandle(player: number): number;
	hashFromGamerHandle(): NetworkHashFromGamerHandleResult;
	handleFromFriend(friendIndex: number, bufferSize: number): number;
	gamertagFromHandleStart(): number;
	gamertagFromHandlePending(): boolean;
	gamertagFromHandleSucceeded(): boolean;
	getGamertagFromHandle(): NetworkGetGamertagFromHandleResult;
	getDisplaynamesFromHandles(p0: number, p1: number, p2: number): number;
	areHandlesTheSame(): NetworkAreHandlesTheSameResult;
	isHandleValid(bufferSize: number): number;
	getPlayerFromGamerHandle(): NetworkGetPlayerFromGamerHandleResult;
	memberIdFromGamerHandle(): NetworkMemberIdFromGamerHandleResult;
	isGamerInMySession(): number;
	showProfileUi(): number;
	playerGetName(player: number): string;
	playerGetUserid(player: number): NetworkPlayerGetUseridResult;
	playerIsRockstarDev(player: number): boolean;
	playerIndexIsCheater(player: number): boolean;
	getEntityNetScriptId(entity: number): number;
	isInactiveProfile(): number;
	getMaxFriends(): number;
	getFriendCount(): number;
	getFriendName(friendIndex: number): string;
	getFriendNameFromIndex(friendIndex: number): string;
	isFriendOnline(name: string): boolean;
	isFriendHandleOnline(): number;
	isFriendInSameTitle(friendName: string): boolean;
	isFriendInMultiplayer(friendName: string): boolean;
	isFriend(): number;
	isPendingFriend(p0: number): number;
	isAddingFriend(): number;
	addFriend(message: string): number;
	isFriendIndexOnline(friendIndex: number): boolean;
	setPlayerIsPassive(toggle: boolean): void;
	getPlayerOwnsWaypoint(player: number): boolean;
	canSetWaypoint(): boolean;
	hasHeadset(): boolean;
	isLocalTalking(): boolean;
	gamerHasHeadset(): number;
	isGamerTalking(): number;
	canCommunicateWithGamer2(): number;
	canCommunicateWithGamer(): number;
	isGamerMutedByMe(): number;
	amIMutedByGamer(): number;
	isGamerBlockedByMe(): number;
	amIBlockedByGamer(): number;
	canViewGamerUserContent(): number;
	hasViewGamerUserContentResult(): number;
	canPlayMultiplayerWithGamer(): number;
	canGamerPlayMultiplayerWithMe(): number;
	isPlayerTalking(player: number): boolean;
	playerHasHeadset(player: number): boolean;
	isPlayerMutedByMe(player: number): boolean;
	amIMutedByPlayer(player: number): boolean;
	isPlayerBlockedByMe(player: number): boolean;
	amIBlockedByPlayer(player: number): boolean;
	getPlayerLoudness(player: number): number;
	setTalkerProximity(value: number): void;
	getTalkerProximity(): number;
	setVoiceActive(toggle: boolean): void;
	overrideTransitionChat(p0: boolean): void;
	setTeamOnlyChat(toggle: boolean): void;
	overrideTeamRestrictions(team: number, toggle: boolean): void;
	setOverrideSpectatorMode(toggle: boolean): void;
	setNoSpectatorChat(toggle: boolean): void;
	overrideChatRestrictions(player: number, toggle: boolean): void;
	overrideSendRestrictions(player: number, toggle: boolean): void;
	overrideSendRestrictionsAll(toggle: boolean): void;
	overrideReceiveRestrictions(player: number, toggle: boolean): void;
	overrideReceiveRestrictionsAll(toggle: boolean): void;
	setVoiceChannel(channel: number): void;
	clearVoiceChannel(): void;
	applyVoiceProximityOverride(x: number, y: number, z: number): void;
	clearVoiceProximityOverride(): void;
	isTextChatActive(): boolean;
	shutdownAndLaunchSinglePlayerGame(): void;
	shutdownAndLoadMostRecentSave(): boolean;
	setFriendlyFireOption(toggle: boolean): void;
	setRichPresence(p0: number, p1: number, p2: number, p3: number): void;
	setRichPresenceString(p0: number, textLabel: string): void;
	getTimeoutTime(): number;
	respawnCoords(player: number, x: number, y: number, z: number, p4: boolean, p5: boolean): void;
	removeAllStickyBombsFromEntity(entity: number, ped: number): void;
	clanServiceIsValid(): boolean;
	clanPlayerIsActive(): number;
	clanPlayerGetDesc(bufferSize: number): NetworkClanPlayerGetDescResult;
	clanIsRockstarClan(bufferSize: number): number;
	clanGetUiFormattedTag(bufferSize: number): NetworkClanGetUiFormattedTagResult;
	clanGetLocalMembershipsCount(): number;
	clanGetMembershipDesc(p1: number): number;
	clanDownloadMembership(): number;
	clanDownloadMembershipPending(): number;
	isClanMembershipFinishedDownloading(): boolean;
	clanRemoteMembershipsAreInCache(): number;
	clanGetMembershipCount(): NetworkClanGetMembershipCountResult;
	clanGetMembershipValid(p1: number): number;
	clanGetMembership(p2: number): NetworkClanGetMembershipResult;
	clanJoin(clanDesc: number): boolean;
	clanAnimation(animDict: string, animName: string): boolean;
	clanGetEmblemTxdName(): NetworkClanGetEmblemTxdNameResult;
	clanRequestEmblem(p0: number): boolean;
	clanIsEmblemReady(p0: number): number;
	clanReleaseEmblem(p0: number): void;
	getPrimaryClanDataClear(): number;
	getPrimaryClanDataCancel(): void;
	getPrimaryClanDataStart(p1: number): number;
	getPrimaryClanDataPending(): number;
	getPrimaryClanDataSuccess(): number;
	getPrimaryClanDataNew(): NetworkGetPrimaryClanDataNewResult;
	setIdCanMigrate(netId: number, toggle: boolean): void;
	setIdExistsOnAllMachines(netId: number, toggle: boolean): void;
	setIdAlwaysExistsForPlayer(netId: number, player: number, toggle: boolean): void;
	setEntityCanBlend(entity: number, toggle: boolean): void;
	setEntityInvisibleToNetwork(entity: number, toggle: boolean): void;
	setIdVisibleInCutscene(netId: number, p1: boolean, p2: boolean): void;
	setCutsceneEntities(toggle: boolean): void;
	isIdOwnedByParticipant(netId: number): boolean;
	setLocalPlayerVisibleInCutscene(p0: boolean, p1: boolean): void;
	setLocalPlayerInvisibleLocally(p0: boolean): void;
	setLocalPlayerVisibleLocally(p0: boolean): void;
	setPlayerInvisibleLocally(player: number, toggle: boolean): void;
	setPlayerVisibleLocally(player: number, toggle: boolean): void;
	fadeOutLocalPlayer(p0: boolean): void;
	fadeOutEntity(entity: number, normal: boolean, slow: boolean): void;
	fadeInEntity(entity: number, state: boolean, p2: number): void;
	isPlayerFading(player: number): boolean;
	isEntityFading(entity: number): boolean;
	isPlayerInCutscene(player: number): boolean;
	setEntityVisibleInCutscene(p0: number, p1: boolean, p2: boolean): void;
	setEntityLocallyInvisible(entity: number): void;
	setEntityLocallyVisible(entity: number): void;
	isDamageTrackerActiveOnId(netID: number): boolean;
	activateDamageTrackerOnId(netID: number, toggle: boolean): void;
	isDamageTrackerActiveOnPlayer(player: number): boolean;
	activateDamageTrackerOnPlayer(player: number, toggle: boolean): void;
	isSphereVisibleToAnotherMachine(p0: number, p1: number, p2: number, p3: number): boolean;
	isSphereVisibleToPlayer(p0: number, p1: number, p2: number, p3: number, p4: number): boolean;
	reserveMissionObjects(amount: number): void;
	reserveMissionPeds(amount: number): void;
	reserveMissionVehicles(amount: number): void;
	reserveLocalObjects(amount: number): void;
	reserveLocalPeds(amount: number): void;
	reserveLocalVehicles(amount: number): void;
	canRegisterMissionObjects(amount: number): boolean;
	canRegisterMissionPeds(amount: number): boolean;
	canRegisterMissionVehicles(amount: number): boolean;
	canRegisterMissionPickups(amount: number): boolean;
	canRegisterMissionEntities(ped_amt: number, vehicle_amt: number, object_amt: number, pickup_amt: number): boolean;
	getNumReservedMissionObjects(p0: boolean, p1: number): number;
	getNumReservedMissionPeds(p0: boolean, p1: number): number;
	getNumReservedMissionVehicles(p0: boolean, p1: number): number;
	getNumCreatedMissionObjects(p0: boolean): number;
	getNumCreatedMissionPeds(p0: boolean): number;
	getNumCreatedMissionVehicles(p0: boolean): number;
	getMaxNumObjects(): number;
	getMaxNumPeds(): number;
	getMaxNumVehicles(): number;
	getMaxNumPickups(): number;
	getTime(): number;
	getTimeAccurate(): number;
	hasTimeStarted(): boolean;
	getTimeOffset(timeA: number, timeB: number): number;
	isTimeLessThan(timeA: number, timeB: number): boolean;
	isTimeMoreThan(timeA: number, timeB: number): boolean;
	isTimeEqualTo(timeA: number, timeB: number): boolean;
	getTimeDifference(timeA: number, timeB: number): number;
	getTimeAsString(time: number): string;
	getCloudTimeAsString(): string;
	getCloudTimeAsInt(): number;
	convertPosixTime(posixTime: number): number;
	setInSpectatorMode(toggle: boolean, playerPed: number): void;
	setInSpectatorModeExtended(toggle: boolean, playerPed: number, p2: boolean): void;
	setInFreeCamMode(toggle: boolean): void;
	setChoiceMigrateOptions(toggle: boolean, player: number): void;
	isInSpectatorMode(): boolean;
	setInMpCutscene(p0: boolean, p1: boolean): void;
	isInMpCutscene(): boolean;
	isPlayerInMpCutscene(player: number): boolean;
	setVehicleRespotTimer(netId: number, time: number, p2: number, p3: number): void;
	setVehicleAsGhost(vehicle: number, toggle: boolean): void;
	setLocalPlayerAsGhost(toggle: boolean, p1: boolean): void;
	isEntityGhostedToLocalPlayer(entity: number): boolean;
	setRelationshipToPlayer(player: number, p1: boolean): void;
	setGhostedEntityAlpha(alpha: number): void;
	resetGhostedEntityAlpha(): void;
	setEntityGhostedWithOwner(entity: number, p1: boolean): void;
	usePlayerColourInsteadOfTeamColour(toggle: boolean): void;
	createSynchronisedScene(
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		rotationOrder: number,
		useOcclusionPortal: boolean,
		looped: boolean,
		p9: number,
		animTime: number,
		p11: number
	): number;
	addPedToSynchronisedScene(
		ped: number,
		netScene: number,
		animDict: string,
		animnName: string,
		speed: number,
		speedMultiplier: number,
		duration: number,
		flag: number,
		playbackRate: number,
		p9: number
	): void;
	addEntityToSynchronisedScene(
		entity: number,
		netScene: number,
		animDict: string,
		animName: string,
		speed: number,
		speedMulitiplier: number,
		flag: number
	): void;
	forceLocalUseOfSyncedSceneCamera(netScene: number, animDict: string, animName: string): void;
	attachSynchronisedSceneToEntity(netScene: number, entity: number, bone: number): void;
	startSynchronisedScene(netScene: number): void;
	stopSynchronisedScene(netScene: number): void;
	convertSynchronisedSceneToSynchronizedScene(netScene: number): number;
	startRespawnSearchForPlayer(
		player: number,
		x: number,
		y: number,
		z: number,
		radius: number,
		p5: number,
		p6: number,
		p7: number,
		flags: number
	): boolean;
	startRespawnSearchInAngledAreaForPlayer(
		player: number,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		p8: number,
		p9: number,
		p10: number,
		flags: number
	): boolean;
	queryRespawnResults(): NetworkQueryRespawnResultsResult;
	cancelRespawnSearch(): void;
	getRespawnResult(randomInt: number): NetworkGetRespawnResultResult;
	getRespawnResultFlags(p0: number): number;
	startSoloTutorialSession(): void;
	endTutorialSession(): void;
	isInTutorialSession(): boolean;
	isTutorialSessionChangePending(): boolean;
	getPlayerTutorialSessionInstance(player: number): number;
	isPlayerEqualToIndex(player: number, index: number): boolean;
	concealPlayer(player: number, toggle: boolean, p2: boolean): void;
	isPlayerConcealed(player: number): boolean;
	concealEntity(entity: number, toggle: boolean): void;
	isEntityConcealed(entity: number): boolean;
	overrideClockTime(hours: number, minutes: number, seconds: number): void;
	overrideClockMillisecondsPerGameMinute(ms: number): void;
	clearClockTimeOverride(): void;
	isClockTimeOverridden(): boolean;
	addEntityArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;
	addEntityAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): number;
	addEntityDisplayedBoundaries(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;
	removeEntityArea(p0: number): boolean;
	entityAreaDoesExist(areaHandle: number): boolean;
	entityAreaIsOccupied(areaHandle: number): boolean;
	setNetworkIdDynamic(netID: number, toggle: boolean): void;
	requestCloudBackgroundScripts(): boolean;
	isCloudBackgroundScriptRequestPending(): boolean;
	requestCloudTunables(): void;
	isTunableCloudRequestPending(): boolean;
	getTunableCloudCrc(): number;
	doesTunableExist(tunableContext: string, tunableName: string): boolean;
	accessTunableInt(tunableContext: string, tunableName: string): number;
	accessTunableFloat(tunableContext: string, tunableName: string): number;
	accessTunableBool(tunableContext: string, tunableName: string): boolean;
	doesTunableExistHash(tunableContext: number, tunableName: number): boolean;
	allocateTunablesRegistrationDataMap(): boolean;
	accessTunableIntHash(tunableContext: number, tunableName: number): number;
	registerTunableIntHash(contextHash: number, nameHash: number): number;
	accessTunableFloatHash(tunableContext: number, tunableName: number): number;
	registerTunableFloatHash(contextHash: number, nameHash: number): number;
	accessTunableBoolHash(tunableContext: number, tunableName: number): boolean;
	registerTunableBoolHash(contextHash: number, nameHash: number): boolean;
	tryAccessTunableBoolHash(tunableContext: number, tunableName: number, defaultValue: boolean): boolean;
	getContentModifierListId(contentHash: number): number;
	resetBodyTracker(): void;
	getNumBodyTrackers(): number;
	setVehicleWheelsDestructible(entity: number, toggle: boolean): void;
	explodeVehicle(vehicle: number, isAudible: boolean, isInvisible: boolean, p3: boolean): void;
	overrideCoordsAndHeading(entity: number, x: number, y: number, z: number, heading: number): void;
	disableProximityMigration(netID: number): void;
	setPropertyId(id: number): void;
	clearPropertyId(): void;
	cacheLocalPlayerHeadBlendData(): void;
	hasCachedPlayerHeadBlendData(player: number): boolean;
	applyCachedPlayerHeadBlendData(ped: number, player: number): boolean;
	getNumCommerceItems(): number;
	isCommerceDataValid(): boolean;
	getCommerceItemId(index: number): string;
	getCommerceItemName(index: number): string;
	getCommerceProductPrice(index: number): string;
	getCommerceItemNumCats(index: number): number;
	getCommerceItemCat(index: number, index2: number): string;
	openCommerceStore(p0: string, p1: string, p2: number): void;
	isCommerceStoreOpen(): boolean;
	setStoreEnabled(toggle: boolean): void;
	requestCommerceItemImage(index: number): boolean;
	releaseAllCommerceItemImages(): void;
	getCommerceItemTexturename(index: number): string;
	isStoreAvailableToUser(): boolean;
	cloudDeleteMemberFile(p0: string): number;
	cloudHasRequestCompleted(handle: number): boolean;
	cloudDidRequestSucceed(handle: number): boolean;
	cloudCheckAvailability(): void;
	cloudIsCheckingAvailability(): boolean;
	cloudGetAvailabilityCheckResult(): boolean;
	clearLaunchParams(): void;
	ugcCopyContent(): UgcCopyContentResult;
	ugcHasCreateFinished(): boolean;
	ugcGetCreateResult(): number;
	ugcGetCreateContentId(): number;
	ugcClearCreateResult(): void;
	ugcQueryMyContent(p0: number, p1: number, p3: number, p4: number, p5: number): number;
	ugcQueryByContentId(contentId: string, latestVersion: boolean, contentTypeName: string): boolean;
	ugcQueryByContentIds(count: number, latestVersion: boolean, contentTypeName: string): number;
	ugcQueryRecentlyCreatedContent(offset: number, count: number, contentTypeName: string, p3: number): boolean;
	ugcGetBookmarkedContent(p0: number, p1: number): UgcGetBookmarkedContentResult;
	ugcGetMyContent(p0: number, p1: number): UgcGetMyContentResult;
	ugcGetFriendContent(p0: number, p1: number): UgcGetFriendContentResult;
	ugcGetCrewContent(p0: number, p1: number, p2: number): UgcGetCrewContentResult;
	ugcGetGetByCategory(p0: number, p1: number, p2: number): UgcGetGetByCategoryResult;
	setBalanceAddMachine(contentId: string, contentTypeName: string): boolean;
	setBalanceAddMachines(dataCount: number, contentTypeName: string): number;
	ugcCancelQuery(): void;
	ugcIsGetting(): boolean;
	ugcHasGetFinished(): boolean;
	ugcDidGetSucceed(): number;
	ugcGetQueryResult(): number;
	ugcGetContentNum(): number;
	ugcGetContentTotal(): number;
	ugcGetContentHash(): number;
	ugcClearQueryResults(): void;
	ugcGetContentUserId(p0: number): string;
	ugcGetContentUserName(p0: number): number;
	ugcGetContentCategory(p0: number): number;
	ugcGetContentId(p0: number): string;
	ugcGetRootContentId(p0: number): string;
	ugcGetContentName(p0: number): number;
	ugcGetContentDescriptionHash(p0: number): number;
	ugcGetContentPath(p0: number, p1: number): string;
	ugcGetContentUpdatedDate(p0: number): number;
	ugcGetContentFileVersion(p0: number, p1: number): number;
	ugcGetContentLanguage(p0: number): number;
	ugcGetContentIsPublished(p0: number): boolean;
	ugcGetContentIsVerified(p0: number): boolean;
	ugcGetContentRating(p0: number, p1: number): number;
	ugcGetContentRatingCount(p0: number, p1: number): number;
	ugcGetContentRatingPositiveCount(p0: number, p1: number): number;
	ugcGetContentRatingNegativeCount(p0: number, p1: number): number;
	ugcGetContentHasPlayerRecord(p0: number): boolean;
	ugcGetContentHasPlayerBookmarked(p0: number): boolean;
	ugcRequestContentDataFromIndex(p0: number, p1: number): number;
	ugcRequestContentDataFromParams(contentTypeName: string, contentId: string, p2: number, p3: number, p4: number): number;
	ugcRequestCachedDescription(p0: number): number;
	ugcGetCachedDescription(p0: number, p1: number): number;
	ugcPublish(contentId: string, baseContentId: string, contentTypeName: string): boolean;
	ugcSetBookmarked(contentId: string, bookmarked: boolean, contentTypeName: string): boolean;
	ugcSetDeleted(p1: boolean): UgcSetDeletedResult;
	ugcHasModifyFinished(): boolean;
	ugcGetModifyResult(): number;
	ugcClearModifyResult(): void;
	ugcGetCreatorNum(): number;
	ugcPoliciesMakePrivate(p0: number): boolean;
	ugcClearOfflineQuery(): void;
	ugcSetQueryDataFromOffline(p0: boolean): void;
	ugcIsLanguageSupported(p0: number): boolean;
	facebookSetHeistComplete(heistName: string, cashEarned: number, xpEarned: number): boolean;
	facebookSetCreateCharacterComplete(): boolean;
	facebookSetMilestoneComplete(milestoneId: number): boolean;
	facebookIsSendingData(): boolean;
	facebookDoUnkCheck(): boolean;
	facebookIsAvailable(): boolean;
	textureDownloadRequest(FilePath: string, Name: string, p3: boolean): TextureDownloadRequestResult;
	titleTextureDownloadRequest(FilePath: string, Name: string, p2: boolean): number;
	ugcTextureDownloadRequest(p1: number, p2: number, p3: number, p5: boolean): UgcTextureDownloadRequestResult;
	textureDownloadRelease(p0: number): void;
	textureDownloadHasFailed(p0: number): boolean;
	textureDownloadGetName(p0: number): string;
	getStatusOfTextureDownload(p0: number): number;
	shouldShowConnectivityTroubleshooting(): boolean;
	isCableConnected(): boolean;
	getRosPrivilege9(): boolean;
	haveRosSocialClubPriv(): boolean;
	haveRosBannedPriv(): boolean;
	haveRosCreateTicketPriv(): boolean;
	haveRosMultiplayerPriv(): boolean;
	haveRosLeaderboardWritePriv(): boolean;
	hasRosPrivilege(index: number): boolean;
	hasRosPrivilegeEndDate(privilege: number): NetworkHasRosPrivilegeEndDateResult;
	getRosPrivilege24(): boolean;
	getRosPrivilege25(): boolean;
	startUserContentPermissionsCheck(): NetworkStartUserContentPermissionsCheckResult;
	hasGameBeenAltered(): boolean;
	updatePlayerScars(): void;
	disableLeaveRemotePedBehind(toggle: boolean): void;
	allowLocalEntityAttachment(entity: number, toggle: boolean): void;
	getNumUnackedForPlayer(player: number): number;
	getUnreliableResendCountForPlayer(player: number): number;
	getOldestResendCountForPlayer(player: number): number;
	reportMyself(): void;
	getPlayerCoords(player: number): Vector3;

	unk: GameNetworkUnk;
}

declare interface GameNetworkMp extends GameNetwork {}
