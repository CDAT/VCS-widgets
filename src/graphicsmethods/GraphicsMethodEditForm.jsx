import React from 'react'
import $ from 'jquery'
import BoxfillEditor from './BoxfillEditor'

let new_name = (that, graphicsMethods, gm, parent) => {
    let name = that.state.gmEditName ?that.state.gmEditName :gm;
    let i;
    // don't squash the base graphics methods
    if (graphicsMethods['default_method']) {
        i=0;
        do {
            ++i;
        } while(graphicsMethods[parent][name+'__edit__'+i])
        return (name+'__edit__'+i);
    } else {
        return name;
    }
};
var GraphicsMethodEditForm = React.createClass({
    propTypes: {
        colormaps: React.PropTypes.array,
        graphicsMethod: React.PropTypes.string,
        graphicsMethodParent: React.PropTypes.string,
        gmProps: React.PropTypes.object,
        graphicsMethods: React.PropTypes.object,
        updateGraphicsMethods: React.PropTypes.func,
        updateActiveGM: React.PropTypes.func
    },
    getInitialState() {
        return {
            gmEditName: this.props.graphicsMethod
        }
    },
    componentWillUpdate() {
        $("#commit-gm-edits").prop("disabled", true)
    },
    componentDidUpdate() {
        $("#commit-gm-edits").prop("disabled", false)
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            gmEditName: nextProps.graphicsMethod
        })

    },
    addLevel() {
        let cur_gmProps = Object.assign({}, this.props.gmProps);
        cur_gmProps['levels'] = cur_gmProps['levels'].concat(1e+20);
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
    },
    removeLevel(event) {
        let index = Number.parseInt(event.target.getAttribute('data-index'));
        let cur_gmProps = Object.assign({}, this.props.gmProps);
        let cur_levels = cur_gmProps['levels'];
        let new_levels = cur_levels.slice(0, index).concat(cur_levels.slice((index + 1), cur_levels.length));
        cur_gmProps['levels'] = new_levels;
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
    },
    handleChange: function(event) {
        let property_name = event.target.name;
        let cur_gmProps = Object.assign({}, this.props.gmProps);
        if (event.target.type === 'checkbox') {
            cur_gmProps[property_name] = event.target.checked;
        } else if (property_name.match(/levels_[0-9]+/)) {
            let level_index = Number.parseInt(property_name.split('_')[1]);
            cur_gmProps['levels'][level_index] = event.target.value;
        } else {
            cur_gmProps[property_name] = event.target.value;
        }
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
    },
    changeState(property_name, value, index=null) {
        let cur_gmProps = Object.assign({}, this.props.gmProps);
        if(!index) {
            cur_gmProps[property_name] = value;
        } else {
            cur_gmProps[property_name][index] = value;
        }
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
    },
    commitEdits() {
        let parent = this.props.graphicsMethodParent;
        let gm = this.props.graphicsMethod;
        let new_props = this.props.gmProps;
        let graphicsMethods = this.props.graphicsMethods;
        let gm_name = new_name(this, graphicsMethods, gm, parent)
        this.props.updateGraphicsMethods(graphicsMethods, new_props, parent, gm, gm_name);
        this.setState({
            gmEditName: ''
        });
    },
    gmEditNameChange(event) {
        this.setState({
            gmEditName: event.target.value
        });
    },
    render() {
        if (!this.props.gmProps.no_gm_selected) {
            return(
                <div>
                    <div className='modal-body'>
                        <BoxfillEditor addLevel={this.addLevel}
                            changeState={this.changeState}
                            colormaps={this.props.colormaps}
                            gmProps={this.props.gmProps}
                            gmEditName={this.state.gmEditName}
                            gmEditNameChange={this.gmEditNameChange}
                            handleChange={this.handleChange}
                            removeLevel={this.removeLevel} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button"
                            className="btn btn-primary"
                            id="commit-gm-edits"
                            onClick={this.commitEdits}
                            data-dismiss="modal">
                            Save changes
                        </button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h5> Please select a Graphics Method to edit</h5>
                </div>
            )
        }

    }
});

export default GraphicsMethodEditForm;
