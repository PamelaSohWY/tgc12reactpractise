
import './App.css';
import Counter from './Counter.js';
import React from 'react';
import ShippingForm from './ShippingForm.js';

function App() {
  return (
    <React.Fragment>
     <Counter/>
     {/* <h1>test</h1> // to test app js is working  */}
     <ShippingForm/>
    </React.Fragment>
  );
}

export default App;
