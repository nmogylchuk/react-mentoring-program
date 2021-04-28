import React, {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import MovieAddButton from '../../../pages/shared/Header/MovieAddButton/MovieAddButton';
import Logo from '../../../pages/shared/Logo/Logo';
import MovieAddEdit from '../../../pages/Home/components/ModalWindow/MovieAddEdit/MovieAddEdit';
import SearchIcon from './../../../pages/shared/Header/SearchIcon/SearchIcon';
import {movie} from '../../../utils/constants';
import './Header.scss';


function Header(props) {

    const {searchIconVisible, handleSearchIcon} = props;

    const [addModalVisible, setAddModalVisible] = useState(false);

    const handleAddModal = useCallback(() => {
        setAddModalVisible(!addModalVisible);
    }, [addModalVisible]);

    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to="/" className="header__link">
                    <Logo/>
                </Link>
                {!searchIconVisible && <MovieAddButton openModal={handleAddModal}/>}
                {addModalVisible && <MovieAddEdit onClose={handleAddModal} movie={movie} isEdit={false}/>}
                {searchIconVisible && <SearchIcon handleSearchIcon={handleSearchIcon}/>}
            </div>
        </header>
    );
}

export default Header;
