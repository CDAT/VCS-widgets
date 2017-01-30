import React from 'react';
import Usage from '../../Usage';
import LegendFill from '../components/LegendFill';
import NumberField from '../components/NumberField';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


function Level(props) {
    if (typeof props.value === "number") {
        return <NumberField controlId={"level_" + props.ind} label="Level: " step={null} value={props.value} />;
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
                const step = Math.round((255 - last_color) / (level.length - 1 - color.length));
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
    render(){
        console.log(this.state.level);
        return (
            <div>
                {this.state.level.map((v, i) => <Level value={v} key={i} ind={i} />)}
            </div>
        );
    }
});

export default FillareaFields;
