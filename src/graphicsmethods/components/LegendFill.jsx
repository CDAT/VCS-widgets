import React from 'react';
import ColorProp from '../../validators/ColorProp';
import ColorField from './ColorField';
import NumberField from './NumberField';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


const patterns = ["No Pattern", "Triangle", "Filled Triangle", "Dot", "Filled Dot", "Horizontal Stripe",
                  "Vertical Stripe", "Horizontal Dashes", "Vertical Dashes", "Diagonal Stripe",
                  "Reverse Diagonal Stripe", "Cross", "Filled Cross", "X Cross", "Diamond", "Filled Diamond",
                  "Square", "Filled Square", "Arrow", "Circle Cross", "Edge Arrow"];


export default React.createClass({
    propTypes: {
        colormap: React.PropTypes.array,
        color: ColorProp,
        opacity: React.PropTypes.number,
        pattern: React.PropTypes.number,
        title: React.PropTypes.string,
        updateFill: React.PropTypes.func
    },
    getInitialState() {
        // Calculate an initial value for opacity if none is given to use as placeholder
        let opacity = this.props.opacity;
        const color = this.props.color;
        const opacityManual = opacity === null;
        if (opacity === null) {
            if (typeof color === "string") {
                opacity = 100;
            } else if (typeof color === "number") {
                opacity = this.props.colormap[color][3];
            } else if (color.length === 4) {
                opacity = color[3];
            } else {
                opacity = 100;
            }
        }

        return {
            opacity
        };
    },
    colorChanged(c) {
        this.props.updateFill({
            color: c,
            opacity: this.props.opacity,
            pattern: this.props.pattern
        });
    },
    opacityChanged(n) {
        this.props.updateFill({
            color: this.props.color,
            opacity: n,
            pattern: this.props.pattern
        });
    },
    patternChanged(e) {
        this.props.updateFill({
            color: this.props.color,
            opacity: this.props.opacity,
            pattern: parseInt(e.target.value)
        });
    },
    render() {
        return (
            <div>
                <ColorField label="Fill Color: " colorChanged={this.colorChanged} inline color={this.props.color} colormap={this.props.colormap} controlId={"fillcolor_" + this.props.title} />
                <NumberField updatedValue={this.opacityChanged} label="Opacity: " controlId={"fillopacity_" + this.props.title}
                             step={.1} value={this.props.opacity} placeholder={"" + this.state.opacity} />
                <FormGroup controlId={"fillpattern_" + this.props.title}>
                    <ControlLabel>Pattern</ControlLabel>
                    <FormControl onChange={this.patternChanged} componentClass="select" placeholder="Pattern">
                        {patterns.map((k) => {
                            return <option key={k} checked={k == this.props.pattern} value={k}>{patterns[k]}</option>
                        })}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});
