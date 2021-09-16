import React, { useContext, useState } from 'react';
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
import Input from '../../commons/GenericInput/index';
import Button from '../../commons/GenericButton/index';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import { colors } from '../../../styles/Color';
import { useHistory } from 'react-router-dom';

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
      .post('https://tta-backend.herokuapp.com/api/test/login', requestBody)
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
        <Assistance>
          <label>
            <input type='checkbox' />
            Remember Me
          </label>
          <a href='#'>Forgot Password</a>
        </Assistance>
        <Button
          text={'Sign In'}
          type='submit'
          backgroundColor={colors.green}
          lightText
          isBlock
          fontWeight
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
              fontWeight
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
              fontWeight
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
              fontWeight
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
              fontWeight
              fontSize='24px'
              IconGH
            />
          </ButtonContainer>
        </ButtonSection>
        <Question>Why Create An Account</Question>
        <p>
          By creating this account,you agree to our <A>Privacy Policy</A> &
          <A>Cookie Policy</A>
        </p>
      </Form>
    </Card>
  );
};

export default SignIn;
