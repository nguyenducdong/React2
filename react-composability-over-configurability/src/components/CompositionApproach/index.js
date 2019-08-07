import React, {Component} from 'react'

import Select from './Select'
import Option from './Option'


class CompositionApproach extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: props.options[0].value
        }
    }

    handleChange = value => {
        this.setState({value})
    }

    render(){
        return (
            <Select value={this.state.value} onchange={this.handleChange}>
                {this.props.options.map(item => 
                    <Option key={item.value} {...item}/>
                )}
            </Select>
        )
    }
}

export default CompositionApproach 