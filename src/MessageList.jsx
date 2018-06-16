import React, { Component } from 'react';
import Message from './Message.jsx';

//MessageList Comp - renders log of messages associated with each user
class MessageList extends Component {
    render() {
        console.log("Render MessageList component");
        const message = this.props.messages.map((msg, index) =>
            <p key={index}> {(msg.username)} {(msg.content)}</p>
        );
        return (
            <div id="message-list">
                {
                    this.props.messages.map((message) => {
                        return (
                            <Message key={message.id} message={message} />
                        )
                    })
                }
            </div>
        );
    }
}

export default MessageList;