import React, { Component } from 'react';
import NumberField from './NumberField';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default class LevelField extends Component {
    render() {
        let editor = null;
        if (typeof this.props.value === "number") {
            editor = (
                <div>
                    <div className="row">
                        <div className="col-sm-12">
                            <ControlLabel>Level: </ControlLabel>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                            <Button onClick={(e) => {this.props.onRemove()}}><span className="glyphicon glyphicon-remove"></span></Button>
                        </div>
                        <div className="col-sm-11">
                            <NumberField controlId={"level_" + this.props.ind} maxValue={null} minValue={null} updatedValue={this.props.onChange} step={null} value={this.props.value} />
                        </div>
                    </div>
                </div>
            );
        } else if (typeof this.props.value === "string") {
            editor = (
                <FormGroup controlId={"level_" + this.props.ind}>
                    <ControlLabel>Level (legend extension):</ControlLabel>
                    <FormControl disabled value={this.props.value.charAt(0) === "-" ? "-Infinity" : "Infinity"} />
                </FormGroup>
            );
        } else if (Array.isArray(this.props.value)) {
            // It's a discontinuous level
            console.log("No support for discontinuous levels at this point.");
        }
        return editor;
    }
}