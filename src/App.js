import React, { Component } from 'react';
import './App.css';

import TodoItem from './component/TodoItem'
import Header from './component/Header';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAll: false,
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
  save = (item) => {
    let newData = [...this.state.todos];
    newData.push({ title: item });
    this.setState({ todos: newData });
  }

  removeItem = (item) => {
    const { todos } = this.state;
    let index = todos.indexOf(item);
    let newData = [...todos]
    newData.splice(index, 1);
    this.setState({ todos: newData });
  }
  checkAllItem = () => {
    const { todos } = this.state;
    let newData = [...todos];
    let isAll = this.state.isAll;
    isAll = !isAll;
    for (let i = 0; i < newData.length; i++) {
      newData[i].isComplete = isAll;
    }

    
    this.setState({ todos: newData, isAll: isAll });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Header parent={this} checkAllItem={this.checkAllItem} />
        {
          todos.map((item, index) => {
            return (
              <TodoItem
                key={index}
                item={item}
                onClick={() => { this.onItemClicked(item) }}
                removeItem={() => this.removeItem(item)} />);
          })
        }
      </div>
    );
  }

}
