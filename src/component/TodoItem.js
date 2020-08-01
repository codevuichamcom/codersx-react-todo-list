import React, { Component } from 'react';

const todos = ["Go to market", "Buy food", "Make dinner"];

export default class TodoItem extends Component {
    render() {
        return (
            <ul>
                {todos.map((item,index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        );
    }
}