import React from 'react' 

import Navbar from './Navbar';
import Title from './Title';
import About from './About';
import Shop from './Shop';
import Creative from './Creative';
import Contact from './Contact';
import Footer from './Footer';

import '../App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title/>
      <About/>
      <Shop/>
      <Creative/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
