import React from 'react'

var EditName = React.createClass({
    propTypes: {
        updateGraphicsMethod: React.PropTypes.func,
        name: React.PropTypes.string
    },
    update(e) {
        this.props.updateGraphicsMethod("name", e.target.value);
    },
    render(){
        return (
            <span>
                <h5>Name for new GM</h5>
                <input type='text'
                    value={this.props.name}
                    onChange={this.update}/>
            </span>
        )
    }

});

export default EditName;
