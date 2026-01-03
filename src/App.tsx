import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Countries from "./pages/Countries";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ui/ScrollToTop";



function App() {
  

  return (
    <Router>
      <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/paises" element={<Countries />} />
              <Route path="/contato" element={<Contact />} />
              
            </Routes>
          </main>
        <Footer />
        </div>
      </Router>
  )
}

export default App
