import React from 'react'
import ColorTable from './ColorTable'
import ColorSwatch from './ColorSwatch'
import ColorBars from './ColorBars'


var ColorPicker = React.createClass({
    propTypes: {
        colormap: React.PropTypes.array,
        color: React.PropTypes.array,
        updateCurrentColor: React.PropTypes.func,
    },
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
});

export default ColorPicker;
