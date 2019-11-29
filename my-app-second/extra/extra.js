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



        const c00 = this.state.value00;
    const c11 = this.state.value11;
    const c22 = this.state.value22;
    const c33 = this.state.value33;
    const c44 = this.state.value44;
    const c55 = this.state.value55;
    const c66 = this.state.value66;
    const c77 = this.state.value77;
    

    let epsilon =  c00 - c11*Math.cos(2*parameter*Math.PI) + c22*Math.cos(4*parameter*Math.PI) - c33*Math.cos(6*parameter*Math.PI) - 
         c44*Math.cos(8*parameter*Math.PI) - c55*Math.cos(10*parameter*Math.PI) - c66*Math.sin(2*parameter*Math.PI) + 
         c77*Math.sin(4*parameter*Math.PI) + 1.6653345369377348e-16*Math.sin(6*parameter*Math.PI) + 0.0053051647697298365*Math.sin(8*parameter*Math.PI) - 
         2.220446049250313e-16*Math.sin(10*parameter*Math.PI);


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
            </tr>
        </thead>
        <tbody>
          <tr>
            
            <td><input  type="number" name="c00"
                        value={this.state.value00}
                        onChange={(e) => {
                          {/*console.log(e.target.value);*/}
                          this.setState({ value00: e.target.value })
                        }} /></td>
            <td><input  type="number" name="c11"
                        value={this.state.value11}
                        onChange={(e) => {
                          {/*console.log(e.target.value);*/}
                          this.setState({ value11: e.target.value })
                        }} /></td>
            <td><input  type="number" name="c22"
                        value={this.state.value22}
                        onChange={(e) => {
                          {/*console.log(e.target.value);*/}
                          this.setState({ value22: e.target.value })
                        }} /></td>
            <td><input  type="number" name="c33"
                        value={this.state.value33}
                        onChange={(e) => {
                          {/*console.log(e.target.value);*/}
                          this.setState({ value33: e.target.value })
                        }} /></td>
            <td><input  type="number" name="c44"
                        value={this.state.value44}
                        onChange={(e) => {
                          {/*console.log(e.target.value);*/}
                          this.setState({ value44: e.target.value })
                        }} /></td>
            <td><input  type="number" name="c55"
                        value={this.state.value55}
                        onChange={(e) => {
                          {/*console.log(e.target.value);*/}
                          this.setState({ value55: e.target.value })
                        }} /></td>
            <td><input  type="number" name="c66"
                        value={this.state.value66}
                        onChange={(e) => {
                          {/*console.log(e.target.value);*/}
                          this.setState({ value66: e.target.value })
                        }} /></td>
            <td><input  type="number" name="c77"
                        value={this.state.value77}
                        onChange={(e) => {
                          {/*console.log(e.target.value);*/}
                          this.setState({ value77: e.target.value })
                        }} /></td>
            
          </tr>
        </tbody>
      </table>


      after {
                  content:'\0190';


                   shapes: [

                //Quadratic Bezier Curves
                {
                  type: 'path',
                  path: 'M 0,0 Q 1,0.05 0.1,0',
                  line: {
                  color: 'rgb(93, 164, 214)'
                  }
                }
              ]


              <div className = "num_points">
      <input  type="number" name="line_resp"
              value={this.state.value8}
              onChange={(e) => {
              this.setState({ value8: e.target.value })
              }}
              
              height="50"/>
      </div>
      <div className="Div"></div>