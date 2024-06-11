import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from './components/Footer';
import Faq from './components/Faq';
import CarLoanCalculator from './components/CarLoanCalculator';
//import MainContent from './MainContent';
import Header from './components/Header';
import './App.css';
import Partners from './components/Partners';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="calculator-container">
      <CarLoanCalculator />
      </div>
      
      <Partners />
      <Faq />
      <Footer />

      
    </div>
  );
}

export default App;
