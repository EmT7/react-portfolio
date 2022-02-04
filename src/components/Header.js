import React, { Component } from "react";
import { Route, HashRouter , Routes} from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from './Contact';
import Resume from './Resume';


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <hr/>
          <Navigation />
          <hr/>
        </header>

        <div className="content">
          <Routes>
            <Route exact path="/" element={ <About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div> 
      </HashRouter>
     
    );
  }
}


export default Header;
