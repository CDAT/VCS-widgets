import React from 'react'


var ColorSwatch = React.createClass({
    propTypes: {
        color: React.PropTypes.array,
    },
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
});

export default ColorSwatch;
