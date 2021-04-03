import React, {useEffect, useState} from 'react';
import {Formik, Field, Form, ErrorMessage, useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import ModalWindow from 'pages/Home/components/ModalWindow/ModalWindow';
import InputField from 'pages/shared/InputField/InputField';
import InputSelect from 'pages/shared/InputSelect/InputSelect';
import 'pages/Home/components/ModalWindow/MovieAddEdit/MovieAddEdit.scss';
import {addMovie, updateMovie} from "store/actions/MoviesActions";

const MovieAddEdit = ({onClose, movie, isEdit}) => {

    // const [form, setForm] = useState({
    //     id: '',
    //     title: '',
    //     releaseDate: '',
    //     genres: [],
    //     overview: '',
    //     runtime: 0,
    //     poster_path: '',
    // });

    // useEffect(() => {
    //     setForm({
    //         id: movie.id,
    //         title: movie.title,
    //         releaseDate: movie.date,
    //         genres: movie.genres,
    //         overview: movie.overview,
    //         runtime: movie.runtime == null ? 0 : movie.runtime,
    //         poster_path: movie.poster_path,
    //     });
    // }, [setForm]);

    // const changeHandler = event => {
    //     setForm({ ...form, [event.target.name]: event.target.value });
    // }

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

    const validate = values => {

        const errors = {};
        console.log('validate');
        console.log({values});
        if (values.id.length < 5 ) {

            formik.errors.id = 'Required';
            console.log('errors');
            console.log(formik.errors.id);
        } else {
            formik.errors.id = null;
        }
    };

    const formValidationSchema= Yup.object({
            id: Yup.number('Movie id')
                .min(6, 'Movie id must be 6 characters or more')
                .required('Movie id is required'),
            title: Yup.string('Movie title')
                .required('Title is required'),
            releaseDate: Yup.string()
                // .format('YYYY-MM-DD')
                .required('Release date is required'),
            genres: Yup.array('List of genres')
                .required('Genres is required'),
            overview: Yup.string('Short description of the movie')
                .required('Overview is required'),
            runtime: Yup.number()
                .min(0, 'Movie duration time must be 0 characters or more')
                .required('Runtime is required'),
            poster_path: Yup.string('')
                .url('Url to the poster image')
                .required('Url to the poster image is required')
        })

    const formik = useFormik({

        initialValues: {
                id: '',
                title: '',
                releaseDate: '',
                genres: [],
                overview: '',
                runtime: 0,
                poster_path: '',
        },

        // formValidationSchema,
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log({isEdit});
            if (isEdit) {
                dispatch(updateMovie({ ...values}));
            } else {
                dispatch(addMovie({ ...values}));
            }
            onClose();
        },

    });

    return (
        <ModalWindow closeWindow={onClose}>
            {/*<Formik*/}
            {/*    validationSchema={formValidationSchema}*/}
            {/*    onSubmit={(form, { handleMovieSubmit }) => {*/}
            {/*        // setTimeout(() => {*/}
            {/*        //     alert(JSON.stringify(form, null, 2));*/}
            {/*            handleMovieSubmit();*/}
            {/*        // }, 400);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {({ value, errors, touched, handleChange, handleSubmit }) => (*/}
            {/*    <Form>*/}
            {/*        <div className="movie-edit">*/}
            {/*            <div className="movie-edit__title">{isEdit ? 'Edit' : 'Add movie'}</div>*/}
                        <form className="movie-edit__form" onSubmit={formik.handleSubmit}>

                            <InputField label="Id" value={formik.values.id} type="text" name="id" placeholder="Id here"
                                        handleMovieChange={formik.handleChange} />
                            {formik.errors.id ? <div>{formik.errors.id}</div> : null}
                            {/*<ErrorMessage name="id" />*/}

                            <InputField label="Title" value={formik.values.title} type="text" name="title"
                                        placeholder="Title here"
                                        handleMovieChange={formik.handleChange} />
                            {/*<ErrorMessage name="title" />*/}
                            {formik.errors.title ? <div>{formik.errors.title}</div> : null}

                            <InputField label="Release date" value={formik.values.releaseDate} type="date" name="date"
                                        placeholder="Release date here"
                                        handleMovieChange={formik.handleChange} />
                            {/*<ErrorMessage name="date" />*/}
                            {formik.errors.date ? <div>{formik.errors.date}</div> : null}

                            <InputSelect label="Genre" name="genre" genres={formik.values.genres}/>
                            {/*<ErrorMessage name="genre" />*/}
                            {formik.errors.genres ? <div>{formik.errors.genres}</div> : null}

                            <InputField label="Overview" value={formik.values.overview} type="text" name="overview"
                                        placeholder="Overview here"
                                        handleMovieChange={formik.handleChange} />
                            {/*<ErrorMessage name="overview" />*/}
                            {formik.errors.overview ? <div>{formik.errors.overview}</div> : null}

                            <InputField label="Runtime" value={formik.values.runtime} type="number" name="runtime"
                                        placeholder="Runtime here"
                                        handleMovieChange={formik.handleChange}/>
                            {/*<ErrorMessage name="runtime" />*/}
                            {formik.errors.runtime ? <div>{formik.errors.runtime}</div> : null}

                            <div className="movie-edit__button-wrapper">
                                <button className="movie-edit__button movie-edit__button--reset" type="reset">Reset
                                </button>
                                <button className="movie-edit__button movie-edit__button--submit"
                                        type="submit">{isEdit ? 'Save' : 'Submit'}
                                </button>
                            </div>
                        </form>
                {/*    </div>*/}
                {/*</Form>*/}
            {/*    )}*/}
            {/*</Formik>*/}


            {/*<div className="movie-edit">*/}
            {/*    <div className="movie-edit__title">{isEdit ? 'Edit' : 'Add movie'}</div>*/}
            {/*    <form className="movie-edit__form" onSubmit={handleMovieSubmit}>*/}
            {/*        <InputField label="Id" value={form.id} type="text" name="id" placeholder="Id here"*/}
            {/*                    handleMovieChange={changeHandler} required/>*/}
            {/*        <InputField label="Title" value={form.title} type="text" name="title"*/}
            {/*                    placeholder="Title here"*/}
            {/*                    handleMovieChange={changeHandler} required/>*/}
            {/*        <InputField label="Release date" value={form.releaseDate} type="date" name="date"*/}
            {/*                    placeholder="Release date here"*/}
            {/*                    handleMovieChange={changeHandler} required/>*/}
            {/*        <InputSelect label="Genre" name="genre" genres={form.genres}/>*/}
            {/*        <InputField label="Overview" value={form.overview} type="text" name="overview"*/}
            {/*                    placeholder="Overview here"*/}
            {/*                    handleMovieChange={changeHandler} required/>*/}
            {/*        <InputField label="Runtime" value={form.runtime} type="number" name="runtime"*/}
            {/*                    placeholder="Runtime here"*/}
            {/*                    handleMovieChange={changeHandler} required/>*/}
            {/*        <div className="movie-edit__button-wrapper">*/}
            {/*            <button className="movie-edit__button movie-edit__button--reset" type="reset">Reset*/}
            {/*            </button>*/}
            {/*            <button className="movie-edit__button movie-edit__button--submit"*/}
            {/*                    type="submit">{isEdit ? 'Save' : 'Submit'}*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </ModalWindow>
    );
}

export default MovieAddEdit;
