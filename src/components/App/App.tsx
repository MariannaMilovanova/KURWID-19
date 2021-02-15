import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import PlaceInformation from '../PlaceInformation/PlaceInformation';
import Footer from '../Footer/Footer';
import BlogPage from '../BlogPage/BlogPage';
import FilterPage from '../FilterPage/FilterPage';
import ReviewItem from '../ReviewItem/ReviewItem';

//here will be all routes
declare global {
  const gapi: any;
  const google: any;
  interface Window {
    google: any;
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/place" component={PlaceInformation} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/review" component={ReviewItem} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/lookup" component={FilterPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
