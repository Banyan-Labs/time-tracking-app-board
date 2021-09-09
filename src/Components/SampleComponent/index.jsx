import React from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Button from '../commons/GenericButton';
import ServerTests from './ServerTestsComponent';
import ColorSwatches from './ColorSwatchesComponent';
import { PageContainer, Container, LinksWrapper, Label } from './style';
import routes from '../../routes';

const SampleComponent = () => {
  const history = useHistory();

  return (
    <PageContainer>
      <Container>
        <LinksWrapper>
          <Label>Current router pages:</Label>
          {routes.map((route) => (
            <Button
              key={uuid()}
              onClick={() => history.push(`${route.path}`)}
              text={route.path}
            />
          ))}
        </LinksWrapper>
      </Container>
      <ServerTests />
      <ColorSwatches />
      <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></div>
    </PageContainer>
  );
};

export default SampleComponent;
