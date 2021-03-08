import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import MovieItem from 'pages/Home/components/MovieItem/MovieItem';
import 'pages/Home/components/MovieList/MovieList.scss';
import movies from 'data/movies.json';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    getData() {
        setTimeout(() => {
            this.setState({
                data: movies
            })
        }, 1000)
    }

    componentDidMount() {
        this.getData();
    }

    isEmptyArray(object) {
        return typeof object !== 'undefined' && object.length === 0;
    }

    render() {
        const moviesData = this.state.data;
        const moviesCount = this.isEmptyArray(moviesData) ? 0 : moviesData.totalAmount;
        return (
            <div className='movie-list'>
                <div className='movie-list__count'><span className='movie-list__number'>{moviesCount}</span> movies
                    found
                </div>
                <Grid container spacing={1} alignContent={'space-around'}>
                    {this.isEmptyArray(moviesData)
                        ? null
                        : moviesData.data.map(movie => (
                            <MovieItem key={movie.id} movie={movie}
                                       id={movie.id}
                                       poster_path={movie.poster_path}
                                       title={movie.title}
                                       genres={movie.genres}
                                       release_date={movie.release_date}
                                       overview={movie.overview}
                                       runtime={movie.runtime}/>
                        ))}
                </Grid>
            </div>
        );
    }
}

export default MovieList;
