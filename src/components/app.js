import React, { Component } from 'react';

import Align from "./sections/align.js";
import HideShow from "./sections/hideShow.js";
import UpDown from "./sections/upDown.js";
import FontSizer from "./sections/fontSizer.js";
import Colorizer from "./sections/colorizer.js";
import Clock from "./sections/clock.js";



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <hr/>
        <div className='component'>
          <Align/>
        </div>
        <hr/>
        <div className='component'>
          <HideShow/>
        </div>
        <hr/>
        <div className='component'>
          <UpDown/>
        </div>
        <hr/>
        <div className='component'>
          <FontSizer/>
        </div>
        <hr/>
        <div className='component'>
          <Colorizer/>
        </div>
        <hr/>
        <div className = "component">
          <Clock/>
        </div>
        <hr/>
      </div>
    );
  }
}
