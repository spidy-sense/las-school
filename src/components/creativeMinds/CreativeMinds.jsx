import React from 'react'
import './creativeMinds.css';
import creativeLogo from '../../attachments/bg-2.jpg';

const CreativeMinds = () => {
    return (
        <div style={{ 'position': 'relative' }}>
            <img style={{ 'width': '100%', 'height': '400px', 'filter': 'brightness(10%)', 'display': 'block' }} src={creativeLogo} alt="logo" />

            <div className="creative-head">
                <h1 style={{ 'color': '#fff' }}>We Build <span style={{ 'color': '#3e2c61' }}>Creative Minds</span></h1>
            </div>

            <div className="creative-content">
                <div className="grid-container-minds">
                    <div>
                        <div className="creative-count">
                            1100
                        </div>
                        <h4 style={{ fontSize: 18 }}>Students</h4>
                    </div>

                    <div>
                        <div className="creative-count">
                            35+
                        </div>
                        <h4 style={{ fontSize: 18 }}>Classrooms</h4>
                    </div>

                    <div>
                        <div className="creative-count">
                            40+
                        </div>
                        <h4 style={{ fontSize: 18 }}>Teachers</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreativeMinds