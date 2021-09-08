import React, { useContext, useState } from 'react';
import { Card } from './style';
import Input from '../../commons/GenericInput/index';
import Button from '../../commons/GenericButton/index';
import { AuthContext } from '../../../Context/AuthContext';

const SignIn = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const store = useContext(AuthContext);

  console.log(emailAddress, password, store, 'looking');
  // sends update to context can refactor when time
  const userUpdate = (e) => {
    e.preventDefault();

    store.setCurrentUser({
      emailAddress: emailAddress,
      password: password,
    });

    console.log(store.currentUser, 'click');
  };

  return (
    <Card>
      <form>
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

        <Button text={'Submit'} onClick={userUpdate} />
        <Button text={'facebook'} />
        <Button text={'google'} />
      </form>
    </Card>
  );
};

export default SignIn;
