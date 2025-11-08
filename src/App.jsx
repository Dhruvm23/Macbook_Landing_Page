import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import ProductViewer from "./components/ProductViewer";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductViewer />
    </div>
  );
};

export default App;
