// cucumber.js
let common = [
    'features/**/*.feature',                // Specify our feature files
    '--require-module ts-node/register',    // Load TypeScript module
    '--require step-definitions/**/*.ts',   // Load step definitions
    '--format progress-bar',                // Load custom formatter
    '--format @cucumber/pretty-formatter',  // Load custom formatter
    '--format-options \'{"theme":{"datatable border":["green"],"datatable content":["green","italic"],"docstring content":["green","italic"],"docstring delimiter":["green"],"feature description":["green"],"feature keyword":["bold","green"],"rule keyword":["yellow"],"scenario keyword":["greenBright"],"scenario name":["green","underline"],"step keyword":["bgGreen","black","italic"],"step text":["greenBright","italic"],"tag":["green"]}}\'', // Load custom formatter
].join(' ');

module.exports = {
    default: common
};