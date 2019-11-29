import React from 'react';
import logo from './logo.png';
// import logo-footer '.logoo.png';
import footerdcl from './footerdcl.svg';
import kadomstev from './kadomstev.png';
import './App.css';
import Containers from './Containers';     ///extra line to use button 
import ellipse from 'react-lines-ellipsis'  
// import { Ellipse, Somet } from './frefe'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    
      startPoint: { x: 10, y: 10 },
      controlPoint: { x: 190, y: 100 },
      endPoint: { x: 10, y: 190 },

      draggingPointId: null,
  
    };
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


  render(){
    const { viewBoxWidth, viewBoxHeight } = this.props;
    const {
    startPoint,
    controlPoint,
    endPoint,
    } = this.state;

    
    const instructions = `
      M ${startPoint.x},${startPoint.y}
      Q ${controlPoint.x},${controlPoint.y}
        ${endPoint.x},${endPoint.y}
    `;

   

    return (
    
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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <a
//         href="https://www.w3schools.com/w3css/4/w3.css"
//         rel="stylesheet"
//         ></a>
//         <div class="w3-bar w3-border w3-light-grey"></div>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. Hello world!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;


