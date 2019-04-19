import React, { Component } from 'react';
class Button extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const {onClick, children, className=''} = this.props
        return (
            <button onClick={onClick} type="button" className={className}>{children}</button>
        )
    }
}

export default Button;