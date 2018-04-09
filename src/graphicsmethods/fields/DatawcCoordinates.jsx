import React, { Component } from 'react' 
import PropTypes from 'prop-types';
import Usage from '../../Usage';
import NumberField from '../../common/NumberField';
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
class DatawcCoordinates extends Component {
    constructor(props){
        super(props)
        this.handleBlur = this.handleBlur.bind(this)
    }
    
    handleBlur(e) {
        this.props.updateGraphicsMethod(e.target.name, parseFloat(e.target.value));
    }

    render(){
        const self = this;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <NumberField controlId="datawc_x1" label="X Axis Start:" minValue={null} maxValue={null} step={null} value={this.props.x1} updatedValue={(v) => {self.props.updateGraphicsMethod("datawc_x1", v)}} />
                    </div>
                    <div className="col-sm-6">
                        <NumberField controlId="datawc_y1" label="Y Axis Start:" minValue={null} maxValue={null} step={null} value={this.props.y1} updatedValue={(v) => {self.props.updateGraphicsMethod("datawc_y1", v)}} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <NumberField controlId="datawc_x2" label="X Axis End:" minValue={null} maxValue={null} step={null} value={this.props.x2} updatedValue={(v) => {self.props.updateGraphicsMethod("datawc_x2", v)}} />
                    </div>
                    <div className="col-sm-6">
                        <NumberField controlId="datawc_y2" label="Y Axis End:" minValue={null} maxValue={null} step={null} value={this.props.y2} updatedValue={(v) => {self.props.updateGraphicsMethod("datawc_y2", v)}} />
                    </div>
                </div>
            </div>
        );
    }
}

DatawcCoordinates.propTypes = { 
    updateGraphicsMethod: PropTypes.func,
    x1: PropTypes.number,
    x2: PropTypes.number,
    y1: PropTypes.number,
    y2: PropTypes.number,
}

export default DatawcCoordinates;
