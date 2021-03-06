import React, {useCallback, useState} from 'react';
import MovieAddEdit from 'pages/Home/components/ModalWindow/MovieAddEdit/MovieAddEdit';
import MovieDelete from 'pages/Home/components/ModalWindow/MovieDelete/MovieDelete';
import CloseButton from 'pages/shared/CloseButton/CloseButton';
import {modals} from 'utils/constants';
import 'pages/Home/components/MovieItem/ThreeDotMenuActions/ThreeDotMenuActions.scss';

const ThreeDotMenuActions = (props) => {
    const {closeMenu, movie} = props;

    const [modalType, setModalType] = useState(modals.DEFAULT);

    const showEditModal = () => {
        setModalType(modals.EDIT)
    }

    const showDeleteModal = () => {
        setModalType(modals.DELETE)
    }
    const closeModal = () => {
        setModalType(modals.DEFAULT)
    };

    return (
        <div>
            <div className="three-dot-menu-actions">
                <CloseButton closeMenu={closeMenu}/>
                <div className="three-dot-menu-actions__item" onClick={showEditModal}>
                    Edit Movie
                </div>
                <div className="three-dot-menu-actions__item" onClick={showDeleteModal}>
                    Delete Movie
                </div>
            </div>
            {modalType === modals.EDIT &&
            <MovieAddEdit onClose={closeModal} movie={movie} isEdit={true}/>}
            {modalType === modals.DELETE &&
            <MovieDelete closeModal={closeModal} id={movie.id}/>}
        </div>
    );
}

export default ThreeDotMenuActions;
