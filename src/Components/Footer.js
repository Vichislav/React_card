import React from 'react';
import hand from '../Assets/hand.png'
import '../css/home.css'

const Footer = () => {

    return (
        <div className="footer">
            <div className="footerLeft">
                <img src={hand} className="footerLeftHand" alt="hand"/>
            </div>
            <div className="footerMiddle">
                <p>тел: 8-913-963-59-32</p>
                <p>mail: s1ava8968@gmail.com</p>
            </div>
            <div className="footerRight">
                <img src={hand} className="footerRightHand" alt="hand"/>
            </div>
        </div>
    );
}

export default Footer;
