import React, { useEffect, useState } from 'react';
import { PageContainer, Card, DateColumn, ProjectColumn, Time } from './style';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
const DashboardPage = () => {
  const [timeEntrys, setTimeEntrys] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/api/timeData')
      .then((res) => {
        setTimeEntrys(res.data.userTimeEntry);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  // console.log(timeEntrys)

  const workedHourList = timeEntrys.map((timeEntry) => (
    <div key={uuid()}>
      <Card>
        <DateColumn>{timeEntry.date}</DateColumn>
        <ProjectColumn>
          {timeEntry.project}
          <Time>{timeEntry.timeIn}</Time>
          <Time>{timeEntry.timeOut}</Time>
        </ProjectColumn>
      </Card>
    </div>
  ));

  var sortedProjects = workedHourList
    .sort((a, b) => {
      console.log(
        new Date(a.scheduled_for).getTime() -
          new Date(b.scheduled_for).getTime()
      );
      return (
        new Date(a.scheduled_for).getTime() -
        new Date(b.scheduled_for).getTime()
      );
    })
    .reverse();

  return <PageContainer>{sortedProjects}</PageContainer>;
};

export default DashboardPage;
