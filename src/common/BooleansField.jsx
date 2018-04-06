import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Checkbox, Radio, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'


class BooleansField extends Component {
    constructor(props){
        super(props)
        this.currentValue = this.currentValue.bind(this)
        this.update = this.update.bind(this)
    }
        
    currentValue() {
        const value_dict = {};
        this.props.options.map((o) => {
            value_dict[o] = false;
            if (o === this.props.value) {
                value_dict[o] = true;
            } else if (this.props.value !== null && this.props.value[o]) {
                value_dict[o] = true;
            }
        });
        return value_dict;
    }

    update(e) {
        const new_value = e.target.checked;
        if (this.props.multiple) {
            const value_dict = this.currentValue();
            value_dict[e.target.value] = new_value;
            this.props.updatedValue(value_dict);
        } else {
            let d = this.props.options.reduce((prev, cur) => {
                prev[cur] = cur === e.target.value;
                return prev;
            }, {});
            this.props.updatedValue(d);
        }
    }

    render() {
        const self = this;
        const value_dict = this.currentValue();
        return (
            <FormGroup controlId="{this.props.controlId}">
                { this.props.options.map((o, ind) => {
                    if (self.props.multiple) {
                        return <Checkbox inline={this.props.inline} key={ind} name={self.props.controlId} value={o} checked={value_dict[o]} onChange={self.update}> {self.props.labels[ind]} </Checkbox>
                    } else {
                        return <Radio inline={this.props.inline} key={ind} name={self.props.controlId} value={o} checked={value_dict[o]} onChange={self.update}> {self.props.labels[ind]} </Radio>
                    }
                })}
            </FormGroup>
        );
    }
}

BooleansField.propTypes = {
    labels: PropTypes.array,
    value: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    options: PropTypes.array,
    updatedValue: PropTypes.func,
    inline: PropTypes.bool,
    controlId: PropTypes.string,
    multiple: PropTypes.bool,
}

BooleansField.defaultProps = {
    inline: false,
    multiple: true,
}

export default BooleansField;
