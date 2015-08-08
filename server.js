/**
 *  server.js
 *  =========
 *  This is our Node entry point.
 *  Uses Express.js to serve our example.
 *
 *  @author: Ben Gundersen
 */
'use strict';

import express from 'express';

let server = express();
const PORT = 8080;

// Serve files from ./public/ as the root web directory.
// See http://expressjs.com/starter/static-files.html
server.use(express.static('public'));

console.log("Server is up at http://localhost:%d", PORT);
server.listen(PORT);