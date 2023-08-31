import React from 'react';
import Header from './Pages/Header/Header';
import Hero from './Pages/Hero/Hero';
import TextRep from './Components/TextRep';
import { text1 } from './Constants';

const App = () => {
  return (
    <div >
          <Header />       
          <Hero />
          <TextRep {...text1} />
    </div>
  )
}

export default App
