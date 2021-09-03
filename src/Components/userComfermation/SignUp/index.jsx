import React, { useContext, useState } from 'react';
import { Card } from './style';
import Input from '../../commons/GenericInput/index';
import { AuthContext } from '../../../Context/AuthContext';

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  });

  const store = useContext(AuthContext);

  return (
    <Card>
      <Input
        placeholder={'First Name'}
        value={state.firstName}
        onChange={handleChange}
      />
      <Input
        placeholder={'Last Name'}
        value={state.lastName}
        onChange={handleChange}
      />
      <Input
        placeholder={'Email Address'}
        value={state.emailAddress}
        onChange={handleChange}
      />
      <Input
        placeholder={'Password'}
        value={state.password}
        onChange={handleChange}
      />
      <Input
        placeholder={'Confirm Password'}
        value={state.confirmPassword}
        onChange={handleChange}
      />
    </Card>
  );
};

export default SignUp;
