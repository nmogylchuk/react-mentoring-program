import React from 'react';
import Navigation from 'pages/Home/components/Navigation/Navigation'
import MovieList from 'pages/Home/components/MovieList/MovieList';
import ErrorBoundary from "pages/shared/ErrorBoundary/ErrorBoundary";
import 'pages/Home/Home.scss';
import Search from "pages/Home/components/Search/Search";

const Home = (props) => {
    const {handleSearchIcon} = props;
    return (
        <section className="home">
            <Search/>
            <Navigation/>
            <ErrorBoundary>
                <MovieList handleSearchIcon={handleSearchIcon}/>
            </ErrorBoundary>
        </section>
    )
}

export default Home;
