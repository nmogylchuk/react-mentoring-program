import React from 'react';
import Logo from 'pages/shared/Logo/Logo';
import 'pages/shared/Footer/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <a href="#" className="footer__link">
                <Logo/>
            </a>
        </footer>
    );
}

export default Footer;
