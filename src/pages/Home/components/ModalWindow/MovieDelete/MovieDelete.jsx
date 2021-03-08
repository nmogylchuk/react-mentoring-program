import React from 'react';
import ModalWindow from 'pages/Home/components/ModalWindow/ModalWindow';
import 'pages/Home/components/ModalWindow/MovieDelete/MovieDelete.scss';

const DeleteMovie = (props) => {

    function handleRemove() {
        alert(`Removed movie id: ${props.movie.id}`);
    }

    return (
        <ModalWindow onClick={props.onClose}>
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
