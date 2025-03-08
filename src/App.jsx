import { useState } from 'react'
import './App.css'
import CardSet from './components/CardSet';

function App() {

  return (
    <div>
      <div className='header'>
        <h2>Test your cat knowlege hehe</h2>
      </div>
      <div><CardSet/></div>
    </div>
  );
}

export default App;
