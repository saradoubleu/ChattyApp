import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
// import Message from './Message';
//pure function - function operates independantly - return value is based on input
import MessageList from './MessageList.jsx';
      //---------TESTING
      // import Understand from './Understand.jsx';

class App extends Component {
  //set the componenets initial state
  constructor(props){
    super(props)
    this.state = 
    {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      //---------TESTING
      // understand: {yes: "I understand"},
      newMessage: [],
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }  

  //For creating and adding new messages
  addMessage = (messageToSend) => {
    const newMessage = {
      type: "postMessage",
      username: messageToSend.currentUser,
      content: messageToSend.content
    };
    const messages = this.state.messages.concat(newMessage);
    this.setState({ messages: messages });
  }
  
  componentDidMount() {
    console.log("componentDidMount <App />");
      setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000); //3 seconds
  }

  render() {
    return (
      <div id="react-root">
      <div id="chat-frame">
          <div id="head">
            <header>
              <h1>Chatty</h1>
            </header>
          </div>
          <div id="message-list">
          <MessageList messages={this.state.messages} />
          </div>
          <div id="chat-box">
          <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} />
          </div>
      </div>
      </div>
    );
  }
}
export default App;
