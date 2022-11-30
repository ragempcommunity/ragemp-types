declare interface InterruptConversationResult {
	p1: number;
	p2: number;
}

declare interface GameAudioLegacy {
	registerScriptWithAudio(p0: number): void;
	requestMissionAudioBank(p0: string, p1: boolean, p2: number): boolean;
	requestAmbientAudioBank(p0: string, p1: boolean, p2: number): boolean;
	requestScriptAudioBank(p0: string, p1: boolean, p2: number): boolean;
	hintAmbientAudioBank(p0: number, p1: number, p2: number): number;
	hintScriptAudioBank(p0: number, p1: number, p2: number): number;
	releaseNamedScriptAudioBank(audioBank: string): void;
	playAmbientSpeechWithVoice(ped: number, speechName: string, voiceName: string, speechParam: string, p4: boolean): void;
	playAmbientSpeechAtCoords(speechName: string, voiceName: string, x: number, y: number, z: number, speechParam: string): void;
	getNumberOfPassengerVoiceVariations(newsStory: number): boolean;
	setCutsceneAudioOverride(name: string): void;
	getPlayerHeadsetSoundAlternate(variableName: string, value: number): void;
	specialFrontendEqual(x: number, y: number, z: number): void;
	playMissionCompleteAudio(audioName: string): void;
	startAudioScene(scene: string): boolean;
	stopAudioScene(scene: string): void;
	isAudioSceneActive(scene: string): boolean;
	setAudioSceneVariable(scene: string, variable: string, value: number): void;
	resetPedAudioFlags(ped: number): void;
	setAudioFlag(flagName: string, toggle: boolean): void;
	prepareSynchronizedAudioEvent(p0: string, p1: number): number;
	prepareSynchronizedAudioEventForScene(p0: number): number;
	playSynchronizedAudioEvent(p0: number): boolean;
	stopSynchronizedAudioEvent(p0: number): boolean;
	setSynchronizedAudioEventPositionThisFrame(p0: string, p1: number): void;
}

declare interface _0xAA19F5572C38B564Result {
	p0: number;
	result: number;
}

declare interface _0xC64A06D939F826F5Result {
	p0: number;
	p1: number;
	p2: number;
	result: boolean;
}

declare interface GameAudioUnk {
	_0xC8B1B2425604CDD0(): boolean;
	_0x33E3C6C6F2F0B506(p0: number, p1: number, p2: number, p3: number): void;
	_0x892B6AB8F33606F5(p0: number, entity: number): void;
	_0x0B568201DD99F0EB(p0: boolean): void;
	_0x61631F5DF50D1C34(p0: boolean): void;
	_0xAA19F5572C38B564(): _0xAA19F5572C38B564Result;
	_0xB542DE8C3D1CB210(p0: boolean): void;
	_0x40763EA7B9B783E7(p0: number, p1: number, p2: number): number;
	_0x19AF7ED9B9D23058(): void;
	_0x9AC92EED5E4793AB(): void;
	_0x11579D940949C49E(p0: number): void;
	_0x5B9853296731E88D(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	_0x7EC3C679D0E7E46B(p0: number, p1: number, p2: number, p3: number): void;
	_0x1B7ABE26CBCBF8C7(ped: number, p1: number, p2: number): void;
	_0x30CA2EF91D15ADF8(): number;
	_0xFF266D1D0EB1195D(): void;
	_0xDD6BCF9E94425DF9(): void;
	_0x0BE4BE946463F917(vehicle: number): boolean;
	_0xC1805D05E6D4FE10(vehicle: number): void;
	_0x55ECF4D13D9903B0(p0: number, p1: number, p2: number, p3: number): void;
	_0xDA07819E452FFE8F(p0: number): void;
	_0xC64A06D939F826F5(): _0xC64A06D939F826F5Result;
	_0x34D66BC058019CE0(radioStationName: string): number;
	_0xF3365489E0DD50F9(vehicle: number, toggle: boolean): void;
	_0x5D2BFAAB8D956E0E(): void;
	_0x02E93C796ABD3A97(p0: boolean): void;
	_0x58BB377BEC7CD5F4(p0: boolean, p1: boolean): void;
	_0x9BD7BD55E4533183(p0: number, p1: number, p2: number): void;
	_0xF8AD2EED7C47E8FE(ped: number, p1: boolean, p2: boolean): void;
	_0xAB6781A5F3101470(p0: number, p1: number): void;
	_0xA8A7D434AFB4B97B(p0: string, p1: number): void;
	_0x2ACABED337622DF2(p0: string): void;
	_0x9D3AF56E94C9AE98(vehicle: number, p1: number): void;
	_0xF1F8157B8C3F171C(vehicle: number, p1: string, p2: string): void;
	_0xD2DCCD8E16E20997(p0: number): void;
	_0x5DB8010EE71FDEF2(vehicle: number): boolean;
	_0x1C073274E065C6D2(vehicle: number, toggle: boolean): void;
	_0x6FDDAD856E36988A(vehicle: number, toggle: boolean): void;
	_0x2DD39BF3E2F9C47F(): number;
	_0x159B7318403A1CD8(p0: number): void;
	_0x70B8EC8FC108A634(p0: boolean, p1: number): void;
	_0x149AEE66F0CB3A99(p0: number, p1: number): void;
	_0x8BF907833BE275DE(p0: number, p1: number): void;
	_0x062D5EAD4DA2FA6A(): void;
	_0xBF4DC1784BE94DFA(ped: number, p1: boolean, hash: number): void;
	_0x43FA0DFC5DF87815(vehicle: number, p1: boolean): void;
	_0xB81CF134AEB56FFB(): void;
	_0xC8EDE9BDBCCBA6D4(p1: number, p2: number, p3: number): number;
	_0xE4E6DD5566D28C82(): void;
	_0x3A48AB4445D499BE(): number;
	_0x0150B6FF25A9E2E5(): void;
	_0xBEF34B1D9624D5DD(p0: boolean): void;
}

declare interface GameAudio extends GameAudioLegacy {
	playPedRingtone(ringtoneName: string, ped: number, p2: boolean): void;
	isPedRingtonePlaying(ped: number): boolean;
	stopPedRingtone(ped: number): void;
	isMobilePhoneCallOngoing(): boolean;
	createNewScriptedConversation(): void;
	addLineToConversation(
		index: number,
		p1: string,
		p2: string,
		p3: number,
		p4: number,
		p5: boolean,
		p6: boolean,
		p7: boolean,
		p8: boolean,
		p9: number,
		p10: boolean,
		p11: boolean,
		p12: boolean
	): void;
	addPedToConversation(index: number, ped: number, p2: string): void;
	setMicrophonePosition(
		p0: boolean,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number
	): void;
	startScriptPhoneConversation(p0: boolean, p1: boolean): void;
	preloadScriptPhoneConversation(p0: boolean, p1: boolean): void;
	startScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	preloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	startPreloadedConversation(): void;
	getIsPreloadedConversationReady(): boolean;
	isScriptedConversationOngoing(): boolean;
	isScriptedConversationLoaded(): boolean;
	getCurrentScriptedConversationLine(): number;
	pauseScriptedConversation(p0: boolean): void;
	restartScriptedConversation(): void;
	stopScriptedConversation(p0: boolean): number;
	skipToNextScriptedConversationLine(): void;
	interruptConversation(p0: number): InterruptConversationResult;
	interruptConversationAndPause(ped: number, p1: string, p2: string): void;
	registerScriptWith(p0: number): void;
	unregisterScriptWith(): void;
	requestMissionBank(p0: string, p1: boolean, p2: number): boolean;
	requestAmbientBank(p0: string, p1: boolean, p2: number): boolean;
	requestScriptBank(p0: string, p1: boolean, p2: number): boolean;
	hintAmbientBank(p0: number, p1: number, p2: number): number;
	hintScriptBank(p0: number, p1: number, p2: number): number;
	releaseMissionBank(): void;
	releaseAmbientBank(): void;
	releaseNamedScriptBank(audioBank: string): void;
	releaseScriptBank(): void;
	getSoundId(): number;
	releaseSoundId(soundId: number): void;
	playSound(soundId: number, audioName: string, audioRef: string, p3: boolean, p4: number, p5: boolean): void;
	playSoundHash(soundId: number, audioNameHash: number, audioRef: string, p3: boolean, p4: number, p5: boolean): void;
	playSoundFrontend(soundId: number, audioName: string, audioRef: string, p3: boolean): void;
	playDeferredSoundFrontend(soundName: string, soundsetName: string): void;
	playSoundFromEntity(soundId: number, audioName: string, entity: number, audioRef: string, isNetwork: boolean, p5: number): void;
	playSoundFromCoord(
		soundId: number,
		audioName: string,
		x: number,
		y: number,
		z: number,
		audioRef: string,
		isNetwork: boolean,
		range: number,
		p8: boolean
	): void;
	stopSound(soundId: number): void;
	getNetworkIdFromSoundId(soundId: number): number;
	getSoundIdFromNetworkId(netId: number): number;
	setVariableOnSound(soundId: number, p2: number): number;
	setVariableOnStream(p0: string, p1: number): void;
	overrideUnderwaterStream(p1: boolean): number;
	setVariableOnUnderWaterStream(variableName: string, value: number): void;
	hasSoundFinished(soundId: number): boolean;
	playPedAmbientSpeechNative(ped: number, speechName: string, speechParam: string, p3: number): void;
	playPedAmbientSpeechAndCloneNative(ped: number, speechName: string, speechParam: string, p3: number): void;
	playPedAmbientSpeechWithVoiceNative(ped: number, speechName: string, voiceName: string, speechParam: string, p4: boolean): void;
	playAmbientSpeechFromPositionNative(speechName: string, voiceName: string, x: number, y: number, z: number, speechParam: string): void;
	overrideTrevorRage(voiceEffect: string): void;
	resetTrevorRage(): void;
	setPlayerAngry(ped: number, toggle: boolean): void;
	playPain(ped: number, painID: number, p1: number, p3: number): void;
	releaseWeapon(): void;
	activateSlowmoMode(p0: string): void;
	deactivateSlowmoMode(p0: string): void;
	setAmbientVoiceName(ped: number, name: string): void;
	setAmbientVoiceNameHash(ped: number, hash: number): void;
	getAmbientVoiceNameHash(ped: number): number;
	setPedScream(ped: number): void;
	setPedVoiceGroup(ped: number, voiceGroupHash: number): void;
	setPedGender(ped: number, p1: boolean): void;
	stopCurrentPlayingSpeech(ped: number): void;
	stopCurrentPlayingAmbientSpeech(ped: number): void;
	isAmbientSpeechPlaying(ped: number): boolean;
	isScriptedSpeechPlaying(p0: number): boolean;
	isAnySpeechPlaying(ped: number): boolean;
	canPedSpeak(ped: number, speechName: string, unk: boolean): boolean;
	isPedInCurrentConversation(ped: number): boolean;
	setPedIsDrunk(ped: number, toggle: boolean): void;
	playAnimalVocalization(pedHandle: number, p1: number, speechName: string): void;
	isAnimalVocalizationPlaying(pedHandle: number): boolean;
	setAnimalMood(animal: number, mood: number): void;
	isMobilePhoneRadioActive(): boolean;
	setMobilePhoneRadioState(state: boolean): void;
	getPlayerRadioStationIndex(): number;
	getPlayerRadioStationName(): string;
	getRadioStationName(radioStation: number): string;
	getPlayerRadioStationGenre(): number;
	isRadioRetuning(): boolean;
	isRadioFadedOut(): boolean;
	setRadioToStationName(stationName: string): void;
	setVehRadioStation(vehicle: number, radioStation: string): void;
	setEmitterRadioStation(emitterName: string, radioStation: string): void;
	setStaticEmitterEnabled(emitterName: string, toggle: boolean): void;
	linkStaticEmitterToEntity(emitterName: string, entity: number): void;
	setRadioToStationIndex(radioStation: number): void;
	setFrontendRadioActive(active: boolean): void;
	unlockMissionNewsStory(newsStory: number): void;
	isMissionNewsStoryUnlocked(newsStory: number): boolean;
	getAudibleMusicTrackTextId(): number;
	playEndCreditsMusic(play: boolean): void;
	skipRadioForward(): void;
	freezeRadioStation(radioStation: string): void;
	unfreezeRadioStation(radioStation: string): void;
	setRadioAutoUnfreeze(toggle: boolean): void;
	setInitialPlayerStation(radioStation: string): void;
	setUserRadioControlEnabled(toggle: boolean): void;
	setRadioTrack(radioStation: string, radioTrack: string): void;
	setRadioTrackMix(radioStationName: string, mixName: string, p2: number): void;
	setVehicleRadioLoud(vehicle: number, toggle: boolean): void;
	isVehicleRadioLoud(vehicle: number): boolean;
	setMobileRadioEnabledDuringGameplay(toggle: boolean): void;
	doesPlayerVehHaveRadio(): boolean;
	isPlayerVehRadioEnable(): boolean;
	setVehicleRadioEnabled(vehicle: number, toggle: boolean): void;
	setCustomRadioTrackList(radioStation: string, trackListName: string, p2: boolean): void;
	clearCustomRadioTrackList(radioStation: string): void;
	getNumUnlockedRadioStations(): number;
	findRadioStationIndex(station: number): number;
	setRadioStationMusicOnly(radioStation: string, toggle: boolean): void;
	setRadioFrontendFadeTime(fadeTime: number): void;
	unlockRadioStationTrackList(radioStation: string, trackListName: string): void;
	updateLsur(enableMixes: boolean): void;
	lockRadioStation(radioStationName: string, toggle: boolean): void;
	getCurrentRadioStationHash(radioStationName: string): number;
	setAmbientZoneState(zoneName: string, p1: boolean, p2: boolean): void;
	clearAmbientZoneState(zoneName: string, p1: boolean): void;
	setAmbientZoneListState(p1: boolean, p2: boolean): number;
	clearAmbientZoneListState(p1: boolean): number;
	setAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
	setAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
	isAmbientZoneEnabled(ambientZone: string): boolean;
	setCutsceneOverride(name: string): void;
	setVariableOnCutscene(variableName: string, value: number): void;
	playPoliceReport(name: string, p1: number): number;
	cancelCurrentPoliceReport(): void;
	blipSiren(vehicle: number): void;
	overrideVehHorn(vehicle: number, override: boolean, hornHash: number): void;
	isHornActive(vehicle: number): boolean;
	setAggressiveHorns(toggle: boolean): void;
	isStreamPlaying(): boolean;
	getStreamPlayTime(): number;
	loadStream(streamName: string, soundSet: string): boolean;
	loadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): boolean;
	playStreamFromPed(ped: number): void;
	playStreamFromVehicle(vehicle: number): void;
	playStreamFromObject(object: number): void;
	playStreamFrontend(): void;
	playStreamFromPosition(x: number, y: number, z: number): void;
	stopStream(): void;
	stopPedSpeaking(ped: number, shaking: boolean): void;
	disablePedPain(ped: number, toggle: boolean): void;
	isAmbientSpeechDisabled(ped: number): boolean;
	setSirenWithNoDriver(vehicle: number, toggle: boolean): void;
	triggerSiren(vehicle: number): void;
	soundVehicleHornThisFrame(vehicle: number): void;
	setHornEnabled(vehicle: number, toggle: boolean): void;
	setVehiclePriority(vehicle: number, p1: number): void;
	useSirenAsHorn(vehicle: number, toggle: boolean): void;
	forceVehicleEngine(vehicle: number, audioName: string): void;
	preloadVehicle(vehicleModel: number): void;
	setVehicleEngineDamageFactor(vehicle: number, damageFactor: number): void;
	setVehicleBodyDamageFactor(vehicle: number, p1: number): void;
	enableVehicleExhaustPops(vehicle: number, toggle: boolean): void;
	setVehicleBoostActive(vehicle: number, toggle: boolean): void;
	setScriptUpdateDoor(doorHash: number, toggle: boolean): void;
	playVehicleDoorOpenSound(vehicle: number, doorIndex: number): void;
	playVehicleDoorCloseSound(vehicle: number, doorIndex: number): void;
	enableStallWarningSounds(vehicle: number, toggle: boolean): void;
	isGameInControlOfMusic(): boolean;
	setGpsActive(active: boolean): void;
	playMissionComplete(audioName: string): void;
	isMissionCompletePlaying(): boolean;
	isMissionCompleteReadyForUi(): boolean;
	blockDeathJingle(toggle: boolean): void;
	startScene(scene: string): boolean;
	stopScene(scene: string): void;
	stopScenes(): void;
	isSceneActive(scene: string): boolean;
	setSceneVariable(scene: string, variable: string, value: number): void;
	setScriptCleanupTime(time: number): void;
	addEntityToMixGroup(entity: number, groupName: string, p2: number): void;
	removeEntityFromMixGroup(entity: number, p1: number): void;
	isScriptedMusicPlaying(): boolean;
	prepareMusicEvent(eventName: string): boolean;
	cancelMusicEvent(eventName: string): boolean;
	triggerMusicEvent(eventName: string): boolean;
	isMusicOneshotPlaying(): boolean;
	getMusicPlaytime(): number;
	recordBrokenGlass(x: number, y: number, z: number, radius: number): void;
	clearAllBrokenGlass(): void;
	prepareAlarm(alarmName: string): boolean;
	startAlarm(alarmName: string, p2: boolean): void;
	stopAlarm(alarmName: string, toggle: boolean): void;
	stopAllAlarms(stop: boolean): void;
	isAlarmPlaying(alarmName: string): boolean;
	getVehicleDefaultHorn(vehicle: number): number;
	getVehicleDefaultHornIgnoreMods(vehicle: number): number;
	resetPedFlags(ped: number): void;
	setPedFootstepLoud(ped: number, toggle: boolean): void;
	setPedFootstepQuiet(ped: number, toggle: boolean): void;
	overridePlayerGroundMaterial(hash: number, toggle: boolean): void;
	overrideMicrophoneSettings(hash: number, toggle: boolean): void;
	freezeMicrophone(): void;
	distantCopCarSirens(value: boolean): void;
	setFlag(flagName: string, toggle: boolean): void;
	prepareSynchronizedEvent(p0: string, p1: number): number;
	prepareSynchronizedEventForScene(p0: number): number;
	playSynchronizedEvent(p0: number): boolean;
	stopSynchronizedEvent(p0: number): boolean;
	setSynchronizedEventPositionThisFrame(p0: string, p1: number): void;
	setSpecialEffectMode(mode: number): void;
	setPortalSettingsOverride(p0: string, p1: string): void;
	removePortalSettingsOverride(p0: string): void;
	setPedTalk(ped: number): void;
	stopCutscene(): void;
	hasMultiplayerDataLoaded(): boolean;
	hasMultiplayerDataUnloaded(): boolean;
	getVehicleDefaultHornVariation(vehicle: number): number;
	setVehicleHornVariation(vehicle: number, value: number): void;

	unk: GameAudioUnk;
}

declare interface GameAudioMp extends GameAudio {}
