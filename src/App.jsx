//import React from "react";
import { useState } from "react";
import About from "./components/about/about";
import Campus from "./components/campus/campus";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Programs from "./components/programs/programs";
import Testimonials from "./components/testimonials/testimonials";
import Title from "./components/title/title";
import VideoPlayer from "./components/video-player/video-player";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle="Our PROGRAM" title="What We Offer"></Title>
        <Programs></Programs>
        <About setPlayState={setPlayState}></About>
        <Title subtitle="Gallery" title="Campus Photos"></Title>
        <Campus></Campus>
        <Title subtitle="TESTIMONIALS" title="What Student Says"></Title>
        <Testimonials></Testimonials>
        <Title subtitle="Contact Us" title="Get in Touch"></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </div>
  );
};

export default App;
