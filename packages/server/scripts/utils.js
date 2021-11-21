const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '..');
const rageCfgPath = path.resolve('.ragerc.json');
const versions = ['classic', 'module'];

function copy(name, version) {
	const src = path.join(dir, version, name);
	const dest = path.join(dir, name);

	let content = fs.readFileSync(src, 'utf-8');

	// unlink for pnpm, #92
	try {
		fs.unlinkSync(dest);
	} catch (error) {}

	fs.writeFileSync(dest, content, 'utf-8');
}

function readRageCfg() {
	try {
		const rageCfg = fs.readFileSync(rageCfgPath, 'utf-8');
		return JSON.parse(rageCfg);
	} catch (e) {
		return null;
	}
}

function switchVersion(version) {
	if (typeof version === 'string' && !versions.includes(version)) {
		console.warn(`[rage-types] expecting version "classic" or "module" but got "${version}"`);
		process.exit(1);
		return;
	}

	console.log(`[rage-types] Switched for ${version} types`);

	copy('index.d.ts', version);

	const parsedRageCfg = readRageCfg();

	if (parsedRageCfg === null) {
		const newRageCfg = {
			types: version
		};

		fs.writeFileSync(rageCfgPath, JSON.stringify(newRageCfg), 'utf-8');
	} else {
		parsedRageCfg.types = version;
		fs.writeFileSync(rageCfgPath, JSON.stringify(parsedRageCfg), 'utf-8');
	}
}

module.exports.switchVersion = switchVersion;
module.exports.readRageCfg = readRageCfg;
