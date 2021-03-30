import React, { Component } from "react";

export default class Clock extends Component {
    constructor() {
        super()

        this.state = {
            hours: 11,
            minutes: 47,
            seconds: 50
        }
    }
    
    render() {
        return(
            <div className="clock-container">
                <h2>My Clock</h2>

                <div className="time">
                    {this.state.hours}:{this.state.minutes}:{this.state.seconds}
                </div>
            </div>
        )
    }
}