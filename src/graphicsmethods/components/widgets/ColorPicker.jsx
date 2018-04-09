import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import ColorTable from './ColorTable'
import ColorSwatch from './ColorSwatch'
import ColorBars from './ColorBars'


class ColorPicker extends Component {
    render() {
        const mainStyle = {
            display: "flex",
            alignItems: "stretch"
        }
        const subStyle = {
            display: "flex",
            alignItems: "space-between",
            flexDirection: "column"
        }
        const curColor = this.props.color;
        return (
            <div style={mainStyle} className="row">
                <div style={subStyle} className="col-sm-4">
                    <ColorSwatch color={curColor} />
                    <ColorBars color={curColor} colorUpdated={this.props.updateCurrentColor} />
                </div>
                <div className="col-sm-8">
                    <ColorTable colors={this.props.colormap} colorSelected={ (ind) => { this.props.updateCurrentColor(ind); } } />
                </div>
            </div>
        );
    }
}

ColorPicker.propTypes = { 
    colormap: PropTypes.array,
    color: PropTypes.array,
    updateCurrentColor: PropTypes.func,
}

export default ColorPicker;
