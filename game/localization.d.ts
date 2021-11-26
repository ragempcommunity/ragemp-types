declare interface GameLocalization {
	getSystemLanguage(): number;
	getCurrentLanguage(): number;
	getSystemDateFormat(): number;
}

declare interface GameLocalizationMp extends GameLocalization {}
