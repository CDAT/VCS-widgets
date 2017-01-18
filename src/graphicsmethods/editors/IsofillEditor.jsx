import React from 'react'
import ColormapField from '../fields/ColormapField'
import BoxfillType from '../fields/BoxfillType'
import ColorOneTwo from '../fields/ColorOneTwo'
import DatawcCoordinates from '../fields/DatawcCoordinates'
import Exts from '../fields/Exts'
import TicsAndLabels from '../fields/TicsAndLabels'
import AxisTransforms from '../fields/AxisTransforms'
import Levels from '../fields/Levels'
import FillareaFields from '../fields/FillareaFields'
import LevelOneTwo from '../fields/LevelOneTwo'
import Missing from '../fields/Missing'
import Projection from '../fields/Projection'
import Legend from '../fields/Legend'
import EditName from '../fields/EditName'

var IsofillEditor = React.createClass({
    propTypes: {
        addLevel: React.PropTypes.func,
        changeState: React.PropTypes.func,
        colormaps: React.PropTypes.object,
        gmProps: React.PropTypes.object,
        gmEditName: React.PropTypes.string,
        gmEditNameChange: React.PropTypes.func,
        handleChange: React.PropTypes.func,
        removeLevel: React.PropTypes.func
    },
    render() {
        return (
            <div className="container-fluid">
                <div className='col-md-12'>
                    <EditName name={this.props.gmEditName}
                        change={this.props.gmEditNameChange}/>
                </div>
                <div className='col-md-12'>
                    <h4>Isofill Settings</h4>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Missing handleChange={this.props.changeState}
                                missing={this.props.gmProps['missing']}
                                className='col-md-6'/>
                            <Exts handleChange={this.props.handleChange}
                                ext1={this.props.gmProps['ext_1']}
                                ext2={this.props.gmProps['ext_2']}
                                className='col-md-3' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Legend handleChange={this.props.handleChange}
                                legend={this.props.gmProps['legend']}
                                className='col-md-12'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Levels handleChange={this.props.changeState}
                                levels={this.props.gmProps['levels']}
                                addLevel={this.props.addLevel}
                                removeLevel={this.props.removeLevel} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <FillareaFields handleChange={this.props.handleChange}
                                colors={this.props.gmProps['fillareacolors']}
                                style={this.props.gmProps['fillareastyle']}
                                indices={this.props.gmProps['fillareaindices']}
                                opacity={this.props.gmProps['fillareaopacity']} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <ColormapField handleChange={this.props.handleChange}
                            colormap={this.props.gmProps['colormap']}
                            colormaps={this.props.colormaps} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <Projection projection={this.props.gmProps['projection']}
                            handleChange={this.props.handleChange} />
                    </div>
                </div>
                <DatawcCoordinates handleChange={this.props.changeState}
                    x1={this.props.gmProps['datawc_x1']}
                    x2={this.props.gmProps['datawc_x2']}
                    y1={this.props.gmProps['datawc_y1']}
                    y2={this.props.gmProps['datawc_y2']}
                />
            </div>
        )
    }
});

export default IsofillEditor;
