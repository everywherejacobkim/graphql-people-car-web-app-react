import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import UpdatePersonPage from './pages/UpdatePersonPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/people/:personId" element={<Detail />} />
          <Route path="/people/edit" element={<UpdatePersonPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
