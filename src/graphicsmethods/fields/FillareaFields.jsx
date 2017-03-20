import React from 'react';
import Usage from '../../Usage';
import LegendFill from '../components/LegendFill';
import LevelField from '../components/LevelField';
import NumberField from '../../common/NumberField';
import BooleansField from '../../common/BooleansField';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';


var FillareaFields = React.createClass({
    propTypes: {
        updateGraphicsMethod: React.PropTypes.func,
        bulkUpdate: React.PropTypes.func,
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
    sync(arrays) {
        let {color, pattern, opacity, level} = arrays;
        this.props.bulkUpdate({
            'fillareacolors': color,
            'fillareaindices': pattern,
            'fillareaopacity': opacity,
            'levels': level
        });
    },
    updateFill(index, fillSettings) {
        let {color, pattern, opacity} = this.state;
        color = color.slice();
        pattern = pattern.slice();
        opacity = opacity.slice();
        color[index] = fillSettings.color;
        pattern[index] = fillSettings.pattern;
        opacity[index] = fillSettings.opacity;
        let start = 0;
        let end = this.state.level.length;
        if (this.props.ext1) {
            start += 1;
        }
        if (this.props.ext2) {
            end -= 1;
        }
        const levs = this.state.level.slice(start, end);
        this.sync({
            color, pattern, opacity, 'level': levs
        });
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
    addLevel(index) {
        let levs = this.state.level.slice();
        let val = levs[index];
        let start = 0;
        let end = levs.length + 1;
        if (this.props.ext1) {
            val = levs[index + 1];
            start += 1;
            index = Math.max(start, index);
        }
        if (this.props.ext2) {
            end -= 1;
        }
        levs.splice(index, 0, val);
        levs = levs.slice(start, end);

        const base_arrays = $.extend({}, this.state);
        base_arrays.level = levs;
        const normalized = this.normalizedArrays(base_arrays);
        normalized.level = levs;
        this.sync(normalized);
    },
    removeLevel(index) {
        let levs = this.state.level.slice();
        // Prevent them from deleting all of the levels
        let no_ext_len = levs.length;
        if (this.props.ext1) {
            no_ext_len -= 1;
        }
        if (this.props.ext2) {
            no_ext_len -= 1;
        }
        if (no_ext_len == 1) {
            return;
        }
        let start = 0;
        levs.splice(index, 1);
        let end = levs.length; // it would be +1, but we're removing an element.
        // Remove the target
        if (this.props.ext1) {
            start += 1;
        }
        if (this.props.ext2) {
            end -= 1;
        }
        levs = levs.slice(start, end);
        const base_arrays = $.extend({}, this.state);
        base_arrays.level = levs;
        const normalized = this.normalizedArrays(base_arrays);
        normalized.level = levs;
        this.sync(normalized);
    },
    setFillStyle(s) {
        let style = null;
        if (s.hatch) {
            style = "hatch";
        } else if (s.pattern) {
            style = "pattern";
        } else {
            style = "solid";
        }
        this.props.updateGraphicsMethod('fillareastyle', style);
    },
    render(){
        const self = this;
        const levels = this.state.level.map((v, i) => {
            return (
                <LevelField value={v} onRemove={() => { self.removeLevel(i); }} onChange={(l) => {self.updateLevel(i, l);}} key={"lev_" + i} ind={i} />
            );
        });
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
            if (i < levels.length) {
                if (i == levels.length - 1 && this.props.ext2) {
                    continue;
                }
                let addLevel = () => {
                    self.addLevel(i);
                }
                components.push(<Button key={"add_" + i} onClick={(e) => {addLevel()}}><span className="glyphicon glyphicon-plus"></span></Button>);
            }
        }

        return (
            <div>
                <FormGroup>
                    <ControlLabel>Fill Style:</ControlLabel>
                    <BooleansField controlId='fill_style' updatedValue={this.setFillStyle} labels={["Solid", "Patterned", "Hatched"]} options={["solid", "pattern", "hatch"]} value={this.props.fillStyle} inline multiple={false} />
                </FormGroup>
                <ControlLabel>Levels:</ControlLabel>
                <div style={{"border": "1px solid #ccc", "padding": ".5em", "borderRadius": "5px"}}>
                    {components}
                </div>
            </div>
        );
    }
});

export default FillareaFields;
