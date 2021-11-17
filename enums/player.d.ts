declare module 'rage-server' {
	export type PlayerWeaponCollection = {
		current: number;
		reset(): void;
	};

	export const enum HeadOverlay {
		BLEMISHES = 0,
		FACIAL_HAIR = 1,
		EYEBROWS = 2,
		AGEING = 3,
		MAKEUP = 4,
		BLUSH = 5,
		COMPLEXION = 6,
		SUN_DAMAGE = 7,
		LIPSTICK = 8,
		FRECKLES = 9,
		CHEST_HAIR = 10,
		BODY_BLEMISHES = 11,
		ADD_BODY_BLEMISHES = 12
	}

	export const enum PlayerProp {
		HELMET = 0,
		GLASSES = 1,
		EAR_ACCESSORY = 2
	}

	export const enum ClothesComponent {
		HEAD = 0,
		BEARD = 1,
		HAIR = 2,
		TORSO = 3,
		LEGS = 4,
		HANDS = 5,
		FOOT = 6,
		NONE = 7,
		ACCESSORIES_1 = 8,
		ACCESSORIES_2 = 9,
		MASK = 10,
		DECALS = 11,
		AUXILIARY = 12
	}
}
