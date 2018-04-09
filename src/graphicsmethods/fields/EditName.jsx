import React, { Component } from 'react' 
import PropTypes from 'prop-types'

class EditName extends Component {
    constructor(props){
        super(props)
        this.update = this.update.bind(this)
    }
    
    update(e) {
        this.props.updateGraphicsMethod("name", e.target.value);
    }

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
}

EditName.propTypes = {
    updateGraphicsMethod: PropTypes.func,
    name: PropTypes.string
}

export default EditName;
