import React from 'react';
import './grandmasterTalk.css';
import dots from '../../attachments/9dots.png';

const GrandmasterTalk = () => {
    return (
        <div className="grandmaster-block">
            <div style={{ 'marginTop': '5rem' }}>
                <h5 style={{ 'fontSize': '16px' }}>GRANDMASTER TALK </h5>
                <img className="grand-image" style={{ 'width': '30px', 'height': '25px' }} src={dots} />
                <h2 style={{ 'marginBottom': '0', 'color': '#000', 'marginTop': '4rem' }}>Education Is The Most</h2> 
                <h2 style={{ 'marginTop': '0', 'color': '#000', 'margonBottom': '5rem' }}>Powerful Weapon</h2>

                <p style={{ 'color': '#000', 'padding': '4rem 20%' }}>Education has the power to change people's lives. The knowledge that is gained can be used to shape your future and educate generations to come. It is the key that unlocks the door of opportunity. Education has always been an important factor in society, and it serves to unite and strengthens our country.</p>
            </div>
        </div>
    )
}

export default GrandmasterTalk