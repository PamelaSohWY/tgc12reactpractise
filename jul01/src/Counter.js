import React from 'react';

export default class Counter extends React.Component{

    //set state 
    state ={
        count: 10 
    }

    //function to add/ increase by one 
    increment =()=>{
       // if(this.state.count >= 15){} //state.count already display 15
      //  {this.state.count:15} this is not necessary
      //  else { 
     //   this.setState(
    //        {count: this.state.count+1}
   //     )}
  //  }
   if (this.state.count<15){
       this.setState({count: this.state.count+1})  }
    }// end of increment



    decrement =()=>{
       
    // evaluate first then set state 
    if (this.state.count>0) {// compare state.count with the condition 0 
       this.setState(
            {count:this.state.count-1}
        ) }//end of if 
    }//end of decrement


    changeColour =(c)=>{    //need to put in variable , reger to line 54, then will show c=this.state.count
         if (c%2==0){
            return "blue"  
         } else {
             return "red"
         }
     }

     // function() no need arguement if there are global variables


    //to display
    render() {
        return(
        <React.Fragment>
            <div style ={{  //after 2 curly brace it is in JS //first blue indicate JS //2nd curly Object (key-value pair) //1 objevct 4 keys
                border:"2 px solid black",
                padding:"10px",
                width:"20px",
                color: this.changeColour(this.state.count) //call function, put in state count as arguement
           
           //line 54 is calling a function there require a variable
           
           
           }}  >            <h1>
            {this.state.count}</h1>

            <button onClick={this.increment}>+1</button> 
            <button onClick={this.decrement}>-1</button>

            </div>
        </React.Fragment>
        )
//line 62 is assigning function 

    } //end of render
}// end of class counter 



//Note : make sure that file name is capital 
// if else is not understood in render, bec its html. 
//So JS should be put into the function instead 