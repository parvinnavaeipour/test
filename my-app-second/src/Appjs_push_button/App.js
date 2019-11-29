import React from 'react';
import logo from './logo.png';
// import logo-footer '.logoo.png';
import footerdcl from './footerdcl.svg';
import kadomstev from './kadomstev.png';
import './App.css';
import Containers from './Containers';     ///extra line to use button   

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showContainers: false
    }
  }

      add() {
        this.setState({ showContainers: !this.state.showContainers });
      }

      render(){
        // const bar ={
        //     backgroundColor:"orange",
        //     padding:"100px",
        //             };
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

        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>*/}
        {/*</div>*/}
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
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
      {/*<button>COMPUTE</button>*/}
    
    {/*<button>DOWNLOAD</button>*/}
      <div className="Div"></div>

      <div className="button compute">
        { this.state.showContainers? <Containers /> : null }
        <button onClick={() => this.add()}>COMPUTE</button>
      </div>

      {/*<button className="button compute">COMPUTE</button>*/}

    {/*<button className="btn download">DOWNLOAD</button>*/}
      
      {/*</div>*/}
      <div className="Div"></div>
      <footer>
        <div className = "container">

          <div className ="row">

            {/*<div className = "col-sm-4 text center">*/}
              <img src = {kadomstev} className = "Kadomtsev" alt = "kad"/>
            {/*</div>*/}

            <div className = " footer-name">
              <p> Kadomstev Model</p>
            </div>  
            <div className = " App-Home">
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">HOME</a>
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">APP</a>
            </div>

            {/*<div className = "col-sm-4 text-right">*/}
              <img src = {footerdcl} className = "dcl" alt = "dcll"/>
            {/*</div>*/}

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


