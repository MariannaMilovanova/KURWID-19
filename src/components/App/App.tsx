import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import PlaceInformation from '../PlaceInformation/PlaceInformation';
import Footer from '../Footer/Footer';
import BlogPage from '../BlogPage/BlogPage';
import SearchResult from '../SearchResult/SearchResult';

//here will be all routes
declare global {
  const gapi: any;
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
          <Route path="/about-us" component={AboutUs} />
          <Route path="/search-result" component={SearchResult} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
