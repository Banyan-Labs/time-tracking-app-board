import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
   <Router>
     <Switch>
       <Route path='/' exact component={() => <h1>Time Tracking App Banyan</h1>} />
       <Route path='/welcome' exact component={() => <h1>Welcome T-tab Team!</h1>} />
     </Switch>
   </Router>
  )
}

export default App

