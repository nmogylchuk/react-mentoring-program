// HELPERS

const movieFilterData = [
    {value: 'all', field: 'All'},
    {value: 'documentary', field: 'Documentary'},
    {value: 'comedy', field: 'Comedy'},
    {value: 'horror', field: 'Horror'}
];

const movieSortData = [
    {
        value: 'release_date',
        field: 'Release Date'
    },
    {
        value: 'title',
        field: 'Name'
    }
];

const modals = {
    EDIT: 'edit',
    DELETE: 'delete',
    ADD: 'add',
    DEFAULT: null
}

const genres = ['Drama', 'Romance', 'Comedy'];

const movie = {
    id: '',
    title: '',
    date: '',
    genres: genres,
    overview: '',
    runtime: ''
}

function isEmptyArray(object) {
    return object == null || (typeof object !== 'undefined' && object.length === 0);
}

function isEmpty(object) {
    return Object.keys(object).length == 0;
}

module.exports = {
    movieFilterData,
    movieSortData,
    modals,
    movie,
    isEmptyArray,
    genres
}
