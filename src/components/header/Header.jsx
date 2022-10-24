import React from 'react';
import './header.css';
import headerImage1 from '../../attachments/cover-1.jpg';
import headerImage2 from '../../attachments/cover-2.jpg';
import headerImage3 from '../../attachments/cover-3.jpg';
import headerImage4 from '../../attachments/cover-4.jpg';
import headerImage5 from '../../attachments/cover-5.jpg';

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import logo from '../../attachments/logo.png';

const Header = () => {
    return (
        <div className="d-flex">
            <div className='float-start align-self-center mb-4'>
                <div className="header-block-1 text-center">
                    <img src={logo} className="me-4 school-logo" style={{ height: 200, width: 200 }} /> 
                    <h1 style={{ 'color': '#3e2c61' }}>
                        Better Future For Your Kids
                    </h1>
                    <p style={{ 'color': '#3e2c61', 'backgroundColor': '#fff', 'padding': '5px 5px', 'fontWeight': '600' }}>Let the child be the director, and the actor in his own play</p>
                </div>
                <div className="header-block-2">
                    <Link to="/register">
                        <button className="headButton">Registration Open</button>
                    </Link>

                    <p style={{ 'color': 'rgb(62, 44, 97)', 'fontWeight': '700', width: '75%', marginTop: '1rem', margin: 'auto' }} className="head-1 mt-4">We just don't give our students only lecture but real life experiment, workshops and filed experience throughout the journey!</p>

                </div>
                <div className="school-name">Little Angel School</div>
            </div>
            <div className="header-image-carousel">
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 header-image" src={headerImage1}
                            alt="Image One"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 header-image" src={headerImage2}
                            alt="Image Two"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 header-image" src={headerImage3}
                            alt="Image Two"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 header-image" src={headerImage4}
                            alt="Image Two"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 header-image" src={headerImage5}
                            alt="Image Two"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Header