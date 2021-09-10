import React from 'react';
import { Title, Description, Button, Container } from './style';
import { useHistory } from 'react-router-dom';

function handleClick() {
  let history = useHistory();
  history.push('/sign-up');
}

const CtaComponent = () => {
  return (
    <Container>
      <Title>TIME TAB</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
        quis exercitationem culpa nesciunt nihil aut nostrum explicabo
        reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
        Voluptatum ducimus voluptates voluptas?
      </Description>

      <Button type='button' onClick={handleClick}>
        Sign-Up
      </Button>
    </Container>
  );
};

export default CtaComponent;
