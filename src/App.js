import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import CloseCombat from "./components/blog/close-combat";
import ThoughtsOnR from "./components/blog/thoughts-on-r";
import Proprioception from "./components/blog/proprioception";

import { BACKGROUND_SKY, TEXT_DARK_SKY } from "./theme/theme";
import VisualRealism from "./components/blog/visual-realism";

const App = () => (
  <Router>
    <div
      className={`${BACKGROUND_SKY} ${TEXT_DARK_SKY} font-mono min-h-screen`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<CloseCombat />} />
        <Route path="/blog/2" element={<ThoughtsOnR />} />
        <Route path="/blog/3" element={<Proprioception />} />
        <Route path="/blog/4" element={<VisualRealism />} />
      </Routes>
    </div>
  </Router>
);

export default App;
