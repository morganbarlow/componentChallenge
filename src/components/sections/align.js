import React, { Component } from 'react';

export default class Align extends Component {
    constructor() {
        super() 

        this.state = {
            display:"",
            justifyContent:"",
            alignItems: ""
        }

        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(event){
        if (event.target.name === "left") {
            console.log("left")
            this.setState ({
                display: "flex",
                justifyContent:"flex-start",
                alignItems: "center"                
            })
        }else if (event.target.name === "center") {
            console.log("center")
            this.setState ({
                display: "flex",
                justifyContent:"center",
                alignItems: "center"
            })
            
        } else if (event.target.name === "right") {
            console.log("right")
            this.setState ({
                display: "flex",
                justifyContent:"flex-end",
                alignItems: "center"
            })
        }
    }
  
    render() {
    return (
      <div className='align'>
        <div className= "align-container">
            <div className="to-align"
            style={{
                display:this.state.display,
                justifyContent:this.state.justifyContent,
                alignItems: this.state.alignItems
            }}>
                <h2>Align Me!</h2>
            </div>

            <button name="left" onClick = {this.handleClick}>LEFT</button>  
            <button name="center" onClick = {this.handleClick}>CENTER</button>  
            <button name="right" onClick = {this.handleClick}>RIGHT</button>  

        </div>
      </div>
    );
  }
}
