import React from 'react';
import Button from "@material-ui/core/Button";
import 'pages/shared/Header/MovieAddButton/MovieAddButton.scss';

const MovieAddButton = (props) => {

    const {openModal} = props;

    return (
        <Button className="movie-add-button" onClick={openModal}>+ Add Movie</Button>
    );
}

export default MovieAddButton;
