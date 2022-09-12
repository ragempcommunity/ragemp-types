<p align="center">
 <img src="https://i.imgur.com/XN2rFqw.png" width="600"/><br>
 Community-driven type definitions for <strong>RAGE Multiplayer</strong>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@ragempcommunity/types-server" target="__blank"><img src="https://img.shields.io/npm/v/@ragempcommunity/types-server?color=efc75a&label=Server" alt="NPM version"></a>
    <a href="https://www.npmjs.com/package/@ragempcommunity/types-server" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@ragempcommunity/types-server?color=50a36f&label="></a>
    <a href="https://github.com/ragempcommunity/ragemp-types/actions/workflows/cd-server.yml" target="__blank"><img alt="Continuous Delivery - Server" src="https://img.shields.io/github/workflow/status/ragempcommunity/ragemp-types/Continuous%20Delivery%20-%20Server"></a>
</p>

<p align="center">
 <a href="https://www.npmjs.com/package/@ragempcommunity/types-client" target="__blank"><img src="https://img.shields.io/npm/v/@ragempcommunity/types-client?color=efc75a&label=Client" alt="NPM version"></a>
 <a href="https://www.npmjs.com/package/@ragempcommunity/types-client" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@ragempcommunity/types-client?color=50a36f&label="></a>
 <a href="https://github.com/ragempcommunity/ragemp-types/actions/workflows/cd-client.yml" target="__blank"><img alt="Continuous Delivery - Client" src="https://img.shields.io/github/workflow/status/ragempcommunity/ragemp-types/Continuous%20Delivery%20-%20Client"></a>
</p>

<p align="center">
 <a href="https://www.npmjs.com/package/@ragempcommunity/types-cef" target="__blank"><img src="https://img.shields.io/npm/v/@ragempcommunity/types-cef?color=efc75a&label=CEF" alt="NPM version"></a>
 <a href="https://www.npmjs.com/package/@ragempcommunity/types-cef" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@ragempcommunity/types-cef?color=50a36f&label="></a>
 <a href="https://github.com/ragempcommunity/ragemp-types/actions/workflows/cd-cef.yml" target="__blank"><img alt="Continuous Delivery - CEF" src="https://img.shields.io/github/workflow/status/ragempcommunity/ragemp-types/Continuous%20Delivery%20-%20Cef"></a>
</p>

<p align="center">
 <a href="https://twitter.com/ragemultiplayer" target="__blank"><img alt="Twitter" src="https://img.shields.io/twitter/follow/ragemultiplayer.svg?maxAge=86400"></a>
 <a href="https://discord.com/invite/tChBaeu" target="__blank"><img alt="Discord Server" src="https://img.shields.io/discord/183979885788659713?label=discord&color=7289da"></a>
</p>

Remember to 🌟 this Github if you 💖 it.

### 📥 Installation

#### [`SERVER-SIDE`](https://github.com/ragempcommunity/ragemp-types/tree/main/packages/server)

:fire: Use `github:ragempcommunity/ragemp-types#types-server` to latest build

```bash
# With npm
> npm i --save-dev @ragempcommunity/types-server

# With yarn
> yarn add -D @ragempcommunity/types-server

# With pnpm
> pnpm add -D @ragempcommunity/types-server
```

---

#### [`CLIENT-SIDE`](https://github.com/ragempcommunity/ragemp-types/tree/main/packages/client)

:fire: Use `github:ragempcommunity/ragemp-types#types-client` to latest build

```sh
# With npm
> npm i --save-dev @ragempcommunity/types-client

# With yarn
> yarn add -D @ragempcommunity/types-client

# With pnpm
> pnpm add -D @ragempcommunity/types-client
```

---

#### [`CEF`](https://github.com/ragempcommunity/ragemp-types/tree/main/packages/cef)

:fire: Use `github:ragempcommunity/ragemp-types#types-cef` to latest build

```bash
# With npm
> npm i --save-dev @ragempcommunity/types-cef

# With yarn
> yarn add -D @ragempcommunity/types-cef

# With pnpm
> pnpm add -D @ragempcommunity/types-cef
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

#### [`SERVER-SIDE`](https://github.com/ragempcommunity/ragemp-types/tree/main/packages/server) - [`CLIENT-SIDE`](https://github.com/ragempcommunity/ragemp-types/tree/main/packages/client) - [`CEF`](https://github.com/ragempcommunity/ragemp-types/tree/main/packages/cef)

## ❌ Avoiding Conflict between Server <-> Client Types

To avoid conflicts between server and client types, they must be installed and set as follows:

> Step #1: _install the types in package.json from the project root_

```sh
> npm i --save-dev @ragempcommunity/types-server
> npm i --save-dev @ragempcommunity/types-client
```

> Step #2: _for this step, your project should be structured as follows:_

```sh
├───my-awesome-ragemp-server
│   └───src
│        # Server - Contains code relating to the database, player spawning, etc.
│        # Client - Contains code to display things to the user and do things to them.
│         ├───client
│          │   ├───@types
│          │   │   └───index.d.ts
│          │   ├───src
│          │   └───tsconfig.json
│          │
│         server
│    │   ├───@types
│     │   │   └───index.d.ts
│          │   ├───src
│          │   └───tsconfig.json
│          └───
├───package.json
└───tsconfig.base.json
```

Now that we know what our server structure should look like, let's start setting the types properly.

1. `tsconfig.base.json` - this is our base tsconfig, from which we extend the client/server part (to avoid making redundant code)

```jsonc
{
 "exclude": ["node_modules", "dist"],
 "compileOnSave": true,
 "compilerOptions": {
  "target": "esnext",
  "module": "esnext",
  "moduleResolution": "node",
  "lib": ["es6", "esnext", "DOM"],
  "rootDir": ".",
  "outDir": "dist",
  "baseUrl": "./"
 }
}
```

2. `client/tsconfig.json` - this is our tsconfig for the client side, extended from the basic tsconfig and containing the types for the client

```jsonc
{
 // NOTE: This tsconfig will work assuming your project is structured as described above.
 "extends": "../../tsconfig.base.json",
 "compilerOptions": {
  // [RELATIVE_PATH_TO_NODE_MODULES]/@ragempcommunity/types-client
  "types": ["../../node_modules/@ragempcommunity/types-client", "./@types"]
 },
 "include": ["./**/*.ts"]
}
```

3. `server/tsconfig.json` - this is our tsconfig for the server side, extended from the basic tsconfig and containing the types for the server

```jsonc
{
 // NOTE: This tsconfig will work assuming your project is structured as described above.
 "extends": "../../tsconfig.base.json",
 "compilerOptions": {
  // [RELATIVE_PATH_TO_NODE_MODULES]/@ragempcommunity/types-server
  "types": ["../../node_modules/@ragempcommunity/types-server", "./@types"]
 },
 "include": ["./**/*.ts"]
}
```

For those who didn't understand, I made a gamemode from which you can better orient yourself:

[ragemp-typescript](https://github.com/LeonardSSH/ragemp-typescript) & [ragemp-javascript](https://github.com/LeonardSSH/ragemp-javascript)

## 👨‍💻 Contributing

To contribute to this repository, feel free to create a new fork of the repository and submit a pull request.

1. Fork / Clone and select the `main` branch.
2. Create a new branch in your fork.
3. Make your changes.
4. Commit your changes, and push them.
5. Submit a Pull Request [here](https://github.com/ragempcommunity/ragemp-types/pulls)!

## 🎉 Thanks

- [CocaColaBear](https://github.com/CocaColaBear/) - Creator of [types-ragemp-s](https://github.com/CocaColaBear/types-ragemp-s) & [types-ragemp-c](https://github.com/CocaColaBear/types-ragemp-c)
- [KsenonAdv](https://github.com/ksenonadv) - moral support

## 📋 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
