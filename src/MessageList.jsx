import React, {Component} from 'react';

/*
Task: Pass the messages as a prop to MessageList. Use a loop inside the MessageList component to render one Message component for each message.
*/

//this.props.messages
class MessageList extends Component {
    render(){ 
        const message = this.props.messages.map((msg, index) => 
            <p key={index}> {(msg.username)} {(msg.content)}</p>
        );    
        return (
            <p> {message} </p> 
            // <ul> {message} </ul> 
        );
    }
}

export default MessageList;