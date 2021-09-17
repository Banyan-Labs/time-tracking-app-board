import React from 'react';
import { PageContainer } from './style';
import CtaComponent from '../../Components/CTA';
import background from '../../resources/images/gold.png';

const LandingPage = () => {
  return (
    <PageContainer style={{ backgroundImage: `url(${background})` }}>
      <CtaComponent />
    </PageContainer>
  );
};

export default LandingPage;
