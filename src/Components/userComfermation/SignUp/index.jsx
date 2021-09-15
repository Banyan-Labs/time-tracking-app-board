import React, { useState } from 'react';
import {
  Card,
  Form,
  ButtonContainer,
  ButtonSection,
  BorderContainer,
  BorderLine,
} from './style';
import Input from '../../commons/GenericInput';
import Button from '../../commons/GenericButton';
import axios from 'axios';
import { colors } from '../../../styles/Color';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let user;

  const handleSubmit = async (event) => {
    event.preventDefault();
    user = {
      firstName,
      lastName,
      emailAddress,
      password,
      confirmPassword,
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
      <Form onSubmit={handleSubmit}>
        <Input
          isBlock
          placeholder={'First Name'}
          value={firstName}
          type='text'
          name='firstName'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          isBlock
          placeholder={'Last Name'}
          value={lastName}
          name='lastName'
          type='text'
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          isBlock
          placeholder={'Email Address'}
          value={emailAddress}
          name='emailAddress'
          type='text'
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <Input
          isBlock
          placeholder={'Password'}
          value={password}
          name='password'
          type='text'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          isBlock
          placeholder={'Confirm Password'}
          value={confirmPassword}
          name='confirmPassword'
          type='text'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          text={'Sign In'}
          type='submit'
          backgroundColor={colors.green}
          isBlock
        />

        <BorderContainer>
          <BorderLine />
          <p>or</p>
          <BorderLine />
        </BorderContainer>

        <ButtonSection>
          <ButtonContainer>
            <Button margin isBlock text={'facebook'} type='button' />
            <Button margin isBlock text={'google'} type='button' />
          </ButtonContainer>

          <ButtonContainer>
            <Button margin isBlock text={'LinkedIn'} type='button' />
            <Button margin isBlock text={'GitHub'} type='button' />
          </ButtonContainer>
        </ButtonSection>
      </Form>
    </Card>
  );
};

export default SignUp;
