import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Product from "./Views/Product";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/products/:id" element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
