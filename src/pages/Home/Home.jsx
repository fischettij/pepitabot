import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Pepita from './components/Pepita/Pepita';
import './Home.css';

const Home = ({ history }) => (
  <div className="home-pepitabot-container">
    <div className="home-pepitabot-content">
      <Pepita history={history} />
      <div className="home-pepitabot-greeting">
        <Fade opposite>
          <h1>¡Hola humano!</h1>
        </Fade>
        <Fade opposite>
          <p>Soy Pepita, la paloma mensajera.</p>
          <p>¿Queres charlar?</p>
        </Fade>
      </div>
    </div>
  </div>
);

Home.propTypes = {
  history: PropTypes.PropTypes.shape({}).isRequired,
};

export default Home;
