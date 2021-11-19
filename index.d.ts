/// <reference types="@ragemp/types-shared"/>

declare module 'rage-client' {
	import * as shared from 'rage-shared';

	export interface Mp {
		Vector3: typeof shared.Vector3;
	}

	const mp: Mp;

	export default mp;

	export * from 'rage-shared';
}
