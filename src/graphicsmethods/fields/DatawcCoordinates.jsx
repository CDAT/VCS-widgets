import React from 'react';
import Usage from '../../Usage';
import NumberField from '../components/NumberField';
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
        const self = this;
        return (
            <div>
                <NumberField controlId="datawc_x1" label="X Axis Start:" minValue={null} maxValue={null} step={null} value={this.props.x1} updatedValue={(v) => {self.props.updateGraphicsMethod("datawc_x1", v)}} />
                <NumberField controlId="datawc_x2" label="X Axis End:" minValue={null} maxValue={null} step={null} value={this.props.x2} updatedValue={(v) => {self.props.updateGraphicsMethod("datawc_x2", v)}} />
                <NumberField controlId="datawc_y1" label="Y Axis Start:" minValue={null} maxValue={null} step={null} value={this.props.y1} updatedValue={(v) => {self.props.updateGraphicsMethod("datawc_y1", v)}} />
                <NumberField controlId="datawc_y2" label="Y Axis End:" minValue={null} maxValue={null} step={null} value={this.props.y2} updatedValue={(v) => {self.props.updateGraphicsMethod("datawc_y2", v)}} />
            </div>
        );
    }
});

export default DatawcCoordinates;
