import React from 'react';
import { Title, Header, Description, Button, Container } from './style';
import { useHistory } from 'react-router-dom';

const CtaComponent = () => {
  let history = useHistory();

  return (
    <Container>
      <Title>TIME TAB</Title>
      <Header>How Does It Increase Productivity?</Header>
      <Description>
        It helps with Time Management Success. It always leaves evidance of
        Effort, Follow-Through and Achievement. With TIME TAB you keep working
        while we track the clock. The hours that Ordinary people waste,
        Extrodinary people leverage.
      </Description>

      <Button type='button' onClick={() => history.push('/sign-up')}>
        Sign-Up
      </Button>
    </Container>
  );
};

export default CtaComponent;
