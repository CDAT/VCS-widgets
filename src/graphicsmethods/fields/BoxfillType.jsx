import React from 'react'
import {ControlLabel, FormGroup, Radio} from 'react-bootstrap'

var BoxfillType = React.createClass({
    propTypes: {
        updateGraphicsMethod: React.PropTypes.func,
        type: React.PropTypes.string,
    },
    handleChange(event) {
        this.props.updateGraphicsMethod("boxfill_type", event.target.value);
    },
    render(){
        return (
            <FormGroup controlId="boxfill_type">
                <ControlLabel>Boxfill Type:</ControlLabel>
                <Radio value="linear" name="boxfill_type" onChange={this.handleChange} checked={this.props.type === "linear"} inline>Linear</Radio>
                <Radio value="custom" name="boxfill_type" onChange={this.handleChange} checked={this.props.type === "custom"} inline>Custom</Radio>
            </FormGroup>
        );
    }
});

export default BoxfillType;
