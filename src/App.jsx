import "./app.scss"
import GettingResume from "./components/gettingResume/GettingResume";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>
      <section id="About">
        Services
        <GettingResume/>
      </section>
      <section id="Portfolio">Porfolio</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
