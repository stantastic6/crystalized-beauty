import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Home from './components/Home';
import OurStory from './components/OurStory';

// import AdminDashbaord from './admin/AdminDashboard';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={OurStory} />
          {/* <Route path="/admin" exact>
          <AdminDashbaord />
        </Route> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
