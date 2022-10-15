import React from 'react';
import './news.css';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const News = () => {
    return (
        <div className="news-block">
            <h2>News & Updates</h2>

            <div style={{ 'color': '#000', 'marginTop': '3rem' }}>
                <FontAwesomeIcon icon={faChevronRight} style={{ 'marginRight': '0.8rem' }} /> Registration & admissions are open. Contact school for more info.
            </div>
        </div>
    )
}

export default News