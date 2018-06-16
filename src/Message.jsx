import React, { Component } from 'react';

//Message Comp - renders log of messages associated with each user
class Message extends Component {
    render() {
        console.log("Render Messages");
        return (
            <div>
                <div className={"showMessage " + (this.props.message.type == 'allNtf' ? 'show' : 'hidden')}>
                    {this.props.message.content}
                </div>

                <div className="message">
                    <span className={"message-username " + (this.props.message.type == 'allMsg' ? 'show' : 'hidden')}>{this.props.message.username}</span>
                    <span className={"message-content " + (this.props.message.type == 'allMsg' ? 'show' : 'hidden')}>{this.props.message.content}</span>
                </div>
            </div>
        );
    }
}
export default Message;
