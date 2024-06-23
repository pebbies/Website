import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App = () => (
  <Router>
    <div className="bg-black text-white min-h-screen">
      <div className="flex flex-row p-4">
        <a className="mx-2" href="/">Home</a>
        <a className="mx-2" href="/blog">Blog</a>
        <a className="mx-2" href="/contact">Contact</a>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
