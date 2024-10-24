import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../index.css';
const Home = () => {
  return (
    <div>
      <center>
        <Navbar />
        <h1>ยินดีต้อนรับคนเท่</h1>
        <Footer/>
      </center>
    </div>
  );
};

export default Home;
