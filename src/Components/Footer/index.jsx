import React from 'react';
import { Container, AppTitle, CompanyWrapper } from './style';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const history = useHistory();

  return (
    <Container>
      <AppTitle onClick={() => history.push('/')}>TIME TAB</AppTitle>
      <CompanyWrapper onClick={() => history.push('/')}>
        <span>Banyan Labs</span>
        <span>&copy; 2021</span>
      </CompanyWrapper>
    </Container>
  );
};

export default Footer;
