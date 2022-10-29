import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div id="main-contact">
        <nav className="navbar">
          <label className="logo">
            <img className="img-size" src="/images/logo.png" alt="logo" />
          </label>
          <ul className="btn-nav">
            <Link exact to="/">
              <li>
                <button className="navbtn">Home</button>
              </li>
            </Link>
            <Link to="/Our-Team">
              <li>
                <button className="navbtn">Our Team</button>
              </li>
            </Link>
            <Link to="/Services">
              <li>
                <button className="navbtn">Services</button>
              </li>
            </Link>
            <Link to="/Contact-Us">
              <li>
                <button className="navbtn">Contact Us</button>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <h1 className="team-heading1">Contact Us</h1>
      <hr className="line" />
      <h3 className="contact-heading2">
        To inquire about our services, please contact:
      </h3>
      <div className="info-n-pic">
        <div className="table-info">
          <h5>Kevin Wilson</h5>
          <p>Edmonton, Alberta</p>
          <p>Ph. 780.913.1021</p>
          <p>Fax 780.489.9933</p>
          <p>Email: Kevin@WildEncountersLtd.com</p>
        </div>
        <div className="contact-pic1">
          <img className="" src="/images/contactpic1.png" alt="" />
        </div>
      </div>

      
    </div>
  );
}

export default Contact;
