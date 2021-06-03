import React from 'react';
import './styles.css';
import Alert from './Alert.js';
import NumberBox from './NumberBox.js';
import AlertBox from "./AlertBox";
import Fruit from "./Fruit";
import Counter from "./Counter";

function sayGoodbye() {
  return "Goodbye"
}

function displayHeader() {
  return (
      <h2>About Me</h2>
  )
}

function ImageFrame() {
  return (
      <img src={require('./redstar.png').default} alt="Cute puppy"/>
  )
}
//need to add .default to refer to the src folder 

function DisplayMessage(props) {
  return (
    <div>{props.whatever_message}</div>
  )
}

function App() {
  return (
    <React.Fragment>
          <h1>Hello World</h1>
          <p style={{backgroundColor:'yellow'}}>Welcome to our first React App</p>
          <img src={require('./MRT1.png').default}/>
          <p>{sayGoodbye()}</p>
          {displayHeader()}
          <ImageFrame/>
          <DisplayMessage whatever_message="Hello there"/>
          <Alert message="danger danger will robinson!"/>
          <NumberBox/>
          <AlertBox message="test1"/>
          <AlertBox message="Goodbye and thanks for all the fish!"/>
      <AlertBox message="Hello from the other side"/>
      <NumberBox initialValue={15}/>
      <Fruit/>
      <Counter/>

      </React.Fragment>

  );
}


export default App;

