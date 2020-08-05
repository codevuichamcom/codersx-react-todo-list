import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TodoItem.css';
import check from '../img/check.svg';
import checkComplete from '../img/check-complete.svg';
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

                <img onClick={onClick} src={urlImg} width={32} height={32} alt='' />
                <p>{item.title}</p>
                <img onClick={removeItem} src={eraser} width={32} height={32} alt='' />
            </div>
        );
    }
}
TodoItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        isComplete: PropTypes.bool
    }),
    onClick: PropTypes.func.isRequired,
    removeItem: PropTypes.func
}