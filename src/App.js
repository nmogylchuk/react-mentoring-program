import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from 'pages/shared/Header/Header';
import Footer from 'pages/shared/Footer/Footer';
import NotFound from 'pages/NotFound/NotFound';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

const App = () => {
  const [searchIconVisible, setShowSearchIconVisible] = useState(false);

  const handleSearchIcon = visibility => {
    setShowSearchIconVisible(visibility);
  };

  return (
    <BrowserRouter>
      <Header searchIconVisible={searchIconVisible} handleSearchIcon={handleSearchIcon} />
      <Switch>
        <Route exact path='/' render={() => <Home handleSearchIcon={handleSearchIcon} />} />
        <Route exact path='/film/:id' component={MovieDetails} />
        <Route exact path='/search' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
