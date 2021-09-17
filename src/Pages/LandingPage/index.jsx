import React from 'react';
import { PageContainer } from './style';
import CtaComponent from '../../Components/CTA';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import background from '../../resources/images/gold.png';

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PageContainer style={{ backgroundImage: `url(${background})` }}>
        <CtaComponent />
      </PageContainer>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
