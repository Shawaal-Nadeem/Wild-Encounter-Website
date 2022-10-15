import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import AOS from "aos";
function Home() {
  AOS.init({
    startEvent: 'load'
  });
  return (
    <div>
      <div id="main-Home">
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
        <div className="anim">
          <img className="logohome" src="/images/logo.png" alt="" />
        </div>

        <h6 className="heading1">
          “Advising & Educating Industry and the Public in Wildlife Conflict
          Management”
        </h6>
        <p className="line1">
          Professional Services include Wildlife Awareness & Safety Training,
          Wildlife Hazard Assessments, Wildlife Defense Supply Sales, Worksite
          Wildlife Safety Audits, Wildlife Monitoring, and KBD/Cougar Hound
          Services
        </p>
      </div>
      <div data-aos="zoom-out">
        <div className="homepic2-3">
          <img className="homepic2" src="/images/homepic2.png" alt="" />
          <img className="homepic3" src="/images/homepic3.png" alt="" />
        </div>
      </div>
      <div className="read-onlytext">
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            "& .MuiTextField-root": { m: 1, width: "65ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <TextField
                  defaultValue="Professional Services"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  defaultValue="News"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
              </Grid>
            </Grid>
          </div>
        </Box>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <div data-aos="zoom-out">
            <img className="homepic4" src="/images/homepic4.png" alt="" />
            <p className="line2">
              The incidence of black bear, grizzly bear, and cougar encounters,
              attacks, and fatalities on remote worksites is a growing concern.
              Educating and informing your employees on how to avoid and handle
              encounters is a priority. Wild Encounters Ltd. can train your
              workers to enhance safety in the backcountry.
            </p>
            <Link exact to="/Services">
              <button className="learn-btn">LEARN MORE</button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div data-aos="zoom-out">
            <a href="https://www.cbc.ca/news/canada/british-columbia/grizzly-bear-attack-near-bella-bella-b-c-ends-with-kick-to-the-face-1.3157849">
              <div className="homepic-mini">
                <img className="homepic-m" src="/images/homepic5.png" alt="" />
              </div>
            </a>
            <a href="https://www.theglobeandmail.com/report-on-business/suncor-employee-killed-in-bear-attack/article18547720/">
              <div className="homepic-mini">
                <img className="homepic-m" src="/images/homepic5.png" alt="" />
              </div>
            </a>
            <a href="https://globalnews.ca/news/1805042/pipeline-worker-attacked-by-cougar-near-grande-prairie/">
              <div className="homepic-mini">
                <img className="homepic-m" src="/images/homepic5.png" alt="" />
              </div>
            </a>
            <a href="https://wildencountersltd.com/news/">
              <button className="news-btn">MORE NEWS</button>
            </a>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="mini-lines">
            <a href="https://www.cbc.ca/news/canada/british-columbia/grizzly-bear-attack-near-bella-bella-b-c-ends-with-kick-to-the-face-1.3157849">
              <h6 className="mini-line1">
                Grizzly bear attack near Bella Bella, B.C.
              </h6>

              <p className="mini-line2">By CBC News</p>
            </a>
          </div>
          <div className="mini-lines">
          <a href="https://www.theglobeandmail.com/report-on-business/suncor-employee-killed-in-bear-attack/article18547720/">
              <h6 className="mini-line1">
              Suncor employee killed in bear attack
              </h6>

              <p className="mini-line2">By Carrie Tait, Calgary Globe and Mail</p>
            </a>
          </div>
          <div className="mini-lines">
          <a href="https://globalnews.ca/news/1805042/pipeline-worker-attacked-by-cougar-near-grande-prairie/">
              <h6 className="mini-line1">
              Pipeline Worker Attacked by Cougar Shares Story
              </h6>

              <p className="mini-line2">By Caley Ramsay and Emily Mertz</p>
            </a>
          </div>
        </Grid>
      </Grid>
      <div className="col1-lastLine">
        Wild Encounters Ltd. provides advice and training services to better
        equip employees and the public in handling wildlife encounters and
        attacks. It is understood and conveyed that all wild animals are
        unpredictable and sometimes dangerous, no two encounters or attacks are
        the same, and that every individual must exercise common sense and
        discretion to appropriately respond in each situation. Wild Encounters
        Ltd. does not communicate absolutes, but rather recommendations and
        suggested guidelines based on experiences and proven strategies.
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
      <div className="footer">
        <p className="footer-line">
          Wild Encounters Ltd. | All rights Reserved 2019
        </p>
      </div>
    </div>
  );
}

export default Home;
