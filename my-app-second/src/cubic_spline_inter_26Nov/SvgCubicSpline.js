import React, { Component } from 'react';
import Point from './Point';
import Line from './Line';
import COMB from './COMB';
import CubicSpline from './CubicSpline';

class SvgCubicSpline extends Component {
    constructor(props)
    {
        super();
        this.state = null;
        this.points = props.points;

        this.spline = new CubicSpline();
        this.spline.setKnotsFromPoints(this.points);

        //this.clickHandler = this.clickHandler.bind(this);
    }

    getSvgBound()
    {
        this.svg = document.getElementById('idSvg');
        if(null!=this.svg)
            this.svgBound = this.svg.getBoundingClientRect();
    }

    clickHandler(e)
    {
        if(typeof(this.svg)==="undefined")
            this.getSvgBound();

        if(typeof(this.svgBound)==="undefined")
            return;

        var pos = new Point(e.clientX-this.svgBound.left, e.clientY-this.svgBound.top);
        this.spline.append(pos);

        // re-render
        this.setState({'nodes':'add'})
      }

    /*
     * get SVG path elements that make up spline
     */
    createElements()
    {
        /*
         * consider these examples
         * https://www.w3schools.com/graphics/svg_path.asp
         */
        if(!this.spline.hasKnots)
            return null;

        var minX = this.spline.minX;
        var maxX = this.spline.maxX;
        this.spline.formulate();

        this.interpolate(minX, maxX);       // interpolate all points on curve
        this.createKnots(minX, maxX);       // create svg knots elements
        this.createPieceswise(minX, maxX);  // create piecewise segments
        //this.createCOMB();
    }

   /*
    * COMB
    * http://www.aliasworkbench.com/theoryBuilders/TB5_evaluate1.htm
    *
    * 1. Curvature (height) = 1 / radius (a proportional value)
    * 2. radius = intersection of 2 tangent lines
    * 3. tangent line = tangent of a point on the spline curve.
    * 4. point on spline curve = calculated or knot value.
    */
    createCMOB()
    {
        var comb = new COMB(this.knot2Draw);
        comb.calculateOrthogonals();

        this.normals2Draw = [];
        this.curve2Draw = [];
        var last = null;
        for(var i=0; i<this.knots2Draw.length; i++)
        {
            // create SVG normal lines
            var line = comb.getNormalByIndex(i);
            this.normals2Draw.push(this.createLine( line.pointStart.x,
                                                    line.pointStart.y,
                                                    line.pointEnd.x,
                                                    line.pointEnd.y));
            last = line;

            // draw COMB curve line
            if(null!=last)
                this.curve2Draw.push(this.createLine(last.pointEnd.x,
                                                    last.pointEnd.y,
                                                    line.pointEnd.x,
                                                    line.pointEnd.y));
        }
    }

    createKnots(minX, maxX)
    {
        // create a dot for each knot 
        this.knots2Draw = [];
        for(var i=0; i<this.spline.arySrcX.length; i++)
        {
            var x = this.spline.arySrcX[i];
            var y = this.spline.arySrcY[i];
            this.knots2Draw.push(this.createDot(x, y, 3));
        }
    }

    interpolate(minX, maxX)
    {
        // create a dot for every x position
        this.dots2Draw = [];        
        this.curveY = [];
        for(var x=minX; x<maxX; x++)
        {
            var y = this.spline.interpolateY(x);
            this.curveY.push(y);
        }
    }

    createDot(x, y, radius)
    {
        return (<circle className="point" cx={x} cy={y} r={radius} />);
    }

    slopeRMS(slope0, slope1)
    {
        var s = slope1 - slope0;
        var rms = Math.sqrt(s*s);
        return rms;
    }

    createPieceswise(minX, maxX)
    {
        // draw lines - can be optimized 
        var slope0 = (this.curveY[1]-this.curveY[0]);
        var p0 = new Point(minX, this.curveY[0]);

        var p1 = null;
        this.lines2Draw = [];
        var len = this.curveY.length;
        for(var i=1; i<len; i++)
        {
            // calculate slope
            var slope1 = (this.curveY[i+1]-this.curveY[i]);
            
            // when slope changes
            if(this.slopeRMS(slope0, slope1)>0.1)
            {
                p1 = new Point(i+minX, this.curveY[i]);
                // console.log(p1)
                this.lines2Draw.push(this.createLine(p0, p1));
                this.dots2Draw.push(this.createDot(p1.x, p1.y, 2));
                // console.log(p1.y)

                p0 = p1;
                slope0 = slope1;
            }
        }
        // last line segment
        this.lines2Draw.push(this.createLine(p0, new Point(maxX, this.curveY[len-1])));
    }

    createLine(p0, p1)
    {
        return (<line x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y}/>);
    }

    getLines()
    {
        return (<g stroke="green" strokeWidth="1">
                {this.lines2Draw}
                </g>);
    }

    getLineDots()
    {
        return (<g stroke="black" strokeWidth="0" fill="black">
                {this.dots2Draw}
                </g>);
    }

    getCurveKnots()
    {
        return (<g stroke="red" strokeWidth="1" fill="red">
        {this.knots2Draw}
        </g>);
    }

    /*
     * COMB function elements below
     */
    getCOMBNormals()
    {
        return (<g stroke="blue" strokeWidth="1">
        {this.normals2Draw}
        </g>);
    }

    getCOMBCurve()
    {
        return (<g stroke="blue" strokeWidth="1">
        {this.curve2Draw}
        </g>);
    }

    render() {
        this.createElements();
        
        return (
        <svg id="idSvg" width="800" height="800" onClick={this.clickHandler.bind(this)}>
            {/*<g transform="scale(2)">*/}
            {this.getLines()}        
            {this.getLineDots()}
            {this.getCurveKnots()}
            {/*</g>*/}
            
        </svg>);
    }
}

export default SvgCubicSpline;