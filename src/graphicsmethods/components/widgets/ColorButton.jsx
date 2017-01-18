import React from 'react'
import {Button} from 'react-bootstrap'


var ColorButton = React.createClass({
    propTypes: {
        color: React.PropTypes.array,
        action: React.PropTypes.func
    },
    render() {
        let color = "rgba(" + this.props.color.join(", ") + ")";
        return (
            <Button onClick={this.props.action} style={{"backgroundColor": color}} />
        );
    }
});

export default ColorButton;
