import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap'

class ColormapField extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        const cmap = e.target.value;
        this.props.updateGraphicsMethod("colormap", cmap);
    }

    render() {
        let cmap = this.props.colormap;
        if (cmap === null) {
            cmap = "default";
        }
        return (
            <FormGroup controlId="colormap">
                <ControlLabel>Colormap:</ControlLabel>
                <FormControl onChange={this.handleChange} componentClass="select" value={this.props.colormap}>
                    {Object.keys(this.props.colormaps).map((cmap, index) => {
                        return <option key={index} value={cmap}>{cmap}</option>
                    })}
                </FormControl>
            </FormGroup>
        );
    }
}

ColormapField.propTypes = { 
    colormap: PropTypes.string,
    updateGraphicsMethod: PropTypes.func,
    colormaps: PropTypes.object
}

export default ColormapField;
