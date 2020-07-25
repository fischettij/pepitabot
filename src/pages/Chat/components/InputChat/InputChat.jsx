/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import './InputChat.css';

const InputChat = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form className="chatbot-chat-input-container">
      <input
        aria-label="Chat text input"
        placeholder="Escribi tu nombre"
        type="text"
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value); }}
      />
      <button type="submit" />
    </form>
  );
};

export default InputChat;
