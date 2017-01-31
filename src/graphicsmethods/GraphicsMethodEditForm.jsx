import React from 'react'
import $ from 'jquery'
import BoxfillEditor from './editors/BoxfillEditor'


var GraphicsMethodEditForm = React.createClass({
    propTypes: {
        colormaps: React.PropTypes.object,
        graphicsMethod: React.PropTypes.object,
        updateGraphicsMethod: React.PropTypes.func,
    },
    render() {
        // We'll switch based on GM type here
        return(
            <BoxfillEditor addLevel={this.addLevel}
                           colormaps={this.props.colormaps}
                           graphicsMethod={this.props.graphicsMethod}
                           updateGraphicsMethod={this.props.updateGraphicsMethod} />
        );
    }
});

export default GraphicsMethodEditForm;
