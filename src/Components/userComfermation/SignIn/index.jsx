import React, { useContext, useState } from 'react';
import {
  Card,
  Form,
  ButtonContainer,
  ButtonSection,
  BorderContainer,
  BorderLine,
} from './style';
import Input from '../../commons/GenericInput/index';
import Button from '../../commons/GenericButton/index';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import { colors } from '../../../styles/Color';

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const store = useContext(AuthContext);

  console.log(store, 'looking at store');

  let user;

  const handleSubmit = async (event) => {
    event.preventDefault();
    user = {
      email,
      password,
    };
    axios
      .post('https://tta-backend.herokuapp.com/api/test/login', user)
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
          isBlock
          placeholder={'Email Address'}
          value={email}
          name='emailAddress'
          type='text'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          isBlock
          placeholder={'Password'}
          value={password}
          name='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
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
            <Button
              margin
              isBlock
              text={'Google'}
              type='button'
              backgroundColor='#DB4437'
            />
            <Button
              margin
              isBlock
              text={'LinkedIn'}
              type='button'
              backgroundColor='#4267B2'
            />
          </ButtonContainer>

          <ButtonContainer>
            <Button
              margin
              isBlock
              text={'Facebook'}
              type='button'
              backgroundColor='#4267B2'
            />
            <Button
              margin
              isBlock
              text={'GitHub'}
              type='button'
              backgroundColor={colors.black}
            />
          </ButtonContainer>
        </ButtonSection>
      </Form>
    </Card>
  );
};

export default SignIn;
