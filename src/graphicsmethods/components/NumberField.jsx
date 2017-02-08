import React from 'react'
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'


function parseNum(v) {
    if (typeof v === "string") {
        if (v.indexOf("e") != -1) {
            let parts = v.split("e");
            const main = parseFloat(parts[0]);
            const exp = parseInt(parts[1]);
            v = Math.pow(10, exp) * main;
        } else {
            v = parseFloat(v);
        }
    }
    return v;
}

const numregexp = /-?\d*\.?\d*(e\d+)?/



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
        exponential: React.PropTypes.bool
    },
    getDefaultProps() {
        return {
            minValue: 0,
            maxValue: 100,
            step: 1,
            autoround: false,
            placeholder: "",
            exponential: true
        }
    },
    getInitialState() {
        return {
            validationState: null,
            value: this.props.value
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({"value": nextProps.value, "validationState": null});
    },
    update(e) {
        let new_val = e.target.value;
        if (this.props.exponential) {
            new_val = parseNum(new_val);
        }
        if (new_val !== this.props.value) {
            if (this.props.autoround) {
                this.props.updatedValue(Math.floor(new_val / this.props.step) * this.props.step);
            } else {
                this.props.updatedValue(new_val);
            }
        }
    },
    validate(e) {
        let new_val = e.target.value;

        const new_state = {
            "value": e.target.value, //Use the provided value, just make sure it's valid.
            "validationState": "success"
        };

        if (!numregexp.test(new_val)) {
            // Invalid number
            new_state.validationState  = "error";
        }

        // Check value limits
        new_val = parseNum(new_val);

        if (this.props.minValue !== null && new_val < this.props.minValue) {
            new_state.validationState = "error";
        }
        if (this.props.maxValue !== null && new_val > this.props.maxValue) {
            new_state.validationState = "error";
        }
        this.setState(new_state);
    },
    render() {
        let {minValue, step, maxValue, label, controlId, placeholder} = this.props;

        let value = this.state.value;

        let help = '';
        if (this.state.validationState === "warning" || this.state.validationState === "error") {
            help = <HelpBlock>Value must be between a valid number {minValue === null ? "greater than " + minValue : ""} {minValue !== null && maxValue !== null ? " and " : ""} {maxValue !== null ? " less than " + maxValue : ""}</HelpBlock>
        }
        if (value === null) {
            value = "";
        }
        const numval = parseNum(value);
        if (this.props.exponential && !isNaN(numval) && isFinite(numval) && (Math.abs(numval) >= 1e5 || Math.abs(numval) <= 1e-5)) {
            let unsigned = Math.abs(numval);
            let exp = Math.floor(Math.log10(unsigned));
            let rest = numval / Math.pow(10, exp);
            value = rest + "e" + exp;
        }
        return (
            <FormGroup controlId={controlId}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl placeholder={placeholder} onChange={this.validate} onBlur={this.update} value={value} />
                {help}
            </FormGroup>
        );
    }
});

export default NumberField;
