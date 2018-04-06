import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import {FormGroup, ControlLabel, Modal, Button, ButtonToolbar} from 'react-bootstrap'
import ColorProp from '../../validators/ColorProp'
import ColorButton from './widgets/ColorButton'
import ColorPicker from './widgets/ColorPicker'


function rgbToVCS(red, green, blue, alpha=1) {
    return [red / 2.55, green / 2.55, blue / 2.55, alpha * 100];
}

function vcsToRGB(red, green, blue, alpha=100) {
    return [Math.round(red * 2.55), Math.round(green * 2.55), Math.round(blue * 2.55), alpha / 100];
}

function colornameToRGBA(name) {
    const image = document.createElement("img");
    image.style.color = name;
    let rgb = window.getComputedStyle(image);
    rgb = rgb.substr(4, rgb.length - 5);
    rgb = rgb.split(", ").map(parseInt);
    const red = rgb[0];
    const green = rgb[1];
    const blue = rgb[2];
    const alpha = 1;
    return [red, green, blue, alpha];
}

function getRGBA(vcs_color, colormap) {
    let color = [];

    if (typeof vcs_color === "string") {
        color = colornameToRGBA(vcs_color);
    } else if (typeof vcs_color === "number") {
        color = vcsToRGB.apply(this, colormap[vcs_color]);
    } else if (Array.isArray(vcs_color)) {
        color = vcsToRGB.apply(this, vcs_color);
    }

    return color;
}

// Accepts a VCS color, converts to RGBA for internal manipulation, spits back out a VCS color
class ColorField extends Component {
    constructor(props){
        super(props)
        this.state = {
            showModal: false,
            workingColor: getRGBA(props.color, props.colormap),
            colorValue: props.color,
        }
        this.openColorPicker = this.openColorPicker.bind(this)
        this.closeColorPicker = this.closeColorPicker.bind(this)
        this.updateColor = this.updateColor.bind(this)
        this.finalizeColor = this.finalizeColor.bind(this)
    }

    openColorPicker(e) {
        this.setState({"showModal": true});
    }

    closeColorPicker(e) {
        // Reset the color and hide the modal
        this.setState({
            "workingColor": getRGBA(this.props.color, this.props.colormap),
            "showModal": false,
        });
    }

    updateColor(c) {
        let workingColor = c;
        if (typeof c === "number") {
            workingColor = getRGBA(c, this.props.colormap)
        }
        this.setState({workingColor: workingColor, colorValue: c});
    }

    finalizeColor() {
        this.setState({"showModal": false});
        if (this.state.workingColor === this.state.colorValue) {
            this.props.colorChanged(rgbToVCS.apply(this, this.state.workingColor));
        } else {
            // there's a color index in colorValue
            this.props.colorChanged(this.state.colorValue);
        }
    }

    render() {
        const color = this.state.workingColor;
        const cmap = this.props.colormap.map((c) => { return vcsToRGB.apply(this, c)} );
        const style = {
            display: this.props.inline ? "inline-block" : "block"
        }
        return (
            <FormGroup style={style} controlId={this.props.controlId}>
                <ControlLabel style={{marginRight: '1em'}}>{this.props.label}</ControlLabel>
                <ColorButton color={getRGBA(this.props.color, this.props.colormap)} action={this.openColorPicker} />
                <Modal show={this.state.showModal} onHide={(e) => {this.setState({"showModal": false})}}>
                    <Modal.Header closeButton>
                        <Modal.Title>Choose Color:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ColorPicker color={color} colormap={cmap} updateCurrentColor={this.updateColor} />
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonToolbar>
                            <Button onClick={this.closeColorPicker}>Cancel</Button>
                            <Button onClick={this.finalizeColor} bsStyle="primary">Select</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </Modal>
            </FormGroup>
        );
    }
}

ColorField.propTypes = { 
    color: ColorProp,
    colormap: PropTypes.array,
    label: PropTypes.string,
    controlId: PropTypes.string,
    colorChanged: PropTypes.func,
    inline: PropTypes.bool
}

ColorField.defaultProps = {
    inline: false
}

export default ColorField;
