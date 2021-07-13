
import './App.css';
import ProductContext from "./ProductContext";
import React from 'react';
import ProductListing from './ProductListing';
import AddProduct from './AddProduct';

class App extends React.Component {

  state = {
    products: [
      {
        id: 1,
        product_name: "ACME Anvils",
        cost: 9.99
      },
      {
        id: 2,
        product_name: "ACME Hammers",
        cost: 19.99
      },
      {
        id: 3,
        product_name: "ACME Screwdrivers",
        cost: 29.99
      }
    ]
  }
  // Use context api to share props
  
  render() {
    // create an object and it is declared within render function. Name is arbitrary
    const context = {
      // make sure it is an arrow function
         products: () => { 
             return this.state.products
         },
         addProduct: (productName, cost) => {
          let id = Math.floor(Math.random() * 10000 + 99999);
          this.setState({
            'products': [ ...this.state.products, {
              'id': id,
              'product_name': productName,
              'cost': cost
            }]
          })
        }
     }
 
    return (
      // 
      <ProductContext.Provider value={context}>
         <div className="App">
        <ProductListing/>
        <AddProduct/>
         </div>
      </ProductContext.Provider>
       )
   }//end of render
    
  
}//end of component
export default App;
