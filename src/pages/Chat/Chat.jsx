import React, { useState, useEffect } from 'react';
import './Chat.css';
import Fade from 'react-reveal/Fade';
import PepitaItem from './components/PepitaItem/PepitaItem';
import UserItem from './components/UserItem/UserItem';
import ImputChat from './components/InputChat/InputChat';

const firstResponse = (name) => (
  {
    id: 2,
    emmiter: 'Pepita',
    msj: [
      `¡Mucho gusto, ${name}!`,
      'Mi nombre es Pepita, actualmente soy un bot en desarrollo.',
      'Tal vez me recuerdes de clases de programación con objetos. Pepita.vola(), ¿te suena?',
      'Estoy limitada a algunas funciones, pero vamos a poder interactuar un poco.',
      'Haceme una pregunta de la lista, y con gusto te respondo (no había ninguna)',
    ],
  }
);

const Chat = () => {
  let idCounter = 0;

  const [lastMessage, setLastMessage] = useState('');

  const [chat, setChat] = useState([
    {
      id: 0,
      emmiter: 'Pepita',
      msj: ['¡Hola!', '¿Cómo es tu nombre?'],
    },
  ]);

  useEffect(() => {
    const checkFirstMessage = () => {
      if (chat.length === 2) {
        setTimeout(() => setChat([...chat, firstResponse(lastMessage)]), 500);
      }
    };
    checkFirstMessage();
  }, [lastMessage, chat]);

  const getMessage = (text) => {
    idCounter += 1;
    return {
      id: idCounter,
      emmiter: 'User',
      msj: text,
    };
  };

  const sendMessage = (text) => {
    setLastMessage(text);
    setChat([...chat, getMessage(text)]);
  };

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map((message) => (
              <Fade opposite>
                {message.emmiter === 'Pepita'
                  ? <PepitaItem key={message.id} text={message.msj} />
                  : <UserItem key={message.id} text={message.msj} />}
              </Fade>
            ))}
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
