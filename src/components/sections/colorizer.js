import React, { Component } from "react";

export default class Colorizer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "",
            string : "Color Me" 
        }

        this.handleChangeString = this.handleChangeString.bind(this)
        this.handleChangeColor = this.handleChangeColor.bind(this)
    }

    handleChangeString = event => {
        this.setState({ string: event.target.value });
    };
    handleChangeColor = event => {
        this.setState({ color: event.target.value });
    }

    render() {
        return (
            <div className= "color-container">
                <div style = {{color: this.state.color}}>
                    <h2>{this.state.string}</h2>
                </div>
                <input type = "text" placeholder = "Type Me" value = {this.props.string} name="string-statment" onChange = {this.handleChangeString}></input>
                <input type = "text" placeholder = "Black" value = {this.state.color} name="color-string" onChange = {this.handleChangeColor}></input>
            </div>
        )
    }
}