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
        placeholder: React.PropTypes.string,
    },
    getDefaultProps() {
        return {
            minValue: 0,
            maxValue: 100,
            step: 1,
            autoround: false,
            placeholder: ""
        }
    },
    getInitialState() {
        return {
            validationState: null,
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({"value": nextProps.value, "validationState": null});
    },
    update(e) {
        const new_val = parseFloat(e.target.value);
        if (new_val !== this.props.value) {
            if (this.props.autoround) {
                this.props.updatedValue(Math.floor(new_val / this.props.step) * this.props.step);
            } else {
                this.props.updatedValue(new_val);
            }
        }
    },
    validate(e) {
        const new_val = parseInt(e.target.value);
        const new_state = {
            "value": new_val,
            "validationState": "success"
        };
        if (new_val < this.props.minValue || new_val > this.props.maxValue) {
            new_state.validationState = "error";
        }
        this.setState(new_state);
    },
    render() {
        let {minValue, step, maxValue, value, label, controlId, placeholder} = this.props;
        if (this.state.value !== undefined) {
            value = this.state.value;
        }
        let help = '';
        if (this.state.validationState === "warning" || this.state.validationState === "error") {
            help = <HelpBlock>Value must be between {minValue} and {maxValue}</HelpBlock>
        }
        if (value === null) {
            value = "";
        }
        return (
            <FormGroup controlId="{controlId}">
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="number" step={step} max={maxValue} min={minValue} placeholder={placeholder}
                             onChange={this.validate} onBlur={this.update} value={value} />
                {help}
            </FormGroup>
        );
    }
});

export default NumberField;
