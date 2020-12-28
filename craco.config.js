const path = require('path');
const Packages = require('./packages');

const ROOT_DIR = process.cwd();

const alias = {};
Object.entries(Packages).forEach(([key, value]) => {
  alias[key] = path.resolve(ROOT_DIR, value);
});

module.exports = {

	webpack: {
		alias,
	},

};