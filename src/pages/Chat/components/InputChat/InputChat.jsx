/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputChat.css';

const InputChat = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendMessage(inputValue);
      }}
      className="chatbot-chat-input-container"
    >
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

InputChat.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default InputChat;
