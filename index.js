const SIMPLA_CONFIG = {
  repo: 'felixlberg/felixlberg.github.io',
  auth: new SimplaNetlify({ site: 'dreamy-hoover-1e7bc7.netlify.com' }),
  source: window.location.origin,
  branch: 'master',
  public: 'dist'
};

// Init Simpla
Simpla.init(SIMPLA_CONFIG);
