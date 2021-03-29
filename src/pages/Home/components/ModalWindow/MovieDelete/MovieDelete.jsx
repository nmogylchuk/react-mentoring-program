import React from 'react';
import { useDispatch } from 'react-redux';
import ModalWindow from 'pages/Home/components/ModalWindow/ModalWindow';
import { deleteMovies } from 'store/actions/MoviesActions';
import 'pages/Home/components/ModalWindow/MovieDelete/MovieDelete.scss';

const DeleteMovie = (props) => {

    const {closeModal, id} = props;
    const dispatch = useDispatch();
    function handleRemove() {
        dispatch(deleteMovies(id));
        alert(`Removed movie id: ${id}`);
        closeModal();
    }

    return (
        <ModalWindow closeWindow={closeModal}>
            <div className="movie-delete">
                <div className="movie-delete__title">Delete movie</div>
                <p className="movie-delete__description">Are you sure you want to delete this movie?</p>
                <div className="movie-delete__button-wrapper">
                    <button className="movie-delete__button movie-delete__button--confirm" onClick={handleRemove}>
                        Confirm
                    </button>
                </div>
            </div>
        </ModalWindow>
    );
};

export default DeleteMovie;
