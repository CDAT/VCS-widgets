import React, { Component } from 'react' 
import PropTypes from 'prop-types';
import TemplateLabelSettings from './TemplateLabelSettings';

const labels = ["dataname", "title", "units", "mean", "min", "max", "file", "crdate", "crtime", "zname", "tname", "zvalue", "tvalue", "zunits", "tunits"]


class TemplateLabelsEditor extends Component {
    constructor(props){
        super(props)
        this.state = {
            workingTemplate: $.extend({}, this.props.template)
        }
        this.updateTemplateAttribute = this.updateTemplateAttribute.bind(this)
    }
    
    updateTemplateAttribute(attribute) {
        const self = this;
        return (key, value) => {
            self.props.updateTemplate(attribute, key, value);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({workingTemplate: $.extend({}, nextProps.template)});
    }

    render() {
        const template = this.state.workingTemplate;
        const self = this;
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <th></th>
                        <td style={{width: 120}} className="text-center">X</td>
                        <td style={{width: 120}} className="text-center">Y</td>
                        <td style={{width: 120}} className="text-center">Priority</td>
                    </tr>
                {labels.map((label_name) => {
                    return <TemplateLabelSettings key={label_name} label={template[label_name]} update={self.updateTemplateAttribute(label_name)} />
                })}
                </tbody>
            </table>
        );
    }
}

TemplateLabelsEditor.propTypes = { 
    template: PropTypes.object,
    updateTemplate: PropTypes.func
}

export default TemplateLabelsEditor;
