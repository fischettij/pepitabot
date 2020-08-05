import React, { useState } from 'react';
import './Chat.css';
import PepitaItem from './components/PepitaItem/PepitaItem';
import UserItem from './components/UserItem/UserItem';
import ImputChat from './components/InputChat/InputChat';

const Chat = () => {
  let idCounter = 0;

  const [chat, setChat] = useState([
    {
      id: 0,
      emmiter: 'Pepita',
      msj: ['¡Hola!', '¿Cómo es tu nombre?'],
    },
  ]);

  const getMessage = (text) => {
    idCounter += 1;
    return {
      id: idCounter,
      emmiter: 'User',
      msj: text,
    };
  };

  const sendMessage = (text) => setChat([...chat, getMessage(text)]);

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map((message) => (message.emmiter === 'Pepita'
              ? <PepitaItem key={message.id} text={message.msj} />
              : <UserItem key={message.id} text={message.msj} />))}
          </div>
          <div className="chatbot-chat-container-input">
            <ImputChat sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
