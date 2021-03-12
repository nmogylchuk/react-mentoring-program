import React from 'react';
import ModalWindow from 'pages/Home/components/ModalWindow/ModalWindow';
import InputField from "pages/shared/InputField/InputField";
import InputSelect from "pages/shared/InputSelect/InputSelect";
import 'pages/Home/components/ModalWindow/MovieAddEdit/MovieAddEdit.scss';

class MovieAddEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.movie.id,
            title: props.movie.title,
            date: props.movie.release_date,
            genre: props.movie.genres,
            overview: props.movie.overview,
            runtime: props.movie.runtime,
            isEdit: props.isEdit
        };

        this.handleMovieChange = this.handleMovieChange.bind(this);
        this.handleMovieEditSubmit = this.handleMovieEditSubmit.bind(this);
    }

    handleMovieChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleMovieEditSubmit(event) {
        alert("Saved movie data")
        event.preventDefault();
    }

    render() {
        return (
            <ModalWindow closeWindow={this.props.onClose}>
                <div className="movie-edit">
                    <div className="movie-edit__title">{this.state.isEdit ? 'Edit' : 'Add' + ' movie'}</div>
                    <form className="movie-edit__form" ref="form" onSubmit={this.handleMovieEditSubmit}>
                        <InputField label="Id" value={this.state.id} type="text" name="id" placeholder="Id here"
                                    handleMovieChange={this.handleMovieChange} required/>
                        <InputField label="Title" value={this.state.title} type="text" name="title"
                                    placeholder="Title here"
                                    handleMovieChange={this.handleMovieChange} required/>
                        <InputField label="Release date" value={this.state.date} type="date" name="date"
                                    placeholder="Release date here"
                                    handleMovieChange={this.handleMovieChange} required/>
                        <InputSelect label="Genre" name="genre" genres={this.state.genre}/>
                        <InputField label="Overview" value={this.state.overview} type="text" name="overview"
                                    placeholder="Overview here"
                                    handleMovieChange={this.handleMovieChange} required/>
                        <InputField label="Overview" value={this.state.runtime} type="number" name="runtime"
                                    placeholder="Runtime here"
                                    handleMovieChange={this.handleMovieChange} required/>
                        <div className="movie-edit__button-wrapper">
                            <button className="movie-edit__button movie-edit__button--reset" type="reset">Reset
                            </button>
                            <button className="movie-edit__button movie-edit__button--submit"
                                    type="submit">{this.state.isEdit ? 'Save' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </ModalWindow>
        );
    };
}

export default MovieAddEdit;
