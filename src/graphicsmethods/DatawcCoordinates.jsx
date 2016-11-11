import React from 'react'
import Usage from '../Usage'
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
        handleChange: React.PropTypes.func,
        x1: React.PropTypes.number,
        x2: React.PropTypes.number,
        y1: React.PropTypes.number,
        y2: React.PropTypes.number
    },
    getInitialState(){
        return {
            x1: this.props.x1,
            x2: this.props.x2,
            y1: this.props.y1,
            y2: this.props.y2
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            x1: nextProps.x1,
            x2: nextProps.x2,
            y1: nextProps.y1,
            y2: nextProps.y2
        })
    },
    handleBlur(event){
        let name = event.target.name;
        let maximum = name.match(/x/) ?180 : 90;
        let value = validate(event.target.value, maximum);
        if(value !== false) {
            this.props.handleChange(name, value)
        } else {
            // set usage, reset state
            switch(name){
                case "datawc_x1":
                    $('#x1-usage').focus()
                    this.setState({x1: this.props.x1});
                    break;
                case "datawc_x2":
                    $('#x2-usage').focus()
                    this.setState({x2: this.props.x2});
                    break;
                case "datawc_y1":
                    $('#y1-usage').focus()
                    this.setState({y1: this.props.y1});
                    break;
                case "datawc_y2":
                    $('#y2-usage').focus()
                    this.setState({y2: this.props.y2});
                    break;
            }
        }
    },
    render(){
        let x1_usage = "Longitude value representing where the plot's x axis should start.\n"+
                       "Values must be numbers from -180 to 180 (degrees of longitude)."
        let x2_usage = "Longitude value representing where the plot's x axis should end.\n"+
                       "Values must be numbers from -180 to 180 (degrees of longitude)."
        let y1_usage = "Latitude value representing where the plot's y axis should start.\n"+
                       "Values must be numbers from -90 to 90 (degrees of latitude)."
        let y2_usage = "Latitude value representing where the plot's y axis should start.\n"+
                       "Values must be numbers from -90 to 90 (degrees of latitude)."
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
                                    typeof this.state.x1 === "number" && this.state.x1 > 1e4
                                    ? this.state.x1.toExponential()
                                    : this.state.x1
                                }
                                onChange={(event)=>this.setState({x1: event.target.value})}
                                onBlur={this.handleBlur}/>
                            <Usage id="x1-usage" usage={x1_usage}/>
                        </div>
                        <div className='col-md-6'>
                            <h5>datawc_x2: </h5>
                            <input type="text"
                                name="datawc_x2"
                                value={
                                    typeof this.state.x2 === "number" && this.state.x2 > 1e4
                                    ? this.state.x2.toExponential()
                                    : this.state.x2
                                }
                                onChange={(event)=>this.setState({x2: event.target.value})}
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
                                    typeof this.state.y1 === "number" && this.state.y1 > 1e4
                                    ? this.state.y1.toExponential()
                                    : this.state.y1
                                }
                                onChange={(event)=>this.setState({y1: event.target.value})}
                                onBlur={this.handleBlur}/>
                            <Usage id="y1-usage" usage={y1_usage}/>
                        </div>
                        <div className='col-md-6'>
                            <h5>datawc_y2: </h5>
                            <input type="text"
                                name="datawc_y2"
                                value={
                                    typeof this.state.y2 === "number" && this.state.y2 > 1e4
                                    ? this.state.y2.toExponential()
                                    : this.state.y2
                                }
                                onChange={(event)=>this.setState({y2: event.target.value})}
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
