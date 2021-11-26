declare namespace RageEnums.Console {
	/** [https://wiki.rage.mp/index.php?title=Console::verbosity](https://wiki.rage.mp/index.php?title=Console::verbosity) */
	export const enum Verbosity {
		ERROR = 'error',
		FATAL = 'fatal',
		INFO = 'info',
		WARNING = 'warning'
	}
}

declare namespace RageEnums {
	export import ConsoleVerbosity = RageEnums.Console.Verbosity;
}
