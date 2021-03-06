'use strict';

const prefixId = '[id="';
const postfix = '"]';

module.exports = {
  search: 'input',
  table: prefixId + 'example' + postfix,
  results: prefixId + 'example_info' + postfix,
};