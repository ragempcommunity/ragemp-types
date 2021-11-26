declare namespace RageEnums {
	/** [https://wiki.rage.mp/index.php?title=Controls](https://wiki.rage.mp/index.php?title=Controls) */
	const enum Controls {
		/**
		 * V (Back on Xbox)
		 */
		INPUT_NEXT_CAMERA = 0,
		/**
		 * Left Mouse Button
		 */
		INPUT_LOOK_LR = 1,
		/**
		 * Right Mouse Button
		 */
		INPUT_LOOK_UD = 2,
		/**
		 * Control-Break Processing
		 */
		INPUT_LOOK_UP_ONLY = 3,
		/**
		 * Middle Mouse Button
		 */
		INPUT_LOOK_DOWN_ONLY = 4,
		/**
		 * undefined */
		INPUT_LOOK_LEFT_ONLY = 5,
		/**
		 * Right Mouse Button
		 */
		INPUT_LOOK_RIGHT_ONLY = 6,
		/**
		 * undefined */
		INPUT_CINEMATIC_SLOWMO = 7,
		/**
		 * S
		 */
		INPUT_SCRIPTED_FLY_UD = 8,
		/**
		 * D
		 */
		INPUT_SCRIPTED_FLY_LR = 9,
		/**
		 * PAGE UP
		 */
		INPUT_SCRIPTED_FLY_ZUP = 10,
		/**
		 * PAGE DOWN
		 */
		INPUT_SCRIPTED_FLY_ZDOWN = 11,
		/**
		 * MOUSE DOWN
		 */
		INPUT_WEAPON_WHEEL_UD = 12,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_WEAPON_WHEEL_LR = 13,
		/**
		 * MOUSE SCROLL WHEEL DOWN
		 */
		INPUT_WEAPON_WHEEL_NEXT = 14,
		/**
		 * MOUSE SCROLL WHEEL UP
		 */
		INPUT_WEAPON_WHEEL_PREV = 15,
		/**
		 * MOUSE SCROLL WHEEL DOWN
		 */
		INPUT_SELECT_NEXT_WEAPON = 16,
		/**
		 * MOUSE SCROLL WHEEL UP
		 */
		INPUT_SELECT_PREV_WEAPON = 17,
		/**
		 * ENTER / LEFT MOUSE BUTTON / SPACEBAR
		 */
		INPUT_SKIP_CUTSCENE = 18,
		/**
		 * LEFT ALT
		 */
		INPUT_CHARACTER_WHEEL = 19,
		/**
		 * Z
		 */
		INPUT_MULTIPLAYER_INFO = 20,
		/**
		 * Shift Key
		 */
		INPUT_SPRINT = 21,
		/**
		 * Space Key
		 */
		INPUT_JUMP = 22,
		/**
		 * Enter Key
		 */
		INPUT_ENTER = 23,
		/**
		 * Left Mouse Button
		 */
		INPUT_ATTACK = 24,
		/**
		 * Right Mouse Button
		 */
		INPUT_AIM = 25,
		/**
		 * C
		 */
		INPUT_LOOK_BEHIND = 26,
		/**
		 * ARROW UP/SCROLLWHEEL BUTTON (press)
		 */
		INPUT_PHONE = 27,
		INPUT_SPECIAL_ABILITY = 28,
		/**
		 * B
		 */
		INPUT_SPECIAL_ABILITY_SECONDARY = 29,
		/**
		 * D
		 */
		INPUT_MOVE_LR = 30,
		/**
		 * S
		 */
		INPUT_MOVE_UD = 31,
		/**
		 * W
		 */
		INPUT_MOVE_UP_ONLY = 32,
		/**
		 * S
		 */
		INPUT_MOVE_DOWN_ONLY = 33,
		/**
		 * A
		 */
		INPUT_MOVE_LEFT_ONLY = 34,
		/**
		 * D
		 */
		INPUT_MOVE_RIGHT_ONLY = 35,
		/**
		 * LEFT CONTROL
		 */
		INPUT_DUCK = 36,
		/**
		 * TAB
		 */
		INPUT_SELECT_WEAPON = 37,
		/**
		 * E
		 */
		INPUT_PICKUP = 38,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM = 39,
		/**
		 * ]
		 */
		INPUT_SNIPER_ZOOM_IN_ONLY = 40,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT_ONLY = 41,
		/**
		 * ]
		 */
		INPUT_SNIPER_ZOOM_IN_SECONDARY = 42,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT_SECONDARY = 43,
		/**
		 * Q
		 */
		INPUT_COVER = 44,
		/**
		 * R
		 */
		INPUT_RELOAD = 45,
		/**
		 * E
		 */
		INPUT_TALK = 46,
		/**
		 * G
		 */
		INPUT_DETONATE = 47,
		/**
		 * Z
		 */
		INPUT_HUD_SPECIAL = 48,
		/**
		 * F
		 */
		INPUT_ARREST = 49,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_ACCURATE_AIM = 50,
		/**
		 * E
		 */
		INPUT_CONTEXT = 51,
		/**
		 * Q
		 */
		INPUT_CONTEXT_SECONDARY = 52,
		INPUT_WEAPON_SPECIAL = 53,
		/**
		 * E
		 */
		INPUT_WEAPON_SPECIAL_TWO = 54,
		/**
		 * SPACEBAR
		 */
		INPUT_DIVE = 55,
		/**
		 * F9
		 */
		INPUT_DROP_WEAPON = 56,
		/**
		 * F10
		 */
		INPUT_DROP_AMMO = 57,
		/**
		 * G
		 */
		INPUT_THROW_GRENADE = 58,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_LR = 59,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_UD = 60,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_MOVE_UP_ONLY = 61,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_DOWN_ONLY = 62,
		/**
		 * A
		 */
		INPUT_VEH_MOVE_LEFT_ONLY = 63,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_RIGHT_ONLY = 64,
		INPUT_VEH_SPECIAL = 65,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_LR = 66,
		/**
		 * MOUSE DOWN
		 */
		INPUT_VEH_GUN_UD = 67,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_AIM = 68,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_ATTACK = 69,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_ATTACK2 = 70,
		/**
		 * W
		 */
		INPUT_VEH_ACCELERATE = 71,
		/**
		 * S
		 */
		INPUT_VEH_BRAKE = 72,
		/**
		 * X
		 */
		INPUT_VEH_DUCK = 73,
		/**
		 * H
		 */
		INPUT_VEH_HEADLIGHT = 74,
		/**
		 * F
		 */
		INPUT_VEH_EXIT = 75,
		/**
		 * SPACEBAR
		 */
		INPUT_VEH_HANDBRAKE = 76,
		/**
		 * W
		 */
		INPUT_VEH_HOTWIRE_LEFT = 77,
		/**
		 * S
		 */
		INPUT_VEH_HOTWIRE_RIGHT = 78,
		/**
		 * C
		 */
		INPUT_VEH_LOOK_BEHIND = 79,
		/**
		 * R
		 */
		INPUT_VEH_CIN_CAM = 80,
		/**
		 * .
		 */
		INPUT_VEH_NEXT_RADIO = 81,
		/**
		 * ,
		 */
		INPUT_VEH_PREV_RADIO = 82,
		/**
		 * =
		 */
		INPUT_VEH_NEXT_RADIO_TRACK = 83,
		/**
		 * -
		 */
		INPUT_VEH_PREV_RADIO_TRACK = 84,
		/**
		 * Q
		 */
		INPUT_VEH_RADIO_WHEEL = 85,
		/**
		 * E
		 */
		INPUT_VEH_HORN = 86,
		/**
		 * W
		 */
		INPUT_VEH_FLY_THROTTLE_UP = 87,
		/**
		 * S
		 */
		INPUT_VEH_FLY_THROTTLE_DOWN = 88,
		/**
		 * A
		 */
		INPUT_VEH_FLY_YAW_LEFT = 89,
		/**
		 * D
		 */
		INPUT_VEH_FLY_YAW_RIGHT = 90,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_PASSENGER_AIM = 91,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_PASSENGER_ATTACK = 92,
		/**
		 *
		 */
		INPUT_VEH_SPECIAL_ABILITY_FRANKLIN = 93,
		/**
		 *
		 */
		INPUT_VEH_STUNT_UD = 94,
		/**
		 * MOUSE DOWN
		 */
		INPUT_VEH_CINEMATIC_UD = 95,
		/**
		 * NUMPAD- / SCROLLWHEEL UP
		 */
		INPUT_VEH_CINEMATIC_UP_ONLY = 96,
		/**
		 * NUMPAD+ / SCROLLWHEEL DOWN
		 */
		INPUT_VEH_CINEMATIC_DOWN_ONLY = 97,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_CINEMATIC_LR = 98,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_VEH_SELECT_NEXT_WEAPON = 99,
		/**
		 * [
		 */
		INPUT_VEH_SELECT_PREV_WEAPON = 100,
		/**
		 * H
		 */
		INPUT_VEH_ROOF = 101,
		/**
		 * SPACEBAR
		 */
		INPUT_VEH_JUMP = 102,
		/**
		 * E
		 */
		INPUT_VEH_GRAPPLING_HOOK = 103,
		/**
		 * H
		 */
		INPUT_VEH_SHUFFLE = 104,
		/**
		 * X
		 */
		INPUT_VEH_DROP_PROJECTILE = 105,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_MOUSE_CONTROL_OVERRIDE = 106,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_FLY_ROLL_LR = 107,
		/**
		 * NUMPAD 4
		 */
		INPUT_VEH_FLY_ROLL_LEFT_ONLY = 108,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_FLY_ROLL_RIGHT_ONLY = 109,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_FLY_PITCH_UD = 110,
		/**
		 * NUMPAD 8
		 */
		INPUT_VEH_FLY_PITCH_UP_ONLY = 111,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_FLY_PITCH_DOWN_ONLY = 112,
		/**
		 * G
		 */
		INPUT_VEH_FLY_UNDERCARRIAGE = 113,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_FLY_ATTACK = 114,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_VEH_FLY_SELECT_NEXT_WEAPON = 115,
		/**
		 * [
		 */
		INPUT_VEH_FLY_SELECT_PREV_WEAPON = 116,
		/**
		 * NUMPAD 7
		 */
		INPUT_VEH_FLY_SELECT_TARGET_LEFT = 117,
		/**
		 * NUMPAD 9
		 */
		INPUT_VEH_FLY_SELECT_TARGET_RIGHT = 118,
		/**
		 * E
		 */
		INPUT_VEH_FLY_VERTICAL_FLIGHT_MODE = 119,
		/**
		 * X
		 */
		INPUT_VEH_FLY_DUCK = 120,
		/**
		 * INSERT
		 */
		INPUT_VEH_FLY_ATTACK_CAMERA = 121,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_FLY_MOUSE_CONTROL_OVERRIDE = 122,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_SUB_TURN_LR = 123,
		/**
		 * NUMPAD 4
		 */
		INPUT_VEH_SUB_TURN_LEFT_ONLY = 124,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_SUB_TURN_RIGHT_ONLY = 125,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_SUB_PITCH_UD = 126,
		/**
		 * NUMPAD 8
		 */
		INPUT_VEH_SUB_PITCH_UP_ONLY = 127,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_SUB_PITCH_DOWN_ONLY = 128,
		/**
		 * W
		 */
		INPUT_VEH_SUB_THROTTLE_UP = 129,
		/**
		 * S
		 */
		INPUT_VEH_SUB_THROTTLE_DOWN = 130,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_SUB_ASCEND = 131,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_SUB_DESCEND = 132,
		/**
		 * A
		 */
		INPUT_VEH_SUB_TURN_HARD_LEFT = 133,
		/**
		 * D
		 */
		INPUT_VEH_SUB_TURN_HARD_RIGHT = 134,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_SUB_MOUSE_CONTROL_OVERRIDE = 135,
		/**
		 * W
		 */
		INPUT_VEH_PUSHBIKE_PEDAL = 136,
		/**
		 * CAPSLOCK
		 */
		INPUT_VEH_PUSHBIKE_SPRINT = 137,
		/**
		 * Q
		 */
		INPUT_VEH_PUSHBIKE_FRONT_BRAKE = 138,
		/**
		 * S
		 */
		INPUT_VEH_PUSHBIKE_REAR_BRAKE = 139,
		/**
		 * R
		 */
		INPUT_MELEE_ATTACK_LIGHT = 140,
		/**
		 * Q
		 */
		INPUT_MELEE_ATTACK_HEAVY = 141,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_MELEE_ATTACK_ALTERNATE = 142,
		/**
		 * SPACEBAR
		 */
		INPUT_MELEE_BLOCK = 143,
		/**
		 * F / LEFT MOUSE BUTTON
		 */
		INPUT_PARACHUTE_DEPLOY = 144,
		/**
		 * F
		 */
		INPUT_PARACHUTE_DETACH = 145,
		/**
		 * D
		 */
		INPUT_PARACHUTE_TURN_LR = 146,
		/**
		 * A
		 */
		INPUT_PARACHUTE_TURN_LEFT_ONLY = 147,
		/**
		 * D
		 */
		INPUT_PARACHUTE_TURN_RIGHT_ONLY = 148,
		/**
		 * S
		 */
		INPUT_PARACHUTE_PITCH_UD = 149,
		/**
		 * W
		 */
		INPUT_PARACHUTE_PITCH_UP_ONLY = 150,
		/**
		 * S
		 */
		INPUT_PARACHUTE_PITCH_DOWN_ONLY = 151,
		/**
		 * Q
		 */
		INPUT_PARACHUTE_BRAKE_LEFT = 152,
		/**
		 * E
		 */
		INPUT_PARACHUTE_BRAKE_RIGHT = 153,
		/**
		 * X
		 */
		INPUT_PARACHUTE_SMOKE = 154,
		/**
		 * LEFT SHIFT
		 */
		INPUT_PARACHUTE_PRECISION_LANDING = 155,
		INPUT_MAP = 156,
		/**
		 * 1
		 */
		INPUT_SELECT_WEAPON_UNARMED = 157,
		/**
		 * 2
		 */
		INPUT_SELECT_WEAPON_MELEE = 158,
		/**
		 * 6
		 */
		INPUT_SELECT_WEAPON_HANDGUN = 159,
		/**
		 * 3
		 */
		INPUT_SELECT_WEAPON_SHOTGUN = 160,
		/**
		 * 7
		 */
		INPUT_SELECT_WEAPON_SMG = 161,
		/**
		 * 8
		 */
		INPUT_SELECT_WEAPON_AUTO_RIFLE = 162,
		/**
		 * 9
		 */
		INPUT_SELECT_WEAPON_SNIPER = 163,
		/**
		 * 4
		 */
		INPUT_SELECT_WEAPON_HEAVY = 164,
		/**
		 * 5
		 */
		INPUT_SELECT_WEAPON_SPECIAL = 165,
		/**
		 * F5
		 */
		INPUT_SELECT_CHARACTER_MICHAEL = 166,
		/**
		 * F6
		 */
		INPUT_SELECT_CHARACTER_FRANKLIN = 167,
		/**
		 * F7
		 */
		INPUT_SELECT_CHARACTER_TREVOR = 168,
		/**
		 * F8
		 */
		INPUT_SELECT_CHARACTER_MULTIPLAYER = 169,
		/**
		 * F3
		 */
		INPUT_SAVE_REPLAY_CLIP = 170,
		/**
		 * CAPSLOCK
		 */
		INPUT_SPECIAL_ABILITY_PC = 171,
		/**
		 * ARROW UP
		 */
		INPUT_CELLPHONE_UP = 172,
		/**
		 * ARROW DOWN
		 */
		INPUT_CELLPHONE_DOWN = 173,
		/**
		 * ARROW LEFT
		 */
		INPUT_CELLPHONE_LEFT = 174,
		/**
		 * ARROW RIGHT
		 */
		INPUT_CELLPHONE_RIGHT = 175,
		/**
		 * ENTER/LEFT MOUSE BUTTON
		 */
		INPUT_CELLPHONE_SELECT = 176,
		/**
		 * BACKSPACE/ESC/RIGHT MOUSE BUTTON
		 */
		INPUT_CELLPHONE_CANCEL = 177,
		/**
		 * DELETE
		 */
		INPUT_CELLPHONE_OPTION = 178,
		/**
		 * SPACEBAR
		 */
		INPUT_CELLPHONE_EXTRA_OPTION = 179,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_CELLPHONE_SCROLL_FORWARD = 180,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_CELLPHONE_SCROLL_BACKWARD = 181,
		/**
		 * L
		 */
		INPUT_CELLPHONE_CAMERA_FOCUS_LOCK = 182,
		/**
		 * G
		 */
		INPUT_CELLPHONE_CAMERA_GRID = 183,
		/**
		 * E
		 */
		INPUT_CELLPHONE_CAMERA_SELFIE = 184,
		/**
		 * F
		 */
		INPUT_CELLPHONE_CAMERA_DOF = 185,
		/**
		 * X
		 */
		INPUT_CELLPHONE_CAMERA_EXPRESSION = 186,
		/**
		 * ARROW DOWN
		 */
		INPUT_FRONTEND_DOWN = 187,
		/**
		 * ARROW UP
		 */
		INPUT_FRONTEND_UP = 188,
		/**
		 * ARROW LEFT
		 */
		INPUT_FRONTEND_LEFT = 189,
		/**
		 * ARROW RIGHT
		 */
		INPUT_FRONTEND_RIGHT = 190,
		/**
		 * ENTER
		 */
		INPUT_FRONTEND_RDOWN = 191,
		/**
		 * TAB
		 */
		INPUT_FRONTEND_RUP = 192,
		INPUT_FRONTEND_RLEFT = 193,
		/**
		 * BACKSPACE
		 */
		INPUT_FRONTEND_RRIGHT = 194,
		/**
		 * D
		 */
		INPUT_FRONTEND_AXIS_X = 195,
		/**
		 * S
		 */
		INPUT_FRONTEND_AXIS_Y = 196,
		/**
		 * ]
		 */
		INPUT_FRONTEND_RIGHT_AXIS_X = 197,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_FRONTEND_RIGHT_AXIS_Y = 198,
		/**
		 * P
		 */
		INPUT_FRONTEND_PAUSE = 199,
		/**
		 * ESC
		 */
		INPUT_FRONTEND_PAUSE_ALTERNATE = 200,
		/**
		 * ENTER/NUMPAD ENTER
		 */
		INPUT_FRONTEND_ACCEPT = 201,
		/**
		 * BACKSPACE/ESC
		 */
		INPUT_FRONTEND_CANCEL = 202,
		/**
		 * SPACEBAR
		 */
		INPUT_FRONTEND_X = 203,
		/**
		 * TAB
		 */
		INPUT_FRONTEND_Y = 204,
		/**
		 * Q
		 */
		INPUT_FRONTEND_LB = 205,
		/**
		 * E
		 */
		INPUT_FRONTEND_RB = 206,
		/**
		 * PAGE DOWN
		 */
		INPUT_FRONTEND_LT = 207,
		/**
		 * PAGE UP
		 */
		INPUT_FRONTEND_RT = 208,
		/**
		 * LEFT SHIFT
		 */
		INPUT_FRONTEND_LS = 209,
		/**
		 * LEFT CTRL
		 */
		INPUT_FRONTEND_RS = 210,
		/**
		 * TAB
		 */
		INPUT_FRONTEND_LEADERBOARD = 211,
		/**
		 * HOME
		 */
		INPUT_FRONTEND_SOCIAL_CLUB = 212,
		/**
		 * HOME
		 */
		INPUT_FRONTEND_SOCIAL_CLUB_SECONDARY = 213,
		/**
		 * DELETE
		 */
		INPUT_FRONTEND_DELETE = 214,
		/**
		 * ENTER
		 */
		INPUT_FRONTEND_ENDSCREEN_ACCEPT = 215,
		/**
		 * SPACEBAR
		 */
		INPUT_FRONTEND_ENDSCREEN_EXPAND = 216,
		/**
		 * CAPSLOCK
		 */
		INPUT_FRONTEND_SELECT = 217,
		/**
		 * D
		 */
		INPUT_SCRIPT_LEFT_AXIS_X = 218,
		/**
		 * S
		 */
		INPUT_SCRIPT_LEFT_AXIS_Y = 219,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_SCRIPT_RIGHT_AXIS_X = 220,
		/**
		 * MOUSE DOWN
		 */
		INPUT_SCRIPT_RIGHT_AXIS_Y = 221,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RUP = 222,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RDOWN = 223,
		/**
		 * LEFT CTRL
		 */
		INPUT_SCRIPT_RLEFT = 224,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RRIGHT = 225,
		INPUT_SCRIPT_LB = 226,
		INPUT_SCRIPT_RB = 227,
		INPUT_SCRIPT_LT = 228,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RT = 229,
		INPUT_SCRIPT_LS = 230,
		INPUT_SCRIPT_RS = 231,
		/**
		 * W
		 */
		INPUT_SCRIPT_PAD_UP = 232,
		/**
		 * S
		 */
		INPUT_SCRIPT_PAD_DOWN = 233,
		/**
		 * A
		 */
		INPUT_SCRIPT_PAD_LEFT = 234,
		/**
		 * D
		 */
		INPUT_SCRIPT_PAD_RIGHT = 235,
		/**
		 * V
		 */
		INPUT_SCRIPT_SELECT = 236,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_CURSOR_ACCEPT = 237,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_CURSOR_CANCEL = 238,
		INPUT_CURSOR_X = 239,
		INPUT_CURSOR_Y = 240,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_CURSOR_SCROLL_UP = 241,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_CURSOR_SCROLL_DOWN = 242,
		/**
		 * ~ / `
		 */
		INPUT_ENTER_CHEAT_CODE = 243,
		/**
		 * M
		 */
		INPUT_INTERACTION_MENU = 244,
		/**
		 * T
		 */
		INPUT_MP_TEXT_CHAT_ALL = 245,
		/**
		 * Y
		 */
		INPUT_MP_TEXT_CHAT_TEAM = 246,
		INPUT_MP_TEXT_CHAT_FRIENDS = 247,
		INPUT_MP_TEXT_CHAT_CREW = 248,
		/**
		 * N
		 */
		INPUT_PUSH_TO_TALK = 249,
		/**
		 * R
		 */
		INPUT_CREATOR_LS = 250,
		/**
		 * F
		 */
		INPUT_CREATOR_RS = 251,
		/**
		 * X
		 */
		INPUT_CREATOR_LT = 252,
		/**
		 * C
		 */
		INPUT_CREATOR_RT = 253,
		/**
		 * LEFT SHIFT
		 */
		INPUT_CREATOR_MENU_TOGGLE = 254,
		/**
		 * SPACEBAR
		 */
		INPUT_CREATOR_ACCEPT = 255,
		/**
		 * DELETE
		 */
		INPUT_CREATOR_DELETE = 256,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_ATTACK2 = 257,
		INPUT_RAPPEL_JUMP = 258,
		INPUT_RAPPEL_LONG_JUMP = 259,
		INPUT_RAPPEL_SMASH_WINDOW = 260,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_PREV_WEAPON = 261,
		/**
		 * undefined | probably Scroll Down */
		INPUT_NEXT_WEAPON = 262,
		/**
		 * R
		 */
		INPUT_MELEE_ATTACK1 = 263,
		/**
		 * Q
		 */
		INPUT_MELEE_ATTACK2 = 264,
		INPUT_WHISTLE = 265,
		/**
		 * D
		 */
		INPUT_MOVE_LEFT = 266,
		/**
		 * D
		 */
		INPUT_MOVE_RIGHT = 267,
		/**
		 * S
		 */
		INPUT_MOVE_UP = 268,
		/**
		 * S
		 */
		INPUT_MOVE_DOWN = 269,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_LOOK_LEFT = 270,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_LOOK_RIGHT = 271,
		/**
		 * MOUSE DOWN
		 */
		INPUT_LOOK_UP = 272,
		/**
		 * MOUSE DOWN
		 */
		INPUT_LOOK_DOWN = 273,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_IN = 274,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT = 275,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_IN_ALTERNATE = 276,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT_ALTERNATE = 277,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_LEFT = 278,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_RIGHT = 279,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_UP = 280,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_DOWN = 281,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_LEFT = 282,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_RIGHT = 283,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_UP = 284,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_DOWN = 285,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_LOOK_LEFT = 286,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_LOOK_RIGHT = 287,
		/**
		 * F1
		 */
		INPUT_REPLAY_START_STOP_RECORDING = 288,
		/**
		 * F2
		 */
		INPUT_REPLAY_START_STOP_RECORDING_SECONDARY = 289,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_SCALED_LOOK_LR = 290,
		/**
		 * MOUSE DOWN
		 */
		INPUT_SCALED_LOOK_UD = 291,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_UP_ONLY = 292,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_DOWN_ONLY = 293,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_LEFT_ONLY = 294,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_RIGHT_ONLY = 295,
		/**
		 * DELETE
		 */
		INPUT_REPLAY_MARKER_DELETE = 296,
		/**
		 * DELETE
		 */
		INPUT_REPLAY_CLIP_DELETE = 297,
		/**
		 * SPACEBAR
		 */
		INPUT_REPLAY_PAUSE = 298,
		/**
		 * ARROW DOWN
		 */
		INPUT_REPLAY_REWIND = 299,
		/**
		 * ARROW UP
		 */
		INPUT_REPLAY_FFWD = 300,
		/**
		 * M
		 */
		INPUT_REPLAY_NEWMARKER = 301,
		/**
		 * S
		 */
		INPUT_REPLAY_RECORD = 302,
		/**
		 * U
		 */
		INPUT_REPLAY_SCREENSHOT = 303,
		/**
		 * H
		 */
		INPUT_REPLAY_HIDEHUD = 304,
		/**
		 * B
		 */
		INPUT_REPLAY_STARTPOINT = 305,
		/**
		 * N
		 */
		INPUT_REPLAY_ENDPOINT = 306,
		/**
		 * ARROW RIGHT
		 */
		INPUT_REPLAY_ADVANCE = 307,
		/**
		 * ARROW LEFT
		 */
		INPUT_REPLAY_BACK = 308,
		/**
		 * T
		 */
		INPUT_REPLAY_TOOLS = 309,
		/**
		 * R
		 */
		INPUT_REPLAY_RESTART = 310,
		/**
		 * K
		 */
		INPUT_REPLAY_SHOWHOTKEY = 311,
		/**
		 * [
		 */
		INPUT_REPLAY_CYCLEMARKERLEFT = 312,
		/**
		 * ]
		 */
		INPUT_REPLAY_CYCLEMARKERRIGHT = 313,
		/**
		 * NUMPAD+
		 */
		INPUT_REPLAY_FOVINCREASE = 314,
		/**
		 * NUMPAD-
		 */
		INPUT_REPLAY_FOVDECREASE = 315,
		/**
		 * PAGE UP
		 */
		INPUT_REPLAY_CAMERAUP = 316,
		/**
		 * PAGE DOWN
		 */
		INPUT_REPLAY_CAMERADOWN = 317,
		/**
		 * F5
		 */
		INPUT_REPLAY_SAVE = 318,
		/**
		 * C
		 */
		INPUT_REPLAY_TOGGLETIME = 319,
		/**
		 * V
		 */
		INPUT_REPLAY_TOGGLETIPS = 320,
		/**
		 * SPACEBAR
		 */
		INPUT_REPLAY_PREVIEW = 321,
		/**
		 * ESC
		 */
		INPUT_REPLAY_TOGGLE_TIMELINE = 322,
		/**
		 * X
		 */
		INPUT_REPLAY_TIMELINE_PICKUP_CLIP = 323,
		/**
		 * C
		 */
		INPUT_REPLAY_TIMELINE_DUPLICATE_CLIP = 324,
		/**
		 * V
		 */
		INPUT_REPLAY_TIMELINE_PLACE_CLIP = 325,
		/**
		 * LEFT CTRL
		 */
		INPUT_REPLAY_CTRL = 326,
		/**
		 * F5
		 */
		INPUT_REPLAY_TIMELINE_SAVE = 327,
		/**
		 * SPACEBAR
		 */
		INPUT_REPLAY_PREVIEW_AUDIO = 328,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_DRIVE_LOOK = 329,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_DRIVE_LOOK2 = 330,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_FLY_ATTACK2 = 331,
		/**
		 * MOUSE DOWN
		 */
		INPUT_RADIO_WHEEL_UD = 332,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_RADIO_WHEEL_LR = 333,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_VEH_SLOWMO_UD = 334,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_VEH_SLOWMO_UP_ONLY = 335,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_VEH_SLOWMO_DOWN_ONLY = 336,
		/**
		 * X
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_TOGGLE = 337,
		/**
		 * A
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_LEFT = 338,
		/**
		 * D
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_RIGHT = 339,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_UP = 340,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_DOWN = 341,
		/**
		 * D
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_LR = 342,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_UD = 343,
		/**
		 * F11
		 */
		INPUT_SWITCH_VISOR = 344,
		/**
		 * X
		 */
		INPUT_VEH_MELEE_HOLD = 345,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_MELEE_LEFT = 346,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_MELEE_RIGHT = 347,
		/**
		 * SCROLLWHEEL BUTTON (PRESS)
		 */
		INPUT_MAP_POI = 348,
		/**
		 * TAB
		 */
		INPUT_REPLAY_SNAPMATIC_PHOTO = 349,
		/**
		 * E
		 */
		INPUT_VEH_CAR_JUMP = 350,
		/**
		 * E
		 */
		INPUT_VEH_ROCKET_BOOST = 351,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_FLY_BOOST = 352,
		/**
		 * SPACEBAR
		 */
		INPUT_VEH_PARACHUTE = 353,
		/**
		 * X
		 */
		INPUT_VEH_BIKE_WINGS = 354,
		/**
		 * E
		 */
		INPUT_VEH_FLY_BOMB_BAY = 355,
		/**
		 * E
		 */
		INPUT_VEH_FLY_COUNTER = 356,
		/**
		 * X
		 */
		INPUT_VEH_TRANSFORM = 357
	}
}
