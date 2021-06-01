import React from "react";
//const React = required('react') // react refer react in node modules
import star from "./redstar.png"
import "./App.css"

function App(){
return (
//there can only be one parent 
 //javascrip expression, javascript object
<div>
 
  <React.Fragment>
  <p>Hello World </p>
  <p>Another Hello</p>
  <AlertBox></AlertBox>
  <img src={require('./MRT1.png').default}/>
  <img src ={star}/>
  </React.Fragment>

</div>
);
}
//React Fragment - will not show up in inspect
//so will use that from now 

//Create alert box component to create alert message

function AlertBox(){
return (
  <React.Fragment>
    <div>
      Danger! Danger! Will Robinson
      </div>
  </React.Fragment>
)} //end alertbox

export default App;