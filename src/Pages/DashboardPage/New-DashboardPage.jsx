import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import TimeEntriesList from '../../Components/DashboardPageComponents/TimeEntriesList';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { PageContainer2 } from './style';
import Timer from '../../Components/Timer';
import axios from 'axios';
// import { database } from '../../config/dbConnectionURL';

const DashboardPage = () => {
  const store = useContext(AuthContext);

  useEffect(() => {
    axios
      .post(`${store.backendEnv}/api/user`, {
        ...store.user,
      })
      .then(async (res) => {
        const response = await res;
        store.setUser(response.data.userProfile);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(store.user);
  return (
    <React.Fragment>
      <Navbar />
      <PageContainer2>
        <Timer />
        <TimeEntriesList userId={store.user._id} />
      </PageContainer2>
      <Footer />
    </React.Fragment>
  );
};

export default DashboardPage;
