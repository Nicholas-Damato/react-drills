import React, { Component } from 'react'

class ClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            inputValue: '',
            array: []
        }
    }

    handleChange(value){
        this.setState({inputValue: value})
    }

    add(){
        this.setState({
            array: [...this.state.array, this.state.inputValue],
            inputValue: ''
        })
    }

    render(){
        let array1 = this.state.array.map(element =>{
            return (
                <h3> {element} </h3>
            )
        })

        return(
            <div>
                <h1> My to-do List: </h1>
                <input onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={() => this.add()}> Add </button>
                <h3> {array1} </h3>
            </div>
        )
    }
}

export default ClassComponent