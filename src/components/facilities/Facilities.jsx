import React from 'react';
import './facilities.css';

import { 
    faTv,
    faHand,
    faComputer,
    faBook,
    faMusic,
    faH,
    faGamepad,
    faFutbol,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Facilities = () => {
    return (
        <div className="facility-block">
            <h1>Our Facilities</h1>

            <div className="grid-container">
                <div className="grid-item">
                    <FontAwesomeIcon icon={faTv} />
                    <p>Digital Classroom</p>
                </div>

                <div className="grid-item">
                    <FontAwesomeIcon icon={faHand} />
                    <p>Prayer Room</p>
                </div>

                <div className="grid-item">
                    <FontAwesomeIcon icon={faComputer} />
                    <p>School Labs</p>
                </div>

                <div className="grid-item">
                    <FontAwesomeIcon icon={faBook} />
                    <p>Library</p>
                </div>

                <div className="grid-item">
                    <FontAwesomeIcon icon={faMusic} />
                    <p>Music & Art</p>
                </div>

                <div className="grid-item">
                    <FontAwesomeIcon icon={faH} />
                    <p>Multi Purpose Halls</p>
                </div>

                <div className="grid-item">
                    <FontAwesomeIcon icon={faGamepad} />
                    <p>Sports</p>
                </div>

                <div className="grid-item">
                    <FontAwesomeIcon icon={faFutbol} />
                    <p>Kids Playground</p>
                </div>

                <div className="grid-item">
                    <FontAwesomeIcon icon={faUser} />
                    <p>Parent Guidance</p>
                </div>
            </div>
        </div>
    )
}

export default Facilities