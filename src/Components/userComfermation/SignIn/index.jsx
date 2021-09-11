import React, { useContext, useState } from 'react';
import { Card, Form } from './style';
import Input from '../../commons/GenericInput/index';
import Button from '../../commons/GenericButton/index';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';

const SignIn = () => {
  const [emailAddress, setEmailAddress] = useState(null);
  const [password, setPassword] = useState(null);

  const store = useContext(AuthContext);

  console.log(store, 'looking at store');

  let user;

  const handleSubmit = async (event) => {
    event.preventDefault();
    user = {
      emailAddress,
      password,
    };
    axios
      .post('http://127.0.0.1:8080/api/SignIn', user)
      .then((res) => {
        store.setCurrentUser(res.data);
        // console.log(res, "looking");
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  return (
    <Card>
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
