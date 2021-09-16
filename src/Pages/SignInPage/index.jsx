import React from 'react';
import { PageContainer } from './style';
import SignIn from '../../Components/userComfermation/SignIn';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const SignInPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PageContainer>
        <SignIn />
      </PageContainer>
      <Footer />
    </React.Fragment>
  );
};

export default SignInPage;
