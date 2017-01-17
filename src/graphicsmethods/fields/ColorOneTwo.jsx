/* global $ */
import React from 'react'
import Usage from '../../Usage'
import NumberField from '../components/NumberField'


function usage(name, html_start='', trailer='', html_end='') {
    return html_start + name + " property must be an integer >= 0 and <=255. " + trailer + html_end
}

var ColorOneTwo = React.createClass({
    propTypes: {
        updateGraphicsMethod: React.PropTypes.func,
        color1: React.PropTypes.number,
        color2: React.PropTypes.number,
    },
    updateColor1(val) {
        this.props.updateGraphicsMethod("color_1", val);
    },
    updateColor2(val) {
        this.props.updateGraphicsMethod("color_2", val);
    },
    render(){
        return (
            <div>
                <NumberField componentId="color_1" updatedValue={this.updateColor1} autoround
                              value={this.props.color1} minValue={0} maxValue={255} label="Starting Color:" />
                <NumberField componentId="color_2" updatedValue={this.updateColor1} autoround
                              value={this.props.color1} minValue={0} maxValue={255} label="Ending Color:" />
            </div>
        );
    }
});

export default ColorOneTwo;
