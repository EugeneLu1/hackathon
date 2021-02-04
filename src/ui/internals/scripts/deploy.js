const shell = require('shelljs');
const chalk = require('chalk');
shell.set('-e');

const args = process.argv.slice(2);
if (args.length !== 4) {
  console.error(
    chalk.red(
      'usage must be: deploy {buildDir} {bucketName} {folderName} {distributionId}',
    ),
  );
  shell.exit(1);
}
const buildDir = args[0];
const bucketName = args[1];
const folderName = args[2];
const distributionId = args[3];

let awsSyncCMD = `aws s3 sync ${buildDir} s3://${bucketName}/${folderName} --exclude "*" --include "index.html" --metadata-directive REPLACE --cache-control "no-cache"`;
console.info(chalk.yellow(`running '${awsSyncCMD}'`));
if (shell.exec(awsSyncCMD).code !== 0) {
  console.log(chalk.red('Failed uploading index.html'));
  shell.exit(1);
}

const excludeList = ['index.html'];

awsSyncCMD = `aws s3 sync ${buildDir} s3://${bucketName}/${folderName} `;
excludeList.forEach(function(e) {
  awsSyncCMD += `--exclude "${e}" `;
});
awsSyncCMD += `--metadata-directive REPLACE --cache-control "max-age=2592000,public"`;
console.info(chalk.yellow(`running '${awsSyncCMD}'`));
if (shell.exec(awsSyncCMD).code !== 0) {
  console.log(chalk.red('Failed uploading the assets'));
  shell.exit(1);
}

let awsCloudFrontCMD = `aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/${folderName}/index.html"`;
console.info(chalk.yellow(`running '${awsCloudFrontCMD}'`));
const invalidationRequestResult = shell.exec(awsCloudFrontCMD);
const invalidationRequest = JSON.parse(invalidationRequestResult);

if (invalidationRequestResult.code !== 0) {
  console.log(chalk.red('Failed requesting to invalidate index.html'));
  shell.exit(1);
}
const startSeconds = new Date().getTime() / 1000;
awsCloudFrontCMD = `aws cloudfront wait invalidation-completed --distribution-id ${distributionId} --id ${
  invalidationRequest.Invalidation.Id
}`;
console.info(chalk.yellow(`running '${awsCloudFrontCMD}'`));
if (shell.exec(awsCloudFrontCMD).code !== 0) {
  console.log(chalk.red('Failed invalidating index.html'));
  shell.exit(1);
}
const endSeconds = new Date().getTime() / 1000;
console.log(
  chalk.yellow(
    `cloud front cache invalidation took ${endSeconds - startSeconds} seconds`,
  ),
);
