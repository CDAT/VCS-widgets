import React, { Component } from 'react' 
import PropTypes from 'prop-types'
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

class LevelOneTwo extends Component {
    render() {
        const self = this;
        /*
        value: PropTypes.number,
        minValue: PropTypes.number,
        maxvalue: PropTypes.number,
        updatedValue: PropTypes.func,
        label: PropTypes.string,
        controlId: PropTypes.string,
        step: PropTypes.number,
        autoround: PropTypes.bool,
        placeholder: PropTypes.string,
        */
        return (
            <div id='level-one-two'>
                <NumberField controlId="level_1" label="Starting Level" minValue={null} maxValue={null} step={null} value={this.props.level1} updatedValue={(v) => {self.props.updateGraphicsMethod("level_1", v)}} />
                <NumberField controlId="level_2" label="Ending Level" minValue={null} maxValue={null} step={null} value={this.props.level2} updatedValue={(v) => {self.props.updateGraphicsMethod("level_2", v)}} />
            </div>
        );
    }
}

LevelOneTwo.propTypes = { 
    updateGraphicsMethod: PropTypes.func,
    level1: PropTypes.number,
    level2: PropTypes.number
}

export default LevelOneTwo;
