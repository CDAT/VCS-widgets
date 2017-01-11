import React from 'react'
import Usage from '../../Usage'
import ColorProp from '../../validators/ColorProp.js'

/* global $ */

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
        handleChange: React.PropTypes.func,
        missing: ColorProp,
        className: React.PropTypes.string
    },
    getInitialState() {
        return {
            missing: this.props.missing,
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            missing: nextProps.missing
        })
    },
    handleBlur(event) {
        let value = verify(event.target.value);
        if (value === 0 || value) {
            this.props.handleChange('missing', value)
        } else {
            this.setState({
                missing: this.props.missing
            });
            $('#missing-usage').focus()
        }
    },
    render() {
        return (
            <div className={this.props.className}>
                <h5>Missing: </h5>
                <input type='number'
                    name='missing'
                    value={this.state.missing === 0 || this.state.missing ?this.state.missing :''}
                    onChange={(event)=>{this.setState({missing:event.target.value})}}
                    onBlur={this.handleBlur}/>
                <Usage id="missing-usage"
                    usage="Missing property must be an integer >= 0 and <=255." />
            </div>
        );
    }
});

export default Missing;
