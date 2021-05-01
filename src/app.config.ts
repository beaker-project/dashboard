const appConfig = {
  server: {
    protocol: process.env.BEAKER_PROTOCOL || 'http',
    fqdn: process.env.BEAKER_FQDN || 'localhost',
    port: process.env.BEAKER_PORT || '80',
  },
};

export default appConfig;
