import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function Home() {
  return (
    <div>
      <div id="main">
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
              {" "}
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
      <div className="homepic2-3">
      <img className="homepic2" src="/images/homepic2.png" alt="" />
      <img className="homepic3" src="/images/homepic3.png" alt="" />
      </div>

<div className="read-onlytext">
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="u-text">
        
        <TextField
          defaultValue="Professional Services"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
         <TextField
          defaultValue="News"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
      </div>
    </Box>
    </div>
      <div>
      <img className="homepic3" src="/images/homepic4.png" alt="" />

      </div>

    </div>
  );
}

export default Home;
