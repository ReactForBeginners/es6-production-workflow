/**
 *  Hello.js
 *  Base react component for this example
 *  @author: Ben Gundersen
 */
'use strict';

import React from 'react';

import List from './List.js';


export default class Home extends React.Component {

  constructor() {
    super();
    // Note that we set state directly in the constructor; no getInitialState method is needed
    this.state = {
      count: 0
    }
  }

  updateCount(num) {
    this.setState({
      count: this.state.count + num
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={ this.updateCount.bind(this, 1) }>+ More</button>
        <button onClick={ this.updateCount.bind(this, -1)}>- Less</button>
        <h2>{ this.state.count }</h2>
        <List items={ this.state.count } />
      </div>
    );
  }

}