import React from 'react'


var TemplateLabelSettings = React.createClass({
    propTypes: {
        label: React.PropTypes.object,
        update: React.PropTypes.func
    },
    updateLabelValue(key) {
        const self = this;
        let validator = parseFloat;
        if (key === "priority") {
            validator = parseInt;
        }
        return (e) => {
            self.props.update(key, validator(this.range(e.target.value)));
        };
    },
    range(alt){
        if(alt < 0){
            alt = 0;
        }
        else if (alt > 1){
            alt = 1;
        }
        return alt;
    },
    render() {
        const x = this.props.label.x;
        const y = this.props.label.y;
        const priority = this.props.label.priority;
        const name = this.props.label.member;
        const styles = {padding: "5px"};
        
        return (
            <tr>
                <th style={styles}>{name}</th>
                <td style={styles}><input style={{width: 120}} type="number" step="0.001" value={x} name="{name}_x" onChange={this.updateLabelValue("x")}/></td>
                <td style={styles}><input style={{width: 120}} type="number" step="0.001" value={y} name="{name}_y" onChange={this.updateLabelValue("y")} /></td>
                <td style={styles}><input style={{width: 120}} type="number" value={priority} name="{name}_priority" onChange={this.updateLabelValue("priority")} /></td>
            </tr>
        );
    },
})

export default TemplateLabelSettings;
