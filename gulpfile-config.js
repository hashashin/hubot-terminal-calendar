const
    path = require('path'),
    rootDirName = __dirname,

    makeRootedResolver = function makeRootedResolver (root) {
        return function resolveToFromRoot (glob) {
            glob = glob || '';
            return path.join(root, glob);
        };
    },

    resolveToTests = makeRootedResolver(path.join(rootDirName, 'test'));

    GulpConfig = (function GulpConfig () {

        const config = {

            paths: {
                specFiles: [
                    resolveToTests('**/*.spec.js')
                ]
            },

            opts: {
                mocha: {
                    require: [
                        path.join(rootDirName, 'test-helpers/chai-helpers'),
                    ],
                    ui: 'bdd',
                    reporter: 'nyan'
                }
            }
        };

        return config;

}());


module.exports = GulpConfig;
