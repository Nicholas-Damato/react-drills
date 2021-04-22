import React, { Component } from 'react'

class NewTask extends Component{
    constructor(){
        super()

        this.state = {
            inputValue: ''
        }
    }

    handleChange(value) {
        this.setState({inputValue: value})
    }

    add = () => {
        this.props.add(this.state.inputValue)
        this.setState({inputValue: ''})
    } 

    render(){
        return(
            <div>
            <input value={this.state.inputValue} onChange={(e) => this.handleChange(e.target.value)} />
            <button onClick={() => this.add()}> Add </button>
            </div>
        )
    }
}

export default NewTask