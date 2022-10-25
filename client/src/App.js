import React from "react";
import Title from "./components/layout/Title";
import './App.css';
import PersonForm from './components/form/PersonForm';
import PersonCard from "./components/cards/PersonCard";
import CarForm from "./components/form/CarForm";


function App() {
  return (
    <div className="App">
      <Title />
      <div style={{ display: 'flex', gap: 40 }}>
        <PersonForm />
        <CarForm />
      </div>
      <PersonCard />
    </div>
  );
}

export default App;
