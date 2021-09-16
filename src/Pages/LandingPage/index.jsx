import React from 'react';
import { PageContainer } from './style';
import CtaComponent from '../../Components/CTA';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PageContainer>
        <CtaComponent />
      </PageContainer>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
