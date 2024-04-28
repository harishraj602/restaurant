import React from 'react';
import { FooterOverlay,Newsletter } from '../../components';
import './Footer.css';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
import {images} from '../../constants'
const Footer = () => (
  <div className="app__footer section__padding">
    {/* <FooterOverlay/> */}
    <Newsletter/>
    <div className="app__footer-links">

      <div className="app__footer-links_content">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">17,Rayar nagar</p>
          <p className="p__opensans">123645798</p>
          <p className="p__opensans">978645312</p>
      </div>

      <div className="app__footer-links_logo">
         <img src={images.gericht} alt="footer_logo" />
         <p className='p__opensans'>the best way to find yourself is to lose to others</p>
         <img src={images.spoon} alt="spoong"className='spoon__img'style={{marginTop:'15px'}} />
         <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
         </div>
      </div>

      <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working HOurs</h1>
          <p className="p__opensans">MOnday-friday</p>
        
          <p className="p__opensans">123645798</p>
          <p className="p__opensans">saturday-sunday</p>
          <p className="p__opensans">978645312</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht.All rights reserved</p>
    </div>
  </div>
);

export default Footer;
