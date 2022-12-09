import { memo } from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import logo from '../../logo.png';

import './Header.css';

function Header() {
    return (
        <div className="Header" >
            <div className="Header__container">
                <Link className="Header__link" to="/" >
                    <img alt="Logo" className="Header__image" src={logo} />
                </Link>
                <ul className="Header__list" >
                    <li className="Header__item" >
                        <Link className="Header__link" to="/">My Radio</Link>
                    </li>
                    <li className="Header__item" >
                        <Link className="Header__link" to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default memo(Header);
