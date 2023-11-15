import React, { useState } from "react";
import './Home.css'
import Banner from "../Banner/Banner";
import Materials from "../../Materials/Materials";
import GooogleMap from "../GoogleMap/GoogleMap";
import Mesenger from "../../Shared/Mesenger/Mesenger";
import Cart from "../Cart/Cart";
import Counter from "../Counter/Counter";
import Select from "../SelectUs/Select";
import Projects from "../OurProjects/Projects/Projects";
interface PropTypes {}

const Home: React.FC<PropTypes> = () => {
  return (
    <div className="home">
      <Banner />
      <Cart />
      <Select />
      <Projects />
      <Materials />
      <Counter />
      {/* <GooogleMap /> */}
      <Mesenger/>
    </div>
  );
};

export default Home;
