import React, { Component } from 'react';

//ChatBar Comp - renders chat bar componenets in the footer of the chat window
class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: "Anonymous"
        }
    }
    //handle username field being changed
    handleUsernameChange = (event) => {
        const newUserName = event.target.value;
        const setCurrentUser = {
            currentUser: newUserName
        }
        this.setState(setCurrentUser);
        this.props.notifyChatOfNameChange(newUserName);
    }
    //handle the enter key being pressed 
    handleEnter = (event) => {
        if (event.key === 'Enter') {
            const message = {
                type: "displayMsg",
                currentUser: this.state.currentUser,
                content: event.target.value
            }
            this.setState(message);
            event.target.value = '';
            this.props.sendMessage(message);
        }
    }
    render() {
        console.log("Render Chatar componenet");
        return (
            <footer className="chatbar">
                <input className="chatbar-username" defaultValue={this.props.currentUser.name} onBlur={this.handleUsernameChange} placeholder="Your Name (Optional)" />
                <input onKeyUp={this.handleEnter} className="chatbar-message" placeholder="Type a message and hit ENTER" />
            </footer>
        );
    }
}

export default ChatBar;