import React, {useCallback, useState} from 'react';
import {Switch} from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from 'pages/shared/Header/Header';
import Footer from 'pages/shared/Footer/Footer';
import Home from 'pages/Home/Home';
import MovieDetails from "pages/MovieDetails/MovieDetails";

const App = () => {

    const [searchIconVisible, setShowSearchIconVisible] = useState(false);

    const handleSearchIcon = useCallback(() => {
        setShowSearchIconVisible(!searchIconVisible);
    }, [searchIconVisible]);

    return (<BrowserRouter>
            <Header searchIconVisible={searchIconVisible} handleSearchIcon={handleSearchIcon}/>
            <Switch>
                <Route exact path="/:id" component={MovieDetails}/>
                <Route exact path="/" render={() => <Home handleSearchIcon={handleSearchIcon}/>}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
