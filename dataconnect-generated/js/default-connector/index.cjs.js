const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Cafe-lab-Project',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

