const SIMPLA_CONFIG = {
  repo: 'felixlberg/felixlberg.github.io',
  auth: new SimplaNetlify({ site: 'felixlberg' }),
  source: window.location.origin,
  branch: 'master'
};

// Init Simpla
Simpla.init(SIMPLA_CONFIG);
window.Simpla = Simpla;

// Prompt for login from auth adapter
Simpla.login();

// Log user out locally
Simpla.logout();
