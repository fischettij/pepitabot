import React from 'react'
import Lottie from 'react-lottie' 
import animationData from './pepita-data.json'
import './Pepita.css'

const Pepita = ({history}) => {
 
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }
  return (
    <div cassName='pepita-container' onClick={() => history.push('/chat')}>
      <Lottie
      options={defaultOptions}
      /> 
    </div>
  );
}
 
export default Pepita;