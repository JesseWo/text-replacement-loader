/**
 * Create by Jessewo 2018/08/15
 */
// https://github.com/webpack/loader-utils
import loaderUtils from 'loader-utils';
// https://www.npmjs.com/package/schema-utils
import validateOptions from 'schema-utils';

import schema from './options.json';

export default function loader(content) {
  const options = loaderUtils.getOptions(this) || {};

  validateOptions(schema, options, 'Text Replacement Loader');

  const { test, replacement } = options;

  return content.replace(test, `${replacement}`);
}

export const raw = false;
