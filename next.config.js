require('dotenv').config();

// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const withPurgeCss = require('next-purgecss');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withSize = require('next-size');

function disableCacheDirectory(config) {
    config.module.rules
        .filter(({
            loader
        }) => loader === 'babel-loader')
        .map(l => (l.options.cacheDirectory = false))
}

const nextConfig = {
    distDir: 'build',
    purgeCss: {
        keyframes: true,
        fontFace: true
    },
    // Specify which files should be checked for selectors before deciding some imported css is not used:
    purgeCssPaths: ['pages/**/*', 'components/**/*'],
    webpack: (config, options) => {
        if (options.isServer) {
            //   config.plugins.push(new ForkTsCheckerWebpackPlugin());
        } else if (!options.dev) {
            // Only in a production environment, in the client-side webpack phase
            // does next configure splitChuunks
            // In practice this happens during "next build", and we don't care about
            // optimizing chunk settings during dev
            config.optimization.splitChunks.cacheGroups.commons.minChunks = 2;
        }

        disableCacheDirectory(config);

        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
    // publicRuntimeConfig
};

module.exports = withSize(withSass(withCss(nextConfig)));