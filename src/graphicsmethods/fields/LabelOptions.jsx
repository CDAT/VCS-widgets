import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import { Checkbox, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import NumberField from '../../common/NumberField'

class LabelOptions extends Component {
    // This component 
    constructor(props){
        super(props)
        this.handleLabelToggle = this.handleLabelToggle.bind(this)
    }
    
    handleLabelToggle(event) {
        const value = event.target.checked === true ? 'y' : 'n'
        this.props.updateGraphicsMethod("label", value)
    }

    render(){
        this.labeled = this.props.label === 'y' || this.props.label === 1 || this.props.label === true ? true : false
        return (
            <div>
                <Form inline>
                    <FormGroup controlId="label-toggle">
                        <ControlLabel>Labels: </ControlLabel>{' '}
                        <Checkbox 
                            checked={this.labeled}
                            onChange={this.handleLabelToggle}
                        />
                    </FormGroup>
                </Form>
                {
                    this.labeled ? 
                        <div className='row' style={{border: "1px solid #ccc", padding: ".5em", borderRadius: "5px", marginLeft: "auto"}}>
                            <div className='col-md-4'>
                                <NumberField
                                    controlId="labelskipdistance"
                                    label="Label Skip Distance:"
                                    minValue={1}
                                    maxValue={null}
                                    step={.1}
                                    value={this.props.label_skip_distance}
                                    updatedValue={(v) => {this.props.updateGraphicsMethod("labelskipdistance", v)}}
                                />
                            </div>
                        </div>
                    : 
                        null
                }
            </div>
        )
    }
}

LabelOptions.propTypes = { 
    updateGraphicsMethod: PropTypes.func,
    label: PropTypes.oneOfType([ // Should be a 'y' or a 1 for true, and an 'n' or 0 for false
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    label_skip_distance: PropTypes.number,
    label_background_colors: PropTypes.arrayOf(PropTypes.number),
    label_background_opacities: PropTypes.number,
}

export default LabelOptions
