import React from 'react';
import '../styles/Footer.css';
import spinnyLogo from '../assets/spinnyLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={spinnyLogo} alt="Spinny Logo" />
          <p>
            Spinny is the most trusted way of buying and selling used cars. Choose from over 5000 fully inspected second-hand car models. Select online and book a test drive at your home or at a Spinny Car Hub near you. Get a no-questions-asked 5-day money back guarantee and a free one-year comprehensive service warranty with Assured Resale Value on every Spinny car.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>ABOUT</h4>
            <ul>
              <li><a href="#">Spinny Assured</a></li>
              <li><a href="#">Who we are</a></li>
              <li><a href="#">Blog - Yellow Drive</a></li>
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Inspection Process</a></li>
              <li><a href="#">Customer Reviews</a></li>
              <li><a href="#">Used Car Loan</a></li>
              <li><a href="#">Spinny Partners</a></li>
            </ul>
          </div>
          <div className="footer-column">
            
            <ul>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">Car Hub Locations</a></li>
              <li><a href="#">Popular Cars Overview</a></li>
              <li><a href="#">Trade With Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>BUY USED CAR IN</h4>
            <p className="footer-locations">
              <a href="#">Delhi NCR</a>|
              <a href="#"> Bangalore</a>| 
              <a href="#"> Hyderabad</a>| 
              <a href="#"> Mumbai</a>|
              <a href="#"> Pune</a>|
              <a href="#"> Gurgaon</a>| 
              <a href="#"> Noida</a>|
              <a href="#"> Ahmedabad</a>| 
              <a href="#"> Chennai</a>|
              <a href="#"> Kolkata</a>| 
              <a href="#"> Lucknow</a>| 
              <a href="#"> Jaipur</a>|
              <a href="#"> Chandigarh</a>| 
              <a href="#"> Coimbatore</a>| 
              <a href="#"> Faridabad</a>|
              <a href="#"> Ghaziabad</a>| 
              <a href="#"> Indore</a>|
              <a href="#"> Kochi</a>
            </p>
          </div>
        </div>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-x"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Valuedrive Technologies Private Limited. All rights reserved.</p>
        <div className="footer-buttons">
          <button className="contact-button">Call us at 727-727-7275</button>
          <button className="quote-button">Get Instant Quotes</button>
          <button className="browse-button">Browse Cars</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
