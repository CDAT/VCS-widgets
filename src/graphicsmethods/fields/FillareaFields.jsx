import React from 'react';
import Usage from '../../Usage';
import LegendFill from '../components/LegendFill';
import NumberField from '../components/NumberField';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


function Level(props) {
    if (typeof props.value === "number") {
        return <NumberField controlId={"level_" + props.ind}  maxValue={null} minValue={null} label="Level: " updatedValue={props.onChange} step={null} value={props.value} />;
    } else {
        // Extensions
        return (
            <FormGroup controlId={"level_" + props.ind}>
                <ControlLabel>Level (legend extension):</ControlLabel>
                <FormControl disabled value={props.value.charAt(0) === "-" ? "-Infinity" : "Infinity"} />
            </FormGroup>
        );
    }
}


var FillareaFields = React.createClass({
    propTypes: {
        updateGraphicsMethod: React.PropTypes.func,
        colormap: React.PropTypes.array,
        level: React.PropTypes.array,
        color: React.PropTypes.array,
        opacity: React.PropTypes.array,
        pattern: React.PropTypes.array,
        fillStyle: React.PropTypes.string,
        ext1: React.PropTypes.bool,
        ext2: React.PropTypes.bool
    },
    getInitialState() {
        return this.normalizedArrays(this.props)
    },
    normalizedArrays(arrays) {
        // Normalizes the length of each array
        let {level, opacity, color, pattern} = arrays;
        if (level === null) {
            level = [];
        }
        if (opacity === null) {
            opacity = [100];
        }
        if (color === null) {
            color = [0];
        }
        if (pattern == null) {
            pattern = [0];
        }
        // Make sure we're using new arrays in the state
        level = level.slice();
        opacity = opacity.slice();
        color = color.slice();
        pattern = pattern.slice();

        let ext1 = arrays.ext1, ext2 = arrays.ext2;

        if (ext1) {
            level.unshift("-1e20");
        }

        if (ext2) {
            level.push("1e20");
        }

        // Pad opacity, colors, and indices out to appropriate length
        if (color.length < level.length - 1) {
            let last_color = color[color.length - 1];
            if (typeof last_color === "number") {
                // Stretch between last_color and 255
                const step = Math.floor((255 - last_color) / (level.length - 1 - color.length));
                while (color.length < level.length - 1) {
                    last_color += step;
                    color.push(last_color);
                }
            } else {
                // Just duplicate the last color, there's no way to know what they want.
                while (color.length < level.length - 1) {
                    color.push(last_color);
                }
            }
        }

        while (opacity.length < level.length - 1) {
            // We'll just default to using the opacity value of the color
            opacity.push(null);
        }

        while (pattern.length < level.length - 1) {
            pattern.push(0);
        }

        return {
            color,
            pattern,
            level,
            opacity
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState(this.normalizedArrays(nextProps));
    },
    updateFill(index, fillSettings) {
        let {color, pattern, opacity} = this.state;
        color = color.slice();
        pattern = pattern.slice();
        opacity = opacity.slice();

        if (fillSettings.color !== color[index]) {
            color[index] = fillSettings.color;
            this.props.updateGraphicsMethod("fillareacolors", color);
            return;
        }
        if (fillSettings.pattern !== pattern[index]) {
            pattern[index] = fillSettings.pattern;
            this.props.updateGraphicsMethod("fillareaindices", pattern);
            return;
        }
        if (fillSettings.opacity !== pattern[index]) {
            opacity[index] = fillSettings.opacity;
            this.props.updateGraphicsMethod("fillareaopacity", opacity);
            return;
        }
    },
    updateLevel(index, level) {
        let levs = this.state.level.slice();
        // Update the value
        levs[index] = level;
        // Now slice off extensions as needed
        let start = 0;
        let end = this.state.level.length;
        if (this.props.ext1) {
            start = 1;
        }
        if (this.props.ext2) {
            end -= 1;
        }
        levs = levs.slice(start, end);
        this.props.updateGraphicsMethod("levels", levs);
    },
    render(){
        const self = this;
        const levels = this.state.level.map((v, i) => <Level value={v} onChange={(l) => {self.updateLevel(i, l);}} key={"lev_" + i} ind={i} />);
        const fills = [];
        for (let i = 0; i < this.state.color.length; i++) {
            fills.push(<LegendFill key={"fill_" + i} title={i + ""} updateFill={(fill) => { self.updateFill(i, fill); }} colormap={this.props.colormap} color={this.state.color[i]} opacity={this.state.opacity[i]} pattern={this.state.pattern[i]} />)
        }

        const components = [];
        for (let i = 0; i < levels.length; i++) {
            components.push(levels[i]);
            if (i <= levels.length - 1) {
                components.push(fills[i]);
            }
        }

        return (
            <div>
                {components}
            </div>
        );
    }
});

export default FillareaFields;
