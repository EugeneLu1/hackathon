const { Stubby } = require('stubby');
const stubData = require('../stubs/index.js');

module.exports = options => {
  const stubbyOptions = {
    stubs: 3031,
    location: options.location,
    watch: false,
    data: stubData,
  };

  const stubs = new Stubby();
  stubs.start(stubbyOptions, err => {
    process.stdout.write(
      `Stubby started: http://${stubbyOptions.location}:${
        stubbyOptions.stubs
      }\n`,
    );
    if (err) {
      process.stdout.write(err);
    }
  });
};
