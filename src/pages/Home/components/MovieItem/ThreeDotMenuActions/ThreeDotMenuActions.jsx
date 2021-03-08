import React from 'react';
import MovieEdit from 'pages/Home/components/ModalWindow/MovieEdit/MovieEdit';
import MovieDelete from 'pages/Home/components/ModalWindow/MovieDelete/MovieDelete';
import CloseButton from 'pages/shared/CloseButton/CloseButton';
import 'pages/Home/components/MovieItem/ThreeDotMenuActions/ThreeDotMenuActions.scss';

class ThreeDotMenuActions extends React.Component {
    state = {
        editModalVisible: false,
        deleteModalVisible: false,
        threeDotMenuActionModalVisible: true
    }

    showEditModal = () => {
        this.setState({editModalVisible: true});
        this.setState({threeDotMenuActionModalVisible: false});
    }

    showDeleteModal = () => {
        this.setState({deleteModalVisible: true});
        this.setState({threeDotMenuActionModalVisible: false});
    }

    closeEditModal = () => {
        this.setState({editModalVisible: false});
        this.setState({threeDotMenuActionModalVisible: true});
    }

    closeDeleteModal = () => {
        this.setState({deleteModalVisible: false});
        this.setState({threeDotMenuActionModalVisible: true});
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.threeDotMenuActionModalVisible ?
                        <div className="three-dot-menu-actions">
                            <CloseButton onClick={this.props.onClose}/>
                            <div className="three-dot-menu-actions__item" onClick={this.showEditModal}>
                                Edit Movie
                            </div>
                            <div className="three-dot-menu-actions__item" onClick={this.showDeleteModal}>
                                Delete Movie
                            </div>
                        </div>
                        : null
                    }
                </div>
                {this.state.editModalVisible ?
                    <MovieEdit onClose={this.closeEditModal} movie={this.props.movie}/> : null}
                {this.state.deleteModalVisible ?
                    <MovieDelete onClose={this.closeDeleteModal} movie={this.props.movie}/> : null}

            </div>
        );
    }
}

export default ThreeDotMenuActions;
