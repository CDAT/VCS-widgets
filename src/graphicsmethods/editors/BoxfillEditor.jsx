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

var BoxfillEditor = React.createClass({
    propTypes: {
        addLevel: React.PropTypes.func,
        changeState: React.PropTypes.func,
        colormaps: React.PropTypes.array,
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
                    <h4>Boxfill Settings</h4>
                    <div className='col-md-12'>
                        <BoxfillType handleChange={this.props.handleChange}
                            type={this.props.gmProps['boxfill_type']}
                            headerClass='col-md-4'
                            radioClass='col-md-4'/>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Missing handleChange={this.props.changeState}
                                missing={this.props.gmProps['missing']}
                                className='col-md-6'/>
                            <Exts handleChange={this.props.handleChange}
                                ext1={this.props.gmProps['ext_1']}
                                ext2={this.props.gmProps['ext_2']}
                                className={
                                    this.props.gmProps['boxfill_type'] !== 'custom'
                                    ? 'col-md-3'
                                    : 'hide'}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Legend handleChange={this.props.handleChange}
                                legend={this.props.gmProps['legend']}
                                className='col-md-12'/>
                        </div>
                    </div>
                </div>
                <div className={
                    this.props.gmProps['boxfill_type'] !== 'custom'
                    ? 'col-md-12'
                    : 'hide'}>
                    <h4>Linear and Log Settings</h4>
                    <div className="col-md-6">
                        <LevelOneTwo handleChange={this.props.changeState}
                            level1={this.props.gmProps['level_1']}
                            level2={this.props.gmProps['level_2']} />
                    </div>
                    <div className="col-md-6">
                        <ColorOneTwo handleChange={this.props.changeState}
                            color1={this.props.gmProps['color_1']}
                            color2={this.props.gmProps['color_2']} />
                    </div>
                </div>
                <div className={
                    this.props.gmProps['boxfill_type'] === 'custom'
                    ? 'col-md-12'
                    : 'hide'}>
                    <h4>Custom Settings</h4>
                    <div className='col-md-12'>
                        <Levels handleChange={this.props.changeState}
                            levels={this.props.gmProps['levels']}
                            addLevel={this.props.addLevel}
                            removeLevel={this.props.removeLevel} />
                    </div>
                    <div className='col-md-12'>
                        <FillareaFields handleChange={this.props.handleChange}
                            colors={this.props.gmProps['fillareacolors']}
                            style={this.props.gmProps['fillareastyle']}
                            indices={this.props.gmProps['fillareaindices']}
                            opacity={this.props.gmProps['fillareaopacity']} />
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

export default BoxfillEditor;
