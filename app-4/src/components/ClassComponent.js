import React, { Component } from 'react'

class ClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    userName(username){
        this.setState({username: username})
    }

    passWord(password){
        this.setState({password: password})
    }

    login(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }


    render(){
        return(
            <div>
                <input onChange={(e) => this.userName(e.target.value)} />
                <input onChange={(e) => this.passWord(e.target.value)} />
                <button onClick={()=> this.login()}>Login</button>
            </div>
        )
    }
}

export default ClassComponent