import React from 'react';
import $ from 'jquery';
import BoxfillEditor from './editors/BoxfillEditor';
import IsofillEditor from './editors/IsofillEditor';


var GraphicsMethodEditForm = React.createClass({
    propTypes: {
        colormaps: React.PropTypes.object,
        graphicsMethod: React.PropTypes.object,
        updateGraphicsMethod: React.PropTypes.func,
    },
    render() {
        // We'll switch based on GM type here
        switch(this.props.graphicsMethod.g_name) {
          case 'Gfb':
            return(
                <BoxfillEditor colormaps={this.props.colormaps}
                               graphicsMethod={this.props.graphicsMethod}
                               updateGraphicsMethod={this.props.updateGraphicsMethod} />
            );
          case 'Gfi':
            return (<IsofillEditor colormaps={this.props.colormaps}
                               graphicsMethod={this.props.graphicsMethod}
                               updateGraphicsMethod={this.props.updateGraphicsMethod} />
            );
        }
    }
});

export default GraphicsMethodEditForm;
