import React, { Component } from 'react' 
import PropTypes from 'prop-types'


class ColorSwatch extends Component {
    render() {
        let color = "rgba(" + this.props.color.join(", ") + ")";
        const style = {
            backgroundColor: color,
            boxShadow: "0 0 0 2px black",
            border: "2px solid white",
            height: "200px"
        }
        return (
            <div style={style}></div>
        );
    }
}

ColorSwatch.propTypes = { 
    color: PropTypes.array,
}

export default ColorSwatch;
