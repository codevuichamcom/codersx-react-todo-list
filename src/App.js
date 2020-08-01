import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './component/TodoItem'

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoItem/>
      </div>
    );
  }

}
