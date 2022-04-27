import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./components/Country";
import CountryDetails from "./components/CountryDetails";
import CapitalDetails from "./components/CapitalDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Country />}></Route>
          <Route
            path="/country/:countryName"
            element={<CountryDetails />}
          ></Route>
          <Route
            path="/country/capital/:capitalName"
            element={<CapitalDetails />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
