import React from "react";
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
      <h1 className="team-heading1">Professional Services</h1>
      <hr className="line" />
      <div className="service-details">
        <div>
          <h2 className="detail1">
            Wildlife Safety Audits & Policy Development – Work Site & Camp
            Design
          </h2>
          <p className="servicedetail-lines">
            Wildlife Encounters Ltd. conducts detailed onsite wildlife safety
            audits for each client’s remote locations. Designed for your work
            sites, we compile and deliver a Predator Conflict Management Plan
            (PCMP), or in some instances a more comprehensive Worksite Wildlife
            Management Plan (WWMP). Written plans address observations &
            recommendations, and offer accountability measures for Best
            Management Practices (BMPs) around managing attractants, operating
            protocols, worker behaviour, worksite protocols/policies,
            compliance, and wildlife security. Wild Encounters Ltd. can also
            assist with implementation.
          </p>
          <div className="detail2">
            <h2 className="detail1">
              Wildlife Awareness & Bear Defense Training
            </h2>
            <img className="servicepic2" src="/images/servicepic2.png" alt="" />
          </div>
          <p className="servicedetail-lines2">
            With a focus on avoidance and non-lethal bear and other predator
            conflict solutions, Wild Encounters Ltd. currently offers three
            training courses:
            <br />
            <br />
            <b className="detail2-heading1">Bear Awareness & Safety Training</b>
            <br />
            A 2-module training session focusing on bear species identification,
            ecology, behaviours, tips on how to avoid wildlife conflicts,
            encounters, defining defensive and predatory attacks, and how to use
            pepper spray. Training includes theory, practical hands-on training,
            and each participant receives a canister of pepper spray with a
            holster.
            <br />
            <br />
            <b className="detail2-heading1">
              Industrial Predator Awareness, Conflict Management & Safety
              Training
            </b>
            <br />
            In-depth 4-module training session addressing Alberta’s top five
            predators. Training includes species identification, ecology, and
            behaviours; avoiding wildlife conflicts; industry considerations &
            regulatory requirements, managing attractants, understanding
            defensive and predatory attacks, encounters & response,
            understanding & using non-lethal deterrents (i.e. noise & pepper
            spray), and the bear safety response matrix. Sessions include
            theory, practical hands-on training, and each participant receives a
            bear defense kit.
            <br />
            <br />
            <b className="detail2-heading1">Canadian Firearms Safety Course</b>
            <br />A full day course covering non-restricted firearms components,
            safety, ammunition, handling, storage, transportation, and more.
          </p>
          <div>
            <h2 className="detail1">Wildlife Defense Supply Sales & Rentals</h2>
            <p className="servicedetail-lines">
              Wild Encounters Ltd. supplies Industry with a complete inventory
              of predator and other wildlife defense tools and materials
              including:
              <br />
              <ul>
                <li>Bear Deterrents</li>
                <li>Pyrotechnics (Scare Cartridges)</li>
                <li>Electric Fencing</li>
                <li>Staying Safe in Bear Country Video</li>
              </ul>
            </p>
            <div>
              <h2 className="detail1">Wildlife Hazard Assessments</h2>
              <p className="servicedetail-lines">
                With the growing number of predatory and other problem wildlife,
                companies and private landowners are also experiencing an
                increase in the frequency of wildlife conflicts. Whether
                workers, livestock, or property is perceived to be at risk, risk
                assessment is an important due-diligence measure. Wild
                Encounters’ experienced staff will conduct a thorough evaluation
                of problem wildlife issues. Depending on the circumstance and
                magnitude of the site, assessments may include site tours, GPS
                mapping, kill-site, track and scat assessment, to incident
                review, and recommending mitigating measures and proposing
                solutions.
              </p>
            </div>
            <div>
              <h2 className="detail1">Wildlife Monitoring</h2>
              <p className="servicedetail-lines">
                Worker safety is a priority. When workers are preoccupied with
                potential wildlife threats, they are unable to do their jobs
                effectively. When bears, cougars, wolves or other problem
                wildlife appear on a regular basis, companies require dedicated
                monitors to be on site to address wildlife sightings as they
                occur. Wild Encounters places professional staff on work sites
                to monitor, assess, and address problem wildlife issues in
                accordance with regular protocols. Monitoring services are
                conducted in compliance with the Alberta Wildlife Act and in
                direct communication with government authorities.{" "}
              </p>
            </div>
            <div>
              <h2 className="detail1">
                Karelian Bear Dog (KBD) & Cougar Hound Services{" "}
              </h2>
              <p className="servicedetail-lines">
                Many companies working in remote areas experience problem
                wildlife such as bears or cougars. Negative conditioning, or
                hazing, is one tool that is effectively used to deter wildlife
                from returning to the site. Wild Encounters can dispatch
                handlers and their dogs to address these issues.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="endhome-page">
        <div className="col1">
          <p className="end-head1">Our Services</p>
          <p className="col1-line">
            Wildlife Awareness & Bear Defense Training
          </p>
          <p className="col1-line">Wildlife Hazard Assessments</p>
          <p className="col1-line">Wildlife Monitoring</p>
          <p className="col1-line">Wildlife Defense Supply Sales & Rentals</p>
          <p className="col1-line">
            Wildlife Safety Audits & Policy Development
          </p>
          <p className="col1-line">
            Karelian Bear Dog (KBD) & Cougar Hound Services
          </p>
          <p className="disclaimer">Disclaimer</p>
        </div>
        <div className="vertical-line"></div>
        <div className="col2">
          <p className="end-head1">NEWS</p>
          <p className="col1-line">Suncor employee killed in bear attack</p>
          <p className="col1-line">
            Pipeline worker attacked by cougar shares story
          </p>
          <p className="col1-line">
            Missing Kananaskis hunter, killed in bear attack
          </p>
          <p className="col1-line">
            The Great Canadian Oilsands Black Bear Massacre
          </p>
          <p className="col1-line">Nunavut Man Killed by Polar Bear</p>
          <p className="col1-line">Shoot or Spray?</p>
          <p className="col1-line">
            Canada Mauling Reflects Spike in Human-Bear Encounters
          </p>
        </div>
        <div className="vertical-line"></div>
        <div className="col3">
          <p className="end-head3">Kevin Wilson</p>
          <p className="col1-line">Edmonton, Alberta</p>
          <table>
            <tr>
              <td>
                <p className="col3-line">Phone:</p>
              </td>
              <td>
                <p>780.913.1021</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="col3-line">Fax:</p>
              </td>
              <td>
                <p>780.489.9933</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="col3-line">Email:</p>
              </td>
              <td>
                <p>Kevin@WildEncountersLtd.com</p>
              </td>
            </tr>
          </table>
          <img className="homepic8" src="/images/homepic8.png" alt="" />
        </div>
      </div>
      <div className="service-footer">
        <p className="footer-line">
          Wild Encounters Ltd. | All rights Reserved 2019
        </p>
      </div>
    </div>
  );
}

export default Service;
