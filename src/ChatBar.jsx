import React, {Component} from 'react';

//components can be a class or function
//arrow function not needed - binding only necessary within the context of multiple methods within a component
class ChatBar extends Component {
// Always put props in here
constructor(props) {
    super(props);

    // Set initial state
    this.state = {
        currentUser: "Bob"
    }
}
onSubmit = (event) =>{
    if (event.key === 'Enter') {
        const message = {
            type: "incomingMessage",
            currentUser: this.state.currentUser,
            content: event.target.value
        }
        this.setState(message);
        event.target.value = '';
        this.props.addMessage(message);
    }
}
    render() {
        return (
            <div id="chat-box">
                <input type="text" className="nameInput" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser.name} />  
                <input type="text" onKeyUp={this.onSubmit} className="messageInput" placeholder="Type a message and hit ENTER" />
            </div>
        )
    }
}

export default ChatBar;