import React, { Component } from 'react'

class ClassComponent extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <img src={this.props.url} />
                <div> PLACEHOLDER STUFF </div>
            </div>
        )
    }
}

export default ClassComponent