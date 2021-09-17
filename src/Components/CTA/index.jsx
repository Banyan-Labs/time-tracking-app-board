import React from 'react';
import { Title, Header, Description, Button, Container } from './style';
import { useHistory } from 'react-router-dom';

const CtaComponent = () => {
  function handleClick() {
    let history = useHistory();
    history.push('/sign-up');
  }
  return (
    <Container>
      <Title>TIME TAB</Title>
      <Header>How It Increases Productivity?</Header>
      <Description>
        It helps with Time Management. It always leaves evidance of effort,
        follow-through, and achievement. You can keep working as Time Tab
        watches the clock.
      </Description>

      <Button type='button' onClick={handleClick}>
        Sign-Up
      </Button>
    </Container>
  );
};

export default CtaComponent;
