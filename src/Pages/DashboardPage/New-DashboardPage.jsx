import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import TimeEntriesList from '../../Components/DashboardPageComponents/TimeEntriesList';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { PageContainer2 } from './style';
import Timer from '../../Components/Timer';
import axios from 'axios';
import { database } from '../../config/dbConnectionURL';

const DashboardPage = () => {
  const store = useContext(AuthContext);

  useEffect(() => {
    axios
      .post(`${database.local}/api/user`, {
        ...store.user,
      })
      .then((res) => {
        store.setUser(res.data.userProfile);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <PageContainer2>
        <Timer />
        <TimeEntriesList userId={store.user.userId} />
      </PageContainer2>
      <Footer />
    </React.Fragment>
  );
};

export default DashboardPage;
