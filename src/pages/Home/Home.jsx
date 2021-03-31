import React, {useEffect} from 'react';
import ErrorBoundary from 'pages/shared/ErrorBoundary/ErrorBoundary';
import Navigation from 'pages/Home/components/Navigation/Navigation'
import MovieList from 'pages/Home/components/MovieList/MovieList';
import Search from 'pages/Home/components/Search/Search';
import 'pages/Home/Home.scss';

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
