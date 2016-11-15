import React from 'react'

var EditName = React.createClass({
    render(){
        return (
            <span>
                <h5>Name for new GM</h5>
                <input type='text'
                    value={this.props.name}
                    onChange={this.props.change}/>
            </span>
        )
    }

});

export default EditName;
