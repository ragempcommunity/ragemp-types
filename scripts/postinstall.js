const { switchVersion, readRageCfg } = require('./utils');

const parsedRageCfg = readRageCfg();

let version = 'classic';

if (parsedRageCfg && parsedRageCfg.types) {
	version = parsedRageCfg.types;
}

switchVersion(version);
