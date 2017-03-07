import React from 'react'
import {Button} from 'react-bootstrap'


var ColorButton = React.createClass({
    propTypes: {
        color: React.PropTypes.array,
        action: React.PropTypes.func,
        inline: React.PropTypes.bool
    },
    render() {
        let color = "rgba(" + this.props.color.join(", ") + ")";
        const style = {
            display: this.props.inline ? "inline-block" : "block"
        }
        return (
            <div>
                <Button onClick={this.props.action} style={{"backgroundColor": color}} />
            </div>
        );
    }
});

export default ColorButton;
