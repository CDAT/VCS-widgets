/* global $ */
import React from 'react'
import Usage from '../Usage'

function verify(value) {
    if (typeof(value) === 'string') {
        if(value.match(/^[\+-]?[0-9]+(e\+?[0-9]+)?$/)) {
            return Number.parseFloat(value);
        } else {
            return false;
        }
    } else {
        console.log( "levels is not a string")
    }
}
function handleChange(event) {
    let i = Number.parseInt(event.target.name.split('_')[1]);
    let cur_value = event.target.value;
    let levels = this.state.levels;
    let first = levels.slice(0, i).concat(cur_value);
    this.setState({
        levels: first.concat(levels.slice((i + 1), levels.length))
    })
}
var Levels = React.createClass({
    propTypes: {
        addLevel: React.PropTypes.func,
        removeLevel: React.PropTypes.func,
        handleChange: React.PropTypes.func,
        levels: React.PropTypes.array
    },
    getInitialState() {
        return {
            levels: [],
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            levels: nextProps.levels
        })
    },
    handleBlur(event) {
        let property_name = event.target.name.split('_')[0];
        let index = event.target.name.split('_')[1];
        let value = verify(event.target.value);
        if (value === 0 || value) {
            this.props.handleChange(property_name, value, index)
        } else {
            console.log(property_name + " must be an integer or 1e+20");
            this.setState({
                levels: this.props.levels
            });
            $('#levels-'+index+'-usage').focus()
        }
    },
    render(){
        let usage =  "Set the level range to use. Must be an integer.\n" +
                    "If set to 1e+20, VCS will auto-allocate level value."
        return (
            <div >
                <h5>Levels: </h5>
                {
                    this.state.levels && this.state.levels.length > 0
                    ? this.state.levels.map((value, index) => {
                        return (
                            <div key={'levels_'+index}>
                                <input name={'levels_'+index}
                                    type="text"
                                    value={
                                        Number.isInteger(value) && Math.abs(value) > 1e4
                                        ? value.toExponential()
                                        : value
                                    }
                                    onChange={handleChange.bind(this)}
                                    onBlur={this.handleBlur}/>
                                <button onClick={this.props.removeLevel}
                                    data-index={index}
                                    className='btn btn-secondary'>
                                            -
                                </button>
                                <Usage id={'levels-'+index+'-usage'}
                                    usage={usage} /><br/>
                                {
                                    index === (this.state.levels.length - 1)
                                    ? <button onClick={this.props.addLevel}
                                        className='btn btn-secondary'>
                                        +
                                      </button>
                                    : ''
                                }
                            </div>
                        );
                     })
                    : <span>
                        <button onClick={this.props.addLevel} className='btn btn-secondary'> + </button>
                        <Usage id={'levels-usage'}
                            usage={usage} />
                      </span>

                }
            </div>
        );
    }
});

export default Levels;
