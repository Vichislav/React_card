import React from 'react';
import hand_left from '../Assets/hand_left.png'
import hand_right from '../Assets/hand_right.png'
import '../css/home.css'

const Footer = () => {

    return (
        <div className="footer">
            <div className="footerLeft">
                <img src={hand_left} className="footerLeftHand" alt="hand"/>
            </div>
            <div className="footerMiddle">
                <p className="footerMiddleText">тел: 8-913-963-59-32</p>
                <p className="footerMiddleText">mail: s1ava8968@gmail.com</p>
            </div>
            <div className="footerRight">
                <img src={hand_right} className="footerRightHand" alt="hand"/>
            </div>
        </div>
    );
}

export default Footer;
