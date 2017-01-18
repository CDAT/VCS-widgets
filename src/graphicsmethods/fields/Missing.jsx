import React from 'react'
import Usage from '../../Usage'
import ColorProp from '../../validators/ColorProp'
import ColorField from '../components/ColorField'
import $ from 'jquery'


function verify(value) {
    let new_value;
    if (typeof(value) === 'string') {
        if(value.match(/[^0-9]+/) || value === '') {
            return false;
        } else {
            new_value = Number.parseInt(value)
            if (new_value < 0 || new_value > 255) {
                return false;
            } else {
                return new_value;
            }
        }
    }
}


var Missing = React.createClass({
    propTypes: {
        updateGraphicsMethod: React.PropTypes.func,
        missing: ColorProp,
        className: React.PropTypes.string,
        colormap: React.PropTypes.array
    },
    render() {
        const update = this.props.updateGraphicsMethod;
        return (
            <div>
                <ColorField color={this.props.missing} colormap={this.props.colormap} colorChanged={(c) => { update("missing", c); }} label="Missing Data Color:" />
                <Usage id="missing-usage"
                    usage="Color to use for values masked out of your data." />
            </div>
        );
    }
});

export default Missing;
