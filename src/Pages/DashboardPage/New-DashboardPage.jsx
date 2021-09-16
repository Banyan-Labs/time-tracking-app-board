import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import TimeEntriesList from '../../Components/DashboardPageComponents/TimeEntriesList';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { PageContainer2 } from './style';

const DashboardPage = () => {
  const store = useContext(AuthContext);
  return (
    <React.Fragment>
      <Navbar />
      <PageContainer2>
        <TimeEntriesList userId={store.user.userId} />
      </PageContainer2>
      <Footer />
    </React.Fragment>
  );
};

export default DashboardPage;
