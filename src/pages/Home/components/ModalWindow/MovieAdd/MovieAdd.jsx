import React from 'react';
import ModalWindow from 'pages/Home/components/ModalWindow/ModalWindow';
import 'pages/Home/components/ModalWindow/MovieAdd/MovieAdd.scss';

class MovieAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            date: '',
            genre: '',
            overview: '',
            runtime: ''
        };

        this.handleMovieAddIdChange = this.handleMovieAddIdChange.bind(this);
        this.handleMovieAddTitleChange = this.handleMovieAddTitleChange.bind(this);
        this.handleMovieAddDateChange = this.handleMovieAddDateChange.bind(this);
        this.handleMovieAddGenreChange = this.handleMovieAddGenreChange.bind(this);
        this.handleMovieAddOverviewChange = this.handleMovieAddOverviewChange.bind(this);
        this.handleMovieAddRuntimeChange = this.handleMovieAddRuntimeChange.bind(this);
        this.handleMovieAddSubmit = this.handleMovieAddSubmit.bind(this);
    }

    handleMovieAddIdChange(event) {
        this.setState({
            id: event.target.value
        });
    }

    handleMovieAddTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleMovieAddDateChange(event) {
        this.setState({
            date: event.target.value
        });
    }

    handleMovieAddGenreChange(event) {
        this.setState({
            genre: event.target.value
        });
    }

    handleMovieAddOverviewChange(event) {
        this.setState({
            overview: event.target.value
        });
    }
    handleMovieAddRuntimeChange(event) {
        this.setState({
            runtime: event.target.value
        });
    }

    handleMovieAddSubmit(event) {
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
                <div className="movie-add">
                    <div className="movie-add__title">Add movie</div>
                    <form className="movie-add__form" onSubmit={this.handleMovieAddSubmit}>
                        <label className="movie-add__label">ID</label>
                        <input
                            className="movie-add__input"
                            type='text'
                            placeholder='Id here'
                            required
                            onChange={this.handleMovieAddIdChange}
                        />
                        <label className="movie-add__label">Title</label>
                        <input
                            className="movie-add__input"
                            type='text'
                            placeholder='Title here'
                            required
                            onChange={this.handleMovieAddTitleChange}
                        />
                        <label className="movie-add__label">Release date</label>
                        <input
                            className="movie-add__input"
                            type='date'
                            placeholder='Release here'
                            required
                            onChange={this.handleMovieAddDateChange}
                        />
                        <label className="movie-add__label">Genre</label>
                        <input
                            className="movie-add__input"
                            type='text'
                            placeholder='Genres here'
                            required
                            onChange={this.handleMovieAddGenreChange}
                        />
                        <label className="movie-add__label">Overview</label>
                        <input
                            className="movie-add__input"
                            type='text'
                            placeholder='Overview here'
                            required
                            onChange={this.handleMovieAddOverviewChange}
                        />
                        <label className="movie-add__label">Runtime</label>
                        <input
                            className="movie-add__input"
                            type='number'
                            placeholder='Runtime here'
                            required
                            onChange={this.handleMovieAddRuntimeChange}
                        />
                        <div className="movie-add__button-wrapper">
                            <button className="movie-add__button movie-add__button--reset" type="reset">Reset
                            </button>
                            <button className="movie-add__button movie-add__button--submit" type="submit">Submit
                            </button>
                        </div>
                    </form>
                </div>
            </ModalWindow>
        );
    };
}

export default MovieAdd;
