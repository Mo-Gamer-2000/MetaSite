import React, { Children } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main home route. */}
          <Route index path="/" element={<HomePage />} />
          <Route path="/login" element={Children} />
          <Route path="/register" element={Children} />
          <Route path="/profile" element={Children} />
          <Route path="/" element={Children} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
