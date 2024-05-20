import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Blog />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
