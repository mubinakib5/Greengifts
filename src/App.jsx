import "./App.css";
import CallToAction from "./components/CallToAction";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import GotoTop from "./components/GotoTop";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Instapost from "./components/Instapost";
import Product from "./components/Product";
import Special from "./components/Special";
import Service from "./components/Service";

function App() {
  return (
    <>
      <div id="top">
        <Header />
        <main>
          <article>
            <Hero />
            <Collection />
            <Product />
            <CallToAction />
            <Special />
            <Service />
            <Instapost />
          </article>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
        <GotoTop />
      </div>
    </>
  );
}

export default App;
