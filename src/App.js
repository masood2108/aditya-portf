import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Clients from "./components/Clients";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f1f0eb]">
      <Navbar />

      <main>
        <Hero />
        <Work />
        <Clients />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;