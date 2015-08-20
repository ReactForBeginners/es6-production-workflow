/**
 *  Hello.js
 *  Base react component for this example
 *  @author: Ben Gundersen
 */
'use strict';

var React = require('react');

var List = require('./List.js');


module.exports = React.createClass({

  getInitialState: function() {
    return {
      count: 0
    };
  },

  updateCount: function(num) {
    this.setState({
      count: this.state.count + num
    });
  },

  render: function() {
    return (
      <div>
        <h1>Hello React!</h1>
        <button onClick={ this.updateCount.bind(this, 1) }>+ More</button>
        <button onClick={ this.updateCount.bind(this, -1)}>- Less</button>
        <h2>{ this.state.count }</h2>
        <List items={ this.state.count } />
      </div>
    );
  }

});