import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import Usage from '../../Usage'

class Legend extends Component {
    constructor(props){
        super(props)
        this.state = {
            legend: this.props.legend,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            legend: nextProps.legend
        })
    }

    render() {
        return (
            <div className={this.props.className}>
                <h5>Legend Labels: </h5>
                    <input type='text'
                        name='legend'
                        value={this.state.legend ? this.state.legend: ''}
                        onChange={(event)=>{this.setState({legend:event.target.value})}}
                        onBlur={this.props.handleChange}/>
                    <Usage usage="Specify the desired legend labels () or [] or {} or None to let VCS handle"/>
            </div>
        );
    }
}

Legend.propTypes = { 
    updateGraphicsMethod: PropTypes.func,
    labels: PropTypes.object,
    levels: PropTypes.array,
    colors: PropTypes.array,
    opacities: PropTypes.array,
    patterns: PropTypes.array,
    fillStyle: PropTypes.string,
    showFill: PropTypes.bool,
    className: PropTypes.string
}

export default Legend;
