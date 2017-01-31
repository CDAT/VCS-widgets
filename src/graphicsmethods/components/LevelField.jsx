import React, { Component } from 'react';
import NumberField from './NumberField';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default class LevelField extends Component {
    render() {
        let editor = null;
        if (typeof this.props.value === "number") {
            editor =  <NumberField controlId={"level_" + this.props.ind} maxValue={null} minValue={null} label="Level: " updatedValue={this.props.onChange} step={null} value={this.props.value} />;
        } else {
            editor = (
                <FormGroup controlId={"level_" + this.props.ind}>
                    <ControlLabel>Level (legend extension):</ControlLabel>
                    <FormControl disabled value={this.props.value.charAt(0) === "-" ? "-Infinity" : "Infinity"} />
                </FormGroup>
            );
        }
        let button = "";
        if (this.props.addLevel) {
            button = <Button onClick={(e) => {this.props.addLevel()}}><span className="glyphicon glyphicon-plus"></span></Button>;
        }
        return (
            <div>
                {editor}
                {button}
            </div>
        );
    }
}