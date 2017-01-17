import React from 'react'
import Usage from '../../Usage'
import BooleansField from '../components/BooleansField'


var Exts = React.createClass({
    propTypes: {
        updateGraphicsMethod: React.PropTypes.func,
        ext1: React.PropTypes.bool,
        ext2: React.PropTypes.bool,
    },
    update(value_dict) {
        const {ext_1, ext_2} = value_dict;
        if (ext_1 !== this.props.ext1) {
            this.props.updateGraphicsMethod("ext_1", ext_1);
        } else {
            this.props.updateGraphicsMethod("ext_2", ext_2);
        }
    },
    render(){
        let usage = (side, where)=>{
            return "Draws an extension arrow on " + side + " side (values " + where + " level)"
        }
        return (
            <BooleansField updatedValue={this.update} labels={["Extend before first value", "Extend after last value"]} options={["ext_1", "ext_2"]} value={{"ext_1": this.props.ext1, "ext_2": this.props.ext2}} inline />
        );
    }
});

export default Exts;
