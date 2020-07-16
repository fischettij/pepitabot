import React from 'react';
import Pepita from './components/Pepita/Pepita';
import './Home.css';
import Fade from 'react-reveal/Fade';

const Home = ({ history }) => {
  return (
    <div className='home-pepitabot-container'>
      <div className='home-pepitabot-content'>
        <Pepita history={history} />
        <div className='home-pepitabot-greeting'>
          <Fade opposite>
            <h1>¡Hola humano!</h1>
          </Fade>
          <Fade opposite>
            <label>Soy Pepita, la paloma mensajera.</label>
            <label>¿Queres charlar?</label>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Home;