import React, { useState, useEffect } from 'react';
import Button from '../commons/GenericButton';
import {
  ServerTestContainer,
  ServerTestWrapper,
  Label,
  ServerStatusBadge,
} from './style';
import axios from 'axios';

const ServerTestsComponent = () => {
  const [localStatusCode, setLocalStatusCode] = useState(null);
  const [liveStatusCode, setLiveStatusCode] = useState(null);

  const localHostURL = 'http://127.0.0.1:8080';
  const liveHostURL = 'https://tta-backend.herokuapp.com';
  const testServerConnection = (URL) => {
    if (URL === localHostURL) {
      setLocalStatusCode(null);
    }
    if (URL === liveHostURL) {
      setLiveStatusCode(null);
    }
    axios
      .get(URL)
      .then((res) => {
        if (URL === localHostURL) {
          setLocalStatusCode(null);
          setLocalStatusCode(res.status);
        }
        if (URL === liveHostURL) {
          setLiveStatusCode(null);
          setLiveStatusCode(res.status);
        }
      })
      .catch((err) => {
        if (URL === localHostURL) {
          setLocalStatusCode(0);
        }
        if (URL === liveHostURL) {
          setLiveStatusCode(0);
        }
        console.log(err);
      });
  };

  useEffect(() => {
    testServerConnection(localHostURL);
    testServerConnection(liveHostURL);
  }, []);
  return (
    <ServerTestContainer>
      <ServerTestWrapper>
        <Label>
          LocalHost: {localHostURL}
          <ServerStatusBadge status={localStatusCode}>
            {localStatusCode === null
              ? 'checking'
              : localStatusCode === 200
              ? 'connected'
              : 'error'}
          </ServerStatusBadge>
        </Label>
        <Button
          text={'test connection'}
          onClick={() => testServerConnection(localHostURL)}
          backgroundColor={''}
          isBlock={true}
        />
      </ServerTestWrapper>
      <ServerTestWrapper>
        <Label>
          LiveHost: {liveHostURL}
          <ServerStatusBadge status={liveStatusCode}>
            {liveStatusCode === null
              ? 'checking'
              : liveStatusCode === 200
              ? 'connected'
              : 'error'}
          </ServerStatusBadge>
        </Label>
        <Button
          text={`test connection`}
          onClick={() => testServerConnection(liveHostURL)}
          backgroundColor={''}
          isBlock={true}
        />
      </ServerTestWrapper>
    </ServerTestContainer>
  );
};

export default ServerTestsComponent;
