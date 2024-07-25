import React from 'react';

const Footer : React.FC = () =>{
    return (
    <footer className="footer">
        <h2>Connect</h2>
        <ul className="contact-info" id="contact-info">
            <li className='contact-info-items'><img src='./src/images/insta-logo.png' alt='instagram logo' width='30px'/>@uogfsa </li>
            <li className='contact-info-items'><img src='./src/images/discord-icon.png' alt='discord logo' width='30px'/>/uogfsa </li>
            <li className='contact-info-items'><img src='./src/images/gryphlife.png' alt='gryphlife logo' width='30px' height='35px'/>uogfsa</li>
        </ul>
        <small>Copyright © 2024 Simon Tenedero</small>
    </footer>
    );
}

export default Footer;