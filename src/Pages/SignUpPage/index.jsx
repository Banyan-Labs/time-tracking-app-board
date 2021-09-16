import React from 'react';
import { PageContainer } from './style';
import SignUp from '../../Components/userComfermation/SignUp';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const SignUpPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PageContainer>
        <SignUp />
      </PageContainer>
      <Footer />
    </React.Fragment>
  );
};

export default SignUpPage;
