// HELPERS

const movieFilterData = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const movieSortData = ['Release Date', 'From A to Z', 'From Z to A'];

const modals = {
    EDIT: 'edit',
    DELETE: 'delete',
    ADD: 'add',
    DEFAULT: null
}

const movie = {
    id: '',
    title: '',
    date: '',
    genres: [
        'Drama',
        'Romance',
        'Comedy',
    ],
    overview: '',
    runtime: ''
}

function isEmptyArray(object) {
    return object == null || (typeof object !== 'undefined' && object.length === 0);
}

module.exports = {
    movieFilterData,
    movieSortData,
    modals,
    movie,
    isEmptyArray
}
