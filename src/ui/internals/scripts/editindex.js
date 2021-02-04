const shell = require('shelljs');
shell.set('-e');

let configFile = shell.cat('./app/env/config.json');
const config = JSON.parse(configFile);
shell.sed(
  '-i',
  /{uilibrary_base_url}/g,
  config.uilibrary.base_url,
  './build/index.html',
);
shell.sed(
  '-i',
  /{uilibrary_version}/g,
  config.uilibrary.version,
  './build/index.html',
);
