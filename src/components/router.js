import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./home";
import Team from "./team";
import Service from "./service";
import Contact from "./contact";


function RouterConfig() {
    return (
        <div>
      <Router>
    
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Our-Team" element={<Team/>}></Route>
            <Route exact path="/Services" element={<Service/>}></Route>
            <Route exact path="/Contact-Us" element={<Contact/>}></Route>
        </Routes>
        
      </Router>

      </div>
    );
  }
  
  export default RouterConfig;
