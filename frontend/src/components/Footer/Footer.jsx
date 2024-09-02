import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="gov-footer">
      <div className="gov-footer-container">
        <div className="gov-footer-logo">
          <img src={logo} alt="Government Logo" />
        </div>
        <div className="gov-footer-contact">
          <h4>Contact Information</h4>
          <p>123 Government St, Capital City, Country</p>
          <p>Email: <a href="mailto:info@govsite.gov">info@govsite.gov</a></p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="gov-footer-social">
          <h4>Connect with Us</h4>
          <div className="gov-footer-social-icons">
            <a href="https://www.facebook.com">
                <FaFacebook/>
            </a>
            <a href="https://www.twitter.com">
                <FaTwitter/>
            </a>
            <a href="https://www.instagram.com">
                <FaInstagram/>
            </a>
            <a href="https://www.linkedin.com">
                <FaLinkedin/>
            </a>
          </div>
        </div>
      </div>
      <div className="gov-footer-bottom">
        <p>&copy; 2024 Government of Tamilnadu. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
