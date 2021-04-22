import React, { Component } from 'react'
import Todo from './Todo'
import NewTask from './NewTask'

class List extends Component {
    constructor(){
        super()
        this.state ={
            list: []
        }
        
    }

    handleAddTask = (task) => {
        this.setState({ list: [...this.state.list, task]})
    }

    render(){
        let array = this.state.list.map(element => {
            return (
                <Todo task={element} />
            )
        })
        return(
            <div>
                <NewTask add={this.handleAddTask}/>
                {array}
            </div>
        )
    }
}

export default List