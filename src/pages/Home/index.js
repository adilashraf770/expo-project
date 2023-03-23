import React from "react";
import HeroSection from "./HeroSection";
import Home from './Home';
import Carasol from './Carasol';

export default function index() {
  return (
    <>
      <Carasol />
      <HeroSection />
      {/* <h1>Home Page</h1> */}

      <Home />
    </>
  );
}
