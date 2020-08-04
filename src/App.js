import React, { Component } from 'react';
import './App.css';

import TodoItem from './component/TodoItem'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { title: "Go to market", isComplete: true },
        { title: "Buy food", isComplete: true },
        { title: "Make dinner" }
      ]
    }
  }
  onItemClicked = (item) => {
    let isComplete = item.isComplete;
    const { todos } = this.state;
    let index = todos.indexOf(item);
    let newData = [...todos]
    newData[index].isComplete = !isComplete;
    this.setState({ todos: newData });

  }
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        {
          todos.map((item, index) => {
            return (
              <TodoItem
                key={index}
                item={item}
                onClick={(event) => { this.onItemClicked(item) }} />);
          })
        }
      </div>
    );
  }

}
