# Production workflow
Sample project using React, Babel, and Gulp to illustrate how to prepare your web app for production, automate repetitive tasks, and take advantage of emerging Javascript standards while maintaining compatibility.

## What you'll find here
Contains examples of:
 - Creating React components as ES6 classes
   + No getInitialState needed
   + Must bind event callbacks (only React.createClass does this)
 - JSX transform, free courtesy of Babel
 - Unidirectional data flow
 - Browserify + Babelify = ES6 on the client
 - Babel require hook = ES6 on the server
 - Simple Express static server for this example
 - Playing with ES6
   + export default, extends, super
   + Fat arrow function
   + Spread operator ...


### Getting started
If you don't have Gulp installed:

    sudo npm install gulp -g

Clone repo, then

    npm install
    npm start
    
That's it!
