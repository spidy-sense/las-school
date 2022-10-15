import React from 'react';
import './header.css';
import headerImage from '../../attachments/cover-image.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div  style={{ 'position': 'relative' }}>
            <div>
                <img className="header-image" src={headerImage} alt="cover-image" />
            </div>
            <div className="header-block-1">
                <h1 style={{ 'color': '#3e2c61' }}>
                    Better Future For Your Kids
                </h1>
                <p style={{ 'color': '#3e2c61', 'backgroundColor': '#fff', 'padding': '5px 5px', 'fontWeight': '600' }}>Let the child be the director, and the actor in his own play</p>
            </div>
            <div className="header-block-2">
                <Link to="/register">
                    <button className="headButton">Registration Open</button>
                </Link>

                <p style={{ 'color': '#3e2c61', 'padding': '5px 5px', 'fontWeight': '600' }} className="head-1">We just don't give our students only lecture but real life experiment, workshops and filed experience throughout the journey!</p>
                <p style={{ 'color': '#3e2c61', 'padding': '5px 5px', 'fontWeight': '600' }} className="head-2">Let the child be the director, and the actor in his own play!</p>
            </div>
        </div>
    )
}

export default Header