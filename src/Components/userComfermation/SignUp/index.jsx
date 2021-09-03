import React, { useContext, useState } from 'react';
import { Card } from './style';
import Input from '../../commons/GenericInput/index';
import Button from '../../commons/GenericButton/index';
import { AuthContext } from '../../../Context/AuthContext';

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  });

  //   having trouble thinking about how the handleChange works will have it tho
  //   const handleChange = () => {

  //   }

  const store = useContext(AuthContext);

  return (
    <Card>
      <Input
        placeholder={'First Name'}
        value={user.firstName}
        // onChange={handleChange}
      />
      <Input
        placeholder={'Last Name'}
        value={user.lastName}
        // onChange={handleChange}
      />
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
      <Input
        placeholder={'Confirm Password'}
        value={user.confirmPassword}
        // onChange={handleChange}
      />
      <Button text={'Submit'} />
      <Button text={'facebook'} />
      <Button text={'google'} />
    </Card>
  );
};

export default SignUp;
