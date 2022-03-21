import React from 'react';
import Header from "./components/Header/Header";
import './index.scss'
import Offer from "./components/Offer";
import Footer from "./components/Footer";



function App() {
  return (
      <div className="App">
          <Header/>
          <Offer/>
          <Footer/>
      </div>
  );
}

export default App;
