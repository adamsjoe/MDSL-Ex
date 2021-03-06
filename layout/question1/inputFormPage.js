'use strict';

const prefix = '[name="';
const postfix = '"]';

const radioPrefix = '[value="';

module.exports = {
  firstName: prefix + 'first_name' + postfix,
  lastName: prefix + 'last_name' + postfix,
  eMail: prefix + 'email' + postfix,
  phoneNumber: prefix + 'phone' + postfix,
  address: prefix + 'address' + postfix,
  city: prefix + 'city' + postfix,
  state: prefix + 'state' + postfix,
  zip: prefix + 'zip' + postfix,
  webhost: prefix + 'website' + postfix,
  hosting: prefix + 'hosting' + postfix,
  projectDesc: prefix + 'comment' + postfix,
  yesVal: radioPrefix + 'yes' + postfix,
  noVal: radioPrefix + 'no' + postfix,
};