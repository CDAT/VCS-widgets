import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import $ from 'jquery'
import BoxfillEditor from './editors/BoxfillEditor'
import IsofillEditor from './editors/IsofillEditor'
import IsolineEditor from './editors/IsolineEditor'


class GraphicsMethodEditForm extends Component {
    constructor(props){
        super(props)
        this.updateGraphicsMethodField = this.updateGraphicsMethodField.bind(this)
        this.updateGraphicsMethod = this.updateGraphicsMethod.bind(this)
    }
    
    updateGraphicsMethodField(attr, value) {
        // Used to update a single field
        const gm = $.extend({}, this.props.graphicsMethod);
        gm[attr] = value;
        this.props.updateGraphicsMethod(gm);
    }

    updateGraphicsMethod(fieldDict) {
        // Used for updating several fields at once
        const new_gm = $.extend({}, this.props.graphicsMethod);
        this.props.updateGraphicsMethod($.extend(new_gm, fieldDict));
    }

    render() {
        const props = {
          colormaps: this.props.colormaps,
          graphicsMethod: this.props.graphicsMethod,
          updateGraphicsMethod: this.updateGraphicsMethod,
          updateField: this.updateGraphicsMethodField
        }
        // We'll switch based on GM type here
        // Be sure to update the SUPPORTED_GM_EDITORS constant when adding or removing cases here.
        switch(this.props.graphicsMethod.g_name) {
            case 'Gfb':
                return <BoxfillEditor {...props} />
            case 'Gfi':
                return <IsofillEditor {...props} />
            case 'Gi':
                return <IsolineEditor {...props} />
            default:
                return null
        }
    }
}

GraphicsMethodEditForm.propTypes = { 
    colormaps: PropTypes.object,
    graphicsMethod: PropTypes.object,
    updateGraphicsMethod: PropTypes.func,
}

export default GraphicsMethodEditForm;
