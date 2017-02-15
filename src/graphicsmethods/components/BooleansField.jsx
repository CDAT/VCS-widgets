import React from 'react'
import {Checkbox, Radio, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'


var BooleansField = React.createClass({
    propTypes: {
        labels: React.PropTypes.array,
        value: React.PropTypes.oneOfType([
                                          React.PropTypes.object,
                                          React.PropTypes.string
                                         ]),
        options: React.PropTypes.array,
        updatedValue: React.PropTypes.func,
        inline: React.PropTypes.bool,
        controlId: React.PropTypes.string,
        multiple: React.PropTypes.bool,
    },
    getDefaultProps() {
        return {
            inline: false,
            multiple: true,
        }
    },
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
    },
    update(e) {
        const new_value = e.target.checked;
        if (this.props.multiple) {
            const value_dict = this.currentValue();
            value_dict[e.target.value] = new_value;
            this.props.updatedValue(value_dict);
        } else {
            let d = this.props.options.reduce((prev, cur) => {
                prev[cur] = cur === e.target.value;
            }, {});
            this.props.updatedValue(d);
        }
    },
    render() {
        const self = this;
        const value_dict = this.currentValue();
        return (
            <FormGroup controlId="{this.props.controlId}">
                { this.props.options.map((o, ind) => {
                    if (self.props.multiple) {
                        return <Checkbox key={ind} name={self.props.controlId} value={o} checked={value_dict[o]} onChange={self.update}> {self.props.labels[ind]} </Checkbox>
                    } else {
                        return <Radio key={ind} name={self.props.controlId} value={o} checked={value_dict[o]} onChange={self.update}> {self.props.labels[ind]} </Radio>
                    }
                })}
            </FormGroup>
        );
    }
});

export default BooleansField;
