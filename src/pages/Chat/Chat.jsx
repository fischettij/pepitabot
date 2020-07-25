import React from 'react';
import './Chat.css';
import PepitaItem from './components/PepitaItem/PepitaItem';
import UserItem from './components/UserItem/UserItem';
import ImputChat from './components/InputChat/InputChat';

const Chat = () => (
  <div className="chatbot-chat-container">
    <div className="chatbot-chat-content">
      <div className="chatbot-chat">
        <div className="chatbot-chat-container-body">
          <PepitaItem text="Hola, como estas?" />
          <UserItem text="Hola! Me llamo.." />
        </div>
        <div className="chatbot-chat-container-input">
          <ImputChat />
        </div>
      </div>
    </div>
  </div>
);

export default Chat;
