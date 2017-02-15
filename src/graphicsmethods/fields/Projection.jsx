import React from 'react'
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap'

// TODO: Add dynamic projections, make configurable.

var Projection = React.createClass({
    propTypes: {
        updateGraphicsMethod: React.PropTypes.func,
        projection: React.PropTypes.string
    },
    render() {
        const self = this;
        return (
            <FormGroup controlId="projection">
                <ControlLabel>Projection</ControlLabel>
                <FormControl value={this.props.projection} componentClass="select" onChange={(e) => {self.props.updateGraphicsMethod("projection", e.target.value);} }>
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
});

export default Projection;
