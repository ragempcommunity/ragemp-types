declare module 'rage-server' {
	export interface Mp {
		joaat(str: string | string[]): number | number[];
	}

	const mp: Mp;

	export default mp;
}
