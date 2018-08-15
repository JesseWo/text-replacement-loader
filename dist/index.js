'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = undefined;
exports.default = loader;

var _loaderUtils = require('loader-utils');

var _loaderUtils2 = _interopRequireDefault(_loaderUtils);

var _schemaUtils = require('schema-utils');

var _schemaUtils2 = _interopRequireDefault(_schemaUtils);

var _options = require('./options.json');

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.npmjs.com/package/schema-utils
function loader(content) {
  const options = _loaderUtils2.default.getOptions(this) || {};

  (0, _schemaUtils2.default)(_options2.default, options, 'Text Replacement Loader');

  const { test, replacement } = options;

  return content.replace(test, `${replacement}`);
} /**
   * Create by Jessewo 2018/08/15
   */
// https://github.com/webpack/loader-utils
const raw = exports.raw = false;