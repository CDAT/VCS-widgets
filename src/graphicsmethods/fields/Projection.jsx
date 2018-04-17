import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap'

// TODO: Add dynamic projections, make configurable.

class Projection extends Component {
    render() {
        return (
            <FormGroup controlId="projection">
                <ControlLabel>Projection</ControlLabel>
                <FormControl value={this.props.projection} componentClass="select" onChange={(e) => {this.props.updateGraphicsMethod("projection", e.target.value);} }>
                    <option value='default'>Default</option>
                    <option value='lambert'>Lambert</option>
                    <option value='linear'>Linear</option>
                    <option value='mercator'>Mercator</option>
                    <option value='mollweide'>Mollweide</option>
                    <option value='orthographic'>Orthographic</option>
                    <option value='polar'>Polar</option>
                    <option value='polyconic'>Polyconic</option>
                    <option value='robinson'>Robinson</option>
                </FormControl>
            </FormGroup>
        );
    }
}

Projection.propTypes = { 
    updateGraphicsMethod: PropTypes.func,
    projection: PropTypes.string
}

export default Projection;
