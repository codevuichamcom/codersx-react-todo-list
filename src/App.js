import React, { Component } from 'react';
import './App.css';

import TodoItem from './component/TodoItem'

const todos = [
  { title: "Go to market", isComplete: true },
  { title: "Buy food", isComplete: true },
  { title: "Make dinner" }
];
export default class App extends Component {
  render() {
    return (
      <div className="App">
        {
          todos.map((item, index) => {
            return (<TodoItem key={index} item={item} />);
          })
        }
      </div>
    );
  }

}
