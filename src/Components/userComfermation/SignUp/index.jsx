import React, { useState } from 'react';
import { Card } from './style';
import Input from '../../commons/genericInput';
import Button from '../../commons/GenericButton';
import axios from 'axios';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const [user, setUser] = useState({
  //   firstName,
  //   lastName,
  //   emailAddress,
  //   password,
  //   confirmPassword,
  // });
  let user;

  // sends update to context can refactor when time
  // const userUpdate = () => {
  //   setUser({
  //     firstName,
  //     lastName,
  //     emailAddress,
  //     password,
  //     confirmPassword,
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // await userUpdate();
    // setUser({
    //   firstName,
    //   lastName,
    //   emailAddress,
    //   password,
    //   confirmPassword,
    // });
    user = {
      firstName,
      lastName,
      emailAddress,
      password,
      confirmPassword,
    };
    // console.log('submit handler user' , user);
    // return user;
    axios
      .post('http://127.0.0.1:8080/api/test', user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
  // console.log(firstName, user)
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder={'First Name'}
          value={firstName}
          type='text'
          name='firstName'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          placeholder={'Last Name'}
          value={lastName}
          name='lastName'
          type='text'
          onChange={(e) => setLastName(e.target.value)}
        />
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
        <Input
          placeholder={'Confirm Password'}
          value={confirmPassword}
          name='confirmPassword'
          type='text'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button text={'Submit'} type='submit' />
        <Button text={'facebook'} type='button' />
        <Button text={'google'} type='button' />
      </form>
    </Card>
  );
};

export default SignUp;
