import Simpla from 'simpla';
import SimplaNetlify from 'simpla/adapters/netlify';

const SIMPLA_CONFIG = {
  repo: 'felixlberg/felixlberg.github.io',
  auth: new SimplaNetlify({ site: 'felixlberg' }),
  source: window.location.origin,
  branch: 'master'
};

// Init Simpla
Simpla.init(SIMPLA_CONFIG);
window.Simpla = Simpla;
