import React, { Component } from "react";

export default class UpDown extends Component {
    constructor() {
        super()

        this.state = {
            number: 0
        }
        
        this.handleClickUp=this.handleClickUp.bind(this)
        this.handleClickDown=this.handleClickDown.bind(this)

    }

    handleClickUp() {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleClickDown() {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return (
            <div className = "up-down-container">
                <div>
                    {this.state.number}
                </div>

                <button onClick= {this.handleClickUp}>
                    up
                </button>

                <button onClick = {this.handleClickDown}>
                    Down
                </button>
            </div>
        )
    }
}