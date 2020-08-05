import React, { Component } from 'react';

import './Header.css'


import checkAll from '../img/check-all.svg';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        }
    }
    onChange = (event) => {
        const value = event.target.value;
        this.setState({ textValue: value })
    }
    onKeyUp = (event) => {
        var keyCode = event.keyCode;

        if(!keyCode){
            return;
        }
        if(keyCode===13){
            let value = this.state.textValue.trim();
            if(!value) return;
            this.props.parent.save(value);
            this.setState({textValue:''})
        }
    }
    render() {
        const{checkAllItem}=this.props;
        const {textValue} = this.state;
        return (
            <div className="Header">
                <img onClick={checkAllItem} src={checkAll} width={32} height={32} alt='' />
                <input type="text" placeholder="Enter new to do item" value={textValue}
                    onChange={(event) => { this.onChange(event) }}
                    onKeyUp={(event) => { this.onKeyUp(event) }} />

            </div>
        );
    }
}