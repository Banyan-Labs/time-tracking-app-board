import React, { useContext, useState } from 'react';
import { Card } from './style';
import Input from '../../commons/GenericInput/index';
import Button from '../../commons/GenericButton/index';
import { AuthContext } from '../../../Context/AuthContext';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const store = useContext(AuthContext);

  // sends update to context can refactor when time
  const userUpdate = (e) => {
    e.preventDefault();

    store.setCurrentUser({
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      password: password,
      confirmPassword: confirmPassword,
    });

    console.log(store.currentUser, 'click');
  };

  return (
    <Card>
      <form>
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
        <Button text={'Submit'} onClick={userUpdate} />
        <Button text={'facebook'} />
        <Button text={'google'} />
      </form>
    </Card>
  );
};

export default SignUp;
