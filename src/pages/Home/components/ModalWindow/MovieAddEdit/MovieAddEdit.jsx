import React, {useEffect, useState} from 'react';
import ModalWindow from 'pages/Home/components/ModalWindow/ModalWindow';
import InputField from "pages/shared/InputField/InputField";
import InputSelect from "pages/shared/InputSelect/InputSelect";
import 'pages/Home/components/ModalWindow/MovieAddEdit/MovieAddEdit.scss';
import {useDispatch} from "react-redux";
import {addMovie, updateMovie} from "store/actions/MoviesActions";

const MovieAddEdit = ({onClose, movie, isEdit}) => {

    const [form, setForm] = useState({
        id: '',
        title: '',
        releaseDate: '',
        genres: [],
        overview: '',
        runtime: 0,
        poster_path: '',
    });

    useEffect(() => {
        setForm({
            id: movie.id,
            title: movie.title,
            releaseDate: movie.date,
            genres: movie.genres,
            overview: movie.overview,
            runtime: movie.runtime == null ? 0 : movie.runtime,
            poster_path: movie.poster_path,
        });
    }, [setForm]);

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const dispatch = useDispatch();

    const handleMovieSubmit = event => {
        if (isEdit) {
            dispatch(updateMovie({ ...form}));
        } else {
            dispatch(addMovie({ ...form}));
        }
        event.preventDefault();
        onClose();
    }

    return (
        <ModalWindow closeWindow={onClose}>
            <div className="movie-edit">
                <div className="movie-edit__title">{isEdit ? 'Edit' : 'Add movie'}</div>
                <form className="movie-edit__form" onSubmit={handleMovieSubmit}>
                    <InputField label="Id" value={form.id} type="text" name="id" placeholder="Id here"
                                handleMovieChange={changeHandler} required/>
                    <InputField label="Title" value={form.title} type="text" name="title"
                                placeholder="Title here"
                                handleMovieChange={changeHandler} required/>
                    <InputField label="Release date" value={form.releaseDate} type="date" name="date"
                                placeholder="Release date here"
                                handleMovieChange={changeHandler} required/>
                    <InputSelect label="Genre" name="genre" genres={form.genres}/>
                    <InputField label="Overview" value={form.overview} type="text" name="overview"
                                placeholder="Overview here"
                                handleMovieChange={changeHandler} required/>
                    <InputField label="Runtime" value={form.runtime} type="number" name="runtime"
                                placeholder="Runtime here"
                                handleMovieChange={changeHandler} required/>
                    <div className="movie-edit__button-wrapper">
                        <button className="movie-edit__button movie-edit__button--reset" type="reset">Reset
                        </button>
                        <button className="movie-edit__button movie-edit__button--submit"
                                type="submit">{isEdit ? 'Save' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </ModalWindow>
    );
}

export default MovieAddEdit;
