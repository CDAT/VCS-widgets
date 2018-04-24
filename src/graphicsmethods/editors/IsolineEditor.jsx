import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import DatawcCoordinates from '../fields/DatawcCoordinates'
import ColormapField from '../fields/ColormapField'
import Projection from '../fields/Projection'
import EditName from '../fields/EditName'
import LabelOptions from '../fields/LabelOptions'

class IsolineEditor extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-12">
                        <EditName name={this.props.graphicsMethod.name}
                              updateGraphicsMethod={this.props.updateField}/>
                    </div>
                </div>
                <h4>Isoline Settings</h4>
                <div className='row'>
                    <div className='col-md-12'>
                        <ColormapField
                            updateGraphicsMethod={this.props.updateField}
                            colormap={this.props.graphicsMethod['colormap'] === null ? "default" : this.props.graphicsMethod['colormap']}
                            colormaps={this.props.colormaps}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <LabelOptions
                            updateGraphicsMethod={this.props.updateField}
                            label={this.props.graphicsMethod.label}
                            label_skip_distance={this.props.graphicsMethod.labelskipdistance}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <Projection projection={this.props.graphicsMethod['projection']}
                            updateGraphicsMethod={this.props.updateField} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <DatawcCoordinates
                            updateGraphicsMethod={this.props.updateField}
                            x1={this.props.graphicsMethod['datawc_x1']}
                            x2={this.props.graphicsMethod['datawc_x2']}
                            y1={this.props.graphicsMethod['datawc_y1']}
                            y2={this.props.graphicsMethod['datawc_y2']}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

IsolineEditor.propTypes = { 
    colormaps: PropTypes.object,
    graphicsMethod: PropTypes.object,
    updateGraphicsMethod: PropTypes.func,
    updateField: PropTypes.func,
}

export default IsolineEditor;
