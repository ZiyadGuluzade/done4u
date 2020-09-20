import React from 'react';
import './App.css';

// import components
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import Service from './components/services/Service';
import Contacts from './components/contacts/Contacts';
import Info from './components/info/Info';

console.log(process.env.REACT_APP_GOOGLE_API_KEY);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Info />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
