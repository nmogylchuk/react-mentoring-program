import {
    GET_MOVIES_REQUEST_SUCCESS,
    GET_MOVIE_REQUEST_SUCCESS,
    ADD_MOVIE_REQUEST_SUCCESS,
    UPDATE_MOVIE_REQUEST_SUCCESS,
    DELETE_MOVIE_REQUEST_SUCCESS,
} from 'store/actions/MoviesActions';

const initialState = {
    movies: [],
    movie: {}
};

function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES_REQUEST_SUCCESS:
            return {...state, movies: action.payload.movies};
        case GET_MOVIE_REQUEST_SUCCESS:
            return {...state, movie: action.payload.movie};
        case ADD_MOVIE_REQUEST_SUCCESS:
            return {...state, movies: [action.payload.movie, ...state.movies]};
        case UPDATE_MOVIE_REQUEST_SUCCESS:
            return {...state, movies: action.payload.movies};
        case DELETE_MOVIE_REQUEST_SUCCESS:
            return {...state, movies: [...state.movies].filter(movie => movie.id !== action.payload.movieId)};
        default:
            return {
                ...state
            };
    }
}

export default moviesReducer;
