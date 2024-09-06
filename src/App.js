import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Freds from "./pages/Freds";
import Wallet from "./pages/Wallet";

const App = () => {
  return (
    <Router>
      <div className="zapchain__bakground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/frends" element={<Freds />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
