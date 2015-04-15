var webpack = require('webpack');
var webpackConfig = require('tottys-project').webpackConfig({
    rootPath: __dirname,
    overrideUnderscoreWithLodash: false,
    styles: {
        enabled: false
    }
}).settings;
webpackConfig.resolve.alias.shared = webpackConfig.absPath('/src/shared/');
module.exports = require('tottys-project').gulpfile({
    rootPath      : __dirname,
    webpackConfig : webpackConfig,
});

module.exports = {
    webpackConfig: webpackConfig
}
