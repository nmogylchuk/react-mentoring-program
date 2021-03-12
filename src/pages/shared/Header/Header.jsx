import React, {useState, useCallback} from 'react';
import MovieAddButton from 'pages/shared/Header/MovieAddButton/MovieAddButton';
import Search from 'pages/Home/components/Search/Search';
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Logo from 'pages/shared/Logo/Logo';
import MovieAddEdit from "pages/Home/components/ModalWindow/MovieAddEdit/MovieAddEdit";
import {movie} from 'utils/constants'
import 'pages/shared/Header/Header.scss';
import SearchIcon from "pages/shared/Header/SearchIcon/SearchIcon";
import Home from 'pages/Home/Home';


const Header = (props) => {

    const {searchIconVisible, handleSearchIcon} = props;

    const [addModalVisible, setAddModalVisible] = useState(false);

    const handleAddModal = useCallback(() => {
        setAddModalVisible(!addModalVisible);
    }, [addModalVisible]);

    return (
        <header className="header">
            <div className="header__wrapper">
                <a href="#" className="header__link">
                    <Logo/>
                </a>
                {!searchIconVisible && <MovieAddButton openModal={handleAddModal}/>}
                {addModalVisible && <MovieAddEdit onClose={handleAddModal} movie={movie}/>}
                {searchIconVisible && <SearchIcon handleSearchIcon={handleSearchIcon}/>}
            </div>
        </header>
    );
}

export default Header;
