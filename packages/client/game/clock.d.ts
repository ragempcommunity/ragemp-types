declare interface GetUtcTimeResult {
	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
	second: number;
}

declare interface GetPosixTimeResult {
	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
	second: number;
}

declare interface GetLocalTimeResult {
	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
	second: number;
}

declare interface GameClockLegacy {
	setClockTime(hour: number, minute: number, second: number): void;
	pauseClock(toggle: boolean): void;
	advanceClockTimeTo(hour: number, minute: number, second: number): void;
	addToClockTime(hours: number, minutes: number, seconds: number): void;
	setClockDate(day: number, month: number, year: number): void;
	getLocalTimeGmt(): GetUtcTimeResult;
}

declare interface GameClock extends GameClockLegacy {
	setTime(hour: number, minute: number, second: number): void;
	pause(toggle: boolean): void;
	advanceTimeTo(hour: number, minute: number, second: number): void;
	addToTime(hours: number, minutes: number, seconds: number): void;
	getHours(): number;
	getMinutes(): number;
	getSeconds(): number;
	setDate(day: number, month: number, year: number): void;
	getDayOfWeek(): number;
	getDayOfMonth(): number;
	getMonth(): number;
	getYear(): number;
	getMillisecondsPerGameMinute(): number;
	getPosixTime(): GetPosixTimeResult;
	getUtcTime(): GetUtcTimeResult;
	getLocalTime(): GetLocalTimeResult;
}

declare interface GameClockMp extends GameClock {}
