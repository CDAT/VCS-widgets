import React from 'react'
import Usage from '../../Usage'

var Legend = React.createClass({
    propTypes: {
        updateGraphicsMethod: React.PropTypes.func,
        labels: React.PropTypes.object,
        levels: React.PropTypes.array,
        colors: React.PropTypes.array,
        opacities: React.PropTypes.array,
        patterns: React.PropTypes.array,
        fillStyle: React.PropTypes.string,
        showFill: React.PropTypes.bool,
        className: React.PropTypes.string
    },
    getInitialState() {
        return {
            legend: this.props.legend,
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            legend: nextProps.legend
        })
    },
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
});

export default Legend;
