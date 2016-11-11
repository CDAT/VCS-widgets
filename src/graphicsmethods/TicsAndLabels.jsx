import React from 'react'
import Usage from '../Usage'

function validateTics(value) {

}
function validateLabels(value) {
    // must be a valid JSON with float=>string mappings

}
var TicsAndLabels = React.createClass({
    propTypes: {
        handleChange: React.PropTypes.func,
        xmt1: React.PropTypes.string,
        xmt2: React.PropTypes.string,
        ymt1: React.PropTypes.string,
        ymt2: React.PropTypes.string,
        xtl1: React.PropTypes.string,
        xtl2: React.PropTypes.string,
        ytl1: React.PropTypes.string,
        ytl2: React.PropTypes.string
    },
    handleBlur(event) {

    },
    readSlider(event){
        let label_name = event.target.name
        let slider_value =  $('#'+label_name).val()
    },
    render(){
        return (
            <div>
                <div id='mtics'>
                    <h5>xmtics1: </h5>
                    <input name='xmtics1'
                        type='text'
                        defaultValue={this.props.xmt1}
                        onChange={NOP}
                        onBlur={this.handleBlur}/>
                    <h5>xmtics2: </h5>
                    <input name='xmtics2'
                        type='text'
                        defaultValue={this.props.xmt2}
                        onChange={NOP}
                        onBlur={this.handleBlur}/>
                    <h5>ymtics1: </h5>
                    <input name='ymtics1'
                        type='text'
                        defaultValue={this.props.ymt1}
                        onChange={NOP}
                        onBlur={this.handleBlur}/>
                    <h5>ymtics2: </h5>
                    <input name='ymtics2'
                        type='text'
                        defaultValue={this.props.ymt2}
                        onChange={NOP}
                        onBlur={this.handleBlur}/>
                </div>
                <div id='ticlabels'>
                    <h5>xticlabels1: </h5>
                    <input id='xtl1'
                        type='range'
                        step="0.001"
                        min="-180"
                        max="180"
                        defaultValue="0"
                        onChange={(event)=>{this.setState({xtl1Slider: event.target.value})}}/>
                    <button name='xtl1' onClick={this.readSlider}>Add Label {this.state.xtl1Slider}</button>
                    <div id='xtl1-labels'>
                        {
                            this.props.xtl1 !== null && typeof this.props.xtl1 === 'object'
                            ? Object.keys(this.props.xtl1).map((value, index)=>{

                            })
                            : ''
                        }
                    </div>

                    <input name='xticlabels1'
                        type='text'
                        defaultValue={this.props.xtl1}
                        onChange={NOP}
                        onBlur={this.handleBlur}/>
                    <h5>xticlabels2: </h5>
                    <input name='xticlabels2'
                        type='text'
                        defaultValue={this.props.xtl2}
                        onChange={NOP}
                        onBlur={this.handleBlur}/>
                    <h5>yticlabels1: </h5>
                    <input name='yticlabels1'
                        type='text'
                        defaultValue={this.props.ytl1}
                        onChange={NOP}
                        onBlur={this.handleBlur}/>
                    <h5>yticlabels2: </h5>
                    <input name='yticlabels2'
                        type='text'
                        defaultValue={this.props.ytl2}
                        onBlur={this.handleBlur}/>
                </div>
            </div>
        )
    }
});

export default TicsAndLabels;
