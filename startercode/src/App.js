import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AirportInfo from './components/AirportInfo';

function App() {
  return (
    <div className="App">
      <Header title="Budget Bookings"></Header>
      <AirportInfo></AirportInfo>
      <Footer title="Travel for less with Budget Bookings!"></Footer>
    </div>
  );
}

export default App;
