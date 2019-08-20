const path = require("path");
const { globalObjectKey, appRoot } = require("../constants");
const { moduleScope, buildProd } = global[globalObjectKey];

// var use = [
//     // {
//     //     loader: "cache-loader",
//     //     options: {
//     //         cacheIdentifier: `ts-cache-loader-${
//     //             require("../../package.json").version
//     //         }`,
//     //         cacheDirectory: path.resolve(
//     //             appRoot,
//     //             "./node_modules/.cache/cache-loader"
//     //         )
//     //     }
//     // },
    
// ];

// if (buildProd) {
//     use.splice(1, 0, {
//         loader: "thread-loader"
//     });
// }

module.exports = {
    test: /\.tsx?$/,
    include: moduleScope,
    'use': [
        {
            loader: "babel-loader",
            options: require("../helpers/babel-config.js")
        },
        {
          'loader': 'awesome-typescript-loader',
          'options': require('@beisen/ts').hasCustomConfig ? undefined : {
            // use 'configFile' must use 'context'
            // https://github.com/TypeStrong/ts-loader#context-string-defaultundefined
            // 'context': CONTEXT_ROOT,
            'configFileName': require.resolve('@beisen/ts/tsconfig.json')
          }
        }
    ]
};
