import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Container, CardsWrapper, Card, Text } from './style';
import { AuthContext } from '../../Context/AuthContext';
import routes from '../../routes';

const SampleComponent = () => {
  const history = useHistory();
  const store = useContext(AuthContext);

  var w = window.innerWidth;

  return (
    <Container>
      <CardsWrapper>
        {console.log(w)}
        {routes.map((route) => (
          <Card key={uuid()} onClick={() => history.push(`${route.path}`)}>
            <Text fontSize={28}>{route.path}</Text>
          </Card>
        ))}
        {console.log(store)}
      </CardsWrapper>
    </Container>
  );
};

export default SampleComponent;
