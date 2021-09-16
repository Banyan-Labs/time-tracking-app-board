import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { useHistory } from 'react-router';
import { Card, Form } from './style';
import Input from '../../commons/GenericInput/index';
import Button from '../../commons/GenericButton/index';
import axios from 'axios';

const SignIn = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const store = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    let requestBody = {
      email: emailAddress,
      password,
    };
    axios
      .post('http://127.0.0.1:8080/api/test/login', requestBody)
      .then((res) => {
        const { error, message, user } = res.data;
        if (error) {
          setErrorMessage(message);
        } else {
          store.setUser(user);
          store.setIsAuth(true);
          history.push('/dashboard');
        }
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };

  return (
    <Card>
      {errorMessage && <p>{errorMessage}</p>}
      <Form onSubmit={handleSubmit}>
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
      </Form>
    </Card>
  );
};

export default SignIn;
