Remember to 🌟 this Github if you 💖 it.

> Types definitions for RAGE:MP

## 📥 Installation

#### [`SERVER-SIDE`](https://github.com/LeonardSSH/ragemp-types/tree/main/packages/server)

```bash
# With npm
npm i --save-dev github:leonardssh/ragemp-types#types-server

# With yarn
yarn add -D github:leonardssh/ragemp-types#types-server

# With pnpm
pnpm add -D github:leonardssh/ragemp-types#types-server
```

#### [`CLIENT-SIDE`](https://github.com/LeonardSSH/ragemp-types/tree/main/packages/client)

```bash
# With npm
npm i --save-dev github:leonardssh/ragemp-types#types-client

# With yarn
yarn add -D github:leonardssh/ragemp-types#types-client

# With pnpm
pnpm add -D github:leonardssh/ragemp-types#types-client
```

#### [`CEF`](https://github.com/LeonardSSH/ragemp-types/tree/main/packages/cef)

```bash
# With npm
npm i --save-dev github:leonardssh/ragemp-types#types-cef

# With yarn
yarn add -D github:leonardssh/ragemp-types#types-cef

# With pnpm
pnpm add -D github:leonardssh/ragemp-types#types-cef
```

> To make these types detectable, you need to add the `types` property below to `tsconfig.json` on each side of your project.

```json
// e.g server-side
{
	"compilerOptions": {
		"types": ["{RELATIVE_PATH_TO_NODE_MODULES}/@ragemp/types-server"]
	}
}
```

## 🤓 Usage

#### [`SERVER-SIDE`](https://github.com/LeonardSSH/ragemp-types/tree/main/packages/server) - [`CLIENT-SIDE`](https://github.com/LeonardSSH/ragemp-types/tree/main/packages/client) - [`CEF`](https://github.com/LeonardSSH/ragemp-types/tree/main/packages/cef)

## ❌ Avoiding Conflict between Server <-> Client Types

To avoid conflicts between server and client types, they must be installed and set as follows:

> Step #1: _install the types in package.json from the project root_

```ts
npm i --save-dev github:leonardssh/ragemp-types#types-server
npm i --save-dev github:leonardssh/ragemp-types#types-client
```

> Step #2: _for this step, your project should be structured as follows:_

```sh
├───my-awesome-ragemp-server
│   └───src
│    	   # Server - Contains code relating to the database, player spawning, etc.
│    	   # Client - Contains code to display things to the user and do things to them.
│     	   ├───client
│		   │   ├───@types
│ 		   │   │   └───index.d.ts
│          │   ├───src
│          │   └───tsconfig.json
│          │
│     	   server
│		   │   ├───@types
│ 		   │   │   └───index.d.ts
│          │   ├───src
│          │   └───tsconfig.json
│          └───
├───package.json
└───tsconfig.base.json
```

Now that we know what our server structure should look like, let's start setting the types properly.

1. `tsconfig.base.json` - this is our base tsconfig, from which we extend the client/server part (to avoid making redundant code)

```json
{
	// NOTE: This is my config that I use everywhere, it is optimized for the cleanest and best code.
	"exclude": ["node_modules", "dist"],
	"compileOnSave": true,
	"compilerOptions": {
		"skipLibCheck": false,
		"target": "esnext",
		"module": "esnext",
		"moduleResolution": "node",
		"lib": ["es6", "esnext", "DOM"],
		"rootDir": ".",
		"outDir": "dist",
		"strict": true,
		"removeComments": false,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"noImplicitReturns": true,
		"noFallthroughCasesInSwitch": true,
		"allowSyntheticDefaultImports": true,
		"importHelpers": true,
		"esModuleInterop": true,
		"resolveJsonModule": true,
		"forceConsistentCasingInFileNames": true,
		"emitDecoratorMetadata": true,
		"experimentalDecorators": true,
		"allowJs": true,
		"declaration": false,
		"declarationMap": false,
		"sourceMap": false,
		"alwaysStrict": true,
		"importsNotUsedAsValues": "remove",
		"incremental": true,
		"newLine": "lf",
		"noEmitHelpers": true,
		"preserveConstEnums": true,
		"pretty": true,
		"useDefineForClassFields": true,
		"baseUrl": "./"
	}
}
```

2. `client/tsconfig.json` - this is our tsconfig for the client side, extended from the basic tsconfig and containing the types for the client

```json
{
	// NOTE: This tsconfig will work assuming your project is structured as described above.
	"extends": "../../tsconfig.base.json",
	"compilerOptions": {
		// [RELATIVE_PATH_TO_NODE_MODULES]/@ragemp/types-client
		"types": ["../../node_modules/@ragemp/types-client", "./@types"]
	},
	"include": ["./**/*.ts"]
}
```

3. `server/tsconfig.json` - this is our tsconfig for the server side, extended from the basic tsconfig and containing the types for the server

```json
{
	// NOTE: This tsconfig will work assuming your project is structured as described above.
	"extends": "../../tsconfig.base.json",
	"compilerOptions": {
		// [RELATIVE_PATH_TO_NODE_MODULES]/@ragemp/types-server
		"types": ["../../node_modules/@ragemp/types-server", "./@types"]
	},
	"include": ["./**/*.ts"]
}
```

For those who didn't understand, I made a gamemode from which you can better orient yourself: [ragemp-typescript](https://github.com/LeonardSSH/ragemp-typescript)

## 👨‍💻 Contributing

To contribute to this repository, feel free to create a new fork of the repository and submit a pull request.

1. Fork / Clone and select the `main` branch.
2. Create a new branch in your fork.
3. Make your changes.
4. Commit your changes, and push them.
5. Submit a Pull Request [here](https://github.com/leonardssh/ragemp-types/pulls)!

## 🎉 Thanks

-   [CocaColaBear](https://github.com/CocaColaBear/) - Creator of [types-ragemp-s](https://github.com/CocaColaBear/types-ragemp-s) & [types-ragemp-c](https://github.com/CocaColaBear/types-ragemp-c)

## 📋 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
