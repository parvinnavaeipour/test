import React from 'react';
import logo from './logo.png';
import './App.css';
import Plot from 'react-plotly.js';
import raf from "raf";
import BezierEditor from "bezier-easing-editor";
import libPackage from "bezier-easing-editor/package.json";
import Point from './Point';
import SvgCubicSpline from './SvgCubicSpline';
const mathLib = require('./mathLib.js');


class App extends React.Component {

  constructor()
  {
    super();
    this.state = null;
    // let x0=0;
    // let y0=0;
    // let x1=.5;
    // let y1=0.5;
    // let x2=1;
    // let y2=0;
    //transform
    // x0 = x0*400;
    // x1 = x1 * 400;
    // x2 = x2 * 400;
    // y0 = 400 * (1-y0);
    // y1 = 400 * (1-y1);
    // y2 = 400 * (1-y2);
    this.points = [ new Point(0,400), 
                    new Point(100,100),
                    new Point(300, 100),
                    new Point(450, 200), 
                    new Point(650,400)];
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React for SplineCOMB</h1>
        </header>
        <p className="App-intro">
          Click in SVG to add a knot on the curve.
        </p>

        <SvgCubicSpline points={this.points}/>
      </div>
    );
  }
}

export default App;




