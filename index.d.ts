interface Mp {
	trigger(name: string, ...args: any[]): void;
	invoke(name: string, ...args: any[]): void;
}

interface Window {
	mp: Mp;
}

declare var mp: Mp;
