import React, { Component } from "react";

export default class HideShow extends Component {
    constructor() {
        super()

        this.state = {
            isActive: true,
            button: "HIDE"
        }

        this.handleHide=this.handleHide.bind(this);
        this.handleShow=this.handleShow.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    
    handleHide() {
        this.setState ({
            isActive: false,
            button: "SHOW"
        })
    }
    
    handleShow() {
        this.setState ({
            isActive: true,
            button: "HIDE"
        })
    }
    
    handleClick() {
        {this.state.isActive ? this.handleHide() : this.handleShow()}
    }

    render() {
        return (
            <div className= "hide-show-container">
                {this.state.isActive ? <h2>Hide Me</h2> : null}
                <button onClick = {this.handleClick}>{this.state.button}</button>
            </div>
        )
    }
}