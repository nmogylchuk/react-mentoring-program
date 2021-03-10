import React from 'react';
import MovieAddEdit from 'pages/Home/components/ModalWindow/MovieAddEdit/MovieAddEdit';
import MovieDelete from 'pages/Home/components/ModalWindow/MovieDelete/MovieDelete';
import CloseButton from 'pages/shared/CloseButton/CloseButton';
import 'pages/Home/components/MovieItem/ThreeDotMenuActions/ThreeDotMenuActions.scss';

const modals = {
    EDIT: 'edit',
    DELETE: 'delete',
    ADD: 'add',
    DEFAULT: null
}

class ThreeDotMenuActions extends React.Component {

    state = {
        modalType: modals.DEFAULT
    }

    showEditModal = () => {
        this.setState({modalType: modals.EDIT})
    }

    showDeleteModal = () => {
        this.setState({modalType: modals.DELETE})
    }

    closeEditModal = () => {
        this.setState({modalType: modals.DEFAULT})
    }

    closeDeleteModal = () => {
        this.setState({modalType: modals.DEFAULT})
    }

    render() {
        return (
            <div>
                <div className="three-dot-menu-actions">
                    <CloseButton onClick={this.props.onClose}/>
                    <div className="three-dot-menu-actions__item" onClick={this.showEditModal}>
                        Edit Movie
                    </div>
                    <div className="three-dot-menu-actions__item" onClick={this.showDeleteModal}>
                        Delete Movie
                    </div>
                </div>
                { this.state.modalType === modals.EDIT && <MovieAddEdit onClose={this.closeEditModal} movie={this.props.movie} isEdit={true} />}
                { this.state.modalType === modals.DELETE && <MovieDelete onClose={this.closeDeleteModal} movie={this.props.movie} />}
            </div>
        );
    }
}

export default ThreeDotMenuActions;
