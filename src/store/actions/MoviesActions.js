import axios from "axios";
import {API} from 'url/url';

export const GET_MOVIES_REQUEST_START = 'GET_MOVIES_REQUEST_START';
export const GET_MOVIES_REQUEST_SUCCESS = 'GET_MOVIES_REQUEST_SUCCESS';
export const GET_MOVIES_REQUEST_ERROR = 'GET_MOVIES_REQUEST_ERROR';

export const GET_MOVIE_REQUEST_START = 'GET_MOVIE_REQUEST_START';
export const GET_MOVIE_REQUEST_SUCCESS = 'GET_MOVIE_REQUEST_SUCCESS';
export const GET_MOVIE_REQUEST_ERROR = 'GET_MOVIE_REQUEST_ERROR';

export const ADD_MOVIE_REQUEST_START = 'ADD_MOVIE_REQUEST_START';
export const ADD_MOVIE_REQUEST_SUCCESS = 'ADD_MOVIE_REQUEST_SUCCESS';
export const ADD_MOVIE_REQUEST_ERROR = 'ADD_MOVIE_REQUEST_ERROR';

export const UPDATE_MOVIE_REQUEST_START = 'UPDATE_MOVIE_REQUEST_START';
export const UPDATE_MOVIE_REQUEST_SUCCESS = 'UPDATE_MOVIE_REQUEST_SUCCESS';
export const UPDATE_MOVIE_REQUEST_ERROR = 'UPDATE_MOVIE_REQUEST_ERROR';

export const DELETE_MOVIE_REQUEST_START = 'DELETE_MOVIE_REQUEST_START';
export const DELETE_MOVIE_REQUEST_SUCCESS = 'DELETE_MOVIE_REQUEST_SUCCESS';
export const DELETE_MOVIE_REQUEST_ERROR = 'DELETE_MOVIE_REQUEST_ERROR';

export const requestMovies = options => async (dispatch) => {
    dispatch({
        type: GET_MOVIES_REQUEST_START,
        payload: { loading: true }
    });
    try {
        const { data } = await axios.get(API, options);
        dispatch({
            type: GET_MOVIES_REQUEST_SUCCESS,
            payload: { movies: data, loading: false },
        });
    } catch (error) {
        dispatch({
            type: GET_MOVIES_REQUEST_ERROR,
            payload: { error, loading: false },
        });
    }
};

export const requestMovie = (movieId) => async (dispatch) => {
    dispatch({
        type: GET_MOVIE_REQUEST_START,
        payload: { loading: true }
    });
    try {
        const { data } = await axios.get(`${API}/${movieId}`);
        dispatch({
            type: GET_MOVIE_REQUEST_SUCCESS,
            payload: { movie: data, loading: false },
        });
    } catch (error) {
        dispatch({
            type: GET_MOVIE_REQUEST_ERROR,
            payload: { error, loading: false },
        });
    }
};

export const addMovie = (movieData) => async (dispatch) => {
    dispatch({
        type: ADD_MOVIE_REQUEST_START,
        payload: { loading: true }
    });
    try {
        const { data } = await axios.post(API, {...movieData});
        dispatch({
            type: ADD_MOVIE_REQUEST_SUCCESS,
            payload: { movie: data, loading: false },
        });
    } catch (error) {
        dispatch({
            type: ADD_MOVIE_REQUEST_ERROR,
            payload: { error, loading: false },
        });
    }
};

export const updateMovie = (movieData, updatedMovies) => async (dispatch) => {
    dispatch({
        type: UPDATE_MOVIE_REQUEST_START,
        payload: { loading: true }
    });
    try {
        const {status} = await axios.put(API, {...movieData});
        if (status === SUCCESS_UPDATE_CODE) {
            dispatch({
                type: UPDATE_MOVIE_REQUEST_SUCCESS,
                payload: { movies: updatedMovies, loading: false },
            });
        }
    } catch (error) {
        dispatch({
            type: UPDATE_MOVIE_REQUEST_ERROR,
            payload: { error, loading: false },
        });
    }
};

export const deleteMovies = (movieId) => async (dispatch) => {
    const httpSuccessStatusCode = 204;
    dispatch({
        type: DELETE_MOVIE_REQUEST_START,
        payload: { loading: true }
    });
    try {
        const {status} = await axios.delete(`${API}/${movieId}`);
        console.log({status})
        if (status === httpSuccessStatusCode) {
            dispatch({
                type: DELETE_MOVIE_REQUEST_SUCCESS,
                payload: { movieId, loading: false },
            });
        }
    } catch (error) {
        dispatch({
            type: DELETE_MOVIE_REQUEST_ERROR,
            payload: { error, loading: false },
        });
    }
};
