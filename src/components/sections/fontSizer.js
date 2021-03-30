import React, { Component } from "react";

export default class FontSizer extends Component {
    constructor(){
        super()

        this.state = {
            size : 12,
            incriment : 1
        }

        this.handleClickBig = this.handleClickBig.bind(this)
        this.handleClickSmall = this.handleClickSmall.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClickBig(){
        this.setState ({
            size: this.state.size + (1 * this.state.incriment)
        })
    }

    handleClickSmall(){
        this.setState ({
            size: this.state.size - (1 * this.state.incriment)
        })
    }

    handleChange = event => {
        this.setState({ incriment: event.target.value });
    };

    render() {
        return(
            <div> 
                <div className="to-size" 
                style = {{fontSize : this.state.size}}> 
                    Size Me 
                </div>
                <button onClick = {this.handleClickBig}>Bigger</button>
                <button onClick = {this.handleClickSmall}>Smaller</button>
                <input type = "text" value = {this.state.incriment} onChange = {this.handleChange}></input>

            </div>
        )
    }
}