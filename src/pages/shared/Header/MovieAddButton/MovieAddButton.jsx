import React from 'react';
import Button from "@material-ui/core/Button";
import 'pages/shared/Header/MovieAddButton/MovieAddButton.scss';

const MovieAddButton = (props) => {

    return (
        <Button className="movie-add-button" onClick={props.onClick}>+ Add Movie</Button>
    );
}

MovieAddButton.defaultProps = {
    handleShow: () => {}
};

export default MovieAddButton;
