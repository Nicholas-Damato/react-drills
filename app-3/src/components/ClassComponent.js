import React, { Component } from 'react'

class ClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            snacks: ['Pretzels', 'Chips','Cookies', 'Donuts','Doritos'],
            inputValue: ''
        }
    }

    handleChange = (val) =>{
        this.setState({inputValue: val})
    }

    render(){
        let snackList = this.state.snacks.filter(element => {
            return element.includes(this.state.inputValue)
        })
        .map(element => {
            return <h2> {element} </h2>
        })

        return(
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)}/>
                <h2>{snackList}</h2>
            </div>
        )
    }
}

export default ClassComponent