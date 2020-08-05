import React, { Component } from 'react';

import './TodoItem.css'
import classNames from 'classnames'
import check from '../img/check.svg'
import checkComplete from '../img/check-complete.svg'
import eraser from '../img/eraser.svg';
export default class TodoItem extends Component {
    render() {
        let { item, onClick, removeItem } = this.props;
        let urlImg = check;
        if (item.isComplete) {
            urlImg = checkComplete;
        }
        return (
            <div className={classNames('TodoItem',
                { 'TodoItem-complete': item.isComplete })}>

                <img onClick={onClick} src={urlImg} width={32} height={32} />
                <p>{item.title}</p>
                <img onClick={removeItem} src={eraser} width={32} height={32}/>
            </div>
        );
    }
}