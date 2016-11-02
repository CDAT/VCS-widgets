import React from 'react'

var ColormapField = React.createClass({
    propTypes: {
        colormap: React.PropTypes.string,
        handleChange: React.PropTypes.func,
        colormaps: React.PropTypes.array
    },
    getDefaultProps(){
        return {
            colormap: 'default',
            colormaps: ['default']
        }
    },
    render() {
        return (
            <div>
                <h5>Colormap: </h5>
                <select name="colormap"
                    value={
                        this.props.colormap
                        ? this.props.colormap
                        : 'default'
                    }
                    onChange={this.props.handleChange}
                    className='form-control'>
                    {
                        this.props.colormaps.map((value, index)=>{
                            return (<option key={value+index} value={value}>{value}</option>);
                        })
                    }
                </select>
            </div>
        );
    }
});

export default ColormapField;
