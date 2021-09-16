import React, { useState } from 'react';
import {
  Card,
  Form,
  ButtonContainer,
  ButtonSection,
  BorderContainer,
  BorderLine,
  Assistance,
  Question,
  A,
} from './style';
import Input from '../../commons/ui/GenericInput';
import Button from '../../commons/ui/GenericButton';
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
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          isBlock
          placeholder={'Confirm Password'}
          value={confirmPassword}
          name='confirmPassword'
          type='password'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Assistance>
          <label>
            <input type='checkbox' />
            Remember Me
          </label>
          <a href='_'>Forgot Password</a>
        </Assistance>

        <Button
          text={'Sign In'}
          type='submit'
          backgroundColor={colors.green}
          lightText
          isBlock
          // fontWeight={true}
          fontSize='24px'
          padding='5px 8px'
        />

        <BorderContainer>
          <BorderLine />
          <p>or</p>
          <BorderLine />
        </BorderContainer>

        <ButtonSection>
          <ButtonContainer>
            <Button
              margin
              isBlock
              text={'google'}
              backgroundColor='#DB4437'
              lightText
              type='button'
              // fontWeight={true}
              fontSize='24px'
              IconG
            />
            <Button
              margin
              isBlock
              text={'LinkedIn'}
              backgroundColor='#4267B2'
              lightText
              type='button'
              // fontWeight={true}
              fontSize='24px'
              IconL
            />
          </ButtonContainer>

          <ButtonContainer>
            <Button
              margin
              isBlock
              text={'facebook'}
              backgroundColor='#4267B2'
              lightText
              type='button'
              // fontWeight={true}
              fontSize='24px'
              IconF
            />
            <Button
              margin
              isBlock
              text={'GitHub'}
              backgroundColor={colors.black}
              lightText
              type='button'
              // fontWeight={true}
              fontSize='24px'
              IconGH
            />
          </ButtonContainer>
        </ButtonSection>
        <Question>Why Create An Account</Question>
        <p>
          By creating this account,you agree to our <A>Privacy Policy</A> &{' '}
          <A>Cookie Policy</A>
        </p>
      </Form>
    </Card>
  );
};

export default SignUp;
