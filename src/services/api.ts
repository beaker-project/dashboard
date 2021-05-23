import axios from 'axios';

import config from '@config';

const { protocol, fqdn, port } = config.server;

const api = axios.create({
  baseURL: `${protocol}://${fqdn}:${port}`,
  withCredentials: true,
});

export default api;
