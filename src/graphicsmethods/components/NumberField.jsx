import React from 'react'
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'


var NumberField = React.createClass({
    propTypes: {
        value: React.PropTypes.number,
        minValue: React.PropTypes.number,
        maxvalue: React.PropTypes.number,
        updatedValue: React.PropTypes.func,
        label: React.PropTypes.string,
        controlId: React.PropTypes.string,
        step: React.PropTypes.number,
        autoround: React.PropTypes.bool,
    },
    getInitialState() {
        return {
            minValue: 0,
            maxValue: 100,
            step: 1,
            autoround: false,
            validationState: null,
        }
    },
    update(e) {
        const new_val = parseInt(e.target.value);
        if (this.props.autoround) {
            this.props.updatedValue(Math.floor(new_val / this.props.step));
        } else {
            this.props.updatedValue(new_val);
        }
    },
    validate(e) {
        const new_val = parseInt(e.target.value);
        if (new_val < this.props.minValue) {
            this.setState({"validationState": "error"});
            return;
        }
        if (new_val > this.props.maxValue) {
            this.setState({"validationState": "error"});
            return;
        }
        this.setState({"validationState": "success"});
    },
    render() {
        const {minValue, step, maxValue, value, label, controlId} = this.props;
        let help = '';
        if (this.state.validationState === "warning" || this.state.validationState === "error") {
            help = <HelpBlock>Value must be between {minValue} and {maxValue}</HelpBlock>
        }
        return (
            <FormGroup controlId="{controlId}">
                <ControlLabel>{label}</ControlLabel>
                <FormControl componentClass="number" step={step} max={maxValue} min={minValue}
                             onChange={this.validate} onBlur={this.update} value={value} />
                {help}
            </FormGroup>
        );
    }
});

export default NumberField;
