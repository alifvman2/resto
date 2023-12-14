import React from 'react';
import Header from './components/Header';
import Cashier from './components/Cashier';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
          <Header />
          <div className='container'>
            <div className='row'>
              <Cashier />
            </div>
          </div>
        </div>
    );
}

export default App;
