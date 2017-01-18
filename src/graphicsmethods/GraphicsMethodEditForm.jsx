import React from 'react'
import $ from 'jquery'
import BoxfillEditor from './editors/BoxfillEditor'


var GraphicsMethodEditForm = React.createClass({
    propTypes: {
        colormaps: React.PropTypes.object,
        graphicsMethod: React.PropTypes.object,
        updateGraphicsMethod: React.PropTypes.func,
    },
    getInitialState() {
        return {
            "workingGraphicsMethod": $.extend({}, this.props.graphicsMethod)
        }
    },
    componentWillReceiveProps(nextProps) {
        const p = $.extend({}, nextProps.graphicsMethod);
        this.setState({"workingGraphicsMethod": p})
    },
    updateGraphicsMethod(attr, value) {
        const p = $.extend({}, this.state.workingGraphicsMethod);
        p[attr] = value;
        this.setState({"workingGraphicsMethod": p})
    },
    commitEdits() {
        this.props.updateGraphicsMethod(this.state.workingGraphicsMethod);
    },
    render() {
        return(
            <div>
                <div className='modal-body'>
                    <BoxfillEditor addLevel={this.addLevel}
                        colormaps={this.props.colormaps}
                        graphicsMethod={this.state.workingGraphicsMethod}
                        updateGraphicsMethod={this.updateGraphicsMethod}
                    />
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
});

export default GraphicsMethodEditForm;
