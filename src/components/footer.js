import React from 'react';
import facebook from '../images/facebookicon.png';
import insta from '../images/instaicon.png'


export default function Footer() {
    return (
        <div className="footer">
            <p>copyright 2021</p>
            <div className="social">
            <img className="icon" src={insta} alt="Instagram" />
            </div>
        </div>
    )
}