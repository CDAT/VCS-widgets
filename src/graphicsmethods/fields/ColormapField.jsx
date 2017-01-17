import React from 'react'
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap'

var ColormapField = React.createClass({
    propTypes: {
        colormap: React.PropTypes.string,
        updateGraphicsMethod: React.PropTypes.func,
        colormaps: React.PropTypes.array
    },
    handleChange(e) {
        const cmap = e.target.value;
        this.props.updateGraphicsMethod("colormap", cmap);
    },
    render() {
        let cmap = this.props.colormap;
        if (cmap === null) {
            cmap = "default";
        }
        return (
            <FormGroup controlId="colormap">
                <ControlLabel>Colormap:</ControlLabel>
                <FormControl onChange={this.handleChange} componentClass="select" value={this.props.colormap}>
                    {this.props.colormaps.map((cmap, index) => {
                        return <option key={index} value={cmap}>{cmap}</option>
                    })}
                </FormControl>
            </FormGroup>
        );
    }
});

export default ColormapField;
