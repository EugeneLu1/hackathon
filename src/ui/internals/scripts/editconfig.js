const shell = require('shelljs');
const chalk = require('chalk');
shell.set('-e');

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error(chalk.red('usage must be: editconfig {stage}'));
  shell.exit(1);
}
const stage = args[0];

const envConfigGITUrl = 'https://git.vcilabs.com/vci/EnvironmentConfig.git';
if (!shell.test('-d', './environments')) {
  if (shell.exec(`git clone ${envConfigGITUrl} environments`).code !== 0) {
    console.log(chalk.red('Failed cloning:', envConfigGITUrl));
    shell.exit(1);
  }
}

const envConfigFile = shell.cat(`./environments/${stage}.env.json`);
const envConfig = JSON.parse(envConfigFile);

let configFile = shell.cat('./app/env/config.json');
const config = JSON.parse(configFile);
config.base_url = `${envConfig.appProperties.scheme}://static.${
  envConfig.appProperties.fqdn
}/CXMUI/index.html`;

const resApiPrefix = process.env.RES_API_PREFIX || 'cxm-res';
config.res_base_url = `${envConfig.appProperties.scheme}://${resApiPrefix}.${
  envConfig.appProperties.fqdn
}`;
const amApiPrefix = process.env.AM_API_PREFIX || 'cxm-am';
config.am_base_url = `${envConfig.appProperties.scheme}://${amApiPrefix}.${
  envConfig.appProperties.fqdn
}`;
const cmApiPrefix = process.env.CM_API_PREFIX || 'cxm-cm';
config.cm_base_url = `${envConfig.appProperties.scheme}://${cmApiPrefix}.${
  envConfig.appProperties.fqdn
}`;
config.im_base_url = `${envConfig.appProperties.scheme}://${
  envConfig.appProperties.fqdn
}/im`;
config.uilibrary.base_url = `${envConfig.appProperties.scheme}://${
  envConfig.appProperties.global_staticFqdn
}/UILibrary`;
configFile = JSON.stringify(config, null, '\t');
shell.ShellString(configFile).to('./app/env/config.json');
