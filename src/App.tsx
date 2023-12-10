import React from "react";
import List from "./components/List";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/list"
            element={
              <List
                items={["Black", "Green", "Yellow"]}
                handleClick={(value) => {
                  console.log(value);
                }}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
