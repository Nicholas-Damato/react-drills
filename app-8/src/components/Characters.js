import React, { Component } from 'react'

class Characters extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        const { characters } = this.props
        return (
            <div>
                <h1> Character Name: {characters.name} </h1>
                <h3> Age: {characters.age} </h3>
                <h3> Gender: {characters.gender} </h3>
                <h3> Race: {characters.race} </h3>
                <h3> Job: {characters.job} </h3>
                <h3> Origin: {characters.origin} </h3>
                <p> Description: {characters.description} </p>
                <img alt={characters.name} src={characters.pictures[0].url} />
            </div>
        )
    }
}

export default Characters