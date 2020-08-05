import React from 'react';
import PropTypes from 'prop-types';
import './PepitaItem.css';
import pepitaAvatar from '../../../../assets/images/pepita_avatar.png';

const PepitaItem = ({ text }) => (
  <div className="pepita-item-container">
    <img src={pepitaAvatar} alt="pepita-avatar" />
    <div className="pepita-item-message">
      {text.map((msj) => (
        <p>
          {msj}
        </p>
      ))}
    </div>
  </div>
);

PepitaItem.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PepitaItem;
