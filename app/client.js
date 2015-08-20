/**
 * client.js
 * =========
 * Client-side entry point.
 *
 * @author: Ben Gundersen
 */
'use strict';

import React from 'react';

// Our first component!
import Hello from './components/Hello.js';

// Renders to the 'root' div (see index.html)
React.render(<Hello />, document.getElementById('root'));