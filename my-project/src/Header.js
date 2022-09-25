/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from './Header.modules.css';
import searchicon from './img/searchicon.svg';



function Header() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="inviteToGames__links">
                    <nav className="inviteToGames__links-nav">
                        <ul className="inviteToGames__links-ul">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Our Shop</a></li>
                        </ul>
                    </nav>
                    <form className="inviteToGames__links-form">
                        <input className="inviteToGames__links-search" type="text" name="search" placeholder="Search..." />
                        <img width="19.45" height="19.45" src={searchicon} alt="search_icon" />
                    </form>
                </div>
            </header>
        </div>
    );
}

export default Header;