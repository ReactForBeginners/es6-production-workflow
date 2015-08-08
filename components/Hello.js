'use strict';

import React from 'react';

class List extends React.Component {
  render() {
    console.log(this.props.items);
    var listItems = [...Array(this.props.items)].map((n, i) => <li key={i}>{ 'Item '+i }</li>);
    return (
      <ul>
        { listItems }
      </ul>
    );
  }
}

export default class Home extends React.Component {

  constructor() {
    super();
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