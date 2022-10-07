import React from 'react';
import { Link } from "react-router-dom";
function Service() {
  return (
    <div>
<div id="main-Service">
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
        <h1 className='team-heading1'>Professional Services</h1>
<hr className='line'/>
<div className='service-details'>
<div>
<h2  className='detail1'>Wildlife Safety Audits & Policy Development – Work Site & Camp Design</h2>
<p className='servicedetail-lines'>Wildlife Encounters Ltd. conducts detailed onsite wildlife safety audits for each client’s remote locations. Designed for your work sites, we compile and deliver a Predator Conflict Management Plan (PCMP), or in some instances a more comprehensive Worksite Wildlife Management Plan (WWMP). Written plans address observations & recommendations, and offer accountability measures for Best Management Practices (BMPs) around managing attractants, operating protocols, worker behaviour, worksite protocols/policies, compliance, and wildlife security. Wild Encounters Ltd. can also assist with implementation.</p>
<div className='detail2'>
<h2  className='detail1'>Wildlife Awareness & Bear Defense Training</h2>
<img className="servicepic2" src="/images/servicepic2.png" alt="" />
</div>
<p className='servicedetail-lines2'>With a focus on avoidance and non-lethal bear and other predator conflict solutions, Wild Encounters Ltd. currently offers three training courses:</p>

</div>

</div>

        </div>
  
  );
}

export default Service;
