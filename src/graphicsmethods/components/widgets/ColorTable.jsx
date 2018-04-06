import React, { Component } from 'react' 
import PropTypes from 'prop-types'


function colorBrightness(red, green, blue) {
    return (299 * red + 587 * green + 114 * blue) / 1000;
}


function compareBrightness(c1, c2) {
    const red1 = c1[0], green1 = c1[1], blue1 = c1[2];
    const red2 = c2[0], green2 = c2[1], blue2 = c2[2];
    return Math.abs(colorBrightness(red1, green1, blue1) - colorBrightness(red2, green2, blue2));
}


class ColorTable extends Component {
    render() {
        const self = this;
        return (
            <div style={{'display': 'flex', 'flexWrap': 'wrap'}}>
                {this.props.colors.map((c, ind) => {
                    const bgcolor = "rgba(" + c.join(", ") + ")";
                    let textColor = [255, 255, 255, 1];
                    if (compareBrightness(textColor, c) <= 125) {
                        textColor = [0, 0, 0, 1];
                    }

                    textColor = "rgba(" + textColor.join(", ") + ")";
                    const style = {
                        'backgroundColor': bgcolor,
                        'color': textColor,
                        'height': '30px',
                        'width': '30px',
                        'textAlign': 'center',
                        'lineHeight': '30px',
                    }
                    return (<div key={ind} onClick={(e) => { self.props.colorSelected(ind); }} style={style}>{ind}</div>);
                })}
            </div>
        );
    }
}

ColorTable.propTypes = { 
    colors: PropTypes.array,
    colorSelected: PropTypes.func
}

export default ColorTable;
