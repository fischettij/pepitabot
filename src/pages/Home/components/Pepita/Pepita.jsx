import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import animationData from './pepita-data.json';
import './Pepita.css';

const Pepita = ({ history }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };
  return (
    <div className="pepita-container" onClick={() => history.push('/chat')} role="link" aria-hidden="true">
      <Lottie
        options={defaultOptions}
      />
    </div>
  );
};

Pepita.propTypes = {
  history: PropTypes.PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Pepita;
