import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import HomeBanner from "./Components/HomeBanner/HomeBanner.jsx";
import About from "./Components/About/About.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <br></br>
      <About />
      <br></br>
      <Footer />
    </>
  );
}

export default App;
