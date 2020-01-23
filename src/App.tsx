import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

// import AdminDashbaord from './admin/AdminDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/admin" exact>
          <AdminDashbaord />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
