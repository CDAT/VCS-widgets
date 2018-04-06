import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import {Tabs, Tab} from 'react-bootstrap'
import TemplateAxisSettings from './TemplateAxisSettings'


const x1 = ["xlabel1", "xtic1", "xmintic1"];
const x2 = ["xlabel2", "xtic2", "xmintic2"];
const y1 = ["ylabel1", "ytic1", "ymintic1"];
const y2 = ["ylabel2", "ytic2", "ymintic2"];

class TemplateAxisEditor extends Component {
    constructor(props){
        super(props)
        this.state = {
            workingTemplate: $.extend({}, this.props.template)
        }
        this.updateTemplateAttribute = this.updateTemplateAttribute.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
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

    handleSelect(key) {
        this.setState({key});
    }

    render() {
        const template = this.state.workingTemplate;
        const self = this;
        return (
            <div>
                <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="templateAxisEditors">
                    <Tab eventKey={1} title="First Set X">
                        {x1.map((axis_name) => {
                            return <TemplateAxisSettings key={axis_name} axis={template[axis_name]} page="1"
                                                          update={self.updateTemplateAttribute(axis_name)}/>
                        })}
                    </Tab>
                    <Tab eventKey={2} title="Second Set X">
                        {x2.map((axis_name) => {
                            return <TemplateAxisSettings key={axis_name} axis={template[axis_name]} page="2"
                                                          update={self.updateTemplateAttribute(axis_name)}/>
                        })}
                    </Tab>
                    <Tab eventKey={3} title="First Set Y">
                        {y1.map((axis_name) => {
                            return <TemplateAxisSettings key={axis_name} axis={template[axis_name]} page="3"
                                                          update={self.updateTemplateAttribute(axis_name)}/>
                        })}
                    </Tab>
                    <Tab eventKey={4} title="Second Set Y">
                        {y2.map((axis_name) => {
                            return <TemplateAxisSettings key={axis_name} axis={template[axis_name]} page="4"
                                                          update={self.updateTemplateAttribute(axis_name)}/>
                        })}
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

TemplateAxisEditor.propTypes = { 
    template: PropTypes.object,
    updateTemplate: PropTypes.func
}

export default TemplateAxisEditor;
