import React from 'react';
import Button from "@material-ui/core/Button";

const movieAddButtonStyle = {
    backgroundColor: 'white',
    color: '#f65261',
    width: '120px',
    fontSize: '1.2rem',
}

function MovieAddButton() {
    return (
        <Button style={movieAddButtonStyle}>+ Add Movie</Button>
    );
}

export default MovieAddButton;
