import React from 'react';
import {Link} from 'react-router-dom';
import Logo from 'pages/shared/Logo/Logo';
import 'pages/shared/Footer/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <Link to={`/`} className="footer__link">
                <Logo/>
            </Link>
        </footer>
    );
}

export default Footer;
