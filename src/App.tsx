import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Home from './components/Home';
import OurStory from './components/OurStory';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={OurStory} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
