import React from 'react';
import ModalWindow from 'pages/Home/components/ModalWindow/ModalWindow';
import 'pages/Home/components/ModalWindow/MovieEdit/MovieEdit.scss';

class MovieEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.movie.id,
            title: props.movie.title,
            date: props.movie.release_date,
            genre: Array.isArray(props.movie.genres) ? props.movie.genres.join(', ') : '',
            overview: props.movie.overview,
            runtime: props.movie.runtime
        };

        this.handleMovieEditTitleChange = this.handleMovieEditTitleChange.bind(this);
        this.handleMovieEditDateChange = this.handleMovieEditDateChange.bind(this);
        this.handleMovieEditGenreChange = this.handleMovieEditGenreChange.bind(this);
        this.handleMovieEditOverviewChange = this.handleMovieEditOverviewChange.bind(this);
        this.handleMovieEditRuntimeChange = this.handleMovieEditRuntimeChange.bind(this);
        this.handleMovieEditSubmit = this.handleMovieEditSubmit.bind(this);
    }

    handleMovieEditTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleMovieEditDateChange(event) {
        this.setState({
            date: event.target.value
        });
    }

    handleMovieEditGenreChange(event) {
        this.setState({
            genre: event.target.value
        });
    }

    handleMovieEditOverviewChange(event) {
        this.setState({
            overview: event.target.value
        });
    }
    handleMovieEditRuntimeChange(event) {
        this.setState({
            runtime: event.target.value
        });
    }

    handleMovieEditSubmit(event) {
        alert(`Saved movie data: 
        id: ${this.state.id}  
        title: ${this.state.title}
        date: ${this.state.date},
        genre: ${this.state.genre},
        overview: ${this.state.overview},
        runtime: ${this.state.runtime}`);
        event.preventDefault();
    }

    render() {
        return (
            <ModalWindow onClick={this.props.onClose}>
                <div className="movie-edit">
                    <div className="movie-edit__title">Edit movie</div>
                    <form className="movie-edit__form" ref="form" onSubmit={this.handleMovieEditSubmit}>
                        <label className="movie-edit__label">Movie id</label>
                        <p>{this.state.id}</p>
                        <label className="movie-edit__label">Title</label>
                        <input
                            className="movie-edit__input"
                            type='text'
                            value={this.state.title}
                            ref="title"
                            onChange={this.handleMovieEditTitleChange}
                            required
                        />
                        <label className="movie-edit__label">Release date</label>
                        <input
                            className="movie-edit__input"
                            type='date'
                            value={this.state.date}
                            onChange={this.handleMovieEditDateChange}
                            required
                        />
                        <label className="movie-edit__label">Genre</label>
                        <input
                            className="movie-edit__input"
                            type='text'
                            value={this.state.genre}
                            onChange={this.handleMovieEditGenreChange}
                            required
                        />
                        <label className="movie-edit__label">Overview</label>
                        <input
                            className="movie-edit__input"
                            type='text'
                            value={this.state.overview}
                            onChange={this.handleMovieEditOverviewChange}
                            required
                        />
                        <label className="movie-edit__label">Runtime</label>
                        <input
                            className="movie-edit__input"
                            type='number'
                            value={this.state.runtime}
                            onChange={this.handleMovieEditRuntimeChange}
                            required
                        />
                        <div className="movie-edit__button-wrapper">
                            <button className="movie-edit__button movie-edit__button--reset" type="reset">Reset
                            </button>
                            <button className="movie-edit__button movie-edit__button--submit" type="submit">Save
                            </button>
                        </div>
                    </form>
                </div>
            </ModalWindow>
        );
    };
}

export default MovieEdit;
