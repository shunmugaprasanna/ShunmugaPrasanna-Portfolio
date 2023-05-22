import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Aboutme from "./Pages/Aboutme";
import Hero from "./Pages/Hero";
import Project from "./Pages/Projects";
import { HeroIcon } from "./assets/Images";

const App = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Header />
      <Hero />
      <Project />
      <Aboutme />
      <Footer />
    </div>
  );
};

export default App;
