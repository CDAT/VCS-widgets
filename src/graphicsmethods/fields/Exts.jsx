import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import Usage from '../../Usage'
import BooleansField from '../../common/BooleansField'


class Exts extends Component {
    constructor(props){
        super(props)
        this.update = this.update.bind(this)
    }
    
    update(value_dict) {
        const {ext_1, ext_2} = value_dict;
        if (ext_1 !== this.props.ext1) {
            this.props.updateGraphicsMethod("ext_1", ext_1);
        } else {
            this.props.updateGraphicsMethod("ext_2", ext_2);
        }
    }

    render(){
        let usage = (side, where)=>{
            return "Draws an extension arrow on " + side + " side (values " + where + " level)"
        }
        return (
            <div>
                <label>Extensions</label>
                <BooleansField updatedValue={this.update} labels={["Extend before first value", "Extend after last value"]} options={["ext_1", "ext_2"]} value={{"ext_1": this.props.ext1, "ext_2": this.props.ext2}} inline />
            </div>
        );
    }
}

Exts.propTypes = { 
    updateGraphicsMethod: PropTypes.func,
    ext1: PropTypes.bool,
    ext2: PropTypes.bool,
}

export default Exts;
