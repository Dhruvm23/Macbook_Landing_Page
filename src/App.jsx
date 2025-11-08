import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </div>
  );
};

export default App;
