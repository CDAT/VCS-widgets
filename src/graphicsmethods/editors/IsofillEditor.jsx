import React from 'react'
import ColormapField from '../fields/ColormapField'
import BoxfillType from '../fields/BoxfillType'
import DatawcCoordinates from '../fields/DatawcCoordinates'
import Exts from '../fields/Exts'
import TicsAndLabels from '../fields/TicsAndLabels'
import FillareaFields from '../fields/FillareaFields'
import Missing from '../fields/Missing'
import Projection from '../fields/Projection'
import EditName from '../fields/EditName'

var IsofillEditor = React.createClass({
    propTypes: {
        colormaps: React.PropTypes.object,
        graphicsMethod: React.PropTypes.object,
        updateGraphicsMethod: React.PropTypes.func,
    },
    render() {
        return (
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-12">
                        <EditName name={this.props.graphicsMethod.name}
                              updateGraphicsMethod={this.props.updateGraphicsMethod}/>
                    </div>
                </div>
                <h4>Isofill Settings</h4>
                <div className='row'>
                    <div className='col-md-12'>
                        <ColormapField updateGraphicsMethod={this.props.updateGraphicsMethod}
                            colormap={this.props.graphicsMethod['colormap'] === null ? "default" : this.props.graphicsMethod['colormap']}
                            colormaps={this.props.colormaps} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <Missing updateGraphicsMethod={this.props.updateGraphicsMethod}
                                 missing={this.props.graphicsMethod.missing}
                                 colormap={this.props.colormaps[this.props.graphicsMethod.colormap || "default"]}
                            />
                        <Exts updateGraphicsMethod={this.props.updateGraphicsMethod}
                            ext1={this.props.graphicsMethod['ext_1']}
                            ext2={this.props.graphicsMethod['ext_2']}
                            className={
                                this.props.graphicsMethod['boxfill_type'] !== 'custom'
                                ? 'col-md-3'
                                : 'hide'}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <FillareaFields updateGraphicsMethod={this.props.updateGraphicsMethod}
                            level={this.props.graphicsMethod.levels} color={this.props.graphicsMethod.fillareacolors}
                            pattern={this.props.fillareaindices} opacity={this.props.graphicsMethod.fillareaopacity}
                            fillStyle={this.props.graphicsMethod.fillareastyle} ext1={this.props.graphicsMethod.ext_1} ext2={this.props.graphicsMethod.ext_2}
                            colormap={this.props.colormaps[this.props.graphicsMethod.colormap || "default"]}
                            className='col-md-12'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <Projection projection={this.props.graphicsMethod['projection']}
                            updateGraphicsMethod={this.props.updateGraphicsMethod} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <DatawcCoordinates updateGraphicsMethod={this.props.updateGraphicsMethod}
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
});

export default IsofillEditor;
