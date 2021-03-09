import React from 'react';
import MovieEdit from 'pages/Home/components/ModalWindow/MovieEdit/MovieEdit';
import MovieDelete from 'pages/Home/components/ModalWindow/MovieDelete/MovieDelete';
import CloseButton from 'pages/shared/CloseButton/CloseButton';
import 'pages/Home/components/MovieItem/ThreeDotMenuActions/ThreeDotMenuActions.scss';

class ThreeDotMenuActions extends React.Component {
    state = {
        editModalVisible: false,
        deleteModalVisible: false,
    }

    showEditModal = () => {
        this.setState({editModalVisible: true});
    }

    showDeleteModal = () => {
        this.setState({deleteModalVisible: true});
    }

    closeEditModal = () => {
        this.setState({editModalVisible: false});
    }

    closeDeleteModal = () => {
        this.setState({deleteModalVisible: false});
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
                {this.state.editModalVisible && <MovieEdit onClose={this.closeEditModal} movie={this.props.movie}/>}
                {this.state.deleteModalVisible &&
                <MovieDelete onClose={this.closeDeleteModal} movie={this.props.movie}/>}
            </div>
        );
    }
}

export default ThreeDotMenuActions;
