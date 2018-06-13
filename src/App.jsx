import React, {Component} from 'react';
// import ChatBar from './ChatBar';
// import Message from './Message';
import MessageList from './MessageList.jsx';

class App extends Component {
  //set the componenets initial state
  constructor(props){
    super(props)
    this.state = 
    {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
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
            <input type="text" className="nameInput" placeholder="Your Name (Optional)" defaultValue={this.state.currentUser.name} />  
            <input type="text" className="messageInput" placeholder="Type a message and hit ENTER" />
          </div>
      </div>
      </div>
    );
  }
}
export default App;
