import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Project from "./Project";
import Resume from "./Resume";
import Services from "./Services";
import Skill from "./Skill";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      {/* <Resume /> */}
      <Skill />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
