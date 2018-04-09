import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'


class ColorButton extends Component {
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
}

ColorButton.propTypes = { 
    color: PropTypes.array,
    action: PropTypes.func,
    inline: PropTypes.bool
}

export default ColorButton;
