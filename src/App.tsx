import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Aboutme from "./Pages/Aboutme";
import Hero from "./Pages/Hero";
import Project from "./Pages/Projects";
import Skills from "./Pages/Skills";

const App = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Header />
      <Hero />
      <Aboutme />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
