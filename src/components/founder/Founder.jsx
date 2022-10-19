import React from 'react';
import dots from '../../attachments/9dots.png';
import founder from '../..//attachments/founder.jpg';

const Founder = () => {
    return (
        <div className="grandmaster-block position-relative">
            
            <div style={{ 'marginTop': '5rem' }}>
                
                <h5 style={{ 'fontSize': '16px' }}>Words from the Founder </h5>
                <img className="grand-image" style={{ 'width': '30px', 'height': '25px' }} src={dots} />
                
                <img src={founder} className="founder-image border" style={{ height: '150px', width: '150px' }} />
                
                <h2 style={{ 'marginBottom': '0', 'color': '#000', 'marginTop': '1rem' }}>Speed of the Engine is</h2> 
                <h2 style={{ 'marginTop': '0', 'color': '#000', 'margonBottom': '5rem' }}>the Speed of the Train</h2>

                <p className="grndmaster-speech" style={{ 'color': '#000', 'padding': '4rem 20%' }}>We train our pupils to be Leaders . We teach them not to follow the trend but to Set the Trend . Our students and staff are our family so we grow together and we contribute together to make this world a beautiful place to live in . We teach beyond the intellectual boundaries as we nurture them morally, socially and spiritually too . We focus on over all development of a child and create an environment of equality for girls and boys . 'No discrimination' is one of the golden rules of our organization . We promote eco friendly learning and hence provide a grand campus with gardens ,parks and playground because we believe in all round development of the students including sports and extra curricular activities. We learn to rise together to shine bright in the sky of success with confidence.</p>
            </div>
        </div>
    )
}

export default Founder