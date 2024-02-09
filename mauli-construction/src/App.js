import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Customers from "./components/Customers";
import Packages from "./components/Packages";
import Projects from "./components/Projects";

function App() {
  return (
    <div class="container" style={{ backgroundColor: "#E6D0DE",fontFamily:"system-ui" }}>
      <Router>
        <Header />
        <Menu />

        <Routes>
          <Route path='/' Component={AboutUs} />
          <Route path='/packages' Component={Packages} />
          <Route path='/projects' Component={Projects} />
          <Route path='/customer' Component={Customers} />
          <Route path='/contact' Component={ContactUs} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
