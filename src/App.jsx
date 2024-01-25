import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>
      <section id="Services">
        Services
      </section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
