import React from 'react';
import logo from './logo.png';
// import logo-footer '.logoo.png';
import footerdcl from './footerdcl.svg';
import kadomstev from './kadomstev.png';
import './App.css';
import Containers from './Containers';     ///extra line to use button  
import Plot from 'react-plotly.js';
import raf from "raf";
import BezierEditor from "bezier-easing-editor";
import libPackage from "bezier-easing-editor/package.json";
const mathLib = require('./mathLib.js');


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showContainers: false,
      showContainer: false,
      ////// table 
      value0: 0,
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0,
      value6: 0,
      value7: 0, 
      value8: 0,
      value00: 0,
      value11: 0,
      value22: 0,
      value33: 0,
      value44: 0,
      value55: 0,
      value66: 0,
      value77: 0,
      value88: 0,
      value99: 0,
      value10: 0,
      ///// Bezier curve
      startPoint: { x: 0, y: 0 },
      controlPoint: { x: 190, y: 100 },
      endPoint: { x: 1, y: 0 },
      draggingPointId: null,
      value: [ Math.random()/2, Math.random()/2, (1+Math.random())/2, (1+Math.random())/2 ],
      progress: 0

   
    }
  }

  add() {
    this.setState({ showContainers: !this.state.showContainers });
  }

  adds() {
    this.setState({ showContainer: !this.state.showContainer });
  }

  handleMouseDown(pointId) {
    this.setState({ draggingPointId: pointId });
  }

  handleMouseUp() {
    this.setState({ draggingPointId: null });
  }

  handleMouseMove({ clientX, clientY }) {
    const { viewBoxWidth, viewBoxHeight } = this.props;
    const { draggingPointId } = this.state;

  
    if (!draggingPointId) {
      return;
    }
    
    const svgRect = this.node.getBoundingClientRect();
    const svgX = clientX - svgRect.left;
    const svgY = clientY - svgRect.top;
    const viewBoxX = svgX * viewBoxWidth / svgRect.width;
    const viewBoxY = svgY * viewBoxHeight / svgRect.height;
    this.setState({
      [draggingPointId]: { x: viewBoxX, y: viewBoxY },
    });
  }

  calculateResult() {
    // var line_resp1 = 100
    const line_resp1 = this.state.value8;
    const c0 = this.state.value0;
    const c1 = this.state.value1;
    const c2 = this.state.value2;
    const c3 = this.state.value3;
    const c4 = this.state.value4;
    const c5 = this.state.value5;
    const c6 = this.state.value6;
    const c7 = this.state.value7;
    const c00 = this.state.value00;
    const c11 = this.state.value11;
    const c22 = this.state.value22;
    const c33 = this.state.value33;
    const c44 = this.state.value44;
    const c55 = this.state.value55;
    const c66 = this.state.value66;
    const c77 = this.state.value77;
    const c88 = this.state.value88;
    const c99 = this.state.value99;
    const c10 = this.state.value10;

    // var parameter = 0.1

    let parameters = mathLib.linspacee(0, 1, line_resp1, 0)
    console.log(parameters)

    let xax = []
    let yax = []
    for (const [num, parameter] of parameters.entries()){
      
      console.log('starting poincare plot ', num)

    let alpha = c0 - c1*Math.cos((4*Math.PI*parameter)) - c2*Math.cos(8*Math.PI*parameter) 
          - c3*Math.sin((2*Math.PI*parameter)) + c4*Math.sin((4*Math.PI*parameter)) - c5*Math.sin((6*Math.PI*parameter))
          - c6*Math.sin((8*Math.PI*parameter)) + c7*Math.sin((10*Math.PI*parameter))

    let epsilon =  c00 - c11*Math.cos(2*parameter*Math.PI) + c22*Math.cos(4*parameter*Math.PI) - c33*Math.cos(6*parameter*Math.PI) - 
         c44*Math.cos(8*parameter*Math.PI) - c55*Math.cos(10*parameter*Math.PI) - c66*Math.sin(2*parameter*Math.PI) + 
         c77*Math.sin(4*parameter*Math.PI) + c88*Math.sin(6*parameter*Math.PI) + c99*Math.sin(8*parameter*Math.PI) - 
         c10*Math.sin(10*parameter*Math.PI);


    this.setState({ alpha, epsilon, xax, yax });
    // this.setState({xax.push(epsilon), yax.push(alpha)})
    xax.push(epsilon)
    yax.push(alpha)
    console.log(alpha, epsilon)
    console.log(yax)
    }
  }

   componentDidMount() {
    const loop = (t) => {
      this._loopId = raf(loop);
      this.setState({
        progress: (t/2000) % 1
      });
    };
    this._loopId = raf(loop);
  }

  componentWillUnmount() {
    raf.cancel(this._loopId);
  }

  onChange = (value) => {
    this.setState({ value });
  }



  render() {
    const { viewBoxWidth, viewBoxHeight } = this.props;
    const {
    startPoint,
    controlPoint,
    endPoint,
    value,
    progress,
    } = this.state;

    
    const instructions = `
      M ${startPoint.x},${startPoint.y}
      Q ${controlPoint.x},${controlPoint.y}
        ${endPoint.x},${endPoint.y}
    `;


        
  return (
    <div className="App">
      <header className="App-header">
        <div className="box"></div>

        <div className="logo-row">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="name">PRINCETON<br></br>PLASMA PHYSICS<br></br>LABRATORY</a>
        </div>

        <div className = "div"></div>

        <a className="words"> A Collaborative National Center for Fusion & Plasma Research</a>
      </header>

      {/*<div className="Div"></div>*/}
      <div className = "bodyDiv"></div>
      <body>
      
          <a className="head"> Analytical toy model for the Kadomtsev Sawtooth</a>
     
        <div>
          <p className="authors"> Chris Smiet & Ralf Mackenbach<br></br> Princeton Plasma Physics Labratory</p>
        </div> 
        <div> 
          <p className="abstract"> Chris & Ralf to write their own abstract Chris & Ralf to write their own abstract Chris & Ralf to write their own 
          abstract Chris & Ralf to write their own abstract
          Chris & Ralf to write their own abstract Chris & Ralf to write their own abstract Chris & Ralf to write their own abstract Chris & Ralf to 
          write their own abstract
          </p>
        </div>
        <div>
          <p className="title"> I. Introduction</p>
          <div className = "div"></div>
          <p className="magazine">Chris & Ralf introduction. Chris & Ralf introduction Chris & Ralf hhhhhhh introduction Chris & Ralf introduction
          Chris & Ralf introduction Chris & Ralf introduction. Chris & Ralf introduction Chris & Ralf introduction Chris & Ralf introduction Chris & Ralf introduction
          Chris & Ralf introduction Chris & Ralf introduction. Chris & Ralf introduction Chris & Ralf introduction Chris & Ralf introduction Chris & Ralf introduction
          </p>
        </div>
        {/*</div>*/}

       
      <div className="Div"></div>

      <table className="main" >
        <thead>
          <tr> 
            <th><b>Parameter</b></th>
            <th><b>Symbol</b></th> 
            <th><b>Value(s)</b></th> 
            <th><b>Unit(s)</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
      
    
   
      <div className="Div"></div>

      <div className="button compute">
        { this.state.showContainers? <Containers /> : null }
        <button onClick={() => this.add()}>COMPUTE</button>
      </div>

      <div className="Div"></div>

      <div className = "num_points">
      <input  type="number" name="line_resp"
              value={this.state.value8}
              onChange={(e) => {
              this.setState({ value8: e.target.value })
              }}
              
              height="50"/>
      </div>
      <div className="Div"></div>

      <table className="user" >
        <thead>
          <tr> 
            <th><b>c0</b></th> 
            <th><b>c1</b></th> 
            <th><b>c2</b></th>
            <th><b>c3</b></th>
            <th><b>c4</b></th> 
            <th><b>c5</b></th> 
            <th><b>c6</b></th>
            <th><b>c7</b></th> 
            </tr>
        </thead>
        <tbody>
          <tr>
            
            <td><input  type="number" name="c0"
                        value={this.state.value0}
                        onChange={(e) => {
                        this.setState({ value0: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c1"
                        value={this.state.value1}
                        onChange={(e) => {
                        this.setState({ value1: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c2"
                        value={this.state.value2}
                        onChange={(e) => {
                        this.setState({ value2: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c3"
                        value={this.state.value3}
                        onChange={(e) => {
                        this.setState({ value3: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c4"
                        value={this.state.value4}
                        onChange={(e) => {
                        this.setState({ value4: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c5"
                        value={this.state.value5}
                        onChange={(e) => {
                        this.setState({ value5: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c6"
                        value={this.state.value6}
                        onChange={(e) => {
                        this.setState({ value6: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c7"
                        value={this.state.value7}
                        onChange={(e) => {
                        this.setState({ value7: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            
          </tr>
        </tbody>
      </table>

      <div className="Div"></div>

         <table className="user" >
        <thead>
          <tr> 
            <th><b>c00</b></th> 
            <th><b>c11</b></th> 
            <th><b>c22</b></th>
            <th><b>c33</b></th>
            <th><b>c44</b></th> 
            <th><b>c55</b></th> 
            <th><b>c66</b></th>
            <th><b>c77</b></th>
            <th><b>c88</b></th> 
            <th><b>c99</b></th>
            <th><b>c10</b></th> 
            </tr>
        </thead>
        <tbody>
          <tr>
            
            <td><input  type="number" name="c00" 
                        value={this.state.value00}
                        onChange={(e) => {
                        this.setState({ value00: e.target.value })
                        }}
                        onkeydown="return event.keyCode !== 69" /></td>
            <td><input  type="number" name="c11"
                        value={this.state.value11}
                        onChange={(e) => {
                        this.setState({ value11: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c22"
                        value={this.state.value22}
                        onChange={(e) => {
                        this.setState({ value22: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c33"
                        value={this.state.value33}
                        onChange={(e) => {
                        this.setState({ value33: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c44"
                        value={this.state.value44}
                        onChange={(e) => {
                        this.setState({ value44: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c55"
                        value={this.state.value55}
                        onChange={(e) => {
                        this.setState({ value55: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c66"
                        value={this.state.value66}
                        onChange={(e) => {
                        this.setState({ value66: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c77"
                        value={this.state.value77}
                        onChange={(e) => {
                        this.setState({ value77: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
                         <td><input  type="number" name="c88"
                        value={this.state.value88}
                        onChange={(e) => {
                        this.setState({ value88: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c99"
                        value={this.state.value99}
                        onChange={(e) => {
                        this.setState({ value99: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            <td><input  type="number" name="c10"
                        value={this.state.value10}
                        onChange={(e) => {
                        this.setState({ value10: e.target.value })
                        }} 
                        onkeydown="return event.keyCode !== 69"/></td>
            
          </tr>
        </tbody>
      </table>

      <div className="Div"></div>

      <div className="button compute">
        {/*{ this.state.showContainer? <Container /> : null }*/}
        <button onClick={() => this.calculateResult()}>CALCULATE</button>
      </div>

      <div>
        <Plot 
          data= {[
            {
              x: this.state.xax,
              y: this.state.yax,
              type: 'scatterg1', 
              mode: 'points',
              marker: {color: 'red'}, 
              name: 'Data Testing '
              }
            ]}
              layout ={{
              width: '700', height: '400', 
              title: 'Path epsilon-alpha space', 
              xaxis: {
                range: [0, 1],
                zeroline: true, 
                title: '\epsilon' 
              },
              yaxis: {
                range: [-0.05, 0.1],
                showgrid: false, 
                title: '\alpha'
              },
              width: 500,
              height: 500,
             
            }}
        />
      </div>

       <svg
          ref={node => (this.node = node)}
          viewBox = {`0 0 ${viewBoxWidth} ${viewBoxHeight}`}   
          onMouseMove={ev => this.handleMouseMove(ev)}
          onMouseUp={() => this.handleMouseUp()}
          onMouseLeave={() => this.handleMouseUp()}
          style={{ overflow: 'visible' }}
        >
          <ConnectingLine
            from={startPoint}
            to={controlPoint}
          />

          <ConnectingLine from={controlPoint} to={endPoint} />

          <Curve instructions={instructions} />

            <LargeHandle
              coordinates={startPoint}
              onMouseDown={() =>
                this.handleMouseDown('startPoint')
              }
            />

            <LargeHandle
              coordinates={endPoint}
              onMouseDown={() =>
                this.handleMouseDown('endPoint')
            }
            />

            <SmallHandle
              coordinates={controlPoint}
              onMouseDown={() =>
                this.handleMouseDown('controlPoint')
              }
            />
        </svg>

      <div className="Div"></div>

      <BezierEditor
        className="bezier"
        value={value}
        onChange={this.onChange}
        progress={progress}
        handleStroke={3}
        handleRadius={6}
        curveWidth={3}
      >
        <text x={0} y={16} fill="#f00">Controlled Bezier Editor</text>
      </BezierEditor>

      
      
      <div className="Div"></div>
      <footer>
        <div className = "container">

          <div className ="row">

            {/*<div className = "col-sm-4 text center">*/}
            <img src = {kadomstev} className = "Kadomtsev" alt = "kad"/>
         

            <div className = " footer-name">
              <p> Kadomstev Model</p>
            </div>  
            <div className = " App-Home">
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">HOME</a>
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">APP</a>
            </div>

            {/*<div className = "col-sm-4 text-right">*/}
            <img src = {footerdcl} className = "dcl" alt = "dcll"/>
            

          </div>
            
          <div className = "sec-row">
            <div className = "col1">
              <p> © 2019 Kadomtsev Model. All right reserved. </p>
            </div>
            <div className="col2" >
              <a href = "https://reactjs.org"> Privacy Policy</a>
              <a href = "https://reactjs.org"> Terms of Service</a>
            </div>
          </div> 

        </div>
      </footer>
    </body>

    </div>
    
    
  );

      }
}

const ConnectingLine = ({ from, to }) => (
  <line
     
    x1={from.x}
    y1={from.y}
    x2={to.x}
    y2={to.y}
    stroke="rgb(200, 200, 200)"
    strokeDasharray="5,5"
    strokeWidth={2}
  />
);

// console.log(ConnectingLine)

const Curve = ({ instructions }) => (
  <path
    
    d={instructions}
    fill="none"
    stroke="rgb(213, 0, 249)"
    strokeWidth={5}
  />
);

const LargeHandle = ({ coordinates, onMouseDown }) => (
  <ellipse
    
    cx={coordinates.x}
    cy={coordinates.y}
    rx={15}
    ry={15}
    fill="rgb(244, 0, 137)"
    onMouseDown={onMouseDown}
    style={{ cursor: '-webkit-grab' }}
  />
);

const SmallHandle = ({ coordinates, onMouseDown }) => (
  <ellipse
    
    cx={coordinates.x}
    cy={coordinates.y}
    rx={8}
    ry={8}
    fill="rgb(255, 255, 255)"
    stroke="rgb(244, 0, 137)"
    strokeWidth={2}
    onMouseDown={onMouseDown}
    style={{ cursor: '-webkit-grab' }}
  />
);

export default App;


