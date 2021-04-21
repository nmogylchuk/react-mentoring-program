import React from 'react';
import ErrorBoundary from 'pages/shared/ErrorBoundary/ErrorBoundary';
import Navigation from 'pages/Home/components/Navigation/Navigation'
import Search from 'pages/Home/components/Search/Search';
import MoviesContainer from 'containers/MoviesContainer';
import 'pages/Home/Home.scss';

const Home = (props) => {
    const {handleSearchIcon} = props;

    return (
        <section className="home">
            <Search/>
            <Navigation/>
            <ErrorBoundary>
                <MoviesContainer handleSearchIcon={handleSearchIcon}/>
            </ErrorBoundary>
        </section>
    )
}

export default Home;
