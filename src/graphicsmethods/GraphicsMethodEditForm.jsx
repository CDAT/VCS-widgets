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
    updateGraphicsMethodField(attr, value) {
        // Used to update a single field
        const gm = $.extend({}, this.props.graphicsMethod);
        gm[attr] = value;
        this.props.updateGraphicsMethod(gm);
    },
    updateGraphicsMethod(fieldDict) {
        // Used for updating several fields at once
        const new_gm = $.extend({}, this.props.graphicsMethod);
        this.props.updateGraphicsMethod($.extend(new_gm, fieldDict));
    },
    render() {
        const props = {
          colormaps: this.props.colormaps,
          graphicsMethod: this.props.graphicsMethod,
          updateGraphicsMethod: this.updateGraphicsMethod,
          updateField: this.updateGraphicsMethodField
        };
        let editor = null;
        // We'll switch based on GM type here
        switch(this.props.graphicsMethod.g_name) {
          case 'Gfb':
            return (<BoxfillEditor {...props} />);
          case 'Gfi':
            return <IsofillEditor {...props} />;
        }

    }
});

export default GraphicsMethodEditForm;
