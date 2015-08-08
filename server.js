/**
 *  main.js
 *  This is our entry point. Because of the require hook in index.js, we can use ES6!
 */

import express from 'express';

let server = express();

// Serve files from public/ as the root web directory.
// See http://expressjs.com/starter/static-files.html
server.use(express.static('public'));

const port = 8080;
console.log("Server is up at http://localhost:%d", port);
server.listen(port);