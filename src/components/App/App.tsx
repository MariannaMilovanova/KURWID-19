import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';

//here will be all routes
declare global {
  const gapi: any;
}

function App() {
  console.warn(process.env.REACT_APP_GOOGLE_CLIENT_ID);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
