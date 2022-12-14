import Slider from '../components/Slider'
import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
    </div>
  );
};

export default Home;
