const SIMPLA_CONFIG = {
  repo: 'felixlberg/felixlberg.github.io',
  auth: new SimplaNetlify({ site: 'dreamy-hoover-1e7bc7.netlify.com' }),
  source: window.location.origin,
  branch: 'master',
  public: 'dist'
};

// Init Simpla
Simpla.init(SIMPLA_CONFIG);
window.Simpla = Simpla;

// Save utility method
// We're not using simpla-admin due to demo mode
window.SimplaJS = {};
window.SimplaJS.save = () => {
  const loginThenSave = () => {
    if (!Simpla.getState('authenticated')) {
      return Simpla.login().then(() => Simpla.save());
    }

    return Simpla.save();
  };

  loginThenSave()
    .then(() => alert('Content saved!'))
    .catch(err => alert(`Save failed, ${err}`));
};
