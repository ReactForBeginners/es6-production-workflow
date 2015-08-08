/**
 * List.js
 * In the Hello.js example, creates a list of elements
 * @author: Ben Gundersen
 */
'use strict';

import React from 'react';

export default class List extends React.Component {
  render() {
    let listItems = [];
    if(this.props.items > 0) {
      listItems = [...Array(this.props.items)].map((n, i) => <li key={i}>{ 'Item ' + i }</li>);
    }
    return (
      <ul>
        { listItems }
      </ul>
    );
  }
}