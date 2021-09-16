import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const TimeEntriesList = ({ userId }) => {
  const [data, setData] = useState([]);

  //   const formatData = (data) => {
  //     const parsedData = data.map((entry) => {
  //       const { date, timeIn, timeOut } = entry;

  //       const toTimeArr = (timeStr) => timeStr.replace(/:/g, ' ').split(' ');
  //       const convertHour = (arr) =>
  //         arr[0] >= 1 && arr[0] >= 11 && arr[2] === 'PM'
  //           ? +arr[0] + 12
  //           : +arr[0] === 12 && arr[2] === 'AM'
  //           ? arr[0] - 12
  //           : +arr[0];

  //       const startTimeArr = toTimeArr(timeIn);
  //       const stopTimeArr = toTimeArr(timeOut);

  //       const startTime = new Date(date);
  //       const stopTime = new Date(date);

  //       startTime.setHours(convertHour(startTimeArr));
  //       startTime.setMinutes(+startTimeArr[1]);

  //       stopTime.setHours(convertHour(stopTimeArr));
  //       stopTime.setMinutes(+stopTimeArr[1]);

  //       return {
  //         _id: uuid(),
  //         startTime,
  //         stopTime,
  //       };
  //     });

  //     return parsedData;
  //   };

  useEffect(async () => {
    await axios
      // .get(`https://tta-backend.herokuapp.com/api/test/time-entires/${userId}`)
      .get(`http://127.0.0.1:8080/api/test/time-entries/${userId}`)
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
