interface Mp {
	events: EventMpPool;

	trigger(name: string, ...args: any[]): void;
	invoke(name: string, ...args: any[]): void;
}

interface EventMpPool {
	/**
	 * This function calls registered Remote Prodecure Call (RPC) from browser to client-side and expects a callback.
	 *
	 * @param eventName Client name event you want to call.
	 * @param args Data you want to send to client.
	 * @returns Returns a promise
	 *
	 * @example
	 * ```js
	 * mp.events.callProc('test_proc', 'test');
	 * ```
	 *
	 *
	 */
	callProc<T, K>(eventName: string, args: K): Promise<T>;
}

interface Window {
	mp: Mp;
}

declare var mp: Mp;
