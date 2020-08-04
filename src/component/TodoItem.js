import React, { Component } from 'react';

import './TodoItem.css'

export default class TodoItem extends Component {
    render() {
        let { item,onClick } = this.props;
        let className = "TodoItem";

        if (item.isComplete) {
            className += " TodoItem-complete";
        }
        return (
            <div className={className} onClick={onClick}>
                <p>{item.title}</p>
            </div>
        );
    }
}