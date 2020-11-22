const csvWriter = require('./csvWriter');
const csvReader = require('./csvReader');

module.exports = {
  shellApi: {
    csvWriter,
    csvReader,
  },
  packageName: 'dbgate-plugin-csv',
};
