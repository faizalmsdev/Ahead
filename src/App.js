import React from 'react';
import Header from './Pages/Header/Header';
import Hero from './Pages/Hero/Hero';
import TextRep from './Components/TextRep';
import { text1 } from './Constants';
import Cards from './Pages/Card/Cards';

const App = () => {
  return (
    <div >
          <Header />       
          <Hero />
          <TextRep {...text1} />
          <Cards />
    </div>
  )
}

export default App
