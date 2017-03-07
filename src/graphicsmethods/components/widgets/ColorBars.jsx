import React from 'react'
import NumberField from '../NumberField'


var ColorBars = React.createClass({
    propTypes: {
        color: React.PropTypes.array,
        colorUpdated: React.PropTypes.func,
    },
    updateRed(v) {
        this.props.colorUpdated([v, this.green.props.value, this.blue.props.value, this.alpha.props.value / 255]);
    },
    updateBlue(v) {
        this.props.colorUpdated([this.red.props.value, this.green.props.value, v, this.alpha.props.value / 255]);
    },
    updateGreen(v) {
        this.props.colorUpdated([this.red.props.value, v, this.blue.props.value, this.alpha.props.value / 255]);
    },
    updateAlpha(v) {
        this.props.colorUpdated([this.red.props.value, this.green.props.value, this.blue.props.value, v / 255]);
    },
    render() {
        const style = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
        }
        return (
            <div style={style}>
                <NumberField updatedValue={this.updateRed} ref={(e) => { this.red = e; }} value={this.props.color[0]} label="Red:" minValue={0} maxValue={255} controlId="cbred" />
                <NumberField updatedValue={this.updateGreen} ref={(e) => { this.green = e; }} value={this.props.color[1]} label="Green:" minValue={0} maxValue={255} controlId="cbgreen" />
                <NumberField updatedValue={this.updateBlue} ref={(e) => { this.blue = e; }} value={this.props.color[2]} label="Blue:" minValue={0} maxValue={255} controlId="cbblue" />
                <NumberField updatedValue={this.updateAlpha} ref={(e) => { this.alpha = e; }} value={this.props.color[3] * 255} label="Alpha:" minValue={0} maxValue={255} controlId="cbalpha" />
            </div>
        );
    }
});

export default ColorBars;
