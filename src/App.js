import React from 'react'

import './App.scss';
import {Navbar} from './components';
import {Home} from './container';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App