import "./app.scss"
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <section>
        <Navbar/>
      </section>
      <section>
        Parallax
      </section>
      <section>Services</section>
      <section>Portfolio</section>
      <section>Contact</section>
    </div>
  );
}

export default App;
