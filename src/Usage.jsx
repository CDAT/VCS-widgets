import React from 'react'

var Usage = React.createClass({
    propTypes: {
        className: React.PropTypes.string,
        container: React.PropTypes.string,
        html: React.PropTypes.string,
        id: React.PropTypes.string,
        placement: React.PropTypes.string,
        usage: React.PropTypes.string,
        warning: React.PropTypes.bool
    },
    getDefaultProps: ()=>{
        return {
            warning: false,
            placement: 'right',
            id: 'usage',
            className: '',
            usage: '',
            container: 'body'
        }
    },
    handleEvent(event) {
        $(event.target).popover('toggle')
    },
    render() {
        return (
            <span>
                &emsp;
                <a tabIndex="0"
                    onFocus={this.handleEvent}
                    onBlur={(event) => {$(event.target).popover('hide')}}
                    data-content={this.props.usage}
                    data-toggle='popover'
                    role='button'
                    className={this.props.className}
                    id={this.props.id}
                    data-trigger="focus"
                    data-placement={this.props.placement}
                    data-html={
                        this.props.warning
                        ? true
                        : false }
                    data-container={this.props.container}>?</a>
            </span>
        )
    }
});

export default Usage;
