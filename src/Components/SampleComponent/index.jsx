import React from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Container, CardsWrapper, Card, Text } from './style';
import routes from '../../routes';

const SampleComponent = () => {
  const history = useHistory();

  return (
    <Container>
      <CardsWrapper>
        {routes.map((route) => (
          <Card key={uuid()} onClick={() => history.push(`${route.path}`)}>
            <Text fontSize={28}>{route.path}</Text>
          </Card>
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default SampleComponent;
