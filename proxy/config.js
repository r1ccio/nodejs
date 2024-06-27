const convict = require('convict');

// Додаємо власний формат для url
convict.addFormat({
  name: 'url',
  validate: function (val) {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate the scheme
                                  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // validate the domain name
                                  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate the IP address
                                  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate the port and path
                                  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate the query string
                                  '(\\#[-a-z\\d_]*)?$','i'); // validate the fragment
    if (!urlPattern.test(val)) {
      throw new Error('Must be a valid URL');
    }
  },
  coerce: function (val) {
    return String(val);
  }
});

const config = convict({
  apiUrl: {
    doc: 'The API URL',
    format: 'url',
    default: 'http://localhost:3000',
    env: 'API_URL'
  },
  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 3001,
    env: 'PORT'
  }
});

config.validate({ allowed: 'strict' });

module.exports = config;