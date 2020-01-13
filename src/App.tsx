import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminDashbaord from './admin/AdminDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact>
          <AdminDashbaord />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
