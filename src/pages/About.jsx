import React from "react";
import Navbar from "../components/Navbar";
import '../index.css';
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <center>
        <Navbar />
        <h1>About Me</h1>
        <p>นายนัฐพงษ์ สุดเท่</p>
        <p>อายุ 19</p>
        <p>เพศ ชายสุดเท่</p>
      </center>
      <Footer/>
    </div>
  );
};

export default About;
