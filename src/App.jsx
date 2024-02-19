import "./app.scss"
import GettingResume from "./components/gettingResume/GettingResume";
import Hero from "./components/hero/Hero";
import LinkShorten from "./components/linkShorten/LinkShorten";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      <Navbar/>
      <section id="Homepage">
        <Hero/>
      </section>
      <section id="About">
        <GettingResume/>
      </section>
      <section id="Portfolio">
        Porfolio
        <LinkShorten/>
      </section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
