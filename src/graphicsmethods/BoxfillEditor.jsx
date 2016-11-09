import React from 'react'
import ColormapField from './ColormapField'
import BoxfillType from './BoxfillType'
import ColorOneTwo from './ColorOneTwo'
import DatawcCoordinates from './DatawcCoordinates'
import Exts from './Exts'
import TicsAndLabels from './TicsAndLabels'
import AxisTransforms from './AxisTransforms'
import Levels from './Levels'
import FillareaFields from './FillareaFields'
import LevelOneTwo from './LevelOneTwo'
import Missing from './Missing'
import Projection from './Projection'
import Legend from './Legend'
import EditName from './EditName'

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
                        <BoxfillType handleChange={this.handleChange}
                            type={this.props.gmProps['boxfill_type']}
                            headerClass='col-md-4'
                            radioClass='col-md-4'/>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Missing handleChange={this.changeState}
                                missing={this.props.gmProps['missing']}
                                className='col-md-6'/>
                            <Exts handleChange={this.handleChange}
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
                            <Legend handleChange={this.handleChange}
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
                        <LevelOneTwo handleChange={this.changeState}
                            level1={this.props.gmProps['level_1']}
                            level2={this.props.gmProps['level_2']} />
                    </div>
                    <div className="col-md-6">
                        <ColorOneTwo handleChange={this.changeState}
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
                        <Levels handleChange={this.changeState}
                            levels={this.props.gmProps['levels']}
                            addLevel={this.addLevel}
                            removeLevel={this.removeLevel} />
                    </div>
                    <div className='col-md-12'>
                        <FillareaFields handleChange={this.handleChange}
                            colors={this.props.gmProps['fillareacolors']}
                            style={this.props.gmProps['fillareastyle']}
                            indices={this.props.gmProps['fillareaindices']}
                            opacity={this.props.gmProps['fillareaopacity']} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <ColormapField handleChange={this.handleChange}
                            colormap={this.props.gmProps['colormap']}
                            colormaps={this.props.colormaps} />
                    </div>
                </div>
            </div>
        )
    }
});

export default BoxfillEditor;
