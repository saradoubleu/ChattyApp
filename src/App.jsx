import React, { Component } from 'react';

import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import uuid from 'uuid/v4';

class App extends Component {
  //set the componenets initial state
  constructor(props) {
    super(props);
    this.state = {
      counter: "0",
      currentUser: { name: "Anonymous" },
      messages: []
    };
  }
  //Notify chat when username has changed
  notifyChatOfNameChange = (newUser) => {
    const id = uuid();
    const newMessage = {
      id: id,
      type: "displayNtf",
      username: newUser,
      content: `${this.state.currentUser.name} has changed their name to ${newUser}.`
    };
    const updateCurrentUser = { name: newUser };
    this.setState({ currentUser: updateCurrentUser });
    const messages = this.state.messages.concat(newMessage);
    this.setState({ messages: messages });
    this.socket.send(JSON.stringify(newMessage));

  }

  sendMessage = (messageToSend) => {
    const id = uuid();
    const newMessage = {
      id: id,
      type: "displayMsg",
      username: messageToSend.currentUser,
      content: messageToSend.content
    };
    const messages = this.state.messages.concat(newMessage);
    this.setState({ messages: messages });
    this.socket.send(JSON.stringify(newMessage));
  }

  //Pull all messages 
  getMessage = (data) => {
    switch (data.type) {
      case "allMsg":

      // case "incomingMessage":
        const smessages = this.state.messages.concat(data);
        this.setState({ messages: smessages });
        break;
      case "allNtf":
        const nmessages = this.state.messages.concat(data);
        this.setState({ messages: nmessages });
        console.log("Received notificaton");
        break;
      case "usersOnline":
        this.setState({ counter: data.counter });
        break;
      default:
        throw new Error("Unknown event type " + data.type);
    }
  }

  //once all the data is loaded - do all of this
  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = (event) => {
      console.log("Connected to server");
    };

    this.socket.onmessage = (event) => {
      console.log("Incoming message:", event.data);
      const data = JSON.parse(event.data);
      this.getMessage(data);
    }
  }

  render() {
    console.log("Render app component");
    return (
      <div>
        <NavBar counter={this.state.counter} />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} sendMessage={this.sendMessage} notifyChatOfNameChange={this.notifyChatOfNameChange} />
      </div>
    );
  }
}
export default App;
