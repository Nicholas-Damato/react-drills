import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (value) => {
        this.setState({inputValue: value})
    }

    render(){
        return(
            <div>
                <h1> This is the Class Component </h1>
                <input value={this.state.inputValue} onChange={(e) => this.handleChange(e.target.value)} />
                <div>
                {this.state.inputValue}
                </div>
            </div>
        )
    }
}

export default ClassComponent