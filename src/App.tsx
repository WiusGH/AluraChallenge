import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContainer from './components/containers/MainContainer';

function App() {
  return (
    <div className="App">
      
      <MainContainer />
      {/* Hice el header para que vaya arriba pero me gustó más como se ve como footer */}
      <Header /> 
      {/* <Footer /> */}
    </div>
  );
}

export default App;
