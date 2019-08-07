import React, { Component } from 'react';

import Select from './Select';


class ConfigurationApproach extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: this.props.options[0].value
        }
    }

    handleChange = value => {
        this.setState({
            value
        })
    }

    render() {
        return (
            <Select value={this.state.value} options={this.props.options} onchange={this.handleChange}>
            </Select>
        )
    }
}

export default ConfigurationApproach;