import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Link} from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/account'><button>Account</button></Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/about/contact'>Contact</Link></li>
        </ul>

        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
