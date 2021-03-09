import React from 'react';
import ModalWindow from 'pages/Home/components/ModalWindow/ModalWindow';
import InputField from "pages/shared/InputField/InputField";
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

        this.handleMovieChange = this.handleMovieChange.bind(this);
        this.handleMovieAddSubmit = this.handleMovieAddSubmit.bind(this);
    }

    handleMovieChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleMovieAddSubmit(event) {
        alert("Saved movie data");
        event.preventDefault();
    }

    render() {
        return (
            <ModalWindow onClick={this.props.onClose}>
                <div className="movie-add">
                    <div className="movie-add__title">Add movie</div>
                    <form className="movie-add__form" onSubmit={this.handleMovieAddSubmit}>
                        <InputField label="Id" value={this.state.id} type="text" name="id" placeholder="Id here"
                                    handleMovieChange={this.handleMovieChange} required/>
                        <InputField label="Title" value={this.state.title} type="text" name="title"
                                    placeholder="Title here"
                                    handleMovieChange={this.handleMovieChange} required/>
                        <InputField label="Release date" value={this.state.date} type="date" name="date"
                                    placeholder="Release date here"
                                    handleMovieChange={this.handleMovieChange} required/>
                        <InputField label="Genre" value={this.state.genre} type="text" name="genre"
                                    placeholder="Genres here"
                                    handleMovieChange={this.handleMovieChange} required/>
                        <InputField label="Overview" value={this.state.overview} type="text" name="overview"
                                    placeholder="Overview here"
                                    handleMovieChange={this.handleMovieChange} required/>
                        <InputField label="Overview" value={this.state.runtime} type="number" name="runtime"
                                    placeholder="Runtime here"
                                    handleMovieChange={this.handleMovieChange} required/>
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
