/**
 *
 *
 *
 */

// Babel require hook. All subsequent required files (.js, .jsx, .es, .es6) will be
// transformed by Babe after this.
// See https://babeljs.io/docs/usage/require/
require('babel/register');
// Our server-side entry point.
require('./server.js');
