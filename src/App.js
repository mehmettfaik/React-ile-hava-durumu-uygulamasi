import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Weather from './components/Weather';

function App() {

  return (
    <div>
     <Weather/>
    </div>
  );
}

export default App;
