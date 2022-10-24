import React from "react";
import Title from "./components/layout/Title";
import './App.css';
import PersonForm from './components/form/PersonForm';
import PersonCard from "./components/cards/PersonCard";


function App() {
  return (
    <div className="App">
      <Title />
      <PersonForm />
      <PersonCard />
    </div>
  );
}

export default App;
