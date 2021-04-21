import React, { Component } from 'react'

class ClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            snacks: ['Pretzels','Chips','Cookies','Donuts','Doritos']
        }
    }

    render(){
        let mappedList = this.state.snacks.map(snacks => {
            return (
                <h2>{snacks}</h2>
            )
        })
        return(
            <div>
                <h2>{mappedList}</h2>
            </div>
        )
    }
}

export default ClassComponent