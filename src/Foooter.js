import React from 'react';
import '../src/components/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Foooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Its all about the beauty of your comfort.
            </p>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#project">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              Address: 57 Norway Rd, Surulere, Lagos
              <br />
              Email: oluasandra@gmail.com
              <br />
              Phone: +234 808 408 5830
            </p>
          </div>
          <div className="footer-section">
            <h3>Subscribe and stay updated with our latest news and offers.</h3>
            <div className="social-icons">
        <a href="https://www.instagram.com/ginikaolua/" >
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/ginikaolua/" >
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.instagram.com/ginikaolua/" >
          <FaInstagram className="icon" />
        </a>
        <a href="hhttps://www.instagram.com/ginikaolua/">
          <FaLinkedin className="icon" />
        </a>
      </div> 
            <form>
              <input type="email" placeholder="Enter your email" className='footerinput'/> <br/>
              <a  href="hhttps://www.instagram.com/ginikaolua/" className='footersub'>SUBSCRIBE</a>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
        <p className="footer-text">© 2023 G'Homes- All Rights Reserved. Olua Ginikachi</p>
        </div>
      </div>
    </footer>
  );
};

export default Foooter;
