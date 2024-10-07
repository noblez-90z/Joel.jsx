import "./App.css";
import Header from "./HomeComponent/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./HomeComponent/HomePage";
import Hero from "./HomeComponent/Hero";
import About from "./HomeComponent/About";
import Contact from "./HomeComponent/Contact";
import Footer from "./HomeComponent/Footer";
import Project from "./HomeComponent/Project";
import Resume from "./HomeComponent/Resume";
import Services from "./HomeComponent/Services";
import Skill from "./HomeComponent/Skill";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes> */}
          <Header />
          <Hero />
          <About />
          {/* <Resume /> */}
          <Skill />
          <Services />
          <Project />
          <Contact />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
