import React from 'react';
import {useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import 'pages/shared/Header/SearchIcon/SearchIcon.scss';

const SearchIcon = (props) => {
    const {handleSearchIcon} = props;
    const history = useHistory();

    const goToSearch = () => {
        handleSearchIcon();
        history.push(`/`)
    }

    return (
        <Button className="search-icon" onClick={goToSearch}>Search icon</Button>
    );
}

export default SearchIcon;
