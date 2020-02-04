import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Home from './components/Home';
import OurStory from './components/OurStory';
import background from './assets/images/rainbow_bg.jpg';
import styled from 'styled-components';

const AppContainer = styled.div`
  background: url(${background}) no-repeat center center;
  background-size: cover;
`;

const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppContainer>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={OurStory} />
          </Switch>
        </Router>
      </AppContainer>
    </>
  );
};

export default App;
