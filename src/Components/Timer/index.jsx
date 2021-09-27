// import { description } from 'commander';
import React, { useState, useEffect } from 'react';
import Button from '../commons/ui/GenericButton';
import { Container } from './style';
// import routes from '../../routes';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <Container>
      <div>
        <span>{('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div>
        <Button onClick={() => setRunning(true)}>Start</Button>
        <Button onClick={() => setRunning(false)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>
      </div>
    </Container>
  );
};

export default Stopwatch;
