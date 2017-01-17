import React from 'react'
import Usage from '../../Usage'
/* global $ */

function validate(value, maximum) {
    if (typeof(value) === 'string') {
        if(value.match(/^[\+-]?[0-9]+(\.[0-9]+)?$/)) {
            let new_value = Number.parseFloat(value);
            if(Math.abs(new_value) > maximum){
                return false;
            } else {
                return new_value;
            }
        } else {
            return false;
        }
    }
}
var DatawcCoordinates = React.createClass({
    propTypes: {
        updateGraphicsMethod: React.PropTypes.func,
        x1: React.PropTypes.number,
        x2: React.PropTypes.number,
        y1: React.PropTypes.number,
        y2: React.PropTypes.number,
    },
    handleBlur(e) {
        this.props.updateGraphicsMethod(e.target.name, parseFloat(e.target.value));
    },
    render(){
        let x1_usage = "The starting value for the X axis. Set to 1e+20 to determine automatically based on your data."
        let x2_usage = "The ending value for the X axis. Set to 1e+20 to determine automatically based on your data."
        let y1_usage = "The starting value for the Y axis. Set to 1e+20 to determine automatically based on your data."
        let y2_usage = "The endinge value for the Y axis. Set to 1e+20 to determine automatically based on your data."

        return (
            <div className='col-md-12'>
                <h4>World Coordinates</h4>
                <div className='col-md-12'>
                    <div className="row">
                        <div className='col-md-6'>
                        <h5> datawc_x1: </h5>
                            <input type="text"
                                name="datawc_x1"
                                value={
                                    typeof this.props.x1 === "number" && this.props.x1 > 1e4
                                    ? this.props.x1.toExponential()
                                    : this.props.x1
                                }
                                onBlur={this.handleBlur}/>
                            <Usage id="x1-usage" usage={x1_usage}/>
                        </div>
                        <div className='col-md-6'>
                            <h5>datawc_x2: </h5>
                            <input type="text"
                                name="datawc_x2"
                                value={
                                    typeof this.props.x2 === "number" && this.props.x2 > 1e4
                                    ? this.props.x2.toExponential()
                                    : this.props.x2
                                }
                                onBlur={this.handleBlur}/>
                            <Usage id="x2-usage" usage={x2_usage}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-md-6'>
                            <h5>datawc_y1: </h5>
                            <input type="text"
                                name="datawc_y1"
                                value={
                                    typeof this.props.y1 === "number" && this.props.y1 > 1e4
                                    ? this.props.y1.toExponential()
                                    : this.props.y1
                                }
                                onBlur={this.handleBlur}/>
                            <Usage id="y1-usage" usage={y1_usage}/>
                        </div>
                        <div className='col-md-6'>
                            <h5>datawc_y2: </h5>
                            <input type="text"
                                name="datawc_y2"
                                value={
                                    typeof this.props.y2 === "number" && this.props.y2 > 1e4
                                    ? this.props.y2.toExponential()
                                    : this.props.y2
                                }
                                onBlur={this.handleBlur}/>
                            <Usage id="y2-usage" usage={y2_usage}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default DatawcCoordinates;
