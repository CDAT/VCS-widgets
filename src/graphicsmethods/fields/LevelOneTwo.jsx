import React from 'react'
import NumberField from '../../common/NumberField';


/* global $ */

function verify(value) {
    if (typeof(value) === 'string') {
        if(value.match(/^-?[0-9]+((\.[0-9]+)?e\+?[0-9]+)?$/)) {
            return Number.parseFloat(value);
        } else {
            return false;
        }
    }
}

var LevelOneTwo = React.createClass({
    propTypes: {
        updateGraphicsMethod: React.PropTypes.func,
        level1: React.PropTypes.number,
        level2: React.PropTypes.number
    },
    render() {
        const self = this;
        /*
        value: React.PropTypes.number,
        minValue: React.PropTypes.number,
        maxvalue: React.PropTypes.number,
        updatedValue: React.PropTypes.func,
        label: React.PropTypes.string,
        controlId: React.PropTypes.string,
        step: React.PropTypes.number,
        autoround: React.PropTypes.bool,
        placeholder: React.PropTypes.string,
        */
        return (
            <div id='level-one-two'>
                <NumberField controlId="level_1" label="Starting Level" minValue={null} maxValue={null} step={null} value={this.props.level1} updatedValue={(v) => {self.props.updateGraphicsMethod("level_1", v)}} />
                <NumberField controlId="level_2" label="Ending Level" minValue={null} maxValue={null} step={null} value={this.props.level2} updatedValue={(v) => {self.props.updateGraphicsMethod("level_2", v)}} />
            </div>
        );
    }
});

export default LevelOneTwo;
