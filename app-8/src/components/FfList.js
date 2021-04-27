import React, { Component } from 'react'
import Characters from './Characters'
import axios from 'axios'

class FfList extends Component {
    constructor() {
        super()
        this.state = {
            ffCharacter: []
        }
    }

    componentDidMount() {
        axios.get('https://www.moogleapi.com/api/v1/characters/854f24ab-49aa-4d07-1023-08d6afcab3e2')
            .then((res) => this.setState({ ffCharacter: res.data }))
    }

    render() {
        const mappedChars = this.state.ffCharacter.map((element, index) => {
            return (
                <div key={element.id}>
                    <Characters characters={element} />
                </div>
            )
        })
        return (
            <div>
                {mappedChars}
            </div>
        )
    }
}

export default FfList