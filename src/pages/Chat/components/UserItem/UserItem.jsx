import React from 'react';
import PropTypes from 'prop-types';
import './UserItem.css';
import userAvatar from '../../../../assets/images/man_user.png';

const UserItem = ({ text }) => (
  <div className="user-item-container">
    <div className="user-item-message">
      <p>
        {text}
      </p>
    </div>
    <img src={userAvatar} alt="user-avatar" />
  </div>
);

UserItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default UserItem;
