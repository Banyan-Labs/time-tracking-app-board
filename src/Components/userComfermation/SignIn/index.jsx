import React, { useState } from 'react';
import { Card } from './style';
import Input from '../../commons/GenericInput/index';
import Button from '../../commons/GenericButton/index';
import axios from 'axios';

const SignIn = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  let user;

  const handleSubmit = async (event) => {
    event.preventDefault();
    user = {
      emailAddress,
      password,
    };
    axios
      .post('http://127.0.0.1:8080/api/test', user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder={'Email Address'}
          value={emailAddress}
          name='emailAddress'
          type='text'
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <Input
          placeholder={'Password'}
          value={password}
          name='password'
          type='text'
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text={'Submit'} type='submit' />
        <Button text={'facebook'} type='button' />
        <Button text={'google'} type='button' />
      </form>
    </Card>
  );
};

export default SignIn;
