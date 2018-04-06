import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import {ControlLabel, FormGroup, Radio} from 'react-bootstrap'

class BoxfillType extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.props.updateGraphicsMethod("boxfill_type", event.target.value);
    }

    render(){
        return (
            <FormGroup controlId="boxfill_type">
                <ControlLabel>Boxfill Type:</ControlLabel>
                <Radio value="linear" name="boxfill_type" onChange={this.handleChange} checked={this.props.type === "linear"} inline>Linear</Radio>
                <Radio value="custom" name="boxfill_type" onChange={this.handleChange} checked={this.props.type === "custom"} inline>Custom</Radio>
            </FormGroup>
        );
    }
}

BoxfillType.propTypes = { 
    updateGraphicsMethod: PropTypes.func,
    type: PropTypes.string,
}

export default BoxfillType;
