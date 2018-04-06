import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import {OverlayTrigger, Button, Popover} from 'react-bootstrap'

class Usage extends Component {

    render() {
        const popover = (
            <Popover id="usage-popover" title="Usage:">
                <span>{this.props.usage}</span>
            </Popover>
        );
        return (
            <OverlayTrigger trigger="click" placement={this.props.placement} overlay={popover}><Button>?</Button></OverlayTrigger>
        );
    }
}

Usage.propTypes = { 
    placement: PropTypes.string,
    usage: PropTypes.string,
}

Usage.defaultProps = {
    placement: 'right',
    usage: '',
}

export default Usage;