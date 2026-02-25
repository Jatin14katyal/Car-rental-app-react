import React from 'react'
import Hero from './Hero'
import FeaturedCars from './FeaturedCars'
import VideoSection from './VideoSection'
import Features from './Features'
import Footer from './Footer'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);
  return <>
  <Hero/>
  <FeaturedCars/>
  <VideoSection/>
  <Features />
  <Footer />
  </>
}

export default Home
