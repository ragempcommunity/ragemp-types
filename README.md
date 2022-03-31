Remember to 🌟 this Github if you 💖 it.

> This package contains types definitions for RAGE:MP server-side module.

### 📥 Installation

#### `SERVER-SIDE`

:fire: Use `github:ragempcommunity/ragemp-types#types-server` to latest build

```bash
# With npm
npm i --save-dev @ragempcommunity/types-server

# With yarn
yarn add -D @ragempcommunity/types-server

# With pnpm
pnpm add -D @ragempcommunity/types-server
```

## 🤓 Usage

> To make these types detectable, you need to add the `types` property below to `tsconfig.json` on each side of your project.

```jsonc
// e.g server-side
{
	"compilerOptions": {
		"types": ["{RELATIVE_PATH_TO_NODE_MODULES}/@ragempcommunity/types-server"]
	}
}
```

### Full type-safe and auto-complete

![](https://i.imgur.com/o2JB3Jx.gif)

---

### To extend a Mp object, there are 2 ways:

1. By extend the prototype of the object:

```ts
mp.Player.prototype.myMethod = function myMethod() {
	// my method logic
};

// Usage
mp.events.add('playerReady', (player) => {
	player.myProperty = 1;

	player.myMethod();
});
```

```ts
// @types/index.d.ts
declare global {
	interface PlayerMp {
		myProperty: number;

		myMethod(): void;
	}
}

export {};
```

2. By extend the object itself:

```ts
mp.events.add('playerReady', (player) => {
	player.myProperty = 1;

	player.myMethod = function myMethod() {
		// my method logic
	};
});
```

```ts
// @types/index.d.ts
declare global {
	interface PlayerMp {
		myProperty: number;

		myMethod(): void;
	}
}

export {};
```

See: [RAGEMP Typescript Boilerplate](https://github.com/ragempcommunity/ragemp-typescript)

## 👨‍💻 Contributing

To contribute to this repository, feel free to create a new fork of the repository and submit a pull request.

1. Fork / Clone and select the `main` branch.
2. Create a new branch in your fork.
3. Make your changes.
4. Commit your changes, and push them.
5. Submit a Pull Request [here](https://github.com/ragempcommunity/ragemp-types/pulls)!

## 🎉 Thanks

-   [CocaColaBear](https://github.com/CocaColaBear/) - Creator of [types-ragemp-s](https://github.com/CocaColaBear/types-ragemp-s) & [types-ragemp-c](https://github.com/CocaColaBear/types-ragemp-c)

## 📋 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
