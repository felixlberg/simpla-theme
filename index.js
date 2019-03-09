const SIMPLA_CONFIG = {
  repo: 'felixlberg/felixlberg.github.io',
  auth: new SimplaNetlify({ site: 'dreamy-hoover-1e7bc7.netlify.com' }),
  branch: 'master'
};

// Init Simpla
Simpla.init(SIMPLA_CONFIG);
window.Simpla = Simpla;

// Prompt for login from auth adapter
Simpla.login();

// Log user out locally
Simpla.logout();
