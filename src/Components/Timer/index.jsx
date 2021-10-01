import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  TimeWrapper,
  TimeText,
  ToggleButton,
  TimeDescription,
  Form,
  SubmitButton,
} from './style';
import { BsPlayFill, BsStopFill } from 'react-icons/bs';
import { HiOutlineSave } from 'react-icons/hi';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';

const Timer = () => {
  const store = useContext(AuthContext);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [description, setDescription] = useState('');

  const [startTime, setStartTime] = useState(null);
  //   const [stopTime, setStopTime] = useState(null);

  const toggleRunning = () => {
    setRunning(!running);
    if (!startTime) {
      const dateTime = new Date().getTime();
      setStartTime(dateTime);
    }
  };

  const resetCapture = () => {
    setTime(0);
    setStartTime(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date().toLocaleDateString();
    const stopTime = time + startTime;
    const length = stopTime - startTime;
    axios
      .post(`${store.backendEnv}/api/time`, {
        date,
        userId: store.user._id,
        startTime,
        stopTime,
        length,
        description: !description.trim()
          ? 'No Description'
          : description.trim(),
      })
      .then((res) => {
        console.log(res); // <-- leave for development
        // console.log(new Date().toLocaleDateString());
        // console.log(new Date(res.data.body.startTime).toLocaleTimeString());
        resetCapture();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let timeInterval;
    if (running) {
      timeInterval = setInterval(() => {
        setTime((previousTime) => (previousTime += 1000));
      }, 1000);
    } else if (!running) {
      clearInterval(timeInterval);
    }
    return () => clearInterval(timeInterval);
  }, [running, time]);

  return (
    <Container>
      <ToggleButton
        type='button'
        onClick={toggleRunning}
        running={running}
        disabled={!running && time > 0}
      >
        {running ? <BsStopFill /> : <BsPlayFill />}
      </ToggleButton>

      <TimeWrapper>
        <TimeText>
          {('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:
          {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
        </TimeText>
      </TimeWrapper>
      <Form onSubmit={handleSubmit}>
        <TimeDescription
          type='text'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder='description'
        />
        <SubmitButton type='submit' disabled={time === 0 || running}>
          <HiOutlineSave />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Timer;