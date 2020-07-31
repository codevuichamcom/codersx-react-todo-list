import React from 'react';
import logo from './logo.svg';
import './App.css';

const todos = ["Go to market", "Buy food", "Make dinner"];

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {todos.map(item => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    );
  }

}
