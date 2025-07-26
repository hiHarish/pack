// pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Servicehome from "../components/Servicehome";
import Features from "../components/Features";
import Appointment from "../components/Appointment";
import Doctor from "../components/Doctor";
import Review from "../components/Review";
import Blog from "./Blog";
import MapSection from "../components/MapSection";

const Home = () => (
  <>
    <Hero />
    <Servicehome />
    <Features />
    <Appointment />
    <Doctor />
    <Review />
    <Blog />
    <MapSection />
  </>
);

export default Home;
