import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';

const TimeEntriesList = ({ userId }) => {
  const store = useContext(AuthContext);
  // const [data, setData] = useState({ new: true, timeData: [] });
  const [timeData, setTimeData] = useState([]);

  console.log(userId);

  useEffect(async () => {
    setTimeout(() => {
      axios
        .get(`${store.backendEnv}/api/time/${userId}`)
        .then((res) => {
          console.log(res.data);
          // setData(res.data.timeData)
          setTimeData(res.data.timeData);
        })
        .catch((err) => console.log(err));
    }, 3500);
  });

  return (
    <React.Fragment>
      {console.log('timeData', timeData)}
      {timeData.map((dayEntry) => {
        return (
          <div
            key={dayEntry._id}
            style={{ padding: '0 12px', border: '1px solid black' }}
          >
            <div style={{ background: '#888', padding: '6px' }}>
              {dayEntry.date}
            </div>
            {dayEntry.timeEntries.map((entry) => {
              const length = entry.stopTime - entry.startTime;
              return (
                <div
                  key={entry._id}
                  style={{
                    padding: '8px',
                    background: '#ccc',
                    margin: '2px 0',
                  }}
                >
                  <div>description: {entry.description}</div>
                  <div>
                    from: {new Date(entry.startTime).toLocaleTimeString()}
                  </div>
                  <div>to: {new Date(entry.stopTime).toLocaleTimeString()}</div>
                  <div>
                    <span>length: </span>
                    <span>
                      {('0' + Math.floor((length / 3600000) % 60)).slice(-2)}
                      hrs:
                    </span>
                    <span>
                      {('0' + Math.floor((length / 60000) % 60)).slice(-2)}mins:
                    </span>
                    <span>
                      {('0' + Math.floor((length / 1000) % 60)).slice(-2)}secs
                    </span>
                  </div>
                </div>
              );
            })}
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
