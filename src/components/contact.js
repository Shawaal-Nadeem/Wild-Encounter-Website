import React from 'react';
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
<h1 className='team-heading1'>Contact Us</h1>
<hr className='line'/>
<h3 className='contact-heading2'>To inquire about our services, please contact:</h3>
<div className='info-n-pic'>
<div className='table-info'>
<h5>Kevin Wilson</h5>
<p>Edmonton, Alberta</p>
<p>Ph. 780.913.1021</p>
<p>Fax 780.489.9933</p>
<p>Email: Kevin@WildEncountersLtd.com</p>
</div>
<div className='contact-pic1'>
<img className="" src="/images/contactpic1.png" alt="" />
</div>
</div>

<div className="endcontact-page">
  <div className="col1">
<p className="end-head1">Our Services</p>
<p className="col1-line">Wildlife Awareness & Bear Defense Training</p>
<p className="col1-line">Wildlife Hazard Assessments</p>
<p className="col1-line">Wildlife Monitoring</p>
<p className="col1-line">Wildlife Defense Supply Sales & Rentals</p>
<p className="col1-line">Wildlife Safety Audits & Policy Development</p>
<p className="col1-line">Karelian Bear Dog (KBD) & Cougar Hound Services</p>
<p className="disclaimer">Disclaimer</p>
</div>
<div className="vertical-line"></div>
<div className="col2">
<p className="end-head1">NEWS</p>
<p className="col1-line">Suncor employee killed in bear attack</p>
<p className="col1-line">Pipeline worker attacked by cougar shares story</p>
<p className="col1-line">Missing Kananaskis hunter, killed in bear attack</p>
<p className="col1-line">The Great Canadian Oilsands Black Bear Massacre</p>
<p className="col1-line">Nunavut Man Killed by Polar Bear</p>
<p className="col1-line">Shoot or Spray?</p>
<p className="col1-line">Canada Mauling Reflects Spike in Human-Bear Encounters</p>
</div>
<div className="vertical-line"></div>
<div className="col3">
<p className="end-head3">Kevin Wilson</p>
<p className="col1-line">Edmonton, Alberta</p>
<table>
  <tr>
    <td><p className="col3-line">Phone:</p></td>
    <td><p>780.913.1021</p></td>
  </tr>
  <tr>
    <td><p className="col3-line">Fax:</p></td>
    <td><p>780.489.9933</p></td>
  </tr>
  <tr>
    <td><p className="col3-line">Email:</p></td>
    <td><p>Kevin@WildEncountersLtd.com</p></td>
  </tr>
</table>
<img className="homepic8" src="/images/homepic8.png" alt="" />
</div>
</div>
<div className="endcontact-footer">
  <p className="footer-line">Wild Encounters Ltd. | All rights Reserved 2019</p>

  </div>
        </div>
  
  );
}

export default Contact;
