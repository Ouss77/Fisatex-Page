import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "./Pages/Main";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Testimonial from "./Pages/Testimonial"
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router> {/* Wrap your Routes in a Router component */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
