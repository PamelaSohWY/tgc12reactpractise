import React from 'react';

export default class ShippingForm extends React.Component{
     state ={
         email:"", //primitive datatypes = interger, strings, booleans (mutable)
         shipping:"", //only choose one so radio button
         options:[] //remember this is an array (immutable) - check box //needs to be same as the name in the option check box
     } //end of state 

    //General update form field function 
    updateFormField = (event) => {
        this.setState({
            [event.target.name]:event.target.value //why is this in square bracket? // take it literally
        })
    }

    checkBox= (event)=>{
        let currentValues = this.state[event.target.name] //why name and not value? //calling the group and not individual
        let modifiedValues;
  // create and if else function to complare if the curent values match the values being chosen in the 
        if (!currentValues.includes(event.target.value)){ //Current values excludes event.target.value(the option which is chosen) 
            //includes is a function 
            modifiedValues =[...currentValues, event.target.value] //spread current values add event.target.value
        } else 
        modifiedValues = currentValues.filter(
            (element)=>{ //element is arbitrary variable //on its own this function iterated through each item , so when console log it will only display each item
            return element !== event.target.value;
            //go throught every element or x variable in current value, compare with event.target.value. 
            //if the same as event.target.value then dont return 
            //if not the same as event.target.value then return into new array (modified values

            } )// filter only wors in array // filter is function and so within functio there can be another function 
                          // just running through and arrays  //filter and call function -just iterating each item in an arra 
                          // filter means do not want it 

        
        this.setState({
              [event.target.name]: modifiedValues
        })
        
     

    }//end of checkbox function
       

    render(){
        return(
       <React.Fragment>
        <div>
        <label>Email</label>
        <input name="email" type="text" value={this.state.name}
        onChange={this.updateFormField}
        />
        </div> 
        <div>
        <label>Shipping Type</label>
        <div>
        <input type="radio" name ="shipping" value="standard" checked={this.state.shipping==="standard" } onChange={this.updateFormField}/>Standard Shipping
        <input type="radio" name="shipping" value="fast" checked={this.state.shipping==="fast"} onChange={this.updateFormField}/>Fast Shipping
        </div>
        </div>
        <div>
        <label>Options</label>
        <div>
        <input type="checkbox" name="options" value="Wrap the Shipment" onChange= {this.checkBox} checked={this.state.options.includes('Wrap the Shipment')}/>Wrap the Shipment 
        </div>
        <div>
        <input type="checkbox" name="options" value="Remove Pricing Label" onChange= {this.checkBox} checked={this.state.options.includes('remove')}/>Remove Pricing Label 
        </div>
        <div>
        <input type="checkbox" name="options" value="Add Greeting Card" onChange= {this.checkBox} checked={this.state.options.includes('add')}/>Add Greeting Card
        </div>
        </div>
        
        <button>Submit</button>

        <div> 
        <h3>Your Response is Registered</h3>
        <div>{this.state.email}</div> 
        <div>{this.state.shipping}</div>
        <div>{this.state.options}</div>
        </div>

       </React.Fragment> 
        )//end of return
    }//end of render

}//end of class component