import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Myworks from "./components/Myworks.jsx";
import Astrodata from "./components/Astrodata.jsx";
import Astroprize from "./components/Astroprize.jsx";
import Eco from "./components/Eco.jsx";
import Cyp from "./components/Cyp.jsx";
import Bookbeats from "./components/Bookbeats.jsx";
import Mmf from "./components/Mmf.jsx";
import Tim from "./components/Tim.jsx";
import Habi from "./components/Habi.jsx";


function App() {  
  return (
    <div className="h-screen w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Myworks />} />
          <Route path="/astrodata" element={<Astrodata />} />
          <Route path="/astroprize" element={<Astroprize />} />
          <Route path="/eco" element={<Eco />} />
          <Route path="/cyp" element={<Cyp />} />
          <Route path="/bookbeats" element={<Bookbeats />} />
          <Route path="/mmf" element={<Mmf />} />
          <Route path="/tim" element={<Tim />} />
          <Route path="/habi" element={<Habi/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
