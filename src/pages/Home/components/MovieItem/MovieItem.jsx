import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ThreeDotMenu from 'pages/Home/components/MovieItem/ThreeDotMenu/ThreeDotMenu';
import ThreeDotMenuActions from 'pages/Home/components/MovieItem/ThreeDotMenuActions/ThreeDotMenuActions';
import 'pages/Home/components/MovieItem/MovieItem.scss';

class MovieItem extends React.Component {
    state = {
        threeDotMenuVisible: false,
    }

    showThreeDotMenuActions = () => {
        this.setState({threeDotMenuVisible: true});
    }

    closeThreeDotMenuActions = () => {
        this.setState({threeDotMenuVisible: false});
    }

    render() {
        const releaseDate = new Date(this.props.release_date).getFullYear();
        const genre = Array.isArray(this.props.genres) ? this.props.genres.join(', ') : '';

        return (
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <div className="movie-item">
                    <ThreeDotMenu onClick={this.showThreeDotMenuActions} />
                    {this.state.threeDotMenuVisible &&
                    <ThreeDotMenuActions onClose={this.closeThreeDotMenuActions} movie={this.props}/>}
                    <img src={this.props.poster_path} alt={`picture of ${this.props.title}`}/>
                    <div className="movie-item__info">
                        <div className="movie-item__details">
                            <div className="movie-item__title">{this.props.title}</div>
                            <div className="movie-item__release-date">{releaseDate}</div>
                        </div>
                        <div className="movie-item__genres">{genre}</div>
                    </div>
                </div>
            </Grid>
        );
    };
}

export default MovieItem;

MovieItem.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        release_date: PropTypes.string.isRequired
    })
};

