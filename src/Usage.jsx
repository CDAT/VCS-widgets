import React from 'react'
import {OverlayTrigger, Button, Popover} from 'react-bootstrap'

var Usage = React.createClass({
    propTypes: {
        placement: React.PropTypes.string,
        usage: React.PropTypes.string,
    },
    getDefaultProps() {
        return {
            placement: 'right',
            usage: '',
        }
    },
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
});

export default Usage;
