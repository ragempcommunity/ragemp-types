Remember to 🌟 this Github if you 💖 it.

> This package contains types definitions for RAGE:MP server-side module.

## 📥 Installation

#### `SERVER-SIDE`

```bash
# With npm
npm i --save-dev github:leonardssh/ragemp-types#types-server

# With yarn
yarn add -D github:leonardssh/ragemp-types#types-server

# With pnpm
pnpm add -D github:leonardssh/ragemp-types#types-server
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
