import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div id="banner" className="d-flex ">
            <p>
                <h1 className="text-uppercase mb-3 text-center" style={{ fontSize: '5em', color: '#020d42' }}>Let your dreams come true</h1>
                <h2 className="text-center" style={{ color: '#020d42', fontSize: '1.2em' }}>We promise to make you vacation excellent</h2>
            </p>
        </div>
    );
};

export default Banner;