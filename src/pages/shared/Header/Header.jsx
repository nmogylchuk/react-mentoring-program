import React from 'react';
import MovieAddButton from 'pages/shared/Header/MovieAddButton/MovieAddButton';
import Search from 'pages/Home/components/Search/Search'
import Logo from 'pages/shared/Logo/Logo';
import MovieAddEdit from "pages/Home/components/ModalWindow/MovieAddEdit/MovieAddEdit";
import {movie} from 'utils/constants'
import 'pages/shared/Header/Header.scss';

class Header extends React.Component {
    state = {
        addModalVisible: false
    }

    showAddModal = () => {
        this.setState({addModalVisible: true});
    };

    closeAddModal = () => {
        this.setState({addModalVisible: false});
    }

    render() {
        return (
            <header className="header">
                <div className="header__wrapper">
                    <a href="#" className="header__link">
                        <Logo/>
                    </a>
                    <MovieAddButton onClick={this.showAddModal}/>
                    {this.state.addModalVisible && <MovieAddEdit onClose={this.closeAddModal} movie={movie}/>}
                </div>
                <Search/>
            </header>
        );
    }
}

export default Header;
