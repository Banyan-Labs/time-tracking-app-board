import React, { useEffect, useState } from 'react';
import { PageContainer, Card, DateColumn, ProjectColumn, Time } from './style';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const DashboardPage = () => {
  const [timeEntries, setTimeEntries] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/api/test/timeData/1')
      // .get('https://tta-backend.herokuapp.com/api/test/timeData/1')
      .then(async (res) => {
        console.log(res.data.timeEntries);
        let data = await res.data.timeEntries;
        setTimeEntries(data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  const workedHourList = timeEntries.map((timeEntry) => (
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

  return (
    <React.Fragment>
      <Navbar />
      <PageContainer>{sortedProjects}</PageContainer>
      <Footer />
    </React.Fragment>
  );
};

export default DashboardPage;
