import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import PlaceInformation from '../PlaceInformation/PlaceInformation';
import Footer from '../Footer/Footer';

//here will be all routes
declare global {
  const gapi: any;
  const google: any;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/place" component={PlaceInformation} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
