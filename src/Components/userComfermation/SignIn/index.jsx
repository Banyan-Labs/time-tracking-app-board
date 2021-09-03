import React, { useContext, useState } from 'react';
import { Card } from './style';
import Input from '../../commons/GenericInput/index';
import Button from '../../commons/GenericButton/index';
import { AuthContext } from '../../../Context/AuthContext';

const SignIn = () => {
  const [user, setUser] = useState({
    emailAddress: '',
    password: '',
  });

  //   having trouble thinking about how the handleChange works will have it tho
  //   const handleChange = () => {

  //   }

  const store = useContext(AuthContext);

  return (
    <Card>
      <Input
        placeholder={'Email Address'}
        value={user.emailAddress}
        // onChange={handleChange}
      />
      <Input
        placeholder={'Password'}
        value={user.password}
        // onChange={handleChange}
      />

      <Button text={'Submit'} />
      <Button text={'facebook'} />
      <Button text={'google'} />
    </Card>
  );
};

export default SignIn;
