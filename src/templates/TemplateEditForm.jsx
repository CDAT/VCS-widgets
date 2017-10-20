import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import TemplateLabelsEditor from './editors/TemplateLabelsEditor';
import TemplateAxisEditor from './editors/TemplateAxisEditor';


export default class TemplateEditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: 1
        }
    }

    handleSelect(key) {
        this.setState({key});
    }

    render() {
        const tabContentStyles = {maxHeight: 500, overflowY: "scroll", overflowX: "hidden"};
        return (
            <div>
                <div style={{minHeight: "438px"}}>
                    <img style={{maxWidth:"100%"}} src={this.props.templatePreview} />
                </div>
                <Tabs id={this.props.template.name} activeKey={this.state.key} onSelect={(k) => {this.handleSelect(k);}}>
                    <Tab eventKey={1} title="Labels">
                        <div style={tabContentStyles}>
                            <TemplateLabelsEditor template={this.props.template} updateTemplate={this.props.updateTemplate}/>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="Axes">
                        <div style={tabContentStyles}>
                            <TemplateAxisEditor template={this.props.template} updateTemplate={this.props.updateTemplate}/>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}
