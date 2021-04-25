import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import ModalWindow from '../ModalWindow';
import InputField from '../../../../shared/InputField/InputField';
import InputSelect from '../../../../shared/InputSelect/InputSelect';
import './MovieAddEdit.scss';
import {addMovie, updateMovie} from '../../../../../store/actions/MoviesActions';
import {genres} from '../../../../../utils/constants';

const MovieAddEdit = ({onClose, movie, isEdit}) => {

    const dispatch = useDispatch();

    const initObject = isEdit ? {
        id: movie.id,
        title: movie.title,
        release_date: movie.date,
        genres: movie.genres,
        overview: movie.overview,
        runtime: movie.runtime == null ? 0 : movie.runtime,
        poster_path: movie.poster_path,
    } : {
        title: '',
        release_date: new Date().toISOString().substr(0, 10),
        genres: genres,
        overview: '',
        runtime: 0,
        poster_path: 'http://test_path.com/'
    };
    const requiredErrorMessage = 'This field is required';
    const formik = useFormik({
        initialValues: initObject,

        validationSchema: Yup.object({
            title: Yup.string().required(requiredErrorMessage),
            release_date: Yup.string().required(requiredErrorMessage),
            genres: Yup.array().required(requiredErrorMessage),
            overview: Yup.string().required(requiredErrorMessage),
            runtime: Yup.number().min(0).required(requiredErrorMessage),
            poster_path: Yup.string().url().required(requiredErrorMessage),
        }),

        onSubmit: values => {
            if (isEdit) {
                dispatch(updateMovie({...values}));
            } else {
                dispatch(addMovie({...values}));
            }
            onClose();
        },

    });

    return (
        <ModalWindow closeWindow={onClose}>
            <form className="movie-edit__form" onSubmit={formik.handleSubmit}>
                <InputField label="Title" value={formik.values.title} type="text" name="title"
                            placeholder="Title here"
                            handleMovieChange={formik.handleChange}/>
                {formik.errors.title ? <div>{formik.errors.title}</div> : null}

                <InputField label="Release date" value={formik.values.release_date} type="date" name="release_date"
                            placeholder="Release date here"
                            handleMovieChange={formik.handleChange}/>
                {formik.errors.release_date ? <div>{formik.errors.release_date}</div> : null}

                <InputSelect label="Genres" name="genres" genres={genres}
                             value={formik.values.genres}
                             handleMovieChange={formik.handleChange}/>
                {formik.errors.genres ? <div>{formik.errors.genres}</div> : null}

                <InputField label="Overview" value={formik.values.overview} type="text" name="overview"
                            placeholder="Overview here"
                            handleMovieChange={formik.handleChange}/>
                {formik.errors.overview ? <div>{formik.errors.overview}</div> : null}

                <InputField label="Runtime" value={formik.values.runtime} type="number" name="runtime"
                            placeholder="Runtime here"
                            handleMovieChange={formik.handleChange}/>
                {formik.errors.runtime ? <div>{formik.errors.runtime}</div> : null}

                <div className="movie-edit__button-wrapper">
                    <button className="movie-edit__button movie-edit__button--reset" type="reset">Reset
                    </button>
                    <button className="movie-edit__button movie-edit__button--submit"
                            type="submit">{isEdit ? 'Save' : 'Submit'}
                    </button>
                </div>
            </form>
        </ModalWindow>
    );
}

export default MovieAddEdit;
