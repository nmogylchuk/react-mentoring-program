import React, {useState} from 'react';
import ErrorBoundary from 'pages/shared/ErrorBoundary/ErrorBoundary';
import Navigation from 'pages/Home/components/Navigation/Navigation'
import MovieList from 'pages/Home/components/MovieList/MovieList';
import Search from 'pages/Home/components/Search/Search';
import 'pages/Home/Home.scss';
import MoviesContainer from "containers/MoviesContainer";
import MovieSort from "pages/Home/components/MovieSort/MovieSort";

const Home = (props) => {
    const {handleSearchIcon} = props;

    return (
        <section className="home">
            <Search/>
            <Navigation/>
            <ErrorBoundary>
                {/*<MovieList handleSearchIcon={handleSearchIcon}/>*/}
                <MoviesContainer/>
            </ErrorBoundary>
        </section>
    )
}

export default Home;
