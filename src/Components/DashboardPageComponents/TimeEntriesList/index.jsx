import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const TimeEntriesList = ({ userId }) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await axios
      .get(`https://tta-backend.herokuapp.com/api/test/time-entries/${userId}`)
      // .get(`http://127.0.0.1:8080/api/test/time-entries/${userId}`)
      .then((res) => {
        console.log(res);
        setData(res.data.timeEntries);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      {data.map((obj) => {
        let { startTime, stopTime } = obj;
        startTime = new Date(startTime);
        stopTime = new Date(stopTime);
        return (
          <div
            key={uuid()}
            style={{
              margin: '.5rem',
              border: '1px solid black',
            }}
          >
            <h3 style={{ margin: 0, padding: '0 6px 6px', background: '#777' }}>
              {startTime.toDateString()}
            </h3>
            <div style={{ padding: '.3rem' }}>
              <span>start = {startTime.toLocaleTimeString()}</span>
              <br />
              <span>end = {stopTime.toLocaleTimeString()}</span>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default TimeEntriesList;

TimeEntriesList.propTypes = {
  userId: PropTypes.string.isRequired,
};
